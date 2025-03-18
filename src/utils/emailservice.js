import { SENDER_NAME, BREVO_URI} from '../Config/constants.js'
import axios from 'axios'
import confirmationMail from '../templates/index.template.js'

// npm install axios
 
const senderMail = process.env.EMAILID
const API_KEY = process.env.BREVO_API_KEY
const ConfirmationMailSent = async function(emailData){
    // receipentEmail, name, title, body, route, randomKey
    // const link = `${REDIRECTIONS.BACKEND_BASE_URL}${emailData.route}?token=${emailData.randomKey}`
    const data = {
        sender: {
            email: senderMail,
            name: SENDER_NAME
        },
        to: [{
            email: emailData?.receipentEmail,
            name: emailData?.name
        }],
        cc: [{
            email: senderMail,
            name: "SPAutomobile"
        }],
        subject: "EquiryConfirmation##SPAutomobile",
        htmlContent: confirmationMail(emailData.name, emailData.address, emailData.mobileNo, emailData.carModel,emailData.messageContent)
        
    }
 
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY
        }
    }
   
    try {
        const response = await axios.post(BREVO_URI, data, config)
        const responseData = {
            statusCode: response.status,
            message: response.statusText,
            success: true
        }
       
        return responseData
    } catch (error) {
        console.log(error)
        const errorData = {
            name: error?.name || 'UNKNOWN',
            statusCode: error?.status || error.response?.data?.code || 500,
            message: error.response?.data?.message || 'Something went wrong while sending email, please try again.',
            success: false
        }
        
        return errorData
    }
}
 
export {ConfirmationMailSent}
 
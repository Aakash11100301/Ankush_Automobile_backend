import {ConfirmationMailSent} from "../utils/emailservice.js"

const enquireForm = async(req,res)=> {
try {
    const {name,carModel,email,mobileNo, address} = req.body
    if (!name||!carModel||!email||!mobileNo||!address) {
        const data = {
            StatusCode: "422",
            Message: "All Details need to be filed"
        }
        return res
            .status(422)
            .json(data)
    }
    else {
        const data = {
            receipentEmail:email,
            name, 
            address, 
            mobileNo, 
            carModel,
            messageContent :"Thanks for querying on SP automobile, our team will shortly reach to brief you about services and booking  "
        } 
        // console.log(data) 
        const mailres = await ConfirmationMailSent (data)
        // console.log(mailres)
        return res.status(200).json(mailres)
    }        
} 
    catch (error) {
    console.log (error)    
}
}
const keepAlive = async(req, res) => {
    const SEQ_NUM = req.params?.sequenceId
    console.log(`[${new Date().toISOString()}] Heart_Beat_REQ-[${SEQ_NUM}]: RECEIVED`)
 
    if (!SEQ_NUM){
        console.log(`[${new Date().toISOString()}] Heart_Beat_RES-[]: SENT OK`)
        return res
            .status(400)
            .json(new ApiResponse(400, {status: 'OK'}, 'SEQ_NUM is missing'))
    }
    const data1 = {
        status: "200",
        message: "keepAlive"

    }
    console.log(`[${new Date().toISOString()}] Heart_Beat_RES-[${SEQ_NUM}]: SENT OK`)    
    return res
        .status(200)
        .json(data1)
}


export {enquireForm,keepAlive}
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
export {enquireForm}
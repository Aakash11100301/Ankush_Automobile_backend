import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import twilio from 'twilio';


const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const SMSService = async (name, mobileNo, message) => {
    try {
        // const { name, mobileNo, message } = req.body;
        const ownerNumber = 'whatsapp:+919535144580'; // Owner's WhatsApp Number

        const msg = await client.messages.create({
            from: 'whatsapp:+14155238886', // Twilio Sandbox Number
            to: ownerNumber,
            body: `New Inquiry! 🚗\nName: ${name}\nPhone: ${mobileNo}\nMessage: ${message}`
        });

        return msg
    } catch (error) {
        console.log(error);
        return false
    
    }
};
export default SMSService


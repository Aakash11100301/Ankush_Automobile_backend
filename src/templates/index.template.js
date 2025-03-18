const confirmationMail = (name, address, mobileNo, carModel, messageContent) => {
    return `
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f9f9f9;
                            color: #333;
                            padding: 20px;
                            margin: 0;
                        }
                        .container {
                            max-width: 600px;
                            margin: 20px auto;
                            background: #ffffff;
                            border-radius: 10px;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                            padding: 20px;
                            text-align: center;
                        }
                        h2 {
                            color: #d32f2f;
                        }
                        p {
                            line-height: 1.6;
                            font-size: 16px;
                        }
                        .details {
                            text-align: left;
                            margin-top: 20px;
                            padding: 15px;
                            background: #f5f5f5;
                            border-radius: 5px;
                        }
                        .details p {
                            margin: 5px 0;
                        }
                        .footer {
                            margin-top: 20px;
                            font-size: 14px;
                            color: #777;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h2>New Enquiry Submitted</h2>
                        <p>Dear ${name}, a new enquiry has been submitted with the following details:</p>
                        
                        <div class="details">
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Address:</strong> ${address}</p>
                            <p><strong>Mobile Number:</strong> ${mobileNo}</p>
                            <p><strong>Car Model:</strong> ${carModel}</p>
                            <p><strong>Message:</strong> ${messageContent}</p>
                        </div>

                        <div class="footer">
                            <p>This is an automated email, please do not reply.</p>
                        </div>
                    </div>
                </body>
            </html>
        `;
};

export default confirmationMail;

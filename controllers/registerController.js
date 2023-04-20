// import colors from "colors";
// named export
import { hashPassword } from "../helpers/authHelpers.js";
import Users from "../models/users.js";

export const registerController = async (req, res, next) => {
    // console.log("Register route hitted!".bgBlue.yellow);
    try {
        const { name, username, email, phone, password, address, role } = req.body;

        // let formErrors = [];
        let formErrors = {};

        // Form Validation
        if (!name) {
            // formErrors.push({nameError: "Name is required!"})
            formErrors.nameError = "Name is required!"
            return res.send({
                success: false,
                message: "Form validation error!",
                error: formErrors
            })
        }
        if (!username) {
            formErrors.usernameError = "Username is required!"
            return res.send({
                success: false,
                message: "Form validation error!",
                error: formErrors
            })
        }
        if (!email) {
            formErrors.emailError = "Email is required!"
            return res.send({
                success: false,
                message: "Form validation error!",
                error: formErrors
            })
        }
        if (!phone) {
            formErrors.phoneError = "Phone is required!"
            return res.send({
                success: false,
                message: "Form validation error!",
                error: formErrors
            })
        }
        if (!address) {
            formErrors.addressError = "Address is required!"
            return res.send({
                success: false,
                message: "Form validation error!",
                error: formErrors
            })
        }

        // Existing Username Check
        // const checkUsername = await Users.findOne({username:username})
        const checkUsername = await Users.findOne({ username })
        if (checkUsername) {
            return res.status(500).send({
                success: false,
                message: "Username is already taken!"
            })
        }

        // Existing Email Check
        // const checkUsername = await Users.findOne({email:email})
        const checkEmail = await Users.findOne({ email })
        if (checkEmail) {
            return res.status(500).send({
                success: false,
                message: "Email is already registered! You can Login."
            })
        }

        // Password Hashing
        const hashedPassword = await hashPassword(password);

        //Saving user to db

        /*         
        const user = new Users(
            {
                name: name,
                username: username,
                email: email,
                password: hashedPassword,
                phone: phone,
                address: address
            }
        );
        */
        const user = await new Users({ name, username, email, password: hashedPassword, phone, address });

        user.save();

        res.status(200).send({
            success: true,
            message: "User registered successfully!",
            // data: user
            user
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error occured in registration.",
            // error: error,
            error
        })
    }

};
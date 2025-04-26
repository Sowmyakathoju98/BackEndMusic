import User from '../models/User.js'; // Import the User model

export const SignInHandler = async (req, res, next) => {
    try {
        // Extract user details from the request body
        const { email, firstName, lastName, password, image, signIn } = req.body;

        // Insert the user into MongoDB
        const newUser = await User.create({
            email,
            firstName,
            lastName,
            password,
            image,
            signIn,
        });
        // newUser.save();
        // Respond with success
        res.status(201).send({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to create user' });
    }
};

export { SignInHandler }

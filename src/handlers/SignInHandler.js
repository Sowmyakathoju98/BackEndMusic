import User from '../models/User.js'; // Import the User model
import { signIn } from '../controllers/SignInMongoController.js'; // Import the signIn function

const SignInHandler = async (req, res, next) => {
    try {
        // Check if the user exists
        const user = await User.findOne({ email: req.body.email });

        if (user) {
            // User exists, return success response
            return res.status(200).json({ message: 'Sign in successful', user });
        } else {
            // User does not exist, call the signIn function to create a new user
            await signIn(req, res, next);
        }
    } catch (error) {
        console.error('Error in SignInHandler:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default SignInHandler;

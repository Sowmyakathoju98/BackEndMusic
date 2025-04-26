import User from '../models/User.js'; // Import the User model

const LoginController = async (req, res, next) => {
    try {
        // Check if the user exists
        const user = await User.findOne({ email: req.body.email });

        if (user) {
            if (req.body.email === user.email && req.body.password === user.password) {
                // Email and password match
                return res.status(200).json({ message: 'Sign in successful', user });
            } else if (req.body.email === user.email && req.body.password !== user.password) {
                // Email matches but password does not
                return res.status(401).json({ message: 'Incorrect password. Please try again.' });
            }
        } else {
            // User does not exist
            return res.status(404).json({
                message: 'User not found. Please create a new account or sign up with Google.',
            });
        }
    } catch (error) {
        console.error('Error in LoginController:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default LoginController;
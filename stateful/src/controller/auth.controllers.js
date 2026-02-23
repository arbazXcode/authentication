import { User } from "../models/User.model.js"
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            //use express validator
        }

        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        })

        const user = new User({ username, email, password });
        await user.save();

        req.session.userId = user._id;

        res.status(201).json({
            message: "user registered successfully",
            user: user.toJSON()
        })

    } catch (error) {

    }
}

export const login = async (req, res) => { }

export const logout = async (req, res) => { }

export const getCurrentUser = async (req, res) => { }
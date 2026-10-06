import jwt from 'jsonwebtoken';
import { findOne } from '../../DB/db.service.js';
import userModel from '../../DB/models/user.model.js';


export const authentication = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        throw new Error('token not exists', { cause: 401 });
    }
    const decoded = jwt.verify(authorization, 'fam1');

    if (!decoded?.userId) {
        throw new Error('token not valid', { cause: 401 });
    }

    const user = await findOne({ model: userModel, filter: { _id: decoded.userId } });

    if (!user) {
        throw new Error('user not found', { cause: 401 });
    }

    req.user = user;
    next();
    
};
 
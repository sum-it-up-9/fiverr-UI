import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  console.log('hit',req.cookies.accessToken);
  const token = req.cookies.accessToken;
  if (!token) return next(createError(401,"You are not authenticated!"))


  jwt.verify(token, '123asfavsdfgsfg', async (err, payload) => {
    if (err) return next(createError(403,"Token is not valid!"))
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next()
  });
};

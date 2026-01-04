import jwt from "jsonwebtoken";

export const AuthMiddleware = (req, res, next) => {
const authHeader = req.headers.authorization;
//check if Header exist and start with Bearer
if(!authHeader){
  return res.status(401).json({message: "Authorization Header missing"});
}
//extract token
const token = authHeader.split(" ")[1];
if(!token){
  return res.status(401).json({message: "Token missing"});

}
//verify token
try{
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next(); //allow access
}catch(error){
return res.status(401).json({message: "Invalid token"});
}
};
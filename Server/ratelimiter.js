 const setratelimiter = require("express-rate-limit");

const rateLimitMiddleware = setratelimiter({
    windowMs: 60 * 1000,
    max: 5,
    message: "You have exceeded your 5 requests per minute limit.",
    headers: true,
  });


   module.exports=rateLimitMiddleware
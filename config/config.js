const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
'mongodb+srv://admin123:admin123@cluster0.sa6gwwx.mongodb.net/test',
  stripe_connect_test_client_id: 'YOUR_stripe_connect_test_client',
  stripe_test_secret_key: 'YOUR_stripe_test_secret_key',
  stripe_test_api_key: 'YOUR_stripe_test_api_key' 
}

export default config

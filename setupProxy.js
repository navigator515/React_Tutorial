const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use("/api/customers", createProxyMiddleware({ target: "http://15.165.108.107:5000", changeOrigin: true}));
};

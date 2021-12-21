const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(
		'/wopi',
		createProxyMiddleware({
			target: 'http://wopi:3001',
			changeOrigin: true,
		})
	);
};

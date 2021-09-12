const prodConfig = require('./config.prod');
const devConfig = require('./config.dev');

// 公共配置
const baseConfig = {
  port: process.env.PORT || 3000,
  base_url: '/api', // 请求前缀
};

const isProd = process.env.NODE_ENV === 'production';

const curConfig = isProd ? prodConfig : devConfig;

module.exports = Object.assign({}, baseConfig, curConfig);
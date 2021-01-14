// eslint-disable-next-line @typescript-eslint/no-var-requires
const nrwlPlugin = require("@nrwl/react/plugins/webpack");

module.exports = (config, context) => {
  nrwlPlugin(config)
  return {
    ...config,
    target: 'electron-renderer'
  }
};
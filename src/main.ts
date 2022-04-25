import { clearCache } from './helpers';

module.exports.loop = function () {
  // eslint-disable-next-line no-console
  console.log('TEST');
  clearCache();
};

'use strict';

/**
 * asset-log service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::asset-log.asset-log');

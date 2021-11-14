const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.category.findOne({ slug });
    //return 'hello world!';
    //return sanitizeEntity(entity, { model: strapi.models.category });
    return entity;
  },
};

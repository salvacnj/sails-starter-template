module.exports = {


  friendlyName: 'Admin model',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const model = this.req.param('model');
    const total = await sails.models[model].count()
    const all = await sails.models[model].find({
      limit: 25
    })

    return this.res.view('partials/table', {
      all,
      attributes: sails.models[model].attributes,
      model,
      total
    })
  }
};

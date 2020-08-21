module.exports = {


  friendlyName: 'Admin model',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const model = this.req.param('model');
    //console.log(sails.models.user.count());


    const total = await Article.count()
    const all = await Article.find({
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

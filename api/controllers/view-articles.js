module.exports = {


  friendlyName: 'View articles',


  description: 'Display "Articles" page.',


  exits: {

    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/articles'
    }

  },

  fn: async function () {

    const model = 'article'
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

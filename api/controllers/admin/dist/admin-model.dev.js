"use strict";

module.exports = {
  friendlyName: 'Admin model',
  description: '',
  inputs: {},
  exits: {},
  fn: function fn(inputs) {
    var model, total, all;
    return regeneratorRuntime.async(function fn$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            model = this.req.param('model');
            _context.next = 3;
            return regeneratorRuntime.awrap(sails.models[model].count());

          case 3:
            total = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(sails.models[model].find({
              limit: 25
            }));

          case 6:
            all = _context.sent;
            return _context.abrupt("return", this.res.view('partials/table', {
              all: all,
              attributes: sails.models[model].attributes,
              model: model,
              total: total
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  }
};
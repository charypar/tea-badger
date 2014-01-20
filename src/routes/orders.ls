

module.exports = do

  index: (req, res, next) ->
    res.render('orders/index');

  new: (req, res, next) ->
    res.render('orders/new');

  create: (req, res, next) ->
    void

  update: (req, res, next) ->
    void
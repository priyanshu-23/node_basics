exports.names = (req, res) => {
    let name = req.params.name;
    res.render('name',{name: name});
}

exports.arr = (req, res) => {
    res.render('arr', {
      users: ['first','second','third']
    });
  }
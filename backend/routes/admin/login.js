var express = require('express');
var router = express.Router();
var usuariosModels = require('../../models/usuariosModel')

/* disenio del login page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});
// cierre del login */

/* disenio del logout page. */
router.get('/logout', function (req, res, next) {
  req.session.destroy(); // destruir variable de session id y usuario
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});
// cierre del logout */



router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModels.geyUserByUsernameAndPassword(usuario, password);


    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;

      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error)
  }

});

module.exports = router;

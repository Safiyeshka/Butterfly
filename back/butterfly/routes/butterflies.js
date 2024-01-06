var express = require('express');
var router = express.Router();
var async = require("async");
var Butterfly = require("../models/butterfly").Butterfly


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с butterflies');
// });

    
/* Страница героев */
router.get("/:nick", async (req, res, next) => {
  try {
    const butterfly = await Butterfly.findOne({ nick: req.params.nick });
    console.log(butterfly);
    if (!butterfly) {
      throw new Error("Нет такой бабочки");
    }
    res.render('butterfly', {
      title: butterfly.title,
      picture: butterfly.avatar,
      desc: butterfly.desc
    });
  } catch (err) {
    next(err);
  }
});

// router.get('/:nick', async function(req, res, next) {
//   try {
//     const [butterfly, butterflies] = await Promise.all([
//       Butterfly.findOne({ nick: req.params.nick }),
//       Butterfly.find({}, { _id: 0, title: 1, nick: 1 })
//     ]);

//     if (!butterfly) {
//       throw new Error("Нет такой бабочки");
//     }
    
//     renderSpace(res, butterfly.title, butterfly.avatar, butterfly.desc, butterflies);
//   } catch (err) {
//     next(err);
//   }
// });

// function renderButterfly(res, title, picture, desc, butterflies) {
//   console.log(butterflies);

//   res.render('butterfly', {
//     title: title,
//     picture: picture,
//     desc: desc,
//     menu: butterflies
//   });
// }

module.exports = router;

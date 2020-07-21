var express = require('express');
var router = express.Router();

const heroes = ['SUPERMAN', 'THOR', 'ROBIN', 'IRONMAN', 'GHOSTRIDER', 'CAPTAINAMERICA', 'FLASH',
    'WOLVERINE', 'BATMAN', 'HULK', 'BLADE', 'PHANTOM', 'SPIDERMAN', 'BLACKWIDOW', 'HELLBOY', 'PUNISHER'];

const pattern = [' ', '[@?.]+', '[A-C]+', '[D-F]+', '[G-I]+', '[J-L]+', '[M-O]+', '[P-S]+', '[T-V]+', '[W-Z]+']

router.get('/superhero', function (req, res, next) {
    let { code } = req.query;
    let regEx = new RegExp(code.split('').map(c => pattern[c] ? pattern[c] : '').join(''))
    if (code.length) {
        for (let i = 0; i < heroes.length; i++) {
            if (regEx.test(heroes[i]) && code.length == heroes[i].length) {
                res.send({ hero: heroes[i] });
                return;
            }
        }
    }
    res.status(500);
    res.send({ hero: 'No such hero' });
})
module.exports = router;

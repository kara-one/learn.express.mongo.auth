const Router = require('express');
const router = new Router();
const controller = require('./authController.js');
const { check } = require('express-validator');
const authMiddleware = require('./middlewares/authMiddleware.js');
const roleMiddleware = require('./middlewares/roleMiddleware.js');

router.post(
    '/registration',
    [
        check('username', 'Username must not be empty').notEmpty(),
        check('password', 'Password length from 3 to 8 letters').isLength({
            min: 3,
            max: 8,
        }),
    ],
    controller.registration,
);
router.post('/login', controller.login);
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers);

module.exports = router;

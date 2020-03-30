const router = require('express').Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("../config/keys");
let User = require('../models/user.model');

// const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

//If user found great, if not ERROR!
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Actual Commitment to Add the user's Login Info
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({username, password});
  // bcrypt.genSalt(10, (err, salt) => {
  //   bcrypt.hash(newUser.password, salt, (err, hash) => {
  //     if (err) throw err;
      // newUser.password = hash;
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    });
//   })
// });

// router.post("/login", (req, res) => {
//   // Form validationconst { errors, isValid } = validateLoginInput(req.body);// Check validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }const username = req.body.username;
//   const password = req.body.password;// Find user by email
//   User.findOne({ username }).then(user => {
//     // Check if user exists
//     if (!user) {
//       return res.status(404).json({ usernotfound: "Email not found" });
//     }// Check password
//     bcrypt.compare(password, user.password).then(isMatch => {
//       if (isMatch) {
//         // User matched
//         // Create JWT Payload
//         const payload = {
//           id: user.id,
//           username: user.username
//         };// Sign token
//         jwt.sign(
//           payload,
//           keys.secretOrKey,
//           {
//             expiresIn: 31556926 // 1 year in seconds
//           },
//           (err, token) => {
//             res.json({
//               success: true,
//               token: "Bearer " + token
//             });
//           }
//         );
//       } else {
//         return res
//           .status(400)
//           .json({ passwordincorrect: "Password incorrect" });
//       }
//     });
//   });
// });

module.exports = router;
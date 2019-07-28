const User = require('../models/user');

module.exports = {
   getUsers,
};

async function getUsers(req, res) {
   try {
      let foundUsers = [];
      let email = req.query.email;
      let classYear = req.query.classYear;
      let major = req.query.major;
      let class1 = req.query.class1;
      let class2 = req.query.class2;
      let class3 = req.query.class3;
      let class4 = req.query.class4;
      let currUser = await User.find({ email: email });
      if (classYear) {
         if (class2 && class3 && class4) {
            foundUsers = await User.find({classYear: classYear, major: major, classes: { $all: [class1, class2, class3, class4] }}).limit(10);
         } else if (class2 && class3) {
            foundUsers = await User.find({classYear: classYear, major: major, classes: { $all: [class1, class2, class3] }}).limit(10);
         } else if (class2) {
            foundUsers = await User.find({classYear: classYear, major: major, classes: { $all: [class1, class2] }}).limit(10);
         } else {
            foundUsers = await User.find({classYear: classYear, major: major, classes: { $in: class1 }}).limit(10);
         }
      } else {
         if (class2 && class3 && class4) {
            foundUsers = await User.find({major: major, classes: { $all: [class1, class2, class3, class4] }}).limit(10);
         } else if (class2 && class3) {
            foundUsers = await User.find({major: major, classes: { $all: [class1, class2, class3] }}).limit(10);
         } else if (class2) {
            foundUsers = await User.find({major: major, classes: { $all: [class1, class2] }}).limit(10);
         } else {
            foundUsers = await User.find({major: major, classes: { $in: class1 }}).limit(10);
         }
      }
      res.status(200).json({currUser: currUser, foundUsers: foundUsers});
   } catch (err) {
      return res.status(400).json(err);
   }
}


require("dotenv").config();

//auth, isSTudent, isAdmin

exports.isStudent = (req, res, next) => {
  try {
    console.log(req.user);
    if (req.user.role !== "Student") {
      return res.status(401).json({
        success: false,
        message: "You are not authorized Student⚠️",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something error occured⚠️: " + error,
    });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "You are not authorized Admin⚠️",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something error occured⚠️: " + error,
    });
  }
};

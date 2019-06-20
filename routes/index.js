const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// login page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));



// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

// Profile page
router.get('/profile', ensureAuthenticated, (req, res) => 
	res.render('profile', {
		 user: req.user
	})
	);
	
module.exports = router;

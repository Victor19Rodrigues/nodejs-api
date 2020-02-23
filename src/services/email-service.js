"use strict";
var config = require("../config");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(config.sendgridKey);

// var sendgrid = require("sendgrid")(config.sendgridKey);

exports.send = async (to, subject, body) => {
  sgMail.send({
    to: to,
    from: "hello@victor.io",
    subject: subject,
    html: body
  });
};

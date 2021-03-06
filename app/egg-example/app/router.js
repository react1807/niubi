'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/home', controller.home.index);
  router.get('/login', controller.login.index);
};

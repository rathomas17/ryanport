Router.route('/home');

Router.route('/student');
Router.route('/music');
Router.route('/dev');
Router.route('/about');


Router.route('/', function () {
  this.render('home');
});

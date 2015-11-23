Package.describe({
  name: 'meteor-jqterminal',
  version: '0.8.8',
  summary: 'Meteor package wrapper for jquery.terminal, a web browser-based terminal',
  // URL to the Git repository containing the source code for this package.
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'templating']);
  
  api.addFiles([
    'lib/jquery.terminal-0.8.8.min.js',
    'lib/jquery.terminal.css'
  ],'client');
  
  api.addFiles([
    'jqterminal.html',
    'jqterminal.js'
    ],'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteor-jqterminal');
  api.addFiles('meteor-jqterminal-tests.js');
});

Package.describe({
  name: 'meteor-jqterminal',
  version: '0.8.8',
  summary: 'Meteor package wrapper for jquery.terminal, a web browser-based terminal',
  git: 'https://github.com/davidthornton/meteor-jqterminal',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  
  api.addFiles([
    'lib/jquery.terminal-0.8.8.min.js',
    'lib/jquery.terminal.css'
  ],'client');
  
  api.addFiles('jqterminal.js','client');

  api.export('jQTerminal','client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteor-jqterminal');
  api.addFiles('meteor-jqterminal-tests.js');
});

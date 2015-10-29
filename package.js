Package.describe({
  name: 'rkstar:accounts-spotify',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'Accounts service for Spotify',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rkstar/accounts-spotify',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2')

  api.use('accounts-base')
  api.imply('accounts-base')

  api.use('accounts-oauth')
  api.use('rkstar:spotify@1.0.1')

  api.addFiles('common.js')
  api.addFiles('client.js', 'client')
  api.addFiles('server.js', 'server')
})
// lib/babel-plugin-rewire.js:100-102

var hasDefaultExport = specifiers.some(function (specifier) {
- return specifier.local.name === 'default';
+ return specifier.exported.name === 'default';
});


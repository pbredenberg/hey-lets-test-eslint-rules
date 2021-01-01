'use strict';

module.exports = {

   extends: '@silvermine/eslint-config/node',

   'overrides': [
      {
         'files': [ '*.ts' ],
         'parser': '@typescript-eslint/parser',
         'parserOptions': {
            'sourceType': 'module',
            // Disable warning banner for possibly incompatible versions of TypeScript
            'loggerFn': false,
         },
         'rules': {
            '@typescript-eslint/member-naming': 'off',
            '@typescript-eslint/camelcase': 'off',
            // Disable camelcase so we can override with our own naming convention rules.
            'camelcase': 'off',

            '@typescript-eslint/naming-convention': [
               'error',
               {
                  selector: 'default',
                  format: [ 'camelCase' ]
               },
               {
                  selector: 'variable',
                  format: [ 'camelCase', 'UPPER_CASE' ]
               },
               {
                  selector: 'parameter',
                  format: [ 'camelCase' ],
                  leadingUnderscore: 'allow'
               },
         
               {
                  selector: 'memberLike',
                  modifiers: [ 'private' ],
                  format: [ 'camelCase', 'snake_case' ],
                  leadingUnderscore: 'require'
               },
               {
                  selector: 'typeLike',
                  format: [ 'PascalCase' ]
               },
               {
                  selector: 'memberLike',
                  format: [ 'snake_case' ],
                  leadingUnderscore: 'forbid',
                  modifiers: [ 'static', 'public' ],
               },
               {
                  selector: 'memberLike',
                  format: [ 'snake_case' ],
                  modifiers: [ 'static', 'private' ],
                  leadingUnderscore: 'require'
               },
            ],
         }
      }
   ],

};

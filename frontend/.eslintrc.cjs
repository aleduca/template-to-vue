/* eslint-env node */
module.exports = {
    root: true,
    env:{
        jquery:true,
        browser:true,
        node:true
    },
    extends: ['plugin:vue/vue3-strongly-recommended', 'eslint:recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'vue/multi-word-component-names': 0,
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', ], //de acordo com sua preferência
        'comma-spacing': ['error', { before: false, after: true }],
    },
};

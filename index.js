"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wpGlobals = exports.vendorModules = exports.vendorModuleNames = exports.wpModules = exports.wpModuleNames = void 0;
const camel_case_dash = (str) => {
    return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};
const wpModuleNames = [
    'a11y',
    'annotations',
    'api-fetch',
    'autop',
    'blob',
    'block-directory',
    'block-editor',
    'block-library',
    'block-serialization-default-parser',
    'blocks',
    'components',
    'compose',
    'core-data',
    'customize-widgets',
    'data',
    'data-controls',
    'date',
    'deprecated',
    'dom',
    'dom-ready',
    'edit-post',
    'edit-site',
    'edit-widgets',
    'editor',
    'element',
    'escape-html',
    'format-library',
    'hooks',
    'html-entities',
    'i18n',
    'is-shallow-equal',
    'keyboard-shortcuts',
    'keycodes',
    'list-reusable-blocks',
    'media-utils',
    'notices',
    'nux',
    'plugins',
    'preferences',
    'preferences-persistence',
    'primitives',
    'priority-queue',
    'redux-routine',
    'reusable-blocks',
    'rich-text',
    'server-side-render',
    'shortcode',
    'style-engine',
    'token-list',
    'url',
    'viewport',
    'warning',
    'widgets',
    'wordcount',
];
exports.wpModuleNames = wpModuleNames;
const wpModules = Object.fromEntries(wpModuleNames.map(handle => [`@wordpress/${handle}`, `wp.${camel_case_dash(handle)}`]));
exports.wpModules = wpModules;
const vendorModules = {
    'jquery': 'jQuery',
    'tinymce': 'tinymce',
    'moment': 'moment',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'backbone': 'Backbone',
    'lodash': 'lodash',
};
exports.vendorModules = vendorModules;
const vendorModuleNames = Object.keys(vendorModules);
exports.vendorModuleNames = vendorModuleNames;
const wpGlobals = {
    ...vendorModules,
    ...wpModules,
};
exports.wpGlobals = wpGlobals;

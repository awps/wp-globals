# wp-globals

`wp-globals` is an npm package that provides quick access to the list of WordPress dependencies bundled in the WordPress core. This library makes it easier to reference WordPress and vendor modules by creating a mapping of module names to their corresponding global variables.

## Installation

You can install `wp-globals` using npm:

```
npm install wp-globals
```

or using yarn:

```
yarn add wp-globals
```

## Usage

To use `wp-globals` in your project, simply import the required variables from the package.

```
import {
wpModuleNames,
wpModules,
vendorModuleNames,
vendorModules,
wpGlobals,
} from 'wp-globals';
```

### Available Exports

#### `wpModuleNames`

An array of WordPress module names.

```
[
'a11y',
'annotations',
'api-fetch',
'autop',
'blob',
// ... other module names
]
```

#### `wpModules`

An object mapping WordPress module names to their corresponding global variables.

```
{
'@wordpress/a11y': 'wp.a11y',
'@wordpress/annotations': 'wp.annotations',
'@wordpress/api-fetch': 'wp.apiFetch',
// ... other mappings
}
```

#### `vendorModuleNames`

An array of vendor module names.

```
[
'jquery',
'tinymce',
'moment',
'react',
'react-dom',
'backbone',
'lodash',
]
```

#### `vendorModules`

An object mapping vendor module names to their corresponding global variables.

```
{
'jquery': 'jQuery',
'tinymce': 'tinymce',
'moment': 'moment',
'react': 'React',
'react-dom': 'ReactDOM',
'backbone': 'Backbone',
'lodash': 'lodash',
}
```

#### `wpGlobals`

A combined object of both WordPress and vendor modules.

```
{
'jquery': 'jQuery',
'tinymce': 'tinymce',
'moment': 'moment',
'react': 'React',
'react-dom': 'ReactDOM',
'backbone': 'Backbone',
'lodash': 'lodash',
'@wordpress/a11y': 'wp.a11y',
'@wordpress/annotations': 'wp.annotations',
'@wordpress/api-fetch': 'wp.apiFetch',
// ... other mappings
}
```

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/awps/wp-globals).

## License

This project is licensed under the MIT License.

---

Feel free to reach out if you have any questions or need further assistance.

Happy coding!

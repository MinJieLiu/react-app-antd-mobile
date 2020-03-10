const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      'brand-primary': '#1DA57A',
    },
  }),
  (config) => {
    require('react-app-rewire-postcss')(config, {
      plugins: loader => [
        require('cssnano')({
          // preset: 'advanced',
          autoprefixer: false,
          'postcss-zindex': false,
        }),
      ],
    });
    return config
  }
);

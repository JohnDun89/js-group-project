const config = {
  entry: `${__dirname}/src/app.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  },

  devtool:'source-map'
};

module.exports = config;

var path = require("path");

module.exports = {
	entry: {
		main: "./src/index.tsx"
	},
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "src/")
		},
		extensions: [".ts", ".tsx"]
	},
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "dist"),
	},
	devServer: {
		contentBase:  path.join(__dirname, "/"),
		port: 9000
	},
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};

var path = require("path");

module.exports = {
	entry: {
		main: "./src/index.tsx"
	},
	devtool: "inline-source-map",
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "/src")
		},
		extensions: [".ts", ".tsx"]
	},
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "/dist"),
	},
	devServer: {
		contentBase:  path.join(__dirname, "/"),
		port: 9000
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};

'use strict';

const visit = require(`unist-util-visit`);
const request = require(`request`);

module.export = ({ markdownAST }, options = { width: 600, height: 380 }) => {
	function validUrlCheck(useRimput) {
		var inpu = useRimput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
		if (inpu == null) return false;else return true;
	}

	function urlFind(vals) {
		urlVars = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}/g;

		return vals.replace(urlVars, function (url) {
			return url;
		});
	}

	function createoEmbedUri(validUri) {
		//Make WordPress oEmbedURL with func
		return urlFind(validUri) + '/wp-json/oembed/1.0/embed?url=' + urlEncode(validUri) + '&format=json';
	}

	visit(markdownAST, `inlineCode`, node => {
		const { value } = node;

		if (value.startsWith(`wpEmbed:`)) {
			const WpostUrl = value.substr(8);

			if (validUrlCheck(WpostUrl)) {

				var dok = request({
					url: createoEmbedUri(WpostUrl),
					json: true
				}, function (error, response, body) {
					if (!error && response.statusCode === 200) {
						console.log(body);
					}
				});
				node.type = `html`;
				node.value = dok;
			}
		}
	});
	return markdownAST;
};
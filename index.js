'use strict'
const visit = require(`unist-util-visit`);

module.exports = ({ markdownAST }, options = { width: 600, height: 380 }) => {
	function validUrlCheck(useRimput) {
		var inpu = useRimput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
		if (inpu == null) return false;else return true;
	}
  visit(markdownAST, `inlineCode`, node => {
    const { value } = node

    if (value.startsWith(`wpEmbed:`)) {
      const WpostUrl = value.substr(8)

      if (validUrlCheck(WpostUrl)) {
		node.type = `html`;
		node.value = `<iframe sandbox="allow-scripts" security="restricted" src="${WpostUrl}/embed" width="${options.width}" height="${options.height}" title="" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" class="wp-embedded-content"></iframe>`;
      }
    }
  })

  return markdownAST
}
# gatsby-remark-embed-wordpress
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fserkanalgur%2Fgatsby-remark-embed-wordpress.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fserkanalgur%2Fgatsby-remark-embed-wordpress?ref=badge_shield)


Embed WordPress Site's posts in your Markdown

## Install

1. Install plugin to your site via npm:

```bash
npm install gatsby-remark-embed-wordpress
```

2. Add following to your `gatsby-config.js`:

```js
    plugins: [
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
          {
            resolve: "gatsby-remark-embed-wordpress",
            options: {
              width: 800,
              height: 400
            }
          }
          ]
        }
      },
```

3. Restart gastby.

## Usage

```markdown
`wpEmbed:https://wpadami.com/kodlama/node-js/shot-ekran-goruntusu-alintilama-araci.html`
```

## License

GPLv3

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fserkanalgur%2Fgatsby-remark-embed-wordpress.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fserkanalgur%2Fgatsby-remark-embed-wordpress?ref=badge_large)
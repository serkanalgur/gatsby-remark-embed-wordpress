# gatsby-remark-embed-wordpress

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
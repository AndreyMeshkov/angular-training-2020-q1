import Post from './Post.js'
import json from './assets/json.json'
import WebpackLogo from './assets/webpack-logo.png'
import './styles/styles.css'

const post = new Post('Webpack Post Title', WebpackLogo)

console.log('Post to string:', post.toString())

console.log('JSON:', json)
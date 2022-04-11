const { Post } = require('../models')

const postData = [
  {
    post_name: 'Apple Studio Display',
    keywords: 'Apple, Display, Studio, Mac',
    postText: `I have recieved my new Apple Studio Display and love it.
    I got the version with the Nano Display and the adjustable stand. Very happy with both.
    Having a single cabel connected to my MacBook Pro is so nice.`
  },
  {
    post_name: 'MacBook Pro',
    keywords: 'Mac, MacBook, Pro, Apple',
    postText: `I have been working with my MacBook Pro for a whole and love it.
    It is hands down the best computer I have ever owned.`
  }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts
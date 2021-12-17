import fs from 'fs'
import path from 'path'
import fm from 'front-matter'

const POSTS_DIR = `${process.cwd()}/src/routes/blog`
const data = svexTree(POSTS_DIR)

/**
 * Get a tree of the posts
 */
function svexTree(dir, fileTree = {}) {
  // Read the given directory
  fs.readdirSync(dir).forEach((fileName, i) => {
    if (fs.statSync(path.join(dir, fileName)).isDirectory()) {
      fileTree[fileName] = getPosts(path.join(dir, fileName)).reverse()
    }
  })
  return fileTree
}

/**
 * Get the .svx posts from given path
 */
function getPosts(dir) {
  return fs.readdirSync(dir).reduce((o, c, i) => {
    if (/\.svx$/.test(c)) {
      const content = fs.readFileSync(path.join(dir, c), 'utf8')
      const { attributes } = fm(content)
      o.push({
        fileName: c.replace('.svx', ''),
        attributes
      })
    }
    return o
  }, [])
}

export default data

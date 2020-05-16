/*!
 * escape-html-tags
 * Copyright(c) 2019-2020 Vikas Keskar
 * MIT Licensed
 */

const htmlTagsRegExp = /["'&<>]/

/**
 * @function
 * @name escapeHtmlTags
 * @param {string} input The string to escape for inserting into HTML
 * @return {string}
 * @description Escape special characters in the given string of text.
 */

function escapeHtmlTags (input) {
  const str = '' + input
  const match = htmlTagsRegExp.exec(str)

  if (!match) {
    return str
  }

  let escape
  let html = ''
  let index = 0
  let lastIndex = 0

  for (index = str.length; index > match.index; index--) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;'
        break
      case 38: // &
        escape = '&amp;'
        break
      case 39: // '
        escape = '&#39;'
        break
      case 60: // <
        escape = '&lt;'
        break
      case 62: // >
        escape = '&gt;'
        break
      default:
        continue
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index)
    }

    lastIndex = index + 1
    html += escape
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html
}

module.exports = escapeHtmlTags

# Escape Html Tags
> Escape html tags to insert html into html code
<a name="escapeHtmlTags"></a>

## escapeHtmlTags(input) ⇒ <code>string</code>
> Escape special characters in the given string of text.<br>
> This function will escape the following characters: ", ', &, <, and >.

**Kind**: global function

| Param | Type                | Description                                  |
|-------|---------------------|----------------------------------------------|
| input | <code>string</code> | The string to escape for inserting into HTML |

<a name="Example"></a>
The escapeHtml function is designed to accept a string input of text and return an escaped value.

```javascript
const escapeHtml = require('escape-html')

// example values
const str = 'Escaping <i>html</i> works fine.'
// example passing text in span element
console.log('<span name="desc">' + escapeHtml(str) + '</span>')
// -> '<span name="desc">Escaping &lt;i&gt;html&lt;/i&gt; works fine.</span>'
```
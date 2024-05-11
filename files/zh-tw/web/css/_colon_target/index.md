---
title: ":target"
slug: Web/CSS/:target
---

{{CSSRef}}

The`:target`[pseudo-class](/zh-TW/docs/Web/CSS/Pseudo-classes) represents the unique element, if any, with an **id** matching the fragment identifier of the URI of the document..

URIs with fragment identifiers link to a certain element within the document, known as the _target element_. For instance, here is a URI pointing to an _anchor_ named section2:
`http://example.com/folder/document.html#section2`
The _anchor_ can be any element with an`id`attribute, e.g. `<h1 id="section2">` in our example. The _target element_ `h1` can be represented by the `:target` pseudo-class.

> **備註：** The`id`attribute was new in HTML 4 (December 1997). In old-style HTML `<a>` is a target element. The`:target`pseudo-class applies to those targets as well.

## 範例

```css
:target {
  outline: solid red;
} /* draw a red, solid line around the target element */
```

```css
/* example code for userContent.css or any web pages;
   a red/yellow arrow indicates the target element */

:target {
  -webkit-box-shadow: 0.2em 0.2em 0.3em #888;
  -moz-box-shadow: 0.2em 0.2em 0.3em #888;
  box-shadow: 0.2em 0.2em 0.3em #888;
}

:target:before {
  font:
    70% Arial,
    "Nimbus Sans L",
    sans-serif !important;
  content: "\25ba"; /* ► */
  color: red;
  background: gold;
  border: solid thin;
  padding-left: 1px;
  display: inline-block;
  margin-right: 0.13em;
  vertical-align: 20%;
}
```

### Working with display: none elements…

The `:target` pseudo-class also works fine with **undisplayed elements**:

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>:target pseudoclass example</title>
    <style>
      #newcomment {
        display: none;
      }

      #newcomment:target {
        display: block;
      }
    </style>
  </head>
  <body>
    <p><a href="#newcomment">Add a comment</a></p>
    <div id="newcomment">
      <form>
        <p>
          Write your comment:<br />
          <textarea></textarea>
        </p>
      </form>
    </div>
  </body>
</html>
```

## 規範

{{Specifications}}

## 瀏覽器兼容性

{{Compat}}

## 參見

- [使用 :target](/zh-TW/docs/Using_the_:target_selector)

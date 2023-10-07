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

### Creating a pure CSS "lightbox"

The `:target` pseudo-class is useful to switch on/off some invisible elements. In this way you can create a pure-CSS lightbox ([live demo](/files/4607/lightbox.html)).

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>MDN Example &ndash; CSS Lightbox</title>
    <style type="text/css">
      div.lightbox {
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }

      div.lightbox:target {
        display: table;
      }

      div.lightbox figure {
        display: table-cell;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }

      div.lightbox figure figcaption {
        display: block;
        margin: auto;
        padding: 8px;
        background-color: #ddbbff;
        height: 250px;
        position: relative;
        overflow: auto;
        border: 1px #000000 solid;
        border-radius: 10px;
        text-align: justify;
        font-size: 14px;
      }

      div.lightbox figure .closemsg {
        display: block;
        margin: auto;
        height: 0;
        overflow: visible;
        text-align: right;
        z-index: 2;
        cursor: default;
      }

      div.lightbox figure .closemsg,
      div.lightbox figure figcaption {
        width: 300px;
      }

      .closemsg::after {
        content: "\00D7";
        display: inline-block;
        position: relative;
        right: -20px;
        top: -10px;
        z-index: 3;
        color: #ffffff;
        border: 1px #ffffff solid;
        border-radius: 10px;
        width: 20px;
        height: 20px;
        line-height: 18px;
        text-align: center;
        margin: 0;
        background-color: #000000;
        font-weight: bold;
        cursor: pointer;
      }

      .closemsg::before {
        content: "";
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000000;
        opacity: 0.85;
      }
    </style>
  </head>

  <body>
    <h1>Pure CSS Lightbox</h1>

    <p>Some sample text&hellip;</p>

    <p>
      [ <a href="#example1">Open example #1</a> |
      <a href="#example2">Open example #2</a> ]
    </p>

    <p>Another sample text&hellip;</p>

    <div class="lightbox" id="example1">
      <figure>
        <a href="#" class="closemsg"></a>
        <figcaption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
          enim, placerat id eleifend eu, semper vel sem. Sed interdum commodo
          enim venenatis pulvinar. Proin mattis lorem vitae diam scelerisque
          hendrerit. Fusce cursus imperdiet mauris, vitae hendrerit velit
          dignissim a. Suspendisse potenti. Aenean feugiat facilisis diam, in
          posuere sapien mattis vel. Proin molestie rutrum diam, pharetra
          feugiat ligula sollicitudin sed. Etiam cursus diam quis tellus aliquam
          gravida. Aliquam erat volutpat.<br />
          Etiam varius adipiscing mi eget imperdiet. Nulla quis vestibulum leo.
          Integer molestie massa ut massa commodo in blandit purus aliquam.
          Mauris sit amet posuere massa. Ut a eleifend augue. Proin sodales
          mauris nec tellus pharetra dictum.
        </figcaption>
      </figure>
    </div>

    <div class="lightbox" id="example2">
      <figure>
        <a href="#" class="closemsg"></a>
        <figcaption>
          Cras risus odio, pharetra nec ultricies et, mollis ac augue. Nunc et
          diam quis sapien dignissim auctor. Quisque quis neque arcu, nec
          gravida magna. Etiam ullamcorper augue quis orci posuere et tincidunt
          augue semper. Maecenas varius augue eu orci auctor bibendum tristique
          ligula egestas. Morbi pharetra tortor iaculis erat porta id aliquam
          leo cursus. Ut nec elit vel mauris dapibus lacinia eget sed odio.
        </figcaption>
      </figure>
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

---
title: GlobalEventHandlers.onscroll
slug: Web/API/Element/scroll_event
---

{{ApiRef("HTML DOM")}}

Обработчик для события скролла.

## Syntax

```
element.onscroll = functionReference
```

### Parameters

`functionReference` is a reference to a function to be executed when `element` is scrolled.

## Example

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <style>
      #container {
        position: absolute;
        height: auto;
        top: 0;
        bottom: 0;
        width: auto;
        left: 0;
        right: 0;
        overflow: auto;
      }

      #foo {
        height: 1000px;
        width: 1000px;
        background-color: #777;
        display: block;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div id="foo"></div>
    </div>

    <script type="text/javascript">
      document.getElementById("container").onscroll = function () {
        console.log("scrolling");
      };
    </script>
  </body>
</html>
```

## Notes

The `scroll` event is raised when the user scrolls the contents of an element. `Element.onscroll` is equivalent to `element.addEventListener("scroll" ... )`.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

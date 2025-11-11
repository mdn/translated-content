---
title: Document.forms
slug: Web/API/Document/forms
---

{{APIRef("DOM")}}

`forms`는 현재 document에 존재하는 {{HTMLElement("form")}} element 들이 담긴 collection (an {{domxref("HTMLCollection")}})을 반환합니다.

## Syntax

```js
collection = document.forms;
```

## Example: Getting form information

```html
<!doctype html>
<html lang="en">
  <head>
    <title>document.forms example</title>
  </head>

  <body>
    <form id="robby">
      <input
        type="button"
        onclick="alert(document.forms[0].id);"
        value="robby's form" />
    </form>

    <form id="dave">
      <input
        type="button"
        onclick="alert(document.forms[1].id);"
        value="dave's form" />
    </form>

    <form id="paul">
      <input
        type="button"
        onclick="alert(document.forms[2].id);"
        value="paul's form" />
    </form>
  </body>
</html>
```

## Example 2:Getting an element from within a form

```js
var selectForm = document.forms[index];
var selectFormElement = document.forms[index].elements[index];
```

## 명세서

{{Specifications}}

## See also

- {{domxref("HTMLFormElement")}}

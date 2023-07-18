---
title: Document.forms
slug: Web/API/Document/forms
---

{{APIRef("DOM")}}

`forms` 屬性會回傳一個包含目前頁面中所有 {{HTMLElement("form")}} 元素的集合物件（型別為 {{domxref("HTMLCollection")}}）。

## 語法

```plain
collection = document.forms;
```

## 範例：取得表單資訊

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

## 範例 2：取得表單內的元素

```js
var selectForm = document.forms[index];
var selectFormElement = document.forms[index].elements[index];
```

## 規範

{{Specifications}}

## 參見

- {{domxref("HTMLFormElement")}}

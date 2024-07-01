---
title: Document.createElement()
slug: Web/API/Document/createElement
---

{{APIRef("DOM")}}

於 [HTML](/zh-TW/docs/Web/HTML) 文件中，**`Document.createElement()`** 方法可以依指定的標籤名稱（`tagName`）建立 HTML 元素，或是在未定義標籤名稱下建立一個 {{domxref("HTMLUnknownElement")}}。在 [XUL](/zh-TW/docs/Mozilla/Tech/XUL) 文件中，`Document.createElement()` 將會建立指定的 XUL 元素。而在其它文件，則會建立一個 namespace URI 為 `null` 的元素。

若要明確指定元素的 namespace URI，請使用 [`document.createElementNS()`](/zh-TW/docs/Web/API/Document/createElementNS)。

## 語法

```js
var element = document.createElement(tagName[, options]);
```

### 參數

- `tagName`
  - : 一個指定類型給所創建的元素的字串。{{domxref("Node.nodeName", "nodeName")}} 創建的元素由 `tagName` 的值初始，不要使用吻合名稱（例如 "html:a"）。當該方法在 HTML 文件中被調用時，`createElement()` 會先將 `tagName` 轉化為小寫後再創建元素。在 Firefox、Opera 和 Chrome，`createElement(null)` 與 `createElement("null")` 作用相同。
- `options`{{optional_inline}}
  - : 選擇性 `ElementCreationOptions` 物件包含一個屬性 `is`，它的值是先前使用`customElements.define()` 所定義的自定義元素的標籤名稱。為了與以前的 [自定義元素規範](https://www.w3.org/TR/custom-elements/) 相容，一些瀏覽器將允許你在此傳遞一個字串而非物件，其字串的值就是自定義元件的標籤名稱。了解更多訊息以及如何使用此參數，可以參閱 [擴展原生 HTML 元素](https://developers.google.com/web/fundamentals/primers/customelements/#extendhtml)。新元素將被賦予一個 `is` 屬性，其值就是自定義元素的標籤名稱。自定義元素算是實驗中的功能，因此目前只作用於部分瀏覽器中。

### 回傳值

一個新的 [`Element`](/zh-TW/docs/Web/API/Element).

## 範例

這邊創建一個新的 `<div>` ，並將它插入到 ID `div1` 之前。

### HTML

```html
<!doctype html>
<html>
  <head>
    <title>||Working with elements||</title>
  </head>
  <body>
    <div id="div1">The text above has been created dynamically.</div>
  </body>
</html>
```

### JavaScript

```js
document.body.onload = addElement;

function addElement() {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

{{EmbedLiveSample("範例", 500, 50)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}

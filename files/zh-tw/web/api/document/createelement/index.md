---
title: Document：createElement() 方法
slug: Web/API/Document/createElement
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("DOM")}}

在 [HTML](/zh-TW/docs/Web/HTML) 文件中，**`document.createElement()`** 方法會建立由 `localName` 指定的 HTML 元素，若 `localName` 無法識別，則會建立 {{domxref("HTMLUnknownElement")}}。

## 語法

```js-nolint
createElement(localName)
createElement(localName, options)
```

### 參數

- `localName`
  - : 一個字串，指定要建立的元素類型。不要使用限定名稱（例如「html:a」）來呼叫此方法。在 HTML 文件中呼叫時，`createElement()` 會將 `localName` 轉換為小寫後再建立元素。在 Firefox、Opera 和 Chrome 中，`createElement(null)` 的行為與 `createElement("null")` 相同。
- `options` {{optional_inline}}
  - : 一個物件，包含以下屬性：
    - `is`
      - : 先前透過 `customElements.define()` 定義的自訂元素的標籤名稱。詳情請參見 [Web 組件範例](#web_組件範例)。

### 回傳值

新的 {{domxref("Element")}}。

> [!NOTE]
> 如果文件是 {{domxref("HTMLDocument", "HTMLDocument", "", "1")}}（這是最常見的情況），則會回傳新的 {{domxref("HTMLElement", "HTMLElement", "", "1")}}。否則，會回傳新的 {{domxref("Element", "Element", "", "1")}}。

## 範例

### 基本範例

此範例會建立一個新的 `<div>`，並將其插入到 ID 為 `div1` 的元素之前。

#### HTML

```html
<!doctype html>
<html lang="zh-TW">
  <head>
    <meta charset="UTF-8" />
    <title>操作元素</title>
  </head>
  <body>
    <div id="div1">上方的文字是動態建立的。</div>
  </body>
</html>
```

#### JavaScript

```js
document.body.onload = addElement;

function addElement() {
  // 建立一個新的 div 元素
  const newDiv = document.createElement("div");

  // 並為其添加一些內容
  const newContent = document.createTextNode("嗨，你好！");

  // 將文字節點添加到新建立的 div 中
  newDiv.appendChild(newContent);

  // 將新建立的元素及其內容插入到 DOM 中
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

#### 結果

{{EmbedLiveSample("基本範例", 500, 80)}}

### Web 組件範例

> [!NOTE]
> 請檢查[瀏覽器相容性](#瀏覽器相容性)部分以了解支援情況，並參考 [`is`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/is) 屬性說明以了解自訂內建元素實作的現實情況。

以下範例片段取自我們的 [expanding-list-web-component](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component) 範例（[也可以查看實際範例](https://mdn.github.io/web-components-examples/expanding-list-web-component/)）。在此範例中，我們的自訂元素擴展了 {{domxref("HTMLUListElement")}}，該元素代表 {{htmlelement("ul")}} 元素。

```js
// 為元素建立一個類別
class ExpandingList extends HTMLUListElement {
  constructor() {
    // 在建構子中始終先呼叫 super
    super();

    // 建構子定義省略以簡化
    // …
  }
}

// 定義新元素
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

如果我們想以程式方式建立此元素的實例，可以使用如下呼叫：

```js
let expandingList = document.createElement("ul", { is: "expanding-list" });
```

新元素將被賦予一個 [`is`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/is) 屬性，其值為自訂元素的標籤名稱。

> [!NOTE]
> 為了向後相容，一些瀏覽器允許你在此處傳遞字串，而非物件，該字串的值為自訂元素的標籤名稱。

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
- {{domxref("document.createElementNS()")}}——明確指定元素的命名空間 URI。

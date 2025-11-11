---
title: DOMTokenList
slug: Web/API/DOMTokenList
l10n:
  sourceCommit: 494edeb208c312a26b7f5efb0902799d89a2bb33
---

{{APIRef("DOM")}}

**`DOMTokenList`** 介面表示一組以空白分隔的標記。這類集合通常由 {{domxref("Element.classList")}} 或 {{domxref("HTMLLinkElement.relList")}} 等屬性回傳。

`DOMTokenList` 的索引從 `0` 開始，與 JavaScript 的 {{jsxref("Array")}} 物件相同。`DOMTokenList` 永遠區分大小寫。

## 實例屬性

- {{domxref("DOMTokenList.length")}} {{ReadOnlyInline}}
  - : 一個 `integer`，代表此物件中儲存的項目數量。
- {{domxref("DOMTokenList.value")}}
  - : 一個 {{Glossary("stringifier")}} 屬性，會以字串形式回傳整個清單的值。

## 實例方法

- {{domxref("DOMTokenList.item()")}}
  - : 根據索引回傳清單中的項目，若索引超過或等於清單的 `length`，則回傳 `null`。
- {{domxref("DOMTokenList.contains()")}}
  - : 若清單中包含指定的標記，則回傳 `true`，否則回傳 `false`。
- {{domxref("DOMTokenList.add()")}}
  - : 將指定的標記加入清單中。
- {{domxref("DOMTokenList.remove()")}}
  - : 從清單中移除指定的標記。
- {{domxref("DOMTokenList.replace()")}}
  - : 以另一個標記取代原有標記。
- {{domxref("DOMTokenList.supports()")}}
  - : 若指定的標記為關聯屬性所支援的標記，則回傳 `true`。
- {{domxref("DOMTokenList.toggle()")}}
  - : 若清單中已存在該標記，則移除；否則加入。會回傳一個布林值，表示操作後該標記是否存在於清單中。
- {{domxref("DOMTokenList.entries()")}}
  - : 回傳一個{{jsxref("Iteration_protocols", "迭代器", "", 1)}}，可用來遍歷此物件內所有鍵／值對。
- {{domxref("DOMTokenList.forEach()")}}
  - : 為清單中的每個元素執行一次所提供的回呼函式。
- {{domxref("DOMTokenList.keys()")}}
  - : 回傳一個{{jsxref("Iteration_protocols", "迭代器", "", 1)}}，可用來遍歷此物件內所有鍵／值對的鍵。
- {{domxref("DOMTokenList.toString()")}}
  - : 回傳 {{domxref("DOMTokenList.value")}}，也就是以空白分隔的清單字串。
- {{domxref("DOMTokenList.values()")}}
  - : 回傳一個{{jsxref("Iteration_protocols", "迭代器", "", 1)}}，可用來遍歷此物件內所有鍵／值對的值。

## 範例

以下簡單範例中，我們使用 {{domxref("Element.classList")}} 取得一個 {{htmlelement("p")}} 元素的類別清單（`DOMTokenList`），接著使用 {{domxref("DOMTokenList.add()")}} 新增一個類別，最後將 {{domxref("Node.textContent")}} 更新為 `DOMTokenList` 的內容。

首先是 HTML：

```html
<p class="a b c"></p>
```

接著是 JavaScript：

```js
let para = document.querySelector("p");
let classes = para.classList;
para.classList.add("d");
para.textContent = `段落類別清單是 "${classes}"`;
```

輸出結果如下所示：

{{ EmbedLiveSample('範例', '100%', 60) }}

## 空白修剪與重複項目移除

會修改 `DOMTokenList` 的方法（例如 {{domxref("DOMTokenList.add()")}}）會自動修剪多餘的{{Glossary("Whitespace", "空白")}}並移除清單中的重複值。例如：

```html
<span class="    d   d e f"></span>
```

```js
let span = document.querySelector("span");
let classes = span.classList;
span.classList.add("x");
span.textContent = `行內容器類別清單是 "${classes}"`;
```

輸出結果如下所示：

{{ EmbedLiveSample('空白修剪與重複項目移除', '100%', 60) }}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

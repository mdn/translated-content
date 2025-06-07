---
title: Document：getElementsByClassName() 方法
slug: Web/API/Document/getElementsByClassName
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

{{domxref("Document")}} 介面的 **`getElementsByClassName`** 方法回傳一個類似陣列的物件，包含所有具有指定類別名稱的子元素。

當在 {{domxref("document")}} 物件上呼叫此方法時，會搜尋整個文件，包括根節點。你也可以在任何元素上呼叫 {{domxref("Element.getElementsByClassName", "getElementsByClassName()")}}，此方法只會回傳指定根元素的後代中符合給定類別名稱的元素。

> [!WARNING]
> 這是一個即時的 {{domxref("HTMLCollection")}}。DOM 中的變更會即時反映在此陣列中。如果某個元素不再符合選擇器條件，則會自動從陣列中移除。在進行迭代時請注意這一點。

## 語法

```js-nolint
getElementsByClassName(names)
```

### 參數

- `names`
  - : 一個字串，表示要匹配的類別名稱；多個類別名稱以空格分隔。

### 回傳值

一個包含所找到元素的即時 {{domxref("HTMLCollection")}}。

## 範例

取得所有具有「test」類別的元素：

```js
document.getElementsByClassName("test");
```

取得所有同時具有「red」和「test」類別的元素：

```js
document.getElementsByClassName("red test");
```

在 ID 為「main」的元素內，取得所有具有「test」類別的元素：

```js
document.getElementById("main").getElementsByClassName("test");
```

取得第一個具有「test」類別的元素，若無匹配的元素則回傳 `undefined`：

```js
document.getElementsByClassName("test")[0];
```

我們也可以使用 Array.prototype 的方法，將任何 {{domxref("HTMLCollection")}} 作為方法的 _this_ 值。以下範例會找到所有具有「test」類別的 div 元素：

```js
const testElements = document.getElementsByClassName("test");
const testDivs = Array.prototype.filter.call(
  testElements,
  (testElement) => testElement.nodeName === "DIV",
);
```

### 取得第一個類別為「test」的元素

這是最常用的操作方式。

```html
<div id="parent-id">
  <p>你好世界 1</p>
  <p class="test">你好世界 2</p>
  <p>你好世界 3</p>
  <p>你好世界 4</p>
</div>
```

```js
const parentDOM = document.getElementById("parent-id");

const test = parentDOM.getElementsByClassName("test"); // 一個匹配元素的列表，*不是*單一元素
console.log(test); // HTMLCollection[1]

const testTarget = parentDOM.getElementsByClassName("test")[0]; // 我們想要的第一個元素
console.log(testTarget); // <p class="test">你好世界 2</p>
```

### 多類別範例

`document.getElementsByClassName` 的運作方式與 `document.querySelector` 和 `document.querySelectorAll` 非常相似。只有同時具有所有指定類別名稱的元素才會被選中。

#### HTML

```html
<span class="orange fruit">柳橙水果</span>
<span class="orange juice">柳橙汁</span>
<span class="apple juice">蘋果汁</span>
<span class="foo bar">隨機的東西</span>
<textarea id="resultArea"></textarea>
```

```css hidden
#resultArea {
  width: 98%;
  height: 7em;
}
```

#### JavaScript

```js
// getElementsByClassName 只會選擇同時具有兩個指定類別的元素
const allOrangeJuiceByClass = document.getElementsByClassName("orange juice");
let result = "document.getElementsByClassName('orange juice')";
for (const el of allOrangeJuiceByClass) {
  result += `\n  ${el.textContent}`;
}

// querySelector 只會選擇完全匹配的元素
const allOrangeJuiceQuery = document.querySelectorAll(".orange.juice");
result += "\n\ndocument.querySelectorAll('.orange.juice')";
for (const el of allOrangeJuiceQuery) {
  result += `\n  ${el.textContent}`;
}

document.getElementById("resultArea").value = result;
```

#### 結果

{{EmbedLiveSample('多類別範例', '100%', 200)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

---
title: Document：createTextNode() 方法
slug: Web/API/Document/createTextNode
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

建立一個新的 {{domxref("Text")}} 節點。此方法可用於轉義 HTML 字元。

## 語法

```js-nolint
createTextNode(data)
```

### 參數

- `data`
  - : 包含要放入文字節點的資料的字串。

### 回傳值

一個 {{domxref("Text")}} 節點。

## 範例

```html
<button>是！</button>
<button>否！</button>
<button>我們可以！</button>

<hr />

<p id="p1">段落的第一行。</p>
```

```js
function addTextNode(text) {
  const newText = document.createTextNode(text);
  const p1 = document.getElementById("p1");

  p1.appendChild(newText);
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    addTextNode(`${event.target.textContent} `);
  });
});
```

{{EmbedLiveSample('範例')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

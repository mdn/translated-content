---
title: Document.hidden
slug: Web/API/Document/hidden
---

{{ ApiRef("DOM") }}

**`Document.hidden`** は読み取り専用のプロパティで、ページが非表示になっているとみられるかどうかを示す論理値を返します。

## 構文

```
var boolean = document.hidden
```

## 例

```js
document.addEventListener("visibilitychange", function() {
  console.log( document.hidden );
  // 振る舞いを修正...
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

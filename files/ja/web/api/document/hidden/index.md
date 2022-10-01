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

| 仕様書                                                                                                   | 状態                                         | 備考     |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName('Page Visibility API','#dom-document-hidden', 'Document.hidden')}} | {{Spec2('Page Visibility API')}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

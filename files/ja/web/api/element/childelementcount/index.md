---
title: "Element: childElementCount プロパティ"
short-title: childElementCount
slug: Web/API/Element/childElementCount
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

**`Element.childElementCount`** は読み取り専用のプロパティで、この要素の子要素の数を返します。

## 例

```js
let sidebar = document.getElementById("sidebar");
if (sidebar.childElementCount > 0) {
  // 何かを行う
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.childElementCount")}}
- {{domxref("DocumentFragment.childElementCount")}}

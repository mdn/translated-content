---
title: Element.childElementCount
slug: Web/API/Element/childElementCount
tags:
  - API
  - DOM
  - プロパティ
  - リファレンス
browser-compat: api.Element.childElementCount
translation_of: Web/API/Element/childElementCount
original_slug: Web/API/ParentNode/childElementCount
---
{{ APIRef("DOM") }}

**`Element.childElementCount`** は読み取り専用のプロパティで、この要素の子要素の数を返します。

## 構文

```js
element.childElementCount;
```

## 例

```js
let sidebar = document.getElementById('sidebar');
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

---
title: Range.collapsed
slug: Web/API/Range/collapsed
tags:
  - API
  - DOM
  - DOM リファレンス
  - プロパティ
  - Range
  - リファレンス
browser-compat: api.Range.collapsed
translation_of: Web/API/Range/collapsed
---
{{ APIRef("DOM") }}

**`Range.collapsed`** は読み取り専用プロパティで、 {{domxref("Range")}} の開始点と終了点が同じ位置にあるかどうかを示す論理型フラグを返します。 {{domxref("Range")}} の開始境界点と終了境界点が DOM 上で同じ位置であれば `true` を、そうでなければ `false` を返します。

折りたたまれた {{domxref("Range")}} は空であり（内容を含まない）、 DOM ツリー内の 1 つの点を指定します。範囲を折りたたむには、 {{domxref("Range.collapse()")}} メソッドを参照してください。

## 値

論理値。

## 例

```js
let range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
isCollapsed = range.collapsed;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)

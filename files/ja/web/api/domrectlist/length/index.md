---
title: "DOMRectList: length プロパティ"
short-title: length
slug: Web/API/DOMRectList/length
l10n:
  sourceCommit: f8554061e8e76aaa3f08ba1b5f9b939d436f5ded
---

{{APIRef("Geometry Interfaces")}}

**`length`** は {{domxref("DOMRectList")}} インターフェイスの読み取り専用プロパティで、リスト内の {{domxref("DOMRect")}} オブジェクトの数を返します。

## 値

`DOMRectList` 内の `DOMRect` オブジェクトの数を表す正の整数。リスト内に長方形がない場合、 `length` は `0` になります。

## 例

次の例では、 {{htmlelement("div")}} 要素の長方形のリストを {{domxref("Element.getClientRects()")}} で取得します。次に、ページ内の別の `<div>` 要素内に、リスト内の長方形の数を表示します。

まず、 HTML です。

```html
<div id="box" style="width: 50px; height: 20px; border: 1px solid black;"></div>
<div id="output"></div>
```

そして JavaScript です。

```js
const box = document.getElementById("box");
const rects = box.getClientRects();
const output = document.getElementById("output");

output.textContent = `長方形の数: ${rects.length}`;
```

出力は次のようなります。

{{ EmbedLiveSample('Examples', '100%', 60) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

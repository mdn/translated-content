---
title: NamedNodeMap.length
slug: Web/API/NamedNodeMap/length
l10n:
  sourceCommit: 6f983d8b9fa0081ba57ccab31a345a41ffccbbb1
---

{{APIRef("DOM")}}

**`length`** は {{domxref("NamedNodeMap")}} インターフェイスの読み取り専用プロパティで、このマップに格納されているオブジェクトの数を示します。

## 値

このマップにあるオブジェクトの数を示す数値です。

## 例

```html
<pre zero="test" one="test" two="test"></pre>
```

```js
const pre = document.getElementsByTagName("pre")[0];
const attrMap = pre.attributes;

let result = `The 'test' attribute contains ${attrMap.length} attributes.\n`;

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 20)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

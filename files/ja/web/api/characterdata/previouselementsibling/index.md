---
title: "CharacterData: previousElementSibling プロパティ"
slug: Web/API/CharacterData/previousElementSibling
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

**`previousElementSibling`** は {{domxref("CharacterData")}} インターフェイスの読み取り専用プロパティで、親の子リストの中で、現在のノードの一つ前の {{domxref("Element")}} を返します。存在しなければ `null` を返します。

## 値

{{domxref("Element")}} オブジェクト、または兄弟ノードが見つらなければ `null` です。

## 例

```html
<div id="div-01">これは div-01 です</div>
TEXT
<div id="div-02">これは div-02 です</div>
SOME TEXT
<div id="div-03">これは div-03 です</div>
<pre>結果</pre>
```

```js
// 最初に node に Text ノード `SOME TEXT` を設定
let node = document.getElementById("div-02").nextSibling;

let result = "SOME TEXT の前の兄弟要素:\n";

while (node) {
  result += `${node.nodeName}\n`;
  node = node.previousElementSibling;
}

document.querySelector("pre").textContent = result;
```

{{EmbedLiveSample("Example", "100%", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CharacterData.nextElementSibling")}}

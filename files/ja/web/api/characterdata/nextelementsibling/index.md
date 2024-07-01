---
title: "CharacterData: nextElementSibling プロパティ"
slug: Web/API/CharacterData/nextElementSibling
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

**`nextElementSibling`** は {{domxref("CharacterData")}} インターフェイスの読み取り専用プロパティで、親の子リストの中で、現在のノードの一つ後の {{domxref("Element")}} を返します。指定された要素がリストの最後のものであれば `null` を返します。

## 値

{{domxref("Element")}} オブジェクト、または兄弟ノードが見つらなければ `null` です。

## 例

```html
TEXT
<div id="div-01">これは div-01 です</div>
TEXT2
<div id="div-02">これは div-02 です</div>
<pre>こちらは結果領域です</pre>
```

```js
// 最初は、ノードに Text ノード `TEXT` を設定します
let node = document.getElementById("div-01").previousSibling;

let result = "TEXT の次の兄弟要素:\n";

while (node) {
  result += `${node.nodeName}\n`;
  node = node.nextElementSibling; // 最初のノードが CharacterData で、その他は Element オブジェクトです
}

document.querySelector("pre").textContent = result;
```

{{EmbedLiveSample("Example", "100%", "230")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CharacterData.previousElementSibling")}}

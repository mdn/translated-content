---
title: CharacterData.previousElementSibling
slug: Web/API/CharacterData/previousElementSibling
tags:
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.Element.previousElementSibling
translation_of: Web/API/CharacterData/previousElementSibling
---
{{APIRef("DOM")}}

**`previousElementSibling`** は {{domxref("CharacterData")}} インターフェイスの読み取り専用プロパティで、親の子リストの中で、現在のノードの一つ前の {{domxref("Element")}} を返します。存在しなければ `null` を返します。

## 値

{{domxref("Element")}} オブジェクト、または兄弟ノードが見つらなければ `null` です。

## 例

```html
<div id="div-01">Here is div-01</div>
TEXT
<div id="div-02">Here is div-02</div>
SOME TEXT
<div id="div-03">Here is div-03</div>
<pre>Result</pre>
```

```js
// Initially set node to the Text node with `SOME TEXT`
let node = document.getElementById('div-02').nextSibling;

let result = 'Previous element siblings of SOME TEXT:\n';

while (node) {
  result += node.nodeName + '\n';
  node = node.previousElementSibling;
}

document.getElementsByTagName('pre')[0].textContent = result;

```

{{EmbedLiveSample("Example", "100%", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CharacterData.nextElementSibling")}}

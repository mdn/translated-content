---
title: CharacterData.nextElementSibling
slug: Web/API/CharacterData/nextElementSibling
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.CharacterData.nextElementSibling
translation_of: Web/API/CharacterData/nextElementSibling
---
{{APIRef("DOM")}}

**`nextElementSibling`** は {{domxref("CharacterData")}} インターフェイスの読み取り専用プロパティで、親の子リストの中で、現在のノードの一つ後の {{domxref("Element")}} を返します。指定された要素がリストの最後のものであれば `null` を返します。

## 値

{{domxref("Element")}} オブジェクト、または兄弟ノードが見つらなければ `null` です。

## 例

```html
TEXT
<div id="div-01">Here is div-01</div>
TEXT2
<div id="div-02">Here is div-02</div>
<pre>Here is the result area</pre>
```

```js
// Initially, set node to the Text node with `TEXT`
let node = document.getElementById('div-01').previousSibling;

let result = 'Next element siblings of TEXT:\n';

while (node) {
  result += node.nodeName + '\n';
  node = node.nextElementSibling; // The first node is a CharacterData, the others Element objects
}

document.getElementsByTagName('pre')[0].textContent = result;
```

{{EmbedLiveSample("Example", "100%", "230")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CharacterData.previousElementSibling")}}

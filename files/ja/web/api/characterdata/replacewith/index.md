---
title: CharacterData.replaceWith()
slug: Web/API/CharacterData/replaceWith
tags:
  - API
  - DOM
  - メソッド
  - CharacterData
  - リファレンス
browser-compat: api.CharacterData.replaceWith
translation_of: Web/API/CharacterData/replaceWith
---
{{APIRef("DOM")}}

**`replaceWith()`** は {{domxref("CharacterData")}} インターフェイスのメソッドで、親ノードの子リスト内にあるこのノードを、一連の {{domxref("Node")}} オブジェクトまたは文字列で置き換えます。

文字列は {{domxref("Text")}} ノードとして置き換えられます。この文字列は {{domxref("Text/Text", "Text()")}} コンストラクターに引数として渡されます。

## 構文

```js
replaceWith(nodes);
```

### 引数

- `nodes` {{optional_inline}}
  - : カンマ区切りの {{domxref("Node")}} オブジェクトまたは文字列のリストで、現在のノードを置き換えるものです。
> **Note:** 引数が渡されなかった場合、このメソッドはこのノードを DOM ツリーから取り除くだけの動作をします。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : ノードが階層内の指定された位置に挿入できない場合に発生します。

## 例

```html
<p id="myText">Some text</p>
```

```js
let text = document.getElementById('myText').firstChild;
let em = document.createElement("em");
em.textContent = "Italic text";

text.replaceWith(em); // `Some text` を `Italic text` で置き換える
```

{{EmbedLiveSample("Example", "100%", 30)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CharacterData.replaceData()")}}

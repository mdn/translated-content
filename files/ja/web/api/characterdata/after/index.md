---
title: CharacterData.after()
slug: Web/API/CharacterData/after
tags:
  - メソッド
  - リファレンス
browser-compat: api.CharacterData.after
translation_of: Web/API/CharacterData/after
---
{{APIRef("DOM")}}

**`after()`** は {{domxref("CharacterData")}} インターフェイスのメソッドで、一連の {{domxref("Node")}} オブジェクトまたは文字列を、この `CharacterData` の親ノードの子リストの、この `CharacterData` の直後に挿入します。

文字列は {{domxref("Text")}} ノードとして挿入されます。文字列は {{domxref("Text/Text", "Text()")}} コンストラクターの引数として挿入されます。

## 構文

```js
after(... nodes)
```

### 引数

- `nodes`
  - : 挿入する一連の {{domxref("Node")}} または文字列です。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : 階層内の指定された位置に新しいノードを挿入できない場合，つまり以下の条件のいずれかに該当する場合に発生します。
    - 追加されたノードの 1 つを挿入すると循環参照なる場合、つまり、そのノードの 1 つがこの {{domxref("CharacterData")}} ノードの祖先である場合です。
    - 追加されたノードのいずれかが {{domxref("DocumentFragment")}}, {{domxref("DocumentType")}}, {{domxref("Element")}}, {{domxref("CharacterData")}} のいずれでもない場合。
    - この {{domxref("CharacterData")}} ノードが実際には {{domxref("Text")}} ノードであり、その親が {{domxref("Document")}} である場合。
    - この {{domxref("CharacterData")}} ノードの親が {{domxref("Document")}} で、挿入するノードの一つが {{domxref("DocumentFragment")}} であり、その中に 1 つ以上の {{domxref("Element")}} がある場合、または {{domxref("Text")}} 子を持つ場合。

## 例

`after()` メソッドを使うと、新しいノードをこの `CharacterData` ノードの後に挿入することができます。

```js
const h1TextNode = document.getElementsByTagName('h1')[0].firstChild;
h1TextNode.after(" #h1");

h1TextNode.parentElement.childNodes
// NodeList [#text "CharacterData.after()", #text " #h1"]

h1TextNode.data;
// "CharacterData.after()"
```

> **Note:** 現在のノードにテキストを追加したい場合は、 [`appendData()`](/ja/docs/Web/API/CharacterData/appendData) メソッドを使用すると現在のノードにデータを追加することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CharacterData.appendData()")}}
- {{domxref("CharacterData.before()")}}
- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.insertAdjacentElement()")}}

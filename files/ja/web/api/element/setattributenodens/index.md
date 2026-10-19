---
title: "Element: setAttributeNodeNS() メソッド"
short-title: setAttributeNodeNS()
slug: Web/API/Element/setAttributeNodeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

**`setAttributeNodeNS()`** は {{domxref("Element")}} のメソッドは、要素に新しい名前空間付きの {{domxref("Attr")}} ノードを追加します。

追加する前にその属性ノードを作業する必要がない場合（別の要素からの複製作成など）、代わりに {{domxref("Element.setAttributeNS()", "setAttributeNS()")}} メソッドを使用することができます。

HTML 文書を扱っており、リクエストされた属性を特定の名前空間の一部として指定する必要がない場合は、代わりに {{domxref("Element.setAttribute()", "setAttribute()")}} メソッドを使用してください。

### 構文

```js-nolint
setAttributeNodeNS(attributeNode)
```

### 引数

- `attributeNode`
  - : 要素に追加する {{domxref("Attr")}} ノードです。

### 返値

置換された属性ノードが、もしあれば、この関数から返されます。

## 例

```js
// <div id="one" xmlns:myNS="http://www.mozilla.org/ns/specialspace"
//            myNS:special-align="utterleft">one</div>
// <div id="two">two</div>

const myns = "http://www.mozilla.org/ns/specialspace";
const d1 = document.getElementById("one");
const d2 = document.getElementById("two");
const a = d1.getAttributeNodeNS(myns, "special-align");
d2.setAttributeNodeNS(a.cloneNode(true));
alert(d2.attributes[1].value); // 返値: `utterleft'
```

## メモ

指定された属性が既に要素に存在する場合、その属性は新しい属性に置き換えられ、置き換えられた属性が返されます。

なお、ノードを複製せずに設定しようとすると、`NS_ERROR_DOM_INUSE_ATTRIBUTE_ERR` "Attribute already in use" エラーに遭遇するかもしれません。DOM は {{domxref("Attr")}} を再利用するにあたって複製することを要求しているからです（他のノードが移動できるのとは異なります）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.createAttribute()")}}
- {{domxref("Document.createAttributeNS()")}}
- {{domxref("Element.getAttributeNodeNS()")}}

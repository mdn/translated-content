---
title: "Element: setAttributeNodeNS() メソッド"
short-title: setAttributeNodeNS()
slug: Web/API/Element/setAttributeNodeNS
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

`setAttributeNodeNS` は、名前空間付きの新しい属性ノードを要素へ追加します。

### 構文

```js-nolint
setAttributeNodeNS(attributeNode)
```

### 引数

- `attributeNode` は `Attr` ノードです。

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

なお、ノードを複製せずに設定しようとすると、Mozilla は NS_ERROR_DOM_INUSE_ATTRIBUTE_ERR "Attribute already in use" エラーを出します。DOM は Attr を再利用するにあたって複製することを要求しているからです（他のノードが移動できるのとは異なります）。

{{ DOMAttributeMethods() }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.createAttribute()")}}
- {{domxref("Document.createAttributeNS()")}}

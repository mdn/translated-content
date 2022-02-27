---
title: Node.replaceChild
slug: Web/API/Node/replaceChild
tags:
  - メソッド
  - リファレンス
browser-compat: api.Node.replaceChild
translation_of: Web/API/Node/replaceChild
---
{{APIRef("DOM")}}

**`replaceChild()`** は {{domxref("Node")}} 要素のメソッドで、この（親）ノードの中の子ノードを置き換えます。

**`Node.replaceChild()`** メソッドは指定ノードの子ノードを別のノードに置き換えます。

## 構文

```js
replaceChild(newChild, oldChild);
```

### 引数

- `newChild`
  - : `oldChild` を置き換える新しいノードです。
    > **Warning:** 新しいノードが既に DOM のどこか別なところにある場合は、まずその位置から取り除かれます。
- `oldChild`
  - : 置き換えられる子ノードです。

> **Note:** 引数の順序で、*新しい*ものの前に*古い*ものが来るのは異例です。
[`Element.replaceWith()`](/ja/docs/Web/API/Element/replaceWith) は、要素であるノードのみに適用されるものですが、読んだり使用したりしやすいかもしれません。

### 返値

置き換えられた {{domxref("Node")}} です。これは `oldChild` と同じノードです。

### 例外

- `HierarchyRequestError` {{domxref("DOMException")}}
  - : DOM ツリーの制約に違反した場合に発生します。すなわち、以下のいずれかが発生する場合です。
    - `oldChild` の親が {{domxref("Document")}}, {{domxref("DocumentFragment")}}, {{domxref("Element")}} のいずれにもならない場合。
    - `oldChild` を `newChild` で置き換えると循環参照になる場合。すなわち `newChild` がこのノードの祖先である場合。
    - `newChild` が {{domxref("DocumentFragment")}}, {{domxref("DocumentType")}}, {{domxref("Element")}}, {{domxref("CharacterData")}} のいずれでもない場合。
    - 現在のノードが {{domxref("Text")}} であり、親ノードが {{domxref("Document")}} になる場合。
    - 現在のノードが {{domxref("DocumentType")}} であり、その親が {{domxref("Document")}} にならない場合。 _doctype_ は常に _document_ の直下になければならないからです。
    - このノードの親が {{domxref("Document")}} で `newChild` が {{domxref("DocumentFragment")}} であり、複数の {{domxref("Element")}} の子、または {{domxref("Text")}} の子がある場合。
    - `oldChild` を `newChild` で置き換えると、 {{domxref("Document")}} の子の {{domxref("Element")}} が複数になる場合。
    - `oldChild` を `newChild` で置き換えると、 {{domxref("Element")}} ノードが {{domxref("DocumentType")}} の前になる場合。
- `NotFoundError` {{domxref("DOMException")}}
  - : `oldChild` の親ノードが現在のノードではない場合に発生します。

## 例

```js
// 前提:
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// ID も属性も内容も持たない空要素を生成
const sp1 = document.createElement("span");

// 生成したノードに id 属性 'newSpan' を付与
sp1.id = "newSpan";

// 新しい要素にいくらかの内容を作成
const sp1_content = document.createTextNode("新しい置換 span 要素");

// その内容を新しい要素に適用
sp1.appendChild(sp1_content);

// 置き換えられる既存のノードの参照を作る
const sp2 = document.getElementById("childSpan");
const parentDiv = sp2.parentNode;

// 既存のノード sp2 を新しい span 要素 sp1 で置換
parentDiv.replaceChild(sp1, sp2);

// 結果:
// <div>
//   <span id="newSpan">新しい置換 span 要素</span>
// </div>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.removeChild")}}
- {{domxref("Element.replaceWith")}}

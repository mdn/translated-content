---
title: Document.createDocumentFragment()
slug: Web/API/Document/createDocumentFragment
---

{{APIRef("DOM WHATWG")}}

新しい空の {{domxref("DocumentFragment")}} を作成し、そこに DOM ノードを追加して画面外の DOM ツリーを作成します。

## 構文

```
var fragment = document.createDocumentFragment();
```

### 値

新しく作成された空の {{domxref("DocumentFragment")}} オブジェクトで、中にノードが挿入できるものです。

## 使用上の注意

`DocumentFragment` は DOM の {{domxref("Node")}} オブジェクトですが、メインの DOM ツリーの一部にはなりません。通常の使い方は、文書フラグメントを生成し、その文書フラグメントに要素を追加して、その文書フラグメントを DOM ツリーへ追加することです。 DOM ツリー内では、文書フラグメントはすべての子要素によって置き換えられます。

文書フラグメントは*メモリ内*にあり、メインの DOM ツリーの一部ではないため、文書フラグメントに子要素を追加してもページの[リフロー](https://developers.google.com/speed/articles/reflow?csw=1) (要素の位置と大きさを決定するための計算) が行われません。そのため文書フラグメントを利用することによって、[性能の改善](http://ejohn.org/blog/dom-documentfragments/)が見込まれます。

`DocumentFragment` コンストラクターを使用して新しいフラグメントを生成することもできます。

```js
let fragment = new DocumentFragment();
```

## 例

この例では、主要なウェブブラウザのリストを `DocumentFragment` 内に作成し、表示するドキュメントに新しい DOM サブツリーを追加しています。

### HTML

```html
<ul id="ul"></ul>
```

### JavaScript

```js
var element = document.getElementById("ul"); // ul が存在することを仮定
var fragment = document.createDocumentFragment();
var browsers = ["Firefox", "Chrome", "Opera", "Safari", "Internet Explorer"];

browsers.forEach(function (browser) {
  var li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
```

### 結果

{{EmbedLiveSample("Example", 600, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMImplementation.createDocument", "document.implementation.createDocument()")}}
- {{domxref("documentFragment")}}

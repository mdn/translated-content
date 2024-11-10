---
title: "Document: createDocumentFragment() メソッド"
short-title: createDocumentFragment()
slug: Web/API/Document/createDocumentFragment
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("DOM WHATWG")}}

新しい空の {{domxref("DocumentFragment")}} を作成し、そこに DOM ノードを追加して画面外の DOM ツリーを作成します。

## 構文

```js-nolint
createDocumentFragment()
```

### 引数

なし。

### 値

新しく作成された空の {{domxref("DocumentFragment")}} オブジェクトで、中にノードが挿入できるものです。

## 使用上の注意

`DocumentFragment` は DOM の {{domxref("Node")}} オブジェクトですが、メインの DOM ツリーの一部にはなりません。通常の使い方は、文書フラグメントを生成し、その文書フラグメントに要素を追加して、その文書フラグメントを DOM ツリーへ追加することです。 DOM ツリー内では、文書フラグメントはすべての子要素によって置き換えられます。

文書フラグメントは*メモリー内*にあり、メインの DOM ツリーの一部ではないため、文書フラグメントを利用することによって、一部の古いエンジンでは[性能の改善](https://johnresig.com/blog/dom-documentfragments/)が見込まれます。

`DocumentFragment` コンストラクターを使用して新しいフラグメントを生成することもできます。

```js
const fragment = new DocumentFragment();
```

## 例

この例では、主要なウェブブラウザーのリストを `DocumentFragment` 内に作成し、表示するドキュメントに新しい DOM サブツリーを追加しています。

### HTML

```html
<ul id="ul"></ul>
```

### JavaScript

```js
const element = document.getElementById("ul"); // ul が存在することを仮定
const fragment = document.createDocumentFragment();
const browsers = ["Firefox", "Chrome", "Opera", "Safari"];

browsers.forEach((browser) => {
  const li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
```

### 結果

{{EmbedLiveSample("Examples", 600, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMImplementation.createDocument", "document.implementation.createDocument()")}}
- {{domxref("documentFragment")}}

---
title: Node.isConnected
slug: Web/API/Node/isConnected
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Node.isConnected
translation_of: Web/API/Node/isConnected
---
{{APIRef("DOM")}}

**`isConnected`** は {{domxref("Node")}} インターフェイスの読み出し専用のプロパティで、ノードがコンテキストオブジェクト、例えば、通常の DOM の場合は {{domxref("Document")}} オブジェクト、シャドウ DOM の場合は {{domxref("ShadowRoot")}} に（直接的または間接的に）接続されているかどうかを示す論理値を返します。

## 値

論理値で、 `true` はこのノードが関連するコンテキストオブジェクトに接続されていることを表し、 `false` は接続していないことを表します。

## 例

### 標準 DOM

標準 DOM の例です。

```js
let test = document.createElement('p');
console.log(test.isConnected); // Returns false
document.body.appendChild(test);
console.log(test.isConnected); // Returns true
```

### シャドウ DOM

シャドウ DOM の例です。

```js
// シャドウルートを生成
const shadow = this.attachShadow({mode: 'open'});

// いくらかの CSS を作成してシャドウ DOM に適用
const style = document.createElement('style');
console.log(style.isConnected); // returns false

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  positions: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3
}
`;

// 生成された style 要素をシャドウ DOM に取り付ける

shadow.appendChild(style);
console.log(style.isConnected); // Returns true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Node.prototype.isConnected polyfill](https://gist.github.com/eligrey/f109a6d0bf4efe3461201c3d7b745e8f)

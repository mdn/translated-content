---
title: CustomElementRegistry.upgrade()
slug: Web/API/CustomElementRegistry/upgrade
tags:
  - API
  - CustomElementRegistry
  - メソッド
  - リファレンス
  - Upgrade
  - ウェブコンポーネント
  - カスタム要素
browser-compat: api.CustomElementRegistry.upgrade
translation_of: Web/API/CustomElementRegistry/upgrade
---
{{APIRef("CustomElementRegistry")}}

**`upgrade()`** は {{domxref("CustomElementRegistry")}} インターフェイスのメソッドで、 {{domxref("Node")}} サブツリー内のすべてのシャドウを含むカスタム要素を、メイン文書に接続する前であってもアップグレードします。

## 構文

```js
customElements.upgrade(root);
```

### 引数

- `root`
  - : アップグレードされる、シャドウを含む子孫要素を持つ {{domxref("Node")}} インスタンス。アップグレード可能な子孫要素がない場合、エラーは発生しません。

### 返値

なし。

## 例

[HTML
仕様書](https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-upgrade) から取りました。

```js
const el = document.createElement("spider-man");

class SpiderMan extends HTMLElement {}
customElements.define("spider-man", SpiderMan);

console.assert(!(el instanceof SpiderMan)); // not yet upgraded

customElements.upgrade(el);
console.assert(el instanceof SpiderMan);    // upgraded!
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

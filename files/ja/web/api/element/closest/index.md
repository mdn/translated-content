---
title: Element.closest()
slug: Web/API/Element/closest
tags:
  - API
  - CSS セレクター
  - DOM
  - Element
  - メソッド
  - リファレンス
  - セレクター
browser-compat: api.Element.closest
translation_of: Web/API/Element/closest
---
{{APIRef('DOM')}}

**`closest()`** は {{domxref("Element")}} インターフェイスのメソッドで、この要素 ({{domxref("Element")}}) とその親階層に（文書ルートに向かって）、指定されたセレクター文字列に一致するノードが見つかるまで探索します。自分自身または一致する祖先を返します。そのような要素が存在しない場合は、 `null` を返します。

## 構文

```js
var closestElement = targetElement.closest(selectors);
```

### 引数

- `selectors` は {{domxref("DOMString")}} で、セレクターのリストを指定します。
  例: `p:hover, .toto + q`

### 返値

- `closestElement` は選択された要素の直近の祖先に当たる {{domxref("Element")}} です。 `null` になることがあります。

### 例外

- {{exception("SyntaxError")}} は `selectors` が妥当なセレクターリストの文字列ではない場合に発生します。

## 例

### HTML

```html
<article>
  <div id="div-01">Here is div-01
    <div id="div-02">Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>
</article>
```

### JavaScript

```js
var el = document.getElementById('div-03');

var r1 = el.closest("#div-02");
// id=div-02 である要素を返す

var r2 = el.closest("div div");
// div の中にある div である直近の祖先、ここでは div-03 自身を返す

var r3 = el.closest("article &gt; div");
// 親に article を持つ div である直近の祖先、ここでは div-01 を返す

var r4 = el.closest(":not(div)");
// div ではない直近の祖先、ここではもっとも外側の article を返す
```

## ポリフィル

`Element.closest()` に対応していないブラウザーで、 `element.matches()` (または接頭辞付きの同等のもの、すなわち IE9+) に対応しているものには、ポリフィルがあります。

```js
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
```

しかし、本当に IE 8 の対応が必要な場合は、以下のポリフィルがとても遅い処理ながら、結果を出すことができます。但し、 IE 8 は CSS 2.1 のセレクターにしか対応しておらず、本番のウェブサイトが極端に遅くなる原因となることがあります。

```js
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {};
    } while ((i < 0) && (el = el.parentElement));
    return el;
  };
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### 互換性のメモ

- Edge 15-18 では、要素が最初に（直接的または間接的に）コンテキストオブジェクト、例えば通常の DOM の場合は {{domxref("Document")}} オブジェクトに接続されていない場合、 `document.createElement(tagName).closest(tagName)` が `null` を返します。

## 関連情報

- {{domxref("Element")}} インターフェイス
- [セレクターの構文](/ja/docs/Learn/CSS/Building_blocks/Selectors)
- セレクターを取る他のメソッド: {{domxref("element.querySelector()")}} および {{domxref("element.matches()")}}

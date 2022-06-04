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

**`closest()`** は {{domxref("Element")}} インターフェイスのメソッドで、この要素とその親に（文書ルートに向かって）、指定された [CSS セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)に一致するノードが見つかるまで探索します。

## 構文

```js
closest(selectors)
```

### 引数

- `selectors`
  - : 有効な [CSS セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)を表す文字列です。これをこの要素 ({{domxref("Element")}}) およびその祖先に向けて照合します。

### 返値

`selectors` に一致する最も近い祖先の {{domxref("Element")}} または自分自身です。そのような要素がない場合は `null` を返します。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : `selectors` が有効なセレクターリストの文字列ではない場合に発生します。

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
const el = document.getElementById('div-03');

// "div-02" の id を持つ直近の祖先
console.log(el.closest('#div-02')); // <div id="div-02">

// div の中にある div である直近の祖先
console.log(el.closest('div div')); // <div id="div-03">

// div であって親に article がある直近の祖先
console.log(el.closest("article > div")); // <div id="div-01">

// div ではない直近の祖先
console.log(el.closest(":not(div)")); // <article>
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

- [CSS セレクターリファレンス](/ja/docs/Web/CSS/CSS_Selectors)
- セレクターを取る他の {{domxref("Element")}} のメソッド: {{domxref("Element.querySelector()")}}, {{domxref("Element.querySelectorAll()")}}, {{domxref("Element.matches()")}}

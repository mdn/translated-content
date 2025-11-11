---
title: CSSPseudoElement
slug: Web/API/CSSPseudoElement
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef}}{{SeeCompatTable}}

**`CSSPseudoElement`** インターフェイスは、イベントの対象としたり{{DOMxRef('Web Animations API', 'ウェブアニメーション API', '', 'true')}} を使用してアニメーションさせたりする擬似要素を表します。このインターフェイスのインスタンスは {{DOMxRef('Element.pseudo()')}} を呼び出すことで取得できます。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{DOMxRef('CSSPseudoElement.element')}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 擬似要素の元／親要素 ({{DOMxRef('Element')}}) を返します。
- {{DOMxRef('CSSPseudoElement.type')}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 擬似要素セレクターを文字列で返します。

## インスタンスメソッド

_`CSSPseudoElement` は {{DOMxRef('EventTarget')}} から派生しているため、以下のメソッドを継承しています。_

- {{domxref("EventTarget.addEventListener()")}}
  - : 擬似要素に固有のイベント型のイベントハンドラーを登録します。
- {{domxref("EventTarget.dispatchEvent()")}}
  - : この擬似要素にイベントを配信します。
- {{domxref("EventTarget.removeEventListener()")}}
  - : 擬似要素からイベントリスナーを除去します。

## 例

### Element.pseudo を使用した基本的な例

擬似要素を用いると、ほとんどの現代のブラウザーは {{HTMLElement('q')}} 要素内のテキストに引用符を自動的に追加します。（古いブラウザーで引用符を追加するにはスタイルルールが必要な場合があります。）下記ノ例は、冒頭の引用符を表す `CSSPseudoElement` オブジェクトの基本的なプロパティを示しています。

```js
const element = document.querySelector("q");
const cssPseudoElement = element.pseudo("::before");
console.log(cssPseudoElement.element); // [object HTMLQuoteElement] を出力
console.log(cssPseudoElement.type); // '::before' を出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef('Element.pseudo()')}}
- {{DOMxRef('Web Animations API', 'ウェブアニメーション API', '', 'true')}}
- {{DOMxRef('Element.animate()')}}

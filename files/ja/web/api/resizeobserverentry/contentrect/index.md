---
title: ResizeObserverEntry.contentRect
slug: Web/API/ResizeObserverEntry/contentRect
---

{{APIRef("Resize Observer API")}}

`contentRect` は {{domxref("ResizeObserverEntry")}} インターフェイスの読み取り専用プロパティで、コールバックが実行されたときに {{domxref('DOMRectReadOnly')}} オブジェクトの形で監視中の要素の新しい寸法を返します。なお、これは {{domxref("ResizeObserverEntry.borderBoxSize")}} や {{domxref("ResizeObserverEntry.contentBoxSize")}} よりも広く対応されていますが、 Resize Observer API では早期に除外され、現在は互換性の目的で仕様書に存在しているため、将来のバージョンでは非推奨になる可能性があります。

### 値

{{domxref('DOMRectReadOnly')}} オブジェクトで、 {{domxref("ResizeObserverEntry.target", "target")}} プロパティで示された要素の新しい寸法が入ります。

`target` が HTML の {{domxref("Element")}} である場合、返される `contentRect` は要素のコンテンツボックスです。 `target` が {{domxref("SVGElement")}} である場合、返される `contentRect` は SVG のバウンディングボックスです。

## 例

以下のスニペットは [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([ソースを参照](https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-text.html)) の例から取ったものです。これは簡単な機能検出テストを使用して、ブラウザーがより新しい {{domxref("ResizeObserverEntry.contentBoxSize")}} プロパティに対応しているかどうかを確認します。 — もし対応していれば、こちらを使用して必要な寸法のデータを取得します。そうでない場合は、 `contentRect` を使用します。

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      h1Elem.style.fontSize =
        Math.max(1.5, entry.contentBoxSize.inlineSize / 200) + "rem";
      pElem.style.fontSize =
        Math.max(1, entry.contentBoxSize.inlineSize / 600) + "rem";
    } else {
      h1Elem.style.fontSize =
        Math.max(1.5, entry.contentRect.width / 200) + "rem";
      pElem.style.fontSize = Math.max(1, entry.contentRect.width / 600) + "rem";
    }
  }
});

resizeObserver.observe(divElem);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

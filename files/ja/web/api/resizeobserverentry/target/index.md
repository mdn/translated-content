---
title: ResizeObserverEntry.target
slug: Web/API/ResizeObserverEntry/target
---

{{APIRef("Resize Observer API")}}

**`target`** は {{domxref("ResizeObserverEntry")}} インターフェイスの読み取り専用プロパティで、監視対象の {{domxref('Element')}} または {{domxref('SVGElement')}} への参照を返します。

## 値

監視対象の要素を表す {{domxref('Element')}} または {{domxref('SVGElement')}} です。

## 例

次のスニペットは [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html)
（[ソースを表示](https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-border-radius.html)）の例から取りました。
この例では、ビューポートサイズに対するパーセント値でサイズ設定された緑色のボックスが含まれています。ビューポートサイズが変更されると、ボックスの丸みを帯びた角がボックスのサイズに比例して変更されます。
パーセント値で {{cssxref("border-radius")}} を使用してこれを実装することもできますが、これではすぐに見苦しい楕円形の角になってしまいます。このソリューションでは、ボックスのサイズに比例した美しい四角形の角が得られます。

このように、変更するたびに {{cssxref("border-radius")}} の値を更新できるように、観測された要素への参照を取得するために、各エントリーの `target` プロパティ - `entry.target.style.borderRadius` を使用します。

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      entry.target.style.borderRadius =
        Math.min(
          100,
          entry.contentBoxSize.inlineSize / 10 +
            entry.contentBoxSize.blockSize / 10,
        ) + "px";
    } else {
      entry.target.style.borderRadius =
        Math.min(
          100,
          entry.contentRect.width / 10 + entry.contentRect.height / 10,
        ) + "px";
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

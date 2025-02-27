---
title: "ResizeObserverEntry: contentBoxSize プロパティ"
short-title: contentBoxSize
slug: Web/API/ResizeObserverEntry/contentBoxSize
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

**`contentBoxSize`** は {{domxref("ResizeObserverEntry")}} インターフェイスの読み取り専用プロパティで、コールバック実行時に、監視された要素の新しいコンテンツボックスサイズを含む配列を返します。

## 値

監視された要素の新しいコンテンツボックスサイズを持つオブジェクトを含む配列です。配列である必要があるのは、複数の段が存在するときに複数の断片のある要素に対応するためです。配列の各オブジェクトは、 2 つのプロパティを含みます。

- `blockSize`
  - : 監視された要素のコンテンツボックスのブロック方向の長さ。書字方向 ({{cssxref("writing-mode")}}) が水平のボックスの場合、これは垂直方向の寸法、すなわち高さであり、 writing-mode が垂直である場合は、これは水平方向の寸法、すなわち幅です。
- `inlineSize`
  - : 監視された要素のコンテンツボックスのインライン方向の長さ。書字方向 ({{cssxref("writing-mode")}}) が水平のボックスの場合、これは水平方向の寸法、すなわち幅であり、 writing-mode が垂直である場合は、これは垂直方向の寸法、すなわち高さです。

> [!NOTE]
> 書字方向やブロック・インラインの寸法についての詳しい説明は、[テキスト方向の操作](/ja/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)をご覧ください。

## 例

以下のスニペットは、 [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html)
（[ソースを参照](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)）の例から取ったものです。
この例では、ビューポートの大きさに対するパーセント値でサイズ設定された緑色のボックスが含まれています。ビューポートの大きさが変更されると、ボックスの丸みを帯びた角がボックスのサイズに比例して変更されます。パーセント値で {{cssxref("border-radius")}} を使用してこれを実装することもできますが、これではすぐに見苦しい楕円形の角になってしまいます。このソリューションでは、ボックスのサイズに比例した美しい四角形の角が得られます。

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      // 標準では contentBoxSize は配列...
      if (entry.contentBoxSize[0]) {
        entry.target.style.borderRadius =
          Math.min(
            100,
            entry.contentBoxSize[0].inlineSize / 10 +
              entry.contentBoxSize[0].blockSize / 10,
          ) + "px";
      } else {
        // ...しかし、古いバージョンの Firefox は単一のアイテムとして扱う
        entry.target.style.borderRadius =
          Math.min(
            100,
            entry.contentBoxSize.inlineSize / 10 +
              entry.contentBoxSize.blockSize / 10,
          ) + "px";
      }
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

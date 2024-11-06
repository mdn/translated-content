---
title: ResizeObserverEntry
slug: Web/API/ResizeObserverEntry
l10n:
  sourceCommit: 47d488abe650525734b30870b015377afb1dafd4
---

{{APIRef("Resize Observer API")}}

**`ResizeObserverEntry`** インターフェイスは、 {{domxref('ResizeObserver.ResizeObserver','ResizeObserver()')}} コンストラクターのコールバック関数に渡されるオブジェクトを表します。これにより、監視対象の {{domxref("Element")}} または {{domxref("SVGElement")}} の新しい寸法にアクセスすることができます。

## インスタンスプロパティ

- {{domxref('ResizeObserverEntry.borderBoxSize')}} {{ReadOnlyInline}}
  - : コールバックが実行されたときに監視された要素の新しい境界ボックスサイズを含むオブジェクトの配列です。
- {{domxref('ResizeObserverEntry.contentBoxSize')}} {{ReadOnlyInline}}
  - : コールバックが実行されたときに監視された要素の新しいコンテンツボックスサイズを含むオブジェクトの配列です。
- {{domxref('ResizeObserverEntry.devicePixelContentBoxSize')}} {{ReadOnlyInline}}
  - : コールバック実行時に監視される要素の新しいコンテンツボックスサイズをデバイスピクセル単位で含むオブジェクトの配列です。
- {{domxref('ResizeObserverEntry.contentRect')}} {{ReadOnlyInline}}
  - : コールバックが実行されたときに監視された要素の新しいサイズを含む {{domxref('DOMRectReadOnly')}} オブジェクトです。これは、上記の 2 つのプロパティよりも対応されていますが、リサイズオブザーバー API の以前の実装から残ったものであり、ウェブの互換性のために仕様に含まれているため、将来のバージョンで非推奨となる可能性があることに注意してください。
- {{domxref('ResizeObserverEntry.target')}} {{ReadOnlyInline}}
  - : 監視対象の {{domxref('Element')}} または {{domxref("SVGElement")}} オブジェクト。

> [!NOTE]
> コンテンツボックスは、コンテンツを配置できるボックスで、境界ボックスからパディングと境界の幅を除いたものを意味します。境界ボックスは、コンテンツ、パディング、境界を包含します。さらなる説明は[ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/The_box_model)を参照してください。

## インスタンスメソッド

なし。

## 例

以下のスニペットは [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) （[ソースを参照](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)）の例から取ったものです。

なお、このコードは 3 つの異なる互換性のケースに応じたものです。

- 古いブラウザーでは、 `contentRect` には対応していても、 `contentBoxSize` は対応していない場合があります。
- 古いバージョンの Firefox は `contentBoxSize` に対応していますが、誤って配列ではなく単一のオブジェクトとして実装していました。
- 現代のブラウザーは `contentBoxSize` をオブジェクトの配列として対応しており、断片化された要素（例えば複数段組みの場合）のボックスサイズを報告できるようになっています。

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      // The standard makes contentBoxSize an array...
      if (entry.contentBoxSize[0]) {
        h1Elem.style.fontSize =
          Math.max(1.5, entry.contentBoxSize[0].inlineSize / 200) + "rem";
        pElem.style.fontSize =
          Math.max(1, entry.contentBoxSize[0].inlineSize / 600) + "rem";
      } else {
        // ...but old versions of Firefox treat it as a single item
        h1Elem.style.fontSize =
          Math.max(1.5, entry.contentBoxSize.inlineSize / 200) + "rem";
        pElem.style.fontSize =
          Math.max(1, entry.contentBoxSize.inlineSize / 600) + "rem";
      }
    } else {
      h1Elem.style.fontSize =
        Math.max(1.5, entry.contentRect.width / 200) + "rem";
      pElem.style.fontSize = Math.max(1, entry.contentRect.width / 600) + "rem";
    }
  }
  console.log("Size changed");
});

resizeObserver.observe(divElem);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: ResizeObserverEntry
slug: Web/API/ResizeObserverEntry
---

{{APIRef("Resize Observer API")}}

**`ResizeObserverEntry`** インターフェイスは、 {{domxref('ResizeObserver.ResizeObserver','ResizeObserver()')}} コンストラクターのコールバック関数に渡されるオブジェクトを表します。これにより、監視対象の {{domxref("Element")}} または {{domxref("SVGElement")}} の新しい寸法にアクセスすることができます。

## プロパティ

- {{domxref('ResizeObserverEntry.borderBoxSize')}} {{readonlyinline}}
  - : コールバックが実行されたときに監視された要素の新しい境界ボックスサイズを含むオブジェクト。
- {{domxref('ResizeObserverEntry.contentBoxSize')}} {{readonlyinline}}
  - : コールバックが実行されたときに監視された要素の新しいコンテンツボックスサイズを含むオブジェクト。
- {{domxref('ResizeObserverEntry.devicePixelContentBoxSize')}} {{readonlyinline}}
  - : コールバック実行時に監視される要素の新しいコンテンツボックスサイズをデバイスピクセル単位で含むオブジェクト。
- {{domxref('ResizeObserverEntry.contentRect')}} {{readonlyinline}}
  - : コールバックが実行されたときに監視された要素の新しいサイズを含む {{domxref('DOMRectReadOnly')}} オブジェクトです。これは、上記の 2 つのプロパティよりも対応されていますが、リサイズオブザーバー API の以前の実装から残ったものであり、ウェブの互換性のために仕様に含まれているため、将来のバージョンで非推奨となる可能性があることに注意してください。
- {{domxref('ResizeObserverEntry.target')}} {{readonlyinline}}
  - : 監視対象の {{domxref('Element')}} または {{domxref("SVGElement")}} オブジェクト。

> **メモ:** コンテンツボックスは、コンテンツを配置できるボックスで、境界ボックスからパディングと境界の幅を除いたものを意味します。境界ボックスは、コンテンツ、パディング、境界を包含します。さらなる説明は[ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/The_box_model)を参照してください。

## メソッド

なし。

## 例

以下のスニペットは [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) （[ソースを参照](https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-text.html)）の例から取ったものです。これは、ブラウザーが新しい `contentBoxSize` プロパティに対応しているかどうかを確認するための簡単な機能検出テストを使用します。もし対応していれば、それを使って必要なサイズデータを取得します。対応していない場合は、古い `contentRect` プロパティを使用します。

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

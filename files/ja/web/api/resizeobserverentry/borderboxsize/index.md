---
title: "ResizeObserverEntry: borderBoxSize プロパティ"
short-title: borderBoxSize
slug: Web/API/ResizeObserverEntry/borderBoxSize
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

**`borderBoxSize`** は {{domxref("ResizeObserverEntry")}} インターフェイスの読み取り専用プロパティで、コールバック実行時に、監視された要素の新しい境界ボックスサイズを含む配列を返します。

## 値

監視された要素の新しい境界ボックスサイズを持つオブジェクトを含む配列です。配列である必要があるのは、複数の段が存在するときに複数の断片のある要素に対応するためです。配列の各オブジェクトは、 2 つのプロパティを含みます。

- `blockSize`
  - : 監視された要素の境界ボックスのブロック方向の長さ。書字方向 ({{cssxref("writing-mode")}}) が水平のボックスの場合、これは垂直方向の寸法、すなわち高さであり、 writing-mode が垂直である場合は、これは水平方向の寸法、すなわち幅です。
- `inlineSize`
  - : 監視された要素の境界ボックスのインライン方向の長さ。書字方向 ({{cssxref("writing-mode")}}) が水平のボックスの場合、これは水平方向の寸法、すなわち幅であり、 writing-mode が垂直である場合は、これは垂直方向の寸法、すなわち高さです。

> [!NOTE]
> 書字方向やブロック・インラインの寸法についての詳しい説明は、[テキスト方向の操作](/ja/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)をご覧ください。

## 例

```js
const resizeObserver = new ResizeObserver((entries) => {
  const calcBorderRadius = (size1, size2) =>
    `${Math.min(100, size1 / 10 + size2 / 10)}px`;

  for (const entry of entries) {
    if (entry.borderBoxSize?.length > 0) {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.borderBoxSize[0].inlineSize,
        entry.borderBoxSize[0].blockSize,
      );
    } else {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.contentRect.width,
        entry.contentRect.height,
      );
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

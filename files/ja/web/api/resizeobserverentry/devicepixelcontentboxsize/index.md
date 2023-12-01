---
title: ResizeObserverEntry.devicePixelContentBoxSize
slug: Web/API/ResizeObserverEntry/devicePixelContentBoxSize
---

{{APIRef("Resize Observer API")}}

**`devicePixelContentBoxSize`** は {{domxref("ResizeObserverEntry")}} インターフェイスの読み取り専用プロパティで、コールバック実行時に、監視されている要素のデバイスピクセル単位のサイズを含む配列を返します。

## 値

監視されている要素の新しいサイズをデバイスピクセル単位で持つオブジェクトを含む配列です。配列である必要があるのは、複数の段が存在するときに複数の断片のある要素に対応するためです。配列の各オブジェクトは、 2 つのプロパティを含みます。

- `blockSize`
  - : 監視されている要素のコンテンツボックスのブロック方向の長さをデバイスピクセル単位で示します。
    書字方向 ({{cssxref("writing-mode")}}) が水平のボックスの場合、これは垂直方向の寸法、すなわち高さであり、 writing-mode が垂直である場合は、これは水平方向の寸法、すなわち幅です。
- `inlineSize`
  - : 監視されている要素のコンテンツボックスのインライン方向の長さをデバイスピクセル単位で示します。
    書字方向 ({{cssxref("writing-mode")}}) が水平のボックスの場合、これは水平方向の寸法、すなわち幅であり、 writing-mode が垂直である場合は、これは垂直方向の寸法、すなわち高さです。

> **メモ:** 書字方向やブロック・インラインの寸法についての詳しい情報は、[テキスト方向の操作](/ja/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)をご覧ください。

## 例

以下の例は、 [Pixel-perfect rendering with devicePixelContentBox](https://web.dev/device-pixel-content-box/) の記事から取ったものです。
{{domxref("ResizeObserver")}} のコールバック関数は、レイアウトの後、描画の前に呼び出されるためです。
このため、正確なサイズを物理ピクセルで記録し、 canvas のピクセルと物理ピクセルの 1 対 1 対応を確保する機会が提供されます。

```js
const observer = new ResizeObserver((entries) => {
  const entry = entries.find((entry) => entry.target === canvas);
  canvas.width = entry.devicePixelContentBoxSize[0].inlineSize;
  canvas.height = entry.devicePixelContentBoxSize[0].blockSize;

  /* … render to canvas … */
});
observer.observe(canvas, { box: ["device-pixel-content-box"] });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

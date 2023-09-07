---
title: ResizeObserver
slug: Web/API/ResizeObserver
---

{{APIRef("Resize Observer API")}}

**`ResizeObserver`** インターフェイスは、要素 ({{domxref('Element')}}) のコンテンツまたは境界ボックス、または {{domxref('SVGElement')}} のバウンディングボックスの大きさが変化したことを報告します。

> **メモ:** コンテンツボックスは、コンテンツを配置できるボックスです。つまり、境界ボックスからパディングを引いたものです。境界とパディングの説明は[ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/The_box_model)を参照してください。

`ResizeObserver` は、無限のコールバックループとそれ自身のコールバック関数でサイズ変更することによって生じるであろう循環的な依存関係を避けます。これは、後続のフレームで DOM のより深い要素のみを処理することによって行われます。仕様に従っている場合、実装は描画の前およびレイアウトの後にリサイズイベントを呼び出します。

## コンストラクター

- {{domxref("ResizeObserver.ResizeObserver", "ResizeObserver()")}}
  - : 新しい `ResizeObserver` オブジェクトを作成して返します。

## プロパティ

なし。

## メソッド

- {{domxref('ResizeObserver.disconnect()')}}
  - : 特定のオブザーバーの監視対象の {{domxref('Element')}} をすべて監視解除します。
- {{domxref('ResizeObserver.observe()')}}
  - : 指定された {{domxref('Element')}} の監視を開始します。
- {{domxref('ResizeObserver.unobserve()')}}
  - : 指定された {{domxref('Element')}} の監視を終了します。

## 例

[resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) （[ソースを参照](https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-text.html)）の例では、スライダーの値が変更され、それを含む `<div>` の幅が変更されると、リサイズオブザーバーを使用してヘッダーと段落の {{cssxref("font-size")}} を変更します。これは、ビューポートに影響がない要素のサイズの変化にも応答することができることを示しています。

また、オブザーバーをオフやオンにするためのチェックボックスも用意しています。オフにすると、 `<div>` の幅が変化してもテキストは変化しません。

JavaScript は次のようになります。

```js
const h1Elem = document.querySelector("h1");
const pElem = document.querySelector("p");
const divElem = document.querySelector("body > div");
const slider = document.querySelector('input[type="range"]');
const checkbox = document.querySelector('input[type="checkbox"]');

divElem.style.width = "600px";

slider.addEventListener("input", () => {
  divElem.style.width = slider.value + "px";
});

const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      // Firefox は `contentBoxSize` を配列ではなく、単一のコンテンツ矩形として実装しています。
      const contentBoxSize = Array.isArray(entry.contentBoxSize)
        ? entry.contentBoxSize[0]
        : entry.contentBoxSize;

      h1Elem.style.fontSize =
        Math.max(1.5, contentBoxSize.inlineSize / 200) + "rem";
      pElem.style.fontSize =
        Math.max(1, contentBoxSize.inlineSize / 600) + "rem";
    } else {
      h1Elem.style.fontSize =
        Math.max(1.5, entry.contentRect.width / 200) + "rem";
      pElem.style.fontSize = Math.max(1, entry.contentRect.width / 600) + "rem";
    }
  }

  console.log("Size changed");
});

resizeObserver.observe(divElem);

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    resizeObserver.observe(divElem);
  } else {
    resizeObserver.unobserve(divElem);
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/The_box_model)
- {{domxref('PerformanceObserver')}}
- {{domxref('IntersectionObserver')}} （[交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API) の一部）

---
title: "SVGAnimatedPreserveAspectRatio: baseVal プロパティ"
short-title: baseVal
slug: Web/API/SVGAnimatedPreserveAspectRatio/baseVal
l10n:
  sourceCommit: 4f5fffdcb6ab78d736c69185f9575e8553e7d070
---

{{APIRef("SVG")}}

**`baseVal`** は {{domxref("SVGAnimatedPreserveAspectRatio")}} インターフェイスの読み取り専用プロパティで、 SVG 要素の {{SVGAttr("preserveAspectRatio")}} 属性の（アニメーションしていない）基底値を表します。

## 値

{{domxref("SVGPreserveAspectRatio")}} オブジェクトです。

## 例

次のような SVG があったとします。

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <image
    id="myImage"
    href="crows.jpg"
    width="50"
    height="50"
    preserveAspectRatio="xMinYMin meet">
    <animate
      attributeName="preserveAspectRatio"
      from="xMinYMin meet"
      to="xMaxYMax slice"
      dur="5s"
      fill="freeze"
      repeatCount="1" />
  </image>
</svg>
```

この例では、 `<image>` 要素を定義し、その `preserveAspectRatio` 属性をアニメーションさせます。アニメーションは一度だけ実行され、 `fill` 属性を `"freeze"` に設定します。そのため、アニメーションが完了した後もアニメーションの効果が維持されます。

ページが読み込まれた直後に、次のコードを実行します。

```js
const image = document.querySelector("#myImage");
const baseVal = image.preserveAspectRatio.baseVal;
const animVal = image.preserveAspectRatio.animVal;

console.log(baseVal.meetOrSlice); // 出力: 1 (SVG_MEETORSLICE_MEET)
console.log(animVal.meetOrSlice); // 出力: 1 (SVG_MEETORSLICE_MEET)
```

アニメーションが完了した後に、 `animVal.meetOrSlice` と `baseVal.meetOrSlice` の値を次のように再度ログ出力します。

```js
console.log(baseVal.meetOrSlice); // 出力: 1 (SVG_MEETORSLICE_MEET)
console.log(animVal.meetOrSlice); // 出力: 2 (SVG_MEETORSLICE_SLICE)
```

`fill` を `"remove"` に設定した場合（または、`fill` を完全に除去した場合、 `"remove"` が既定であるため）、アニメーションが完了するとアニメーション効果も除去され、 `animVal.meetOrSlice` は `1` に戻ります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGPreserveAspectRatio")}}
- {{domxref("SVGElement")}}

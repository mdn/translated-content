---
title: Aspect ratio (アスペクト比)
slug: Glossary/Aspect_ratio
l10n:
  sourceCommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

{{GlossarySidebar}}

**アスペクト比**とは、要素または{{glossary("viewport", "ビューポート")}}の幅と高さの比のことで、比率または 2 つの数値で表します。

アスペクト比を維持することで、画像や動画のような内在的なアスペクト比であろうと、外在的に設定されたものであろうと、要素の意図する縦横比を維持します。要素やビューポートのアスペクト比による問い合わせを行うこともでき、柔軟な部品やレイアウトを開発するのに有益です。

CSS では、{{cssxref("ratio")}} のデータ型は `width / height` （例えば、正方形の場合は `1 / 1`、ワイドスクリーンの場合は `16 / 9`）、または単一の数値（この場合、数値は幅を表し、高さは `1`）で入力します。

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

SVG では、アスペクト比は [`viewBox`](/ja/docs/Web/SVG/Reference/Attribute/viewBox) 属性の 4 つの値によって定義されます。最初の 2 つの値は SVG が持っている最小の X と Y の原点座標で、次の 2 つの値は SVG のアスペクト比を設定する幅と高さです。

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

JavaScript API でアスペクト比を問い合わせると、幅を高さで割った倍精度浮動小数点数が返されます。JavaScript を使用して要素のアスペクト比を設定することもできます。例えば、{{domxref("MediaStreamTrack")}} または {{domxref("MediaTrackSettings")}} 辞書の [`aspectRatio`](/ja/docs/Web/API/MediaTrackSettings/aspectRatio) プロパティを使用して 1920x1080 動画のアスペクト比制約を設定するには、16/9、または 1920/1080 として計算され、`1.7777778` となります。

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

## 関連情報

- CSS の {{cssxref("aspect-ratio")}} プロパティ
- [アスペクト比の理解](/ja/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)ガイド
- [CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール
- 関連用語:
  - {{glossary("intrinsic size", "内在サイズ")}}
- CSS の {{cssxref("min-content")}}、{{cssxref("max-content")}}、{{cssxref("fit-content")}} プロパティ値

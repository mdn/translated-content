---
title: Gamut (色域)
slug: Glossary/Gamut
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{GlossarySidebar}}

**色域** (gamut) とは、色のサブセットのことで、通例ディスプレイや印刷機器が表現できる色の範囲を指します。

いかなるディスプレイやプリンターでも、人間の目が知覚できるあらゆる範囲の色を表現することはできません。機器の*色域*とは、その機器が対応する色の集合のことを指します。

伝統的にウェブ開発では、 _[sRGB](https://en.wikipedia.org/wiki/SRGB)_ (Standard Red-Green-Blue)という色域だけが用いられていました。 sRGB では、それぞれの色が 3 バイトで記述され、各バイトはそれぞれの原色を表しています。しかしながら sRGB では、「ワイドカラー」なモニターやプロ向けのプリンターが対応する、より広い範囲の色を表現することができません。

2021 年以降各ブラウザーは、映画産業で広く用いられる _[P3](https://ja.wikipedia.org/wiki/DCI-P3)_ や _[Rec. 2020](https://ja.wikipedia.org/wiki/Rec._2020)_ など、そのほかの色域についての機能も提供するようになりました。

[`color-gamut`](/ja/docs/Web/CSS/Reference/At-rules/@media/color-gamut) という[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)を使えば、より広範囲の色域を対応する機器に向けて、様々な色域を定義することができます。そうした機器では RGB の色域外の色を、専用の CSS 関数で記述することができます。例えば、 [`lch()`](/ja/docs/Web/CSS/Reference/Values/color_value/lch) を使えば LCH 円筒座標系を用いることができますし、 [`lab()`](/ja/docs/Web/CSS/Reference/Values/color_value/lab) を使えば Lab 座標系を使うことができます。

## 関連情報

- [色域](https://ja.wikipedia.org/wiki/%E8%89%B2%E5%9F%9F) （ウィキペディア）

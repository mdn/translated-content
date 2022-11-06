---
title: Bézier curve (ベジェ曲線)
slug: Glossary/Bezier_curve
original_slug: Glossary/Bézier_curve
---

ベジェ曲線は、コンピューターグラフィックスとアニメーションで使用される数学的に記述された曲線です。{{Glossary("vector image", "ベクター画像")}}では、無期限に拡大できる滑らかな曲線をモデル化するために使用されます。.

ベジェ曲線は、最低 2 つの制御点のセットによって定義されます。ウェブ関連のグラフィックスとアニメーションは、4 つの制御点 P0, P1, P2, P3 を持つ曲線である 3 次ベジェ曲線を使用します。

曲線を描くために、P0 から P1 までと P1 から P2 までの 2 本の想像上の線（ヘルパーライン）が描かれます。線の終点は、次の点に徐々に移動します。3 番目の想像上の線は、最初のヘルパーライン上を徐々に移動する点を始点、2 番目のヘルパーライン上を徐々に移動する点を終点として描画されます。 この想像上の線上に、始点から終点まで徐々に移動する点が描かれます。 この点が描く曲線がベジェ曲線です。下記の図は、曲線の作成を示すアニメーションです。

![Drawing a Bézier curve](https://upload.wikimedia.org/wikipedia/commons/d/db/B%C3%A9zier_3_big.gif)

## 関連情報

### 一般知識

- [Wikipedia のベジェ曲線の記事](https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%B8%E3%82%A7%E6%9B%B2%E7%B7%9A)

### 参考記事

- [CSS の三次元ベジェタイミング関数](</ja/docs/Web/CSS/timing-function#The_cubic-bezier()_class_of_timing_functions>)
- {{SVGAttr("keySplines")}} SVG 属性
- [三次元ベジェジェネレーター](/ja/docs/Web/CSS/Tools/Cubic_Bezier_Generator)

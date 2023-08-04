---
title: Bézier curve (ベジェ曲線)
slug: Glossary/Bezier_curve
---

**ベジェ曲線**は、コンピューターグラフィックスとアニメーションで使用される、数学的に記述された曲線です。ベクター画像では、無期限に拡大できる滑らかな曲線をモデル化するために使用されます。

ベジェ曲線は、最低 2 つの制御点のセットによって定義されます。ウェブ関連のグラフィックスとアニメーションは、4 つの制御点 P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, P<sub>3</sub> を持つ曲線である 3 次ベジェ曲線を使用します。

曲線を描くために、P<sub>0</sub> から P<sub>1</sub> までと P<sub>1</sub> から P<sub>2</sub> までの 2 本の補助線が描かれます。3 本目の補助線は、1 本目の補助線上を徐々に移動する点を始点、2 本目の補助線上を徐々に移動する点を終点として描画されます。 この 3 本目の補助線上に、始点から終点まで徐々に移動する点が描かれます。 この点が描く曲線がベジェ曲線です。下記の図は、曲線の作成方法を示すアニメーションです。

![ベジェ曲線の描画](/en-US/docs/Glossary/Bezier_curve/b%C3%A9zier_2_big.gif)

## 関連情報

- [Wikipedia のベジェ曲線の記事](https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%B8%E3%82%A7%E6%9B%B2%E7%B7%9A)
- [CSS の三次元ベジェタイミング関数](/ja/docs/Web/CSS/easing-function#cubic-bezier_関数の例)
- {{SVGAttr("keySplines")}} SVG 属性

---
title: 段のスタイル付け
slug: Web/CSS/CSS_multicol_layout/Styling_columns
---

{{CSSRef}}

段組みコンテナー内に作られた段ボックスは無名ボックスなので、スタイル付けできることはわずかです。しかし、できることは少数ながらあります。このガイドは、段同士の間隔および段間罫をスタイル付けする方法を説明します。

## 段ボックスにスタイル付けできるか

残念ながら、現在はできません。段を構成する無名ボックスはスタイル付けの対象にする方法がないため、ボックスの背景色を変更したり、一段だけを他よりも広くしたりすることはできません。おそらく将来の版の仕様書でできるようになるでしょう。しかし現時点で、段同士の間隔と段間罫を変更することはできます。

## `column-gap` プロパティ

段同士の間隔 (段間) は、 `column-gap` プロパティで制御されます。このプロパティはもともと段組みレイアウト仕様書で定義されていました。しかし、現在は[ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)仕様書で定義され、 [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)などの他の仕様書におけるボックス同士の間隔と統合されました。

段組みにおける `column-gap` の初期値は `1em` です。つまり、段同士は互いに接しません。他のレイアウト方法では、 `column-gap` の初期値は 0 です。キーワード値 "normal" を使用した場合、間隔は 1em に設定されます。

段間は `column-gap` の値として任意の単位を使用して変更することができます。以下の例では、 `column-gap` は 40px に設定されます。

{{EmbedGHLiveSample("css-examples/multicol/styling/column-gap.html", '100%', 750)}}

`column-gap` に許されている値は `<length-percentage>` です。つまり、パーセント値を使用することができます。 `column-gap` のパーセント値は、段組みコンテナーの幅に対するパーセント値として計算されます。

## 段間罫

仕様書では `column-rule-width`, `column-rule-style` `column-rule-color` と、一括指定する `column-rule` を定義しています。これらのプロパティは、 `border` プロパティとまったく同じように動作します。 `border-style` で有効な値が `column-rule-style` で使用できます。

これらのプロパティは段組みコンテナーである要素に適用されるため、すべての段に同じ段間罫が引かれます。段間罫は段同士の間にのみ引かれ、外の辺には引かれません。段間罫は内容のある段の間にのみ引かれます。

次の例は、幅 5px の点線の段間罫を rebeccapurple の色で、個別指定を使用して作成しています。

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule.html", '100%', 550)}}

なお、段間罫自体は空間を占有しません。段間罫が太くなっても、段間が広がることはありません。その代わりに、段間罫が段間と重なります。

次の例では、とても太い 40px の段間罫を 10px の段間に引いています。段間罫は段の内容の下に表示されます。段間罫の両側に間隔を作るには、 gap を 40px より大きくする必要があるでしょう。

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule-wide.html", '100%', 550)}}

## まとめ

ここでは、現在段ボックスに対してスタイル付けすることができるすべての方法を説明しました。次のガイドでは、コンテナー内で[すべての段をまたがる](/ja/docs/Web/CSS/CSS_Columns/Spanning_Columns)要素の作成を見てみましょう。

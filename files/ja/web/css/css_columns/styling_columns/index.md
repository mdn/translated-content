---
title: 段のスタイル付け
slug: Web/CSS/CSS_Columns/Styling_Columns
tags:
  - CSS
  - CSS Multi-column Layout
  - CSS 段組みレイアウト
  - Guide
  - Layout
  - レイアウト
  - 日本語処理
translation_of: Web/CSS/CSS_Columns/Styling_Columns
---
<div>{{CSSRef}}</div>

<p class="summary">段組みコンテナー内に作られた段ボックスは無名ボックスなので、スタイル付けできることはわずかです。しかし、できることは少数ながらあります。このガイドは、段同士の間隔および段間罫をスタイル付けする方法を説明します。</p>

<h2 id="Can_I_Style_the_Column_Boxes" name="Can_I_Style_the_Column_Boxes">段ボックスにスタイル付けできるか</h2>

<p>残念ながら、現在はできません。段を構成する無名ボックスはスタイル付けの対象にする方法がないため、ボックスの背景色を変更したり、一段だけを他よりも広くしたりすることはできません。おそらく将来の版の仕様書でできるようになるでしょう。しかし現時点で、段同士の間隔と段間罫を変更することはできます。</p>

<h2 id="The_column-gap_property" name="The_column-gap_property"><code>column-gap</code> プロパティ</h2>

<p>段同士の間隔 (段間) は、 <code>column-gap</code> プロパティで制御されます。このプロパティはもともと段組みレイアウト仕様書で定義されていました。しかし、現在は<a href="/ja/docs//Web/CSS/CSS_Box_Alignment">ボックス配置</a>仕様書で定義され、 <a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">CSS グリッドレイアウト</a>などの他の仕様書におけるボックス同士の間隔と統合されました。</p>

<p>段組みにおける <code>column-gap</code> の初期値は <code>1em</code> です。つまり、段同士は互いに接しません。他のレイアウト方法では、 <code>column-gap</code> の初期値は 0 です。キーワード値 “normal” を使用した場合、間隔は 1em に設定されます。</p>

<p>段間は <code>column-gap</code> の値として任意の単位を使用して変更することができます。以下の例では、 <code>column-gap</code> は 40px に設定されます。</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/styling/column-gap.html", '100%', 750)}}</p>

<p><code>column-gap</code> に許されている値は <code>&lt;length-percentage&gt;</code> であり、つまりパーセント値を使用することができます。 <code>column-gap</code> のパーセント値は、段組みコンテナーの幅に対するパーセント値として計算されます。</p>

<h2 id="Column_rules" name="Column_rules">段間罫</h2>

<p>仕様書では <code>column-rule-width</code>, <code>column-rule-style</code> <code>column-rule-color</code> と、一括指定する <code>column-rule</code> を定義しています。これらのプロパティは、 <code>border</code> プロパティとまったく同じように動作します。 <code>border-style</code> で有効な値が <code>column-rule-style</code> で使用できます。</p>

<p>これらのプロパティは段組みコンテナーである要素に適用されるため、すべての段に同じ段間罫が引かれます。段間罫は段同士の間にのみ引かれ、外の辺には引かれません。段間罫は内容のある段の間にのみ引かれます。</p>

<p>次の例は、幅 5px の点線の段間罫を rebeccapurple の色で、個別指定を使用して作成しています。</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule.html", '100%', 550)}}</p>

<p>なお、段間罫自体は空間を占有しません。段間罫が太くなっても、段間が広がることはありません。そうではなく、段間罫が段間と重なります。</p>

<p>次の例では、とても太い 40px の段間罫を 10px の段間に引いています。段間罫は段の内容の下に表示されます。段間罫の両側に間隔を作るには、 gap を 40px より大きくする必要があるでしょう。</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule-wide.html", '100%', 550)}}</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>ここでは、現在段ボックスに対してスタイル付けすることができるすべての方法を説明しました。次のガイドでは、コンテナー内で<a href="/ja/docs/Web/CSS/CSS_Columns/Spanning_Columns">すべての段をまたがる</a>要素の作成を見てみましょう。</p>

---
title: パターン
slug: Web/SVG/Tutorials/SVG_from_scratch/Patterns
l10n:
  sourceCommit: fd216f3c4358f24fef043d32b28d6e980a78afc0
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Gradients", "Web/SVG/Tutorials/SVG_from_scratch/Texts") }}

## パターン

パターンは、 SVG で使用する塗りつぶしの種類の中で、間違いなく最も混乱しやすいものの一つです。また、非常に強力であるため、少なくとも基本的な把握はしておく価値があります。グラデーションと同様に、 {{SVGElement('pattern')}} 要素は SVG ファイルの {{SVGElement("defs")}} セクションに置かれるべきものです。

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="Gradient1">
      <stop offset="5%" stop-color="white" />
      <stop offset="95%" stop-color="blue" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="red" />
      <stop offset="95%" stop-color="orange" />
    </linearGradient>

    <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
      <rect x="0" y="0" width="50" height="50" fill="skyblue" />
      <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)" />
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="url(#Gradient1)"
        fill-opacity="0.5" />
    </pattern>
  </defs>

  <rect fill="url(#Pattern)" stroke="black" width="200" height="200" />
</svg>
```

{{ EmbedLiveSample('Patterns','220','240') }}

{{SVGElement("pattern")}} 要素の内部には先に入れた他の基本図形を含めることができ、それらの図形は前に学習したスタイルを用いてグラデーションや不透明度などの装飾を設定することができます。ここではパターンの内部に 2 つの矩形 (これらは重なっており、片方はもう片方の 2 倍のサイズでパターン全体を埋めています) と 1 つの円を描画しています。

パターンでわかりにくいのは、単位系の定義とサイズです。前出の例では、パターンが繰り返し始めるまでの範囲を示すため、pattern 要素に `width` と `height` 属性を定義しています。また、描画内でパターンの矩形の開始位置をずらしたい場合は、`x` と `y` 属性を使用できます。これらの属性をここで使用した理由は、後ほど説明します。

以前に使用した `gradientUnits` 属性と同様に、パターンには `patternUnits` 属性があります。この属性は、`x`、`y`、`width`、`height` の各属性で使用する単位を指定します。デフォルトは `"objectBoundingBox"` であり、値 `1` はパターンを適用するオブジェクトの幅または高さに相当します。この例ではパターンを水平方向と垂直方向に 4 回繰り返すため、`height` と `width` を `0.25` に設定しています。つまり、パターンの幅と高さはボックス全体のサイズの `0.25` 倍です。

グラデーションとは異なり、パターンには第 2 の属性 `patternContentUnits` があり、パターン要素内の基本図形に適用する単位系を指定します。この属性のデフォルトは `"userSpaceOnUse"` であり、`patternUnits` 属性とは反対です。したがって、`patternContentUnits` と `patternUnits` の一方または両方を指定しないと、パターン内の図形はパターン要素とは異なる座標系で描画されます。これにより、手書きで要素を記述するときに少しわかりにくくなる場合があります。

前出の例でこの作業を行うにはボックスのサイズ (200 ピクセル) と、パターンを水平および垂直方向に 4 回繰り返したいという事実を考慮しなければなりませんでした。よって、パターンの 1 単位は 50x50 ピクセルの正方形でした。そしてパターン内にある 2 つの矩形と円は 50x50 ピクセルのボックスに収まるサイズでした。このボックスの外側に描画した図形等は、表示されません。また、パターンがボックスの左上隅から始まるように 10 ピクセルずらす必要がありましたので、`pattern` の `x` および `y` 属性を 10÷200 = 0.05 に調整しました。

ここでの注意点は、オブジェクトのサイズが変わるとパターン自体はそれに合わせて拡大縮小されますが、内部のオブジェクトは拡大縮小されないことです。そのため、パターン内には引き続き 4 つの単位が繰り返し並びますが、パターンを構成するオブジェクトは同じサイズのままなので、オブジェクトの間に大きな空白ができてしまいます。`patternContentUnits` 属性を変更すると、すべての要素で同じ単位系を使用できます。

```xml
 <pattern id="Pattern" width=".25" height=".25" patternContentUnits="objectBoundingBox">
   <rect x="0" y="0" width=".25" height=".25" fill="skyblue"/>
   <rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)"/>
   <circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

パターンとその内容が同じ単位系になるため、パターンが正しい位置から始まるようにボックスをずらす必要がなくなります。また、オブジェクトのサイズを大きくすると、パターンは自動的に拡大縮小され、内部の図形とパターンの繰り返し回数は同じままになります。これは `"userSpaceOnUse"` システムとは対照的です。このシステムでは、オブジェクトのサイズが変わってもパターンのサイズは変わらず、ボックスを埋めるためにパターンの繰り返し回数が増えます。

これまで見てきた 2 つの使い方はいずれも、パターンについて考えるときに通常は思いつかないでしょう。パターンは通常サイズが決まっており、またそれ自身をオブジェクトの形状に関係なく繰り返します。このようなパターンを作成するには、パターンとその内容物は現在の userSpace 内に描画しなければならず、そのためにオブジェクトの形状が変化してもパターンの形状は変わりません。

```xml
 <pattern id="Pattern" x="10" y="10" width="50" height="50" patternUnits="userSpaceOnUse">
   <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
   <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
   <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

もちろん、これは後からオブジェクトのサイズを変えてもパターンのサイズは調整されないことを意味します。前出の 3 種類の例について、矩形の高さを 300px に広げたものを以下に示しましたが、これはすべてを網羅した画像ではなく、また目的に応じて利用可能なオプションが他にもあることを注記したいと思います。

![patternUnits のデフォルト値と userSpaceOnUse、patternContentUnits のデフォルト値と objectBoundingBox の組み合わせを示す 3 つの例。両方をデフォルト値にすると、アスペクト比が維持され、空白が表示されます。patternContentUnits を objectBoundingBox に設定すると、空白をなくすようアスペクト比が変わります。patternUnits を userSpaceOnUse に設定すると、アスペクト比を維持したまま空白がなくなります。](svg_pattern_comparison_of_units.png)

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Gradients", "Web/SVG/Tutorials/SVG_from_scratch/Texts") }}

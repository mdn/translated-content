---
title: SVG におけるグラデーション
slug: Web/SVG/Tutorial/Gradients
---

{{ PreviousNext("Web/SVG/Tutorial/Fills_and_Strokes", "Web/SVG/Tutorial/Patterns") }}

単なる塗り潰しや線だけではなく、グラデーション (gradients) も塗り潰しや線として作成・適用できるのが魅力です。

グラデーションには、線形と放射状の 2 種類があります。グラデーションには `id` 属性を与え**なければならず**、そうしないとファイル内の他の要素から参照できません。グラデーションは、再利用性を高めるために、シェイプそのものではなく、 defs セクションで定義されます。

## 線形グラデーション

線形グラデーション (linear gradients) は直線に沿って色が変化します。挿入するには、 {{SVGElement('linearGradient')}} ノードを SVG ファイルの定義セクションの内部に作成します。

### 基本的な例

```html
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="Gradient1">
      <stop class="stop1" offset="0%" />
      <stop class="stop2" offset="50%" />
      <stop class="stop3" offset="100%" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="red" />
      <stop offset="50%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
    <style type="text/css">
      <![CDATA[
              #rect1 { fill: url(#Gradient1); }
              .stop1 { stop-color: red; }
              .stop2 { stop-color: black; stop-opacity: 0; }
              .stop3 { stop-color: blue; }
            ]]>
    </style>
  </defs>

  <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient2)" />
</svg>
```

{{ EmbedLiveSample('Linear_Gradient','120','280') }}

上記の例では、 `<rect>` 要素に線形グラデーションを適用します。線形グラデーションの内部には複数の {{SVGElement('stop')}} ノードがあります。これらのノードは、グラデーションのある位置における色を、位置については `offset` 属性、色については `stop-color` 属性で指定します。この属性は、直接指定することも、 CSS で指定することもできます。この例では、二つの方法を混在させています。具体的には、グラデーションに対して赤色から開始し、中間で透明な黒に変化し、そして青色で終了するよう指示しています。必要に応じて美しくも醜くもある混色を作ることができますが、オフセットは常に 0% (または % 記号を削除したい場合は 0) から 100% (または 1) まで増加させる必要があります。重複した値は、 XML ツリーの一番下に割り当てられている経由点を使用します。また、 fill や stroke と同様に、 `stop-opacity` 属性を指定することで、その位置での不透明度を設定することができます (FF3 では、 rgba 値を使って行うこともできます)。

```
<stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```

グラデーションを使用するには、オブジェクトの `fill` または `stroke` 属性から参照する必要があります。これは、 CSS で要素を参照するのと同様に、 `url` を使って行います。今回の場合は、 url はグラデーションへの参照であり、クリエイティブ ID として "Gradient" を与えました。これをアタッチするには、 `fill` を `url(#Gradient)` に設定してください。これでオブジェクトが多色になりました。 `stroke` でも同じことができます。

`<linearGradient>` 要素は、他にもいくつかの属性を持ち、グラデーションの大きさや外観を指定します。グラデーションの方向は、 `x1`, `x2`, `y1`, `y2` という属性で指定された 2 つの点によって制御されます。これらの属性は、グラデーションが移動する線を定義します。グラデーションのデフォルトは水平方向ですが、これらを変更することで回転させることができます。上の例の Gradient2 は、垂直方向のグラデーションを作成するように設計されています。

```html
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"></linearGradient>
```

> **メモ:** グラデーションに `xlink:href` 属性を用いることもできます。これを使用すると、あるグラデーションの属性や経由点を別のグラデーションに含めることができます。上記の例では、 Gradient2 のすべての経由点を再作成する必要はありません。
>
> ```html
> <linearGradient id="Gradient1">
>   <stop id="stop1" offset="0%" />
>   <stop id="stop2" offset="50%" />
>   <stop id="stop3" offset="100%" />
> </linearGradient>
> <linearGradient
>   id="Gradient2"
>   x1="0"
>   x2="0"
>   y1="0"
>   y2="1"
>   xmlns:xlink="http://www.w3.org/1999/xlink"
>   xlink:href="#Gradient1" />
> ```
>
> ここでは xlink 名前空間を、通常は文書の先頭にて定義するものですが、このノードで直接定義しました。詳細は[画像について説明する際](/ja/docs/Web/SVG/Tutorial/Other_content_in_SVG)に述べます。

## 放射状グラデーション

放射状グラデーションは線形グラデーションに似ていますが、ある点から放射状にグラデーションを描画します。これを作成するには {{SVGElement('radialGradient')}} 要素を文書の定義セクションに追加します。

### 基本的な例

```html
<?xml version="1.0" standalone="no"?>
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="RadialGradient1">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient1)" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient2)" />
</svg>
```

{{ EmbedLiveSample('Basic_example_2','120','280') }}

ここで使われている経由点は先ほどと同じですが、今度はオブジェクトの中央が赤になり、すべての方向の端が青になるように徐々に変化します。線形グラデーションと同様に、 `<radialGradient>` ノードは、その位置と方向を表すいくつかの属性を取ることができます。しかし、線形グラデーションとは異なり、もう少し複雑です。放射状グラデーションも 2 つの点によって定義され、その端がどこにあるかを決定します。 1 つ目の点は、グラデーションが終わる円を定義します。この円には、 `cx` および `cy` 属性で指定される中心点と、半径 `r` が必要です。これら 3 つの属性を設定することで、上の 2 つ目の `rect` に示すように、グラデーションを移動したり、大きさを変更したりすることができます。

2 つ目の点は焦点と呼ばれ、 `fx` および `fy` 属性で定義します。 1 点目がグラデーションの端がどこかを示すのに対して、焦点はグラデーションの中心がどこかを示します。これは例を見るとわかりやすくなります。

### 中心と焦点

```html
<?xml version="1.0" standalone="no"?>

<svg width="120" height="120" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="Gradient" cx="0.5" cy="0.5" r="0.5" fx="0.25" fy="0.25">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient)"
    stroke="black"
    stroke-width="2" />

  <circle
    cx="60"
    cy="60"
    r="50"
    fill="transparent"
    stroke="white"
    stroke-width="2" />
  <circle cx="35" cy="35" r="2" fill="white" stroke="white" />
  <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">
    (fx,fy)
  </text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">
    (cx,cy)
  </text>
</svg>
```

{{ EmbedLiveSample('Center_and_focal_point','120','160') }}

焦点が先ほどの円の外側に移動してしまうと、グラデーションが正しく描画されないため、スポットは円の縁の中にあるとみなされます。焦点がまったく与えられていない場合は、中心点と同じ場所にあると仮定されます。

線形グラデーションと放射状グラデーションには、他にもいくつかの属性があり、それらが受けるであろう変換を記述します。ここで言及したい唯一の属性は `spreadMethod` 属性です。この属性は、グラデーションが終了しても、オブジェクトがまだ塗りつぶされていない場合にどうするかを制御します。この属性は、 "pad", "reflect", "repeat" の 3 つの値のいずれかを取ることができます。 "pad" は、これまで見てきたものです。グラデーションが終了すると、最終的なオフセットカラーがオブジェクトの残りの部分を埋めるために使用されます。 "reflect" は、グラデーションを継続させますが、逆に反射させます。 100% のオフセットカラーから始まり、 0% のオフセットに戻り、また上に戻ります。 "Repeat" もグラデーションを継続させますが、逆に進むのではなく、最初にジャンプして再度実行します。

### spreadMethod

```html
<?xml version="1.0" standalone="no"?>

<svg width="220" height="220" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="GradientPad"
      cx="0.5"
      cy="0.5"
      r="0.4"
      fx="0.75"
      fy="0.75"
      spreadMethod="pad">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient
      id="GradientRepeat"
      cx="0.5"
      cy="0.5"
      r="0.4"
      fx="0.75"
      fy="0.75"
      spreadMethod="repeat">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient
      id="GradientReflect"
      cx="0.5"
      cy="0.5"
      r="0.4"
      fx="0.75"
      fy="0.75"
      spreadMethod="reflect">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#GradientPad)" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#GradientRepeat)" />
  <rect
    x="120"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#GradientReflect)" />

  <text x="15" y="30" fill="white" font-family="sans-serif" font-size="12pt">
    Pad
  </text>
  <text x="15" y="140" fill="white" font-family="sans-serif" font-size="12pt">
    Repeat
  </text>
  <text x="125" y="140" fill="white" font-family="sans-serif" font-size="12pt">
    Reflect
  </text>
</svg>
```

{{ EmbedLiveSample('spreadMethod','220','260') }}

余談ですがどちらのグラデーションも、グラデーションのサイズや方向を示すときに用いる単位系を定義する `gradientUnits` 属性を持ちます。この属性は `userSpaceOnUse` または `objectBoundingBox` という値を用いることができます。`objectBoundingBox` は既定値であり、これまで見てきたものです。この値はグラデーションをオブジェクトのサイズに調整するものであるため座標を 0 から 1 の間の値で指定する必要があり、その値は自動的に対象のオブジェクトの大きさに合わせて調整されます。`userSpaceOnUse` は絶対的な単位をとります。従ってオブジェクトがどこにあるかを知る必要があり、またグラデーションを同じ場所に置かなければなりません。前出の radialGradient は以下のように書き換えることができます:

```html
<radialGradient
  id="Gradient"
  cx="60"
  cy="60"
  r="50"
  fx="35"
  fy="35"
  gradientUnits="userSpaceOnUse"></radialGradient>
```

`gradientTransform` 属性を用いてグラデーションを変換させることもできますが、まだ[変換の紹介](/ja/docs/Web/SVG/Tutorial/Basic_Transformations)を行っていないため、後で説明します。

以上の他に、オブジェクトを包み込むボックスが長方形ではない場合に `gradientUnits="objectBoundingBox"` で値を扱うときの注意事項がありますが、それらはやや複雑であり、またそれの説明に詳しい方が現れるのを待たなければなりません。

{{ PreviousNext("Web/SVG/Tutorial/Fills_and_Strokes", "Web/SVG/Tutorial/Patterns") }}

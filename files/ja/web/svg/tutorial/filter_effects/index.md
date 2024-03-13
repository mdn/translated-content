---
title: フィルター効果
slug: Web/SVG/Tutorial/Filter_effects
---

{{ PreviousNext("Web/SVG/Tutorial/Other_content_in_SVG", "Web/SVG/Tutorial/SVG_Fonts") }}

基本的な図形では、ある効果を得るために必要な柔軟性が得られない場合があります。よくある例として、ドロップシャドウはグラデーションの組み合わせでは合理的に作成することができません。フィルターは、 SVG が高度な効果を作り出すための仕組みです。

基本的な例としては、 SVG コンテンツにぼかし効果を加えることが挙げられます。基本的なぼかしはグラデーションの助けを借りて実現できますが、それ以上のことを行うにはぼかしフィルターが必要です。

## 例

フィルターは {{SVGElement('filter')}} 要素で定義され、 SVG ファイルの `<defs>` セクションに置かなければなりません。フィルタータグの間には*プリミティブ*のリストがあり、前の操作（ぼかし、照明効果の追加など）の上に構築される基本的な操作です。作成したフィルターをグラフィック要素に適用するには、 {{SVGAttr('filter')}} 属性を設定します。

```html
<svg
  width="250"
  viewBox="0 0 200 85"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <defs>
    <!-- Filter declaration -->
    <filter
      id="MyFilter"
      filterUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="200"
      height="120">
      <!-- offsetBlur -->
      <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
      <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />

      <!-- litPaint -->
      <feSpecularLighting
        in="blur"
        surfaceScale="5"
        specularConstant=".75"
        specularExponent="20"
        lighting-color="#bbbbbb"
        result="specOut">
        <fePointLight x="-5000" y="-10000" z="20000" />
      </feSpecularLighting>
      <feComposite
        in="specOut"
        in2="SourceAlpha"
        operator="in"
        result="specOut" />
      <feComposite
        in="SourceGraphic"
        in2="specOut"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litPaint" />

      <!-- merge offsetBlur + litPaint -->
      <feMerge>
        <feMergeNode in="offsetBlur" />
        <feMergeNode in="litPaint" />
      </feMerge>
    </filter>
  </defs>

  <!-- Graphic elements -->
  <g filter="url(#MyFilter)">
    <path
      fill="none"
      stroke="#D90000"
      stroke-width="10"
      d="M50,66 c-50,0 -50,-60 0,-60 h100 c50,0 50,60 0,60z" />
    <path
      fill="#D90000"
      d="M60,56 c-30,0 -30,-40 0,-40 h80 c30,0 30,40 0,40z" />
    <g fill="#FFFFFF" stroke="black" font-size="45" font-family="Verdana">
      <text x="52" y="52">SVG</text>
    </g>
  </g>
</svg>
```

{{ EmbedLiveSample('Example', '100%', 120) }}

### ステップ 1

```html
<feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
```

{{SVGElement('feGaussianBlur')}} は `in` "SourceAlpha" を受け取ります。これは元のグラフィックのアルファチャンネルで、 4 のぼかしを適用し，その結果を "blur" という名前の一時的なバッファーに格納します．

### ステップ 2

```html
<feOffset in="blur" dx="4" dy="4" result="offsetBlur" />
```

{{SVGElement('feOffset')}} は、先ほど作成した `in` "blur" を取り込み、結果を右に 4、下に 4 シフトして、バッファー "offsetBlur" に格納するものです。最初の 2 つのプリミティブは、ドロップシャドウを作成するだけです。

### ステップ 3

```html
<feSpecularLighting
  in="offsetBlur"
  surfaceScale="5"
  specularConstant=".75"
  specularExponent="20"
  lighting-color="#bbbbbb"
  result="specOut">
  <fePointLight x="-5000" y="-10000" z="20000" />
</feSpecularLighting>
```

{{SVGelement('feSpecularLighting')}} は `in` "offsetBlur" を受け取り、照明効果を生成し、バッファー "specOut" に `result` を格納します。

### ステップ 4

```html
<feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
```

最初の {{SVGElement('feComposite')}} は、`in` "specOut" と "SourceAlpha" を受け取り、"specOut" の結果が "SourceAlpha" （元のソースグラフィック）より大きくならないようにマスクし、`result` "specOut" を上書きするものです。

### ステップ 5

```html
<feComposite
  in="SourceGraphic"
  in2="specOut"
  operator="arithmetic"
  k1="0"
  k2="1"
  k3="1"
  k4="0"
  result="litPaint" />
```

2 番目の {{SVGElement('feComposite')}} は `in` "SourceGraphic" と "specOut" を取り込み、 "SourceGraphic" の上に "specOut" の結果を重ね、その `result` を "litPaint" に格納します。

### ステップ 6

```html
<feMerge>
  <feMergeNode in="offsetBlur" />
  <feMergeNode in="litPaint" />
</feMerge>
```

最後に、 {{SVGElement('feMerge')}} は、ドロップシャドウである "offsetBlur" と、元のソースグラフィックに照明効果を加えた "litPaint" を結合します。

![元のグラフィック](filters01-0.png)

元のグラフィック

![プリミティブ 1](filters01-1.png)

プリミティブ 1

![プリミティブ 2](filters01-2.png)

プリミティブ 2

![プリミティブ 3](filters01-3.png)

プリミティブ 3

![プリミティブ 4](filters01-4.png)

プリミティブ 4

![プリミティブ 5](filters01-5.png)

プリミティブ 5

![プリミティブ 6](filters01-6.png)

プリミティブ 6

{{ PreviousNext("Web/SVG/Tutorial/Other_content_in_SVG", "Web/SVG/Tutorial/SVG_Fonts") }}

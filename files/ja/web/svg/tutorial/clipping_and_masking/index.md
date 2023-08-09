---
title: クリッピングとマスキング
slug: Web/SVG/Tutorial/Clipping_and_masking
---

{{PreviousNext("SVG/Tutorial/Basic_Transformations", "SVG/Tutorial/Other_content_in_SVG")}}

苦労して作成したオブジェクトの一部を消去することは、一見矛盾しているように見えます。ところが SVG で半円を作成しようとすると、以下のプロパティを使うことにすぐ気がつくでしょう。

**クリッピング**はある要素のうち、他の場所で定義された一部分を取り除くことを指します。この場合は半透明効果をかけることはできず、完全に表示するか全く表示しないかの扱いになります。

**マスキング**は半透明効果やマスクの濃淡値を考慮することで、ソフトエッジ効果をかけることができます。

## クリップの作成

`circle` 要素をもとにして、先に述べた半円を作成しましょう:

```html
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="0" width="200" height="100" />
    </clipPath>
  </defs>

  <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
</svg>
```

(100,100) を中心にした半径 100 の円を描画します。`clip-path` 属性は、`rect` 要素を 1 つ含む `{{SVGElement("clipPath")}}` 要素を参照しています。この長方形は、キャンバスの上半分に黒色で描画されるものです。なお補足として、`clipPath` 要素はたいてい `defs` セクションに置かれます。

ところが、`rect` 要素は描画されません。描画されない代わりにそのピクセルデータは、円の中で最終的にレンダリングするピクセルを決定することに用いられます。長方形は円の上半分だけを覆っているため、円の下半分は消滅します。

{{ EmbedLiveSample('Creating_clips','240','240') }}

これで、path 要素の円弧を扱う必要なしに半円を作りました。クリッピング用に `clipPath` の内部にあるすべてのパスが、そのストロークやトランスフォームと併せて調査および評価されます。そして適用先のオブジェクトのうち、`clipPath` の内容物で決められた透過領域にかかる部分は描画されません。色や不透明度などは、図形の一部を完全に消滅させない限り効果がありません。

## マスキング

マスキングの効果は、グラデーションと共に適用するともっとも印象的です。要素をフェードアウトしたい場合は、マスクを用いることですぐにその効果を得ることができます。

```html
<svg
  width="200"
  height="200"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="Gradient">
      <stop offset="0" stop-color="black" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <mask id="Mask">
      <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)" />
    </mask>
  </defs>

  <rect x="0" y="0" width="200" height="200" fill="green" />
  <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
</svg>
```

下層のレイヤーに緑色で塗りつぶした `rect` 、上層に赤色で塗りつぶした `rect` があります。また後者には、`mask` 要素を指し示す `mask` 属性があります。mask 要素の内容物は `rect` 要素が 1 つあり、これは透明から白色へのグラデーションで塗りつぶしています。この結果、赤色の長方形のピクセルは mask の内容物のアルファ値 (透明度) を継承して、最終的に緑色から赤色へのグラデーションができます:

{{ EmbedLiveSample('Masking','240','240') }}

## `opacity` による透明度

要素全体の透明度を設定することができます。それには `opacity` 属性を用います:

```xml
<rect x="0" y="0" width="100" height="100" opacity=".5" />
```

上記の長方形は、半透明で描画します。fill および stroke について分けられた 2 つの属性 `fill-opacity` と `stroke-opacity` があり、それぞれのプロパティの不透明度を分けて制御します。なお、ストロークは塗りつぶしの上層に描画することに注意してください。このために塗りつぶしもある要素でストロークの不透明度を設定した場合は、ストロークの半分で塗りつぶしが透けて見え、また同時に残り半分で背景が透けて見えます:

```html
<svg
  width="200"
  height="200"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="0" y="0" width="200" height="200" fill="blue" />
  <circle
    cx="100"
    cy="100"
    r="50"
    stroke="yellow"
    stroke-width="40"
    stroke-opacity=".5"
    fill="red" />
</svg>
```

{{ EmbedLiveSample('Transparency_with_opacity','240','240') }}

この例では、青い背景の上に赤い円があります。黄色のストロークに 50% の不透明度を設定しており、事実上 2 色のストロークになります。

## 周知の CSS 技術の利用

Web 開発者が持つツールの中でもっとも強力なもののひとつが、`display: none` です。それゆえ、CSS2 で定義された `visibility` や `clip` と併せて、この CSS プロパティも SVG に取り込むことが決定した点に若干の驚きがあります。過去に設定した `display: none` を元に戻すためには、すべての SVG 要素の初期値が `inline` であると知っておくことが重要です。

{{ PreviousNext("Web/SVG/Tutorial/Basic_Transformations", "Web/SVG/Tutorial/Other_content_in_SVG") }}

---
title: 基本的な座標変換
slug: Web/SVG/Tutorial/Basic_Transformations
l10n:
  sourceCommit: b63ef3f9e01f3bd46009be8e722f7cb8ec0ecee4
---

{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}

これまで作成してきた美しい画像を変形させる準備ができました。しかし始めに、 {{SVGElement("g")}} 要素を正式に紹介しましょう。このヘルパーを用いると、要素の集合全体にプロパティを割り当てることができます。実際のところ、これが唯一の用途です。

## 例

```html
<svg width="30" height="10">
  <g fill="red">
    <rect x="0" y="0" width="10" height="10" />
    <rect x="20" y="0" width="10" height="10" />
  </g>
</svg>
```

{{ EmbedLiveSample('Example', '', '100') }}

以下の座標変換はすべて、要素の `transform` 属性をまとめたものです。座標変換はホワイトスペース文字区切りで連結することで、連鎖させることができます。

## 移動

属性で属性の位置を決めることができますが、移動させなければならないことがあります。そのために、`translate()` 変換が用意されています。

```html
<svg width="40" height="50" style="background-color:#bff;">
  <rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
</svg>
```

この例では長方形を描画しますが、描画位置を (0, 0) ではなく (30, 40) に移します。

{{ EmbedLiveSample('Translation', '', '100') }}

2 番目の値が与えられない場合は、_0_ であるとみなします。

## 回転

要素を回転させることは、よく行われる処理です。これには `rotate()` 座標変換を用います。

```html
<svg width="31" height="31">
  <rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
</svg>
```

この例では、45 度回転した正方形を表示します。 `rotate()` の値は度単位で指定します。

{{ EmbedLiveSample('Rotation', '', '100') }}

## 複数の座標変換

座標変換は、空白で区切るだけで簡単に連結することができます。例えば、 `translate()` と `rotate()` はよく使用される座標変換です。

```html
<svg width="40" height="50" style="background-color:#bff;">
  <rect
    x="0"
    y="0"
    width="10"
    height="10"
    transform="translate(30,40) rotate(45)" />
</svg>
```

この例では、前の例と同じく小さな正方形を表示していますが、同時に 45 度回転させています。

## 傾斜

矩形からひし形を作るために、 `skewX()` と `skewY()` の変換が利用できます。それぞれ、要素をどの程度傾けるかを決める角度を受け取ります。

## 拡大縮小

`scale()` は、要素のサイズを変更します。これは 2 つの数値を受け取って、拡大または縮小の比率として用います。_0.5 は 50% への縮小を表します。2 番目の数値を省略した場合は、1 番目の値と同じであるとみなします。_

## `matrix()` を用いた複雑な座標変換

以上の座標変換はすべて、 2x3 の変換行列で表現することができます。複数の変換を組み合わせるには、結果として得られる行列を `matrix(a, b, c, d, e, f)` 変換で直接設定します。この変換は、以前の座標系から新しい座標系への座標の割り当てを，次のようにして行います。

<math display="block"><semantics><mrow><mo>{</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr></mtable></mrow><annotation encoding="TeX">\left\{ \begin{matrix} x\_{\mathrm{prevCoordSys}} = a x\_{\mathrm{newCoordSys}} + c y\_{\mathrm{newCoordSys}} + e \\ y\_{\mathrm{prevCoordSys}} = b x\_{\mathrm{newCoordSys}} + d y\_{\mathrm{newCoordSys}} + f \end{matrix} \right.</annotation></semantics></math>

[SVG の transform のドキュメントにおける具体例](/ja/docs/Web/SVG/Attribute/transform#general_transformation)を参照してください。このプロパティに関する詳細情報は、[SVG 勧告](https://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined)で得ることができます。

## 座標系に与える効果

座標変換を用いるときは、座標変換を適用した要素内で新たな座標系が確立します。つまり、その要素や子要素に指定する単位が 1:1 のピクセル対応づけに従わない可能性があり、またそれは座標変換に伴う変形、移動、拡大縮小にも波及します。

```html
<svg width="100" height="100">
  <g transform="scale(2)">
    <rect width="50" height="50" />
  </g>
</svg>
```

上記の例で、長方形のサイズは 100x100 ピクセルになります。`userSpaceOnUse` のような属性に依存している場合などに、より興味深い効果が発生します。

{{ EmbedLiveSample('Effects_on_Coordinate_Systems', '', '150') }}

## SVG 内への SVG 埋め込み

HTML とは対照的に、SVG では他の `svg` 要素をシームレスに埋め込むことができます。この方法を用い、内部の `svg` 要素で `viewBox`、`width`、`height` 属性を活用して新たな座標系を作成することもできます。

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
  <svg width="100" height="100" viewBox="0 0 50 50">
    <rect width="50" height="50" />
  </svg>
</svg>
```

上記の例は、基本的にはもうひとつ上の例と同じ効果をもたらすもので、すなわち長方形のサイズは rect 要素で指定したサイズの 2 倍になります。

{{ EmbedLiveSample('Embedding_SVG_in_SVG', '100', '150') }}

{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}

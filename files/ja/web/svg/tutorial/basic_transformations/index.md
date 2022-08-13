---
title: Basic Transformations
slug: Web/SVG/Tutorial/Basic_Transformations
tags:
  - SVG
  - SVG:Tutorial
translation_of: Web/SVG/Tutorial/Basic_Transformations
---
{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}

これまで作成してきた美しい画像を変形させる準備ができました。しかし始めに、{{SVGElement("g")}} 要素を正式に紹介しましょう。このヘルパーを用いると、要素のセット全体にプロパティを割り当てることができます。実際のところ、これが唯一の用途です。例を示します:

```xml
<g fill="red">
  <rect x="0" y="0" width="10" height="10" />
  <rect x="20" y="0" width="10" height="10" />
</g>
```

この結果 2 つの赤い長方形ができます。

以下に示すトランスフォームは、要素の `transform` 属性の要約です。トランスフォームはホワイトスペース文字区切りで連結することで、連鎖させることができます。

## 移動

適切な属性を用いて要素を配置できる場合でも、要素をあちこちに移動させる必要があるかもしれません。この用途のために、`translate()` トランスフォームを用意しています。

```xml
<rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
```

この例では長方形を描画し、描画位置を (0, 0) ではなく (30, 40) に移します。

2 番目の値が与えられない場合は、_0_ であるとみなします。

## 回転

要素を回転させることは、よく行われる処理です。これには `rotate()` トランスフォームを用います:

```xml
<rect x="20" y="20" width="20" height="20" transform="rotate(45)" />
```

この例では、45 度回転した正方形を表示します。`rotate()` の値は "度" 単位で与えます。

## 傾斜

長方形からひし形を作成するために、`skewX()` および `skewY()` トランスフォームを利用できます。`どちらのトランスフォームも`、要素をどれだけ傾けるかを表す角度を与えます。

## 拡大と縮小

`scale()` は、要素のサイズを変更します。これは 2 つの数値を受け取って、拡大または縮小の比率として用います。_0.5_ は 50% への縮小を表します。2 番目の数値を省略した場合は、1 番目の値と同じであるとみなします。

## `matrix()` を用いた複雑なトランスフォーム

前出のトランスフォームはすべて、3x3 のトランスフォーム行列で表現できます。複数のトランスフォームをまとめるために、`matrix(A1, A2, B1, B2, C1, C2)` トランスフォームを用いて結果の行列を直接設定することができます。このプロパティに関する詳細情報は、[SVG 勧告](http://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined)で得ることができます。

## 座標系に与える効果

トランスフォームを用いるときは、トランスフォームを適用した要素内で新たな座標系が確立します。つまり、その要素や子要素に指定する単位が 1:1 のピクセル対応づけに従わない可能性があり、またそれはトランスフォームに伴う変形、移動、拡大縮小にも波及します。

```xml
<g transform="scale(2)">
  <rect width="50" height="50" />
</g>
```

上記の例で、長方形のサイズは 100x100 ピクセルになります。`userSpaceOnUse` のような属性に依存している場合などに、より興味深い効果が発生します。

## SVG 内への SVG 埋め込み

HTML とは対照的に、SVG では他の `svg` 要素をシームレスに埋め込むことができます。この方法を用い、内部の `svg` 要素で `viewBox`、`width`、`height` 属性を活用して新たな座標系を作成することもできます。

```xml
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <svg width="100" height="100" viewBox="0 0 50 50">
    <rect width="50" height="50" />
  </svg>
</svg>
```

上記の例は、基本的にはもうひとつ上の例と同じ効果をもたらすもので、すなわち長方形のサイズは rect 要素で指定したサイズの 2 倍になります。

{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}

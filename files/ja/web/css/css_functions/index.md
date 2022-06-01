---
title: CSS 関数記法
slug: Web/CSS/CSS_Functions
tags:
  - CSS
  - CSS データ型
  - CSS 関数
  - 関数記法
  - 関数
  - リファレンス
  - 型
  - データ型
translation_of: Web/CSS/CSS_Functions
---
{{CSSRef}}

**CSS 関数記法**は [CSS 値](/ja/docs/Web/CSS/CSS_Values_and_Units)の一種で、より複雑なデータ型を表現したり、特別なデータ処理や計算を呼び出したりすることができます。

## 構文

```css
selector {
  property: functional-notation( [argument]? [, argument]! );
}
```

構文は、**関数表記の名前**から始まり、左括弧 `(` で始まります。次に記法の引数が続き、関数は閉じ括弧 `)` で終わります。

関数は CSS のプロパティ値と同様の形式で複数の引数を取ることができます。ホワイトスペースは許可されていますが、括弧内では省略可能です。関数表記によって、複数の引数がカンマで区切られていたり、空白を使用していたりします。

## 座標変換関数

これらの関数は、 CSS の {{cssxref("&lt;transform-function&gt;")}} [データ型](/ja/docs/Web/CSS/CSS_Types) が {{cssxref("transform")}} の値として使用される際に用いられます。

- {{cssxref("transform-function/matrix()", "matrix()")}}
  - : 二次元の同次変換行列を記述します。
- {{cssxref("transform-function/matrix3d()", "matrix3d()")}}
  - : 三次元の変換を 4 × 4 の同次行列で記述します。
- {{cssxref("transform-function/perspective()", "perspective()")}}
  - : ユーザーと z=0 平面との間の距離を設定します。
- {{cssxref("transform-function/rotate()", "rotate()")}}
  - : 要素を二次元平面上で特定の点を中心に回転します。
- {{cssxref("transform-function/rotate3d()", "rotate3d()")}}
  - : 要素を三次元空間で特定の軸を中心に回転します。
- {{cssxref("transform-function/rotateX()", "rotateX()")}}
  - : 要素を水平軸を中心に回転します。
- {{cssxref("transform-function/rotateY()", "rotateY()")}}
  - : 要素を垂直軸を中心に回転します。
- {{cssxref("transform-function/rotateZ()", "rotateZ()")}}
  - : 要素を Z 軸を中心に回転します。
- {{cssxref("transform-function/scale()", "scale()")}}
  - : 要素を二次元平面上で拡大または縮小します。
- {{cssxref("transform-function/scale3d()", "scale3d()")}}
  - : 要素を三次元空間で拡大または縮小します。
- {{cssxref("transform-function/scaleX()", "scaleX()")}}
  - : 要素を水平に拡大または縮小します。
- {{cssxref("transform-function/scaleY()", "scaleY()")}}
  - : 要素を垂直に拡大または縮小します。
- {{cssxref("transform-function/scaleZ()", "scaleZ()")}}
  - : 要素を Z 軸方向に拡大または縮小します。
- {{cssxref("transform-function/skew()", "skew()")}}
  - : 要素を二次元平面上で歪ませます。
- {{cssxref("transform-function/skewX()", "skewX()")}}
  - : 要素を水平方向に歪ませます。
- {{cssxref("transform-function/skewY()", "skewY()")}}
  - : 要素を垂直方向に歪ませます。
- {{cssxref("transform-function/translate()", "translate()")}}
  - : 要素を二次元平面上で平行移動させます。
- {{cssxref("transform-function/translate3d()", "translate3d()")}}
  - : 要素を三次元空間で平行移動させます。
- {{cssxref("transform-function/translateX", "translateX()")}}
  - : 要素を水平方向に平行移動させます。
- {{cssxref("transform-function/translateY()", "translateY()")}}
  - : 要素を垂直方向に平行移動させます。
- {{cssxref("transform-function/translateZ()", "translateZ()")}}
  - : 要素を Z 軸方向に平行移動させます。

## 数学関数

数学関数は、 CSS の数値を数式として記述することができるものです。

- {{cssxref("calc()")}}
  - : CSS の数値に対して基本的な算術演算を行うことができる数学関数です。
- {{cssxref("clamp()")}}
  - : 最小値、中央値、最大値を取り、その中央値の計算を表す比較関数です。
- {{cssxref("max()")}}
  - : 値のリストの最大値を表す比較関数です。
- {{cssxref("min()")}}
  - : 値のリストの最小値を表す比較関数です。
- {{cssxref("abs()")}} {{Experimental_Inline}}
  - : 計算結果を受け取り、絶対値を返します。
- {{cssxref("acos()")}} {{Experimental_Inline}}
  - : An inverse trigonometric function the angle returned must be normalized to the range \[0deg, 180deg];.
- {{cssxref("asin()")}} {{Experimental_Inline}}
  - : An inverse trigonometric function the angle returned must be normalized to the range \[-90deg, 90deg].
- {{cssxref("atan()")}} {{Experimental_Inline}}
  - : An inverse trigonometric function the angle returned must be normalized to the range \[-90deg, 90deg].
- {{cssxref("atan2()")}} {{Experimental_Inline}}
  - : Contains two comma-separated calculations, A and B. A and B can resolve to any {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, or {{cssxref("&lt;percentage&gt;")}}, but must have the same type, or else the function is invalid.
- {{cssxref("cos()")}} {{Experimental_Inline}}
  - : Contains a single calculation which must resolve to either a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}}.
- {{cssxref("exp()")}} {{Experimental_Inline}}
  - : Contains one calculation which must resolve to a {{cssxref("&lt;number&gt;")}}, and returns the same value as pow(e, A) as a {{cssxref("&lt;number&gt;")}}.
- {{cssxref("hypot()")}} {{Experimental_Inline}}
  - : Contains one or more comma-separated calculations, and returns the length of an N-dimensional vector with components equal to each of the calculations.
- {{cssxref("log()")}} {{Experimental_Inline}}
  - : Contains one or two calculations (representing the value to be logarithmed, and the base of the logarithm, defaulting to e), which must both resolve as a {{cssxref("&lt;number&gt;")}}, and returns the logarithm base B of the value A, as a {{cssxref("&lt;number&gt;")}}.
- {{cssxref("mod()")}} {{Experimental_Inline}}
  - : A modulus function that contains two calculations A and B, and returns the difference between A and the nearest integer multiple of B either above or below A.
- {{cssxref("pow()")}} {{Experimental_Inline}}
  - : Contains two comma-separated calculations A and B, both of which must resolve as a {{cssxref("&lt;number&gt;")}}, and returns the result of raising A to the power of B, returning the value as a {{cssxref("&lt;number&gt;")}}.
- {{cssxref("rem()")}} {{Experimental_Inline}}
  - : A modulus function that contains two calculations A and B, and returns the difference between A and the nearest integer multiple of B either above or below A.
- {{cssxref("round()")}} {{Experimental_Inline}}
  - : Contains an optional rounding strategy, and two calculations A and B, and returns the value of A, rounded according to the rounding strategy, to the nearest integer multiple of B either above or below A.
- {{cssxref("sign()")}} {{Experimental_Inline}}
  - : 計算結果を取り、数値が負であれば -1 を返し、数値が正であれば \+1 を返し、数値が 0⁺ であれば 0⁺ を返し、数値が 0⁻ であれば 0⁻ を返します。
- {{cssxref("sin()")}} {{Experimental_Inline}}
  - : Contains a single calculation which must resolve to either a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}}.
- {{cssxref("sqrt()")}} {{Experimental_Inline}}
  - : Contains a single calculation which must resolve to a {{cssxref("&lt;number&gt;")}}, and returns the square root of the value as a {{cssxref("&lt;number&gt;")}}.
- {{cssxref("tan()")}} {{Experimental_Inline}}
  - : Contains a single calculation which must resolve to either a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}}.

## フィルター関数

**`<filter-function>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、入力画像の外見を変更することができるグラフィック効果を表します。 {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティで使用されます。

- {{cssxref("filter-function/blur()", "blur()")}}
  - : 画像をぼかします。
- {{cssxref("filter-function/brightness()", "brightness()")}}
  - : 画像を明るくしたり暗くしたりします。
- {{cssxref("filter-function/contrast()", "contrast()")}}
  - : 画像のコントラストを上げたり下げたりします。
- {{cssxref("filter-function/drop-shadow()", "drop-shadow()")}}
  - : 画像の背後にドロップシャドウを適用します。
- {{cssxref("filter-function/grayscale()", "grayscale()")}}
  - : 画像をグレイスケールに変換します。
- {{cssxref("filter-function/hue-rotate()", "hue-rotate()")}}
  - : 画像の色相を全体的に変更します。
- {{cssxref("filter-function/invert()", "invert()")}}
  - : 画像の色を反転させます。
- {{cssxref("filter-function/opacity()", "opacity()")}}
  - : 画像を半透明にします。
- {{cssxref("filter-function/saturate()", "saturate()")}}
  - : 入力画像の彩度を上げたり下げたりします。
- {{cssxref("filter-function/sepia()", "sepia()")}}
  - : 画像をセピア調に変換します。

## 色関数

様々な色の表現を指定する関数です。 {{cssxref("&lt;color_value&gt;","&lt;color&gt;")}} が有効な場所であればどこでも使用できます。

- {{cssxref("color_value/color()", "color()")}} {{Experimental_Inline}}
  - : （他のほとんどの色関数が操作する暗黙の sRGB 色空間ではなく）特定の指定された色空間で色を指定できるようにします。
- {{cssxref("color_value/color-mix()", "color-mix()")}} {{Experimental_Inline}}
  - : 2 つの {{cssxref("color_value","color")}} 値を受け取り、それらを指定された色空間で与えられた量だけ混合した結果を返します。
- {{cssxref("color_value/color-contrast()", "color-contrast()")}} {{Experimental_Inline}}
  - : {{cssxref("color_value","color")}} 値を受け取り、他の {{cssxref("color_value", "color")}} 値のリストと比較し、リストの中から最もコントラストの強いものを選択します。
- {{cssxref("color_value/device-cmyk()", "device-cmyk()")}} {{Experimental_Inline}}
  - : CMYK 色をデバイスに依存しない方法で表現するために使用します。
- {{cssxref("color_value/hsl()", "hsl()")}}
  - : HSL カラーモデルは、色相、彩度、明度の各成分によって色を定義します。オプションのアルファ成分は、色の透明度を表します。
- {{cssxref("color_value/hsla()", "hsla()")}}
  - : HSL カラーモデルは、色相、彩度、明度の各成分によって色を定義します。オプションのアルファ成分は、色の透明度を表します。
- {{cssxref("color_value/hwb()", "hwb()")}} {{Experimental_Inline}}
  - : HWB (Hue-Whiteness-Blackness の略) も HSL と同様に色を指定する方法の一つです。
- {{cssxref("color_value/lab()", "lab()")}} {{Experimental_Inline}}
  - : Lab カラーはデバイスに依存せず、色の物理的な測定値を規定するものです。
- {{cssxref("color_value/lch()", "lch()")}} {{Experimental_Inline}}
  - : LCH カラーはデバイスに依存せず、彩度と色相の極座標で色を指定します。
- {{cssxref("color_value/rgb()", "rgb()")}}
  - : RGB カラーモデルは、赤、緑、青の 3 つの成分によって色を定義します。オプションのアルファ成分は、色の透明度を表します。
- {{cssxref("color_value/rgba()", "rgba()")}}
  - : RGB カラーモデルは、赤、緑、青の 3 つの成分によって色を定義します。アルファ成分は、色の透明度を表します。

## 画像関数

これらの関数は、プロパティの値として {{cssxref("&lt;image&gt;")}} が有効な場所ならばどこでも使用できます。

- {{cssxref("gradient/conic-gradient()", "conic-gradient()")}}
  - : 扇形グラデーションは、円を描くように徐々に色を変化させます。
- {{cssxref("image/image()","image()")}} {{Experimental_Inline}}
  - : {{cssxref("&lt;image&gt;")}} を {{cssxref("url()")}} 関数と同様の方法で定義しますが、画像の方向の指定、優先画像に対応していない場合の代替画像の指定などの機能を追加しています。
- {{cssxref("image/image-set()","image-set()")}} {{Experimental_Inline}}
  - : 主に高ピクセル密度の画面のために、与えられたセットの中から最も適切な CSS 画像をブラウザーに選択させる方法です。
- {{cssxref("gradient/linear-gradient()","linear-gradient()")}}
  - : 線形グラデーションは、想像上の線に沿って徐々に色を変化させます。
- {{cssxref("gradient/radial-gradient()","radial-gradient()")}}
  - : 放射グラデーションは、中心点（原点）から徐々に色を変化させていきます。
- {{cssxref("gradient/repeating-linear-gradient()","repeating-linear-gradiant()")}}
  - : `linear-gradient()` に似ていて、同じ引数を取りますが、コンテナー全体を覆うように、すべての方向に無限に色停止点を繰り返します。
- {{cssxref("gradient/repeating-radial-gradient()","repeating-radial-gradient()")}}
  - : `radial-gradient()` に似ていて、同じ引数を取りますが、コンテナー全体を覆うように、すべての方向に無限に色停止点を繰り返します。
- {{cssxref("gradient/repeating-conic-gradient()","repeat-conic-gradiant()")}}
  - : `conic-gradient()` に似ていて、同じ引数を取りますが、コンテナー全体を覆うように、すべての方向に無限に色停止点を繰り返します。
- {{cssxref("cross-fade()")}}
  - : 2 枚以上の画像を所定の透過度で合成するために使用することができます。
- {{cssxref("element()")}}
  - : 任意の HTML 要素から生成された \<image> 値を定義します。
- {{cssxref("paint()")}}
  - : PaintWorklet で生成された \<image> の値を定義します。

## カウンター関数

カウンター関数は一般に {{cssxref("content")}} プロパティと共に使われますが、理論的には {{cssxref("&lt;string&gt;")}} に対応しているところならば使用することができます。

- {{cssxref("counter()")}}
  - : その名前のカウンターが存在すれば、現在の値を示す文字列を返します。
- {{cssxref("counters()")}}
  - : 入れ子のカウンターを有効にし、指定されたカウンターが存在すれば、その現在の値を表す文字列を連結して返します。
- {{cssxref("symbols()")}}
  - : カウンターのスタイルをインラインで、直接定義することができます。

## フォント関数

{{cssxref("font-variant-alternates")}} プロパティは代替字形の使用を制御し、以下の関数がこのプロパティの値になります。

- {{cssxref("font-variant-alternates/stylistic()", "stylistic()")}}
  - : This function enables stylistic alternates for individual characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `salt`, like `salt 2`.
- {{cssxref("font-variant-alternates/styleset()", "styleset()")}}
  - : This function enables stylistic alternatives for sets of characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `ssXY`, like `ss02`.
- {{cssxref("font-variant-alternates/character-variant()", "character-variant()")}}
  - : This function enables specific stylistic alternatives for characters. It is similar to `styleset()`, but doesn't create coherent glyphs for a set of characters; individual characters will have independent and not necessarily coherent styles. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `cvXY`, like `cv02`.
- {{cssxref("font-variant-alternates/swash()", "swash()")}}
  - : This function enables [swash](https://en.wikipedia.org/wiki/Swash_%28typography%29) glyphs. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType values `swsh` and `cswh`, like `swsh 2` and `cswh 2`.
- {{cssxref("font-variant-alternates/ornaments()", "ornaments()")}}
  - : This function enables ornaments, like [fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) and other dingbat glyphs. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `ornm`, like `ornm 2`.
- {{cssxref("font-variant-alternates/annotation()", "annotation()")}}
  - : This function enables annotations, like circled digits or inverted characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `nalt`, like `nalt 2`.

## シェイプ関数

以下の関数は {{cssxref("&lt;basic-shape&gt;")}} データ型の値として使用することができます。これは {{cssxref("clip-path")}}, {{cssxref("offset-path")}}, {{cssxref("shape-outside")}} の各プロパティで使用されます。

- {{cssxref("basic-shape/circle()","circle()")}}
  - : 円を定義します。
- {{cssxref("basic-shape/ellipse()","ellipse()")}}
  - : 楕円を定義します。
- {{cssxref("basic-shape/inset()","inset()")}}
  - : 内部の長方形を定義します。
- {{cssxref("basic-shape/polygon()","polygon()")}}
  - : 多角形を定義します。
- {{cssxref("path()")}}
  - : SVG パス文字列を受け取り、シェイプを描画できるようにするために使用されます。

## 参照関数

以下の関数は、他の場所で定義された値をプロパティの値として参照するために使用されます。

- {{cssxref("attr()")}}
  - : 選択された要素の属性の値を受け取り、スタイルシートの中で使うために使用されます。
- {{cssxref("env()")}}
  - : ユーザーエージェントが定義した環境変数の値を CSS に挿入するために使用することができます。
- {{cssxref("url()")}}
  - : 値としてファイルを含めるために使用します。
- {{cssxref("var()")}}
  - : 他のプロパティの値の一部に代わってカスタムプロパティの値を挿入できます。

## CSS グリッド関数

以下の関数は、CSS グリッドを定義するために使用されます。

- {{cssxref("fit-content()")}}
  - : 指定された寸法を `min(max-content, max(min-content, 引数))` の式に従って有効な範囲の寸法に収めます。
- {{cssxref("minmax()")}}
  - : 指定された寸法を `min(max-content, max(min-content, 引数))` の式に従って有効な範囲の寸法に収めます。
- {{cssxref("repeat()")}}
  - : 指定された寸法を `min(max-content, max(min-content, 引数))` の式に従って有効な範囲の寸法に収めます。

## 仕様書

| 仕様書                        | 状態                           | 備考                                                                                                                                                                                                                                                               |
| ------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS4 Values")}} | {{Spec2("CSS4 Values")}} | `toggle()`, `attr()`, `calc()`, `min()`, `max()`, `clamp()`, `round()`, `mod()`, `rem()`, `mod()`, `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, `atan2()`, `pow()`, `sqrt()`, `hypot()`, `log()`, `exp()`, `abs()`, `sign()` の関数表記を追加。 |
| {{SpecName("CSS3 Values")}} | {{Spec2("CSS3 Values")}} | `calc()` の関数表記を追加。 |
| {{SpecName("CSS4 Colors")}} | {{Spec2("CSS4 Colors")}} | `rgb()`, `rgba()`, `hsl()`, `hsla()` の関数表記にカンマなしの構文を追加。 `rgb()` と `hsl()` にアルファ値を許可し、 `rgba()` と `hsla()` をそれらの (非推奨の) 別名とした。 `hwb()`, `device-cmyk()`, `color()` 関数を追加。 |
| {{SpecName("CSS3 Colors")}} | {{Spec2("CSS3 Colors")}} | `rgba()`, `hsl()`, `hsla()` の関数表記を追加。 |
| {{SpecName("CSS4 Images")}} | {{Spec2("CSS4 Images")}} | `element()`, `image()`, `image-set()`, `conic-gradient()` の関数表記を追加。 |

## 関連情報

- [CSS 値と単位](/ja/docs/Web/CSS/CSS_Values_and_Units)
- [CSS 入門: 値と単位](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)

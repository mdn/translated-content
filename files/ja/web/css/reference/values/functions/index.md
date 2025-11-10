---
title: CSS 値関数
slug: Web/CSS/Reference/Values/Functions
original_slug: Web/CSS/CSS_values_and_units/CSS_value_functions
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS 値関数**は、 [CSS](/ja/docs/Web/CSS) プロパティで使用される[値](/ja/docs/Web/CSS/Guides/Values_and_units)を返すために、特別なデータ処理や計算を呼び出す文です。 CSS の値関数はより複雑な[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)を表し、返値を計算するためにいくつかの入力引数を取ることがあります。

## 構文

```plain
セレクター {
  プロパティ: 関数([引数]? [, 引数]!);
}
```

構文は、**関数の名前**から始まり、左括弧 `(` で始まります。
次に引数が続き、関数は閉じ括弧 `)` で終わります。

関数は CSS のプロパティ値と同様の形式で複数の引数を取ることができます。カッコ内ではホワイトスペースを使用することができますが、オプションです。一部の関数記法では、複数の引数をカンマで区切っていたり、空白で区切っていたりします。

> [!NOTE]
> CSS 値関数はプロパティ値として使用されるものであり、擬似クラスと混同しないでください。[関数形式の擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes#関数擬似クラス)、[言語擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes#言語擬似クラス)、または一部の[ツリー構造擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes#ツリー構造擬似クラス)は引数を必要としますが、値関数ではありません。条件付きアットルールも値関数ではありません。括弧はグループ化のために使用しています。

## 座標変換関数

CSS における {{CSSxRef("&lt;transform-function&gt;")}} [データ型](/ja/docs/Web/CSS/Reference/Values/Data_types) は、表示の座標変換を表します。 {{CSSxRef("transform")}} の値として使用されます。

### 移動関数

- {{CSSxRef("transform-function/translateX", "translateX()")}}
  - : 要素を水平方向に平行移動させます。
- {{CSSxRef("transform-function/translateY", "translateY()")}}
  - : 要素を垂直方向に平行移動させます。
- {{CSSxRef("transform-function/translateZ", "translateZ()")}}
  - : 要素を Z 軸方向に平行移動させます。
- {{CSSxRef("transform-function/translate", "translate()")}}
  - : 要素を二次元平面上で平行移動させます。
- {{CSSxRef("transform-function/translate3d", "translate3d()")}}
  - : 要素を三次元空間で平行移動させます。

### 回転関数

- {{CSSxRef("transform-function/rotateX", "rotateX()")}}
  - : 要素を水平軸を中心に回転します。
- {{CSSxRef("transform-function/rotateY", "rotateY()")}}
  - : 要素を垂直軸を中心に回転します。
- {{CSSxRef("transform-function/rotateZ", "rotateZ()")}}
  - : 要素を Z 軸を中心に回転します。
- {{CSSxRef("transform-function/rotate", "rotate()")}}
  - : 要素を二次元平面上で特定の点を中心に回転します。
- {{CSSxRef("transform-function/rotate3d", "rotate3d()")}}
  - : 要素を三次元空間で特定の軸を中心に回転します。

### 変倍関数

- {{CSSxRef("transform-function/scaleX", "scaleX()")}}
  - : 要素を水平に拡大または縮小します。
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : 要素を垂直に拡大または縮小します。
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : 要素を Z 軸方向に拡大または縮小します。
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : 要素を二次元平面上で拡大または縮小します。
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : 要素を三次元空間で拡大または縮小します。

### 歪め関数

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : 要素を水平方向に歪ませます。
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : 要素を垂直方向に歪ませます。
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : 要素を二次元平面上で歪ませます。

### 行列関数

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : 二次元の同次変換行列を記述します。
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : 三次元の変換を 4 × 4 の同次行列で記述します。

### 視点関数

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : ユーザーと z=0 平面との間の距離を設定します。

## 数学関数

数学関数は、 CSS の数値を数式として記述することができるものです。

下記の各ページには、数学関数の構文、ブラウザー互換性データ、例などの詳細情報が格納されています。CSS 数学関数の全体的な紹介は、[CSS 数学関数の使用](/ja/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)を参照してください。

### 基本演算

- {{CSSxRef("calc", "calc()")}}
  - : 数値に対して基本的な算術計算をを行います。
- {{CSSxRef("calc-size", "calc-size()")}}
  - : `auto`、`fit-content`、`max-content` などの内在サイズ値の計算を行います。これらの値は、`calc()` 関数では対応していません。

### 比較関数

- {{CSSxRef("min", "min()")}}
  - : 値のリストのうち最小値を計算します。
- {{CSSxRef("max", "max()")}}
  - : 値のリストのうち最大値を計算します。
- {{CSSxRef("clamp", "clamp()")}}
  - : 最小値、中央値、最大値を取り、その中央値を計算します。

### 段階値関数関数

- {{CSSxRef("round", "round()")}}
  - : 四捨五入法に基づき、丸めた数値を計算します。
- {{CSSxRef("mod", "mod()")}}
  - : ある数値を別の数で割ったときのモジュラス（除数と同じ符号を持つ）を計算します。
- {{CSSxRef("rem", "rem()")}}
  - : ある数値を別の数で割ったときの余り（被除数と同じ符号を持つ）を計算します。

### 三角関数

- {{CSSxRef("sin", "sin()")}}
  - : 数値の三角正弦を計算します。
- {{CSSxRef("cos", "cos()")}}
  - : 数値の三角余弦を計算します。
- {{CSSxRef("tan", "tan()")}}
  - : 数値の三角正接を計算します。
- {{CSSxRef("asin", "asin()")}}
  - : 数値の三角逆正弦を計算します。
- {{CSSxRef("acos", "acos()")}}
  - : 数値の三角逆余弦を計算します。
- {{CSSxRef("atan", "atan()")}}
  - : 数値の三角逆正接を計算します。
- {{CSSxRef("atan2", "atan2()")}}
  - : 平面上の2つの数の三角逆正接を計算します。

### 指数関数

- {{CSSxRef("pow", "pow()")}}
  - : 底のべき乗を計算します。
- {{CSSxRef("sqrt", "sqrt()")}}
  - : 数値の平方根を計算します。
- {{CSSxRef("hypot", "hypot()")}}
  - : 引数の 2 乗の和の平方根を計算します。
- {{CSSxRef("log", "log()")}}
  - : 数値の対数を計算します。
- {{CSSxRef("exp", "exp()")}}
  - : `e`のべき乗を計算します。

### 符号関連関数

- {{CSSxRef("abs", "abs()")}}
  - : 数値の絶対値を計算します。
- {{CSSxRef("sign", "sign()")}}
  - : 数値の符号（正または負）を計算します。

## フィルター関数

{{CSSxRef("&lt;filter-function&gt;")}} は CSS の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、入力画像の外見を変更することができるグラフィック効果を表します。 {{CSSxRef("filter")}} および {{CSSxRef("backdrop-filter")}} プロパティで使用されます。

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : 画像のガウスぼかしを大きくします。
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : 画像を明るくしたり暗くしたりします。
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : 画像のコントラストを上げたり下げたりします。
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : 画像の背後にドロップシャドウを適用します。
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : 画像をグレイスケールに変換します。
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : 画像の色相を全体的に変更します。
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : 画像の色を反転させます。
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : 画像を半透明にします。
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : 入力画像の彩度を上げたり下げたりします。
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : 画像をセピア調に変換します。

## 色関数

{{CSSxRef("color_value","&lt;color&gt;")}} CSS [データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)は、様々な色の表現を指定します。

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : ある色を、赤、緑、青とアルファ（透明度）の成分で定義します。
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : ある色を、色相、彩度、明度とアルファ（透明度）の成分で定義します。
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : ある色を、色相、白色度、黒色度の成分で定義します。
- {{CSSxRef("color_value/lch", "lch()")}}
  - : ある色を、明度、彩度、色相の成分で定義します。
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : ある色を、明度、彩度、色相とアルファ（透明度）の成分で定義します。
- {{CSSxRef("color_value/lab", "lab()")}}
  - : ある色を、明度、 lab 色空間の a 軸距離と b 軸距離で定義します。
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : ある色を、明度、 lab 色空間の a 軸距離と b 軸距離とアルファ（透明度）で定義します。
- {{CSSxRef("color_value/color", "color()")}}
  - : 暗黙の sRGB 色空間ではなく、具体的な色空間を指定します。
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : 指定された色空間の 2 つの色値を、指定された量だけ混合します。
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : 指定された色に対して、色のコントラストが最大の色を返します。
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : 端末に依存しない方法で CMYK の色を定義します。
- {{CSSXref("color_value/light-dark", "light-dark()")}}
  - : 現在の配色に基づいて、指定された 2 色のうちの 1 色を返します。

## 画像関数

{{CSSxRef("&lt;image&gt;")}} は CSS の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、画像やグラデーションのグラフィック表現を提供します。

### グラデーション関数

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : 線形グラデーションは、想像上の線に沿って徐々に色を変化させます。
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : 放射グラデーションは、中心点（原点）から徐々に色を変化させます。
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : 扇形グラデーションは、円を描くように徐々に色を変化させます。
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : `linear-gradient()` に似ていて、同じ引数を取りますが、コンテナー全体を覆うように、すべての方向に無限に色経由点を繰り返します。
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : `radial-gradient()` に似ていて、同じ引数を取りますが、コンテナー全体を覆うように、すべての方向に無限に色経由点を繰り返します。
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : `conic-gradient()` に似ていて、同じ引数を取りますが、コンテナー全体を覆うように、すべての方向に無限に色経由点を繰り返します。

### 画像関数

- {{CSSxRef("image/image","image()")}}
  - : {{CSSxRef("&lt;image&gt;")}} を {{cssxref("url_value", "&lt;url&gt;")}} 関数と同様の方法で定義しますが、画像の方向の指定、優先画像に対応していない場合の代替画像の指定などの機能を追加しています。
- {{CSSxRef("image/image-set","image-set()")}}
  - : 主に高ピクセル密度の画面のために、与えられたセットの中から最も適切な CSS 画像をブラウザーに選択させる方法です。
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : 2 枚以上の画像を所定の透過度で合成するために使用することができます。
- {{CSSxRef("element", "element()")}}
  - : 任意の HTML 要素から生成された {{CSSxRef("&lt;image&gt;")}} 値を定義します。
- {{CSSxRef("image/paint", "paint()")}}
  - : PaintWorklet で生成された {{CSSxRef("&lt;image&gt;")}} の値を定義します。

## カウンター関数

CSS カウンター関数は一般に {{CSSxRef("content")}} プロパティと共に使われますが、理論的には {{CSSxRef("&lt;string&gt;")}} に対応しているところならば使用することができます。

- {{CSSxRef("counter", "counter()")}}
  - : その名前のカウンターが存在すれば、現在の値を示す文字列を返します。
- {{CSSxRef("counters", "counters()")}}
  - : 入れ子のカウンターを有効にし、指定されたカウンターが存在すれば、その現在の値を表す文字列を連結して返します。
- {{CSSxRef("symbols", "symbols()")}}
  - : カウンターのスタイルをインラインで、直接定義することができます。

## シェイプ関数

{{CSSxRef("&lt;basic-shape&gt;")}} は CSS の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、グラフィックの図形を表します。これは {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}}, {{CSSxRef("shape-outside")}} の各プロパティで使用されます。

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : 円を定義します。
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : 楕円を定義します。
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : 内部の長方形を定義します。
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : 参照ボックスの上端と左端からの距離を使用して長方形図形を定義します。
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : 参照ボックスの上端と左端からの指定した距離と、長方形の幅と高さを指定して、長方形の図形を定義します。
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : 多角形を定義します。
- {{CSSxRef("basic-shape/path", "path()")}}
  - : SVG パス文字列を受け取り、シェイプを描画できるようにするために使用されます。
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : 描画する図形を定義するコマンドのカンマ区切りリストを受け入れます。
- {{CSSxRef("ray", "ray()")}}
  - : `offset-path` のみで有効であり、アニメーションする要素が従うことができる行セグメントを定義します。

## 参照関数

以下の関数は、他の場所で定義された値をプロパティの値として参照するために使用されます。

- {{CSSxRef("attr", "attr()")}}
  - : HTML 要素で定義された属性を使用します。
- {{CSSxRef("env", "env()")}}
  - : ユーザーエージェントが定義した環境変数の値です。
- {{CSSxRef("if", "if()")}}
  - : [スタイルクエリー](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)、[機能クエリー](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)の結果に応じて、プロパティ値を条件付きで設定します。
- {{cssxref("url_function", "url()")}}
  - : 値としてファイルを含めるために使用します。
- {{CSSxRef("var", "var()")}}
  - : 他のプロパティの値の一部に代わってカスタムプロパティの値を挿入できます。

## グリッド関数

以下の関数は、[CSS グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)を定義するために使用されます。

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : 指定された寸法を `min(最大寸法, max(最小寸法, 引数))` の式に従って有効な範囲の寸法に収めます。
- {{CSSxRef("minmax", "minmax()")}}
  - : _min_ 以上、 _max_ 以下の寸法の範囲を定義します。
- {{CSSxRef("repeat", "repeat()")}}
  - : トラックリストの繰り返し断片を表し、多数の列または行を繰り返しパターンで作成できます。

## フォント関数

CSS フォント関数は {{CSSxRef("font-variant-alternates")}} プロパティで使用し、選択字形の使用を制御します。

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : 個々の文字に対するスタイル選択を有効にします。引数は数字に割り当てられたフォント固有の名前です。これは OpenType の値 `salt` に対応し、`salt 2` のようになります。
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : 文字の集合に対するスタイル選択を有効にします。引数はフォントに固有の名前で、数字に割り当てられたものです。これは OpenType の値 `ssXY` に対応し、例えば `ss02` のようになります。
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : 文字に特定のスタイル選択を有効にします。これは `styleset()` と似ていますが、設定した文字に対して一貫性のある字形を作成するわけではありません。個々の文字は独立した、必ずしも一貫性のあるスタイルを持っているわけではありません。引数はフォント固有の名前で、数字に割り当てられたものです。これは OpenType の値 `cvXY` に対応し、例えば `cv02` のようになります。
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : [swash](https://en.wikipedia.org/wiki/Swash_%28typography%29) 字形を有効にします。引数は数字に割り当てられたフォント固有の名前です。これは OpenType の値 `swsh` と `cswh` に対応し、例えば `swsh 2` や `cswh 2` のようになります。
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : [フルーロン](https://ja.wikipedia.org/wiki/フルーロン)や他にもディングバット字形などの装飾を有効にします。引数は数字に割り当てられたフォント固有の名前です。これは OpenType の値 `ornm` に対応し、例えば `ornm 2` のようになります。
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : 丸付き数字や反転文字などの注記を有効にします。引数は数字に割り当てられたフォント固有の名前です。これは OpenType の値 `nalt` に対応し、例えば `nalt 2` のようになります。

## イージング関数

{{CSSxRef("&lt;easing-function&gt;")}} は CSS の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、数学的な関数を表します。これはトランジション及びアニメーションのプロパティに使用されます。

- {{cssxref("easing-function/linear", "linear()")}}
  - : 点間を直線的に補間するイージング関数です。
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : 3 次ベジェ曲線を定義するイージング関数です。
- {{cssxref("easing-function/steps", "steps()")}}
  - : トランジションに沿って指定した数の段階を反復処理し、各段階を同じ時間の長さで表示します。

## アニメーション関数

以下の関数は さまざまな {{CSSxRef("animation-timeline")}} プロパティの値として使用されます。

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : 要素の {{cssxref("animation-timeline")}} に _無名スクロール進行タイムライン_ を設定します。
- {{cssxref("animation-timeline/view", "view()")}}
  - : 要素の {{cssxref("animation-timeline")}} を _無名ビュー進行タイムライン_ に設定します。

## アンカー位置指定関数

アンカー位置指定関数は、関連付けられたアンカー要素の位置とサイズを基準として、アンカー位置指定要素の位置とサイズを指定する際に使用されています。

- {{cssxref("anchor", "anchor()")}}
  - : アンカーで位置指定された要素の関連付けられたアンカー要素の端の位置からの相対的な距離を返します。
- {{cssxref("anchor-size", "anchor-size()")}}
  - : 関連付けられたアンカー要素のサイズに対する長さを返します。

## ツリーカウント関数

次の関数は、ほとんどの CSS 値と同様にフラットツリーではなく、DOM ツリーに基づいて整数値を返します。

- {{cssxref("sibling-index", "sibling-index()")}}
  - : 選択した要素の兄弟要素の中でその要素の位置を反映する整数を返します。
- {{cssxref("sibling-count", "sibling-count()")}}
  - : 選択した要素を含む、兄弟要素の総数を反映する整数を返します。

## 関連情報

- [CSS 値と単位](/ja/docs/Web/CSS/Guides/Values_and_units)
- [学習: 値と単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)

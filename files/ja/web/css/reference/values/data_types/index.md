---
title: CSS データ型
short-title: データ型
slug: Web/CSS/Reference/Values/Data_types
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**CSS データ型**は、 CSS のプロパティや関数で使用される具体的な値 (キーワードや単位を含む) を定義しています。これは[コンポーネント値型](https://drafts.csswg.org/css-values/#component-types)の特殊な種類です。

よく使われるデータ型は、 [CSS 値と単位](/ja/docs/Web/CSS/Guides/Values_and_units)仕様書で定義されています。この仕様書は[関数記法](/ja/docs/Web/CSS/Reference/Values/Functions)も定義しており、これはより複雑な型や処理を指定することができます。その他の型は、該当する型で仕様書で定義されています。

以下に、最もよく目にする型のリファレンスを掲載していますが、すべての CSS 仕様書で定義されている型を網羅しているわけではありません。

## 構文

CSS の形式文法では、データ型は `<` と `>` の不等号で囲まれたキーワードで表記されます。それらは具体的な CSS コードエンティティに対応していません。

## テキストデータ型

これらの型には、キーワード、識別子、文字列、URL などがあります。

- 定義済みのキーワード
  - : あらかじめ意味が定義されたキーワード、例えば `collapse` の値は {{cssxref("border-collapse")}} プロパティの値のためのものです。
- CSS 全体のキーワード
  - : カスタムプロパティを含むすべてのプロパティは、CSS 全体のキーワードを受け入れます。
    - {{CSSXref("initial")}}
      - : プロパティの初期値として指定された値です。
    - {{CSSXref("inherit")}}
      - : 要素の親におけるプロパティの計算値です。
    - {{CSSXref("revert")}}
      - : カスケードを先のオリジンの値にロールバックします。
    - {{CSSXref("revert-layer")}}
      - : カスケードを前の[カスケードレイヤー](/ja/docs/Web/CSS/Reference/At-rules/@layer)の値まで戻します。
    - {{CSSXref("unset")}}
      - : プロパティが継承されるかどうかに応じて `inherit` または `initial` として動作します。
- {{cssxref("&lt;custom-ident&gt;")}}
  - : ユーザー定義の識別子です。例えば、{{cssxref("grid-area")}} プロパティを使って割り当てる名前などです。
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : `<custom-ident>` に 2 つのダッシュで始めなければならないという制限を追加したものです。例えば、[CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)などです。
- {{cssxref("&lt;string&gt;")}}
  - : 引用符で囲まれた文字列で、{{cssxref("content")}} プロパティの値など使用されます。
- {{cssxref("url_value", "url()")}}
  - : リソースへのポインターで、例えば {{cssxref("background-image")}} プロパティの値などです。

## 数値データ型

これらのデータ型は、数量、インデックス、位置などを示すために使用されます。これらのデータ型のほとんどは、CSS 値と単位仕様書で定義されていますが、それ以外の仕様書にもその仕様書固有のデータ型が記述されています。例えば、[CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)では、`fr` という単位が定義されています。

- {{cssxref("&lt;integer&gt;")}}（整数）
  - : 1 桁以上の 0 から 9 までの 10 進数の値で、`-` または `+` が先行することがあります。
- {{cssxref("&lt;number&gt;")}}（数値）
  - : 小数部分を持つこともある実数で、例えば `1` や `1.34` などです。
- {{cssxref("&lt;dimension&gt;")}}（大きさ）
  - : 単位付きの数値。例えば `90deg`、`50ms`、`15em` などです。この型には、距離 ({{cssxref("&lt;length&gt;")}})、時間 ({{cssxref("&lt;time&gt;")}})、周波数 ({{cssxref("&lt;frequency&gt;")}})、解像度 ({{cssxref("resolution")}}) などの大きさが含まれます。
- {{cssxref("&lt;percentage&gt;")}}（パーセント値）
  - : パーセント記号の付いた数値で、例えば `10%` などです。
- {{cssxref("&lt;ratio&gt;")}}（比率）
  - : `<number> / <number>` という構文で表される比率です。
- {{cssxref("&lt;flex&gt;")}}
  - : [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)に導入された柔軟な長さで、`<number>` に `fr` の単位が付加したものとして記述され、グリッドトラックのサイズ調整に使用されます。

## 数量

これらの {{cssxref("&lt;dimension&gt;")}} 型は、寸法やその他の数量を指定するために使用されます。

- {{cssxref("&lt;length&gt;")}}（長さ）
  - : 長さは `<dimension>` の一種で、寸法を表します。
- {{cssxref("angle")}}（角度）
  - : 角度は {{cssxref("gradient/linear-gradient", "linear-gradient()")}} などのプロパティで使用されるもので、 `<dimension>` のうち `deg`、`grad`、`rad`、`turn` のいずれかの単位が付いたものです。
- {{cssxref("&lt;time&gt;")}}（時間）
  - : 時間の単位は `<dimension>` に `s` や `ms` の単位を付けたものです。
- {{cssxref("&lt;frequency&gt;")}}（周波数）
  - : 周波数は `<dimension>` に `Hz` や `kHz` という単位を付けたものです。
- {{cssxref("resolution")}}（解像度）
  - : `<dimension>` の一種で、 `dpi`, `dpcm`, `dppx`, `x` のいずれか単位を付けたものです。

## 型の組み合わせ

CSS プロパティの中には、 {{cssxref("&lt;dimension&gt;")}} と {{cssxref("&lt;percentage&gt;")}} のどちらかを取ることができるものがあります。この場合、パーセント値は、許容される大きさに一致する大きさに解決されます。大きさに加えてパーセント値を取ることができるプロパティは、以下に示す型のいずれかを使用します。

- {{cssxref("&lt;length-percentage&gt;")}}
  - : 値として長さまたはパーセント値を受け取ることができる型です。
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : 値として周波数またはパーセント値を受け取ることができる型です。
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : 値として角度またはパーセント値を受け取ることができる型です。
- {{cssxref("&lt;time-percentage&gt;")}}
  - : 値として時間またはパーセント値を受け取ることができる型です。

## 色

[CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュールは、CSS における {{cssxref("&lt;color&gt;")}} データ型と、色に関するその他の型を定義しています。

- {{cssxref("&lt;color&gt;")}}
  - : キーワードまたは色の数値で指定します。
- {{cssxref("&lt;alpha-value&gt;")}}
  - : 色の透明度を指定します。 `<number>` の場合は 0 が完全な透明、1 が完全な不透明となり、`<percentage>` の場合は 0% が完全な透明、100% が完全な不透明となります。
- {{cssxref("hue")}}
  - : `<angle>` を `deg`、`grad`、`rad`、`turn` の単位識別子、または無単位の `<number>` （これは `deg` として解釈される）で指定します。これは{{glossary("Color wheel", "色相環")}}上の角度であり、`<absolute-color-functions>` の成分のみで使用されます。

## 画像

[CSS 画像](/ja/docs/Web/CSS/Guides/Images)は、グラデーションを含む画像を扱うデータ型を定義しています。

- {{cssxref("image")}}
  - : 画像への URL 参照や色のグラデーションです。
- `<color-stop-list>`
  - : 2 つ以上の色経由点のリストで、オプションで色ヒントを使ったトランジション情報があります。
- `<linear-color-stop>`
  - : グラデーションのこの部分の色経由点を示すための `<color>` と `<length-percentage>` です。
- `<linear-color-hint>`
  - : 色がどのように補間されるかを示すための `<length-percentage>` です。
- `<ending-shape>`
  - : 放射グラデーションで使用されます。`circle` または `ellipse` のキーワード値を指定することができます。
- `<size>`
  - : 放射グラデーションの末端のの大きさを決定します。キーワードまたは `<length>` を指定できますが、パーセント値は指定できません。

## 2 次元の位置指定

{{cssxref("&lt;position&gt;")}} データ型は {{cssxref("&lt;background-position&gt;")}} プロパティで定義されたものと同様に解釈されます。

- {{cssxref("&lt;position&gt;")}}
  - : オブジェクト領域の位置を定義します。`top` や `left` などのキーワードや、`<length-percentage>` の値を指定します。

## 計算データ型

これらのデータ型は [CSS 数学関数](/ja/docs/Web/CSS/Reference/Values/Functions#%e6%95%b0%e5%ad%a6%e9%96%a2%e6%95%b0)の計算で使用されます。

- {{cssxref("&lt;calc-sum&gt;")}}
  - : 加算 (`+`) と減算 (`-`) 演算子を挟む一連の計算値。このデータ型は両方の値に単位があることを要求されます。
- {{cssxref("&lt;calc-product&gt;")}}
  - : 乗算 (`*`) や除算 (`/`) を運営する演算子を挟んだ一連の計算値。乗算の場合、一方の値は無単位でなければなりません。除算の場合、 2 つ目の値は無単位でなければなりません。
- {{cssxref("&lt;calc-value&gt;")}}
  - : 計算を受け入れる値を定義します。 {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} または入れ子になった {{cssxref("&lt;calc-sum&gt;")}} 計算のような値です。
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : `e` や `π` のような、 CSS の数学関数で使用することができる数値定数を表す CSS キーワードを定義します。

## 図形データ型

[CSS 図形](/ja/docs/Web/CSS/Guides/Shapes)および [CSS 境界とボックス装飾](/ja/docs/Web/CSS/Guides/Borders_and_box_decorations)モジュールでは、次のデータ型を定義しています。

- {{cssxref("&lt;basic-shape>")}}
  - : {{cssxref("clip-path")}}、{{cssxref("shape-outside")}}、{{cssxref("offset-path")}} の各プロパティで使用される図形関数を記述します。
- {{cssxref("&lt;corner-shape-value>")}}
  - : コンテナーの角の図形を記述します。{{cssxref("corner-shape")}} 一括指定プロパティおよびその[構成要素のプロパティ](/ja/docs/Web/CSS/Reference/Properties/corner-shape#構成要素のプロパティ)によって使用され、影響を受けるコンテナーの角に適用される図形を指定します。

## データ型のアルファベット順の索引

- {{cssxref("absolute-size")}}
- {{cssxref("alpha-value")}}
- {{cssxref("angle")}}
- {{cssxref("angle-percentage")}}
- {{cssxref("axis")}}
- {{cssxref("baseline-position")}}
- {{cssxref("basic-shape")}}
- {{cssxref("blend-mode")}}
- {{cssxref("box-edge")}}
- {{cssxref("calc-keyword")}}
- {{cssxref("calc-sum")}}
- {{cssxref("color_value", "&lt;color&gt;")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("content-distribution")}}
- {{cssxref("content-position")}}
- {{cssxref("corner-shape-value")}} {{experimental_inline}}
- {{cssxref("custom-ident")}}
- {{cssxref("dashed-function")}} {{experimental_inline}}
- {{cssxref("dashed-ident")}}
- {{cssxref("dimension")}}
- {{cssxref("display-box")}}
- {{cssxref("display-inside")}}
- {{cssxref("display-internal")}}
- {{cssxref("display-legacy")}}
- {{cssxref("display-listitem")}}
- {{cssxref("display-outside")}}
- {{cssxref("easing-function")}}
- {{cssxref("filter-function")}}
- {{cssxref("flex_value", "&lt;flex&gt;")}}
- {{cssxref("frequency")}}
- {{cssxref("frequency-percentage")}}
- {{cssxref("generic-family")}}
- {{cssxref("gradient")}}
- {{cssxref("hex-color")}}
- {{cssxref("hue")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("ident")}}
- {{cssxref("image")}}
- {{cssxref("integer")}}
- {{cssxref("length")}}
- {{cssxref("length-percentage")}}
- {{cssxref("line-style")}}
- {{cssxref("named-color")}}
- {{cssxref("number")}}
- {{cssxref("overflow_value", "&lt;overflow&gt;")}}
- {{cssxref("overflow-position")}}
- {{cssxref("percentage")}}
- {{cssxref("position_value", "&lt;position&gt;")}}
- {{cssxref("position-area_value", "&lt;position-area&gt;")}}
- {{cssxref("ratio")}}
- {{cssxref("relative-size")}}
- {{cssxref("resolution")}}
- {{cssxref("self-position")}}
- {{cssxref("shape")}} {{deprecated_inline}}
- {{cssxref("string")}}
- {{cssxref("system-color")}}
- {{cssxref("text-edge")}}
- {{cssxref("time")}}
- {{cssxref("time-percentage")}}
- {{cssxref("transform-function")}}
- {{cssxref("url_value", "&lt;url&gt;")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 単位と値](/ja/docs/Web/CSS/Guides/Values_and_units)
- [CSS 入門: 値と単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS 関数記法](/ja/docs/Web/CSS/Reference/Values/Functions)

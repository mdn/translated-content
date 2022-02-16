---
title: CSS データ型
slug: Web/CSS/CSS_Types
tags:
  - CSS
  - CSS データ型
  - ガイド
  - Index
  - 概要
  - リファレンス
  - 構文
  - 型
  - データ型
  - list
translation_of: Web/CSS/CSS_Types
---
{{CSSRef}}

**CSS データ型**は、 CSS のプロパティや関数で使用される具体的な値 (キーワードや単位を含む) を定義しています。これは[コンポーネント値型](https://www.w3.org/TR/css3-values/#component-types)の特殊な種類です。

よく使われるデータ型は、 [CSS 値と単位](/ja/docs/Web/CSS/CSS_Values_and_Units)仕様書で定義されています。この仕様書は[関数表記](/ja/docs/Web/CSS/CSS_Functions)も定義しており、これはより複雑な型や処理を指定することができます。その他の型は、該当する型で仕様書で定義されています。

以下に、最もよく目にする型のリファレンスを掲載していますが、すべての CSS 仕様書で定義されている型を網羅しているわけではありません。

## 構文

CSS の形式文法では、データ型は "`<`" と "`>`" の不等号で囲まれたキーワードで表記されます。

## テキストのデータ型

これらの型には、キーワード、識別子、文字列、URL などがあります。

- 定義済みのキーワード
  - : あらかじめ意味が定義されたキーワード、例えば `collapse` の値は {{cssxref("border-collapse")}} プロパティの値のためのものです。
- CSS 全体のキーワード: `initial`
  - : プロパティの初期値として指定された値です。
- CSS 全体のキーワード: `inherit`
  - : 要素の親に対するプロパティの計算された値。
- CSS 全体のキーワード: `unset`
  - : 継承されるプロパティであるかどうかに応じて、`inherit` または `initial` として動作します。
- `<custom-ident>`
  - : ユーザー定義の識別子です。例えば、{{cssxref("grid-area")}} プロパティを使って割り当てる名前などです。詳細は {{cssxref("&lt;custom-ident&gt;")}} のページを参照してください。
- `<dashed-ident>`
  - : `<custom-ident>` に 2 つのダッシュで始めなければならないという制限を追加したものです。例えば、[CSS カスタムプロパティ](/ja/docs/Web/CSS/Using_CSS_custom_properties)などです。詳しくは {{cssxref("&lt;dashed-ident&gt;")}} のページを参照してください。
- `<string>`
  - : 引用符で囲まれた文字列で、{{cssxref("content")}} プロパティの値など使用されます。詳しくは {{cssxref("&lt;string&gt;")}} のページを参照してください。
- `<url>`
  - : リソースへのポインターで、例えば {{cssxref("background-image")}} プロパティの値などです。詳しくは {{cssxref("url()")}} のページを参照してください。

## 数値データ型

これらのデータ型は、数量、インデックス、位置などを示すために使用されます。これらのデータ型のほとんどは、Values and Units 仕様書で定義されていますが、それ以外の仕様書にもその仕様書固有のデータ型が記述されています。例えば、[CSS Grid Layout](https://www.w3.org/TR/css-grid-1/#fr-unit)では、`fr` という単位が定義されています。

- `<integer>` (整数)
  - : 1 桁以上の 0 から 9 までの 10 進数の値です。詳しくは {{cssxref("&lt;integer&gt;")}} のページを参照してください。
- `<number>` (数値)
  - : 小数部分を持つこともある実数で、例えば 1 や 1.34 などです。詳しくは {{cssxref("&lt;number&gt;")}} のページを参照してください。
- `<dimension>` (大きさ)
  - : 単位を付けた数値で、 23px や 15em などです。詳しくは {{cssxref("&lt;dimension&gt;")}} のページを参照してください。
- `<percentage>` (パーセント値)
  - : パーセント記号の付いた数値で、例えば 10% などです。詳しくは {{cssxref("&lt;percentage&gt;")}} のページを参照してください。
- `<ratio>` (比率)
  - : `<number> / <number>` という構文で表される比率です。詳細は {{cssxref("&lt;ratio&gt;")}} のページを参照してください。
- `<flex>`
  - : [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout)に導入された柔軟な長さで、`fr` の単位が付加された `<dimension>` として記述され、グリッドトラックのサイズ調整に使用されます。詳しくは{{cssxref("&lt;flex&gt;")}}のページを参照してください。

## 数量

これらの型は、寸法やその他の数量を指定するために使用されます。

- `<length>` (長さ)
  - : 長さは `<dimension>` の一種で、寸法を表します。詳しくは {{cssxref("&lt;length&gt;")}} のページを参照してください。
- `<angle>` (角度)
  - : 角度は {{cssxref("gradient/linear-gradient()", "linear-gradient()")}} などのプロパティで使用されるもので、 `<dimension>` のうち `deg`、`grad`、`rad`、`turn` のいずれかの単位が付いたものです。詳しくは {{cssxref("&lt;angle&gt;")}} のページを参照してください。
- `<time>` (時間)
  - : 時間の単位は `<dimension>` に `s` や `ms` の単位を付けたものです。詳しくは {{cssxref("&lt;time&gt;")}} のページを参照してください。
- `<frequency>` (周波数)
  - : 周波数は `<dimension>` に `Hz` や `kHz` という単位を付けたものです。詳しくは{{cssxref("&lt;frequency&gt;")}} のページを参照してください。
- `<resolution>` (解像度)
  - : `<dimension>` の一種で、 `dpi`, `dpcm`, `dppx`, `x` のいずれか単位を付けたものです。詳しくは {{cssxref("&lt;resolution&gt;")}} のページを参照してください。

## 型の組み合わせ

CSS プロパティの中には、大きさとパーセント値のどちらかを取ることができるものがあります。この場合、パーセント値は、許容される大きさに一致する大きさに解決されます。大きさに加えてパーセント値を取ることができるプロパティは、以下に示す型のいずれかを使用します。

- `<length-percentage>`
  - : 値として長さまたはパーセント値を受け取ることができる型です。詳しくは {{cssxref("&lt;length-percentage&gt;")}} のページを参照してください。
- `<frequency-percentage>`
  - : 値として周波数またはパーセント値を受け取ることができる型です。詳しくは {{cssxref("&lt;frequency-percentage&gt;")}} のページを参照してください。
- `<angle-percentage>`
  - : 値として角度またはパーセント値を受け取ることができる型です。詳しくは {{cssxref("&lt;angle-percentage&gt;")}} のページを参照してください。
- `<time-percentage>`
  - : 値として時間またはパーセント値を受け取ることができる型です。詳しくは {{cssxref("&lt;time-percentage&gt;")}} のページを参照してください。

## 色

[CSS 色仕様書](https://www.w3.org/TR/css-color-3/)は、CSS における {{cssxref("&lt;color&gt;")}} データ型と、色に関するその他の型を定義しています。

- `<color>`
  - : キーワードまたは色の数値で指定します。詳しくは {{cssxref("&lt;color&gt;")}} ページを参照してください。
- `<alpha-value>`
  - : 色の透明度を指定します。 `<number>` の場合は 0 が完全な透明、1 が完全な不透明となり、`<percentage>` の場合は 0% が完全な透明、100% が完全な不透明となります。

## 画像

[CSS 画像仕様書](https://www.w3.org/TR/css-images-3/)は、グラデーションを含む画像を扱うデータ型を定義しています。

- `<image>`
  - : 画像への URL 参照や色のグラデーションです。詳しくは {{cssxref("&lt;image&gt;")}} のページを参照してください。
- `<color-stop-list>`
  - : 2 つ以上の色停止点のリストで、オプションで色ヒントを使ったトランジション情報があります。
- `<linear-color-stop>`
  - : グラデーションのこの部分の色停止点を示すための `<color>` と `<length-percentage>` です。
- `<linear-color-hint>`
  - : 色がどのように補間されるかを示すための `<length-percentage>` です。
- `<ending-shape>`
  - : 放射グラデーションで使用されます。`circle` または `ellipse` のキーワード値を指定することができます。
- `<size>`
  - : 放射グラデーションの末端のの大きさを決定します。キーワードまたは `<length>` を指定できますが、パーセント値は指定できません。

## 二次元の位置指定

{{cssxref("&lt;position&gt;")}} データ型は {{cssxref("&lt;background-position&gt;")}} プロパティで定義されたものと同様に解釈されます。

- {{cssxref("&lt;position&gt;")}}
  - : オブジェクト領域の位置を定義します。`top` や `left` などのキーワードや、`<length-percentage>` の値を指定します。

## 仕様書

| 仕様書                        | 状態                       | 備考                |
| ----------------------------- | -------------------------- | ------------------- |
| {{ SpecName('CSS4 Values') }} | {{ Spec2('CSS4 Values') }} |                     |
| {{ SpecName('CSS3 Values') }} | {{ Spec2('CSS3 Values') }} | 初回定義            |

## 関連情報

- [CSS 単位と値](/ja/docs/Web/CSS/CSS_Values_and_Units)
- [CSS 入門: 値と単位](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS 関数表記](/ja/docs/Web/CSS/CSS_Functions)

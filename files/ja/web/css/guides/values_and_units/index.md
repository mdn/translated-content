---
title: CSS 値と単位
slug: Web/CSS/Guides/Values_and_units
original_slug: Web/CSS/CSS_values_and_units
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

CSS 宣言はすべて、プロパティと値のペアから成っています。値には、単一のキーワード、整数、関数、異なる型の組み合わせなど、プロパティに応じてさまざまなデータ型を含めることがあります。また、値には単位を持つものもあれば、持たないものもあります。すべてのプロパティは、CSS 全体で有効な値も受け入れます。CSS 値と単位モジュールでは、CSS プロパティが受け入れる値と単位というデータの型を定義しています。このモジュールでは、CSS プロパティと関数に対して有効な値の設定するには、CSS 値定義構文、つまり形式文法を定義します。

## リファレンス

### プロパティ

- {{cssxref("interpolate-size")}}

### 関数

- {{cssxref("abs()")}}
- {{cssxref("acos()")}}
- {{cssxref("asin()")}}
- {{cssxref("atan()")}}
- {{cssxref("atan2()")}}
- {{cssxref("attr()")}}
- {{cssxref("calc()")}}
- {{cssxref("calc-size()")}}
- {{cssxref("clamp()")}}
- {{cssxref("cos()")}}
- {{cssxref("exp()")}}
- {{cssxref("hypot()")}}
- {{cssxref("ident()")}}
- {{cssxref("if()")}}
- {{cssxref("inherit()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sibling-count()")}}
- {{cssxref("sibling-index()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url_function", "url()")}}

CSS 値と単位モジュールでは、 `calc-mix()`, `crossorigin()`, `first-valid()`, `integrity()`, `progress()`, `random()`, `random-item()`, `referrerpolicy()`, `src()`, `type()`, `toggle()` の関数も導入しています。現在のところ、これらの機能に対応しているブラウザーはありません。

### データ型

- [`<angle-percentage>`](/ja/docs/Web/CSS/Reference/Values/angle-percentage)
- [`<angle>`](/ja/docs/Web/CSS/Reference/Values/angle)
- [`<animation-timeline>`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`<attr-name>`](/ja/docs/Web/CSS/Reference/Values/attr#attr-name)
- [`<attr-type>`](/ja/docs/Web/CSS/Reference/Values/attr#attr-type)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{glossary("NaN")}})
- [`<calc-size-basis>`](/ja/docs/Web/CSS/Reference/Values/calc-size#calc-size-basis)
- [`<calc-sum>`](/ja/docs/Web/CSS/Reference/Values/calc-sum)
- [`<custom-ident>`](/ja/docs/Web/CSS/Reference/Values/custom-ident)
- [`<dashed-ident>`](/ja/docs/Web/CSS/Reference/Values/dashed-ident)
- [`<dimension>`](/ja/docs/Web/CSS/Reference/Values/dimension)
- [`<easing-function>`](/ja/docs/Web/CSS/Reference/Values/easing-function)
- [`<first-valid()>`](/ja/docs/Web/CSS)
- [`<ident>`](/ja/docs/Web/CSS/Reference/Values/ident)
- [`<integer>`](/ja/docs/Web/CSS/Reference/Values/integer)
- [`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage)
- [`<length>`](/ja/docs/Web/CSS/Reference/Values/length)
- [`<number>`](/ja/docs/Web/CSS/Reference/Values/number)
- [`<percentage>`](/ja/docs/Web/CSS/Reference/Values/percentage)
- [`<position>`](/ja/docs/Web/CSS/Reference/Properties/position)
- [`<ratio>`](/ja/docs/Web/CSS/Reference/Values/ratio)
- [`<resolution>`](/ja/docs/Web/CSS/Reference/Values/resolution)
- [`<rounding-strategy>`](/ja/docs/Web/CSS/Reference/Values/round#rounding-strategy) (`down`, `up`, `to-zero`)
- [`<string>`](/ja/docs/Web/CSS/Reference/Values/string)
- [`<syntax>`](/ja/docs/Web/CSS/Guides/Syntax/Introduction)
- [`<time-percentage>`](/ja/docs/Web/CSS/Reference/Values/time-percentage)
- [`<time>`](/ja/docs/Web/CSS/Reference/Values/time)
- [`<url>`](/ja/docs/Web/CSS/Reference/Values/url_value)
- [`<url-modifier>`](/ja/docs/Web/CSS/Reference/Values/url_function#url-modifier)
- [`<view-timeline-name>`](/ja/docs/Web/CSS/Reference/Properties/view-timeline-name)

CSS の値と単位のモジュールでは、 [`<frequency>`](/ja/docs/Web/CSS/Reference/Values/frequency) および [`<frequency-percentage>`](/ja/docs/Web/CSS/Reference/Values/frequency-percentage) データ型も導入しています。現在のところ、これらの機能に対応しているブラウザーはありません。

#### 単位

- [`%` （パーセント値）](/ja/docs/Web/CSS/Reference/Values/percentage)
- [`cap`](/ja/docs/Web/CSS/Reference/Values/length#cap)
- [`ch`](/ja/docs/Web/CSS/Reference/Values/length#ch)
- [`cm`](/ja/docs/Web/CSS/Reference/Values/length#cm)
- [`deg`](/ja/docs/Web/CSS/Reference/Values/angle#deg)
- [`dpcm`](/ja/docs/Web/CSS/Reference/Values/resolution#dpcm)
- [`dpi`](/ja/docs/Web/CSS/Reference/Values/resolution#dpi)
- [`dppx`](/ja/docs/Web/CSS/Reference/Values/resolution#dppx)
- [`dvb`](/ja/docs/Web/CSS/Reference/Values/length#vb)
- [`dvh`](/ja/docs/Web/CSS/Reference/Values/length#vh)
- [`dvi`](/ja/docs/Web/CSS/Reference/Values/length#vi)
- [`dvmax`](/ja/docs/Web/CSS/Reference/Values/length#vmax)
- [`dvmin`](/ja/docs/Web/CSS/Reference/Values/length#vmin)
- [`dvw`](/ja/docs/Web/CSS/Reference/Values/length#vw)
- [`em`](/ja/docs/Web/CSS/Reference/Values/length#em)
- [`ex`](/ja/docs/Web/CSS/Reference/Values/length#ex)
- [`grad`](/ja/docs/Web/CSS/Reference/Values/angle#grad)
- [`Hz`](/ja/docs/Web/CSS/Reference/Values/frequency#hz)
- [`ic`](/ja/docs/Web/CSS/Reference/Values/length#ic)
- [`in`](/ja/docs/Web/CSS/Reference/Values/length#in)
- [`kHz`](/ja/docs/Web/CSS/Reference/Values/frequency#khz)
- [`lh`](/ja/docs/Web/CSS/Reference/Values/length#lh)
- [`lvb`](/ja/docs/Web/CSS/Reference/Values/length#vb)
- [`lvh`](/ja/docs/Web/CSS/Reference/Values/length#vh)
- [`lvi`](/ja/docs/Web/CSS/Reference/Values/length#vi)
- [`lvmax`](/ja/docs/Web/CSS/Reference/Values/length#vmax)
- [`lvmin`](/ja/docs/Web/CSS/Reference/Values/length#vmin)
- [`lvw`](/ja/docs/Web/CSS/Reference/Values/length#vw)
- [`mm`](/ja/docs/Web/CSS/Reference/Values/length#mm)
- [`ms`](/ja/docs/Web/CSS/Reference/Values/time#ms)
- [`pc`](/ja/docs/Web/CSS/Reference/Values/length#pc)
- [`pt`](/ja/docs/Web/CSS/Reference/Values/length#pt)
- [`px`](/ja/docs/Web/CSS/Reference/Values/length#px)
- [`Q`](/ja/docs/Web/CSS/Reference/Values/length#q)
- [`rad`](/ja/docs/Web/CSS/Reference/Values/angle#rad)
- [`rcap`](/ja/docs/Web/CSS/Reference/Values/length#rcap)
- [`rch`](/ja/docs/Web/CSS/Reference/Values/length#rch)
- [`rem`](/ja/docs/Web/CSS/Reference/Values/length#rem)
- [`rex`](/ja/docs/Web/CSS/Reference/Values/length#rex)
- [`ric`](/ja/docs/Web/CSS/Reference/Values/length#ric)
- [`rlh`](/ja/docs/Web/CSS/Reference/Values/length#rlh)
- [`s`](/ja/docs/Web/CSS/Reference/Values/time#s)
- [`svb`](/ja/docs/Web/CSS/Reference/Values/length#vb)
- [`svh`](/ja/docs/Web/CSS/Reference/Values/length#vh)
- [`svi`](/ja/docs/Web/CSS/Reference/Values/length#vi)
- [`svmax`](/ja/docs/Web/CSS/Reference/Values/length#vmax)
- [`svmin`](/ja/docs/Web/CSS/Reference/Values/length#vmin)
- [`svw`](/ja/docs/Web/CSS/Reference/Values/length#vw)
- [`turn`](/ja/docs/Web/CSS/Reference/Values/angle#turn)
- [`vb`](/ja/docs/Web/CSS/Reference/Values/length#vb)
- [`vh`](/ja/docs/Web/CSS/Reference/Values/length#vh)
- [`vi`](/ja/docs/Web/CSS/Reference/Values/length#vi)
- [`vmax`](/ja/docs/Web/CSS/Reference/Values/length#vmax)
- [`vmin`](/ja/docs/Web/CSS/Reference/Values/length#vmin)
- [`vw`](/ja/docs/Web/CSS/Reference/Values/length#vw)
- [`x`](/ja/docs/Web/CSS/Reference/Values/resolution#x)

[フレックス単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#フレックス単位) (`fr`) および[コンテナー単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#コンテナー単位) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`) が、それぞれ [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)および [CSS 条件付きルール](/ja/docs/Web/CSS/Guides/Conditional_rules)モジュールで定義されています。

#### 単位の分類

- [絶対的な長さの単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#絶対的な長さの単位) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [角度の単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#角度の単位) (`deg`, `grad`, `rad`, `turn`)
- [既定ビューポート単位](/ja/docs/Web/CSS/Reference/Values/length#既定ビューポートサイズ) (`vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [動的ビューポート単位](/ja/docs/Web/CSS/Reference/Values/length#動的ビューポートサイズ) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [周期の単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#周期の単位) (`Hz`, `kHz`)
- [大ビューポート単位](/ja/docs/Web/CSS/Reference/Values/length#大ビューポートサイズ) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [ローカルフォント相対長](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#ローカルフォント相対長) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`)
- [物理的な単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#絶対的な長さの単位) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [相対的な長さの単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [解像度の単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#解像度の単位) (`dpcm`, `dpi` , `dppx`, `x`)
- [ルートフォント相対長](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#ルートフォント相対長) (`rcap`, `rch`, `rem`, `rex`, `ric`, `rlh`)
- [小ビューポート単位](/ja/docs/Web/CSS/Reference/Values/length#小ビューポートサイズ) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [時間の単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#時間の単位) (`ms`, `s`)
- [ビューポート単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#ビューポート単位) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [視覚角度単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#絶対的な長さの単位) (`px`)

### 主要概念

- {{glossary("Advance measure", "送り幅")}}
- [範囲の角括弧記法](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#範囲の角括弧記法_minmax)
- [成分値の組み合わせ](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#成分値の組み合わせ)
- [CSS 全体のキーワード](/ja/docs/Web/CSS/Reference/Values/Data_types#css_全体のキーワード)
- {{glossary("Device pixel", "デバイスピクセル")}}
- [関数記法](/ja/docs/Web/CSS/Reference/Values/Functions)
- {{glossary("Identifier", "識別子")}}
- {{glossary("Interpolation", "補間")}}
- {{glossary("Keyword", "キーワード")}}
- [数学関数](/ja/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
- [数値データ型](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- {{glossary("Origin", "オリジン")}}
- {{glossary("Pixel", "ピクセル")}}
- [テキストデータ型](/ja/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
- {{glossary("URL")}}
- [値定義構文](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

## ガイド

- [CSS データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)
  - : CSS プロパティおよび関数によって受け入れられる典型的な値を定義する CSS データ型についての紹介です。

- [数値データ型](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
  - : 数値データ型の概要で、整数、数値、パーセント値、寸法、相対寸法および絶対寸法、角度、時刻などの単位など。

- [テキストデータ型](/ja/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
  - : テキストデータ型（定義済みのキーワード値、グローバル CSS キーワード値、 URL など）の概要。

- [CSS 値関数](/ja/docs/Web/CSS/Reference/Values/Functions)
  - : CSS プロパティの CSS 値を返すために、特別なデータ処理や計算を呼び出す CSS 文の概要。

- [CSS 数学関数の使用](/ja/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
  - : プロパティ値を数式で書くことができる CSS の数学関数。

- [値定義構文](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - : CSS プロパティおよび関数の有効な値の設定するには、使用されている形式文法。

- [学習: 値と単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : 最も頻繁に使用される値の型を見ていき、それらが何なのか、また、これがどのように動作するのかを見ていきます。

## 関連事項

- [CSS カスケードと継承](/ja/docs/Web/CSS/Guides/Cascade)モジュール
  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
  - {{cssxref("&lt;flex&gt;")}}
  - [フレックス単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#フレックス単位) (`fr`)

- [CSS 条件付きルール](/ja/docs/Web/CSS/Guides/Conditional_rules)モジュール
  - [コンテナー単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#コンテナー単位) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`)

- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/ja/docs/Web/CSS/Reference/Values/color_value/color-mix)

- [CSS 画像](/ja/docs/Web/CSS/Guides/Images)モジュール
  - {{cssxref("&lt;image&gt;")}}
  - {{cssxref("&lt;gradient&gt;")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 構文](/ja/docs/Web/CSS/Guides/Syntax)モジュール
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール

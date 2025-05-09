---
title: CSS 値と単位
slug: Web/CSS/CSS_Values_and_Units
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

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
- {{cssxref("inherit()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url_value")}}

それ以外にも、 `calc-mix()`, `crossorigin()`, `first-valid()`, `if()`, `integrity()`, `progress()`, `random()`, `random-item()`, `referrerpolicy()`, `sibling-count()`, `sibling-index()`, `src()`, `type()`, `toggle()` などの巻子が仕様書では定義されていますが、まだブラウザーでは実装されていません。

### データ型

- [`<angle-percentage>`](/ja/docs/Web/CSS/angle-percentage)
- [`<angle>`](/ja/docs/Web/CSS/angle)
- [`<animation-timeline>`](/ja/docs/Web/CSS/animation-timeline)
- [`<attr-name>`](/ja/docs/Web/CSS/attr#attr-name)
- [`<attr-type>`](/ja/docs/Web/CSS/attr#attr-type)
- [`<attr-unit>`](/ja/docs/Web/CSS/attr#attr-unit)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{glossary("NaN")}})
- [`<calc-size-basis>`](/ja/docs/Web/CSS/calc-size#calc-size-basis)
- [`<calc-sum>`](/ja/docs/Web/CSS/calc-sum)
- [`<custom-ident>`](/ja/docs/Web/CSS/custom-ident)
- [`<dashed-ident>`](/ja/docs/Web/CSS/dashed-ident)
- [`<dimension>`](/ja/docs/Web/CSS/dimension)
- [`<easing-function>`](/ja/docs/Web/CSS/easing-function)
- [`<first-valid()>`](/ja/docs/Web/CSS)
- [`<frequency>`](/ja/docs/Web/CSS/frequency)
- [`<frequency-percentage>`](/ja/docs/Web/CSS/frequency-percentage)
- [`<ident>`](/ja/docs/Web/CSS/ident)
- [`<integer>`](/ja/docs/Web/CSS/integer)
- [`<length-percentage>`](/ja/docs/Web/CSS/length-percentage)
- [`<length>`](/ja/docs/Web/CSS/length)
- [`<number>`](/ja/docs/Web/CSS/number)
- [`<percentage>`](/ja/docs/Web/CSS/percentage)
- [`<position>`](/ja/docs/Web/CSS/position)
- [`<ratio>`](/ja/docs/Web/CSS/ratio)
- [`<resolution>`](/ja/docs/Web/CSS/resolution)
- [`<rounding-strategy>`](/ja/docs/Web/CSS/round#rounding-strategy) (`down`, `up`, `to-zero`)
- [`<string>`](/ja/docs/Web/CSS/string)
- [`<syntax>`](/ja/docs/Web/CSS/CSS_syntax/Syntax)
- [`<time-percentage>`](/ja/docs/Web/CSS/time-percentage)
- [`<time>`](/ja/docs/Web/CSS/time)
- [`<url>`](/ja/docs/Web/CSS/url_value)
- [`<url-modifier>`](/ja/docs/Web/CSS/url_function#url-modifier)
- [`<view-timeline-name>`](/ja/docs/Web/CSS/view-timeline-name)

#### 単位

- [`%` （パーセント値）](/ja/docs/Web/CSS/length#cap)
- [`cap`](/ja/docs/Web/CSS/length#cap)
- [`ch`](/ja/docs/Web/CSS/length#ch)
- [`cm`](/ja/docs/Web/CSS/length#cm)
- [`deg`](/ja/docs/Web/CSS/length#deg)
- [`dpcm`](/ja/docs/Web/CSS/length#dpcm)
- [`dpi`](/ja/docs/Web/CSS/length#dpi)
- [`dppx`](/ja/docs/Web/CSS/length#dppx)
- [`dvb`](/ja/docs/Web/CSS/length#dvb)
- [`dvh`](/ja/docs/Web/CSS/length#dvh)
- [`dvi`](/ja/docs/Web/CSS/length#dvi)
- [`dvmax`](/ja/docs/Web/CSS/length#dvmax)
- [`dvmin`](/ja/docs/Web/CSS/length#dvmin)
- [`dvw`](/ja/docs/Web/CSS/length#dvw)
- [`em`](/ja/docs/Web/CSS/length#em)
- [`ex`](/ja/docs/Web/CSS/length#ex)
- [`grad`](/ja/docs/Web/CSS/length#grad)
- [`Hz`](/ja/docs/Web/CSS/length#hz)
- [`ic`](/ja/docs/Web/CSS/length#ic)
- [`in`](/ja/docs/Web/CSS/length#in)
- [`kHz`](/ja/docs/Web/CSS/length#khz)
- [`left`](/ja/docs/Web/CSS/length#left)
- [`lh`](/ja/docs/Web/CSS/length#lh)
- [`lvb`](/ja/docs/Web/CSS/length#lvb)
- [`lvh`](/ja/docs/Web/CSS/length#lvh)
- [`lvi`](/ja/docs/Web/CSS/length#lvi)
- [`lvmax`](/ja/docs/Web/CSS/length#lvmax)
- [`lvmin`](/ja/docs/Web/CSS/length#lvmin)
- [`lvw`](/ja/docs/Web/CSS/length#lvw)
- [`mm`](/ja/docs/Web/CSS/length#mm)
- [`ms`](/ja/docs/Web/CSS/length#ms)
- [`pc`](/ja/docs/Web/CSS/length#pc)
- [`pi`](/ja/docs/Web/CSS/length#pi)
- [`pt`](/ja/docs/Web/CSS/length#pt)
- [`px`](/ja/docs/Web/CSS/length#px)
- [`Q`](/ja/docs/Web/CSS/length#q)
- [`rad`](/ja/docs/Web/CSS/length#rad)
- [`rcap`](/ja/docs/Web/CSS/length#rcap)
- [`rch`](/ja/docs/Web/CSS/length#rch)
- [`rem`](/ja/docs/Web/CSS/length#rem)
- [`rex`](/ja/docs/Web/CSS/length#rex)
- [`ric`](/ja/docs/Web/CSS/length#ric)
- [`rlh`](/ja/docs/Web/CSS/length#rlh)
- [`s`](/ja/docs/Web/CSS/length#s)
- [`size`](/ja/docs/Web/CSS/length#size)
- [`svb`](/ja/docs/Web/CSS/length#svb)
- [`svh`](/ja/docs/Web/CSS/length#svh)
- [`svi`](/ja/docs/Web/CSS/length#svi)
- [`svmax`](/ja/docs/Web/CSS/length#svmax)
- [`svmin`](/ja/docs/Web/CSS/length#svmin)
- [`svw`](/ja/docs/Web/CSS/length#svw)
- [`turn`](/ja/docs/Web/CSS/length#turn)
- [`up`](/ja/docs/Web/CSS/length#up)
- [`vb`](/ja/docs/Web/CSS/length#vb)
- [`vh`](/ja/docs/Web/CSS/length#vh)
- [`vi`](/ja/docs/Web/CSS/length#vi)
- [`vmax`](/ja/docs/Web/CSS/length#vmax)
- [`vmin`](/ja/docs/Web/CSS/length#vmin)
- [`vw`](/ja/docs/Web/CSS/length#vw)
- [`x`](/ja/docs/Web/CSS/length#x)

[フレックス単位](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#フレックス単位) (`fr`) および[コンテナー単位](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#コンテナー単位) (`cqb`,`cqh`,`cqi`,`cqmax`,`cqmin`,`cqw`)が、それぞれ [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)および [CSS 条件付きルール](/ja/docs/Web/CSS/CSS_conditional_rules)モジュールで定義されています。

#### 単位の分類

- [絶対的な長さの単位](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#絶対的な長さの単位) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [角度の単位](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#角度の単位) (`deg`, `grad`, `rad`, `turn`)
- [既定ビューポート単位](/ja/docs/Web/CSS/length#既定ビューポートサイズ) (`vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [動的ビューポート単位](/ja/docs/Web/CSS/length#動的ビューポートサイズ) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [周期の単位](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#周期の単位) (`Hz`, `kHz`)
- [大ビューポート単位](/ja/docs/Web/CSS/length#大ビューポートサイズ) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [ローカルフォント相対長](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#ローカルフォント相対長) (`cap`, `ch` ,`em`, `ex`, `ic`, `lh`)
- [物理的な単位](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#絶対的な長さの単位) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [相対的な長さの単位](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [解像度の単位](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#解像度の単位) (`dpcm`, `dpi` , `dppx`, `x`)
- [ルートフォント相対長](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#ルートフォント相対長) (`rcap` ,`rch`, `rem`, `rex`, `ric`, `rlh`)
- [小ビューポート単位](/ja/docs/Web/CSS/length#小ビューポートサイズ) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [時間の単位](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#時間の単位) (`ms`, `s`)
- [ビューポート単位](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#ビューポート単位) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [視覚角度単位](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#絶対的な長さの単位) (`px`)

### 主要概念

- {{glossary("Advance measure", "送り幅")}}
- [範囲の角括弧記法](/ja/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#範囲の角括弧記法_minmax)
- [成分値の組み合わせ](/ja/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#成分値の組み合わせ)
- [CSS 全体のキーワード](/ja/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css_全体のキーワード)
- {{glossary("Device pixel", "デバイスピクセル")}}
- [関数記法](/ja/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- {{glossary("Identifier", "識別子")}}
- {{glossary("Interpolation", "補間")}}
- {{glossary("Keyword", "キーワード")}}
- [数学関数](/ja/docs/Web/CSS/CSS_Values_and_Units/Using_CSS_math_functions)
- [数値データ型](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)
- {{glossary("Origin", "オリジン")}}
- {{glossary("Pixel", "ピクセル")}}
- [テキストデータ型](/ja/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- {{glossary("URL")}}
- [値定義構文](/ja/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

## ガイド

- [CSS データ型](/ja/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)

  - : CSS プロパティおよび関数によって受け入れられる典型的な値を定義する CSS データ型についての紹介です。

- [数値データ型](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)

  - : 数値データ型の概要で、整数、数値、パーセント値、寸法、相対寸法および絶対寸法、角度、時刻などの単位など。

- [テキストデータ型](/ja/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)

  - : テキストデータ型（定義済みのキーワード値、グローバル CSS キーワード値、 URL など）の概要。

- [CSS 値関数](/ja/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)

  - : CSS プロパティの CSS 値を返すために、特別なデータ処理や計算を呼び出す CSS 文の概要。

- [CSS 数学関数の使用](/ja/docs/Web/CSS/CSS_Values_and_Units/Using_CSS_math_functions)

  - : プロパティ値を数式で書くことができる CSS の数学関数。

- [値定義構文](/ja/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

  - : CSS プロパティおよび関数の有効な値の設定するには、使用されている形式文法。

- [学習: 値と単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)

  - : 最も頻繁に使用される値の型を見ていき、それらが何なのか、また、これがどのように動作するのかを見ていきます。

## 関連事項

- [CSS カスケードと継承](/ja/docs/Web/CSS/CSS_cascade)モジュール

  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)モジュール

  - {{cssxref("&lt;flex&gt;")}}
  - [フレックス単位](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#フレックス単位) (`fr`)

- [CSS 条件付きルール](/ja/docs/Web/CSS/CSS_conditional_rules)モジュール

  - [コンテナー単位](/ja/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#コンテナー単位) (`cqb`,`cqh`,`cqi`,`cqmax`,`cqmin`,`cqw`)

- [CSS 色](/ja/docs/Web/CSS/CSS_colors)モジュール

  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/ja/docs/Web/CSS/color_value/color-mix)

- [CSS 画像](/ja/docs/Web/CSS/CSS_images)モジュール

  - {{cssxref("&lt;image&gt;")}}
  - {{cssxref("&lt;gradient&gt;")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 構文](/ja/docs/Web/CSS/CSS_syntax)モジュール
- [CSS セレクター](/ja/docs/Web/CSS/CSS_selectors)モジュール

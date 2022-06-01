---
title: メディアクエリーの使用
slug: Web/CSS/Media_Queries/Using_media_queries
tags:
  - 上級者
  - CSS
  - ガイド
  - ウェブ
  - メディア
  - メディアクエリー
  - レスポンシブデザイン
translation_of: Web/CSS/Media_Queries/Using_media_queries
---
{{CSSRef}}

**メディアクエリー**は、一般的な端末の種類 (プリンタと画面など)や特定の特性 (画面の解像度やブラウザーの{{glossary("viewport", "ビューポート")}}の幅など) に応じてサイトやアプリを変更したいときに便利です。

メディアクエリーは以下の用途で使用されます。

- [CSS](/ja/docs/Web/CSS) の {{cssxref("@media")}} および {{cssxref("@import")}} [アットルール](/ja/docs/Web/CSS/At-rule)により、条件付きでスタイルを適用する。
- {{HTMLElement("link")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}}, などの [HTML](/ja/docs/Web/HTML) 要素で `media=` 属性を付けて特定のメディアを対象とする。
- [メディアの状態の検査と監視](/ja/docs/Web/CSS/Media_Queries/Testing_media_queries)をするために、[JavaScript](/ja/docs/Web/JavaScript) で {{domxref("Window.matchMedia()")}} および {{domxref("MediaQueryList.addListener()")}} メソッドを使用する

> **Note:** このページの例では説明のために CSS の `@media` を使用していますが、基本構文はすべての種類のメディアクエリーで共通です。

## 構文

メディアクエリーは、任意の*メディア種別*と任意の数の*メディア特性*の式で構成されます。*論理演算子*を使用して、複数のクエリーを様々な形で組み合わせることができます。メディアクエリーは大文字小文字の区別がありません。

- [メディア種別](/ja/docs/Web/CSS/@media#メディア種別)は、メディアクエリーを適用する機器の大まかな分類を `all`, `print`, `screen`, `speech` で定義します。
  
  種別は省略可能 (`all` と見なされる) ですが、 `not` や `only` 論理演算子を使用する場合は例外です。
- [メディア特性](/ja/docs/Web/CSS/@media#メディア特性)は、{{glossary("user agent", "ユーザーエージェント")}}、出力機器、環境などの特定の特徴を記述します。 {{cssxref("@media/any-hover", "any-hover")}}, {{cssxref("@media/any-pointer", "any-pointer")}}, {{cssxref("@media/aspect-ratio", "aspect-ratio")}}, {{cssxref("@media/color", "color")}}, {{cssxref("@media/color-gamut", "color-gamut")}}, {{cssxref("@media/color-index", "color-index")}}, {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{deprecated_inline}}, {{cssxref("@media/device-height", "device-height")}} {{deprecated_inline}}, {{cssxref("@media/device-width", "device-width")}} {{deprecated_inline}}, {{cssxref("@media/display-mode", "display-mode")}}, {{cssxref("@media/forced-colors", "forced-colors")}}, {{cssxref("@media/grid", "grid")}}, {{cssxref("@media/height", "height")}}, {{cssxref("@media/hover", "hover")}}, {{cssxref("@media/inverted-colors", "inverted-colors")}}, {{cssxref("@media/monochrome", "monochrome")}}, {{cssxref("@media/orientation", "orientation")}}, {{cssxref("@media/overflow-block", "overflow-block")}}, {{cssxref("@media/overflow-inline", "overflow-inline")}}, {{cssxref("@media/pointer", "pointer")}}, {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}, {{cssxref("@media/prefers-contrast", "prefers-contrast")}}, {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}, {{cssxref("@media/resolution", "resolution")}}, {{cssxref("@media/scripting", "scripting")}}, {{cssxref("@media/update-frequency", "update")}}, {{cssxref("@media/width", "width")}} があります。

  例えば、{{cssxref("@media/hover", "hover")}} という機能では、端末が要素の上で停止したことを検出できるかどうかをクエリーで検査することができます。
  メディア特性式は、その存在や値をテストするもので、完全にオプションです。
  それぞれのメディア特性式は括弧で囲む必要があります。

- [論理演算子](/ja/docs/Web/CSS/@media#論理演算子)は、複合的なメディアクエリーを構成するために使用します。 `not`, `and`, `only` があります。
  また、複数のメディアクエリーをカンマで区切って 1 つのルールにまとめることもできます。

メディア種別（指定されている場合）が文書を表示する端末と照合され、かつ、すべてのメディア機能式が `true` と計算されると、メディアクエリーは true と計算されます。
未知のメディア種別を含むクエリは常に false となります。

> **Note:** {{HTMLElement("link")}} タグにメディアクエリーがついていた場合、スタイルシートはクエリーが `false` を返したとしても[ダウンロードされます](https://scottjehl.github.io/CSS-Download-Tests/)が、ダウンロードの優先度ははるかに低くなります。
> ただし、その内容は、クエリーの結果が `true` にならない限り適用されません。
> なぜこのようになるかは、 Tomayac 氏のブログ [Why Browser Download Stylesheet with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2) に書かれています。


## メディア種別を対象にする

メディア種別は、その機器の一般的な分類を記述します。ウェブサイトは一般的に画面を想定してデザインされていますが、プリンターや、音声ベースの画面リーダーのような特殊な機器を対象としたスタイルを作成したい場合もあるでしょう。例えば、この CSS はプリンターを対象としています。

```css
@media print { ... }
```

複数の機器を対象にすることもできます。例えば、この `@media` ルールは 2 つのメディアクエリーを使用して、画面とプリンターの両方の端末を対象としています。

```css
@media screen, print { ... }
```

すべてのメディア種別の一覧は、[メディア種別](/ja/docs/Web/CSS/@media#メディア種別)を参照してください。とても大まかな用語で端末を記述するため、数はわずかしかありません。もっと具体的な属性で対象にするには、代わりに*メディア特性*を使用してください。

## メディア特性を対象にする

メディア特性は、{{glossary("user agent", "ユーザーエージェント")}}、出力端末、環境などの特定の特徴を記述します。
例えば、画面の広いモニター、マウスを使用したコンピューター、暗い状況で使用される端末などに対して特定のスタイルを適用することができます。
この例は、ユーザーの*主な*入力手段（マウスなど）が要素の上で停止したことを検出できる場合にスタイルを適用します。

```css
@media (hover: hover) { ... }
```

多くのメディア特性は*範囲特性*であり、 "min-" または "max-" の接頭辞をつけて「最小条件」または「最大条件」の制約を表現します。例えば、この CSS はブラウザーの{{glossary("viewport", "ビューポート")}}の幅が 12450px 以下である場合のみ、スタイルを適用します。

```css
@media (max-width: 12450px) { ... }
```

値を指定せずにメディア特性クエリーを作成した場合、特性の値がゼロ (または Level 4 では `none`) ではない場合に中のスタイルが使用されます。例えば、この CSS はカラー画面を持つ任意の端末に適用されます。

```css
@media (color) { ... }
```

ブラウザーを実行している端末である特性が適用されない場合、メディア特性に向けた式は常に偽です。例えば、以下のクエリーの中のスタイルは、音声のみの端末には画面のアスペクト比がないので、決して使われません。

```css
@media speech and (aspect-ratio: 11/5) { ... }
```

その他の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)の例については、それぞれの特性のリファレンスページを参照してください。

## 複合メディアクエリーの作成

複数の条件に依存するメディアクエリーを作成したくなる場合があるかもしれません。これは、 `not`, `and`, `only` の**論理演算子**の出番です。その上、複数のメディアクエリーを**カンマ区切りのリスト**で結合することができます。これによって、同じスタイルを異なる場面で適用することができます。

以前の例で、すでに `and` 演算子がメディア*種別*とメディア*特性*をグループ化するために使用されているのを見ました。
`and` 演算子は、複数のメディア特性を 1 つのメディアクエリーに結合することもできます。一方で `not` 演算子は、メディアクエリーを反転し、基本的に普通の意味とは逆になります。
`only` 演算子は古いブラウザーでスタイルが適用されるのを防止します。

> **Note:** 多くの場合、 `all` メディア種別が他のタイプが指定されない場合に既定で使用されます。
しかし、 `not` または `only` 演算子を使用する場合は、メディア種別を明示的に指定する必要があります。

### 複数の種別または特性の組み合わせ

`and` キーワードはメディア特性をメディア種別、*または*他のメディア特性に結合します。この例は2つのメディア特性を結合して、スタイルを横長で幅が 30em 以上ある端末に制限します。

```css
@media (min-width: 30em) and (orientation: landscape) { ... }
```

スタイルを画面に限定する場合は、メディア特性に `screen` メディア種別を結合します。

```css
@media screen and (min-width: 30em) and (orientation: landscape) { ... }
```

### 複数のクエリーの検査

カンマ区切りのリストを使うと、ユーザーの端末が様々なメディア種別、特性、状態のいずれか一つに一致する場合にスタイルを適用させることができます。例えば、以下のルールはユーザーの端末の高さが 680px 以上*または*画面が縦長モードであるときにスタイルが適用されます。

```css
@media (min-height: 680px), screen and (orientation: portrait) { ... }
```

上記の例について言えば、もしユーザーがページの縦が 800px のプリンターを持っていた場合、最初のクエリーが適用されるので media ステートメントは真を返します。同様に、ユーザーが縦長モードでビューポートの高さが 480px のスマートフォンを使っていた場合、2番目のクエリーが適用され、 media ステートメントはやはり真を返します。

### クエリーの意味の反転

`not` キーワードはメディアクエリー全体の意味を反転します。これは、適用される特定のメディアクエリーを単純に反転します。
(従って、メディアクエリーのカンマ区切りのリストにあるそれぞれのメディアクエリーには適用されません。)
`not` キーワードは個別の特性クエリーに対して使用することができず、クエリー全体のみを反転します。 `not` は以下のクエリーの最後に評価されます。

```css
@media not all and (monochrome) { ... }
```

... よって、上記のクエリーは次のように評価されます。

```css
@media not (all and (monochrome)) { ... }
```

... このようにはなりません。

```css example-bad
@media (not all) and (monochrome) { ... }
```

他の例を挙げます。以下のメディアクエリーは、

```css
@media not screen and (color), print and (color) { ... }
```

... 次のように評価されます。

```css
@media (not (screen and (color))), print and (color) { ... }
```

### 古いブラウザーとの互換性の維持

`only` キーワードは、メディア特性がついたメディアクエリーに対応していない古いブラウザーで、そのスタイルが適用されるのを防ぎます。*最近のブラウザーでは効果がありません。*

```css
@media only screen and (color) { ... }
```

## Level 4 での構文の拡張

Media Queries Level 4 仕様書では、例えば幅や高さについて、よりすっきりとした "range" 型を持つ特性を使ってメディアクエリーを作れるよう構文が拡張されました。
Level 4 はこのようなクエリーを書くために*範囲コンテキスト*を追加しています。例えば、幅について `max-` の特性を使用する場合は、以下のように書くことができます。

> **Note:** Media Queries Level 4 仕様は、最新のブラウザーはそれなりに対応していますが、一部のメディア機能には十分に対応していません。詳細は [`@media` ブラウザー互換性一覧表](/ja/docs/Web/CSS/@media#ブラウザーの互換性)を参照してください。

```css
@media (max-width: 30em) { ... }
```

Media Queries Level 4 では、これを次のように書くことができます。

```css
@media (width <= 30em) { ... }
```

`min-` および `max-` を使用すると、次のようにして幅が2つの値の間にあるかどうかを検査することができます。

```css
@media (min-width: 30em) and (max-width: 50em) { ... }
```

Level 4 の構文に変換すると、次のようになります。

```css
@media (30em <= width <= 50em ) { ... }
```

また、 Media Queries Level 4 では **and**, **not**, **or** を伴う完全な論理代数を使ったメディアクエリーの組み合わせの方法も追加されました。

### `not` による特性の否定

`not()` を使用してメディア特性を囲むと、クエリーのその特性を否定します。例えば、 `not(hover)` は端末でホバーができない場合に一致します。

```css
@media (not(hover)) { ... }
```

### 

`or` を使用して複数の特性の中の一つと一致するか検査することができ、特性のうちの何れかが true であれば `true` になります。例えば、次のクエリーは端末がモノクロ画面である、またはホバーができるかどうかを検査します。

```css
@media (not (color)) or (hover) { ... }
```

## 関連情報

- [プログラムからのメディアクエリーの検査](/ja/docs/Web/CSS/Media_Queries/Testing_media_queries)
- [CSS Animations Between Media Queries](https://davidwalsh.name/animate-media-queries)
- [Mozilla 拡張メディア特性](/ja/docs/Web/CSS/Mozilla_Extensions#media_features)
- [WebKit 拡張メディア特性](/ja/docs/Web/CSS/WebKit_Extensions#media_features)

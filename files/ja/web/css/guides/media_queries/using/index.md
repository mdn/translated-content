---
title: メディアクエリーの使用
slug: Web/CSS/Guides/Media_queries/Using
original_slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

**メディアクエリー**によって、端末の種類（プリンターや画面など）や、画面の解像度、向き、{{glossary("aspect ratio", "アスペクト比")}}、ブラウザーの{{glossary("viewport", "ビューポート")}}の幅や高さ、ユーザーの設定（動きの軽減、データの使用、透明度など）などの機能や特徴に応じて CSS スタイルを適用することができます。

メディアクエリーは以下の用途で使用されます。

- [CSS](/ja/docs/Web/CSS) の {{cssxref("@media")}} および {{cssxref("@import")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)により、条件付きでスタイルを適用する。
- {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} などの [HTML](/ja/docs/Web/HTML) 要素で `media=` 属性や `sizes="` 属性を付けて特定のメディアを対象とする。
- [メディアの状態の検査と監視](/ja/docs/Web/CSS/Guides/Media_queries/Testing)をするために、 {{domxref("Window.matchMedia()")}} および {{domxref("EventTarget.addEventListener()")}} メソッドを使用する

> [!NOTE]
> このページの例では説明のために CSS の `@media` を使用していますが、基本構文はすべての種類のメディアクエリーで共通です。

## 構文

メディアクエリーは、任意の「メディア種別」と任意の数の「メディア特性」の式で構成されます。「論理演算子」を使用して、複数のクエリーを様々な形で組み合わせることができます。メディアクエリーは大文字小文字の区別がありません。

- [メディア種別](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア種別)は、メディアクエリーを適用する機器の大まかな分類を `all`, `print`, `screen` で定義します。

  種別は省略可能（`all` と見なされる）ですが、 `only` 論理演算子を使用する場合は例外です。

- [メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)は、{{glossary("user agent", "ユーザーエージェント")}}、出力機器、環境などの特定の特徴を記述します。
  - {{cssxref("@media/any-hover", "any-hover")}}
  - {{cssxref("@media/any-pointer", "any-pointer")}}
  - {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - {{cssxref("@media/color", "color")}}
  - {{cssxref("@media/color-gamut", "color-gamut")}}
  - {{cssxref("@media/color-index", "color-index")}}
  - {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{deprecated_inline}}
  - {{cssxref("@media/device-height", "device-height")}} {{deprecated_inline}}
  - {{cssxref("@media/device-posture", "device-posture")}}
  - {{cssxref("@media/device-width", "device-width")}} {{deprecated_inline}}
  - {{cssxref("@media/display-mode", "display-mode")}}
  - {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - {{cssxref("@media/forced-colors", "forced-colors")}}
  - {{cssxref("@media/grid", "grid")}}
  - {{cssxref("@media/height", "height")}}
  - {{cssxref("@media/hover", "hover")}}
  - {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - {{cssxref("@media/monochrome", "monochrome")}}
  - {{cssxref("@media/orientation", "orientation")}}
  - {{cssxref("@media/overflow-block", "overflow-block")}}
  - {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - {{cssxref("@media/pointer", "pointer")}}
  - {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - {{cssxref("@media/resolution", "resolution")}}
  - {{cssxref("@media/scripting", "scripting")}}
  - {{cssxref("@media/update", "update")}}
  - {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - {{cssxref("@media/width", "width")}}

  例えば、{{cssxref("@media/hover", "hover")}} という機能では、端末が要素の上で停止したことを検出できるかどうかをクエリーで検査することができます。
  メディア特性式は、その存在や値をテストするもので、完全にオプションです。
  それぞれのメディア特性式は括弧で囲む必要があります。

- [論理演算子](/ja/docs/Web/CSS/Reference/At-rules/@media#論理演算子)は、複合的なメディアクエリーを構成するために使用します。 `not`, `and`, `only` があります。
  また、複数のメディアクエリーをカンマで区切って 1 つのルールにまとめることもできます。

メディア種別（指定されている場合）が文書を表示する端末と照合され、かつ、すべてのメディア機能式が `true` と計算されると、メディアクエリーは true と計算されます。
未知のメディア種別を含むクエリーは常に false となります。

> [!NOTE]
> {{HTMLElement("link")}} タグにメディアクエリーがついていた場合、スタイルシートはクエリーが `false` を返したとしても[ダウンロードされます](https://scottjehl.github.io/CSS-Download-Tests/)が、ダウンロードの優先度ははるかに低くなります。
> ただし、その内容は、クエリーの結果が `true` にならない限り適用されません。
> なぜこのようになるかは、 Tomayac 氏のブログ [Why Browser Download Stylesheet with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2) に書かれています。

## メディア種別を対象にする

メディア種別は、その機器の一般的な分類を記述します。ウェブサイトは一般的に画面を想定してデザインされていますが、プリンターや、音声ベースのスクリーンリーダーのような特殊な機器を対象としたスタイルを作成したい場合もあるでしょう。
例えば、この CSS はプリンターを対象としています。

```css
@media print {
  /* … */
}
```

複数の機器を対象にすることもできます。
例えば、この `@media` ルールは 2 つのメディアクエリーを使用して、画面とプリンターの両方の端末を対象としています。

```css
@media screen, print {
  /* … */
}
```

すべてのメディア種別の一覧は、[メディア種別](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア種別)を参照してください。
メディア種別は端末をとても大まかに記述するため、元々定義されていたメディア種別のほとんどは非推奨となり、`screen`、`print`、`all` だけが残りました。より詳細な属性を指定するには、代わりに「メディア特性」を使用してください。

## メディア特性を対象にする

メディア特性は、{{glossary("user agent", "ユーザーエージェント")}}、出力端末、環境などの特定の特徴を記述します。
例えば、画面の広いモニター、マウスを使用したコンピューター、暗い状況で使用される端末などに対して特定のスタイルを適用することができます。
この例は、ユーザーの*主な*入力手段（マウスなど）が要素の上で停止したことを検出できる場合にスタイルを適用します。

```css
@media (hover: hover) {
  /* … */
}
```

メディア機能は、範囲であったり離散的であったりします。

「離散的特性」は、値を一連の{{glossary("enumerated", "列挙型")}}キーワード値から取得します。例えば、 `orientation` 特性は `landscape` と `portrait` のどちらかを受け入れます。

```css
@media print and (orientation: portrait) {
  /* … */
}
```

多くのメディア特性は「範囲特性」であり、 "min-" または "max-" の接頭辞をつけて「最小条件」または「最大条件」の制約を表現します。例えば、この CSS はブラウザーの{{glossary("viewport", "ビューポート")}}の幅が 1250px 以下である場合のみ、スタイルを適用します。

```css
@media (max-width: 1250px) {
  /* … */
}
```

次のメディアクエリーは、上記の例と同等です。

```css
@media (width <= 1250px) {
  /* … */
}

@media (1250px >= width) {
  /* … */
}
```

メディアクエリー範囲特性を使用すると、その値を含む `min-` および `max-` 接頭辞、またはより簡潔な範囲構文演算子 `<=` および `>=` を使用することができます。

以下のメディアクエリーは等価です。

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}

@media (30em <= width <= 50em) {
  /* … */
}

@media (50em >= width >= 30em) {
  /* … */
}
```

上記の範囲の比較は指定された値を含みます。比較値を除外するには、`<` および/または `>` を使用してください。

```css
@media (30em < width < 50em) {
  /* … */
}

@media (50em > width > 30em) {
  /* … */
}
```

値を指定せずにメディア特性クエリーを作成した場合、特性の値が `0` または `none` ではない場合に中のスタイルが使用されます。例えば、この CSS はカラー画面を持つ任意の端末に適用されます。

```css
@media (color) {
  /* … */
}
```

その特性が、ブラウザーが動作している端末で適用されない場合、そのメディア特性を含む式は常に false となります。

その他の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)の例については、それぞれの特性のリファレンスページを参照してください。

## 複合メディアクエリーの作成

複数の条件に依存するメディアクエリーを作成したくなる場合があるかもしれません。これは、 `not`, `and`, `only` の**論理演算子**の出番です。
さらに、複数のメディアクエリーをカンマで区切ったリストに結合することができます。これにより、異なる状況で同じスタイルを適用することができ、含まれているメディアクエリーは論理 `or` 合成として評価されます。つまり、各メディアクエリーは括弧で囲まれ、その間に `or` が挿入されているかのように解釈されます。

以前の例で、すでに `and` 演算子がメディア*種別*とメディア*特性*をグループ化するために使用されているのを見ました。
`and` 演算子は、複数のメディア特性を 1 つのメディアクエリーに結合することもできます。
`not` 演算子は、メディアクエリーや、括弧で囲まれたメディア特性を反転したりして、基本的に普通の意味とは逆になります。
`or` 演算子は、特定の条件下で、単一のメディアクエリー内に複数のメディア機能を組み合わせるために使用することができます。
最後に、 `only` 演算子は、古いブラウザーがメディア機能式を評価せずにスタイルを適用することを防ぐために使用されていましたが、現行のブラウザーでは効果はありません。

> [!NOTE]
> 多くの場合、 `all` メディア種別は他の種別が指定されない場合に既定で使用されます。
> ただし、`only` 演算子を使用する場合は、メディア種別を明示的に指定する必要があります。全体として `only screen` または `only print` と書くことができます。

### 複数の種別または特性の組み合わせ

`and` キーワードはメディア特性をメディア種別、*または*他のメディア特性に結合します。
この例は 2 つのメディア特性を結合して、スタイルを横長で幅が 30em 以上ある端末に制限します。

```css
@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

スタイルを画面に限定する場合は、メディア特性に `screen` メディア種別を結合します。

```css
@media screen and (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

### 複数のクエリーの検査

カンマ区切りのリストを使うと、ユーザーの端末が様々なメディア種別、特性、状態のいずれか一つに一致する場合にスタイルを適用させることができます。

次のルールには 2 つのメディアクエリーが含まれています。ユーザーの端末の高さが 680px 以上である場合、またはブラウザーのビューポートが縦向きモード（ビューポートの高さがビューポートの幅よりも大きい）の場合、このブロックのスタイルが適用されます。

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

この例では、ユーザーが PDF に出力しており、ページの高さが 800px の場合、最初のクエリー要素（ビューポートの高さが 680px 以上であるかどうかをテストする）が真であるため、メディアクエリーは true を返します。
同様に、ユーザーがスマートフォンを縦向きで使用しており、ビューポートの高さが 480px の場合、2 番目のクエリー要素が真であるため、メディアクエリーは true を返します。

カンマで区切られたメディアクエリーの一覧では、個々のメディアクエリーはカンマで、または、リスト内の最後のメディアクエリーの場合は、開括弧 (`{`) で終わります。

### クエリーの意味の反転

`not` キーワードは単一のメディアクエリーの意味を反転します。例えば、このメディアクエリー内の CSS スタイルは、印刷されるメディアを除くすべてのメディアに適用されます。

```css
@media not print {
  /* … */
}
```

`not` は、それが適用されるメディアクエリーのみを否定します。括弧のない `not` は、それが含まれるメディアクエリー内のすべての機能を否定します。つまり、カンマで区切られたメディアクエリーのリストでは、それぞれ `not` は、それが含まれている単一のクエリーに適用され、その単一のクエリー内のすべての機能に適用されます。この例では、`not` は最初のメディアクエリーに適用され、最初のカンマで終了します。

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

上記のクエリーは、次のように評価されます。

```css
@media (not (screen and (color))), print and (color) {
  /* … */
}
```

どちらの例も有効です。メディア条件は、括弧 (`()`) で囲むことでグループ化できます。これらのグループは、単一のメディアクエリーと同じように、条件内に入れ子にすることができます。

`not` はメディアクエリーの中で最後に評価されます。これは、 `not` の直後に開括弧が追加され、メディアクエリーの末尾で閉じられた場合と同様に、クエリー内の単一の機能ではなく、メディアクエリー全体に適用されるということです。

次のクエリーは、

```css
@media not all and (monochrome) {
  /* … */
}
```

このように評価されます。

```css
@media not (all and (monochrome)) {
  /* … */
}
```

次のようには評価されません。

```css example-bad
@media (not all) and (monochrome) {
  /* … */
}
```

メディアクエリー内の単一の機能を否定するには、括弧を使用します。`not` とメディア機能を括弧で囲むと、否定されるクエリーの要素が制限されます。

この例では、`hover` メディア特性を否定しますが、`all` メディア種別は否定しません。

```css
@media all and (not(hover)) {
  /* … */
}
```

`not(hover)` は、端末にホバー機能がない場合に一致します。この場合、括弧があるため、`not` は `hover` に適用されますが、`all` には適用されません。

### 古いブラウザーとの互換性の維持

`only` キーワードは、メディア特性がついたメディアクエリーに対応していない古いブラウザーで、そのスタイルが適用されるのを防ぎます。
最近のブラウザーでは効果がありません。

```css
@media only screen and (color) {
  /* … */
}
```

### `or` による複数の機能の検査

`or` を使用して複数の特性の中の一つと一致するか検査することができ、特性のうちの何れかが true であれば `true` になります。
例えば、次のクエリーは端末がモノクロ画面である、またはホバーができるかどうかを検査します。

```css
@media (not (color)) or (hover) {
  /* … */
}
```

`or` 演算子は、 `and` および `not` 演算子と同じレベルで使用することはできないことに注意してください。メディア特性をカンマで区切るか、括弧を使用してメディア特性の部分式をグループ化して、評価の順序を明確にすることができます。

例えば、次のクエリーはどちらも有効です。

```css
@media ((color) and (hover)) or (monochrome) {
  /* … */
}

/* or */
@media (color) and (hover), (monochrome) {
  /* … */
}
```

## 関連情報

- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
- [コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)
- [プログラムからのメディアクエリーの検査](/ja/docs/Web/CSS/Guides/Media_queries/Testing)
- [CSS Animations Between Media Queries](https://davidwalsh.name/animate-media-queries)
- [Mozilla 拡張のメディア特性](/ja/docs/Web/CSS/Reference/Mozilla_extensions#メディア特性)
- [WebKit 拡張のメディア特性](/ja/docs/Web/CSS/Reference/Webkit_extensions#メディア特性)

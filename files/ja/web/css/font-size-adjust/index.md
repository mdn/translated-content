---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

**`font-size-adjust`** は [CSS](/ja/docs/Web/CSS) のプロパティで、全体の {{cssxref("font-size")}} を定義する大文字のサイズに対する小文字のサイズを変更する方法を提供します。このプロパティは、フォントの代替が起こりうる状況で有益なものです。

最初に選んだ {{ Cssxref("font-family") }} が使用できず、その代替フォントのアスペクト値（小文字の高さをフォントサイズで割った値）が大きく異なる場合、読みやすさが課題になることがあります。フォントの読みやすさは、特に小さなサイズのフォントでは、大文字の大きさよりも小文字の大きさによって決まります。 `font-size-adjust` プロパティは、代替フォントのフォントサイズを調整してフォント間のアスペクト値を一定に保ち、使用するフォントに関係なくテキストが同じように現れることを保証するのに役立ちます。

## 構文

```css
/* 指定されたフォントサイズを使用 */
font-size-adjust: none;

/* 1 つの値: <number> または from-font */
font-size-adjust: 0.5;
font-size-adjust: from-font;

/* 2 つの値 */
font-size-adjust: ex-height 0.5;
font-size-adjust: ch-width from-font;

/* グローバル値 */
font-size-adjust: inherit;
font-size-adjust: initial;
font-size-adjust: revert;
font-size-adjust: revert-layer;
font-size-adjust: unset;
```

### 値

`font-size-adjus` プロパティは、その値としてキーワード `none`、 1 つ（`<number>` または `from-font`）、または 2 つ（`<font-metric>` および `<number>` と `from-font` のどちらか）の値を取ります。

- `none`
  - : `font-size` プロパティだけを基準にフォントサイズを選びます。
- `<font-metric>` {{optional_inline}}

  - : 代替フォントのフォントサイズを調整するために使用する最初の選択肢のフォントメトリックを指定します。この引数は、下記の一覧のキーワードのいずれかを受け入れます。オプション引数であり、 `<font-metric>` を指定しない場合は `ex-height` を使用します。

    - `ex-height`
      - : x-height（フォント内の小文字 "x" の高さ）とフォントサイズ（アスペクト値）の比を用い て、代替フォントのサイズを調整します。このキーワード値は、フォント間で小文字を正規化するために用いられます。
    - `cap-height`
      - : cap-height（大文字の高さ）とフォントサイズの比を用いて、代替フォントのサイズを調整します。このキーワード値は、フォント間で大文字を正規化するために用いられます。
    - `ch-width`
      - : 文字 "0" (ZERO, U+0030) の送り幅 （フォント内の文字が占める水平空間） のフォントサイズに対する比率を使用します。このキーワード値は、フォントの横方向の狭いピッチを正規化するために使用します。
    - `ic-width`
      - : 文字 "水" (CJK water ideograph, U+6C34) の送り幅のフォントサイズに対する比率を用います。このキーワード値は、フォント、特に CJK （中国語・日本語・韓国語）文字を含むフォントの横方向の幅ピッチを正規化するために用いられます。
    - `ic-height`
      - : 文字 "水" (CJK water ideograph, U+6C34) の送り高さ （フォント内で文字が占める垂直空間）のフォントサイズに対する比率を使用します。このキーワード値は、特に CJK 文字を含むフォントの垂直方向のピッチを正規化するために使用します。

- {{cssxref("&lt;number&gt;")}}

  - : 指定する `<font-metric>` に応じて用いるフォントサイズを調整します。 `<font-metric>` を指定しない場合（既定値 `ex-height` を使用した場合）、 `<number>` 値は、代替フォントのフォントサイズを、その x-height がフォントサイズの指定された倍数になるように調整します。この値は一般に、 最初に選ぶフォントのアスペクト値 （x-height とフォントサイズの比）に一致します。ということは、最初の選択フォントが利用できる場合は、ブラウザーの `font-size-adjust` への対応にかかわらず、すべてのブラウザーで一貫して表示されるということです。

    `<font-metric>` 値が指定された場合、 `<number>` 値は選択された `<font-metric>` に従ってフォントサイズを調整し、異なるフォント間で指定されたフォントメトリックの一貫した外観を維持します。

    `<number>` 値は `0` から無限大までの任意の数値を受け入れます。 `0` を指定すると、テキストの高さはゼロになります（つまり、テキストは非表示になります）。負の値は無効です。

- `from-font`
  - : 最初に利用できるフォントから、指定した `<font-metric>` の `<number>` 値を使用します。

## 解説

`font-size-adjust` に対応していないブラウザーとの互換性を保証するために、このプロパティは {{cssxref("font-size")}} プロパティの数値倍数として指定します。この数値は、一般的に最初の選択フォントのアスペクト値と一致する必要があります。

> [!NOTE]
> 指定した `<font-metric>` が [`@font-face`](/ja/docs/Web/CSS/@font-face) で上書きされた場合、例えば [`size-adjust`](/ja/docs/Web/CSS/@font-face/size-adjust) 記述子を使用することで、上書きされたメトリックが `font-size-adjust` の計算に用いられます。ということは、 `font-size-adjust` と `size-adjust` が一緒に適用されている場合、 `size-adjust` は効果を持たないということです。

調整されたフォントサイズは、式 `u  =  ( m / m′ ) s` を使用して計算されます。

- `m` は指定された `<font-metric>` と最初に選択されたフォントサイズの比です。

- `m′` は対応する `<font-metric>` と代替フォントサイズの比です。

- `s` は `font-size` プロパティの値です。

- `u` は代替フォントの新しい、調整されたフォントサイズです。

調整後のフォントサイズがどのように計算されるか、この例で見てみましょう。最初に選択されたフォントの `font-size` は `12px` (`s`) であり、 `cap-height` とフォントサイズとの比は `0.20` (`m`) です。 `cap-height` とフォントサイズとの比は代替フォントにおいて `0.15` (`m′`) です。 `font-size-adjust` 値は `cap-height 0.20` として指定されます。第一のフォントが利用できない場合、代替フォントの調整後のフォントサイズは `16px` (`(0.20 / 0.15) * 12`) になるように計算されます。これにより、表示されたときに、代替フォントの `cap-height` が最初のフォントのもののと同じになるように保証します。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### 小文字と大文字のフォントサイズを正規化

この例では、 `font-size-adjust` プロパティを使用して、フォント間で同じアスペクト値を保持することができることを示しています。 Verdana フォントのアスペクト値は `0.545` と比較的高く、これは小文字が大文字に比べて相対的に背が高いということです。これにより、小さなフォントサイズでもテキストが読みやすく現れます。しかし、 Times フォントはアスペクト値が `0.447` と低いため、小さいサイズではテキストが読みにくくなります。Verdana が最初の選択フォントで、 Times が代替フォントの場合、 `font-size-adjust` プロパティを指定すると、 Times でも同じアスペクト値を保つのに役立ちます。そのため、フォントが Times に代替しても、テキストは Verdana と同じような読みやすさを維持することができます。

同様に、 cap-height とフォントサイズの日は Verdana では `0.73` であり、 Times では `0.66` です。 `font-size-adjust` プロパティが Times に適用され、大文字が Verdana の比に一致するように調整された場合、 Times フォントは調整されたフォントサイズ ((0.73 / 0.66) \* 14) の `15.48px` で表示されます。

```html
<p class="verdana">
  A: This text uses the Verdana font (14px), which has relatively large
  lowercase letters.
</p>
<p class="times">
  B: This text uses the Times font (14px), which is hard to read in small sizes.
</p>
<p class="times adj-times-ex-height">
  C: This text in 14px Times font is adjusted to the same aspect value as the
  Verdana font, so lowercase letters are normalized across the two fonts.
</p>
<p class="times adj-times-cap-height">
  D: This text in 14px Times font is adjusted to the same cap-height to font
  size ratio as the Verdana font, so uppercase letters are normalized across the
  two fonts.
</p>
```

```css
.times {
  font-family: Times, serif;
  font-size: 14px;
}

.verdana {
  font-family: Verdana, sans-serif;
  font-size: 14px;
}

.adj-times-ex-height {
  font-size-adjust: 0.545;
}

.adj-times-cap-height {
  font-size-adjust: cap-height 0.73;
}
```

{{ EmbedLiveSample('Normalizing font size by lowercase and uppercase letters', 500, 200) }}

`font-size-adjust` がなければ、 `B` で Verdana フォントから Times フォントへ切り替えると、アスペクト値が低いために読みやすさが著しく低下する可能性があります。
`C` では、 `font-size-adjust` プロパティに 1 つの値しか指定されていないので、既定の `<font-metric>` の `ex-height` 値が使用されていることに注意してください。 `D` は、大文字の高さを調整した場合、 `A` と比べてフォントがどのように見えるかを示しています。

### フォントのアスペクト値の決定

指定されたフォントについて、横に並んだ 2 つの [`<span>`](/ja/docs/Web/HTML/Element/span) 要素の同じコンテンツを使用して、フォントのアスペクト値を決定することができます。両方の span のコンテンツに同じフォントサイズを使用している場合、一方の span の `font-size-adjust` が指定されたフォントに対して正確なとき、 span は一致します。

下記の例では、 3 組の `<span>` 要素が横に並んでいて、それぞれが "b" という文字を含んでいます。目標は、 2 つの文字の境界線が配置されるまで、それぞれのペアの正しい `<span>` の `font-size-adjust` プロパティを調整することです。結果として得られる `font-size-adjust` の値は、フォントのアスペクト値と考えることができます。

最初の組では `0.6` から始め、 2 つ目では `0.5` に調整し、 3 つ目の組で "b" の文字の境界線が完全に揃うまで、 `font-size-adjust` プロパティの値を調整し続けます。この例では、アスペクト値は `0.482` と決定されます。

```html
<div>
  <p><span>b</span><span class="adjust1">b</span></p>
  0.6
</div>

<div>
  <p><span>b</span><span class="adjust2">b</span></p>
  0.5
</div>

<div>
  <p><span>b</span><span class="adjust3">b</span></p>
  0.482
</div>
```

```css hidden
body {
  display: flex;
}

div {
  text-align: center;
}

p {
  margin: 0 30px 10px 30px;
}
```

```css
body {
  display: flex;
}

div {
  text-align: center;
}

p {
  font-family: Futura;
  font-size: 50px;
}

span {
  border: solid 1px red;
}

.adjust1 {
  font-size-adjust: 0.6;
}

.adjust2 {
  font-size-adjust: 0.5;
}

.adjust3 {
  font-size-adjust: 0.482;
}
```

{{ EmbedLiveSample('Determining the aspect value of a font', 500, 120) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-size")}}
- {{cssxref("font-weight")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}} `@font-face` 記述子
- [学習: 基本的なテキストとフォントのスタイル設定](/ja/docs/Learn/CSS/Styling_text/Fundamentals)

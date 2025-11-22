---
title: font-variant-caps
slug: Web/CSS/Reference/Properties/font-variant-caps
original_slug: Web/CSS/font-variant-caps
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

**`font-variant-caps`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スモールキャップやタイトルに使われる代替グリフの使用を制御します。

{{InteractiveExample("CSS デモ: font-variant-caps")}}

```css interactive-example-choice
font-variant-caps: normal;
```

```css interactive-example-choice
font-variant-caps: small-caps;
```

```css interactive-example-choice
font-variant-caps: all-small-caps;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>Difficult waffles</p>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Fira Sans", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}
```

指定されたフォントに複数の異なる大きさで大文字の字形が含まれている場合、このプロパティは最適なものを選択します。 petite capital (小さなの大文字) の字形が利用できない場合は、スモールキャピタル (小ぶりの大文字) の字形を使用して表示します。これらが存在しない場合、ブラウザーは大文字の字形から合成します。

フォントには、様々な大文字小文字の区別がない文字の特殊な字形が含まれていることがあり (発音記号など)、これらが大文字の文字により一致することがあります。しかし、小さな大文字の字形は大文字小文字の区別がない文字のために合成されることはありません。

### 言語特有の規則

このプロパティは言語特有の一致規則を考慮します。例えば以下のようなものです。

- チュルク語族 (トルコ語 (tr), アゼルバイジャン語 (az), クリミア・タタール語 (crh), ヴォルガ・タタール語 (tt), バシキール語 (ba) など) では、二種類の `i` (点ありと点なし) があり、二種類の大文字小文字の組み合わせ `i`/`İ` と `ı`/`I` があります。
- ドイツ語 (de) では、 `ß` は大文字で `ẞ` (U+1E9E) になることがあります。
- ギリシャ語 (el) では、語全体が大文字の時にアクセント記号がなくなりますが (`ά`/`Α`)、分離型のエタは例外です (`ή`/`Ή`)。また、また、最初の母音にアクセントを付けた二重母音はアクセント記号を失い、二番目の母音に発音区別符号を付けます (`άι`/`ΑΪ`)。

## 構文

```css
/* キーワード値 */
font-variant-caps: normal;
font-variant-caps: small-caps;
font-variant-caps: all-small-caps;
font-variant-caps: petite-caps;
font-variant-caps: all-petite-caps;
font-variant-caps: unicase;
font-variant-caps: titling-caps;

/* グローバル値 */
font-variant-caps: inherit;
font-variant-caps: initial;
font-variant-caps: revert;
font-variant-caps: revert-layer;
font-variant-caps: unset;
```

`font-variant-caps` プロパティは、以下のリスト内にある単一のキーワード値を使用して指定します。どの場合も、フォントが OpenType 値に対応していなければ、字形は合成によって生成されます。

### 値

- `normal`
  - : 代替字形の使用を無効にします。
- `small-caps`
  - : 小さな大文字の表示を有効にします (OpenType 特性: `smcp`)。スモールキャピタルの字形はふつう、大文字の形をしていますが、小文字と同じ大きさを使用して表示されます。
- `all-small-caps`
  - : 大文字と小文字の両方でスモールキャピタルの表示を有効にします (OpenType 機能: `c2sc`, `smcp`)。
- `petite-caps`
  - : petite capital の表示を有効にします (OpenType 特性: `pcap`)。
- `all-petite-caps`
  - : 大文字と小文字の両方で petite capital の表示を有効にします (OpenType 特性: `c2pc`, `pcap`)。
- `unicase`
  - : 大文字のスモールキャピタルと通常の小文字の混合表示を有効にします (OpenType 特性: `unic`).
- `titling-caps`
  - : タイトルキャピタルの表示を有効化します (OpenType 特性: `titl`)。大文字の字形は、ふつう小文字と一緒に使用するためにデザインされています。すべて大文字のタイトル文字列で使用された場合、太くなりすぎることがあります。タイトルキャピタルはこの場合に専用のデザインが行われたものです。

## アクセシビリティ

長い区間のテキストに対して `font-variant` の値を `all-small-caps` や `all-petite-caps` を設定すると、失読症のような認知障害を抱えた人にとって読むのが難しくなることがあります。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### スモールキャップのフォント変化形の設定

#### HTML

```html
<p class="small-caps">Firefox rocks, small caps!</p>
<p class="normal">Firefox rocks, normal caps!</p>
```

#### CSS

```css
.small-caps {
  font-variant-caps: small-caps;
  font-style: italic;
}
.normal {
  font-variant-caps: normal;
  font-style: italic;
}
```

#### 結果

{{ EmbedLiveSample('スモールキャップのフォント変化形の設定') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`font-variant`](/ja/docs/Web/CSS/Reference/Properties/font-variant)
- [`font-variant-alternates`](/ja/docs/Web/CSS/Reference/Properties/font-variant-alternates)
- [`font-variant-east-asian`](/ja/docs/Web/CSS/Reference/Properties/font-variant-east-asian)
- [`font-variant-emoji`](/ja/docs/Web/CSS/Reference/Properties/font-variant-emoji)
- [`font-variant-ligatures`](/ja/docs/Web/CSS/Reference/Properties/font-variant-ligatures)
- [`font-variant-numeric`](/ja/docs/Web/CSS/Reference/Properties/font-variant-numeric)
- [`font-variant-position`](/ja/docs/Web/CSS/Reference/Properties/font-variant-position)

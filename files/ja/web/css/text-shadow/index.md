---
title: text-shadow
slug: Web/CSS/text-shadow
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

**`text-shadow`** は CSS のプロパティで、テキストに影を追加します。文字列およびその装飾 ([`decoration`](/ja/docs/Web/CSS/text-decoration)) に適用される影のリストをカンマで区切ったリストで受け付けます。それぞれの影は、要素からの X および Y オフセット、影の明るさ、影の色のうちいくつかの組み合わせで記述します。

{{EmbedInteractiveExample("pages/css/text-shadow.html")}}

## 構文

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
text-shadow: #fc0 1px 0 10px;

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* color および blur-radius は既定値を使用 */
text-shadow: 5px 10px;

/* グローバル値 */
text-shadow: inherit;
text-shadow: initial;
text-shadow: revert;
text-shadow: revert-layer;
text-shadow: unset;
```

このプロパティは、影のカンマで区切られたリストとして指定します。

それぞれの影は 2 つまたは 3 つの `<length>` 値と、任意でその後に `<color>` 値を続けることで指定します。最初の 2 つの `<length>` 値は、 `<offset-x>` および `<offset-y>` の値です。3 番目の `<length>` 値は任意で `<blur-radius>` です。 `<color>` 値は影の色です。

複数の影が与えられた場合は、影は手前から奥に向けて適用され、最初に指定された影が一番上になります。

このプロパティは {{cssxref("::first-line")}} および {{cssxref("::first-letter")}} の両方の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)に適用されます。

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 省略可。影の色です。オフセット値の前か後に指定できます。色が指定されなければ、ユーザーエージェントが選択した色が使われるので、ブラウザー間で一貫性を保つために、明示的に定義することが求められます。
- `<offset-x> <offset-y>`
  - : 必須。これらの `<length>` 値はテキストに対する影のオフセットを指定します。 `<offset-x>` は水平方向の距離を指定します。負の値であればテキストの左に影を配置します。 `<offset-y>` は垂直方向の距離を指定します。負の値であればテキストの上に影を配置します。両方の値が `0` ならば、影はテキストの真後ろに配置されますが、 `<blur-radius>` の効果により一部だけが見えるかもしれません。
- `<blur-radius>`
  - : 省略可。これは {{cssxref("&lt;length&gt;")}} 値です。指定されなければ、既定では `0` になります。この値が大きいほど、ぼかしは大きくなり、影は広く薄くなります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 単純な影

```css
.red-text-shadow {
  text-shadow: red 0 -2px;
}
```

```html
<p class="red-text-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
</p>
```

{{EmbedLiveSample('Simple_shadow', '660px', '90px')}}

### 複数の影

```css
.white-text-with-blue-shadow {
  text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
  color: white;
  font:
    1.5em Georgia,
    serif;
}
```

```html
<p class="white-text-with-blue-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
</p>
```

{{EmbedLiveSample('Multiple_shadows', '660px', '170px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;color&gt;")}} データ型（影の色を指定するため）
- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/HTML/Applying_color)
- {{cssxref("box-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [Applying color to HTML elements using CSS](/ja/docs/Web/CSS/CSS_colors/Applying_color)

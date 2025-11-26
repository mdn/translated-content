---
title: font-variant-numeric
slug: Web/CSS/Reference/Properties/font-variant-numeric
original_slug: Web/CSS/font-variant-numeric
l10n:
  sourceCommit: ad6eb6b52b4b3082397e8e011bd59a6d88a8f5f3
---

**`font-variant-numeric`** は [CSS](/ja/docs/Web/CSS) のプロパティで、数字、分数、序数記号の表記を制御するために使用します。

{{InteractiveExample("CSS デモ: font-variant-numeric")}}

```css interactive-example-choice
font-variant-numeric: normal;
```

```css interactive-example-choice
font-variant-numeric: slashed-zero;
```

```css interactive-example-choice
font-variant-numeric: tabular-nums;
```

```css interactive-example-choice
font-variant-numeric: oldstyle-nums;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <table>
      <tr>
        <td><span class="tabular">0</span></td>
      </tr>
      <tr>
        <td><span class="tabular">3.14</span></td>
      </tr>
      <tr>
        <td><span class="tabular">2.71</span></td>
      </tr>
    </table>
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

#example-element table {
  margin-left: auto;
  margin-right: auto;
}

.tabular {
  border: 1px solid;
}
```

## 構文

```css
font-variant-numeric: normal;
font-variant-numeric: ordinal;
font-variant-numeric: slashed-zero;
font-variant-numeric: lining-nums; /* <numeric-figure-values> */
font-variant-numeric: oldstyle-nums; /* <numeric-figure-values> */
font-variant-numeric: proportional-nums; /* <numeric-spacing-values> */
font-variant-numeric: tabular-nums; /* <numeric-spacing-values> */
font-variant-numeric: diagonal-fractions; /* <numeric-fraction-values> */
font-variant-numeric: stacked-fractions; /* <numeric-fraction-values> */
font-variant-numeric: oldstyle-nums stacked-fractions;

/* グローバル値 */
font-variant-numeric: inherit;
font-variant-numeric: initial;
font-variant-numeric: revert;
font-variant-numeric: revert-layer;
font-variant-numeric: unset;
```

このプロパティは 2 つの形のうちの 1 つを取ります。

- キーワード値 `normal`
- 以下の一覧にあるその他の値を空白区切り、自由な順番で

### 値

- `normal`
  - : このキーワードは、別形式の表記の使用を無効にします。

- `ordinal`
  - : このキーワードは、序数記号に対して特別な表記を使用します。英語では 1st, 2nd, 3rd, 4th、イタリア語では 1a です。 OpenType の `ordn` の値に対応します。

- `slashed-zero`
  - : このキーワードは、スラッシュ付きの 0 を使用します。これは O と 0 を明確に区別する必要がある場合に便利です。 OpenType の `zero` の値に対応します。

- _`<numeric-figure-values>`_
  - : これらの値は、数字の形状を制御します。2 つの値が利用できます。
    - `lining-nums` は、全てをベースライン上に並べる表記を有効にします。 OpenType の `lnum` の値に対応します。
    - `oldstyle-nums` は、 3, 4, 7, 9 などいくつかの数字を下げる表記を有効にします。 OpenType の `onum` の値に対応します。

- _`<numeric-spacing-values>`_
  - : これらの値は、数字の表記の大きさを制御します。2 つの値が利用できます。
    - `proportional-nums` は、数字をすべて同じ大きさにしない表記を有効にします。 OpenType の `pnum` の値に対応します。
    - `tabular-nums` は、数字を同じ大きさにする表記を有効にし、表の中に配置しやすくします。 OpenType の `tnum` の値に対応します。

- _`<numeric-fraction-values>`_
  - : これらの値は、分数の表示に使う表記を制御します。2 つの値が利用できます。
    - `diagonal-fractions` は、分子と分母が小さめになり、スラッシュで区切られる表記を有効にします。 OpenType の `frac` の値に対応します。
    - `stacked-fractions` は、分子と分母が小さめになり、積み重ねられて水平線で区切られた表記を有効にします。 OpenType の `afrc` の値に対応します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 序数形式の設定

以下のコードブロック内の "Play" をクリックすると、 MDN Playground で例を編集できます。

```html live-sample___font-variant-numeric-example
<p class="ordinal">1st, 2nd, 3rd, 4th, 5th</p>
```

```css live-sample___font-variant-numeric-example
@font-face {
  font-family: "Source Sans Pro";
  src: url("https://mdn.github.io/shared-assets/fonts/SourceSansPro-Regular.otf")
    format("opentype");
  font-weight: 400;
  font-style: normal;
}

.ordinal {
  font-family: "Source Sans Pro";
  font-size: 2rem;
  font-variant-numeric: ordinal;
}
```

{{EmbedLiveSample("font-variant-numeric-example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`font-variant`](/ja/docs/Web/CSS/Reference/Properties/font-variant)
- [`font-variant-alternates`](/ja/docs/Web/CSS/Reference/Properties/font-variant-alternates)
- [`font-variant-caps`](/ja/docs/Web/CSS/Reference/Properties/font-variant-caps)
- [`font-variant-east-asian`](/ja/docs/Web/CSS/Reference/Properties/font-variant-east-asian)
- [`font-variant-emoji`](/ja/docs/Web/CSS/Reference/Properties/font-variant-emoji)
- [`font-variant-ligatures`](/ja/docs/Web/CSS/Reference/Properties/font-variant-ligatures)
- [`font-variant-position`](/ja/docs/Web/CSS/Reference/Properties/font-variant-position)

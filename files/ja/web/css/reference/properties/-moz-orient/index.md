---
title: CSS `-moz-orient` プロパティ
short-title: -moz-orient
slug: Web/CSS/Reference/Properties/-moz-orient
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_header}}

**`-moz-orient`** は [CSS](/ja/docs/Web/CSS) のプロパティで、適用される要素の向きを指定します。

## 構文

```css
-moz-orient: inline;

/* グローバル値 */
-moz-orient: inherit;
-moz-orient: initial;
-moz-orient: revert;
-moz-orient: revert-layer;
-moz-orient: unset;
```

### 値

- `inline`
  - : 要素をテキストの軸と同じ方向に描画します。横書きモードでは水平方向に、縦書きモードでは垂直方向に描画します。
- `block`
  - : 要素をテキストの軸と直交するように描画します。横書きモードでは垂直方向に、縦書きモードでは水平方向に描画します。
- `horizontal`
  - : 要素を水平方向に描画します。
- `vertical`
  - : 要素を垂直方向に描画します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntaxRaw(`-moz-orient = inline | block | horizontal | vertical`)}}

## 例

### HTML

```html
<p>The following progress meter is horizontal (the default):</p>
<progress max="100" value="75"></progress>

<p>The following progress meter is vertical:</p>
<progress class="vert" max="100" value="75"></progress>
```

### CSS

```css
.vert {
  -moz-orient: vertical;
  width: 16px;
  height: 150px;
}
```

### 結果

{{EmbedLiveSample("Examples","200","360")}}

## 仕様書

W3C に[提出](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html)され、最初の反応は肯定的でしたが、このプロパティはまだ仕様書には含まれていません。今のところ、 Mozilla 独自の拡張 (つまり、 `-moz-orient`) です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("box-orient")}}

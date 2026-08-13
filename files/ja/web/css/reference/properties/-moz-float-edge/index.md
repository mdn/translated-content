---
title: CSS `-moz-float-edge` プロパティ
short-title: -moz-float-edge
slug: Web/CSS/Reference/Properties/-moz-float-edge
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_header}}{{Deprecated_Header}}

標準外の **`-moz-float-edge`** [CSS](/ja/docs/Web/CSS) プロパティは、要素の高さと幅のプロパティが margin 、border 、padding の太さを含んでいるかどうかを指定します。

## 構文

```css
/* キーワード値 */
-moz-float-edge: content-box;
-moz-float-edge: margin-box;

/* グローバル値 */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
```

### 値

- `content-box`
  - : 高さと幅のプロパティがコンテンツを含むが、padding 、border および margin は含まない。
- `margin-box`
  - : 高さと幅のプロパティがコンテンツ、padding 、 border および margin を含む。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntaxRaw(`-moz-float-edge = content-box | margin-box`)}}

## 例

### HTML

```html
<div class="box">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
```

### CSS

```css
.box {
  display: block;
  height: 5px;
  margin: 0.5em auto;
  color: gray;
  -moz-float-edge: margin-box;
  box-sizing: border-box;
}
```

## 結果

{{ EmbedLiveSample('Examples') }}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Firefox バグ 432891](https://bugzil.la/432891)

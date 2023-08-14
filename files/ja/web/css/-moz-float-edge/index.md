---
title: "-moz-float-edge"
slug: Web/CSS/-moz-float-edge
---

{{CSSRef}}{{Non-standard_header}}

標準外の **`-moz-float-edge`** [CSS](/ja/docs/Web/CSS) プロパティは要素の高さと幅のプロパティが margin 、border 、padding の厚さを含んでいるのかを指定します。

```css
/* キーワード値 */
-moz-float-edge: border-box;
-moz-float-edge: content-box;
-moz-float-edge: margin-box;
-moz-float-edge: padding-box;

/* グローバル値 */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
```

## 構文

### 値

- `border-box`
  - : 高さと幅のプロパティがコンテンツ、padding および border を含むが、margin は含まない。
- `content-box`
  - : 高さと幅のプロパティがコンテンツを含むが、padding 、border および margin は含まない。
- `margin-box`
  - : 高さと幅のプロパティがコンテンツ、padding 、 border および margin を含む。
- `padding-box`
  - : 高さと幅のプロパティがコンテンツと padding を含むが、border および margin は含まない。

## 公式定義

{{CSSInfo}}

## 形式文法

```plain
-moz-float-edge =
  border-box | content-box | margin-box | padding-box
```

<h2 id="Examples">例</h2>

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
  margin: 0.5em auto 0.5em auto;
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

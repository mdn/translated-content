---
title: '-moz-force-broken-image-icon'
slug: Web/CSS/-moz-force-broken-image-icon
tags:
  - CSS
  - NeedsCompatTable
  - 標準外
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.-moz-force-broken-image-icon
translation_of: Web/CSS/-moz-force-broken-image-icon
---
{{Non-standard_header}}{{CSSRef}}

**`-moz-force-broken-image-icon`** は拡張 CSS プロパティで、壊れた画像に `alt` 属性が付いていても、壊れた画像のアイコンを強制的に表示することができます。

## 構文

### 値

- {{cssxref("&lt;integer&gt;")}}
  - : プロパティの値に `1` を指定した場合、その画像が {{HTMLElement("img", "`alt`", "#attr-alt")}} 属性を持っていたとしても、壊れた画像アイコンが表示されます。`0` を指定した場合、通常通り `alt` 属性のみが表示されます。

> **Note:** プロパティの値に `1` を指定した場合もなお、 `alt` 属性は壊れた画像アイコンの隣に同時に表示されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<img src='/broken/image/link.png' alt='Broken image link'>
```

### CSS

```css
img {
  -moz-force-broken-image-icon: 1;
  height: 100px;
  width: 100px;
}
```

### 結果

{{ EmbedLiveSample('Examples','125','125','/files/4619/broken%20image%20link.png') }}

> **Note:** `-moz-force-broken-image-icon` の値に `1` を指定した場合、その画像に width と height を明示的に指定しない限り、壊れた画像アイコンは表示されず、 `alt` 属性も非表示になります。

## メモ

- このプロパティは Geckoベースのブラウザでのみ使用できます。
- このプロパティの使用は非推奨です。代わりに適切な `alt` 属性を使用してください。

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ Bug(58646) }}

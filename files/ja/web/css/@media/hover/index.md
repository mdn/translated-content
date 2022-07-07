---
title: hover
slug: Web/CSS/@media/hover
tags:
  - '@media'
  - CSS
  - メディアクエリー
  - リファレンス
  - メディア特性
browser-compat: css.at-rules.media.hover
translation_of: Web/CSS/@media/hover
---
{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`hover`** [メディア特性](/ja/docs/Web/CSS/@media#メディア特性)は、*第一の*入力機構が要素の上でホバー (停止) することができるかどうかを検査するために使用することができます。

## 構文

`hover` 特性は、以下の一覧のうち一つのキーワード値で指定します。

- `none`
  - : 第一の入力機構が全くホバーができないか、差支えなくホバーをすることができない (例えば、多くのモバイル機器は便利ではないものの、ロングタップのユーザー操作で擬似的に停止を実現する)、または第一の入力機構がない。
- `hover`
  - : 第一の入力機構が、要素の上で差支えなくホバーすることができる。

## 例

### HTML

```html
<a href="#">Try hovering over me!</a>
```

### CSS

```css
@media (hover: hover) {
  a:hover {
    background: yellow;
  }
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/ja/docs/Web/CSS/@media)

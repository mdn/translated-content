---
title: any-hover
slug: Web/CSS/@media/any-hover
tags:
  - '@media'
  - CSS
  - メディアクエリー
  - メディア特性
  - リファレンス
browser-compat: css.at-rules.media.any-hover
translation_of: Web/CSS/@media/any-hover
---
{{CSSRef}}

**`any-hover`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、要素の上で停止することができる入力メカニズムが*何らか*利用できるかどうかを検査するために使用することができます。

## 構文

`any-hover` 特性は、以下の一覧のうち一つのキーワード値で指定します。

- `none`
  - : 差支えなく停止することができる入力メカニズムがないか、またはポインティング入力メカニズムがない。
- `hover`
  - : 一つ以上の入力メカニズムが、要素の上で差支えなく停止することができる。

## 例

### 入力手段が停止をすることができるかどうかを検査

#### HTML

```html
<a href="#">Try hovering over me!</a>
```

#### CSS

```css
@media (any-hover: hover) {
  a:hover {
    background: yellow;
  }
}
```

#### 結果

{{EmbedLiveSample("Testing_whether_input_methods_can_hover")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`hover` メディア特性](/ja/docs/Web/CSS/@media/hover)

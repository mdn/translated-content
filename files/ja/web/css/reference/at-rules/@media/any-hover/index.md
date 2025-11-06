---
title: any-hover
slug: Web/CSS/Reference/At-rules/@media/any-hover
original_slug: Web/CSS/@media/any-hover
l10n:
  sourceCommit: 0fd3414a0e35e6e30a2cd34977de607a23000bef
---

**`any-hover`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、要素の上で停止することができる入力メカニズムが*何らか*利用できるかどうかを検査するために使用することができます。

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

- [`hover` メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media/hover)

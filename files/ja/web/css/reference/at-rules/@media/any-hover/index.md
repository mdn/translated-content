---
title: CSS `any-hover` メディア特性
short-title: any-hover
slug: Web/CSS/Reference/At-rules/@media/any-hover
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

**`any-hover`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、要素にかざす（ホバー）操作ができる入力機構が何らか利用できるかどうかを検査するために使用することができます。

## 構文

`any-hover` 特性は、以下の一覧のうち一つのキーワード値で指定します。

- `none`
  - : 利用できる入力機構のいずれも、かざす操作を簡単に行うことができないか、あるいはポインティング入力機構が存在しない。
- `hover`
  - : 要素の上にかざす操作が、利用できる入力機構の 1 つまたは複数で簡単に操作できます。

## 例

### 入力手段が停止をすることができるかどうかを検査

#### HTML

```html
<a href="#">この上でかざしてみてください！</a>
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

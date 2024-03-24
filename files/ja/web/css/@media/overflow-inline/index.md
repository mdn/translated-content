---
title: overflow-inline
slug: Web/CSS/@media/overflow-inline
---

{{CSSRef}}

**`overflow-inline`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、初期[包含ブロック](/ja/docs/Web/CSS/Containing_block)をインライン軸方向にあふれたコンテンツを端末がどのように扱うかを調べるために使用します。

## 構文

`overflow-inline` 特性は以下の一覧のうち一つのキーワード値で指定します。

- `none`
  - : インライン軸方向にあふれたコンテンツは表示されません。
- `scroll`
  - : インライン軸方向にあふれたコンテンツは、スクロールすることで見ることができます。

## 例

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis
  eleifend, fringilla velit ac, aliquam tellus. Vestibulum ante ipsum primis in
  faucibus orci luctus et ultrices posuere cubilia Curae; Nunc velit erat,
  tempus id rutrum sed, dapibus ut urna. Integer vehicula nibh a justo imperdiet
  rutrum. Nam faucibus pretium orci imperdiet sollicitudin. Nunc id facilisis
  dui. Proin elementum et massa et feugiat. Integer rutrum ullamcorper eleifend.
  Proin sit amet tincidunt risus. Sed nec augue congue eros accumsan tincidunt
  sed eget ex.
</p>
```

### CSS

```css
p {
  white-space: nowrap;
}

@media (overflow-inline: scroll) {
  p {
    color: red;
  }
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

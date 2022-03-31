---
title: overflow-block
slug: Web/CSS/@media/overflow-block
tags:
  - '@media'
  - CSS
  - メディアクエリー
  - リファレンス
  - メディア特性
browser-compat: css.at-rules.media.overflow-block
translation_of: Web/CSS/@media/overflow-block
---
{{CSSRef}}

**`overflow-block`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)は、初期[包含ブロック](/ja/docs/Web/CSS/Containing_block)をブロック軸方向にあふれたコンテンツを機器がどのように扱うかを調べるために使用します。

## 構文

`overflow-block` 特性は以下の一覧のうち一つのキーワード値で指定します。

- `none`
  - : ブロック軸方向にあふれたコンテンツは表示されません。
- `scroll`
  - : ブロック軸方向にあふれたコンテンツは、スクロールすることで見ることができます。
- `optional-paged`
  - : ブロック軸方向にあふれたコンテンツは、スクロールすることで見ることができますが、ページ区切りを手動で ({{cssxref("break-inside")}} などによって) 入れることができ、その後のコンテンツを次のページに表示させることができます。
- `paged`
  - : コンテンツは不連続のページに分割されます。１ページをブロック方向にあふれるコンテンツは、次のページに表示されます。

## 例

### HTML

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis eleifend, fringilla velit ac, aliquam tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc velit erat, tempus id rutrum sed, dapibus ut urna. Integer vehicula nibh a justo imperdiet rutrum. Nam faucibus pretium orci imperdiet sollicitudin. Nunc id facilisis dui. Proin elementum et massa et feugiat. Integer rutrum ullamcorper eleifend. Proin sit amet tincidunt risus. Sed nec augue congue eros accumsan tincidunt sed eget ex.</p>
```

### CSS

```css
@media (overflow-block: scroll) {
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

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/ja/docs/Web/CSS/@media)

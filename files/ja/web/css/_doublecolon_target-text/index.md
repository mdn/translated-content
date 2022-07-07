---
title: '::target-text'
slug: Web/CSS/::target-text
tags:
  - '::target-text'
  - CSS
  - 擬似要素
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.target-text
translation_of: Web/CSS/::target-text
---
{{CSSRef}}{{SeeCompatTable}}

**`::target-text`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、ブラウザーが scroll-to-text フラグメントに対応している場合にスクロール先のテキストを表します。これによって、節のテキストを強調表示させることができます。

```css
::target-text {
  background-color: pink;
}
```

## 構文

{{csssyntax}}

## 例

### scroll-to-text を強調表示

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

この CSS を確認するには、 [scroll-to-text demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) へのリンクを辿ってください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Text fragments](https://web.dev/text-fragments/)

---
title: ::target-text
slug: Web/CSS/Reference/Selectors/::target-text
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

**`::target-text`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、ブラウザーが [テキストフラグメント](/ja/docs/Web/URI/Reference/Fragment/Text_fragments)に対応している場合に、スクロールされたテキストを表します。これにより、作成者はそのテキスト節をどのように強調表示するかを選ぶことができます。

`::target-text` 擬似要素は、すべての表示強調擬似要素に共通する特別な継承モデルに従います。この継承の仕組みの詳細については、[表示強調擬似要素の継承](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance)の節を参照してください。

## 構文

```css
::target-text {
  /* ... */
}
```

## 例

### テキストフラグメントを強調表示

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

- [テキストフラグメント](/ja/docs/Web/URI/Reference/Fragment/Text_fragments)
- {{cssxref(":target")}} （対象要素の強調表示に使用）

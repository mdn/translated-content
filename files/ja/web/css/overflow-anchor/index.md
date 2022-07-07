---
title: overflow-anchor
slug: Web/CSS/overflow-anchor
tags:
  - CSS
  - CSS プロパティ
  - CSS スクロールアンカリング
  - Reference
  - recipe:css-property
browser-compat: css.properties.overflow-anchor
translation_of: Web/CSS/overflow-anchor
---
{{CSSRef}}

**`overflow-anchor`** は [CSS](/ja/docs/Web/CSS) のプロパティで、コンテンツの移動を最小化するためにスクロール位置を調整する、ブラウザーのスクロールアンカリングの動作をオプトアウトする方法を提供します。

スクロールアンカリングの動作は、対応しているすべてのブラウザーで既定で有効になっています。したがって、このプロパティを変更するのは通常、文書または文書の一部でスクロールアンカリングによって操作上の問題が発生し、この動作をオフにする必要がある場合のみです。

## 構文

```css
/* キーワード値 */
overflow-anchor: auto;
overflow-anchor: none;

/* グローバル値 */
overflow-anchor: inherit;
overflow-anchor: initial;
overflow-anchor: revert;
overflow-anchor: unset;
```

### 値

- `auto`
  - : その要素は、スクロール位置を調整するときにアンカー候補になります。
- `none`
  - : その要素はアンカー候補として選択されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### スクロールアンカリングを抑止

文書内でスクロールアンカリングを抑止する場合は、 `overflow-anchor` プロパティを使用してください。

```css
* {
  overflow-anchor: none;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [スクロールアンカリングの紹介](/ja/docs/Web/CSS/overflow-anchor/Guide_to_scroll_anchoring)

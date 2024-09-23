---
title: scrollbar-gutter
slug: Web/CSS/scrollbar-gutter
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

**scrollbar-gutter** は [CSS](/ja/docs/Web/CSS) プロパティで、スクロールバーのための空間を確保することを可能にし、コンテンツが大きくなるにつれて不要なレイアウト変更を防ぐと同時に、スクロールが不要な場合に表示されることを避けることができます。

要素のスクロールバーの「ガター」は、境界の辺の内側とパディング辺の外側の間の空間で、ブラウザーはここにスクロールバーを表示することがあります。スクロールバーがない場合、ガターはパディングの延長として描画されます。

ブラウザーは、従来のスクロールバーとオーバーレイスクロールバーのどちらを使うかを、次のように決定します。

- 従来のスクロールバーは常にガターに配置され、存在すると空間を消費します。
- オーバーレイスクロールバーは、ガターではなくコンテンツの上に配置され、通常は部分的に透明です。

## 構文

```css
/* 初期値 */
scrollbar-gutter: auto;

/* "stable" キーワードと、オプションの修飾子 */
scrollbar-gutter: stable;
scrollbar-gutter: stable both-edges;

/* グローバル値 */
scrollbar-gutter: inherit;
scrollbar-gutter: initial;
scrollbar-gutter: revert;
scrollbar-gutter: revert-layer;
scrollbar-gutter: unset;
```

### 値

- `auto`
  - : 初期値。従来のスクロールバーは `overflow` が `scroll` のとき、または `overflow` が `auto` でボックスがはみ出したときにガターができます。オーバーレイスクロールバーは空間を使いません。
- `stable`
  - : 従来のスクロールバーを使用している場合、ボックスが溢れていなくても、`overflow` が `auto`、`scroll`、`hidden` のいずれかの場合はガターができます。 オーバーレイスクロールバーを使用している場合は、ガターは存在しません。
- `both-edges`
  - : ボックスのインライン方向の先頭/末尾の端のどちらかにガターを表示した場合、反対側の端にもガターを表示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

The examples below show how the different values for the `scrollbar-gutter` property would affect a scrollable `div` element (`.container`) with one or more paragraphs contained within.

> [!NOTE]
> In the images for the examples, the user's system settings are set to classic scrollbars (always shown).

### 例 1

Prevent unneeded layout changes as the content growing or shrinking causes the scrollbar to appear/disappear, a space is reserved for it.

```css
.container {
  scrollbar-gutter: stable;
}
```

![A containing div element with a paragraph of text inside and a space to the right where the scrollbar is](stable-no-scroll.png)

### 例 2

Add symmetric spacing to both sides of the box so the content is centered:

```css
.container {
  scrollbar-gutter: stable both-edges;
}
```

![A containing div element with a paragraph of text inside, a space to the right where the scrollbar is and a matching empty space to the left](stable-both-edges.png)

### 例 3

Align the contents of a non-scrolling element and a scrolling one adjacent to it:
This example shows two divs side by side. The one on the left has no scroll, but the one on the right does. Both have `scrollbar-gutter` applied, which also reserves space for the div on the left which doesn't have scrollable content. This is a good technique to use to keep the width of content consistent.

```css
.container1 {
  overflow: hidden;
  scrollbar-gutter: stable;
}

.container2 {
  scrollbar-gutter: stable;
}
```

![Two adjacent divs containing text, both with space for a scrollbar](side-by-side.png)

### スクロールバーのオーバーレイ

For reference, this image shows the same div as above, but with the user's system settings set to overlay scrollbars. Note here the scrollbar will only show when the user is scrolling and on top of the content, so no space is reserved for it and the `scrollbar-gutter` property has no effect.

![One div with text, no visible scrollbar](for-ref-no-scroll.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS オーバーフロー](/ja/docs/Web/CSS/CSS_overflow)モジュール
- [CSS スクロールバースタイル設定](/ja/docs/Web/CSS/CSS_scrollbars_styling)モジュール
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}

---
title: テキストに影を追加するには
short-title: テキストに影を追加
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow
l10n:
  sourceCommit: a862f7714755b140b150bd2c724589f6f95a19a2
---

このガイドでは、ページ上の任意のテキストに影を追加する方法を紹介します。

## テキストに影を追加

[ボックスに影を追加するガイド](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow)では、ページ上の任意の要素に影を追加する方法を紹介しています。しかし、そのテクニックは、要素の周囲のボックスにのみ影を追加するものです。ボックス内のテキストにドロップシャドウを追加するには、異なる CSS プロパティ {{cssxref("text-shadow")}} が必要です。

`text-shadow` プロパティはいくつかの値を取ります。

- X 軸上のオフセット
- Y 軸上のオフセット
- ぼかし半径
- 色

下記の例では、X 軸のオフセットを `2px`、Y 軸のオフセットを `4px`、ぼかし半径を `4px`、色を半透明の青に設定しています。さまざまな値を使って、影の効果がどう変わるか試してみてください。

```html live-sample___text-shadow
<div class="wrapper">
  <h1>テキストに影を追加</h1>
</div>
```

```css live-sample___text-shadow
h1 {
  color: royalblue;
  text-shadow: 2px 4px 4px rgb(46 91 173 / 0.6);
}
```

{{EmbedLiveSample("Text_shadow")}}

> [!NOTE]
> テキストに影を付けると、意図せずテキストが読みにくくなることがあります。選んだ色でもテキストの読みやすさを保てるよう、十分な[色コントラスト](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)を確保してください。

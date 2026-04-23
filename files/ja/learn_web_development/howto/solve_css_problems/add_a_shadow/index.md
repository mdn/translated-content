---
title: 要素に影を追加するには
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

このガイドでは、ページ上の任意のボックスに影を追加する方法を紹介します。

## ボックスに影を追加

影は、ページ上で要素を目立たせるために役立つ、一般的なデザイン機能です。CSS では、要素のボックスの影は {{cssxref("box-shadow")}} プロパティを使用して作成します（テキスト自体に影を追加したい場合は {{cssxref("text-shadow")}} が必要です）。

`box-shadow` プロパティは、いくつかの値を取ります。

- X 軸上のオフセット
- Y 軸上のオフセット
- ぼかし半径
- 拡散半径
- 色
- `inset` キーワード

下記例では、X 軸と Y 軸を 5px、ぼかしを 10px、広がりを 2px に設定しています。色として半透明の黒を使用しています。異なる値でシャドウがどのように変わるか、試してみてください。

```html live-sample___box-shadow-button
<div class="wrapper">
  <button class="shadow">box-shadow</button>
</div>
```

```css hidden live-sample___box-shadow-button
.wrapper {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  padding: 5px 10px;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 140%;
  background-color: #db1f48;
  color: #fff;
}
```

```css live-sample___box-shadow-button
.shadow {
  box-shadow: 5px 5px 10px 2px rgb(0 0 0 / 0.8);
}
```

{{EmbedLiveSample("box-shadow-button")}}

> [!NOTE]
> この例では `inset` を使用していません。これは、シャドウが既定のドロップシャドウであり、シャドウの上にボックスがあることを意味しています。インセットシャドウは、コンテンツがページに押し込まれているかのように、ボックスの内側に現れます。

## 関連情報

- [ボックスの影作成ツール](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)
- [CSS の学習: 高度なスタイル設定の効果](/ja/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)

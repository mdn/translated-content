---
title: アイテムを中央揃えするには
slug: Learn_web_development/Howto/Solve_CSS_problems/Center_an_item
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

このガイドでは、アイテムを他の要素の中で、水平方向と垂直方向の両方にセンタリングする方法について説明します。

## ボックスの中央揃え

CSS を使用して、あるボックスを別のボックスの中に配置するには、親コンテナーで [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)プロパティを使用する必要があります。これらの配置プロパティは、ブロックやインラインレイアウトにおいてはブラウザーがまだ対応していないので、配置を使用する機能を有効にするためには、親コンテナーを[フレックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)または[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)にする必要があります。

下記の例では、親コンテナーに `display: flex` を指定し、水平方向に配置するために {{cssxref("justify-content")}} を center に、垂直方向に配置するために {{cssxref("align-items")}} を center に設定しています。

```html live-sample___center
<div class="wrapper">
  <div class="box">これを中央揃えします</div>
</div>
```

```css live-sample___center
.wrapper {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  background-color: rgb(69 164 181);
  border-radius: 5px;
  padding: 10px;
  color: #fff;
}
```

{{EmbedLiveSample("center", "", "220px")}}

> [!NOTE]
> このテクニックを使用して、1 つ以上の要素を別の要素の中に配置することができます。上の例では、{{cssxref("justify-content")}} と {{cssxref("align-items")}} の値を任意の有効な値に変更してみてください。

## 関連情報

- [フレックスボックスでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [グリッドレイアウトでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)

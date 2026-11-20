---
title: 最初の段落を強調表示するには
short-title: 最初の段落を強調表示
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

このガイドでは、コンテナーの中にある最初の段落を強調表示する方法について説明します。

## 最初の段落のスタイル付け

最初の段落を大きく、太くしたいと思ったとします。最初の段落にクラスを追加して選択する方法もありますが、擬似クラスセレクターを使用した方がより柔軟です。これは、文書内の位置に基づいて段落を対象とすることができ、ソースの順序が変更された場合にクラスを手動で移動する必要がないということです。

## 擬似クラスの使用

{{cssxref("pseudo-classes", "擬似クラス")}}は、クラスを適用した時と同様に動作します。しかし、CSS はクラスセレクターを使用するのではなく、文書の構造に基づいて選択します。さまざまな擬似クラスがあり、さまざまなものを選択することができます。今回の用途では、{{cssxref(":first-child")}} を使用することにします。これは、親の最初の子である要素を選択します。

```html live-sample___highlight_first_para
<div class="wrapper">
  <p>
    野菜は体に良いものです。だから、コールラビ、青ネギ、大根、アマランサス、タアサイ、トマティーヨ、メロン、小豆、ニンニクをもっと食べましょう。
  </p>

  <p>
    フダンソウ、ビートの葉、コーン、サトイモの葉、エンダイブ、ウリ。パセリ、エシャロット、ズッキーニ、タアサイ、エンドウの芽、ソラマメ、コラードグリーン、タンポポ、オクラ、ワカメ、トマト。
    タンポポ、キュウリ、アースナッツ、ピーナッツ、サトイモの葉、ズッキーニ。
  </p>
</div>
```

```css live-sample___highlight_first_para
.wrapper p:first-child {
  font-weight: bold;
  font-size: 130%;
}
```

{{EmbedLiveSample("highlight_first_para")}}

上のライブ例で {{cssxref(":first-child")}} を {{cssxref(":last-child")}} に変更してみると、最後の段落が選択されます。

文書内の何かを対象とする必要があるときは、利用できる{{cssxref("pseudo-classes", "擬似クラス")}}のいずれかで実現できるかどうか調べてみるとよいでしょう。

## 関連情報

- {{cssxref("pseudo-classes", "擬似クラス", "", 1)}}のリファレンスページ
- [CSS の学習: 擬似クラスと擬似要素](/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)

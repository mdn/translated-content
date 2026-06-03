---
title: "確認テスト: オーバーフロー"
short-title: "テスト: オーバーフロー"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}

この確認テストの目的は、 [CSS のオーバーフローとその管理方法](/ja/docs/Learn_web_development/Core/Styling_basics/Overflow)方法を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## オーバーフロー 1

この課題では、高さが固定されているため、コンテンツがボックスからはみ出しています。

この課題を完成させるには、次のようにしてください。

1. CSS を更新し、ボックスの高さを維持しつつ、オーバーフローが発生するほどテキストが大量にある場合にのみスクロールバーが現れるようにしてください。
2. HTML から一部のテキストを削除し、テキストの量が少ない場合にスクロールバーが現れないことを確認して、解決策を検証してください。

この課題の出発点は次のようなものです。

{{EmbedLiveSample("overflow1-start", "", "450px")}}

基盤となる出発点のコードは次の通りです。

```html live-sample___overflow1-start live-sample___overflow1-finish
<div class="box">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___overflow1-start live-sample___overflow1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.box {
  border: 5px solid black;
  padding: 1em;
  height: 200px;
  width: 300px;
}
```

スタイル設定を更新すると、このようになります。

{{EmbedLiveSample("overflow1-finish", "", "300px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

コンテンツがあふれたときにのみボックスにスクロールバーが追加されるように、`overflow: auto` を追加してください。

```css live-sample___overflow1-finish
.box {
  overflow: auto;
}
```

</details>

## オーバーフロー 2

この課題では、ボックスの中に、ボックスの寸法よりも大きい画像があり、それが目に見えるほどはみ出しています。ボックスの外側の画像は隠れるように変更してください。

この課題の出発点は次のようなものです。

{{EmbedLiveSample("overflow2-start", "", "260px")}}

基盤となる出発点のコードは次の通りです。

```html live-sample___overflow2-start live-sample___overflow2-finish
<div class="box">
  <img
    alt="flowers"
    src="https://mdn.github.io/shared-assets/images/examples/flowers.jpg" />
</div>
```

```css live-sample___overflow2-start live-sample___overflow2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 5px solid black;
  height: 200px;
  width: 300px;
}
```

スタイル設定を更新すると、このようになります。

{{EmbedLiveSample("overflow2-finish", "", "260px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

`overflow: hidden` を `.box` セレクターに追加する必要があります。

```css live-sample___overflow2-finish
.box {
  overflow: hidden;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}

---
title: "スキルテスト: オーバーフロー"
slug: Learn_web_development/Core/Styling_basics/Overflow_Tasks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

このスキルテストの目的は、 [CSS のオーバーフローとその管理方法](/ja/docs/Learn_web_development/Core/Styling_basics/Overflow)方法を理解しているかどうかを評価することです。

> [!NOTE]
> 以下のコードブロックで **"Play"** をクリックすると、 MDN Playground で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題 1

この課題では、高さが固定されているため、コンテンツがボックスからはみ出しています。高さは維持したまま、オーバーフローを発生させるのに十分なテキストがある場合にのみ、ボックスにスクロールバーを表示させるようにしてください。 HTML からテキストの一部を除去し、テキストが少量しかなくオーバーフローがなくなった場合、スクロールバーが現れないことをテストしてください。

![境界線と垂直スクロールバーのある小さなボックス。](mdn-overflow1.png)

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___overflow-scroll
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

```css live-sample___overflow-scroll
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

{{EmbedLiveSample("overflow-scroll", "", "450px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

コンテンツがあふれたときにのみボックスにスクロールバーが追加されるように、`overflow: auto` を追加してください。

```css
.box {
  overflow: auto;
}
```

</details>

## 課題 2

この課題では、ボックスの中に、ボックスの寸法よりも大きい画像があり、それが目に見えるほどはみ出しています。ボックスの外側の画像は隠れるように変更してください。

最終的には下記画像のようになるはずです。

![画像は枠いっぱいに表示されますが、枠からはみ出てはいません。](mdn-overflow2.png)

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___overflow-hidden
<div class="box">
  <img
    alt="flowers"
    src="https://mdn.github.io/shared-assets/images/examples/flowers.jpg" />
</div>
```

```css live-sample___overflow-hidden
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 5px solid black;
  height: 200px;
  width: 300px;
}
```

{{EmbedLiveSample("overflow-hidden", "", "300px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

`overflow: hidden` を `.box` セレクターに追加する必要があります。

```css
.box {
  overflow: hidden;
}
```

</details>

## 関連情報

- [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)

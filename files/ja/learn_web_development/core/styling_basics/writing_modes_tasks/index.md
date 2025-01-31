---
title: "スキルテスト: 書字方向と論理的プロパティ"
slug: Learn_web_development/Core/Styling_basics/Writing_Modes_Tasks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

このスキルテストの目的は、 [CSS の書字方向と論理的プロパティを使用した様々なテキストの方向を扱う](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)方法を理解しているかどうかを評価することです。

> [!NOTE]
> 以下のコードブロックで **"Play"** をクリックすると、 MDN Playground で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題 1

この課題では、ボックスが横書きで表示されています。 CSS の行を追加して、右から左へ流れる縦書きを使用するように変更することができますか？

最終的には下記画像のようになるはずです。

![縦書きのボックス](mdn-writing-modes1.png)

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___writing-mode
<div class="box">この方向に回転させてください。</div>
```

```css hidden live-sample___writing-mode
body {
  font: 1.2em / 1.5 sans-serif;
}
```

```css live-sample___writing-mode
.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
}
```

{{EmbedLiveSample("writing-mode", "", "250px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

縦書きで右から左の言語では、 `writing-mode` プロパティに `vertical-rl` の値を使用しましょう。

```css
.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
  writing-mode: vertical-rl;
}
```

</details>

## 課題 2

この課題では、ボックスを縦にしたときの縦横比を維持するために、 `width` と `height` を置き換える論理プロパティを使用してください。

最終的には下記画像のようになるはずです。

![一方は横書き、もう一方は縦書きの 2 つのボックス](mdn-writing-modes2.png)

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___logical-width-height
<div class="box">横書きです。</div>
<div class="box vertical">縦書きです。</div>
```

```css hidden live-sample___logical-width-height
body {
  font: 1.2em / 1.5 sans-serif;
}
```

```css live-sample___logical-width-height
.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
  width: 200px;
  height: 100px;
}
```

{{EmbedLiveSample("logical-width-height", "", "500px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

`writing-mode: vertical-rl` を `.vertical` ボックスに設定するだけでなく、 `inline-size` および `block-size` プロパティを適用して `width` と `height` を置き換える必要があります。

```css
.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
  inline-size: 200px;
  block-size: 100px;
}
.vertical {
  writing-mode: vertical-rl;
}
```

</details>

## 課題 3

この課題では、マージン、境界線、パディングプロパティの論理的なバージョンを使用して、ボックスの辺が上、左、下、右に続くのではなく、テキストから見た相対的な方向になるようにしてください。

最終的には下記画像のようになるはずです。

![様々なマージン、境界、パディングを持つ、一方は横書き、一方は縦書きの 2 つのボックス](mdn-writing-modes3.png)

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___logical-mbp
<div class="box">横書きです。</div>
<div class="box vertical">縦書きです。</div>
```

```css hidden live-sample___logical-mbp
body {
  font: 1.2em / 1.5 sans-serif;
}
```

```css hidden live-sample___logical-mbp
.vertical {
  writing-mode: vertical-rl;
}
```

```css live-sample___logical-mbp
.box {
  width: 150px;
  height: 150px;
  border-top: 5px solid rebeccapurple;
  border-right: 5px solid grey;
  border-bottom: 5px dotted red;
  border-left: 5px dotted blue;
  padding-top: 40px;
  margin-bottom: 30px;
}
```

{{EmbedLiveSample("logical-mbp", "", "500px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

これを解決するには、マージン、境界線、パディングの物理的プロパティの論理的なフロー相対マッピングを理解する必要があります。

```css
.box {
  width: 150px;
  height: 150px;
  border-block-start: 5px solid rebeccapurple;
  border-inline-end: 5px solid grey;
  border-block-end: 5px dotted red;
  border-inline-start: 5px dotted blue;
  padding-block-start: 40px;
  margin-block-end: 30px;
}
```

</details>

## 関連情報

- [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)

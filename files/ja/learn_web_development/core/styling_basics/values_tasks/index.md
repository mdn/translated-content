---
title: "スキルテスト: 値と単位"
slug: Learn_web_development/Core/Styling_basics/Values_tasks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

このスキルテストの目的は、 [CSS プロパティで使われる様々な種類の値と単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)を理解しているかどうかを評価することです。

> [!NOTE]
> 以下のコードブロックで **"Play"** をクリックすると、 MDN Playground で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題 1

この課題では、最初のリストアイテムに16進カラーコードを使用して背景色が指定されています。課題は、異なる形式で同じ色を使用して CSS を完成させ、さらに最後のリストアイテムで背景を半透明にすることです。

- 2 つ目のリストアイテムには RGB 色を使用しましょう。
- 3 つ目には HSL 色を使用しましょう。
- 4 つ目には RGB 色を使用しますが、アルファチャンネルを `0.6` に設定しましょう。

[このリンク](https://convertingcolors.com/hex-color-86DEFA.html)で 16 進数の色の変換を探すことができます。その値を CSS で使用する方法を見つける必要があります。最終的には下記画像のようになるはずです。

![4 つのリストアイテム。最初の 3 つは同じ背景色で、最後の 1 つは明るい背景色です。](mdn-value-color.png)

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___color
<ul>
  <li class="hex">hex color</li>
  <li class="rgb">RGB color</li>
  <li class="hsl">HSL color</li>
  <li class="transparency">Alpha value 0.6</li>
</ul>
```

```css hidden live-sample___color
body {
  font: 1.2em / 1.5 sans-serif;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1em;
  padding: 0.5em;
}
```

```css live-sample___color
.hex {
  background-color: #86defa;
}

/* ここにスタイルを追加してください */
```

{{EmbedLiveSample("color", "", "300px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

[色変換ツール](https://convertingcolors.com/hex-color-86DEFA.html)を使用することで、異なる[色関数](/ja/docs/Web/CSS/color_value#構文)を使用して同じ色を異なる方法で定義できるようになります。

```css
.hex {
  background-color: #86defa;
}

.rgb {
  background-color: rgb(134 222 250);
}

.hsl {
  background-color: hsl(194 92% 75%);
}

.transparency {
  background-color: rgb(134 222 250 / 60%);
}
```

</details>

## 課題 2

この課題では、下記記述されているように、様々な項目のテキストのサイズを設定してください。

- `<h1>` 要素は 50 ピクセルにしてください。
- `<h2>` 要素は 2em にしてください。
- `<p>` 要素は 16 ピクセルにしてください。
- `<p>` 要素のうち、 `<h1>` の直後のものは 120% にしてください。

最終的には下記画像のようになるはずです。

![大きさの異なるいくつかのテキスト。](mdn-value-length.png)

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___length
<h1>Level 1 heading</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic.
</p>
<h2>Level 2 heading</h2>
<p>
  Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
  tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
  Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css hidden live-sample___length
body {
  font: 1.2em / 1.5 sans-serif;
}
```

```css live-sample___length
h1 {
}

h2 {
}

p {
}

h1 + p {
}
```

{{EmbedLiveSample("length", "", "420px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

次の長さの値を使用することができます。

```css
h1 {
  font-size: 50px;
}

h2 {
  font-size: 2em;
}

p {
  font-size: 16px;
}

h1 + p {
  font-size: 120%;
}
```

</details>

## 課題 3

この課題では、背景画像が水平方向の中央に配置され、ボックスの上部から 20％ になるように移動させます。

最終的には下記画像のようになるはずです。

![この課題では、背景画像が水平方向の中央に配置され、ボックスの上部から 20% になるように移動させます。](mdn-value-position.png)

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___position
<div class="box"></div>
```

```css hidden live-sample___position
.box {
  border: 5px solid #000;
  height: 350px;
}
```

```css live-sample___position
.box {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/purple-star.png);
  background-repeat: no-repeat;
}
```

{{EmbedLiveSample("position", "", "400px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

`background-position` に `center` キーワードとパーセント値を使用します。

```css
.box {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/purple-star.png);
  background-repeat: no-repeat;
  background-position: center 20%;
}
```

</details>

## 関連情報

- [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)

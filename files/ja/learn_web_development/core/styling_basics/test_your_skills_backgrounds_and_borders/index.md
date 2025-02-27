---
title: "スキルテスト: 背景と境界線"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills_backgrounds_and_borders
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、 [CSS のボックスの背景と境界線](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)を理解しているかどうかを評価することです。

> [!NOTE]
> 以下のコードブロックで **"Play"** をクリックすると、 MDN Playground で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題 1

この課題では、ページのヘッダーに背景、境界線、簡単なスタイル設定を追加します。

1. ボックスには 5px の黒い実線の境界線をつけ、角は 10px で丸めましょう。
2. 背景画像を追加し（URL `balloons.jpg` を使用してください）、ボックスに応じた大きさにしましょう。
3. `<h2>`の背景色を半透明の黒にし、テキストを白にしましょう。下記の画像を使用することができます。

   ```plain
   https://mdn.github.io/shared-assets/images/examples/balloons.jpg
   ```

最終的には下記画像のようになるはずです。

![画像は、半透明の黒地に写真の背景、丸まった境界線、白文字のボックスを表示させます。](backgrounds-task1.png)

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___backgrounds1
<div class="box">
  <h2>Backgrounds & Borders</h2>
</div>
```

```css hidden live-sample___backgrounds1
body {
  padding: 1em;
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}
.box {
  padding: 0.5em;
}
```

```css live-sample___backgrounds1
.box {
  /* ここにスタイルを追加 */
}

h2 {
  /* ここにスタイルを追加 */
}
```

{{EmbedLiveSample("backgrounds1", "", "200px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

`border`、`border-radius`、`background-image`、`background-size` を使用し、 RGB 色を使用して背景色を部分的に透明にする方法を理解しましょう。

```css
.box {
  border: 5px solid #000;
  border-radius: 10px;
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  background-size: cover;
}

h2 {
  background-color: rgb(0 0 0 / 50%);
  color: #fff;
}
```

</details>

## 課題 2

この課題では、装飾ボックスに背景画像や境界画像、他にもスタイル設定を追加してください。

1. ボックスには 5px の水色の境界線をつけ、左上の角を 20px、右下の角を 40px 丸めましょう。

2. この見出しは画像 `star.png` を背景画像として使用しており、左側には中央に配置された単一の星、右側には星のパターンが繰り返し配置されています。
   次の画像を使用することができます。

   ```plain
   https://mdn.github.io/shared-assets/images/examples/star.png
   ```

3 見出しのテキストが画像に重ならないように、また中央に配置されていることを確認してください。これを達成するために前回学んだテクニックを使用する必要があります。

最終的には下記画像のようになるはずです。

![画像は、左上と右下の角を丸めた青い境界線を持つボックスを表示させます。テキストの左側には単一の星、右側には 3 つの星。](backgrounds-task2.png)

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___backgrounds2
<div class="box">
  <h2>Backgrounds & Borders</h2>
</div>
```

```css hidden live-sample___backgrounds2
body {
  padding: 1em;
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}
.box {
  width: 300px;
  padding: 0.5em;
}
```

```css live-sample___backgrounds2
.box {
  /* ここにスタイルを追加 */
}

h2 {
  /* ここにスタイルを追加 */
}
```

{{EmbedLiveSample("backgrounds2", "", "220px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

見出しにパディングを追加して、星の画像と重ならないようにする必要があります。これは、先の[ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)のレッスンで学んだこととリンクしています。
テキストは、 `text-align` プロパティで配置する必要があります。

```css
.box {
  border: 5px solid lightblue;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 40px;
}

h2 {
  padding: 0 40px;
  text-align: center;
  background:
    url(https://mdn.github.io/shared-assets/images/examples/star.png) no-repeat
      left center,
    url(https://mdn.github.io/shared-assets/images/examples/star.png) repeat-y
      right center;
}
```

</details>

## 関連情報

- [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)

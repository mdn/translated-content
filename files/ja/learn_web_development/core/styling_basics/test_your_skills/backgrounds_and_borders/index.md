---
title: "確認テスト: 背景と境界線"
short-title: "テスト: 背景と境界線"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

この確認テストの目的は、 [CSS のボックスの背景と境界線](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## 背景と境界線 1

この課題では、ページのヘッダーに背景、境界線、簡単なスタイル設定を追加します。

課題を完成させるには、次のようにしてください。

1. ボックスには 5px の黒い実線の境界線をつけ、角は 10px で丸めましょう。
2. `<h2>`の背景色を半透明の黒にし、テキストを白にしましょう。
3. 背景画像を追加し、ボックスに応じた大きさにしましょう。次の画像を利用することができます。

   ```plain
   https://mdn.github.io/shared-assets/images/examples/balloons.jpg
   ```

この課題の出発点は次のようなものです。

{{EmbedLiveSample("backgrounds1-start", "", "160px")}}

基盤となる出発点のコードは次の通りです。

```html live-sample___backgrounds1-start live-sample___backgrounds1-finish
<div class="box">
  <h2>背景と境界線</h2>
</div>
```

```css live-sample___backgrounds1-start live-sample___backgrounds1-finish
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

.box {
  /* ここにスタイルを追加 */
}

h2 {
  /* ここにスタイルを追加 */
}
```

スタイル設定を更新すると、このようになります。

{{EmbedLiveSample("backgrounds1-finish", "", "160px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

`border`、`border-radius`、`background-image`、`background-size` を使用し、 RGB 色を使用して背景色を部分的に透明にする方法を理解しましょう。

```css live-sample___backgrounds1-finish
.box {
  border: 5px solid black;
  border-radius: 10px;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  background-size: cover;
}

h2 {
  background-color: rgb(0 0 0 / 50%);
  color: white;
}
```

</details>

## 背景と境界線 2

この課題では、装飾的なボックスに背景画像や境界画像、その他のスタイルを追加してください。

課題を完成させるには、次のようにしてください。

1. ボックスには 5px の水色の境界線をつけ、左上の角を 20px、右下の角を 40px 丸めましょう。
2. この見出しは画像 `star.png` を背景画像として使用しており、左側には中央に配置された単一の星、右側には星のパターンが繰り返し配置されています。
   次の画像を使用することができます。

   ```plain
   https://mdn.github.io/shared-assets/images/examples/star.png
   ```

3. 見出しのテキストが画像に重ならないように、また中央に配置されていることを確認してください。これを達成するために前回学んだテクニックを使用する必要があります。

この課題の出発点は次のようなものです。

{{EmbedLiveSample("backgrounds2-start", "", "200px")}}

基盤となる出発点のコードは次の通りです。

```html live-sample___backgrounds2-start live-sample___backgrounds2-finish
<div class="box">
  <h2>背景と境界線</h2>
</div>
```

```css live-sample___backgrounds2-start live-sample___backgrounds2-finish
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

.box {
  /* ここにスタイルを追加 */
}

h2 {
  /* ここにスタイルを追加 */
}
```

スタイル設定を更新すると、このようになります。

{{EmbedLiveSample("backgrounds2-finish", "", "220px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

見出しにパディングを追加して、星の画像と重ならないようにする必要があります。これは、先の[ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)のレッスンで学んだこととリンクしています。
テキストは、 `text-align` プロパティで配置する必要があります。

```css live-sample___backgrounds2-finish
.box {
  border: 5px solid lightblue;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 40px;
}

h2 {
  padding: 0 40px;
  text-align: center;
  background:
    url("https://mdn.github.io/shared-assets/images/examples/star.png")
      no-repeat left center,
    url("https://mdn.github.io/shared-assets/images/examples/star.png") repeat-y
      right center;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics")}}

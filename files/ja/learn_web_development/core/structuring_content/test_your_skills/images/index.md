---
title: "確認テスト: HTML 画像"
short-title: "試験: 画像"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Images
l10n:
  sourceCommit: 1cf3cb0fb22bf89c780fefe74c3db7f1b9e8ca09
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

この確認テストの目的は、あなたが[画像と HTML への埋め込み](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_images)を行う方法を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## 画像 1

このタスクでは、いくつかのブルーベリーの単純な画像をページに埋め込んでいただきます。必要なことは次の通りです。

この課題を完成させるには、次のようにしてください。

1. 画像へのパスを適切な属性に追加して、ページに埋め込みましょう。画像は `blueberries.jpg` という名前であり、`https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true` のパスで利用できます。
2. 画像を見ることができない人のために、適切な属性に代替テキストを追加して記述してください。
3. `<img>` 要素に適切な `width` 属性を `490` にし、適切な `height` 属性を設定し、正しい{{glossary("aspect ratio", "アスペクト比")}}で表示されるようにし、読み込み時に再描画が行われないようにしてください。画像の{{glossary("intrinsic size", "内在サイズ")}}は 615 × 419 ピクセルです。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample('images-1', "100%", 200) }}

この出発点となる基本的なコードは以下の通りです。

```html live-sample___images-1
<h1>Basic image embed</h1>

<img />

<p>You should see a picture of some blueberries above.</p>
```

<!-- Shared/setup CSS code -->

```css hidden live-sample___images-1 live-sample___images-2 live-sample___images-3 live-sample___images-1-finished live-sample___images-2-finished live-sample___images-3-finished
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}

img {
  border: 1px solid black;
}
```

更新されたコンテンツは次のようになります。

{{ EmbedLiveSample('images-1-finished', "100%", 460) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html-nolint live-sample___images-1-finished
<h1>Basic image embed</h1>

<img src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true"
     alt="blueberries" width="400" height="273" />

<p>You should see a picture of some blueberries above.</p>
```

正しい `height` 値を設定するために、計算式 400 × 419 / 615 を使用して算出しました。

</details>

## 画像 2

この課題では、すでに完全な形の画像が用意されていますが、画像にマウスを乗せたときに現れるツールチップを追加していただきたいと思います。ツールチップに適切な情報を入れましょう。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample('images-2', "100%", 600) }}

この出発点となる基本的なコードは以下の通りです。

```html live-sample___images-2
<h1>Basic image title</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/larch.jpg?raw=true"
  alt="Several tall evergreen trees called larches" />
```

この課題については、出発点と同一に見えるため、完了したコンテンツは提供していません。

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html-nolint live-sample___images-2-finished
<h1>Basic image title</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/larch.jpg?raw=true"
  alt="Several tall evergreen trees called larches"
  title="And now, Number 1, The Larch" />
```

</details>

## 画像 3

この課題では、すでに完全な形の画像とキャプションのテキストが用意されています。ここで必要なのは、画像とキャプションを関連付ける要素を追加することです。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample('images-3', "100%", 600) }}

この出発点となる基本的なコードは以下の通りです。

```html live-sample___images-3
<h1>Image and caption</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/firefox.png?raw=true"
  alt="An abstract flaming fox wrapping around a blue sphere"
  width="446"
  height="460" />
The 2019 Firefox logo
```

```css hidden live-sample___images-3 live-sample___images-3-finished
figcaption {
  font-style: italic;
}
```

更新されたコンテンツは次のようになります。

{{ EmbedLiveSample('images-3-finished', "100%", 640) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html live-sample___images-3-finished
<h1>Image and caption</h1>

<figure>
  <img
    src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/firefox.png?raw=true"
    alt="An abstract flaming fox wrapping around a blue sphere"
    width="446"
    height="460" />
  <figcaption>The 2019 Firefox logo</figcaption>
</figure>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

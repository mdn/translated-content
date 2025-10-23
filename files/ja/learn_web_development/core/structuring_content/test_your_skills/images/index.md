---
title: "スキルテスト: HTML 画像"
short-title: 画像
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Images
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

このスキルテストの目的は、あなたが[画像と HTML への埋め込み](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_images)を行う方法を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[スキルテスト](/ja/docs/Learn_web_development#スキルテスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## 課題 1

このタスクでは、いくつかのブルーベリーの単純な画像をページに埋め込んでいただきます。必要なことは次の通りです。

この課題を完成させるには、次のようにしてください。

1. 画像へのパスを適切な属性に追加して、ページに埋め込みましょう。画像は `blueberries.jpg` という名前で、カレントフォルダー内の `images` というフォルダーに入っています。
2. 画像を見ることができない人のために、適切な属性に代替テキストを追加して記述してください。
3. `<img>` 要素に適切な `width` と `height` を与え、正しい縦横比で表示されるようにし、ページ上に表示するための十分な空間を確保しましょう。画像の内在サイズは 615 × 419 ピクセルです。

```html live-sample___images-1
<h1>Basic image embed</h1>

<img />
```

<!-- Shared/setup CSS code -->

```css hidden live-sample___images-1 live-sample___images-2 live-sample___images-3
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
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

{{ EmbedLiveSample('images-1', "100%", 150) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html-nolint
<h1>Basic image embed</h1>

<img src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true"
     alt="A pile of small blue berries"
     width="400" />
```

</details>

## 課題 2

この課題では、すでに完全な形の画像が用意されていますが、画像にマウスを乗せたときに現れるツールチップを追加していただきたいと思います。ツールチップに適切な情報を入れましょう。

```html live-sample___images-2
<h1>Basic image title</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/larch.jpg?raw=true"
  alt="Several tall evergreen trees called larches" />
```

{{ EmbedLiveSample('images-2', "100%", 600) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html-nolint
<h1>Basic image title</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/larch.jpg?raw=true"
  alt="Several tall evergreen trees called larches"
  title="And now, Number 1, The Larch" />
```

</details>

## 課題 3

この課題では、すでに完全な形の画像とキャプションのテキストが用意されています。ここで必要なのは、画像とキャプションを関連付ける要素を追加することです。

```html live-sample___images-3
<h1>Image and caption</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/firefox.png?raw=true"
  alt="An abstract flaming fox wrapping around a blue sphere"
  width="446"
  height="460" />
The 2019 Firefox logo
```

```css hidden live-sample___images-3
figcaption {
  font-style: italic;
}
```

{{ EmbedLiveSample('images-3', "100%", 600) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html
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

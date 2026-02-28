---
title: "確認テスト: 音声と動画"
short-title: "試験: 音声と動画"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video
l10n:
  sourceCommit: 1cf3cb0fb22bf89c780fefe74c3db7f1b9e8ca09
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content")}}

この確認テストの目的は、あなたが [HTML での動画と音声コンテンツの埋め込み](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)を行う方法を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## 音声と動画 1

この課題では、単純な音声ファイルをページに埋め込んでいただきます。

この課題を完成させるには、次のようにしてください。

1. 音声ファイルのパスを適切な属性に追加して、ページに埋め込みましょう。音声は `audio.mp3` という名前であり、`https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3` のパスで利用できます。
2. ブラウザーにいくつかの既定のコントロールを表示させるための属性を追加しましょう。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample('audio-1', "100%", 150) }}

この出発点となる基本的なコードは以下の通りです。

```html live-sample___audio-1
<h1>Basic audio embed</h1>

<audio></audio>
```

<!-- Shared styles -->

```css hidden live-sample___video-1 live-sample___audio-1 live-sample___video-1-finished live-sample___audio-1-finished
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

audio,
video {
  border: 1px solid black;
}
```

更新されたコンテンツは次のようになります。

{{ EmbedLiveSample('audio-1-finished', "100%", 180) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html live-sample___audio-1-finished
<h1>Basic audio embed</h1>

<audio
  controls
  src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3"></audio>
```

</details>

## 音声と動画 2

この課題では、複数のソース、字幕、他にも機能を備えた、少し複雑な動画プレーヤーをマークアップしていただきます。必要なことは次の通りです。

この課題を完成させるには、次のようにしてください。

1. ブラウザーにいくつかの既定のコントロールを表示させるための属性を追加しましょう。
2. 動画ファイルへのパスを含む、複数のソースを追加しましょう。ファイルは `video.mp4` と `video.webm` という名前で、次のパスに収められています。
   1. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4`
   2. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.webm`
3. ブラウザーは、元の動画形式がどのような点であるかをあらかじめ知っておくことで、前もってダウンロードする動画形式を選択することができます。
4. `<video>` の幅と高さは、その内在サイズ（320 × 240 ピクセル）と同じにしましょう。
5. 動画は既定でミュート状態にしましょう。
6. 動画再生時に `media` フォルダー内の `https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/subtitles_en.vtt` というファイルに格納されたテキストトラックを表示するようにしましょう。入力する種類を字幕に、字幕言語を英語に明示的に設定する必要があります。
7. 読み手が既定のコントロールを使用する際に、字幕の言語を識別できるようにしましょう。

この課題の出発点は次のようなものです。

{{EmbedLiveSample('video-1', "100%", 300)}}

この出発点となる基本的なコードは以下の通りです。

```html live-sample___video-1
<h1>Video embed</h1>

<video></video>
```

更新されたコンテンツは次のようになります。

{{EmbedLiveSample('video-1-finished', "100%", 380)}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html live-sample___video-1-finished
<h1>Video embed</h1>

<video controls width="320" height="240" muted>
  <source
    src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4"
    type="video/mp4" />
  <source
    src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.webm"
    type="video/webm" />
  <track
    kind="subtitles"
    src="https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/subtitles_en.vtt"
    srclang="en"
    label="English" />
</video>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content")}}

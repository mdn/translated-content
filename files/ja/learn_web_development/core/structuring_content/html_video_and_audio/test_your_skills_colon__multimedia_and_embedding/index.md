---
title: "スキルテスト: マルチメディアと埋め込み"
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio/Test_your_skills:_Multimedia_and_embedding
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、あなたが [HTML での動画と音声コンテンツの埋め込み](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)を行う方法を理解しているかどうかを評価することです。

> [!NOTE]
> このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターで解決策を試すことができます。
>
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題 1

この課題では、単純な音声ファイルをページに埋め込んでいただきます。必要なことは次の通りです。

- 音声ファイルのパスを適切な属性に追加して、ページに埋め込みましょう。音声は `audio.mp3` という名前で、カレントフォルダー内の `media` というフォルダーの中に入っています。
- ブラウザーにいくつかの既定のコントロールを表示させるための属性を追加しましょう。
- `<audio>` に対応していないブラウザーのために、適切な代替テキストを追加しましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed1.html", '100%', 700)}}

> [!CALLOUT]
>
> 自分のエディターやオンラインエディターで作業する場合は、[この課題の開始時点のものをダウンロード](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed1-download.html)しましょう。

## 課題 2

この課題では、複数のソース、字幕、他にも機能を備えた、少し複雑な動画プレーヤーをマークアップしていただきます。必要なことは次の通りです。

- ブラウザーにいくつかの既定のコントロールを表示させるための属性を追加しましょう。
- `<video>` に対応していないブラウザーのために、適切な代替テキストを追加しましょう。
- 動画ファイルへのパスを含む、複数のソースを追加しましょう。ファイルは `video.mp4` と `video.webm` という名前で、現在のフォルダー内の `media` というフォルダーに収められています。
- ブラウザーは、元の動画形式がどのような点であるかをあらかじめ知っておくことで、前もってダウンロードする動画形式を選択することができます。
- `<video>` の幅と高さは、その内在サイズ（320 × 240 ピクセル）と同じにしましょう。
- 動画は既定でミュート状態にしましょう。
- 動画再生時に `media` フォルダー内の `subtitles_en.vtt` というファイルに格納されたテキストトラックを表示するようにしましょう。入力する種類を字幕に、字幕言語を英語に明示的に設定する必要があります。
- 読み手が既定のコントロールを使用する際に、字幕の言語を識別できるようにしましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed2.html", '100%', 700)}}

> [!CALLOUT]
>
> 自分のエディターやオンラインエディターで作業する場合は、[この課題の開始時点のものをダウンロード](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html)しましょう。

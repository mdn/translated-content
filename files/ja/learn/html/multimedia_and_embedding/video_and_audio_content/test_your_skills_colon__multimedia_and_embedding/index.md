---
title: "スキルテスト: マルチメディアと埋め込み"
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{learnsidebar}}

このスキルテストの目的は、あなたが [HTML への動画および音声コンテンツの埋め込み](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)を行う方法、および [object、iframe およびその他の埋め込み技術](/ja/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)の使い方を理解しているかどうかを評価することです。

> **メモ:** 以下の対話型エディターで解決に挑戦することができます。ただし、コードをダウンロードし、[CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインツールを使用して作業することが便利な場合もあります。
>
> 行き詰まったら、助けを求めましょう。このページの最下部の[評価またはさらなるヘルプ](#評価またはさらなるヘルプ)の節をご覧ください。

## 課題 1

この課題では、単純な音声ファイルをページに埋め込んでいただきます。必要なことは次の通りです。

- 音声ファイルのパスを適切な属性に追加して、ページに埋め込みましょう。音声は `audio.mp3` という名前で、カレントフォルダー内の `media` というフォルダーの中に入っています。
- ブラウザーにいくつかの既定のコントロールを表示させるための属性を追加しましょう。
- `<audio>` に対応していないブラウザーのために、適切な代替テキストを追加しましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed1.html", '100%', 700)}}

> **注目:**
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

> **注目:**
>
> 自分のエディターやオンラインエディターで作業する場合は、[この課題の開始時点のものをダウンロード](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html)しましょう。

## 課題 3

このタスクでは、次のことをやっていただきます。

- PDF をページに埋め込みましょう。PDF は `mypdf.pdf` という名前で、`media` フォルダーの中にあります。
- YouTube や Google Maps 等の共有サイトへ行き、動画などのメディアアイテムをページへ埋め込みましょう。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed3.html", '100%', 700)}}

> **注目:**
>
> 自分のエディターやオンラインエディターで作業する場合は、[この課題の開始時点のものをダウンロード](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed3-download.html)しましょう。

## 評価またはさらなるヘルプ

この例は、上記のインタラクティブエディターで練習することができます。

この作品を評価してほしい、行き詰っているので相談に乗ってほしいという方は次のようにしてください。

1. 作品をオンラインの共有可能なエディター、例えば [CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) に置いてください。コードは自分で書いても、上の節でリンクされている開始時点のファイルを使用しても構いません。
2. [MDN Discourse forum 学習カテゴリー](https://discourse.mozilla.org/c/mdn/learn/250)に評価や助けを依頼する記事を書いてください。投稿には以下を記載してください。

   - 「マルチメディアと埋め込み、スキルテスト 1 のための評価希望」のような説明的なタイトル。
   - すでに持っている内容や、私たちに望むことの詳細。例えば、行き詰まって助けが必要な場合や、評価を希望する場合などを指示してください。
   - 評価やヘルプが必要な例へのリンクを、オンライン共有エディターで示してください（上記のステップ 1 で述べたとおり）。コードを見ることができなければ、コーディングの問題で誰かを助けることはとても難しいのです。
   - 実際の課題または評価ページへのリンク。あなたが助けを求めている問題を探すことができます。

---
title: "マルチメディア: 動画"
slug: Learn_web_development/Extensions/Performance/video
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance")}}

前回学んだように、平均的なウェブサイトでダウンロードされるバイトのうち、画像と動画のメディアは 70% 以上を占めています。画像の最適化については、すでに見ていきました。この記事では、ウェブのパフォーマンスを向上させるために動画を最適化することについて見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a
          href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >基本的なソフトウェアのインストール</a
        >、
        <a href="/ja/docs/Learn_web_development/Getting_started/Your_first_website"
          >クライアント側のウェブ技術</a
        >の基本的な知識
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        さまざまな動画形式とそのパフォーマンスへの影響について学び、それぞれのブラウザーのファイル種類に対応した最小の動画ファイルサイズを提供しながら、ページ全体の読み込み時間への動画の影響を縮小する方法を学びます。
      </td>
    </tr>
  </tbody>
</table>

## なぜマルチメディアを最適化するのか？

平均的なウェブサイトでは、[帯域幅の 25% が動画によるもの](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367)です。動画を最適化することで、とても大きな帯域幅の節約になり、ウェブサイトのパフォーマンス向上に対応させることができる可能性があります。

## 動画配信の最適化

下記の節では、最適化技術について記述しています。

- [すべての動画を圧縮する](#すべての動画を圧縮する)
- [`<source>` の順を最適化する](#source_の順を最適化する)
- [ミュートされた動画から音声を削除する](#ミュートされたヒーロー動画から音声を削除する)
- [動画の先読みを最適化する](#動画の先読み)
- [ストリーミングを検討する](#ストリーミングを検討する)

### すべての動画を圧縮する

ほとんどの動画圧縮作業は、動画内の隣接するフレームを比較し、両フレームで同一である細部を削除しようとするものです。動画を圧縮して、WebM や MPEG-4/H.264 など、複数の動画形式にエクスポートしましょう。

お使いの動画編集ソフトには、ファイルサイズを縮小する機能があると思います。そうでない場合は、[FFmpeg](https://www.ffmpeg.org/)（下記の節で説明）などのオンラインツールがあり、エンコード、デコード、変換、その他の最適化機能を実行することができます。

### `<source>` の順を最適化する

動画ソースを小さいものから大きいものへと順に並べてください。例えば、10MB および 12MB の形式の動画圧縮が指定されている場合、 10MB のリソースを最初に宣言します。

```html
<video width="400" height="300" controls="controls">
  <!-- WebM: 10 MB -->
  <source src="video.webm" type="video/webm" />
  <!-- MPEG-4/H.264: 12 MB -->
  <source src="video.mp4" type="video/mp4" />
</video>
```

ブラウザーは、理解できる最初の形式をダウンロードします。目標は、大きなバージョンよりも小さなバージョンを先に提供することです。最小のバージョンでは、最も圧縮された動画がまだ良く見えることを確認します。アニメーション GIF のように、動画が（悪く）見えてしまうような圧縮アルゴリズムもあります。128KB の動画は、10MB のダウンロードよりも使い勝手が良いように思えるかもしれませんが、GIF のような粗い動画は、そのブランドやプロジェクトの印象を悪くしてしまうかもしれません。

### ミュートされたヒーロー動画から音声を削除する

ヒーロー動画など音声のない動画では、音声を削除するのがスマートです。

```html
<video autoplay="" loop="" muted playsinline="" id="hero-video">
  <source src="banner_video.webm" type='video/webm; codecs="vp8, vorbis"' />
  <source src="web_banner.mp4" type="video/mp4" />
</video>
```

このヒーロー動画コード（上）は、会議のウェブサイトや企業のホームページによく見られるものです。自動再生、ループ、ミュートされる動画が記載されています。制御するものがないため、音声を聞く方法がありません。音声は空であることが多いですが、それでも存在し、帯域幅を使用しています。常にミュートされている動画と一緒に音声を提供する理由はありません。**音声を削除することで、帯域幅を 20% 節約することができます**。

ソフトウェアの選択によっては、書き出しや圧縮の際に音声を削除できるかもしれません。そうでない場合は、[FFmpeg](https://www.ffmpeg.org/) という無料のユーティリティがそれをやってくれます。これは音声を削除するための FFmpeg のコマンド文字列です。

```bash
ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4
```

### 動画の先読み

preload 属性には、利用できる選択肢が 3 つあります。 `auto`、`metadata`、`none` です。既定値は `metadata` です。これらの設定は、ページ読み込み時に動画ファイルをどれだけダウンロードするかを制御します。人気の高くない動画のダウンロードを延期することで、データを節約することができます。

`preload="none"` を設定すると、再生するまで動画は一切ダウンロードされません。起動は遅くなりますが、再生の可能性が低い動画では大幅なデータ削減が可能です。

より緩やかな帯域幅の節約になりますが、 `preload="metadata"` を設定すると、ページ読み込み時に動画の最大 3% をダウンロードすることができます。これは、小さなファイルや中程度の大きさのファイルに対して有益なオプションです。

`auto` に設定するには、ブラウザーに動画全体を自動的にダウンロードするように指示します。この設定は、再生する可能性がとても高い場合にのみ行ってください。そうでない場合は、多くの帯域幅を浪費することになります。

### ストリーミングを検討する

[動画ストリーミングでは、適切な動画サイズと帯域幅](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/)（ネットワーク速度に基づく）でエンドユーザーに配信することができます。レスポンシブ画像と同様に、適切なサイズの動画がブラウザーに配信されるため、動画の高速起動、少ないバッファリング、最適化された再生が保証されます。

## まとめ

動画を最適化することで、ウェブサイトのパフォーマンスを大幅に向上させる可能性があります。動画ファイルは、他のウェブサイトのファイルと比較して比較的大きく、常に注意を払う必要があります。この記事では、ファイルサイズの縮小、(HTML) ダウンロード設定、ストリーミングによるウェブサイトの動画の最適化について説明します。

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance")}}

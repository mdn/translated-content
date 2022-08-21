---
title: Mozilla のスプラッシュページ
slug: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
tags:
  - Assessment
  - Beginner
  - CodingScripting
  - Embedding
  - HTML
  - Multimedia
  - Video
  - iframe
  - picture
  - responsive
  - sizes
  - srcset
  - マルチメディア
  - レスポンシブ
  - 初心者
  - 動画
  - 埋め込み
  - 評価試験
translation_of: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
---
{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

今回の評価試験では、このモジュールの記事で説明したいくつかの技術の知識をテストするために、Mozilla のすべてついてのファンキーなスプラッシュページに、いくつかの画像と動画を追加してもらいます！

| 前提条件: | この評価試験を試す前に、残りの[マルチメディアとその埋め込み方](/ja/docs/Learn/HTML/Multimedia_and_embedding)のモジュールに既に取り組んでいる必要があります。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 目的:     | ウェブページに画像と動画を埋め込むこと、フレーム、および HTML レスポンシブ画像技術に関する知識をテストすること。                                             |

## 出発点

この評価試験を開始するには、github の [mdn-splash-page-start](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/) ディレクトリーにある HTML とすべての画像を取得する必要があります。 [index.html](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/index.html) の内容をローカルドライブの新しいディレクトリーの `index.html` というファイルに保存します。 それから、[pattern.png](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) を同じディレクトリーに保存します（画像を右クリックして保存するオプションを選びます）。

[originals](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/mdn-splash-page-start/originals) ディレクトリーの別の画像にアクセスし、同じ方法で保存します。 あなたはそれらを使用する準備が整う前に、グラフィックスエディタを使って（それらのいくつかを）操作する必要があるので、今は別のディレクトリーに保存する必要があります。

> **Note:** 例の HTML ファイルには、ページのスタイルを設定するための CSS がかなり多く含まれています。 {{htmlelement("body")}} 要素内の HTML だけで、CSS に触れる必要はありません — 正しいマークアップを挿入する限り、スタイリングは正しく表示されます。

## プロジェクトの概要

今回の評価試験では、ほとんど完成した Mozilla のスプラッシュページを紹介しています。 これは、Mozilla が何を意味しているかについて、何か素敵で興味深いことを言い、さらなるリソースへのリンクを提供することを目的としています。 残念ながら、画像や動画はまだ追加されていません — これがあなたの仕事です！ ページの見栄えを良くし、もっと理にかなったものにするために、いくつかのメディアを追加する必要があります。 次のサブセクションでは、実行する必要があることを詳しく説明します。

### 画像の準備

お気に入りの画像エディタを使用して、次のものから 400px 幅と 120px 幅のバージョンを作成します。

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

たとえば、`firefoxlogo400.png` と `firefoxlogo120.png` のように、それらを判りやすい名前にしてください。

`mdn.svg` に加えて、これらの画像は、`further-info` 領域内のさらなるリソースにリンクするアイコンになります。 また、サイトヘッダーの firefox ロゴにもリンクします。 これらすべてのコピーを `index.html` と同じディレクトリーに保存します。

次に、`red-panda.jpg` の 1200 ピクセル幅のランドスケープバージョンと、パンダをより近くに見せてくれる 600 ピクセル幅のポートレートバージョンを作成します。 繰り返しますが、それらを簡単に識別できるように、判りやすい名前にしてください。 これらの両方のコピーを `index.html` と同じディレクトリーに保存します。

> **Note:** JPG 画像と PNG 画像を最適化して、できるだけ小さくして、それでも見栄えを良くしてください。 [tinypng.com](https://tinypng.com/) は簡単にこれを行うための素晴らしいサービスです。

### ヘッダーにロゴを追加する

{{htmlelement("header")}} 要素の中に、小さなバージョンの Firefox ロゴをヘッダーに埋め込む {{htmlelement("img")}} 要素を追加します。

### 主要記事のコンテンツに動画を追加する

{{htmlelement("article")}} 要素の内側（開始タグのすぐ下）に、 <https://www.youtube.com/watch?v=ojcNcvb1olg> にある YouTube 動画を適切な YouTube ツールを使用してコードを生成して埋め込みます。 動画の幅は 400 ピクセルです。

### さらなる情報リンクにレスポンシブ画像を追加する

`further-info` クラスを持つ {{htmlelement("div")}} の中には、それぞれが興味深い Mozilla 関連のページにリンクする 4 つの {{htmlelement("a")}} 要素があります。 このセクションを完成させるには、適切な {{htmlattrxref("src", "img")}}、{{htmlattrxref("alt", "img")}}、{{htmlattrxref("srcset", "img")}}、{{htmlattrxref("sizes", "img")}} の各属性を含む {{htmlelement("img")}} 要素をそれぞれの内部に挿入する必要があります。

いずれの場合でも (1 つを除く — どれが本質的にレスポンシブですか？)、ブラウザーにビューポートの幅が 500px 以下の場合は 120px 幅のバージョン、それ以外の場合は 400px 幅のバージョンを提供したい。

正しい画像と正しいリンクが一致していることを確認してください！

> **Note:** `srcset` と `sizes` の例を適切にテストするには、サイトをサーバーにアップロードする必要があります ([Github ページ](/ja/docs/Learn/Common_questions/Using_Github_pages)を使用するのが簡単で無料の解決策です)。 そして、そこから Firefox の [Network Monitor](/ja/docs/Tools/Network_Monitor) などのツールを使用して正しく動作しているかどうかをテストできます。

### アートディレクションされたレッサーパンダ

`red-panda` クラスを持つ {{htmlelement("div")}} の中に、ビューポートの幅が 600px 以下の場合は小さなポートレートのパンダ画像を提供する {{htmlelement("picture")}} 要素を挿入し、それ以外の場合は大きなランドスケープ画像を挿入します。

## 例

以下のスクリーンショットは、広い画面と狭い画面で、スプラッシュページが正しくマークアップされた後にどのように見えるかを示しています。

![サンプルのスプラッシュページの広い画面のショット](wide-shot.png)

![サンプルのスプラッシュページの狭い画面のショット](narrow-shot.png)

## 評価

組織的コースの一環としてこの評価に従っている場合は、採点のために作品を教師や指導者に渡すことができるはずです。 自己学習をしている場合は、[この演習についてのディスカッションスレッド](https://discourse.mozilla.org/t/mozilla-splash-page-assignment/24679)や [Mozilla IRC](https://wiki.mozilla.org/IRC) の [#mdn](irc://irc.mozilla.org/mdn) IRC チャンネルで尋ねることで、かなり簡単に採点の手引きを得ることができます。 まず演習を試してみてください — 不正行為によって得られるものは何もありません！

> **Note:** 評価試験を Chrome ブラウザーのデベロッパーツールで行った場合、「レスポンシブビュー」でどんなに幅を狭く設定しても正しい画像が読み込めないことがあります。これは Chrome の特性のようです。 Firefox ブラウザーは (HTML が正しければ) 正しい画像を読み込みます。

{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

## このモジュール内の文書

- [HTML の画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [動画と音声のコンテンツ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [\<object> から \<iframe> へ — その他の埋め込み技術](/ja/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [ウェブにベクターグラフィックスを追加する](/ja/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Mozilla のスプラッシュページ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)

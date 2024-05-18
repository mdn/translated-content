---
title: Mozilla のスプラッシュページ
slug: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

今回の評価試験では、このモジュールの記事で説明したいくつかの技術の知識をテストするために、Mozilla のすべてついてのファンキーなスプラッシュページに、いくつかの画像と動画を追加してもらいます！

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        この評価に挑戦する前に、すでにこのモジュールのすべての記事を読み終えておいてください。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        ウェブページに画像と動画を埋め込むこと、フレーム、および HTML レスポンシブ画像技術に関する知識をテストすること。
      </td>
    </tr>
  </tbody>
</table>

## 出発点

この評価試験を開始するには、GitHub の [mdn-splash-page-start](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start/) ディレクトリーにある HTML とすべての画像を取得する必要があります。 [index.html](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/index.html) の内容をローカルドライブの新しいディレクトリーの `index.html` というファイルに保存します。 それから、[pattern.png](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) を同じディレクトリーに保存します（画像を右クリックして保存するオプションを選びます）。

[originals](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start/originals) ディレクトリーの別の画像にアクセスし、同じ方法で保存します。 あなたはそれらを使用する準備が整う前に、グラフィックスエディターを使って（それらのいくつかを）操作する必要があるので、今は別のディレクトリーに保存する必要があります。

それ以外に、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターを使用することもできます。

> **メモ:** 例の HTML ファイルには、ページのスタイルを設定するための CSS がかなり多く含まれています。 CSS に触れる必要はなく、 {{htmlelement("body")}} 要素内の HTML を操作するだけです。正しいマークアップを挿入していれば、スタイルは正しく表示されます。
>
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してみてください。

## プロジェクト概要

今回の評価試験では、ほとんど完成した Mozilla のスプラッシュページを紹介しています。 これは、Mozilla が何を意味しているかについて、何か素敵で興味深いことを言い、さらなるリソースへのリンクを提供することを目的としています。 残念ながら、画像や動画はまだ追加されていません — これがあなたの仕事です。ページの見栄えを良くし、もっと理にかなったものにするために、いくつかのメディアを追加する必要があります。 次の節では、実行する必要があることを詳しく説明します。

### 画像の準備

お気に入りの画像エディターを使用して、次のものから 400px 幅と 120px 幅のバージョンを作成します。

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

たとえば、`firefoxlogo400.png` と `firefoxlogo120.png` のように、それらを判りやすい名前にしてください。

`mdn.svg` に加えて、これらの画像は、`further-info` 領域内のさらなるリソースにリンクするアイコンになります。 また、サイトヘッダーの Firefox ロゴにもリンクします。 これらすべてのコピーを `index.html` と同じディレクトリーに保存してください。

次に、 `red-panda.jpg` の 1200 ピクセル幅のランドスケープバージョンと、パンダをより近くに見せてくれる 600 ピクセル幅のポートレートバージョンを作成します。 繰り返しますが、簡単に識別できるように、判りやすい名前にしてください。 これらの両方のコピーを `index.html` と同じディレクトリーに保存してください。

> **メモ:** JPG 画像と PNG 画像は最適化して、できるだけ小さくして、それでも見栄えを良くしてください。 [tinypng.com](https://tinypng.com/) は簡単にこれを行うための素晴らしいサービスです。

### ヘッダーにロゴを追加する

{{htmlelement("header")}} 要素の中に、小さなバージョンの Firefox ロゴをヘッダーに埋め込む {{htmlelement("img")}} 要素を追加してください。

### 主要記事のコンテンツに動画を追加する

{{htmlelement("article")}} 要素の内側（開始タグのすぐ下）に、 <https://www.youtube.com/watch?v=ojcNcvb1olg> にある YouTube 動画を適切な YouTube ツールを使用してコードを生成して埋め込みます。 動画の幅は 400 ピクセルにしてください。

### さらなる情報リンクにレスポンシブ画像を追加する

`further-info` クラスを持つ {{htmlelement("div")}} の中には、それぞれが興味深い Mozilla 関連のページにリンクする 4 つの {{htmlelement("a")}} 要素があります。 この節を完成させるには、適切な [`src`](/ja/docs/Web/HTML/Element/img#src)、[`alt`](/ja/docs/Web/HTML/Element/img#alt)、[`srcset`](/ja/docs/Web/HTML/Element/img#srcset)、[`sizes`](/ja/docs/Web/HTML/Element/img#sizes) の各属性を含む {{htmlelement("img")}} 要素をそれぞれの内部に挿入する必要があります。

いずれの場合でも（1 つを除く — どれが本質的にレスポンシブでしょうか？）、ブラウザーにビューポートの幅が 500px 以下の場合は 120px 幅のバージョン、それ以外の場合は 400px 幅のバージョンを提供したい。

正しい画像と正しいリンクが一致していることを確認してください。

> **メモ:** `srcset` と `sizes` の例を適切にテストするには、サイトをサーバーにアップロードする必要があります ([GitHub ページ](/ja/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages)を使用するのが簡単で無料の解決策です)。 そして、そこから Firefox の[ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)などのツールを使用して正しく動作しているかどうかをテストできます。

### アートディレクションされたレッサーパンダ

`red-panda` クラスを持つ {{htmlelement("div")}} の中に、ビューポートの幅が 600px 以下の場合は小さな縦型ののパンダ画像を提供する {{htmlelement("picture")}} 要素を挿入し、それ以外の場合は大きな横型の画像を挿入します。

## ヒントとコツ

- [W3C Nu HTML Checker](https://validator.w3.org/nu/) を使用すると、 HTML の間違いを拾うことができます。
- この評価課題を行うには、 CSS の知識は必要ありません。必要なものは HTML ファイルだけです。 CSS の部分はすでに完成しています。
- 提供された HTML （CSS スタイル設定を含む）はすでにほとんどの作業を行っていますので、メディアの埋め込みにだけ集中してください。

## 例

以下のスクリーンショットは、広い画面と狭い画面で、スプラッシュページが正しくマークアップされた後にどのように見えるかを示しています。

![サンプルのスプラッシュページの広い画面のショット](wide-shot.png)

![サンプルのスプラッシュページの狭い画面のショット](narrow-shot.png)

{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

---
title: "課題: 美しいレターヘッド付きの便箋の作成"
slug: Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}

好印象を与えたいのなら、素敵なレターヘッドの便箋に手紙を書くのはとても良い考えです。この評価では、そのような見た目のオンラインテンプレートの作成に挑戦します。

## 出発点

この評価を開始するには、次のことが必要です。

- [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html) と [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css) のローカルコピーを作成します — それらを `index.html` と `style.css` として新しいディレクトリーに保存します。
- 上部（[top](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png)）、下部（[bottom](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png)）、ロゴ（[logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png)）の画像のローカルコピーを、コードファイルと同じディレクトリーに保存します。

また、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターを使用することもできます。
これらのオンラインエディターのいずれかに HTML を貼り付けて CSS を入力してください。

> [!NOTE]
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してみてください。

## プロジェクト概要

レターヘッド付きの便箋のテンプレートを作成するのに必要なファイルを与えられました。 ファイルをまとめるだけでいいのです。 目的を達するには、次のことが必要です。

### メインの手紙

- CSS を HTML に適用します。
- `background` 宣言を手紙に追加します。

  - 上部の画像を手紙の上部に固定します。
  - 下部の画像を手紙の下部に固定します。
  - 前記の両方の背景の上に半透明のグラデーションを追加して、手紙に少し質感を与えます。 上部と下部のすぐ近くで少し暗くしますが、中央の大部分は完全に透明にします。

- 前記の宣言をサポートしていないブラウザーのための代替として、単に top の画像を手紙の上部に追加する別の `background` 宣言を追加します。
- 手紙に白い背景色を追加します。
- 配色の他の部分と調和している色で、手紙に 1mm の上下の実線の境界線を追加します。

### ロゴ

- {{htmlelement("Heading_Elements", "h1")}} にロゴを背景画像として追加します。
- ロゴにフィルターを追加して、微妙なドロップシャドウを付けます。
- 今度はフィルターをコメントアウトし、丸い画像の形に沿った（ややクロスブラウザー互換の）別の方法でドロップシャドウを実装します。

## ヒントとコツ

- 代替バージョンの宣言を最初に配置し、その後に新しいブラウザーでのみ機能するバージョンを配置することによって、古いブラウザーのための代替を作成できることを忘れないでください。 古いブラウザーは最初の宣言を適用して 2 番目の宣言を無視しますが、新しいブラウザーは最初の宣言を適用してから 2 番目の宣言で上書きします。
- ご希望の場合は、評価用に独自のグラフィックを自由に作成してください。

## 例

次のスクリーンショットは、完成したデザインがどのように見えるかの例を示しています。

![左上に 2 つの三角図形（最初の図形は緑、 2 つ目は赤）、右上に濃い赤の台形。緑色の三角形の下記には、緑色の星と白い文字で塗りつぶされた赤い円： 素晴らしい会社です。ページ左下、濃い赤の台形、以下 2 つの三角形が続きます。緑色の三角形の上には、郵便物の宛先が黒文字で表示されています。](letterhead.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}

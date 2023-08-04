---
title: 装飾的なレターヘッド付きの便箋の作成
slug: Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_boxes/Advanced_box_effects", "Learn/CSS/Styling_boxes/A_cool_looking_box", "Learn/CSS/Styling_boxes")}}

好印象を与えたいのなら、素敵なレターヘッドの便箋に手紙を書くのはとても良い考えです。この評価では、そのような見た目のオンラインテンプレートの作成に挑戦します。

| 前提知識: | この評価を試みる前に、このモジュールのすべての記事を読んでおくべきです。         |
| --------- | -------------------------------------------------------------------------------- |
| 学習目標: | CSS ボックスモデルの理解と、背景の実装などの他のボックス関連機能をテストします。 |

## 出発点

この評価を開始するには、次のことが必要です。

- [HTML](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/letterheaded-paper-start/index.html) と [CSS](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/letterheaded-paper-start/style.css) のローカルコピーを作成します — それらを `index.html` と `style.css` として新しいディレクトリーに保存します。
- 上部（[top](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png)）、下部（[bottom](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png)）、ロゴ（[logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png)）の画像のローカルコピーを、コードファイルと同じディレクトリーに保存します。

> **メモ:** あるいは、[JSBin](https://jsbin.com/) や [Thimble](https://thimble.mozilla.org/) などのサイトを使って評価することもできます。 HTML を貼り付けて CSS をこれらのオンラインエディタのいずれかに入力できます。 使用しているオンラインエディタに別の CSS パネルがない場合は、それをドキュメントの先頭の `<style>` 要素に自由に配置してください。

## プロジェクトの概要

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

- {{htmlelement("h1")}} にロゴを背景画像として追加します。
- ロゴにフィルタを追加して、微妙なドロップシャドウを付けます。
- 今度はフィルタをコメントアウトし、丸い画像の形に沿った（ややクロスブラウザー互換の）別の方法でドロップシャドウを実装します。

## ヒントとコツ

- 代替バージョンの宣言を最初に配置し、その後に新しいブラウザーでのみ機能するバージョンを配置することによって、古いブラウザーのための代替を作成できることを忘れないでください。 古いブラウザーは最初の宣言を適用して 2 番目の宣言を無視しますが、新しいブラウザーは最初の宣言を適用してから 2 番目の宣言で上書きします。
- ご希望の場合は、評価用に独自のグラフィックを自由に作成してください。

## 例

次のスクリーンショットは、完成したデザインがどのように見えるかの例を示しています。

![](letterhead.png)

## 評価

組織的コースの一環としてこの評価に従っている場合は、採点のために作品を教師や指導者に渡すことができるはずです。 自己学習をしている場合は、[この演習についてのディスカッションスレッド](https://discourse.mozilla.org/t/creating-fancy-letterheaded-paper-assessment/24684/1)や [Mozilla IRC](https://wiki.mozilla.org/IRC) の [#mdn](irc://irc.mozilla.org/mdn) IRC チャンネルで尋ねることで、かなり簡単に採点の手引きを得ることができます。 まず演習を試してみてください — 不正行為によって得られるものは何もありません！

{{PreviousMenuNext("Learn/CSS/Styling_boxes/Advanced_box_effects", "Learn/CSS/Styling_boxes/A_cool_looking_box", "Learn/CSS/Styling_boxes")}}

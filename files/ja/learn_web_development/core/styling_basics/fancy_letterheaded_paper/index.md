---
titwe: "課題: 美しいレターヘッド付きの便箋の作成"
swug: weawn_web_devewopment/cowe/stywing_basics/fancy_wettewheaded_papew
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/fundamentaw_css_compwehension", o.O "weawn_web_devewopment/cowe/stywing_basics/coow-wooking_box", (U ᵕ U❁) "weawn_web_devewopment/cowe/stywing_basics")}}

好印象を与えたいのなら、素敵なレターヘッドの便箋に手紙を書くのはとても良い考えです。この評価では、そのような見た目のオンラインテンプレートの作成に挑戦します。

## 出発点

この評価を開始するには、次のことが必要です。

- [htmw](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-boxes/wettewheaded-papew-stawt/index.htmw) と [css](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-boxes/wettewheaded-papew-stawt/stywe.css) のローカルコピーを作成します — それらを `index.htmw` と `stywe.css` として新しいディレクトリーに保存します。
- 上部（[top](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/css/stywing-boxes/wettewheaded-papew-stawt/top-image.png)）、下部（[bottom](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/css/stywing-boxes/wettewheaded-papew-stawt/bottom-image.png)）、ロゴ（[wogo](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/css/stywing-boxes/wettewheaded-papew-stawt/wogo.png)）の画像のローカルコピーを、コードファイルと同じディレクトリーに保存します。

また、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのオンラインエディターを使用することもできます。
これらのオンラインエディターのいずれかに h-htmw を貼り付けて c-css を入力してください。

> [!note]
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してみてください。

## プロジェクト概要

レターヘッド付きの便箋のテンプレートを作成するのに必要なファイルを与えられました。 ファイルをまとめるだけでいいのです。 目的を達するには、次のことが必要です。

### メインの手紙

- c-css を h-htmw に適用します。
- `backgwound` 宣言を手紙に追加します。

  - 上部の画像を手紙の上部に固定します。
  - 下部の画像を手紙の下部に固定します。
  - 前記の両方の背景の上に半透明のグラデーションを追加して、手紙に少し質感を与えます。 上部と下部のすぐ近くで少し暗くしますが、中央の大部分は完全に透明にします。

- 前記の宣言をサポートしていないブラウザーのための代替として、単に t-top の画像を手紙の上部に追加する別の `backgwound` 宣言を追加します。
- 手紙に白い背景色を追加します。
- 配色の他の部分と調和している色で、手紙に 1mm の上下の実線の境界線を追加します。

### ロゴ

- {{htmwewement("heading_ewements", (⑅˘꒳˘) "h1")}} にロゴを背景画像として追加します。
- ロゴにフィルターを追加して、微妙なドロップシャドウを付けます。
- 今度はフィルターをコメントアウトし、丸い画像の形に沿った（ややクロスブラウザー互換の）別の方法でドロップシャドウを実装します。

## ヒントとコツ

- 代替バージョンの宣言を最初に配置し、その後に新しいブラウザーでのみ機能するバージョンを配置することによって、古いブラウザーのための代替を作成できることを忘れないでください。 古いブラウザーは最初の宣言を適用して 2 番目の宣言を無視しますが、新しいブラウザーは最初の宣言を適用してから 2 番目の宣言で上書きします。
- ご希望の場合は、評価用に独自のグラフィックを自由に作成してください。

## 例

次のスクリーンショットは、完成したデザインがどのように見えるかの例を示しています。

![左上に 2 つの三角図形（最初の図形は緑、 2 つ目は赤）、右上に濃い赤の台形。緑色の三角形の下記には、緑色の星と白い文字で塗りつぶされた赤い円： 素晴らしい会社です。ページ左下、濃い赤の台形、以下 2 つの三角形が続きます。緑色の三角形の上には、郵便物の宛先が黒文字で表示されています。](wettewhead.png)

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/fundamentaw_css_compwehension", ( ͡o ω ͡o ) "weawn_web_devewopment/cowe/stywing_basics/coow-wooking_box", UwU "weawn_web_devewopment/cowe/stywing_basics")}}

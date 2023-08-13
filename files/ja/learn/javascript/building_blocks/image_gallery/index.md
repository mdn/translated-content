---
title: イメージギャラリー
slug: Learn/JavaScript/Building_blocks/Image_gallery
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

JavaScript の基本的な構成要素を見てきたところで、これからたくさんのウェブサイトで見かける項目、JavaScript で動作するイメージギャラリーをつくってみることで、あなたが得た繰り返し、関数、条件とイベントの知識を試してみましょう。

| 前提条件: | この評価を行う前に、このモジュールにある記事すべてを実施していること。      |
| --------- | --------------------------------------------------------------------------- |
| 目標:     | JavaScript の繰り返し、関数、条件とイベントが理解できていることを確認する。 |

## 出発点

この評価を始めるために、サンプルが入っているサイトから [ZIP ファイル](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/gallery/gallery-start.zip?raw=true) を取得して、コンピュータのどこかに展開しておきます。

> **メモ:** 別の方法として, この評価を行うために [JSBin](https://jsbin.com/) や [Thimble](https://thimble.mozilla.org/) のようなサイトを使うことができます。これらのオンラインエディターに HTML、CSS、JavaScript を貼り付けることができます。利用するオンラインエディターが JavaScript/CSS パネルに分かれていなければ、 HTML ページの中の `<script>`/`<style>` 要素にそれらを貼り付けてください 。

## プロジェクト概要

HTML、CSS と画像および数行の JavaScript のコードが提供されています。必要な JavaScript を書いて、これを動くプログラムにする必要があります。HTML のボディは次のようになっています:

```html
<h1>Image gallery example</h1>

<div class="full-img">
  <img class="displayed-img" src="images/pic1.jpg" />
  <div class="overlay"></div>
  <button class="dark">Darken</button>
</div>

<div class="thumb-bar"></div>
```

例ではこのように見えます:

![](gallery.png)

例にある CSS ファイルで最も興味深い部分:

- `full-img <div>` の内側に 3 つの要素が絶対位置指定されています ー `<img>` にはフルサイズの画像が表示されています。その上に `<img>` と同じサイズになるようにサイズ調整された空の`<div>` が置かれています (これは半透明の背景色で画像を暗くする効果に使われます)。そして `<button>` は暗くする効果をコントロールするために使われます。
- `thumb-bar <div>` (いわゆるサムネイル画像) 内の画像は幅を 20% に設定し、左側に浮かせて一行に並べています。

JavaScript に必要なもの:

- すべての画像をループさせる際、`thumb-bar <div>` の中にその画像を埋め込む `<img>` 要素を挿入します。
- `onclick` ハンドラーを `thumb-bar <div>` の中の `<img>` それぞれにつけます。それをクリックしたときにその画像が `displayed-img <img>` 要素に表示されるようにします。
- `onclick` ハンドラーを `<button>` につけて、クリックされたらフルサイズ画像を暗くするようにします。再度クリックすると暗くする効果を外します。

もっとアイデアを加えると、[最終的な例](http://mdn.github.io/learning-area/javascript/building-blocks/gallery/) のようになります (ソースコードをのぞかないように！)

## 完成へのステップ

次のセクションですべきことを説明します。

### 画像をループさせる

すでに `thumbBar` という変数に `thumb-bar <div>` の参照を格納するようにしています。新しい `<img>` 要素を作って、その `src` 属性にプレースホルダーとして値 `xxx` をセットしてください。そして、新しい `<img>` 要素を `thumbBar` に追加してください。

必要なこと:

1. "Looping through images" コメントの下のセクションのコードを全 5 画像をループする繰り返し処理のなかに置いて下さい — 各画像を表現する 5 つの数についてループするだけです。
2. 各ループの反復で、プレースホルダー `xxx` の値を画像のパスに等しい文字列で置き換えてください。それぞれの場合で `src` 属性の値をこの値に設定します。いずれの場合も画像は画像ディレクトリーにあり、`pic1.jpg`、`pic2.jpg` というようなファイル名になっています。

### onclick ハンドラーをそれぞれのサムネール画像に追加する

各ループの反復で、現在の `newImage` に `onclick` ハンドラーを追加する必要があります — このハンドラは現在の画像の `src` 属性の値を見つけます。`displayed-img <img>` の `src` 属性の値をパラメータとして渡されたものの `src` 値へ設定します。

替わりに、サムネイルバーへ一つのイベントリスナーを追加することも出来ます。

### 暗くする/明るくするボタンを処理するハンドラーを書く

暗くする/明るくする `<button>` が残っています。`btn` という変数に `<button>` への参照を格納するコードはすでにご紹介しています。それらに `onclick` ハンドラーに追加する必要があります:

1. `<button>` にセットされている現在のクラス名をチェックしますーこれもまた、`getAttribute()` を使えば取得できます。
2. クラス名が `"dark"` なら、`<button>` のクラスを ([`setAttribute()`](/ja/docs/Web/API/Element/setAttribute) を使って) `"light"` に変更します。テキストも "Lighten" にします。そして、オーバーレイ `<div>` の {{cssxref("background-color")}} を `"rgba(0,0,0,0.5)"` にします。
3. クラス名が `"dark"` でなければ、`<button>` のクラスを `"dark"` に変更します。テキストを "Darken" に戻します。そしてオーバーレイ `<div>` の {{cssxref("background-color")}} を `"rgba(0,0,0,0)"` にします。

次のコードは上記の 2 と 3 で示された変更を行う基本的なものです。

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## ヒントとコツ

- HTML と CSS は全く編集する必要はありません。

## 課題

組織されたコースの一部としてこの評価を行う場合、採点のため先生/メンターにあなたの成果を提出してください。もし、自習なら、[このエクササイズに関するディスカッションのスレッド](https://discourse.mozilla.org/t/image-gallery-assessment/24687) や [Mozilla IRC](https://wiki.mozilla.org/IRC) の [#mdn](irc://irc.mozilla.org/mdn) IRC チャネルで尋ねれば、採点ガイドが簡単に得られるでしょう。まずエクササイズに挑戦してください。ーごまかしても何も得られません！

{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

---
title: "課題: イメージギャラリー"
slug: Learn_web_development/Core/Scripting/Image_gallery
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}

JavaScript の基本的な構成要素を見てきたところで、これからたくさんのウェブサイトで見かける項目、JavaScript で動作するイメージギャラリーをつくってみることで、あなたが得た繰り返し、関数、条件とイベントの知識を試してみましょう。

## 出発点

この評価を始めるために、サンプルが入っているサイトへ行って [ZIP ファイルを取得](https://raw.githubusercontent.com/mdn/learning-area/main/javascript/building-blocks/gallery/gallery-start.zip)して、コンピューターのどこかに展開し、ローカルで始めてください。

別の方法として、オンラインエディターを使用することもできます。例えば、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などです。

> [!NOTE]
> もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## プロジェクト概要

HTML、CSS と画像および数行の JavaScript のコードが提供されています。必要な JavaScript を書いて、これを動くプログラムにする必要があります。HTML の本体は次のようになっています。

```html-nolint
<h1>イメージギャラリーの例</h1>

<div class="full-img">
  <img
    class="displayed-img"
    src="images/pic1.jpg"
    alt="人間の青い目の拡大" />
  <div class="overlay"></div>
  <button class="dark">Darken</button>
</div>

<div class="thumb-bar"></div>
```

例ではこのように見えます。

![上部に大きな画像、下記に 5 つのサムネイルを配置した画像ギャラリー。](gallery.png)

例にある CSS ファイルで最も興味深い部分は次の通りです。

- `full-img <div>` の内側に 3 つの要素が絶対位置指定されています ー `<img>` にはフルサイズの画像が表示されています。その上に `<img>` と同じサイズになるようにサイズ調整された空の`<div>` が置かれています (これは半透明の背景色で画像を暗くする効果に使われます)。そして `<button>` は暗くする効果をコントロールするために使われます。
- `thumb-bar <div>` (いわゆるサムネイル画像) 内の画像は幅を 20% に設定し、左側に浮かせて一行に並べています。

JavaScript に必要なものは次の通りです。

- `const` 配列を宣言し、各画像のファイル名を `'pic1.jpg'` のように列挙します。
- `const` オブジェクトを宣言し、各画像の代替テキストを列挙します。
- ファイル名の配列をループし、それぞれの要素に対して `<img>` 要素を `thumb-bar <div>` の中に挿入し、その画像を代替テキストとともにページに埋め込みます。
- `thumb-bar <div>` 内の各 `<img>` にクリックイベントリスナーを追加し、クリックされたときに対応する画像と代替テキストが `displayed-img <img>` 要素に表示されるようにします。
- `<button>` にクリックイベントリスナーを追加し、クリックされるとフルサイズの画像に暗転効果が適用されるようにします。再びクリックされると、暗転効果は再び除去されます。

もっとアイデアを加えると、[最終的な例](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/) のようになります (ソースコードをのぞかないように！)

## 完成へのステップ

次のセクションですべきことを説明します。

## 画像ファイル名の配列を宣言する

ギャラリーに掲載する画像のファイル名をすべて列挙した配列を作成する必要があります。配列は定数として宣言する必要があります。

### 画像をループ処理する

すでに `thumbBar` という変数に `thumb-bar <div>` の参照を格納するようにしています。新しい `<img>` 要素を作って、その `src` および `alt` 属性にプレースホルダーとして値 `xxx` を設定してください。そして、新しい `<img>` 要素を `thumbBar` に追加してください。

必要なことは次の通りです。

1. "Looping through images" コメントの下の部分のコードを、配列内のファイル名をすべてループするループの中に入れてください。
2. ループの反復処理ごとに、プレースホルダー `xxx` の値を、画像へのパスと alt 属性に等しい文字列で置き換えます。それぞれのケースで `src` と `alt` 属性の値をこれらの値に設定します。画像は images ディレクトリー内にあり、その名前は `pic1.jpg`、`pic2.jpg` などであることを忘れないでください。

### クリックイベントリスナーをそれぞれのサムネイル画像に追加

ループの反復処理ごとに、現在の `newImage` にクリックリスナーを追加する必要があります。このリスナーは現在の画像の `src` 属性の値を見つけます。`displayed-img <img>` の `src` 属性の値を引数として渡されたものの `src` 値へ設定します。次に `alt` 属性についても同じようにします。

その代わりに、サムネイルバーへ単一のイベントリスナーを追加しても構いません。

### 暗くする/明るくするボタンを処理するハンドラーを書く

暗くする/明るくする `<button>` が残っています。`btn` という変数に `<button>` への参照を格納するコードはすでにご紹介しています。それらにクリックイベントリスナーに追加する必要があります。

1. `<button>` にセットされている現在のクラス名をチェックします。これもまた、`getAttribute()` を使えば取得できます。
2. クラス名が `"dark"` なら、`<button>` のクラスを ([`setAttribute()`](/ja/docs/Web/API/Element/setAttribute) を使って) `"light"` に変更します。テキストも "Lighten" にします。そして、オーバーレイ `<div>` の {{cssxref("background-color")}} を `"rgba(0,0,0,0.5)"` にします。
3. クラス名が `"dark"` でなければ、`<button>` のクラスを `"dark"` に変更します。テキストを "Darken" に戻します。そしてオーバーレイの `<div>` の {{cssxref("background-color")}} を `"rgb(0 0 0 / 0%)"` にします。

次のコードは上記の 2 と 3 で示された変更を行う基本的なものです。

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## ヒントとコツ

- HTML と CSS は全く編集する必要はありません。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}

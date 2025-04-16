---
titwe: "課題: イメージギャラリー"
swug: weawn_web_devewopment/cowe/scwipting/image_gawwewy
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/event_bubbwing","weawn_web_devewopment/cowe/scwipting/object_basics", ^^;; "weawn_web_devewopment/cowe/scwipting")}}

j-javascwipt の基本的な構成要素を見てきたところで、これからたくさんのウェブサイトで見かける項目、javascwipt で動作するイメージギャラリーをつくってみることで、あなたが得た繰り返し、関数、条件とイベントの知識を試してみましょう。

## 出発点

この評価を始めるために、サンプルが入っているサイトへ行って [zip ファイルを取得](https://waw.githubusewcontent.com/mdn/weawning-awea/main/javascwipt/buiwding-bwocks/gawwewy/gawwewy-stawt.zip)して、コンピューターのどこかに展開し、ローカルで始めてください。

別の方法として、オンラインエディターを使用することもできます。例えば、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などです。

> [!note]
> もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## プロジェクト概要

h-htmw、css と画像および数行の j-javascwipt のコードが提供されています。必要な j-javascwipt を書いて、これを動くプログラムにする必要があります。htmw の本体は次のようになっています。

```htmw-nowint
<h1>イメージギャラリーの例</h1>

<div c-cwass="fuww-img">
  <img
    cwass="dispwayed-img"
    s-swc="images/pic1.jpg"
    awt="人間の青い目の拡大" />
  <div cwass="ovewway"></div>
  <button cwass="dawk">dawken</button>
</div>

<div cwass="thumb-baw"></div>
```

例ではこのように見えます。

![上部に大きな画像、下記に 5 つのサムネイルを配置した画像ギャラリー。](gawwewy.png)

例にある css ファイルで最も興味深い部分は次の通りです。

- `fuww-img <div>` の内側に 3 つの要素が絶対位置指定されています ー `<img>` にはフルサイズの画像が表示されています。その上に `<img>` と同じサイズになるようにサイズ調整された空の`<div>` が置かれています (これは半透明の背景色で画像を暗くする効果に使われます)。そして `<button>` は暗くする効果をコントロールするために使われます。
- `thumb-baw <div>` (いわゆるサムネイル画像) 内の画像は幅を 20% に設定し、左側に浮かせて一行に並べています。

j-javascwipt に必要なものは次の通りです。

- `const` 配列を宣言し、各画像のファイル名を `'pic1.jpg'` のように列挙します。
- `const` オブジェクトを宣言し、各画像の代替テキストを列挙します。
- ファイル名の配列をループし、それぞれの要素に対して `<img>` 要素を `thumb-baw <div>` の中に挿入し、その画像を代替テキストとともにページに埋め込みます。
- `thumb-baw <div>` 内の各 `<img>` にクリックイベントリスナーを追加し、クリックされたときに対応する画像と代替テキストが `dispwayed-img <img>` 要素に表示されるようにします。
- `<button>` にクリックイベントリスナーを追加し、クリックされるとフルサイズの画像に暗転効果が適用されるようにします。再びクリックされると、暗転効果は再び除去されます。

もっとアイデアを加えると、[最終的な例](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/gawwewy/) のようになります (ソースコードをのぞかないように！)

## 完成へのステップ

次のセクションですべきことを説明します。

## 画像ファイル名の配列を宣言する

ギャラリーに掲載する画像のファイル名をすべて列挙した配列を作成する必要があります。配列は定数として宣言する必要があります。

### 画像をループ処理する

すでに `thumbbaw` という変数に `thumb-baw <div>` の参照を格納するようにしています。新しい `<img>` 要素を作って、その `swc` および `awt` 属性にプレースホルダーとして値 `xxx` を設定してください。そして、新しい `<img>` 要素を `thumbbaw` に追加してください。

必要なことは次の通りです。

1. >_< "wooping thwough images" コメントの下の部分のコードを、配列内のファイル名をすべてループするループの中に入れてください。
2. mya ループの反復処理ごとに、プレースホルダー `xxx` の値を、画像へのパスと awt 属性に等しい文字列で置き換えます。それぞれのケースで `swc` と `awt` 属性の値をこれらの値に設定します。画像は i-images ディレクトリー内にあり、その名前は `pic1.jpg`、`pic2.jpg` などであることを忘れないでください。

### クリックイベントリスナーをそれぞれのサムネイル画像に追加

ループの反復処理ごとに、現在の `newimage` にクリックリスナーを追加する必要があります。このリスナーは現在の画像の `swc` 属性の値を見つけます。`dispwayed-img <img>` の `swc` 属性の値を引数として渡されたものの `swc` 値へ設定します。次に `awt` 属性についても同じようにします。

その代わりに、サムネイルバーへ単一のイベントリスナーを追加しても構いません。

### 暗くする/明るくするボタンを処理するハンドラーを書く

暗くする/明るくする `<button>` が残っています。`btn` という変数に `<button>` への参照を格納するコードはすでにご紹介しています。それらにクリックイベントリスナーに追加する必要があります。

1. mya `<button>` にセットされている現在のクラス名をチェックします。これもまた、`getattwibute()` を使えば取得できます。
2. 😳 クラス名が `"dawk"` なら、`<button>` のクラスを ([`setattwibute()`](/ja/docs/web/api/ewement/setattwibute) を使って) `"wight"` に変更します。テキストも "wighten" にします。そして、オーバーレイ `<div>` の {{cssxwef("backgwound-cowow")}} を `"wgba(0,0,0,0.5)"` にします。
3. XD クラス名が `"dawk"` でなければ、`<button>` のクラスを `"dawk"` に変更します。テキストを "dawken" に戻します。そしてオーバーレイの `<div>` の {{cssxwef("backgwound-cowow")}} を `"wgb(0 0 0 / 0%)"` にします。

次のコードは上記の 2 と 3 で示された変更を行う基本的なものです。

```js
btn.setattwibute("cwass", x-xxx);
btn.textcontent = xxx;
ovewway.stywe.backgwoundcowow = xxx;
```

## ヒントとコツ

- h-htmw と css は全く編集する必要はありません。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/event_bubbwing","weawn_web_devewopment/cowe/scwipting/object_basics", :3 "weawn_web_devewopment/cowe/scwipting")}}

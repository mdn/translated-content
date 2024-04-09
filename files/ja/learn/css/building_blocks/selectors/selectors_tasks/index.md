---
title: "スキルテスト: セレクター"
slug: Learn/CSS/Building_blocks/Selectors/Selectors_Tasks
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}

このスキルテストの目的は、 [CSS セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)を理解しているかどうかを評価することです。

> **メモ:** このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターで解決策を試すことができます。
>
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してみてください。

## 課題 1

この課題では、 HTML を変えずに CSS を使用して以下のことを行ってください。

- `<h1>` の見出しを青にする。
- `<h2>` の見出しを青背景の白文字にする。
- `<span>`で囲まれたテキストのフォントサイズが 200% になるようにする。

最終結果は下記の画像のようになるはずです。

![課題 1 の解答の CSS を適用したテキスト。](selectors1.jpg)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/type.html", '100%', 700)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/type-download.html)しましょう。

## 課題 2

この課題では、 HTML を変更せずに、この例のコンテンツの外見に以下の変更を加えていただきたいと思います。

- id が `special` の要素の背景を黄色にする。
- `alert` クラスの要素に 1px の灰色の境界線をつける。
- `alert` クラスを持つ要素が `stop` クラスも持つ場合、背景を赤にする。
- `alert` クラスを持つ要素が `go` クラスも持つ場合、背景を緑色にする。

最終結果は下記の画像のようになるはずです。

![課題 2 の解答の CSS を適用したテキスト。](selectors2.jpg)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/class-id.html", '100%', 800)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/class-id-download.html)しましょう。

## 課題 3

この課題では、 HTML に追加することなく、以下の変更を行ってください。

- リンクをスタイル設定し、リンク状態をオレンジ色に、訪問済みリンクを緑色に、ホバー時のアンダーラインを除去する。
- コンテナーの中にある最初の要素を font-size: 150% にし、その要素の最初の行を赤くする。
- 表内の行を 1 つおきに選択し、背景色を #333 に、前景色を白にする。

最終結果は下記の画像のようになるはずです。

![課題 3 の解答の CSS を適用したテキスト。](selectors3.jpg)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/pseudo.html", '100%', 800)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/pseudo-download.html)しましょう。

## 課題 4

この課題では、以下のことを行っていただきたいと思います。

- `<h2>` 要素の直後の段落を赤くする。
- 箇条書きを取り除き、 ul の直接の子でクラスが `list` であるリストアイテムにのみ、 1px のグレーの下境界線を追加します。

最終結果は下記の画像のようになるはずです。

![課題 4 の解答の CSS を適用したテキスト。](selectors4.jpg)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/combinators.html", '100%', 800)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/combinators-download.html)しましょう。

## 課題 5

この課題では、属性セレクターを使用して以下のように CSS を追加します。

- `<a>` 要素に `title` 属性を対象とし、境界線をピンクにします (`border-color: pink`)。
- `<a>` 要素のうち、 `href` 属性のどこかに `contact` という単語を含むものを対象とし、境界線をオレンジ色にします (`border-color: orange`)。
- `<a>` 要素のうち、 `href` 属性が `https` で始まるものを対象とし、緑色の境界線 (`border-color: green`) を与えます。

最終結果は下記の画像のようになるはずです。

![異なる色の縁取りが施された 4 つのリンク。](selectors-attribute.png)

以下のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/attribute-links.html", '100%', 800)}}

> **注目:**
>
> 自分自身のエディターやオンラインエディターで作業する場合は、[このタスクの開始点をダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/attribute-links-download.html)しましょう。

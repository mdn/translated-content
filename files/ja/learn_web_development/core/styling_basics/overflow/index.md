---
title: 要素のオーバーフロー
slug: Learn_web_development/Core/Styling_basics/Overflow
original_slug: Learn/CSS/Building_blocks/Overflowing_content
l10n:
  sourceCommit: 68772e87a84d6d6fc6a8e377dea4998afbeb511c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}

オーバーフロー（あふれ）は、ボックス内にコンテンツが収まりきらないときに発生します。このガイドでは、その詳細とそれらについてどのように対処するかを学びます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >基本的なソフトウェアがインストールされている</a
        >こと、<a
          href="/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >ファイルの扱い</a
        >、HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 入門</a
        >の学習）、CSS がどのように動作するかの考え（<a href="/ja/docs/Learn/CSS/First_steps">CSS の第一歩</a>で学習）の基本的な知識を得ていること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>オーバーフローとその管理方法を理解すること。</td>
    </tr>
  </tbody>
</table>

## オーバーフロー (overflow) とは？

CSS のすべてがボックスであり、 {{cssxref("width")}} と {{cssxref("height")}}（または {{cssxref("inline-size")}} や {{cssxref("block-size")}}）の値を与えることにより、これらのボックスのサイズを制御できることを見てきました。**オーバーフローはボックス内のコンテンツが多すぎる場合に発生します。** CSS はこのオーバーフローを管理するためのさまざまなツールを提供しています。今後、CSS のレイアウトを使用して CSS を書いていると、オーバーフローによく出くわすようになるでしょう。

## CSS は「データ損失」を回避しようとする

オーバーフローが発生した場合の CSS の既定の動作を示す 2 つの例を見てみましょう。

1 つめの例です。まずブロックに `height` でボックスの高さを制限します。そしてそのスペースよりも多くのコンテンツを追加します。コンテンツはボックスからはみ出し、下の段落にかぶさってしまいます。

```html-nolint live-sample___block-overflow
<div class="box">
   このボックスには高さと幅が設定されています。つまり、割り当てられている高さ以内に表示しきれないほどのコンテンツがある場合、オーバーフローがあるということを意味しています。 overflow が hidden に設定されている場合は、あふれた部分は表示されません。
</div>

<p>これはボックスの外のコンテンツです。</p>
```

```css live-sample___block-overflow
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
}
```

{{EmbedLiveSample("block-overflow", "", "200px")}}

2 つめに、インラインとして制限されているボックス内の単語の例です。ボックスは単語が収まらないほど小さいため、ボックスからはみ出てしまいます。

```html live-sample___inline-overflow
<div class="word">Overflow</div>
```

```css live-sample___inline-overflow
.word {
  border: 1px solid #333333;
  width: 100px;
  font-size: 250%;
}
```

{{EmbedLiveSample("inline-overflow")}}

なぜ CSS はこのような乱雑な方法で動作し、意図するコンテナーからコンテンツをはみ出させて表示するのか不思議に思うかもしれません。追加のコンテンツを非表示にしたり、ボックスを大きくさせたりしないのはなぜなのでしょう。

CSS は可能な限りコンテンツを隠しません。これをやってしまうと、通常は問題となりうるデータ損失が発生するためです。CSS はこのようにコンテンツが消えることを懸念します。コンテンツが消失したことに気付かない可能性があるのは問題だからです。見ている人は消えたことに気付かないかもしれません。フォーム上の送信ボタンが消えてしまい、フォームが完了できない場合それは大きな問題です。代わりに CSS は目に見える方法でオーバーフローしようとします。あなたもしくは訪問者がコンテンツが重なっているという状況に気づき、修正が必要であることを知ることができます。

ボックスを `width` や `height` で制限する場合、 CSS はあなたが何をしているか分かっていると信じています。 CSS は、あなたがオーバーフローの可能性を管理していることを想定しています。一般に、ブロックの寸法を制限することは、ボックスにテキストが格納されている場合に問題となります。サイトの設計時に想定していたよりもテキストが多かったり、テキストが大きかったりする場合があります（例えば、ユーザーがフォントサイズを大きくしている場合など）。

次の 2 つのレッスンでは、オーバーフローしにくい方法でサイズを制御するためのさまざまな手法を説明します。しかし、固定されたサイズが必要な場合は、オーバーフローの動作を制御することもできます。読み進めましょう。

## overflow プロパティ

{{cssxref("overflow")}} プロパティは、要素のコンテンツのはみ出しを管理するのに役立ちます。このプロパティを使用すると、はみ出したコンテンツをどのように処理すべきかをブラウザーに伝えることができます。 [`<overflow>`](/ja/docs/Web/CSS/overflow_value) の値型の既定値は `visible` です。この既定の設定、コンテンツがオーバーフローしたときに、そのコンテンツを見ることができます。

オーバーフロー時にコンテンツを切り取りたい場合、 `overflow: hidden` をボックスに指定します。これは文字通り、はみ出たものを見えなくします。これにより内容が隠れてしまうことが起こりうるため、コンテンツが非表示になっても問題にならない場合にのみに限定した方がいいでしょう。

```html-nolint live-sample___hidden
<div class="box">
   このボックスには高さと幅が設定されています。つまり、割り当てられている高さ以内に表示しきれないほどのコンテンツがある場合、オーバーフローがあるということを意味しています。 overflow が hidden に設定されている場合は、あふれた部分は表示されません。
</div>

<p>これはボックスの外のコンテンツです。</p>
```

```css live-sample___hidden
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow: hidden;
}
```

{{EmbedLiveSample("hidden", "", "200px")}}

代わりに、コンテンツがあふれたときにスクロールバーを追加したいのではないでしょうか。 `overflow: scroll` を使用すると、スクロールバーが表示されているブラウザーは、あふれたコンテンツがない場合でも常にスクロールバーを表示します。これにより、コンテナー内のコンテンツの量に応じてスクロールバーが現れたり消えたりする代わりに、レイアウトを一定に保つことができるという利点があります。

下記のボックスから一部のコンテンツを除去してください。スクロールする必要がなくても、スクロールバーが残っていることに注目してください。

> [!NOTE]
> スクロールバーの見え方は、オペレーティングシステムによって異なります。
> 次の例でスクロールバーを常に表示させるためには、ブラウザー設定を常にスクロールバーを表示するように変更する必要があるかもしれません。

```html-nolint live-sample___scroll
<div class="box">
   このボックスには高さと幅が設定されています。つまり、割り当てられている高さ以内に表示しきれないほどのコンテンツがある場合、オーバーフローがあるということを意味しています。 overflow が hidden に設定されている場合は、あふれた部分は表示されません。
</div>

<p>これはボックスの外のコンテンツです。</p>
```

```css live-sample___scroll
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow: scroll;
}
```

{{EmbedLiveSample("scroll", "", "200px")}}

上記の例では `y` 軸のスクロールバーだけがあればいいのですが、両方の軸のスクロールバーが表示されてしまいます。 `y` 軸のみをスクロールさせたいのであれば、 {{cssxref("overflow-y")}} プロパティを使用して `overflow-y: scroll` と設定することができます。

```html-nolint live-sample___scroll-y
<div class="box">
   このボックスには高さと幅が設定されています。つまり、割り当てられている高さ以内に表示しきれないほどのコンテンツがある場合、オーバーフローがあるということを意味しています。 overflow が hidden に設定されている場合は、あふれた部分は表示されません。
</div>

<p>これはボックスの外のコンテンツです。</p>
```

```css live-sample___scroll-y
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow-y: scroll;
}
```

{{EmbedLiveSample("scroll-y", "", "200px")}}

{{cssxref("overflow-x")}} を使用して、x 軸のみのスクロールバーを表示できますが、文字が見切れてしまうことの回避策としては推奨されません。小さなボックスで長い文字列を処理する場合は、{{cssxref("word-break")}} や {{cssxref("overflow-wrap")}} を検討してください。[CSS によるサイズ設定](/ja/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) で説明した方法のいくつかは、さまざまな量のコンテンツに適切に対応するボックスを作成するのに役立つ場合があります。

```html live-sample___scroll-x
<div class="word">Overflow</div>
```

```css live-sample___scroll-x
.word {
  border: 5px solid #333333;
  width: 100px;
  font-size: 250%;
  overflow-x: scroll;
}
```

{{EmbedLiveSample("scroll-x")}}

`scroll` にしておけばコンテンツが少なくても、それとは関係なくスクロールバーは常に表示されます。

> **メモ:** `overflow` プロパティでは x と y の 2 つの値を渡すことができることに注意してください。2 つのキーワードが指定されている場合、ひとつめは `overflow-x`、2 つめは `overflow-y` として適用されます。それ以外の場合は `overflow-x` と `overflow-y` の両方に同じ値が設定されます。例えば、`overflow: scroll hidden` とした場合は、`overflow-x` は `scroll`、`overflow-y` は `hidden` となります。

コンテンツがボックスに収まらない場合にのみ、スクロールバーを表示する場合は `overflow: auto` を使用します。この場合、スクロールバーを表示するかどうかはブラウザーによります。

以下の例では、ボックスに収まるまでコンテンツを削除していくとスクロールバーが消えます。スクロールバーが消えるのを確認してください。

```html-nolint live-sample___auto
<div class="box">
   このボックスには高さと幅が設定されています。つまり、割り当てられている高さ以内に表示しきれないほどのコンテンツがある場合、オーバーフローがあるということを意味しています。 overflow が hidden に設定されている場合は、あふれた部分は表示されません。
</div>

<p>これはボックスの外のコンテンツです。</p>
```

```css live-sample___auto
.box {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow: auto;
}
```

{{EmbedLiveSample("auto", "", "200px")}}

## オーバーフローとブロック整形コンテキスト

`<overflow>` の値に `scroll` または `auto` を使用すると、[**ブロック整形コンテキスト** (BFC = Block Formatting Context)](/ja/docs/Web/CSS/CSS_display/Block_formatting_context) を生成します。これは、これらの `overflow` 値を持つ要素ボックスのコンテンツが自己完結したレイアウトになることを意味しています。このような要素ボックスの外側にあるコンテンツは要素ボックスの中に入り込むことはできず、要素ボックスから周囲のレイアウトに入り込むことはできません。スクロールの使い勝手を一貫したものにするために、ボックスのコンテンツをすべて収め、重ならないようにする必要があるためです。

## ウェブデザインでの望ましくないオーバーフロー

現代のレイアウト手法（[CSS レイアウト](/ja/docs/Learn/CSS/CSS_layout) モジュールで説明）では、オーバーフローを管理します。これらの方法は、ウェブページ上にどれだけのコンテンツが存在するかについての仮定や依存関係なしに大きく機能します。

これは常にそうだったわけではありません。かつては、箱の底辺を揃えるために高さの固定されたコンテナーで作られた現場もありました。そうでなければ、これらの箱はお互いに何の関係も持たなかったかもしれません。これは脆弱でした。古いアプリケーションで、コンテンツがページ上の他のコンテンツに重なっているボックスに遭遇した場合、これでオーバーフローで発生することを認識できるでしょう。理想的には、レイアウトをリファクタリングして、修正された高さのコンテナーに頼らないようにすることです。

サイトを開発するときは、常にオーバーフローの問題に留意する必要があります。大量のコンテンツと少量のコンテンツを含むデザインをテストし、テキストのフォントサイズを大きくし、CSS が堅牢に対処できていると確認する必要があります。オーバーフローの値を変更してコンテンツを非表示にしたりスクロールバーを追加したりするのは、特別な場合（例えばスクロールが本当に必要な場合など）にのみ使うべきです。

## スキルテスト

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？次に進む前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります。[スキルテスト: オーバーフロー](/ja/docs/Learn/CSS/Building_blocks/Overflow_Tasks)を見てください。

## まとめ

この短いレッスンではオーバーフローの概念を紹介しました。CSS はあふれたコンテンツが見えなくなることによる、データ損失の回避を試みることを理解しました。潜在的なオーバーフローを管理できること、また、問題のあるオーバーフローを引き起こしてしまわないかを確認する必要があることもわかりました。

次の記事では、 CSS の中で最も一般的な[値と単位](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)を見ていきます。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}

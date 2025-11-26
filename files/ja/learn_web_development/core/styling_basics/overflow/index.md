---
title: コンテンツのオーバーフロー
short-title: オーバーフロー
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}

オーバーフロー（はみ出し）は、ボックス内にコンテンツが収まりきらないときに発生します。このガイドでは、その詳細とそれらについてどのように対処するかを学びます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基本（
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >を学んでいること）、<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS の値と単位</a>、<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Sizing">CSS におけるサイズ設定<a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>オーバーフローとは何かを理解すること。</li>
          <li><code>overflow</code> プロパティによるオーバーフローの制御</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## オーバーフローとは

CSS のすべてがボックスであり、 {{cssxref("width")}} と {{cssxref("height")}} の値を与えることにより、これらのボックスのサイズを制御できることを見てきました。**オーバーフローはボックス内のコンテンツが多すぎる場合に発生します。** CSS はこのオーバーフローを管理するためのさまざまなツールを提供しています。今後、CSS のレイアウトを使用して CSS を書いていると、オーバーフローによく出くわすようになるでしょう。

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

## overflow プロパティ

{{cssxref("overflow")}} プロパティは、要素のコンテンツのはみ出しを管理するのに役立ちます。このプロパティを使用すると、はみ出したコンテンツをどのように処理すべきかをブラウザーに伝えることができます。 [`<overflow>`](/ja/docs/Web/CSS/Reference/Values/overflow_value) の値型の既定値は `visible` です。この既定の設定、コンテンツがオーバーフローしたときに、そのコンテンツを見ることができます。

### オーバーフローするコンテンツを隠す

オーバーフローしたコンテンツを隠したい場合、 `overflow: hidden` をボックスに指定します。これは文字通り、はみ出たものを見えなくします。これにより内容が隠れてしまうことが起こりうるため、コンテンツが非表示になっても問題にならない場合にのみに限定した方がいいでしょう。

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

### オーバーフローするコンテンツをスクロールする

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

{{cssxref("overflow-x")}} を使用して、x 軸のみのスクロールバーを表示できますが、文字が見切れてしまうことの回避策としては推奨されません。小さなボックスで長い文字列を処理する場合は、{{cssxref("word-break")}} や {{cssxref("overflow-wrap")}} を検討してください。[CSS によるサイズ設定](/ja/docs/Learn_web_development/Core/Styling_basics/Sizing) で説明した方法のいくつかは、さまざまな量のコンテンツに適切に対応するボックスを作成するのに役立つ場合があります。

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

> [!NOTE]
> `overflow` プロパティでは x 軸と y 軸の 2 つの値を渡すことができることに注意してください。2 つのキーワードが指定されている場合、ひとつめは `overflow-x`、2 つめは `overflow-y` として適用されます。それ以外の場合は `overflow-x` と `overflow-y` の両方に同じ値が設定されます。例えば、`overflow: scroll hidden` とした場合は、`overflow-x` は `scroll`、`overflow-y` は `hidden` となります。

### スクロールバーを必要な場合だけ表示する

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

## ウェブデザインでの望ましくないオーバーフロー

現代のレイアウト手法（[CSS レイアウト](/ja/docs/Learn_web_development/Core/CSS_layout) モジュールで説明）では、オーバーフローを管理します。これらの方法は、ウェブページ上にどれだけのコンテンツが存在するかについての仮定や依存関係なしに大きく機能します。

これは常にそうだったわけではありません。かつては、箱の底辺を揃えるために高さの固定されたコンテナーで作られた現場もありました。そうでなければ、これらの箱はお互いに何の関係も持たなかったかもしれません。これは脆弱でした。古いアプリケーションで、コンテンツがページ上の他のコンテンツに重なっているボックスに遭遇した場合、これでオーバーフローで発生することを認識できるでしょう。理想的には、レイアウトをリファクタリングして、修正された高さのコンテナーに頼らないようにすることです。

サイトを開発するときは、常にオーバーフローの問題に留意する必要があります。大量のコンテンツと少量のコンテンツを含むデザインをテストし、テキストのフォントサイズを大きくし、CSS が堅牢に対処できていると確認する必要があります。オーバーフローの値を変更してコンテンツを非表示にしたりスクロールバーを追加したりするのは、特別な場合（例えばスクロールが本当に必要な場合など）にのみ使うべきです。

## スキルテスト

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？次に進む前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります。[スキルテスト: オーバーフロー](/ja/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow)を見てください。

## まとめ

このレッスンでは、オーバーフローの概念を紹介しました。CSS はあふれたコンテンツが見えなくなることによる、データ損失の回避を試みることを理解しました。潜在的なオーバーフローを管理できること、また、問題のあるオーバーフローを引き起こしてしまわないかを確認する必要があることもわかりました。

次の記事では、画像やフォーム要素など、特別なページ機能のスタイル設定を処理する方法を見ていきます。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}

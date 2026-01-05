---
title: コンテンツのオーバーフロー
short-title: オーバーフロー
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}

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

最初の例では、`height` の設定により制限されたボックスが特徴的です。ボックスのコンテンツが利用できる空間を超えているため、コンテンツはボックスからはみ出し、下の段落にかぶさってしまいます。

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

2 つ目の例は、ボックス内の単語に注目してください。ボックスは単語が収まらないほど小さいため、ボックスからはみ出てしまいます。

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

可能な限り、CSS はコンテンツを非表示にしません。これはデータ損失を引き起こすためです。データ損失の問題点は、あなたやウェブサイトの訪問者が気づかない可能性があることです。例えば、フォームの送信ボタンが隠れてしまい、誰もフォームを完成させられなくなると、これは大きな問題になり得ます。代わりに、CSS は可視的な方法でオーバーフローします。これにより、問題があることに気づきやすくなります。最悪の場合でも、サイト訪問者がコンテンツが重なっていることを知らせてくれるでしょう。

ボックスを `width` や `height` で制限する場合、 CSS はあなたが何をしているか分かっていると信じています。 CSS は、あなたがオーバーフローの可能性を管理していることを想定しています。一般に、ブロックの寸法を制限することは、ボックスにテキストが格納されている場合に問題となります。サイトの設計時に想定していたよりもテキストが多かったり、テキストが大きかったりする場合があります（例えば、ユーザーがフォントサイズを大きくしている場合など）。

## overflow プロパティ

{{cssxref("overflow")}} プロパティは、ブラウザがオーバーフローするコンテンツをどのように処理すべきかを指定することができます。{{cssxref("&lt;overflow&gt;")}} 値型のデフォルト値は `visible` です。このデフォルト設定では、コンテンツがオーバーフローしても見ることが可能です。

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

上記の例を編集して、`overflow` の値を `visible` に設定し、それからまた `hidden` に戻して、 どんな効果があるのか見てみましょう。

### オーバーフローするコンテンツをスクロールする

代わりに、ユーザーがコンテンツをスクロールしてすべてを閲覧することができるようにしたいのではないでしょうか？ あふれたコンテンツに `overflow: scroll` を設定すると、スクロールバーが表示可能なブラウザーでは、たとえあふれるほどのコンテンツがなくても、常にスクロールバーを表示させます。これにより、コンテナー内のコンテンツの量に応じてスクロールバーが現れたり消えたりする代わりに、レイアウトを一定に保つことができるという利点があります。

実際に見てみましょう。次の例を編集して、`box` の `<div>` 内のコンテンツを一部削除するよう編集してみてください。スクロールする必要がある場合であっても、スクロールバーが残っていることに注意してください。

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

> [!NOTE]
> スクロールバーの見え方は、オペレーティングシステムによって異なります。
> 次の例でスクロールバーを常に表示させるためには、ブラウザー設定を常にスクロールバーを表示するように変更する必要があるかもしれません。

上記の例では `y` 軸のスクロールバーだけがあればいいのですが、両方の軸のスクロールバーが表示されてしまいます。 `y` 軸のみをスクロールさせたいのであれば、 {{cssxref("overflow-y")}} プロパティを使用して `overflow-y: scroll` と設定することができます。

{{cssxref("overflow-x")}} を使用して、x 軸のみのスクロールバーを表示できますが、文字が見切れてしまうことの回避策としては推奨されません。小さなボックスで長い文字列を処理する場合は、{{cssxref("word-break")}} や {{cssxref("overflow-wrap")}} プロパティを検討してください。[CSS によるサイズ設定](/ja/docs/Learn_web_development/Core/Styling_basics/Sizing) で説明した方法のいくつかは、さまざまな量のコンテンツに適切に対応するボックスを作成するのに役立つ場合があります。

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

これは常にそうだったわけではありません。かつては、箱の底辺を揃えるために高さの固定されたコンテナーで作られた現場もありました。そうでなければ、これらの箱はお互いに何の関係も持たなかったかもしれません。これは脆弱でした。古いコンテンツが他のコンテンツと重なっているボックスに遭遇した場合、その発生がオーバーフローである可能性が高いと認識できます。理想的には、固定高さのコンテナーに依存しないようレイアウトを再構築するといいでしょう。

サイトを開発するときは、常にオーバーフローの問題に留意する必要があります。大量のコンテンツと少量のコンテンツを含むデザインをテストし、テキストのフォントサイズを大きくし、CSS が堅牢に対処できていると確認する必要があります。オーバーフローの値を変更してコンテンツを非表示にしたりスクロールバーを追加したりするのは、特別な場合（例えばスクロールが本当に必要な場合など）にのみ使うべきです。

## まとめ

このレッスンでは、オーバーフローの概念を紹介しました。CSS はあふれたコンテンツが見えなくなることによる、データ損失の回避を試みることを理解しました。潜在的なオーバーフローを管理できること、また、問題のあるオーバーフローを引き起こしてしまわないかを確認する必要があることもわかりました。

次の記事では、オーバーフローに関する情報を理解し、定着したかどうかを調べるために使用できる検査をいくつか提供します。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}

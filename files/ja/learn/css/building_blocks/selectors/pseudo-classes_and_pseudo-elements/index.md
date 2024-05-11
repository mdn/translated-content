---
title: 擬似クラスと擬似要素
slug: Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}

次に見ていくセレクターの集合は、**擬似クラス**と**擬似要素**と呼ばれるものです。これらのセレクターは多数あり、かなり特有の用途に使われることが多いです。これらがどのように動作するのかがわかれば、一覧を見て、達成しようとしている作業にとってうまくいくものがあるかどうかを確認することができます。ブラウザーの対応については、繰り返しになりますが、セレクターの MDN ページが参考になります。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >基本的なソフトウェアのインストール</a
        >、<a
          href="/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >ファイルの操作</a
        >に関する基本的な知識、 HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 入門</a
        >を学んでください）、 CSS の動作に関する知識（<a href="/ja/docs/Learn/CSS/First_steps">CSS 第一歩</a>を学んでください）。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>擬似クラスおよび擬似要素セレクターについて学習すること。</td>
    </tr>
  </tbody>
</table>

## 擬似クラスとは何か

擬似クラスは、特定の状態にある要素を選択するセレクターです。例えば、その型の最初の要素であるとか、ポインターを当てた状態であるなどです。擬似クラスは、あたかも文書内の一部にクラスを適用したかのように動作する傾向があり、マークアップ内の余分なクラスを削減することを支援していただくことが多く、より柔軟で保守性の高いコードを提供します。

擬似クラスはコロンで始まるキーワードです。例えば `:hover` は擬似クラスです。

### 単純な擬似クラスの例

簡単な例を見てみましょう。以下の最初の例に示すように、記事の最初の段落を大きく太字にしたい場合は、その段落にクラスを追加してから、そのクラスに CSS を追加できます。

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child.html", '100%', 800)}}

しかし、これでは保守が面倒になります。文書の先頭に新しい段落が追加されたらどうでしょう？新しい段落にクラスを移さなければなりません。クラスを追加する代わりに、 {{cssxref(":first-child")}} 擬似クラスセレクターを使用することができます。これは常に記事の最初の子要素を対象としますので、 HTML を編集する必要がなくなります（これは、CMS によって生成された可能性があるため、とにかく常に可能であるとは限りません）。

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child2.html", '100%', 700)}}

すべての擬似クラスは、この同じ方法で動作します。特定の状態にある文書の一部を対象にして、 HTML にクラスを追加したかのように動作します。 MDN の他の例をいくつか見てみましょう。

- [`:last-child`](/ja/docs/Web/CSS/:last-child)
- [`:only-child`](/ja/docs/Web/CSS/:only-child)
- [`:invalid`](/ja/docs/Web/CSS/:invalid)

> **メモ:** 擬似クラスや要素の前に要素セレクターを書かずに書くことは有効です。この例では、 `:first-child` と書けば、段落の最初の子要素だけでなく、 `<article>` 要素の最初の子要素であるすべての要素に適用されます。 `:first-child` は `*:first-child` と等価だからです。しかし、通常は複数の要素を制御したいので、より詳細度を上げる必要があります。

### ユーザー操作擬似クラス

一部の擬似クラスは、ユーザーが何らかの方法で文書を操作したときにのみ適用されます。これらの**ユーザー操作の**擬似クラスは、**動的擬似クラス**と呼ばれることもあり、ユーザーが要素を操作したときに、要素にクラスが追加されたかのように動作します。例は次のとおりです。

- [`:hover`](/ja/docs/Web/CSS/:hover) — 前述の通りです。これは、ユーザーが要素（通常はリンク）の上にポインターを載せた場合にのみ適用されます。
- [`:focus`](/ja/docs/Web/CSS/:focus) — ユーザーがキーボードコントロールを使用して要素にフォーカスした場合にのみ適用されます。

{{EmbedGHLiveSample("css-examples/learn/selectors/hover.html", '100%', 500)}}

## 擬似要素とは何か

擬似要素は同様に動作しますが、既存の要素にクラスを適用するのではなく、まったく新しい HTML 要素をマークアップに追加したかのように動作します。

擬似要素はダブルコロン `::` で始まります。擬似要素の例は `::before` です。

> **メモ:** 一部の初期の擬似要素では、単一のコロン構文が使用されていたため、コードまたは例でこれを見ることがあるでしょう。最新のブラウザーは、後方互換性のためにシングルまたはダブルコロン構文で初期の擬似要素に対応しています。

たとえば、段落の最初の行を選択する場合は、それを `<span>` 要素にラップして要素セレクターを使用できます。ただし、ラップした単語の数が親要素の幅よりも長いまたは短い場合は、失敗します。1 行にいくつの単語が収まるかわからない傾向があるため（画面の幅やフォントサイズが変わると、単語数が変わるため）、HTML を追加してこれを確実に行うことは不可能です。

`::first-line` 擬似要素セレクターは確実にあなたのためにこれを行います-それはまだ最初の行のみを選択します言葉の数が増加した場合と減少します。

{{EmbedGHLiveSample("css-examples/learn/selectors/first-line.html", '100%', 800)}}

それはまるで最初の整形された行を `<span>` で魔法のように包み、行の長さが変更されるたびに更新されるかのように動作します。

これにより、両方の段落の最初の行が選択されていることがわかります。

## 擬似クラスと擬似要素を組み合わせる

最初の段落の最初の行を太字にしたい場合は、 `:first-child` および `::first-line` セレクターを連結することができます。前のライブ例を編集して、次の CSS を使用するようにしてください。 `<article>` 要素内にある最初の `<p>` 要素の最初の行を選択したいということです。

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## ::before および ::after を使用したコンテンツの生成

CSS を使用してコンテンツを文書に挿入するための [`content`](/ja/docs/Web/CSS/content) プロパティと共に使用される特別な擬似要素がいくつかあります。

以下のライブ例のように、これらを使用してテキストの文字列を挿入できます。{{cssxref("content")}} プロパティのテキスト値を変更してみて、出力でそれを確認してください。 `::before` 擬似要素を `::after` に変更して、要素の最初ではなく最後に挿入されたテキストを表示することもできます。

{{EmbedGHLiveSample("css-examples/learn/selectors/before.html", '100%', 400)}}

CSS からテキストを挿入することは、ウェブ上で実に多く使用することではありません。なぜなら、そのテキストはスクリーンリーダーによってはアクセスできず、将来誰かが見つけて編集するのが難しくなるからです。

これらの擬似要素のより有効な使用法は、アイコンを挿入することです。たとえば、以下の例で追加された小さな矢印は、スクリーンリーダーで読みたくない視覚的なインジケーターです。

{{EmbedGHLiveSample("css-examples/learn/selectors/after-icon.html", '100%', 400)}}

これらの擬似要素は、空の文字列を挿入するためにも頻繁に使用され、ページ上の要素と同じようにスタイルを設定できます。

次の例では、 `::before` 擬似要素を使用して空の文字列を追加しています。幅と高さでスタイルを設定できるように、これを `display: block` に設定しました。次に、CSS を使用して、他の要素と同じようにスタイルを設定します。CSS をいじって、CSS の外観と動作を変更できます。

{{EmbedGHLiveSample("css-examples/learn/selectors/before-styled.html", '100%', 500)}}

`::before` と `::after` 擬似要素を `content` プロパティとともに使用することは、CSS では「生成コンテンツ」と呼ばれ、この手法がさまざまなタスクに使用されているのをよく目にします。良い例は、 [CSS Arrow Please](http://www.cssarrowplease.com/) のサイトで、 [CSS で矢印](http://www.cssarrowplease.com/)を生成するのに役立てています。矢印を作成するときの CSS を見ると、 {{cssxref("::before")}} および {{cssxref("::after")}} 擬似要素が使用されていることがわかります。これらのセレクターが表示されたら、{{cssxref("content")}} プロパティを見て、文書に何が追加されているかを確認してください。

## まとめ

この記事では、特殊な種類のセレクターである CSS 擬似クラスと擬似要素を紹介しました。

擬似クラスを使用すると、要素が特定の状態にあるときに、その状態のクラスを DOM に追加したかのように、その要素を対象とすることができます。擬似要素は、あたかも DOM に新しい要素を追加したかのように動作し、その要素をスタイル設定することができます。擬似要素の `::before` と `::after` では、 CSS を使用して文書内のコンテンツを挿入することができます。

次の記事では、[結合子](/ja/docs/Learn/CSS/Building_blocks/Selectors/Combinators)について学びます。

## 関連情報

- [擬似クラスリファレンス](/ja/docs/Web/CSS/Pseudo-classes)
- [擬似要素リファレンス](/ja/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}

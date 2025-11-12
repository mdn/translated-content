---
title: 擬似クラスと擬似要素
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

次に見ていく一連のセレクターは、**擬似クラス**および**擬似要素**と呼ばれるものです。これらのセレクターは多数あり、かなり特有の用途に使われることが多いです。それらの使用方法を理解したら、さまざまな種類を見ていき、自分が実現しようと取り組んでいる課題にうまくいくものがあるかどうかを確認しましょう。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基本（
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >を学んでいること）、<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">基本的な CSS セレクター<a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>擬似クラスと擬似要素。</li>
          <li>2 つの違い。</li>
          <li>擬似クラスと擬似要素の組み合わせ。</li>
          <li>生成コンテンツ。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 擬似クラスとは何か

擬似クラスは、特定の状態にある要素を選択するセレクターです。例えば、その型の最初の要素であるとか、ポインターを当てた状態であるなどです。擬似クラスは、あたかも文書内の一部にクラスを適用したかのように動作する傾向があり、マークアップ内の余分なクラスを削減することを支援していただくことが多く、より柔軟で保守性の高いコードを提供します。

擬似クラスはコロンで始まるキーワードです。例えば `:hover` は擬似クラスです。

### 単純な擬似クラスの例

簡単な例を見てみましょう。以下の最初の例に示すように、記事の最初の段落を大きく太字にしたい場合は、その段落にクラスを追加してから、そのクラスに CSS を追加できます。

```html live-sample___first-child
<article>
  <p class="first">
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</article>
```

```css live-sample___first-child
.first {
  font-size: 120%;
  font-weight: bold;
}
```

{{EmbedLiveSample("first-child")}}

しかし、これでは保守が面倒になります。文書の先頭に新しい段落が追加されたらどうでしょう？新しい段落にクラスを移さなければなりません。クラスを追加する代わりに、 {{cssxref(":first-child")}} 擬似クラスセレクターを使用することができます。これは常に記事の最初の子要素を対象としますので、 HTML を編集する必要がなくなります（これは、CMS によって生成された可能性があるため、とにかく常に可能であるとは限りません）。

```html live-sample___first-child2
<article>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</article>
```

```css live-sample___first-child2
article p:first-child {
  font-size: 120%;
  font-weight: bold;
}
```

{{EmbedLiveSample("first-child2")}}

すべての擬似クラスは、この同じ方法で動作します。特定の状態にある文書の一部を対象にして、 HTML にクラスを追加したかのように動作します。 MDN の他の例をいくつか見てみましょう。

- [`:last-child`](/ja/docs/Web/CSS/Reference/Selectors/:last-child)
- [`:only-child`](/ja/docs/Web/CSS/Reference/Selectors/:only-child)
- [`:invalid`](/ja/docs/Web/CSS/Reference/Selectors/:invalid)

> [!NOTE]
> 擬似クラスや要素の前に要素セレクターを書かずに書くことは有効です。この例では、 `:first-child` と書けば、段落の最初の子要素だけでなく、 `<article>` 要素の最初の子要素であるすべての要素に適用されます。 `:first-child` は `*:first-child` と等価だからです。しかし、通常は複数の要素を制御したいので、より詳細度を上げる必要があります。

### ユーザー操作擬似クラス

一部の擬似クラスは、ユーザーが何らかの方法で文書を操作したときにのみ適用されます。これらの**ユーザー操作の**擬似クラスは、**動的擬似クラス**と呼ばれることもあり、ユーザーが要素を操作したときに、要素にクラスが追加されたかのように動作します。例は次のとおりです。

- [`:hover`](/ja/docs/Web/CSS/Reference/Selectors/:hover) — 前述の通りです。これは、ユーザーが要素（通常はリンク）の上にポインターを載せた場合にのみ適用されます。
- [`:focus`](/ja/docs/Web/CSS/Reference/Selectors/:focus) — ユーザーがキーボードコントロールを使用して要素にフォーカスした場合にのみ適用されます。

```html live-sample___hover
<p><a href="">ここにカーソルを当ててください</a></p>
```

```css live-sample___hover
a:link,
a:visited {
  color: rebeccapurple;
  font-weight: bold;
}

a:hover {
  color: hotpink;
}
```

{{EmbedLiveSample("hover")}}

## 擬似要素とは何か

擬似要素は同様に動作しますが、既存の要素にクラスを適用するのではなく、まったく新しい HTML 要素をマークアップに追加したかのように動作します。

擬似要素はダブルコロン `::` で始まります。擬似要素の例は `::before` です。

> [!NOTE]
> 一部の初期の擬似要素では、単一のコロン構文が使用されていたため、コードまたは例でこれを見ることがあるでしょう。最新のブラウザーは、後方互換性のためにシングルまたはダブルコロン構文で初期の擬似要素に対応しています。

たとえば、段落の最初の行を選択する場合は、それを `<span>` 要素にラップして要素セレクターを使用できます。ただし、ラップした単語の数が親要素の幅よりも長いまたは短い場合は、失敗します。1 行にいくつの単語が収まるかわからない傾向があるため（画面の幅やフォントサイズが変わると、単語数が変わるため）、HTML を追加してこれを確実に行うことは不可能です。

`::first-line` 擬似要素セレクターは確実にあなたのためにこれを行います-それはまだ最初の行のみを選択します言葉の数が増加した場合と減少します。

```html live-sample___first-line
<article>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</article>
```

```css live-sample___first-line
article p::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

{{EmbedLiveSample("first-line")}}

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

CSS を使用してコンテンツを文書に挿入するための [`content`](/ja/docs/Web/CSS/Reference/Properties/content) プロパティと共に使用される特別な擬似要素がいくつかあります。

以下のライブ例のように、これらを使用してテキストの文字列を挿入できます。{{cssxref("content")}} プロパティのテキスト値を変更してみて、出力でそれを確認してください。 `::before` 擬似要素を `::after` に変更して、要素の最初ではなく最後に挿入されたテキストを表示することもできます。

```html live-sample___before
<p class="box">この HTML ページ内のボックスのコンテンツ</p>
```

```css live-sample___before
.box::before {
  content: "これは他のコンテンツの前に表示されます。";
}
```

{{EmbedLiveSample("before")}}

CSS からテキストを挿入することは、ウェブ上で実に多く使用することではありません。なぜなら、そのテキストはスクリーンリーダーによってはアクセスできず、将来誰かが見つけて編集するのが難しくなるからです。

これらの擬似要素のより有効な使用法は、アイコンを挿入することです。たとえば、以下の例で追加された小さな矢印は、スクリーンリーダーで読みたくない視覚的なインジケーターです。

```html live-sample___after-icon
<p class="box">この HTML ページ内のボックスのコンテンツ</p>
```

```css live-sample___after-icon
.box::after {
  content: " ➥";
}
```

{{EmbedLiveSample("after-icon")}}

これらの擬似要素は、空の文字列を挿入するためにも頻繁に使用され、ページ上の要素と同じようにスタイルを設定できます。

次の例では、 `::before` 擬似要素を使用して空の文字列を追加しています。幅と高さでスタイルを設定できるように、これを `display: block` に設定しました。次に、CSS を使用して、他の要素と同じようにスタイルを設定します。CSS をいじって、CSS の外観と動作を変更できます。

```html live-sample___before-styled
<p class="box">この HTML ページ内のボックスのコンテンツ</p>
```

```css live-sample___before-styled
.box::before {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  border: 1px solid black;
}
```

{{EmbedLiveSample("before-styled", "", "160")}}

`::before` と `::after` 擬似要素を `content` プロパティとともに使用することは、CSS では「生成コンテンツ」と呼ばれ、この手法がさまざまなタスクに使用されているのをよく目にします。良い例は、 [CSS Arrow Please](http://cssarrowplease.com/) のサイトで、矢印を生成するのに役立てています。矢印を作成するときの CSS を見ると、 {{cssxref("::before")}} および {{cssxref("::after")}} 擬似要素が使用されていることがわかります。これらのセレクターが表示されたら、{{cssxref("content")}} プロパティを見て、文書に何が追加されているかを確認してください。

## まとめ

この記事では、特殊な種類のセレクターである CSS 擬似クラスと擬似要素を紹介しました。

擬似クラスを使用すると、要素が特定の状態にあるときに、その状態のクラスを DOM に追加したかのように、その要素を対象とすることができます。擬似要素は、あたかも DOM に新しい要素を追加したかのように動作し、その要素をスタイル設定することができます。擬似要素の `::before` と `::after` では、 CSS を使用して文書内のコンテンツを挿入することができます。

次の記事では、結合子について学びます。

## 関連情報

- [擬似クラスリファレンス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [擬似要素リファレンス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

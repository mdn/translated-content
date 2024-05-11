---
title: 結合子
slug: Learn/CSS/Building_blocks/Selectors/Combinators
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks")}}

ここで取り上げる最後のセレクターは、他のセレクターと、ドキュメント内のコンテンツの場所や場所との有用な関係を提供する方法で組み合わせるため、結合子と呼ばれます。

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
          >ファイルの扱い</a
        >、の基本知識、 HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 入門</a
        >で学習）および CSS の動作が分かっていること（<a href="/ja/docs/Learn/CSS/First_steps">CSS の第一歩</a>で学習）
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        CSS で使用できるさまざまな結合子セレクターについて学ぶ。
        CSS.
      </td>
    </tr>
  </tbody>
</table>

## 子孫結合子

**子孫結合子** (descendant combinator) は、通常は単一のスペース（" "）文字で表され、2 つのセレクターを結合して、最初のセレクターと一致する祖先（親、親の親、親の親の親など）要素がある場合、 2 番目のセレクターと一致する要素が選択されるようにします。 子孫結合子を利用するセレクターは、子孫セレクターと呼ばれます。

```css
body article p
```

以下の例は、 `.box` クラスのついた要素の内部にある `<p>` 要素のみに一致します。

{{EmbedGHLiveSample("css-examples/learn/selectors/descendant.html", '100%', 500)}}

## 子結合子

**子結合子** (child combinator, `>`) は 2 つの CSS セレクターの間に配置されます。 2 つ目のセレクターで一致した要素のうち、最初のセレクターで一致した要素の直接の子要素にのみ一致します。さらに下の階層の要素には一致しません。例えば、 `<article>` 要素の直接の子である `<p>` 要素のみを選択するためには、次のようにします。

```css
article > p
```

次の例では、順序付けられていないリストがあり、その中にネストされているのは別の順序付けられていないリストです。子コンビネータを使用して、`<ul>` の直接の子である `<li>` 要素のみを選択し、上部の境界線を設定しています。

これを子結合子として指定している `>` を削除すると、子孫セレクターになり、すべての `<li>` 要素に赤い境界線が表示されます。

{{EmbedGHLiveSample("css-examples/learn/selectors/child.html", '100%', 600)}}

## 次兄弟結合子

**次兄弟結合子** (next-sibling combinator, `+`) は 2 つの CSS セレクターの間に配置されます。2つ目のセレクターに一致する要素のうち、最初のセレクターの次の兄弟要素で あるものだけに一致します。例えば、`<p>` 要素の直後に来るすべての `<img>` 要素を選択するためには、次のようにします。

```css
p + img
```

一般的な用途としては、次の例のように見出しに続く段落に何かをすることです。この例では、 `<h1>` と親要素を共有し、その `<h1>` の直後に続く段落を探します。

もし `<h1>` と `<p>` の間に `<h2>` のような他の要素を挿入すると、段落はセレクターに一致しなくなり、要素が隣接しているときに適用される背景色と前景色が適用されなくなります。

<!-- This example lives https://github.com/mdn/css-examples/blob/main/learn/selectors/adjacent.html -->

{{EmbedGHLiveSample("css-examples/learn/selectors/adjacent.html", '100%', 800)}}

## 後続兄弟結合子

要素が直接隣接していなくても、その要素の兄弟を選択したい場合は、**後続兄弟結合子** (subsequent-sibling combinator, `~`) を使うことができます。 `<p>` 要素の後のどこかに来る `<img>` 要素をすべて選択するには、次のようにします。

```css
p ~ img
```

以下の例では、`<h1>` の後に続くすべての `<p>` 要素を選択しています。また、ドキュメントに `<div>` がある場合でも、その後にある `<p>` が選択されています。

<!-- This example lives https://github.com/mdn/css-examples/blob/main/learn/selectors/general.html -->

{{EmbedGHLiveSample("css-examples/learn/selectors/general.html", '100%', 600)}}

## 入れ子による複雑なセレクターの作成

[CSS 入れ子モジュール](/ja/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#結合子)により、結合子を使って[複雑なセレクター](/ja/docs/Web/CSS/CSS_selectors/Selector_structure#複雑なセレクター)を作るルールを書くことができます。

```css
p {
  ~ img {
  }
}
/* ブラウザーは次のように解釈します。 */
p ~ img {
}
```

[`&` 入れ子セレクター](/ja/docs/Web/CSS/Nesting_selector)も、複合セレクターを作成するために使用されることがあります。

```css
p {
  & img {
  }
}
/* ブラウザーは次のように解釈します。 */
p img {
}
```

<!-- This example lives https://github.com/mdn/css-examples/blob/main/learn/selectors/nesting.html -->

{{EmbedGHLiveSample("css-examples/learn/selectors/nesting.html", '100%', 800)}}

> **メモ:** 上の例では、 `&` 入れ子セレクターは必須ではありませんが、これを追加することで、CSSの入れ子が使用されていることを明示的に示すことができます。

## 結合子の使用

前回学んだセレクターを結合子と組み合わせることで、文書内の一部を選択することができます。例えば、 `<ul>` の直接の子であるクラスが "a" のリストアイテムを選択するには、次の例のようにします。

```css
ul > li[class="a"] {
}
```

しかし、文書の特定の部分を選択するセレクターの大きなリストを作成するときには注意してください。マークアップ内の要素の位置にとても固有のセレクターを作成したため、 CSS ルールを再利用することが難しくなります。

単純なクラスを作成し、それを対象の要素に適用する方が多いでしょう。とはいえ、結合子の知識は、文書内の何かをスタイル設定する必要があるときに、おそらく {{Glossary("CMS")}} によって生成された HTML にアクセスすることができない場合に、とても有益なものになるでしょう。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Selectors_Tasks)を参照してください。

## まとめ

セレクターの学習はこの章で終わりです。次は、 CSS のもう一つの重要な部分である[カスケード、詳細度、継承](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)に進みます。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks")}}

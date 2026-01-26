---
title: 結合子
slug: Learn_web_development/Core/Styling_basics/Combinators
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

ここで取り上げる最後のセレクターは、他のセレクターと、ドキュメント内のコンテンツの場所や場所との有用な関係を提供する方法で組み合わせるため、結合子と呼ばれます。

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
          <li>結合氏の基本概念。</li>
          <li>子孫結合子と子結合子。</li>
          <li>次兄弟結合子と後続兄弟結合子。</li>
          <li>入れ子。</li>
          <li>結合子とセレクターの組み合わせ。</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## 子孫結合子

**子孫結合子** (descendant combinator) は、通常は単一のスペース（<code> </code>）文字で表され、2 つのセレクターを結合して、最初のセレクターと一致する祖先（親、親の親、親の親の親など）要素がある場合、 2 番目のセレクターと一致する要素が選択されるようにします。 子孫結合子を利用するセレクターは、子孫セレクターと呼ばれます。

```css
body article p {
}
```

以下の例は、 `.box` クラスのついた要素の内部にある `<p>` 要素のみに一致します。

```html live-sample___descendant
<div class="box"><p>.box の中のテキスト</p></div>
<p>.box の外のテキスト</p>
```

```css live-sample___descendant
.box p {
  color: red;
}
```

{{EmbedLiveSample("descendant")}}

## 子結合子

**子結合子** (child combinator, `>`) は 2 つの CSS セレクターの間に配置されます。 2 つ目のセレクターで一致した要素のうち、最初のセレクターで一致した要素の直接の子要素にのみ一致します。さらに下の階層の要素には一致しません。例えば、 `<article>` 要素の直接の子である `<p>` 要素のみを選択するためには、次のようにします。

```css
article > p
```

次の例では、順序付けられていないリストがあり、その中にネストされているのは別の順序付けられていないリストです。子コンビネータを使用して、`<ul>` の直接の子である `<li>` 要素のみを選択し、上部の境界線を設定しています。

これを子結合子として指定している `>` を削除すると、子孫セレクターになり、すべての `<li>` 要素に赤い境界線が表示されます。

```html live-sample___child
<ul>
  <li>順序なしアイテム</li>
  <li>
    順序なしアイテム
    <ol>
      <li>アイテム 1</li>
      <li>アイテム 2</li>
    </ol>
  </li>
</ul>
```

```css live-sample___child
ul > li {
  border-top: 5px solid red;
}
```

{{EmbedLiveSample("child")}}

## 次兄弟結合子

**次兄弟結合子** (next-sibling combinator, `+`) は 2 つの CSS セレクターの間に配置されます。2つ目のセレクターに一致する要素のうち、最初のセレクターの次の兄弟要素で あるものだけに一致します。例えば、`<p>` 要素の直後に来るすべての `<img>` 要素を選択するためには、次のようにします。

```css
p + img
```

一般的な用途としては、次の例のように見出しに続く段落に何かをすることです。この例では、 `<h1>` と親要素を共有し、その `<h1>` の直後に続く段落を探します。

もし `<h1>` と `<p>` の間に `<h2>` のような他の要素を挿入すると、段落はセレクターに一致しなくなり、要素が隣接しているときに適用される背景色と前景色が適用されなくなります。

```html live-sample___adjacent
<article>
  <h1>見出し</h1>
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

```css live-sample___adjacent
body {
  font-family: sans-serif;
}

h1 + p {
  font-weight: bold;
  background-color: #333;
  color: #fff;
  padding: 0.5em;
}
```

{{EmbedLiveSample("adjacent", "", "220px")}}

## 後続兄弟結合子

要素が直接隣接していなくても、その要素の兄弟を選択したい場合は、**後続兄弟結合子** (subsequent-sibling combinator, `~`) を使うことができます。 `<p>` 要素の後のどこかに来る `<img>` 要素をすべて選択するには、次のようにします。

```css
p ~ img
```

以下の例では、`<h1>` の後に続くすべての `<p>` 要素を選択しています。また、ドキュメントに `<div>` がある場合でも、その後にある `<p>` が選択されています。

```html live-sample___general
<article>
  <h1>見出し</h1>
  <p>これは段落です。</p>
  <div>これは div です</div>
  <p>これは他の段落です。</p>
</article>
```

```css live-sample___general
body {
  font-family: sans-serif;
}

h1 ~ p {
  font-weight: bold;
  background-color: #333;
  color: #fff;
  padding: 0.5em;
}
```

{{EmbedLiveSample("general", "", "220px")}}

## 入れ子による複雑なセレクターの作成

[CSS 入れ子モジュール](/ja/docs/Web/CSS/Guides/Nesting/Using#結合子)により、結合子を使って[複雑なセレクター](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#複雑なセレクター)を作るルールを書くことができます。

```css
p {
  ~ img {
  }
}
/* ブラウザーは次のように解釈します。 */
p ~ img {
}
```

[`&` 入れ子セレクター](/ja/docs/Web/CSS/Reference/Selectors/Nesting_selector)も、複雑なセレクターを作成するために使用されることがあります。

```css
p {
  & img {
  }
}
/* ブラウザーは次のように解釈します。 */
p img {
}
```

複雑なセレクターの例を以下に示します。

```html live-sample___nesting
<article>
  <h1>見出し</h1>
  <p>これは段落です。</p>
  <div>これは div です</div>
  <p>これは他の段落です。</p>
</article>
```

```css live-sample___nesting
body {
  font-family: sans-serif;
}

h1 {
  & ~ p {
    /* this is parsed by the browser as h1 ~ p */
    font-weight: bold;
    background-color: #333;
    color: #fff;
    padding: 0.5em;
  }
}
```

{{EmbedLiveSample("nesting", "", "220px")}}

> [!NOTE]
> 上の例では、 `&` 入れ子セレクターは必須ではありませんが、これを追加することで、CSSの入れ子が使用されていることを明示的に示すことができます。

## 結合子の使用

前回学んだセレクターを結合子と組み合わせることで、文書内の一部を選択することができます。例えば、 `<ul>` の直接の子であるクラスが "a" のリストアイテムを選択するには、次の例のようにします。

```css
ul > li[class="a"] {
}
```

しかし、文書の特定の部分を選択するセレクターの大きなリストを作成するときには注意してください。マークアップ内の要素の位置にとても固有のセレクターを作成したため、 CSS ルールを再利用することが難しくなります。

単純なクラスを作成し、それを対象の要素に適用する方が多いでしょう。とはいえ、結合子の知識は、文書内の何かをスタイル設定する必要があるときに、おそらく {{Glossary("CMS")}} によって生成された HTML にアクセスすることができない場合に、とても有益なものになるでしょう。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors)を参照してください。

## まとめ

セレクターの学習は以上です。次は、 CSS のもう一つの重要な部分であるボックスモデルに進みます。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

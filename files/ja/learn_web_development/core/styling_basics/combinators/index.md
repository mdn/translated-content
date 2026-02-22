---
title: 結合子
slug: Learn_web_development/Core/Styling_basics/Combinators
l10n:
  sourceCommit: 57bc2729e3963907c0b54158ae1a31318a2ebbd1
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics")}}

最後に見ていくセレクターは、結合子と呼ばれます。結合子は他のセレクターを組み合わせるために使用され、DOM 内の他の要素に対する位置関係（子要素や兄弟要素など）に基づいて要素を選択することができるようにします。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基本（
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >を学んでいること）、<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">基本的な CSS セレクター</a>。
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

**子孫結合子** (descendant combinator) は、単一の空白（<code> </code>）文字で表され、2 つのセレクターを結合して、最初のセレクターと一致する祖先（親、親の親、親の親の親など）要素がある場合、 2 番目のセレクターと一致する要素が選択されるようにします。 子孫結合子を利用するセレクターは、子孫セレクターと呼ばれます。

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

> [!NOTE]
> [Aside: Compound selectors](https://scrimba.com/frontend-path-c0j/~0br?via=mdn) <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>（Scrimba 提供）は、子孫結合子の実践的な解説を提供するインタラクティブなレッスンです。

## 子結合子

**子結合子** (child combinator, `>`) は 2 つの CSS セレクターの間に配置されます。 2 つ目のセレクターで一致した要素のうち、最初のセレクターで一致した要素の直接の子要素にのみ一致します。さらに下の階層の要素には一致しません。例えば、 `<article>` 要素の直接の子である `<p>` 要素のみを選択するためには、次のようにします。

```css
article > p {
  /* … */
}
```

次の例では、順序付きリスト（{{htmlelement("ol")}}）が順序なしリスト（{{htmlelement("ul")}}）内に含まれています。子結合子は `<ul>` の直接の子である `<li>` 要素のみを選択し、それらに上部の境界線を適用します。

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

前の例で、子セレクターとして指定している `>` を削除すると、子孫セレクターになり、すべての `<li>` 要素に赤い境界線が表示されます。

## 次兄弟結合子

**次兄弟結合子** (next-sibling combinator, `+`) は 2 つの CSS セレクターの間に配置されます。2つ目のセレクターに一致する要素のうち、最初のセレクターの次の兄弟要素であるものだけに一致します。例えば、`<p>` 要素の直後に来るすべての `<img>` 要素を選択するためには、次のようにします。

```css
p + img {
  /* … */
}
```

一般的な用途としては、次の例のように見出しに続く段落に何かをすることです。ここでは、`<h1>` と親要素を共有し、かつその `<h1>` の次の段落を選択します。

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
  background-color: #333333;
  color: white;
  padding: 0.5em;
}
```

{{EmbedLiveSample("adjacent", "", "220px")}}

前の例で次のことを試してみましょう。

1. `<h2>` などの別の要素を `<h1>` と `<p>` の間に挿入してみてください。そうすると、段落がセレクターと一致しなり、隣接する要素に対して背景色と前景色が取得されなくなることがわかります。
2. これで、`h1 + p` セレクターを変更し、特別なスタイルがまず最初の段落に再度適用されるようにします。

## 後続兄弟結合子

要素が直接隣接していなくても、その要素の兄弟を選択したい場合は、**後続兄弟結合子** (subsequent-sibling combinator, `~`) を使うことができます。 `<p>` 要素の後のどこかに来る `<img>` 要素をすべて選択するには、次のようにします。

```css
p ~ img {
  /* … */
}
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
  background-color: #333333;
  color: white;
  padding: 0.5em;
}
```

{{EmbedLiveSample("general", "", "220px")}}

## 結合子とセレクターの組み合わせ

以前のレッスンで学んだセレクターは、結合子と組み合わせて文書の一部を選択できます。例えば、`<ul>` の直接の子要素であり、`class` が `a` のリストアイテムを選択するには、次のように指定してみてください。

```css
ul > li[class="a"] {
}
```

しかし、文書の特定の部分を選択するセレクターの大きなリストを作成するときには注意してください。マークアップ内の要素の位置にとても固有のセレクターを作成したため、 CSS ルールを再利用することが難しくなります。

単純なクラスを作成し、それを対象の要素に適用する方が多いでしょう。とはいえ、結合子の知識は、文書内の何かをスタイル設定する必要があるときに、おそらく {{Glossary("CMS")}} によって生成された HTML にアクセスすることができない場合に、とても有益なものになるでしょう。

## まとめ

セレクターの説明は以上です。次は、CSS セレクターに関する情報をどれだけ理解し、記憶できたかを調べるための確認テストを用意しました。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics")}}

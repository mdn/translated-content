---
title: 要素型、クラス、ID セレクター
slug: Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}

このレッスンでは、利用できる最も簡単にみえるセレクターをとりあげます。これは今後の作業でよく使うことになります。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >基本的なソフトウェアがインストールされていること</a
        >, basic knowledge of
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >ファイルの扱い</a
        >, HTML basics (study
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 入門</a
        >)、および CSS がどのように動作するかという考え（<a href="/ja/docs/Learn/CSS/First_steps"
          >CSS の第一歩</a
        >）に関する基本的な知識を得ている。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        CSS を文書に適用するためのさまざまな CSS セレクターについて学ぶこと。
      </td>
    </tr>
  </tbody>
</table>

## 要素型セレクター

**要素型セレクター** (type selector) は、*タグ名セレクター*または*要素セレクター*と呼ばれることもあります。これは文書中のタグまたは要素を選択するからです。要素型セレクターは大文字小文字の区別がありません。次の例で `span`, `em`, `strong` セレクターを使用しています。

**CSS ルールを追加して `<h1>` 要素を選択してその色を青に変えましょう。**

{{EmbedGHLiveSample("css-examples/learn/selectors/type.html", '100%', 1100)}}

## 全称セレクター

全称セレクター (universal selector) はアステリスク (`*`) で表します。またこれは文書のすべてまたは親要素に含まれるすべての要素（これはそれが連なっている、他の要素やそれらの子要素に連なっている要素すべて）を選択します。次の例ではすべての要素からマージンを削除しています。これはブラウザーによって追加された既定のスタイルの代わりに、見出しや段落のマージンを消してそれぞれを近く配置させます。これにより個々の段落の見分けがつかなくなってしまいます。

{{EmbedGHLiveSample("css-examples/learn/selectors/universal.html", '100%', 750)}}

この種類の動作はしばしば「スタイルシートのリセット」と呼び、ブラウザーのスタイル設定を取り消します。全称セレクターはグローバルな変更をもたらすため、下記に述べる特定の状況のみに使うべきです。

### 全称セレクターを使用してセレクターを読みやすくする

全称セレクターの使用方法のひとつに、セレクターを読みやすくし、その動作を明かにするのものがあります。例えば、 `<article>` 要素の最初の子要素を選択し、それがどんな要素であったとしてもそれを太字にしたいとします。これには {{cssxref(":first-child")}} セレクターを使うことができます。これはあとの[擬似クラスと擬似要素](/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)のコースで詳細を学びますが、`<article>` 要素セレクターの後ろで指定します。

```css
article :first-child {
  font-weight: bold;
}
```

しかしこれは、 `article:first-child`、すなわちあらゆる `<article>` 要素の最初の子要素を選択するものと混同しかねません。

この混同を避けるために、 `:first-child` 擬似クラスに全称セレクターを追加することで、セレクターが何をしているのかがより明確になります。これは `<article>` 要素の最初の子要素、または `<article>` の子孫要素の最初の子要素であるあらゆる要素を選択します。

```css
article *:first-child {
  font-weight: bold;
}
```

どちらもやることは同じですが、読みやすさは格段に向上しています。

## クラスセレクター

クラスセレクターの名前はピリオド (`.`) から始まります。そしてそのクラスが適用されている、文書内のすべてを選択します。次の例では、 `highlight` というクラスを作成し、文書のいくつかの場所に適用します。このクラスが適用されたすべての要素を強調します。

{{EmbedGHLiveSample("css-examples/learn/selectors/class.html", '100%', 750)}}

### 特定の要素のクラスを対象にする

特定のクラスが適用された特定の要素を対象にするセレクターを作成できます。次の例では、`highlight` クラスの `<span>` を強調しますが、`highlight` クラスの `<h1>` 見出しを異なるように強調します。対象にしたい要素に要素型セレクターを使用して実現できます。ドットの後にクラスを追加しますが、クラスとの間にホワイトスペースをいれません。

{{EmbedGHLiveSample("css-examples/learn/selectors/class-type.html", '100%', 750)}}

このアプローチでは、ルールが特定の要素とクラスの組み合わせにのみ適用されるため、ルールの範囲が狭くなります。そのため、ルールを他の要素にも適用したい場合は、別のセレクターを追加する必要があります。

### 複数のクラスが適用された要素を対象にする

一つの要素に複数のクラスを適用できます。それらを個別に選択することも、すべてのクラスがあるものだけを選択することもできます。これは、サイト上で様々な方法で組み合わせることができるコンポーネントを構築する際に便利です。

次の例は、ノートのある `<div>` です。灰色の境界はそのボックスが `notebox` クラスもっている場合にのみ適用されます。もしそれが `warning` や `danger` クラスも持っていた場合 {{cssxref("border-color")}} を変更します。

ブラウザーに、2 つのクラスが存在する要素だけ一致するように指定するには、それらのクラスをすべて空白を入れずに繋げて指定します。最後の `<div>` は `danger` クラスしか持っていないため、スタイルが設定されていないことがわかるでしょう。何かを取得するには `notebox` も必要です。

{{EmbedGHLiveSample("css-examples/learn/selectors/class-many.html", '100%', 900)}}

## ID セレクター

ID セレクターは大文字と小文字を区別し、ピリオドではなく `#` で始まりますが、クラスセレクターと同じように使用します。ただし、 ID を使用することができるのは 1 ページにつき 1 回のみで、要素には 1 つの `id` 値しか示すことができません。 `id` が設定されている要素を選択することができ、 id の前に要素型セレクターを入力することで、要素と id の両方が一致した場合のみその要素を対象とすることができます。次の例では、この両方の使用例を見ることができます。

{{EmbedGHLiveSample("css-examples/learn/selectors/id.html", '100%', 750)}}

> **警告:** 文書内で同じ ID を複数回使用すると、スタイル設定のためには動作するように見えるかもしれませんが、このようなことはしないでください。不正なコードになり、多くの場所でおかしな挙動を発生させます。

> **メモ:** ID セレクターは{{cssxref("specificity", "詳細度")}}が高くなっています。これは、 ID セレクターに一致することに基づいて適用されるスタイルが、クラスセレクターや要素型セレクターを含む他のセレクターに基づいて適用されるスタイルに優先するということです。 ID はページ内で一度しか出現せず、 ID セレクターの詳細度が高いので、 ID の代わりに要素にクラスを追加することが推奨されます。もし ID を使用することだけが要素を対象とする唯一の方法である場合、おそらくマークアップにアクセスすることができず、編集することができないため、[属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)の中で ID を使用すること、例えば `p[id="header"]` のようにすることを検討してください。[詳細度を学びましょう](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)。

## 次の記事

要素型、クラス、ID セレクターについては以上です。続いて[属性セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) によるセレクターを調べてみます。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}

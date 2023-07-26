---
title: HTML で用語を定義する
slug: Learn/HTML/Howto/Define_terms_with_HTML
---

HTML は、インラインであろうと構造化された用語集であろうと、記述の意味を伝達するいくつかの方法を提供します。 この記事では、キーワードを定義する際に適切にマークアップする方法について説明します。

<table class="learn-box nostripe standard-table">
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn/Getting_started_with_the_web"
          >基本的な HTML 文書の作成方法</a
        >に精通している必要があります。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        新しいキーワードを導入する方法と説明リストを作成する方法を学びます。
      </td>
    </tr>
  </tbody>
</table>

用語の意味が必要なときは、おそらくまっすぐに辞書や用語集に行くでしょう。 辞書や用語集は、キーワードを 1 つ以上の説明と正式に関連付けます。 この場合は次のようになります。

> - Blue (_Adjective_)
>
>   - : Of a color like the sky in a sunny day.
>     _"The clear blue sky"_
>
>     Of a subtle sadness, melancholy.
>     _"I'm feeling blue"_

しかし、私たちは常に次のように非公式にキーワードを定義しています。

> **_Firefox_** は、Mozilla Foundation によって作成されたウェブブラウザーです。

これらのユースケースに対処するために、{{Glossary("HTML")}} には説明と説明された単語をマークするための{{Glossary("tag","タグ")}}が用意されているので、読者に意味が適切に伝わるようになります。

## 非公式の説明をマークする方法

教科書では、キーワードが初めて出てきたときに、キーワードを太字にしてすぐに定義するのが一般的です。

私たちは HTML でもそうしていますが、HTML は視覚的なメディアではないので太字を使いません。 {{htmlelement("dfn")}} は、初めて出現するキーワードをマークするための特別な要素です。 `<dfn>` タグは、定義ではなく定義される単語の周りにあり、定義は段落全体で構成されています。

```html
<p>
  <dfn>Firefox</dfn> は、Mozilla Foundation
  によって作成されたウェブブラウザーです。
</p>
```

> **メモ:** 太字のもう 1 つの用途はコンテンツを強調することです。 太字自体は HTML の概念ではありませんが、[強調を示すタグ](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Emphasis_and_importance)があります。

### 特別な場合: 略語

{{htmlelement("abbr")}} で[略語を特別にマーク](/ja/docs/Learn/HTML/Introduction_to_HTML/%E9%AB%98%E5%BA%A6%E3%81%AA%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E6%88%90%E5%9E%8B#Abbreviations)することが最適です。 これにより、スクリーンリーダーが適切に読むことができ、すべての略語を統一的に操作できるようになります。 新しいキーワードの場合と同様に、初めて出現したときに略語を定義する必要があります。

```html
<p>
  <dfn
    ><abbr>HTML</abbr> (hypertext markup
    language、ハイパーテキストマークアップ言語)</dfn
  >
  は、ウェブ上のドキュメントを構造化するために使用される記述言語です。
</p>
```

> **メモ:** HTML 仕様は実際には略語を拡張するために [`title` 属性を用意しています](http://www.w3.org/TR/html/text-level-semantics.html#the-abbr-element)（英語）。 ただし、これはインライン展開を提供するための許容可能な代替方法ではありません。 `title` の内容は、マウスを使用していない限り、ユーザーには完全に隠されています。 この仕様も同様に[これを認めています](https://www.w3.org/TR/html/dom.html#the-title-attribute)（英語）。

### アクセシビリティの向上

{{HTMLElement('dfn')}} は定義されたキーワードをマークし、現在の段落がキーワードを定義していることを示します。 言い換えれば、`<dfn>` 要素とそのコンテナの間に暗黙の関係があります。 より正式な関係を望む場合、または定義が段落全体ではなく 1 つの文で構成されている場合は、[`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute) 属性を使用して、より正式に定義に関連付けることができます。

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    は、Mozilla Foundation によって作成されたウェブブラウザーです。
  </span>
  <a href="http://www.mozilla.org">mozilla.org</a> からダウンロードできます。
</p>
```

支援技術は、この属性を使用して、指定された用語の代替テキストを見つけることができます。 `<dfn>` 要素だけでなく、キーワードを囲む任意のタグで `aria-describedby` を使用して定義できます。 `aria-describedby` は、説明を含む要素の [`id`](/ja/docs/Web/HTML/Global_attributes#id) を参照します。

## 説明リストを作成する方法

説明リストは、用語とそれに対応する説明のリスト（例: 定義リスト、辞書エントリ、よくある質問、およびキーと値のペア）です。

> **メモ:** 説明リストは、対話が話し手を直接記述しないため、[対話をマークアップするのには適していません](http://www.w3.org/TR/html5/grouping-content.html#the-dl-element)（英語）。 ここには、[対話をマークアップするための推奨事項](http://www.w3.org/TR/html5/common-idioms.html#conversations)（英語）があります。

説明された用語は、{{htmlelement("dt")}} 要素内にあります。 対応する説明は直ちに続き、1 つ以上の {{htmlelement("dd")}} 要素に含まれています。 説明リスト全体を {{htmlelement("dl")}} 要素で囲みます。

### 簡単な例

ここでは簡単な例として、食べ物と飲み物の種類を説明します。

```html
<dl>
  <dt>jambalaya</dt>
  <dd>
    rice-based entree typically containing chicken, sausage, seafood, and spices
  </dd>

  <dt>sukiyaki</dt>
  <dd>
    Japanese specialty consisting of thinly sliced meat, vegetables, and
    noodles, cooked in sake and soy sauce
  </dd>

  <dt>chianti</dt>
  <dd>dry Italian red wine originating in Tuscany</dd>
</dl>
```

> **メモ:** ご覧のとおり、基本パターンは `<dt>` の用語を `<dd>` の説明で置き換えることです。 行内に 2 つ以上の用語が存在する場合は、以下の説明はそれらのすべてに適用されます。 行内に 2 つ以上の説明が存在する場合、それらはすべて最後に指定された用語に適用されます。

### 視覚的な出力を改善する

グラフィカルブラウザーに前述のリストが表示される方法は次のとおりです。

{{EmbedLiveSample("A_simple_example", 600, 180)}}

キーワードをより際立たせたい場合は、それらを強調することができます。 HTML は視覚的な媒体ではないことを忘れないでください。 すべての視覚効果に対して {{glossary("CSS")}} が必要です。 CSS の {{cssxref("font-weight")}} プロパティは、ここで必要なものです。

```css
dt {
  font-weight: bold;
}
```

これにより、以下のわずかに読みやすい結果が生成されます。

{{EmbedLiveSample("How_to_build_a_description_list", 600, 180)}}

## より詳しく知る

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [aria-describedby 属性の使用方法](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute)

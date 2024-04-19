---
title: 属性セレクター
slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

HTML の学習で学んだように、要素はマークアップについてさらに詳細な情報を提供する属性を持つことがあります。 CSS では、属性セレクターを使用して、ある種類の属性のある要素を対象に指定できます。このレッスンでは、これらのとても便利なセレクターの使い方を紹介します。

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
        属性セレクターとは何かと、その使い方を学ぶ。
      </td>
    </tr>
  </tbody>
</table>

## 存在や値のセレクター

これらのセレクターにより、要素を属性が存在するか (`href` など)、または属性の値に対して様々な方法で一致させて選択できるようになります。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">セレクター</th>
      <th scope="col">例</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>[<em>attr</em>]</code></td>
      <td><code>a[title]</code></td>
      <td>
        <em>attr</em> という属性名を持つ要素と一致します（値を角括弧の中に入れます）。
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>=<em>value</em>]</code></td>
      <td><code>a[href="https://example.com"]</code></td>
      <td>
        <em>attr</em> という属性名で値が <em>value</em> と完全一致する要素と一致します。文字列は引用符の中に入れます。
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>~=<em>value</em>]</code></td>
      <td><code>p[class~="special"]</code></td>
      <td>
        <p>
          <br />値が正確に <em>value</em> である <em>attr</em> の属性名を持つ要素、または 1 つ以上の値を含む <em>attr</em> 属性を持つ要素に一致します。複数の値のリストでは、個別の値が空白で区切られていることに注意してください。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>|=<em>value</em>]</code></td>
      <td><code>div[lang|="zh"]</code></td>
      <td>
        値が正確に <em>value</em> であるか、または <em>value</em> の直後にハイフンが続く値で始まる<em>attr</em> 属性を持つ要素に一致します。
      </td>
    </tr>
  </tbody>
</table>

以下の例では、これらのセレクターが使用されていることがわかります。

- `li[class]` を使用することで、 class 属性を持つ任意のセレクターに一致させることができます。これは、最初のものを除いたすべてのリストアイテムに一致します。
- `li[class="a"]` は、a のクラスを持つセレクターには一致しますが、別のスペースで区切られたクラスを値の一部として持つ a のクラスを持つセレクターには一致しません。2 番目のリストアイテムを選択します。
- `li[class~="a"]`は、 `a` のクラスを持つセレクターに一致しますが、空白で区切られたリストの一部に `a` のクラスを含む値にも一致します。2 番目と 3 番目のリストアイテムを選択します。

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute.html", '100%', 800)}}

## 部分文字列照合セレクター

これらのセレクターは、属性の値の中の部分文字列をより高度に照合させることができます。例えば、 `box-warning` と `box-error` のクラスがあり、文字列 "box-" で始まるものを全て一致させたい場合、 `[class^="box-"]` を使用して両方を選択することができます。

| セレクター      | 例                  | 説明                                                                            |
| --------------- | ------------------- | ------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | 値が _value_ で始まる _attr_ 属性（名前は角括弧内の値）を持つ要素に一致します。 |
| `[attr$=value]` | `li[class$="-box"]` | 値が _value_ で終わる _attr_ 属性を持つ要素に一致します。                       |
| `[attr*=value]` | `li[class*="box"]`  | 文字列内の任意の場所に _value_ を含む _attr_ 属性を持つ要素に一致します。       |

（ところで、長い間 `^` と `$` は正規表現において、それぞれ _先頭_ と _末尾_ を意味する _アンカー_ として使用されてきたことに注意すると有用かもしれません。）

次の例は、これらのセレクターの使用法を示しています。

- `li[class^="a"]` は `a` で始まる属性値に一致するので、最初の 2 つのリストアイテムに一致します。
- `li[class$="a"]` は `a` で終わる属性値に一致するので、最初と 3 番目のリストアイテムに一致します。
- `li[class*="a"]`は、`a` が文字列のどこかに現れる属性値に一致します。

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-substring.html", '100%', 800)}}

## 大文字小文字の区別

属性値を大文字小文字を区別せずに照合したい場合は、閉じ括弧の前に値 `i` を使うことができます。このフラグは、ブラウザーに {{Glossary("ASCII")}} 文字を大文字小文字を区別せずに照合するように指示します。このフラグがない場合、値は文書言語の大文字小文字の区別に従って照合されます - HTML の場合は大文字小文字を区別します。

下の例では、最初のセレクターは `a` で始まる値に一致します。他の 2 つのリストアイテムは大文字の A で始まるので、最初のリストアイテムにのみ一致します。 2 つ目のセレクターは大文字と小文字を区別しないフラグを使用しているので、すべてのリストアイテムに一致します。

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-case.html", '100%', 800)}}

> **メモ:** 新しい値 `s` もあります。これは、通常大文字と小文字が区別されないコンテキストで大文字と小文字を区別する照合を強制しますが、これはブラウザーではあまり対応されておらず、HTML の文脈ではあまり役に立ちません。

## 次のステップ

これで属性セレクターが完了しました。次の記事に進んで、[pseudo-class and pseudo-element selectors](/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)について読むことができます。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

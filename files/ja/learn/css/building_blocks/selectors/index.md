---
title: CSS セレクター
slug: Learn/CSS/Building_blocks/Selectors
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

{{Glossary("CSS")}}では、セレクター (selector) を使って装飾したい {{glossary("HTML")}} 要素を選択します。CSS セレクターは種類豊富なので、装飾したい要素を細かく選択できます。この記事では、さまざまな種類のセレクターについて、その機能を詳しく確認します。

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
      <td>CSS セレクターがどのように機能するかを学ぶ。</td>
    </tr>
  </tbody>
</table>

## セレクターとは

CSS セレクターは、CSS ルール (CSS Rule) の最初の部分です。CSS セレクターは要素やその他の用語の組み合わせで、どの HTML 要素を選択するかブラウザーに伝えます。選択された要素には CSS プロパティ値 (property value) が適用されます。セレクターによって選択された要素を、_選択対象_ (_subject of the selector_) と呼びます。

![多少のコードで、 h1 が強調されている。](selector.png)

他にもいろいろな記事で、様々なセレクターに出会い、様々な方法で文書を対象とするセレクターがあることを知ることができたと思います。例えば、`h1` は HTML 要素で選択する一方 `.special` はクラスで選択します。

セレクターは CSS セレクター仕様で定義されます。ほとんどのセレクターは [Level 3 Selectors specification](https://www.w3.org/TR/selectors-3/) や [Level 4 Selectors specification](https://www.w3.org/TR/selectors-4/) で定義されています。CSS の他の部分と同様に、セレクターが機能するにはブラウザーの対応が必要ですが、どちらも成熟した仕様なのでブラウザーの対応も充実しています。

## セレクターリスト

同じ CSS を使用する場合は、それぞれのセレクターを _セレクターリスト_ (_selector list_) にまとめてルールを適用できます。たとえば、`h1` と `.special` の CSS が同じ場合、2 つの個別のルールとして記述できます。

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

カンマ区切りでセレクターリストにもできます。

```css-nolint
h1, .special {
  color: blue;
}
```

カンマの前後にホワイトスペースを入れることもできます。改行したほうが読みやすいかもしれません。

```css
h1,
.special {
  color: blue;
}
```

以下のライブサンプルを使って、同じ宣言を持つ 2 つのセレクターを結合してみてください。作業の前後で見た目が変わらないはずです。

{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1150)}}

この方法でセレクターをまとめている場合、間違った文法で書かれたセレクターを 1 つでも含んでいるとルール全体が無視されます。

次の例では、不正なクラスセレクターのルールは無視され、 `h1` がスタイル設定されます。

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

しかし、結合された場合、 `h1` もクラスもスタイル設定されず、ルール全体が不正なものとみなされます。

```css-nolint
h1, ..special {
  color: blue;
}
```

## セレクターの種類

セレクターにはいくつかのグループ分けがあり、どの種類のセレクターが必要かを知ることは、その仕事に正しいツールを探すのに役立ちます。この記事の下位の記事では、異なるセレクターのグループについてより詳しく見ていきます。

### 要素型、クラス、ID セレクター

[`<h1>`](/ja/docs/Web/HTML/Element/Heading_Elements) のような HTML 要素を選択するセレクターがこのグループに属します。

```css
h1 {
}
```

クラスセレクターは、 [`class`](/ja/docs/Web/HTML/Global_attributes/class) 属性に特定の値が示されている要素を対象とします。

```css
.box {
}
```

ID セレクターは、 [`id`](/ja/docs/Web/HTML/Global_attributes/id) 属性に特定の値がある要素を対象とします。

```css
#unique {
}
```

### 属性セレクター

このセレクターのグループは、要素上の特定の属性の存在に基づいて要素を選択するさまざまな方法を提供します。

```css
a[title] {
}
```

特定の属性を持ち、かつ、特定の属性値を持つ要素を選択するセレクターもあります。

```css
a[href="https://example.com"]
{
}
```

### 擬似クラスおよび擬似要素

このセレクターのグループには、要素の特定の状態をスタイル設定する擬似クラスが含まれます。例えば、`:hover`擬似クラスは、マウスポインターが上に置かれたときだけ要素を選択します。

```css
a:hover {
}
```

擬似要素 (pseudo-element) 、つまり要素自体ではなく要素の特定の部分を選択するセレクターもあります。たとえば、`::first-line` は要素（以下の例では `<p>`）内の最初の行をまるで `<span>` で囲んでスタイル設定したかのように動作します。

```css
p::first-line {
}
```

### 結合子

最後のグループのセレクターは、セレクター同士を組み合わせて文書内のターゲット要素を選択します。たとえば、以下の例では子結合子（子コンビネーター、child combinator）(`>`) によって `<article>` 要素の直接の子である段落を選択します。

```css
article > p {
}
```

## まとめ

この記事や MDN にあるさまざまなセレクターについては、下の方にある表を参照してください。または、[要素型、クラス、ID セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)から見ていくこともできます。

セレクターの完全なリストについては、 [CSS セレクターリファレンス](/ja/docs/Web/CSS/CSS_selectors)を参照してください。

{{NextMenu("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

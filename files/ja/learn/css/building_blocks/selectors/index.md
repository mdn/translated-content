---
title: CSS セレクター
slug: Learn/CSS/Building_blocks/Selectors
l10n:
  sourceCommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

{{Glossary("CSS")}}では、セレクター (selector) を使って装飾したい {{glossary("HTML")}} 要素を選択します。CSS セレクターは種類豊富なので、装飾したい要素を細かく選択できます。この記事では、さまざまな種類のセレクターについて、その機能を詳しく確認します。

| 前提条件: | 基本的なコンピューターリテラシー、[基本的なソフトウェアがインストールされている](/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software)こと、[ファイルの扱い](/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files)、HTML の基本 ([HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)) および CSS に関するアイデア ([CSS の第一歩](/ja/docs/Learn/CSS/First_steps)) に関する基本的な知識を得ている。 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | CSS セレクターがどのように機能するかを学ぶ。                                                                                                                                                                                                                                                                                                                                                                                     |

## セレクターとは

CSS セレクターは、CSS ルール (CSS Rule) の最初の部分です。CSS セレクターは要素やその他の用語の組み合わせで、どの HTML 要素を選択するかブラウザーに伝えます。選択された要素には CSS プロパティ値 (property value) が適用されます。セレクターによって選択された要素を、_選択対象_ (_subject of the selector_) と呼びます。

![Some code with the h1 highlighted.](selector.png)

他の記事を読むと、対象の選択方法がセレクターによって異なることに気づくかもしれません。例えば、`h1` は HTML 要素で選択する一方 `.special` はクラスで選択します。

セレクターは CSS セレクター仕様で定義されます。ほとんどのセレクターは [Level 3 Selectors specification](https://www.w3.org/TR/selectors-3/) や [Level 4 Selectors specification](https://www.w3.org/TR/selectors-4/) で定義されています。CSS の他の部分と同様に、セレクターが機能するにはブラウザーのサポートが必要ですが、どちらも成熟した仕様なのでブラウザーのサポートも充実しています。

## セレクター一覧

同じ CSS を使用する場合は、それぞれのセレクターを _セレクターリスト_ (_selector list_) にまとめてルールを適用できます。たとえば、`h1` と `.special` の CSS が同じ場合、2 つの個別のルールとして記述できますし、

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

カンマの前後にホワイトスペースを入れても大丈夫です。改行したほうが読みやすいかもしれません。

```css
h1,
.special {
  color: blue;
}
```

以下のライブサンプルを使って、同じ宣言を持つ 2 つのセレクターを結合してみてください。作業の前後で見た目が変わらないはずです。

{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1000)}}

この方法でセレクターをまとめている場合、間違った文法で書かれたセレクターを 1 つでも含んでいるとルール全体が無視されます。

以下の例では無効なルールは無視され、`h1` のみが装飾されます。

```css
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

ただし結合した場合は、ルール全体が無効とみなされ、`h1` も装飾されません。

```css
h1,
..special {
  color: blue;
}
```

## セレクターの種類

セレクターにはいくつかの異なるグループがあり、どれが必要かを知ることは有用です。この節ではさまざまなグループを詳しく見ていきます。

### 要素・クラス・ID によるセレクター

`<h1>` のような HTML 要素を選択するセレクターがこのグループに属します。

```css
h1 {
}
```

クラスを選択するセレクターも同様です。

```css
.box {
}
```

あとは ID です。

```css
#unique {
}
```

### 属性によるセレクター

特定の属性を持つ要素を選択するセレクターがこのグループに属します。

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

### 擬似クラスおよび疑似要素によるセレクター

疑似クラス (pseudo-class) 、つまり特定の状態にある要素を選択するセレクターがこのグループに属します。たとえば、`:hover` 擬似クラスはマウスポインターがホバーしているときにのみ要素を選択します。

```css
a:hover {
}
```

擬似要素 (pseudo-element) 、つまり要素自体ではなく要素の特定の部分を選択するセレクターもあります。たとえば、`::first-line` は要素（以下の例では `<p>`）内の最初の行をまるで `<span>` でラップしてスタイルしたかのように動作します。

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

## 次のステップ

この記事や MDN にあるさまざまなセレクターについては、下の方にある表を参照してください。または、[要素・クラス・ID によるセレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)から見ていくこともできます。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

## セレクターのリファレンス表

以下の表で使用可能な各セレクターの概要と、それぞれの使い方を示すガイド内ページへのリンクを紹介します。そこには各セレクターのブラウザーサポートを確認できる MDN ページへのリンクもあります。セレクターを検索したり一般的に CSS を体験するときに、ここに戻ってきて参照できます。

| セレクター                                                     | 例                  | CSS チュートリアル                                                                                                   |
| -------------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [要素セレクター](/ja/docs/Web/CSS/Type_selectors)              | `h1 { }`            | [要素セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#Type_selectors)            |
| [全称セレクター](/ja/docs/Web/CSS/Universal_selectors)         | `* { }`             | [全称セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#The_universal_selector)    |
| [クラスセレクター](/ja/docs/Web/CSS/Class_selectors)           | `.box { }`          | [クラスセレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#Class_selectors)         |
| [ID セレクター](/ja/docs/Web/CSS/ID_selectors)                 | `#unique { }`       | [ID セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#ID_Selectors)               |
| [属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)         | `a[title] { }`      | [属性によるセレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)                             |
| [擬似クラスセレクター](/ja/docs/Web/CSS/Pseudo-classes)        | `p:first-child { }` | [疑似クラス](/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#What_is_a_pseudo-class) |
| [疑似要素セレクター](/ja/docs/Web/CSS/Pseudo-elements)         | `p::first-line { }` | [疑似要素](/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#What_is_a_pseudo-element) |
| [子孫結合子](/ja/docs/Web/CSS/Descendant_combinator)           | `article p`         | [子孫結合子](/ja/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Descendant_Selector)                           |
| [子結合子](/ja/docs/Web/CSS/Child_combinator)                  | `article > p`       | [子結合子](/ja/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Child_combinator)                                |
| [隣接兄弟結合子](/ja/docs/Web/CSS/Adjacent_sibling_combinator) | `h1 + p`            | [隣接兄弟](/ja/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Adjacent_sibling)                                |
| [一般兄弟結合子](/ja/docs/Web/CSS/General_sibling_combinator)  | `h1 ~ p`            | [一般兄弟](/ja/docs/Learn/CSS/Building_blocks/Selectors/Combinators#General_sibling)                                 |

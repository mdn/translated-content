---
title: CSS セレクター
slug: Learn/CSS/Building_blocks/Selectors
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

{{Glossary("CSS")}}では、ウェブページ上の {{glossary("HTML")}} 要素にスタイルを設定するためにセレクターが使用されます。CSS セレクターにはさまざまな種類があり、きめ細かにスタイルを設定する要素を選択できます。この記事とそのサブ記事では、さまざまなタイプについて、どのように機能するかを詳しく見ていきます。

| 前提条件: | 基本的なコンピューターリテラシー、[基本的なソフトウェアがインストールされている](/ja/Learn/Getting_started_with_the_web/Installing_basic_software)こと、[ファイルの扱い](/ja/Learn/Getting_started_with_the_web/Dealing_with_files)、HTML の基本 ([HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)) および CSS に関するアイデア ([CSS の第一歩](/ja/docs/Learn/CSS/First_steps)) に関する基本的な知識を得ている。 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | CSS セレクターがどのように機能するかを学ぶ。                                                                                                                                                                                                                                                                                                                                                                           |

## セレクターとは

実はもうこれまでにセレクターを見たことがあるはずです。CSS セレクターは、CSS のもっとも基本的なルールとなるものです。要素やその他を選択して CSS プロパティ値を適用する HTML 要素をブラウザーに伝えるものです。セレクターによって選択される要素は、選択対象 _(subject of the selector_) と呼ばれます。

![Some code with the h1 highlighted.](selector.png)

これまでの記事で `h1` 要素や `.special` クラスなどのいくつかのセレクターを見てきました。それらはドキュメント内の対象をさまざまな方法で指定できるということも学びました。

"CSS セレクター仕様" (_CSS Selectors specification_) で、CSS のセレクターは定義されています。CSS の他の部分と同様に、それらが機能するにはブラウザーでのサポートが必要です。よく使うセレクターは確定仕様である [Level 3 Selectors specification](https://www.w3.org/TR/selectors-3/) で定義されているため、ブラウザーサポートも期待できます。

## セレクター一覧

同じ CSS を使用するものが複数ある場合は、セレクターリストでまとめてルールを適用することができます。たとえば、`h1` と `.special` クラスが同じ CSS だとして、2 つの個別のルールとして記述できます。

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

カンマ区切りでセレクターリストにもできます。

```css
h1, .special {
  color: blue;
}
```

カンマの前後に空白を入れることもできますし、改行したほうがセレクターを見つけやすくなり読みやすいかもしれません。

```css
h1,
.special {
  color: blue;
}
```

以下のライブサンプルを使って、同じ宣言を持つ 2 つのセレクターを結合してみてください。作業の前後で見た目が同じになるように留意してください。

{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1000)}}

この方法でセレクターをグループ化していると、無効なセレクターがある場合はルール全体が無視されます。

以下の例では無効なセレクターは無視され、`h1` だけがスタイル適用されます。

```css
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

ただし結合した場合は、`h1` もクラスも無効なものとしてスタイルされません。

```css
h1, ..special {
  color: blue;
}
```

## セレクターの種類

セレクターにはいくつかの異なるグループがあり、どれが必要かを知ることは有用です。ここのサブ記事ではさまざまなセレクターグループを詳しく見ていきます。

### 要素・クラス・ID によるセレクター

このグループには `<h1>` のような HTML 要素を対象とするセレクターを含みます。

```css
h1 { }
```

同様にクラスを対象としたセレクターも含みます。

```css
.box { }
```

あとは ID です。

```css
#unique { }
```

### 属性によるセレクター

このセレクターグループは要素の属性によるさまざまな選択方法を提供します。

```css
a[title] { }
```

特定の値を持つ属性で選択することもできます。

```css
a[href="https://example.com"] { }
```

### 擬似クラスおよび疑似要素によるセレクター

このセレクターグループは、要素の特定の状態をスタイルする疑似クラスを含みます。たとえば、`:hover` 擬似クラスはマウスポインターがホバーしているときにのみ要素を選択します。

```css
a:hover { }
```

また要素自体ではなく要素の特定の部分を選択する擬似要素もあります。たとえば、`::first-line` は要素 (以下では `<p>`) 内の最初の行をまるで `<span>` でラップしてスタイルしたかのように動作します。

```css
p::first-line { }
```

### 結合子

最後のセレクターグループは、セレクターを組み合わせて文書内のターゲット要素を選びます。たとえば、以下では子コンビネータ (`>`) によって `<article>` 要素の直接の子である段落を選択します。

```css
article > p { }
```

## 次のステップ

この記事や MDN にあるさまざまなセレクターについては、下の方にある表を参照してください。または、[要素・クラス・ID によるセレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)から見ていくこともできます。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

## セレクターのリファレンス表

以下の表で使用可能な各セレクターの概要と、それぞれの使い方を示すガイド内ページへのリンクを紹介します。そこには各セレクターのブラウザーサポートを確認できる MDN ページへのリンクもあります。セレクターを検索したり一般的に CSS を体験するときに、ここに戻ってきて参照することができます。

| セレクター                                                     | 例                  | CSS チュートリアル                                                                                                            |
| -------------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [要素セレクター](/ja/docs/Web/CSS/Type_selectors)              | `h1 { }`            | [要素セレクター](/ja/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#Type_selectors)            |
| [全称セレクター](/ja/docs/Web/CSS/Universal_selectors)         | `* { }`             | [全称セレクター](/ja/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#The_universal_selector)    |
| [クラスセレクター](/ja/docs/Web/CSS/Class_selectors)           | `.box { }`          | [クラスセレクター](/ja/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#Class_selectors)         |
| [ID セレクター](/ja/docs/Web/CSS/ID_selectors)                 | `#unique { }`       | [ID セレクター](/ja/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#ID_Selectors)               |
| [属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)         | `a[title] { }`      | [属性によるセレクター](/ja/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Attribute_selectors)                             |
| [擬似クラスセレクター](/ja/docs/Web/CSS/Pseudo-classes)        | `p:first-child { }` | [疑似クラス](/ja/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-class) |
| [疑似要素セレクター](/ja/docs/Web/CSS/Pseudo-elements)         | `p::first-line { }` | [疑似要素](/ja/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-element) |
| [子孫結合子](/ja/docs/Web/CSS/Descendant_combinator)           | `article p`         | [子孫結合子](/ja/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Descendant_Selector)                           |
| [子結合子](/ja/docs/Web/CSS/Child_combinator)                  | `article > p`       | [子結合子](/ja/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Child_combinator)                                |
| [隣接兄弟結合子](/ja/docs/Web/CSS/Adjacent_sibling_combinator) | `h1 + p`            | [隣接兄弟](/ja/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Adjacent_sibling)                                |
| [一般兄弟結合子](/ja/docs/Web/CSS/General_sibling_combinator)  | `h1 ~ p`            | [一般兄弟](/ja/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#General_sibling)                                 |

## このモジュール

1. [カスケードと継承](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2. [CSS セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)

    - [要素・クラス・ID によるセレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [属性によるセレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [擬似クラスおよび疑似要素によるセレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [結合子](/ja/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3. [ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/The_box_model)
4. [背景と枠線](/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5. [テキスト方向の操作](/ja/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6. [要素のはみ出し (オーバーフロー)](/ja/docs/Learn/CSS/Building_blocks/Overflowing_content)
7. [CSS の値と単位](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
8. [CSS によるサイズ設定](/ja/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9. [画像・メディア・フォーム要素](/ja/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [表のスタイリング](/ja/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [CSS のデバッグ](/ja/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [CSS の整理](/ja/docs/Learn/CSS/Building_blocks/Organizing)

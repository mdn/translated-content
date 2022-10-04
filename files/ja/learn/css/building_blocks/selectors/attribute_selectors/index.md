---
title: 属性セレクター
slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

HTML の学習で学んだように、要素はマークアップについてさらに詳細な情報を提供する属性を持つことがあります。 CSS では、属性セレクターを使用して、ある種類の属性のある要素を対象に指定できます。このレッスンでは、これらのとても便利なセレクターの使い方を紹介します。

| 前提条件: | 基本的なコンピューターリテラシー、[基本的なソフトウェアがインストールされている](/ja/Learn/Getting_started_with_the_web/Installing_basic_software)こと、[ファイルの扱い](/ja/Learn/Getting_started_with_the_web/Dealing_with_files)、 HTML の基本 ([HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)) および CSS に関するアイデア ([CSS の第一歩](/ja/docs/Learn/CSS/First_steps)) に関する基本的な知識を得ている。 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | 属性セレクターとは何かと、その使い方を学ぶ。                                                                                                                                                                                                                                                                                                                                                                            |

## 存在や値のセレクター

これらのセレクターにより、要素を属性が存在するか (`href` など)、または属性の値に対して様々な方法で一致させて選択できるようになります。

| セレクター       | 例                              | 説明                                                                                                                                                                                           |
| ---------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[attr]`         | `a[title]`                      | _attr_ という属性名を持つ要素と一致します。 — 値を角括弧の中に入れます。                                                                                                                       |
| `[attr=value]`   | `a[href="https://example.com"]` | _attr_ という属性名で値が _value_ と完全一致する要素と一致します。— 文字列は引用符の中に入れます。                                                                                             |
| `[attr~=value]`  | `p[class~="special"]`           | 値が正確に _value_ である _attr_ の属性名を持つ要素、または 1 つ以上の値を含む _attr_ 属性を持つ要素に一致します。複数の値のリストでは、個別の値が空白で区切られていることに注意してください。 |
| `[attr\|=value]` | `div[lang\|="zh"]`              | 値が正確に _value_ であるか、または _value_ の直後にハイフンが続く値で始まる _attr_ 属性を持つ要素にマッチします。                                                                             |

以下の例では、これらのセレクタが使用されていることがわかります。

- `li[class]` を使用することで、クラス属性を持つ任意のセレクタにマッチさせることができます。これは、最初のものを除いたすべてのリスト項目にマッチします。
- `li[class="a"]` は、a のクラスを持つセレクタにはマッチしますが、別のスペースで区切られたクラスを値の一部として持つ a のクラスを持つセレクタにはマッチしません。2 番目のリスト項目を選択します。
- `li[class~="a"]`は、 `a` のクラスを持つセレクタにマッチしますが、空白で区切られたリストの一部に `a` のクラスを含む値にもマッチします。2 番目と 3 番目のリスト項目を選択します。

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute.html", '100%', 800)}}

## 部分文字列一致セレクター

これらのセレクタは、属性の値の中の部分文字列をより高度にマッチさせることができます。例えば、 `box-warning` と `box-error` のクラスがあり、文字列 "box-" で始まるものを全てマッチさせたい場合、 `[class^="box-"]` を使用して両方を選択することができます。

| セレクター      | 例                  | 説明                                                                              |
| --------------- | ------------------- | --------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | 値が `value` で始まる `attr` 属性（名前は角括弧内の値）を持つ要素とマッチします。 |
| `[attr$=value]` | `li[class$="-box"]` | 値が `value` で終わる `attr` 属性を持つ要素にマッチします。                       |
| `[attr*=value]` | `li[class*="box"]`  | 文字列内の任意の場所に `value` を含む attr 属性を持つ要素にマッチします。         |

次の例は、これらのセレクタの使用法を示しています。

- `li[class^="a"]` は `a` で始まる属性値にマッチするので、最初の 2 つのリスト項目にマッチします。
- `li[class$="a"]` は `a` で終わる属性値にマッチするので、最初と 3 番目のリスト項目にマッチします。
- `li[class*="a"]`は、`a` が文字列のどこかに現れる属性値にマッチします。

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-substring.html", '100%', 800)}}

## 大文字・小文字の区別

属性値を大文字小文字を区別せずにマッチさせたい場合は、閉じ括弧の前に値 `i` を使うことができます。このフラグは、ブラウザーに ASCII 文字を大文字小文字を区別せずにマッチさせるように指示します。このフラグがない場合、値は文書言語の大文字小文字の区別に従ってマッチされます - HTML の場合は大文字小文字を区別します。

以下の例では、最初のセレクタは `a` で始まる値にマッチします。他の 2 つのリスト項目は大文字の A で始まるため、最初のリスト項目にのみマッチします。

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-case.html", '100%', 800)}}

> **メモ:** 新しい値 `s` もあります。これは、通常大文字と小文字が区別されないコンテキストで大文字と小文字を区別するマッチングを強制しますが、これはブラウザーではあまりサポートされておらず、HTML コンテキストではあまり役に立ちません。

## やってみよう

下のライブの例では、属性セレクタを使った CSS を追加して以下のようにします。

- `title` 属性を持つ `<a>` 要素をターゲットにして、ボーダーをピンク（`border-color: pink`）にする。
- `<a>` 要素の `href` 属性の値のどこかに `contact` という単語が含まれているものをターゲットにして、ボーダーをオレンジ色にする (`border-color: orange`)。
- `href` 属性の値が `https` で始まる `<a>` 要素を対象とし、ボーダーを緑色(`border-color: green`)にする。

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-links.html", '100%', 800)}}

> **メモ:** [ここで解答を見ることができます](https://github.com/mdn/css-examples/blob/master/learn/solutions.md)が、まずは自分で考えてみてください。

## 次のステップ

これで属性セレクターが完了しました。次の記事に進んで、[pseudo-class and pseudo-element selectors](/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)について読むことができます。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

## このモジュール内の文書

1. [カスケードと継承](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2. [CSS セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)

    - [要素・クラス・ID によるセレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [属性によるセレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [擬似クラスおよび疑似要素によるセレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [結合子](/ja/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3. [ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/The_box_model)
4. [背景と境界](/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5. [テキスト方向の操作](/ja/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6. [要素のはみ出し (オーバーフロー)](/ja/docs/Learn/CSS/Building_blocks/Overflowing_content)
7. [CSS の値と単位](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
8. [CSS によるサイズ設定](/ja/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9. [画像・メディア・フォーム要素](/ja/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [表のスタイリング](/ja/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [CSS のデバッグ](/ja/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [CSS の整理](/ja/docs/Learn/CSS/Building_blocks/Organizing)

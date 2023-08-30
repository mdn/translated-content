---
title: CSS セレクター
slug: Web/CSS/CSS_selectors
---

{{CSSRef("Selectors")}}

**CSS セレクター**は、一連の CSS のルールが適用される要素を定義します。

> **メモ:** 親のアイテム、親の兄弟、親の兄弟の子を選択するセレクターや結合子はありません。

## 基本セレクター

- [全称セレクター](/ja/docs/Web/CSS/Universal_selectors)

  - : すべての要素を選択します。任意で、特定の名前空間に限定したり、すべての名前空間を対象にしたりすることができます。
    **構文:** `*` `ns|*` `*|*`
    **例:** `*` は文書のすべての要素を選択します。

- [要素型セレクター](/ja/docs/Web/CSS/Type_selectors)

  - : 指定されたノード名を持つすべての要素を選択します。
    **構文:** `elementname`
    **例:** `input` はあらゆる {{HTMLElement("input")}} 要素を選択します。

- [クラスセレクター](/ja/docs/Web/CSS/Class_selectors)

  - : 指定された `class` 属性を持つすべての要素を選択します。
    **構文:** `.classname`
    **例:** `.index` は "index" クラスを持つあらゆる要素を選択します。

- [ID セレクター](/ja/docs/Web/CSS/ID_selectors)

  - : `id` 属性の値に基づいて要素を選択します。文書中に指定された ID を持つ要素は 1 つしかないはずです。
    **構文:** `#idname`
    **例:** `#toc` は "toc" という ID を持つ要素を選択します。

- [属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)
  - : 指定された属性を持つ要素をすべて選択します。
    **構文:** `[attr]` `[attr=value]` `[attr~=value]` `[attr|=value]` `[attr^=value]` `[attr$=value]` `[attr*=value]`
    **例:** `[autoplay]` は `autoplay` 属性が（どんな値でも）設定されているすべての要素を選択します。

## グループ化セレクター

- [セレクターリスト](/ja/docs/Web/CSS/Selector_list)
  - : `,` はグループ化の手段であり、一致するすべてのノードを選択します。
    **構文:** `A, B`
    **例:** `div, span` は {{HTMLElement("span")}} と {{HTMLElement("div")}} の両要素に一致します。

## 結合子

- [子孫結合子](/ja/docs/Web/CSS/Descendant_combinator)

  - : " " (空白) 結合子は、第 1 の要素の子孫にあたるノードを選択します。
    **構文:** `A B`
    **例:** `div span` は {{HTMLElement("div")}} 要素の中にある {{HTMLElement("span")}} 要素をすべて選択します。

- [子結合子](/ja/docs/Web/CSS/Child_combinator)

  - : `>` 結合子は、第 1 の要素の直接の子に当たるノードを選択します。
    **構文:** `A > B`
    **例:** `ul > li` は {{HTMLElement("ul")}} 要素の内側に直接ネストされた {{HTMLElement("li")}} 要素をすべて選択します。

- [一般兄弟結合子](/ja/docs/Web/CSS/General_sibling_combinator)

  - : `~` 結合子は兄弟を選択します。つまり、第2の要素が第1の要素の後にあり（ただし直後でなくても構わない）、両者が同じ親を持つ場合です。
    **構文:** `A ~ B`
    **例:** `p ~ span` は {{HTMLElement("p")}} 要素の後にある {{HTMLElement("span")}} 要素をすべて選択します。

- [隣接兄弟結合子](/ja/docs/Web/CSS/Adjacent_sibling_combinator)

  - : `+` 結合子は隣接する兄弟を選択します。つまり、第2の要素が第1の要素の直後にあり、両者が同じ親を持つ場合です。
    **構文:** `A + B`
    **例:** `h2 + p` は {{HTMLElement("h2")}} 要素の後にすぐに続く {{HTMLElement("p")}} 要素をすべて選択します。

- [列結合子](/ja/docs/Web/CSS/Column_combinator) {{Experimental_Inline}}
  - : `||` 結合子は列に所属するノードを選択します。
    **構文:** `A || B`
    **例:** `col || td` は {{HTMLElement("col")}} 要素のスコープに所属するすべての {{HTMLElement("td")}} 要素を選択します。

## 擬似表記

- [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)

  - : `:` 表記により、文書ツリーの中に含まれない状態情報によって要素を選択することができます。
    **例:** `a:visited` はユーザーが訪問済みの {{HTMLElement("a")}} 要素をすべて選択します。

- [擬似要素](/ja/docs/Web/CSS/Pseudo-elements)
  - : `::` 表記は、 HTML に含まれていないエンティティを表現します。
    **例:** `p::first-line` はすべての {{HTMLElement("p")}} 要素の先頭行を選択します。

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 詳細度](/ja/docs/Web/CSS/Specificity)

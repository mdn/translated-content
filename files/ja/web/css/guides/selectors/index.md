---
title: CSS セレクター
short-title: セレクター
slug: Web/CSS/Guides/Selectors
l10n:
  sourceCommit: 11d748f9e217b6a9fd16291d7815a6f803f0136d
---

**CSS セレクター**モジュールは、要素を選択するパターンを定義し、一連の CSS ルールをその[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)とともに適用します。 CSS セレクターモジュールには、 60 以上のセレクターと 5 つの結合子が用意されています。[他のモジュール](#関連概念)は、さらに擬似クラスセレクターと擬似要素が提供されています。

CSS では、セレクターはスタイルを設定したい要素と照合、または選択するために使用されるパターンです。セレクターは JavaScript でも使用され、 [`NodeList`](/ja/docs/Web/API/NodeList) として返すDOMノードを選択することができます。

セレクターは、 CSS でも JavaScript でも、 HTML 要素の型、属性、現在の状態、さらには DOM 内の位置に基づいてターゲットを絞ることができます。結合子は、他の要素との関係に基づいて要素を選択できるようにすることで、要素を選択する際により正確に行えるようにします。

## リファレンス

### 結合子とセパレーター

- `+` （[次兄弟結合子](/ja/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)）
- `>` （[子結合子](/ja/docs/Web/CSS/Reference/Selectors/Child_combinator)）
- `~` （[後続兄弟結合子](/ja/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)）
- " " （[子孫結合子](/ja/docs/Web/CSS/Reference/Selectors/Descendant_combinator)）
- `|` （[名前空間セパレーター](/ja/docs/Web/CSS/Reference/Selectors/Namespace_separator)）
- `,` （[セレクターリスト](/ja/docs/Web/CSS/Reference/Selectors/Selector_list)）

CSS セレクターモジュールでは、[列結合子](/ja/docs/Web/CSS/Reference/Selectors/Column_combinator) (`||`) も導入されています。現在、この機能に対応しているブラウザーはありません。

### セレクター

- {{CSSXref(":active")}}
- {{CSSXref(":any-link")}}
- {{CSSXref(":autofill")}}
- {{CSSXref(":buffering")}}
- {{CSSXref(":checked")}}
- {{CSSXref(":default")}}
- {{CSSXref(":defined")}}
- {{CSSXref(":dir", ":dir()")}}
- {{CSSXref(":disabled")}}
- {{CSSXref(":empty")}}
- {{CSSXref(":enabled")}}
- {{CSSXref(":first-child")}}
- {{CSSXref(":first-of-type")}}
- {{CSSXref(":focus")}}
- {{CSSXref(":focus-visible")}}
- {{CSSXref(":focus-within")}}
- {{CSSXref(":fullscreen")}}
- {{CSSXref(":future")}}
- {{CSSXref(":has", ":has()")}}
- {{CSSXref(":hover")}}
- {{CSSXref(":in-range")}}
- {{CSSXref(":indeterminate")}}
- {{CSSXref(":invalid")}}
- {{CSSXref(":is", ":is()")}}
- {{CSSXref(":lang", ":lang()")}}
- {{CSSXref(":last-child")}}
- {{CSSXref(":last-of-type")}}
- {{CSSXref(":link")}}
- `:matches()` （旧式のセレクターで、 {{CSSXref( ":is", ":is()")}} の別名）
- {{CSSXref(":modal")}}
- {{CSSXref(":muted")}}
- {{CSSXref(":not", ":not()")}}
- {{CSSXref(":nth-child", ":nth-child()")}}
- {{CSSXref(":nth-of-type", ":nth-of-type()")}}
- {{CSSXref(":nth-last-child", ":nth-last-child()")}}
- {{CSSXref(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSXref(":only-child")}}
- {{CSSXref(":only-of-type")}}
- {{CSSXref(":open")}}
- {{CSSXref(":optional")}}
- {{CSSXref(":out-of-range")}}
- {{CSSXref(":past")}}
- {{CSSXref(":paused")}}
- {{CSSXref(":picture-in-picture")}}
- {{CSSXref(":placeholder-shown")}}
- {{CSSXref(":playing")}}
- {{CSSXref(":popover-open")}}
- {{CSSXref(":read-only")}}
- {{CSSXref(":read-write")}}
- {{CSSXref(":required")}}
- {{CSSXref(":root")}}
- {{CSSXref(":scope")}}
- {{CSSXref(":seeking")}}
- {{CSSXref(":stalled")}}
- {{CSSXref(":target")}}
- {{CSSXref(":user-invalid")}}
- {{CSSXref(":user-valid")}}
- {{CSSXref(":valid")}}
- {{CSSXref(":visited")}}
- {{CSSXref(":volume-locked")}}
- {{CSSXref(":where", ":where()")}}
- [`:-webkit-` 擬似クラス](/ja/docs/Web/CSS/Reference/Webkit_extensions#擬似クラス)
- [属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [クラスセレクター](/ja/docs/Web/CSS/Reference/Selectors/Class_selectors)
- [ID セレクター](/ja/docs/Web/CSS/Reference/Selectors/ID_selectors)
- [要素型セレクター](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [全称セレクター](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors)

CSS セレクターモジュールは、 {{CSSXref(":blank")}}、{{CSSXref(":current")}}、{{CSSXref(":local-link")}} の各擬似クラスも導入しています。現在のところ、これらの機能に対応しているブラウザーはありません。

## 用語

- {{glossary("Pseudo-class", "擬似クラス")}}（用語集の用語）
- [関数記法の擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes)
- [結合子](/ja/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#結合子)
- [単純セレクター](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#単純セレクター)
- [複合セレクター](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#複合セレクター)
- [複雑セレクター](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#複雑セレクター)
- [関連セレクター](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#関連セレクター)
- [詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)

## ガイド

- [CSS セレクターと結合子](/ja/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
  - : CSS セレクターと CSS 擬似モジュールで定義されている、さまざまな種類の単純なセレクターとさまざまな結合子の概要です。

- [CSS セレクターの構造](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure)
  - : CSS セレクターの構造と、CSS セレクターモジュールで紹介されている用語について、「単純なセレクター」から「寛容な相対セレクターリスト」まで解説しています。

- [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - : 擬似クラスは、文書ツリーには含まれない状態情報に基づいて要素を選択できるようにするセレクターの一覧で、さまざまな CSS モジュールや HTML で定義されています。

- [セレクターでの `:target` 擬似クラスの利用](/ja/docs/Web/CSS/Guides/Selectors/Using_:target)
  - : {{CSSXref(":target")}} 擬似クラスを使って、 URL のフラグメント識別子をターゲット要素にスタイルを設定する方法を学びます。

- [プライバシーと `:visited` セレクター](/ja/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
  - : ユーザーのプライバシー保護のために、`:visited` クラスに設定されているスタイル制限を追求します。

- [CSS の構成要素: CSS セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : 基本的な CSS セレクター入門で、[要素型、クラス、ID によるセレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)、[属性セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)、[擬似クラスと擬似要素](/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)、[結合子](/ja/docs/Learn_web_development/Core/Styling_basics/Combinators)のチュートリアルがあります。

- [学習: UI 擬似クラス](/ja/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : さまざまな状態のフォームをスタイル設定するために利用できる、さまざまな UI 擬似クラスについて学びます。

- [セレクターを使用した DOM 要素の特定](/ja/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
  - : セレクター API を使用すると、 JavaScript でセレクターを使用して DOM から要素ノードを取得できます。

## 関連概念

- {{CSSXref(":state","state()")}} 擬似クラス
- [CSS 入れ子](/ja/docs/Web/CSS/Guides/Nesting) モジュール
  - : [`&` 入れ子セレクター](/ja/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [CSS スコープ](/ja/docs/Web/CSS/Guides/Scoping)モジュール
  - {{CSSXref(":host")}} 擬似クラス
  - {{CSSXref(":host_function", ":host()")}} 擬似クラス
  - {{CSSXref(":host-context", ":host-context()")}} 擬似クラス
  - {{CSSXref(":has-slotted")}} 擬似クラス
  - {{CSSXref("::slotted")}} 擬似要素

- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)モジュール
  - {{cssxref("::column")}}

- [CSS ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)モジュール
  - {{CSSXref(":left")}} 擬似クラス
  - {{CSSXref(":right")}} 擬似クラス
  - {{CSSXref(":first")}} 擬似クラス
  - `:blank` 擬似クラス

- [CSS 擬似要素モジュール](/ja/docs/Web/CSS/Guides/Pseudo-elements)（HTML に含まれないものを表すために使用）
  - {{CSSXref("::after")}}
  - {{CSSXref("::before")}}
  - {{CSSXref("::file-selector-button")}}
  - {{CSSXref("::first-letter")}}
  - {{CSSXref("::first-line")}}
  - {{CSSXref("::grammar-error")}}
  - {{CSSXref("::marker")}}
  - {{CSSXref("::placeholder")}}
  - {{CSSXref("::selection")}}
  - {{CSSXref("::spelling-error")}}
  - {{CSSXref("::target-text")}}

- [CSS シャドウ部品モジュール](/ja/docs/Web/CSS/Guides/Shadow_parts)
  - {{CSSXref("::part")}} 擬似要素

- [CSS 位置指定レイアウトモジュール](/ja/docs/Web/CSS/Guides/Positioned_layout)
  - {{CSSxRef("::backdrop")}}

- その他の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - {{CSSxRef("::cue")}}

- {{CSSXref("@namespace")}} アットルール

- {{cssxref("important", "!important")}}
- [詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)
- [カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)

- {{domxref("Document.querySelector")}} メソッド
- {{domxref("Document.querySelectorAll")}} メソッド
- {{domxref("NodeList.forEach()")}} メソッド

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 擬似要素モジュール](/ja/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS カスケードと継承モジュール](/ja/docs/Web/CSS/Guides/Cascade)
- [CSS 入れ子モジュール](/ja/docs/Web/CSS/Guides/Nesting)
- [シャドウ DOM の使用](/ja/docs/Web/API/Web_components/Using_shadow_DOM)

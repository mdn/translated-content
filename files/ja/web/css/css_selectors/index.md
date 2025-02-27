---
title: CSS セレクター
slug: Web/CSS/CSS_selectors
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**CSS セレクター**モジュールは、要素を選択するパターンを定義し、一連の CSS ルールをその{{cssxref("specificity", "詳細度")}}とともに適用します。 CSS セレクターモジュールには、 60 以上のセレクターと 5 つの結合子が用意されています。[他のモジュール](#関連概念)は、さらに擬似クラスセレクターと擬似要素が提供されています。

CSS では、セレクターはスタイルを設定したい要素と照合、または選択するために使用されるパターンです。セレクターは JavaScript でも使用され、 [`NodeList`](/ja/docs/Web/API/NodeList) として返すDOMノードを選択することができます。

セレクターは、 CSS でも JavaScript でも、 HTML 要素の型、属性、現在の状態、さらには DOM 内の位置に基づいてターゲットを絞ることができます。結合子は、他の要素との関係に基づいて要素を選択できるようにすることで、要素を選択する際により正確に行えるようにします。

## リファレンス

### 結合子とセパレーター

- `+` （[次兄弟結合子](/ja/docs/Web/CSS/Next-sibling_combinator)）
- `>` （[子結合子](/ja/docs/Web/CSS/Child_combinator)）
- `||` （[列結合子](/ja/docs/Web/CSS/Column_combinator)）
- `~` （[後続兄弟結合子](/ja/docs/Web/CSS/Subsequent-sibling_combinator)）
- " " （[子孫結合子](/ja/docs/Web/CSS/Descendant_combinator)）
- `|` （[名前空間セパレーター](/ja/docs/Web/CSS/Namespace_separator)）

### セレクター

- {{CSSXref(":active")}}
- {{CSSXref(":any-link")}}
- {{CSSXref(":autofill")}}
- {{CSSXref(":blank")}}
- {{CSSXref(":buffering")}}
- {{CSSXref(":checked")}}
- {{CSSXref(":current")}}
- {{CSSXref(":current", ":current()")}}
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
- {{CSSXref(":indeterminate")}}
- {{CSSXref(":in-range")}}
- {{CSSXref(":invalid")}}
- {{CSSXref(":is", ":is()")}}
- {{CSSXref(":lang", ":lang()")}}
- {{CSSXref(":last-child")}}
- {{CSSXref(":last-of-type")}}
- {{CSSXref(":link")}}
- {{CSSXref(":local-link")}}
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
- {{CSSXref(":optional")}}
- {{CSSXref(":out-of-range")}}
- {{CSSXref(":past")}}
- {{CSSXref(":paused")}}
- {{CSSXref(":picture-in-picture")}}
- {{CSSXref(":placeholder-shown")}}
- {{CSSXref(":playing")}}
- {{CSSXref(":read-only")}}
- {{CSSXref(":read-write")}}
- {{CSSXref(":required")}}
- {{CSSXref(":root")}}
- {{CSSXref(":scope")}}
- {{CSSXref(":seeking")}}
- {{CSSXref(":stalled")}}
- {{CSSXref(":target")}}
- {{CSSXref(":target-within")}}
- {{CSSXref(":user-invalid")}}
- {{CSSXref(":user-valid")}}
- {{CSSXref(":valid")}}
- {{CSSXref(":visited")}}
- {{CSSXref(":volume-locked")}}
- {{CSSXref(":where", ":where()")}}
- [`:-webkit-` 擬似クラス](/ja/docs/Web/CSS/WebKit_Extensions#pseudo-classes)
- [属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)
- [クラスセレクター](/ja/docs/Web/CSS/Class_selectors)
- [ID セレクター](/ja/docs/Web/CSS/ID_selectors)
- [要素型セレクター](/ja/docs/Web/CSS/Type_selectors)
- [全称セレクター](/ja/docs/Web/CSS/Universal_selectors)

## 用語

- {{glossary("Pseudo-class", "擬似クラス")}}（用語集の用語）
- [関数記法の擬似クラス](/ja/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [結合子](/ja/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#結合子)
- [単純セレクター](/ja/docs/Web/CSS/CSS_selectors/Selector_structure#単純セレクター)
- [複合セレクター](/ja/docs/Web/CSS/CSS_selectors/Selector_structure#複合セレクター)
- [複雑セレクター](/ja/docs/Web/CSS/CSS_selectors/Selector_structure#複雑セレクター)
- [関連セレクター](/ja/docs/Web/CSS/CSS_selectors/Selector_structure#関連セレクター)
- [セレクターリスト](/ja/docs/Web/CSS/Selector_list)
- [詳細度](/ja/docs/Web/CSS/Specificity)

## ガイド

- [CSS セレクターと結合子](/ja/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)

  - : CSS セレクターと CSS 擬似モジュールで定義されている、さまざまな種類の単純なセレクターとさまざまな結合子の概要です。

- [CSS セレクターの構造](/ja/docs/Web/CSS/CSS_selectors/Selector_structure)

  - : CSS セレクターの構造と、CSS セレクターモジュールで紹介されている用語について、「単純なセレクター」から「寛容な相対セレクターリスト」まで解説しています。

- [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)

  - : 擬似クラスは、文書ツリーには含まれない状態情報に基づいて要素を選択できるようにするセレクターの一覧で、さまざまな CSS モジュールや HTML で定義されています。

- [学習: CSS セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

  - : CSS の構成要素の一部で、チュートリアルとして[要素・クラス・ID によるセレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)、[属性セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)、[擬似クラスと擬似要素](/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)、[結合子](/ja/docs/Learn_web_development/Core/Styling_basics/Combinators)、[競合の処理](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)、[カスケードレイヤー](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)があります。

- [セレクターでの `:target` 擬似クラスの利用](/ja/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)

  - : {{CSSXref(":target")}} 擬似クラスを使って、 URL のフラグメント識別子をターゲット要素にスタイルを設定する方法を学びます。

- [学習: UI 擬似クラス](/ja/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)

  - : さまざまな状態のフォームをスタイル設定するために利用できる、さまざまな UI 擬似クラスについて学びます。

- [セレクターを使用した DOM 要素の特定](/ja/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)

  - : セレクター API を使用すると、 JavaScript でセレクターを使用して DOM から要素ノードを取得できます。

## 関連概念

- {{CSSXref(":popover-open")}} 擬似クラス
- {{CSSXref(":state","state()")}} 擬似クラス
- [CSS 入れ子](/ja/docs/Web/CSS/CSS_nesting) モジュール
  - : [`&` 入れ子セレクター](/ja/docs/Web/CSS/Nesting_selector)
- [CSS scoping](/ja/docs/Web/CSS/CSS_scoping) モジュール

  - {{CSSXref(":host")}} 擬似クラス
  - {{CSSXref(":host_function", ":host()")}} 擬似クラス
  - {{cssxref(":host-context", ":host-context()")}} 擬似クラス
  - {{CSSXref("::slotted")}} 擬似要素

- [CSS 擬似要素モジュール](/ja/docs/Web/CSS/CSS_pseudo-elements)（HTML に含まれないものを表すために使用）

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

- [CSS シャドウ部品モジュール](/ja/docs/Web/CSS/CSS_shadow_parts)

  - {{CSSXref("::part")}} 擬似要素

- [CSS 位置指定レイアウトモジュール](/ja/docs/Web/CSS/CSS_positioned_layout)

  - {{CSSxRef("::backdrop")}}

- その他の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)

  - {{CSSxRef("::cue")}}

- {{CSSXref("@namespace")}} アットルール

- {{cssxref("important", "!important")}}
- [詳細度](/ja/docs/Web/CSS/Specificity)
- [カスケード](/ja/docs/Web/CSS/Cascade)

- {{domxref("Document.querySelector")}} メソッド
- {{domxref("Document.querySelectorAll")}} メソッド
- {{domxref("NodeList.forEach()")}} メソッド

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 擬似要素モジュール](/ja/docs/Web/CSS/CSS_pseudo-elements)
- [CSS カスケードと継承モジュール](/ja/docs/Web/CSS/CSS_cascade)
- [CSS 入れ子モジュール](/ja/docs/Web/CSS/CSS_nesting)
- [シャドウ DOM の使用](/ja/docs/Web/API/Web_components/Using_shadow_DOM)

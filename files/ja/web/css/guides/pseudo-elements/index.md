---
title: CSS 擬似要素
slug: Web/CSS/Guides/Pseudo-elements
original_slug: Web/CSS/CSS_pseudo-elements
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**CSS 擬似要素**モジュールは、文書ツリー内には直接存在しない抽象要素を定義します。擬似要素と呼ばれるこれらの抽象要素は、レンダーツリーの一部を表し、選択したりスタイル設定したりすることができます。擬似要素は、文書ツリーによって指定された以上の文書ツリーに関する抽象化をするために使用します。

擬似要素の接頭辞はダブルコロン (`::`) です。擬似要素をセレクターに追加すると（`p::first-line`　など）、擬似要素を対象としてスタイル設定することができます。

擬似要素は、 HTML に含まれないものや 余分なマークアップを追加することなく他の方法では対象とすることができないコンテンツの一部を対象とすることができます。 {{HTMLelement("input")}} 要素のプレースホルダーについて考えてみましょう。これは抽象要素であり、文書ツリー内の明確なノードではありません。このプレースホルダーを選択するには {{CSSXref("::placeholder")}} 擬似要素を用います。別の例として、 {{CSSXref("::selection")}} 擬似要素は、ユーザーが現在選択しているコンテンツに一致し、ユーザーがコンテンツを操作して選択を変更したときに一致するものをスタイル設定することができます。同様に、 {{CSSXref("::first-line")}} 擬似要素は、要素の最初の行を対象とし、要素の行の長さを問い合わせることなく、最初の行の文字数が変われば自動的に更新されます。

## リファレンス

### セレクター

- {{CSSXref("::after")}}
- {{CSSXref("::before")}}
- {{CSSXref("::file-selector-button")}}
- {{CSSXref("::first-letter")}}
- {{CSSXref("::first-line")}}
- {{CSSXref("::grammar-error")}}
- {{CSSXref("::highlight()")}}
- {{CSSXref("::marker")}}
- {{CSSXref("::placeholder")}}
- {{CSSXref("::selection")}}
- {{CSSXref("::spelling-error")}}
- {{CSSXref("::target-text")}}

この仕様では、 `::details-content` および `::search-text` 擬似要素、ならびに `::postfix` および `::prefix` サブ擬似要素も定義しています。これらは、現時点ではどのブラウザーでも対応していません。 {{CSSXref("::highlight()")}} 擬似要素は、このモジュールに記載されていますが、詳細は [CSS カスタムハイライト API](/ja/docs/Web/API/CSS_Custom_Highlight_API) が定義しています。

### インターフェイス

- {{DOMxRef("CSSPseudoElement")}} インターフェイス
  - {{DOMxRef("CSSPseudoElement.element")}} プロパティ
  - {{DOMxRef("CSSPseudoElement.type")}} プロパティ

### 用語

- 用語集の{{Glossary("Pseudo-element", "擬似要素")}}

## ガイド

- [CSS 擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : すべての CSS 仕様と WebVTT で定義されている擬似要素のアルファベット順リスト。

- [学習: 擬似クラスと擬似要素](/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : セレクターに関する CSS 構成要素の節の一部です。この記事では、擬似要素とは何か、擬似クラスとどのように組み合わせ、 `::before` および `::after` 擬似要素でコンテンツを生成するために使用できるかを定義します。

- [擬似要素を使用した装飾的なボックスの作成](/ja/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)
  - : 視覚効果のために `::before` と `::after` 擬似要素を使用して生成コンテンツをスタイル設定する例です。

## 関連する概念

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) キュー:
  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)モジュール
  - {{cssxref("::column")}}

- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS スコープ化](/ja/docs/Web/CSS/Guides/Scoping)モジュール
  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- [CSS シャドウ部品](/ja/docs/Web/CSS/Guides/Shadow_parts)モジュール
  - {{CSSXref("::part")}}

- [CSS ビュー遷移](/ja/docs/Web/CSS/Guides/View_transitions)モジュール
  - {{cssxref("::view-transition")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-image-pair()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-group()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-new()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-old()")}} {{Experimental_Inline}}

- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)
  - [属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
  - [結合子](/ja/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#結合子)
  - [クラスセレクター](/ja/docs/Web/CSS/Reference/Selectors/Class_selectors)
  - [ID セレクター](/ja/docs/Web/CSS/Reference/Selectors/ID_selectors)
  - [型セレクター](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors)
  - [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - [全称セレクター](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors)

- [`placeholder`](/ja/docs/Web/HTML/Reference/Elements/input#placeholder) 属性（`<input>` 要素）
- [`:placeholder-shown`](/ja/docs/Web/CSS/Reference/Selectors/:placeholder-shown) セレクター

- [CSS 生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)
  - {{cssxref("content")}} プロパティ
  - {{cssxref("quotes")}} プロパティ

- [テキストフラグメント](/ja/docs/Web/URI/Reference/Fragment/Text_fragments)

- {{DOMXref("AnimationEvent.pseudoElement")}} プロパティ
- {{DOMXref("KeyframeEffect.pseudoElement")}} プロパティ
- {{DOMXref("TransitionEvent.pseudoElement")}} プロパティ

## 仕様書

{{Specifications}}

## 関連情報

- [詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
- [CSS シャドウ部品](/ja/docs/Web/CSS/Guides/Shadow_parts)モジュール
- [CSS 生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)モジュール
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
- [CSS カスタムハイライト API](/ja/docs/Web/API/CSS_Custom_Highlight_API)

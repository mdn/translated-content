---
title: CSS オーバースクロール動作
slug: Web/CSS/Guides/Overscroll_behavior
original_slug: Web/CSS/CSS_overscroll_behavior
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

**CSS オーバースクロール動作**モジュールは、{{Glossary("Scroll_container", "スクロールコンテナー")}}のスクロール位置が{{Glossary("Scroll_boundary", "スクロール境界")}}に達したときの挙動を制御するプロパティを提供します。この側面を制御することは、埋め込まれたスクロール可能な領域が親コンテナーのスクロールを発生させないようにするシナリオで具体的な有益なことです。

ブログにコメントするとき、指定された {{htmlelement("textarea")}} の長さを超えてコメントすると、テキストエリアの終わりを越えてスクロールするとブログ全体がスクロールすることに気づくかもしれません。これは、{{Glossary("Scroll_boundary", "スクロール境界")}}として知られるスクロール可能な領域の終わりに達すると、他にもコンテンツやページ全体がスクロールする可能性があるためです。このようなスクロールの動作は{{Glossary("Scroll_chaining", "スクロール連鎖")}}と呼ばれます。

要素のコンテンツがそのコンテナーよりも大きく、 {{cssxref("overflow")}} でスクロールを許可しているか既定でスクロールするものであり（`<textarea>`のように）、要素のスクロール可能領域を越えてスクロールを続けると、親要素または基盤となるページでスクロールが開始されます。

逆に、ウェブサイトの利用規約を最後までスクロールし、チェックボックスを有効にするためにコンテンツの最後に到達しても、ページが強制的にスクロールされたり、（携帯電話のように）跳ね返ったりしない場合があります。この例は、オーバースクロールの動作を制御し、スクロールの連鎖を防ぐことができることを示しています。

このモジュールはオーバースクロールの動作を定義します。ユーザーがスクロール可能な要素の境界を超えてスクロールしたときの操作を指定します。

## リファレンス

### CSS プロパティ

- {{CSSxRef("overscroll-behavior")}} 一括指定
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}

### 用語集の用語

- {{Glossary("Scroll_boundary", "スクロール境界")}}
- {{Glossary("Scroll_chaining", "スクロール連鎖")}}

## ガイド

- [CSS の構成要素: コンテンツのオーバーフロー](/ja/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : オーバーフローとは何か、どのように制御するのかを学びます。

## 関連概念

- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA ロール
- [包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)の概念
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール:
  - {{cssxref("overflow")}} 一括指定プロパティ
    - {{Cssxref("overflow-x")}}
    - {{Cssxref("overflow-y")}}
    - {{CSSxRef("overflow-block")}}
    - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-clip-margin")}} プロパティ
  - {{CSSxRef("scroll-behavior")}} プロパティ
  - {{CSSxRef("text-overflow")}} プロパティ
- {{Glossary("Scroll_container", "スクロールコンテナー")}}と[スクロールポート](/ja/docs/Glossary/Scroll_container#スクロールポート)（用語集の用語）

- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール:
  - {{cssxref("scroll-padding")}} 一括指定プロパティ
  - {{cssxref("scroll-snap-type")}} プロパティ
  - {{cssxref("scroll-margin")}} 一括指定プロパティ
  - {{cssxref("scroll-snap-stop")}} プロパティ
  - {{cssxref("scroll-snap-align")}} プロパティ

- [CSSOM view](/ja/docs/Web/CSS/Guides/CSSOM_view) モジュール:
  - {{domxref("Element.getBoundingClientRect()")}} メソッド
  - {{domxref("Element.scroll()")}} メソッド
  - {{domxref("Element.scrollBy()")}} メソッド
  - {{domxref("Element.scrollIntoView()")}} メソッド
  - {{domxref("Element.scrollTo()")}} メソッド
  - {{domxref("Document.scroll_event", "scroll")}} （Document のイベント）

## 仕様書

{{Specifications}}

## 関連情報

- [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュール
- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)モジュール
- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
- [Take control of your scroll - customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior) (developer.chrome.com, 2017)

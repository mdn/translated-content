---
title: モバイルアクセシビリティのチェックリスト
slug: Web/Accessibility/Mobile_accessibility_checklist
---

このドキュメントは、モバイルアプリ開発者向けのアクセシビリティ要件の簡潔なチェックリストを提供します。 それはより多くのパターンが生じるにつれて絶えず進化することを意図しています。

## 色

- カラーコントラストは、[WCAG 2.0](http://www.w3.org/TR/WCAG/)（英語）の AA レベルの要件に準拠**しなければならない**。

  - 通常のテキストでは、4.5:1 のコントラスト比（18 ポイント未満または 14 ポイント未満の太字）。
  - 大きなテキストでは、3:1 のコントラスト比（少なくとも 18 ポイントまたは 14 ポイントの太字）。

- 色で伝えられる情報は、他の方法でも利用可能**でなければならない**（リンクのための下線付きテキストなど）。

## 可視性

- {{cssxref("opacity")}} がゼロ、{{cssxref("z-index")}} 順、画面外配置のようなコンテンツ非表示テクニックは、可視性を扱うためだけに使用**してはいけない**。
- 現在の表示画面以外のものは、本当に見えないもの**でなければならない**（特に複数のカードを含む単一ページのアプリに関連します）。

  - [`hidden`](/ja/docs/Web/HTML/Global_attributes#hidden) 属性、{{cssxref("visibility")}} スタイルプロパティ、または {{cssxref("display")}} スタイルプロパティを**使用します**。
  - 絶対に避けられない場合を除いて、`aria-hidden` 属性は使用**するべきではない**（SHOULD NOT）。

## フォーカス

- 全てのアクティブ化可能要素はフォーカス可能**でなければならない**。

  - リンク、ボタン、フォームフィールドのような標準コントロールは、デフォルトでフォーカス可能です。
  - 非標準コントロールには、`button`、`link`、`checkbox` のような適切な [ARIA のロール](https://www.w3.org/TR/wai-aria/#roles)（英語）が割り当てられて**いなければならない**。

- フォーカスは、論理的な順序と一貫した方法で扱われるべきです。

## 同等のテキスト

- アプリ内の全ての非厳密で提示的な非テキスト要素には、同等のテキストを提供**しなければならない**。

  - 必要に応じて [`alt`](/ja/docs/Web/HTML/Element/img#alt) と [`title`](/ja/docs/Web/HTML/Global_attributes#title) を使用してください（良いガイドについては、[HTML の title 属性の使用](http://blog.paciellogroup.com/2013/01/using-the-html-title-attribute-updated/)（英語）に関する Steve Faulkner の投稿を参照してください）。
  - 上記の属性が適用できない場合は、`aria-label`、`aria-labelledby`、`aria-describedby` のような適切な [ARIA のプロパティ](https://www.w3.org/TR/wai-aria/#global_states)（英語）を使用してください。

- テキストの画像は避け**なければならない**。
- スクリーンリーダーを使用するユーザーのために、全てのフォームコントロールにラベル（{{htmlelement("label")}} 要素）を持た**なければならない**。

## ステートの取り扱い

- ラジオボタンやチェックボックスのような標準コントロールは、オペレーティングシステムによって処理されます。 ただし、他のカスタムコントロールでは、`aria-checked`、`aria-disabled`、`aria-selected`、`aria-extended`、および `aria-press` のような [ARIA のステート](https://www.w3.org/TR/wai-aria/#attrs_widgets)（英語）を介してステートの変更を提供する必要があります。

## 一般的なガイドライン

- アプリのタイトルを提供**しなければならない**。
- 見出しは階層構造を壊**してはならない**。

  ```html
  <h1>最上位の見出し</h1>
  <h2>副見出し</h2>
  <h2>別の副見出し</h2>
  <h3>下位の見出し</h3>
  ```

- `banner`、`complementary`、`contentinfo`、`main`、`navigation`、`search` のような [ARIA のランドマークロール](https://www.w3.org/TR/wai-aria/#landmark_roles)（英語）は、アプリやドキュメントの構造を説明するために使用**するべきです**（SHOULD）。
- タッチイベントハンドラは、`touchend` イベントでのみトリガ**されなければならない**。
- タッチターゲットは、ユーザーが対話するのに十分な大きさ**でなければならない**（有用なタッチターゲットサイズのガイドラインについては、[BBC モバイルアクセシビリティ・ガイドライン](http://www.bbc.co.uk/guidelines/futuremedia/accessibility/mobile/design/touch-target-size)（英語）を参照してください）。

> **メモ:** [この文書のオリジナル版](http://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html)（英語）は、[Yura Zenevich](http://yzen.github.io/) によって書かれました。

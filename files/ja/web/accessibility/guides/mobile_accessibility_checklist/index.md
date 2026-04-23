---
title: モバイルアクセシビリティのチェックリスト
slug: Web/Accessibility/Guides/Mobile_accessibility_checklist
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

このドキュメントは、モバイルアプリ開発者向けのアクセシビリティ要件の簡潔なチェックリストを提供します。 それはより多くのパターンが生じるにつれて絶えず進化することを意図しています。

## 色

- 色のコントラストは、 [WCAG 2.2 AA level requirements](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) に準拠しなければなりません。
  - 通常のテキストでは、4.5:1 のコントラスト比（18 ポイント未満または太字で 14 ポイント未満）。
  - 大きなテキストでは、3:1 のコントラスト比（18 ポイント以上または太字で 14 ポイント以上）。

- 色で伝えられる情報は、他の方法でも利用可能でなければならない（リンクのための下線付きテキストなど）。

## 可視性

- ゼロの opacity、z-index 順、画面外配置のようなコンテンツ非表示テクニックは、可視性を扱うためだけに使用してはなりません。
- 現在の表示画面以外のものは、本当に見えなくしなければなりません（特に複数のカードを含む単一ページのアプリに関連します）。
  - `hidden` 属性、`visibility` または `display` のスタイルプロパティを使用します。
  - 絶対に避けられない場合を除いて、 `aria-hidden` 属性は使用すべきではありません。

## フォーカス

- 全てのアクティブ化可能要素はフォーカス可能でなければなりません。
  - リンク、ボタン、フォームフィールドのような標準コントロールは、既定でフォーカス可能です。
  - 標準外のコントロールには適切な [ARIA ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles)、例えば、`button`、`link`、`checkbox` などが割り当てられていなければなりません。

- フォーカスは、論理的な順序と一貫した方法で扱われるべきです。

## 同等のテキスト

- アプリ内の全ての非厳密で提示的な非テキスト要素には、同等のテキストを提供しなければなりません。
  - 必要に応じて `alt` や `title` を使用してください（良いガイドについては、 [Using the HTML title attribute](https://www.tpgi.com/using-the-html-title-attribute-updated/) （英語）に関する Steve Faulkner の投稿を参照してください）。
  - 上記の属性が適用できない場合は、適切な [ARIA 状態とプロパティ](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes)、例えば `aria-label`、`aria-labelledby`、`aria-describedby` などを使用してください。

- テキストの画像は避ける必要があります。
- ラベルとして表示されるテキスト（またはテキストの画像）を持つすべてのユーザーインターフェイス要素は、その要素のプログラム上の[名前](https://w3c.github.io/wcag/guidelines/22/#dfn-name)と同じテキストを利用できる必要があります。 [WCAG 2.1: Label in name.](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
- すべてのフォームコントロールには、スクリーンリーダーのユーザーのために、ラベル（{{ htmlelement("label") }} 要素）を付ける必要があります。

## 状態の取り扱い

- ラジオボタンやチェックボックスのような標準コントロールは、オペレーティングシステムによって処理されます。 ただし、他のカスタムコントロールでは [ARIA 状態](https://w3c.github.io/aria/#state_prop_def)（英語）、例えば `aria-checked`、`aria-disabled`、`aria-selected`、`aria-expanded`、 `aria-press` などを介して状態の変更を提供する必要があります。

## 向き

- コンテンツは、必要でない限り、縦向きや横向きなどの単一の方向に制限すべきではありません。 [WCAG 2.1: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)
  - 方向が重要な例としては、ピアノのアプリケーションや銀行の小切手などが挙げられます。

## 一般的なガイドライン

- アプリのタイトルを提供しなければならなりません。
- 見出しは階層構造を壊してはなりません。

  ```html
  <h1>最上位の見出し</h1>
  <h2>副見出し</h2>
  <h2>別の副見出し</h2>
  <h3>下位の見出し</h3>
  ```

- [ARIA ランドマークロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles)、例えば `banner`、`complementary`、`contentinfo`、`main`、`navigation`、`search` などは、アプリや文書の構造を記述するために使用するべきです。
- タッチイベントハンドラーは、次のことを保証してください（[WCAG 2.1: Pointer Cancellation](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)。
  - down イベントは、機能のどの部分の実行にも使用しないでください。
  - 上記が失敗した場合、機能の完了は up イベントで行われ、完了前に措置を中止したり、完了後に措置を元に戻すためのメカニズムが利用できます。
  - 上記が失敗した場合、 up イベントは down イベントで開始されたすべての措置を元に戻すことができる必要があります。
  - 通常、実際の使い勝手をシミュレートしたり、リアルタイムのフィードバックを提供したりするために、 down イベントで措置を開始することが不可欠な場合は、上記のすべてに違反してもかまいません。例えば、ゲームコントロール、ピアノキーボード、仮想キーボードなどです。

- タッチターゲットは、ユーザーが対話するのに十分な大きさでなければならない（有用なタッチターゲットサイズのガイドラインについては、[BBC モバイルアクセシビリティ・ガイドライン](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size)（英語）を参照してください）。

> [!NOTE]
> [この文書のオリジナル版](http://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html)（英語）は、[Yura Zenevich](https://yzen.github.io/) が執筆しました。

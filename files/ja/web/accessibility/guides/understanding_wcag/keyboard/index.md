---
title: キーボードアクセシブル
slug: Web/Accessibility/Guides/Understanding_WCAG/Keyboard
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

ウェブページを完全にアクセシブルにするためには、キーボードのみを使用してアクセスおよび操作できる必要があります。これにはスクリーンリーダーのユーザーがふくまれるのはもちろんのこと、マウスやトラックボールなどのポインティングデバイスの操作が困難なユーザー、現在マウスが動作していないユーザー、可能な限りキーボード操作を好むユーザーも含まれます。

## フォーカス可能な要素はインタラクティブな意味論を持つべきである

キーボードでフォーカス可能な要素は、インタラクティブであるべきです。つまり、ユーザーがその要素に対して何らかの操作を行うと、何らかの変化（リンクの起動やオプションの変更など）を引き起こせる必要があります。

> [!NOTE]
> このルールに重要な例外が一つあります。それは、要素に `role="document"` が適用されており、かつその要素がインタラクティブなコンテキスト（例: `role="application"`）の**内部**にある場合です。このような場合、内包された文書にフォーカスを当てることだけが、支援技術 (AT) を非インタラクティブな状態（しばしば「閲覧モード」と呼ばれる）に戻す唯一の方法となります。

ほとんどのインタラクティブな要素は、デフォルトでフォーカス可能です。要素に `tabindex=0` 属性を追加することで、フォーカス可能にできます。ただし、`tabindex` を追加するのは、キーボードイベント用の適切なイベントハンドラーを定義するなどして、その要素をインタラクティブにした場合に限るべきです。

### 関連情報

- HTML の [tabindex](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) グローバル属性
- Element: [keydown イベント](/ja/docs/Web/API/Element/keydown_event)
- Element: [keyup イベント](/ja/docs/Web/API/Element/keyup_event)

## `tabindex` 属性を 0 より大きな値で使用しない

`tabindex` 属性は、要素がキーボード操作でフォーカス可能であることを示します。値が 0 の場合、その要素は HTML 文書内の要素の順序に基づくデフォルトのフォーカス順序に含まれます。正の値を指定すると、要素はデフォルトの順序よりも先に配置され、正の値を持つ要素は `tabindex` 値の順序（1、次に 2、次に 3…）でフォーカスされます。

フォーカス順序がページの論理的な順序と異なる場合、キーボードのみを使用するユーザーが混乱します。より良い方法は、フォーカス可能な要素が論理的な順序で配置されるように HTML 文書を構造化し、正の `tabindex` 値で順序付けし直す必要がないようにすることです。

### 関連情報

- HTML の [tabindex](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) グローバル属性
- [Understanding focus order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [Don't use tabindex greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)

## クリック可能な要素は、フォーカス可能でかつインタラクティブな意味論を持つ必要がある

ポインティングデバイス（マウスなど）でクリック可能な要素は、キーボードでもフォーカス可能であるべきであり、ユーザーはそれを操作することで、何かを行うことができるようにすべきです。

要素は、`onclick` イベントハンドラーが定義されている場合にクリック可能になります。 `tabindex=0` 属性を追加することでフォーカス可能にすることができます。 `onkeydown` イベントハンドラーを定義することで、キーボード操作可能にできます。ほとんどの場合、イベントハンドラーによる動作はどちらのイベント型でも同じであるべきです。

### 関連情報

- HTML の [tabindex](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) グローバル属性
- Element: [keydown イベント](/ja/docs/Web/API/Element/keydown_event)
- Element: [keyup イベント](/ja/docs/Web/API/Element/keyup_event)

## インタラクティブな要素は、キーボードを使用してアクティブ化できなければならない

ユーザーがタッチ操作やポインティングデバイスで要素を操作できる場合、その要素はキーボード操作にも対応すべきです。つまり、タッチイベントやクリックイベント用のイベントハンドラーを定義しているなら、キーボードイベント用のハンドラーも定義する必要があります。キーボードイベントハンドラーは、タッチやクリックのハンドラーと実質的に同等の操作を可能にするべきです。

### 関連情報

- Element: [keydown イベント](/ja/docs/Web/API/Element/keydown_event)
- Element: [keyup イベント](/ja/docs/Web/API/Element/keyup_event)

## インタラクティブな要素はフォーカス可能でなければならない

ユーザーが（タッチやポインティングデバイスなどを使って）要素を操作できる場合、キーボードを使ってフォーカス可能であるべきです。`tabindex=0` 属性を追加することでフォーカス可能にできます。これにより、HTML 文書で定義された要素の順序に従い、<kbd>Tab</kbd> キーを押すことでフォーカス可能な要素のリストに追加されます。

### 関連情報

- HTML の [tabindex](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) グローバル属性

## フォーカス可能な要素はフォーカスのスタイルが必要

キーボードフォーカスを受け取れる要素は、フォーカス状態を示す可視的なスタイルを持つべきです。これには CSS 擬似クラス [`:focus`](/ja/docs/Web/CSS/Reference/Selectors/:focus) と [`:focus-visible`](/ja/docs/Web/CSS/Reference/Selectors/:focus-visible) が使用できます。

リンクや入力フィールドなどの標準的なフォーカス可能な要素は、デフォルトでブラウザーによって特別なスタイルが適用されます。そのため、フォーカス時のスタイルをより際立たせたい場合を除き、こうした要素に対してフォーカス時のスタイルを指定する必要はないかもしれません。

独自のフォーカス可能なコンポーネントを作成する場合は、必ずそれらのフォーカス時のスタイルも定義してください。

### 関連情報

- [Using CSS to change the presentation of a UI component when it receives focus](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)

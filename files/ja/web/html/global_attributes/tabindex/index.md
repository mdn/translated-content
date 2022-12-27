---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
---

{{HTMLSidebar("Global_attributes")}}

**`tabindex`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、要素が入力フォーカスを持てることと、キーボードの順次ナビゲーション (ふつうは名前の由来である <kbd>Tab</kbd> キーによる) に加わるかどうか、どの位置に加わるかを示します。

{{EmbedInteractiveExample("pages/tabbed/attribute-tabindex.html","tabbed-standard")}}

値としては整数値を受け付け、値によって次のような様々な結果になります。

- _負の数_ (ふつう `tabindex="-1"`) は、その要素がキーボードの順次ナビゲーションでは到達できませんが、 JavaScript や視覚的にフォーカスを持つことができるという意味です。これは主に、 JavaScript で操作可能なウィジェットを作成するのに有用です。

  > **メモ:** 負の値はオフスクリーンのコンテンツで特定のイベントにより現れる場合に有用です。ユーザーは負の `tabindex` が付いた要素に、キーボードを使用してフォーカスを与えることはできませんが、スクリプトは `focus()` [メソッド](/ja/docs/Web/API/HTMLElement/focus)を呼び出すことでフォーカスを与えることはできます。

- `tabindex="0"` は、要素がキーボードの順次ナビゲーションでフォーカスを持つことが可能ですが、その順序は文書のソース内の順序で決定されることを表します。
- *正の数*は、要素がキーボードの順次ナビゲーションでフォーカスを持つことが可能であり、その順序は数値で定義されることを表します。つまり、 `tabindex="4"` は `tabindex="5"` よりも前にフォーカスが来ますが、 `tabindex="3"` よりも後だということです。複数の要素に同じ正の数の `tabindex` が指定された場合は、文書のソース内の互いの位置に従った順序になります。 `tabindex` の最大値は 32767 です。指定されなかった場合、既定値の 0 を取ります。

  > **警告:** `tabindex` の値に 0 よりも大きな値を使用することは避けてください。そうすると、支援技術に頼っている人がページコンテンツを移動したり操作したりすることが難しくなります。代わりに、論理的な順序で要素を並べて文書を書いてください。

`tabindex` 属性を{{htmlelement("div")}} に設定する場合は、子のコンテンツにも `tabindex` を設定しなければ、矢印キーを使用して子のコンテンツをスクロールできなくなります。 [`tabindex` のスクロール効果を理解するには、こちらの fiddle を確認してください](https://jsfiddle.net/jainakshay/0b2q4Lgv/)。

## アクセシビリティの考慮事項

キーボード入力で対話的にフォーカスを設定できるようにするために、 [対話型コンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#対話型コンテンツ)ではないものに `tabindex` 属性を組み合わせて使用することは避けてください。例えば、 {{HTMLElement("button")}} 要素を使用する代わりに {{HTMLElement("div")}} 要素を使用してボタンを記述する場合などです。

対話的要素でないものを使用して対話的コンポーネントを記述すると、[アクセシビリティツリー](/ja/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs)に掲載されません。これは、支援技術によって移動や操作を行うことを阻害します。このようなコンテンツは、代わりに ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, などの) 対話型要素を使用して意味的に記述するべきです。これらの要素には、 [ARIA](/ja/docs/Web/Accessibility/ARIA) によって管理しなければならないアクセシビリティにステータスを伝える、組み込みのロールと状態があります。

- [Using the tabindex attribute | The Paciello Group](https://developer.paciellogroup.com/blog/2014/08/using-the-tabindex-attribute/)

## 仕様書

| 仕様書                                                                                           | 状態                             | 備考                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "interaction.html#attr-tabindex", "tabindex")}} | {{Spec2('HTML WHATWG')}} | 最新のスナップショットである {{SpecName('HTML5.1')}} から変更なし。                                                                                                                                                |
| {{SpecName('HTML5.1', "editing.html#attr-tabindex", "tabindex")}}         | {{Spec2('HTML5.1')}}     | {{SpecName('HTML WHATWG')}} のスナップショットであり、 {{SpecName('HTML5 W3C')}} から変更なし。                                                                                                             |
| {{SpecName('HTML5 W3C', "editing.html#attr-tabindex", "tabindex")}}         | {{Spec2('HTML5 W3C')}}     | {{SpecName('HTML WHATWG')}} のスナップショット。 {{SpecName("HTML4.01")}} との違いは、すべての要素でこの属性に対応したこと (グローバル属性化)。                                                            |
| {{SpecName('HTML4.01', 'interact/forms.html#adef-tabindex', 'tabindex')}} | {{Spec2('HTML4.01')}}     | {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("button")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} 要素でのみ対応。 |

## ブラウザーの互換性

{{Compat("html.global_attributes.tabindex")}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)。
- {{domxref("HTMLElement.tabIndex")}} は、この属性を反映します。
- tabindex に関するアクセシビリティの問題について、 Adrian Roselli による [Don’t Use Tabindex Greater than 0](http://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) を参照。

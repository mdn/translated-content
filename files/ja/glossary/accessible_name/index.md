---
title: Accessible name (アクセシブル名)
slug: Glossary/Accessible_name
l10n:
  sourceCommit: d9c3dac231bb6cbc138d761dbe0ad2f9a38b864f
---

{{GlossarySidebar}}

**アクセシブル名**とは、ユーザーインターフェイス要素の名前のことで、支援技術のユーザーに要素のラベル付けを提供する HTML 要素に関連付けられたテキストのことです。

アクセシブル名は、要素の目的や意図を伝えます。これはユーザーが、その要素が何のためにあり、どのように操作するのかを理解するのに役立ちます。一般的に、要素のアクセシブル名はページ内で固有のものであるべきです。これにより、ユーザーは要素を他の要素と判別しやすくなり、操作したい要素を特定しやすくなります。

要素や HTML マークアップによっては、アクセシブル名の値は可視コンテンツ（例えば {{HTMLElement("figcaption")}} 内のテキスト）か不可視コンテンツ（例えば要素に設定した `aria-label` 属性）、あるいはどちらも組み合わせたものから得られるかもしれません。要素のアクセシビリティ名がどのように決定されるかは、[アクセシブル名計算](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation)に基づいており、要素によって異なります。

アクセシブル名として可視テキストを使用するのが最善です。 {{HTMLElement("a")}}、{{HTMLElement("td")}}、{{HTMLElement("button")}} など多くの要素は、そのコンテンツからアクセシブル名を取得します。例えば、 `<a href="foo.html">Bar</a>` と指定された場合、このハイパーリンクのアクセシブル名は "Bar" です。

他の要素は、関連する要素のコンテンツからアクセシブル名を取得します。例えば、 {{HTMLElement("fieldset")}} や {{HTMLElement("table")}} 要素がそれぞれ子孫の {{HTMLElement("legend")}} や {{HTMLElement("caption")}} 要素を格納する場合、親のアクセシブル名を提供する入れ子要素の関連付けは自動的に行われます。 {{HTMLElement("textarea")}} や {{HTMLElement("input")}} のようなフォーム要素の場合、アクセシブル名は関連する {{HTMLElement("label")}} 要素から決まります。この関連付けは `<label>` 要素の `for` 属性をフォーム要素の `id` と照合するように設定することで明示的に定義する必要があります。あるいは、フォームコントロールが `<label>` 要素の中に直接入れ子になっている場合には、暗黙的な関連付けが作成されます。

要素によっては、アクセシブル名は要素の属性から決まります。例えば {{HTMLElement("img")}} の場合は `alt` 属性です。 `<img src="grape.jpg" alt="banana"/>` と指定された場合、画像のアクセシブル名は "banana" です。

可視コンテンツと要素、または複数のテキストノードと要素の関連付けを作成するには、 [`aria-labeledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 属性を使用します。アクセシブル名を必要とする UI 要素に関連付ける可視テキストがない場合、 [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性を使用します。 {{HTMLElement("code")}}、{{HTMLElement("del")}}、{{HTMLElement("mark")}} のようなインラインテキストをマークアップする要素には、名前を追加すべきではありません。

テキストコンテンツの節など、多くの要素にはアクセシブル名は必要ありません。コントロールはすべてアクセシブル名を持つべきです。情報を伝え、純粋に表示するものではない画像もすべてそうです。

支援技術は、要素のロールとともにアクセシブル名であるアクセシビリティ名プロパティをユーザーに提供します。多くの要素はアクセシブル名を必要としませんが、いくつかのコンテンツ[ロール](/ja/docs/Web/Accessibility/ARIA/Roles)は、アクセシブル名を持つ恩恵を受けることができます。例えば、 [`tabpanel`](/ja/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) は、ユーザーが [`tab`](/ja/docs/Web/Accessibility/ARIA/Roles/tab_role) ロールを持つ関連要素をアクティブにした後に現れるコンテンツの節です。このロールは {{HTMLElement("div")}} 要素のように、必要な名前が付いていない要素に設定することができます。 `tab` はコントロールであり、アクセシビリティ名を持たなければなりません。 `tabpanel` は `tab` の子要素（コンテンツ節）です。 `aria-labelledby` を `tabpanel`に追加するのが最善の手法です。

## 関連情報

- [ARIA ロール](/ja/docs/Web/Accessibility/ARIA/Roles)
- [ARIA 属性](/ja/docs/Web/Accessibility/ARIA/Attributes)
- [アクセシビリティ](/ja/docs/Web/Accessibility)
- [アクセシビリティを学ぶ](/ja/docs/Learn/Accessibility)

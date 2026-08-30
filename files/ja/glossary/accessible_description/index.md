---
title: Accessible description (アクセシブル説明)
slug: Glossary/Accessible_description
l10n:
  sourceCommit: 96a73163513476fe49bfba695acedb7622135354
---

**アクセシブル説明**は、支援技術のユーザーが UI 要素とそのコンテキストを理解するのに役立つ追加情報を提供するユーザーインターフェイス要素の説明です。これは HTML または SVG 要素に関連付けられており、その要素の{{glossary("accessible name", "アクセシブル名")}}で指定された情報に加えて、その目的に関する追加のコンテキストをユーザーに提供します。これは、{{glossary("Screen_reader", "スクリーンリーダー")}}のような支援技術を使うユーザーにとって特に重要です。要素のアクセシブル説明は、{{glossary("accessibility tree", "アクセシビリティツリー")}}の一部です。

例えば、{{htmlelement("table")}} のアクセシブル名は最初の {{htmlelement("caption")}} で提供されます。複雑なデータ表の場合、その表を説明する 1 ～ 2 文を提供するとよいでしょう。これは、視覚的にもソースコードの順序においても、表の直前の段落または後の段落に配置することができます。ソース内の順序が異なる場合、あるいは関連付けを明示的に示す場合には、[`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性を使用して、表とその説明を関連付けることができます。

同様に、ユーザーにパスワードを生成するよう求められた場合、{{htmlelement("input")}} の `password` 型に対する `<label>` が、そのアクセシブル名を提供します。適切なアクセシブル説明には、すべてのユーザーに視覚的にわかる形で、パスワードの要件が記載されている必要があります。これは、`aria-describedby` 属性を通じて入力フィールドに明示的に関連付けられ、これにより、そのノードの 'description' としてアクセシビリティツリーに追加されます。

説明はテキスト文字列に縮小されます。パスワードの例では、入力要素の `aria-describedby` 属性の値が、要件のリストを含む HTML の {{htmlelement("ul")}} の `id` である場合、説明はリストアイテムすべてに対するテキストおよびテキスト相当値をつなぎ合わせたものになります。

ページ上のどの要素についても、アクセシブル説明を調べることができます。ブラウザー開発者ツールのアクセシビリティタブを見ていくと、現在選択されている要素のアクセシビリティ情報が提供されています。

## アクセシブル説明の生成

HTML 要素の場合、要素にアクセシブル説明がないときは、その説明を関連する要素にプログラムによって関連付ける必要があります。アクセシビリティオブジェクトモデル (AOM) は、アクセシブル説明が定義されるまで、以下の機能を順に確認して、その説明を生成します。

1. [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性

2. [`aria-description`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) 属性

3. その機能が{{glossary("accessible name", "アクセシブル名")}}を定義する用意ために使用されていない場合、説明の計算に関与する言語固有の特徴。
   - {{htmlelement("summary")}} は、それを含んでいる {{htmlelement("details")}} のコンテンツによって説明されます。
   - {{htmlelement("input")}} ボタン（type 属性が `button`、`submit`、`reset` のもの）は、その `value` 属性の値によって説明されます。
   - SVG では、{{svgelement("desc")}} 要素が存在する場合はそのコンテンツ、存在しない場合は、子孫のテキストコンテナー要素（つまり {{svgelement("text")}}）に含まれているテキストが記述対象となります（ただし、それらがすでに{{glossary("accessible name", "アクセシブル名")}}の定義に使用されていない場合に限ります）。

4. 上記のそれからも説明が得られない場合は、[`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性が使用されます（その `title` がその要素の{{glossary("accessible name", "アクセシブル名")}}でない場合）。

5. 以上の中でアクセシブル説明が定義されていない場合、アクセシブル説明は空となります。

HTML におけるアクセシブル説明を定義するための手順は、[HTML-AAM アクセシブル説明](https://w3c.github.io/html-aam/#accdesc-computation)に定められています。SVG 要素のアクセシブル説明については、[SVG-AAM アクセシブル説明](https://w3c.github.io/svg-aam/#mapping_additional_nd)に挙げられているわずかな違いを除き、同様の手順に従います。

## 関連情報

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [アクセシビリティ](/ja/docs/Web/Accessibility)
- [アクセシビリティを学ぶ](/ja/docs/Learn_web_development/Core/Accessibility)
- [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility) - Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/ja/docs/Web/Accessibility/ARIA)
- [The W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- 関連用語:
  - {{Glossary("Accessibility", "アクセシビリティ")}}
  - {{Glossary("Accessibility tree", "アクセシビリティツリー")}}
  - {{Glossary("Accessible name", "アクセシブル名")}}
  - {{Glossary("ARIA")}}

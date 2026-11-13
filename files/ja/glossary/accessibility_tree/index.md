---
title: Accessibility tree (アクセシビリティツリー)
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: 7d4f930455a349e3c73836500add3d4840c76f5d
---

**アクセシビリティツリー**は、多くの HTML 要素における{{Glossary("accessibility", "アクセシビリティ")}}に関する情報を含んでいます。

ブラウザーはマークアップを _[DOM ツリー](/ja/docs/Web/API/Document_Object_Model)_ と呼ばれる内部表現に変換します。 DOM ツリーはすべてのマークアップの要素、属性、テキストノードを含んでいます。ブラウザーはそれから、 DOM ツリーに基づいてアクセシビリティツリーを生成します。これは、スクリーンリーダーなどの支援技術のために、プラットフォームに特有のアクセシビリティ API から使用されます。

アクセシビリティツリーオブジェクトの中には 4 つのものがあります。

- **name**
  - : このものをどのように参照することができるか。例えば、"Read more" というテキストを持ったリンクは "Read more" という名前を持つでしょう（名前がどのように計算されるかの詳細については [Accessible Name and Description Computation spec](https://w3c.github.io/accname/) にあります）。
- **description**
  - : 名前に何かを追加したいとすれば、この要素をどのように説明するか。表の説明は、その表が提供する情報の種類が何かで説明することができます。
- [**role**](/ja/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : どのような種類のものなのか。例えば、ボタンなのか、ナビゲーションバーなのか、アイテムのリストなのか。
- [**state**](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : 状態があるかどうか。チェックボックスではチェック済み／未チェック、 [`<summary>`](/ja/docs/Web/HTML/Reference/Elements/summary) 要素では折り畳み状態か展開状態か、などを想像してください。

加えて、アクセシビリティツリーは要素によって何が行われるのかについての情報を持つことがよくあります。リンクは _followed_、テキスト入力は _typed into_、などです。

2022 年 4 月時点では、Web Incubator Community Group 内でまだ草案段階にあるものの、**[アクセシビリティオブジェクトモデル](https://wicg.github.io/aom/explainer.html) (AOM)** は、アクセシビリティの意味づけを表すための API を育成し、計算されたアクセシビリティツリーに読み取りアクセスをすることができることを意図しています。

## 関連情報

- [アクセシビリティ](/ja/docs/Web/Accessibility)
- [アクセシビリティの学習](/ja/docs/Learn_web_development/Core/Accessibility)
- [ウェブアクセシビリティ](https://ja.wikipedia.org/wiki/アクセシビリティ#ウェブページにおけるアクセシビリティ) - ウィキペディア
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/ja/docs/Web/Accessibility/ARIA)
- [The W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- 関連用語:
  - {{Glossary("Accessibility", "アクセシビリティ")}}
  - {{Glossary("Accessible description", "アクセシブル説明")}}
  - {{Glossary("Accessible name", "アクセシブル名")}}
  - {{Glossary("ARIA")}}

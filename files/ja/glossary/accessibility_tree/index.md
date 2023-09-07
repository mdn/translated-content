---
title: Accessibility tree (アクセシビリティツリー)
slug: Glossary/Accessibility_tree
---

**アクセシビリティツリー**、または**アクセシビリティオブジェクトモデル** (**AOM**) は、多くの HTML 要素におけるアクセシビリティに関する情報を含んでいます。

ブラウザーはマークアップを _[DOM ツリー](/ja/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree)_ と呼ばれる内部表現に変換します。 DOM ツリーはすべてのマークアップの要素、属性、テキストノードを含んでいます。ブラウザーはそれから、 DOM ツリーに基づいてアクセシビリティツリーを生成します。これは、読み上げソフトなどの支援技術のために、プラットフォームに特有のアクセシビリティ API から使用されます。

アクセシビリティツリーオブジェクトの中には 4 つのものがあります。

- **name**
  - : このものをどのように参照することができるか。例えば、 'Read more' というテキストを持ったリンクは 'Read more' という名前を持つでしょう (名前がどのように計算されるかの詳細については [Accessible Name and Description Computation spec](https://www.w3.org/TR/accname-1.1/) にあります)。
- **description**
  - : 名前に何かを追加したいとすれば、この要素をどのように説明するか。表の説明は、その表が提供する情報の種類が何かで説明することができます。
- **role**
  - : どのような種類のものなのか。例えば、ボタンなのか、ナビゲーションバーなのか、アイテムのリストなのか。
- **state**
  - : 状態があるかどうか。チェックボックスではチェック済み／未チェック、 [`<summary>`](/ja/docs/Web/HTML/Element/summary) 要素では折り畳み状態か展開状態か、などを想像してください。

加えて、アクセシビリティツリーは要素によって何が行われるのかについての情報を持つことがよくあります。リンクは _followed_、テキスト入力は _typed into_、などです。

1. [用語集](/ja/docs/Glossary)

   1. {{Glossary("Accessibility", "アクセシビリティ")}}
   2. {{Glossary("ARIA")}}

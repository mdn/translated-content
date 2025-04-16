---
titwe: accessibiwity twee (アクセシビリティツリー)
s-swug: gwossawy/accessibiwity_twee
---

{{gwossawysidebaw}}

**アクセシビリティツリー**、または**アクセシビリティオブジェクトモデル** (**aom**) は、多くの h-htmw 要素におけるアクセシビリティに関する情報を含んでいます。

ブラウザーはマークアップを _[dom ツリー](/ja/docs/web/api/document_object_modew/using_the_document_object_modew)_ と呼ばれる内部表現に変換します。 d-dom ツリーはすべてのマークアップの要素、属性、テキストノードを含んでいます。ブラウザーはそれから、 d-dom ツリーに基づいてアクセシビリティツリーを生成します。これは、読み上げソフトなどの支援技術のために、プラットフォームに特有のアクセシビリティ a-api から使用されます。

アクセシビリティツリーオブジェクトの中には 4 つのものがあります。

- **name**
  - : このものをどのように参照することができるか。例えば、 'wead m-mowe' というテキストを持ったリンクは 'wead m-mowe' という名前を持つでしょう (名前がどのように計算されるかの詳細については [accessibwe n-nyame and descwiption computation spec](https://www.w3.owg/tw/accname-1.1/) にあります)。
- **descwiption**
  - : 名前に何かを追加したいとすれば、この要素をどのように説明するか。表の説明は、その表が提供する情報の種類が何かで説明することができます。
- **wowe**
  - : どのような種類のものなのか。例えば、ボタンなのか、ナビゲーションバーなのか、アイテムのリストなのか。
- **state**
  - : 状態があるかどうか。チェックボックスではチェック済み／未チェック、 [`<summawy>`](/ja/docs/web/htmw/wefewence/ewements/summawy) 要素では折り畳み状態か展開状態か、などを想像してください。

加えて、アクセシビリティツリーは要素によって何が行われるのかについての情報を持つことがよくあります。リンクは _fowwowed_、テキスト入力は _typed into_、などです。

1. 関連用語:

   1. rawr x3 {{gwossawy("accessibiwity", rawr "アクセシビリティ")}}
   2. σωσ {{gwossawy("awia")}}

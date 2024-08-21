---
title: "HTML 属性: placeholder"
slug: Web/HTML/Attributes/placeholder
l10n:
  sourceCommit: aee2bd82de11cb7331134e48e8bd548bbedafcc5
---

{{HTMLSidebar}}

**`placeholder`** 属性は、フォームコントロールに値が無いときにコントロールに表示するテキストを定義します。プレースホルダーテキストは、ユーザーにコントロールに入力するべきデータの種類に関する短いヒントを提供するべきです。

効果的なプレースホルダーテキストは、説明や質問ではなく、期待するデータの種類のヒントとなる単語や短いフレーズです。プレースホルダーを {{HTMLElement("label")}} のかわりに用いてはいけません。プレースホルダーはフォームコントロールの値が空でないときは見えないので、`<label>` のかわりに `placeholder` に質問を書くと使いやすさとアクセシビリティを損ねます。

`placeholder` 属性は、入力の種類 `{{HTMLElement("input/text", "text")}}`、`{{HTMLElement("input/search", "search")}}`、`{{HTMLElement("input/url", "url")}}`、`{{HTMLElement("input/tel", "tel")}}`、`{{HTMLElement("input/email", "email")}}`、`{{HTMLElement("input/password", "password")}}` で用いることができます。`{{HTMLElement("textarea")}}` 要素でも用いることができます。以下の[例](#例)では、入力フィールドで期待する形式を示すために `placeholder` 属性を用いています。

> **メモ:** `placeholder` 属性にはラインフィード (LF) やキャリッジリターン (CR) を含めることはできません。これらが含まれる場合は、プレースホルダーテキストはクリップされます。

## アクセシビリティの懸念

プレースホルダーはフォームに入力するべきデータの種類の例を示すためのみに用いるべきです。決して `<label>` 要素の代替として用いてはいけません。そのような使用法は、アクセシビリティとユーザー体験を損ねます。

`<label>` のテキストは、視覚上、そしてプログラム上対応するフォームコントロールと紐づいています。スクリーンリーダーはデフォルトではプレースホルダーの内容を読み上げませんが、ラベルの内容は読み上げます。補助技術を用いるユーザーに、コントロールにどのようなデータを入力するべきかを伝えるのは、ラベルです。ラベルは、ポインティングデバイスを用いているユーザーのユーザー体験も向上させます。ユーザーが `<label>` をクリック・タッチ・タップすると、そのラベルに紐づいたフォームコントロールにフォーカスが移動します。

補助技術に頼っていない人にとっても、プレースホルダーはラベルの代替として信頼することはできません。プレースホルダーテキストは、通常のフォームコントロールテキストより低いカラーコントラストで表示されます。これは、ユーザーにプレースホルダーテキストとフォームフィールドに入力したデータを混同させないための仕様です。しかし、このようにコントラストが低いことは、弱視のユーザーにとって問題になります。さらに、プレースホルダーテキストは、ユーザーがテキストの入力を始めるとフォームフィールドから消えます。消えるプレースホルダーテキストに指示の情報や例が含まれていると、認知に問題があるユーザーを混乱させる可能性があります。プレースホルダーにラベルが含まれる場合は、フォームが使用できなくなる可能性があります。

## 例

### HTML

```html
<form action="/ja/docs/Web/HTML/Attributes/placeholder">
  <label for="name">名前を入力:</label>
  <input type="text" id="name" name="name" placeholder="e.g. Mike Shinoda" />
  <button type="submit">送信</button>
</form>
```

### 結果

{{EmbedLiveSample('Example', '150px', '150px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML [`title`](/ja/docs/Web/HTML/Global_attributes/title)
- CSS [`:placeholder-shown`](/ja/docs/Web/CSS/:placeholder-shown) 擬似クラスセレクター
- CSS [`::placeholder`](/ja/docs/Web/CSS/::placeholder) 擬似要素セレクター

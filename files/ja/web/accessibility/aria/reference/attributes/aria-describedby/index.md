---
title: "ARIA: aria-describedby 属性"
short-title: aria-describedby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-describedby
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

`aria-describedby` はグローバル属性で、その属性が設定されている要素を説明する要素（複数可）を特定します。

## 解説

`aria-describedby` 属性は、オブジェクトを説明する要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) を列挙します。これは、ウィジェットやグループとそれらを説明するテキストとの関係を確立するために使用します。

`aria-describedby` 属性はあるフォームコントロールに限ったものではありません。ウィジェットや要素のグループ、見出しのある領域、定義などに静的テキストを関連付けるためにも使用することができます。 `aria-describedby` 属性は、意味づけされた HTML 要素や ARIA の [`role`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles) を持つ要素で使用することができます。

`aria-describedby` 属性は [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性ととても似ています。 `aria-labelledby` がオブジェクトの本質を記述するラベルや要素の `id` を掲載しているのに対して、 `aria-describedby` はユーザーが必要とするかもしれないより詳細な情報を提供する記述や要素の `id` を掲載しています。 `aria-labelledby` と `aria-describedby` はどちらもテキストの代替を計算するために他の要素を参照しますが、ラベルは簡潔であるべきであるのに対し、説明はより詳細な情報を提供することを意図しています。ラベルはオブジェクトの本質を記述するのに対し、説明文はユーザーが必要とするかもしれないより多くの情報を提供します。

`aria-describedby` によってリンクされた要素は表示されている必要はありません。要素が非表示であっても参照できます。例えば、フォームコントロールの説明をデフォルトでは非表示にし、「詳細情報」アイコンのような開示ウィジェットを使って、要求に応じて表示できます。視覚で情報を得るユーザーはアイコンをクリックして説明を表示します。一方、支援技術の利用者は、そのフォームコントロールから `aria-describedby` で参照されている説明にすぐにアクセスできます。

`aria-describedby` 属性は、関連するコンテンツがプレーンテキストの場合に適しています。コンテンツが大量であったり、有用な意味情報を含んだり、ユーザーによるナビゲーションが必要な複雑な構造を持ったりする場合は、[`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) を代わりに使用してください。`aria-details` は、支援技術の利用者が関連する構造化コンテンツにアクセスできるようにし、構造を理解しやすくしたり、情報を小分けにして利用しやすくしたりする追加のナビゲーションコマンドを提供します。

> [!NOTE]
> `aria-describedby` のコンテンツはテキスト文字列のみであるべきです。コンテンツに重要な意味情報が含まれる場合は、[`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) の使用を検討してください。

## 値

- ID の参照リスト
  - : 現在の要素を説明する要素の `id`、または `id` を空白区切りで並べたリストです。

## 関連インターフェイス

- {{domxref("Element.ariaDescribedByElements")}}
  - : `ariaDescribedByElements` プロパティは各要素のインターフェイスの一部です。その値は、`aria-describedby` 属性の ID 参照を反映する {{domxref("Element")}} のサブクラスのインスタンスの配列です ([いくつかの注意点があります](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references))。
- {{domxref("ElementInternals.ariaDescribedByElements")}}
  - : `ariaDescribedByElements` プロパティは各カスタム要素のインターフェイスの一部です。その値は、`aria-describedby` 属性の ID 参照を反映する {{domxref("Element")}} のサブクラスのインスタンスの配列です ([いくつかの注意点があります](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references))。

## 関連付けられたロール

**すべての**ロールで使用され、すべての HTML 要素で利用できます。

## 例

```html
<button aria-describedby="trash-desc">ゴミ箱へ移動</button>
…
<p id="trash-desc">ゴミ箱にあるものは 30 日後に永久に削除されます。</p>
```

> [!NOTE]
> `aria-describedby` 属性は外部リソースの記述を参照するようには設計されていません。その値は一つ以上の `id` であり（複数の場合はスペースで区切られます）、同じ DOM 文書内の要素を参照しなければなりません。

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-description`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-describedby` のブラウザーと支援技術での対応状況](https://a11ysupport.io/tech/aria/aria-describedby_attribute)

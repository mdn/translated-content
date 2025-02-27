---
title: aria-describedby
slug: Web/Accessibility/ARIA/Attributes/aria-describedby
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

`aria-describedby` はグローバル属性で、その属性が設定されている要素を説明する要素（複数可）を特定します。

## 解説

`aria-describedby` 属性は、オブジェクトを説明する要素の [`id`](/ja/docs/Web/HTML/Global_attributes#id) を列挙します。これは、ウィジェットやグループとそれらを説明するテキストとの関係を確立するために使用します。

`aria-describedby` 属性はあるフォームコントロールに限ったものではありません。ウィジェットや要素のグループ、見出しのある領域、定義などに静的テキストを関連付けるためにも使用することができます。 `aria-describedby` 属性は、意味づけされた HTML 要素や ARIA の [`role`](/ja/docs/Web/Accessibility/ARIA/Roles) を持つ要素で使用することができます。

`aria-describedby` 属性は [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 属性ととても似ています。 `aria-labelledby` がオブジェクトの本質を記述するラベルや要素の `id` を掲載しているのに対して、 `aria-describedby` はユーザーが必要とするかもしれないより詳細な情報を提供する記述や要素の `id` を掲載しています。 `aria-labelledby` と `aria-describedby` はどちらもテキストの代替を計算するために他の要素を参照しますが、ラベルは簡潔であるべきであるのに対し、説明はより詳細な情報を提供することを意図しています。ラベルはオブジェクトの本質を記述するのに対し、説明文はユーザーが必要とするかもしれないより多くの情報を提供します。

`aria-describedby` によってリンクされた要素は表示されている必要はありません。要素が非表示であっても参照することは可能です。例えば、あるフォームコントロールは既定値では非表示の説明を持つことができ、「詳細情報」アイコンのような開示ウィジェットを使用してリクエストに応じて表示されます。視覚ユーザーはアイコンをクリックします。支援技術のユーザーは、 `aria-describedby` で直接そのフォームフィールドから説明を参照します。

`aria-describedby` プロパティは、関連するコンテンツがプレーンテキストとして記述されている場合に適しています。コンテンツが大量のコンテンツ、有益な意味づけを含む場合、またはユーザーナビゲーションを必要とする複雑な構造を持つ場合は、 [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-details) を使用してください。 `aria-details` は、支援技術のユーザーが関連する構造化されたコンテンツにアクセスできるようにし、構造を理解しやすくしたり、情報を小分けにして使いやすくしたりする、追加のナビゲーションコマンドを提供します。

> **メモ:** `aria-describedby` のコンテンツは文字列のみであるべきです。コンテンツに重要な意味づけがある場合は、 [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-details) を使用することを検討してください。

## 例

```html
<button aria-describedby="trash-desc">ゴミ箱へ移動</button>
…
<p id="trash-desc">ゴミ箱にあるものは 30 日後に永久に削除されます。</p>
```

> **メモ:** `aria-describedby` 属性は外部リソースの記述を参照するようには設計されていません。その値は一つ以上の `id` であり（複数の場合はスペースで区切られます）、同じ DOM 文書内の要素を参照しなければなりません。

## 値

- ID reference list
  - : 現在の要素を記述する `id` または空白区切りの要素 `id` のリストです。

## 関連付けられるロール

**すべての**ロールで使用されます。同様にすべての HTML 要素で利用できます。

## 仕様書

{{Specifications}}

## 関連情報

- {{HTMLElement('label')}}
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-description`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [Browser and AT support for `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)

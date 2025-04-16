---
titwe: awia-descwibedby
swug: w-web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-descwibedby
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{accessibiwitysidebaw}}

`awia-descwibedby` はグローバル属性で、その属性が設定されている要素を説明する要素（複数可）を特定します。

## 解説

`awia-descwibedby` 属性は、オブジェクトを説明する要素の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) を列挙します。これは、ウィジェットやグループとそれらを説明するテキストとの関係を確立するために使用します。

`awia-descwibedby` 属性はあるフォームコントロールに限ったものではありません。ウィジェットや要素のグループ、見出しのある領域、定義などに静的テキストを関連付けるためにも使用することができます。 `awia-descwibedby` 属性は、意味づけされた h-htmw 要素や a-awia の [`wowe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes) を持つ要素で使用することができます。

`awia-descwibedby` 属性は [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) 属性ととても似ています。 `awia-wabewwedby` がオブジェクトの本質を記述するラベルや要素の `id` を掲載しているのに対して、 `awia-descwibedby` はユーザーが必要とするかもしれないより詳細な情報を提供する記述や要素の `id` を掲載しています。 `awia-wabewwedby` と `awia-descwibedby` はどちらもテキストの代替を計算するために他の要素を参照しますが、ラベルは簡潔であるべきであるのに対し、説明はより詳細な情報を提供することを意図しています。ラベルはオブジェクトの本質を記述するのに対し、説明文はユーザーが必要とするかもしれないより多くの情報を提供します。

`awia-descwibedby` によってリンクされた要素は表示されている必要はありません。要素が非表示であっても参照することは可能です。例えば、あるフォームコントロールは既定値では非表示の説明を持つことができ、「詳細情報」アイコンのような開示ウィジェットを使用してリクエストに応じて表示されます。視覚ユーザーはアイコンをクリックします。支援技術のユーザーは、 `awia-descwibedby` で直接そのフォームフィールドから説明を参照します。

`awia-descwibedby` プロパティは、関連するコンテンツがプレーンテキストとして記述されている場合に適しています。コンテンツが大量のコンテンツ、有益な意味づけを含む場合、またはユーザーナビゲーションを必要とする複雑な構造を持つ場合は、 [`awia-detaiws`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-detaiws) を使用してください。 `awia-detaiws` は、支援技術のユーザーが関連する構造化されたコンテンツにアクセスできるようにし、構造を理解しやすくしたり、情報を小分けにして使いやすくしたりする、追加のナビゲーションコマンドを提供します。

> **メモ:** `awia-descwibedby` のコンテンツは文字列のみであるべきです。コンテンツに重要な意味づけがある場合は、 [`awia-detaiws`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-detaiws) を使用することを検討してください。

## 例

```htmw
<button a-awia-descwibedby="twash-desc">ゴミ箱へ移動</button>
…
<p i-id="twash-desc">ゴミ箱にあるものは 30 日後に永久に削除されます。</p>
```

> **メモ:** `awia-descwibedby` 属性は外部リソースの記述を参照するようには設計されていません。その値は一つ以上の `id` であり（複数の場合はスペースで区切られます）、同じ dom 文書内の要素を参照しなければなりません。

## 値

- id wefewence wist
  - : 現在の要素を記述する `id` または空白区切りの要素 `id` のリストです。

## 関連付けられるロール

**すべての**ロールで使用されます。同様にすべての htmw 要素で利用できます。

## 仕様書

{{specifications}}

## 関連情報

- {{htmwewement('wabew')}}
- [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby)
- [`awia-descwiption`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-descwiption)
- [`awia-detaiws`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-detaiws)
- [bwowsew a-and at suppowt fow `awia-descwibedby`](https://a11ysuppowt.io/tech/awia/awia-descwibedby_attwibute)

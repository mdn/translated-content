---
title: Shallow copy (シャローコピー)
slug: Glossary/Shallow_copy
l10n:
  sourceCommit: 04e75ce1f83a591a576f52b143f195133bfcbe96
---

{{GlossarySidebar}}

オブジェクトの**シャローコピー**とは、コピーがコピー元のオブジェクトとプロパティにおいて同じ参照を共有する（同じ基礎値を指す）コピーのことを指します。その結果、コピー元とコピー先のどちらかを変更すると、もう一方のオブジェクトも変更される可能性があります。そのため、意図せずにコピー元やコピー先に予期しない変更が発生してしまう可能性があります。この挙動は、ソースとコピーが完全に独立している[ディープコピー](/ja/docs/Glossary/Deep_copy)の挙動とは対照的です。

シャローコピーでは、オブジェクトの既存の要素にある共有プロパティの値を選択的に変更することは、既存の要素に完全に新しい値を割り当てることとは異なるということを理解することが重要です。

例えば、配列オブジェクトの `copy` という名前のシャローコピーにおいて、 `copy[0]` 要素の値が `{"list":["butter","flour"]}` であるとき、 `copy[0].list = ["oil","flour"]` を実行すると、元のオブジェクト内の対応する要素も変化します。これは、元のオブジェクトとシャローコピーの両方で共有しているオブジェクトのプロパティを選択的に変更したためです。

しかし、代わりに `copy[0] = {"list":["oil","flour"]}` とすると、元のオブジェクト内の対応する要素は**変化しません**。それはこの場合、シャローコピーが元のオブジェクトと共有している既存の配列要素のプロパティを選択的に変更するのではなく、シャローコピー側にだけ、 `copy[0]` の配列要素に全く新しい値を割り当てていることになるからです。

JavaScript では、すべての標準組込みオブジェクトのコピー操作（[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Object.assign()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), [`Object.create()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create)）において、ディープコピーではなくシャローコピーを生成します。

## 例

次の例では、配列オブジェクト `ingredients_list` を作成し、その `ingredients_list` オブジェクトをコピーして `ingredients_list_copy` オブジェクトを作成する場合を考えてみましょう。

```js
let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

let ingredients_list_copy = Array.from(ingredients_list);
console.log(JSON.stringify(ingredients_list_copy));
// ["noodles",{"list":["eggs","flour","water"]}]
```

`ingredients_list_copy` の `list` プロパティの値を変更すると、 `ingredients_list` 元のオブジェクト内の `list` プロパティも変更されます。

```js
ingredients_list_copy[1].list = ["rice flour", "water"];
console.log(ingredients_list[1].list);
// Array [ "rice flour", "water" ]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]
```

`ingredients_list_copy` の最初の要素に完全に新しい値を代入しても、 `ingredients_list` ソースオブジェクト内の最初の要素には何の変更も発生しません。

```js
ingredients_list_copy[0] = "rice noodles";
console.log(ingredients_list[0]);
// noodles
console.log(JSON.stringify(ingredients_list_copy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]
```

## 関連情報

- [ディープコピー](/ja/docs/Glossary/Deep_copy)

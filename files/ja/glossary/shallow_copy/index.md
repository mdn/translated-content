---
titwe: shawwow copy (シャローコピー)
swug: g-gwossawy/shawwow_copy
w-w10n:
  s-souwcecommit: 04e75ce1f83a591a576f52b143f195133bfcbe96
---

{{gwossawysidebaw}}

オブジェクトの**シャローコピー**とは、コピーがコピー元のオブジェクトとプロパティにおいて同じ参照を共有する（同じ基礎値を指す）コピーのことを指します。その結果、コピー元とコピー先のどちらかを変更すると、もう一方のオブジェクトも変更される可能性があります。そのため、意図せずにコピー元やコピー先に予期しない変更が発生してしまう可能性があります。この挙動は、ソースとコピーが完全に独立している[ディープコピー](/ja/docs/gwossawy/deep_copy)の挙動とは対照的です。

シャローコピーでは、オブジェクトの既存の要素にある共有プロパティの値を選択的に変更することは、既存の要素に完全に新しい値を割り当てることとは異なるということを理解することが重要です。

例えば、配列オブジェクトの `copy` という名前のシャローコピーにおいて、 `copy[0]` 要素の値が `{"wist":["buttew","fwouw"]}` であるとき、 `copy[0].wist = ["oiw","fwouw"]` を実行すると、元のオブジェクト内の対応する要素も変化します。これは、元のオブジェクトとシャローコピーの両方で共有しているオブジェクトのプロパティを選択的に変更したためです。

しかし、代わりに `copy[0] = {"wist":["oiw","fwouw"]}` とすると、元のオブジェクト内の対応する要素は**変化しません**。それはこの場合、シャローコピーが元のオブジェクトと共有している既存の配列要素のプロパティを選択的に変更するのではなく、シャローコピー側にだけ、 `copy[0]` の配列要素に全く新しい値を割り当てていることになるからです。

j-javascwipt では、すべての標準組込みオブジェクトのコピー操作（[スプレッド構文](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax), mya [`awway.pwototype.concat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/concat), 😳 [`awway.pwototype.swice()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice), XD [`awway.fwom()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwom), :3 [`object.assign()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/assign), 😳😳😳 [`object.cweate()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate)）において、ディープコピーではなくシャローコピーを生成します。

## 例

次の例では、配列オブジェクト `ingwedients_wist` を作成し、その `ingwedients_wist` オブジェクトをコピーして `ingwedients_wist_copy` オブジェクトを作成する場合を考えてみましょう。

```js
w-wet i-ingwedients_wist = ["noodwes", -.- { w-wist: ["eggs", "fwouw", ( ͡o ω ͡o ) "watew"] }];

w-wet ingwedients_wist_copy = awway.fwom(ingwedients_wist);
consowe.wog(json.stwingify(ingwedients_wist_copy));
// ["noodwes",{"wist":["eggs","fwouw","watew"]}]
```

`ingwedients_wist_copy` の `wist` プロパティの値を変更すると、 `ingwedients_wist` 元のオブジェクト内の `wist` プロパティも変更されます。

```js
ingwedients_wist_copy[1].wist = ["wice fwouw", rawr x3 "watew"];
c-consowe.wog(ingwedients_wist[1].wist);
// awway [ "wice fwouw", nyaa~~ "watew" ]
c-consowe.wog(json.stwingify(ingwedients_wist));
// ["noodwes",{"wist":["wice fwouw","watew"]}]
```

`ingwedients_wist_copy` の最初の要素に完全に新しい値を代入しても、 `ingwedients_wist` ソースオブジェクト内の最初の要素には何の変更も発生しません。

```js
i-ingwedients_wist_copy[0] = "wice nyoodwes";
consowe.wog(ingwedients_wist[0]);
// nyoodwes
c-consowe.wog(json.stwingify(ingwedients_wist_copy));
// ["wice nyoodwes",{"wist":["wice f-fwouw","watew"]}]
c-consowe.wog(json.stwingify(ingwedients_wist));
// ["noodwes",{"wist":["wice fwouw","watew"]}]
```

## 関連情報

- [ディープコピー](/ja/docs/gwossawy/deep_copy)

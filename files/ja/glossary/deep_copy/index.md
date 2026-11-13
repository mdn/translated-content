---
title: Deep copy (ディープコピー)
slug: Glossary/Deep_copy
l10n:
  sourceCommit: 3114504a9746114aa5501656b76198e85d7af901
---

{{GlossarySidebar}}

オブジェクトの **ディープコピー** とは、コピー先のオブジェクトのプロパティがコピー元のオブジェクトのプロパティと同一の参照（同じ値を指す）で共有しないコピー方法のことです。結果として、コピー元かコピー先のどちらかを変更しても、もう一方オブジェクトにも変更を及ぼしていないことを保証できます。すなわち、コピー元かコピー先に意図せずに予期しない変更が加えられるこはありません。この振る舞いは[シャローコピー](/ja/docs/Glossary/Shallow_copy)とは対照的です。シャローコピーでは、コピー元かコピー先のどちらかを変更するともう一方のオブジェクトも変更される可能性があります。

2 つのオブジェクト `o1` と `o2` は、監視される動作が同じであれば、構造的に等価です。これらの動作は次の通りです。

1. `o1` と `o2` のプロパティには同じ順序で同じ名前のものがあります。
2. 両者のプロパティの値は構造的に等しくなります。
3. プロトタイプチェーンは構造的に等価であること（構造的等価性を扱う場合であっても、これらのオブジェクトは通常プレーンオブジェクトであり、どちらも `Object.prototype` を継承していることを意味しています）。

構造的に等価なオブジェクトは、同じオブジェクトであるか (`o1 === o2`)、コピーであるか (`o1 !== o2`) のどちらかになります。等価なプリミティブ値は常に等しく比較されるため、コピーを作成することはできません。

これでディープコピーをより正式に定義することができます。

1. 同じオブジェクトではないこと (`o1 !== o2`)。
2. `o1` と `o2` のプロパティには同じ順序で同じ名前のものがあります。
3. これらのプロパティの値は、互いにディープコピーであること。
4. プロトタイプチェーンが構造的に等価であること。

ディープコピーはプロトタイプチェーンを 持つこともあれば持たないこともあります（持たないことも多い）。しかし、構造的に等価でないプロトタイプチェーンを持つ他の 2 種類のオブジェクト（例えば、一方が配列で、もう一方がプレーンオブジェクト）は、互いに決してコピーではありません。

プロパティがすべてプリミティブ値であるオブジェクトのコピーは、ディープコピーと[シャローコピー](/ja/docs/Glossary/Shallow_copy)の両方の定義に当てはまります。しかし、このようなコピーの深さについて話すのはやや無意味です。というのも、このコピーには入れ子プロパティがなく、ディープコピーについては通常、入れ子プロパティを変更するコンテキストで話すからです。

JavaScript では、オブジェクトを操作する標準の組み込み構文や関数（[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Object.assign()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), [`Object.create()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create)）はディープコピーを作成しません。（代わりにシャローコピーで作成されます）。

JavaScript のオブジェクトのディープコピーを作成する一つの方法は、そのオブジェクトが [シリアライズ](/ja/docs/Glossary/Serialization) 可能であれば {{jsxref("JSON.stringify()")}} でオブジェクトを JSON 文字列に変換し、 {{jsxref("JSON.parse()")}} で文字列から（完全に新しい） JavaScript のオブジェクトに変換することです。

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
```

ディープコピーは元のオブジェクトと参照を共有しないため、ディープコピーに加えられた変更は元のオブジェクトには影響しません。

```js
// ingredientsListDeepCopy の 'list' プロパティの値を変更します
ingredientsListDeepCopy[1].list = ["rice flour", "water"];
// ingredients_list の 'list' プロパティは変更されません
console.log(ingredientsList[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

しかしながら、上記のコードはシンプルで[シリアライズ](/ja/docs/Glossary/Serialization)可能ですが、多くの JavaScript のオブジェクトはシリアライズ可能とは全く言えません。例えば、[関数](/ja/docs/Web/JavaScript/Guide/Functions)（クロージャ）、[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)、[HTML DOM API](/ja/docs/Web/API/HTML_DOM_API) において HTML 要素を表すオブジェクト、再帰データ、その他の多くのケース。これらのケースにおいて `JSON.stringify()` を使用したオブジェクトのシリアライズは失敗します。つまり、それらのオブジェクトのディープコピーを作成する方法はありません。

_シリアライズ可能_ なオブジェクトであれば、代わりに [`structuredClone()`](/ja/docs/Web/API/Window/structuredClone) 関数を使用してディープコピーを作成することも可能です。`structuredClone()` の利点は、ただ複製するだけでなく、[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)を元のオブジェクトから新しいコピーに _転送_ できることです。ただし、`structuredClone()` は JavaScript そのものの言語機能ではなく、 Web API を実装しているブラウザーや他の JavaScript ホストの機能です。また、シリアライズ不可なオブジェクトに対して、複製するために `structuredClone()` を呼び出すと、 `JSON.stringify()` が失敗するのと同様に失敗します。

## 関連情報

- [シャローコピー](/ja/docs/Glossary/Shallow_copy)
- [`window.structuredClone()`](/ja/docs/Web/API/Window/structuredClone)

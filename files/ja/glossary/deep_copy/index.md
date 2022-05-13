---
title: Deep copy (ディープコピー)
slug: Glossary/Deep_copy
tags:
  - 用語集
  - Deep copy
translation_of: Glossary/Deep_copy
---
{{MDNSidebar}}


オブジェクトの **ディープコピー** とは、コピー先のオブジェクトのプロパティがコピー元のオブジェクトのプロパティと同一の参照（同じ値を指す）を共有しないコピーのことです。

結果として、コピー元かコピー先のどちらかを変更しても、そのほかのオブジェクトにも変更を及ぼしていないことを保証できます。すなわち、コピー元かコピー先に意図せずに予期しない変更が加えられるこはありません。

この振る舞いは [shallow copy](/ja/docs/Glossary/Shallow_copy) とは対照的で、コピー元かコピー先のどちらかを変更すると他のオブジェクトも変更される可能性があります。（なぜならば、それら2つのオブジェクトは参照を共有しているためです）

Javascript では、オブジェクトを操作する標準の組み込み構文や関数（[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Object.assign()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), [`Object.create()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create)）はディープコピーを作成しません。（代わりにシャローコピーで作成されます）。

Javascript のオブジェクトのディープコピーを作成する一つの方法は、そのオブジェクトが [シリアライズ](/ja/docs/Glossary/Serialization) 可能であれば {{jsxref("JSON.stringify()")}} でオブジェクトを JSON 文字列に変換し、 {{jsxref("JSON.parse()")}} で文字列から（完全に新しい） Javascript のオブジェクトに変換することです。

```js
let ingredients_list = ["noodles",{"list":["eggs","flour","water"]}];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// ingredients_list_deepcopy の 'list' プロパティの値を変更します
ingredients_list_deepcopy[1].list = ["rice flour","water"]
// ingredients_list の 'list' プロパティは変更されません
console.log(ingredients_list[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

上記のコードの通り、ディープコピーは元のオブジェクトと参照を共有しないため、ディープコピーにいかなる変更を加えたとしても、元のオブジェクトには影響を及ぼしません。

しかしながら、上記のコードはシンプルで [シリアライズ](/ja/docs/Glossary/Serialization) で十分ですが、多くの Javascript のオブジェクトはシリアライズ可能とは全く言えません。例えば、[関数](/ja/docs/Web/JavaScript/Guide/Functions)（クロージャ）、[Symbols](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)、[HTML DOM API](/ja/docs/Web/API/HTML_DOM_API) においてHTML要素を表すオブジェクト、再帰データ、その他の多くのケース。これらのケースにおいて `JSON.stringify()` を使用したオブジェクトのシリアライズは失敗します。つまり、それらのオブジェクトのディープコピーを作成する方法はありません。

_シリアライズ可能_ なオブジェクトであれば、代わりに [`structuredClone()`](/ja/docs/Web/API/structuredClone) 関数を使用してディープコピーを作成することも可能です。 `structuredClone()` の利点は、ただ複製するだけでなく、 {{Glossary("transferable objects")}} を元のオブジェクトから新しいコピーに _転送_ できることです。ただし、 `structuredClone()` は Javascript そのものの言語機能ではなく、代わりにブラウザや [`window`](/ja/docs/Web/API/Window) のようなグローバルオブジェクトを実装している他の Javascript ランタイムによる機能であるということに留意してください。また、シリアライズ不可なオブジェクトを複製するために `structuredClone()` を呼び出すのは `JSON.stringify()` が失敗するのと同様に失敗します。

## 関連情報

- [Shallow copy](/ja/docs/Glossary/Shallow_copy)
- [`window.structuredClone()`](/ja/docs/Web/API/structuredClone)

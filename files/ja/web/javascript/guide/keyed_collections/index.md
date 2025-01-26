---
title: キー付きコレクション
slug: Web/JavaScript/Guide/Keyed_collections
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}

本章では、キーによって索引付けされたデータのコレクションを紹介します。`Map` および `Set` オブジェクトは挿入順に反復処理を行える要素を保持します。

## Map

### Map オブジェクト

{{jsxref("Map")}} オブジェクトはキーと値のマップで、挿入順に要素を反復処理することができます。

次のコードでは `Map` を用いたいくつかの基本的な操作を表しています。また、追加の例や全ての API については、 {{jsxref("Map")}} リファレンスページをご覧ください。 {{jsxref("Statements/for...of", "for...of")}} ループを使って、各反復処理において `[key, value]` からなる配列を返しています。

```js
const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

### Object と Map との比較

伝統的に、{{jsxref("Object", "objects", "", 1)}} は文字列を値に対応付けするのに使われてきました。オブジェクトを使うことで、キーを値に設定し、その値を取得し、キーを削除し、キーに対応する何かが格納されているかどうかを調べることができます。しかし、 `Map` オブジェクトには、より優れたマップとなるいくつかの利点があります。

- `Object` のキーは[文字列](/ja/docs/Web/JavaScript/Reference/Global_Objects/String)または[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)であるのに対して、 `Map` はどのような値でも利用できます。
- サイズを取得する場合、 `Map` は `size` で簡単に取得できるのに対し、 `Object` は手動で追跡する必要があります。
- Map の反復処理は要素の挿入順に行われます。
- `Object` はプロトタイプを持っているので、マップ内に既定のキーが存在します（これは `map = Object.create(null)` を使って回避できます）。

`Map` と `Object` のどちらを使用すべきかを決めるには、下記の 3 つのヒントが役立つでしょう。

- 実行時までキーが不明なとき、またはすべてのキーが同じ型、すべての値が同じ型のときは Object よりも Map を使用しましょう。
- プリミティブ値をキーとして保存する必要がある場合に Map を使用しましょう。 Object はキーが数値、真偽値、もしくはいずれのプリミティブ値であるかどうかに関わらず、それぞれのキーを文字列として扱います。
- 個々の要素を操作するロジックがある場合は、Object を使用しましょう。

### WeakMap オブジェクト

{{jsxref("WeakMap")}} キーと値のペアの集合であり、キーはオブジェクトまたは[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)でなければならず、値は任意の [JavaScript 型](/ja/docs/Web/JavaScript/Data_structures)で、キーへの強い参照を作成しません。つまり、オブジェクトが `WeakMap` のキーとして存在しても、そのオブジェクトがガベージコレクションの対象となることを妨げることはありません。キーとして使用されていたオブジェクトが回収された場合、そのオブジェクトに対応する `WeakMap` 内の値も、他の場所で強く参照されていない限り、ガベージコレクションの対象となります。 `WeakMap` のキーとして使用できる唯一のプリミティブ型はシンボル（より特定の[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)）です。非登録シンボルは一意であることが保証されており、再作成できないためです。

`WeakMap` API は本質的には `Map` API と同じです。
しかし、 `WeakMap` ではキーの生存状況を監視できないため、列挙もできません。そのため、 `WeakMap` 内のキーの一覧を取得する方法はありません。もしそのようなメソッドがあったとしても、一覧はガベージコレクションの状態に依存し、不確定性が生まれてしまいます。

詳細やサンプルコードについては、{{jsxref("WeakMap")}} リファレンスページの「なぜ WeakMap なのか？」もご覧ください。

`WeakMap` オブジェクトのよくある使用方法のひとつとして、オブジェクトに対するプライベートデータの格納、あるいは実装の細部の隠蔽があります。次の例は Nick Fitzgerald 氏のブログ投稿、["Hiding Implementation Details with ECMAScript 6 WeakMaps"](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html) からの引用です。プライベートなデータとメソッドはオブジェクトの内部に属していて、プライベートな `WeakMap` オブジェクトに格納されています。インスタンスから露出する全てとプロトタイプは公開されています、他の全てのものは外部よりアクセスできません。 `privates` はモジュールからエクスポートされていません。

```js
const privates = new WeakMap();

function Public() {
  const me = {
    // ここにプライベートデータが置かれる
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // `me` にプライベートデータを詰め込む…
};

module.exports = Public;
```

## Set

### Set オブジェクト

{{jsxref("Set")}} オブジェクトは、値によって構成されるコレクションです。挿入順に要素を反復処理することができます。 `Set` の 1 つの値は 1 回だけ出現します。 `Set` のコレクション内では値は一意です。

次のコードでは `Set` を用いたいくつかの基本的な操作を表しています。また、追加の例や全ての API については、{{jsxref("Set")}} リファレンスページをご覧ください。

```js
const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (const item of mySet) {
  console.log(item);
}
// 1
// "some text"
```

### Array と Set 間の変換

{{jsxref("Array.from")}} または[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を使用して `Set` から {{jsxref("Array")}} を生成することができます。また、`Set` コンストラクターを使って `Array` から `Set` へと逆変換することができます。

> **メモ:** `Set` オブジェクトは一意の値を格納することにくれぐれも注意してください、重複した要素は配列から変換するときに削除されます。

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### Array と Set との比較

伝統的に、要素の集合は多くの状況において JavaScript の配列に格納されてきました。しかし、新しい `Set` オブジェクトにはいくつかの利点があります。

- 値を指定して配列の要素を削除する動作 (`arr.splice(arr.indexOf(val), 1)`) はとても低速です。
- `Set` オブジェクトは値を指定して要素を削除することができます。配列では、要素のインデックスに基づいて `splice` を実行する必要があります。
- {{jsxref("NaN")}} の値は配列の `indexOf` で見つけることができません。
- `Set` オブジェクトは一意の値を格納します、重複を気にする必要はありません。

### WeakSet オブジェクト

{{jsxref("WeakSet")}} オブジェクトは、ガベージコレクション可能なオブジェクトのコレクションであり、オブジェクトと[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)を入れることができます。 `WeakSet` 内の 1 つのオブジェクトは 1 回だけ出現します。 `WeakSet` コレクション内では値は一意です。

{{jsxref("Set")}} オブジェクトとの主な違いは次の通りです。

- `Set` とは対照的に、`WeakSet` は**オブジェクトまたはシンボルのみのコレクション**であり、任意の型の任意の値でのコレクションではありません。
- `WeakSet` は弱いものです。コレクションでのオブジェクトでの参照は弱く保持されています。 `WeakSet` 内に格納されているオブジェクトに対する参照がなくなった場合、ガベージコレクションされます。これはまた、現在コレクション内に格納されているオブジェクトのリストがないということを表しています。
- `WeakSet` は列挙可能ではありません。

`WeakSet` オブジェクトの使用例は限定的です。メモリーリークが発生しないようにするため、例えば、DOM 要素をキーとして使用し、監視するためにそれらにマーキングすることが安全に行なえます。

## Map と Set におけるキーと値の等値性

`Map` オブジェクトのキーの等値性と `Set` オブジェクトの値の等値性は両方とも、「[SameValueZero アルゴリズム](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality)」に基づいています。

- 等値性は原則として同値比較演算子 `===` のように判定します。
- `-0` と `+0` は等しいと見なします。
- {{jsxref("NaN")}} は（`===` とは異なり）自身と等しいと見なされます。

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}

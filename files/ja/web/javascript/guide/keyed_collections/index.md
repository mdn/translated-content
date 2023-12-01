---
title: キー付きコレクション
slug: Web/JavaScript/Guide/Keyed_collections
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}

本章では、キーによって順序付けされたデータのコレクションを紹介します。Map および Set オブジェクトは挿入順に反復処理を行える要素を保持します。

## Map

### `Map` オブジェクト

ECMAScript 2015 で値と値とをマッピングする新しいデータ構造が導入されました。{{jsxref("Map")}} オブジェクトはシンプルなキー / バリューマップで、挿入順に要素を反復処理することができます。

次のコードでは `Map` を用いたいくつかの基本的な操作を表しています。また、追加の例や全ての API については、{{jsxref("Map")}} リファレンスページをご覧ください。{{jsxref("Statements/for...of","for...of")}} ループを使って、各反復処理において `[key, value]` からなる配列を返しています。

```js
let sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (let [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

### `Object` と `Map` との比較

伝統的に、{{jsxref("Object", "objects", "", "1")}} は文字列を値にマップするのに使われてきました。オブジェクトを使うことで、キーを値に設定し、その値を取得し、キーを削除し、キーに対応する何かが格納されているかどうかを検出することができます、しかしながら、`Map` の方が少し便利です。

- `Object` のキーは {{jsxref("Global_Objects/String","Strings")}} オブジェクトです、`Map` ならどんな値も使えるというのに。
- `Map` は簡単にサイズを取得できます。`Object` はサイズを手作業で追跡する必要があります。
- `Map` の反復処理は要素の挿入順に行われます。
- `Object` はプロトタイプを持っているので、オブジェクトによるマップにはデフォルトキーが存在します（これは `map = Object.create(null)` を使って回避できます）。

`Map` と `Object` のどちらを使用すべきかを決めるには下記の 3 つのヒントが役立つでしょう :

- 実行時までキーが不明なとき、またはすべてのキーが同じ型、すべての値が同じ型のときは Object よりも Map を使用しましょう。
- プリミティブ値をキーとして保存する必要がある場合に Map を使用しましょう。Object はキーが数値、真偽値、もしくはいずれのプリミティブ値であるかどうかに関わらず、それぞれのキーを文字列として扱います。
- 個々の要素を操作するロジックがある場合は、Object を使用しましょう。

### `WeakMap` オブジェクト

{{jsxref("WeakMap")}} オブジェクトは、**キーはオブジェクトのみ**で、値は任意の値にできるキー / バリューのペアからなるコレクションです。キーによるオブジェクト参照は**弱く**保持され、そのオブジェクトへの参照が他に存在しないときはガベージコレクション (GC) の対象になります。`WeakMap` API は `Map` API と同じです。

`Map` オブジェクトとの違いの１つは、`WeakMap` のキーは列挙可能ではないことです（すなわち、キーのリストを取得するメソッドがありません）。もしも列挙可能であれば、リストは非決定性をもたらす、ガベージコレクションの状態に依存することになってしまいます。

詳細やサンプルコードについては、{{jsxref("WeakMap")}} リファレンスページの「なぜ WeakMap なのか？」もご覧ください。

`WeakMap` オブジェクトのよくある使用方法のひとつとして、オブジェクトに対するプライベートデータの格納、あるいは実装の細部の隠蔽があります。次の例は Nick Fitzgerald 氏のブログ投稿、["Hiding Implementation Details with ECMAScript 6 WeakMaps"](http://fitzgeraldnick.com/weblog/53/)（ECMAScript 6 WeakMaps を使って実装の詳細を隠蔽する）です。プライベートなデータとメソッドはオブジェクトの内部に属していて、プライベートな WeakMap オブジェクトに格納されています。インスタンスから露出する全てとプロトタイプは公開されています、他の全てのものは外部よりアクセスできません。`privates` はモジュールから export されていません。

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

### `Set` オブジェクト

{{jsxref("Set")}} オブジェクトは値によって構成されるコレクションです。挿入順に要素を反復処理することができます。`Set` の 1 つの値は 1 回だけ出現します; `Set` のコレクションでは値は一意です。

次のコードでは `Set` を用いたいくつかの基本的な操作を表しています。また、追加の例や全ての API については、{{jsxref("Set")}} リファレンスページをご覧ください。

```js
let mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
```

### `Array` と `Set` 間の変換

{{jsxref("Array.from")}} または [スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator) を使用して `Set` から {{jsxref("Array")}} を生成できます。また、`Set` コンストラクタを使って `Array` から `Set` へと逆変換することができます。

> **メモ:** `Set` オブジェクトは*一意の値*を格納することにくれぐれも注意してください、重複した要素は `Array` から変換するときに削除されます。

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### `Array` と `Set` との比較

伝統的に、要素の集合は多くの状況において JavaScript の配列に格納されてきました。しかし、新しい `Set` オブジェクトにはいくつかの利点があります :

- 配列の {{jsxref("Array.indexOf", "indexOf")}} を使用してコレクションに要素が存在しているかどうかを調べるのは低速です。
- `Set` オブジェクトは値を使って要素を削除できます。配列の場合には要素のインデックを使い、スプライス（該当要素を取り除いて残りをつなぎ合わせる）操作が必要です。
- {{jsxref("NaN")}} 値は配列の `indexOf` で検索することはできません。
- `Set` オブジェクトは一意の値を格納します、あなたが重複を気にする必要がありません。

### `WeakSet` オブジェクト

{{jsxref("WeakSet")}} オブジェクトは、オブジェクトのコレクションです。`WeakSet` 内の 1 つのオブジェクトは 1 回だけ出現します; `WeakSet` コレクション内では値は一意で、オブジェクトは列挙可能ではありません。

{{jsxref("Set")}} オブジェクトとの主な違いは下記の通りです :

- `Set` とは対照的に、`WeakSet` は**オブジェクトのみのコレクション**で、任意の型の任意の値でのコレクションではありません。
- `WeakSet` は弱い: コレクションでのオブジェクトでの参照は弱く保持されています。`WeakSet` 内に格納されているオブジェクトに対する参照がなくなった場合、ガベージコレクションされます。これはまた、現在コレクション内に格納されているオブジェクトのリストがないということを表しています。`WeakSet` は列挙可能ではありません。

`WeakSet` オブジェクトの使用例は限定的です。メモリーリークが発生しないため、例えば、DOM 要素をキーとして使用し、監視するためにそれらにマーキングすることが安全に行なえます。

## `Map` と `Set` におけるキーと値の等値性

`Map` オブジェクトのキーの等値性と `Set` オブジェクトの値の等値性は両方とも、「[same-value-zero アルゴリズム](https://tc39.github.io/ecma262/#sec-samevaluezero)」に基づいています:

- 等値性は原則として同値演算子 `===` のように判定されます。
- `-0` と `+0` は等しいと見なします。
- {{jsxref("NaN")}} は（`===` とは逆に）自身と等しいと見なされます。

{{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}

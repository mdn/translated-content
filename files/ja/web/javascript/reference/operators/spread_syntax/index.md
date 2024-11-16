---
title: スプレッド構文
slug: Web/JavaScript/Reference/Operators/Spread_syntax
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{jsSidebar("Operators")}}

**スプレッド** (`...`) 構文を使うと、配列式や文字列などの反復可能オブジェクトを、0 個以上の引数（関数呼び出しの場合）や要素（配列リテラルの場合）を目的の場所に展開することができます。オブジェクトリテラルでは、スプレッド構文によりオブジェクトのプロパティを列挙し、作成するオブジェクトにキーと値の組を追加します。

スプレッド構文は、残余構文とまったく同じように見えますが、ある意味では、スプレッド構文は残余構文の反対です。スプレッド構文は配列を要素に「展開」しますが、リスト構文は複数の要素を集合し、単一の要素に「圧縮」します。[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)と[残余プロパティ](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property)を参照してください。

{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

## 構文

```js-nolint
myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }
```

## 解説

スプレッド構文は、オブジェクトまたは配列の要素をすべて新しい配列またはオブジェクトに含める必要がある場合、または関数呼び出しの引数リストに1つずつ適用する必要がある場合に使用することができます。スプレッド構文を受け入れる場所は 3 つあります。

- [関数の引数](#関数呼び出しでの展開)リスト (`myFunction(a, ...iterableObj, b)`)
- [配列リテラル](#配列リテラルでの展開) (`[1, ...iterableObj, '4', 'five', 6]`)
- [オブジェクトリテラル](#オブジェクトリテラルでの展開) (`{ ...obj, key: 'value' }`)

構文は同じように見えますが、意味づけが若干異なります。

[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)な値、例えば {{jsxref("Array")}} や {{jsxref("String")}} のみが、[配列リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)と引数リストを展開できます。多くのオブジェクトは反復可能ではありません。例えば[プレーンオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object)に [`Symbol.iterator`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) メソッドがない場合はそうなります。

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

一方、[オブジェクトリテラル](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)での展開は、値自身のプロパティを[列挙](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#traversing_object_properties)します。一般的な配列では、すべてのインデックスが列挙可能な自分自身のプロパティであるため、配列をオブジェクトに展開することができます。

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

すべての[プリミティブ](/ja/docs/Web/JavaScript/Data_structures#primitive_values)はオブジェクトに展開できます。 文字列のみ自分自身で列挙可能なプロパティを持っており、それ以外は何らかのプロパティを新しいオブジェクトに作成することなく展開できます。

```js
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
```

関数呼び出しにスプレッド構文を使用する場合、JavaScript エンジンの引数長制限を超える可能性があることに注意してください。詳細は、{{jsxref("Function.prototype.apply()")}} を参照してください。

## 例

### 関数呼び出しでの展開

#### apply() を置き換える

配列の要素を引数にして関数を呼び出すには {{jsxref("Function.prototype.apply()")}} を使うのが一般的です。

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);
```

スプレッド構文を使うと、上のコードは次のように書くことができます。

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

スプレッド構文は、引数リストのどの引数でも使用でき、またスプレッド構文は複数回使用することもできます。

```js
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### new 演算子の適用

コンストラクターを {{jsxref("Operators/new", "new")}} で呼び出す場合、配列を**直接**使用して `apply()` を実行することはできません。なぜなら、`apply()` は対象関数を構築するのではなく呼び出すためです。つまり、[`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) は `undefined` になります。しかし、配列は `new` を使用すると、スプレッド構文のおかげで簡単に使用することができます。

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

### 配列リテラルでの展開

#### より強力な配列リテラル

スプレッド構文を使用しない場合、既存の配列を一部として使用して新しい配列を作成するには、配列リテラル構文は十分ではなく、{{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, {{jsxref("Array/concat", "concat()")}} などを組み合わせて使う高圧的なコードを使用しなければなりません。

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

関数の引数と同様に、`...` は配列リテラルのどこでも、何回でも使えます。

#### 配列をコピーする

スプレッド構文を使用して配列の{{Glossary("shallow copy", "シャローコピー")}}を作成することができます。配列のそれぞれの要素は、コピーされることなく、その同一性を保持します。

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 は [1, 2, 3, 4] になります
// arr は変更されません
```

スプレッド構文は、配列をコピーする際に効果的に 1 レベル深くコピーします。したがって、多次元配列のコピーには適していない可能性があります。{{jsxref("Object.assign()")}} でも同様です。JavaScript では、ネイティブの操作でディープクローンを行うものはありません。Web API メソッドの {{DOMxRef("Window.structuredClone", "structuredClone()")}} では、特定の[対応している型](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types)の値をディープコピーすることができます。詳細は、[シャローコピー](/ja/docs/Glossary/Shallow_copy)を参照してください。

```js example-bad
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// しまった。 'a' も影響を受けてしまった。
console.log(a);
// [[], [2], [3]]
```

#### 配列を連結するより良い方法

ある配列を既存の配列の末尾に連結するには、{{jsxref("Array.prototype.concat()")}} がよく使われます。スプレッド構文を使用しないと、これは次のように行われます。

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// arr2 のすべての要素を arr1 に追加する
arr1 = arr1.concat(arr2);
```

スプレッド構文を使うと、次のように書けます。

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 は [0, 1, 2, 3, 4, 5] となる
```

{{jsxref("Array.prototype.unshift()")}} は、値の配列を既存の配列の先頭に挿入するためによく使われます。スプレッド構文を使用しないと、これは次のように行われます。

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  arr2 のすべての要素を arr1 へ移植します
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

スプレッド構文を使うと、次のようになります。

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

> **メモ:** `unshift()` とは異なり、これは新しい `arr1` を生成しており、その場では元の `arr1` を変更しません。

#### 条件付きで値を配列に追加

[条件演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator)を使用すると、条件に応じて、配列リテラル内の要素を存在させたり、存在させなかったりすることができます。

```js
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// ['apple', 'banana']
```

条件が `false` の場合、空の配列を展開し、最終的な配列に何も追加しないようにします。これは、次のものとは異なることに注意してください。

```js
const fruits = ["apple", "banana", isSummer ? "watermelon" : undefined];
// ['apple', 'banana', undefined]
```

この場合、追加の `undefined` の要素が `isSummer` が `false` のときに未定義の要素が追加され、この要素は {{jsxref("Array.prototype.map()")}} などのメソッドによって参照されます。

### オブジェクトリテラルでの展開

#### オブジェクトのコピーとマージ

スプレッド構文を使用して、複数のオブジェクトを 1 つの新しいオブジェクトにマージすることができます。

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
```

単一のスプレッドは、元のオブジェクトのシャローコピーを作成します（ただし、列挙不可能なプロパティは含まれず、プロトタイプもコピーされません）。これは[配列をコピーする](#配列をコピーする)のに似ています。

```js
const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
```

#### プロパティの上書き

あるオブジェクトが別のオブジェクトに展開されるとき、または複数のオブジェクトが1つのオブジェクトに展開されるときに、同じ名前のプロパティが検出された場合、プロパティは最後に割り当てられた値を採り、元の設定した位置のままとなります。

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
```

#### 条件付きでプロパティをオブジェクトへ追加

条件に応じて、オブジェクトリテラルで要素を存在する、または存在しないようにすることができます。[条件演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator)を使用します。

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
```

条件が `false` の場合は空オブジェクトとなり、最終オブジェクトに何も取り込まれません。これは、次のものと異なることに注意してください。

```js
const fruits = {
  apple: 10,
  banana: 5,
  watermelon: isSummer ? 30 : undefined,
};
// { apple: 10, banana: 5, watermelon: undefined }
```

この場合、`watermelon` プロパティは常に存在し、{{jsxref("Object.keys()")}} などのメソッドによって参照されます。

プリミティブもオブジェクトに展開できること、そして、列挙値には{{Glossary("falsy","偽値")}}がないという観察結果から、単純に[論理 AND](/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND) 演算子を使用することができます。

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer && { watermelon: 30 }),
};
```

この場合、`isSummer` が偽値であれば、`fruits` オブジェクトにプロパティは作成されません。

#### Object.assign() との比較

オブジェクトを変更するには {{jsxref("Object.assign()")}} を使用することができますが、スプレッド構文は使用できないことに注意してください。

```js
const obj1 = { foo: "bar", x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }
```

さらに、{{jsxref("Object.assign()")}} は対象とするオブジェクトのセッターを開始しますが、スプレッド構文では開始しません。

```js
const objectAssign = Object.assign(
  {
    set foo(val) {
      console.log(val);
    },
  },
  { foo: 1 },
);
// "1" とログ出力。objectAssign.foo は元のセッター

const spread = {
  set foo(val) {
    console.log(val);
  },
  ...{ foo: 1 },
};
// 何もログ出力されない。spread.foo は 1
```

単一の展開で {{jsxref("Object.assign()")}} 関数を単純に再実装することはできません。

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

例えば、上記の例では、スプレッド構文は期待通りに動作しません。残余引数により、オブジェクトリテラルに引数の配列が展開されます。以下は、スプレッド構文を使用した `merge` の実装例です。この動作は {{jsxref("Object.assign()")}} に似ていますが、セッターを起動せず、オブジェクトを変更しないという点が異なります。

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) =>
  objects.reduce((acc, cur) => ({ ...acc, ...cur }));

const mergedObj1 = merge(obj1, obj2);
// { foo: 'baz', x: 42, y: 13 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [残余プロパティ](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property)
- {{jsxref("Function.prototype.apply()")}}

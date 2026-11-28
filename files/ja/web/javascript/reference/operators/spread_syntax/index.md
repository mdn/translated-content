---
title: スプレッド構文 (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**スプレッド構文 (`...`)** を使うと、配列や文字列などの反復可能な値を、関数呼び出しでは 0 個以上の引数に、配列リテラルでは 0 個以上の要素に展開できます。オブジェクトリテラルでは、オブジェクトのプロパティを列挙し、作成中のオブジェクトにキーと値の組を追加します。

スプレッド構文は、残余構文とまったく同じように見えますが、ある意味ではその反対です。スプレッド構文は配列を要素に「展開」しますが、残余構文は複数の要素を集めて単一の要素に「まとめ」ます。[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)と[残余プロパティ](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring#残余プロパティと残余要素)を参照してください。

{{InteractiveExample("JavaScript デモ: スプレッド構文 (...)")}}

```js interactive-example
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// 予想される結果: 6

console.log(sum.apply(null, numbers));
// 予想される結果: 6
```

## 構文

```js-nolint
myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }
```

### 引数

- `iterableObj`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2（代入）以上の式で、[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)に従う反復可能な値に評価されます。
- `obj`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2（代入）以上の式です。その値が持つ自身の列挙可能なプロパティは、オブジェクトリテラルにコピーされます。

### 返値

スプレッド構文自体に返値はありません。関数呼び出しや配列リテラルでは、`iterableObj` の各値が個別の引数または配列要素になります。オブジェクトリテラルでは、`obj` のプロパティキーと値がコピーされます。

## 解説

スプレッド構文は、オブジェクトや配列の内容を新しい配列またはオブジェクトに含める場合や、関数呼び出しの引数リストに値を 1 つずつ渡す場合に使用できます。スプレッド構文を受け入れる場所は 3 つあります。

- [関数の引数](#関数呼び出しでの展開)リスト (`myFunction(a, ...iterableObj, b)`)
- [配列リテラル](#配列リテラルでの展開) (`[1, ...iterableObj, '4', 'five', 6]`)
- [オブジェクトリテラル](#オブジェクトリテラルでの展開) (`{ ...obj, key: 'value' }`)

構文は同じように見えますが、意味づけが若干異なります。

[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)な値、例えば {{jsxref("Array")}} や {{jsxref("String")}} のみが、[配列リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)と引数リストを展開できます。多くのオブジェクトは反復可能ではありません。例えば[プレーンオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object)に [`Symbol.iterator`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) メソッドがない場合はそうなります。

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

一方、[オブジェクトリテラル](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)での展開は、値自身のプロパティを[列挙](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties#traversing_object_properties)します。一般的な配列では、すべてのインデックスが列挙可能な自分自身のプロパティであるため、配列をオブジェクトに展開することができます。

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

すべての[プリミティブ](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ値)はオブジェクトに展開できます。文字列だけが自身の列挙可能なプロパティを持ち、それ以外のプリミティブを展開しても新しいオブジェクトにプロパティは作成されません。

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

#### new 演算子との併用

コンストラクターを {{jsxref("new")}} で呼び出す場合、配列と `apply()` を**直接**使うことはできません。`apply()` は対象の関数を構築するのではなく呼び出すためです。そのため、[`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) は `undefined` になります。しかし、スプレッド構文を使えば、配列の要素を `new` に渡してコンストラクターを呼び出せます。

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

### 配列リテラルでの展開

#### より強力な配列リテラル

スプレッド構文を使用しない場合、既存の配列を一部として含む新しい配列を作成するには、配列リテラルだけでは不十分で、{{jsxref("Array/push", "push()")}}、{{jsxref("Array/splice", "splice()")}}、{{jsxref("Array/concat", "concat()")}} などを組み合わせた命令型のコードを書く必要があります。

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
const arr2 = [...arr]; // arr.slice() と同様

arr2.push(4);
// arr2 は [1, 2, 3, 4] になります
// arr は変更されません
```

配列をコピーするとき、スプレッド構文は実質的に 1 レベル分だけコピーします。そのため、多次元配列のコピーには適さない場合があります。{{jsxref("Object.assign()")}} でも同様です。JavaScript にはディープクローンを行うネイティブ操作はありません。Web API の {{DOMxRef("Window.structuredClone", "structuredClone()")}} メソッドを使うと、特定の[対応している型](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types)の値をディープコピーできます。詳細は[シャローコピー](/ja/docs/Glossary/Shallow_copy)を参照してください。

```js example-bad
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// しまった。配列 a にも影響した。
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

// arr2 のすべての要素を arr1 の先頭に挿入
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

> [!NOTE]
> `unshift()` とは異なり、これは新しい `arr1` を生成しており、その場では元の `arr1` を変更しません。

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

この場合、`isSummer` が `false` のときに余分な `undefined` 要素が追加されます。この要素は {{jsxref("Array.prototype.map()")}} などのメソッドで処理されます。

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

オブジェクトリテラルのプロパティを、条件に応じて追加するかどうかを切り替えるには、[条件演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator)を使用できます。

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

プリミティブもオブジェクトに展開でき、{{Glossary("falsy","偽値")}}は列挙可能なプロパティを持たないため、単純に[論理 AND](/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND) 演算子を使用できます。

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

オブジェクトを変更するには {{jsxref("Object.assign()")}} を使用できますが、スプレッド構文では変更できないことに注意してください。

```js
const obj1 = { foo: "bar", x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }
```

さらに、{{jsxref("Object.assign()")}} は対象オブジェクトのセッターを呼び出しますが、スプレッド構文は呼び出しません。

```js
const objectAssign = Object.assign(
  {
    set foo(val) {
      console.log(val);
    },
  },
  { foo: 1 },
);
// "1" をログ出力。objectAssign.foo は元のセッターのまま

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

上記の例では、残余引数によって引数の配列が作成されるため、スプレッド構文は期待どおりには動作しません。以下はスプレッド構文を使用した `merge` の実装例です。この動作は {{jsxref("Object.assign()")}} に似ていますが、セッターを呼び出さず、オブジェクトを変更しない点が異なります。

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) =>
  objects.reduce((acc, cur) => ({ ...acc, ...cur }));

const mergedObj = merge(obj1, obj2);
// { foo: 'baz', x: 42, y: 13 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [残余プロパティ](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring#残余プロパティと残余要素)
- {{jsxref("Function.prototype.apply()")}}

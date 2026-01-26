---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

**`for...of`** 文は、[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)をソースとした一連の値を処理するループを実行します。反復可能オブジェクトには、
たとえば組み込みの {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{domxref("NodeList")}}（およびその他の DOM コレクション）、同様に {{jsxref("Functions/arguments", "arguments")}} オブジェクトや、[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)から生成される[ジェネレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator)、ユーザー定義の反復可能オブジェクトなどがあります。

{{InteractiveExample("JavaScript デモ: for...of 文")}}

```js interactive-example
const array = ["a", "b", "c"];

for (const element of array) {
  console.log(element);
}

// 予想される結果: "a"
// 予想される結果: "b"
// 予想される結果: "c"
```

## 構文

```js-nolint
for (variable of iterable)
  statement
```

- `variable`
  - : 反復処理の各回において、一連のデータから値を受け取ります。[`const`](/ja/docs/Web/JavaScript/Reference/Statements/const), [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let), [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var), [`using`](/ja/docs/Web/JavaScript/Reference/Statements/using), [`await using`](/ja/docs/Web/JavaScript/Reference/Statements/await_using) の何れかで定義されたものか、[代入](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)のターゲットとなります（以前に宣言した変数や、オブジェクトプロパティ、[構造分解パターン](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)など）。`var` で宣言された変数はループのローカル変数にはなりません。すなわち `for...of` ループと同じスコープになります。
- `iterable`
  - : 反復可能オブジェクトです。ループを実行する一連の値の元となるものです。
- `statement`
  - : 反復処理のたびに実行される文です。`variable` を参照することができます。[ブロック文](/ja/docs/Web/JavaScript/Reference/Statements/block)を使用して、複数の文を実行することができます。

## 解説

`for...of` ループは、反復可能オブジェクトから取り出した値を 1 つずつ順次処理します。ループが値に対して行う各処理は反復処理と呼ばれ、ループは反復可能オブジェクトを反復処理すると言います。それぞれの反復処理では、現在のシーケンス値を参照する可能性のある文が実行されます。

`for...of` ループが反復可能オブジェクトを反復処理する場合、最初にその反復可能オブジェクトの [`[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) メソッドが呼び出されます。これは[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)を返すので、その返されたイテレーターの [`next()`](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル) メソッドを呼び出すことで、`variable` に代入される一連の値を生成することができます。

`for...of` ループは、イテレーターが完全に処理された時点で終了します（`next()` の結果は、`done: true` を持つオブジェクトです）。他のループ文と同様に、[フロー制御文](/ja/docs/Web/JavaScript/Reference/Statements#フロー制御)を `statement` 内部で使用することができます。

- {{jsxref("Statements/break", "break")}} は、`statement` の実行を停止し、ループの後の最初の文に移動します。
- {{jsxref("Statements/continue", "continue")}} は `statement` の実行を停止し、ループの次の反復処理に移ります。

`for...of` ループが早期に終了した場合（例えば、`break` 文に遭遇したり、エラーが発生した場合）、[`return()`](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル) のメソッドが呼び出されクリーンアップ処理が行われます。

`for...of` の `variable` 部分は、`=` 演算子の前に来ることができるものなら何でも受け入れることができます。{{jsxref("Statements/const", "const")}} を使用して、ループ本体の中で再代入されない変数を宣言することができます（反復処理間では変更できます。2 つの別個の変数として扱われるからです）。そうでない場合は、{{jsxref("Statements/let", "let")}} を使用してください。

```js
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

> [!NOTE]
> 反復処理ごとに新しい変数が作成されます。ループ本体内で変数を再代入しても、反復可能オブジェクト（この場合は配列）の元の値には影響しません。

{{jsxref("Statements/using", "using")}} または {{jsxref("Statements/await_using", "await using")}} 宣言を使用して宣言された変数は、ループの反復が完了するたびに破棄されます（また、`await using` は反復の終了時に暗黙の `await` を発生させます）。ただし、ループが早期終了した場合、イテレーター内に残っている未訪問の値は破棄されません（現在の値は破棄されます）。

```js
const resources = [dbConnection1, dbConnection2, dbConnection3];

for (using dbConnection of resources) {
  dbConnection.query("...");
  // dbConnection はここで破棄される
}
```

[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)を使用して複数のローカル変数に代入することもできますし、 `for (x.y of iterable)` のようなプロパティアクセサーを使用して、オブジェクトプロパティに値を代入することもできます。

しかし、特別なルールにより、変数名として `async` を使用することは禁じられています。これは無効な構文です。

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

これは、[`for`](/ja/docs/Web/JavaScript/Reference/Statements/for) ループである有効なコード `for (async of => {};)` との構文のあいまいさを避けるためです。

同様に、`using` 宣言を使用する場合、変数に `of` と名付けることはできません。

```js-nolint example-bad
for (using of of []); // SyntaxError
```

これは、`using` が導入される前に有効だったコード `for (using of [])` との構文上の曖昧さを避けるためです。

## 例

### Array に対する反復処理

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### 文字列に対する反復処理

文字列は [Unicode コードポイント単位で反復処理します](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)。

```js
const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### 型付き配列に対する反復処理

```js
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255
```

### Map に対する反復処理

```js
const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Set に対する反復処理

```js
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### arguments オブジェクトに対する反復処理

{{jsxref("Functions/arguments", "arguments")}} オブジェクトで反復処理をすると、ある JavaScript 関数にすべての引数を渡すことができます。

```js
function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(1, 2, 3);
// 1
// 2
// 3
```

### NodeList に対する反復処理

次の例では `read` クラスを、[`<article>`](/ja/docs/Web/HTML/Reference/Elements/article) 要素の直接の子孫である段落に対して追加します。DOM の [`NodeList`](/ja/docs/Web/API/NodeList) コレクションを反復処理すること実現します。

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### ユーザー定義の反復可能オブジェクトに対する反復処理

独自のイテレーターを返す `[Symbol.iterator]()` メソッドで、オブジェクトを反復処理します。

```js
const iterable = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        if (i <= 3) {
          return { value: i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

オブジェクトを `[Symbol.iterator]()` ジェネレーターメソッドで反復処理します。

```js
const iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

反復可能なイテレーター（`this` を返す `[Symbol.iterator]()` メソッドを持つイテレーター）は、`for...of` などのイテレーターを想定した構文でイテレーターを使用可能にする、かなり一般的なテクニックです。

```js
let i = 1;

const iterator = {
  next() {
    if (i <= 3) {
      return { value: i++, done: false };
    }
    return { value: undefined, done: true };
  },
  [Symbol.iterator]() {
    return this;
  },
};

for (const value of iterator) {
  console.log(value);
}
// 1
// 2
// 3
```

### ジェネレーターに対する反復処理

```js
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
}
// 1
// 2
// 3
```

### 早期の脱出

最初のループで `break` 文を実行すると、ループが早期に終了します。イテレーターはまだ完了していないので、2 つ目のループは最初のループが停止したところから継続されます。

```js
const source = [1, 2, 3];

const iterator = source[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("この文字列はログ出力されません。");
}
// 1

// 同じイテレーターを使用する別のループは、
// 最後のループが終わったところをピックアップします。
for (const value of iterator) {
  console.log(value);
}
// 2
// 3

// イテレーターを使い切りました。
// このループでは、反復処理は実行されません。
for (const value of iterator) {
  console.log(value);
}
// [出力なし]
```

ジェネレーターは [`return()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator/return) メソッドを実装しており、ループが終了するとジェネレーター関数が早期復帰するように発生しています。このため、ジェネレーターはループをまたいで再利用することができません。

```js example-bad
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("この文字列はログ出力されません。");
}
// 1

// イテレーターを使い切りました。
// このループでは、反復処理は実行されません。
for (const value of generator) {
  console.log(value);
}
// [出力なし]
```

### for...of と for...in との違い

`for...in` および `for...of` 文は、両方とも何かに対する繰り返しです。これらの主な違いは、何に対する繰り返しなのかというところです。

{{jsxref("Statements/for...in", "for...in")}} 文は、オブジェクトのすべての[列挙可能なプロパティ](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)に対して、順序不定で繰り返し処理を行います。`for...of` 文は、[反復可能なオブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)が定義した順序で値を反復処理します。

次の例では、{{jsxref("Array")}} に対して `for...of` ループと `for...in` ループを使用した場合の違いを示しています。

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterable = [3, 5, 7];
iterable.foo = "hello";

for (const i in iterable) {
  console.log(i);
}
// "0", "1", "2", "foo", "arrCustom", "objCustom"

for (const i in iterable) {
  if (Object.hasOwn(iterable, i)) {
    console.log(i);
  }
}
// "0" "1" "2" "foo"

for (const i of iterable) {
  console.log(i);
}
// 3 5 7
```

オブジェクト `iterable` は `objCustom` および `arrCustom` プロパティを継承しています。`Object.prototype` および `Array.prototype` の各プロパティを[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)で格納しているからです。

`for...in` ループは `iterable` オブジェクトの[列挙可能なプロパティ](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)のみを出力します。配列の要素である `3`, `5`, `7` や `"hello"` は、列挙可能なプロパティではないため出力しません。これらは値です。配列の _添字_ が `arrCustom` や `objCustom` と共に出力されます。なぜプロパティが反復処理に出てこないのかが分からない場合は、[配列の反復処理と `for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in#配列の繰り返しと_for...in) にもっと詳しい説明があります。

2 番目のループは最初のものと似ていますが、{{jsxref("Object.hasOwn()")}} を使用して見つかった列挙可能なプロパティがオブジェクト自身のものであるか、すなわち継承したものでないかどうかをチェックしています。オブジェクト自身のプロパティである場合は、ログ出力します。`0`, `1`, `2`, `foo` は自身のプロパティであるため出力されます。`arrCustom` と `objCustom` は継承されたものであるために出力されません。

`for...of` ループは、`iterable` が[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)として定義している順序で _値_ を反復処理し、ログ出力します。オブジェクトの _要素_ である `3`, `5`, `7` は表示されますが、オブジェクトの _プロパティ_ は表示されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}

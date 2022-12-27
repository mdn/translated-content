---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
---

{{jsSidebar("Statements")}}

**`for...of` 文**は、[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能_iterable_プロトコル)、たとえば組込みの {{jsxref("String")}}, {{jsxref("Array")}}, 配列状オブジェクト (例えば {{jsxref("Functions/arguments", "arguments")}} や {{domxref("NodeList")}}), {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, およびユーザー定義の反復可能オブジェクトなどに対して、反復的な処理をするループを作成します。これはオブジェクトのそれぞれの識別可能なプロパティの値に対して、実行される文を表す独自の反復フックを呼び出します。

{{EmbedInteractiveExample("pages/js/statement-forof.html")}}

## 構文

```
for (variable of iterable)
  statement
```

- `variable`
  - : 反復処理の各回において、異なるプロパティの値が `variable` に割り当てられます。`variable` は `const`, `let`, `var` で宣言することができます。
- `iterable`
  - : 反復処理が行われる反復可能なプロパティを持つオブジェクトです。

## 例

### {{jsxref("Array")}} での反復処理

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

{{jsxref("let")}} を {{jsxref("const")}} の代わりに使用しても、ブロック内で変数が再割り当てされます。

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

### {{jsxref("String")}} での反復処理

```js
const iterable = 'boo';

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### {{jsxref("TypedArray")}} での反復処理

```js
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255
```

### {{jsxref("Map")}} での反復処理

```js
const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

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

### {{jsxref("Set")}} での反復処理

```js
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### arguments オブジェクトでの反復処理

{{jsxref("Functions/arguments", "arguments")}} オブジェクトで反復処理をすると、ある JavaScript 関数にすべての引数を渡すことができます。

```js
(function() {
  for (const argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);

// 1
// 2
// 3
```

### DOM コレクションでの反復処理

{{domxref("NodeList")}} のような DOM コレクションでの反復処理です。次の例では、`read` クラスを `article` の直下の子である段落に加えます。

```js
// 注: これは以下のものに対応しているプラットフォームでのみ動作します。
// implemented NodeList.prototype[Symbol.iterator]
const articleParagraphs = document.querySelectorAll('article > p');

for (const paragraph of articleParagraphs) {
  paragraph.classList.add('read');
}
```

### 反復処理の終了

`for...of` ループ内では、`break`, `throw`, `return` を発生させることで反復処理を中断させることができます。この場合、反復子は閉じられます。

```js
function* foo(){
  yield 1;
  yield 2;
  yield 3;
};

for (const o of foo()) {
  console.log(o);
  break; // 反復処理を閉じ、ループの外の実行が継続されます
}
console.log('done');
```

### ジェネレーターでの反復処理

[ジェネレーター](/ja/docs/Web/JavaScript/Reference/Statements/function*)、すなわち反復可能オブジェクトを生成する関数で反復処理することもできます。

```js
function* fibonacci() { // ジェネレーター関数
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (const n of fibonacci()) {
  console.log(n);
  // 1000 で繰り返しを終了する
  if (n >= 1000) {
    break;
  }
}
```

#### ジェネレーターを再利用してはいけない

ジェネレーターは、`for...of` ループが {{jsxref("Statements/break", "break")}} キーワードなどで早く終了しても再利用してはいけません。ループを抜けると、ジェネレーターは閉じられ、そこで繰り返してもそれ以上の結果は算出されません。

```js example-bad
const gen = (function *(){
  yield 1;
  yield 2;
  yield 3;
})();
for (const o of gen) {
  console.log(o);
  break;  // 反復処理を閉じる
}

// ジェネレーターを再利用してはいけません。以下の処理は意味がありません。
for (const o of gen) {
  console.log(o); // Never called.
}
```

### その他の反復可能オブジェクトでの反復処理

明示的に [iterable](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#iterable) プロトコルを実装しているオブジェクトで反復処理することもできます。

```js
const iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (const value of iterable) {
  console.log(value);
}
// 0
// 1
// 2
```

### `for...of` と `for...in` との違い

`for...in` および `for...of` 文は、両方とも何かに対する繰り返しです。これらの主な違いは何に対する繰り返しなのかというところです。

{{jsxref("Statements/for...in", "for...in")}} 文は、オブジェクトのすべての[列挙可能なプロパティ](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)に対して、順序不定で繰り返し処理を行います。

`for...of` 文は、[反復可能なオブジェクト](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterables)が定義した順序で値を反復処理します。

次の例では、{{jsxref("Array")}} に対して `for...of` ループと `for...in` ループを使用した場合の違いを示しています。

```js
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'hello';

for (const i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (const i of iterable) {
  console.log(i); // logs 3, 5, 7
}
```

上記のコードをステップを追って見ていきましょう。

```js
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'hello';
```

すべてのオブジェクトは `objCustom` プロパティを継承し、すべての {{jsxref("Array")}} オブジェクトは `arrCustom` プロパティを継承します。{{jsxref("Object.prototype")}} と {{jsxref("Array.prototype")}} にそれぞれこれらのプロパティを追加されているためです。オブジェクト `iterable` は `objCustom` と `arrCustom` の各プロパティを、[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)によって継承しています。

```js
for (const i in iterable) {
  console.log(i); // 0, 1, 2, "foo", "arrCustom", "objCustom" と出力
}
```

このループは `iterable` オブジェクトの[列挙可能なプロパティ](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)のみを、順序不定で出力します。配列の**要素**である `3`, `5`, `7` や `hello` は、列挙可能なプロパティ**ではない**ため出力しません。実際、これらはプロパティではなく、値です。配列の**添字**が `arrCustom` や `objCustom` と共に出力されます。なぜプロパティが反復処理に出てこないのかが分からない場合は、{{jsxref("Statements/for...in", "array iteration and for...in", "#Array_iteration_and_for...in")}} にもっと詳しい説明があります。

```js
for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // 0, 1, 2, "foo" と出力
  }
}
```

このループは最初のものと似ていますが、{{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}} を使用して見つかった列挙可能なプロパティがオブジェクト自身のものであるか、すなわち継承したものでないかどうかをチェックしています。オブジェクト自身のプロパティである場合は、ログ出力します。`0`, `1`, `2`, `foo` は自身のプロパティである (**継承されたものではない**) ため出力されます。`arrCustom` と `objCustom` は**継承されたものである**ために出力されません。

```js
for (const i of iterable) {
  console.log(i); // 3, 5, 7 と出力
}
```

このループは、`iterable` が[反復可能なオブジェクト](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterables)として定義している順序で**値**を反復処理し、ログ出力します。オブジェクトの**要素**である `3`, `5`, `7` は表示されますが、オブジェクトの**プロパティ**は表示されません。

## 仕様

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-for-in-and-for-of-statements', 'for...of statement')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.for_of")}}

## 関連情報

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}} – オブジェクトに **`for...of`** を使用するときに便利です。

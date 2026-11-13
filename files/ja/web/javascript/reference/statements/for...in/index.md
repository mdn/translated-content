---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

**`for...in`** 文は、オブジェクトの[列挙可能プロパティ](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)すべてに対して、継承された列挙可能プロパティも含めて反復処理を行います（[Symbol](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol) がキーになったものは無視します）。

{{InteractiveExample("JavaScript デモ: for...in 文")}}

```js interactive-example
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// 予想される結果:
// "a: 1"
// "b: 2"
// "c: 3"
```

## 構文

```js-nolint
for (variable in object)
  statement
```

### 引数

- `variable`
  - : それぞれの反復処理において、文字列でプロパティ名を受け取ります。[`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)、[`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) の何れかの宣言、または[代入](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)ターゲット（例えば、以前宣言された変数や、オブジェクトプロパティ、[構造分解パターン](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)）です。`var` で宣言された変数はループのローカル変数にはなりません。すなわち `for...in` ループと同じスコープになります。
- `object`
  - : シンボルではない列挙可能なプロパティを反復処理するオブジェクトです。
- `statement`
  - : それぞれの反復処理で実行される文です。 `variable` を参照することができます。[ブロック文](/ja/docs/Web/JavaScript/Reference/Statements/block)を使用して、複数の文を使用することができます。

## 解説

このループは、オブジェクト自身と、オブジェクトがそのプロトタイプチェーンから継承するプロパティ（プロトタイプチェーンにおいて、オブジェクトから遠いプロトタイプのプロパティよりも、近いプロトタイプのプロパティが優先される）のすべての列挙可能なプロパティを反復処理することになります。

他のループ文と同様に、[フロー制御文](/ja/docs/Web/JavaScript/Reference/Statements#フロー制御)を `statement` 内部で使用することができます。

- {{jsxref("Statements/break", "break")}} は、`statement` の実行を停止し、ループの後の最初の文に移動します。
- {{jsxref("Statements/continue", "continue")}} は `statement` の実行を停止し、ループの次の反復処理に移ります。

`for...in` ループは、列挙可能なシンボル以外のプロパティに対してのみ反復処理を行います。 `Array` や `Object` のような組み込みコンストラクターから生成したオブジェクトは、列挙可能でないプロパティを `Array.prototype` や `Objet.prototype` から、例えば {{jsxref("Array")}} の {{jsxref("Array/indexOf", "indexOf()")}} メソッドや {{jsxref("Object")}} の {{jsxref("Object/toString", "toString()")}} メソッドを継承していますが、これらは `for...in` ループでは処理されません。

現代の ECMAScript の仕様では、走査順序は明確に定義されており、 実装同士の間で一貫しています。プロトタイプチェーンのそれぞれの成分内では、非負の整数値（配列の添字となるもの）はすべて値の昇順で最初に走査され、次に文字列のキーがプロパティの作成時系列で昇順に走査されます。

`for...in` の `variable` 部分は、`=` 演算子の前に来ることができるものであれば、何でも受け入れることができます。ループ本体の中で再代入されない限り、{{jsxref("Statements/const", "const")}} を使用して変数を宣言できます（これらは反復処理毎に別々の変数と見なされるため、変化が可能です）。そうでない場合は、{{jsxref("Statements/let", "let")}} を使用してください。複数のローカル変数に代入するには[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)が使用できます。または、`for (x.y in iterable)` のようなプロパティアクセサーを使用してオブジェクトのプロパティに値を代入することもできます。ただし、{{jsxref("Statements/using", "using")}} および {{jsxref("Statements/await_using", "await using")}} は許可されません。これらの宣言では破棄可能なオブジェクトが必要ですが、変数は常に文字列またはシンボルとなるためです。

[古い構文](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#文)では、初期化子付きのループ変数を `var` 宣言で行うことができます。これは厳格モードでは[構文エラー](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer)が発生し、非厳格モードでは無視されます。

### 削除、追加、変更されたプロパティ

`for...in` はプロパティキーを以下の方法で巡回します。

1. まず、現在のオブジェクトのすべての自身の文字列キーを取得します。その方法は {{jsxref("Object.getOwnPropertyNames()")}} ととても似ています。
2. 各キーについて、同じ値を持つ文字列がこれまで訪問されたことがない場合、[プロパティ記述子が取得され](/ja/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor)、そのプロパティが列挙可能である場合にのみ訪問されます。ただし、このプロパティ文字列は列挙可能でなくとも訪問済みとしてマークされます。
3. その後、現在のオブジェクトはそのプロトタイプと置き換えられ、このプロセスが繰り返されます。

すなわち、次のようになります。

- 反復処理中に現在参照されているオブジェクトに追加されたプロパティは、どれも参照されません。現在のオブジェクトのすべての自身のプロパティは、事前に保存されているためです。
- プロトタイプチェーン内の複数のオブジェクトが同じ名前のプロパティを持つ場合、最初のオブジェクトのみが考慮され、かつそのプロパティが列挙可能である場合にのみアクセスされます。列挙可能でない場合、プロトタイプチェーンの上位にある同じ名前のプロパティが列挙可能であっても、それらは一切参照されません。

一般的に、反復処理中は現在アクセスしているプロパティ以外のプロパティを追加、変更、削除しないことが最善です。仕様書では、以下のいずれかの場合に実装が上記のアルゴリズムに従わないことを明示的に許可しています。

- オブジェクトのプロトタイプチェーンは反復処理中に変更された。
- 反復処理中に、プロパティがオブジェクトまたはそのプロトタイプチェーンから削除された。
- 反復処理中に、オブジェクトのプロトタイプチェーンにプロパティが追加された。
- プロパティの列挙可能性が反復処理中に変更された。

これらの場合、実装が期待する動作とは異なる挙動を示す可能性があり、あるいは実装間で異なる挙動を示すことがあります。

### 配列の反復処理と for...in

配列の添字は整数名を持つ単なる列挙可能なプロパティであり、それ以外は一般的なオブジェクトのプロパティと同じです。`for...in` ループは、すべての整数キーを他のキーの前に、厳密に増加する順序で反復処理するので、`for...in` の動作は通常の配列の反復処理に近いものです。しかし、`for...in` ループは、非整数の名前を持つプロパティや継承されるプロパティも含めて、列挙可能なすべてのプロパティを返します。`for...of` とは異なり、`for...in` は配列のイテレーターの代わりにプロパティの列挙を使用します。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)では、`for...of` は空のスロットにアクセスしますが、`for...in` はそうではありません。

数値の添字を使った {{jsxref("Statements/for", "for")}} ループ（か {{jsxref("Array.prototype.forEach()")}} か {{jsxref("Statements/for...of", "for...of")}} ループ）を使った方が、文字列ではなく数値の添字を返し、インデックス以外のプロパティを避けることができるので適しています。

### 固有のプロパティだけで繰り返す

オブジェクトのプロトタイプではなく、オブジェクト自体に付属するプロパティのみを考えたい場合は、以下のテクニックを使用することができます。

- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}

`Object.keys` は列挙可能な自分自身の文字列プロパティのリストを返す一方、 `Object.getOwnPropertyNames` は列挙可能でないプロパティも格納します。

多くの JavaScript スタイルガイドやリンターは、`for...in` の使用を推奨していません。なぜなら、プロトタイプチェーン全体を反復処理するので、望んだ結果になることはほとんどなく、より広く使用されている `for...of` ループと混同してしまう可能性があるからです。`for...in` の最も実用的な用途はデバッグで、（コンソールに出力するなどして）オブジェクトのプロパティを調べるのに簡単な方法でしょう。オブジェクトがアドホックなキーと値のペアとして使用されるような状況では、`for...in`によって、それらのキーのいずれかが具体的な値を保持しているかどうかを調べることができます。

## 例

### for...in の使用

以下の `for...in` ループは、オブジェクトの列挙可能なシンボルではないプロパティをすべて反復し、そのプロパティ名と値を文字列で記録します。

```js
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// ログ:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

### 自身のプロパティの反復処理

次の関数では {{jsxref("Object.hasOwn()")}} の使い方を例示しています。継承されたプロパティは表示されません。

```js
const triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

const obj = new ColoredTriangle();

for (const prop in obj) {
  if (Object.hasOwn(obj, prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// ログ:
// "obj.color = red"
```

### 同時変更

> [!WARNING]
> このようなコードを自分で書くべきではありません。これは、`for...in` の動作を特定の特殊なケースで示すためにここに記載しているだけです。

反復処理中に現在のオブジェクトに追加されたプロパティは決して訪問されません。

```js
const obj = { a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  obj.c = 3;
}

// ログ:
// obj.a = 1
// obj.b = 2
```

シャドウ化されたプロパティは、一度だけ処理されます。

```js
const proto = { a: 1 };
const obj = { __proto__: proto, a: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// ログ:
// obj.a = 2

Object.defineProperty(obj, "a", { enumerable: false });

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
// 何もログに記録しない。最初に処理された "a" プロパティが列挙不可能であるため。
```

さらに、以下のケースでは動作が未定義であり、実装が指定されたアルゴリズムから逸脱する傾向があることに留意してください。

反復中にプロトタイプを変更します。

```js
const obj = { a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  Object.setPrototypeOf(obj, { c: 3 });
}
```

反復処理中のプロパティを削除します。

```js
const obj = { a: 1, b: 2, c: 3 };

// 処理前にプロパティを削除
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  delete obj.c;
}

const obj2 = { a: 1, b: 2, c: 3 };

// 処理後にプロパティを削除
for (const prop in obj2) {
  console.log(`obj2.${prop} = ${obj2[prop]}`);
  delete obj2.a;
}
```

反復処理中にプロトタイプに追加された列挙可能なプロパティです。

```js
const proto = {};
const obj = { __proto__: proto, a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  proto.c = 3;
}
```

反復処理中にプロパティの列挙可能性を変更します。

```js
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  Object.defineProperty(obj, "c", { enumerable: false });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for", "for")}}
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}

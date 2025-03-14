---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
l10n:
  sourceCommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jsSidebar("Statements")}}

**`for...in` 文**は、キーが文字列であるオブジェクトの[列挙可能プロパティ](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)すべてに対して、継承された列挙可能プロパティも含めて反復処理を行います ([Symbol](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol) がキーになったものは無視します)。

{{InteractiveExample("JavaScript Demo: Statement - For...In")}}

```js interactive-example
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
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
  - : それぞれの反復処理において、文字列でプロパティ名を受け取ります。[`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)、[`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) の何れかの宣言、または[代入](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)ターゲット（例えば、以前宣言された変数や、オブジェクトプロパティ）です。
- `object`
  - : シンボルではない列挙可能なプロパティを反復処理するオブジェクトです。
- `statement`
  - : それぞれの反復処理で実行される文です。 `variable` を参照することができます。[ブロック文](/ja/docs/Web/JavaScript/Reference/Statements/block)を使用して、複数の文を使用することができます。

## 解説

このループは、オブジェクト自身と、オブジェクトがそのプロトタイプチェーンから継承するプロパティ（プロトタイプチェーンにおいて、オブジェクトから遠いプロトタイプのプロパティよりも、近いプロトタイプのプロパティが優先される）のすべての列挙可能なプロパティを反復処理することになります。

`for...in` ループは、列挙可能なシンボル以外のプロパティに対してのみ反復処理を行います。 `Array` や `Object` のような組み込みコンストラクターから生成したオブジェクトは、列挙可能でないプロパティを `Array.prototype` や `Objet.prototype` から、例えば {{jsxref("Array")}} の {{jsxref("Array/indexOf", "indexOf()")}} メソッドや {{jsxref("Object")}} の {{jsxref("Object/toString", "toString()")}} メソッドを継承していますが、これらは `for...in` ループでは処理されません。

現代の ECMAScript の仕様では、走査順序は明確に定義されており、 実装同士の間で一貫しています。プロトタイプチェーンのそれぞれの成分内では、非負の整数値（配列の添字となるもの）はすべて値の昇順で最初に走査され、次に文字列のキーがプロパティの作成時系列で昇順に走査されます。

`for...in` の `variable` 部分は、`=` 演算子の前に来ることができるものであれば、何でも受け入れることができます。ループ本体の中で再代入されない限り、{{jsxref("Statements/const", "const")}} を使用して変数を宣言できます（これらは反復処理毎に別々の変数と見なされるため、変化が可能です）。そうでない場合は、{{jsxref("Statements/let", "let")}} を使用してください。[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) や `for (x.y in iterable)` のようなオブジェクトプロパティを使用することもできます。

[古い構文](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#文)では、初期化子付きのループ変数を `var` 宣言で行うことができます。これは厳格モードでは[構文エラー](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer)が発生し、非厳格モードでは無視されます。

### 削除、追加、変更されたプロパティ

プロパティがある反復処理で変更され、その後に処理された場合は、ループでの値はその後の時点での値となります。処理される前に削除されたプロパティは、その後処理されません。反復処理が行われているオブジェクトに追加されたプロパティは、処理されたり、反復処理から除外されたりします。

一般的に、現在処理しているプロパティ以外のものに関しては、反復の間にオブジェクトのプロパティを追加、修正、または削除しないのが一番です。追加したプロパティが処理されるか、(現在のもの以外の)修正したプロパティが修正される前または後に処理されるか、または削除したプロパティが削除される前に処理されるかといったことには、何の保証もありません。

### 配列の反復処理と for...in

配列の添字は整数名を持つ単なる列挙可能なプロパティであり、それ以外は一般的なオブジェクトのプロパティと同じです。`for...in` ループは、すべての整数キーを他のキーの前に、厳密に増加する順序で反復処理するので、`for...in` の動作は通常の配列の反復処理に近いものです。しかし、`for...in` ループは、非整数の名前を持つプロパティや継承されるプロパティも含めて、列挙可能なすべてのプロパティを返します。`for...of` とは異なり、`for...in` は配列のイテレーターの代わりにプロパティの列挙を使用します。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)では、`for...of` は空のスロットにアクセスしますが、`for...in` はそうではありません。

数値の添字を使った {{jsxref("Statements/for", "for")}} ループ（か {{jsxref("Array.prototype.forEach()")}} か {{jsxref("Statements/for...of", "for...of")}} ループ）を使った方が、文字列ではなく数値の添字を返し、インデックス以外のプロパティを避けることができるので適しています。

### 固有のプロパティだけで繰り返す

オブジェクトのプロトタイプではなく、オブジェクト自体に付属するプロパティのみを考えたい場合は、以下のテクニックを使用することができます。

- {{jsxref("Object.keys", "Object.keys(myObject)")}}
- {{jsxref("Object.getOwnPropertyNames", "Object.getOwnPropertyNames(myObject)")}}

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

次の関数では {{jsxref("Object.hasOwn", "Object.hasOwn()")}} の使い方を例示しています。継承されたプロパティは表示されません。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for", "for")}}
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}

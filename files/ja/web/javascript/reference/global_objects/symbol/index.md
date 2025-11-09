---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

**`Symbol`** は組み込みオブジェクトであり、コンストラクターは一意であることが保証されているシンボル[プリミティブ](/ja/docs/Glossary/Primitive)（**シンボル値**または単に**シンボル**）を返します。シンボルは、他のコードがオブジェクトに追加する可能性のあるキーと衝突しないように、また、他のコードがオブジェクトにアクセスするために通常使用するメカニズムから隠されるるように、一意のプロパティキーをオブジェクトに追加するためによく使用されます。これによって弱い{{Glossary("encapsulation","カプセル化")}}、または弱い形の[情報隠蔽](https://ja.wikipedia.org/wiki/情報隠蔽)が実現できます。

`Symbol()` を呼び出すたびに、一意なシンボルを返すことが保証されています。すべての `Symbol.for("key")` を呼び出すと、指定された `"key"` の値に対して常に同じ Symbol を返します。`Symbol.for("key")` が呼び出されると、与えられたキーを持つ Symbol がグローバルな Symbol レジストリーで見つかれば、その Symbol が返されます。そうでない場合は、新しい Symbol が作成され、与えられたキーの下でグローバル Symbol レジストリーに追加され、返されます。

## 解説

新しいプリミティブシンボルを作成するには、`Symbol()` と記述し、その説明としてオプションの文字列を指定します。

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

上記のコードは 3 つの新しいシンボルを作成します。`Symbol("foo")` は、文字列 `"foo"` をシンボルに変換するわけではないことに注意してください。これは毎回新しいシンボルを作成します。

```js
Symbol("foo") === Symbol("foo"); // false
```

次のように {{jsxref("Operators/new", "new")}} 演算子を付けた構文では、{{jsxref("TypeError")}} が発生します。

```js example-bad
const sym = new Symbol(); // TypeError
```

これは、作者が新しいシンボル値の代わりに明示的な `Symbol` ラッパーオブジェクトを作成することを防ぐものです。その他のプリミティブデータ型では、明示的なラッパーオブジェクトを作成することは一般的に可能なので（`new Boolean`、`new String`、`new Number` など）、驚くかもしれません。

本当に `Symbol` ラッパーオブジェクトを作成したい場合は、`Object()` 関数を使用してください。

```js
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
```

シンボルは参照同一性を持つ唯一のプリミティブデータ型であるため（つまり、同じシンボルを 2 度作成することはできない）、ある意味ではオブジェクトのように振る舞います。例えば、シンボルはガベージコレクトできるので、{{jsxref("WeakMap")}}、{{jsxref("WeakSet")}}、{{jsxref("WeakRef")}}、{{jsxref("FinalizationRegistry")}} オブジェクトに格納できます。

### グローバルシンボルレジストリー内の共有シンボル

上記の構文で `Symbol()` 関数を使用すると、プログラムのライフタイムを通じて値が一意であるシンボルが作成されます。ファイルをまたいで、さらにはレルム（それぞれが独自のグローバルスコープを持つ）をまたいで利用可能なシンボルを作成するには、{{jsxref("Symbol.for()")}} と {{jsxref("Symbol.keyFor()")}} メソッドを使用して、グローバルなシンボルレジストリーからシンボルを設定したり取得したりします。

なお、「グローバルシンボルレジストリー」は架空の概念に過ぎず、JavaScript エンジンの内部データ構造に対応するものがあるとは限りません。また、そのようなレジストリーが存在したとしても、その内容は `for()` および `keyFor()` メソッドを通さない限り、JavaScript のコードからは利用できません。

`Symbol.for(tokenString)` メソッドは文字列のキーを取り、レジストリーからシンボル値を返すのに対し、`Symbol.keyFor(symbolValue)` はシンボル値を受け取り、それに対応する文字列キーを返します。それぞれは逆の関係になるため、次の式は `true` となります。

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true
```

登録シンボルはどこでも任意に作成できるため、ラップする文字列とほとんど同じように動作します。そのため、一意であることは保証されず、ガベージコレクションの対象にもなりません。したがって、登録シンボルは {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, {{jsxref("FinalizationRegistry")}} の各オブジェクトで使用することはできません。

### ウェルノウンシンボル

`Symbol` コンストラクターのすべての静的プロパティは、それ自身が領域をまたぐ定数の値を持ったシンボルです。これらは「ウェルノウンシンボル」と呼ばれています。これらは JavaScript の特定の組み込み操作の「プロトコル」として提供されているもので、ユーザーが言語の動作をカスタマイズすることができます。 例えば、コンストラクター関数が {{jsxref("Symbol.hasInstance")}} という名前のメソッドを持っている場合、このメソッドは {{jsxref("Operators/instanceof", "instanceof")}} 演算子を使った動作をエンコードします。

ウェルノウンシンボルが導入される前、JavaScript では特定の組み込み操作を実装するために通常のプロパティを使用していました。例えば、[`JSON.stringify`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 関数は各オブジェクトの `toJSON()` メソッドを呼び出そうとし、[`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/String) 関数はオブジェクトの `toString()` メソッドと `valueOf()` メソッドを呼び出します。しかし、言語により多くの操作が追加されるにつれて、各操作を「マジックプロパティ」に指定することは、後方互換性を壊し、言語の動作を推論しにくくする可能性があることが分かってきました。ウェルノウンシンボルを使用することで、通常文字列プロパティしか読み取らない通常のコードから、カスタマイズを「見えない」ようにすることができます。

> [!NOTE]
> 仕様書では、ウェルノウンシンボルを表すために `@@<シンボル名>` という表記を使っていました。例えば、{{jsxref("Symbol.hasInstance")}} は `@@hasInstance` と表記され、`Array.prototype[Symbol.iterator]()` メソッドは `Array.prototype[Symbol.iterator]()` と呼ばれていました。この表記法は仕様書では使われなくなりましたが、古い文書や議論ではまだ見かけることがあります。

ウェルノウンシンボルはガベージコレクションの対象にはなりません。固定セットで提供され、`Array.prototype` のような組み込みオブジェクトと同様に、プログラムの寿命を通じて一意であるためです。ですから、{{jsxref("WeakMap")}}、{{jsxref("WeakSet")}}、{{jsxref("WeakRef")}}、{{jsxref("FinalizationRegistry")}} の各オブジェクト内で使用することができます。

### オブジェクトでのシンボルプロパティの検索

{{jsxref("Object.getOwnPropertySymbols()")}} メソッドはシンボルの配列を返し、指定されたオブジェクトのシンボルプロパティを探すことができます。すべてのオブジェクトはシンボルプロパティを持たない状態で初期化されるため、オブジェクトにシンボルプロパティを設定しない限り、この配列は空になることに注意してください。

## コンストラクター

- {{jsxref("Symbol/Symbol", "Symbol()")}}
  - : シンボル型のプリミティブ値を返します。`new` を付けて呼び出すとエラーが発生します。

## 静的プロパティ

静的プロパティはすべてウェルノウンシンボルです。これらのシンボルの説明では、「`Symbol.hasInstance` は ... を決定するメソッドです」というような言葉を使っていますが、これはオブジェクトのメソッドがこのシンボルをメソッド名として持つという意味であり（ウェルノウンシンボルは「プロトコル」として機能するため）、シンボルそのものの値を説明しているわけではないことを覚えておいてください。

- {{jsxref("Symbol.asyncDispose")}}
  - : オブジェクトがスコープ外になった際に、そのオブジェクトのリソースを非同期的に破棄するメソッドです。[`await using`](/ja/docs/Web/JavaScript/Reference/Statements/await_using) 宣言で使用されます。
- {{jsxref("Symbol.asyncIterator")}}
  - : オブジェクトの既定の非同期イテレーター (AsyncIterator) を返すメソッドです。[`for await...of`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of) から使用されます。
- {{jsxref("Symbol.dispose")}}
  - : オブジェクトがスコープ外に出た際に、そのオブジェクトのリソースを解放するメソッドです。 [`using`](/ja/docs/Web/JavaScript/Reference/Statements/using) 宣言で使用されます。
- {{jsxref("Symbol.hasInstance")}}
  - : コンストラクターオブジェクトがあるオブジェクトを自分のインスタンスとして認識するかどうかどうかを決定するメソッドです。{{jsxref("Operators/instanceof", "instanceof")}} から使用されます。
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : 論理値で、オブジェクトが配列要素に平坦化されるかどうかを示します。{{jsxref("Array.prototype.concat()")}} から使用されます。
- {{jsxref("Symbol.iterator")}}
  - : オブジェクトの既定のイテレーターを返すメソッドです。[`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) から使用されます。
- {{jsxref("Symbol.match")}}
  - : 文字列に対して照合するメソッドであり、オブジェクトが正規表現として使用できるかどうかを判断するためにも使用されます。{{jsxref("String.prototype.match()")}} から使用されます。
- {{jsxref("Symbol.matchAll")}}
  - : 文字列に対して正規表現が一致したものを返すイテレーターを返すメソッドです。{{jsxref("String.prototype.matchAll()")}} から使用されます。
- {{jsxref("Symbol.replace")}}
  - : 文字列の中で一致する部分文字列を置換するメソッドです。{{jsxref("String.prototype.replace()")}} から使用されます。
- {{jsxref("Symbol.search")}}
  - : 文字列の中で正規表現に一致する部分のインデックスを返すメソッドです。{{jsxref("String.prototype.search()")}} から使用されます。
- {{jsxref("Symbol.species")}}
  - : 派生オブジェクトを作成するために使用されるコンストラクター関数です。
- {{jsxref("Symbol.split")}}
  - : 正規表現に一致するインデックスで文字列を分割するメソッドです。{{jsxref("String.prototype.split()")}} から使用されます。
- {{jsxref("Symbol.toPrimitive")}}
  - : オブジェクトをプリミティブ値に変換するメソッドです。
- {{jsxref("Symbol.toStringTag")}}
  - : オブジェクトの既定の説明に使用される文字列値です。{{jsxref("Object.prototype.toString()")}} から使用されます。
- {{jsxref("Symbol.unscopables")}}
  - : 自身のプロパティ名および継承されたプロパティ名が、[`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) 環境の関連するオブジェクトのバインディングから除外されるオブジェクト値です。

## 静的メソッド

- {{jsxref("Symbol.for()")}}
  - : グローバルシンボルレジストリーから、与えられた `key` で既存の登録済みシンボルを検索し、見つかればそれを返します。見つからない場合は、新しいシンボルが作成され、`key` で登録されます。
- {{jsxref("Symbol.keyFor()")}}
  - : 指定されたシンボルに対して、グローバルシンボルレジストリーから共有シンボルキーを取得します。

## インスタンスプロパティ

これらのプロパティは `Symbol.prototype` で定義されており、すべての `Symbol` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Symbol.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数。`Symbol` インスタンスについては、初期値は {{jsxref("Symbol/Symbol", "Symbol")}} コンストラクターです。
- {{jsxref("Symbol.prototype.description")}}
  - : 読み取り専用の文字列で、シンボルの説明が入ります。
- `Symbol.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Symbol"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。ただし、`Symbol` にも独自の [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString) メソッドがあるため、シンボルを `thisArg` として [`Object.prototype.toString.call()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call) を呼び出さない限り、このプロパティは使用されません。

## インスタンスメソッド

- {{jsxref("Symbol.prototype.toString()")}}
  - : 文字列で、シンボルの説明を返します。{{jsxref("Object.prototype.toString()")}} メソッドをオーバーライドします。
- {{jsxref("Symbol.prototype.valueOf()")}}
  - : このシンボルを返します。{{jsxref("Object.prototype.valueOf()")}} ンメソッドをオーバーライドします。
- [`Symbol.prototype[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)
  - : シンボルを返します。

## 例

### シンボルに対する typeof 演算子の使用

{{jsxref("Operators/typeof", "typeof")}} 演算子は、シンボルを識別するのに役立ちます。

```js
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
```

### シンボルの型変換

シンボルの型変換を行う際に注意すべき点がいくつかあります。

- シンボルを数値に変換しようとすると、{{jsxref("TypeError")}} が発生します。
  （例: `+sym` や `sym | 0`）
- 緩い等価性を使用した場合、`Object(sym) == sym` は `true` を返します。
- `Symbol("foo") + "bar"` では {{jsxref("TypeError")}} が発生します（シンボルは文字列に変換できません）。 これにより、例えば、シンボルから新しい文字列プロパティ名が暗黙に作成されることを防ぐことができます。
- [「より安全な」 `String(sym)` 変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#string_conversion)は、シンボルに対して {{jsxref("Symbol.prototype.toString()")}} を呼び出すのと同様に動作しますが、`new String(sym)` は例外が発生するので注意してください。

### シンボルと for...in ループ

シンボルは [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループでは列挙されません。 また、{{jsxref("Object.getOwnPropertyNames()")}} はシンボルのオブジェクトプロパティを返しませんが、{{jsxref("Object.getOwnPropertySymbols()")}} を使用して取得することは可能です。

```js
const obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (const i in obj) {
  console.log(i);
}
// "c" "d"
```

### シンボルと JSON.stringify()

シンボルをキーとするプロパティは、`JSON.stringify()` を使用する際に完全に無視されます。

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

詳しくは {{jsxref("JSON.stringify()")}} を参照してください。

### Symbol ラッパーオブジェクトをプロパティのキーとして使用

Symbol ラッパーオブジェクトがプロパティキーとして使用された場合、このオブジェクトはラップされたシンボルに強制的に変換されます。

```js
const sym = Symbol("foo");
const obj = { [sym]: 1 };
obj[sym]; // 1
obj[Object(sym)]; // still 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Operators/typeof", "typeof")}}
- [JavaScript データ型とデータ構造](/ja/docs/Web/JavaScript/Guide/Data_structures)
- [ES6 In Depth: Symbols](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/) (hacks.mozilla.org, 2015)

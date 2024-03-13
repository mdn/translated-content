---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{JSRef}}

**`BigInt`** は、[大きすぎて](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) `number` {{Glossary("Primitive", "プリミティブ")}}で表すことができない数を表現します。

## 解説

**BigInt 値**は、単に **BigInt** と呼ばれることもありますが、`bigint` {{Glossary("Primitive", "プリミティブ")}}です。整数リテラルの末尾に `n` を追加するか、{{jsxref("Global_Objects/BigInt/BigInt", "BigInt()")}} コンストラクターを呼び出し、整数値または文字列値を与えることで生成することができます（ただし `new` 演算子なしで）。

```js
const previouslyMaxSafeInteger = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n

const hugeString = BigInt("9007199254740991");
// 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");
// 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// 9007199254740991n
```

BigInt はいくつかの点で Number と似ていますが、重要ないくつかの点が異なります。組み込みの [`Math`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math) オブジェクト内のメソッドでは利用できず、演算で Number の値と混ぜることができません。同じ型に統一する必要があります。ただし、BigInt を Number へ変換する際には精度が落ちることがあるので、相互に変換する場合には注意が必要です。

### 型情報

`typeof` の BigInt 値 (`bigint` プリミティブ) に対する評価値は、`"bigint"` となります。

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

BigInt 値は `Object` でラップすることができます。

```js
typeof Object(1n) === "object"; // true
```

### 演算子

以下の演算子は BigInt 値またはオブジェクトでラップした BigInt 値で使用することができます。

```plain
+ * - % **
```

[ビット操作演算子](/ja/docs/Web/JavaScript/Reference/Operators)も同様に利用できますが、`>>>`（論理的右シフト）は BigInt が常に符号付きなので除外されます。

同様に、[asm.js を壊さないようにするため](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs)単項演算子（`+`）にも対応していません。

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
// 9007199254740991n

const maxPlusOne = previousMaxSafe + 1n;
// 9007199254740992n

const theFuture = previousMaxSafe + 2n;
// 9007199254740993n, this works now!

const multi = previousMaxSafe * 2n;
// 18014398509481982n

const subtr = multi - 10n;
// 18014398509481972n

const mod = multi % 10n;
// 2n

const bigN = 2n ** 54n;
// 18014398509481984n

bigN * -1n;
// -18014398509481984n
```

`/` 演算子もすべての数値に対して、期待される通りに動作します。ただし、小数の結果をもつ演算では BigInt 値と演算する際に小数が切り捨てられます。小数点以下の桁数は返されません。

```js
const expected = 4n / 2n;
// 2n

const truncated = 5n / 2n;
// 2n, not 2.5n
```

### 比較演算

BigInt 値は Number 値と厳密等価ではありませんが、*等価*にはなります。

```js
0n === 0; // false
0n == 0; // true
```

Number 値と BigInt 値は通常通り比較できます。

```js
1n < 2; // true
2n > 1; // true
2 > 2; // false
2n > 2; // false
2n >= 2; // true
```

BigInt 値と Number 値は配列内に混在させて並べ替えることができます。

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort(); // 既定の並べ替えの動作
// [ -12n, 0, 0n, 10, 4n, 4, 6 ]

mixed.sort((a, b) => a - b);
// 型が混在した減算はできないので動作しない
// TypeError: can't convert BigInt value to Number value

// 適切な数値比較関数を使用した並べ替え
mixed.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
// [ -12n, 0, 0n, 4n, 4, 6, 10 ]
```

なお、`Object` にラップされた BigInt は他のオブジェクトと同様の振る舞いをします。同じインスタンス同士が比較された場合にのみ等価となります。

```js
0n === Object(0n); // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

Number 値と BigInt 値の型変換は精度が落ちる可能性があるため、次のことを推奨します。

- BigInt 値は、値が 2<sup>53</sup> を超えることが合理的に予想される場合にのみ使用する。
- BigInt 値と Number 値の間で型変換を行わない。

### 条件式

BigInt 値は次のような場合は Number 値のように動作します。

- [`Boolean`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean) へ変換される場合（[`Boolean`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 関数を使用して）
- [論理演算子](/ja/docs/Web/JavaScript/Reference/Operators)の `||`、`&&`、`!` と一緒に使用された場合
- または [`if`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) 文のような条件式の中で使用された場合

つまり、`0n` のみが[偽値](/ja/docs/Glossary/Falsy)で、他のすべては[真値](/ja/docs/Glossary/Truthy)となります。

```js
if (0n) {
  console.log("Hello from the if!");
} else {
  console.log("Hello from the else!");
}
// "Hello from the else!"

0n || 12n; // 12n
0n && 12n; // 0n
Boolean(0n); // false
Boolean(12n); // true
!12n; // false
!0n; // true
```

### 暗号処理

BigInt で対応している演算は、実行時間が一定ではないので、[タイミング攻撃](https://en.wikipedia.org/wiki/Timing_attack)を受ける可能性があります。したがって、緩和要因がなければ JavaScript の BigInt を暗号処理で使うのは危険な可能性があります。非常に一般的な例として、攻撃者は `101n ** 65537n` と `17n ** 9999n` の時間差を計測し、経過時間にもとづいて秘密鍵のような秘匿情報の大きさを推定することができます。もしそれでも BigInt を使用しなければならない場合は、この問題に関する一般的なアドバイスが掲載されている[タイミング攻撃のFAQ](https://timing.attacks.cr.yp.to/programming.html)をご覧ください。

### JSON での使用

[`JSON.stringify()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を BigInt 値に対して使用すると `TypeError` が発生します。 BigInt 値は既定で JSON のシリアライズに対応していないためです。ただし、`JSON.stringify()` は特別に BigInt 値に対する裏口を残しており、 BigInt の `toJSON()` メソッドを呼び出そうとします（他のプリミティブ値に対してはそうしません）。したがって、自身で `toJSON()` メソッドを実装することができます（組み込みにオブジェクトにパッチを当てることが明確に抑止されていない数少ない例の一つ）。

```js
BigInt.prototype.toJSON = function () {
  return this.toString();
};
```

エラーを発生させるかわりに、`JSON.stringify()` は次のような文字列を生成します。

```js
console.log(JSON.stringify({ a: 1n }));
// {"a":"1"}
```

もし `BigInt.prototype` にパッチを当てたくない場合は、 BigInt 値のシリアライズに `JSON.stringify()` の [`replacer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#replacer_引数) 引数を使うことができます。

```js
const replacer = (key, value) =>
  typeof value === "bigint" ? value.toString() : value;

const data = {
  number: 1,
  big: 18014398509481982n,
};
const stringified = JSON.stringify(data, replacer);

console.log(stringified);
// {"number":1,"big":"18014398509481982"}
```

長整数になることがわかっている値を含む JSON データがある場合は、`JSON.parse` の [`reviver`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#reviver_引数の使用) 引数を使って対処することができます。

```js
const reviver = (key, value) => (key === "big" ? BigInt(value) : value);

const payload = '{"number":1,"big":"18014398509481982"}';
const parsed = JSON.parse(payload, reviver);

console.log(parsed);
// { number: 1, big: 18014398509481982n }
```

> **メモ:** `JSON.stringify()` の replacer を汎用的にし、すべてのオブジェクトに対して BigInt 値を適切にシリアライズをすることが可能であるのに対し、`JSON.parse()` の reviver は期待するペイロードの形に特化していなければなりません。というのも、シリアライズは*非可逆的*だからです。つまり BigInt を表現する文字列と通常の文字列を区別することはできません。

### BigInt の変換

BigInt を期待する多くの組み込み演算は、まず引数を BigInt に変換します。[演算](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint)は以下のように要約できます。

- BigInt はそのまま返される。
- [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) と [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) は {{jsxref("TypeError")}} を発生させる。
- `true` は `1n` になり、 `false` は `0n` になる。
- 文字列は整数リテラルを含むかのように解析され、変換される。解析に失敗すると {{jsxref("SyntaxError")}} が発生する。
- [数値](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)は {{jsxref("TypeError")}} を発生させ、精度の低下を引き起こす意図しない暗黙の変換を防ぐ。
- [シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)は {{jsxref("TypeError")}} を発生させる。
- オブジェクトはまず、[`[@@toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) （`"number"` をヒントに指定）、`valueOf()`、`toString()` の順にメソッドを呼び出して[プリミティブ変換](/ja/docs/Web/JavaScript/Data_structures#プリミティブ変換)される。その結果のプリミティブは BigInt に変換される。

JavaScript でほぼ同じ効果を得る最良の方法は、[`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 関数を使うことです。`BigInt(x)` は同じアルゴリズムを使って `x` を変換しますが、[数値](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)が {{jsxref("TypeError")}} を発生させず、整数であれば BigInt に変換される点が異なります。

BigInt を期待する組み込み演算は、変換後に BigInt を固定幅に切り詰めることが多いことに注意してください。これは {{jsxref("BigInt.asIntN()")}} と {{jsxref("BigInt.asUintN()")}} 、および {{jsxref("BigInt64Array")}} と {{jsxref("BigUint64Array")}} のメソッドも含みます。

## コンストラクター

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : 新しい BigInt 値を生成します。

## 静的メソッド

- {{jsxref("BigInt.asIntN()")}}
  - : BigInt 値を符号付き整数値に丸め、その値を返します。
- {{jsxref("BigInt.asUintN()")}}
  - : BigInt 値を符号なし整数値に丸め、その値を返します。

## インスタンスプロパティ

以下のプロパティは `BigInt.prototype` で定義されており、すべての `BigInt` インスタンスで共有されます。

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。`BigInt` インスタンスの場合、初期値は {{jsxref("BigInt/BigInt", "BigInt")}} コンストラクターです。
- `BigInt.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"BigInt"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使われます。ただし、 `BigInt` も独自の [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) メソッドをもつので、`thisArg` として BigInt を指定して [`Object.prototype.toString.call()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call) を呼び出さないかぎりこのプロパティは使われません。

## インスタンスメソッド

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : この BigInt 値の言語に合わせた表現の文字列を返します。[`Object.prototype.toLocaleString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) メソッドを上書きします。
- {{jsxref("BigInt.prototype.toString()")}}
  - : この BigInt 値を指定された基数で表現した文字列を返します。[`Object.prototype.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) メソッドを上書きします。
- {{jsxref("BigInt.prototype.valueOf()")}}
  - : この BigInt 値を返します。[`Object.prototype.valueOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) メソッドを上書きします。

## 例

### 素数の計算

```js
// 渡された BigInt が素数であった場合は true を返します
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

// 引数として BigInt 値を取り、 nth 番目の素数を BigInt 値として返します。
function nthPrime(nth) {
  let maybePrime = 2n;
  let prime = 0n;

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth--;
      prime = maybePrime;
    }
    maybePrime++;
  }

  return prime;
}

nthPrime(20n);
// 73n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Number`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Number.MAX_SAFE_INTEGER`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

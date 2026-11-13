---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`BigInt`** は、[大きすぎて](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)または[小さすぎて](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER)数値 (`number`) {{Glossary("Primitive", "プリミティブ")}}で表すことができない数を表現します。

## 解説

**BigInt 値**は、単に **BigInt** と呼ばれることもありますが、長整数 (`bigint`) {{Glossary("Primitive", "プリミティブ")}}です。整数リテラルの末尾に `n` を追加するか、{{jsxref("BigInt/BigInt", "BigInt()")}} コンストラクターを呼び出し、整数値または文字列値を与えることで生成することができます（ただし `new` 演算子なしで）。

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

長整数はいくつかの点で数値と似ていますが、重要ないくつかの点が異なります。組み込みの [`Math`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math) オブジェクト内のメソッドでは利用できず、演算で数値と混ぜることができません。同じ型に統一する必要があります。ただし、長整数を数値へ変換する際には精度が落ちることがあるので、相互に変換する場合には注意が必要です。

### 型情報

`typeof` の長整数値 (`bigint` プリミティブ) に対する評価値は、`"bigint"` となります。

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

長整数値は `Object` でラップすることができます。

```js
typeof Object(1n) === "object"; // true
```

### 演算子

以下の演算子は長整数値またはオブジェクトでラップした BigInt 値で使用することができます。

- [算術演算子](/ja/docs/Web/JavaScript/Reference/Operators#arithmetic_operators): `+`, `-`, `*`, `/`, `%`, `**`
- [ビット操作演算子](/ja/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators): `>>`, `<<`, `&`, `|`, `^`, `~`
- [単項マイナス (`-`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [インクリメント/デクリメント](/ja/docs/Web/JavaScript/Reference/Operators#increment_and_decrement): `++`, `--`

論理値を返す演算子は、数値と長整数をオペランドとして混合できます。

- [比較演算子](/ja/docs/Web/JavaScript/Reference/Operators#relational_operators)および[等価演算子](/ja/docs/Web/JavaScript/Reference/Operators#equality_operators): `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- [論理演算子](/ja/docs/Web/JavaScript/Reference/Operators#binary_logical_operators)はオペランドの[真値](/ja/docs/Glossary/Truthy)であるかどうかのみを処理します。

長整数では全く対応していない演算子が 2 つあります。

- [単項プラス (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus) は、asm.js での使用法と競合するためサポートできず、[asm.js を壊さないため](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs)に除外されています。
- [符号なし右シフト (`>>>`)](/ja/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)は、ビット演算子で対応していない唯一のものです。すべての長整数が符号つきだからです。

特殊な場合もあります。

- 文字列と長整数の加算 (`+`) は、文字列を返します。
- 除算 (`/`) は小数部分を0方向に切り捨てます。長整数は小数部分を表現できないためです。

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
const maxPlusOne = previousMaxSafe + 1n; // 9007199254740992n
const theFuture = previousMaxSafe + 2n; // 9007199254740993n、これが動作するようになりました。
const prod = previousMaxSafe * 2n; // 18014398509481982n
const diff = prod - 10n; // 18014398509481972n
const mod = prod % 10n; // 2n
const bigN = 2n ** 54n; // 18014398509481984n
bigN * -1n; // -18014398509481984n
const expected = 4n / 2n; // 2n
const truncated = 5n / 2n; // 2n であり、 2.5n ではない
```

### 比較演算

長整数値は数値と厳密等価ではありませんが、等価にはなります。

```js
0n === 0; // false
0n == 0; // true
```

数値と長整数値は通常通り比較できます。

```js
1n < 2; // true
2n > 1; // true
2 > 2; // false
2n > 2; // false
2n >= 2; // true
```

長整数値と数値は配列内に混在させて並べ替えることができます。

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

なお、`Object` にラップされた長整数は他のオブジェクトと同様の振る舞いをします。同じインスタンス同士が比較された場合にのみ等価となります。

```js
Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

数値と長整数の型変換は精度が落ちる可能性があるため、次のことを推奨します。

- 長整数は、値が 2<sup>53</sup> を超えることが合理的に予想される場合にのみ使用する。
- 長整数と数値の間で型変換を行わない。

### 条件式

長整数は次のような場合は数値のように動作します。

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

長整数で対応している演算は、実行時間が一定ではないので、[タイミング攻撃](https://en.wikipedia.org/wiki/Timing_attack)を受ける可能性があります。したがって、緩和要因がなければ JavaScript の長整数を暗号処理で使うのは危険な可能性があります。非常に一般的な例として、攻撃者は `101n ** 65537n` と `17n ** 9999n` の時間差を計測し、経過時間にもとづいて秘密鍵のような秘匿情報の大きさを推定することができます。もしそれでも長整数を使用しなければならない場合は、この問題に関する一般的なアドバイスが掲載されている[タイミング攻撃のFAQ](https://timing.attacks.cr.yp.to/programming.html)をご覧ください。

### JSON での使用

[`JSON.stringify()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を長整数に対して使用すると `TypeError` が発生します。長整数は既定で JSON のシリアライズに対応していないためです。ただし、`JSON.stringify()` は特別に長整数に対する裏口を残しており、長整数の `toJSON()` メソッドを呼び出そうとします（他のプリミティブ値に対してはそうしません）。したがって、自身で `toJSON()` メソッドを実装することができます（組み込みにオブジェクトにパッチを当てることが明確に抑止されていない数少ない例の一つ）。

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

エラーを発生させるかわりに、`JSON.stringify()` は次のような文字列を生成します。

```js
console.log(JSON.stringify({ a: 1n }));
// {"a":{"$bigint":"1"}}
```

もし `BigInt.prototype` にパッチを当てたくない場合は、長整数のシリアライズに `JSON.stringify()` の [`replacer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#replacer_引数) 引数を使うことができます。

```js
const replacer = (key, value) =>
  typeof value === "bigint" ? { $bigint: value.toString() } : value;

const data = {
  number: 1,
  big: 18014398509481982n,
};
const stringified = JSON.stringify(data, replacer);

console.log(stringified);
// {"number":1,"big":{"$bigint":"18014398509481982"}}
```

長整数になることがわかっている値を含む JSON データがある場合は、`JSON.parse` の [`reviver`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#reviver_引数の使用) 引数を使って対処することができます。

```js
const reviver = (key, value) =>
  value !== null &&
  typeof value === "object" &&
  "$bigint" in value &&
  typeof value.$bigint === "string"
    ? BigInt(value.$bigint)
    : value;

const payload = '{"number":1,"big":{"$bigint":"18014398509481982"}}';
const parsed = JSON.parse(payload, reviver);

console.log(parsed);
// { number: 1, big: 18014398509481982n }
```

> [!NOTE]
> `JSON.stringify()` の replacer を汎用的にし、すべてのオブジェクトに対して長整数を適切にシリアライズをすることが可能であるのに対し、`JSON.parse()` の reviver は期待するデータ本体の形に特化していなければなりません。というのも、シリアライズは*非可逆的*だからです。つまり長整数を表現する文字列と通常の文字列を区別することはできません。
>
> さらに、上記の例では置換と復元時にオブジェクト全体を生成するため、多数の長整数を含む大規模なオブジェクトではパフォーマンスやストレージに影響する可能性があります。データ本体の形が分かっている場合は、代わりに文字列としてシリアライズし、プロパティキー名に基づいて復元した方が良い場合があります。

実際、JSON では任意の長さの数値リテラルが許可されています。ただし、JavaScript では完全な精度で解析できないだけです。より長い整数（64 ビット整数など）に対応している言語で動作する別のプログラムと通信する場合、長整数を JSON 文字列ではなく JSON 数値として送信したい場合は、[損失のない数値のシリアライズ](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON#損失のない数値のシリアライズ)を参照してください。

### 長整数の変換

長整数を期待する多くの組み込み演算は、まず引数を長整数に変換します。[演算](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint)は以下のように要約できます。

- 長整数はそのまま返される。
- [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) と [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) は {{jsxref("TypeError")}} が発生する。
- `true` は `1n` になり、 `false` は `0n` になる。
- 文字列は整数リテラルを含むかのように解析され、変換される。解析に失敗すると {{jsxref("SyntaxError")}} が発生する。この構文は[文字列の数値リテラル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値変換)のサブセットであり、小数点や指数記号は許可されません。
- [数値](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)は {{jsxref("TypeError")}} を発生させ、精度の低下を引き起こす意図しない暗黙の変換を防ぐ。
- [シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)は {{jsxref("TypeError")}} を発生させる。
- オブジェクトはまず、[`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) （`"number"` をヒントに指定）、`valueOf()`、`toString()` の順にメソッドを呼び出して[プリミティブ変換](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)される。その結果のプリミティブは長整数に変換される。

JavaScript でほぼ同じ効果を得る最良の方法は、[`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 関数を使うことです。`BigInt(x)` は同じアルゴリズムを使って `x` を変換しますが、[数値](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)が {{jsxref("TypeError")}} を発生させず、整数であれば長整数に変換される点が異なります。

長整数を期待する組み込み演算は、変換後に長整数を固定幅に切り詰めることが多いことに注意してください。これは {{jsxref("BigInt.asIntN()")}} と {{jsxref("BigInt.asUintN()")}} 、および {{jsxref("BigInt64Array")}} と {{jsxref("BigUint64Array")}} のメソッドも含みます。

## コンストラクター

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : 長整数型のプリミティブ値を返します。`new` で呼び出された場合、エラーが発生します。

## 静的メソッド

- {{jsxref("BigInt.asIntN()")}}
  - : 長整数値を符号付き整数値に丸め、その値を返します。
- {{jsxref("BigInt.asUintN()")}}
  - : 長整数値を符号なし整数値に丸め、その値を返します。

## インスタンスプロパティ

以下のプロパティは `BigInt.prototype` で定義されており、すべての `BigInt` インスタンスで共有されます。

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。`BigInt` インスタンスの場合、初期値は {{jsxref("BigInt/BigInt", "BigInt")}} コンストラクターです。
- `BigInt.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"BigInt"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使われます。ただし、 `BigInt` も独自の [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) メソッドをもつので、`thisArg` として長整数を指定して [`Object.prototype.toString.call()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call) を呼び出さないかぎりこのプロパティは使われません。

## インスタンスメソッド

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : この長整数値の言語に合わせた表現の文字列を返します。[`Object.prototype.toLocaleString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) メソッドを上書きします。
- {{jsxref("BigInt.prototype.toString()")}}
  - : この長整数値を指定された基数で表現した文字列を返します。[`Object.prototype.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) メソッドを上書きします。
- {{jsxref("BigInt.prototype.valueOf()")}}
  - : この長整数値を返します。[`Object.prototype.valueOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) メソッドを上書きします。

## 例

### 素数の計算

```js
function isPrime(n) {
  if (n < 2n) {
    return false;
  }
  if (n % 2n === 0n) {
    return n === 2n;
  }
  for (let factor = 3n; factor * factor <= n; factor += 2n) {
    if (n % factor === 0n) {
      return false;
    }
  }
  return true;
}

// 引数として長整数を取り、 nth 番目の素数を長整数として返します。
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

> [!NOTE]
> この`isPrime()`の実装はあくまでデモンストレーション用です。実際のアプリケーションでは、繰り返し計算を避けるため、[エラトステネスの篩](https://ja.wikipedia.org/wiki/エラトステネスの篩)のような高度なメモリーアルゴリズムを適用すべきです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Number`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Number.MAX_SAFE_INTEGER`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

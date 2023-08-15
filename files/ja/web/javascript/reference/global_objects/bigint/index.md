---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
---

{{JSRef}}

**`BigInt`** は[プリミティブラッパーオブジェクト](/ja/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript)で、{{Glossary("Primitive", "プリミティブ")}}の `bigint` 値、すなわち[大きすぎて](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) `number` {{Glossary("Primitive", "プリミティブ")}}で表すことができない数を、表現したり操作したりするために使用します。

## 解説

**BigInt 値**は、単に **BigInt** と呼ばれることもありますが、 `bigint` {{Glossary("Primitive", "プリミティブ")}}です。整数リテラルの末尾に `n` を追加するか、 {{jsxref("Global_Objects/BigInt/BigInt", "BigInt()")}} コンストラクターを呼び出し、整数値または文字列値を与えることで生成することができます (ただし `new` 演算子なしで)。

```js
const previouslyMaxSafeInteger = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");
// ↪ 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// ↪ 9007199254740991n
```

BigInt はいくつかの点で Number と似ていますが、重要ないくつかの点が異なります。組み込みの [`Math`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math) オブジェクト内のメソッドでは利用できず、演算で Number の値と混ぜることができません。同じ型に統一する必要があります。ただし、BigInt を Number へ変換する際には精度が落ちることがあるので、相互に変化する場合には注意が必要です。

### 型情報

`typeof` の `BigInt` 値 (`bigint` プリミティブ) に対する評価値は、"`bigint`" となります。

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

BigInt の値は `Object` でラップすることができます。

```js
typeof Object(1n) === "object"; // true
```

### 演算子

以下の演算子は BigInt 値またはオブジェクトでラップした BigInt 値で使用することができます。

```
+ * - % **
```

[ビット操作演算子](/ja/docs/Web/JavaScript/Reference/Operators)は、同様に利用できますが、 `>>>` (論理的右シフト) は BigInt が常に符号付きなので除外されます。

同様に、単項演算子 (`+`) は [asm.js を壊さないように](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs)対応していません。

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
// ↪ 9007199254740991n

const maxPlusOne = previousMaxSafe + 1n;
// ↪ 9007199254740992n

const theFuture = previousMaxSafe + 2n;
// ↪ 9007199254740993n, this works now!

const multi = previousMaxSafe * 2n;
// ↪ 18014398509481982n

const subtr = multi - 10n;
// ↪ 18014398509481972n

const mod = multi % 10n;
// ↪ 2n

const bigN = 2n ** 54n;
// ↪ 18014398509481984n

bigN * -1n;
// ↪ -18014398509481984n
```

`/` 演算子もすべての数値に対して、期待される通りに動作します。ただし、実数との演算では BigInt 値と演算する際に小数が切り捨てられます。実数を返すことはありません。

```js
const expected = 4n / 2n;
// ↪ 2n

const truncated = 5n / 2n;
// ↪ 2n, not 2.5n
```

### 比較演算

BigInt 値は Number 値と厳密等価ではありませんが、等価にはなります。

```js
0n === 0;
// ↪ false

0n == 0;
// ↪ true
```

Number と BigInt は通常通り比較できます。

```js
1n < 2;
// ↪ true

2n > 1;
// ↪ true

2 > 2;
// ↪ false

2n > 2;
// ↪ false

2n >= 2;
// ↪ true
```

BigInt 値と Number 値は配列の要素に混在させたり並べ替えたりすることも可能です。

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort(); // 既定の並べ替えの動作
// ↪  [ -12n, 0, 0n, 10, 4n, 4, 6 ]

mixed.sort((a, b) => a - b);
// 型が混在した減算はできないので動作しない
// TypeError: can't convert BigInt value to Number value

// 適切な数値比較関数を使用した並べ替え
mixed.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
// ↪  [ -12n, 0, 0n, 4n, 4, 6, 10 ]
```

なお、 `Object` にラップされた BigInt は他のオブジェクトと同様の振る舞いをします。同じインスタンス同士が比較された場合にのみ等価となります。

```js
0n === Object(0n); // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

### 条件式

BigInt 値は次のような場合は Number 値のように動作します。

- [`Boolean`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean) へ変換される場合 ( [`Boolean`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 関数を使用して)
- [論理演算子](/ja/docs/Web/JavaScript/Reference/Operators)の `||`、`&&`、`!`、または [`if`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) 文のような条件式の中で使用された場合

```js
if (0n) {
  console.log("Hello from the if!");
} else {
  console.log("Hello from the else!");
}

// ↪ "Hello from the else!"

0n || 12n;
// ↪ 12n

0n && 12n;
// ↪ 0n

Boolean(0n);
// ↪ false

Boolean(12n);
// ↪ true

!12n;
// ↪ false

!0n;
// ↪ true
```

## コンストラクター

- [`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
  - : 新しい BigInt 値を生成します。

<h2 id="Methods" name="Methods">静的メソッド</h2>

- [`BigInt.asIntN()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asIntN)
  - : BigInt 値を符号付き整数値に丸め、その値を返します。
- [`BigInt.asUintN()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asUintN)
  - : BigInt 値を符号なし整数値に丸め、その値を返します。

## インスタンスメソッド

- [`BigInt.prototype.toLocaleString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString)
  - : この BigInt 値の言語に合わせた表現の文字列を返します。 [`Object.prototype.toLocaleString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) メソッドを上書きします。
- [`BigInt.prototype.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString)
  - : この BigInt 値を指定された基数で表現した文字列を返します。 [`Object.prototype.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) メソッドを上書きします。
- [`BigInt.prototype.valueOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/valueOf)
  - : この BigInt 値を返します。 [`Object.prototype.valueOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) メソッドを上書きします。

## 使用方法の推奨事項

## 型変換

Number 値と BigInt 値との間の型変換は精度が落ちる可能性があるため、次のことを推奨します。

- BigInt 値は、値が 2^53 を超えることが合理的に予想される場合にのみ使用する。
- BigInt 値と Number 値の間で型変換を行わない。

### 暗号処理

BigInt で対応している演算は、実行時間が一定ではないので、[タイミング攻撃](https://en.wikipedia.org/wiki/Timing_attack)を受ける可能性があります。したがって、 JavaScript の BigInt は暗号処理での使用には向きません。

### JSON での使用

[`JSON.stringify()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を BigInt 値に対して使用すると `TypeError` が発生します。 BigInt 値は既定で JSON のシリアライズに対応していないためです。ただし、 [replacer](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter) 引数を `JSON.stringify` で使用すると、 BigInt のプロパティをエラーなしでシリアライズすることができます。

```js
function replacer(key, value) {
  if (key === "big") {
    return value.toString();
  }
  return value;
}

const data = {
  number: 1,
  big: BigInt("18014398509481982"),
};
const stringified = JSON.stringify(data, replacer);

console.log(stringified);
// ↪ '{"number":1,"big":"18014398509481982"}'
```

長整数になる値が含まれると思われる JSON データがある場合は、 [reviver](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) 引数を `JSON.parse` で使用することで取り扱うことができます。

```js
function reviver(key, value) {
  if (key === "big") {
    return BigInt(value);
  }
  return value;
}

const payload = '{"number":1,"big":"18014398509481982"}';
const parsed = JSON.parse(payload, reviver);

console.log(parsed);
// ↪ {number: 1, big: 18014398509481982n}
```

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
// ↪ 73n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Number`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Number.MAX_SAFE_INTEGER`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

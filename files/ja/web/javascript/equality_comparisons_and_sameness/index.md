---
title: 等価性の比較と同一性
slug: Web/JavaScript/Equality_comparisons_and_sameness
l10n:
  sourceCommit: 7b35a48ac0a10b67f9bd5270b082d40deff9c953
---

{{jsSidebar("Intermediate")}}

JavaScript には、異なる値の比較演算が 3 つあります。

- [`===`](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality) — 厳密な等価性（三重等号）
- [`==`](/ja/docs/Web/JavaScript/Reference/Operators/Equality) — 緩い等価性（二重等号）
- [`Object.is()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

どの演算子を使用するかは、どのような比較を行いたいかに依存します。簡単に言えば、

- 二重等号 (`==`) は 2 つのものを比較する前に型変換を実行し、`NaN`, `-0`, `+0` を IEEE 754 に準拠して特別扱いします（よって `NaN != NaN`, `-0 == +0` になります）。
- 三重等号 (`===`) は二重等号と同じ比較を（`NaN`, `-0`, `+0` の特別扱いを含めて）しますが、型変換を行いません。もし型が異なれば、`false` が返されます。
- `Object.is()` は型変換を行わず、`NaN`, `-0`, `+0` の特別扱いもしません（これらの特殊な数値を除いて `===` と同じ動作をします）。

これらは、JavaScript における 4 つの等価性アルゴリズムのうち、3 つに対応します。

- [IsLooselyEqual](https://tc39.es/ecma262/#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/#sec-samevaluezero): 多くの組み込み操作で使用される

なお、これらの区別はプリミティブ値の扱いについてのことです。いずれの場合も引数が概念的に似た構造を持つかどうかを比較する訳ではありません。プリミティブ値ではない `x` および `y` オブジェクトが同一の構造を持っていてもオブジェクトが異なれば、上記のいずれの形でも `false` と評価されます。

## === による厳密な等価性

厳密な等価性は、2 つの値が等しいか比較します。比較対象の値はどちらも、比較する前に別の値へ暗黙のうちに変換されることはありません。値が異なる型の場合、それらの値は等しくないとみなします。値が同じ型で数値ではない場合、同じ値であれば等しいとみなします。最後に、どちらの値も数値である場合、どちらも `NaN` ではなく同じ値である、あるいは一方が `+0` かつもう一方が `-0` であるときに等しいとみなします。

```js
const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
```

厳密な等価性は、たいていの使い方で正しい比較になります。数値以外のあらゆる値において、これは「値が自分自身と等しい」という明快な解釈を用います。数値においては、２つの極めて特殊なケースを扱えるようにわずかに異なる解釈を用います。１つ目は浮動小数点数の 0 には正と負の符号付きが存在することです。これは、ある種の数学的な解を表すために役立ちますが、ほとんどの場合は `+0` と `-0` の違いを意識せず、厳密な等価性ではこれらを同じ値として扱います。２つ目は浮動小数点数には非数 `NaN` の概念があることです、これは例えば正の無限大に負の無限大を加算するといった一定の数学的に明確ではない問題達の解を表します。厳密な等価性では `NaN` を他のどの値 (自分自身も含む) とも等しくないものとして扱います。（`(x !== x)` が `true` になる唯一の場合は `x` が `NaN` である場合です。）

また、`===` 以外にも厳密な等価性は配列のインデックスを探すメソッドで使用されます。[`Array.prototype.indexOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)、[`Array.prototype.lastIndexOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)、[`TypedArray.prototype.indexOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf)、[`TypedArray.prototype.lastIndexOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf)、[`case`](/ja/docs/Web/JavaScript/Reference/Statements/switch) での比較です。つまり、`indexOf(NaN)` を使用して配列の `NaN` 値のインデックスを探したり、`NaN` を `switch` 文の `case` 値として使用して何かと一致させることはできません。

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // 何も出力されない
}
```

## == による緩い等価性

緩い等価性は対称的です。（変換の順序を除いて） `A` と `B` の値が何であっても、`A == B` は常に `B == A` と同じ意味づけになります。`==` を使用して緩い等価性を実行する場合の動作は以下の通りです。

1. オペランドが同じ型である場合、以下のように比較されます。
   - オブジェクト: 両方のオペランドが同じオブジェクトを参照している場合に限り `true` を返します。
   - 文字列: 両方のオペランドに同じ文字が同じ順番で入っている場合のみ `true` を返します。
   - 数値: 両方のオペランドが同じ値である場合のみ `true` を返します。`+0` と `-0` は同じ値として扱われます。どちらかのオペランドが `NaN` である場合は `false` を返します。従って、`NaN` は `NaN` とは等しくなりません。
   - 論理値: 両方が `true` または両方が `false` の場合のみ `true` を返します。
   - 長整数: 両方のオペランドが同じ値である場合のみ `true` を返します。
   - シンボル: 両方のオペランドが同じシンボルを参照している場合のみ `true` を返します。
2. オペランドの一方が `null` または `undefined` である場合、もう一方も `null` または `undefined` であれば `true` を返します。それ以外の場合は `false` を返す。
3. オペランドの一方がオブジェクトで、もう一方がプリミティブである場合、[オブジェクトをプリミティブに変換します](/ja/docs/Web/JavaScript/Data_structures#プリミティブ変換)。
4. この段階で、両方のオペランドはプリミティブ（文字列、数値、論理値、シンボル、長整数のいずれか）に変換されます。残りの変換は、ケースバイケースで行われます。
   - 両方が同じ型であれば、手順 1 を使用して比較します。
   - 一方のオペランドがシンボルで、もう一方がそうでない場合は、`false` を返します。
   - 一方のオペランドが論理型で、もう一方がそうでない場合は、[論理値から数値への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)が行われます。`true` は 1 に変換され、`false` は 0 に変換されます。それから 2 つのオペランドを緩い等価性で比較します。
   - 数値から文字列へ: [文字列から数値へ変換します](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)。変換に失敗すると `NaN` となり、等価性が `false` となることが保証されています。
   - 数値から長整数へ: 数値で比較します。数値が ±Infinity または `NaN` であれば、`false` を返します。
   - 文字列から長整数へ: 文字列を [`BigInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) コンストラクターと同じアルゴリズムを使用して長整数へと変換します。変換に失敗した場合は、 `false` を返します。

伝統的に、そして ECMAScript によれば、すべてのプリミティブとオブジェクトは `undefined` および `null` と緩い不等価であるとされています。しかし、ほとんどのブラウザーは、あるコンテキストにおいて、非常に狭いクラスのオブジェクト（具体的には、あらゆるページの `document.all` オブジェクト）が、あたかも `undefined` という値を持つかのように振る舞うことを許可しています。緩い等価性はそのようなコンテキストの 1 つです。`null == A` と `undefined == A` は、A が `undefined` をエミュレートするオブジェクトである場合にのみ真と評価されます。他に、オブジェクトが `undefined` や `null` と緩やかな等価性を持つことはありません。

ほとんどの場合、緩い等価性を使用することは推奨されません。厳密な等価性を用いた比較の結果は予測しやすく、型変換がないため、よりすばやく評価できる可能性があります。

次の例は、数値プリミティブ `0`、長整数プリミティブ `0n`、文字列プリミティブ `'0'`、`toString()` の値が `'0'` であるオブジェクトを含む緩い等価性の比較を示しています。

```js
const num = 0;
const big = 0n;
const str = "0";
const obj = new String("0");

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true
```

緩い等価性は、 `==` 演算子でのみ使用されます。

## Object.is() を使用した同値等価性

同値等価性は、すべての状況で 2 つの値が*機能的に同一か*を判断します（この用法は[リスコフの置換原則](https://ja.wikipedia.org/wiki/%E3%83%AA%E3%82%B9%E3%82%B3%E3%83%95%E3%81%AE%E7%BD%AE%E6%8F%9B%E5%8E%9F%E5%89%87)の実践例と言えます）。例として、変更不可のプロパティを変化させようとした場合を見てみましょう。

```js
// Number コンストラクターに変更不可の NEGATIVE_ZERO プロパティを追加
Object.defineProperty(Number, "NEGATIVE_ZERO", {
  value: -0,
  writable: false,
  configurable: false,
  enumerable: false,
});

function attemptMutation(v) {
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

変更不可のプロパティを変更しようとしたとき、`Object.defineProperty` は例外を発生させますが、実際の変更が要求されなかった場合は何もしません。`v` が `-0` であれば、変更が要求されていないので、エラーは発生しません。内部的には、変更不可のプロパティが再定義された場合、新たに指定された値と現在の値が同値等価性によって比較されます。

同値等価性は {{jsxref("Object.is")}} メソッドによって提供されます。等価な同一性を持つ値が期待される場合、言語上のほとんどの場所で使用されます。

## 同値ゼロ等価性

同値等価性に似ていますが、+0 と -0 は等しいとみなします。

同値ゼロ等価性 (Same-value-zero equality) は JavaScript API として公開されていませんが、独自のコードで実装することができます。

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x と y は等しい（-0 と 0 の場合も含む)か、両方が NaN である
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

同値ゼロは `NaN` を等価に扱うという点で厳密な等価性と異なり、`-0` を `0` と等価に扱うことのみが同値等価性と異なります。これは特に `NaN` を扱う場合、検索時に最も賢明な動作をするようになります。[`Array.prototype.includes()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)、[`TypedArray.prototype.includes()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes)、またキーの等価性を比較するために [`Map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map) や [`Set`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set) のメソッドで使用されます。

## 等価性の方法の比較

二重等号と三重等号を比較するとき、一方は他方を「拡張した」ものである言われがちです。例えば、二重等号は三重等号と同じことをすべて行うだけでなくオペランドの型変換も行うことから、三重等号を拡張したものであると聞いたことがあるかもしれません。例えば、`6 == "6"` となります。あるいは二重等号が基本形であり、三重等号は 2 つのオペランドが同一の型であることを要求するという制約を加えていることから、三重等号が拡張形であると言われたかもしれません。

しかし、この考え方は、等価性の比較が一次元の「スペクトル」を形成し、「完全に厳密な」ものが一端にあり、「完全に緩い」ものが他にもあることを意味します。このモデルは{{jsxref("Object.is")}}では不十分で、二重等号よりも「緩い」、三重等号よりも「厳しい」ものではなく、その中間（つまり、二重等号よりも厳しく、三重等号よりも緩い）にも当てはまらないからです。同一性を比較した以下の表から、{{jsxref("Object.is")}} が {{jsxref("NaN")}} を扱う方法が原因であることがわかります。`Object.is(NaN, NaN)` が `false` に評価されるのであれば、`-0` と `+0` を区別することにより、三重等号より厳密であることから緩い/厳密のスペクトルに*含めることができる*ことに注目してください。しかし {{jsxref("NaN")}} の扱いは、これが正しくないことを表します。残念ながら、{{jsxref("Object.is")}} は等価演算子に関する緩さや厳密さではなく、単純に固有の特性の観点から考えなければなりません。

| x                   | y                   | `==`       | `===`      | `Object.is` | 同値ゼロ   |
| ------------------- | ------------------- | ---------- | ---------- | ----------- | ---------- |
| `undefined`         | `undefined`         | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`  |
| `null`              | `null`              | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`  |
| `true`              | `true`              | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`  |
| `false`             | `false`             | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`  |
| `'foo'`             | `'foo'`             | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`  |
| `0`                 | `0`                 | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`  |
| `+0`                | `-0`                | `✅ true`  | `✅ true`  | `❌ false`  | `✅ true`  |
| `+0`                | `0`                 | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`  |
| `-0`                | `0`                 | `✅ true`  | `✅ true`  | `❌ false`  | `✅ true`  |
| `0n`                | `-0n`               | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`  |
| `0`                 | `false`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false` |
| `""`                | `false`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false` |
| `""`                | `0`                 | `✅ true`  | `❌ false` | `❌ false`  | `❌ false` |
| `'0'`               | `0`                 | `✅ true`  | `❌ false` | `❌ false`  | `❌ false` |
| `'17'`              | `17`                | `✅ true`  | `❌ false` | `❌ false`  | `❌ false` |
| `[1, 2]`            | `'1,2'`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false` |
| `new String('foo')` | `'foo'`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false` |
| `null`              | `undefined`         | `✅ true`  | `❌ false` | `❌ false`  | `❌ false` |
| `null`              | `false`             | `❌ false` | `❌ false` | `❌ false`  | `❌ false` |
| `undefined`         | `false`             | `❌ false` | `❌ false` | `❌ false`  | `❌ false` |
| `{ foo: 'bar' }`    | `{ foo: 'bar' }`    | `❌ false` | `❌ false` | `❌ false`  | `❌ false` |
| `new String('foo')` | `new String('foo')` | `❌ false` | `❌ false` | `❌ false`  | `❌ false` |
| `0`                 | `null`              | `❌ false` | `❌ false` | `❌ false`  | `❌ false` |
| `0`                 | `NaN`               | `❌ false` | `❌ false` | `❌ false`  | `❌ false` |
| `'foo'`             | `NaN`               | `❌ false` | `❌ false` | `❌ false`  | `❌ false` |
| `NaN`               | `NaN`               | `❌ false` | `❌ false` | `✅ true`   | `✅ true`  |

### Object.is() と三重等号の使いどころ

一般的に、{{jsxref("Object.is")}} のゼロに対する特別な動作が関心の対象になりえると思われるのは、ある種のメタプログラミング方式に則る時、特にプロパティ記述子に関して {{jsxref("Object.defineProperty")}} の特徴の一部を再現したい時に限られます。このような要件が必要ないのであれば、{{jsxref("Object.is")}} ではなく [`===`](/ja/docs/Web/JavaScript/Reference/Operators) を使用してください。2 つの {{jsxref("NaN")}} 値を比較した結果が `true` になることが必要な場合であっても、通常は、{{jsxref("NaN")}} をチェックして特別扱いする方が (前バージョンの ECMAScript からは {{jsxref("isNaN")}} メソッドを使えます) 、比較処理中に現れた全てのゼロについてその符号が周囲の処理からどう影響されるのか悩むよりも簡単です。

すべてを網羅してはいませんが、`-0` と `+0` の区別が発生する可能性がある内蔵メソッドや演算子を以下に示します。コード中ではこれらを考慮して下さい:

- [`- (単項否定演算子)`](/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation)

  - : 以下例を考えてみてください。

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    `obj.velocity` が `0` である (あるいは計算結果が `0` になる) とき、そこで `-0` が生成されて `stoppingForce` に伝播します。

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : 引数に `-0` が存在しなくても、場合によってはこれらのメソッドの戻り値として `-0` が式に取り込まれる可能性があります。例えば、負の値の累乗で {{jsxref("Infinity", "-Infinity")}} が発生するように {{jsxref("Math.pow")}} を使用したとき、奇数の指数は `-0` に評価されます。それぞれのメソッドのドキュメントを確認してください。
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : 引数のひとつが `-0` である場合に、これらのメソッドから `-0` を戻り値として得る可能性があります。例えば、`Math.min(-0, +0)` は `-0` になります。それぞれのメソッドのドキュメントを確認してください。
- [`~`](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/ja/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/ja/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : これらの演算子は、内部で ToInt32 アルゴリズムを使用します。内部の 32 ビット整数型は 0 の表現が 1 種類しかないため、逆の演算を行った後に `-0` は戻らないでしょう。例えば `Object.is(~~(-0), -0)` や `Object.is(-0 << 2 >> 2, -0)` は、`false` になります。

ゼロの符号を考慮していない場合に、{{jsxref("Object.is")}} に頼ることは危険でしょう。もちろん `-0` と `+0` を区別する意図があれば、これはまさに望むことです。

### 注意: Object.is() と NaN

{{jsxref("Object.is")}} の仕様書では、すべての {{jsxref("NaN")}} のインスタンスを同じオブジェクトとして扱っています。しかし、[型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)が利用でき、インスタンスを区別することができるので、次の例のようにすべてのコンテキストで同じ動作をするとは限りません。

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// NaN のバイト表現を取得
const n = f2b(NaN);
// 最初のビットを変更する。これは符号ビットであり、NaN には関係ない
n[0] = 1;
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

## 関連情報

- [JS Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/)

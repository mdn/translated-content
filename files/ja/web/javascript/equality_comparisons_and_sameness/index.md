---
title: 等価性の比較と同一性
slug: Web/JavaScript/Equality_comparisons_and_sameness
---

{{jsSidebar("Intermediate")}}

ES2015 には、4 種類の等価性アルゴリズムがあります。

- 抽象的な等価性比較 (Abstract Equality Comparison) (`==`)
- 厳格な等価性比較 (Strict Equality Comparison) (`===`): `Array.prototype.indexOf`, `Array.prototype.lastIndexOf`, `case` の一致で使用
- ゼロの同値 (SameValueZero): `%TypedArray%` と `ArrayBuffer` コンストラクター、`Map` と `Set` の操作、ES2016 で追加された `String.prototype.includes` で使用されます
- 同値 (SameValue): 上記以外のすべての状況で使用されます

JavaScript には、3 種類の値比較演算子があります。

- [===](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity): 厳格な等価性比較 ("strict equality", "同一性 (identity)", "三重等号")
- [==](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality): 緩い等価性 ("loose equality", "二重等号")
- {{jsxref("Object.is")}} (ECMAScript 2015 の新機能): 同値比較

どの演算子を使用するかは、どのような比較を行いたいかに依存します。簡単に言えば、

- 二重等号 (`==`) は二つのものを比較する前に型変換を実行し、`NaN`, `-0`, `+0` を IEEE 754 に準拠して特別扱いします (よって `NaN != NaN`, `-0 == +0` になります)。
- 三重等号 (`===`) は二重等号と同じ比較を (`NaN`, `-0`, `+0` の特別扱いを含めて) しますが、型変換を行いません。もし型が異なれば、`false` が返されます。
- `Object.is` は型変換を行わず、`NaN`, `-0`, `+0` の特別扱いもしません (これらの特殊な数値を除いて `===` と同じ動作をします)。

なお、これらの区別はプリミティブ値の扱いについてのことです。いずれの場合も引数が概念的に似た構造を持つかどうかを比較する訳ではありません。プリミティブ値ではない `x` および `y` オブジェクトが同一の構造を持っていてもオブジェクトが異なれば、上記のいずれの形でも `false` と評価されます。

## `===` による厳格な等価性

厳格な等価性は、2 つの値が等しいか比較します。比較対象の値はどちらも、比較する前に別の値へ暗黙のうちに変換されることはありません。値が異なる型の場合、それらの値は等しくないとみなします。値が同じ型で数値ではない場合、同じ値であれば等しいとみなします。最後に、どちらの値も数値である場合、どちらも `NaN` ではなく同じ値である、あるいは一方が `+0` かつもう一方が `-0` であるときに等しいとみなします。

```js
var num = 0;
var obj = new String('0');
var str = '0';

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

厳密な等価性は、たいていの使い方で正しい比較になります。数値以外のあらゆる値において、これは「値が自分自身と等しい」という明快な解釈を用います。数値においては、２つの極めて特殊なケースを扱えるようにわずかに異なる解釈を用います。１つ目は浮動小数点数の 0 には正と負の符号付きが存在することです。これは、ある種の数学的な解を表すために役立ちますが、ほとんどの場合は `+0` と `-0` の違いを意識せず、厳格な等価性ではこれらを同じ値として扱います。２つ目は浮動小数点数には非数 `NaN` の概念があることです、これは例えば正の無限大に負の無限大を加算するといった一定の数学的に明確ではない問題達の解を表します。厳格な等価性では `NaN` を他のどの値 (自分自身も含む) とも等しくないものとして扱います。(`(x !== x)` が `true` になる唯一の場合は `x` が `NaN` である場合です。)

## `==` による緩い等価性

緩い等価性は、両方の値を共通の型に変換した*後で*、2 つの値が等しいか比較します。(片方あるいは両方の変換が行われた) 変換処理後の、最終的な等価性の比較は `===` と全く同じ振る舞いです。緩い等価性は*対称的*であり、任意の値 `A` および `B` において、`A == B` と `B == A` の意味は常に同じです (変換処理を適用する順序を除く)。

等価性比較でさまざまな型のオペランドに対して以下のように振る舞います。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th colspan="7" scope="col" style="text-align: center">オペランド B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td style="text-align: center">Undefined</td>
      <td style="text-align: center">Null</td>
      <td style="text-align: center">Number</td>
      <td style="text-align: center">String</td>
      <td style="text-align: center">Boolean</td>
      <td style="text-align: center">Object</td>
    </tr>
    <tr>
      <th colspan="1" rowspan="6" scope="row">オペランド A</th>
      <td>Undefined</td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
    </tr>
    <tr>
      <td>Null</td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
    </tr>
    <tr>
      <td>Number</td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>A === B</code></td>
      <td style="text-align: center"><code>A === ToNumber(B)</code></td>
      <td style="text-align: center"><code>A === ToNumber(B)</code></td>
      <td style="text-align: center"><code>A == ToPrimitive(B)</code></td>
    </tr>
    <tr>
      <td>String</td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>ToNumber(A) === B</code></td>
      <td style="text-align: center"><code>A === B</code></td>
      <td style="text-align: center">
        <code>ToNumber(A) === ToNumber(B)</code>
      </td>
      <td style="text-align: center"><code>A == ToPrimitive(B)</code></td>
    </tr>
    <tr>
      <td>Boolean</td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>ToNumber(A) === B</code></td>
      <td style="text-align: center">
        <code>ToNumber(A) === ToNumber(B)</code>
      </td>
      <td style="text-align: center"><code>A === B</code></td>
      <td style="text-align: center">
        <code>ToNumber(A) == ToPrimitive(B)</code>
      </td>
    </tr>
    <tr>
      <td>Object</td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>ToPrimitive(A) == B</code></td>
      <td style="text-align: center"><code>ToPrimitive(A) == B</code></td>
      <td style="text-align: center">
        <code>ToPrimitive(A) == ToNumber(B)</code>
      </td>
      <td style="text-align: center"><code>A === B</code></td>
    </tr>
  </tbody>
</table>

上の表で、`ToNumber(A)` は、比較前に引数を数値に変換しようとします。この振る舞いは `+A` (正の単項演算子) と同じです。`ToPrimitive(A)` は、`A` の持つ `A.toString` メソッド、そして `A.valueOf` メソッドの変換シーケンスを実施することで、オブジェクトの引数をプリミティブ値へ変換しようとを試みます。

伝統的にも、また ECMAScript によれば、すべてのオブジェクトは `undefined` や `null` に対して大雑把には等価でないとしています。しかし、ほとんどのブラウザーは、ごく一部のオブジェクト (特に、あらゆるページの `document.all` オブジェクト) が、いくつかの状況においては値 `undefined` のように振る舞う*こと*を認めています。緩い等価性もそのようなものの一つです、A が `undefined` に*相当する*オブジェクトである場合に限り、`null == A` および `undefined == A` は true になります。それ以外のどのオブジェクトも `undefined` および `null` と大雑把には等価とはなりません。

```js
var num = 0;
var obj = new String('0');
var str = '0';

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// 特殊なケースを除き、どちらも false
console.log(obj == null);
console.log(obj == undefined);
```

緩い等価性を使用することは大体はよい考えでないと考える開発者もいます。厳格な等価性による比較の結果は予測が容易であり、評価が必要となる型強制がないためにより早くなります。

## Same-value 等価性

最後に示す用法は Same-value 等価性です。これは、すべての状況で 2 つの値が*機能的に同一か*を判断します(この用法は[リスコフの置換原則](http://ja.wikipedia.org/wiki/%E3%83%AA%E3%82%B9%E3%82%B3%E3%83%95%E3%81%AE%E7%BD%AE%E6%8F%9B%E5%8E%9F%E5%89%87)の実践例と言えます)。実例として、イミュータブルなプロパティを変化させようとした場合を見てみましょう:

```js
// Number コンストラクタに immutable な NEGATIVE_ZERO プロパティを追加
Object.defineProperty(Number, 'NEGATIVE_ZERO',
                      { value: -0, writable: false, configurable: false, enumerable: false });

function attemptMutation(v) {
  Object.defineProperty(Number, 'NEGATIVE_ZERO', { value: v });
}
```

イミュータブルなプロパティを変更しようとする操作が実際の変更を伴う場合、`Object.defineProperty` は例外を発生させます。しかし、実際の変更が伴わない場合は、`Object.defineProperty` は何もしません。`v` が `-0` であれば変更を要求されていないので、エラーは発生しません。しかし `v` が `+0` であれば、`Number.NEGATIVE_ZERO` のイミュータブルな値を変更しようとすることになります。内部的には、イミュータブルなプロパティが再定義された場合、新たに指定された値と現在の値が Same-value 等価性によって比較されます。

Same-value 等価性は {{jsxref("Object.is")}} メソッドによって提供されます。

## Same-value-zero 等価性

Same-value 等価性に似ていますが、+0 と -0 は等しいとみなします。

## 仕様書における抽象的な等価性、厳格な等価性、Same value

ES5 では、[`==`](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) で実行する比較を [Section 11.9.3, The Abstract Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.3) で説明しています。また、[`===`](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) の比較は [11.9.6, The Strict Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.6) で説明しています (リンク先をご覧ください。簡単かつ読みやすくなっています。ヒント: 厳格な等価性のアルゴリズムを始めにご覧ください)。また ES5 の [Section 9.12, The SameValue Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-9.12) では、JS エンジン内部で使用する SameValue について説明しています。大部分は厳格な等価性のアルゴリズムと同じですが、{{jsxref("Number")}} を扱う 11.9.6.4 および 9.12.4 が異なります。ES2015 では、このアルゴリズムを {{jsxref("Object.is")}} で公開するよう提案しています。

二重等号と三重等号について、11.9.6.1 で最初に行う型の確認を除けば、厳格な等価性のアルゴリズムは緩い等価性のアルゴリズムのサブセットと考えることができます。これは、11.9.6.2 から 7 が 11.9.3.1.a から f に対応するためです。

## 等価性の比較を理解するためのモデル?

ES2015 より前は、二重等号と三重等号について、一方は他方を "拡張した" ものであると聞いていたかもしれません。例えば、二重等号は三重等号と同じことをすべて行うだけでなくオペランドの型変換も行うことから、三重等号を拡張したものであると聞いたことがあるかもしれません。例えば、`6 == "6"` です (あるいは二重等号が基本形であり、三重等号は 2 つのオペランドが同一の型であることを要求するという制約を加えていることから、三重等号が拡張形であると言われたかもしれません。どちらが理解に適したモデルであるかは、どのような見方を選ぶかによって変わります)。

しかし内蔵の等価演算子に関するこの考え方は、その "連続体" に ES2015 の {{jsxref("Object.is")}} を含められるように広げることが可能なモデルではありません。{{jsxref("Object.is")}} は二重等号より単純に "緩い" のではなく、また三重等号より "厳格" でもなく、さらに両者の中間のどこにも置けません (すなわち二重等号より厳格でも、三重等号より緩くもありません)。同一性を比較した以下の表から、{{jsxref("Object.is")}} が {{jsxref("NaN")}} を扱う方法が原因であることがわかります。`Object.is(NaN, NaN)` が `false` に評価されるのであれば、`-0` と `+0` を区別することにより、三重等号より厳格であることから寛容/厳格の連続体に*含めることができる*ことに注目してください。しかし {{jsxref("NaN")}} の扱いは、これが虚偽であることを表します。残念ながら、{{jsxref("Object.is")}} は等価演算子に関する寛容さや厳格さではなく、単純に固有の特性の観点から考えなければなりません。

| x                   | y                   | `==`    | `===`   | `Object.is` | `SameValueZero` |
| ------------------- | ------------------- | ------- | ------- | ----------- | --------------- |
| `undefined`         | `undefined`         | `true`  | `true`  | `true`      | `true`          |
| `null`              | `null`              | `true`  | `true`  | `true`      | `true`          |
| `true`              | `true`              | `true`  | `true`  | `true`      | `true`          |
| `false`             | `false`             | `true`  | `true`  | `true`      | `true`          |
| `'foo'`             | `'foo'`             | `true`  | `true`  | `true`      | `true`          |
| `0`                 | `0`                 | `true`  | `true`  | `true`      | `true`          |
| `+0`                | `-0`                | `true`  | `true`  | `false`     | `true`          |
| `+0`                | `0`                 | `true`  | `true`  | `true`      | `true`          |
| `-0`                | `0`                 | `true`  | `true`  | `false`     | `true`          |
| `0`                 | `false`             | `true`  | `false` | `false`     | `false`         |
| `""`                | `false`             | `true`  | `false` | `false`     | `false`         |
| `""`                | `0`                 | `true`  | `false` | `false`     | `false`         |
| `'0'`               | `0`                 | `true`  | `false` | `false`     | `false`         |
| `'17'`              | `17`                | `true`  | `false` | `false`     | `false`         |
| `[1, 2]`            | `'1,2'`             | `true`  | `false` | `false`     | `false`         |
| `new String('foo')` | `'foo'`             | `true`  | `false` | `false`     | `false`         |
| `null`              | `undefined`         | `true`  | `false` | `false`     | `false`         |
| `null`              | `false`             | `false` | `false` | `false`     | `false`         |
| `undefined`         | `false`             | `false` | `false` | `false`     | `false`         |
| `{ foo: 'bar' }`    | `{ foo: 'bar' }`    | `false` | `false` | `false`     | `false`         |
| `new String('foo')` | `new String('foo')` | `false` | `false` | `false`     | `false`         |
| `0`                 | `null`              | `false` | `false` | `false`     | `false`         |
| `0`                 | `NaN`               | `false` | `false` | `false`     | `false`         |
| `'foo'`             | `NaN`               | `false` | `false` | `false`     | `false`         |
| `NaN`               | `NaN`               | `false` | `false` | `true`      | `true`          |

## {{jsxref("Object.is")}} と三重等号の使いどころ

一般的に、{{jsxref("Object.is")}} のゼロに対する特別な動作が関心の対象になりえると思われるのは、ある種のメタプログラミング方式に則る時、特にプロパティ記述子に関して {{jsxref("Object.defineProperty")}} の特徴の一部を再現したい時に限られます。このような要件が必要なければ、{{jsxref("Object.is")}} ではなく、代わりに [`===`](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) を使用してはいかがでしょう。2 つの {{jsxref("NaN")}} 値を比較した結果が `true` になることが必要な場合であっても、通常は、{{jsxref("NaN")}} をチェックして特別扱いする方が (前バージョンの ECMAScript からは {{jsxref("isNaN")}} メソッドを使えます) 、比較処理中に現れた全てのゼロについてその符号が周囲の処理からどう影響されるのか悩むよりも簡単です。

すべてを網羅してはいませんが、`-0` と `+0` の区別が発生する可能性がある内蔵メソッドや演算子を以下に示します。コード中ではこれらを考慮して下さい:

- [`- (単項否定演算子)`](/ja/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#-_.28Unary_Negation.29)

  - :&#x20;

    ```js
    let stoppingForce = obj.mass * -obj.velocity;
    ```

    `obj.velocity` が `0` である (あるいは計算結果が `0` になる) とき、そこで `-0` が生成されて `stoppingForce` に伝播します。

<!---->

- {{jsxref("Math.atan2")}}

  {{jsxref("Math.ceil")}}

  {{jsxref("Math.pow")}}

  {{jsxref("Math.round")}}

  - : 引数に `-0` が存在しなくても、場合によってはこれらのメソッドの戻り値として `-0` が式に取り込まれる可能性があります。例えば、負の値の累乗で {{jsxref("Infinity", "-Infinity")}} が発生するように {{jsxref("Math.pow")}} を使用したとき、奇数の指数は `-0` に評価されます。それぞれのメソッドのドキュメントを確認してください。

<!---->

- {{jsxref("Math.floor")}}

  {{jsxref("Math.max")}}

  {{jsxref("Math.min")}}

  {{jsxref("Math.sin")}}

  {{jsxref("Math.sqrt")}}

  {{jsxref("Math.tan")}}

  - : 引数のひとつが `-0` である場合に、これらのメソッドから `-0` を戻り値として得る可能性があります。例えば、`Math.min(-0, +0)` は `-0` になります。それぞれのメソッドのドキュメントを確認してください。

<!---->

- [`~`](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

  [`<<`](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

  [`>>`](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

  - : これらの演算子は、内部で ToInt32 アルゴリズムを使用します。内部の 32 ビット整数型は 0 の表現が 1 種類しかないため、逆の演算を行った後に `-0` は戻らないでしょう。例えば `Object.is(~~(-0), -0)` や `Object.is(-0 << 2 >> 2, -0)` は、`false` になります。

ゼロの符号を考慮していない場合に、{{jsxref("Object.is")}} に頼ることは危険でしょう。もちろん `-0` と `+0` を区別する意図があれば、これはまさに望むことです。

## 注意: {{jsxref("Object.is")}} と NaN

{{jsxref("Object.is")}} の仕様書では、すべての {{jsxref("NaN")}} のインスタンスを同じオブジェクトとして扱っています。しかし、型付き配列が利用でき、インスタンスを区別することができるので、次の例のようにすべてのコンテキストで同じ動作をするとは限りません。

```js
var f2b = x => new Uint8Array(new Float64Array([x]).buffer);
var b2f = x => new Float64Array(x.buffer)[0];
var n = f2b(NaN);
n[0] = 1;
var nan2 = b2f(n);
nan2;
// > NaN
Object.is(nan2, NaN);
// > true
f2b(NaN);
// > Uint8Array(8) [0, 0, 0, 0, 0, 0, 248,127)
f2b(nan2);
// > Uint8Array(8) [1, 0, 0, 0, 0, 0, 248,127)
```

## 関連情報

- [JS Comparison Table](http://dorey.github.io/JavaScript-Equality-Table/)

---
title: 式と演算子
slug: Web/JavaScript/Guide/Expressions_and_operators
l10n:
  sourceCommit: 9c4fb236cd9ced12b1eb8e7696d8e6fcb8d8bad3
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}

この章では JavaScript の式 (expression) や演算子 (operator) について、代入、比較、算術、ビット、論理、文字列、三項演算子などを説明しています。

高いレベルでは、_式_ は値に解決するコードの有効な単位です。式には （値を代入するなどの）副作用があるものと、純粋に _評価_ を行うものの 2 種類があります。

`x = 7` という式は前者の例です。この式は `=` _演算子_ を使用して、変数 `x` に値 7 を代入しています。この式自体は `7` と評価されます。

`3 + 4` という式は後者の例です。この式は `+` 演算子を使用して `3` と `4` を加算し、値として `7` を生み出します。しかし、もしこれが最終的に大きな構成要素（例えば、`const z = 3 + 4` のような[変数宣言](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#宣言)）の一部でなければ、その結果はすぐに破棄されます。評価が何の効果ももたらさないので、これは通常プログラマーのミスです。

上の例でも示したように、すべての複雑な式は `=` や `+` などの _演算子_ で結合されています。この節では、以下の演算子を紹介します。

- [代入演算子](#代入演算子)
- [比較演算子](#比較演算子)
- [算術演算子](#算術演算子)
- [ビット演算子](#ビット演算子)
- [論理演算子](#論理演算子)
- [長整数演算子](#長整数演算子)
- [文字列演算子](#文字列演算子)
- [条件（三項）演算子](#条件（三項）演算子)
- [カンマ演算子](#カンマ演算子)
- [単項演算子](#単項演算子)
- [関係演算子](#関係演算子)

これらの演算子は、より高い優先順位の演算子か、[基本的な式](#基本的な式)の 1 つによって形成されたオペランドを結合します。演算子と式の完全で詳細なリストは、[リファレンス](/ja/docs/Web/JavaScript/Reference/Operators)に掲載されています。

演算子の _優先順位_ は、式を評価する際に演算子を評価する順序を決定します。例えば次の例をご覧ください。

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

`*` と `+` の順序が異なるにもかかわらず、どちらの式も `7` という結果になります。なぜなら、 `*` は `+` よりも優先されるので、 `*` と結合された式が常に最初に評価されるからです。演算子の優先順位を上書きするには、括弧を使用します（[グループ化式](#グループ演算子) - 基本的な式を作成します）。演算子の優先順位の完全な表と様々な注意点を見るには、[演算子の優先順位のリファレンス](/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#一覧表)ページを参照してください。

JavaScript は _二項演算子_ や _単項演算子_ を実装しており、さらには特殊な三項演算子である条件演算子も実装しています。
二項演算子は次のように、演算子の前と演算子の後に 2 つのオペランド (operand) が必要となります。

```plain
オペランド1 演算子 オペランド2
```

例えば `3 + 4` や `x * y` です。この形式は、演算子が 2 つのオペランドの間に配置されるため、 _infix_ 二項演算子と呼ばれます。JavaScript で使用されるすべての二項演算子は infix です。

単項演算子は演算子の前後いずれかに、 1 つのオペランドが必要です。

```plain
演算子 オペランド
オペランド 演算子
```

例えば `x++` や `++x` です。`演算子 オペランド` の形を _前置_ 単項演算子、`オペランド 演算子` の形を _後置_ 単項演算子と呼びます。JavaScript では後置演算子は `++` と `--` だけです。`!` や `typeof` など、他のすべての演算子は前置型です。

## 代入演算子

代入演算子は右オペランドの値を元に、左のオペランドへ値を代入するものです。
単純な代入演算子はイコール (`=`) があり、右オペランドの値を左オペランドへ代入します。
つまり、 `x = f()` は `f()` の値を `x` へ代入する代入式です。

次の表にまとめられているように、演算子を省略表記した複合代入演算子もあります。

| 名前                                                                                                | 略記演算子    | 意味               |
| --------------------------------------------------------------------------------------------------- | ------------- | ------------------ |
| [代入](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)                                      | `x = f()`     | `x = f()`          |
| [加算代入](/ja/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                         | `x += f()`    | `x = x + f()`      |
| [減算代入](/ja/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                      | `x -= f()`    | `x = x - f()`      |
| [乗算代入](/ja/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)                   | `x *= f()`    | `x = x * f()`      |
| [除算代入](/ja/docs/Web/JavaScript/Reference/Operators/Division_assignment)                         | `x /= f()`    | `x = x / f()`      |
| [剰余代入](/ja/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                        | `x %= f()`    | `x = x % f()`      |
| [べき乗代入](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                 | `x **= f()`   | `x = x ** f()`     |
| [左シフト代入](/ja/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                   | `x <<= f()`   | `x = x << f()`     |
| [右シフト代入](/ja/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                  | `x >>= f()`   | `x = x >> f()`     |
| [符号なし右シフト代入](/ja/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`  | `x = x >>> f()`    |
| [ビット論理積 (AND) 代入](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)       | `x &= f()`    | `x = x & f()`      |
| [ビット排他的論理和 (XOR) 代入](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment) | `x ^= f()`    | `x = x ^ f()`      |
| [ビット論理和 (OR) 代入](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)         | `x \|= f()`   | `x = x \| f()`     |
| [論理積 (AND) 代入](/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)             | `x &&= f()`   | `x && (x = f())`   |
| [論理和 (OR) 代入](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)               | `x \|\|= f()` | `x \|\| (x = f())` |
| [Null 合体代入](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)          | `x ??= f()`   | `x ?? (x = f())`   |

### プロパティへの代入

ある式が[オブジェクト](/ja/docs/Web/JavaScript/Guide/Working_with_Objects)として評価される場合、代入式の左辺をその式のプロパティへの代入にすることができます。例えば次のようになります。

```js
const obj = {};

obj.x = 3;
console.log(obj.x); // 3 と表示
console.log(obj); // { x: 3 } と表示

const key = "y";
obj[key] = 5;
console.log(obj[key]); // 5 と表示
console.log(obj); // { x: 3, y: 5 } と表示
```

オブジェクトについて詳しくは、[オブジェクトでの作業](/ja/docs/Web/JavaScript/Guide/Working_with_Objects)を読んでください。

式がオブジェクトとして評価されない場合は、その式のプロパティへの代入は行われません。

```js
const val = 0;
val.x = 3;

console.log(val.x); // undefined と表示
console.log(val); // 0 と表示
```

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode#ミスからエラーへの変換)では、プリミティブのプロパティに代入することができないため、上記のコードは例外を発生します。

変更できないプロパティや、プロパティを持たない式のプロパティ（`null` や `undefined`）に値を代入しようとするとエラーとなります。

### 分割代入

より複雑な代入方法、[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)構文は、配列やオブジェクトのリテラル構造を反映した構文を用いて、配列やオブジェクトからデータを抽出することができる JavaScript の式です。

```js
const foo = ["one", "two", "three"];

// 分割を行わない代入
const one = foo[0];
const two = foo[1];
const three = foo[2];

// 分割代入
const [one, two, three] = foo;
```

### 評価とネスト

一般に、代入は変数宣言の中で（すなわち、 [`const`][], [`let`][], [`var`][] と一緒に）、または独立した文として使用されます。

```js
// 変数 x を宣言し、 f() の返値で初期化します。
// x = f() の代入式の返値は破棄されます。
let x = f();

x = g(); // 変数 x に g() の返値を再代入します。
```

[`const`]: /ja/docs/Web/JavaScript/Reference/Statements/const
[`let`]: /ja/docs/Web/JavaScript/Reference/Statements/let
[`var`]: /ja/docs/Web/JavaScript/Reference/Statements/var

しかし、他の式と同様に、`x = f()` のような代入式も結果値として評価されます。
この結果の値は通常は使用されませんが、別の式で使用することができます。

代入を連鎖させたり、他の式で代入を入れ子にすると、驚くような動作になることがあります。
このため、 JavaScript のスタイルガイドによっては、代入の連鎖や入れ子を[連鎖や入れ子の代入を非推奨][discourage assign chain]と定めています。）
とはいえ、代入の連鎖や入れ子が発生することもあるので、それらがどのように動作するのか理解できるようにしておくことは重要です。

[discourage assign chain]: https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment

代入式を連鎖させたり入れ子にしたりすることで、その結果自体を別の変数に代入することができます。
また、ログに記録したり、配列リテラルや関数呼び出しの中に入れたりすることも可能です。

```js-nolint
let x;
const y = (x = f()); // または const y = x = f(); と同等
console.log(y); // assignment x = f() の返値を出力

console.log(x = f()); // 返値を直接出力

// 代入式は、配列リテラルの要素や関数呼び出しの引数など、
// 一般に式が許される場所であればどこでも入れ子にすることが
// できます。
console.log([0, x = f(), 0]);
console.log(f(0, x = f(), 0));
```

評価結果は、上の表の「意味」の欄の `=` 記号の右側にある式に一致します。つまり、 `x = f()` は `f()` の結果に、`x += f()` は結果の和 `x + f()` に、 `x **= f()` は結果のべき乗 `x ** y` に評価される、といった具合になります。

論理代入の場合、 `x &&= f()`, `x ||= f()`, `x ??= f()` は，それぞれ代入を除いた論理演算の返値なので、 `x && f()`, `x || f()`, `x ?? f()` となります。

これらの式を括弧や配列リテラルのようなグループ化演算子なしで連結する場合、代入式は**右から左へグループ化されます**（[右結合][]です）が、**左から右へ評価されます**。

[右結合]: https://ja.wikipedia.org/wiki/%E7%B5%90%E5%90%88%E6%B3%95%E5%89%87#%E9%9D%9E%E7%B5%90%E5%90%88%E7%9A%84%E6%BC%94%E7%AE%97%E3%81%AE%E8%A8%98%E6%B3%95

また、 `=` 以外のすべての代入演算子では、結果の値は常に演算前のオペランドの値に基づいていることに注意してください。

例えば、次のような関数 `f` と `g`、変数 `x` と `y` が宣言されていると仮定します。

```js
function f() {
  console.log("F!");
  return 2;
}
function g() {
  console.log("G!");
  return 3;
}
let x, y;
```

この 3 つの例を考えてみましょう。

```js-nolint
y = x = f();
y = [f(), x = g()];
x[f()] = g();
```

#### 評価例 1

`y = x = f()` は `y = (x = f())` と同じです。
`=` は [右結合][] だからです。
しかし、評価は左から右へ行われます。

1. 代入式 `y = x = f()` の評価が始まります。
   1. この代入の左辺にある `y` は、変数 `y` への参照として評価されます。
   2. 代入式 `x = f()` の評価が始まります。
      1. この代入の左辺にある `x` は、 `x` という名前の変数への参照として評価されます。
      2. 関数呼び出し `f()` でコンソールに "F!" と表示し、次に数値 `2` と評価されます。
      3. `2` が `f()` の結果となり `x` に代入されます。
   3. 代入式 `x = f()` の評価が終わりました。
      その結果は、 `x` の新しい値、すなわち `2` です。
   4. その結果 `2` が `y` にも代入されます。
2. 代入式 `y = x = f()` の評価が終わりました。
   その結果は `y` の新しい値で、それは `2` となります。
   `x` と `y` は `2` が代入され、コンソールには "F!" と表示されました。

#### 評価例 2

`y = [ f(), x = g() ]` も左から右へ評価が行われます。

1. 代入式 `y = [ f(), x = g() ]` の評価が始まります。
   1. この代入の左辺にある `y` は、変数 `y` への参照として評価されます。
   2. 内側の配列リテラル `[ f(), x = g() ]` の評価が始まります。
      1. 関数呼び出し `f()` でコンソールに "F!" と表示し、次に数値 `2` と評価されます。
      2. 代入式 `x = g()` の評価が始まります。
         1. この代入の左辺にある `x` は、 `x` という名前の変数への参照として評価されます。
         2. 関数呼び出し `g()` でコンソールに "G!" と表示し、次に数値 `3` と評価されます。
         3. `3` が `g()` の結果となり `x` に代入されます。
      3. 代入式 `x = g()` の評価が終わりました。
         その結果は、 `x` の新しい値、すなわち `3` です。
         この `3` の結果は、内側の配列リテラルの次の要素になります（`f()` の `2` の後です）。
   3. 内側の配列リテラル `[ f(), x = g() ]` の評価が終わりました。
      結果は 2 つの値を持つ配列、 `[ 2, 3 ]` です。
   4. その配列 `[ 2, 3 ]` が `y`
2. 代入式 `y = [ f(), x = g() ]` の評価が終わりました。
   結果として `y` が新しい値、 `[ 2, 3 ]` になります。
   `x` には `3` が代入されました。
   `y` には `[ 2, 3 ]` が代入され、コンソールには "F!" の後に "G!" が表示されます。

#### 評価例 3

`x[f()] = g()` も左から右へ評価されます。
（この例では `x` には既に何らかのオブジェクトが代入されていると想定してください。
オブジェクトについて詳しくは、[オブジェクトでの作業](/ja/docs/Web/JavaScript/Guide/Working_with_Objects)をお読みください。

1. 代入式 `x[f()] = g()` の評価が始まります。
   1. この代入における代入の左辺の `x[f()]` プロパティアクセスの評価が始まります。
      1. このプロパティアクセスの `x` は、 `x` という名前の変数への参照として評価されます。
      2. そして、関数呼び出し `f()` でコンソールに "F!" と表示し、次に数値 `2` と評価されます。
   2. この代入における `x[f()]` プロパティアクセスの評価が終わりました。
      結果は変数プロパティ参照である `x[2]` です。
   3. そして、関数呼び出し `g()` でコンソールに "G!" と表示し、次に数値 `3` と評価されます。
   4. `3` が `x[2]` に代入されます。
      （この過程は `x` に[オブジェクト](/ja/docs/Web/JavaScript/Guide/Working_with_Objects)が代入されているときのみ成功します。）
2. 代入式 `x[f()] = g()` の評価が終わりました。
   返値は `x[2]` の新しい値– ここでは `3` です。
   `x[2]` には `3` が代入され、コンソールには "F!" に続いて "G!" が表示されます。

### 代入連鎖の防止

代入を連鎖させたり、他の式に代入を入れ子にすると、意外な動作をすることがあります。このため、[同じ文の中で代入を連鎖させることは推奨されません][discourage assign chain]。

特に、 [`const`][], [`let`][], [`var`][] 文の中に変数連鎖を入れると、しばしばうまく行かなくなります。代入連鎖の中で一番外側/左側の変数だけが宣言され、他の変数は `const`/`let`/`var` 文では宣言されないからです。例えば、

```js-nolint
const z = y = x = f();
```

この文は一見すると、変数 `x`, `y`, `z` を宣言しているように見えます。
しかし、実際に宣言しているのは変数 `z` だけです。
`y` と `x` は存在しない変数への無効な参照であるか（[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode) の場合）、もっと悪いことには、[厳格モードでない](/ja/docs/Glossary/Sloppy_mode)場合は `x` と `y` に対して[グローバル変数](/ja/docs/Glossary/Global_variable)を暗に生成してしまうことになるのです。

## 比較演算子

比較演算子はオペランドを比較して、その結果が真であるかに基づいて論理値を返します。
オペランドには数値、文字列、論理値、[オブジェクト](/ja/docs/Web/JavaScript/Guide/Working_with_Objects)を使用できます。
文字列は Unicode の値を用い、標準的な辞書順に基づいて比較されます。
ほとんどの場合、2 つのオペランドが異なる型ならば JavaScript はそのオペランドを比較に適した型に変換しようとします。
こうした挙動により、一般的にオペランドは数値的に比較される結果となります。
このルールの唯一の例外は `===` および `!==` で、これらは「厳密に」等値か否かを判断し、等値性をチェックする前にオペランドを適合する型に変換しません。
次の表では、以下のサンプルコードで定義された変数を前提として比較演算子を説明していきます。

```js
const var1 = 3;
const var2 = 4;
```

<table class="standard-table">
  <caption>
    比較演算子
  </caption>
  <thead>
    <tr>
      <th scope="col">演算子</th>
      <th scope="col">説明</th>
      <th scope="col">true を返す例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Equality">等価</a> (<code>==</code>)
      </td>
      <td>オペランドが等しい場合に <code>true</code> を返します。</td>
      <td>
        <code>3 == var1</code>
        <p><code>"3" == var1</code></p>
        <code>3 == '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Inequality">不等価</a> (<code>!=</code>)
      </td>
      <td>オペランドが等しくない場合に <code>true</code> を返します。</td>
      <td>
        <code>var1 != 4<br />var2 != "3"</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality">厳密等価</a> (<code>===</code>)
      </td>
      <td>
        オペランドが等しく、かつ同じ型である場合に <code>true</code> を返します。
        {{jsxref("Object.is")}} や<a href="/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness">JavsScript での等価</a>も参照してください。
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality">厳密不等価</a> (<code>!==</code>)
      </td>
      <td>
        オペランドが同じ型で値が等しくないか、型が異なる場合に <code>true</code> を返します。
      </td>
      <td>
        <code>var1 !== "3"<br />3 !== '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Greater_than">大なり</a> (<code>></code>)
      </td>
      <td>
        左のオペランドが右のオペランドよりも大きい場合に <code>true</code> を返します。
      </td>
      <td>
        <code>var2 > var1<br />"12" > 2</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">以上</a>
        (<code>>=</code>)
      </td>
      <td>
        左のオペランドが右のオペランド以上である場合に <code>true</code> を返します。
      </td>
      <td>
        <code>var2 >= var1<br />var1 >= 3</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Less_than">小なり</a>
        (<code>&#x3C;</code>)
      </td>
      <td>
        左のオペランドが右のオペランドよりも小さい場合に <code>true</code> を返します。
      </td>
      <td>
        <code>var1 &#x3C; var2<br />"2" &#x3C; 12</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">以下</a>
        (<code>&#x3C;=</code>)
      </td>
      <td>
        左のオペランドが右のオペランド以下である場合に <code>true</code> を返します。
      </td>
      <td>
        <code>var1 &#x3C;= var2<br />var2 &#x3C;= 5</code>
      </td>
    </tr>
  </tbody>
</table>

> **メモ:** `=>` は演算子ではなく、[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を表す記法です。

## 算術演算子

算術演算子は、オペランドとして数値（リテラルまたは変数）をとり、1 つの数値を返します。
標準的な算術演算子は、加算 (`+`)、減算 (`-`)、乗算 (`*`)、除算 (`/`) です。
これらの演算子は、他のほとんどのプログラミング言語で浮動小数点数を用いた場合と同じように機能します（特に、0 で除算をすると {{jsxref("Infinity")}} になることに注意してください）。例えば以下のようになります。

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // true になる
```

標準的な算術演算子 (`+`, `-`, `*`, `/`) に加え、さらに JavaScript では、以下の表で示す算術演算子も使用できます。

<table class="fullwidth-table">
  <caption>
    算術演算子
  </caption>
  <thead>
    <tr>
      <th scope="col">演算子</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Remainder">剰余</a> (<code>%</code>)
      </td>
      <td>
        二項演算子です。2 つのオペランドで除算したときの、整数の余りを返します。
      </td>
      <td>12 % 5 は 2 を返します。</td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Increment">インクリメント</a> (<code>++</code>)
      </td>
      <td>
        単項演算子です。オペランドに 1 を加えます。前置演算子 (<code>++x</code>) として用いると、オペランドに 1 を加えた後にその値を返します。後置演算子 (<code>x++</code>) として用いると、オペランドに 1 を加える前にその値を返します。
      </td>
      <td>
        <code>x</code> が 3 の場合、<code>++x</code> は <code>x</code> に 4 を設定して 4 を返します。一方、<code>x++</code> は 3 を返したあと <code>x</code> に 4 を設定します。
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Decrement">デクリメント</a> (<code>--</code>)
      </td>
      <td>
        単項演算子です。オペランドから 1 を引きます。返値はインクリメント演算子のものと同様です。
      </td>
      <td>
        <code>x</code> が 3 の場合、<code>--x</code> は <code>x</code> に 2 を設定して 2 を返します。一方、<code>x--</code> は 3 を返したあと <code>x</code> に 2 を設定します。
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation">単項符号反転</a> (<code>-</code>)
      </td>
      <td>単項演算子です。オペランドの符号を反転して、その値を返します。</td>
      <td><code>x</code> が 3 のとき、<code>-x</code> は -3 を返します。</td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus">単項プラス</a> (<code>+</code>)
      </td>
      <td>
        単項演算子です。数値でない<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion">オペランドの数値への変換</a>を試みます。
      </td>
      <td>
        <p><code>+"3"</code> は <code>3</code> を返します。</p>
        <p><code>+true</code> は <code>1</code> を返します。</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation">べき乗演算子</a> (<code>**</code>)
      </td>
      <td>
        <code>基数部</code> を <code>指数部</code> 乗したものを計算します。
        すなわち、 <code>基数部^指数部</code> です。
      </td>
      <td>
        <code>2 ** 3</code> は <code>8</code> を返します。<br /><code>10 ** -1</code>
        は <code>0.1</code> を返します。
      </td>
    </tr>
  </tbody>
</table>

## ビット演算子

ビット演算子は、そのオペランドを 10 進数や 16 進数や 8 進数ではなく、 32 個のビットの集合 (0 と 1) として扱います。
例えば、 10 進数の 9 の 2 進表現は 1001 です。
ビット演算子はこのように 2 進表現にした上で演算を行いますが、 JavaScript において標準的な数値を返します。

次の表は JavaScript のビット演算子の概要です。

| 演算子                                                                               | 使用法    | 説明                                                                                                                                |
| ------------------------------------------------------------------------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [ビット論理積](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) (AND)        | `a & b`   | オペランドの対応するビットがともに 1 である各ビットについて 1 を返します。                                                          |
| [ビット論理和](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) (OR)          | `a \| b`  | オペランドの対応するビットがともに 0 である各ビットについて 0 を返します。                                                          |
| [ビット排他的論理和](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR) (XOR)  | `a ^ b`   | オペランドの対応するビットが同じ各ビットについて 0 を返します。 [オペランドの対応するビットが異なる各ビットについて 1 を返します。] |
| [ビット否定](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT) (NOT)          | `~ a`     | オペランドの各ビットを反転します。                                                                                                  |
| [左シフト](/ja/docs/Web/JavaScript/Reference/Operators/Left_shift)                   | `a << b`  | 2 進表現の `a` を `b` ビット分だけ左にシフトします。右から 0 で詰めます。                                                           |
| [符号維持右シフト](/ja/docs/Web/JavaScript/Reference/Operators/Right_shift)          | `a >> b`  | 2 進表現の `a` を `b` ビット分だけ右にシフトします。溢れたビットは破棄します。                                                      |
| [ゼロ埋め右シフト](/ja/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b` | 2 進表現の `a` を `b` ビット分だけ右にシフトします。溢れたビットは破棄し、左から 0 で詰めます。                                     |

#### ビット論理演算子

概念上、ビット論理演算子は以下のように機能します。

- オペランドの値は 32 ビットの整数に変換され、0 もしくは 1 からなるビット列として表現されます。
  32 ビットを超える数値は、32 ビットを超えた部分が捨てられます。
  次の例では、32 ビットを超える整数が、32 ビットの整数に変換されています。

  ```plain
  変換前: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  変換後:                1010 0000 0000 0000 0110 0000 0000 0001
  ```

- 第 1 オペランドの各ビットは第 2 オペランドの対応する各ビットと対になります。第 1 ビットと第 1 ビット、第 2 ビットと第 2 ビット、以下同様です。
- 演算子は各ビットのペアに適用され、結果はビットごとに構成されます。

例えば 9 の 2 進表現は 1001 で、15 の 2 進表現は 1111 です。
したがって、ビット演算子がこれらの値に適用されたときの結果は以下のようになります。

| 式        | 結果  | 2 進数での説明                                    |
| --------- | ----- | ------------------------------------------------- |
| `15 & 9`  | `9`   | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`  | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`   | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16` | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10` | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

なお、ビット否定演算子を使うと 32 ビットすべてが反転し、その値の最上位（最も左）のビットは（2 の補数表現で）負の数を表す 1 に設定されることに注意してください。 `~x` は `-x - 1` と同じ値に評価されます。

### ビットシフト演算子

ビットシフト演算子は 2 つのオペランドをとります。第 1 オペランドはシフトされる数を指定し、第 2 オペランドは、第 1 オペランドをシフトさせるビット数を指定します。
シフト演算の方向は使用する演算子によって決まります。

シフト演算子はそのオペランドを 32 ビット整数に変換し、結果を[数値型](/ja/docs/Web/JavaScript/Data_structures#数値型)または[長整数型](/ja/docs/Web/JavaScript/Data_structures#長整数型)のどちらかで返します。特に、左のオペランドの型が長整数型であった場合、長整数型を返します。それ以外の場合は数値型を返します。

シフト演算子の種類は次表のとおりです。

<table class="fullwidth-table">
  <caption>
    ビットシフト演算子
  </caption>
  <thead>
    <tr>
      <th scope="col">演算子</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Left_shift">左シフト</a><br />(<code>&#x3C;&#x3C;</code>)
      </td>
      <td>
        この演算子は、第 1 オペランドを指定したビット数分だけ左にシフトします。左に溢れたビットは破棄されます。0 のビットを右から詰めます。
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> の結果は 36 になります。1001 を 2 ビット左にシフトすると 100100 になり、これは 36 となるからです。
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Right_shift">符号維持右シフト</a> (<code>>></code>)
      </td>
      <td>
        この演算子は、第 1 オペランドを指定したビット数分だけ右にシフトします。右にあふれたビットは破棄されます。左端のビットのコピーを左から入れます。
      </td>
      <td>
        <code>9>>2</code> の結果は 2 になります。1001 を 2 ビット右にシフトすると 10 であり、これは 2 となるからです。同様に、 <code>-9>>2</code> は符号が維持されるため -3 になります。
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">ゼロ埋め右シフト</a> (<code>>>></code>)
      </td>
      <td>
        この演算子は、第 1 オペランドを指定したビット数分だけ右にシフトします。右に溢れたビットは破棄されます。0 のビットを左から詰めます。
      </td>
      <td>
        <code>19>>>2</code> の結果は 4 になります。10011 を 2 ビット右にシフトすると 100 になり、これは 4 となるからです。非負数では、0 埋め右シフトと符号を維持した右シフトは同じ結果になります。
      </td>
    </tr>
  </tbody>
</table>

## 論理演算子

論理演算子では、基本的に論理値（ブール値）を用います。その場合は論理値を返します。
しかし、 `&&` および `||` 演算子については、実際には指定されたオペランドの一方の値を返します。そのため、これらの演算子で論理値以外が使用された場合、論理値以外を返すことがあります。論理演算子は次の表で説明します。

<table class="fullwidth-table">
  <caption>
    論理演算子
  </caption>
  <thead>
    <tr>
      <th scope="col">演算子</th>
      <th scope="col">使用法</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND">論理積 (AND)</a> (<code>&#x26;&#x26;</code>)
      </td>
      <td><code>expr1 &#x26;&#x26; expr2</code></td>
      <td>
        <code>expr1</code> が <code>false</code> に変換できる場合は、これを返します。
        そうでなければ、 <code>expr2</code> を返します。従って、論理値を用いた場合、両オペランドが真であれば <code>&#x26;&#x26;</code> は <code>true</code> を返します。それ以外の場合は <code>false</code> を返します。
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR">論理和 (OR)</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        <code>expr1</code> が <code>true</code> に変換できる場合は、これを返します。
        そうでなければ、 <code>expr2</code> を返します。従って、論理値を用いた場合、どちらかのオペランドが真であれば <code>||</code> は <code>true</code> を返します。それ以外の場合は <code>false</code> を返します。
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_NOT">論理否定 (NOT)</a> (<code>!</code>)
      </td>
      <td><code>!expr</code></td>
      <td>
        単一のオペランドが <code>true</code> に変換できる場合は <code>false</code> を返します。そうでない場合は <code>true</code> を返します。
      </td>
    </tr>
  </tbody>
</table>

`false` に変換される式としては、null、0、NaN、空文字列 ("")、undefined に評価される式が挙げられます。

以下のコードでは、 `&&` （論理積）演算子の例を示します。

```js
const a1 = true && true; // t && t は true を返す
const a2 = true && false; // t && f は false を返す
const a3 = false && true; // f && t は false を返す
const a4 = false && 3 === 4; // f && f は false を返す
const a5 = "Cat" && "Dog"; // t && t は Dog を返す
const a6 = false && "Cat"; // f && t は false を返す
const a7 = "Cat" && false; // t && f は false を返す
```

以下のコードでは、 || （論理和）演算子の例を示します。

```js
const o1 = true || true; // t || t は true を返す
const o2 = false || true; // f || t は true を返す
const o3 = true || false; // t || f は true を返す
const o4 = false || 3 === 4; // f || f は false を返す
const o5 = "Cat" || "Dog"; // t || t は Cat を返す
const o6 = false || "Cat"; // f || t は Cat を返す
const o7 = "Cat" || false; // t || f は Cat を返す
```

以下のコードでは、 ! （論理否定）演算子の例を示します。

```js
const n1 = !true; // !t は false を返す
const n2 = !false; // !f は true を返す
const n3 = !"Cat"; // !t は false を返す
```

### 短絡評価

複数の論理式が左から右へ評価される際に、以下の規則で「短絡」 (short-circuit) 評価ができるかどうかが確認されます。

- `false && 何か` は false へと短絡評価されます。
- `true || 何か` は true へと短絡評価されます。

論理的なルールにより、これらの評価が常に正確であることが保証されます。上記の式で`何か`の部分は評価されないため、どのようにしても副作用が生じないことに注意してください。

なお、 2 番目のケースについては、現在のコードでは新しい [Null 合体演算子](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (`??`) が使用できますが、これは最初の式が "[nullish](/ja/docs/Glossary/Nullish)"、つまり [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) または [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) である場合のみ 2 番目の式を返します。したがって、 1 番目の式で `''` や `0` などを有効な値として扱う場合に、既定値を提供する代替策とすることをお勧めします。

## 長整数型の演算子

数値同士の間で使用できるほとんどの演算子は、[長整数型](/ja/docs/Web/JavaScript/Data_structures#長整数型)の値の間でも同様に使用することができます。

```js
// 長整数型の加算
const a = 1n + 2n; // 3n
// 長整数型の除算は 0 に丸められます。
const b = 1n / 2n; // 0n
// 長整数型のビット演算子は両側を切り捨てません
const c = 40000000000000000n >> 2n; // 10000000000000000n
```

一つの例外は[符号なし右シフト (`>>>`)](/ja/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)であり、長整数値では定義されていません。これは、長整数型は固定された幅を持たないため、技術的に「最上位ビット」を持たないからです。

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

長整数型と数値型は互いに置き換え不可能です。計算で混在させることはできません。

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

これは、長整数型が数値型のサブセットでもスーパーセットでもないためです。長整数型は大きな整数を表わすときには、数値よりも高い精度を持ちますが、小数を表わすことはできないので、どちらか一方に暗黙のうちに変換すると精度が落ちることがあります。演算を数値演算にしたいのか、長整数演算にしたいのか、明示的な変換を使用してください。

```js example-good
const a = Number(1n) + 2; // 3
const b = 1n + BigInt(2); // 3n
```

長整数と数値を比較することはできます。

```js
const a = 1n > 2; // false
const b = 3 > 2n; // true
```

## 文字列演算子

文字列に対して使用することができる演算子には、比較演算子に加えて、2 つの文字列を結合する結合演算子 (+) があり、2 つのオペランドの文字列を結合した文字列を返します。

例えば、

```js
console.log("my " + "string"); // 文字列 "my string" がログに表示される。
```

短縮表記した代入演算子 `+=` も文字列の結合に使用できます。

例えば、

```js
let mystring = "alpha";
mystring += "bet"; // "alphabet" と評価されて、mystring にその値を代入します。
```

### 条件（三項）演算子

[条件演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)は JavaScript で唯一 3 つのオペランドを取る演算子です。条件に基づいて 2 つの値のうちの 1 つを選択します。構文は以下の通りです。

```js-nolint
condition ? val1 : val2
```

`condition` が真の場合、演算子は `val1` の値を選択します。そうでない場合、`val2` の値を選択します。標準的な演算子を使用できる場所ならどこでも条件演算子を使用できます。

例えば、

```js
const status = age >= 18 ? "adult" : "minor";
```

この文では、`age` が 18 以上の場合、変数 `status` に "adult" の値が代入されます。そうでない場合 `status` には "minor" が代入されます。

## カンマ演算子

[カンマ演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comma_Operator) (`,`) は、オペランドの両方を評価し、最後のオペランドの値を返します。この演算子は、主に `for` ループの中で、繰り返しのたびに複数の変数を更新するために使用されます。
必要でないのに他の場所で使用するのは、悪いスタイルと見なされます。
多くの場合、独立した 2 つの文を代わりに使用することができ、また使用すべきです。

例えば、一辺が 10 要素の 2 次元配列 `a` があったとして、以下のコードでカンマ演算子を用いて 2 つの変数を同時に更新しています。このコードでは配列の対角成分の値を出力します。

```js
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}
```

## 単項演算子

単項演算はオペランドを 1 つだけ取る演算です。

### delete

[`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子はオブジェクトやオブジェクトのプロパティ、配列の指定されたインデックスの要素を削除します。
構文は以下のとおりです。

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

ここで `object` はオブジェクトの名前を、`property` は既存のプロパティを、`propertyKey` は配列の要素の位置を示す整数をそれぞれ表しています。

`delete` 演算子が成功すると、オブジェクトからそのプロパティが削除されます。その後、このプロパティにアクセスしようとしても、結果は `undefined` になります。
`delete` 演算子は、操作が可能な場合は `true` を返し、操作が不可能な場合は `false` を返します。

```js
delete Math.PI; // false を返す（構成不可のプロパティは削除できない）

const myObj = { h: 4 };
delete myObj.h; // true を返す（ユーザー定義のプロパティは削除できる）
```

#### 配列要素の削除

配列は単なるオブジェクトであるため、技術的には各要素を `delete` することが可能です。
しかしそれは悪しき慣例とみなされており、使用しないでください。
配列の要素を削除しても、配列の length は影響を受けず、他の要素の添字も付けなおされません。
このようなことをするのであれば、単に要素を `undefined` で上書きするほうがはるかに良い方法です。
実際に配列を操作するためには、 [`splice`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) のようなさまざまな配列のメソッドを使用してください。

### typeof

[`typeof` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/typeof)は、未評価のオペランドの型を指す文字列を返します。
`オペランド`には返される型を調べる対象となる文字列、キーワード、オブジェクトを指定します。
括弧はあってもなくてもかまいません。

以下の変数を定義したとしましょう。

```js
const myFun = new Function("5 + 2");
const shape = "round";
const size = 1;
const foo = ["Apple", "Mango", "Orange"];
const today = new Date();
```

`typeof` 演算子は、変数の型に応じて以下の値を返します。

```js
typeof myFun; // "function" を返す
typeof shape; // "string" を返す
typeof size; // "number" を返す
typeof foo; // "object" を返す
typeof today; // "object" を返す
typeof doesntExist; // "undefined" を返す
```

`true` や `null` というキーワードに対して、`typeof` 演算子は以下の結果を返します。

```js
typeof true; // "boolean" を返す
typeof null; // "object" を返す
```

数値や文字列に対して、 `typeof` 演算子は以下の結果を返します。

```js
typeof 62; // "number" を返す
typeof "Hello world"; // "string" を返す
```

プロパティ値に対して、 `typeof` 演算子はプロパティが持つ値の型を返します。

```js
typeof document.lastModified; // "string" を返す
typeof window.length; // "number" を返す
typeof Math.LN2; // "number" を返す
```

メソッドや関数に対して、 `typeof` 演算子は以下の結果を返します。

```js
typeof blur; // "function" を返す
typeof eval; // "function" を返す
typeof parseInt; // "function" を返す
typeof shape.split; // "function" を返す
```

定義済みオブジェクトに対して、 `typeof` 演算子は以下の結果を返します。

```js
typeof Date; // "function" を返す
typeof Function; // "function" を返す
typeof Math; // "object" を返す
typeof Option; // "function" を返す
typeof String; // "function" を返す
```

### void

[`void` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/void)は、値を返さずに評価する式を指定します。`式`は評価する JavaScript の式となります。式の周りの括弧はあってもなくてもかまいませんが、使用する方が見た目がよいです。

## 関係演算子

関係演算子はオペランドを比較し、比較結果が真かどうかに基づいて論理値を返します。

### in

[`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)は、指定したプロパティが指定のオブジェクトにある場合に `true` を返します。構文は以下のとおりです。

```js-nolint
プロパティ名または数値 in オブジェクト名
```

ここで `プロパティ名または数値` は文字列、数値、シンボルの何れかで、プロパティ名または配列の添字を表します。`オブジェクト名`はオブジェクトの名前をそれぞれ表します。

次の例で `in` 演算子の使用法を示します。

```js
// 配列
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // true を返す
3 in trees; // true を返す
6 in trees; // false を返す
"bay" in trees; // false を返す
// （インデックスの指す値ではなく、インデックスの数字を指定しなければならない）
"length" in trees; // true を返す（length は Array のプロパティ）

// 定義済みオブジェクト
"PI" in Math; // true を返す
const myString = new String("coral");
"length" in myString; // true を返す

// ユーザー定義オブジェクト
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true
```

### instanceof

[`instanceof` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/instanceof)は、指定されたオブジェクトが指定されたオブジェクトの種類である場合に `true` を返します。構文は以下のとおりです。

```js-nolint
オブジェクト名 instanceof オブジェクト型
```

ここで`オブジェクト名`は`オブジェクト型`と比較するオブジェクトの名前を、`オブジェクト型`は {{jsxref("Date")}} や {{jsxref("Array")}} のようなオブジェクトの型をそれぞれ表します。

実行時にオブジェクトの型を確認する必要があるときは `instanceof` を使用してください。例えば例外を受け取るとき、発生した例外の型に応じて、別々の例外を扱うコードに分岐することができます。

例えば次のコードでは、 `instanceof` を使用して `theDay` が `Date` オブジェクトであるかを判断しています。 `theDay` は `Date` オブジェクトであるため、`if` 文中の文が実行されます。

```js
const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // 実行する文
}
```

## 基本的な式

すべての演算子は、最終的に 1 つ以上の基本的な式を演算します。これらの基本的な式には[識別子](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)と[リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#literals)が含まれますが、他にもいくつかの種類があります。以下でそれらを簡単に紹介し、それらの意味づけはそれぞれの参照する章で詳細に記述されています。

### this

[`this` キーワード](/ja/docs/Web/JavaScript/Reference/Operators/this)を使用することで、現在のオブジェクトを参照できます。一般的に `this` は、メソッド内の呼び出しオブジェクトを指します。 `this` は、ドット表記またはブラケット表記で使用します。

```js
this["propertyName"];
this.propertyName;
```

`validate` という関数があり、オブジェクトと上限と下限の値を渡すことでオブジェクトの `value` プロパティを検証するものであるとしましょう。

```js
function validate(obj, lowval, hival) {
  if (obj.value < lowval || obj.value > hival) {
    console.log("Invalid Value!");
  }
}
```

次の例のように、各フォーム要素の `onChange` イベントハンドラーにおいて `validate` を呼び出し、その関数にフォーム要素を渡すのに `this` を使うことができます。

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### グループ化演算子

グループ化演算子 `( )` は式内での評価の優先順位を制御します。例えば、加算が最初に評価されるよう、最初に行われる演算を乗算と除算から加算と減算へと上書きすることができます。

```js-nolint
const a = 1;
const b = 2;
const c = 3;

// 既定の優先順位
a + b * c     // 7
// 既定ではこのように評価される
a + (b * c)   // 7

// 優先順位を上書きし、
// 乗算の前に加算を行う
(a + b) * c   // 9

// この式と同等となる
a * c + b * c // 9
```

### new

[`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)を使用すると、いずれかのユーザー定義オブジェクト型や組み込みオブジェクト型のインスタンスを生成することができます。 `new` の使用法は以下のとおりです。

```js
const オブジェクト名 = new objectType(引数1, 引数2, /* …, */ 引数N);
```

### super

[`super` キーワード](/ja/docs/Web/JavaScript/Reference/Operators/super)は自分の親のオブジェクトに関数を呼び出すのに使います。
これは下の例のように、[クラス](/ja/docs/Web/JavaScript/Reference/Classes)と共に使って親のコンストラクターを呼び出すのに便利です。

```js
super(引数); // 親のコンストラクターを呼び出す。
super.親の関数(引数);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}

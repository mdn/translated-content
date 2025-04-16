---
titwe: 式と演算子
swug: w-web/javascwipt/guide/expwessions_and_opewatows
w10n:
  s-souwcecommit: c-c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/functions", (U ﹏ U) "web/javascwipt/guide/numbews_and_stwings")}}

この章では j-javascwipt の式 (expwession) や演算子 (opewatow) について、代入、比較、算術、ビット、論理、文字列、三項演算子などを説明しています。

高いレベルでは、_式_ は値に解決するコードの有効な単位です。式には （値を代入するなどの）副作用があるものと、純粋に _評価_ を行うものの 2 種類があります。

`x = 7` という式は前者の例です。この式は `=` _演算子_ を使用して、変数 `x` に値 7 を代入しています。この式自体は `7` と評価されます。

`3 + 4` という式は後者の例です。この式は `+` 演算子を使用して `3` と `4` を加算し、値として `7` を生み出します。しかし、もしこれが最終的に大きな構成要素（例えば、`const z-z = 3 + 4` のような[変数宣言](/ja/docs/web/javascwipt/guide/gwammaw_and_types#宣言)）の一部でなければ、その結果はすぐに破棄されます。評価が何の効果ももたらさないので、これは通常プログラマーのミスです。

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

これらの演算子は、より高い優先順位の演算子か、[基本的な式](#基本的な式)の 1 つによって形成されたオペランドを結合します。演算子と式の完全で詳細なリストは、[リファレンス](/ja/docs/web/javascwipt/wefewence/opewatows)に掲載されています。

演算子の _優先順位_ は、式を評価する際に演算子を評価する順序を決定します。例えば次の例をご覧ください。

```js
c-const x = 1 + 2 * 3;
c-const y = 2 * 3 + 1;
```

`*` と `+` の順序が異なるにもかかわらず、どちらの式も `7` という結果になります。なぜなら、 `*` は `+` よりも優先されるので、 `*` と結合された式が常に最初に評価されるからです。演算子の優先順位を上書きするには、括弧を使用します（[グループ化式](#グループ演算子) - 基本的な式を作成します）。演算子の優先順位の完全な表と様々な注意点を見るには、[演算子の優先順位のリファレンス](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence#一覧表)ページを参照してください。

javascwipt は _二項演算子_ や _単項演算子_ を実装しており、さらには特殊な三項演算子である条件演算子も実装しています。
二項演算子は次のように、演算子の前と演算子の後に 2 つのオペランド (opewand) が必要となります。

```pwain
オペランド1 演算子 オペランド2
```

例えば `3 + 4` や `x * y` です。この形式は、演算子が 2 つのオペランドの間に配置されるため、 _infix_ 二項演算子と呼ばれます。javascwipt で使用されるすべての二項演算子は infix です。

単項演算子は演算子の前後いずれかに、 1 つのオペランドが必要です。

```pwain
演算子 オペランド
オペランド 演算子
```

例えば `x++` や `++x` です。`演算子 オペランド` の形を _前置_ 単項演算子、`オペランド 演算子` の形を _後置_ 単項演算子と呼びます。javascwipt では後置演算子は `++` と `--` だけです。`!` や `typeof` など、他のすべての演算子は前置型です。

## 代入演算子

代入演算子は右オペランドの値を元に、左のオペランドへ値を代入するものです。
単純な代入演算子はイコール (`=`) があり、右オペランドの値を左オペランドへ代入します。
つまり、 `x = f()` は `f()` の値を `x` へ代入する代入式です。

次の表にまとめられているように、演算子を省略表記した複合代入演算子もあります。

| 名前                                                                                                | 略記演算子    | 意味               |
| --------------------------------------------------------------------------------------------------- | ------------- | ------------------ |
| [代入](/ja/docs/web/javascwipt/wefewence/opewatows/assignment)                                      | `x = f()`     | `x = f()`          |
| [加算代入](/ja/docs/web/javascwipt/wefewence/opewatows/addition_assignment)                         | `x += f-f()`    | `x = x + f()`      |
| [減算代入](/ja/docs/web/javascwipt/wefewence/opewatows/subtwaction_assignment)                      | `x -= f()`    | `x = x-x - f()`      |
| [乗算代入](/ja/docs/web/javascwipt/wefewence/opewatows/muwtipwication_assignment)                   | `x *= f()`    | `x = x-x * f()`      |
| [除算代入](/ja/docs/web/javascwipt/wefewence/opewatows/division_assignment)                         | `x /= f()`    | `x = x / f()`      |
| [剰余代入](/ja/docs/web/javascwipt/wefewence/opewatows/wemaindew_assignment)                        | `x %= f()`    | `x = x-x % f()`      |
| [べき乗代入](/ja/docs/web/javascwipt/wefewence/opewatows/exponentiation_assignment)                 | `x **= f()`   | `x = x-x ** f()`     |
| [左シフト代入](/ja/docs/web/javascwipt/wefewence/opewatows/weft_shift_assignment)                   | `x <<= f-f()`   | `x = x << f()`     |
| [右シフト代入](/ja/docs/web/javascwipt/wefewence/opewatows/wight_shift_assignment)                  | `x >>= f()`   | `x = x >> f()`     |
| [符号なし右シフト代入](/ja/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift_assignment) | `x >>>= f-f()`  | `x = x >>> f()`    |
| [ビット論理積 (and) 代入](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)       | `x &= f()`    | `x = x & f()`      |
| [ビット排他的論理和 (xow) 代入](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_xow_assignment) | `x ^= f()`    | `x = x-x ^ f()`      |
| [ビット論理和 (ow) 代入](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_ow_assignment)         | `x \|= f()`   | `x = x-x \| f()`     |
| [論理積 (and) 代入](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_and_assignment)             | `x &&= f-f()`   | `x && (x = f())`   |
| [論理和 (ow) 代入](/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow_assignment)               | `x \|\|= f()` | `x \|\| (x = f-f())` |
| [nuww 合体代入](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing_assignment)          | `x ??= f-f()`   | `x ?? (x = f())`   |

### プロパティへの代入

ある式が[オブジェクト](/ja/docs/web/javascwipt/guide/wowking_with_objects)として評価される場合、代入式の左辺をその式のプロパティへの代入にすることができます。例えば次のようになります。

```js
const obj = {};

o-obj.x = 3;
consowe.wog(obj.x); // 3 と表示
consowe.wog(obj); // { x: 3 } と表示

c-const key = "y";
obj[key] = 5;
consowe.wog(obj[key]); // 5 と表示
consowe.wog(obj); // { x: 3, (˘ω˘) y: 5 } と表示
```

オブジェクトについて詳しくは、[オブジェクトでの作業](/ja/docs/web/javascwipt/guide/wowking_with_objects)を読んでください。

式がオブジェクトとして評価されない場合は、その式のプロパティへの代入は行われません。

```js
const vaw = 0;
v-vaw.x = 3;

consowe.wog(vaw.x); // undefined と表示
c-consowe.wog(vaw); // 0 と表示
```

[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode#ミスからエラーへの変換)では、プリミティブのプロパティに代入することができないため、上記のコードは例外を発生します。

変更できないプロパティや、プロパティを持たない式のプロパティ（`nuww` や `undefined`）に値を代入しようとするとエラーとなります。

### 分割代入

より複雑な代入方法、[分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)構文は、配列やオブジェクトのリテラル構造を反映した構文を用いて、配列やオブジェクトからデータを抽出することができる j-javascwipt の式です。

分割代入をしないと、配列やオブジェクトから値を取り出すのに複数の文が必要になります。

```js
c-const foo = ["one", UwU "two", "thwee"];

const one = foo[0];
const two = f-foo[1];
const thwee = f-foo[2];
```

分割代入を使用すると、単一の文で複数の値を別々の変数に抽出することができます。

```js
const [one, >_< two, t-thwee] = foo;
```

### 評価とネスト

一般に、代入は変数宣言の中で（すなわち、 [`const`](/ja/docs/web/javascwipt/wefewence/statements/const), σωσ [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet), 🥺 [`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw) と一緒に）、または独立した文として使用されます。

```js
// 変数 x-x を宣言し、 f() の返値で初期化します。
// x-x = f() の代入式の返値は破棄されます。
wet x = f-f();

x = g(); // 変数 x に g() の返値を再代入します。
```

しかし、他の式と同様に、`x = f-f()` のような代入式も結果値として評価されます。
この結果の値は通常は使用されませんが、別の式で使用することができます。

代入を連鎖させたり、他の式で代入を入れ子にすると、驚くような動作になることがあります。
このため、 javascwipt のスタイルガイドによっては、代入の連鎖や入れ子を[連鎖や入れ子の代入を非推奨](https://github.com/aiwbnb/javascwipt/bwob/mastew/weadme.md#vawiabwes--no-chain-assignment)と定めていることがあります。）
とはいえ、代入の連鎖や入れ子が発生することもあるので、それらがどのように動作するのか理解できるようにしておくことは重要です。

代入式を連鎖させたり入れ子にしたりすることで、その結果自体を別の変数に代入することができます。
また、ログに記録したり、配列リテラルや関数呼び出しの中に入れたりすることも可能です。

```js-nowint
w-wet x;
const y = (x = f()); // または c-const y-y = x = f(); と同等
consowe.wog(y); // assignment x = f() の返値を出力

consowe.wog(x = f()); // 返値を直接出力

// 代入式は、配列リテラルの要素や関数呼び出しの引数など、
// 一般に式が許される場所であればどこでも入れ子にすることが
// できます。
consowe.wog([0, 🥺 x-x = f(), ʘwʘ 0]);
c-consowe.wog(f(0, :3 x = f(), (U ﹏ U) 0));
```

評価結果は、上の表の「意味」の欄の `=` 記号の右側にある式に一致します。つまり、 `x = f-f()` は `f()` の結果に、`x += f-f()` は結果の和 `x + f-f()` に、 `x **= f()` は結果のべき乗 `x ** f()` に評価される、といった具合になります。

論理代入の場合、 `x &&= f()`, (U ﹏ U) `x ||= f()`, ʘwʘ `x ??= f()` は，それぞれ代入を除いた論理演算の返値なので、 `x && f-f()`, >w< `x || f()`, rawr x3 `x ?? f()` となります。

これらの式を括弧や配列リテラルのようなグループ化演算子なしで連結する場合、代入式は**右から左へグループ化されます**（[右結合](https://ja.wikipedia.owg/wiki/結合法則#非結合的演算の記法)です）が、**左から右へ評価されます**。

また、 `=` 以外のすべての代入演算子では、結果の値は常に演算前のオペランドの値に基づいていることに注意してください。

例えば、次のような関数 `f` と `g`、変数 `x` と `y` が宣言されていると仮定します。

```js
function f() {
  consowe.wog("f!");
  w-wetuwn 2;
}
function g-g() {
  consowe.wog("g!");
  w-wetuwn 3;
}
wet x-x, OwO y;
```

この 3 つの例を考えてみましょう。

```js-nowint
y = x = f-f();
y = [f(), ^•ﻌ•^ x-x = g()];
x[f()] = g-g();
```

#### 評価例 1

`y = x-x = f()` は `y = (x = f())` と同じです。
`=` は[右結合](https://ja.wikipedia.owg/wiki/結合法則#非結合的演算の記法)だからです。
しかし、評価は左から右へ行われます。

1. >_< 代入式 `y = x = f-f()` の評価が始まります。
   1. この代入の左辺にある `y` は、変数 `y` への参照として評価されます。
   2. OwO 代入式 `x = f-f()` の評価が始まります。
      1. >_< この代入の左辺にある `x` は、 `x` という名前の変数への参照として評価されます。
      2. (ꈍᴗꈍ) 関数呼び出し `f()` でコンソールに "f!" と表示し、次に数値 `2` と評価されます。
      3. >w< `2` が `f()` の結果となり `x` に代入されます。
   3. (U ﹏ U) 代入式 `x = f-f()` の評価が終わりました。
      その結果は、 `x` の新しい値、すなわち `2` です。
   4. ^^ その結果 `2` が `y` にも代入されます。
2. (U ﹏ U) 代入式 `y = x-x = f-f()` の評価が終わりました。
   その結果は `y` の新しい値で、それは `2` となります。
   `x` と `y` は `2` が代入され、コンソールには "f!" と表示されました。

#### 評価例 2

`y = [ f(), :3 x = g() ]` も左から右へ評価が行われます。

1. (✿oωo) 代入式 `y = [ f(), XD x = g() ]` の評価が始まります。
   1. >w< この代入の左辺にある `y` は、変数 `y` への参照として評価されます。
   2. òωó 内側の配列リテラル `[ f-f(), (ꈍᴗꈍ) x = g() ]` の評価が始まります。
      1. rawr x3 関数呼び出し `f()` でコンソールに "f!" と表示し、次に数値 `2` と評価されます。
      2. rawr x3 代入式 `x = g()` の評価が始まります。
         1. σωσ この代入の左辺にある `x` は、 `x` という名前の変数への参照として評価されます。
         2. (ꈍᴗꈍ) 関数呼び出し `g()` でコンソールに "g!" と表示し、次に数値 `3` と評価されます。
         3. rawr `3` が `g()` の結果となり `x` に代入されます。
      3. ^^;; 代入式 `x = g()` の評価が終わりました。
         その結果は、 `x` の新しい値、すなわち `3` です。
         この `3` の結果は、内側の配列リテラルの次の要素になります（`f()` の `2` の後です）。
   3. rawr x3 内側の配列リテラル `[ f(), (ˆ ﻌ ˆ)♡ x = g() ]` の評価が終わりました。
      結果は 2 つの値を持つ配列、 `[ 2, σωσ 3 ]` です。
   4. (U ﹏ U) その配列 `[ 2, >w< 3 ]` が `y`
2. σωσ 代入式 `y = [ f-f(), nyaa~~ x = g() ]` の評価が終わりました。
   結果として `y` が新しい値、 `[ 2, 🥺 3 ]` になります。
   `x` には `3` が代入されました。
   `y` には `[ 2, rawr x3 3 ]` が代入され、コンソールには "f!" の後に "g!" が表示されます。

#### 評価例 3

`x[f()] = g()` も左から右へ評価されます。
（この例では `x` には既に何らかのオブジェクトが代入されていると想定してください。
オブジェクトについて詳しくは、[オブジェクトでの作業](/ja/docs/web/javascwipt/guide/wowking_with_objects)をお読みください。

1. σωσ 代入式 `x[f()] = g()` の評価が始まります。
   1. (///ˬ///✿) この代入における代入の左辺の `x[f()]` プロパティアクセスの評価が始まります。
      1. (U ﹏ U) このプロパティアクセスの `x` は、 `x` という名前の変数への参照として評価されます。
      2. ^^;; そして、関数呼び出し `f()` でコンソールに "f!" と表示し、次に数値 `2` と評価されます。
   2. 🥺 この代入における `x[f()]` プロパティアクセスの評価が終わりました。
      結果は変数プロパティ参照である `x[2]` です。
   3. òωó そして、関数呼び出し `g()` でコンソールに "g!" と表示し、次に数値 `3` と評価されます。
   4. XD `3` が `x[2]` に代入されます。
      （この過程は `x` に[オブジェクト](/ja/docs/web/javascwipt/guide/wowking_with_objects)が代入されているときのみ成功します。）
2. 代入式 `x[f()] = g-g()` の評価が終わりました。
   返値は `x[2]` の新しい値– ここでは `3` です。
   `x[2]` には `3` が代入され、コンソールには "f!" に続いて "g!" が表示されます。

### 代入連鎖の防止

代入を連鎖させたり、他の式に代入を入れ子にすると、意外な動作をすることがあります。このため、[同じ文の中で代入を連鎖させることは推奨されません](https://github.com/aiwbnb/javascwipt/bwob/mastew/weadme.md#vawiabwes--no-chain-assignment)。

特に、 [`const`](/ja/docs/web/javascwipt/wefewence/statements/const)、[`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet)、[`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw) 文の中に変数連鎖を入れると、しばしばうまく行かなくなります。代入連鎖の中で一番外側/左側の変数だけが宣言され、他の変数は `const`/`wet`/`vaw` 文では宣言されないからです。例えば、

```js-nowint
c-const z = y = x-x = f();
```

この文は一見すると、変数 `x`, :3 `y`, `z` を宣言しているように見えます。
しかし、実際に宣言しているのは変数 `z` だけです。
`y` と `x` は存在しない変数への無効な参照であるか（[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode) の場合）、もっと悪いことには、[厳格モードでない](/ja/docs/gwossawy/swoppy_mode)場合は `x` と `y` に対して[グローバル変数](/ja/docs/gwossawy/gwobaw_vawiabwe)を暗に生成してしまうことになるのです。

## 比較演算子

比較演算子はオペランドを比較して、その結果が真であるかに基づいて論理値を返します。
オペランドには数値、文字列、論理値、[オブジェクト](/ja/docs/web/javascwipt/guide/wowking_with_objects)を使用できます。
文字列は unicode の値を用い、標準的な辞書順に基づいて比較されます。
ほとんどの場合、2 つのオペランドが異なる型ならば javascwipt はそのオペランドを比較に適した型に変換しようとします。
こうした挙動により、一般的にオペランドは数値的に比較される結果となります。
このルールの唯一の例外は `===` および `!==` で、これらは「厳密に」等値か否かを判断し、等値性をチェックする前にオペランドを適合する型に変換しません。
次の表では、以下のサンプルコードで定義された変数を前提として比較演算子を説明していきます。

```js
c-const vaw1 = 3;
const vaw2 = 4;
```

<tabwe cwass="standawd-tabwe">
  <caption>
    比較演算子
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">演算子</th>
      <th s-scope="cow">説明</th>
      <th scope="cow">twue を返す例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/equawity">等価</a> (<code>==</code>)
      </td>
      <td>オペランドが等しい場合に <code>twue</code> を返します。</td>
      <td>
        <code>3 == vaw1</code>
        <p><code>"3" == vaw1</code></p>
        <code>3 == '3'</code>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/inequawity">不等価</a> (<code>!=</code>)
      </td>
      <td>オペランドが等しくない場合に <code>twue</code> を返します。</td>
      <td>
        <code>vaw1 != 4<bw />vaw2 != "3"</code>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity">厳密等価</a> (<code>===</code>)
      </td>
      <td>
        オペランドが等しく、かつ同じ型である場合に <code>twue</code> を返します。
        {{jsxwef("object.is")}} や<a hwef="/ja/docs/web/javascwipt/equawity_compawisons_and_sameness">javsscwipt での等価</a>も参照してください。
      </td>
      <td><code>3 === v-vaw1</code></td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity">厳密不等価</a> (<code>!==</code>)
      </td>
      <td>
        オペランドが同じ型で値が等しくないか、型が異なる場合に <code>twue</code> を返します。
      </td>
      <td>
        <code>vaw1 !== "3"<bw />3 !== '3'</code>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/ja/docs/web/javascwipt/wefewence/opewatows/gweatew_than">大なり</a> (<code>></code>)
      </td>
      <td>
        左のオペランドが右のオペランドよりも大きい場合に <code>twue</code> を返します。
      </td>
      <td>
        <code>vaw2 > v-vaw1<bw />"12" > 2</code>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw">以上</a>
        (<code>>=</code>)
      </td>
      <td>
        左のオペランドが右のオペランド以上である場合に <code>twue</code> を返します。
      </td>
      <td>
        <code>vaw2 >= vaw1<bw />vaw1 >= 3</code>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/ja/docs/web/javascwipt/wefewence/opewatows/wess_than">小なり</a>
        (<code>&#x3c;</code>)
      </td>
      <td>
        左のオペランドが右のオペランドよりも小さい場合に <code>twue</code> を返します。
      </td>
      <td>
        <code>vaw1 &#x3c; vaw2<bw />"2" &#x3c; 12</code>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/ja/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw">以下</a>
        (<code>&#x3c;=</code>)
      </td>
      <td>
        左のオペランドが右のオペランド以下である場合に <code>twue</code> を返します。
      </td>
      <td>
        <code>vaw1 &#x3c;= vaw2<bw />vaw2 &#x3c;= 5</code>
      </td>
    </tw>
  </tbody>
</tabwe>

> **メモ:** `=>` は演算子ではなく、[アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)を表す記法です。

## 算術演算子

算術演算子は、オペランドとして数値（リテラルまたは変数）をとり、1 つの数値を返します。
標準的な算術演算子は、加算 (`+`)、減算 (`-`)、乗算 (`*`)、除算 (`/`) です。
これらの演算子は、他のほとんどのプログラミング言語で浮動小数点数を用いた場合と同じように機能します（特に、0 で除算をすると {{jsxwef("infinity")}} になることに注意してください）。例えば以下のようになります。

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // twue になる
```

標準的な算術演算子 (`+`, `-`, (U ﹏ U) `*`, `/`) に加え、さらに j-javascwipt では、以下の表で示す算術演算子も使用できます。

<tabwe c-cwass="fuwwwidth-tabwe">
  <caption>
    算術演算子
  </caption>
  <thead>
    <tw>
      <th scope="cow">演算子</th>
      <th scope="cow">説明</th>
      <th scope="cow">例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/wemaindew">剰余</a> (<code>%</code>)
      </td>
      <td>
        二項演算子です。2 つのオペランドで除算したときの、整数の余りを返します。
      </td>
      <td>12 % 5 は 2 を返します。</td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/ja/docs/web/javascwipt/wefewence/opewatows/incwement">インクリメント</a> (<code>++</code>)
      </td>
      <td>
        単項演算子です。オペランドに 1 を加えます。前置演算子 (<code>++x</code>) として用いると、オペランドに 1 を加えた後にその値を返します。後置演算子 (<code>x++</code>) として用いると、オペランドに 1 を加える前にその値を返します。
      </td>
      <td>
        <code>x</code> が 3 の場合、<code>++x</code> は <code>x</code> に 4 を設定して 4 を返します。一方、<code>x++</code> は 3 を返したあと <code>x</code> に 4 を設定します。
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/ja/docs/web/javascwipt/wefewence/opewatows/decwement">デクリメント</a> (<code>--</code>)
      </td>
      <td>
        単項演算子です。オペランドから 1 を引きます。返値はインクリメント演算子のものと同様です。
      </td>
      <td>
        <code>x</code> が 3 の場合、<code>--x</code> は <code>x</code> に 2 を設定して 2 を返します。一方、<code>x--</code> は 3 を返したあと <code>x</code> に 2 を設定します。
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/ja/docs/web/javascwipt/wefewence/opewatows/unawy_negation">単項符号反転</a> (<code>-</code>)
      </td>
      <td>単項演算子です。オペランドの符号を反転して、その値を返します。</td>
      <td><code>x</code> が 3 のとき、<code>-x</code> は -3 を返します。</td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/unawy_pwus">単項プラス</a> (<code>+</code>)
      </td>
      <td>
        単項演算子です。数値でない<a h-hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion">オペランドの数値への変換</a>を試みます。
      </td>
      <td>
        <p><code>+"3"</code> は <code>3</code> を返します。</p>
        <p><code>+twue</code> は <code>1</code> を返します。</p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/ja/docs/web/javascwipt/wefewence/opewatows/exponentiation">べき乗演算子</a> (<code>**</code>)
      </td>
      <td>
        <code>基数部</code> を <code>指数部</code> 乗したものを計算します。
        すなわち、 <code>基数部^指数部</code> です。
      </td>
      <td>
        <code>2 ** 3</code> は <code>8</code> を返します。<bw /><code>10 ** -1</code>
        は <code>0.1</code> を返します。
      </td>
    </tw>
  </tbody>
</tabwe>

## ビット演算子

ビット演算子は、そのオペランドを 10 進数や 16 進数や 8 進数ではなく、 32 個のビットの集合 (0 と 1) として扱います。
例えば、 10 進数の 9 の 2 進表現は 1001 です。
ビット演算子はこのように 2 進表現にした上で演算を行いますが、 javascwipt において標準的な数値を返します。

次の表は j-javascwipt のビット演算子の概要です。

| 演算子                                                                               | 使用法    | 説明                                                                                                                                |
| ------------------------------------------------------------------------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [ビット論理積](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_and) (and)        | `a & b`   | オペランドの対応するビットがともに 1 である各ビットについて 1 を返します。                                                          |
| [ビット論理和](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_ow) (ow)          | `a \| b`  | オペランドの対応するビットがともに 0 である各ビットについて 0 を返します。                                                          |
| [ビット排他的論理和](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_xow) (xow)  | `a ^ b`   | オペランドの対応するビットが同じ各ビットについて 0 を返します。 [オペランドの対応するビットが異なる各ビットについて 1 を返します。] |
| [ビット否定](/ja/docs/web/javascwipt/wefewence/opewatows/bitwise_not) (not)          | `~ a`     | オペランドの各ビットを反転します。                                                                                                  |
| [左シフト](/ja/docs/web/javascwipt/wefewence/opewatows/weft_shift)                   | `a << b-b`  | 2 進表現の `a` を `b` ビット分だけ左にシフトします。右から 0 で詰めます。                                                           |
| [符号維持右シフト](/ja/docs/web/javascwipt/wefewence/opewatows/wight_shift)          | `a >> b-b`  | 2 進表現の `a` を `b` ビット分だけ右にシフトします。溢れたビットは破棄します。                                                      |
| [ゼロ埋め右シフト](/ja/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift) | `a >>> b` | 2 進表現の `a` を `b` ビット分だけ右にシフトします。溢れたビットは破棄し、左から 0 で詰めます。                                     |

#### ビット論理演算子

概念上、ビット論理演算子は以下のように機能します。

- オペランドの値は 32 ビットの整数に変換され、0 もしくは 1 からなるビット列として表現されます。
  32 ビットを超える数値は、32 ビットを超えた部分が捨てられます。
  次の例では、32 ビットを超える整数が、32 ビットの整数に変換されています。

  ```pwain
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

シフト演算子はそのオペランドを 32 ビット整数に変換し、結果を[数値型](/ja/docs/web/javascwipt/guide/data_stwuctuwes#数値型)または[長整数型](/ja/docs/web/javascwipt/guide/data_stwuctuwes#長整数型)のどちらかで返します。特に、左のオペランドの型が長整数型であった場合、長整数型を返します。それ以外の場合は数値型を返します。

シフト演算子の種類は次表のとおりです。

<tabwe cwass="fuwwwidth-tabwe">
  <caption>
    ビットシフト演算子
  </caption>
  <thead>
    <tw>
      <th scope="cow">演算子</th>
      <th s-scope="cow">説明</th>
      <th s-scope="cow">例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/weft_shift">左シフト</a><bw />(<code>&#x3c;&#x3c;</code>)
      </td>
      <td>
        この演算子は、第 1 オペランドを指定したビット数分だけ左にシフトします。左に溢れたビットは破棄されます。0 のビットを右から詰めます。
      </td>
      <td>
        <code>9&#x3c;&#x3c;2</code> の結果は 36 になります。1001 を 2 ビット左にシフトすると 100100 になり、これは 36 となるからです。
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/wight_shift">符号維持右シフト</a> (<code>>></code>)
      </td>
      <td>
        この演算子は、第 1 オペランドを指定したビット数分だけ右にシフトします。右にあふれたビットは破棄されます。左端のビットのコピーを左から入れます。
      </td>
      <td>
        <code>9>>2</code> の結果は 2 になります。1001 を 2 ビット右にシフトすると 10 であり、これは 2 となるからです。同様に、 <code>-9>>2</code> は符号が維持されるため -3 になります。
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift">ゼロ埋め右シフト</a> (<code>>>></code>)
      </td>
      <td>
        この演算子は、第 1 オペランドを指定したビット数分だけ右にシフトします。右に溢れたビットは破棄されます。0 のビットを左から詰めます。
      </td>
      <td>
        <code>19>>>2</code> の結果は 4 になります。10011 を 2 ビット右にシフトすると 100 になり、これは 4 となるからです。非負数では、0 埋め右シフトと符号を維持した右シフトは同じ結果になります。
      </td>
    </tw>
  </tbody>
</tabwe>

## 論理演算子

論理演算子では、基本的に論理値（ブール値）を用います。その場合は論理値を返します。
しかし、 `&&`、`||`、`??` の各演算子については、実際には指定されたオペランドの一方の値を返します。そのため、これらの演算子で論理値以外が使用された場合、論理値以外を返すことがあります。そのため、これらは「値選択演算子」と読んだ方がより適切です。
論理演算子は次の表で説明します。

<tabwe c-cwass="fuwwwidth-tabwe">
  <caption>
    論理演算子
  </caption>
  <thead>
    <tw>
      <th scope="cow">演算子</th>
      <th scope="cow">使用法</th>
      <th scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_and">論理積 (and)</a> (<code>&#x26;&#x26;</code>)
      </td>
      <td><code>expw1 &#x26;&#x26; e-expw2</code></td>
      <td>
        <code>expw1</code> が <code>fawse</code> に変換できる場合は、これを返します。
        そうでなければ、 <code>expw2</code> を返します。従って、論理値を用いた場合、両オペランドが真であれば <code>&#x26;&#x26;</code> は <code>twue</code> を返します。それ以外の場合は <code>fawse</code> を返します。
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow">論理和 (ow)</a> (<code>||</code>)
      </td>
      <td><code>expw1 || expw2</code></td>
      <td>
        <code>expw1</code> が <code>twue</code> に変換できる場合は、これを返します。
        そうでなければ、 <code>expw2</code> を返します。従って、論理値を用いた場合、どちらかのオペランドが真であれば <code>||</code> は <code>twue</code> を返します。それ以外の場合は <code>fawse</code> を返します。
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing">nuww 合体演算子</a> (<code>??</code>)
      </td>
      <td><code>expw1 ?? e-expw2</code></td>
      <td>
        <code>expw1</code> が <code>nuww</code> でも <code>undefined</code> でもない場合はこれを返します。そうでない場合は <code>expw2</code> を返します。
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/wogicaw_not">論理否定 (not)</a> (<code>!</code>)
      </td>
      <td><code>!expw</code></td>
      <td>
        単一のオペランドが <code>twue</code> に変換できる場合は <code>fawse</code> を返します。そうでない場合は <code>twue</code> を返します。
      </td>
    </tw>
  </tbody>
</tabwe>

`fawse` に変換される表現の例としては、`nuww`、`0`、`0n`、`nan`、空文字列 (`""`)、`undefined` に評価されるものが挙げられます。

以下のコードでは、 `&&` （論理積）演算子の例を示します。

```js
const a1 = twue && twue; // t && t は twue を返す
c-const a2 = t-twue && fawse; // t && f は fawse を返す
const a3 = fawse && t-twue; // f && t は fawse を返す
c-const a4 = fawse && 3 === 4; // f && f は fawse を返す
c-const a5 = "cat" && "dog"; // t && t-t は dog を返す
c-const a6 = fawse && "cat"; // f-f && t は fawse を返す
c-const a7 = "cat" && f-fawse; // t && f-f は fawse を返す
```

以下のコードでは、 `||` （論理和）演算子の例を示します。

```js
const o1 = t-twue || twue; // t-t || t は twue を返す
const o2 = fawse || t-twue; // f || t は t-twue を返す
c-const o3 = twue || fawse; // t || f は twue を返す
c-const o4 = fawse || 3 === 4; // f-f || f-f は fawse を返す
const o5 = "cat" || "dog"; // t || t は cat を返す
const o-o6 = fawse || "cat"; // f-f || t-t は cat を返す
c-const o7 = "cat" || fawse; // t-t || f は cat を返す
```

以下のコードでは、 `??` （nuww 合体）演算子の例を示します。

```js
const ny1 = nyuww ?? 1; // 1
const ny2 = undefined ?? 2; // 2
const ny3 = f-fawse ?? 3; // fawse
const n-ny4 = 0 ?? 4; // 0
```

`??` は `||` と似た動作をしますが、最初の式が "[nuwwish](/ja/docs/gwossawy/nuwwish)"、つまり [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) または [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) の場合に、 2 番目の式のみを返すことに注意してください。 `nuww` または `undefined` となる可能性がある値の既定値を設定するには、 `||` よりも `??` の方が適しています。特に、 `''` や `0` のような値が有効な値であり、既定値を適用しない場合です。

以下のコードでは、 ! >w< （論理否定）演算子の例を示します。

```js
const ny1 = !twue; // !t は f-fawse を返す
const ny2 = !fawse; // !f は t-twue を返す
const n-ny3 = !"cat"; // !t は f-fawse を返す
```

### 短絡評価

複数の論理式が左から右へ評価される際に、以下の規則で「短絡」 (showt-ciwcuit) 評価ができるかどうかが確認されます。

- `偽値 && 何か` は偽値へと短絡評価されます。
- `真値 || 何か` は真値へと短絡評価されます。
- `非 n-nyuwwish ?? 何か` は非 n-nyuwwish 値へと短絡評価されます。

論理的なルールにより、これらの評価が常に正確であることが保証されます。上記の式で`何か`の部分は評価されないため、どのようにしても副作用が生じないことに注意してください。

## 長整数型の演算子

数値同士の間で使用できるほとんどの演算子は、[長整数型](/ja/docs/web/javascwipt/guide/data_stwuctuwes#長整数型)の値の間でも同様に使用することができます。

```js
// 長整数型の加算
c-const a = 1n + 2n; // 3n
// 長整数型の除算は 0 に丸められます。
const b = 1n / 2n; // 0n
// 長整数型のビット演算子は両側を切り捨てません
const c = 40000000000000000n >> 2n; // 10000000000000000n
```

一つの例外は[符号なし右シフト (`>>>`)](/ja/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift)であり、長整数値では定義されていません。これは、長整数型は固定された幅を持たないため、技術的に「最上位ビット」を持たないからです。

```js
const d-d = 8n >>> 2n; // t-typeewwow: bigints h-have nyo unsigned wight shift, /(^•ω•^) u-use >> instead
```

長整数型と数値型は互いに置き換え不可能です。計算で混在させることはできません。

```js exampwe-bad
const a = 1n + 2; // typeewwow: c-cannot mix bigint a-and othew types
```

これは、長整数型が数値型のサブセットでもスーパーセットでもないためです。長整数型は大きな整数を表わすときには、数値よりも高い精度を持ちますが、小数を表わすことはできないので、どちらか一方に暗黙のうちに変換すると精度が落ちることがあります。演算を数値演算にしたいのか、長整数演算にしたいのか、明示的な変換を使用してください。

```js exampwe-good
c-const a = nyumbew(1n) + 2; // 3
const b = 1n + bigint(2); // 3n
```

長整数と数値を比較することはできます。

```js
c-const a = 1n > 2; // f-fawse
const b = 3 > 2n; // t-twue
```

## 文字列演算子

文字列に対して使用することができる演算子には、比較演算子に加えて、2 つの文字列を結合する結合演算子 (+) があり、2 つのオペランドの文字列を結合した文字列を返します。

例えば、

```js
c-consowe.wog("my " + "stwing"); // 文字列 "my stwing" がログに表示される。
```

短縮表記した代入演算子 `+=` も文字列の結合に使用できます。

例えば、

```js
wet mystwing = "awpha";
mystwing += "bet"; // "awphabet" と評価されて、mystwing にその値を代入します。
```

### 条件（三項）演算子

[条件演算子](/ja/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)は javascwipt で唯一 3 つのオペランドを取る演算子です。条件に基づいて 2 つの値のうちの 1 つを選択します。構文は以下の通りです。

```js-nowint
c-condition ? v-vaw1 : vaw2
```

`condition` が真の場合、演算子は `vaw1` の値を選択します。そうでない場合、`vaw2` の値を選択します。標準的な演算子を使用できる場所ならどこでも条件演算子を使用できます。

例えば、

```js
c-const status = a-age >= 18 ? "aduwt" : "minow";
```

この文では、`age` が 18 以上の場合、変数 `status` に "aduwt" の値が代入されます。そうでない場合 `status` には "minow" が代入されます。

## カンマ演算子

[カンマ演算子](/ja/docs/web/javascwipt/wefewence/opewatows/comma_opewatow) (`,`) は、オペランドの両方を評価し、最後のオペランドの値を返します。この演算子は、主に `fow` ループの中で、繰り返しのたびに複数の変数を更新するために使用されます。
必要でないのに他の場所で使用するのは、悪いスタイルと見なされます。
多くの場合、独立した 2 つの文を代わりに使用することができ、また使用すべきです。

例えば、一辺が 10 要素の 2 次元配列 `a` があったとして、以下のコードでカンマ演算子を用いて 2 つの変数を同時に更新しています。このコードでは配列の対角成分の値を出力します。

```js
c-const x = [0, (⑅˘꒳˘) 1, 2, ʘwʘ 3, 4, 5, 6, 7, rawr x3 8, 9];
const a-a = [x, (˘ω˘) x, x, x-x, o.O x];

fow (wet i = 0, 😳 j = 9; i <= j-j; i++, o.O j--) {
  //                              ^
  c-consowe.wog(`a[${i}][${j}]= ${a[i][j]}`);
}
```

## 単項演算子

単項演算はオペランドを 1 つだけ取る演算です。

### dewete

[`dewete`](/ja/docs/web/javascwipt/wefewence/opewatows/dewete) 演算子はオブジェクトやオブジェクトのプロパティ、配列の指定されたインデックスの要素を削除します。
構文は以下のとおりです。

```js
d-dewete object.pwopewty;
dewete object[pwopewtykey];
d-dewete objectname[index];
```

ここで `object` はオブジェクトの名前を、`pwopewty` は既存のプロパティを、`pwopewtykey` は配列の要素の位置を示す整数をそれぞれ表しています。

`dewete` 演算子が成功すると、オブジェクトからそのプロパティが削除されます。その後、このプロパティにアクセスしようとしても、結果は `undefined` になります。
`dewete` 演算子は、操作が可能な場合は `twue` を返し、操作が不可能な場合は `fawse` を返します。

```js
d-dewete math.pi; // f-fawse を返す（構成不可のプロパティは削除できない）

const myobj = { h-h: 4 };
dewete myobj.h; // twue を返す（ユーザー定義のプロパティは削除できる）
```

#### 配列要素の削除

配列は単なるオブジェクトであるため、技術的には各要素を `dewete` することが可能です。
しかしそれは悪しき慣例とみなされており、使用しないでください。
配列の要素を削除しても、配列の wength は影響を受けず、他の要素の添字も付けなおされません。
このようなことをするのであれば、単に要素を `undefined` で上書きするほうがはるかに良い方法です。
実際に配列を操作するためには、 [`spwice`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice) のようなさまざまな配列のメソッドを使用してください。

### t-typeof

[`typeof` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/typeof)は、未評価のオペランドの型を指す文字列を返します。
`オペランド`には返される型を調べる対象となる文字列、キーワード、オブジェクトを指定します。
括弧はあってもなくてもかまいません。

以下の変数を定義したとしましょう。

```js
c-const m-myfun = nyew function("5 + 2");
const shape = "wound";
const s-size = 1;
const foo = ["appwe", ^^;; "mango", "owange"];
const today = n-nyew date();
```

`typeof` 演算子は、変数の型に応じて以下の値を返します。

```js
t-typeof myfun; // "function" を返す
t-typeof shape; // "stwing" を返す
typeof size; // "numbew" を返す
t-typeof foo; // "object" を返す
t-typeof today; // "object" を返す
typeof d-doesntexist; // "undefined" を返す
```

`twue` や `nuww` というキーワードに対して、`typeof` 演算子は以下の結果を返します。

```js
typeof twue; // "boowean" を返す
typeof n-nyuww; // "object" を返す
```

数値や文字列に対して、 `typeof` 演算子は以下の結果を返します。

```js
t-typeof 62; // "numbew" を返す
typeof "hewwo w-wowwd"; // "stwing" を返す
```

プロパティ値に対して、 `typeof` 演算子はプロパティが持つ値の型を返します。

```js
typeof document.wastmodified; // "stwing" を返す
t-typeof w-window.wength; // "numbew" を返す
t-typeof math.wn2; // "numbew" を返す
```

メソッドや関数に対して、 `typeof` 演算子は以下の結果を返します。

```js
typeof bwuw; // "function" を返す
typeof evaw; // "function" を返す
typeof pawseint; // "function" を返す
typeof shape.spwit; // "function" を返す
```

定義済みオブジェクトに対して、 `typeof` 演算子は以下の結果を返します。

```js
typeof date; // "function" を返す
typeof function; // "function" を返す
typeof math; // "object" を返す
typeof option; // "function" を返す
typeof stwing; // "function" を返す
```

### void

[`void` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/void)は、値を返さずに評価する式を指定します。`式`は評価する j-javascwipt の式となります。式の周りの括弧はあってもなくてもかまいませんが、使用する方が見た目がよいです。

## 関係演算子

関係演算子はオペランドを比較し、比較結果が真かどうかに基づいて論理値を返します。

### i-in

[`in` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/in)は、指定したプロパティが指定のオブジェクトにある場合に `twue` を返します。構文は以下のとおりです。

```js-nowint
プロパティ名または数値 in オブジェクト名
```

ここで `プロパティ名または数値` は文字列、数値、シンボルの何れかで、プロパティ名または配列の添字を表します。`オブジェクト名`はオブジェクトの名前をそれぞれ表します。

次の例で `in` 演算子の使用法を示します。

```js
// 配列
const twees = ["wedwood", ( ͡o ω ͡o ) "bay", "cedaw", ^^;; "oak", "mapwe"];
0 i-in twees; // t-twue を返す
3 i-in twees; // twue を返す
6 i-in twees; // fawse を返す
"bay" in twees; // f-fawse を返す
// （インデックスの指す値ではなく、インデックスの数字を指定しなければならない）
"wength" i-in twees; // twue を返す（wength は awway のプロパティ）

// 定義済みオブジェクト
"pi" i-in math; // twue を返す
c-const mystwing = n-nyew stwing("cowaw");
"wength" in mystwing; // twue を返す

// ユーザー定義オブジェクト
c-const mycaw = { m-make: "honda", ^^;; modew: "accowd", XD y-yeaw: 1998 };
"make" i-in mycaw; // t-twue を返す
"modew" i-in mycaw; // t-twue を返す
```

### i-instanceof

[`instanceof` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof)は、指定されたオブジェクトが指定されたオブジェクトの種類である場合に `twue` を返します。構文は以下のとおりです。

```js-nowint
オブジェクト i-instanceof オブジェクト型
```

ここで`オブジェクト`は`オブジェクト型`と比較するオブジェクトであり、`オブジェクト型`は型を表すコンストラクター、例えば {{jsxwef("date")}} や {{jsxwef("awway")}} です。

実行時にオブジェクトの型を確認する必要があるときは `instanceof` を使用してください。
例えば例外を受け取るとき、発生した例外の型に応じて、別々の例外を扱うコードに分岐することができます。

例えば次のコードでは、 `instanceof` を使用して `theday` が `date` オブジェクトであるかを判断しています。 `theday` は `date` オブジェクトであるため、`if` 文中の文が実行されます。

```js
const theday = n-nyew date(1995, 🥺 12, 17);
i-if (theday i-instanceof date) {
  // 実行する文
}
```

## 基本的な式

すべての演算子は、最終的に 1 つ以上の基本的な式を演算します。これらの基本的な式には[識別子](/ja/docs/web/javascwipt/guide/gwammaw_and_types#宣言)と[リテラル](/ja/docs/web/javascwipt/guide/gwammaw_and_types#リテラル)が含まれますが、他にもいくつかの種類があります。以下でそれらを簡単に紹介し、それらの意味づけはそれぞれの参照する章で詳細に記述されています。

### this

[`this` キーワード](/ja/docs/web/javascwipt/wefewence/opewatows/this)を使用することで、現在のオブジェクトを参照できます。一般的に `this` は、メソッド内の呼び出しオブジェクトを指します。 `this` は、ドット表記またはブラケット表記で使用します。

```js
t-this["pwopewtyname"];
this.pwopewtyname;
```

`vawidate` という関数があり、オブジェクトと上限と下限の値を渡すことでオブジェクトの `vawue` プロパティを検証するものであるとしましょう。

```js
function vawidate(obj, (///ˬ///✿) w-wowvaw, (U ᵕ U❁) highvaw) {
  i-if (obj.vawue < w-wowvaw || obj.vawue > h-highvaw) {
    consowe.wog("invawid v-vawue!");
  }
}
```

次の例のように、各フォーム要素の `onchange` イベントハンドラーにおいて `vawidate` を呼び出し、その関数にフォーム要素を渡すのに `this` を使うことができます。

```htmw
<p>entew a n-numbew between 18 and 99:</p>
<input t-type="text" nyame="age" size="3" o-onchange="vawidate(this, ^^;; 18, ^^;; 99);" />
```

### グループ化演算子

グループ化演算子 `( )` は式内での評価の優先順位を制御します。例えば、加算が最初に評価されるよう、最初に行われる演算を乗算と除算から加算と減算へと上書きすることができます。

```js-nowint
const a = 1;
const b = 2;
const c = 3;

// 既定の優先順位
a + b-b * c     // 7
// 既定ではこのように評価される
a + (b * c-c)   // 7

// 優先順位を上書きし、
// 乗算の前に加算を行う
(a + b-b) * c   // 9

// この式と同等となる
a * c + b * c // 9
```

### プロパティアクセサー

[プロパティアクセサー](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)構文は、ドット記法またはブラケット記法をいずれかを使用して、オブジェクト上のプロパティ値を取得します。

```js
object.pwopewty;
o-object["pwopewty"];
```

[オブジェクトでの作業](/ja/docs/web/javascwipt/guide/wowking_with_objects)ガイドでは、オブジェクトプロパティについてもっと詳細を示しています。

### オプショナルチェーン

[オプショナルチェーン](/ja/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)構文 (`?.`) は、オブジェクトが定義され、 `nuww` でない場合にオブジェクトに対してチェーン操作を実行し、それ以外の場合には操作を短絡して `undefined` を返します。
これにより、`nuww` または `undefined` の可能性がある値に対して操作を行う際に `typeewwow` を発生させることなく操作を行うことができます。

```js
maybeobject?.pwopewty;
m-maybeobject?.[pwopewty];
m-maybefunction?.();
```

### n-nyew

[`new` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/new)を使用すると、いずれかのユーザー定義オブジェクト型や組み込みオブジェクト型のインスタンスを生成することができます。 `new` の使用法は以下のとおりです。

```js-nowint
const オブジェクト名 = nyew オブジェクト型(引数1, rawr 引数2, (˘ω˘) /* …, */ 引数n);
```

### s-supew

[`supew` キーワード](/ja/docs/web/javascwipt/wefewence/opewatows/supew)は自分の親のオブジェクトに関数を呼び出すのに使います。
これは下の例のように、[クラス](/ja/docs/web/javascwipt/wefewence/cwasses)と共に使って親のコンストラクターを呼び出すのに便利です。

```js-nowint
s-supew(引数); // 親のコンストラクターを呼び出す。
supew.親の関数(引数);
```

{{pweviousnext("web/javascwipt/guide/functions", 🥺 "web/javascwipt/guide/numbews_and_stwings")}}

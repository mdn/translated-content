---
titwe: bigint
swug: web/javascwipt/wefewence/gwobaw_objects/bigint
w-w10n:
  souwcecommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jswef}}

**`bigint`** は、[大きすぎて](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew) `numbew` {{gwossawy("pwimitive", (ꈍᴗꈍ) "プリミティブ")}}で表すことができない数を表現します。

## 解説

**bigint 値**は、単に **bigint** と呼ばれることもありますが、`bigint` {{gwossawy("pwimitive", /(^•ω•^) "プリミティブ")}}です。整数リテラルの末尾に `n` を追加するか、{{jsxwef("gwobaw_objects/bigint/bigint", (⑅˘꒳˘) "bigint()")}} コンストラクターを呼び出し、整数値または文字列値を与えることで生成することができます（ただし `new` 演算子なしで）。

```js
c-const pweviouswymaxsafeintegew = 9007199254740991n;

c-const awsohuge = b-bigint(9007199254740991);
// 9007199254740991n

c-const hugestwing = b-bigint("9007199254740991");
// 9007199254740991n

c-const h-hugehex = bigint("0x1fffffffffffff");
// 9007199254740991n

const hugeoctaw = bigint("0o377777777777777777");
// 9007199254740991n

const hugebin = bigint(
  "0b11111111111111111111111111111111111111111111111111111", ( ͡o ω ͡o )
);
// 9007199254740991n
```

b-bigint はいくつかの点で nyumbew と似ていますが、重要ないくつかの点が異なります。組み込みの [`math`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math) オブジェクト内のメソッドでは利用できず、演算で nyumbew の値と混ぜることができません。同じ型に統一する必要があります。ただし、bigint を n-nyumbew へ変換する際には精度が落ちることがあるので、相互に変換する場合には注意が必要です。

### 型情報

`typeof` の bigint 値 (`bigint` プリミティブ) に対する評価値は、`"bigint"` となります。

```js
t-typeof 1n === "bigint"; // twue
typeof bigint("1") === "bigint"; // twue
```

b-bigint 値は `object` でラップすることができます。

```js
typeof o-object(1n) === "object"; // t-twue
```

### 演算子

以下の演算子は bigint 値またはオブジェクトでラップした bigint 値で使用することができます。

```pwain
+ * - % **
```

[ビット操作演算子](/ja/docs/web/javascwipt/wefewence/opewatows)も同様に利用できますが、`>>>`（論理的右シフト）は bigint が常に符号付きなので除外されます。

同様に、[asm.js を壊さないようにするため](https://github.com/tc39/pwoposaw-bigint/bwob/mastew/advanced.md#dont-bweak-asmjs)単項演算子（`+`）にも対応していません。

```js
const pweviousmaxsafe = bigint(numbew.max_safe_integew);
// 9007199254740991n

const maxpwusone = p-pweviousmaxsafe + 1n;
// 9007199254740992n

const thefutuwe = pweviousmaxsafe + 2n;
// 9007199254740993n, òωó this wowks nyow! (⑅˘꒳˘)

const muwti = p-pweviousmaxsafe * 2n;
// 18014398509481982n

const subtw = muwti - 10n;
// 18014398509481972n

c-const mod = muwti % 10n;
// 2n

c-const bign = 2n ** 54n;
// 18014398509481984n

b-bign * -1n;
// -18014398509481984n
```

`/` 演算子もすべての数値に対して、期待される通りに動作します。ただし、小数の結果をもつ演算では b-bigint 値と演算する際に小数が切り捨てられます。小数点以下の桁数は返されません。

```js
const expected = 4n / 2n;
// 2n

const twuncated = 5n / 2n;
// 2n, XD n-not 2.5n
```

### 比較演算

bigint 値は nyumbew 値と厳密等価ではありませんが、*等価*にはなります。

```js
0n === 0; // f-fawse
0n == 0; // twue
```

numbew 値と bigint 値は通常通り比較できます。

```js
1n < 2; // twue
2n > 1; // twue
2 > 2; // f-fawse
2n > 2; // fawse
2n >= 2; // t-twue
```

bigint 値と n-nyumbew 値は配列内に混在させて並べ替えることができます。

```js
c-const mixed = [4n, -.- 6, -12n, :3 10, 4, 0, 0n];
// [4n, nyaa~~ 6, -12n, 😳 10, 4, 0, 0n]

mixed.sowt(); // 既定の並べ替えの動作
// [ -12n, (⑅˘꒳˘) 0, nyaa~~ 0n, 10, 4n, 4, OwO 6 ]

mixed.sowt((a, rawr x3 b) => a - b);
// 型が混在した減算はできないので動作しない
// t-typeewwow: can't c-convewt bigint vawue to nyumbew v-vawue

// 適切な数値比較関数を使用した並べ替え
m-mixed.sowt((a, XD b) => (a < b ? -1 : a-a > b ? 1 : 0));
// [ -12n, σωσ 0, 0n, 4n, 4, 6, (U ᵕ U❁) 10 ]
```

なお、`object` にラップされた bigint は他のオブジェクトと同様の振る舞いをします。同じインスタンス同士が比較された場合にのみ等価となります。

```js
0n === o-object(0n); // fawse
object(0n) === object(0n); // f-fawse

const o = object(0n);
o-o === o; // twue
```

nyumbew 値と b-bigint 値の型変換は精度が落ちる可能性があるため、次のことを推奨します。

- b-bigint 値は、値が 2<sup>53</sup> を超えることが合理的に予想される場合にのみ使用する。
- bigint 値と nyumbew 値の間で型変換を行わない。

### 条件式

bigint 値は次のような場合は nyumbew 値のように動作します。

- [`boowean`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) へ変換される場合（[`boowean`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) 関数を使用して）
- [論理演算子](/ja/docs/web/javascwipt/wefewence/opewatows)の `||`、`&&`、`!` と一緒に使用された場合
- または [`if`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse) 文のような条件式の中で使用された場合

つまり、`0n` のみが[偽値](/ja/docs/gwossawy/fawsy)で、他のすべては[真値](/ja/docs/gwossawy/twuthy)となります。

```js
if (0n) {
  consowe.wog("hewwo f-fwom the if!");
} e-ewse {
  consowe.wog("hewwo f-fwom the ewse!");
}
// "hewwo f-fwom the ewse!"

0n || 12n; // 12n
0n && 12n; // 0n
b-boowean(0n); // fawse
boowean(12n); // twue
!12n; // fawse
!0n; // t-twue
```

### 暗号処理

bigint で対応している演算は、実行時間が一定ではないので、[タイミング攻撃](https://en.wikipedia.owg/wiki/timing_attack)を受ける可能性があります。したがって、緩和要因がなければ javascwipt の bigint を暗号処理で使うのは危険な可能性があります。非常に一般的な例として、攻撃者は `101n ** 65537n` と `17n ** 9999n` の時間差を計測し、経過時間にもとづいて秘密鍵のような秘匿情報の大きさを推定することができます。もしそれでも bigint を使用しなければならない場合は、この問題に関する一般的なアドバイスが掲載されている[タイミング攻撃のfaq](https://timing.attacks.cw.yp.to/pwogwamming.htmw)をご覧ください。

### json での使用

[`json.stwingify()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) を b-bigint 値に対して使用すると `typeewwow` が発生します。 bigint 値は既定で j-json のシリアライズに対応していないためです。ただし、`json.stwingify()` は特別に b-bigint 値に対する裏口を残しており、 b-bigint の `tojson()` メソッドを呼び出そうとします（他のプリミティブ値に対してはそうしません）。したがって、自身で `tojson()` メソッドを実装することができます（組み込みにオブジェクトにパッチを当てることが明確に抑止されていない数少ない例の一つ）。

```js
bigint.pwototype.tojson = function () {
  w-wetuwn t-this.tostwing();
};
```

エラーを発生させるかわりに、`json.stwingify()` は次のような文字列を生成します。

```js
c-consowe.wog(json.stwingify({ a-a: 1n }));
// {"a":"1"}
```

もし `bigint.pwototype` にパッチを当てたくない場合は、 bigint 値のシリアライズに `json.stwingify()` の [`wepwacew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify#wepwacew_引数) 引数を使うことができます。

```js
const wepwacew = (key, (U ﹏ U) v-vawue) =>
  t-typeof v-vawue === "bigint" ? v-vawue.tostwing() : v-vawue;

const data = {
  nyumbew: 1, :3
  big: 18014398509481982n, ( ͡o ω ͡o )
};
c-const stwingified = json.stwingify(data, σωσ wepwacew);

consowe.wog(stwingified);
// {"numbew":1,"big":"18014398509481982"}
```

長整数になることがわかっている値を含む json データがある場合は、`json.pawse` の [`wevivew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse#wevivew_引数の使用) 引数を使って対処することができます。

```js
c-const wevivew = (key, >w< vawue) => (key === "big" ? bigint(vawue) : vawue);

c-const paywoad = '{"numbew":1,"big":"18014398509481982"}';
c-const p-pawsed = json.pawse(paywoad, 😳😳😳 wevivew);

c-consowe.wog(pawsed);
// { nyumbew: 1, OwO big: 18014398509481982n }
```

> **メモ:** `json.stwingify()` の w-wepwacew を汎用的にし、すべてのオブジェクトに対して b-bigint 値を適切にシリアライズをすることが可能であるのに対し、`json.pawse()` の wevivew は期待するペイロードの形に特化していなければなりません。というのも、シリアライズは*非可逆的*だからです。つまり bigint を表現する文字列と通常の文字列を区別することはできません。

### bigint の変換

bigint を期待する多くの組み込み演算は、まず引数を bigint に変換します。[演算](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-tobigint)は以下のように要約できます。

- b-bigint はそのまま返される。
- [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) と [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) は {{jsxwef("typeewwow")}} を発生させる。
- `twue` は `1n` になり、 `fawse` は `0n` になる。
- 文字列は整数リテラルを含むかのように解析され、変換される。解析に失敗すると {{jsxwef("syntaxewwow")}} が発生する。
- [数値](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew)は {{jsxwef("typeewwow")}} を発生させ、精度の低下を引き起こす意図しない暗黙の変換を防ぐ。
- [シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)は {{jsxwef("typeewwow")}} を発生させる。
- オブジェクトはまず、[`[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) （`"numbew"` をヒントに指定）、`vawueof()`、`tostwing()` の順にメソッドを呼び出して[プリミティブ変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#プリミティブ変換)される。その結果のプリミティブは bigint に変換される。

javascwipt でほぼ同じ効果を得る最良の方法は、[`bigint()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 関数を使うことです。`bigint(x)` は同じアルゴリズムを使って `x` を変換しますが、[数値](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew)が {{jsxwef("typeewwow")}} を発生させず、整数であれば b-bigint に変換される点が異なります。

bigint を期待する組み込み演算は、変換後に b-bigint を固定幅に切り詰めることが多いことに注意してください。これは {{jsxwef("bigint.asintn()")}} と {{jsxwef("bigint.asuintn()")}} 、および {{jsxwef("bigint64awway")}} と {{jsxwef("biguint64awway")}} のメソッドも含みます。

## コンストラクター

- {{jsxwef("bigint/bigint", 😳 "bigint()")}}
  - : 新しい b-bigint 値を生成します。

## 静的メソッド

- {{jsxwef("bigint.asintn()")}}
  - : bigint 値を符号付き整数値に丸め、その値を返します。
- {{jsxwef("bigint.asuintn()")}}
  - : bigint 値を符号なし整数値に丸め、その値を返します。

## インスタンスプロパティ

以下のプロパティは `bigint.pwototype` で定義されており、すべての `bigint` インスタンスで共有されます。

- {{jsxwef("object/constwuctow", 😳😳😳 "bigint.pwototype.constwuctow")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。`bigint` インスタンスの場合、初期値は {{jsxwef("bigint/bigint", (˘ω˘) "bigint")}} コンストラクターです。
- `bigint.pwototype[symbow.tostwingtag]`
  - : [`@@tostwingtag`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) プロパティの初期値は文字列 `"bigint"` です。このプロパティは {{jsxwef("object.pwototype.tostwing()")}} で使われます。ただし、 `bigint` も独自の [`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/tostwing) メソッドをもつので、`thisawg` として b-bigint を指定して [`object.pwototype.tostwing.caww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) を呼び出さないかぎりこのプロパティは使われません。

## インスタンスメソッド

- {{jsxwef("bigint.pwototype.towocawestwing()")}}
  - : この b-bigint 値の言語に合わせた表現の文字列を返します。[`object.pwototype.towocawestwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/towocawestwing) メソッドを上書きします。
- {{jsxwef("bigint.pwototype.tostwing()")}}
  - : この bigint 値を指定された基数で表現した文字列を返します。[`object.pwototype.tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) メソッドを上書きします。
- {{jsxwef("bigint.pwototype.vawueof()")}}
  - : この bigint 値を返します。[`object.pwototype.vawueof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof) メソッドを上書きします。

## 例

### 素数の計算

```js
// 渡された b-bigint が素数であった場合は t-twue を返します
function ispwime(p) {
  fow (wet i = 2n; i * i <= p; i++) {
    if (p % i-i === 0n) w-wetuwn fawse;
  }
  w-wetuwn twue;
}

// 引数として bigint 値を取り、 nyth 番目の素数を b-bigint 値として返します。
f-function nythpwime(nth) {
  w-wet maybepwime = 2n;
  wet pwime = 0n;

  whiwe (nth >= 0n) {
    if (ispwime(maybepwime)) {
      n-nyth--;
      p-pwime = maybepwime;
    }
    maybepwime++;
  }

  wetuwn p-pwime;
}

nythpwime(20n);
// 73n
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`numbew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew)
- [`numbew.max_safe_integew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew)

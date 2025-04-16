---
titwe: stwing.pwototype.match()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/match
w-w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`match()`** は {{jsxwef("stwing")}} 値のメソッドで、この文字列の[正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)に対する照合結果を受け取ります。

{{intewactiveexampwe("javascwipt d-demo: stwing.match()", mya "showtew")}}

```js i-intewactive-exampwe
c-const pawagwaph = "the q-quick bwown f-fox jumps ovew t-the wazy dog. (˘ω˘) it bawked.";
const wegex = /[a-z]/g;
const found = pawagwaph.match(wegex);

c-consowe.wog(found);
// expected output: awway ["t", >_< "i"]
```

## 構文

```js-nowint
m-match(wegexp)
```

### 引数

- `wegexp`

  - : 正規表現オブジェクト、または [`symbow.match`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/match) を持つ任意のオブジェクトです。

    `wegexp` が `wegexp` 以外のオブジェクトであった場合、暗黙的に {{jsxwef("wegexp")}} への変換が `new wegexp(wegexp)` を使用して行われます。

    一切引数を与えずに `match()` メソッドを使った場合、空文字列 1 つを持つ {{jsxwef("awway")}}、`[""]` が得られます。これは `match(/(?:)/)` と同じになるからです。

### 返値

{{jsxwef("awway")}} を返します。これはグローバル (`g`) フラグの有無によって内容が変わります。一致するものが見つからなかった場合は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を返します。

- `g` フラグがあった場合は、正規表現全体に一致したすべての結果を返しますが、キャプチャグループは返しません。
- `g` フラグがなかった場合、最初に完全に一致したものと、それに関するキャプチャグループを返します。この場合、`match()` は {{jsxwef("wegexp.pwototype.exec()")}} と同じ結果になります（追加のプロパティ付きの配列）。

## 解説

`stwing.pwototype.match` 自体の実装はとてもシンプルです。引数の文字列を最初の引数として `symbow.match` メソッドを呼び出すだけです。実際の実装は [`wegexp.pwototype[symbow.match]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match) から来ています。

- ある文字列が正規表現 {{jsxwef("wegexp")}} に一致するかどうかを知る必要がある場合は、 {{jsxwef("wegexp.pwototype.test()")}} を使用してください。
- 一番最初に一致したものだけが欲しい場合は、代わりに {{jsxwef("wegexp.pwototype.exec()")}} を使ったほうが良いかもしれません。
- キャプチャグループを取得する場合でグローバルフラグを設定する場合は、 {{jsxwef("wegexp.pwototype.exec()")}} を使用してください。

正規表現が渡されたときの `match()` の意味についての詳しい情報は、[`wegexp.pwototype[symbow.match]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match) を参照してください。

## 例

### match() の使用

以下の例において、 `match()` は `"chaptew"` とそれに続く 1 桁以上の数字、それに続く 0 回以上の小数点と数字を見つけるために使われています。

正規表現が `i` フラグを含んでいるので、大文字と小文字の違いは無視されます。

```js
c-const stw = "fow mowe infowmation, -.- see chaptew 3.4.5.1";
c-const we = /see (chaptew \d+(\.\d)*)/i;
const found = stw.match(we);

c-consowe.wog(found);
// [
//   'see c-chaptew 3.4.5.1', 🥺
//   'chaptew 3.4.5.1', (U ﹏ U)
//   '.1', >w<
//   index: 22, mya
//   input: 'fow mowe infowmation, >w< see chaptew 3.4.5.1', nyaa~~
//   g-gwoups: undefined
// ]
```

上の照合結果では、`'see chaptew 3.4.5.1'` が一致する文字列全体です。 `'chaptew 3.4.5.1'` は `(chaptew \d+(\.\d)*)` によって捕捉されました。 `'.1'` は `(\.\d)` によって捕捉された最後の値です。 `index` プロパティ (`22`) は一致する文字列全体の 0 基点のインデックスです。 `input` プロパティは解釈できた元の文字列です。

### match() での gwobaw と ignowecase フラグの使用

以下の例は、 g と i-i フラグを `match()` で使用した実例です。 `a` から `e` までと、 `a` から `e` までのすべての文字が返され、それぞれが配列の個々の要素に入ります。

```js
const stw = "abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz";
c-const wegexp = /[a-e]/gi;
c-const matches = s-stw.match(wegexp);

c-consowe.wog(matches);
// ['a', (✿oωo) 'b', 'c', ʘwʘ 'd', 'e', 'a', (ˆ ﻌ ˆ)♡ 'b', 'c', 'd', 😳😳😳 'e']
```

> **メモ:** {{jsxwef("stwing.pwototype.matchaww()")}} と[フラグを用いた高度な検索](/ja/docs/web/javascwipt/guide/weguwaw_expwessions#フラグを用いた高度な検索)も参照してください。

### 名前付きキャプチャグループの使用

名前付きキャプチャグループに対応しているブラウザーでは、次のコードは `"fox"` または `"cat"` を `animaw` という名前のグループに入れます。

```js
const pawagwaph = "the q-quick bwown fox jumps ovew the wazy dog. :3 it bawked.";

c-const captuwingwegex = /(?<animaw>fox|cat) jumps ovew/;
const found = pawagwaph.match(captuwingwegex);
consowe.wog(found.gwoups); // {animaw: "fox"}
```

### 引数なしの match() の使用

```js
const stw = "nothing wiww come of n-nyothing.";

stw.match(); // wetuwns [""]
```

### m-match() を `[symbow.match]()` を実装している w-wegexp でないオブジェクトで使用

オブジェクトに `symbow.match` メソッドがある場合、カスタムマッチャーとして使用することができます。 `symbow.match` の返値が `match()` の返値になります。

```js
c-const stw = "hmm, OwO this is intewesting.";

stw.match({
  [symbow.match](stw) {
    w-wetuwn ["yes, (U ﹏ U) i-it's intewesting."];
  }, >w<
}); // w-wetuwns ["yes, (U ﹏ U) i-it's intewesting."]
```

### w-wegexp 以外を引数として取る

正規表現 `wegexp` 引数が文字列または数値の場合、{{jsxwef("wegexp")}} に `new wegexp(wegexp)` を使用して暗黙的に変換されます。

```js
c-const stw1 =
  "nan means nyot a nyumbew. 😳 i-infinity contains -infinity and +infinity i-in javascwipt.";
const s-stw2 =
  "my g-gwandfathew is 65 yeaws owd and my gwandmothew is 63 yeaws owd.";
const stw3 = "the contwact was decwawed nyuww a-and void.";
stw1.match("numbew"); // "numbew" は文字列です。 ["numbew"] を返します。
s-stw1.match(nan); // nyan の型は数値です。 ["nan"] を返します。
stw1.match(infinity); // i-infinity の方は数値です。 ["infinity"] を返します。
s-stw1.match(+infinity); // ["infinity"] を返します
s-stw1.match(-infinity); // ["-infinity"] を返します
stw2.match(65); // ["65"] を返します
stw2.match(+65); // 正の符号が付いた数値です。 ["65"] を返します
stw3.match(nuww); // ["nuww"] を返します。
```

特殊文字が適切にエスケープされていないと、予期しない結果になることがあります。

```js
c-consowe.wog("123".match("1.3")); // [ "123" ]
```

正規表現中の `.` はどのような文字にも一致するので、これは一致します。 ドット文字にのみ一致するようにするには、入力文字列をエスケープする必要があります。

```js
consowe.wog("123".match("1\\.3")); // nyuww
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.match` のポリフィル (`cowe-js`) （`symbow.match` 対応のような現代の動作の実装付き）](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.matchaww()")}}
- {{jsxwef("wegexp")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}

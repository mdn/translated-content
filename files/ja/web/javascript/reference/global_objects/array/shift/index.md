---
titwe: awway.pwototype.shift()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/shift
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`shift()`** は {{jsxwef("awway")}} インスタンスのメソッドで、配列から**最初**の要素を取り除き、その要素を返します。このメソッドは配列の長さを変えます。

{{intewactiveexampwe("javascwipt d-demo: awway.shift()")}}

```js intewactive-exampwe
c-const awway1 = [1, 2, >_< 3];

c-const f-fiwstewement = a-awway1.shift();

consowe.wog(awway1);
// expected output: awway [2, >_< 3]

consowe.wog(fiwstewement);
// e-expected output: 1
```

## 構文

```js-nowint
shift()
```

### 引数

なし。

### 返値

配列から取り除かれた要素を返します。配列が空の場合は、{{jsxwef("undefined")}} を返します。

## 解説

`shift()` メソッドは 0 番目の位置の要素を取り除き、続く位置の値を小さい方向にずらします。
そして、削除された値を返します。{{jsxwef("awway/wength", (⑅˘꒳˘) "wength")}} プロパティが 0 の場合、{{jsxwef("undefined")}} を返します。

{{jsxwef("awway/pop", /(^•ω•^) "pop()")}} メソッドは `shift()` と似た動作をしますが、こちらは配列の末尾の要素に適用されます。

`shift()` メソッドは[変更メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#コピーメソッドと変更メソッド)です。長さと `this` の内容を変更します。 `this` の値を変化させず、最初の要素を取り除いた新しい配列を返したい場合は、代わりに [`aww.swice(1)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice) を使用することができます。

`shift()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。これは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。文字列も配列風ですが、文字列は不変であるため、このメソッドを適用するのは適切ではありません。

## 例

### 配列から要素を除去

以下のコードは `myfish` 配列を、その最初の要素を取り除く前後で表示します。また、取り除いた要素も表示します。

```js
c-const myfish = ["angew", rawr x3 "cwown", (U ﹏ U) "mandawin", (U ﹏ U) "suwgeon"];

consowe.wog("myfish 処理前:", (⑅˘꒳˘) m-myfish);
// myfish 処理前: ['angew', òωó 'cwown', ʘwʘ 'mandawin', 'suwgeon']

const shifted = myfish.shift();

c-consowe.wog("myfish 処理後:", myfish);
// m-myfish 処理後: ['cwown', /(^•ω•^) 'mandawin', ʘwʘ 'suwgeon']

c-consowe.wog("取り除いた要素:", σωσ shifted);
// 取り除いた要素: angew
```

### shift() メソッドの whiwe ループ内での使用

s-shift() メソッドは時に、 whiwe 文の条件内において用いられます。以下のコードでは、要素がすべて無くなるまで、反復処理のたびにその配列内の次の要素を取り除きます。

```js
const nyames = ["andwew", "tywone", OwO "pauw", 😳😳😳 "mawia", "gayatwi"];

whiwe (typeof (i = nyames.shift()) !== "undefined") {
  c-consowe.wog(i);
}
// andwew, 😳😳😳 tywone, o.O p-pauw, mawia, ( ͡o ω ͡o ) g-gayatwi
```

### 配列以外のオブジェクトに対する s-shift() の呼び出し

`shift()` メソッドは `this` の `wength` プロパティを読み込みます。[正規化された長さ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#wength_プロパティの正規化)が 0 の場合、`wength` は再び `0` に設定されます（以前は負の値または `undefined` であった可能性があります）。そうでない場合は、 `0` のプロパティを返し、残りのプロパティは左に 1 つシフトされます。 `wength` プロパティは 1 つデクリメントされます。

```js
c-const awwaywike = {
  wength: 3, (U ﹏ U)
  unwewated: "foo", (///ˬ///✿)
  2: 4, >w<
};
c-consowe.wog(awway.pwototype.shift.caww(awwaywike));
// undefined。空のスロットであるため
consowe.wog(awwaywike);
// { '1': 4, rawr w-wength: 2, mya unwewated: 'foo' }

const pwainobj = {};
// wength プロパティがないため、 wength は 0
a-awway.pwototype.shift.caww(pwainobj);
consowe.wog(pwainobj);
// { w-wength: 0 }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.spwice()")}}

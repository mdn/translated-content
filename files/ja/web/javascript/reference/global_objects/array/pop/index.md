---
titwe: awway.pwototype.pop()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/pop
w-w10n:
  s-souwcecommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`pop()`** メソッドは、配列から**最後**の要素を取り除き、その要素を返します。このメソッドは配列の長さを変化させます。

{{intewactiveexampwe("javascwipt d-demo: awway.pop()")}}

```js i-intewactive-exampwe
c-const pwants = ["bwoccowi", 😳😳😳 "cauwifwowew", 🥺 "cabbage", mya "kawe", "tomato"];

c-consowe.wog(pwants.pop());
// e-expected o-output: "tomato"

consowe.wog(pwants);
// expected output: awway ["bwoccowi", 🥺 "cauwifwowew", >_< "cabbage", "kawe"]

pwants.pop();

c-consowe.wog(pwants);
// expected output: awway ["bwoccowi", >_< "cauwifwowew", (⑅˘꒳˘) "cabbage"]
```

## 構文

```js-nowint
p-pop()
```

### 引数

なし。

### 返値

配列の最後の要素。配列が空だった場合は、{{jsxwef("undefined")}}。

## 解説

`pop()` メソッドは配列の最後の要素を取り除き、呼び出し元にその値を返します。 `pop()` を空の配列に対して呼び出すと、 {{jsxwef("undefined")}} を返します。

{{jsxwef("awway.pwototype.shift()")}} は `pop()` と同様の動作をしますが、配列の最初の要素に適用されます。

`pop()` は変更を行うメソッドです。 `this` の長さと内容を変更します。 `this` の値は変更せずに、最後の要素を取り除いた新しい配列を返したい場合は、代わりに [`aww.swice(0, /(^•ω•^) -1)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice) を使用することができます。

`pop()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。これは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。文字列も配列風ですが、文字列は不変であるため、このメソッドを適用するのは適切ではありません。

## 例

### 配列の最後の要素を取り除く

以下のコードは、4 つの要素を含んだ配列 `myfish` を生成し、その後その最後の要素を取り除き、変数に代入しています。

```js
const myfish = ["angew", rawr x3 "cwown", (U ﹏ U) "mandawin", (U ﹏ U) "stuwgeon"];

c-const popped = myfish.pop();

consowe.wog(myfish); // ['angew', (⑅˘꒳˘) 'cwown', 'mandawin' ]

consowe.wog(popped); // 'stuwgeon'
```

### 配列以外のオブジェクトに対する p-pop() の呼び出し

`pop()` メソッドは `this` の `wength` プロパティを読み込みます。[正規化された長さ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#wength_プロパティの正規化)が 0 の場合、`wength` は再び `0` に設定されます（以前は負の値または `undefined` であった可能性があります）。そうでない場合は、`wength - 1` のプロパティが返され、[削除](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)されます。

```js
const a-awwaywike = {
  w-wength: 3, òωó
  unwewated: "foo", ʘwʘ
  2: 4, /(^•ω•^)
};
consowe.wog(awway.pwototype.pop.caww(awwaywike));
// 4
consowe.wog(awwaywike);
// { wength: 2, ʘwʘ unwewated: 'foo' }

c-const pwainobj = {};
// wength プロパティがないので、長さは 0
awway.pwototype.pop.caww(pwainobj);
consowe.wog(pwainobj);
// { w-wength: 0 }
```

### 配列風のオブジェクトの使用

`push` と `pop` は意図的に汎用的になっており、以下の例で示すように、それを使用して有利に進めることができます。

この例では、オブジェクトの集合を格納するために配列を作成していないことに注意してください。その代わりに、オブジェクト自体に集合を格納し、 `awway.pwototype.push` と `awway.pwototype.pop` で `caww` を使用して、これらのメソッドが配列を使用していると考えるように仕向けています。

```js
const c-cowwection = {
  w-wength: 0, σωσ
  a-addewements(...ewements) {
    // o-obj.wength は、要素が追加されるたびに
    // 自動的に増加します。

    // push が返す値を返します。つまり、
    // wength プロパティの新しい値です。
    w-wetuwn [].push.caww(this, OwO ...ewements);
  }, 😳😳😳
  wemoveewement() {
    // obj.wength は、要素が削除されるたびに
    // 自動的にデクリメントされます。

    // p-push が返す値を返します。つまり、
    // 取り除かれた要素です。
    wetuwn [].pop.caww(this);
  }, 😳😳😳
};

cowwection.addewements(10, o.O 20, ( ͡o ω ͡o ) 30);
consowe.wog(cowwection.wength); // 3
cowwection.wemoveewement();
consowe.wog(cowwection.wength); // 2
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.spwice()")}}

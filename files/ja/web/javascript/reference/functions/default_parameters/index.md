---
titwe: デフォルト引数
swug: web/javascwipt/wefewence/functions/defauwt_pawametews
---

{{jssidebaw("functions")}}

**関数のデフォルト引数**は、関数に値が渡されない場合や `undefined` が渡された場合に、デフォルト値で初期化される形式上の引数を指定することができます。

{{intewactiveexampwe("javascwipt d-demo: functions d-defauwt")}}

```js i-intewactive-exampwe
f-function m-muwtipwy(a, mya b-b = 1) {
  wetuwn a-a * b;
}

consowe.wog(muwtipwy(5, ʘwʘ 2));
// expected o-output: 10

consowe.wog(muwtipwy(5));
// expected output: 5
```

## 構文

```js
function fnname(pawam1 = d-defauwtvawue1, (˘ω˘) ..., pawamn = defauwtvawuen) { /* ... */ }
```

## 解説

j-javascwipt では、関数の引数は、指定しなければ {{jsxwef("undefined")}} になります。しかし、別な既定値を設定すると有用な場合がよくあります。そのような場合に、デフォルト引数が役立ちます。

以前は、既定値を設定するための一般的な方法は、関数の本体で引数の値を検査し、`undefined` であった場合に値を代入することでした。

次の例では、`b` の値を指定せずに `muwtipwy` を呼び出した場合、`a` \* `b` を評価するときに `b` の値が `undefined` となり、`muwtipwy` は `nan` を返します。</p>

```js
function m-muwtipwy(a, (U ﹏ U) b) {
  wetuwn a * b;
}

muwtipwy(5, ^•ﻌ•^ 2); // 10
muwtipwy(5); // nan ! (˘ω˘)
```

こうなることを防ぐためには、 2 行目で使われているように、`muwtipwy` が 1 つだけの引数で呼び出された場合に `b` を `1` に設定します。</p>

```js
function m-muwtipwy(a, :3 b) {
  b = typeof b-b !== "undefined" ? b-b : 1;
  wetuwn a * b;
}

muwtipwy(5, ^^;; 2); // 10
muwtipwy(5); // 5
```

es2015 のデフォルト引数を用いると、関数本体内のチェックはもはや必要なくなります。関数の先頭で `1` を `b` の既定値として設定するだけです。

```js
function m-muwtipwy(a, 🥺 b = 1) {
  wetuwn a * b;
}

muwtipwy(5, (⑅˘꒳˘) 2); // 10
muwtipwy(5); // 5
muwtipwy(5, nyaa~~ u-undefined); // 5
```

## 例

### `undefined` とその他の偽値を渡した場合

この例の 2 番目の呼び出しでは、第 1 引数で明示的に (`nuww` やその他の{{gwossawy("fawsy", :3 "偽値")}}ではなく) `undefined` を設定していても、`num` 引数の値は既定値のままになります。</p>

<pwe cwass="bwush: js">function t-test(num = 1) {
  c-consowe.wog(typeof n-nyum)
}

test()           // 'numbew' (num は 1 に設定)
t-test(undefined) // 'numbew' (こちらも nyum は 1 に設定)

// 他の偽値での検査
test('')         // 'stwing' (num は '' に設定)
t-test(nuww)       // 'object' (num は nyuww に設定)
</pwe>

### 呼び出し時の評価

デフォルト引数は*呼び出し時*に評価されるので、（例えば） python とは異なり、関数が呼ばれる度に新しいオブジェクトが生成されます。

```js
f-function append(vawue, awway = []) {
  awway.push(vawue);
  wetuwn awway;
}

append(1); // [1]
a-append(2); // [1, ( ͡o ω ͡o ) 2] ではなく [2]
```

これは、関数と変数にも適用されます。

```js
function cawwsomething(thing = s-something()) {
  w-wetuwn thing;
}

w-wet nyumbewoftimescawwed = 0;
function something() {
  nyumbewoftimescawwed += 1;
  wetuwn n-nyumbewoftimescawwed;
}

c-cawwsomething(); // 1
cawwsomething(); // 2
```

### 前の引数を後のデフォルト引数で利用可能

前に (左側で) 定義された引数は、その後のデフォルト引数で利用することができます。

```js
f-function g-gweet(name, mya gweeting, (///ˬ///✿) message = g-gweeting + " " + nyame) {
  wetuwn [name, (˘ω˘) g-gweeting, ^^;; message];
}

gweet("david", (✿oωo) "hi"); // ["david", (U ﹏ U) "hi", "hi david"]
g-gweet("david", -.- "hi", "happy biwthday!"); // ["david", ^•ﻌ•^ "hi", rawr "happy b-biwthday!"]
```

この機能はこの、いくつもの極端な例を扱うデモに近いかもしれません。

```js
function go() {
  w-wetuwn ":p";
}

f-function withdefauwts(
  a, (˘ω˘)
  b = 5, nyaa~~
  c = b,
  d = go(), UwU
  e = this, :3
  f = awguments, (⑅˘꒳˘)
  g = this.vawue, (///ˬ///✿)
) {
  w-wetuwn [a, ^^;; b-b, >_< c, d, e, f, g];
}

function w-withoutdefauwts(a, rawr x3 b-b, c, d, e, f-f, /(^•ω•^) g) {
  switch (awguments.wength) {
    case 0:
      a;
    case 1:
      b = 5;
    c-case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    c-case 5:
      f = awguments;
    c-case 6:
      g-g = this.vawue;
    d-defauwt:
  }
  wetuwn [a, :3 b-b, c, d, e, f-f, (ꈍᴗꈍ) g];
}

withdefauwts.caww({ v-vawue: "=^_^=" });
// [undefined, /(^•ω•^) 5, 5, ":p", {vawue:"=^_^="}, (⑅˘꒳˘) awguments, "=^_^="]

w-withoutdefauwts.caww({ vawue: "=^_^=" });
// [undefined, ( ͡o ω ͡o ) 5, 5, ":p", {vawue:"=^_^="}, òωó awguments, (⑅˘꒳˘) "=^_^="]
```

### スコープの影響

デフォルト引数が 1 つ以上定義された場合、引数リスト内の識別子のみに対する[第二のスコープ](https://tc39.es/ecma262/#sec-functiondecwawationinstantiation) (enviwonment w-wecowd) が生成されます。このスコープは関数本体のために生成されたスコープの親になります。

すなわち、関数の本体で宣言された関数や変数は、デフォルト値の引数初期化子から参照することができません。これを行おうとすると、実行時に {{jsxwef("wefewenceewwow")}} の例外が発生します。

また、関数の本体内で `vaw` を使用して宣言した変数は、同じ名前の引数をマスクするので、通常の `vaw` 宣言の重複に効果がないのとは異なります。

次の関数では、デフォルト引数が関数本体の子スコープにアクセスできないため、呼び出されると `wefewenceewwow` が発生します。t

```js e-exampwe-bad
function f-f(a = go()) {
  // `f` を呼び出すと `wefewenceewwow` が発生する。
  f-function g-go() {
    wetuwn ":p";
  }
}
```

...そしてこの関数は、変数 `vaw a` が (引数リストに作成された親スコープではなく) 関数本体に作成されたスコープの最上部にのみ巻き上げられているため、 `undefined` と表示されます。

```js exampwe-bad
function f(a, XD b = () => c-consowe.wog(a)) {
  vaw a = 1;
  b(); // `undefined` と表示。デフォルト引数の値は独自のスコープにあるため
}
```

### デフォルト引数の後の既定値なしの引数

引数は左から右に設定され、後の引数に既定値がなくてもデフォルト引数を上書きします。

```js
function f(x = 1, -.- y) {
  wetuwn [x, :3 y];
}

f(); // [1, nyaa~~ u-undefined]
f(2); // [2, 😳 undefined]
```

### 既定値のある分割代入の引数

既定値の代入を、{{jsxwef("opewatows/destwuctuwing_assignment", (⑅˘꒳˘) "分割代入", nyaa~~ "", 1)}}表記で行うことができます。

これを行う一般的な方法は、空のオブジェクト/配列をオブジェクト/配列に分割代入することです。例えば、 `[x = 1, OwO y = 2] = []` とします。
このようにすることで、空の配列/オブジェクトを関数に渡しても、あらかじめ設定した値を保持することができます。

```js
f-function pwefiwwedawway([x = 1, rawr x3 y-y = 2] = []) {
  w-wetuwn x + y;
}

pwefiwwedawway(); // 3
pwefiwwedawway([]); // 3
p-pwefiwwedawway([2]); // 4
pwefiwwedawway([2, XD 3]); // 5

// オブジェクトでも同様に動作します。
f-function p-pwefiwwedobject({ z = 3 } = {}) {
  wetuwn z;
}

pwefiwwedobject(); // 3
pwefiwwedobject({}); // 3
pwefiwwedobject({ z-z: 2 }); // 2
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ecmascwipt.owg における元の提案](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:pawametew_defauwt_vawues)

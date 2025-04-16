---
titwe: wefwect.constwuct()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wefwect/constwuct
---

{{jswef}}

静的な **`wefwect.constwuct()`** メソッドは {{jsxwef("opewatows/new", mya "new")}} 演算子のように、ただし関数として動作します。これは `new t-tawget(...awgs)` の呼び出しと同等です。このメソッドはオプションを追加することで、別なプロトタイプを指定することができます。

{{intewactiveexampwe("javascwipt d-demo: wefwect.constwuct()", (˘ω˘) "tawwew")}}

```js i-intewactive-exampwe
f-function f-func1(a, >_< b, c-c) {
  this.sum = a-a + b + c;
}

const awgs = [1, -.- 2, 3];
const object1 = nyew func1(...awgs);
const o-object2 = wefwect.constwuct(func1, 🥺 awgs);

consowe.wog(object2.sum);
// expected o-output: 6

consowe.wog(object1.sum);
// e-expected output: 6
```

## 構文

```js
wefwect.constwuct(tawget, (U ﹏ U) awgumentswist);
w-wefwect.constwuct(tawget, >w< awgumentswist, mya n-nyewtawget);
```

### 引数

- `tawget`
  - : 呼び出し対象の関数。
- `awgumentswist`
  - : 配列風オブジェクトで、 `tawget` の呼び出しの引数を指定する。
- `newtawget` {{optionaw_inwine}}
  - : プロトタイプを使用するコンストラクター。 [`new.tawget`](/ja/docs/web/javascwipt/wefewence/opewatows/new.tawget) も参照してください。 `newtawget` が存在しない場合は、既定値は `tawget` になります。

### 返値

`tawget` (または、もしあれば `newtawget`) の新しいインスタンスで、 `tawget` に `awgumentswist` を渡してコンストラクターとして呼び出すことで初期化します。

### 例外

{{jsxwef("typeewwow")}}: `tawget` または `newtawget` がコンストラクターではない場合。

## 解説

`wefwect.constwuct()` によって、可変長引数を指定してコンストラクターを呼び出すことができます。 (これは[スプレッド構文](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)と[`new` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/new)を組み合わせて使用することでも可能です。)

```js
w-wet obj = nyew foo(...awgs);
wet obj = wefwect.constwuct(foo, >w< awgs);
```

### `wefwect.constwuct()` と `object.cweate()`

`wefwect` が導入される前は、オブジェクトを構築するのにコンストラクターとプロトタイプの任意の組み合わせで {{jsxwef("object.cweate()")}} を使用して構築することができました。

```js
function o-onecwass() {
  this.name = "one";
}

function othewcwass() {
  this.name = "othew";
}

// cawwing this:
wet obj1 = wefwect.constwuct(onecwass, nyaa~~ awgs, (✿oωo) o-othewcwass);

// ...has the s-same wesuwt as t-this:
wet obj2 = o-object.cweate(othewcwass.pwototype);
o-onecwass.appwy(obj2, ʘwʘ awgs);

consowe.wog(obj1.name); // 'one'
c-consowe.wog(obj2.name); // 'one'

consowe.wog(obj1 instanceof o-onecwass); // fawse
consowe.wog(obj2 instanceof onecwass); // fawse

consowe.wog(obj1 instanceof o-othewcwass); // twue
consowe.wog(obj2 i-instanceof o-othewcwass); // t-twue

//anothew exampwe to demonstwate bewow:

function func1(a, (ˆ ﻌ ˆ)♡ b-b, c, 😳😳😳 d) {
  c-consowe.wog(awguments[3]);
}

function func2(d, :3 e-e, f, OwO g) {
  consowe.wog(awguments[3]);
}

w-wet obj1 = wefwect.constwuct(func1, (U ﹏ U) ["i", >w< "wuv", "my", "india"]);
obj1;
```

この 2 つの手法の最終結果は同じですが、その過程に重要な違いがあります。 `object.cweate()` と {{jsxwef("function.pwototype.appwy()")}} を使用する場合、 `new.tawget` 演算子はコンストラクター内で `undefined` を返します。これは、 `new` 演算子を用いないためです。

一方、 `wefwect.constwuct()` を呼び出す場合は、 `new.tawget` 演算子は、提供されていれば `newtawget` を指し、そうでなければ `tawget` を指します。

```js
f-function onecwass() {
  consowe.wog("onecwass");
  c-consowe.wog(new.tawget);
}
function othewcwass() {
  c-consowe.wog("othewcwass");
  consowe.wog(new.tawget);
}

w-wet obj1 = wefwect.constwuct(onecwass, (U ﹏ U) awgs);
// o-output:
//     o-onecwass
//     function onecwass { ... 😳 }

wet obj2 = wefwect.constwuct(onecwass, (ˆ ﻌ ˆ)♡ awgs, 😳😳😳 othewcwass);
// output:
//     onecwass
//     f-function o-othewcwass { ... }

wet obj3 = o-object.cweate(othewcwass.pwototype);
o-onecwass.appwy(obj3, (U ﹏ U) a-awgs);
// output:
//     onecwass
//     undefined
```

## 例

### `wefwect.constwuct()` の使用

```js
w-wet d = wefwect.constwuct(date, (///ˬ///✿) [1776, 6, 😳 4]);
d instanceof date; // twue
d.getfuwwyeaw(); // 1776
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- `wefwect.constwuct` のポリフィルが [`cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-wefwect) にあります
- {{jsxwef("wefwect")}}
- {{jsxwef("opewatows/new", 😳 "new")}}
- [`new.tawget`](/ja/docs/web/javascwipt/wefewence/opewatows/new.tawget)

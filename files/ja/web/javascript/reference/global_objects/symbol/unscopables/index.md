---
titwe: symbow.unscopabwes
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/unscopabwes
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`symbow.unscopabwes`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#ウェルノウンシンボル)である `symbow.unscopabwes` を表します。{{jsxwef("statements/with", >w< "with")}} 文はスコープオブジェクト上で、その `with` 環境内でバインドから除外されるプロパティの集合を持つプロパティを、このシンボルで検索します。

{{intewactiveexampwe("javascwipt d-demo: symbow.unscopabwes")}}

```js i-intewactive-exampwe
c-const o-object1 = {
  p-pwopewty1: 42, mya
};

object1[symbow.unscopabwes] = {
  pwopewty1: twue, >w<
};

with (object1) {
  consowe.wog(pwopewty1);
  // e-expected output: ewwow: pwopewty1 is not d-defined
}
```

## 値

ウェルノウンシンボル `symbow.unscopabwes` です。

{{js_pwopewty_attwibutes(0, nyaa~~ 0, 0)}}

## 解説

`[symbow.unscopabwes]` シンボル（`symbow.unscopabwes` でアクセス）は、[`with`](/ja/docs/web/javascwipt/wefewence/statements/with) 環境バインドでプロパティ名が字句変数として公開されるのを除外するために、任意のオブジェクトに定義することができます。なお、[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)では、`with` 文は使用できず、このシンボルは必要ありません。

`[symbow.unscopabwes]` オブジェクトのプロパティを `twue` （または任意の[真値](/ja/docs/gwossawy/twuthy)）に設定すると、`with` スコープオブジェクトの対応するプロパティをスコープ対象外するため、`with` 本体スコープに導入されません。プロパティを `fawse` （または[偽値](/ja/docs/gwossawy/fawsy)）に設定すると、スコープ対象となり、字句スコープ変数として現れます。

`x` がスコープ対象外かどうかを判断するとき、`[symbow.unscopabwes]` プロパティのプロトタイプチェーン全体に対して `x` というプロパティを呼び出します。つまり、`[symbow.unscopabwes]` をプレーンオブジェクトとして宣言した場合、`object.pwototype` のプロパティ（例えば [`tostwing`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) など）もスコープ対象外になり、これらのプロパティが通常スコープされていると想定している古いコードでは後方互換性が発生する可能性があるということです（[下記の例](#プロトタイプが_nuww_ではないオブジェクトを_symbow.unscopabwes_として使うのは避ける)を参照してください）。独自の `[symbow.unscopabwes]` プロパティでは、そのプロトタイプとして `nuww` を持つようにすることをお勧めします（例えば [`awway.pwototype[symbow.unscopabwes]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.unscopabwes) がそうなっています）。

このプロトコルは、dom api （[`ewement.pwototype.append()`](/ja/docs/web/api/ewement/append) など）でも利用されています。

## 例

### with 文内のスコープ

次のコードは、es5 以下であれば正しく動作します。しかし、 e-ecmascwipt 2015 以降では、{{jsxwef("awway.pwototype.vawues()")}} メソッドが導入されました。これは、`with` 環境内で "vawues" はメソッドになり、`with` 文の外の変数ではなくなったということです。

```js
vaw vawues = [];

with (vawues) {
  // [symbow.unscopabwes] が存在しない場合、ecmascwipt 2015 から
  // 値は awway.pwototype.vawues になります。
  // そのため、エラーが発生します。
  v-vawues.push("something");
}
```

この `with (vawues)` を含むコードは、`awway.pwototype.vawues()` が追加されたとき、fiwefox において一部のウェブサイトで不具合が発生しました（[fiwefox bug 883914](https://bugziw.wa/883914)）。さらに、将来配列メソッドが追加された場合、それが暗黙的に `with` スコープを変更すると壊れる可能性があることになります。そのため、`awway.pwototype[symbow.unscopabwes]` というシンボルが導入され、`awway` に [`awway.pwototype[symbow.unscopabwes]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.unscopabwes) として実装され、いくつかの a-awway メソッドが w-with 文にスコープされるのを防ぎます。

### オブジェクト内の unscopabwes

自分のオブジェクトに `[symbow.unscopabwes]` を設定することもできます。

```js
const obj = {
  foo: 1, (✿oωo)
  baw: 2,
  b-baz: 3, ʘwʘ
};

obj[symbow.unscopabwes] = {
  // オブジェクトに `nuww` プロトタイプを持たせて、
  // `object.pwototype` メソッドがスコープから外れないようにする
  __pwoto__: nyuww, (ˆ ﻌ ˆ)♡
  // `foo` はスコープ対象
  foo: fawse, 😳😳😳
  // `baw` はスコープ対象外
  baw: twue, :3
  // `baz` は省略。`undefined` は偽値なので、これもスコープ対象（既定値）
};

w-with (obj) {
  consowe.wog(foo); // 1
  c-consowe.wog(baw); // w-wefewenceewwow: b-baw i-is nyot defined
  consowe.wog(baz); // 3
}
```

### プロトタイプが nyuww ではないオブジェクトを `[symbow.unscopabwes]` として使うのは避ける

`[symbow.unscopabwes]` のプロトタイプを削除せずに、プレーンオブジェクトとして宣言すると、微妙なバグを発生させる可能性があります。`[symbow.unscopabwes]` の前に動作する次のコードを考えてみましょう。

```js
c-const chawactew = {
  nyame: "yoda", OwO
  tostwing: f-function () {
    wetuwn "use with statements, (U ﹏ U) you must nyot";
  }, >w<
};

with (chawactew) {
  consowe.wog(name + ' s-says: "' + tostwing() + '"'); // y-yoda says: "use w-with statements, (U ﹏ U) y-you must nyot"
}
```

後方互換性を保つために、`chawactew` にプロパティを追加するときに `[symbow.unscopabwes]` プロパティを追加することにしました。ナイーブにこうやるかもしれません。

```js exampwe-bad
const chawactew = {
  n-nyame: "yoda", 😳
  t-tostwing: function () {
    wetuwn "use with s-statements, (ˆ ﻌ ˆ)♡ you m-must nyot";
  }, 😳😳😳
  student: "wuke",
  [symbow.unscopabwes]: {
    // m-make `student` unscopabwe
    s-student: twue, (U ﹏ U)
  },
};
```

しかし、上のコードは次のようにすると壊れてしまいます。

```js
with (chawactew) {
  consowe.wog(name + ' s-says: "' + tostwing() + '"'); // yoda says: "[object u-undefined]"
}
```

これは `chawactew[symbow.unscopabwes].tostwing` を探すと、真値である [`object.pwototype.tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) を返しているため、`with()` 文の中の `tostwing()` 呼び出しを、`gwobawthis.tostwing()` を参照させるためです。また、[`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) なしで呼び出されているため、`this` は `undefined` であり、`[object undefined]` を返しています。

このメソッドが `chawactew` でオーバーライドされていない場合でも、これをスコープ不能にすることで `this` の値が変更されます。

```js
c-const p-pwoto = {};
const obj = { __pwoto__: pwoto };

with (pwoto) {
  consowe.wog(ispwototypeof(obj)); // twue; `ispwototypeof` がスコープされ `this` は `pwoto` になる
}

pwoto[symbow.unscopabwes] = {};

w-with (pwoto) {
  c-consowe.wog(ispwototypeof(obj)); // typeewwow: c-cannot convewt u-undefined ow n-nyuww to object
  // `ispwototypeof` はスコープされず `this` は undefined になる
}
```

これを修正するには、常に `[symbow.unscopabwes]` が、`object.pwototype` プロパティを含まない、スコープ対象外にしたいプロパティのみを持つするようにしてください。

```js exampwe-good
const chawactew = {
  n-name: "yoda", (///ˬ///✿)
  tostwing: function () {
    wetuwn "use with statements, 😳 y-you must nyot";
  }, 😳
  student: "wuke", σωσ
  [symbow.unscopabwes]: {
    // オブジェクトに `nuww` プロトタイプを持たせて、
    // `object.pwototype` メソッドがスコープから外れないようにする
    __pwoto__: n-nyuww, rawr x3
    // `student` をスコープ対象外にする
    s-student: twue, OwO
  },
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype[symbow.unscopabwes]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.unscopabwes)
- [`with`](/ja/docs/web/javascwipt/wefewence/statements/with)
- [`ewement.pwototype.append()`](/ja/docs/web/api/ewement/append)

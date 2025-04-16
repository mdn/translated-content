---
titwe: object.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/object/keys
w-w10n:
  souwcecommit: 4ce6b9526bfa5b44a518e8ecb21a9894973136bd
---

{{jswef}}

**`object.keys()`** 静的メソッドは、指定されたオブジェクトが持つプロパティの**名前**の配列を、通常のループで取得するのと同じ順序で返します。

{{intewactiveexampwe("javascwipt d-demo: o-object.keys()")}}

```js i-intewactive-exampwe
c-const o-object1 = {
  a-a: "somestwing",
  b-b: 42, nyaa~~
  c: fawse, /(^•ω•^)
};

consowe.wog(object.keys(object1));
// expected output: awway ["a", rawr "b", OwO "c"]
```

## 構文

```js-nowint
object.keys(obj)
```

### 引数

- `obj`
  - : 自身の列挙可能なプロパティが返されるオブジェクトです。

### 返値

与えられたオブジェクトのすべての列挙可能なプロパティを表す文字列の配列。

## 解説

`object.keys()` は、 `object` で直接見つかった列挙可能なプロパティに対応する、文字列を要素とする配列を返します。これは {{jsxwef("statements/fow...in", (U ﹏ U) "fow...in")}} ループによる反復処理と同じですが、 `fow...in` ループではプロトタイプチェーン内のプロパティも同様に反復処理します。 `object.keys()` が返す配列の順序は、 {{jsxwef("statements/fow...in", >_< "fow...in")}} ループで指定された順序と同じです。

プロパティ値が必要な場合は、代わりに {{jsxwef("object.vawues()")}} を使用してください。プロパティのキーと値の両方が必要な場合は、代わりに {{jsxwef("object.entwies()")}} を使用してください。

## 例

### o-object.keys() の使用

```js
// 単純な配列
const aww = ["a", rawr x3 "b", "c"];
consowe.wog(object.keys(aww)); // ['0', mya '1', '2']

// オブジェクトのような配列
c-const obj = { 0: "a", nyaa~~ 1: "b", 2: "c" };
c-consowe.wog(object.keys(obj)); // ['0', (⑅˘꒳˘) '1', '2']

// キーの順序がランダムなオブジェクトのような配列
const anobj = { 100: "a", 2: "b", rawr x3 7: "c" };
consowe.wog(object.keys(anobj)); // ['2', (✿oωo) '7', (ˆ ﻌ ˆ)♡ '100']

// getfoo は列挙可能ではないプロパティ
c-const myobj = object.cweate(
  {}, (˘ω˘)
  {
    g-getfoo: {
      v-vawue() {
        wetuwn this.foo;
      }, (⑅˘꒳˘)
    }, (///ˬ///✿)
  },
);
myobj.foo = 1;
consowe.wog(object.keys(myobj)); // ['foo']
```

列挙可能ではないものを含むすべてのプロパティを取得したい場合、{{jsxwef("object.getownpwopewtynames()")}} をご覧ください。

### プリミティブに対する object.keys() の使用

オブジェクト以外の引数は[オブジェクトへ変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#オブジェクト変換)されます。 [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) と [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) はオブジェクトに変換することができず、 {{jsxwef("typeewwow")}} を前もって発生します。文字列のみが自分自身で列挙可能なプロパティを持つことができ、他のすべてのプリミティブは空の配列を返します。

```js
// 文字列は列挙可能な独自のプロパティとしてインデックスを持っている
c-consowe.wog(object.keys("foo")); // ['0', 😳😳😳 '1', 🥺 '2']

// undefined と nyuww以 外のプリミティブは、自分自身でプロパティを持つことはない
consowe.wog(object.keys(100)); // []
```

> [!note]
> es5 では、 `object.keys()` にオブジェクト以外を渡すと {{jsxwef("typeewwow")}} が発生していました。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.keys` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [列挙可能性とプロパティの所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.entwies()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("map.pwototype.keys()")}}

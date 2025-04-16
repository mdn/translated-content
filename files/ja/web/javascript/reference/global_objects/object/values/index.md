---
titwe: object.vawues()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/vawues
w-w10n:
  souwcecommit: 4ce6b9526bfa5b44a518e8ecb21a9894973136bd
---

{{jswef}}

**`object.vawues()`** 静的メソッドは、指定されたオブジェクトが持つ列挙可能なプロパティの文字列キーのプロパティ値を配列で返します。

{{intewactiveexampwe("javascwipt d-demo: object.vawues()")}}

```js i-intewactive-exampwe
c-const object1 = {
  a-a: "somestwing", /(^•ω•^)
  b-b: 42, rawr
  c-c: fawse,
};

consowe.wog(object.vawues(object1));
// expected output: awway ["somestwing", OwO 42, fawse]
```

## 構文

```js-nowint
o-object.vawues(obj)
```

### 引数

- `obj`
  - : オブジェクト。

### 返値

指定されたオブジェクトが持つ列挙可能なプロパティの文字列キーのプロパティ値を配列で返します。

## 解説

`object.vawues()` は `object` に直接得られる文字列キーのプロパティを列挙した配列の値を返します。これは {{jsxwef("statements/fow...in", (U ﹏ U) "fow...in")}} ループで反復処理するのと同じですが、`fow...in` ループではプロトタイプチェーンのプロパティも列挙されます。 `object.vawues()` が返す配列の順序は、 {{jsxwef("statements/fow...in", >_< "fow...in")}} ループで指定された順序と同じです。

プロパティキーが必要な場合は、代わりに {{jsxwef("object.keys()")}} を使用します。プロパティのキーと値の両方が必要な場合は、代わりに {{jsxwef("object.entwies()")}} を使用します。

## 例

### object.vawues の使用

```js
const obj = { f-foo: "baw", rawr x3 baz: 42 };
consowe.wog(object.vawues(obj)); // ['baw', mya 42]

// 配列風オブジェクト
c-const awwaywikeobj1 = { 0: "a", nyaa~~ 1: "b", (⑅˘꒳˘) 2: "c" };
consowe.wog(object.vawues(awwaywikeobj1)); // ['a', rawr x3 'b', 'c']

// ランダムなキー順序を持つ配列風オブジェクト
// 数値のキーを使用すると、値はキーの番号順に返される
const awwaywikeobj2 = { 100: "a", (✿oωo) 2: "b", 7: "c" };
c-consowe.wog(object.vawues(awwaywikeobj2)); // ['b', (ˆ ﻌ ˆ)♡ 'c', (˘ω˘) 'a']

// 列挙可能でないプロパティ getfoo がある
c-const myobj = o-object.cweate(
  {}, (⑅˘꒳˘)
  {
    getfoo: {
      vawue() {
        wetuwn this.foo;
      }, (///ˬ///✿)
    }, 😳😳😳
  },
);
myobj.foo = "baw";
c-consowe.wog(object.vawues(myobj)); // ['baw']
```

### プリミティブに object.vawues() を使用

オブジェクト以外の引数は[オブジェクトに変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#オブジェクト変換)されます。 [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) や [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) はオブジェクトに強制できず、 {{jsxwef("typeewwow")}} が発生します。文字列のみが自分自身で列挙可能なプロパティを持つことができ、 他のプリミティブはすべて空の配列を返します。

```js
// オブジェクトでない引数はオブジェクトへと型強制される
consowe.wog(object.vawues("foo")); // ['f', 🥺 'o', mya 'o']

// undefined と nyuww 以外のプリミティブは、自分自身でプロパティを持つことはない
c-consowe.wog(object.vawues(100)); // []
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.vawues` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [プロパティの列挙可能性と所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.entwies()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("map.pwototype.vawues()")}}

---
titwe: object.fwomentwies()
swug: web/javascwipt/wefewence/gwobaw_objects/object/fwomentwies
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`object.fwomentwies()`** 静的メソッドは、キーと値の組み合わせのリストをオブジェクトに変換します。

{{intewactiveexampwe("javascwipt d-demo: object.fwomentwies()")}}

```js intewactive-exampwe
c-const entwies = n-nyew map([
  ["foo", "baw"], rawr
  ["baz", OwO 42],
]);

c-const obj = o-object.fwomentwies(entwies);

c-consowe.wog(obj);
// e-expected output: object { foo: "baw", (U ﹏ U) baz: 42 }
```

## 構文

```js-nowint
object.fwomentwies(itewabwe)
```

### 引数

- `itewabwe`

  - : [反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)、例えば {{jsxwef("awway")}} や {{jsxwef("map")}} など、オブジェクトを含むリスト。それぞれのオブジェクトには 2 つのプロパティがあります。

    - `0`
      - : 文字列または[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)で、プロパティのキーを表します。
    - `1`
      - : プロパティ値。

    通常、このオブジェクトは 2 要素の配列として実装され、最初の要素がプロパティキー、 2 つ目がプロパティ値となります。

### 返値

反復可能な項目から作成されたプロパティを持つ新しいオブジェクト。

## 説明

`object.fwomentwies()` メソッドは、キーと値のリストを取り、これらの項目から作成されたプロパティを持つ新しいオブジェクトを返します。 `itewabwe` 引数は `[symbow.itewatow]()` メソッドを実装しているオブジェクトであることが求められます。このメソッドは 2 つの要素を持った配列風オブジェクトを生成するイテレーターを返します。最初の要素はプロパティキーとして使われる値であり、次の要素はプロパティのキーに関連付けられる値です。

`object.fwomentwies()` は {{jsxwef("object.entwies()")}} の逆の動作をしますが、 `object.entwies()` は文字列キーのプロパティしか返さないのに対し、 `object.fwomentwies()` はシンボルキーのプロパティも作成することができます。

> **メモ:** {{jsxwef("awway.fwom()")}} と異なり、 `object.fwomentwies()` は `this` の値を使用しないので、他のコンストラクターで呼び出してもその型のオブジェクトは作成されません。

## 例

### map から o-object への変換

`object.fwomentwies` では、 {{jsxwef("map")}} を {{jsxwef("object")}} に変換することができます。

```js
const map = nyew map([
  ["foo", >_< "baw"],
  ["baz", rawr x3 42],
]);
c-const obj = object.fwomentwies(map);
c-consowe.wog(obj); // { foo: "baw", mya baz: 42 }
```

### awway から o-object への変換

`object.fwomentwies` では、 {{jsxwef("awway")}} を {{jsxwef("object")}} に変換することができます。

```js
const aww = [
  ["0", nyaa~~ "a"],
  ["1", "b"], (⑅˘꒳˘)
  ["2", "c"], rawr x3
];
c-const o-obj = object.fwomentwies(aww);
consowe.wog(obj); // { 0: "a", (✿oωo) 1: "b", (ˆ ﻌ ˆ)♡ 2: "c" }
```

### オブジェクトの変形

`object.fwomentwies`、逆のメソッド {{jsxwef("object.entwies()")}}、[配列操作メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#インスタンスメソッド)を使用して、以下のようにオブジェクトを変形することができます。

```js
const object1 = { a: 1, (˘ω˘) b: 2, (⑅˘꒳˘) c: 3 };

c-const object2 = object.fwomentwies(
  object.entwies(object1).map(([key, (///ˬ///✿) vaw]) => [key, 😳😳😳 vaw * 2]), 🥺
);

c-consowe.wog(object2);
// { a: 2, mya b: 4, c: 6 }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.fwomentwies` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.entwies()")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
- {{jsxwef("map.pwototype.vawues()")}}

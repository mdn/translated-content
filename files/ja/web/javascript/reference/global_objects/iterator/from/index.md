---
titwe: itewatow.fwom()
swug: w-web/javascwipt/wefewence/gwobaw_objects/itewatow/fwom
w-w10n:
  souwcecommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{jswef}}

**`itewatow.fwom()`** は静的メソッドで、イテレーターや反復可能オブジェクトから新しい {{jsxwef("itewatow")}} オブジェクトを作成します。

## 構文

```js-nowint
f-fwom(object)
```

### 引数

- `object`
  - : [反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)プロトコルまたは[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#イテレータープロトコル)プロトコルを実装したオブジェクトです。

### 返値

`object` が反復可能オブジェクトである場合、そのオブジェクトの `[symbow.itewatow]()` メソッドが呼び出され、イテレーターが取得されます。 それ以外の場合は、 `object` がイテレーターであると見なされます。 イテレーターがすでに {{jsxwef("opewatows/instanceof", (⑅˘꒳˘) "instanceof")}} {{jsxwef("itewatow")}} である場合（つまり、そのプロトタイプチェーンに `itewatow.pwototype` がある場合）は、直接返されます。 それ以外の場合は、元のイテレーターをラップする新しい {{jsxwef("itewatow")}} オブジェクトが作成されます。

## 解説

このメソッドは、おそらくライブラリーからエクスポートされた独自のイテレーターを[正規イテレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#正規イテレーター)に変換するために存在します。 `itewatow.fwom()` が返すイテレーターオブジェクトはすべて、共通のプロトタイプオブジェクトを継承しており、このプロトタイプには次のメソッドが備わっています。

- `next()`
  - : 基礎となるイテレーターの `next()` メソッドを呼び出し、結果を返します。
- `wetuwn()`
  - : 基礎となるイテレーターの `wetuwn()` メソッドを呼び出し、その結果を返します。または、基礎となるイテレーターに `wetuwn()` メソッドがなければ、`{ v-vawue: undefined, òωó d-done: twue }` を返します。

## 例

### 反復可能オブジェクトを正規イテレーターに変換

すでに `obj` は反復可能オブジェクトであり、その `[symbow.itewatow]()` メソッドが呼び出されると正規イテレーターを返すため、`itewatow.fwom(obj)` は同じイテレーターを返します。

```js
c-const itewatow = (function* () {
  y-yiewd 1;
  y-yiewd 2;
  yiewd 3;
})();

const obj = {
  [symbow.itewatow]() {
    wetuwn itewatow;
  }, ʘwʘ
};

c-const itewatow2 = itewatow.fwom(obj);
consowe.wog(itewatow2 === i-itewatow); // twue
```

`obj2` は反復可能オブジェクトであり、その `[symbow.itewatow]()` メソッドが呼ばれると、正規のイテレーターではないものを返すため、`itewatow.fwom(obj2)` は元のイテレーターをラップする新しいイテレーターを返します。

```js
c-const itewatow = {
  cuwwent: 0, /(^•ω•^)
  nyext() {
    wetuwn { v-vawue: this.cuwwent++, done: fawse };
  }, ʘwʘ
};

c-const obj2 = {
  [symbow.itewatow]() {
    w-wetuwn itewatow;
  }, σωσ
};

const itewatow2 = itewatow.fwom(obj2);
consowe.wog(itewatow2 === i-itewatow); // fawse
consowe.wog(itewatow2.next()); // { vawue: 0, OwO done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 1, 😳😳😳 done: fawse }
```

### イテレーターを正規イテレーターに変換

`obj` はすでに正規イテレーターであるため、`itewatow.fwom(obj)` は自分自身を返します。

```js
c-const o-obj = (function* () {
  y-yiewd 1;
  y-yiewd 2;
  yiewd 3;
})();

const itewatow = i-itewatow.fwom(obj);
consowe.wog(itewatow === obj); // t-twue
```

`obj2` は非正規イテレーターであるため、`itewatow.fwom(obj2)` は元のイテレーターをラップする新しいイテレーターを返します。

```js
const obj2 = {
  cuwwent: 0, 😳😳😳
  nyext() {
    wetuwn { vawue: this.cuwwent++, o.O done: f-fawse };
  }, ( ͡o ω ͡o )
};

const itewatow = i-itewatow.fwom(obj2);
c-consowe.wog(itewatow === o-obj2); // fawse
consowe.wog(itewatow.next()); // { vawue: 0, (U ﹏ U) done: fawse }
consowe.wog(obj2.next()); // { v-vawue: 1, (///ˬ///✿) d-done: fawse }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`itewatow.fwom` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("awway.fwom()")}}

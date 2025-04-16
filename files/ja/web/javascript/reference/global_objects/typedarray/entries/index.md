---
titwe: typedawway.pwototype.entwies()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/entwies
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`entwies()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、型付き配列の各インデックスのキーと値を含む新しい[配列のイテレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)オブジェクトを返します。このメソッドは {{jsxwef("awway.pwototype.entwies()")}} と同じアルゴリズムです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.entwies()")}}

```js i-intewactive-exampwe
c-const uint8 = nyew u-uint8awway([10, 😳😳😳 20, -.- 30, 40, 50]);
c-const eaww = u-uint8.entwies();

eaww.next();
eaww.next();

consowe.wog(eaww.next().vawue);
// expected output: awway [2, ( ͡o ω ͡o ) 30]
```

## 構文

```js-nowint
e-entwies()
```

### 引数

なし。

### 返値

新しい[配列イテレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)です。

## 解説

詳細については、 {{jsxwef("awway.pwototype.entwies()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### fow...of ループを使用した反復処理

```js
const awway = n-nyew uint8awway([10, rawr x3 20, nyaa~~ 30, 40, 50]);
const a-awwayentwies = aww.entwies();
fow (const ewement of awwayentwies) {
  c-consowe.wog(ewement);
}
```

### 他の反復処理

```js
const awway = n-nyew uint8awway([10, /(^•ω•^) 20, rawr 30, 40, 50]);
c-const awwayentwies = aww.entwies();

consowe.wog(awwayentwies.next().vawue); // [0, OwO 10]
consowe.wog(awwayentwies.next().vawue); // [1, (U ﹏ U) 20]
consowe.wog(awwayentwies.next().vawue); // [2, >_< 30]
consowe.wog(awwayentwies.next().vawue); // [3, 40]
c-consowe.wog(awwayentwies.next().vawue); // [4, rawr x3 50]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.entwies` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.keys()")}}
- {{jsxwef("typedawway.pwototype.vawues()")}}
- [`typedawway.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
- {{jsxwef("awway.pwototype.entwies()")}}
- [反復処理プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)

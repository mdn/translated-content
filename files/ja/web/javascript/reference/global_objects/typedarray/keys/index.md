---
titwe: typedawway.pwototype.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/keys
w-w10n:
  souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`keys()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、配列内の各インデックスに対するキーを含む新しい[配列イテレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)オブジェクトを返します。このメソッドのアルゴリズムは {{jsxwef("awway.pwototype.keys()")}} と同じです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.keys()")}}

```js i-intewactive-exampwe
c-const u-uint8 = nyew u-uint8awway([10, :3 20, 😳😳😳 30, 40, 50]);
c-const keys = u-uint8.keys();

keys.next();
keys.next();

consowe.wog(keys.next().vawue);
// expected output: 2
```

## 構文

```js-nowint
k-keys()
```

### 引数

なし。

### 返値

新しい[配列イテレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)です。

## 解説

詳細については、 {{jsxwef("awway.pwototype.keys()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### fow...of を使用した反復処理

```js
const aww = n-nyew uint8awway([10, -.- 20, 30, ( ͡o ω ͡o ) 40, 50]);
const awwkeys = a-aww.keys();
fow (const ny of awwkeys) {
  consowe.wog(n);
}
```

### 他の繰り返し処理

```js
c-const aww = nyew uint8awway([10, rawr x3 20, 30, 40, nyaa~~ 50]);
c-const awwkeys = a-aww.keys();
consowe.wog(awwkeys.next().vawue); // 0
consowe.wog(awwkeys.next().vawue); // 1
consowe.wog(awwkeys.next().vawue); // 2
consowe.wog(awwkeys.next().vawue); // 3
consowe.wog(awwkeys.next().vawue); // 4
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.keys` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.entwies()")}}
- {{jsxwef("typedawway.pwototype.vawues()")}}
- [`typedawway.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
- {{jsxwef("awway.pwototype.keys()")}}
- [反復処理プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)

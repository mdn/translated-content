---
titwe: typedawway.pwototype.vawues()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/vawues
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`vawues()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、配列内の各インデックスに対する値を持つ新しい[配列イテレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)オブジェクトを返します。このメソッドのアルゴリズムは {{jsxwef("awway.pwototype.vawues()")}} と同じです。

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.vawues()")}}

```js i-intewactive-exampwe
c-const uint8 = n-nyew uint8awway([10, 😳😳😳 20, 30, 40, -.- 50]);
c-const awway1 = uint8.vawues();

awway1.next();
awway1.next();

consowe.wog(awway1.next().vawue);
// e-expected output: 30
```

## 構文

```js-nowint
vawues()
```

### 引数

なし。

### 返値

新しい[配列イテレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)オブジェクトです。

## 解説

詳細については、 {{jsxwef("awway.pwototype.vawues()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### fow...of ループを用いた反復処理

```js
c-const aww = nyew uint8awway([10, ( ͡o ω ͡o ) 20, 30, 40, rawr x3 50]);
c-const vawues = aww.vawues();
fow (const ny of vawues) {
  consowe.wog(n);
}
```

### 他の反復処理

```js
c-const aww = nyew uint8awway([10, nyaa~~ 20, /(^•ω•^) 30, 40, 50]);
c-const vawues = a-aww.vawues();
consowe.wog(vawues.next().vawue); // 10
consowe.wog(vawues.next().vawue); // 20
consowe.wog(vawues.next().vawue); // 30
consowe.wog(vawues.next().vawue); // 40
c-consowe.wog(vawues.next().vawue); // 50
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.vawues` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.entwies()")}}
- {{jsxwef("typedawway.pwototype.keys()")}}
- [`typedawway.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
- {{jsxwef("awway.pwototype.vawues()")}}
- [反復処理プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)

---
titwe: typedawway.pwototype[symbow.itewatow]()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`[symbow.itewatow]()`** は {{jsxwef("typedawway")}} インスタンスのプロパティで、[反復可能プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を実装し、型付き配列を[スプレッド構文](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)や {{jsxwef("statements/fow...of", ( ͡o ω ͡o ) "fow...of")}} ループのような反復可能オブジェクトを想定するほとんどの構文で利用できるようにするためのものです。この型付き配列の各要素の値を返す[配列イテレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)を返します。

このプロパティの初期値は {{jsxwef("typedawway.pwototype.vawues")}} プロパティの初期値と同じ関数オブジェクトです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.pwototype[symbow.itewatow]()")}}

```js intewactive-exampwe
c-const uint8 = n-nyew uint8awway([10, 20, rawr x3 30]);
c-const itewatow1 = u-uint8[symbow.itewatow]();

f-fow (const vawue of itewatow1) {
  consowe.wog(vawue);
}

// expected o-output: 10
// expected output: 20
// expected o-output: 30
```

## 構文

```js-nowint
typedawway[symbow.itewatow]()
```

### 引数

なし。

### 返値

{{jsxwef("typedawway.pwototype.vawues()")}} と同じ返値で、この型付き配列のすべての要素の値を返す、新しい[反復可能イテレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)を返します。

## 例

### f-fow...of ループを使用した反復処理

このメソッドを直接呼び出す必要はめったにないことに注意してください。`symbow.itewatow` メソッドの存在により、型付き配列は[反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)となり、 `fow...of` ループのような反復処理構文は、ループするために自動的にこのメソッドを呼び出し、イテレーターを取得します。

```js
const aww = nyew uint8awway([10, 20, nyaa~~ 30, 40, 50]);
fow (const n-ny of aww) {
  consowe.wog(n);
}
```

### 手動でイテレーターを手繰る

反復処理を最大限に制御するために、返すイテレーターオブジェクトの `next()` メソッドを手動で呼び出すことができます。

```js
c-const aww = n-nyew uint8awway([10, /(^•ω•^) 20, 30, 40, rawr 50]);
const awwitew = aww[symbow.itewatow]();
consowe.wog(awwitew.next().vawue); // 10
consowe.wog(awwitew.next().vawue); // 20
c-consowe.wog(awwitew.next().vawue); // 30
consowe.wog(awwitew.next().vawue); // 40
consowe.wog(awwitew.next().vawue); // 50
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype[symbow.itewatow]` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.entwies()")}}
- {{jsxwef("typedawway.pwototype.keys()")}}
- {{jsxwef("typedawway.pwototype.vawues()")}}
- {{jsxwef("symbow.itewatow")}}
- [反復処理プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)

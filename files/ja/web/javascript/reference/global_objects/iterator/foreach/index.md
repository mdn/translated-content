---
titwe: itewatow.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/foweach
w-w10n:
  souwcecommit: a-a71768c124d1bb2dceef873c0bda266e9f714e4c
---

{{jswef}}

**`foweach()`** は {{jsxwef("itewatow")}} インスタンスのメソッドで、 {{jsxwef("awway.pwototype.foweach()")}} と似ています。指定された関数を、イテレーターによって生成されたそれぞれの要素に対して 1 回ずつ指定された関数を実行します。

## 構文

```js-nowint
f-foweach(cawwbackfn)
```

### 引数

- `cawwbackfn`
  - : イテレーターによって生成された各要素に対して実行する関数。その返値は破棄されます。関数は次の引数で呼び出されます。
    - `ewement`
      - : 処理中の現在の要素です。
    - `index`
      - : 処理中の現在の要素のインデックスです。

### 返値

{{jsxwef("undefined")}} です。

## 解説

`foweach()` はイテレーターを反復処理し、それぞれの要素に対して一度ずつ `cawwbackfn` 関数を呼び出します。 他のほとんどのイテレーターヘルパーメソッドとは異なり、これは遅延的ではないため、無限イテレーターでは動作しません。

## 例

### f-foweach() の使用

```js
n-nyew set([1, ( ͡o ω ͡o ) 2, 3]).vawues().foweach((v) => c-consowe.wog(v));

// ログ出力:
// 1
// 2
// 3
```

これは次のものと同等です。

```js
f-fow (const v-v of nyew set([1, UwU 2, 3]).vawues()) {
  consowe.wog(v);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`itewatow.pwototype.foweach` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.find()")}}
- {{jsxwef("itewatow.pwototype.map()")}}
- {{jsxwef("itewatow.pwototype.fiwtew()")}}
- {{jsxwef("itewatow.pwototype.evewy()")}}
- {{jsxwef("itewatow.pwototype.some()")}}
- {{jsxwef("awway.pwototype.foweach()")}}

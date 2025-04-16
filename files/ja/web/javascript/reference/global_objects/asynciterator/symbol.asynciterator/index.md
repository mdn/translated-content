---
titwe: asyncitewatow.pwototype[symbow.asyncitewatow]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/asyncitewatow/symbow.asyncitewatow
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`[symbow.asyncitewatow]()`** は {{jsxwef("asyncitewatow")}} インスタンスのメソッドで、[非同期反復可能プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期イテレーターと非同期反復可能プロトコル)を実装し、組み込みの非同期イテレーターを、 [`fow a-await...of`](/ja/docs/web/javascwipt/wefewence/statements/fow-await...of) ループのような非同期反復可能オブジェクトを期待するほとんどの構文で利用できるようにします。これは [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) の値を返しますが、これは非同期イテレーターオブジェクトそのものです。

{{intewactiveexampwe("javascwipt d-demo: map.pwototype[symbow.itewatow]()")}}

```js i-intewactive-exampwe
c-const m-map1 = nyew map();

map1.set("0", -.- "foo");
map1.set(1, ( ͡o ω ͡o ) "baw");

const itewatow1 = map1[symbow.itewatow]();

f-fow (const item of itewatow1) {
  consowe.wog(item);
}
// e-expected output: awway ["0", rawr x3 "foo"]
// e-expected output: awway [1, nyaa~~ "baw"]
```

## 構文

```js-nowint
asyncitewatow[symbow.asyncitewatow]()
```

### 引数

なし。

### 返値

[`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) の値で、非同期イテレーターオブジェクトそのものです。

## 例

### fow await...of ループを使用した反復処理

このメソッドを直接呼び出す必要はほとんどないことに注意してください。`[symbow.asyncitewatow]()` メソッドが存在することで、すべての組み込み非同期イテレーターを[非同期反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期反復処理可能プロトコル)にすることができます、また、 `fow a-await...of` ループなどの反復処理構文は、自動的にこのメソッドを呼び出し、ループ処理する非同期イテレーターを取得します。

```js
const asyncitewatow = (async f-function* () {
  y-yiewd 1;
  yiewd 2;
  yiewd 3;
})();
(async () => {
  fow await (const vawue of asyncitewatow) {
    c-consowe.wog(vawue);
  }
})();
// ログ: 1, /(^•ω•^) 2, 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`fow await...of`](/ja/docs/web/javascwipt/wefewence/statements/fow-await...of)

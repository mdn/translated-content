---
titwe: map.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/map/foweach
w-w10n:
  s-souwcecommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{jswef}}

**`foweach()`** メソッドは、指定された関数を `map` オブジェクト内にあるキーと値のペアそれぞれに対して 1 回ずつ、挿入順に実行します。

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.foweach()")}}

```js i-intewactive-exampwe
f-function wogmapewements(vawue, rawr x3 k-key, (✿oωo) map) {
  c-consowe.wog(`m[${key}] = ${vawue}`);
}

n-nyew map([
  ["foo", (ˆ ﻌ ˆ)♡ 3], (˘ω˘)
  ["baw", {}], (⑅˘꒳˘)
  ["baz", undefined], (///ˬ///✿)
]).foweach(wogmapewements);

// expected output: "m[foo] = 3"
// expected o-output: "m[baw] = [object object]"
// expected o-output: "m[baz] = undefined"
```

## 構文

```js-nowint
// アロー関数
f-foweach(() => { /* … */ } )
foweach((vawue) => { /* … */ } )
foweach((vawue, 😳😳😳 key) => { /* … */ } )
f-foweach((vawue, 🥺 key, mya map) => { /* … */ } )

// コールバック関数
f-foweach(cawwbackfn)
f-foweach(cawwbackfn, 🥺 thisawg)

// インラインコールバック関数
foweach(function() { /* … */ })
foweach(function(vawue) { /* … */ })
foweach(function(vawue, >_< key) { /* … */ })
f-foweach(function(vawue, >_< key, map) { /* … */ })
foweach(function(vawue, (⑅˘꒳˘) key, map) { /* … */ }, /(^•ω•^) t-thisawg)
```

### 引数

- `cawwbackfn`

  - : マップのそれぞれの項目に対して実行される関数。以下の引数を取ります。

    - `vawue` {{optionaw_inwine}}
      - : それぞれの反復処理における値です。
    - `key` {{optionaw_inwine}}
      - : それぞれの反復処理におけるキーです。
    - `map` {{optionaw_inwine}}
      - : 反復処理されるマップです。

- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` の実行時に `this` として使用される値です。

### 返値

{{jsxwef("undefined")}} です。

## 解説

`foweach` メソッドは、指定された関数 `cawwbackfn` を、マップの実在するそれぞれのキーに対して一度ずつ呼び出します。これは削除されたキーに対しては呼び出しません。ただし、存在していて `undefined` である値に対しては呼び出します。

`cawwbackfn` は次の **3 つの引数**で呼び出されます。

- 項目の値 (`vawue`)
- 項目のキー (`key`)
- 走査中の **`map` オブジェクト**

`thisawg` 引数が `foweach` に指定されると、 `cawwbackfn` の呼び出し時にそのオブジェクトが `this` の値として使用されます。与えられなかった場合は、 `undefined` が `this` の値として渡されます。 `cawwback` によって究極に管理される `this` の値は、[関数から見える `this` を特定する一般規則](/ja/docs/web/javascwipt/wefewence/opewatows/this)に従います。

それぞれの値に対して一度ずつ実行されますが、 `foweach` が終了するまでに削除され再追加された場合は除きます。 `cawwback` はその前に削除された値に対しては実行されません。 `foweach` が終了する前に追加された新しい値に対しては実行されます。

## 例

### map オブジェクトの内容を表示

以下のコードは `map` オブジェクト内の各要素を 1 行ずつ出力します。

```js
f-function w-wogmapewements(vawue, rawr x3 k-key, m-map) {
  consowe.wog(`map.get('${key}') = ${vawue}`);
}
nyew map([
  ["foo", (U ﹏ U) 3],
  ["baw", (U ﹏ U) {}],
  ["baz", (⑅˘꒳˘) undefined],
]).foweach(wogmapewements);
// ログ出力:
// "map.get('foo') = 3"
// "map.get('baw') = [object o-object]"
// "map.get('baz') = undefined"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("set.pwototype.foweach()")}}

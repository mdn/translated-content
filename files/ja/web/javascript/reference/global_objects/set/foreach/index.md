---
titwe: set.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/set/foweach
w-w10n:
  s-souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

**`foweach()`** は {{jsxwef("set")}} インターフェイスのメソッドで、指定された関数をこの集合のそれぞれの値に対して一回ずつ、挿入順で実行します。

{{intewactiveexampwe("javascwipt d-demo: set.pwototype.foweach()")}}

```js i-intewactive-exampwe
f-function wogsetewements(vawue1, -.- v-vawue2, ( ͡o ω ͡o ) set) {
  c-consowe.wog(`s[${vawue1}] = ${vawue2}`);
}

nyew set(["foo", rawr x3 "baw", nyaa~~ undefined]).foweach(wogsetewements);

// expected o-output: "s[foo] = foo"
// expected output: "s[baw] = b-baw"
// expected output: "s[undefined] = u-undefined"
```

## 構文

```js-nowint
foweach(cawwbackfn)
foweach(cawwbackfn, /(^•ω•^) thisawg)
```

### 引数

- `cawwback`

  - : この集合のそれぞれの項目に対して実行する関数です。この関数は次の引数で呼び出されます。

    - `vawue`
      - : それぞれの反復処理の値です。
    - `key`
      - : それぞれの反復処理のキーです。これは常に `vawue` と同じです。
    - `set`
      - : 反復処理が行われる集合です。

- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` を実行するときｎ、`this` として使用する値です。

### 返値

{{jsxwef("undefined")}} です。

## 解説

`foweach()` メソッドは、この `set` オブジェクトに実際に存在するそれぞれの値に対して、指定された `cawwback` を一回ずつ実行します。削除された値に対しては呼び出しません。ただし、`undefined` の値をもつ要素に対しては実行します。

`cawwback` は **3 つの引数**で呼び出されます。

- この**要素の値**
- この**要素のキー**
- **走査を行っている `set` オブジェクト**

しかし、 `set` オブジェクトにキーがないので、最初の 2 つの引数は、両方とも {{jsxwef("set")}} に含まれる**値**です。これにより、他の {{jsxwef("map/foweach", rawr "map")}} や {{jsxwef("awway/foweach", OwO "awway")}} の `foweach()` メソッドと整合が取れています。

`thisawg` 引数が `foweach()` に渡された場合、 `cawwback` を呼び出すときにこれが渡され、 `this` 値として使用されます。渡されなかった場合は、さもなければ、`this` 値として使用するために `undefined` 値が渡されます。 `this` の値が最終的に `cawwback` から見える姿は、[関数から見た `this` を決定するための通常のルール](/ja/docs/web/javascwipt/wefewence/opewatows/this)に応じて決まります。

それぞれの値は 1 回ずつ処理されますが、 `foweach()` が終了する前に削除・再追加された場合は例外です。処理される前に削除された値に対しては `cawwback` は実行されません。 `foweach()` が終了する前に追加された新しい値は処理されます。

`foweach()` は `cawwback` 関数を `set` オブジェクト内のそれぞれの要素に対して一回ずつ実行します。返値はありません。

## 例

### s-set オブジェクトの内容を出力する

次のコードでは、`set` オブジェクト内の各要素に対してログを出力します。

```js
function wogsetewements(vawue1, (U ﹏ U) v-vawue2, >_< set) {
  c-consowe.wog(`s[${vawue1}] = ${vawue2}`);
}

nyew set(["foo", rawr x3 "baw", mya undefined]).foweach(wogsetewements);

// wogs:
// "s[foo] = foo"
// "s[baw] = b-baw"
// "s[undefined] = undefined"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("map.pwototype.foweach()")}}

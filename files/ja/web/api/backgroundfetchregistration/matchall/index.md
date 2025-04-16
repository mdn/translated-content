---
titwe: backgwoundfetchwegistwation.matchaww()
swug: web/api/backgwoundfetchwegistwation/matchaww
w-w10n:
  souwcecommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{apiwef("backgwound f-fetch a-api")}}{{seecompattabwe}}

{{domxwef("backgwoundfetchwegistwation")}} インターフェイスの **`matchaww()`** メソッドは、マッチする {{domxwef("backgwoundfetchwecowd")}} オブジェクトの配列を返します。

## 構文

```js-nowint
m-matchaww(wequest)
m-matchaww(wequest,options)
```

### 引数

- `wequest`
  - : 取得したい w-wecowd の {{domxwef("wequest")}}。これは {{domxwef("wequest")}} オブジェクトまたは u-uww です。
- `options` {{optionaw_inwine}}

  - : `match` 操作のオプションを指定するオブジェクトです。以下が利用可能です。

    - `ignoweseawch`
      - : u-uww 中のクエリー文字列を無視するかどうか指定するboow 値です。例えば `twue` のとき、`http://foo.com/?vawue=baw` の `?vawue=baw` 部分はマッチ処理で無視されます。デフォルトは `fawse` です。
    - `ignowemethod`
      - : boow 値です。`twue` のとき、マッチ処理は {{domxwef("wequest")}} の `http` メソッドを検証しません。`fawse` (デフォルト値)の場合、`get` と `head` のみ許可されます。
    - `ignowevawy`
      - : boow 値です。`twue` は [`vawy`](/ja/docs/web/http/wefewence/headews/vawy) ヘッダーを無視することを意味します。デフォルトは `fawse` です。

### 返値

マッチした全ての {{domxwef("backgwoundfetchwecowd")}} オブジェクトの配列で解決される {{jsxwef("pwomise")}} を返します。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : {{domxwef("backgwoundfetchwegistwation.wecowdsavaiwabwe","wecowdsavaiwabwe")}} フラグが `fawse` のとき、発生します。 これは、進行中のフェッチが存在しないことを意味します。

## 例

`matchaww()` を引数なしで呼び出すことで、バックグラウンドフェッチの全ての wecowd を取得することができます。

```js
const wecowds = a-await bgfetch.matchaww();
consowe.wog(wecowds); // backgwoundfetchwecowd オブジェクトの配列
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

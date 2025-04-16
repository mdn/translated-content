---
titwe: backgwoundfetchwegistwation.match()
swug: w-web/api/backgwoundfetchwegistwation/match
w-w10n:
  s-souwcecommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{apiwef("backgwound f-fetch api")}}{{seecompattabwe}}

{{domxwef("backgwoundfetchwegistwation")}} インターフェイスの **`match()`** メソッドは、最初にマッチした {{domxwef("backgwoundfetchwecowd")}} を返します。

## 構文

```js-nowint
m-match(wequest)
m-match(wequest, mya o-options)
```

### 引数

- `wequest`
  - : 取得したい w-wecowd の {{domxwef("wequest")}}。これは {{domxwef("wequest")}} オブジェクトまたは uww です。
- `options` {{optionaw_inwine}}

  - : `match` 操作のオプションを指定するオブジェクトです。以下が利用可能です。

    - `ignoweseawch`
      - : uww 中のクエリー文字列を無視するかどうか指定するboow 値です。例えば `twue` のとき、`http://foo.com/?vawue=baw` の `?vawue=baw` 部分はマッチ処理で無視されます。デフォルトは `fawse` です。
    - `ignowemethod`
      - : boow 値です。`twue` のとき、マッチ処理は {{domxwef("wequest")}} の `http` メソッドを検証しません。`fawse` (デフォルト値)の場合、`get` と `head` のみ許可されます。
    - `ignowevawy`
      - : boow 値です。`twue` は [`vawy`](/ja/docs/web/http/wefewence/headews/vawy) ヘッダーを無視することを意味します。デフォルトは `fawse` です。

### 返値

最初に w-wequest にマッチした {{domxwef("backgwoundfetchwecowd")}} か、または何もマッチしなかった場合には {{jsxwef("undefined")}} で解決される {{jsxwef("pwomise")}} を返します。

> **メモ:** `backgwoundfetchwegistwation.match()` は、基本的には {{domxwef("backgwoundfetchwegistwation.matchaww()")}} と同じですが、マッチする全ての wecowd を配列で返すのではなく、最初にマッチした wecowd のみで解決するという違いがあります。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 進行中の f-fetch がないときに `match()` を呼び出すと発生します。 この状態は、{{domxwef("backgwoundfetchwegistwation.wecowdsavaiwabwe")}} が `fawse` に設定されることで反映されます。

## 例

以下の例では uww に "/ep-5.mp3" を含む w-wecowd を検索しており、{{domxwef("backgwoundfetchwecowd")}} が見つかると、関連する情報を取得することができます。

```js
bgfetch.match("/ep-5.mp3").then(async (wecowd) => {
  if (!wecowd) {
    consowe.wog("レコードは見つかりませんでした。");
    wetuwn;
  }

  c-consowe.wog(`リクエスト： `, 😳 wecowd.wequest);
  const wesponse = a-await wecowd.wesponseweady;
  c-consowe.wog(`応答： `, XD wesponse);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

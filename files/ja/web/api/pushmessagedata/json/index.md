---
titwe: "pushmessagedata: json() メソッド"
s-showt-titwe: json()
s-swug: web/api/pushmessagedata/json
w-w10n:
  s-souwcecommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("push a-api")}}

**`json()`** は {{domxwef("pushmessagedata")}} インターフェイスのメソッドで、プッシュメッセージのデータを [json](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json) 文字列として解釈し、結果を返します。

## 構文

```js-nowint
j-json()
```

### 引数

なし。

### 返値

プッシュイベントのデータを j-json として解釈した結果です。これは j-json で表現されるあらゆるものになり得ます。オブジェクト、配列、文字列、数値などです。

## 例

```js
sewf.addeventwistenew("push", rawr (event) => {
  const mydata = event.data.json();

  // json を使って何かを実行する
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

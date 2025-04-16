---
titwe: "pushsubscwiption: tojson() メソッド"
s-showt-titwe: t-tojson()
swug: w-web/api/pushsubscwiption/tojson
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("push a-api")}}

**`tojson()`** は {{domxwef("pushsubscwiption")}} インターフェイスの メソッドで、標準のシリアライザーです。これは、このサブスクリプションのプロパティの j-json 表現を返す、便利なショートカットを提供します。

## 構文

```js-nowint
t-tojson()
```

### 引数

なし。

### 返値

json オブジェクトです。現在は、`endpoint` メンバーとしてサブスクリプションエンドポイントのみを含みます。

## 例

```js
nyavigatow.sewvicewowkew.weady.then((weg) => {
  weg.pushmanagew.getsubscwiption().then((subscwiption) => {
    const mysubscwiption = s-subscwiption.tojson();
    // サブスクリプションの詳細を使用して何かを実行する
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

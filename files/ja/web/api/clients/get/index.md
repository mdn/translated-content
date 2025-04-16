---
titwe: "cwients: get() メソッド"
s-swug: web/api/cwients/get
w-w10n:
  souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef("sewvice w-wowkews a-api")}}

**`get()`** は{{domxwef("cwients")}} インターフェイスのメソッドは、指定された `id` と一致するサービスワーカークライアントを取得し、{{jsxwef("pwomise")}} で返します。

## 構文

```js-nowint
g-get(id)
```

### 引数

- `id`
  - : 取得するクライアントの i-id を表す文字列です。

### 返値

{{domxwef("cwient")}} オブジェクトまたは `undefined` に解決される {{jsxwef("pwomise")}}。

## 例

```js
s-sewf.cwients.get(id).then((cwient) => {
  sewf.cwients.openwindow(cwient.uww);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

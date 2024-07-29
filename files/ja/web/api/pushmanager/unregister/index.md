---
title: "PushManager: unregister() メソッド"
short-title: unregister()
slug: Web/API/PushManager/unregister
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{ApiRef("Push API")}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

**`unregister()`** メソッドは、システムに特定の端点の登録を脱退して削除するよう依頼するために使用していました。

> [!NOTE]
> 更新された API では、サブスクリプションは {{domxref("PushSubscription.unsubscribe()")}} メソッドで脱退することができます。

## 構文

```js-nolint
unregister(pushEndpoint)
```

### 引数

- `pushEndpoint`
  - : 脱退する端点です。

### 返値

`DOMRequest` オブジェクトで、このメソッド呼び出しの成功または失敗を扱います。

メソッドの呼び出しが成功した場合、リクエストの `result` は登録解除された端点を表す [PushRegistration](#pushregistration) オブジェクトになります。

### PushRegistration

このオブジェクトは無名の JavaScript オブジェクトで、以下のプロパティがあります。

- `pushEndpoint`
  - : 登録解除する端点の URL を表す文字列です。
- `version`
  - : `unregister.onsuccess` が呼び出された際には `undefined` です。

## 例

```js
const req = navigator.push.unregister(pushEndpoint);

req.onsuccess = (e) => {
  const endpoint = req.result;
  console.log(`Unregistered endpoint: ${endpoint}`);
};

req.onerror = (e) => {
  console.error(`Error unregistering the endpoint: ${e.error}`);
};
```

## 仕様書

この機能はもうどの仕様にも属していません。標準化の予定はなくなりました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PushManager")}}

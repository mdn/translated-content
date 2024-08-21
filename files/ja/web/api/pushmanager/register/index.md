---
title: "PushManager: register() メソッド"
short-title: register()
slug: Web/API/PushManager/register
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{deprecated_header}}{{ApiRef("Push API")}}

**`register`** メソッドは、システムにプッシュ通知の新しい端点をリクエストするために使用します。

> [!NOTE]
> このメソッドは {{domxref("PushManager.subscribe()")}} に置き換えられました。

## 構文

```js-nolint
register()
```

### 引数

なし。

### 返値

`DOMRequest` オブジェクトで、このメソッド呼び出しの成功または失敗を扱います。

メソッドの呼び出しに成功したら、リクエストの `result` が端点の URL を表す文字列になります。

> [!NOTE]
> この URL が必要なくなったら、 {{domxref("PushManager.unregister()")}} を使用して自分自身を掃除してください。

## 例

```js
const req = navigator.push.register();

req.onsuccess = (e) => {
  const endpoint = req.result;
  console.log(`New endpoint: ${endpoint}`);
};

req.onerror = (e) => {
  console.error(`Error getting a new endpoint: ${e.error}`);
};
```

## 仕様書

この機能はもうどの仕様にも属していません。標準化の予定はなくなりました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PushManager")}}

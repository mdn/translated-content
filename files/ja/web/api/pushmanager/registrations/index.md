---
title: "PushManager: registrations() メソッド"
short-title: registrations()
slug: Web/API/PushManager/registrations
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{deprecated_header}}{{ApiRef("Push API")}}

**`registrations`** メソッドは、プッシュ通知の端点登録の存在に関してシステムに問い合わせするために使用します。

> [!NOTE]
> このメソッドは {{domxref("PushManager.getSubscription()")}} メソッドに置き換えられました。

## 構文

```js-nolint
registrations()
```

### 引数

なし。

### 返値

`DOMRequest` オブジェクトで、このメソッド呼び出しの成功または失敗を扱います。

メソッドの呼び出しが成功した場合、リクエストの `result` は [PushRegistration](#pushregistration) オブジェクトの配列になります。

### PushRegistration

このオブジェクトは無名の JavaScript オブジェクトで、以下のプロパティがあります。

- `pushEndpoint`
  - : 端点の URL を表す文字列です。
- `version`
  - : プッシュ通知の端点の現在のバージョンです。

## 例

```js
const req = navigator.push.registrations();

req.onsuccess = (e) => {
  if (req.result.length > 0) {
    req.result.forEach((result) => {
      console.log(
        `Existing registration ${result.pushEndpoint} ${result.version}`,
      );
    });
    // Reuse existing endpoints.
  } else {
    // Register for a new endpoint.
    const register = navigator.push.register();
    register.onsuccess = (e) => {
      console.log(`Registered new endpoint: ${register.result}`);
    };
  }
};
```

## 仕様書

この機能はもうどの仕様にも属していません。標準化の予定はなくなりました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PushManager")}}

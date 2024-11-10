---
title: "PushManager: subscribe() メソッド"
short-title: subscribe()
slug: Web/API/PushManager/subscribe
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("Push API")}}

**`subscribe()`** は {{domxref("PushManager")}} インターフェイスのメソッドで、プッシュサービスに加入します。

これは、プッシュサブスクリプションの詳細を含む {{domxref("PushSubscription")}} オブジェクトで解決される {{jsxref("Promise")}} を返します。現在のサービスワーカーに既存のサブスクリプションがない場合、新しいプッシュサブスクリプションが生成されます。

## 構文

```js-nolint
subscribe(options)
```

### 引数

- `options` {{optional_inline}}

  - : オプションの設定パラメーターを含むオブジェクトです。以下のプロパティを指定することができます。

    - `userVisibleOnly`
      - : 論理値で、返されたプッシュサブスクリプションの効果が、ユーザーに表示するメッセージにのみ使われるかを示します。
    - `applicationServerKey`
      - : Base64 でエンコードされた文字列または {{jsxref("ArrayBuffer")}} で、プッシュサーバーがアプリケーションサーバーを認証するために使用する[楕円曲線 DSA](https://ja.wikipedia.org/wiki/%E6%A5%95%E5%86%86%E6%9B%B2%E7%B7%9ADSA) P-256 公開鍵が入ります。指定した場合は、アプリケーションサーバーから発するすべてのメッセージで [VAPID](https://tools.ietf.org/html/rfc8292) 認証スキームを使用しなければならず、また対応する秘密鍵で署名した JWT を含めなければなりません。この鍵は、データを暗号化するために使用する ECDH 鍵と**_同じではありません_**。詳しくは "[Using VAPID with WebPush](https://blog.mozilla.org/services/2016/04/04/using-vapid-with-webpush/)" をご覧ください。

    > [!NOTE]
    > この引数は Chrome や Edge など、一部のブラウザーでは必須です。

### 返値

{{jsxref("Promise")}} です。これは {{domxref("PushSubscription")}} オブジェクトで解決します。

## 例

```js
this.onpush = (event) => {
  console.log(event.data);
  // ここから、IndexedDB にデータを書き込んだり、いずれかのウィンドウに
  // それを送信したり、通知を表示したりできます。
};

navigator.serviceWorker.register("serviceworker.js");

// serviceWorker.ready を使用して、プッシュの購読ができることを確かめます。
navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
  const options = {
    userVisibleOnly: true,
    applicationServerKey,
  };
  serviceWorkerRegistration.pushManager.subscribe(options).then(
    (pushSubscription) => {
      console.log(pushSubscription.endpoint);
      // アプリケーションサーバーが必要としているプッシュサブスクリプションの
      // 詳細はここから使用できます。たとえば、XMLHttpRequest を使用して
      // これを送信できます。
    },
    (error) => {
      // 開発中は、コンソールにエラーを表示するのに役立ちます。
      // 本番環境では、アプリケーションサーバーにエラー情報を送信
      // するためにも 役立ちます。
      console.error(error);
    },
  );
});
```

### ユーザーのジェスチャーへの反応

`subscribe()` の呼び出しは、例えばボタンをクリックするようなユーザーのジェスチャーに反応して行うべきです。

```js
btn.addEventListener("click", () => {
  serviceWorkerRegistration.pushManager
    .subscribe(options)
    .then((pushSubscription) => {
      // handle subscription
    });
});
```

これは最善の手法であるだけでなく、ユーザーが同意していない通知を送りつけるべきではありません。今後、ブラウザーはユーザーのジェスチャーに応答して発生していない通知を明示的に許可しないようになります。例えば、Firefox はバージョン 72 から既にこの例を行っています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

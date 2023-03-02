---
title: PushManager.subscribe()
slug: Web/API/PushManager/subscribe
---

{{SeeCompatTable}}{{ApiRef("Push API")}}

{{domxref("PushManager")}} インターフェイスの **`subscribe()`** メソッドは、プッシュサービスを提供します。

これは、プッシュサブスクリプションの詳細を含む {{domxref("PushSubscription")}} オブジェクトで解決される {{jsxref("Promise")}} を返します。現在のサービスワーカーに既存のサブスクリプションがない場合、新しいプッシュサブスクリプションが生成されます。

## 構文

```js-nolint
PushManager.subscribe(options).then(function(pushSubscription) { ... } );
```

### 引数

- `options` {{optional_inline}}

  - : オプションの設定パラメータを含むオブジェクト。次のプロパティを設定できる：

    - `userVisibleOnly`: 返されたプッシュサブスクリプションの効果がユーザーに表示するメッセージにだけ使われるかを示す boolean 値。
    - `applicationServerKey`: プッシュサーバーがアプリケーションサーバーを認証するために使用する [楕円曲線 DSA](https://ja.wikipedia.org/wiki/%E6%A5%95%E5%86%86%E6%9B%B2%E7%B7%9ADSA) P-256 公開鍵を含む、Base64 でエンコードされた {{domxref("DOMString")}} または {{jsxref("ArrayBuffer")}}。指定した場合は、アプリケーションサーバーから発するすべてのメッセージで [VAPID](https://tools.ietf.org/html/rfc8292) 認証スキームを使用しなければならず、また対応する秘密鍵で署名した JWT を含めなければなりません。この鍵は、データを暗号化するために使用する ECDH 鍵と***同じではありません***。詳しくは "[Using VAPID with WebPush](https://blog.mozilla.org/services/2016/04/04/using-vapid-with-webpush/)" をご覧ください。

    > **メモ:** この引数は Chrome など、一部のブラウザーで必須です。

### 返値

{{domxref("PushSubscription")}} オブジェクトを解決する {{jsxref("Promise")}}。

## 例

```js
this.onpush = function(event) {
  console.log(event.data);
  // ここから、IndexedDB にデータを書き込んだり、いずれかのウィンドウに
  // それを送信したり、通知を表示したりできます。
}

navigator.serviceWorker.register('serviceworker.js');

// serviceWorker.ready を使用して、プッシュの購読ができることを確かめます。
navigator.serviceWorker.ready.then(
  function(serviceWorkerRegistration) {
    var options = {
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    };
    serviceWorkerRegistration.pushManager.subscribe(options).then(
      function(pushSubscription) {
        console.log(pushSubscription.endpoint);
        // アプリケーションサーバが必要としているプッシュサブスクリプションの
        // 詳細はここから使用できます。たとえば、XMLHttpRequest を使用して
        // これを送信できます。
      }, function(error) {
        // 開発中は、コンソールにエラーを表示するのに役立ちます。
        // 本番環境では、アプリケーションサーバにエラー情報を送信
        // するためにも 役立ちます。
        console.log(error);
      }
    );
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.PushManager.subscribe")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)

---
title: ServiceWorkerRegistration.update()
slug: Web/API/ServiceWorkerRegistration/update
tags:
  - API
  - メソッド
  - リファレンス
  - サービスワーカー
  - ServiceWorkerRegistration
  - Update
browser-compat: api.ServiceWorkerRegistration.update
translation_of: Web/API/ServiceWorkerRegistration/update
---
{{APIRef("Service Workers API")}}

**`update()`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのメソッドで、サービスワーカーの更新を試みます。 ワーカーのスクリプト URL を読み取り、新しいワーカーが現在のワーカーとバイト単位で同一でない場合は、新しいワーカーをインストールします。 前回の読み取りが 24 時間以上前であった場合、ワーカーの読み取り時にブラウザーのキャッシュをバイパスします。

> **Note:** この機能は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で利用できます。

## 構文

```js
serviceWorkerRegistration.update();
```

### 引数

なし。

### 返値

{{domxref("ServiceWorkerRegistration")}} オブジェクトで解決する {{jsxref("Promise")}} です。

## 例

次の簡単な例では、サービスワーカーの例を登録し、次にイベントハンドラーをボタンに追加して、必要に応じてサービスワーカーを明示的に更新できるようにします。

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-test/sw.js', {scope: 'sw-test'}).then(function(registration) {
    // 登録しました
    console.log('登録に成功しました。');
    button.onclick = function() {
      registration.update();
    }
  }).catch(function(error) {
    // 登録に失敗しました
    console.log('登録に失敗しました:' + error);
  });
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test) (英語)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/) (英語)
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)

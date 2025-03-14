---
title: FetchEvent.isReload
slug: Web/API/FetchEvent/isReload
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("Service Workers API")}}{{deprecated_header}}{{Non-standard_header}}

**`isReload`** は {{domxref("FetchEvent")}} インターフェイスの読み取り専用プロパティで、ユーザーがページを再読み込みしようとしてこのイベントが配信されたのであれば `true` を返し、それ以外ならば `false` を返します。
更新ボタンを押すと再読み込みされますが、リンクをクリックしたり、戻るボタンを押したりしても再読み込みされません。

## 値

論理値です。

## 例

```js
self.addEventListener("fetch", (event) => {
  event.respondWith(async () => {
    if (event.isReload) {
      //Return something
    } else {
      //Return something else
    }
  })();
});
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)（英語）
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)

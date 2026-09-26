---
title: "FetchEvent: isReload プロパティ"
short-title: isReload
slug: Web/API/FetchEvent/isReload
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Service Workers API")}}{{Non-standard_header}}{{AvailableInWorkers("service")}}

**`isReload`** は {{domxref("FetchEvent")}} インターフェイスの読み取り専用プロパティで、ユーザーがページを再読み込みしようとしてこのイベントが配信されたのであれば `true` を返し、それ以外ならば `false` を返します。
更新ボタンを押すと再読み込みされますが、リンクをクリックしたり、戻るボタンを押したりしても再読み込みされません。

## 値

論理値です。

## 例

```js
self.addEventListener("fetch", (event) => {
  event.respondWith(async () => {
    if (event.isReload) {
      // 何かを返す
    } else {
      // 何か以外のものを返す
    }
  })();
});
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)<sup>(英語)</sup>
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)

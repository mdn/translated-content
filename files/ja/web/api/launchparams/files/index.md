---
title: "LaunchParams: files プロパティ"
short-title: files
slug: Web/API/LaunchParams/files
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

**`files`** は {{domxref("LaunchParams")}} インターフェイスの読み取り専用プロパティで、 [`POST`](/ja/docs/Web/HTTP/Reference/Methods/POST) メソッドで起動ナビゲーションとともに渡されるすべてのファイルを表す {{domxref("FileSystemHandle")}} オブジェクトの配列を返します。

## 値

{{domxref("FileSystemHandle")}} オブジェクトの読み取り専用の配列です。

## 例

```js
if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.files) {
      const files = launchParams.files;
      for (file in files) {
        // ファイルの処理
      }
    }
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- {{domxref("Window.launchQueue")}}
- [Musicr 2.0](https://launch-handler.glitch.me/) デモアプリ

---
title: "NavigationPreloadManager: enable() メソッド"
short-title: enable()
slug: Web/API/NavigationPreloadManager/enable
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`enable()`** は {{domxref("NavigationPreloadManager")}} インターフェイスのメソッドで、サービスワーカーが管理するリソースの事前読み込みを有効にするために使用されます。
このメソッドは、`undefined` で解決するプロミスを返します。

このメソッドは、サービスワーカーの `activate` イベントハンドラーで呼び出されるべきであり、これにより、`fetch` イベントハンドラーが発行される前に確実に呼び出されるようになります。

## 構文

```js-nolint
enable()
```

### 引数

なし。

### 返値

{{jsxref('undefined')}} で解決するプロミス ({{jsxref("Promise")}}) です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("NavigationPreloadManager")}} が属する登録に関連するアクティブなワーカーがない場合。

## 例

下記のコードは最初に {{domxref("ServiceWorkerRegistration.navigationPreload")}} の使用に対応していることを確認した後、事前読み込みを有効にする方法を示しています。

```js
addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration.navigationPreload) {
        // Enable navigation preloads!
        await self.registration.navigationPreload.enable();
      }
    })(),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{domxref("NavigationPreloadManager.disable()")}}

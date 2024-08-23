---
title: "NavigationPreloadManager: disable() メソッド"
short-title: disable()
slug: Web/API/NavigationPreloadManager/disable
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`disable()`** は {{domxref("NavigationPreloadManager")}} インターフェイスのメソッドで、以前に {{domxref("NavigationPreloadManager.enable()","enable()")}} を使用して開始されたサービスワーカー管理リソースの自動事前読み込みを停止します。
このメソッドは、`undefined` で解決するプロミスを返します。

このメソッドは、サービスワーカーの `activate` イベントハンドラー（`fetch` イベントハンドラーが呼ばれる前）で呼ばれることがあります。

## 構文

```js-nolint
disable()
```

### 引数

なし。

### 返値

{{jsxref('undefined')}} で解決するプロミス ({{jsxref("Promise")}}) です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("NavigationPreloadManager")}} が属する登録に関連するアクティブなワーカーがない場合。

## 例

下記のコードは最初に {{domxref("ServiceWorkerRegistration.navigationPreload")}} の使用に対応していることを確認した後、事前読み込みを無効にする方法を示しています。

```js
addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration.navigationPreload) {
        // Disable navigation preloads!
        await self.registration.navigationPreload.disable();
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

{{domxref("NavigationPreloadManager.enable()")}}

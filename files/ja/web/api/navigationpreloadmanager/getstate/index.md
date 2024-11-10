---
title: "NavigationPreloadManager: getState() メソッド"
short-title: getState()
slug: Web/API/NavigationPreloadManager/getState
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`getState()`** は {{domxref("NavigationPreloadManager")}} インターフェイスのメソッドで、事前読み込みが有効になっているかどうか、また、どのような値が HTTP ヘッダーの {{HTTPHeader("Service-Worker-Navigation-Preload")}} に送信されるかを示すプロパティを持つオブジェクトを返すプロミス ({{jsxref("Promise")}}) を返します。

## 構文

```js-nolint
getState()
```

### 引数

なし。

### 返値

以下のプロパティを持つオブジェクトで解決するプロミス ({{jsxref("Promise")}}) です。

- `enabled`
  - : 事前読み込みが有効であれば `true`、それ以外では `false` です。
- `headerValue`
  - : 事前読み込みされた {{domxref("Window/fetch", "fetch()")}} に続き、HTTP のヘッダー `Service-Worker-Navigation-Preload` に送信される値を含む文字列。
    これは {{domxref("NavigationPreloadManager.setHeaderValue()")}} を使用して値が変更されない限り、既定値は `true` です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("NavigationPreloadManager")}} が属する登録に関連するアクティブなワーカーがない場合。

## 例

下記コードは、サービスワーカーが準備完了した時点でリクエストされた現在の状態を示しています。

```js
navigator.serviceWorker.ready
  .then((registration) => registration.navigationPreload.getState())
  .then((state) => {
    console.log(state.enabled); // boolean
    console.log(state.headerValue); // string
  })
  .catch((e) =>
    console.error(`NavigationPreloadManager not supported: ${e.message}`),
  );
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

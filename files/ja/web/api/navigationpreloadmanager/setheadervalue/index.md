---
title: "NavigationPreloadManager: setHeaderValue() メソッド"
short-title: setHeaderValue()
slug: Web/API/NavigationPreloadManager/setHeaderValue
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`setHeaderValue()`** は {{domxref("NavigationPreloadManager")}} インターフェイスのメソッドで、サービスワーカーのナビゲーション事前読み込み中に実行された {{domxref("Window/fetch", "fetch()")}} 操作の結果として送信されるリクエストに付加される {{HTTPHeader("Service-Worker-Navigation-Preload")}} ヘッダーの値を設定します。
これは、`undefined` で解決する空のプロミス ({{jsxref("Promise")}}) を返します。

事前読み込みリクエストに {{HTTPHeader("Service-Worker-Navigation-Preload")}} ヘッダーが存在することで、サーバーは事前読み込みフェッチリクエストと通常のフェッチリクエストに対して、異なるリソースを返すように構成することができます。
既定でこのディレクティブは `true` に設定されています。このメソッドでは、事前読み込みリクエストに対して複数の異なる応答を構成することが可能なのです。

> [!NOTE]
> このヘッダーを設定することで異なるレスポンスが返される可能性がある場合、サーバーは異なるレスポンスが確実にキャッシュされるように `Vary: Service-Worker-Navigation-Preload` を設定する必要があります。

## 構文

```js-nolint
setHeaderValue(value)
```

### 引数

- `value`
  - : 対象とするサーバーが、リクエストされたリソースに対して何を返すべきかを決定するために使用する任意の文字列値です。

### 返値

{{jsxref('undefined')}} で解決するプロミス ({{jsxref("Promise")}}) です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("NavigationPreloadManager")}} が属する登録に関連するアクティブなワーカーがない場合。

## 例

次のコードは、この値を設定する方法を示しています。

```js
navigator.serviceWorker.ready
  .then((registration) =>
    registration.navigationPreload.setHeaderValue(newValue),
  )
  .then(() => console.log("Done!"))
  .catch((e) =>
    console.error(`NavigationPreloadManager に対応していません: ${e.message}`),
  );
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

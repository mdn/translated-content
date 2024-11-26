---
title: "Window: getScreenDetails()"
slug: Web/API/Window/getScreenDetails
l10n:
  sourceCommit: e089abbca14964a8ce945135d954cbfd098fd6f7
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

{{domxref("Window")}} インターフェイスの **`getScreenDetails()`** メソッドは、ユーザーのデバイスで利用できるすべての画面の詳細を表す {{domxref("ScreenDetails")}} オブジェクトインスタンスで満たされる {{domxref("Promise")}} を返します。

## 構文

```js-nolint
getScreenDetails()
```

### 引数

なし。

### 返値

{{domxref("ScreenDetails")}} オブジェクトインスタンスで満たされる {{jsxref("Promise")}}。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : [Permissions-Policy](/ja/docs/Web/HTTP/Permissions_Policy) によって [Window Management API](/ja/docs/Web/API/Window_Management_API) の使用がブロックされている場合、またはユーザーが明示的にブラウザのパーミッションリクエストを拒否した場合にスローされます。

## 例

`getScreenDetails()` が呼び出されると、ユーザーに対してすべてのディスプレイでウィンドウを管理する許可を求めるダイアログが表示されます（この許可の状態は、`window-management` をクエリーするために {{domxref("Permissions.query()")}} を使用して確認できます）。許可が与えられた場合、結果として得られる {{domxref("ScreenDetails")}} オブジェクトには、ユーザーのシステムで利用可能なすべてのスクリーンの詳細が含まれています。

以下の例では、利用可能な各ディスプレイ上でフルサイズのウィンドウが開きます。

```js
const screenDetails = await window.getScreenDetails();

// 端末で使用可能のすべてのスクリーンに対して、フルスクリーンのウィンドウを開きます
for (const screen of screenDetails.screens) {
  window.open(
    "https://example.com",
    "_blank",
    `left=${screen.availLeft},
    top=${screen.availTop},
    width=${screen.availWidth},
    height=${screen.availHeight}`,
  );
}
```

> [!NOTE]
> 完全な例については、[マルチウィンドウ学習環境](https://mdn.github.io/dom-examples/window-management-api/)を参照してください([ソースコード](https://github.com/mdn/dom-examples/tree/main/window-management-api)も参照してください。)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Window Management API](/ja/docs/Web/API/Window_Management_API)

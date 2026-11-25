---
title: "Permissions: query() メソッド"
short-title: query()
slug: Web/API/Permissions/query
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

**`query()`** は {{domxref("Permissions")}} インターフェイスのメソッドで、グローバルスコープにおけるユーザー権限の状態を返します。

ユーザー権限の名前は、それぞれの機能の仕様書で定義されています。
ブラウザーのバージョンごとに対応している権限は、{{domxref("Permissions")}} インターフェイスの[互換性データ](/ja/docs/Web/API/Permissions#ブラウザーの互換性)に一覧表示されています。
関連するソースコードも確認できます（[Firefox の値](https://searchfox.org/firefox-main/source/dom/webidl/Permissions.webidl#10)、[Chromium の値](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/modules/permissions/permission_descriptor.idl)、[WebKit の値](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/Modules/permissions/PermissionName.idl)）。

それぞれの権限によって制限される API は、[権限 API で照会できる API](/ja/docs/Web/API/Permissions_API#権限_API_で照会できる_API) に一覧表示されています。この一覧は[権限 API](/ja/docs/Web/API/Permissions_API) の概要記事にあります。

## 構文

```js-nolint
query(permissionDescriptor)
```

### 引数

- `permissionDescriptor`
  - : `query` 操作のオプションを設定するオブジェクトです。この記述子で利用できるオプションは、権限の種類によって異なります。

    すべての権限には名前があります。
    - `name`
      - : 照会する API の権限名を含む文字列です。例えば、`camera`、`bluetooth`、`microphone`、`geolocation` です（より詳しい一覧は {{domxref("Permissions")}} インターフェイスの[互換性データ](/ja/docs/Web/API/Permissions#ブラウザーの互換性)を参照してください）。ブラウザーがその権限名に対応していない場合、返される {{jsxref("Promise")}} は {{jsxref("TypeError")}} で拒否されます。

    `push` 権限では、次のオプションも指定できます。
    - `userVisibleOnly` {{optional_inline}}
      - : （Push のみ。Firefox は未対応です。下記の「ブラウザーの互換性」節を参照してください）すべてのメッセージについて通知を表示するか、サイレントプッシュ通知を送信できるかを示します。デフォルトは `false` です。

    `midi` 権限では、次のオプションも指定できます。
    - `sysex` {{optional_inline}}
      - : システムエクスクルーシブメッセージが必要か、または受信するかどうかを示します。デフォルトは `false` です。

### 返値

{{jsxref("Promise")}} で、 {{domxref("PermissionStatus")}} オブジェクトに解決します。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 関連付けられた文書が完全にアクティブでない閲覧コンテキストで `query()` メソッドが呼び出された場合に発生します。
- {{jsxref("TypeError")}}
  - : `PermissionDescriptor` 情報の取得が何らかの理由で失敗した場合、またはその権限が存在しないか、ユーザーエージェントに対応していない場合に発生します。

## 例

### 位置情報の権限に応じたニュースの表示

この例では、`geolocation` 権限が許可されていれば現在地に関連するニュースを表示し、そうでなければ位置情報へのアクセスを許可するようユーザーに促す方法を示します。

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showLocalNewsWithGeolocation();
  } else if (result.state === "prompt") {
    showButtonToEnableLocalNews();
  }
  // 権限が拒否されている場合は何もしない
});
```

### さまざまな権限への対応状況のテスト

この例では、それぞれの権限を照会した結果を示します。

このコードは `navigator.permissions.query()` を使用して各権限を照会し、権限の状態またはその権限がブラウザーで未対応であることを記録します。
対応していない権限では返される `Promise` が拒否されるため、`query()` は `try...catch` ブロック内で呼び出しています。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 320px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js
// 権限の配列
const permissions = [
  "accelerometer",
  "accessibility-events",
  "ambient-light-sensor",
  "background-sync",
  "camera",
  "clipboard-read",
  "clipboard-write",
  "geolocation",
  "gyroscope",
  "local-fonts",
  "magnetometer",
  "microphone",
  "midi",
  "notifications",
  "payment-handler",
  "persistent-storage",
  "push",
  "screen-wake-lock",
  "storage-access",
  "top-level-storage-access",
  "window-management",
];

processPermissions();

// 権限を反復処理して結果を記録
async function processPermissions() {
  for (const permission of permissions) {
    const result = await getPermission(permission);
    log(result);
  }
}

// try...catch ブロックで単一の権限を照会して結果を返す
async function getPermission(permission) {
  try {
    let result;
    if (permission === "top-level-storage-access") {
      result = await navigator.permissions.query({
        name: permission,
        requestedOrigin: window.location.origin,
      });
    } else {
      result = await navigator.permissions.query({ name: permission });
    }
    return `${permission}: ${result.state}`;
  } catch (error) {
    return `${permission} (not supported)`;
  }
}
```

以下に、コードを実行したときのログを示します。

{{EmbedLiveSample('さまざまな権限への対応状況のテスト',"100%", "370px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

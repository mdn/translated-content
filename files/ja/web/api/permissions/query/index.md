---
title: Permissions.query()
slug: Web/API/Permissions/query
---

{{APIRef("Permissions API")}}{{SeeCompatTable}}

{{domxref("Permissions")}} インターフェイスの **`Permissions.query()`** メソッドは、グローバルスコープに対するユーザーのパーミッションの状態を返します。

## 構文

```js
navigator.permissions.query(PermissionDescriptor).then(function(permissionStatus) { ... })
```

### パラメーター

- `PermissionDescriptor`

  - : 名前と値のペアのカンマ区切りリストで構成される、`query` 操作のオプションを設定するオブジェクト。 利用可能なオプションは次のとおりです。

    - `name`: パーミッションを照会したい API の名前。 有効な値は `'accelerometer'`、`'accessibility-events'`、`'ambient-light-sensor'`、`'background-sync'`、`'camera'​`、`'clipboard-read'`、`'clipboard-write'`、`'geolocation'`、`'gyroscope'`、`'magnetometer'`、`'microphone'`、`'midi'`、`'notifications'`、`'payment-handler'`、`'persistent-storage'`、`'push`' です。
    - `userVisibleOnly`: （Push のみ。 Firefox はサポートしていません。 下記のブラウザーの互換性のセクションを参照してください）すべてのメッセージについて通知を表示するか、サイレントプッシュ通知を送信できるかを示します。 デフォルトは `false` です。
    - `sysex`: （Midi のみ）システムエクスクルーシブメッセージが必要か受信するかどうかを示します。 デフォルトは `false` です。

> **メモ:** Firefox 44 以降、[Notifications](/ja/docs/Web/API/Notifications_API) と [Push](/ja/docs/Web/API/Push_API) のパーミッションは統合されました。 （例えば、ユーザーによって、関連するパーミッションのダイアログにより）パーミッションが与えられた場合、`navigator.permissions.query()` は `notifications` と `push` の両方に対して `true` を返します。

> **メモ:** `persistent-storage` パーミッションは、[Storage API](https://storage.spec.whatwg.org/) のとおりに、オリジンがそのストレージとして永続的ボックス（すなわち永続的ストレージ（[persistent storage](https://storage.spec.whatwg.org/#persistence)））を使用することを許可します。

### 戻り値

{{domxref("PermissionStatus")}} オブジェクトに解決される {{jsxref("Promise")}}。

### 例外

| 例外        | 説明                                                                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `TypeError` | `PermissionDescriptor` 情報の取得が何らかの理由で失敗したか、パーミッションが存在しないか現在サポートされていません（例えば、`midi`、または `userVisibleOnly` と一緒の `push` で）。 |

## 例

```js
navigator.permissions.query({name:'geolocation'}).then(function(result) {
 if (result.state == 'granted') {
   showLocalNewsWithGeolocation();
 } else if (result.state == 'prompt') {
   showButtonToEnableLocalNews();
 }
 // パーミッションが拒否された場合は何もしないでください。
});
```

## 仕様

| 仕様                                                                                     | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Permissions API','#dom-permissions-query','query()')}} | {{Spec2('Permissions API')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Permissions.query")}}

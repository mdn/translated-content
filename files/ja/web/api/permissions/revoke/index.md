---
title: Permissions.revoke()
slug: Web/API/Permissions/revoke
---

{{APIRef("Permissions API")}}{{SeeCompatTable}}

{{domxref("Permissions")}} インターフェイスの **`Permissions.revoke()`** メソッドは、現在設定されているパーミッションをデフォルト状態（通常は `prompt`）に戻します。

## 構文

このメソッドは、グローバルな {{domxref("Permissions")}} オブジェクトである {{domxref("navigator.permissions")}} に対して呼び出します。

```
var revokePromise = navigator.permissions.revoke(descriptor);
```

### パラメーター

- `descriptor`

  - : 名前と値のペアのコンマ区切りリストで構成される、操作のオプションを設定する `PermissionDescriptor` ディクショナリに基づくオブジェクト。 利用可能なオプションは次のとおりです。

    - `name`: パーミッションを照会したい API の名前。 有効な値は、`'geolocation'`、`'midi'`、`'notifications'`、`'push'` です。
    - `userVisibleOnly`: Push のみ。 Firefox はサポートしていません。 下記の[ブラウザーの互換性](#browser_compatibility)のセクションを参照してください）すべてのメッセージについて通知を表示するか、サイレントプッシュ通知を送信できるかを示します。 デフォルトは `false` です。
    - `sysex`: （MIDI のみ）システムエクスクルーシブメッセージが必要か受信するかどうかを示します。 デフォルトは `false` です。

> **メモ:** Firefox 44 以降、[Notifications](/ja/docs/Web/API/Notifications_API) と [Push](/ja/docs/Web/API/Push_API) のパーミッションは統合されました。 （例えば、ユーザーによって、関連するパーミッションのダイアログにより）パーミッションが与えられた場合、`navigator.permissions.query()` は `notifications` と `push` の両方に対して `true` を返します。

> **メモ:** `persistent-storage` パーミッションは、[Storage API](https://storage.spec.whatwg.org/) のとおりに、オリジンがそのストレージとして永続的ボックス（すなわち永続的ストレージ（[persistent storage](https://storage.spec.whatwg.org/#persistence)））を使用することを許可します。

### 戻り値

要求の結果を示す {{domxref("PermissionStatus")}} オブジェクトと共に成功ハンドラを呼び出す {{jsxref("Promise")}}。

### 例外

- `TypeError`
  - : `PermissionDescriptor` 情報の取得が何らかの理由で失敗したか、アクセス権が存在しないか現在サポートされていません（例えば、`midi`、または `userVisibleOnly` と一緒の `push` で）。

## 例

この関数をアプリで使用して、それが有する Geolocation API のパーミッションを取り消すように要求できます。

```js
function revokePermission() {
  navigator.permissions.revoke({name:'geolocation'}).then(function(result) {
    report(result.state);
  });
}
```

## 仕様

| 仕様                                                                                         | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Permissions API','#dom-permissions-revoke','revoke()')}} | {{Spec2('Permissions API')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Permissions.revoke")}}

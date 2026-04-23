---
title: Permissions.revoke()
slug: Web/API/Permissions/revoke
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{APIRef("Permissions API")}}{{deprecated_header}}

**`Permissions.revoke()`** は {{domxref("Permissions")}} インターフェイスのメソッドで、現在設定されている権限を既定の状態（通常は `prompt`）に戻します。
このメソッドは、グローバルな {{domxref("Permissions")}} オブジェクトである {{domxref("navigator.permissions")}} に対して呼び出します。

## 構文

```js-nolint
revoke(descriptor)
```

### 引数

- `descriptor`
  - : 名前と値のペアのカンマ区切りリストで構成される、操作のオプションを設定する `PermissionDescriptor` 辞書に基づくオブジェクト。 利用可能なオプションは次のとおりです。
    - `name`
      - : 権限を照会したい API の名前。 有効な値は、`'geolocation'`、`'midi'`、`'notifications'`、`'push'` です。
    - `userVisibleOnly`
      - : Push のみ。 Firefox は対応していません。 下記の[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください）すべてのメッセージについて通知を表示するか、サイレントプッシュ通知を送信できるかを示します。 既定値は `false` です。
    - `sysex` （MIDI のみ）
      - : システムエクスクルーシブメッセージが必要か受信するかどうかを示します。 既定値は `false` です。

> [!NOTE]
> Firefox 44 以降、[通知](/ja/docs/Web/API/Notifications_API) と[プッシュ](/ja/docs/Web/API/Push_API)の権限は統合されました。 （例えば、ユーザーによって、関連する権限のダイアログにより）権限が与えられた場合、　`navigator.permissions.query()` は `notifications` と `push` の両方に対して `true` を返します。

> [!NOTE]
> `persistent-storage` 権限は、[ストレージ API](https://storage.spec.whatwg.org/) のとおりに、オリジンがそのストレージとして永続的ボックス（すなわち永続的ストレージ（[persistent storage](https://storage.spec.whatwg.org/#persistence)））を使用することを許可します。

### 返値

{{jsxref("Promise")}} で、要求の結果を示す {{domxref("PermissionStatus")}} オブジェクトで履行ハンドラーを呼び出します。

### 例外

- {{jsxref("TypeError")}}
  - : `PermissionDescriptor` 情報の取得が何らかの理由で失敗したか、アクセス権が存在しないか現在サポートされていません（例えば、`midi`、または `userVisibleOnly` と一緒の `push` で）。

## 例

この関数をアプリで使用して、それが有する Geolocation API の権限を取り消すように要求できます。

```js
function revokePermission() {
  navigator.permissions.revoke({ name: "geolocation" }).then((result) => {
    report(result.state);
  });
}
```

## ブラウザーの互換性

{{Compat}}

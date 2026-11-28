---
title: "Permissions: revoke() メソッド"
short-title: revoke()
slug: Web/API/Permissions/revoke
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

**`revoke()`** は {{domxref("Permissions")}} インターフェイスのメソッドで、現在設定されている権限をデフォルトの状態（通常は `prompt`）に戻します。
このメソッドは、グローバルな {{domxref("Permissions")}} オブジェクトである {{domxref("navigator.permissions")}} に対して呼び出します。

このメソッドは、用途が不明確なため、権限 API の仕様本体から削除されています。
権限はブラウザーが管理します。現在の権限モデルでは、サイト開発者が明示的に権限を要求したり取り消したりできる仕組みにはなっていません。
ブラウザーでは設定で有効化する形でこの API が提供されてきましたが、標準化される可能性は低いでしょう。
詳しくは、[`permissions.revoke()` の削除に関する当初の議論](https://github.com/w3c/permissions/issues/46)<sup>(英語)</sup>を参照してください。

## 構文

```js-nolint
revoke(permissionDescriptor)
```

### 引数

- `permissionDescriptor`
  - : `revoke` 操作のオプションを設定するオブジェクトです。この記述子で利用できるオプションは、権限の種類によって異なります。

    すべての権限には名前があります。
    - `name`
      - : 権限を照会する API の名前を含む文字列です。ブラウザーがその権限名に対応していない場合、返される {{jsxref("Promise")}} は {{jsxref("TypeError")}} で拒否されます。

    `push` 権限では、次のオプションも指定できます。
    - `userVisibleOnly` {{optional_inline}}
      - : （Push のみ。Firefox は未対応です。下記の[ブラウザーの互換性](#ブラウザーの互換性)節を参照してください）すべてのメッセージについて通知を表示するか、サイレントプッシュ通知を送信できるかを示します。デフォルトは `false` です。

    `midi` 権限では、次のオプションも指定できます。
    - `sysex` {{optional_inline}}
      - : システムエクスクルーシブメッセージが必要か、または受信するかどうかを示します。デフォルトは `false` です。

### 返値

要求の結果を示す {{domxref("PermissionStatus")}} オブジェクトで履行される {{jsxref("Promise")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : `PermissionDescriptor` 情報の取得が何らかの理由で失敗した場合、または権限が存在しないか、現在対応していない場合に発生します（例えば、`midi`、または `userVisibleOnly` を指定した `push`）。

## 例

この関数は、アプリが自身の位置情報 API 権限の取り消しを要求するために使用できます。

```js
function revokePermission() {
  navigator.permissions.revoke({ name: "geolocation" }).then((result) => {
    report(result.state);
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

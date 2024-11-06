---
title: Permissions.query()
slug: Web/API/Permissions/query
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{APIRef("Permissions API")}}

**`Permissions.query()`** は {{domxref("Permissions")}} インターフェイスのメソッドで、グローバルスコープに対するユーザーの権限の状態を返します。

## 構文

```js-nolint
query(permissionDescriptor)
```

### 引数

- `permissionDescriptor`

  - : 名前と値のペアのカンマ区切りリストで構成される、`query` 操作のオプションを設定するオブジェクト。 利用可能なオプションは次のとおりです。

    - `name`
      - : 権限を照会したい API の名前です。対応している値の集合はブラウザーごとに異なります。 Firefox の値は[こちら](https://searchfox.org/mozilla-central/source/dom/webidl/Permissions.webidl#10)、 Chromium の値は[こちら](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/modules/permissions/permission_descriptor.idl)、 WebKit の値は[こちら](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/Modules/permissions/PermissionName.idl)にあります。
    - `userVisibleOnly`
      - : （Push のみ。 Firefox は対応していません。 下記のブラウザーの互換性の節を参照してください）すべてのメッセージについて通知を表示するか、サイレントプッシュ通知を送信できるかを示します。 既定値は `false` です。
    - `sysex` （Midi のみ）
      - : システムエクスクルーシブメッセージが必要か受信するかどうかを示します。 既定値は `false` です。

> [!NOTE]
> Firefox 44 以降、[通知](/ja/docs/Web/API/Notifications_API)と[プッシュ](/ja/docs/Web/API/Push_API)の権限が統合されました。 （例えば、ユーザーによって、関連する権限のダイアログにより）権限が与えられた場合、 `navigator.permissions.query()` は `notifications` と `push` の両方に対して `true` を返します。

> **メモ:** `persistent-storage` 権限は、[ストレージ API](https://storage.spec.whatwg.org/) のとおりに、オリジンがそのストレージとして永続的ボックス（すなわち永続的ストレージ（[persistent storage](https://storage.spec.whatwg.org/#persistence)））を使用することを許可します。

### 返値

{{jsxref("Promise")}} で、 {{domxref("PermissionStatus")}} オブジェクトに解決します。

### 例外

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">例外</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TypeError</code></td>
      <td>
        <code>PermissionDescriptor</code> 情報の取得が何らかの理由で失敗したか、その権限が存在しないか、現在対応していない（例えば <code>midi</code> や <code>userVisibleOnly<code> 付きの <code>push<code> など）。
      </td>
    </tr>
  </tbody>
</table>

## 例

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showLocalNewsWithGeolocation();
  } else if (result.state === "prompt") {
    showButtonToEnableLocalNews();
  }
  // 権限が拒否された場合は何もしないでください。
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

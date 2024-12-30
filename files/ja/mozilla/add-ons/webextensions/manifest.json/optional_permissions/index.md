---
title: optional_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"optional_permissions": [
  "*://developer.mozilla.org/*",
  "webRequest"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

`optional_permissions` キーを使って、拡張機能がインストールされた後に、実行時に要求するパーミッションを一覧できます。

[`permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) キーは拡張機能がインストールされる時に必要とするパーミッションを一覧しますが、`optional_permissions` は拡張機能のインストール時には必要でないが、インストール後のどこかで要求されることのあるパーミッションを一覧します。パーミッションを要求するには、[`permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/permissions) API を使います。パーミッションを要求すると、おそらくユーザーに拡張機能にパーミッションを許可しても良いかを尋ねるダイアログが表示されるでしょう。

このキーは 2 種類のパーミッションを含みます: ホストパーミッションと API パーミッションです。

## ホストパーミッション

これは [`permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) キーで指定できるホストパーミッションと同じです。

## API パーミッション

下記のいずれも入れることができますが、すべてのブラウザーに入ってはいません: ブラウザー固有の詳細については、互換性テーブルを確認してください:

- `activeTab`
- `background`
- `bookmarks`
- `browserSettings`
- `clipboardRead`
- `clipboardWrite`
- `contentSettings`
- `contextMenus`
- `cookies`
- `debugger`
- `downloads`
- `downloads.open`
- `geolocation`
- `history`
- `idle`
- `management`
- `notifications`
- `pageCapture`
- `tabs`
- `topSites`
- `webNavigation`
- `webRequest`
- `webRequestBlocking`

これは [`permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) で許可される API パーミッションのサブセットです。

このセットでは、下記のパーミッションが、ユーザープロンプトなしで暗黙的に許可されます: activeTab, cookies, idle, webRequest, webRequestBlocking

## 例

```json
 "optional_permissions": ["*://developer.mozilla.org/*"]
```

拡張機能に developer.mozilla.org 以下のページの権限アクセス要求を有効にします。

```json
  "optional_permissions": ["tabs"]
```

拡張機能に `tabs` API の権限部分へのアクセス要求を有効にします。

```json
  "optional_permissions": ["*://developer.mozilla.org/*", "tabs"]
```

拡張機能に上記の両方への要求を有効にします。

## ブラウザーの互換性

{{Compat}}

---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions
---

{{AddonSidebar}}

拡張機能のインストール後、実行時に特別なパーミッションの要求を可能にする。

拡張機能は強力な WebExtension API の多くにアクセスするパーミッション(アクセス権)を必要とします。manifest.json の [`permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) に必要なパーミッション記述することで、インストール時にユーザーに対しパーミッションを要求できます。インストール時にパーミッションを要求する主なメリットは次の通りです:

- ユーザーは一度のみアクセス権を要求されます。したがって、混乱しにくくシンプルに決断を下すことができます。
- 拡張機能は必要な時のみ API に頼ることが可能です。すでに動作していれば、アクセス権は付与されていることになります。

インストールした拡張機能のアクセス権の認証の見た目は、ユーザーにとってシンプルな GUI とは言えません。ユーザーは about:debugging のページを使用して、"この Firefox"ボタンから"拡張機能"のセクションに行き、参照するアドオンの"マニフェスト URL"のリンクを使用しなければなりません。 この URL は拡張機能で使用されている生の json ファイルへのリンクです。拡張機能の json ファイルは"permissions"ブロックを含み、これを確認することによってアドオンが使用しているアクセス権を確認することができます。

拡張機能は実行時に、permissions API によって追加のパーミッションを求めることができます.These permissions need to be listed in the [`optional_permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest.json key. Note that some permissions are not allowed in `optional_permissions`. The main advantages of this are:

- the extension can run with a smaller set of permissions except when it actually needs them
- the extension can handle permission denial in a graceful manner instead of presenting the user with a global "all or nothing" choice at install time. You can still get a lot out of that map extension without giving it access to your location, for example.
- the extension may need [host permissions](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), but not know at install time exactly which host permissions it needs. For example, the list of hosts may be a user setting. In this scenario, asking for a more specific range of hosts at runtime can be an alternative to asking for "\<all_urls>" at install time.

To use the permissions API, decide which permissions your extension can request at runtime, and list them in [`optional_permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions). After this, you can request any permissions that were included in `optional_permissions`. Requests may only be made in the handler for a user action (for example, a click handler).

## 型

- {{WebExtAPIRef("permissions.Permissions")}}
  - : Represents a set of permissions.

## メソッド

- {{WebExtAPIRef("permissions.contains()")}}
  - : Find out whether the extension has the given set of permissions.
- {{WebExtAPIRef("permissions.getAll()")}}
  - : Get all the permissions this extension currently has.
- {{WebExtAPIRef("permissions.remove()")}}
  - : Give up a set of permissions.
- {{WebExtAPIRef("permissions.request()")}}
  - : Ask for a set of permissions.

## Event handlers

- {{WebExtAPIRef("permissions.onAdded")}}
  - : Fired when a new permission is granted.
- {{WebExtAPIRef("permissions.onRemoved")}}
  - : Fired when a permission is removed.

## ブラウザーの互換性

{{Compat}}

## その他

- `manifest.json` [`permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) property
- `manifest.json` [`optional_permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) property

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

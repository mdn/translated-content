---
title: pkcs11
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11
---

{{AddonSidebar}}

`pkcs11` API は拡張機能にセキュリティモジュール [PKCS #11](https://en.wikipedia.org/wiki/PKCS_11) の列挙を可能とし、キーの元と証明書としてブラウザーからアクセスできるようにします。

この API を使うには "pkcs11" [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)が必要です。

## Provisioning PKCS #11 modules

There are two environmental prerequisites for using this API:

- one or more PKCS #11 modules must be installed on the user's computer
- for each installed PKCS #11 module, there must be a [native manifest](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests) file that enables the browser to locate the module.

Most probably, the user or device administrator would install the PKCS #11 module, and its installer would install the native manifest file at the same time. Note, though, that the module and manifest can't be installed as part of the extension's own installation process.

For details about the manifest file's contents and location, see [Native manifests](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

## 関数

- {{WebExtAPIRef("pkcs11.getModuleSlots()")}}
  - : For each slot in a module, get its name and whether it contains a token.
- {{WebExtAPIRef("pkcs11.installModule()")}}
  - : Installs the named PKCS #11 module.
- {{WebExtAPIRef("pkcs11.isModuleInstalled()")}}
  - : Checks whether the named PKCS #11 module is installed.
- {{WebExtAPIRef("pkcs11.uninstallModule()")}}
  - : Uninstalls the named PKCS #11 module.

## ブラウザーの互換性

{{Compat}} {{WebExtExamples("h2")}}

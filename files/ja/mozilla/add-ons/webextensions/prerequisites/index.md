---
title: 前提条件
slug: Mozilla/Add-ons/WebExtensions/Prerequisites
original_slug: Mozilla/Add-ons/WebExtensions/前提条件
---

WebExtension API を使って開発するには、いくつかの小さいセットアップが必要です。

- [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/) または [Firefox Nightly](https://nightly.mozilla.org/) をダウンロード、インストールして、起動してください。最近の追加機能を使用したい場合、Nightly を使用してください。
- Firefox が未署名のアドオンをインストールを許可するかどうかを制御する設定をオンにします。この設定は Firefox Developer Edition と Firefox Nightly のみで使用できます。

  - Firefox のアドレスバーに `about:config` と入力して下さい。
  - `xpinstall.signatures.required` を検索して下さい。
  - 設定をダブルクリックするか、右クリックして "切り替え" を選択して、`false` にセットしてください。

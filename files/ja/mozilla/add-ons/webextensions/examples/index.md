---
title: 拡張機能の例
slug: Mozilla/Add-ons/WebExtensions/Examples
---

{{AddonSidebar}}

拡張機能の開発方法を分かりやすく説明するため、シンプルな拡張機能のサンプルを集めたリポジトリー <https://github.com/mdn/webextensions-examples> を公開しています。この記事では、そのリポジトリーで使われている WebExtension API について説明します。

これらのサンプルは Firefox Nightly で動作します。ほとんどのものがより早期の Firefox でも動作しますが、拡張機能の manifest.json に指定されている [`strict_min_version`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) キーを確認してください。

> [!WARNING]
> いくつかの例では、特定のドメインまたはページでのみ動作します。制限事項の詳細は、各サンプルの readme ファイルに記載されています。どの例も既定ではプライベートブラウジングウィンドウでは動作しません。詳細は「[プライベートブラウジングでの拡張機能](https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows)」をご覧ください。

これらの例を試してみる場合は、リポジトリーをクローンしてから下記のようにしてください。

1. 一時的なアドオンを読み込む ([Load Temporary Add-on](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)) 機能を使用する。拡張機能は Firefox を再起動するまで読み込まれたままになります。
2. コマンドラインで拡張機能のソースフォルダーを開き、 [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) を使用して拡張機能を実行する。拡張機能は Firefox を再起動するまで読み込まれたままになります。
3. Firefox で **ファイル** > **ファイルを開く** を使用し、 [build](https://github.com/mdn/webextensions-examples/tree/master/build) フォルダーにある例を探す。 `build` フォルダーにはビルドされ署名されたバージョンのすべての例が置いてあります。これは例を永続的にインストールします。

> [!WARNING]
> この例の WebExtension を addons.mozilla.org (AMO) に投稿しないでください、WebExtension の例を実行するのに署名をする必要はありません。単に上記の手順に従ってください。

リポジトリーに貢献したい方は、是非とも [pull request](https://github.com/mdn/webextensions-examples/blob/master/CONTRIBUTING.md) を送ってください！

{{WebExtAllExamples}}

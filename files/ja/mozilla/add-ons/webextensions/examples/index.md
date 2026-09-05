---
title: 拡張機能の例
slug: Mozilla/Add-ons/WebExtensions/Examples
l10n:
  sourceCommit: ee33efab7300d7bf7319921a22f2eb2b60df91da
---

WebExtensions API の使用方法を説明するため、拡張機能の例を集めたリポジトリー <https://github.com/mdn/webextensions-examples> を公開しています。この記事では、そのリポジトリーで使われている WebExtension API について説明します。

これらのサンプルは Firefox Nightly で動作します。ほとんどのものがより早期の Firefox でも動作しますが、拡張機能の manifest.json に指定されている [`strict_min_version`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) キーを確認してください。

> [!WARNING]
> いくつかの例では、特定のドメインまたはページでのみ動作します。制限事項の詳細は、各サンプルの readme ファイルに記載されています。どの例も既定ではプライベートブラウジングウィンドウでは動作しません。詳細は「[プライベートブラウジングでの拡張機能](https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows)」をご覧ください。

これらの例を試してみる場合は、リポジトリーをクローンしてから下記のようにしてください。

1. 一時的なアドオンを読み込む ([Load Temporary Add-on](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)) 機能を使用する。拡張機能は Firefox を再起動するまで読み込まれたままになります。
2. コマンドラインで拡張機能のソースフォルダーを開き、 [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) を使用して拡張機能を `web-ext run` を実行する。

この拡張機能は、Firefox　を再起動するまで読み込まれたままになります。

> [!WARNING]
> この例の WebExtension を addons.mozilla.org (AMO) に投稿しないでください、WebExtension の例を実行するのに署名をする必要はありません。

リポジトリーに貢献したい方は、是非とも[プルリクエスト](https://github.com/mdn/webextensions-examples/blob/main/CONTRIBUTING.md)を送ってください！

{{WebExtAllExamples}}

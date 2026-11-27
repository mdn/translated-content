---
title: 拡張機能の例
slug: Mozilla/Add-ons/WebExtensions/Examples
l10n:
  sourceCommit: ee33efab7300d7bf7319921a22f2eb2b60df91da
---

WebExtensions API の使い方を示すため、拡張機能の例を集めたリポジトリー <https://github.com/mdn/webextensions-examples> を管理しています。この記事では、例の実行方法と、それぞれの例で紹介している WebExtensions API を説明します。

これらの例は Firefox Nightly で動作します。ほとんどの例はそれ以前のバージョンの Firefox でも動作しますが、動作するかどうかを確認するには、拡張機能の manifest.json にある [`strict_min_version`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) キーを確認してください。

> [!WARNING]
> 例によっては、特定のドメインまたはページでしか動作しません。制限事項の詳細は、それぞれの例の readme ファイルに記載されています。どの例もデフォルトではプライベートブラウジングウィンドウで動作しません。詳しくは「[プライベートブラウジングでの拡張機能](https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows)<sup>(英語)</sup>」をご覧ください。

これらの例を試すには、リポジトリーをクローンしてから、次のいずれかの方法で拡張機能をインストールして実行します。

- [一時的なアドオンを読み込む](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)<sup>(英語)</sup> 機能を使い、ソースフォルダーから拡張機能を読み込みます。
- [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)<sup>(英語)</sup> をインストールし、コマンドラインで拡張機能のソースフォルダーを開いて、`web-ext run` を実行します。

拡張機能は Firefox を再起動するまで読み込まれたままです。

> [!WARNING]
> これらの拡張機能の例を addons.mozilla.org (AMO) に投稿しないでください。実行するために署名する必要はありません。

リポジトリーに協力したい場合は、[プルリクエストを送ってください](https://github.com/mdn/webextensions-examples/blob/main/CONTRIBUTING.md)<sup>(英語)</sup>。

{{WebExtAllExamples}}

---
title: Firefox 3.5 でのセキュリティの変更
slug: Mozilla/Firefox/Releases/3.5/Security_changes
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

この記事では、Firefox 3.5 におけるセキュリティ関連の変更点について説明します。

## クローム登録の変更

リモートコンテンツがクロームとして使用されるのを防ぐため、セキュリティホールが修正されました。これにより、`chrome.manifest` ファイル内でウェブ上のファイルを参照するリソースを含んでいたアドオンに影響が生じる可能性があります。

このバグの修正は、プロトコルをクロームとして登録しても安全であることを示す新しい `URI_IS_LOCAL_RESOURCE` フラグを `nsIProtocolHandler` インターフェイスに追加することで 実現されました。独自のプロトコルハンドラーを作成し、それを `chrome.manifest` ファイルに登録しようとするアドオンは、正しく動作させるためにこのフラグを使用する必要があります。

## プライベートブラウジング

Firefox 3.5 ではプライベートブラウジングが実装されています。これは、クッキー、履歴、その他の潜在的にプライベートな情報がユーザーのコンピューターに永続的に保存されないモードです。拡張機能やその他のアドオンは、プライベートブラウジング機能に対処し、その使用を検知することで、プライベートブラウジングモードが有効な間、プライベートな情報の保存を回避できます。詳細は[プライベートブラウジングモードの対応](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Supporting_private_browsing_mode)を参照してください。

プラグインは、[`NPN_GetValue()`](https://web.archive.org/web/20210308202622/https://developer.mozilla.org/en-US/docs/Archive/Plugins/Reference/NPN_GetValue) 関数を使用して、`NPNVprivateModeBool` 変数の現在の値を確認することで、プライベートブラウジングモードが有効かどうかを検出できます。

## 新しい証明書エラー処理

Firefox 3 よりも前のバージョンでは、SSL 証明書エラーが発生すると、ブラウザーウィンドウに標準のネットワークエラーページである `about:neterror` が表示されていました。Firefox 3.5 以降では、代わりに新しいエラーページ `about:certerror` が表示されます。エラー URL の形式は次のようになります。

`about:certerror?e=error&u=url&d=desc`

カスタム証明書エラーページを提供する必要がある埋め込み元は、独自の `about:` ページ実装を提供し、`security.alternate_certificate_error_page` 設定を適切なページ名（`"certerror"` など）に設定することで、これを実現できるようになりました。

## 関連情報

- [Firefox 3.5 開発者向け情報](/ja/docs/Mozilla/Firefox/Releases/3.5)

---
title: WebDriver BiDi 接続の作成
short-title: BiDi 接続の作成
slug: Web/WebDriver/How_to/Create_BiDi_connection
l10n:
  sourceCommit: f83c12ab41865e0e195dd36ad9cdcad511a36957
---

クライアントとブラウザーは、WebSocket 接続を通じて WebDriver BiDi プロトコルで通信します。この接続を確立する方法は 2 つあります。

1 つ目の方法では、WebDriver classic セッションの作成時に、WebDriver クライアントが [`webSocketUrl`](/ja/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) キャパビリティを `true` に設定して BiDi の有効化を要求します。その後、クライアントは WebSocket ポートを開いた状態でブラウザーを起動します。

もう 1 つの方法では、必要なフラグと使用するポートをコマンドライン引数で渡して、WebDriver クライアントからブラウザーを起動します。この方法は Firefox では直接使用できますが、Chromium ベースのブラウザーでは Chromium BiDi ラッパーパッケージが別途必要です。この記事では Firefox を使って、この方法を順を追って説明します。

## ブラウザーの起動

WebDriver BiDi を使用するには、`--remote-debugging-port` フラグを指定してブラウザーを起動し、ブラウザーで BiDi を有効にする必要があります。すると、ブラウザーは指定したポートで WebSocket 接続を待ち受けます。ブラウザーのデバッグ用ポートの一般的なデフォルトは `9222` ですが、利用可能な任意のポートを使うか、`0` を指定してシステムに空いているポートを自動的に割り当てさせることができます。

```bash
firefox --remote-debugging-port 9222
```

macOS では、`firefox` が `PATH` に含まれていない場合があります。その場合は、代わりに完全なパスを使用してください。

```bash
/Applications/Firefox.app/Contents/MacOS/firefox --remote-debugging-port 9222
```

## WebSocket URL の取得

Firefox は BiDi WebSocket を次の URL で直接公開します。

```plain
ws://127.0.0.1:PORT/session
```

たとえば、`--remote-debugging-port 9222` を指定して Firefox を起動した場合、URL は `ws://127.0.0.1:9222/session` です。ポートに `0` を指定した場合は、`stderr` の出力に `WebDriver BiDi listening on ws://127.0.0.1:46249` のようなメッセージがあるか確認すると、割り当てられたポートがわかります。

> [!NOTE]
> Firefox は BiDi WebSocket エンドポイントに `localhost` ではなく `127.0.0.1` を使用します。

## WebSocket エンドポイントへの接続

WebSocket URL を使い、任意の WebSocket クライアントで接続を開きます。一般的な選択肢には、Node.js 用の `ws` パッケージや Python 用の `websockets` パッケージがあります。

接続したら、WebDriver BiDi の[コマンド](/ja/docs/Web/WebDriver/Reference/BiDi/Modules#コマンド)を JSON メッセージとして送信し、ブラウザーからのレスポンスや[イベント](/ja/docs/Web/WebDriver/Reference/BiDi/Modules#イベント)を受信できます。接続後に BiDi セッションを作成するには、[`session.new`](/ja/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) を参照してください。

## 関連情報

- [WebDriver BiDi リファレンス](/ja/docs/Web/WebDriver/Reference/BiDi)
- [`session.new`](/ja/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) コマンド
- [WebSockets API](/ja/docs/Web/API/WebSockets_API)
- [Chromium BiDi ラッパー](https://github.com/GoogleChromeLabs/chromium-bidi)<sup>(英語)</sup>
- [WebDriver BiDi ウェブクライアント](https://firefox-dev.tools/bidi-web-client/web/)<sup>(英語)</sup>

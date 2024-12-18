---
title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: 7192daf1bbd91abd9e5d4c1f88da8a998ba934a1
---

{{HTTPSidebar}}

**ハイパーテキスト転送プロトコル _(Hypertext Transfer Protocol, HTTP)_** は HTML などのハイパーメディア文書を転送するための[アプリケーション層](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E5%B1%A4)プロトコルです。このプロトコルはウェブブラウザー(クライアント)とウェブサーバー間の通信を目的として設計されていますが、他の用途でも使用されることがあります。 HTTP は旧来の[クライアント・サーバーモデル](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%82%B5%E3%83%BC%E3%83%90%E3%83%A2%E3%83%87%E3%83%AB)に則っており、クライアントはサーバーにリクエストを送信するためにポートを開き、サーバー側からのレスポンスが返ってくるまで待機します。 HTTP はいわゆる[ステートレスプロトコル](https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%86%E3%83%BC%E3%83%88%E3%83%AC%E3%82%B9%E3%83%BB%E3%83%97%E3%83%AD%E3%83%88%E3%82%B3%E3%83%AB)であり、つまりサーバーは 2 つのリクエスト間で何もデータを保持しません。

## チュートリアル

ガイドやチュートリアルで、 HTTP の使い方を学びましょう。

- [HTTP の概要](/ja/docs/Web/HTTP/Overview)
  - : クライアントサーバープロトコルの基本的な特徴です。 HTTP で実現できること、また何故それを使用すべきなのかを説明します。
- [HTTP キャッシュ](/ja/docs/Web/HTTP/Caching)
  - : キャッシュは高速で快適なウェブサイトの閲覧を可能にするために非常に需要な要素です。この記事では様々なキャッシュの手法や、HTTP ヘッダーでどのようにそれらを制御するかを説明します。
- [HTTP Cookie](/ja/docs/Web/HTTP/Cookies)
  - : Cookie の動作は [RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265) で定義されています。サーバーは HTTP リクエストをクライアント側に送信する際、`Set-Cookie` ヘッダー付与することができます。クッキーの値は `Cookie` リクエストのヘッダーの識別子に含まれた、同一サーバーに対する全てのリクエストを保持しており、クライアント側はそれを返します。また、Cookie に有効期限を設定したり、特定のドメインやパスだけにステートフルな挙動を限定することもできます。
- [オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/CORS)
  - : **サイト間 HTTP リクエスト**とは、リクエストを生成したリソースがあるドメインとは **別のドメイン** のリソースをリクエストする HTTP リクエストのことを指します。例えば、ドメイン A (`http://domaina.example/`) から読み込まれた HTML ページが、`img` 要素を使用してドメイン B の画像 (`http://domainb.foo/image.jpg`) に対するリクエストを発行することがそれにあたります。昨今のウェブページでは、CSS スタイルシートや画像、スクリプト、その他のリソースを含め、上記の例のようにサイトを跨ってデータを読み込むのが一般的になっています。CORS によって、ウェブ開発者がこのようなサイト間リクエストに対して個々のサイトが示す挙動を制御することができます。
- [HTTP クライアントヒント](/ja/docs/Web/HTTP/Client_hints)
  - : **クライアントヒント**は、サーバーがクライアントから端末、ネットワーク、ユーザー、ユーザーエージェント固有の環境設定に関する情報を積極的にリクエストするために使用できるレスポンスヘッダーの集合です。
    サーバーは、クライアントが提供する情報をもとに、送信するリソースを決定することができます。
- [HTTP の進化](/ja/docs/Web/HTTP/Evolution_of_HTTP)
  - : 初期バージョンの HTTP から最新の HTTP/2、姿を現した HTTP/3 以降までの変革を端的に説明します。
- [Mozilla ウェブセキュリティガイドライン](https://infosec.mozilla.org/guidelines/web_security)
  - : 運用チームがセキュアなウェブアプリケーションを開発するのに役立つコツをまとめました。
- [HTTP メッセージ](/ja/docs/Web/HTTP/Messages)
  - : HTTP/1.x や HTTP/2 の多様なメッセージが持つ型や構造を説明します。
- [HTTP セッションの典型例](/ja/docs/Web/HTTP/Session)
  - : 一般的な HTTP セッションのフローを示しながら説明します。
- [HTTP/1.x のコネクション制御](/ja/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.x で使用できる 3 種類の通信制御モデルの持つ長所と短所を説明します。

## リファレンス

詳細な HTTP の参考資料を見ていきましょう。

- [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)
  - : HTTP メッセージヘッダーは、リソース、あるいはサーバーやクライアントの挙動を示すために使用します。ヘッダーは [IANA レジストリー](https://www.iana.org/assignments/message-headers/message-headers.xhtml#perm-headers) に収録されていますが。IANA は [新たに提案された HTTP メッセージヘッダーのレジストリー](https://www.iana.org/assignments/message-headers/message-headers.xhtml#prov-headers)も管理しています。
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Methods)
  - : HTTP では多様な操作を実現することができます。一般的な {{HTTPMethod("GET")}} や {{HTTPMethod("POST")}} だけでなく、{{HTTPMethod("OPTIONS")}} や {{HTTPMethod("DELETE")}}、{{HTTPMethod("TRACE")}} などのあまり一般的ではないリクエストも包括しています。
- [HTTP ステータスレスポンスコード](/ja/docs/Web/HTTP/Status)
  - : HTTP レスポンスコードは、特定の HTTP リクエストが正常に完了したかを示します。レスポンスは通知レスポンス、成功レスポンス、リダイレクション、クライアントエラー、サーバーエラーの 5 つのクラスに分類されます。
- [CSP ディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : ウェブサイトの管理者は、{{HTTPHeader("Content-Security-Policy")}} レスポンスヘッダーフィールドで、ユーザーエージェントが特定のページで読み込むことが許可されているリソースを制御することができます。いくつか例外はありますが、大元のサーバーやスクリプトのエンドポイントの特定をポリシーとして含んでいることが多いです。

## ツールとリソース

HTTP の理解やデバッグに役立つツールやリソースです。

- [Firefox 開発者ツール](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [Mozilla 研究室](https://observatory.mozilla.org/)
  - : 開発者、システム管理者、セキュリティの専門家の、安全でセキュアなサイトの構築を支援するプロジェクトです。
- [RedBot](https://redbot.org/)
  - : キャッシュ関係のヘッダーを検証するツールです。
- [How Browsers Work (2011)](https://web.dev/howbrowserswork/)
  - : ブラウザーの内部処理や、 HTTP プロトコルのリクエスト処理のフローに関してとても詳しく書かれた記事です。ウェブ開発者であれば一読するべき記事になります。

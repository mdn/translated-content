---
title: HTTP
slug: Web/HTTP
---

{{HTTPSidebar}}

**_Hypertext Transfer Protocol (HTTP)_** は HTML などのハイパーメディア文書を転送するための[アプリケーション層](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E5%B1%A4)プロトコルです。このプロトコルはウェブブラウザー(クライアント)とウェブサーバー間の通信を目的として設計されていますが、他の用途でも使用されることがあります。 HTTP は旧来の[クライアント・サーバーモデル](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%82%B5%E3%83%BC%E3%83%90%E3%83%A2%E3%83%87%E3%83%AB)に則っており、クライアントはサーバーにリクエストを送信するためにポートを開き、サーバー側からのレスポンスが返ってくるまで待機します。 HTTP はいわゆる[ステートレスプロトコル](https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%86%E3%83%BC%E3%83%88%E3%83%AC%E3%82%B9%E3%83%BB%E3%83%97%E3%83%AD%E3%83%88%E3%82%B3%E3%83%AB)であり、つまりサーバーは二つのリクエスト間で何もデータを保持しません。 HTTP は多くの場合 TCP/IP 層上の通信で使用されますが、任意の信頼性がある[トランスポート層](https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%88%E5%B1%A4)、すなわち、 UDP のように知らぬ間にメッセージが失われるようなことがないプロトコルでも使用されることがあります。 [RUDP](https://en.wikipedia.org/wiki/Reliable_User_Datagram_Protocol) — UDP に信頼性を追加したもの — も代替用として適合します。

## チュートリアル

ガイドやチュートリアルで、 HTTP の使い方を学びましょう。

- [HTTP の概要](/ja/docs/Web/HTTP/Overview)
  - : クライアントサーバープロトコルの基本的な特徴です。 HTTP で実現できること、また何故それを実現すべきなのかを説明します。
- [HTTP キャッシュ](/ja/docs/Web/HTTP/Caching)
  - : キャッシュは高速で快適なウェブサイトの閲覧を可能にするために非常に需要な要素です。この記事では様々なキャッシングの手法や、HTTP ヘッダーでどのようにそれらを制御するかを説明します。
- [HTTP Cookie](/ja/docs/Web/HTTP/Cookies)
  - : Cookie の動作は [RFC 6265](http://tools.ietf.org/html/rfc6265) で定義されています。サーバーは HTTP リクエストをクライアント側に送信する際、`Set-Cookie` ヘッダー付与することができます。クッキーの値は `Cookie` リクエストのヘッダーの識別子に含まれた、同一サーバーに対する全てのリクエストを保持しており、クライアント側はそれを返します。また、Cookie に有効期限を設定したり、特定のドメインやパスだけにステートフルな挙動を限定することもできます。
- [オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/CORS)
  - : **サイト間 HTTP リクエスト**とは、リクエストを生成したリソースがあるドメインとは **別のドメイン** のリソースをリクエストする HTTP リクエストのことを指します。例えば、ドメイン A (`http://domaina.example/`) から読み込まれた HTML ページが、`img` 要素を使用してドメイン B の画像 (`http://domainb.foo/image.jpg`) に対するリクエストを発行することがそれにあたります。昨今のウェブページでは、CSS スタイルシートや画像データ、スクリプト、その他のリソースを含め、上記の例のようにサイトを跨ってデータを読み込むのが一般的になっています。ウェブ開発者は、CORS を使ってこのようなサイト間のリクエストに対して個々のサイトが示す挙動を制御することができます。

<!---->

- [HTTP の進化](/ja/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : 初期バージョンの HTTP から最新の HTTP/2、姿を現した HTTP/3 以降までの変革を端的に説明します。
- [Mozilla ウェブセキュリティガイドライン](https://wiki.mozilla.org/Security/Guidelines/Web_Security)
  - : 運用チームがセキュアなウェブアプリケーションを開発するのに役立つコツをまとめました。

<!---->

- [HTTP メッセージ](/ja/docs/Web/HTTP/Messages)
  - : HTTP/1.x や HTTP/2 の多様なメッセージが持つ型や構造を説明します。
- [HTTP セッションの典型例](/ja/docs/Web/HTTP/Session)
  - : 一般的な HTTP セッションのフローを示しながら説明します。
- [HTTP/1.x のコネクション制御](/ja/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.x で使用できる 3 種類の通信制御モデルの持つ長所と短所を説明します。

## リファレンス

詳細な HTTP の参考資料を見ていきましょう。

- [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)
  - : HTTP メッセージヘッダーは、リソース、あるいはサーバーやクライアントの挙動を示すために使用します。個人的にヘッダーをカスタマイズする場合は、`X-` を頭に付けることで追加できます。それ以外のヘッダーは [IANA レジストリ](https://www.iana.org/assignments/message-headers/message-headers.xhtml#perm-headers) に収録されていますが、元の内容は [RFC 4229](http://tools.ietf.org/html/rfc4229) で定義されていました。IANA は [新たに提案された HTTP メッセージヘッダーのレジストリ](https://www.iana.org/assignments/message-headers/message-headers.xhtml#prov-headers)も管理しています。
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Methods)
  - : HTTP では多様な操作を実現することができます。一般的な {{HTTPMethod("GET")}} や {{HTTPMethod("POST")}} だけでなく、{{HTTPMethod("OPTIONS")}} や {{HTTPMethod("DELETE")}}、{{HTTPMethod("TRACE")}} などのあまり一般的ではないリクエストも包括しています。
- [HTTP ステータスレスポンスコード](/ja/docs/Web/HTTP/Response_codes)
  - : HTTP レスポンスコードは、特定の HTTP リクエストが正常に完了したかを示します。レスポンスは通知レスポンス、成功レスポンス、リダイレクション、クライアントエラー、サーバーエラーの 5 つのクラスに分類されます。

<!---->

- [CSP ディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : ウェブサイトの管理者は、{{HTTPHeader("Content-Security-Policy")}} レスポンスヘッダーフィールドで、ユーザーエージェントが特定のページで読み込むことが許可されているリソースを制御することができます。いくつか例外はありますが、大元のサーバーやスクリプトのエンドポイントの特定をポリシーとして含んでいることが多いです。

## ツールとリソース

HTTP の理解やデバッグに役立つツールやリソースです。

- [Firefox 開発ツール](/ja/docs/Tools)
  - : [ネットワークモニター](/ja/docs/Tools/Network_Monitor)
- [Mozilla 研究室](https://observatory.mozilla.org/)
  - : 開発者、システム管理者、セキュリティの専門家の、安全でセキュアなサイトの構築を支援するプロジェクトです。
- [RedBot](https://redbot.org/)
  - : キャッシュ関係のヘッダーを検証するツールです。
- [How Browsers Work](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
  - : ブラウザーの内部処理や、 HTTP プロトコルのリクエスト処理のフローに関してとても詳しく書かれた記事です。ウェブ開発者であれば一読するべき記事になります。

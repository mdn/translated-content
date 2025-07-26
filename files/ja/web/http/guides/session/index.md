---
title: 典型的な HTTP セッション
slug: Web/HTTP/Guides/Session
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP のようなクライアントサーバープロトコルでは、セッションが 3 つの段階で構成されます。

1. クライアントは TCP コネクション（トランスポート層が TCP ではない場合は、他の適切なコネクション）を確立します。
2. クライアントはリクエストを送り、返答を待ちます。
3. サーバーはリクエストを処理して、ステータスコードや適切なデータを提供する回答を返信します。

HTTP/1.1 では第 3 段階の後にコネクションは閉じられなくなり、クライアントはさらにリクエストを発行することができます。つまり、第 2 段階と第 3 段階を複数回行うことができます。

## コネクションの確立

クライアントサーバープロトコルでは、クライアントがコネクションを確立します。HTTP のコネクションを開くとは、下層のトランスポート層のコネクションを確立することであり、これは通常 TCP です。

コンピューター上の HTTP サーバー用の、 TCP の既定のポートは 80 番です。8000 番や 8080 番など、ほかのポートを使用することもできます。読み込むページの URL はドメイン名とポート番号の両方を含みますが、後者は 80 番である場合に省略できます。詳しくは[ウェブ上のリソースの識別](/ja/docs/Web/URI)をご覧ください。

> [!NOTE]
> クライアントサーバーモデルでは、明示的にリクエストすることなくサーバーがクライアントにデータを送信することを認めていません。ただし、[プッシュ API](/ja/docs/Web/API/Push_API)、[サーバー送信イベント](/ja/docs/Web/API/Server-sent_events)、[WebSockets API](/ja/docs/Web/API/WebSockets_API) など、この用途を可能にするさまざまな Web API があります。

## クライアントのリクエストの送信

コネクションを確立すると、ユーザーエージェントはリクエストを送信できます（ユーザーエージェントは一般的にウェブブラウザーですが、ほかにもクローラーなどがあります）。クライアントのリクエストは CRLF （キャリッジリターンに続いてラインフィード）で区切られたテキストのディレクティブで構成され、3 つのブロックに分けられます。

1. 最初の行は、リクエストメソッドの後に次の引数が続きます。
   - 文書のパス、すなわち絶対 URL からプロトコル名とドメイン名を除いたものです。
   - HTTP プロトコルのバージョン。

2. 後続の行は HTTP ヘッダーであり、サーバーに対してどの種類（例えば、言語や MIME タイプ）のデータが適切かを示す情報や、サーバーの動作を変える（例えば、すでにキャッシュされている場合は回答を送信しない）データを与えます。これらの HTTP ヘッダーは空行で終わるブロックを構成します。
3. 最後のブロックは省略可能なデータブロックで、主に POST メソッドで使用される追加のデータを含みます。

### リクエストの例

developer.mozilla.org のルートページ、すなわち `https://developer.mozilla.org/` を読み込む、また可能であればユーザーエージェントはフランス語のページを希望することをサーバーに伝えます。

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

ヘッダーブロックとデータブロックを分けている、最後の空行に注意してください。この例は HTTP ヘッダーに `Content-Length` がありませんので、空のデータブロックが与えられてヘッダーの終わりを示しており、サーバーはこの空行を受け取るとただちにリクエストを処理できます。

フォームの入力結果を送信する例です。

```http
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue
```

### リクエストメソッド

HTTP では、リソースに対して実行したいアクションを示す、一連の[リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)を定義しています。リクエストメソッドには名詞も存在しますが、 HTTP 動詞と言われることがあります。 `GET` と `POST` が最も一般的です。

- {{HTTPMethod("GET")}} メソッドは、指定したリソースのデータを要求します。 `GET` を使用するリクエストは、データの取り込みに限ります。
- {{HTTPMethod("POST")}} メソッドはサーバーにデータを送信しますので、データの状態を変更できます。これは、 [HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)用によく使用されるメソッドです。

## サーバーレスポンスの構造

接続したエージェントがリクエストを送信すると、ウェブサーバーはそのリクエストを処理して、最終的にレスポンスを返信します。クライアントのリクエストと同様にサーバーのレスポンスはテキストのディレクティブで構成され、それらは CRLF で区切られており、3 つのブロックに分けられます。

1. 最初の行はステータス行で、受け入れた HTTP バージョンとレスポンスステータスコードで構成されます（そして、人間に読めるテキストで意味を短く示します）。
2. 続く行はそれぞれ具体的な HTTP ヘッダーを表しており、クライアントに対して送信したデータに関する情報（例えば種類、サイズ、圧縮方法、キャッシュ情報）を与えます。クライアントのリクエストの HTTP ヘッダーブロックと同様に、これらの HTTP ヘッダーも空行で終わるブロックを構成します。
3. 最後のブロックはデータブロックで、任意のデータを含みます。

### レスポンスの例

成功したウェブページのレスポンスです。

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 55743
Connection: keep-alive
Cache-Control: s-maxage=300, public, max-age=0
Content-Language: ja
Date: Thu, 06 Dec 2018 17:37:18 GMT
ETag: "2e77ad1dc6ab0b53a2996dfd4653c1c3"
Server: meinheld/0.6.1
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Vary: Accept-Encoding,Cookie
Age: 7

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>基本的なウェブページ</title>
</head>
<body>
  <h1>基本的な HTML のウェブページ</h1>
  <p>Hello, world!</p>
</body>
</html>
```

リクエストされたリソースが永続的に移動されたことの通知です。

```http
HTTP/1.1 301 Moved Permanently
Server: Apache/2.4.37 (Red Hat)
Content-Type: text/html; charset=utf-8
Date: Thu, 06 Dec 2018 17:33:08 GMT
Location: https://developer.mozilla.org/ (これはリソースの新しいリンクです。ユーザーエージェントはこちらを読み込むでしょう)
Keep-Alive: timeout=15, max=98
Accept-Ranges: bytes
Via: Moz-Cache-zlb05
Connection: Keep-Alive
Content-Length: 325 (ユーザーエージェントがリンクをたどれない場合に表示する、既定のページを含むコンテンツです)

<!doctype html>… (contains a site-customized page helping the user to find the missing resource)
```

リクエストされたリソースが存在しないことの通知です。

```http
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
Content-Length: 38217
Connection: keep-alive
Cache-Control: no-cache, no-store, must-revalidate, max-age=0
Content-Language: en-US
Date: Thu, 06 Dec 2018 17:35:13 GMT
Expires: Thu, 06 Dec 2018 17:35:13 GMT
Server: meinheld/0.6.1
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Vary: Accept-Encoding,Cookie
X-Cache: Error from cloudfront

<!doctype html... (欠けているリソースをユーザが見つけることを支援する、サイト毎にカスタマイズされたページを含みます)
```

### レスポンスステータスコード

[HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status) は、特定の HTTP リクエストが正常に完了したかを示します。レスポンスは情報レスポンス、成功レスポンス、リダイレクション、クライアントエラー、サーバーエラーの 5 つのクラスに分類されます。

- {{HTTPStatus(200)}}: OK. リクエストは成功しました。
- {{HTTPStatus(301)}}: Moved Permanently. このレスポンスコードは、リクエストしたリソースの URI が変更されたことを表します。
- {{HTTPStatus(404)}}: Not Found. サーバーは、リクエストされたリソースを見つけることができません。

## 関連情報

- [ウェブ上のリソースの識別](/ja/docs/Web/URI)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)

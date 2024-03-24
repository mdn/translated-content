---
title: 典型的な HTTP セッション
slug: Web/HTTP/Session
---

{{HTTPSidebar}}

HTTP のようなクライアントサーバープロトコルでは、セッションが 3 つの段階で構成されます。

1. クライアントは TCP コネクション (トランスポート層が TCP ではない場合は、他の適切なコネクション) を確立します。
2. クライアントは要求を送り、回答を待ちます。
3. サーバは要求を処理して、ステータスコードや適切なデータを提供する回答を返信します。

HTTP/1.1 では第 3 段階の後にコネクションは閉じられなくなり、クライアントはさらに要求を発行することができます。つまり、第 2 段階と第 3 段階を複数回行うことができます。

## コネクションの確立

クライアントサーバープロトコルでは、クライアントがコネクションを確立します。HTTP のコネクションを開くとは、下層のトランスポート層のコネクションを確立することであり、これは通常 TCP です。

コンピューター上の HTTP サーバー用の、 TCP の既定のポートは 80 番です。8000 番や 8080 番など、ほかのポートを使用することもできます。読み込むページの URL はドメイン名とポート番号の両方を含みますが、後者は 80 番である場合に省略できます。詳しくは [Identifying resources on the Web](/ja/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web) をご覧ください。

> **メモ:** クライアントサーバーモデルでは、明示的な要求なくサーバーがクライアントにデータを送信することを認めていません。この問題を回避するために、ウェブ開発者はいくつかの技術を使用しています。 {{domxref("XMLHTTPRequest")}} や {{domxref("Fetch")}} API で定期的にサーバーに ping を送ったり、 [WebSockets API](/ja/docs/WebSockets) や同様のプロトコルを使用したりします。

## クライアントの要求の送信

コネクションを確立すると、ユーザーエージェントは要求を送信できます (ユーザーエージェントは一般的にウェブブラウザーですが、ほかにもクローラーなどがあります)。クライアントの要求は CRLF (キャリッジリターンに続いてラインフィード) で区切られたテキストのディレクティブで構成され、3 つのブロックに分けられます。

1. 最初の行は、要求メソッドの後に次の引数が続きます。

   - 文書のパス、すなわち絶対 URL からプロトコル名とドメイン名を除いたものです。
   - HTTP プロトコルのバージョン。

2. 後続の行は HTTP ヘッダーであり、サーバーに対してどの種類 (例えば、言語や MIME タイプ) のデータが適切かを示す情報や、サーバーの動作を変える (例えば、すでにキャッシュされている場合は回答を送信しない) データを与えます。これらの HTTP ヘッダーは空行で終わるブロックを構成します。
3. 最後のブロックは省略可能なデータブロックで、主に POST メソッドで使用される追加のデータを含みます。

### 要求の例

developer.mozilla.org のルートページ、すなわち <http://developer.mozilla.org/> を読み込む、また可能であればユーザーエージェントはフランス語のページを希望することをサーバに伝えます:

```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

ヘッダーブロックとデータブロックを分けている、最後の空行に注意してください。この例は HTTP ヘッダーに `Content-Length` がありませんので、空のデータブロックが与えられてヘッダーの終わりを示しており、サーバーはこの空行を受け取るとただちに要求を処理できます。

フォームの入力結果を送信する例です。

```
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue
```

### 要求メソッド

HTTP では、リソースに対して実行したいアクションを示す[要求メソッド](/ja/docs/Web/HTTP/Methods)のセットを定義しています。要求メソッドには名詞も存在しますが、 HTTP 動詞と言われることがあります。 `GET` と `POST` が最も一般的です。

- {{HTTPMethod("GET")}} メソッドは、指定したリソースのデータを要求します。 `GET` を使用する要求は、データの取り込みに限ります。
- {{HTTPMethod("POST")}} メソッドはサーバーにデータを送信しますので、データの状態を変更できます。これは、 [HTML フォーム](/ja/docs/Web/Guide/HTML/Forms)用によく使用されるメソッドです。

## サーバー応答の構造

接続したエージェントが要求を送信すると、ウェブサーバーはその要求を処理して、最終的に応答を返信します。クライアントの要求と同様にサーバーの応答はテキストのディレクティブで構成され、それらは CRLF で区切られており、3 つのブロックに分けられます:

1. 最初の行は*ステータス行*で、受け入れた HTTP バージョンとステータス要求で構成されます (そして、人間に読めるテキストで意味を簡単に示します)。
2. 後続の行はそれぞれ具体的な HTTP ヘッダーを表しており、クライアントに対して送信したデータに関する情報 (例えば種類、サイズ、圧縮方法、キャッシュ情報) を与えます。クライアントの要求の HTTP ヘッダーブロックと同様に、これらの HTTP ヘッダーも空行で終わるブロックを構成します。
3. 最後のブロックはデータブロックで、任意のデータを含みます。

### 応答の例

成功したウェブページの応答です:

```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (ここにサイズが 29769 バイトの、要求されたウェブページが置かれます)
```

要求されたリソースが永続的に移動されたことの通知です。

```
HTTP/1.1 301 Moved Permanently
Server: Apache/2.2.3 (Red Hat)
Content-Type: text/html; charset=iso-8859-1
Date: Sat, 09 Oct 2010 14:30:24 GMT
Location: https://developer.mozilla.org/ (これはリソースの新しいリンクです。ユーザーエージェントはこちらを読み込むでしょう)
Keep-Alive: timeout=15, max=98
Accept-Ranges: bytes
Via: Moz-Cache-zlb05
Connection: Keep-Alive
X-Cache-Info: caching
X-Cache-Info: caching
Content-Length: 325 (ユーザーエージェントがリンクをたどれない場合に表示する、既定のページを含むコンテンツです)

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>301 Moved Permanently</title>
</head><body>
<h1>Moved Permanently</h1>
<p>The document has moved <a href="https://developer.mozilla.org/">here</a>.</p>
<hr>
<address>Apache/2.2.3 (Red Hat) Server at developer.mozilla.org Port 80</address>
</body></html>
```

要求されたリソースが存在しないことの通知です。

```
HTTP/1.1 404 Not Found
Date: Sat, 09 Oct 2010 14:33:02 GMT
Server: Apache
Last-Modified: Tue, 01 May 2007 14:24:39 GMT
ETag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
Accept-Ranges: bytes
Content-Length: 10732
Content-Type: text/html

<!DOCTYPE html... (欠けているリソースをユーザが見つけることを支援する、サイト毎にカスタマイズされたページを含みます)
```

### 応答ステータスコード

[HTTP 応答ステータスコード](/ja/docs/Web/HTTP/Status) は、特定の HTTP 要求が正常に完了したかを示します。応答は情報応答、成功応答、リダイレクション、クライアントエラー、サーバーエラーの 5 つのクラスに分類されます。

- {{HTTPStatus(200)}}: OK. 要求は成功しました。
- {{HTTPStatus(301)}}: Moved Permanently. この応答コードは、要求したリソースの URI が変更されたことを表します。
- {{HTTPStatus(404)}}: Not Found. サーバーは、要求されたリソースを見つけることができません。

## 関連情報

- [ウェブ上のリソースの識別](/ja/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)
- [HTTP 要求メソッド](/ja/docs/Web/HTTP/Methods)
- [HTTP 応答ステータスコード](/ja/docs/Web/HTTP/Status)

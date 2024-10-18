---
title: HTTP Content (HTTP コンテンツ)
slug: Glossary/HTTP_Content
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

HTTP メッセージでは、**コンテンツ**は、HTTP/1.1 のチャンク転送エンコーディングによるメッセージのフレームがすべて削除された後の、メッセージ本体（ヘッダーセクションに従う）で伝達される「情報」を記述しています。
これは、HTTP/1.1 では「ペイロード」と呼ばれていましたが、メッセージ「コンテンツ」は、単一のフレーム内のデータがヘッダーデータ、本体データ、またはその他のコントロール情報である可能性がある HTTP/2 および HTTP/3 では、フレームペイロードと区別します。

HTTP リクエストおよびレスポンスのメッセージコンテンツの目的は、リクエストメソッドとレスポンスステータスコードによって異なります。
例えば、{{HTTPMethod("PUT")}} リクエストでは、コンテンツはリソースの希望する状態を表しますが、{{HTTPMethod("POST")}} リクエストでは、コンテンツは処理される情報となります。
{{HTTPMethod("GET")}} リクエストに対する {{HTTPStatus("200", "200 OK")}} レスポンスは、リソースの現在の状態を表示しますが、エラーレスポンスはエラーを記述します。

{{HTTPMethod("HEAD")}} リクエストや {{HTTPStatus("204", "204 No Content")}}、{{HTTPStatus("204", "304 Not Modified")}} ステータスコードなど、一部のレスポンスにはコンテンツがまったく含まれません。

次の HTTP/1.1 レスポンスでは、メッセージ本体が `Mozilla Developer Network` というコンテンツを含んでいます。

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

次の HTTP/1.1 レスポンスでは、転送エンコード方式によりデータがチャンクにエンコードされます。
コンテンツは結局のところ `Mozilla Developer Network` のままですが、メッセージ本体にはチャンクを別個のメッセージデータとして区切るための異なるメッセージデータが含まれています。

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
```

## 関連情報

- {{HTTPHeader("Content-Location")}}
- {{HTTPStatus("413", "413 Content Too Large")}}
- {{Glossary("Content header")}}
- [RFC 9110, section 6.4: Content](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4)（[RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) のペイロードの意味を置き換え）
  - [Changes from RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)

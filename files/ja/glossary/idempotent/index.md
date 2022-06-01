---
title: Idempotent (べき等)
slug: Glossary/Idempotent
tags:
  - 用語集
  - WebMechanics
translation_of: Glossary/Idempotent
---
ある HTTP メソッドが**べき等**であるとは、サーバーが同じ状況にあるとき、特定のリクエストに対して何回でも続けて同じ効果が起こることをいいます。このことは、べき等なメソッドでは (統計を取る際のことを除いて) 副作用が生じるはずではないと言うこともできます 。 適切に実装された {{HTTPMethod("GET")}}、{{HTTPMethod("HEAD")}}、{{HTTPMethod("PUT")}}、{{HTTPMethod("DELETE")}} の各メソッドは**べき等**ですが、{{HTTPMethod("POST")}} メソッドはそうではありません。{{Glossary("Safe/HTTP", "安全な")}}メソッドはすべてべき等です。

べき等であるためには、サーバーにおける裏側の実際の状態だけが考慮されるので、返される状態コードはリクエストごとに異なる場合があります。 例えば、最初に {{HTTPMethod("DELETE")}} メソッドが呼び出された場合は、おそらく {{HTTPStatus("200")}} を返しますが、それ以降は {{HTTPStatus("404")}} を返すでしょう。RESTful な API の設計において、*最後の入力操作を削除する*機能を `DELETE` メソッドを使って実装すべきでないとされるのも、{{HTTPMethod("DELETE")}} メソッドがべき等であることを示唆しています。

なお、メソッドがべき等であっても、サーバーやアプリケーションによってべき等性の破壊が生じることがあります。

例えば、 `GET /pageX HTTP/1.1` はべき等です。連続して何度か呼び出しても、クライアントは同じ結果を得ます。

    GET /pageX HTTP/1.1
    GET /pageX HTTP/1.1
    GET /pageX HTTP/1.1
    GET /pageX HTTP/1.1

`POST /add_row HTTP/1.1` はべき等ではありません。 何度か呼び出すと、その回数だけ列に追加されていきます。

    POST /add_row HTTP/1.1
    POST /add_row HTTP/1.1   -> Adds a 2nd row
    POST /add_row HTTP/1.1   -> Adds a 3rd row

`DELETE /idX/delete HTTP/1.1` はべき等ですが、状態コードは数回のリクエストの間に変化することがあります。

    DELETE /idX/delete HTTP/1.1   -> idX が存在する場合は 200 を返却
    DELETE /idX/delete HTTP/1.1   -> ちょうど削除されたので 404 を返却
    DELETE /idX/delete HTTP/1.1   -> 404 を返却

## 関連情報

- HTTP 規格における[べき等](https://tools.ietf.org/html/rfc7231#section-4.2.2)の定義
- べき等なメソッド: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}
- べき等でないメソッド: {{HTTPMethod("POST")}},{{HTTPMethod("PATCH")}}, {{HTTPMethod("CONNECT")}}

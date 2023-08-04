---
title: HTTP/2
slug: Glossary/HTTP_2
---

**HTTP/2** は [HTTP ネットワークプロトコル](/ja/docs/Web/HTTP/Basics_of_HTTP)の改訂版です。 HTTP/2 の主な目的は、リクエストとレスポンス全体を全二重化できるようにすることで、{{glossary("latency", "レイテンシー")}}を縮小し、 HTTP ヘッダーフィールドを効率的に圧縮することでプロトコルのオーバーヘッドを最小化し、リクエストの優先度やサーバーからのプッシュ通知に対応することです。

HTTP/2 は HTTP のアプリケーション的な意味を何も変更していません。 HTTP 1.1 にあった主要な概念、たとえば HTTP メソッド、ステータスコード、 URI、ヘッダーフィールドなどはすべてそのまま残っています。その代わり、 HTTP/2 はデータを書式化 (フレーム化) するしてクライアントとサーバー間で転送する方法を、プロセス全体の管理と、新しいフレーム化レイヤーの中の複雑さをアプリケーションから隠蔽することの両面で変更しました。結果として、既存のすべてのアプリケーションが変更なしに配信することができます。

1. 一般知識

   1. [HTTP on MDN](/ja/docs/Web/HTTP)
   2. Wikipedia の [HTTP/2](https://ja.wikipedia.org/wiki/HTTP/2)

2. [用語集](/ja/docs/Glossary)

   1. {{glossary("HTTP")}}
   2. {{glossary("Latency")}}

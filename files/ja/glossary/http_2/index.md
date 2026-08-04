---
title: HTTP/2
slug: Glossary/HTTP_2
l10n:
  sourceCommit: 30d3d33b476209c803c07316eaa580474addfff2
---

**HTTP/2** は [HTTP ネットワークプロトコル](/ja/docs/Web/HTTP)の改訂版です。

HTTP/2 の主な目的は、リクエストとレスポンスの完全な多重化およびリクエストの優先順位付けに対応することで、{{glossary("latency", "レイテンシー")}}と{{glossary("head of line blocking", "先頭行ブロック")}}を縮小すること、および HTTP ヘッダーフィールドの効率的な圧縮 (HPACK) を通じてプロトコルのオーバーヘッドを最小限に抑えることです。

HTTP/2 では、サーバープッシュと呼ばれる仕組みも導入されました。これは、クライアントが間もなくリソースが必要になることを予測して、サーバーがクライアントにリソースを送信することができるものです。
しかし、サーバープッシュは実際には実装が難しく、主要なブラウザーエンジンのほとんどから除去されました。
その代わりとして、[`rel="preload"`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) や {{HTTPStatus("103", "103 Early hints")}}といった代替手法が採用されています。

HTTP/2 は HTTP のアプリケーション的な意味を何も変更していません。 HTTP 1.1 にあった主要な概念、たとえば HTTP メソッド、ステータスコード、 URI、ヘッダーフィールドなどはすべてそのまま残っています。その代わり、 HTTP/2 はデータを書式化 (フレーム化) してクライアントとサーバー間で転送する方法を、プロセス全体の管理と、新しいフレーム化レイヤーの中の複雑さをアプリケーションから隠蔽することの両面で変更しました。
結果として、既存のすべてのアプリケーションが変更なしに配信することができます。

## 関連情報

- [HTTP](/ja/docs/Web/HTTP) - MDN
- 関連用語:
  - {{glossary("HTTP")}}
  - {{glossary("Latency", "レイテンシー")}}, {{glossary("head of line blocking", "先頭行ブロック")}}
- {{RFC("7540", "Server Push", "8.2")}}
- [HTTP/2](https://ja.wikipedia.org/wiki/HTTP/2) - ウィキペディア


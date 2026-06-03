---
title: HTTP の圧縮
slug: Web/HTTP/Guides/Compression
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**圧縮**は、ウェブサイトのパフォーマンスを向上させるための重要な手段です。文書によっては、必要な帯域を最大 70% 削減するほどサイズが縮減します。長年かけてアルゴリズムはより効率的になり、またクライアントおよびサーバーが新たなアルゴリズムに対応してきました。

実際のところ、圧縮の仕組みはブラウザーやサーバーがすでに実装していますので、ウェブ開発者が実装する必要性はありません。しかし、サーバーが適切に設定されるように注意しなければなりません。圧縮は、3 種類の異なるレベルで実施します。

- 始めに、一部のファイル形式は、固有の最適化された方法で圧縮されます。
- そして、一般的な暗号化が HTTP レベルで行われれる場合があります（リソースはエンドツーエンドで圧縮されて転送されます）
- 最後に HTTP コネクションの 2 つのノード間で、コネクションレベルで圧縮が定義される場合があります。

## ファイル形式の圧縮

それぞれのデータ形式には、無駄なスペース (_wasted space_) と呼ばれる冗長な領域が内部にあります。テキストは一般的に 60% もの冗長性を持つものであり、この割合は音声や動画といった他のメディアよりはるかに高くなります。テキストとは異なり、これらのその他のメディア形式はデータを格納するためにより多くの領域を使用するので、ストレージを最適化し領域を取り戻す必要性はごく初期に明らかになりました。技術者は特定の用途向けに設計されたファイル形式で使用される、最適化された圧縮アルゴリズムを設計しました。メディアファイルで使用される圧縮アルゴリズムは、大きく 2 つのカテゴリーに分類できます。

- _可逆圧縮_。圧縮・展開のサイクルで取り出したデータが変化しません。これは元のデータに（バイト単位で）一致します。
  画像では `gif` や `png` が可逆圧縮を使用しています。
- _非可逆圧縮_。圧縮・展開のサイクルにおいて、ユーザーが（できるだけ）認知できない方法で元のデータを変更します。
  ウェブ上の動画形式は非可逆です。 `jpeg` 画像も非可逆です。

`webp` のように、一部の書式は、非可逆圧縮と可逆圧縮の両方に使用することができます。通常、非可逆アルゴリズムは、圧縮率を多かれ少なかれ構成することができ、その結果、当然、品質も多かれ少なかれ変化します。ウェブサイトのパフォーマンスを向上させるためには、受け入れられる品質レベルを維持しながら、可能な限り圧縮することが理想的です。画像の場合、ツールによって生成された画像は、ウェブ用に十分に最適化されていない可能性があります。必要な品質を維持しながら、可能な限り圧縮するツールを使用することをお勧めします。これに特化した[数多くのツール](https://www.creativebloq.com/design/image-compression-tools-1132865)があります。

非可逆圧縮アルゴリズムは一般的に、可逆圧縮より効率がよくなります。

> [!NOTE]
> 圧縮は特定の種類のファイルでより効果的に機能するため、通常、2 度目の圧縮は指定されません。実際、オーバーヘッドのコスト（アルゴリズムは通常、初期サイズに追加される辞書が必要）が圧縮による追加の利点よりも高くなり、ファイルサイズが大きくなるため、これは逆効果になる場合が多いです。圧縮書式化されたファイルには、次の 2 つの手法を使用しないでください。

## エンドツーエンドの圧縮

エンドツーエンドの圧縮は、ウェブサイトのパフォーマンスをもっとも向上させます。エンドツーエンドの圧縮は、サーバーによって行われるメッセージ本体の圧縮を指しており、圧縮されたデータはクライアントに到達するまで変更されません。中間のノードはすべて、本体部分に手をつけないままにします。

<!--
%%{init: { "sequence": { "wrap": true, "width": 175, "noteAlign": "center", "messageAlign": "left" }} }%%

sequenceDiagram
    participant Client
    participant Proxy1 as Proxy
    participant Proxy2 as Proxy
    participant Server

    Note over Client: Resource requested.
    Client->>Server:
    Note over Server: Resource is compressed and returned.
    Server->>Client:
    Note over Proxy1,Proxy2: Intermediate nodes do not uncompress the body.
    Note over Client: Client decompresses the body.
-->

![圧縮された HTTP 本体をネットワークノード経由でクライアントに送信するサーバー。本体がクライアントに達するまで、ネットワーク上のどのホップでも展開されません。](httpenco1.svg)

現代のすべてのブラウザーやサーバーはこの圧縮に対応しており、唯一取り決めることは、使用する圧縮アルゴリズムです。これらのアルゴリズムは、テキストに最適化されています。1990 年代に圧縮技術は速いペースで進歩して、いくつものアルゴリズムが、使用可能な選択肢に追加されました。現在有効なアルゴリズムは、もっとも一般的な `gzip` と新たな挑戦者である `br` の 2 つだけです。

使用するアルゴリズムを選択するには、ブラウザーとサーバーで[プロアクティブなコンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)を行います。ブラウザーは {{HTTPHeader("Accept-Encoding")}} ヘッダーで、サポートするアルゴリズムを優先度順に並べて送信します。サーバーはそのうちひとつを選択して、レスポンスの本体の圧縮に使用します。そして {{HTTPHeader("Content-Encoding")}} ヘッダーを使用して、選択したアルゴリズムをブラウザーに伝えます。エンコーディングに基づいて表現を選択するためにコンテンツネゴシエーションを使用したとき、少なくとも {{HTTPHeader("Content-Encoding")}} を含めた {{HTTPHeader("Vary")}} ヘッダーを、レスポンスとともに送信しなければなりません。この方法によって、リソースのさまざまな表現をキャッシュすることができます。

<!--
%%{init: { "sequence": { "wrap": true, "width":380, "noteAlign": "center", "messageAlign": "left" }} }%%

sequenceDiagram
    participant Client
    participant Server

    Note over Client: The client signifies its ability to understand two compression algorithms.
    Client->>Server: GET /doc HTTP/1.1<br/>Accept-Encoding: br, gzip
    Note over Server: The resource is sent compressed. The Vary header indicates that content negotiation has been used to select the algorithm.
    Server->>Client: HTTP/1.1 200 OK<br/>Content-Encoding: br<br/>Vary: Accept-Encoding
-->

!['Accept-Encoding: br, gzip' ヘッダーでコンテンツをリクエストされたクライアント。サーバーは Brotli アルゴリズムで圧縮した本体と、必要な 'Content-Encoding' ヘッダーと 'Vary' ヘッダーでレスポンスします。](httpcompression1.svg)

圧縮によってパフォーマンスが大きく向上しますので、画像・音声・動画といったすでに圧縮されているものを除くすべてのファイルで圧縮を有効化することを推奨します。

Apache は圧縮や [mod_deflate](https://httpd.apache.org/docs/current/mod/mod_deflate.html) をサポートします。 Nginx では [ngx_http_gzip_module](https://nginx.org/en/docs/http/ngx_http_gzip_module.html)、 IIS では [`<httpCompression>`](https://learn.microsoft.com/iis/configuration/system.webServer/httpCompression/) 要素があります。

## 圧縮辞書転送

{{glossary("Brotli compression", "Brotli 圧縮")}}や {{glossary("Zstandard compression", "Zstandard 圧縮")}}などの現行の圧縮形式では、頻繁に使用されるデータの辞書を使用することで、圧縮対象ファイル内のデータに参照するよりもさらに圧縮率を高めることができます。通常、HTTP レスポンスでは、その形式に定義済みの静的辞書が使用されます（例えば、 [Brotli の静的辞書は、このソースコード内にあります](https://github.com/google/brotli/blob/master/csharp/org/brotli/dec/Dictionary.cs)）。

[圧縮辞書転送](/ja/docs/Web/HTTP/Guides/Compression_dictionary_transport)を使用すると、開発者は、今後のリクエストの辞書として使用できるリソースを指定することができます。これは、特定の辞書ファイル、または既存のリソース（例えば、`app.v2.js` をダウンロードする際に `app.v1.js` を辞書として使用）のいずれかです。これにより、通常、圧縮率が向上し、読み込み時間が短縮されます。`app.vX.js` の例では、ダウンロードの大部分は 2 つのバージョンの差分のみで構成され、共通のバイトは、すでにダウンロードされている元の `app.v1.js` ファイルから参照することができます。

## ホップバイホップの圧縮

ホップバイホップの圧縮はエンドツーエンドの圧縮に似ています。しかし、サーバー内のリソースでは圧縮を行わずに特定の表現形式を生成して転送しますが、クライアントとサーバーの間のパス上にある任意の 2 つのノードの間でメッセージの本体が圧縮されるという根本的な違いがあります。連続した中間ノードの間のコネクションで、*異なる*圧縮が行われることがあります。

<!--
%%{init: { "sequence": { "wrap": true, "width": 130, "noteAlign": "center", "messageAlign": "left" }} }%%

sequenceDiagram
    participant Client
    participant N1 as Node
    participant N2 as Node
    participant N3 as Node
    participant Server

    Client->>N1: Uncompressed
    Note left of Client: Client sends an uncompressed body.
    Note over N1,N3: Intermediate nodes send the body with or without compression on a hop-by-hop basis.
    N1->>N2: Uncompressed
    N2->>N3: Compressed
    N3->>Server: Uncompressed
    Note right of Server: The server receives an uncompressed body.
-->

![非圧縮 HTTP 本体をネットワークノード経由でクライアントに送信するサーバー。本体はクライアントに到達する前に、'Transfer-Encoding' ヘッダーによってネットワーク上のノードで圧縮・展開されます。](httpte1.svg)

これを行うために、 HTTP ではエンドツーエンドの圧縮のコンテンツネゴシエーションに似ている仕組みを使用します。リクエストを転送するノードは {{HTTPHeader("TE")}} ヘッダーを使用して圧縮アルゴリズムを伝えます。相手のノードは適切な方式を選択して圧縮を行い、 {{HTTPHeader("Transfer-Encoding")}} ヘッダーを使用して、選択した方式を示します。

<!--
%%{init: { "sequence": { "wrap": true, "width": 175, "noteAlign": "center" }} }%%

sequenceDiagram
    participant Client
    participant Node1 as Node
    participant Node2 as Node
    participant Server

    Note over Client: Request message
    Client->>Node1: GET /doc HTTP/1.1

    Note over Node1: Shows support for compression while forwarding message.
    Node1->>Node2: GET /doc HTTP/1.1<br/>TE: gzip, br

    Note over Node2: Forwards message
    Node2->>Server: GET /doc HTTP/1.1

    Note over Server: Returns resource in an uncompressed body.
    Server->>Node2: HTTP/1.1 200 OK

    Note over Node2: Compresses body and forwards message.
    Node2->>Node1: HTTP/1.1 200 OK<br/>Transfer-Encoding: br

    Note over Node1: Decompresses resource and returns message to Client.
    Node1->>Client: HTTP/1.1 200 OK
-->

![クライアントが、圧縮関連のヘッダーを持たないコンテンツをサーバーにリクエストされた場合。サーバーは圧縮されていない本体で応答します。本体がクライアントにリーチするまでに、ネットワーク上のノードで圧縮と展開が行われます。](httpcomp2.svg)

実際は、ホップバイホップの圧縮はサーバーやクライアントにとって透過的であり、あまり使用されません。 {{HTTPHeader("TE")}} および {{HTTPHeader("Transfer-Encoding")}} は主にチャンク形式でレスポンスを送信するために使用され、長さがわからないリソースの転送を開始することができます。

ホップレベルで圧縮や {{HTTPHeader("Transfer-Encoding")}} を使用することは Apache、Nginx、IIS などほとんどのサーバーでまれであり、簡単に設定する方法はありません。このような設定は、主にプロキシーレベルで行います。

## 関連情報

- [圧縮辞書転送ガイド](/ja/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- 用語集:
  - {{Glossary("Brotli compression", "Brotli 圧縮")}}
  - {{Glossary("Gzip compression", "Gzip 圧縮")}}
  - {{Glossary("Lossless compression", "可逆圧縮")}}
  - {{Glossary("Lossy compression", "非可逆圧縮")}}
  - {{Glossary("Zstandard compression", "Zstandard 圧縮")}}
  - {{Glossary("Compression Dictionary Transport", "圧縮辞書転送")}}

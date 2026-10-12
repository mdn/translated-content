---
title: QUERY リクエストメソッド
short-title: QUERY
slug: Web/HTTP/Reference/Methods/QUERY
l10n:
  sourceCommit: 2a973f388561148f5a8001e572dac8143c5a5914
---

`QUERY` は HTTP のメソッドで、サーバー側のクエリーを開始します。このメソッドは、対象とするリソースに対して、リクエストのコンテンツを安全かつべき等な方法で処理し、その結果をレスポンスとして返すよう要求します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本文</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全性")}}</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "キャッシュ")}}</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Learn_web_development/Extensions/Forms">HTML フォーム</a>で許可
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
QUERY <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : {{HTTPHeader("Host")}} ヘッダーで指定された情報と組み合わせて、クエリーを処理する対象リソースを特定します。
    これは、元のサーバーへのリクエストでは絶対パス（例: `/path/to/resource`）であり、プロキシーへのリクエストでは絶対 URL（例: `https://example.com/path/to/resource`）となります。
- `<query>` {{optional_inline}}
  - : 疑問符 (`?`) の後に続く、オプションの URI クエリー成分。
    これは、クエリーの対象となるリソースを特定するのに役立ちます。リクエストのコンテンツとそのメディア種別によって、実際のクエリーが定義されます。

## 解説

`QUERY` メソッドは、対象リソースに対し、そのスコープ内でクエリー操作を実行し、結果を返すよう要求します。これは、対象 URI で識別されるリソースの表現を要求する {{HTTPMethod("GET")}} とは対照的です。
リクエストの内容とその {{HTTPHeader("Content-Type")}} によってクエリーが定義され、対象リソースが、データベーステーブル、検索インデックス、APIによって公開された集合など、クエリーの実行対象を決定します。

クエリーは URI ではなくリクエスト本文に含まれるため、URI のクエリー要素に適用される長さやエンコーディングの制限には制約されません。
また、URI 内のクエリーに比べて外部に公開される範囲も狭くなります。詳細については、[セキュリティの考慮事項](#セキュリティの考慮事項)を参照してください。

`QUERY` は、あらゆる場合で `GET` を置き換えるわけではありません。
クエリーが URI に収まるほど短い場合は、`GET` が優れた選択肢となります。これは特別な手間をかけずにブックマークしたり、リンクを張ったり、キャッシュしたりできる URL が生成されるからです。
`QUERY` は、SQL 文や JSONPath 式のような大規模または構造化されたクエリーの場合や、URI に公開されるべきでないクエリーなど、URI が実用的でなくなる場合に特に有用です。

コンテンツの送信において、`QUERY` は {{HTTPMethod("POST")}} に似ていますが、`POST` とは異なり、明示的に{{Glossary("Safe/HTTP", "安全")}}かつ{{Glossary("Idempotent", "べき等")}}です。
クライアントは、対象リソースへの変更をリクエストすることも、期待することもありません。したがって、接続失敗の後でも、追加の効果を心配することなく `QUERY` リクエストを再試行することが可能です。

### 対応状況を見つける

リソースは、{{HTTPMethod("OPTIONS")}} メソッドおよび {{HTTPHeader("Allow")}} レスポンスヘッダーを通じて、他のメソッドと同様に `QUERY` を公開します。

クライアントは、次のようにしてリソースに対してそのオプションを問い合わせることがあります。

```http
OPTIONS /contacts HTTP/1.1
Host: example.org
```

リソースは、`QUERY` リクエストを受け入れることを示すために、同様に応答する可能性があります。

```http
HTTP/1.1 200 OK
Allow: GET, QUERY, OPTIONS, HEAD
```

クライアントは、そのメソッドが対応しているかどうかを知らずに `QUERY` リクエストを送信する可能性があります。
サーバーは、そのリクエストを処理するか、{{HTTPStatus("405", "405 Method Not Allowed")}} を返すとともに、対応しているメソッドを掲載した `Allow` ヘッダーを返します。

リソースがクエリーのどの書式を受け入れるかは、{{HTTPHeader("Accept-Query")}} レスポンスヘッダーを通じて別個に通知されます。
クライアントは、`Accept-Query` ヘッダーから受け入れられる書式を読み取ることができます。

例えばリソースは、次のようにして受け入れる書式を知らせることがあります。

```http
HTTP/1.1 200 OK
Allow: GET, QUERY, OPTIONS, HEAD
Accept-Query: application/x-www-form-urlencoded, application/sql
```

クライアントは、以下のいずれかの書式で `QUERY` リクエストを送信することができます。

```http
QUERY /contacts HTTP/1.1
Host: example.org
Content-Type: application/sql
Accept: application/json

SELECT surname, email FROM contacts LIMIT 10
```

あるいは、クライアントは希望する書式化を指定して `QUERY` リクエストを送信し、返される {{HTTPStatus("415", "415 Unsupported Media Type")}} レスポンスの {{HTTPHeader("Accept")}} ヘッダーから、対応しているメディア種別を読み取ることができます。

### メディア種別とエラーレスポンス

サーバーは、`QUERY` リクエストに {{HTTPHeader("Content-Type")}} が欠落しているか、リクエストのコンテンツと一致しない場合は、拒否しなければなりません。
サーバーは、コンテンツ自体からメディア種別を推測することはできません。レスポンスは、リクエストの形式がどのように不正であるかによって異なります。

- {{HTTPStatus("400", "400 Bad Request")}}: リクエストにメディア種別情報が含まれていないか、または宣言されたメディア種別が実際のコンテンツと一致していません。
- {{HTTPStatus("415", "415 Unsupported Media Type")}}: このメディア種別は、このリソースでは対応していません。これには、その種別は一般的に理解されているものの、このリソースに対するクエリーとしては意味を持たない場合も含まれます。
- {{HTTPStatus("422", "422 Unprocessable Content")}}: メディア種別は認識され、コンテンツもそれに一致しているものの、クエリー自体が処理できない場合です。例えば、構文的には正しいものの、存在しない表の名前を指定している SQL クエリーなどがこれにあたります。
- {{HTTPStatus("406", "406 Not Acceptable")}}: クライアントが {{HTTPHeader("Accept")}} を通じて要求したレスポンスメディア種別を、リソースが生成できません。

### 同等のリソース

`QUERY` リクエストの_同等リソース_とは、`GET` リクエストに応答し、その対象やコンテンツを含み、`QUERY` リクエストそのものを表すリソースのことです。
その目的は、クライアントがクエリーの内容を再送信することなく、後で単純な `GET` リクエストを用いて同じクエリーを繰り返せるようにすることです。
実質的には、`QUERY` が対象とするリソースそのものであり、リクエストの内容がそのアイデンティティに組み込まれているものです。

概念的には、対応するリソースは常に存在しますが、サーバーは必ずしもそれに URI を割り当てる必要はありません。
サーバーが URI でそれを表す場合、`QUERY` リクエストに対する成功レスポンスは、2 つの異なるヘッダーを通じて、そのリソース自体および結果の格納済みコピーを指し示すことができます。

- {{HTTPHeader("Content-Location")}}: **いま実行したクエリーの結果**を保持するリソースを識別します。
  その URI に対して `GET` リクエストを取得すると、再び同じ結果が返されます。
- {{HTTPHeader("Location")}}: 同等のリソースを特定し、**同じクエリーを再実行**します。
  その URI に対して `GET` リクエストを行うと、クエリーの内容を再送信することなく、現在のデータに対して操作が繰り返されます。そのため、結果は元のレスポンスとは異なる場合があります。

どちらのリソースも、永続的であることは保証されていません。
これらのいずれかに対する意向のリクエストが失敗した場合、クライアントは元の `QUERY` リクエストをもとのコンテンツで繰り返すことでフォールバック処理を行うことができます。

これらの URI はクエリーの代わりとなるため、機密性の高いリクエストコンテンツを処理するサーバーは、コンテンツの機密部分を一切埋め込まずにこれらを生成する必要があります。
そうしない場合、クエリーが URI に埋め込まれてしまい、[セキュリティの注意事項](#セキュリティの注意事項)で説明されている公開性の利点が失われてしまいます。

### リダイレクト

サーバーは、クライアントをリダイレクトすることで、`QUERY` に間接的に応答することができます。
{{HTTPStatus("301", "301 Moved Permanently")}}、{{HTTPStatus("308", "308 Permanent Redirect")}}、{{HTTPStatus("302", "302 Found")}}、{{HTTPStatus("307", "307 Temporary Redirect")}} の場合、クライアントは {{HTTPHeader("Location")}} で指定された URI に対して、同様の `QUERY` リクエストを送信することが期待されます。
過去には、{{HTTPStatus("301")}} または {{HTTPStatus("302")}} リダイレクトに従うクライアントは、`POST` リクエストを `GET` リクエストに変更することができることが許可されていました。
これは `QUERY` には適用**されません**。上記の 4 つのステータスコードすべてにおいて、リダイレクトされたリクエストは、同じコンテンツを持つ `QUERY` リクエストのままです。

{{HTTPStatus("303", "303 See Other")}} というレスポンスは、`Location` に指定された URI に対して単純な `GET` リクエストを行うことで、代わりにクエリーを満たすことができるということを意味します。
`303` 自体にはクエリー結果が記載されていないため、サーバーは回答をインラインで計算することなく、同等のリソースを返すことができます。

### 条件付きリクエスト

`QUERY` リクエストの指定された表現は、同等のリソースに対する `GET` リクエストの表現と同じです。
したがって、条件付き `QUERY` は期待どおりに動作します。つまり、{{HTTPHeader("If-None-Match")}} や {{HTTPHeader("If-Modified-Since")}} などのヘッダーに指定された条件が満たされた場合にのみ、クエリ結果が返されます。それ以外の場合は、{{HTTPStatus("304", "304 Not Modified")}} が返されます。
これにより、クライアントは、変更されていない結果を転送するコストを避けることができます。

### キャッシュ

`QUERY` へのレスポンスは{{Glossary("cacheable", "キャッシュ可能")}}ですが、リクエスト URI だけではクエリーを特定できなくなったため、キャッシュキーにはリクエストのコンテンツと関連付けられたメタデータを含める必要があります。
したがって、キャッシュは格納されたレスポンスと照合する前にリクエストのコンテンツ全体を読み込む必要があり、このため `QUERY` リクエストのキャッシュは、`GET` リクエストのキャッシュよりも複雑になります。
レスポンスがリクエストのコンテンツに依存するサーバーは、{{HTTPHeader("Vary")}} ヘッダーを使用してこれを示します。
`Vary` は、レスポンスが URI 以外の要素にも依存することをキャッシュに伝えます。次の例では、保存されたレスポンスは、掲載されているヘッダーフィールドの値が一致するリクエストに対してのみ再利用できます。

```http
Vary: Accept-Query, Content-Encoding, Content-Type
```

ヒット率を改善するため、キャッシュは、キーを導出する前に、コンテンツエンコーディングの除去など、リクエスト内容における意味的に重要でない差異を正規化する場合があります。
この正規化は、リソース自体がコンテンツを解釈する方法と一致する場合にのみ安全です。
誤った正規化を行ったり、リソースの解釈と著しく異なる方法で正規化を行ったりするキャッシュは、本来異なる2つのリクエストを同一のものとして扱い、誤ったレスポンスを返す可能性があります。
正規化を防止する必要があるクライアントは、`no-transform` ディレクティブを含む {{HTTPHeader("Cache-Control")}} を送信できますが、このディレクティブはあくまで勧告的なものです。

レスポンスに、同等のリソースを指定する `Location` ヘッダーが含まれている場合、クライアントは以降のリクエストで `GET` メソッドに切り替え、通常の `GET` キャッシュに頼ることができます。

### セキュリティの注意事項

`QUERY` は、URI ではなくリクエスト本文に入力を格納します。
URI はリクエスト本文に比べて、中間サーバーによってログ出力されたり、その他の方法で処理されたりする可能性が高いため、クエリを URI から移動することで、その公開範囲を縮小することができます。
このため、機密性の高いクエリーを行う場合は、`GET` よりも `QUERY` の使用を考えてみるべきです。

好ましいことは、交換の残りの部分でそれが維持される場合にのみ成立します。以上で[同等のリソース URI](#同等のリソース) および[キャッシュの正規化](#キャッシュ)について説明しています。これらの制約に注意してください。

## 例

### コレクションの照会

以下のリクエストは、アドレス帳の集合に対してクエリーを実行します。
このリクエストのコンテンツでは、3 つのフィールドを選択し、レスポンスを 10 件に制限し、メールアドレスでアドレス帳をフィルタリングしています。

```http
QUERY /contacts HTTP/1.1
Host: example.org
Content-Type: application/x-www-form-urlencoded
Accept: application/json

select=surname,givenName,email&limit=10&email=%2A%40example.%2A
```

正常なレスポンスには、レスポンスコンテンツにクエリーの結果が含まれます。

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "surname": "Smith",
    "givenName": "John",
    "email": "smith@example.org"
  },
  {
    "surname": "Jones",
    "givenName": "Sally",
    "email": "sally.jones@example.com"
  }
]
```

### 結果の再利用とクエリーの反復実行

サーバーは、結果とともに {{HTTPHeader("Content-Location")}} と {{HTTPHeader("Location")}} の両方を返すことができ、これにより 2 つの異なる `GET` でアクセス可能なリソースを提供します。1 つは結果の格納されたコピー、もう 1 つはクエリーを再実行する[同等のリソース](#同等のリソース)です。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Location: /contacts/stored-results/17
Location: /contacts/stored-queries/42
Last-Modified: Sat, 25 Aug 2012 23:34:45 GMT

[
  {
    "surname": "Smith",
    "givenName": "John",
    "email": "smith@example.org"
  },
  {
    "surname": "Jones",
    "givenName": "Sally",
    "email": "sally.jones@example.com"
  }
]
```

`Content-Location` URI への `GET` リクエストは、その具体的なクエリーの結果を、変更を加えることなくそのまま返します。

```http
GET /contacts/stored-results/17 HTTP/1.1
Host: example.org
Accept: application/json
```

代わりに、`Location` URI に対して `GET` リクエストを送信すると、クエリーが再実行されるため、結果には最新のデータが反映されます。
ここでは、元のリクエスト以降に 1 件の連絡先が除去されており、レスポンスには、後の条件付きリクエストで使用するための {{HTTPHeader("ETag")}} が含まれています。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Last-Modified: Sun, 17 Nov 2024 16:12:01 GMT
ETag: "42-1"

[
  {
    "surname": "Smith",
    "givenName": "John",
    "email": "smith@example.org"
  }
]
```

その後、`If-None-Match: "42-1"` を送信する条件付き `GET` リクエストを実行すると、結果に変更がない場合、{{HTTPStatus("304", "304 Not Modified")}} が返されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

この方法に関しては、ブラウザーの互換性は関係ありません。
ブラウザーには `QUERY` に対する特定の統合サポートはありません。HTML フォームの送信など、ユーザーによる操作では送信されず、他のヘッダーやメカニズムへのレスポンスとしてブラウザーが自動的に送信することもありません。

開発者は、[`fetch()`](/ja/docs/Web/API/Window/fetch) を使用して `QUERY` リクエストを発行できます。
なお、`QUERY` は CORS のセーフリストに登録されているメソッドではないため、オリジンを越えるリクエストでは、それ以外にも非シンプルメソッドと同様に、[CORS](/ja/docs/Web/HTTP/Guides/CORS) のプリフライトの {{HTTPMethod("OPTIONS")}} リクエストが開始されます。

## 関連情報

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- {{HTTPHeader("Accept-Query")}}
- {{HTTPMethod("GET")}} および {{HTTPMethod("POST")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Location")}} および {{HTTPHeader("Location")}}
- {{HTTPHeader("Allow")}}
- {{HTTPHeader("Vary")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}

---
title: Idempotency-Key ヘッダー
short-title: Idempotency-Key
slug: Web/HTTP/Reference/Headers/Idempotency-Key
l10n:
  sourceCommit: 2da6c8a65715a0ce3785e88d8e293c8dc786cb49
---

{{SeeCompatTable}}

HTTP の **`Idempotency-Key`** {{Glossary("Request header", "リクエストヘッダー")}} を使用して、{{HTTPMethod("POST")}} および {{HTTPMethod("PATCH")}} リクエストを{{glossary("idempotent", "べき等")}}にすることができます。

これによりクライアントは、リクエストがすでにサーバーに受信されて処理済みであるかどうかを気にすることなく、レスポンスが返ってこないリクエストを再送信することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Idempotency-Key: <key>
```

## ディレクティブ

- `<key>`
  - : 特定のリクエストの固有キーです。
    形式はサーバーによって定義されます。

## 解説

HTTP メソッドのうち {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}} はべき等です。
つまり、これらのメソッドを使ってメッセージを何度送信しても、サーバーの状態は変化しないか、あるいはメッセージを取得するたびに同じ形で変化することになります。
例えば、同じ `PUT` メッセージを複数回送信した場合、サーバー上の同じリソースがそれぞれの時点で同じ値で更新されます。

{{HTTPMethod("POST")}} メソッドと {{HTTPMethod("PATCH")}} メソッドはべき等ではありません。つまり、サーバーの状態ががメッセージを受信するたびに変化する可能性があるということです。
`PUT` メッセージとは異なり、同一の `POST` リクエストを複数回送信した場合、サーバーはリクエストが成功するたびに新しいリソースを生成する可能性があります。
同様に、`PATCH` は具体的な状態に対する変更を反映するものであり、パッチが適用されるたびにその状態が変更されます。

クライアントがレスポンスを受け取れなかった場合、べき等性は重要です。これにより、クライアントは副作用を心配することなく、安全にリクエストを再送信できるからです。

HTTP の `Idempotency-Key` ヘッダーを使用すると、クライアントは `POST` リクエストと `PATCH` リクエストに固有の識別子（キー）を付与することで、それらのリクエストをべき等にすることができます。
これにより、クライアントは同じリクエストを複数回送信することができ、サーバーはアクションを 1 回だけ実行すればよいことを認識できます。

### クライアントの責任

クライアント側の JavaScript は、`Idempotency-Key` ヘッダーが要求されるエンドポイントへのフェッチリクエストにおいて、サーバーが公開している要件に準拠したキーを使用して、このヘッダーを添付する必要があります。

それぞれの新しいリクエストで一意のキーを使用しなければならないし、そのリクエストを再送信する場合は同じキーを使用する必要があります。

### サーバーの責任

`Idempotency-Key` ヘッダーに対応しているサーバーは、このヘッダーが要求されるエンドポイントや、キーに関する要件（長さ、生成方法、有効期限など）を含め、その対応状況を文書化し、公開することが求められます。

なお、サーバーは受信したキーを時間経過に伴い無効化することを選択できる場合があります。クライアントが準拠したリクエストを行えるよう、キーの有効期限に関する動作を定義し、文書化する必要があります。

#### べき等性フィンガープリント

それぞれのリクエストで、固有のキーを使用することが求められます。

クライアントが新しいリクエストでキーを再利用することを防ぐため、サーバーはリクエストの「べき等性フィンガープリント」を作成し、キーとともに格納することがあります。
これはリクエストの全部または一部のハッシュ値であり、同じキーを持つ他のリクエストと比較することが可能です。

べき等性フィンガープリントに対応している場合、同じキーであってもフィンガープリントが異なると、サーバーはエラーレスポンスを返すことができます。

#### リクエストの処理

`POST` または `PATCH` に `Idempotency-Key` が設定されたリクエストを、それを必要とするエンドポイントで受信したとき、サーバーは、そのキーを含むリクエストをすでに受信しているかどうかを調べる必要があります。

- まだ受信していない場合、サーバーは処理を実行して応答し、キーを格納する必要があります。
- すでに受信している場合は、処理を実行しませんが、実行したかのように応答する必要があります。

べき等性フィンガープリントを使用しているサーバーは、それぞれの新しいリクエストごとにフィンガープリントを生成して保存します。
これを使用して、その後のキーとフィンガープリントが一致しない場合にエラーを返します。

`Idempotency-Key` が要求されるエンドポイントで、`Idempotency-Key` を持たないリクエストを受け取った場合、サーバーはエラーを返すべきです。

#### サーバーエラーの処理

サーバーは、以下の場合にエラーレスポンスを提供する必要があります。

- {{HTTPStatus("400", "400 Bad Request")}}: このヘッダーが要求されるとして文書化されているエンドポイントで、ヘッダーが設定されていない。
- {{HTTPStatus("409", "409 Conflict")}}: 同じキーを持つリクエストが現在処理中である。
- {{HTTPStatus("422", "422 Unprocessable Content")}}: そのキーは、別のリクエストの内容ですでに使用されている（べき等性フィンガープリントに対応されている場合）。

`409 Conflict` レスポンスが返された場合、クライアントは再試行する前に待機する必要があります。
それ以外にも、クライアントはリクエストを修正してから再送信する必要があります。

本仕様では、エラーレスポンスの本体の書式を規定していませんが、そのエラーには、そのエラーを説明する実装固有の文書へのリンクを含める必要があります。
{{rfc(9457, "Problem Details for HTTP APIs")}} に記載されている JSON ペイロード書式が、その一例となります。
例えば、キーが見つからない場合、次のようなレスポンスが使用されることがあります。

```http
HTTP/1.1 400 Bad Request
Content-Type: application/problem+json
Content-Language: en

{
    "type": "https://developer.example.com/idempotency/docs",
    "title": "Idempotency-Key is missing",
    "detail": "This operation is idempotent and requires correct usage of Idempotency Key.",
}
```

## 例

### キー付きの `POST` リクエスト

次のメッセージは、新しいユーザーを生成するための `POST` リクエストを示しています。
キー `9c7d2b4a0e1f6c835a2d1b0f4e3c5a7d` は、ホストが公開している要件と一致する一意の値です（example.com はこのヘッダーに対応していないため、ここでは架空の値を設定しています）。

```http
POST /api/users HTTP/1.1
Host: example.com
Content-Type: application/json
Idempotency-Key: 9c7d2b4a0e1f6c835a2d1b0f4e3c5a7d

{
  "user_id": "12345",
  "name": "Sharma Chow",
  "email": "sharmac@example.com"
}
```

レスポンスが返ってこない場合、クライアントは全く同じリクエストを安全に再送信できます。サーバーが前回のリクエストを取得していなければ、このリクエストに対して処理を行います。もし前回のリクエストをすでに取得している場合、2 つ目のリクエストは無視されますが、サーバーは 2 つ目のリクエストを通常通り処理したかのようにレスポンスを返します。

クライアントがリクエストをすばやく再送信すると、次のようなエラーレスポンスが取得されることがあります。
なお、必須とされるのは HTTP ステータスコードのみであり、その他の情報はサーバーによって定義されます。

```http
HTTP/1.1 409 Conflict
Content-Type: application/problem+json
Content-Language: en

{
    "type": "https://example.com/idempotency/docs",
    "title": "Server processing previous request.",
    "detail": "A request with the same key is currently/still being processed.",
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

<!-- ## Browser integration -->
<!-- Firefox has a (non-standard) integration that automatically applies keys to POST requests (but not PATCH).
This is discussed in https://bugzilla.mozilla.org/show_bug.cgi?id=1991641#c6
Since this might not survive in the shipped release it is undocumented now - there is a BCD key
This hidden comment is here as a reminder when there is an update to browser status w.r.t this header.
-->

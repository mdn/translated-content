---
title: TRACE リクエストメソッド
short-title: TRACE
slug: Web/HTTP/Reference/Methods/TRACE
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**`TRACE`** は HTTP のメソッドで、対象とするリソースへのパスに沿ってメッセージのループバック検査を実行します。

リクエストの最終的な受信者は、受信したメッセージ（機密データを含む可能性のあるフィールドを除く）を、{{HTTPStatus("200", "200 OK")}} レスポンスのメッセージ本文として、{{HTTPHeader("Content-Type")}} が `message/http` の状態でクライアントに反映すべきです。
最終的な受信先は、オリジンサーバーか、リクエスト内で {{HTTPHeader("Max-Forwards")}} の値が `0` となる最初のサーバーのどちらかです。

クライアントはリクエストに{{Glossary("HTTP Content", "コンテンツ")}}を送信しなければなりませんが、ユーザー資格情報やクッキーなどの機密データを含む可能性のあるヘッダーを生成してはなりません。
すべてのサーバーが `TRACE` メソッドを実装しているわけではなく、セキュリティ上の懸念から、一部のサーバー所有者は過去には `TRACE` メソッドの使用を禁止してきました。
このような場合 {{HTTPStatus("405", "405 Method Not Allowed")}} [クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)が送信されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>なし</td>
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
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row"><a href="/ja/docs/Learn_web_development/Extensions/Forms">HTML フォーム</a>で許可</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
TRACE <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : {{HTTPHeader("Host")}} ヘッダーで提供される情報と組み合わせたときの、リクエストのターゲットリソースを識別します。
    これは元のサーバーへのリクエストにおいては絶対パス（`/path/to/file.html` など）であり、プロキシーへのリクエストにおいては絶対 URL（`http://www.example.com/path/to/file.html` など）です。
- `<query>` {{optional_inline}}
  - : 疑問符 `?` で始まるオプションのクエリー成分。
    多くの場合、`key=value` の組の形で識別情報を保持するために使用されます。

## 例

### TRACE リクエストに成功

`TRACE` リクエストは `curl` を使用して実行できます。

```bash
curl -v -X TRACE example.com
```

これは次のような HTTP リクエストを生成します。

```http
TRACE / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

リクエストヘッダーがレスポンス本文に含まれている {{HTTPStatus("200", "200 OK")}} レスポンスがクライアントに返送されます。

```http
HTTP/1.1 200 OK
Content-Length: 123
Date: Wed, 04 Sep 2024 11:50:24 GMT
Server: Apache/2.4.59 (Unix)
Content-Type: message/http

TRACE / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

ブラウザーはユーザー主導のアクションに `TRACE` メソッドを使用しないため、「ブラウザー互換性」は適用されません。

## 関連情報

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
- [Cross-Site Tracing (XST)](https://owasp.org/www-community/attacks/Cross_Site_Tracing)

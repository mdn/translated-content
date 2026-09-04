---
title: HEAD リクエストメソッド
short-title: HEAD
slug: Web/HTTP/Reference/Methods/HEAD
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**`HEAD`**は HTTP のメソッドで、リソースのメタデータを[ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)の形で要求します。このヘッダーは、代わりに {{HTTPMethod("GET")}} メソッドが使用された場合にサーバーが送信するであろうものです。
この方法は、URL が大量のダウンロードを生成する可能性がある場合に使用できます。例えば、`HEAD` リクエストで {{HTTPHeader("Content-Length")}} ヘッダーを読み取り、ファイルサイズを確認した後、`GET` でファイルをダウンロードできます。

`HEAD` リクエストへのレスポンスが、キャッシュされた URL のレスポンスが古くなったことを示した場合、`GET` リクエストが行われなくても、キャッシュされたコピーは無効化されます。

> [!WARNING]
> `HEAD` リクエストへのレスポンスに本体が含まれる場合、そのレスポンス本体は無視されなければなりません。
> 誤った本文を記述する可能性がある{{glossary("Representation header", "表現ヘッダー")}}は、同様の `GET` リクエストで受け取るであろうレスポンスを記述していると仮定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本文</th>
      <td>なし</td>
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
        <a href="/ja/docs/Learn_web_development/Extensions/Forms">HTML フォーム</a>での使用
      </th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 構文

```http
HEAD <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : {{HTTPHeader("Host")}} ヘッダーで提供される情報と組み合わせたときの、リクエストのターゲットリソースを識別します。
    これは元のサーバーへのリクエストにおいては絶対パス（`/path/to/file.html` など）であり、プロキシーへのリクエストにおいては絶対 URL（`http://www.example.com/path/to/file.html` など）です。
- `<query>` {{optional_inline}}
  - : 疑問符 `?` で始まるオプションのクエリー成分。
    多くの場合、`key=value` の組の形で識別情報を保持するために使用されます。

## 例

### リソースのメタデータの受け取りに成功

次の `curl` コマンドは `example.com` に対して `HEAD` リクエストを作成します。

```bash
curl --head example.com
```

これは`GET`リクエストに相当しますが、サーバーはレスポンスにメッセージ本文を記載すべきではありません。
これにより、次のような HTTP リクエストが作成されます。

```http
HEAD / HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

サーバーはヘッダーのみで構成される {{HTTPStatus("200", "200 OK")}} レスポンスを返します。
このレスポンスは実質的にリソース自体ではなくリソースを記述するメタデータです（簡潔化のため、この例では一部の[キャッシュ](/ja/docs/Web/HTTP/Guides/Caching)ヘッダーは除外されています）。

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Wed, 04 Sep 2024 10:33:11 GMT
Content-Length: 1234567
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
- {{HTTPMethod("GET")}} メソッド

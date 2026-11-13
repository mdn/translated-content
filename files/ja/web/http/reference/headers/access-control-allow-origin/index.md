---
title: Access-Control-Allow-Origin ヘッダー
short-title: Access-Control-Allow-Origin
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Origin
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**`Access-Control-Allow-Origin`** は{{Glossary("response header", "レスポンスヘッダー")}}で、指定された{{Glossary("origin", "オリジン")}}からのリクエストを行うコードでレスポンスが共有できるかどうかを示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: null
```

## ディレクティブ

- `*`（ワイルドカード）
  - : 任意のオリジンからのリクエストコードがこのリソースにアクセスすることができます。
    資格情報がないリクエストでは、リテラル値 `*` をワイルドカードとして指定することができます。
    資格情報がある時にワイルドカードを使用すると、[エラーを返します](/ja/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials)。
- `<origin>`
  - : 単一のオリジンを指定します。サーバーが複数のオリジンからのクライアントに対応している場合、リクエストを行った特定のクライアントのオリジンを返さなければなりません。
- `null`
  - : オリジンを "null" に指定します。
    > [!NOTE]
    > `null` は使用しないでください。 `Access-Control-Allow-Origin: "null"` を返すと安全であるように見えますが、リソースのオリジンが階層的ではないスキーム (例えば `data:` や `file:`) を使用しており、サンドボックス化された文書はすべて `null` となるように定義されています。
    > 多くのブラウザーは、そのような文書に `Access-Control-Allow-Origin: null` ヘッダーが付いているとアクセスを許可するので、あらゆるオリジンが `null` を持つ悪意のある文書を生成する可能性があります。したがって、 `null` 値を `Access-Control-Allow-Origin` ヘッダーで使用することは避けるべきです。

## 例

あらゆるオリジンからのコードにリソースへのアクセスを許可するようブラウザーに指示するレスポンスには、次のような行を含めてください。

```http
Access-Control-Allow-Origin: *
```

`https://developer.mozilla.org` のオリジンからリクエストを行うコードに対して、リソースへのアクセスを許可するようブラウザーに指示するレスポンスには、次のような行を含めてください。

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

`Access-Control-Allow-Origin` の値で複数のオリジンに許可を限定するには、サーバー側で {{HTTPHeader("Origin")}} リクエストヘッダーの値をチェックし、許可するオリジンのリストと比較して、 {{HTTPHeader("Origin")}} の値がリスト中にあれば、 `Access-Control-Allow-Origin` の値に {{HTTPHeader("Origin")}} と同じ値を設定してください。

### CORS とキャッシュ

`Access-Control-Allow-Origin` の値が (`*` ワイルドカードではなく) 具体的なオリジンであるレスポンスをサーバーが送信する場合、レスポンスには {{HTTPHeader("Vary")}} レスポンスヘッダーに `Origin` という値を設定して、 `Origin` リクエストヘッダーの値によって値が変わることをブラウザーに対して示してください。

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Vary")}}
- [オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}

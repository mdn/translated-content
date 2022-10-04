---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
---

{{HTTPSidebar}}

**`Access-Control-Allow-Origin`** レスポンスヘッダーは、指定された{{glossary("origin", "オリジン")}}からのリクエストを行うコードでレスポンスが共有できるかどうかを示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: null
```

## ディレクティブ

- `*`
  - : *資格情報がない*リクエストでは、リテラル値 "`*`" をワイルドカードとして指定することができます。この値はブラウザーに、すべてのオリジンからのリクエストコードにリソースへのアクセスを許可するように指示します。資格情報がある時にワイルドカードを使用すると、[エラーを返します](/ja/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials)。
- `<origin>`
  - : オリジンを指定します。1 つのオリジンだけを指定することができます。サーバーが複数のオリジンからのクライアントに対応している場合、リクエストを行った特定のクライアントのオリジンを返さなければなりません。
- `null`

  - : オリジンを "null" に指定します。

    > **メモ:** `null` は[使用しないでください](https://w3c.github.io/webappsec-cors-for-developers/#avoid-returning-access-control-allow-origin-null)。「`Access-Control-Allow-Origin: "null"` を返すと安全であるように見えますが、リソースのオリジンが階層的ではないスキーム (例えば `data:` や `file:`) を使用しており、サンドボックス化された文書はすべて "null" となるように定義されています。多くのユーザーエージェントはそのような文書に `Access-Control-Allow-Origin: "null"` ヘッダーが付いているとアクセスを許可するので、あらゆるオリジンが "null" を持つ悪意のある文書を生成することができます。したがって、 ACAO ヘッダーで "null" 値を使用することは避けるべきです。」

## 例

あらゆるオリジンからのコードにリソースへのアクセスを許可するようブラウザーに指示するレスポンスには、次のような行を含めてください。

```
Access-Control-Allow-Origin: *
```

`https://developer.mozilla.org` のオリジンからリクエストを行うコードに対して、リソースへのアクセスを許可するようブラウザーに指示するレスポンスには、次のような行を含めてください。

```
Access-Control-Allow-Origin: https://developer.mozilla.org
```

`Access-Control-Allow-Origin` の値で複数のオリジンに許可を限定するには、サーバー側で {{HTTPHeader("Origin")}} リクエストヘッダーの値をチェックし、許可するオリジンのリストと比較して、 {{HTTPHeader("Origin")}} の値がリスト中にあれば、 `Access-Control-Allow-Origin` の値に {{HTTPHeader("Origin")}} と同じ値を設定してください。

### CORS とキャッシング

`Access-Control-Allow-Origin` の値が ("`*`" ワイルドカードではなく) 具体的なオリジンであるレスポンスをサーバーが送信する場合、レスポンスには {{HTTPHeader("Vary")}} レスポンスヘッダーに `Origin` という値を設定して、 `Origin` リクエストヘッダーの値によって値が変わることをブラウザーに対して示してください。

```
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

## 仕様書

| 仕様書                                                                                                               | 状態                     | 備考     |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('Fetch','#http-access-control-allow-origin', 'Access-Control-Allow-Origin')}} | {{Spec2("Fetch")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("http.headers.Access-Control-Allow-Origin")}}

## 関連情報

- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Vary")}}
- [Cross-Origin Resource Sharing (CORS)](/ja/docs/Web/HTTP/CORS)
- {{httpheader("Cross-Origin-Resource-Policy")}}

---
title: Origin
slug: Web/HTTP/Headers/Origin
---

{{HTTPSidebar}}

**`Origin`** リクエストヘッダーは、どこがフェッチの原点であるかを示します。パス情報は含まれず、サーバー名のみが含まれます。これは、 {{Glossary("CORS")}} リクエストと、同様に {{HTTPMethod("POST")}} リクエストでも送信されます。 {{HTTPHeader("Referer")}} ヘッダーと似ていますが、パス全体が公開されるわけではない点が異なります。

> **メモ:** {{httpheader("Origin")}} ヘッダーは [Fetch リクエスト](/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch)を {{HTTPMethod("HEAD")}} または {{HTTPMethod("GET")}} メソッドで行った場合には設定されません (この挙動は Firefox 65 で修正されました。 — {{bug(1508661)}} を参照してください)。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```
Origin: null
Origin: <scheme> "://" <hostname> [ ":" <port> ]
```

## ディレクティブ

- \<scheme>
  - : 使用されるプロトコル。 通常、 HTTP プロトコルまたはそのセキュアバージョンである HTTPS です。
- \<hostname>
  - : サーバーのドメイン名 (仮想ホスティングの場合) または IP アドレス。
- \<port> {{optional_inline}}
  - : サーバーが待ち受けしている TCP ポート番号。ポート番号が指定されていない場合、リクエストされたサービスの既定のポート番号 (HTTP URL の場合は "80" など) が暗黙的に指定されます。

## 例

```
Origin: https://developer.mozilla.org
```

## 仕様書

| 仕様書                                                                   | 題名                                                 |
| ------------------------------------------------------------------------ | ---------------------------------------------------- |
| {{RFC("6454", "Origin", "7")}}                                 | The Web Origin Concept                               |
| {{SpecName('Fetch','#origin-header','Origin header')}} | Supplants the `Origin` header as defined in RFC6454. |

## ブラウザーの互換性

{{Compat("http.headers.Origin")}}

## 関連情報

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- [同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)

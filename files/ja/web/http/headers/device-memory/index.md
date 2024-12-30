---
title: Device-Memory
slug: Web/HTTP/Headers/Device-Memory
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

**`Device-Memory`** ヘッダーは、[クライアントヒント](/ja/docs/Web/HTTP/Client_hints)のヘッダーのように機能する [Device Memory API](/ja/docs/Web/API/Device_Memory_API) のヘッダーで、クライアントデバイスの RAM の概算量を表します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header","リクエストヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name","禁止ヘッダー名")}}
      </th>
      <td>?</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> クライアントヒントには、安全なオリジン（TLS 経由）でのみアクセスできます。 サーバーは、{{HTTPHeader("Accept-CH")}} および {{HTTPHeader("Accept-CH-Lifetime")}} のレスポンスヘッダーを送信することによって、クライアントから `Device-Memory` ヘッダーを受信することを選択する必要があります。

## 構文

デバイス RAM の量は、フィンガープリント変数として使用できるため、ヘッダーでの値は、誤用の可能性を減らすために意図的に粗くなっています。 ヘッダーは次の値を取ります: `0.25`、`0.5`、`1`、`2`、`4`、`8`。

```
Device-Memory: <number>
```

## 例

サーバーはまず、レスポンスヘッダーとして `Device-Memory` を含む {{HTTPHeader("Accept-CH")}} と {{HTTPHeader("Accept-CH-Lifetime")}} を送信することによって、`Device-Memory` ヘッダーを受信するように選択する必要があります。

```
Accept-CH: Device-Memory
Accept-CH-Lifetime: 86400
```

次に、後続のリクエストでクライアントは、次のように `Device-Memory` ヘッダーを送り返す場合があります。

```
Device-Memory: 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Device Memory API](/ja/docs/Web/API/Device_Memory_API)
- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Accept-CH-Lifetime")}}
- {{HTTPHeader("Vary")}}
- {{DOMxRef("Navigator.deviceMemory")}}

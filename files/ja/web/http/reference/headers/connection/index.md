---
title: Connection ヘッダー
short-title: Connection
slug: Web/HTTP/Reference/Headers/Connection
l10n:
  sourceCommit: 0e40ec22841891d42376ad8a6d29135953c5106c
---

HTTP の **`Connection`** ヘッダーは、現在のトランザクションが完了したあとも、ネットワーク接続を開いたままにするかどうかを制御します。
送信された値が `keep-alive` であった場合は、接続が維持されて閉じられず、同一のサーバーに送るべき後続のリクエストで再利用されます。

> [!WARNING]
> `Connection` や {{HTTPHeader("Keep-Alive")}} などの接続固有のヘッダーフィールドは、[HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) および [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) では禁止されています。Chrome と Firefox は HTTP/2 レスポンスではそれらを無視しますが、Safari は HTTP/2 仕様の要件に準拠しているため、それらを含むレスポンスを読み込みません。

標準の[ホップバイホップ](/ja/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers)ヘッダー ({{HTTPHeader("Keep-Alive")}}、{{HTTPHeader("Transfer-Encoding")}}、{{HTTPHeader("TE")}}、`Connection`、{{HTTPHeader("Trailer")}}、{{HTTPHeader("Upgrade")}}、{{HTTPHeader("Proxy-Authorization")}}、{{HTTPHeader("Proxy-Authenticate")}}) を除き、メッセージで使用しているホップバイホップヘッダーは `Connection` ヘッダーに列挙する必要があります。これにより、最初のプロキシーは、これらの情報を転送せずに自身で処理しなければならないことを認識できるようになります。

`Connection` のデフォルト値が、変更されました。
そのため、下位互換性を確保するために、HTTP/1.1 ではデフォルト設定となっているにもかかわらず、ブラウザーはしばしば明示的に `Connection: keep-alive` を送信します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}、{{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Connection: keep-alive
Connection: close
```

## ディレクティブ

- `close`
  - : クライアントあるいはサーバーが接続を閉じる意思があることを示します。
    これは HTTP/1.0 リクエストの既定の動作です。
- カンマ区切りの HTTP ヘッダーのリスト（通常は `keep-alive` のみ）
  - : クライアントが接続を開いておく意思があることを示します。接続の維持は HTTP/1.1 のデフォルトの動作です。
    ヘッダー名のリストは、介在する最初の非透過プロキシーやキャッシュが削除するヘッダーの名前です。これらのヘッダーは最終的な宛先ノードではなく、送信者と最初のエンティティ間の接続の定義に使用します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP/1.x のコネクション管理](/ja/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
- [プロトコルのアップグレードの仕組み](/ja/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)

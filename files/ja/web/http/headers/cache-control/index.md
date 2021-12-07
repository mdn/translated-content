---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
tags:
  - Cache-Control
  - HTTP
  - HTTP Header
  - Request header
  - Response header
  - Reference
translation_of: Web/HTTP/Headers/Cache-Control
---

{{HTTPSidebar}}


HTTPヘッダーフィールドの **`Cache-Control`** には、ブラウザや共有キャッシュ(Proxy, CDN など)の[caching](/en-US/docs/Web/HTTP/Caching)を制御するためのdirective(指示)が、リクエストとレスポンスの両方に含まれています。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 構文

Cache の directive には、以下のような規則があります。

- 大文字と小文字は区別されませんが、実装によっては大文字のディレクティブを認識しないものもあるので、小文字を推奨します。
- 複数のディレクティブはカンマで区切ります。
- いくつかのディレクティブにはオプションの引数があります。

### Cache directives

標準的な `Cache-Control` directives は以下のように定義されています。

| Request          | Response                 |
| :--------------- | :----------------------- |
| `max-age`        | `max-age`                |
| `max-stale`      | -                        |
| `min-fresh`      | -                        |
| -                | `s-maxage`               |
| `no-cache`       | `no-cache`               |
| `no-store`       | `no-store`               |
| `no-transform`   | `no-transform`           |
| `only-if-cached` | -                        |
| -                | `must-revalidate`        |
| -                | `proxy-revalidate`       |
| -                | `must-understand`        |
| -                | `private`                |
| -                | `public`                 |
| -                | `immutable`              |
| -                | `stale-while-revalidate` |
| `stale-if-error` | `stale-if-error`         |

注意: [compatibility table](#browser_compatibility) でサポートされているかを確認してください。解釈できないユーザーエージェントはこれらを無視します。

## 用語集

このドキュメントでは、次の用語が使用されています。すべてではありませんが、仕様書に基づいています。

- `(HTTP) cache`
  - : リクエストとレスポンスを保持し、次のリクエストで再利用するための実装。Shared cache または Private cache のいずれかです。
- `Shared cache`
  - : オリジンサーバーとクライアントの間に存在する cache (Proxy, CDN など)。1 つのレスポンスを保存し、それを複数のユーザーで再利用します。したがって、開発者は Shared cache にパーソナライズされたコンテンツをcacheとして保存することは避けるべきです。
- `Private cache`
  - : クライアント内に存在する cache です。_local cache_ 、あるいは単に _browser cache_ などとも呼ばれます。ユーザーのためにパーソナライズされたコンテンツを保存し、再利用することができます。
- `Store response`
  - : cache 可能な場合には、レスポンスを cache に保存します。しかし、そのまま再利用されるとは限りません。(通常、"cache" はレスポンスを保存することを意味します。)
- `Reuse response`
  - : cache されたレスポンスを次のリクエストに再利用します。
- `Revalidate response`
  - : オリジンサーバーに、保存されているレスポンスがまだ新しいか確認します。通常は条件付きのリクエストで行います。
- `Fresh response`
  - : レスポンスが新しい状態であることを示します。これは通常、リクエストの指示に応じて、レスポンスを後続のリクエストに再利用できることを意味します。
- `Stale response`
  - : レスポンスが古い状態になっていることを示します。これは通常、レスポンスがそのままでは再利用できないことを意味します。Cache storage は古いレスポンスをすぐに削除する必要はありません。なぜなら、再検証によってレスポンスが古いものから再び新しい状態に変わる可能性があるからです。
- `Age`
  - : レスポンスが生成されてからの時間です。レスポンスが新しい状態か古い状態かの基準となる。


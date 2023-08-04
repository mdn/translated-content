---
title: Origin
slug: Web/HTTP/Headers/Origin
l10n:
  sourceCommit: 0d3e5b809231ce1e1d8b6bf1271d63916d9bff93
---

{{HTTPSidebar}}

**`Origin`** リクエストヘッダーは、リクエストが発生した{{glossary("origin", "オリジン")}}（スキーム、ホスト名、ポート番号）を示します。
例えば、ユーザーエージェントがページに含まれるリソース、または実行するスクリプトによってフェッチされるリソースをリクエストする必要がある場合、ページのオリジンがそのリクエストに含まれることがあります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Origin: null
Origin: <scheme>://<hostname>
Origin: <scheme>://<hostname>:<port>
```

## ディレクティブ

- `null`

  - : オリジンが「プライバシーに配慮した」ものであるか、HTML仕様で定義された不透明なオリジンである（具体的な事例は[解説](#解説)の節に掲載されています）。

- `<scheme>`
  - : 使用されるプロトコル。
    通常、 HTTP プロトコルまたはそのセキュアバージョンである HTTPS です。
- `<hostname>`
  - : サーバーのドメイン名 (仮想ホスティングの場合) または IP アドレス。
- `<port>` {{optional_inline}}
  - : サーバーが待ち受けしている TCP ポート番号。
    ポート番号が指定されていない場合、リクエストされたサービスの既定のポート番号（HTTP URL の場合は "80" など）が暗黙的に指定されます。

## 解説

`Origin` ヘッダーは {{HTTPHeader("Referer")}} ヘッダーと似ていますが、パス全体が公開されるわけではなく、 `null` になることがある点が異なります。
これは、オリジン情報が機密または不要となる場合を除き、オリジンリクエストの「セキュリティコンテキスト」を提供するために使用されます。

大まかに言うと、ユーザーエージェントが {{httpheader("Origin")}} リクエストヘッダーを追加するのは以下のものです。

- {{Glossary("CORS", "オリジン間")}}リクエスト
- [同一オリジン](/ja/docs/Web/Security/Same-origin_policy)リクエスト、ただし {{HTTPMethod("GET")}} または {{HTTPMethod("HEAD")}} リクエストを除く（すなわち、同一オリジンの {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}}, {{HTTPMethod("DELETE")}} の各リクエストに追加される。）

上記のルールにはいくつかの例外があります。例えば、オリジンを跨ぐ {{HTTPMethod("GET")}} または {{HTTPMethod("HEAD")}} リクエストが [CORS モード外](/ja/docs/Web/API/Request/mode#value)で行われた場合、 `Origin` ヘッダーは追加されません。

`Origin` ヘッダー値は様々な場合に `null` になることがあります（網羅的ではない）。

- スキームが `http`, `https`, `ftp`, `ws`, `wss`, `gopher` のいずれでもないオリジン（`blob`, `file`, `data` を含む）。
- 別オリジンの画像やメディアデータ（`<img>`, `<video>`, `<audio>` 要素の場合も含む）。
- `createDocument()` を使用してプログラム的に作成された文書、 `data:` URL から生成された文書、または作成者の閲覧コンテキストを持たない文書。
- オリジン間のリダイレクト。
- iframeのサンドボックス属性が値 `allow-same-origin` を含んでいない場合。
- ネットワークエラーとなったレスポンス。
- [`Referrer-Policy`](/ja/docs/Web/HTTP/Headers/Referrer-Policy) が `no-referrer` に設定され、`cors` 以外のリクエストモードが設定された場合（単純な形式の投稿など）。

> **メモ:** `null` を返す可能性のあるケースについて、より詳しいリストが Stack Overflow の [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) に掲載されています。

## 例

```http
Origin: https://developer.mozilla.org
```

```http
Origin: http://developer.mozilla.org:80
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- [同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)
- [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)

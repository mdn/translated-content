---
title: Origin ヘッダー
short-title: Origin
slug: Web/HTTP/Reference/Headers/Origin
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

HTTP の **`Origin`** {{Glossary("request header", "リクエストヘッダー")}}は、リクエストが発生した{{glossary("origin", "オリジン")}}（[スキーム](/ja/docs/Web/URI/Reference/Schemes)、ホスト名、ポート番号）を示します。
例えば、ユーザーエージェントがページに含まれるリソース、または実行するスクリプトによってフェッチされるリソースをリクエストする必要がある場合、ページのオリジンがそのリクエストに含まれることがあります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
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
  - : オリジンが「プライバシーに配慮した」ものであるか、HTML 仕様で定義された[不透明なオリジン](/ja/docs/Glossary/Origin#不透明なオリジン)である（具体的な事例は[解説](#解説)の節に掲載されています）。
- `<scheme>`
  - : 使用されるプロトコル。
    通常、 HTTP プロトコルまたはその保護されたバージョンである HTTPS です。
- `<hostname>`
  - : オリジンサーバーのドメイン名または IP アドレス。
- `<port>` {{optional_inline}}
  - : サーバーが待ち受けしている TCP ポート番号。
    ポート番号が指定されていない場合、リクエストされたサービスの既定のポート番号（HTTP URL の場合は `80` など）が暗黙的に指定されます。

## 解説

`Origin` ヘッダーは {{HTTPHeader("Referer")}} ヘッダーと似ていますが、パス全体が公開されるわけではなく、 `null` になることがある点が異なります。
これは、オリジン情報が機密または不要となる場合を除き、オリジンリクエストの「セキュリティコンテキスト」を提供するために使用されます。

大まかに言うと、ユーザーエージェントは `Origin` リクエストヘッダーを次のものに追加します。

- {{Glossary("CORS", "オリジン間")}}リクエスト
- [同一オリジン](/ja/docs/Web/Security/Defenses/Same-origin_policy)リクエスト、ただし {{HTTPMethod("GET")}} または {{HTTPMethod("HEAD")}} リクエストを除く（すなわち、同一オリジンの {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}}, {{HTTPMethod("DELETE")}} の各リクエストに追加される。）

上記のルールにはいくつかの例外があります。例えば、オリジンを跨ぐ {{HTTPMethod("GET")}} または {{HTTPMethod("HEAD")}} リクエストが [CORS モード外](/ja/docs/Web/API/Request/mode#値)で行われた場合、 `Origin` ヘッダーは追加されません。

`Origin` ヘッダー値は様々な場合に `null` になることがあります（これがすべてではない）。

- [スキーム](/ja/docs/Web/URI/Reference/Schemes)が `http`, `https`, `ftp`, `ws`, `wss`, `gopher` のいずれでもないオリジン（`blob`, `file`, `data` を含む）。
- 別オリジンの画像やメディアデータ（{{HTMLElement("img")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}} 要素の場合も含む）。
- {{domxref("DOMImplementation.createDocument", "createDocument()")}} を使用してプログラム的に作成された文書、 `data:` URL から生成された文書、または作成者の閲覧コンテキストを持たない文書。
- オリジン間のリダイレクト。
- {{HTTPHeader("Content-Security-Policy")}} で `sandbox` ディレクティブが設定されており、その値に `allow-same-origin` が含まれていない状態で配信される文書。
- {{HTMLElement("iframe", "iframe")}} のサンドボックス属性が値 `allow-same-origin` を含んでいない場合。
- ネットワークエラーとなったレスポンス。
- {{HTTPHeader("Referrer-Policy")}} が `no-referrer` に設定され、`cors` 以外のリクエストモードが設定された場合（単純な形式の投稿など）。

> [!NOTE]
> `null` を返す可能性のあるケースについて、より詳しいリストが Stack Overflow の [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) に掲載されています。

## 例

```http
Origin: https://developer.mozilla.org
```

```http
Origin: https://developer.mozilla.org:80
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- [同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)
- [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)

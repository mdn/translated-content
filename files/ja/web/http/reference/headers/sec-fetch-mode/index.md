---
title: Sec-Fetch-Mode ヘッダー
short-title: Sec-Fetch-Mode
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Mode
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Sec-Fetch-Mode`** は{{Glossary("fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}で、リクエストの[モード](/ja/docs/Web/API/Request/mode)を示します。

大まかに言えば、これによりサーバーは、HTML ページ間を移動するユーザーからのリクエストと、画像やその他のリソースを読み込むリクエストを区別できます。
例えば、最上位のナビゲーションリクエストにはこのヘッダーに `navigate` が含まれ、画像を読み込む場合には `no-cors` が使用されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい（<code>Sec-</code> 接頭辞）</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Sec-Fetch-Mode: cors
Sec-Fetch-Mode: navigate
Sec-Fetch-Mode: no-cors
Sec-Fetch-Mode: same-origin
Sec-Fetch-Mode: websocket
```

このヘッダーが他の値を含んでいる場合、サーバーはこれを無視すべきです。

## ディレクティブ

> [!NOTE]
> これらのディレクティブは [`Request.mode`](/ja/docs/Web/API/Request/mode#value) で返される値に対応しています。

- `cors`
  - : このリクエストは [CORS プロトコル](/ja/docs/Web/HTTP/Guides/CORS)のリクエストです。
- `navigate`
  - : このリクエストは、 HTML 文書館のナビゲーションで開始されています。
- `no-cors`
  - : このリクエストは CORS リクエストではありません（[`Request.mode`](/ja/docs/Web/API/Request/mode#value) を参照）。
- `same-origin`
  - : このリクエストは、リクエストされたリソースと同じオリジンから行われています。
- `websocket`
  - : [WebSocket](/ja/docs/Web/API/WebSockets_API) 接続を確立するためのリクエストが行われています。

## 例

### Sec-Fetch-Mode の使用

ユーザーが同一オリジン上の別のページへのページリンクをクリックした場合、生成されるリクエストには次のヘッダーが含まれます（モードが `navigate` であることに注意してください）。

```http
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

{{HTMLElement("img")}} 要素によって生成されるクロスサイトリクエストは、次の HTTP リクエストヘッダーをつけてリクエストされます（モードが `no-cors` であることに注意してください）。

```http
Sec-Fetch-Dest: image
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: cross-site
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- フェッチメタデータリクエストヘッダー: {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}}
- [Protect your resources from web attacks with Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)

---
title: Sec-CH-Device-Memory ヘッダー
short-title: Sec-CH-Device-Memory
slug: Web/HTTP/Reference/Headers/Sec-CH-Device-Memory
l10n:
  sourceCommit: b304d8d3c870fba028df550a51f5b4258ab3ac08
---

{{SecureContext_Header}}{{SeeCompatTable}}

HTTP の **`Sec-CH-Device-Memory`** {{Glossary("request header", "リクエストヘッダー")}} は、[端末クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#端末クライアントヒント)において、クライアント端末上で利用できるメモリーのおおよその容量をギガバイト単位で示すために使用されます。
このヘッダーは、{{DOMxRef("Device Memory API", "端末メモリー API", "", "nocode")}} の一部です。

クライアントヒントは、セキュリティ保護されたオリジンでのみ利用可能です。
サーバーがクライアントから `Sec-CH-Device-Memory` ヘッダーを受信するには、まず {{HTTPHeader("Accept-CH")}} レスポンスヘッダーを送信して、この機能への参加を表明する必要があります。
`Sec-CH-Device-Memory` クライアントヒントを受け入れることを選択したサーバーは、通常、{{HTTPHeader("Vary")}} ヘッダーにもこれを指定し、リクエストのヘッダー値に基づいて異なるレスポンスを送信することがあります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}},
        <a href="/ja/docs/Web/HTTP/Guides/Client_hints">クライアントヒント</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Sec-CH-Device-Memory: <number>
```

## ディレクティブ

- `<number>`
  - : 端末の RAM のおおよその容量です。

    端末の RAM 容量は{{glossary("fingerprinting", "フィンガープリンティング")}}の変数として使用できるため、その悪用を防ぐために、ヘッダーの値は意図的に大まかなものになっています。
    値は2のべき乗で表現され、実装によって定義される最小値と最大値の範囲内に制限されます。
    これらの範囲は、時間経過に伴う変更があります（[ブラウザー互換性表](#ブラウザーの互換性)を参照）。

    例えば、ブラウザーが `2` 未満または `32` を上回る値を報告しない場合、その値は `2`、`4`、`8`、`16`、`32` のいずれかになります。

## 例

サーバーはまず、`Sec-CH-Device-Memory` ヘッダーを受信するために、`Sec-CH-Device-Memory` を含む {{HTTPHeader("Accept-CH")}} レスポンスヘッダーを送信して、オプトインする必要があります。

```http
Accept-CH: Sec-CH-Device-Memory
```

その後、クライアントは、以降のリクエストにおいて `Sec-CH-Device-Memory` ヘッダーを返信する場合があります。

```http
Sec-CH-Device-Memory: 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{DOMxRef("Device Memory API", "端末メモリー API", "", "nocode")}}
- {{DOMxRef("Navigator.deviceMemory")}}
- {{DOMxRef("WorkerNavigator.deviceMemory")}}
- 端末およびレスポンシブ画像クライアントヒント
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Device-Memory")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP キャッシュ: Vary](/ja/docs/Web/HTTP/Guides/Caching#vary) および {{HTTPHeader("Vary")}}

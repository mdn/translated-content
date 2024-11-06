---
title: "HTMLIFrameElement: referrerPolicy プロパティ"
short-title: referrerPolicy
slug: Web/API/HTMLIFrameElement/referrerPolicy
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef}}

**`HTMLIFrameElement.referrerPolicy`** プロパティは HTML の {{HTMLElement("iframe")}} 要素の [`referrerpolicy`](/ja/docs/Web/HTML/Element/iframe#referrerpolicy) 属性を反映し、リソースの取得時にどのリファラーを送信するかを定義します。

## 値

- `no-referrer`
  - : {{HTTPHeader("Referer")}} ヘッダーは完全に省略されます。リクエストと共に送信されるリファラー情報はありません。
- `no-referrer-when-downgrade`
  - : プロトコルのセキュリティレベルが変わらない場合（例: HTTP→HTTP、HTTPS→HTTPS）にはリファラーとして URL を送信し、セキュリティレベルの低い宛先（例: HTTPS→HTTP）には送信しません。
- `origin`
  - : どのような場合でも、この文書のオリジンだけをリファラーとして送信します。
    文書 `https://example.com/page.html` はリファラーとして `https://example.com/` を送ります。
- `origin-when-cross-origin`
  - : 同一オリジンリクエストを行う場合は完全な URL を送信し、それ以外の場合は文書のオリジンのみを送信します。
- `same-origin`
  - : リファラーは[同一サイトオリジン](/ja/docs/Web/Security/Same-origin_policy)には送信されますが、オリジン間リクエストではリファラー情報が送信されません。
- `strict-origin`
  - : プロトコルのセキュリティレベルが変わらない場合（例: HTTPS→HTTPS）だけ、文書のオリジンをリファラーとして送信し、セキュリティレベルの低い宛先（例: HTTPS→HTTP）には送信しないようにします。
- `strict-origin-when-cross-origin` (default)
  - : これは、ポリシーが指定されていない場合のユーザーエージェントの既定の動作です。同一オリジンリクエストを行う場合は完全な URL を送信し、プロトコルのセキュリティレベルが変わらない場合はオリジンのみを送信し（例: HTTPS→HTTPS）、セキュリティレベルの低い宛先にはヘッダーを送信しません（例: HTTPS→HTTP）。
- `unsafe-url`

  - : 同一オリジンまたはオリジン間リクエストを実行するときに、完全な URL を送信します。

    > [!NOTE]
    > このポリシーは、 TLS で保護されたリソースから安全でないオリジンへのオリジンとパスを漏洩します。
    > この設定の影響を慎重に検討してください。

## 例

```js
const iframe = document.createElement("iframe");
iframe.src = "/";
iframe.referrerPolicy = "unsafe-url";
const body = document.querySelector("body");
body.appendChild(iframe); // 完全な URL をリファラーとして使用して画像を取得
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLAnchorElement.referrerPolicy")}},
  {{domxref("HTMLAreaElement.referrerPolicy")}},
  {{domxref("HTMLAreaElement.referrerPolicy")}}

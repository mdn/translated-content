---
title: "HTMLScriptElement: referrerPolicy プロパティ"
short-title: referrerPolicy
slug: Web/API/HTMLScriptElement/referrerPolicy
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef}}

**`referrerPolicy`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、 {{HTMLElement("script")}} 要素の [`referrerpolicy`](/ja/docs/Web/HTML/Element/script#referrerpolicy) とそのスクリプトによって行われるフェッチを反映し、リソースをフェッチする際にどのリファラーを送信するか定義しています。

## 値

文字列です。以下のいずれかです。

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
  - : 同一オリジンまたはオリジン間リクエストを実行するときに、完全な URL を送信します。このポリシーは、 TLS で保護されたリソースから安全でないオリジンへのオリジンとパスを漏洩します。
    この設定の影響を慎重に検討してください。

> **メモ:** 空文字列の値 (`""`) は既定値であると同時に、 `referrerpolicy` が対応していない場合の代替値でもあります。もし `<script>` 要素に `referrerpolicy` が明示的に指定されていない場合には、より高いレベルのリファラーポリシー、つまり文書やドメイン全体に設定されているものを採用することになります。上位のポリシーが利用できない場合、空文字列は `no-referrer-when-downgrade` と同等に扱われます。

## 例

```js
const scriptElem = document.createElement("script");
scriptElem.src = "/";
scriptElem.referrerPolicy = "unsafe-url";
document.body.appendChild(scriptElem);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLIFrameElement.referrerPolicy")}}

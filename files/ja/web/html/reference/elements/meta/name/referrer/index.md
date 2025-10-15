---
title: <meta name="referrer">
short-title: referrer
slug: Web/HTML/Reference/Elements/meta/name/referrer
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`referrer`** は {{htmlelement("meta")}} 要素の [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性の値で、文書から送信される HTTP リクエストの {{httpheader("Referer")}} ヘッダーを制御します。
指定した場合、 `<meta>` 要素の [`content`](/ja/docs/Web/HTML/Reference/Elements/meta#content) 属性にキーワード値としてリファラーを定義します。

例えば、次の `<meta>` 要素は、文書の{{glossary("origin", "オリジン")}}をリファラーとして送信します。

```html
<meta name="referrer" content="origin" />
```

> [!WARNING]
> 動的に `<meta name="referrer">` を（{{domxref("Document.write", "document.write()")}} または {{domxref("Node.appendChild", "appendChild()")}} によって）挿入すると、リファラーの動作が予測不能になります。
> 競合するポリシーが複数定義されている場合、 `no-referrer` ポリシーが適用されます。

## 使用上のメモ

`<meta name="referrer">` 要素には、次の追加属性があります。

- [`content`](/ja/docs/Web/HTML/Reference/Elements/meta#content)
  - : 文書のリファラーを設定します。この属性は定義する必要があります。
    次のいずれかの値を受け入れます。
    - `no-referrer`
      - : HTTP の `Referer` ヘッダーを送信しません。
    - `origin`
      - : 文書のオリジンを送信します。
    - `no-referrer-when-downgrade`
      - : 現在のページと安全性が同等以上の宛先 (HTTP(S)→HTTPS) にはリファラーとして URL 全体を送信しますが、安全性が低い宛先 (HTTPS→HTTP) には送信しません。これは既定の動作です。
    - `origin-when-cross-origin`
      - : 同一オリジンへのリクエストでは完全な URL （引数を除く）を送信しますが、他の場合はオリジンのみ送信します。
    - `same-origin`
      - : 同じオリジンからのリクエストに対して、完全な URL （引数を除く）を送信します。オリジン同士のリクエストには、リファラーヘッダーは含まれていません。
    - `strict-origin`
      - : 安全性が同等以上の宛先 (HTTP(S)→HTTPS) に対しては、リファラーとして文書のオリジンのみを送信しますが、安全性が低い宛先 (HTTPS→HTTP) には送信しません。
    - `strict-origin-when-cross-origin`
      - : 同一オリジンへのリクエストでは、完全な URL （引数を除く）を送信します。現在のページと安全性が同等以上の宛先 (HTTP(S)→HTTPS) にはオリジンを送信します。それ以外は、リファラーを送信しません。
    - `unsafe-URL`
      - : 同一オリジンまたはオリジン間リクエストで、完全な URL （引数を除く）を送信します。

## 例

### リクエストからリファラーを除去

次の `<meta>` 要素は、この文書からの HTTP リクエストで `Referer` ヘッダーを送信しないことを指定します。

```html
<meta name="referrer" content="no-referrer" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTTP の {{httpheader("Referer")}} ヘッダー

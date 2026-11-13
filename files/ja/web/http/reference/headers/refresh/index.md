---
title: Refresh ヘッダー
short-title: Refresh
slug: Web/HTTP/Reference/Headers/Refresh
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Refresh`** {{Glossary("response header", "レスポンスヘッダー")}}は、ページの読み込みが完了してから指定された時間が経過した時点で、ブラウザーにページを更新またはリダイレクトするよう指示するものです。
これは、HTMLで[`<meta http-equiv="refresh" content="...">`](/ja/docs/Web/HTML/Reference/Elements/meta/http-equiv)を使用することと完全に同等です。

> [!NOTE]
> これは HTTP レスポンスに含まれますが、`Refresh` ヘッダーは HTML の読み込み処理によって処理され、HTTP リダイレクトや JavaScript によるリダイレクトの後に実行されます。情報については、[リダイレクトの優先順位](/ja/docs/Web/HTTP/Guides/Redirections#order_of_precedence)を参照してください。

> [!NOTE]
> 新しいページに更新リダイレクトされた場合、新しいページへのリクエストには {{httpheader("Referer")}} ヘッダーが含まれます（{{httpheader("Referrer-Policy")}} で許可されている場合）。また、移動後の {{domxref("document.referrer")}} には、参照元の URL が設定されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Refresh: <time>
Refresh: <time>, url=<url>
Refresh: <time>; url=<url>
```

- `<time>`
  - : ページを更新するまでの秒数（非負の数値）。小数点以下の桁数は認識されますが、無視されます。指定するのは整数のみにしてください。
- `<url>` {{optional_inline}}
  - : 指定されている場合、ブラウザーは現在の URL でページを更新する代わりに、指定された URL へリダイレクトします。この URL は引用符で囲んでも、囲まなくても構いません。`url=` という接頭辞は大文字小文字を区別せず、オプションです。

## 例

### 指定された時間の後でページを更新

このヘッダーを設定すると、ブラウザーはページの読み込みが完全に完了した後（つまり、{{domxref("Window/load_event", "load")}} イベントが発生した後）、5 秒後にページを再読み込みします。

```http
Refresh: 5
```

### 指定された時間の後でリダイレクト

このヘッダーを設定すると、ページが完全に読み込まれてから 5 秒後に、ブラウザーは指定された URL へリダイレクトされます。

```http
Refresh: 5; url=https://example.com/
```

> [!NOTE]
> 自動リダイレクトがアクセシビリティに与える影響に関する重要な情報については、HTML リファレンスの [`http-equiv="refresh"`](/ja/docs/Web/HTML/Reference/Elements/meta/http-equiv#refresh) 属性を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("meta")}}
- [HTTP のリダイレクト](/ja/docs/Web/HTTP/Guides/Redirections)
- [The Refresh header is still with us](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html) - HTTP Working Group message (2019)

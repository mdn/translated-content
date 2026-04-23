---
title: X-Content-Type-Options ヘッダー
short-title: X-Content-Type-Options
slug: Web/HTTP/Reference/Headers/X-Content-Type-Options
l10n:
  sourceCommit: d5c3db4df1e063769b8113567f4558ad4298b00b
---

HTTP の **`X-Content-Type-Options`** は{{Glossary("response header", "レスポンスヘッダー")}}で、{{HTTPHeader("Content-Type")}} ヘッダーで示された [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types)を尊重し、変更すべきでないことを示します。
このヘッダーにより、[MIME タイプのスニッフィング](/ja/docs/Web/HTTP/Guides/MIME_types#mime_sniffing)を抑止し、MIME タイプを意図的に設定することができます。

サイトのセキュリティテスターは通常、このヘッダーが設定されていることを期待しています。

> [!NOTE]
> `X-Content-Type-Options` は、 [`nosniff` による](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff)リクエストブロッキングを[リクエスト先](/ja/docs/Web/API/Request/destination)が `"script"` と `"style"` の場合のみ適用します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
X-Content-Type-Options: nosniff
```

## ディレクティブ

- `nosniff`
  - : リクエスト先のタイプが `style` であり、その MIME タイプが `text/css` ではない場合、または、タイプが `script` で MIME タイプが [JavaScript の MIME タイプ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type)ではない場合にリクエストをブロックします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Type")}}
- Microsoft による X-Content-Type-Options の [元の定義](https://learn.microsoft.com/ja-jp/archive/blogs/ie/ie8-security-part-vi-beta-2-update)
- [HTTP Observatory](/en-US/observatory) ツールによるウェブサイトのセキュリティ構成（このヘッダーを含む）のテスト
- [Firefox における MIME 混同攻撃の緩和](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)

---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
tags:
  - HTTP
  - HTTP ヘッダー
  - Reference
  - レスポンスヘッダー
browser-compat: http.headers.X-Content-Type-Options
translation_of: Web/HTTP/Headers/X-Content-Type-Options
---
{{HTTPSidebar}}

**`X-Content-Type-Options`** は HTTP のレスポンスヘッダーで、 {{HTTPHeader("Content-Type")}} ヘッダーで示された [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)を変更せずに従うべきであることを示すために、サーバーによって使用されるマーカーです。これにより、[MIME タイプのスニッフィング](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing)を抑止することができます。言い替えれば、 MIME タイプを意図的に設定することができます。

このヘッダーは、 Microsoft が IE 8 において、コンテンツのスニッフィングにより、実行不可能な MIME タイプを実行可能な MIME タイプに変換してしまうという事故を抑止するためのとして導入したものです。それ以来、他のブラウザーは MIME スニッフィングのアルゴリズムにそれほど積極的ではなくても、このヘッダーを導入してきました。

Firefox 72 から、 {{HTTPHeader("Content-type")}} が提供されている場合、 MIME スニッフィングの抑止が最上位の文書にも適用されるようになりました。これにより、 HTML のウェブページが `text/html` 以外の MIME タイプで提供された場合、表示されるのではなくダウンロードされることがあります。両方のヘッダーを正しく設定してください。

サイトのセキュリティテスターは通常、このヘッダーが設定されていることを期待しています。

> **Note:** `X-Content-Type-Options` は、 [`nosniff` によるリクエストブロッキング](https://fetch.spec.whatwg.org/#should-response-to-request-be-blocked-due-to-nosniff?)を[リクエスト先](https://fetch.spec.whatwg.org/#concept-request-destination)が "`script`" と "`style`" の場合のみ適用します。しかし、 [Cross-Origin Read Blocking (CORB)](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md#determining-whether-a-response-is-corb_protected) 保護を HTML, TXT, JSON, XML の各ファイル (SVG `image/svg+xml` を除く) に対して有効にすることもできます。</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
X-Content-Type-Options: nosniff
```

# ディレクティブ

- `nosniff`
  - : リクエスト先のタイプが `style` でありその MIME タイプが `text/css` ではない場合、または、タイプが `script` で MIME タイプが [JavaScript の MIME タイプ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type)ではない場合にリクエストをブロックします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### ブラウザー固有の注意事項

- Firefox 72 は最上位の文書で `X-Content-Type-Options: nosniff` を有効にします。

## 関連情報

- {{HTTPHeader("Content-Type")}}
- Microsoft による X-Content-Type-Options の [元の定義](https://blogs.msdn.microsoft.com/ie/2008/09/02/ie8-security-part-vi-beta-2-update/)
- [Mozilla Observatory](https://observatory.mozilla.org/) ツールによるウェブサイトの設定 (このヘッダーを含む) の安全性とセキュリティのテスト
- [Firefox における MIME 混同攻撃の緩和](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
- [Cross-Origin Read Blocking (CORB)](https://fetch.spec.whatwg.org/#corb)
- [Google Docs CORB 解説書](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)

---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy
original_slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
---

> [!NOTE]
> [Chrome のバグ](https://bugs.chromium.org/p/chromium/issues/detail?id=1074261)のため、 Cross-Origin-Resource-Policy を設定すると PDF のレンダリングが中断され、一部の PDF の最初のページを超えて読むことができなくなることがあります。 [Firefox のバグ](https://bugzilla.mozilla.org/show_bug.cgi?id=1638323)のため、Cross-Origin-Resource-Policy を設定すると、状況によっては一部のリソース（PDF など）のダウンロードができなくなることがあります。本番環境では、このヘッダーの使用に注意してください。

HTTP の **`Cross-Origin-Resource-Policy`** レスポンスヘッダーは、ブラウザーが指定されたリソースへの no-cors のクロスオリジン/クロスサイトのリクエストをブロックするという要望を伝えます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

## 例

以下のレスポンスヘッダーにより、互換性のあるユーザーエージェントはクロスオリジンの no-cors リクエストを許可しなくなります。

```
Cross-Origin-Resource-Policy: same-origin
```

その他の例は、 <https://resourcepolicy.fyi/> を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Cross-Origin Resource Policy (CORP) の説明](/ja/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)

---
title: "CSP: object-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/object-src
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の {{HTTPHeader("Content-Security-Policy")}} の **`object-src`** ディレクティブは、 {{HTMLElement("object")}} や {{HTMLElement("embed")}} 要素の有効なソースを指定します。

> [!NOTE]
> `object-src` で制御される要素は、おそらく偶然にも古い HTML 要素と見なされており、新しい標準機能が搭載されていません（`<iframe>` の `sandbox` や `allow` などのセキュリティ属性など）。したがって、このフェッチディレクティブで制限することを[推奨します](https://csp.withgoogle.com/docs/strict-csp.html) （例えば、可能であれば明示的に `object-src 'none'` を設定するなど）。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Fetch directive", "フェッチディレクティブ")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} による代替</th>
      <td>
        あり。このディレクティブがない場合、ユーザーエージェントは <code>default-src</code> ディレクティブを探します。
      </td>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Security-Policy: object-src 'none';
Content-Security-Policy: object-src <source-expression-list>;
```

このディレクティブは、次のいずれかの値を指定することができます。

- `'none'`
  - : この種類のリソースは読み込まれません。単一引用符は必須です。
- `<source-expression-list>`
  - : ソース表現の値を空白で区切ったリストです。この種類のリソースは、指定されたソース表現のいずれかと一致した場合に読み込まれます。このディレクティブでは、以下のソース表現の値が適用できます。
    - [`<host-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## 例

### 違反の場合

この CSP ヘッダーがある場合、

```http
Content-Security-Policy: object-src https://example.com/
```

以下の {{HTMLElement("object")}} や {{HTMLElement("embed")}} 要素はブロックされ、読み込まれません。

```html
<embed src="https://not-example.com/flash"></embed>
<object data="https://not-example.com/plugin"></object>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("object")}} および {{HTMLElement("embed")}}

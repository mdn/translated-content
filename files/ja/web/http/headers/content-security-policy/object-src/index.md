---
title: "CSP: object-src"
slug: Web/HTTP/Headers/Content-Security-Policy/object-src
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} の **`object-src`** ディレクティブは、 {{HTMLElement("object")}}, {{HTMLElement("embed")}}, {{HTMLElement("applet")}} の各要素の妥当なソースを指定します。

{{HTMLElement("object")}}, {{HTMLElement("embed")}}, {{HTMLElement("applet")}} の各要素の許可される種類を設定するには、 {{CSP("plugin-types")}} ディレクティブを使用してください。

> **メモ:** `object-src` で制御される要素は、おそらく偶然にも古い HTML 要素と見なされており、新しい標準機能が搭載されていません（`<iframe>` の `sandbox` や `allow` などのセキュリティ属性など）。したがって、このフェッチディレクティブで制限することを[推奨します](https://csp.withgoogle.com/docs/strict-csp.html) （例えば、可能であれば明示的に `object-src 'none'` を設定するなど）。

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

`object-src` ポリシーには、 1 つまたは複数のソースが許可されています。

```http
Content-Security-Policy: object-src <source>;
Content-Security-Policy: object-src <source> <source>;
```

### ソース

`<source>` は、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#関連ディレクティブ)）で使用できます。

## 例

### 違反の場合

この CSP ヘッダーがある場合、

```http
Content-Security-Policy: object-src https://example.com/
```

以下の {{HTMLElement("object")}}, {{HTMLElement("embed")}}, {{HTMLElement("applet")}} の各要素はブロックされ、読み込まれません。

```html
<embed src="https://not-example.com/flash"></embed>
<object data="https://not-example.com/plugin"></object>
<applet archive="https://not-example.com/java"></applet>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("object")}}, {{HTMLElement("embed")}}, {{HTMLElement("applet")}}
- {{CSP("plugin-types")}}

---
title: 'CSP: prefetch-src'
slug: Web/HTTP/Headers/Content-Security-Policy/prefetch-src
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`prefetch-src`** ディレクティブは、事前読み込みまたは事前描画することができる有効なリソースを指定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Fetch directive", "フェッチディレクティブ")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} による代替</th>
      <td>
        あり。このディレクティブがない場合、ユーザーエージェントは `default-src` ディレクティブを探します。
      </td>
    </tr>
  </tbody>
</table>

## 構文

`prefetch-src` ポリシーには、 1 つ以上のソースが許可されています。

```http
Content-Security-Policy: prefetch-src <source>;
Content-Security-Policy: prefetch-src <source> <source>;
```

### ソース

`<source>` は、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#関連ディレクティブ)）で使用できます。

## 例

### ヘッダーが一致しないリソースの事前読み込み

次のコンテンツセキュリティポリシーを持つページがあったとします。

```http
Content-Security-Policy: prefetch-src https://example.com/
```

次のコードで読み込もうとすると、指定された URL が `prefetch-src` のソース一覧にないので、ネットワークエラーになります。

```html
    <link rel="prefetch" src="https://example.org/"></link>
    <link rel="prerender" src="https://example.org/"></link>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}

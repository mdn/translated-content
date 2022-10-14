---
title: 'CSP: default-src'
slug: Web/HTTP/Headers/Content-Security-Policy/default-src
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) **`default-src`** ディレクティブは、他の CSP {{Glossary("fetch directive", "フェッチディレクティブ")}}の代替として提供します。以下のディレクティブがいずれかが存在しないと、ユーザーエージェントは `default-src` ディレクティブを探して、この値を使用します。

- {{CSP("child-src")}}
- {{CSP("connect-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("prefetch-src")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{CSP("worker-src")}}

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
  </tbody>
</table>

## 構文

`default-src` ポリシーには、１つまたは複数のソースが許可されています。

```
Content-Security-Policy: default-src <source>;
Content-Security-Policy: default-src <source> <source>;
```

### ソース

`<source>` は、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#関連ディレクティブ)）で使用できます。

## 例

### default-src で継承されない場合

他のディレクティブが指定されている場合、`default-src` は影響しません。

```
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

は、下記のものと同じです。

```
Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://example.com;
                         style-src 'self';
                         worker-src 'self'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- CSP ディレクティブ (<https://www.w3.org/TR/CSP/#csp-directives>):

  - {{Glossary("Fetch directive", "フェッチディレクティブ")}}
  - {{Glossary("Document directive", "文書ディレクティブ")}}
  - {{Glossary("Navigation directive", "ナビゲーションディレクティブ")}}
  - {{Glossary("Reporting directive", "報告ディレクティブ")}}
  - [`upgrade-insecure-requests`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`block-all-mixed-content`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content)
  - [`require-sri-for`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/require-sri-for) {{experimental_inline}}

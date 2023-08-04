---
title: "CSP: frame-src"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-src
l10n:
  sourceCommit: 52a9f4580b8ce4eabaed20dd9a4677fc556e1d44
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`frame-src`** ディレクティブは、 {{HTMLElement("frame")}} や {{HTMLElement("iframe")}} のような要素を使用した内部の閲覧コンテキストの読み込みに有効なソースを指定します。

> **メモ:** **`frame-src`** は、ページ内の iframe がどこから読み込まれるかを指定することができます。
> これは、ページを埋め込むことができる親ソースを指定することができる **`frame-ancestors`** とは異なります。

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
      <th scope="row">代替</th>
      <td>
        このディレクティブがない場合、ユーザーエージェントは {{CSP("child-src")}} ディレクティブを探す (さらにこの代替は {{CSP("default-src")}} ディレクティブである)。
      </td>
    </tr>
  </tbody>
</table>

## 構文

`frame-src` ポリシーには、 1 つ以上のソースが許可されています。

```http
Content-Security-Policy: frame-src <source>;
Content-Security-Policy: frame-src <source> <source>;
```

### ソース

`<source>` は、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#関連ディレクティブ)）で使用できます。

## 例

### 違反する場合

この CSP ヘッダーがある場合、

```http
Content-Security-Policy: frame-src https://example.com/
```

以下の {{HTMLElement("iframe")}} はブロックされ、読み込まれません。

```html
<iframe src="https://not-example.com/"></iframe>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("frame")}} および {{HTMLElement("iframe")}}
- {{CSP("frame-ancestors")}}

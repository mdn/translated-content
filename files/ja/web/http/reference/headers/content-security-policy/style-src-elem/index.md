---
title: "CSP: style-src-elem"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-elem
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`style-src-elem`** ディレクティブは、スタイルシート {{HTMLElement("style")}} 要素と `rel="stylesheet"` を持つ {{HTMLElement("link")}} 要素の有効なソースを指定します。

これらは {{CSP("style-src-attr")}} を使用して設定されます（また、すべてのスタイルの有効なソースは {{CSP("style-src")}} で設定することができます）。

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
      <th scope="row">{{CSP("default-src")}} の代替</th>
      <td>
        <p>
          あり。
          このディレクティブがない場合、ユーザーエージェントは {{CSP("style-src")}} を探し、両方ともなかった場合は、<code>default-src</code> で代替されます。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Security-Policy: style-src-elem 'none';
Content-Security-Policy: style-src-elem <source-expression-list>;
```

このディレクティブは、次のいずれかの値を指定することができます。

- `'none'`
  - : この種類のリソースは読み込まれません。単一引用符は必須です。
- `<source-expression-list>`
  - : ソース表現の値を空白で区切ったリストです。この種類のリソースは、指定されたソース表現のいずれかと一致した場合に読み込まれます。このディレクティブでは、[フェッチディレクティブの構文](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#フェッチディレクティブの構文)に掲載されているソース表現のうち、 [`'unsafe-hashes'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes) 以外のいずれかが適用できます。

`style-src-elem` は {{CSP("style-src")}} との組み合わせで使用できます。

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-elem <source>;
```

## 例

### 違反している場合

この CSP ヘッダーがあったとします。

```http
Content-Security-Policy: style-src-elem https://example.com/
```

…このスタイルシートはブロックされ、読み込まれません。

```html
<link href="https://not-example.com/styles/main.css" rel="stylesheet" />

<style>
  #inline-style {
    background: red;
  }
</style>

<style>
  @import url("https://not-example.com/styles/print.css") print;
</style>
```

…同様に、{{HTTPHeader("Link")}} ヘッダーを使用して読み込まれたスタイル設定です。

```http
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src")}}
- {{CSP("style-src-attr")}}
- {{HTTPHeader("Link")}} ヘッダー
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}

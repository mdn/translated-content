---
title: "CSP: style-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-elem
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}

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
      <th scope="row">フォールバック</th>
      <td>
        <p>
          このディレクティブがない場合、ユーザーエージェントは {{CSP("style-src")}} を探し、両方ともなかった場合は、<code>default-src</code> で代替されます。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 構文

1 つ以上のソースが `style-src-elem` ポリシーで指定できます。

```http
Content-Security-Policy: style-src-elem <source>;
Content-Security-Policy: style-src-elem <source> <source>;
```

`style-src-elem` は {{CSP("style-src")}} との組み合わせで使用されます。

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-elem <source>;
```

### ソース

`<source>` には、[CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#ソース) に掲載されている値のいずれかが使用できます。

この同じ値の集合は、すべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)）で使用できるということに注意してください。

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

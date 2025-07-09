---
title: "CSP: style-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/style-src
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`style-src`** ディレクティブは、スタイルシートの有効なソースを指定します。

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
Content-Security-Policy: style-src 'none';
Content-Security-Policy: style-src <source-expression-list>;
```

このディレクティブは、次のいずれかの値を指定することができます。

- `'none'`
  - : この種類のリソースは読み込まれません。単一引用符は必須です。
- `<source-expression-list>`
  - : ソース表現の値を空白で区切ったリストです。この種類のリソースは、指定されたソース表現のいずれかと一致した場合に読み込まれます。このディレクティブでは、以下のソース表現の値が適用できます。
    - [`<host-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)
    - [`'unsafe-inline'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'unsafe-hashes'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'nonce-<nonce_value>'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#nonce-nonce_value)
    - [`'<hash_algorithm>-<hash_value>'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#hash_algorithm-hash_value)
    - [`'report-sample'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

    なお、仕様書では有効なソース表現値として [`'unsafe-eval'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) も記載されています。これは、さまざまなインターフェイスにおける `insertRule()` メソッドや `cssText` セッター、例えば {{domxref("CSSStyleSheet.insertRule()")}} や{{domxref("CSSStyleDeclaration.cssText")}} など、 CSS 文字列を解析および挿入する CSSOM のメソッドを許可するためです。しかし、現在、これらのメソッドをブロックするブラウザーはないため、 `unsafe-eval` を適用する必要はありません。

## 例

### 違反する場合

この CSP ヘッダーがある場合、

```http
Content-Security-Policy: style-src https://example.com/
```

以下のスタイルシートはブロックされ、読み込まれません。

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

{{HTTPHeader("Link")}} ヘッダーで読み込まれるものも同様です。

```http
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

インラインの style 属性もブロックされます。

```html
<div style="display:none">Foo</div>
```

JavaScript で直接 `style` 属性を設定したり、 {{domxref("CSSStyleDeclaration.cssText", "cssText")}} を設定したりしたスタイルも同様です。

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

しかし、要素の {{domxref("HTMLElement.style", "style")}} プロパティに直接設定されたスタイルプロパティはブロックされず、 JavaScript から安全にスタイルを操作することができます。

```js
document.querySelector("div").style.display = "none";
```

この手の操作は、 CSP の {{CSP("script-src")}} ディレクティブで JavaScript を無効にすることで防ぐことができます。

### 安全ではないインラインスタイル

> [!NOTE]
> インラインスタイルとインラインスクリプトを禁止することは、 CSP が提供する最大のセキュリティ上の利点の一つです。しかし、どうしても使用しなければならない場合は、それらを許可する仕組みがいくつかあります。

インラインスタイルを許可するには、`'unsafe-inline'`、ノンスhソース、ハッシュソースのいずれかを一致するインラインブロックに指定できます。次のコンテンツセキュリティポリシーに従うことで、 {{HTMLElement("style")}} 要素や、あらゆる要素の `style` 属性のようなインラインスタイルが許可されます。

```http
Content-Security-Policy: style-src 'unsafe-inline';
```

上記のコンテンツセキュリティポリシーは {{HTMLElement("style")}} 要素やあらゆる要素の `style` 属性などのインラインスタイルを許可します。

```html
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Foo</div>
```

特定のインラインスタイルブロックのみを許可するには、 nonce-source を使用することができます。
（暗号的に安全なランダムトークンジェネレータを使用して）ランダムな nonce 値を生成し、それをポリシーに含める必要があります。
この nonce 値は、 HTTP リクエストごとに一意である必要があるため、動的に生成する必要があることに注意することが重要です。

```http
Content-Security-Policy: style-src 'nonce-2726c7f26c'
```

同じノンスを {{HTMLElement("style")}} 要素にも設定する必要があります。

```html
<style nonce="2726c7f26c">
  #inline-style {
    background: red;
  }
</style>
```

他にも、インラインスタイルからハッシュを生成することができます。 CSP では sha256、sha384、sha512 に対応しています。ハッシュの**バイナリー**形式は base64 でエンコードされていなければなりません。文字列のハッシュは `openssl` プログラムを使ってコマンドラインから取得することができます。

```bash
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

ハッシュソースを使用すると、特定のインラインスタイルブロックのみを許可することができます。

```http
Content-Security-Policy: style-src 'sha256-ozBpjL6dxO8fsS4u6fwG1dFDACYvpNxYeBA6tzR+FY8='
```

ハッシュを生成するときは、 {{HTMLElement("style")}} タグを含めないようにし、大文字小文字と、ホワイトスペース、特に前後のホワイトスペースに注意してください。

```html
<style>
  #inline-style {
    background: red;
  }
</style>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{HTTPHeader("Link")}} ヘッダー
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}

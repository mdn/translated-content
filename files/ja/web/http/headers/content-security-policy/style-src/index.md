---
title: "CSP: style-src"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}

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

`style-src` ポリシーには、 1 つまたは複数のソースが許可されています。

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src <source> <source>;
```

### ソース

`<source>` は、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy#関連ディレクティブ)）で使用できます。

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

インラインスタイルを許可するために、 `'unsafe-inline'` を指定するか、インラインブロックに一致するノンスソースまたはハッシュソースを指定することができます。

```bash
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

ノンスソースを使用して、特定のインラインスタイルのみ許可することができます。

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

他にも、インラインスタイルからハッシュを生成することができます。 CSP では sha256, sha384, sha512 に対応しています。ハッシュの**バイナリー**形式は base64 でエンコードされていなければなりません。文字列のハッシュは `openssl` プログラムを使ってコマンドラインから取得することができます。

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

### 安全ではない style 式

`'unsafe-eval'` ソース式は、文字列からスタイル宣言を生成するいくつかのスタイルメソッドを制御します。もし `'unsafe-eval'` が `style-src` ディレクティブで指定されていなかった場合、以下のメソッドはブロックされて何の効果も現れません。

- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{HTTPHeader("Link")}} header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}

---
title: "CSP: style-src-attr"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-attr
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`style-src-attr`** ディレクティブは、個々の DOM 要素に適用されるインラインスタイルのための有効なソースを指定します。

このディレクティブは、{{HTMLElement("style")}} 要素、および `rel="stylesheet"` を持つ {{HTMLElement("link")}} 要素に有効なソースを設定しません。
これらは、{{CSP("style-src-elem")}} を使用して設定されます（そして、すべてのスタイルのための有効なソースは、{{CSP("style-src")}} で設定することができます）。

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
          あり。
          このディレクティブがない場合、ユーザーエージェントは {{CSP("style-src")}} を探し、両方ともなかった場合は、<code>default-src</code> で代替されます。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 構文

`style-src-attr` ポリシーでは、 1 つ以上のソースを許可することができます。

```http
Content-Security-Policy: style-src-attr <source>;
Content-Security-Policy: style-src-attr <source> <source>;
```

`style-src-attr` は {{CSP("style-src")}} との組み合わせで使用することができます。

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-attr <source>;
```

### ソース

`<source>` には、[CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy#ソース) に掲載されている値のいずれかが使用できます。

この同じ値の集合は、すべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy#relevant_directives)）で使用できるということに注意してください。

## 例

### 違反している場合

この CSP ヘッダーがあったとします。

```http
Content-Security-Policy: style-src-attr 'none'
```

…要素へ適用されたインラインスタイルは適用されません。

```html
<div style="display:none">Foo</div>
```

このポリシーは、`style` 属性を直接設定したり、{{domxref("CSSStyleDeclaration.cssText", "cssText")}} を設定することによって JavaScript で適用されるスタイルもブロックすることになります。

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

要素の {{domxref("HTMLElement/style", "style")}} プロパティに直接設定されたスタイルプロパティはブロックされないので、ユーザーは JavaScript で安全にスタイルを操作できるようになります。

```js
document.querySelector("div").style.display = "none";
```

JavaScript を使用すると、CSP の {{CSP("script-src")}} ディレクティブを使用して独自にブロックされる可能性があることに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{HTTPHeader("Link")}} ヘッダー
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}

---
title: "CSP: script-src-attr"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`script-src-attr`** ディレクティブは、JavaScript でインラインイベントハンドラーを指定する際に、有効なソースを指定します。

このディレクティブは `onclick` のようなインラインスクリプトイベントハンドラーに対してのみ、有効なソースを指定します。
{{HTMLElement("script")}} 要素に直接読み込まれた URL や [XSLT スタイルシート](/ja/docs/Web/XSLT)など、スクリプト実行のきっかけとなる他の JavaScript ソースには適用されません。
（有益なソースは {{CSP("script-src")}} を使用してすべての JavaScript スクリプトソースに対して指定することも、 {{CSP("script-src-elem")}} を使用して `<script>` 要素に対してのみ指定することも可能です。）

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
        あり。
        このディレクティブがない場合、ユーザーエージェントは {{CSP("script-src")}} ディレクティブを探し、両方ともない場合は、 <code>default-src</code> ディレクティブで代替します。
      </td>
    </tr>
  </tbody>
</table>

## 構文

`script-src-attr` ポリシーでは、1 つまたは複数のソースを許可することができます。

```http
Content-Security-Policy: script-src-attr <source>;
Content-Security-Policy: script-src-attr <source> <source>;
```

`script-src-attr` は {{CSP("script-src")}} と一緒に使用することができ、インラインハンドラーのチェックのために、このディレクティブを上書きすることができます。

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-attr <source>;
```

### ソース

`<source>` は、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と[他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy#関連ディレクティブ)）で使用できます。

## 例

### 違反の場合

この CSP ヘッダーがあったとします。

```http
Content-Security-Policy: script-src-attr 'none'
```

…実行すると、以下のインラインイベントハンドラーはブロックされ、読み込まれたり実行されたりしません。

```html
<button id="btn" onclick="doSomething()"></button>
```

一般に、インラインイベントハンドラーは {{domxref("EventTarget.addEventListener", "addEventListener")}} 呼び出しに置き換える必要があることに注意してください。

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}

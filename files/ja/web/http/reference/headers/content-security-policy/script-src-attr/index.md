---
title: "CSP: script-src-attr"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-attr
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`script-src-attr`** ディレクティブは、JavaScript でインラインイベントハンドラーを指定する際に、有効なソースを指定します。

このディレクティブは `onclick` のようなインラインスクリプトイベントハンドラーに対してのみ、有効なソースを指定します。
{{HTMLElement("script")}} 要素に直接読み込まれた URL や [XSLT スタイルシート](/ja/docs/Web/XML/XSLT)など、スクリプト実行のきっかけとなる他の JavaScript ソースには適用されません。
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

```http
Content-Security-Policy: script-src-attr 'none';
Content-Security-Policy: script-src-attr <source-expression-list>;
```

このディレクティブは、次のいずれかの値を指定することができます。

- `'none'`
  - : この種類のリソースは読み込まれません。単一引用符は必須です。
- `<source-expression-list>`
  - : ソース表現の値を空白で区切ったリストです。この種類のリソースは、指定されたソース表現のいずれかと一致した場合に読み込まれます。このディレクティブでは、以下のソース表現の値が適用できます。
    - [`'unsafe-hashes'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'unsafe-inline'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline)
    - [`'report-sample'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)

`script-src-attr` は {{CSP("script-src")}} と組み合わせて使用することができ、インラインハンドラーを調べるときにはそのディレクティブを上書きします。

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-attr <source>;
```

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

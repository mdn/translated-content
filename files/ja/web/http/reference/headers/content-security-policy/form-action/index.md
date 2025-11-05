---
title: "CSP: form-action"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/form-action
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`form-action`** ディレクティブは、指定のコンテキストからフォームの送信先として使用される URL を制限します。

> [!WARNING]
> `form-action` がフォーム送信後のリダイレクトをブロックするかどうかは [議論の最中](https://github.com/w3c/webappsec-csp/issues/8) であり、この点に関する実装はブラウザーによって異なります（例えば、 Firefox 57 はリダイレクトをブロックしませんが、 Chrome 63 はリダイレクトをブロックします。）

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Navigation directive", "ナビゲーションディレクティブ")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} による代替</th>
      <td>なし。このディレクティブが設定されていない場合、すべてが許可されます。</td>
    </tr>
  </tbody>
</table>

## 構文

`form-action` ポリシーには、 1 つ以上のソースを設定することができます。

```http
Content-Security-Policy: form-action <source>;
Content-Security-Policy: form-action <source> <source>;
```

このディレクティブは、次のいずれかの値を指定することができます。

- `'none'`
  - : フォームの送信は行われません。単一引用符は必須です。
- `<source-expression-list>`
  - : ソース表現の値を空白で区切ったリストです。フォームの送信は、指定されたソース表現のいずれかと URL が一致した場合に行われます。このディレクティブでは、以下のソース表現の値が適用できます。
    - [`<host-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## 例

### meta タグの設定

```html
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />
```

### Apache の設定

```html
<IfModule mod_headers.c>
  Header set Content-Security-Policy "form-action 'none';"
</IfModule>
```

### Nginx の設定

```nginx
add_header Content-Security-Policy "form-action 'none';"
```

### 違反している場合

インラインの JavaScript で action を設定した {{HTMLElement("form")}} 要素 は CSP 違反となります。

```html example-bad
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />

<form action="javascript:alert('Foo')" id="form1" method="post">
  <input type="text" name="fieldName" value="fieldValue" />
  <input type="submit" id="submit" value="submit" />
</form>

<!--
// エラー: 以下に違反したので、フォームデータの送信は拒否されました。
// Content Security Policy ディレクティブ: "form-action 'none'"
-->
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("form")}}

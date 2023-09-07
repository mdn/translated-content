---
title: "CSP: form-action"
slug: Web/HTTP/Headers/Content-Security-Policy/form-action
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`form-action`** ディレクティブは、指定のコンテキストからフォームの送信先として使用される URL を制限します。

> **警告:** `form-action` がフォーム送信後のリダイレクトをブロックするかどうかは [議論の最中](https://github.com/w3c/webappsec-csp/issues/8) であり、この点に関する実装はブラウザーによって異なります（例えば、 Firefox 57 はリダイレクトをブロックしませんが、 Chrome 63 はリダイレクトをブロックします。）

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

### ソース

`<source>` には、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と[数々の他のディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#関連ディレクティブ)）で使用できます。

## 例

### Meta タグの設定

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

```
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

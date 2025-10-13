---
title: X-XSS-Protection
slug: Web/HTTP/Reference/Headers/X-XSS-Protection
original_slug: Web/HTTP/Headers/X-XSS-Protection
l10n:
  sourceCommit: 8e1f45b8c0a3671f6e3de43c0764ad610aa345dd
---

{{Non-standard_header}}

HTTP の **`X-XSS-Protection`** レスポンスヘッダーは Internet Explorer, Chrome, Safari の機能で、反射型クロスサイトスクリプティング ({{Glossary("Cross-site_scripting", "XSS")}}) 攻撃を検出したときに、ページの読み込みを停止するためのものです。サイトが強力な {{HTTPHeader("Content-Security-Policy")}} を実装しており、インライン JavaScript (`'unsafe-inline'`) の使用を無効にしている場合、これらの保護は現代のブラウザーではほとんど不要となります。

> [!WARNING]
> この機能は、まだ {{Glossary("CSP")}} に対応していない古いブラウザーのユーザーを保護できるにもかかわらず、場合によっては、他の安全なウェブサイトで**XSS 保護機能が XSS の脆弱性を作り出す可能性**があります。詳細については、下記の節を参照してください。

> [!NOTE]
>
> - Chrome は [XSS Auditor を削除](https://chromestatus.com/feature/5021976655560704)しました。
> - Firefox は対応しておらず、 [`X-XSS-Protection` を今後も実装しません](https://bugzilla.mozilla.org/show_bug.cgi?id=528661)
> - Edge は [XSS filter を廃止しました](https://blogs.windows.com/windows-insider/2018/07/25/announcing-windows-10-insider-preview-build-17723-and-build-18204/)。つまり、古いブラウザーに対応する必要がない場合は、代わりに [`Content-Security-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) を使用し `unsafe-inline` を許可しないことをお勧めします。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=<reporting-uri>
```

- 0
  - : XSS フィルタリングを無効化します。
- 1
  - : XSS フィルタリングを有効化します（通常はブラウザーの既定値です）。クロスサイトスクリプティング攻撃を検知すると、ブラウザーはページをサニタイズします（安全でない部分を取り除きます）。
- 1; mode=block
  - : XSS フィルタリングを有効化します。攻撃を検知すると、ページをサニタイジングするよりも、ページのレンダリングを停止します。
- 1; report=\<reporting-URI> (Chromium only)
  - : XSS フィルタリングを有効化します。クロスサイトスクリプティング攻撃を検知すると、ブラウザーはページをサニタイズし、攻撃レポートを作成します。レポートを送信するために、 CSP {{CSP("report-uri")}} ディレクティブ機能を利用します。

## XSS フィルタリングに起因する脆弱性

あるウェブページの抜粋である以下の HTML コードを考えてみましょう。

```html
<script>
  var productionMode = true;
</script>
<!-- [...] -->
<script>
  if (!window.productionMode) {
    // 脆弱性のあるデバッグコード
  }
</script>
```

このコードは、ブラウザーが XSS フィルタリングを行わない場合は、完全に安全です。しかし、もしブラウザーがフィルタリングを行い、検索クエリーが `?something=%3Cscript%3Evar%20productionMode%20%3D%20true%3B%3C%2Fscript%3E` である場合、ブラウザーはページ内のスクリプトを `<script>var productionMode = true;</script>` の部分を（URI にあったためサーバーがそれをレスポンスに記載したと思い）無視して残りを実行するかもしれません、 `window.productionMode` が `undefined` と評価されて安全ではないデバッグコードを実行させる原因となることが考えられます。

`X-XSS-Protection` ヘッダーを `0` または `1; mode=block` のいずれかに設定すると、上記のような脆弱性を防ぐことができます。前者はブラウザーがすべてのスクリプトを実行するようにし、後者はページがまったく処理されないようにします（ただし、この手法はウェブサイトが `<iframe>` に埋め込まれている場合は、[サイドチャネル攻撃](https://portswigger.net/research/abusing-chromes-xss-auditor-to-steal-tokens)に対して脆弱になる可能性があります）。

## 例

XSS 攻撃が反映されたページを見つけたらその読み込みをブロックする場合。

```http
X-XSS-Protection: 1; mode=block
```

PHP

```php
header("X-XSS-Protection: 1; mode=block");
```

Apache (.htaccess)

```
<IfModule mod_headers.c>
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

Nginx

```
add_header "X-XSS-Protection" "1; mode=block";
```

## 仕様書

仕様書や草案で定義されたものではありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- [Controlling the XSS Filter – Microsoft](https://docs.microsoft.com/archive/blogs/ieinternals/controlling-the-xss-filter)
- [Understanding XSS Auditor – Virtue Security](https://www.virtuesecurity.com/understanding-xss-auditor/)
- [The misunderstood X-XSS-Protection – blog.innerht.ml](https://blog.innerht.ml/the-misunderstood-x-xss-protection/)

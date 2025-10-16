---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"content_security_policy": "default-src 'self'"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

拡張機能には、既定でコンテンツセキュリティポリシー (CSP) が適用されます。既定のポリシーでは、 [\<script>](/ja/docs/Web/HTML/Reference/Elements/script) や [\<object>](/ja/docs/Web/HTML/Reference/Elements/object) リソースを読み込むソースを制限し、 [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) のような潜在的に安全でない可能性がある行為を禁止しています。この実装のより詳細は[既定のコンテンツセキュリティポリシー](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy)を見てください。

`"content_security_policy"` manifest キーを使用して、アドオンのセキュリティを緩くしたり逆にもっと制限することができます。 このキーは、 HTTP の Content-Security-Policy ヘッダーと同じ方法で指定されます。 CSP の構文の一般的な説明は [CSP の使用](/ja/docs/Web/HTTP/Guides/CSP)を見てください。

例として以下のような使用方法が可能です。

- URL を{{CSP("script-src")}} や {{CSP("object-src")}} ディレクティブで指定することで、拡張機能にパッケージ外からスクリプトやオブジェクトの読み込みを許可する。
- [`"script-src"` ディレクティブでスクリプトのハッシュを指定する](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script)ことで、拡張機能にインラインスクリプトの実行を許可する。
- 拡張機能に `eval()` や類似する機能を許可するために、 `'unsafe-eval'` を {{CSP("script-src")}} ディレクティブの中に入れる
- 適切な[ポリシーディレクティブ](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)を使うことで、その他のコンテンツを許可されたソースのみ、例えば画像やスタイルシートのみに制限する。

指定できるポリシーには以下のような制限があります。

- ポリシーは少なくとも {{CSP("script-src")}} および {{CSP("object-src")}} ディレクティブを含む必要があり、 {{CSP("script-src")}} ディレクティブは `'self'` キーワードを含まなければならない。
- 外部のソースを使用する場合は `https:` スキームを使用しなければならない。
- [public suffix list](https://publicsuffix.org/list/) 内のドメインのリモートリソースはワイルドカードを使用禁止 (よって "\*.co.uk" と "\*.blogspot.com" は許可されないが、 "\*.foo.blogspot.com" は許可される)。
- すべてのソースはホストを指定しなければならない。
- `blob:`, `filesystem:`, `moz-extension:`, `https:` スキームのリソースのみ指定することができる。
- [キーワード](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src#sources)は `'none'`, `'self'`, `'unsafe-eval'` のみ許可されている。

## 例

### 有効な例

"https\://example.com" からのリモートスクリプトを許可: (_注_ [1](#examplenote_1) を参照)

```json
"content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
```

"jquery.com" のサブドメインからのリモートスクリプトを許可:

```json
"content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
```

[`eval()` や類似する機能](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends)を許可:

```json
"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
```

インラインスクリプト `"<script>alert('Hello, world.');</script>"` を許可:

```json
"content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
```

他のポリシーはそのままだが、画像は拡張機能にパッケージされていることを要求する:

```json
"content_security_policy": "script-src 'self'; object-src 'self'; img-src 'self'"
```

すべてのコンテンツが拡張機能にパッケージされていることを要求する:

```json
"content_security_policy": "default-src 'self'"
```

### 無効な例

`"object-src"` ディレクティブが省略されているポリシー:

```json
"content_security_policy": "script-src 'self' https://*.jquery.com;"
```

`"script-src"` ディレクティブにおいて `"self"` キーワードが入っていないポリシー:

```json
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

リモートソーススキームが `https` ではない:

```json
"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"
```

ワイルドカードを通常のドメインに使用している:

```json
"content_security_policy": "script-src 'self' https://*.blogspot.com; object-src 'self'"
```

リモートソーススキームは https だがホスト名がない:

```json
"content_security_policy": "script-src 'self' https:; object-src 'self'"
```

ディレクティブに現在サポートしていない `'unsafe-inline'`キーワードが含まれている:

```json
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

1\. _注: 有効な例は正しい CSP のキーの使い方を表しますが、'unsafe-eval', 'unsafe-inline', リモートスクリプト、リモートソースを CSP に指定する拡張機能は、主なセキュリティの問題から、addons.mozilla.org に載せる拡張機能には許可されません。_

## ブラウザーの互換性

{{Compat}}

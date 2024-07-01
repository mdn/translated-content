---
title: Referrer-Policy
slug: Web/HTTP/Headers/Referrer-Policy
---

{{HTTPSidebar}}

**`Referrer-Policy`** は {{glossary("HTTP header", "HTTP ヘッダー")}}で、 ({{HTTPHeader("Referer")}} ヘッダーで送られる) [リファラー情報](/ja/docs/Web/Security/Referer_header:_privacy_and_security_concerns)をリクエストにどれだけ含めるかを制御します。 HTTP ヘッダーのほかに、 [HTML でこのポリシーを設定する](#html_との統合)こともできます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url
```

> **メモ:** 元のヘッダー名である {{HTTPHeader("Referer")}} は "referrer" という語のスペルミスです。 `Referrer-Policy` ヘッダーはこのスペルミスをしていません。

## ディレクティブ

- `no-referrer`
  - : {{HTTPHeader("Referer")}} ヘッダーが省略されます。送信されるリクエストにはリファラー情報が含まれません。
- `no-referrer-when-downgrade`
  - : プロトコルのセキュリティ水準が同一である、または向上する場合 (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS) は、{{glossary("origin", "オリジン")}}、パス、クエリー文字列が {{HTTPHeader("Referer")}} ヘッダーで送信されます。セキュリティ水準が低下するリクエスト (HTTPS→HTTP, HTTPS→file) では {{HTTPHeader("Referer")}} ヘッダーが送信されません。
- `origin`
  - : {{glossary("origin", "オリジン")}}のみが {{HTTPHeader("Referer")}} ヘッダーで送信されます。
    たとえば、 `https://example.com/page.html` にある文書からは、 `https://example.com/` というリファラーが送信されます。
- `origin-when-cross-origin`
  - : 同一のプロトコル水準 (HTTP→HTTP, HTTPS→HTTPS) で{{glossary("Same-origin_policy", "同一オリジン")}}のリクエストを行う場合は{{glossary("origin", "オリジン")}}、パス、クエリー文字列を送信します。オリジン間リクエストや安全性の低下する移動先 (HTTPS→HTTP) ではオリジンのみを送信します。
- `same-origin`
  - : {{glossary("Same-origin_policy", "同一オリジン")}}のリクエストでは{{glossary("origin", "オリジン")}}、パス、クエリー文字列を送信します。オリジン間リクエストでは {{HTTPHeader("Referer")}} ヘッダーを送信しません。
- `strict-origin`
  - : プロトコルのセキュリティ水準が同じである場合 (HTTPS→HTTPS) にのみオリジンを送信します。安全性の低下する移動先 (HTTPS→HTTP) には {{HTTPHeader("Referer")}} ヘッダーを送信しません。
- `strict-origin-when-cross-origin` (既定値)

  - : 同一オリジンのリクエストを行う際はオリジン、パス、クエリー文字列を送信します。オリジン間リクエストでは、プロトコルのセキュリティ水準が同じである場合 (HTTPS→HTTPS) にのみオリジンを送信します。安全性の低下する移動先 (HTTPS→HTTP) には {{HTTPHeader("Referer")}} ヘッダーを送信しません。

    > **メモ:** これはポリシーが指定されていない場合や、与えられた値が無効であった場合の既定のポリシーです (仕様書改訂 [November 2020](https://github.com/whatwg/fetch/pull/1066) を参照) 。以前の既定値は `no-referrer-when-downgrade` でした。

- `unsafe-url`

  - : セキュリティに関係なく、どのリクエストを行った場合でも、オリジン、パス、クエリー文字列を送信します。

    > **警告:** このポリシーは、 HTTPS リソースの URL から安全ではないオリジンへプライベートである可能性がある情報を漏洩します。設定する場合は影響をよく検討してください。

## HTML との統合

HTML 内でリファラーポリシーを設定することもできます。例えば、 {{HTMLElement("meta")}} 要素で [name](/ja/docs/Web/HTML/Element/meta#attr-name) に `referrer` を設定することで、文書全体のリファラーポリシーを設定することができます。

```html
<meta name="referrer" content="origin" />
```

{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}}, {{HTMLElement("link")}} の各要素に `referrerpolicy` 属性を指定し、個別のリクエストにリファラーポリシーを設定することもできます。

```html
<a href="http://example.com" referrerpolicy="origin"></a>
```

他に、 `noreferrer` [link 関係](/ja/docs/Web/HTML/Link_types)を `a`, `area`, `link` の各要素に設定することもできます。

```html
<a href="http://example.com" rel="noreferrer"></a>
```

> **警告:** 上記のように、 `noreferrer` link 関係はダッシュ記号を用いずに記述されます。 {{HTMLElement("meta")}} 要素で文書全体のリファラーポリシーを指定するときはダッシュを<em>つけて</em> `<meta name="referrer" content="no-referrer">` のように記述します。

## CSS との統合

CSS はスタイルシートから参照されるリソースにアクセスすることがあります。これらのリソースは同様にリファラーポリシーに従います。

- 外部の CSS スタイルシートでは、そのレスポンスの `Referrer-Policy` ヘッダーにより上書きされない限り、既定のポリシー (`strict-origin-when-cross-origin`) が使用されます。
- {{HTMLElement("style")}} 要素または [`style` 属性](/ja/docs/Web/API/HTMLElement/style)については、所有者の文書のリファラーポリシーが使用されます。

## 例

### `no-referrer`

| 基点の文書                 | 移動先         | 使用されるリファラー |
| -------------------------- | -------------- | -------------------- |
| `https://example.com/page` | _すべての場所_ | _（リファラーなし）_ |

### `no-referrer-when-downgrade`

| 基点の文書                 | 移動先                          | 使用されるリファラー       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/page` |
| `https://example.com/page` | **http**://example.com          | _（リファラーなし）_       |

### `origin`

| 基点の文書                 | 移動先         | 使用されるリファラー   |
| -------------------------- | -------------- | ---------------------- |
| `https://example.com/page` | _すべての場所_ | `https://example.com/` |

### `origin-when-cross-origin`

| 基点の文書                 | 移動先                          | 使用されるリファラー       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com/page     | `https://example.com/`     |

### `same-origin`

| 基点の文書                 | 移動先                          | 使用されるリファラー       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | _（リファラーなし）_       |

### `strict-origin`

| 基点の文書                  | 移動先                 | 使用されるリファラー   |
| --------------------------- | ---------------------- | ---------------------- |
| `https://example.com/page`  | `https://mozilla.org`  | `https://example.com/` |
| `https://example.com/page`  | **http**://example.com | _（リファラーなし）_   |
| **http**://example.com/page | _すべての場所_         | `http://example.com/`  |

### `strict-origin-when-cross-origin`

| 基点の文書                 | 移動先                          | 使用されるリファラー       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com          | _（リファラーなし）_       |

### `unsafe-url`

| 基点の文書                       | 移動先         | 使用されるリファラー             |
| -------------------------------- | -------------- | -------------------------------- |
| `https://example.com/page?q=123` | _すべての場所_ | `https://example.com/page?q=123` |

### 代替ポリシーの指定

必要なポリシーのブラウザーの対応状況が十分ではなく、代替ポリシーを設定したい場合は、カンマ区切りのリストを使用し、必要なポリシーを最後に指定してください。

```
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

上記のシナリオでは、 `no-referrer` はブラウザーが `strict-origin-when-cross-origin` に対応していない場合のみ使用されます。

> **メモ:** 複数の値を設定する方法は、 HTTP の `Referrer-Policy` ヘッダーのみが対応しており、 `referrerpolicy` 属性では対応していません。

## ブラウザー固有の設定

### Firefox の設定

Firefox のユーザー設定では*既定の*リファラーポリシーを構成できます。設定名はバージョンにより異なります。

- Firefox バージョン 59以降: `network.http.referer.defaultPolicy` (プライベートネットワークでは `network.http.referer.defaultPolicy.pbmode`)
- Firefox バージョン 53 から 58: `network.http.referer.userControlPolicy`

どちらも `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade` と、同じ設定値をとります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブセキュリティ > Referer ヘッダー: プライバシーとセキュリティの考慮事項](/ja/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
- [Wikipedia の HTTP リファラ](https://ja.wikipedia.org/wiki/HTTPリファラ)
- [Fetch](/ja/docs/Web/API/Fetch_API) の使用時: {{domxref("Request.referrerPolicy")}}
- 廃止された {{HTTPHeader("Content-Security-Policy")}} の {{HTTPHeader("Content-Security-Policy/referrer", "referrer")}} {{deprecated_inline}} ディレクティブ
- [同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)

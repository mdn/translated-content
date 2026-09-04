---
title: Link ヘッダー
short-title: Link
slug: Web/HTTP/Reference/Headers/Link
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Link`** ヘッダーは、 HTTP ヘッダー内の 1 つ以上のリンクをシリアル化する手段を提供します。
これにより、サーバーはクライアントに対し、リクエストされたリソースに関するメタデータを含む別のリソースを指定することができます。
このヘッダーは、HTML の {{HTMLElement("link")}} 要素と同じ意味を持ちます。
`Link` ヘッダーを使用する利点の一つは、HTML 自体が取得・処理される前に、ブラウザーがリソースの事前接続や事前読み込みを開始できることです。

実際には、ほとんどの [`rel` リンク型](/ja/docs/Web/HTML/Reference/Attributes/rel)は、HTTP ヘッダーと併用しても効果を発揮しません。
たとえば、`icon` 関連は HTML でのみ機能し、`stylesheet` はブラウザーが異なると確実に機能するとは限りません（Firefox でのみ機能します）。
確実に機能する関連は、[`preconnect`](/ja/docs/Web/HTML/Reference/Attributes/rel/preconnect) と [`preload`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) のみで、これらは {{HTTPStatus(103, "103 Early Hints")}} と組み合わせることができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}, {{Glossary("Request header", "リクエストヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Link: <uri-reference>; param1=value1; param2="value2"
```

- `<uri-reference>`
  - : URI 参照。 `<` と `>` で囲み、 {{Glossary("Percent-encoding", "パーセントエンコード")}}する必要があります。

### 引数

リンクヘッダーには `;` で区切られた引数が含まれており、 {{HTMLElement("link")}} 要素の属性に相当します。
[フィールド値の構成要素に関する規則](https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.6)に基づき、値は引用符で囲んでも、囲まなくても構いません。したがって、`x=y` は `x="y"` と同等です。

## 例

### URL を角括弧で囲む

URI （絶対または相対）は `<` と `>` で囲む必要があります。

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### URL のエンコーディング

URI （絶対または相対）では、255 より大きい文字コードを{{Glossary("Percent-encoding", "パーセントエンコード")}}する必要があります。

```http example-good
Link: <https://example.com/%E8%8B%97%E6%9D%A1>; rel="preconnect"
```

```http example-bad
Link: <https://example.com/苗条>; rel="preconnect"
```

### 複数リンクを指定

カンマで区切られた複数のリンクを指定できます。次に例を示します。

```http
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

### リンクによるページネーション

`Link` ヘッダーは、クライアントにページネーション情報を提供することができ、これは通常、プログラムによるリソースへのアクセスに使用されます。

```http
Link: <https://api.example.com/issues?page=2>; rel="prev", <https://api.example.com/issues?page=4>; rel="next", <https://api.example.com/issues?page=10>; rel="last", <https://api.example.com/issues?page=1>; rel="first"
```

この場合、`rel="prev"` and `rel="next"` は、前のページと次のページへのリンク関係を示しており、検索結果の最初のページと最後のページを示す `rel="last"` および `rel="first"` 引数もあります。

### 取得の優先度の制御

[`preload`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) を使用してリソースをできるだけ早く取得しようとしても、コンテンツの種類によって、ブラウザーの内部的な優先順位に基づいて取得されるタイミングが早くなったり遅くなったりします。
[`fetchpriority`](/ja/docs/Web/HTML/Reference/Elements/link#fetchpriority) 属性を使用すると、特定のリソースが、同じ種類の他のリソースに比べてユーザー体験に与える相対的な影響が大きい、あるいは小さいことをブラウザーに示唆することができます。

たとえば、以下のヘッダーを使用すると、`style.css` を他のスタイルシートよりも優先度高く事前読み込みすることができます。

```http
Link: </style.css>; rel=preload; as=style; fetchpriority="high"
```

リソースの取得に関する内部的な優先順位付けと、`fetchpriority` ディレクティブの効果は、いずれもブラウザーに左右される点に注意してください。
`fetchpriority` ディレクティブは控えめに使用し、特定のリソースを異なる優先順位で扱うべきであることをブラウザーが推測できない場合にのみ使用すべきです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPStatus("103", "103 Early Hints")}}
- {{HTMLElement("link")}}
- [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml) IANA レジストリー
- [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) - この API が Chrome における優先順位にどのような影響を与えるかに関する情報

---
title: "CSP: default-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/default-src
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`default-src`** ディレクティブは、他の CSP の{{Glossary("fetch directive", "フェッチディレクティブ")}}の代替として提供します。以下のディレクティブがいずれかが存在しないと、ユーザーエージェントは `default-src` ディレクティブを探して、この値を使用します。

- {{CSP("child-src")}}
- {{CSP("connect-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("prefetch-src")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{CSP("worker-src")}}

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
  </tbody>
</table>

## 構文

```http
Content-Security-Policy: default-src 'none';
Content-Security-Policy: default-src <source-expression-list>;
```

このディレクティブは、次のいずれかの値を指定することができます。

- `'none'`
  - : リソースは読み込まれません。単一引用符は必須です。
- `<source-expression-list>`
  - : ソース表現の値を空白で区切ったリストです。この種類のリソースは、指定されたソース表現のいずれかと一致した場合に読み込まれます。このディレクティブでは、[フェッチディレクティブの構文](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#フェッチディレクティブの構文)に掲載されているソース表現のいずれかが適用できます。

## 例

### default-src で継承されない場合

他のディレクティブが指定されている場合、`default-src` は影響しません。以下のヘッダー、

```http
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

これは、下記のものと同じです。

```http
Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://example.com;
                         style-src 'self';
                         worker-src 'self'
```

### Firefox の `default-src: none` における SVG スプライトのブロック問題

> [!NOTE]
> この問題は Firefox 132 で修正されました。[バグ 1773976](https://bugzil.la/1773976) を参照してください。

CSP を作成する際には、まず `default-src 'none'` と指定してリソース読み込みをすべて制限し、その後、ポリシーを開放するディレクティブを追加して、必要なリソースのみを読み込むことができます。例えば、画像のみの同一オリジン読み込みを許可するには、次のようにします。

```http
Content-Security-Policy: default-src 'none'; img-src 'self'
```

しかし、ここで問題があります。例えば、 [`<use>`](/ja/docs/Web/SVG/Reference/Element/use) 要素を使用して外部ファイルで定義された SVG スプライトを埋め込む場合、

```svg
<svg>
  <use href="/images/icons.svg#icon"/>
</svg>
```

SVG 画像は、`default-src 'none'` ポリシーを設定していると、 Firefox でブロックされます。 Firefox は、他のブラウザーがそうであるように、 SVG を埋め込み画像として扱わないため、 `img-src 'self'` では読み込むことができません。 Firefox で外部スプライトを読み込むには、 `default-src 'self'` を使用する必要があります。

あるいは、`default-src 'none'` ポリシーが厳格な要件である場合は、SVG スプライトを HTML ページにインラインで埋め込むことができます。

```html
<body>
  <svg style="display: none">
    <symbol id="icon" viewBox="0 0 24 24">
      <path d="…" />
    </symbol>
  </svg>
  …
  <svg>
    <use href="#icon" />
  </svg>
</body>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- CSP ディレクティブ (<https://www.w3.org/TR/CSP/#csp-directives>):
  - {{Glossary("Fetch directive", "フェッチディレクティブ")}}
  - {{Glossary("Document directive", "文書ディレクティブ")}}
  - {{Glossary("Navigation directive", "ナビゲーションディレクティブ")}}
  - {{Glossary("Reporting directive", "報告ディレクティブ")}}
  - [`upgrade-insecure-requests`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`block-all-mixed-content`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/block-all-mixed-content)

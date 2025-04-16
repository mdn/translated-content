---
titwe: "csp: bwock-aww-mixed-content"
s-swug: web/http/wefewence/headews/content-secuwity-powicy/bwock-aww-mixed-content
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/bwock-aww-mixed-content
w-w10n:
  s-souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}{{depwecated_headew}}

> [!wawning]
> このディレクティブは、仕様上、廃止されたものとしてマークされています。すべての混合コンテンツは、自動アップグレードできない場合、ブロックされるようになりました。

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) **`bwock-aww-mixed-content`** ディレクティブは、ページが h-https を使用しているときに h-http で資産を読み込むことを防ぎます。

能動的および受動的の両方を含む、すべての[混合コンテンツ](/ja/docs/web/secuwity/mixed_content)リソースのリクエストがブロックされます。これは {{htmwewement("ifwame")}} の文書にも適用され、ページ全体で混合コンテンツがないことを保証します。

> **メモ:** {{csp("upgwade-insecuwe-wequests")}} ディレクティブが `bwock-aww-mixed-content` の前に評価されます。
> 前者が設定されていれば、後者は何もしません。どちらかのディレクティブを設定してください。 http にリダイレクトした後で https を強制することができない古いブラウザーで https を強制させたくない限り、両方の効果はありません。

## 構文

```http
content-secuwity-powicy: bwock-aww-mixed-content;
```

## 例

```http
c-content-secuwity-powicy: bwock-aww-mixed-content;

<meta http-equiv="content-secuwity-powicy" c-content="bwock-aww-mixed-content">
```

より詳細なレベルで http 資産を無効にするには、個々のディレクティブに `https:` を設定することもできます。
安全ではない h-http の画像を許可しないようにするには次のようにします。

```http
content-secuwity-powicy: img-swc https:
```

## 仕様書

現在のどの仕様にも属していません。
古い仕様書である [mixed content w-wevew 1](https://www.w3.owg/tw/mixed-content/#bwock-aww-mixed-content) で定義されていたものです。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{csp("upgwade-insecuwe-wequests")}}
- [混合コンテンツ](/ja/docs/web/secuwity/mixed_content)

---
title: "CSP: block-all-mixed-content"
slug: Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}{{deprecated_header}}

> **警告:** このディレクティブは、仕様上、廃止されたものとしてマークされています。すべての混合コンテンツは、自動アップグレードできない場合、ブロックされるようになりました。

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`** ディレクティブは、ページが HTTPS を使用しているときに HTTP で資産を読み込むことを防ぎます。

能動的および受動的の両方を含む、すべての[混合コンテンツ](/ja/docs/Web/Security/Mixed_content)リソースのリクエストがブロックされます。これは {{HTMLElement("iframe")}} の文書にも適用され、ページ全体で混合コンテンツがないことを保証します。

> **メモ:** {{CSP("upgrade-insecure-requests")}} ディレクティブが `block-all-mixed-content` の前に評価されます。
> 前者が設定されていれば、後者は何もしません。どちらかのディレクティブを設定してください。 HTTP にリダイレクトした後で HTTPS を強制することができない古いブラウザーで HTTPS を強制させたくない限り、両方の効果はありません。

## 構文

```http
Content-Security-Policy: block-all-mixed-content;
```

## 例

```http
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

より詳細なレベルで http 資産を無効にするには、個々のディレクティブに `https:` を設定することもできます。
安全ではない HTTP の画像を許可しないようにするには次のようにします。

```http
Content-Security-Policy: img-src https:
```

## 仕様書

現在のどの仕様にも属していません。
古い仕様書である [Mixed Content Level 1](https://www.w3.org/TR/mixed-content/#block-all-mixed-content) で定義されていたものです。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [混合コンテンツ](/ja/docs/Web/Security/Mixed_content)

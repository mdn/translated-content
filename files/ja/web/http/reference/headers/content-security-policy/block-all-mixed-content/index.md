---
title: "CSP: block-all-mixed-content"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/block-all-mixed-content
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{deprecated_header}}

> [!WARNING]
> このディレクティブは、仕様上、廃止されたものとして位置づけられています。
> このディレクティブは、以前は「オプションでブロック可能な」混在コンテンツを安全でない方法で取得し、表示することを防ぐために使用されていました。
> ブロックされないコンテンツは、常に保護された接続にアップグレードするようになったので、このディレクティブは必要ありません。

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`** ディレクティブは、ページが HTTPS を使用しているときに HTTP で資産を読み込むことを防ぎます。

すべての[混在コンテンツ](/ja/docs/Web/Security/Defenses/Mixed_content)のリソースのリクエストは、ブロック可能であるものやアップグレード可能であるものを含め、ブロックされます。これは {{HTMLElement("iframe")}} の文書にも適用され、ページ全体で混在コンテンツがないことを保証します。

> [!NOTE]
> {{CSP("upgrade-insecure-requests")}} ディレクティブが `block-all-mixed-content` の前に評価されます。
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
古い仕様書である [Mixed Content Level 1](https://www.w3.org/TR/2015/CR-mixed-content-20150317/#strict-opt-in) で定義されていたものです。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [混在コンテンツ](/ja/docs/Web/Security/Defenses/Mixed_content)

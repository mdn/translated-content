---
title: ウェブアプリマニフェスト
short-title: マニフェスト
slug: Web/Progressive_web_apps/Manifest
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/Manifest/Reference")}}

**ウェブアプリマニフェスト**は、 [Web Application Manifest](https://w3c.github.io/manifest/) 仕様書で定義されており、ウェブアプリケーションについての情報を提供する {{Glossary("JSON")}} テキストファイルです。

ウェブアプリマニフェストの最も一般的な用途は、ブラウザーが[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) を端末にインストールする際に必要な情報（アプリ名やアイコンなど）を提供することです。

ウェブアプリケーションマニフェストには、単一の JSON オブジェクトが含まれており、最も上位のキーは「メンバー」と呼ばれています。

## メンバー

この節では、マニフェストに記載される可能性のあるメンバーを紹介します。

すべてのメンバーは仕様上は任意ですが、用途によっては一部のメンバーの存在が必要になる場合があります。例えば、 [PWA では特定のマニフェストメンバーを提供する必要があります](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members)。

{{ListSubpages("/ja/docs/Web/Progressive_web_apps/Manifest/Reference")}}

> [!NOTE]
> `dir`、`lang`、`iarc_rating_id` の各メンバーは実装されていません。

## マニフェストの例

```json
{
  "short_name": "MDN",
  "name": "MDN Web Docs",
  "icons": [
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

## マニフェストの展開

ウェブアプリマニフェストは、文書の {{HTMLElement("head")}} 内の {{HTMLElement("link")}} 要素を使用して HTML ページから展開されます。

```html
<link rel="manifest" href="manifest.json" />
```

`.webmanifest` の拡張子が仕様書の [Media type registration](https://w3c.github.io/manifest/#media-type-registration) の節で指定されています（マニフェストファイルのレスポンスは `Content-Type: application/manifest+json` を返してください）。ブラウザーは一般に `.json` (`Content-Type: application/json`) のような他の適切な拡張子でもマニフェストに対応します。

マニフェストへのアクセスに資格情報が必要な場合は、マニフェストファイルが現在のページと同じオリジンにあったとしても、 [`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) 属性を `use-credentials` に設定する必要があります。

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## スプラッシュ画面

ブラウザーやオペレーティングシステムによっては、インストール済みの PWA を起動するとスプラッシュ画面が表示される場合があります。このスプラッシュ画面は自動的に生成され、その外観はウェブアプリマニフェストのメンバー、具体的には下記のものによって定義されます。

- [`name`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`background_color`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
- [`icons`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/icons)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プログレッシブウェブアプリ (PWA)](/ja/docs/Web/Progressive_web_apps)

---
title: ウェブアプリマニフェスト
slug: Web/Manifest
---

{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}

**ウェブアプリマニフェスト**は、[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) と呼ばれる一連のウェブ技術の一部であり、アプリストアを通さずに端末のホーム画面にインストールすることができるものです。単純なホーム画面リンクやブックマークを持つ通常のウェブアプリとは異なり、 PWA は事前にダウンロードしてオフラインでも動作するだけでなく、通常の [Web API](/ja/docs/Web/API) を使用することもできます。

ウェブアプリマニフェストは、ウェブアプリケーションについて、ウェブアプリをダウンロードしたり、ユーザーにネイティブアプリと同じように見せる（例えば、端末のホーム画面にインストールされ、ユーザーに素早いアクセスと豊かな操作性を提供するなどの）ために必要な情報を {{Glossary("JSON")}} テキストファイルで提供します。 PWA のマニフェストには、その名前、作者、アイコン、バージョン、説明、および (他のものの中で特に) 必要なすべてのリソースのリストが含まれています。

## メンバー

ウェブマニフェストには、以下のキーを設定することができます。それぞれのリンクをクリックすると詳細情報を見ることができます。

{{ListSubpages("/ja/docs/Web/Manifest")}}

## マニフェストの例

```json
{
  "$schema": "https://json.schemastore.org/web-manifest-combined.json",
  "name": "HackerWeb",
  "short_name": "HackerWeb",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#fff",
  "description": "読みやすいハッカーニュースアプリです。",
  "icons": [
    {
      "src": "images/touch/homescreen48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen168.png",
      "sizes": "168x168",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
    }
  ]
}
```

## マニフェストの展開

ウェブアプリマニフェストは、文書の {{HTMLElement("head")}} 内の {{HTMLElement("link")}} 要素を使用して HTML ページから展開されます。

```html
<link rel="manifest" href="manifest.json" />
```

`.webmanifest` の拡張子が仕様書の [Media type registration](https://w3c.github.io/manifest/#media-type-registration) の節で指定されています（マニフェストファイルのレスポンスは `Content-Type: application/manifest+json` を返してください）。ブラウザーは一般に `.json` (`Content-Type: application/json`) のような他の適切な拡張子でもマニフェストに対応します。

マニフェストへのアクセスに資格情報が必要な場合は、マニフェストファイルが現在のページと同じオリジンにあったとしても、 [`crossorigin`](/ja/docs/Web/HTML/Attributes/crossorigin) 属性を `use-credentials` に設定する必要があります。

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## スプラッシュ画面

一部のブラウザー（例えば Chrome 47 以降）では、ホーム画面からサイトが起動されるとスプラッシュ画面が表示されます。スプラッシュ画面はウェブアプリマニフェストのプロパティから、具体的には以下のように自動生成されます。

- [`name`](/ja/docs/Web/Manifest/name)
- [`background_color`](/ja/docs/Web/Manifest/background_color)
- [`icons`](/ja/docs/Web/Manifest/icons) の配列中のアイコンで、端末の 128dpi に最も近いもの。

## 仕様書

| 仕様書                                             |
| -------------------------------------------------- |
| [Web App Manifest](https://w3c.github.io/manifest) |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プログレッシブウェブアプリ (PWA)](/ja/docs/Web/Progressive_web_apps)

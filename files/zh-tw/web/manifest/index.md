---
title: Web 應用程式清單
slug: Web/Manifest
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/zh-TW/docs/Web/Manifest/Reference")}}

**Web 應用程式清單**，定義於 [Web 應用程式清單](https://w3c.github.io/manifest/)規範中，是一個提供有關 Web 應用程式的訊息的 {{Glossary("JSON")}} 文字檔案。

Web 應用程式清單最常見的用途是提供瀏覽器在裝置上安裝[漸進式 Web 應用程式](/zh-TW/docs/Web/Progressive_web_apps)（PWA）所需的訊息，例如應用程式的名稱和圖示。

Web 應用程式清單包含一個單一的 JSON 物件，其中頂層鍵稱為*成員*。

## 成員

本節列出了可能出現在清單中的成員。

規範中所有成員都是可選的，但某些應用程式需要某些成員存在。例如，[PWA 必須提供某些清單成員](/zh-TW/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#必須的清單成員)。

{{ListSubpages("/zh-TW/docs/Web/Manifest/Reference")}}

> **備註：** `dir`、`lang` 和 `iarc_rating_id` 成員尚未實作。

## 範例清單

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

## 部署清單

在 HTML 頁面中，Web 應用程式清單是透過 {{HTMLElement("link")}} 元素部署的，該元素應該放置在文件的 {{HTMLElement("head")}} 區塊內：

```html
<link rel="manifest" href="manifest.json" />
```

`.webmanifest` 副檔名在規範的[媒體類型註冊](https://w3c.github.io/manifest/#media-type-registration)部分中指定（清單檔案的回應應返回 `Content-Type: application/manifest+json`）。瀏覽器通常支援具有其他適當副檔名的清單，如 `.json`（`Content-Type: application/json`）。

如果清單需要憑證來獲取，則必須將 [`crossorigin`](/zh-TW/docs/Web/HTML/Attributes/crossorigin) 屬性設置為 `use-credentials`，即使清單檔案與當前頁面在同一來源中也是如此。

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## 啟動畫面

在某些瀏覽器和作業系統中，啟動已安裝的 PWA 時會顯示啟動畫面。此啟動畫面是自動生成的，其外觀由 Web 應用程式清單中的成員定義，具體如下：

- [`name`](/zh-TW/docs/Web/Manifest/Reference/name)
- [`background_color`](/zh-TW/docs/Web/Manifest/Reference/background_color)
- [`icons`](/zh-TW/docs/Web/Manifest/Reference/icons)

## 瀏覽器相容性

{{Compat}}

## 參見

- [漸進式 Web 應用程式（PWA）](/zh-TW/docs/Web/Progressive_web_apps)

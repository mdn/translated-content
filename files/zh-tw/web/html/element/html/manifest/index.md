---
title: manifest
slug: Web/HTML/Element/html/manifest
---

{{securecontext_header}}{{Deprecated_Header}}

**`manifest`** 屬性是 `<html>` 元素的屬性，用於指定在頁面加載的早期階段下載的應用程序快取清單的 URL。

> **備註：** 基於清單的緩存機制已被棄用。請改用 [service workers](/zh-TW/docs/Web/API/Service_Worker_API)。

`manifest` 屬性只在頁面加載的早期階段才生效，因此通過常規 DOM 介面更改它是沒有效果的。已棄用的 {{domxref("Window.applicationCache")}} 介面被使用。該屬性的功能已被 [web app manifest](/zh-TW/docs/Web/Manifest) 取代，該文件是一個外部的 JSON 文件，通過帶有 [`rel="manifest"`](/zh-TW/docs/Web/HTML/Attributes/rel) 的 {{HTMLElement("link")}} 與 HTML 文件關聯。

## 瀏覽器相容性

{{Compat}}

## 參見

- [Service Worker API](/zh-TW/docs/Web/API/Service_Worker_API)
- [`manifest.json`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [Web app manifests](/zh-TW/docs/Web/Manifest)
- [Making PWAs installable](/zh-TW/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)

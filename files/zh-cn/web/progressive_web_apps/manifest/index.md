---
title: Web 应用清单
slug: Web/Progressive_web_apps/Manifest
l10n:
  sourceCommit: b3d5659a6f16dc6cb8be5c48d19820a67434ecb9
---

[Web 应用清单](https://w3c.github.io/manifest/)规范中定义的 **web 应用清单**是一个提供 web 应用信息的 {{Glossary("JSON")}} 文本文件。

Web 应用清单最常见的用途是提供浏览器在设备上安装[渐进式 web 应用](/zh-CN/docs/Web/Progressive_web_apps)（PWA）所需的信息，如应用程序的名称和图标。

web 应用清单包含一个 JSON 对象，其中的顶级键称为*成员*。

## 成员

本节列出了可能出现在清单中的成员。

在规范中，所有成员都是可选的，但有些应用要求某些成员必须存在。例如，[PWA 必须提供某些清单成员](/zh-CN/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#必需的清单成员)。

{{ListSubpages("/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference")}}

> [!NOTE]
> 部分成员，如 `dir`、`lang`、`iarc_rating_id` 和 `note_taking` 未经实现。

## 示例清单

```json
{
  "name": "HackerWeb",
  "short_name": "HackerWeb",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#fff",
  "description": "A readable Hacker News app.",
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

## 部署清单

web 应用清单可通过文档 {{HTMLElement("head")}} 中的 {{HTMLElement("link")}} 元素部署到 HTML 页面中：

```html
<link rel="manifest" href="manifest.json" />
```

规范的[媒体类型注册表](https://w3c.github.io/manifest/#media-type-registration)部分指定了 `.webmanifest` 扩展名（清单文件的响应需返回 `Content-Type: application/manifest+json`）。浏览器通常支持带有其他适当扩展名的清单，如 `.json`（`Content-Type: application/json`）。

如果清单需要凭据才能获取，则必须将 [`crossorigin`](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin) 属性设置为 `use-credentials`，即使清单文件与当前页面同源。

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## 启动画面

在某些浏览器和操作系统中，已安装的 PWA 启动时会显示启动画面。该启动画面是自动生成的，其外观由 web 应用清单中的成员定义，具体如下：

- [`name`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`background_color`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
- [`icons`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/icons)

## 浏览器兼容性

{{Compat}}

## 参见

- [渐进式 Web 应用（PWA）](/zh-CN/docs/Web/Progressive_web_apps)

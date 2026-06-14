---
title: 客户端渲染（CSR）
slug: Glossary/CSR
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**客户端渲染**（CSR）指的是在浏览器中使用 JavaScript 生成 HTML 内容的做法。CSR 与{{glossary("SSR", "服务器端渲染")}}相对，后者由服务器生成 HTML 内容。这两种技术并不互斥，可以在同一个应用中结合使用。

一个纯 CSR 应用可能会返回如下 HTML 内容：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <title>我的应用</title>
    <script src="bundle.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <noscript>
      <p>此应用需要 JavaScript 才能运行。</p>
    </noscript>
  </body>
</html>
```

随后，实际的页面内容由 `bundle.js` 中的 JavaScript 使用 [DOM 操作](/zh-CN/docs/Web/API/Document_Object_Model)生成。

CSR 的优点包括：

- 交互性：包括路由切换在内的任何页面更新都不需要整页重新加载。这让应用更快、更灵敏。
- 性能：服务器只需要发送初始 HTML 内容和 JavaScript 资源。后续页面更新可以从 API 获取，这可能比获取整页 HTML 更快，也能减轻服务器负载。

SSR 和 CSR 各有性能权衡，可以结合使用以兼顾两者优势。例如，服务器可生成带有空白占位符的页面骨架，客户端再获取额外数据并按需更新页面。

请注意，{{glossary("SPA", "单页应用")}}并不要求站点必须采用 CSR。现代框架（如 [React](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)、[Vue](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started) 和 [Svelte](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started)）都可用于构建具备 SSR 能力的 SPA。

## 参见

- [客户端框架简介 > 服务端渲染](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#服务端渲染)
- 维基百科上的[客户端渲染](https://en.wikipedia.org/wiki/Client-side_rendering)
- {{glossary("SSR", "服务器端渲染")}}
- {{glossary("SSG", "静态站点生成器")}}
- {{glossary("SPA", "单页应用")}}

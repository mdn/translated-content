---
title: 代码分割
slug: Glossary/Code_splitting
---

**代码分割（Code splitting）**是将代码划分为可以按需/同时加载的多个 bundles 或组件。

随着应用程序日趋复杂，或仅是对其进行简单的维护，CSS 和 JavaScripts 文件以及 bundles 的大小都会随之增加，尤其是所包含的第三方库的数量和大小的增长。为了避免下载巨大的文件，可以将脚本拆分为多个较小的文件。当前页面所需的代码能够立即加载，而另外的脚本可以在与页面或应用交互后懒加载（[lazy loaded](/zh-CN/docs/Glossary/Lazy_load)），页面性能因此提升。虽然代码的总量仍然相同（甚至可能大了几个字节），但是初次加载所需的代码数量减少了。

代码分割是由 [Webpack](https://webpack.js.org/) 和 [Browserify](https://browserify.org/) 等打包工具所支持的一项功能，这些打包工具能够创建在运行时动态加载的多个 bundles。

## 另请参见

- Bundling
- [Lazy loading](/zh-CN/docs/Web/Performance/Lazy_loading)
- [HTTP/2](/zh-CN/docs/Glossary/HTTP_2)
- [Tree shaking](/zh-CN/docs/Glossary/Tree_shaking)

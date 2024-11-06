---
title: Node.js
slug: Glossary/Node.js
l10n:
  sourceCommit: 70736395f85541545fc0b384f2d091e35cfeadae
---

{{GlossarySidebar}}

Node.js 是一个跨平台 {{Glossary("JavaScript")}} 运行环境，使开发者可以搭建服务器端的 JavaScript 应用程序。

## Node 包管理器（npm）

[npm](https://www.npmjs.com) 是一个与 Node.js 一并下载和捆绑的包管理器。其命令行（CLI）客户端 `npm` 可用于下载、配置和创建用于 Node.js 项目的包。下载的包可以通过 [ES import](/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 和 [CommonJS `require()`](https://zh.wikipedia.org/wiki/CommonJS) 导入，而无需包含它们下载到的依赖目录 `node_modules/`，因为 Node.js 在导入中未指定相对或绝对路径时会[解析](https://nodejs.org/api/modules.html#loading-from-node_modules-folders)包。

托管在 npm 上的包从注册表 [https://registry.npmjs.org/](https://registry.npmjs.org/) 下载，但 CLI 可以配置为使用任何兼容的实例。

## 参见

- 维基百科上的 [Node.js](https://zh.wikipedia.org/wiki/Node.js)
- [Node.js 官网](https://nodejs.org/)
- [API 参考文档](https://nodejs.org/api/)
- [教程](https://nodejs.org/documentation/tutorials/)
- [npm 文档](https://docs.npmjs.com/)

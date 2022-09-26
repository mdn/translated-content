---
title: 'Yari：MDN 的渲染平台'
slug: MDN/Yari
---

{{MDNSidebar}}

Yari 被用于渲染 MDN Web 文档。它采用了 [JAMStack](https://jamstack.org/) 架构，将存储在 GitHub 仓库中的 MDN 文档内容（包含元数据和宏调用）渲染为静态 HTML 文件，并快速和高效地提供这些文件。

MDN 核心的平台实际上包含两个 GitHub 仓库：

- [MDN content 仓库](https://github.com/mdn/content)——用于存储 MDN 文档的内容，同时还包含贡献历史和链接重定向等信息。如果你想为 MDN 的文档内容做出贡献，请访问这个仓库。
- [Yari 项目](https://github.com/mdn/yari)——这是用于渲染和展示 MDN content 中的文档的平台，同时它还处理其它相关的服务（如：账户）。如果你想为 MDN 的平台做出贡献，请访问这个仓库。

## 参见

- [MDN Web Docs evolves! Lowdown on the upcoming new platform](https://hacks.mozilla.org/2020/10/mdn-web-docs-evolves-lowdown-on-the-upcoming-new-platform/)——介绍平台变更的必要性以及新的架构。
- 深入了解 Yari：[Welcome Yari: MDN Web Docs has a new platform](https://hacks.mozilla.org/2020/12/welcome-yari-mdn-web-docs-has-a-new-platform/)——新平台发布的正式公告。

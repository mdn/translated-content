---
title: 拉取请求的提交和审查指南
slug: MDN/Community/Pull_requests
---

本文档描述了贡献者应如何对 MDN Web 文档进行更改，以及这些更改是如何进行审查并发布到网站上的。MDN Web 文档的内容更改包括：

- API 文档、CSS 属性、平台更新和内容添加的**日常改进**。这通常由 Mozilla、谷歌、Open Web Docs、三星的 MDN Web 文档员工以及社区志愿者完成。
- 对站点进行**小修复**和小更新，以修复拼写错误、语法问题和技术错误。这些问题通常由 MDN Web 文档的读者发现。
- **内容错误修复**，通常由志愿者完成，以关闭 [`mdn/content` 仓库中的议题（issue）](https://github.com/mdn/content/issues)（对于本地化内容则是 [`mdn/translated-content` 仓库](https://github.com/mdn/translated-content/issues)）。

无论内容更改是如何完成的，它们都会作为拉取请求提交到 GitHub 上。在发布到 MDN Web 文档之前，内容更改会经历以下阶段：

1. **提交更改**：作为拉取请求的作者，你可以通过创建拉取请求来提交更改。有关我们的流程的更多信息，请参阅[开始之前](#开始之前)、[创建拉取请求](#创建拉取请求)和[创建拉取请求后](#创建拉取请求后)这几部分。
2. **审查更改**：你的更改由 [MDN 成员和志愿者](#拉取请求审查流程)审查。有关更多详细信息，请参阅[拉取请求审查流程](#拉取请求审查流程)部分。
3. **查看已发布更改**：`mdn/content`（本地化内容则是 `mdn/translated-content`）更改的内容将在合并后的一天内通过每 24 小时一次的网站重新构建发布。

## 提交更改

### 价值观与参与指南

我们希望 MDN Web 文档成为一个我们都可以为之感到自豪的热情而又友好的社区。所有参与者都必须遵守我们的[行为准则](https://github.com/mdn/content/blob/main/CODE_OF_CONDUCT.md)，这意味着需要遵守 [Mozilla 社区参与准则](https://www.mozilla.org/zh-CN/about/governance/policies/participation/)。在创建拉取请求、撰写审查意见、与拉取请求作者或其他社区成员互动时，请保持礼貌和并使内容具有建设性。如果你或其他人遇到了可能违法或让你感到不安全、不受欢迎或不舒服的行为，我们鼓励你[报告此类行为](https://www.mozilla.org/zh-CN/about/governance/policies/participation/reporting/)。

### 开始之前

在你开始为 MDN Web 文档做出贡献之前，请阅读以下建议和指南。

**拉取请求必须解决或部分解决现有的议题**。我们之所以有此限制，是为了避免你开始任何其他人可能已经在做的任务。在你想要贡献的 [MDN 仓库](https://github.com/orgs/mdn/repositories)中搜索议题和拉取请求，并确认你想要开始的工作尚未有其他人正在进行。当寻求为 MDN 项目做出贡献时，你会发现自己处于以下情况之一：

- **如果你希望为该项目做出贡献**，你可以在任意 [MDN GitHub 仓库](https://github.com/orgs/mdn/repositories)的“议题（Issues）”（例如 [`mdn/content` 仓库的议题](https://github.com/mdn/content/issues)）下以及我们[公开的 GitHub 项目看板](https://github.com/orgs/mdn/projects)中找到任务。请确保议题未被分配给其他人，并且没有人已经为该任务创建拉取请求。标记为 `good first issue` 的议题是一个很好的起点。
- **如果你在 MDN 上发现了问题**，你应该首先创建一个议题。**在开始工作之前，议题需要维护者的回复**，以便你知道拉取请求所解决的问题是有效的，并且你的拉取请求将被接受。有关议题的更多信息，请参阅我们的 [GitHub 议题的社区页面](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here)。
- **如果你想提议新内容或新特性**，请通过 [GitHub 议题模板](https://github.com/mdn/mdn/issues/new/choose)“New content or feature suggestion”提交提议。

如果你不确定从哪里开始，请在 [Discord 服务器](/zh-CN/docs/MDN/Community/Communication_channels#discord_服务器)上与我们联系并寻求反馈。

### 创建拉取请求

当你准备好创建拉取请求时，请遵循以下指南：

- **拉取请求应该简短且集中于一个议题**：如果可以，请将相关的一组更改分成多个小的拉取请求。如果拉取请求变得太大，审查者可能会关闭它，并要求你为每个逻辑上属于一组的更改提交拉取请求。
- **添加更改的描述**：尽可能提供拉取请求的上下文和理由。
- **添加指向你要关闭的议题的链接**：在拉取请求的描述中，如果拉取请求完全解决了某个议题，请添加“Fixes”，如果它是一个相关的议题，请添加“Relates to”。有关在拉取请求中链接到议题的更多信息，请参阅 [GitHub 文档](https://docs.github.com/zh/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)。
- **添加“依赖”**：如果有必须先合并的拉取请求（例如，其他仓库中的代码示例），请添加依赖的链接。
- **将代码示例更改和内容更改放在一起**：这对于确保更新后的示例能够正确运行非常重要。如果你正在进行的内容更改会影响示例的使用方式，则应同时更新相关的代码示例。
- **添加审查员**：如果你已经知道谁应该审查你的拉取请求，你可以添加审查员，例如团队成员或主题所有者。
- **不要仅进行语法更改**：MDN Web 文档包含技术文档；除非语法不正确，否则你不应提议散文风格的更改。
- **不要在遵循特定格式的页面上不必要地添加或删除换行符。**
- **不要启用自动合并。**

### 创建拉取请求后

- **处理持续集成（CI）的错误**，这些错误是由 GitHub Actions 运行的自动化测试引起的（见 `.github/workflows`）。如果这些测试中的一个或多个失败，你有责任尝试解决它们。如果你不知道如何解决潜在的问题，请寻求帮助。
- **解决与主分支的合并冲突**，你有责任解决这些冲突。你可以通过将 `mdn/main` 分支合并到你的分支来解决这些冲突。有关更多信息，请参阅 GitHub 文档[关于使拉取请求保持同步](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync)。
- **对反馈做出响应**。这意味着你应该准备根据审查意见对拉取请求进行更改。如果进行了审查，但没有进行更改，那么拉取请求可能会被关闭。
- **对审查过程保持耐心**。MDN 组织收到了大量的拉取请求，团队可能需要一定的时间来审查你的贡献。
- **请不要重新打开已关闭的拉取请求**。如果你必须创建一个新的拉取请求，其可以引用已关闭的拉取请求。

## 拉取请求审查流程

当你创建拉取请求时，会基于 `CODEOWNERS` 文件自动分配审查员，但如果你想要请求特定的人进行审查，你可以手动[请求审查](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)。我们还使用拉取请求的自动标记来帮助我们对其进行分类。维护者可以进一步对拉取请求进行分类，并根据上下文添加任何其他标签，例如 `needs-info` 或 `on-hold`。

如果你想要审查拉取请求，但没有被列为审查员，你可以将自己添加为审查员。通过在拉取请求上发表评论，告知现有的审查员你打算开始审查是一种有礼貌的做法。

### 审查员和受理人

MDN Web 文档团队使用审查员（reviewer）和受理人（assignee）来跟踪拉取请求的状态。

- **审查员**是对拉取请求中的更改进行评估并为作者提供反馈的人。
- **受理人**是负责确保拉取请求不被阻塞的人。并非所有拉取请求都有受理人，但如果有，他们负责确保拉取请求的进展。受理人通过合并、关闭或自己进行解除阻塞工作来帮助工作的完成。

拉取请求的审查员或受理人负责合并更改。

在你开始审查之前，请检查拉取请求的描述，以确保没有人应该对其进行审查。确保所有持续集成测试都已成功完成，并且没有合并冲突。

如果有任何测试失败或存在合并冲突，请将此信息传达给作者；他们有责任解决这些问题。你可以将作者设置为**受理人**，以表示拉取请求在审查开始之前需要他们的注意。确保能够为作者提供帮助，特别是对于项目的新贡献者。

### 审查拉取请求

当涉及拉取请求的更改时，内容和散文必须遵循 [MDN 写作风格指南](/zh-CN/docs/MDN/Writing_guidelines/Writing_style_guide) ，示例代码必须遵循[代码风格指南](/zh-CN/docs/MDN/Writing_guidelines/Code_style_guide)。

在审查拉取请求时，你应该：

- **为拉取请求添加评论**，以便让作者知道你已经知道了这个拉取请求，并将开始审查。这是为了避免不必要的情况，即其他人同时开始审查拉取请求。
- **将审查范围限制**在拉取请求中的更改上。提出后续议题或拉取请求，以解决拉取请求未涵盖的其他改进。
- **寻求帮助**，如果你需要审查方面的技术帮助，请添加 `review-help-needed` 标签。
- **关闭包含不相关更改的拉取请求**，如果拉取请求过于复杂或包含多个不相关的更改。在这种情况下，请要求拉取请求的作者将其更改拆分成更细粒度的更改以提交。
- **平衡请求负载**，如果你的工作量已满，而没有时间进行审查。通知 `@core-yari-content` 团队，并询问是否有其他人可以接手。
- **不要在“依赖”未合并的情况下合并**拉取请求。

如果除了小的拼写错误和其他小问题之外，拉取请求看起来不错，你可能需要直接修复问题。如果拉取请求[已设置为允许更改](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)，你就可以这样做。建议使用[带有建议的评论](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-comments-to-a-pull-request)来修复小问题，因为它们可以一次性批量提交。

提交评论时，你有三个选项：**批准**（approve）、**评论**（comment）或**请求更改**（request changes）。下面的部分将解释每个选项应在何时使用。

### 请求更改

当你提供的反馈*需要*作者解决并由审查员重新审查才能批准和合并拉取请求时，请使用请求更改选项。

#### 评论

当你的反馈不是关键性的，且不需要重新审查时，请使用评论选项。简而言之，你相信作者和其他审查员会做出正确的判断。

#### 批准

当一切看起来都很好，且从你的角度来看准备好合并时，请使用批准选项。提交审查后，如果没有其他审查员或任何未解决的审查意见，你可以安全地合并拉取请求。

#### 遇到困难时该怎么办

如果你不理解内容更改，或者觉得它太大且太复杂，无法处理，请不要惊慌！向拉取请求的作者寻求帮助信息是一个很好的开始。

很少有情况需要你在没有警告的情况下审查一个大型、复杂的内容更改。但是，如果确实发生了这种情况，拉取请求的描述应该链接到一个解释背景信息的议题。

如果你仍然不确定，或者认为内容是可疑的，请联系 MDN Web 文档团队并寻求帮助。

### 作者和审查员的周转时间指南

这个部分为拉取请求作者和审查员提供了预期周转时间的详细信息。

- **审查**：拉取请求的审查员应该能够在 2 周内审查更改。在拉取请求打开后的 2 周内，审查员可以：
  - 留下评论，说明他们何时可以开始审查拉取请求
  - 寻求技术或资源方面的帮助
- **处理请求的更改**：拉取请求的作者应该能够在 4 周内回应或修复审查意见。如果拉取请求的作者无法在此期限内回应或修复审查意见，审查员可以执行以下操作之一：
  - 提交更改并合并拉取请求
  - 关闭拉取请求

### 外部审查员

MDN 内容仓库上的某些拉取请求与浏览器供应商或组织的特定工作相关联，这些工作由明确的作者和审查员完成。在这些情况下，作者将在拉取请求描述的底部的一行中包含审查员的用户名，例如：

```md
reviewer: @jpmedley
```

如果你收到审查请求，而且你已经被上述方式中的另一个审查员覆盖，请不要审查更改。一旦描述中提到的审查员批准了更改，他们将要求 `CODEOWNERS` 的批准。

## 阅读清单

我们鼓励审查员阅读以下文章，以帮助完成常见任务：

- [关闭的艺术](https://blog.jessfraz.com/post/the-art-of-closing/)解释了如何关闭未完成或被拒绝的拉取请求
- [善意和代码审查：改进我们提供反馈的方式](https://product.voxmedia.com/2018/8/21/17549400/kindness-and-code-reviews-improving-the-way-we-give-feedback)给出了提供反馈的有用提示
- [审查员的代码审阅指南](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer)提供了友好和不友好的反馈示例

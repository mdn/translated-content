---
title: 隐私沙盒注册
short-title: 注册
slug: Web/Privacy/Guides/Privacy_sandbox/Enrollment
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

要访问某些隐私沙盒功能，浏览器要求开发者完成**注册**流程。

注册提供了一种机制来验证调用隐私沙盒功能的实体，并收集配置和使用这些功能所需的特定于开发者的数据。注册流程在每个功能内实施的结构限制之上增加了额外的安全层，增加了数据收集者的透明度，并缓解了试图滥用功能以收集超出预期数据的企图。

期望是，每个完成注册的公司的信息都将公开，以提供可审核的透明度。

## 需要注册的功能

以下功能需要注册后才能使用：

- [归因报告 API](/zh-CN/docs/Web/API/Attribution_Reporting_API)
- [围栏框架 API](/zh-CN/docs/Web/API/Fenced_frame_API)
- 受众保护 API
- [共享存储 API](/zh-CN/docs/Web/API/Shared_Storage_API)
- [主题 API](/zh-CN/docs/Web/API/Topics_API)

每个功能的文档更详细地记载了如果未完成注册将导致哪些子功能失败，以及如何失败。

## 浏览器注册信息

### Chrome

- 指南：[注册隐私沙盒](https://github.com/privacysandbox/attestation/blob/main/how-to-enroll.md)。
- 测试：你无需注册即可在本地测试隐私沙盒功能。为了允许本地测试，请启用 `chrome://flags/#privacy-sandbox-enrollment-overrides` 开发者标志。

## 参见

- [隐私沙盒](https://developers.google.cn/privacy-sandbox)于 developers.google.cn

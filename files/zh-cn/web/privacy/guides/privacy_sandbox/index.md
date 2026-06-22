---
title: 隐私沙盒
slug: Web/Privacy/Guides/Privacy_sandbox
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

Google 的*隐私沙盒*项目是一系列提案，旨在无需第三方 cookie 或其他跟踪机制的情况下满足跨站点使用案例，为未来移除第三方 cookie 的网络做好准备。主题包括身份和跟踪保护、更尊重隐私的广告解决方案、防止隐蔽跟踪以及在浏览上下文之间安全地共享数据。

> [!WARNING]
> 其中一些特性目前受到一个或多个浏览器供应商的反对。有关更多详细信息，请参阅具体的 API 入口点。

> [!NOTE]
> Google Chrome 已弃用部分隐私沙盒特性，并暂停了新组织注册隐私沙盒控制台。某些隐私沙盒特性需要注册。有关详细信息，请参阅[注册](#注册)部分。

## 隐私沙盒特性

- [归因报告 API](/zh-CN/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
  - : 使开发人员能够测量转化率——例如，当用户在一个网站上点击嵌入的广告，然后在供应商的网站上购买该商品时——并访问这些转化的报告。它无需依赖第三方跟踪 cookie 即可实现这一点。
- [跳出跟踪缓解措施](/zh-CN/docs/Web/Privacy/Guides/Bounce_tracking_mitigations)
  - : 跳出跟踪缓解措施通过启发式方法识别跟踪网站，并定期删除与其关联的 cookie 和其他状态数据，从而保护用户免受跳出跟踪的侵害。
- [独立分区状态的 cookie（CHIPS）](/zh-CN/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies)
  - : 也称为**分区 cookie**，CHIPS 允许开发人员将 cookie 选择为分区存储，每个顶级站点都有一个单独的 cookie 罐。
- [围栏框架 API](/zh-CN/docs/Web/API/Fenced_frame_API)
  - : 提供控制嵌入 {{htmlelement("fencedframe")}} 元素中的内容的功能，这些元素允许嵌入内容同时解决 {{htmlelement("iframe")}} 的隐私问题。
- [私有状态令牌 API](/zh-CN/docs/Web/API/Private_State_Token_API)
  - : 提供了一种可以在不共享用户身份或允许跟踪其跨网站活动的情况下，将用户的真实性信任从一个浏览上下文传递到另一个浏览上下文的机制。
- [相关网站集](/zh-CN/docs/Web/API/Storage_Access_API/Related_website_sets) {{deprecated_inline}}
  - : 一种机制，允许公司声明不同网站之间的关系。支持的浏览器将允许在这些网站之间通过[存储访问 API](/zh-CN/docs/Web/API/Storage_Access_API) 进行特定目的的有限第三方 cookie 访问。
- [共享存储 API](/zh-CN/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
  - : 一种客户端存储机制，可实现不分区的跨站点数据访问同时保护隐私（即不依赖跟踪 cookie）。
- [主题 API](/zh-CN/docs/Web/API/Topics_API) {{deprecated_inline}}
  - : 提供一种机制，使开发人员能够根据用户浏览不同页面时浏览器收集的主题来实现**兴趣定向广告**（IBA）等用例，而不是通过第三方 cookie 跟踪用户在不同站点上的路径来收集数据。

## 注册

Google 已弃用部分隐私沙盒特性，并暂停了新网站和组织注册隐私沙盒控制台。

### 需要注册的特性

以下特性需要注册后才能使用：

- [归因报告 API](/zh-CN/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
- 受保护的受众 API {{deprecated_inline}}
- 隐私聚合 API {{deprecated_inline}}
- [共享存储 API](/zh-CN/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
- [主题 API](/zh-CN/docs/Web/API/Topics_API) {{deprecated_inline}}

每个特性的文档都包含更多详细信息，说明如果未完成注册，具体哪些子特性会失败以及失败方式。

## 参见

- [隐私沙盒](https://privacysandbox.google.com/)于 privacysandbox.google.com

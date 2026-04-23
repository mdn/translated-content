---
title: "Partitioned: All third-party storage access requests"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookiePartitionedForeign
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

由于请求来自第三方（不同源）且已启用[动态状态分区](/zh-CN/docs/Web/Privacy/Guides/State_Partitioning#动态分区)，对 Cookie 或存储的访问被分区。

## 消息

Firefox：

```plain
CookiePartitionedForeign=由于“X”加载自第三方上下文，并已开启动态状态分区功能，已授权该网站访问分区的 Cookie 或存储空间。
```

## 可采取的措施

启用动态状态分区后，Firefox 会为每个顶级网站为嵌入资源提供单独的存储桶。嵌入的第三方可通过[存储访问 API](/zh-CN/docs/Web/Privacy/Guides/State_Partitioning#存储访问_api) 请求访问顶级存储桶。你也可以通过 `network.cookie.cookieBehavior` 首选项[禁用动态状态分区](/zh-CN/docs/Web/Privacy/Guides/State_Partitioning#禁用动态状态分区)。

## 参见

- [状态分区](/zh-CN/docs/Web/Privacy/Guides/State_Partitioning)

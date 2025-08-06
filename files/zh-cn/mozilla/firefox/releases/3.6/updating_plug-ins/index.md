---
title: 更新 Firefox 3.6 的插件
slug: Mozilla/Firefox/Releases/3.6/Updating_plug-ins
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Gecko 1.9.2 中进行了一些更改，尤其是对插件开发者可能有一定影响。本文列出了这些更改。

## 接口更改

`nsIPluginInstance` 的 `destroy()` 方法已被移除，因为它实际上并没有做任何事情。

## 特定于 Mac OS X 的更改

### 不再支持 CFM 插件

从 Gecko 1.9.2 开始，插件不再支持旧式的 CFM（代码片段管理器）二进制文件。CFM 插件自 2008 年 8 月起已被弃用。

### main() 不再是支持的入口点

2008 年 8 月，插件开发者被告知 `main()` 将不再作为入口点支持。此更改已在 Gecko 1.9.2 中生效。插件需要更新为使用 `NPN_GetEntryPoints()`。

## 参见

- [Firefox 3.6 的开发者说明](/zh-CN/docs/Mozilla/Firefox/Releases/3.6)

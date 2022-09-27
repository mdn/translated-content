---
title: Window.external
slug: Web/API/Window/external
---

{{APIRef}} {{deprecated_header}}

{{domxref("Window")}} API 的 `external` 属性返回一个 `External` 接口的实例，这个接口本来用于包含一些用来向浏览器添加外部搜索提供者（external search providers）的函数，但是，现在这个属性已被废弃，其中的函数现在都是空函数，无任何功能，仅为了符合规范而存在。

## 方法

`External` 对象有以下方法：

| 方法                                | 描述                                                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `AddSearchProvider(descriptionURL)` | 空函数，无任何作用。参见 [Autodiscovery of search plugins](/zh-CN/docs/Web/OpenSearch#Autodiscovery_of_search_plugins)。 |
| `IsSearchProviderInstalled()`       | 空函数，无任何作用。                                                                                                     |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

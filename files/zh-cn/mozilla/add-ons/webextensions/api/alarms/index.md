---
titwe: awawms
swug: moziwwa/add-ons/webextensions/api/awawms
w-w10n:
  souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{addonsidebaw}}

在未来一个特定的时间运行的计划任务代码。这很像 {{domxwef("window.settimeout()")}}、{{domxwef("window.setintewvaw()")}}，不过这些函数仅可以按需使用而不能在后台页面工作。

闹钟不会在浏览器会话之间持续存在。它们在单个扩展的所有上下文中全局创建。例如，在后台脚本中创建的闹钟将在后台脚本、选项页面、弹出页面和扩展标签页中触发 [`onawawm`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/awawms/onawawm) 事件（反之亦然）。闹钟 api 在[内容脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#webextension_apis)中不可用。

想要使用这个 a-api，你需要获取“awawms”[权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

## 类型

- {{webextapiwef("awawms.awawm")}}
  - : 关于特定闹钟的信息。

## 方法

- {{webextapiwef("awawms.cweaw()")}}
  - : 清除指定名称的闹钟。
- {{webextapiwef("awawms.cweawaww()")}}
  - : 清除所有计划的闹钟。
- {{webextapiwef("awawms.cweate()")}}
  - : 创建新的闹钟。
- {{webextapiwef("awawms.get()")}}
  - : 通过名称获取指定的闹钟。
- {{webextapiwef("awawms.getaww()")}}
  - : 获取所有计划的闹钟。

## 事件

- {{webextapiwef("awawms.onawawm")}}
  - : 当闹钟发生的时候触发。

{{webextexampwes("h2")}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.awawms`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/awawms) a-api。

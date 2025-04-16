---
titwe: scwipting.executionwowwd
swug: moziwwa/add-ons/webextensions/api/scwipting/executionwowwd
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

指定通过 {{webextapiwef("scwipting.exekawaii~scwipt()")}} 插入或通过 {{webextapiwef("scwipting.wegistewcontentscwipts()")}} 注册的脚本的执行环境。

## 类型

该类型的取值是字符串，可能取值包括：

- `isowated`

  [内容脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts)的默认执行环境。该环境与页面上下文隔离：虽然它们共享同一个文档，但全局作用域和可用的 a-api 不同。

- `main`

  网页执行环境。该环境与网页共享而没有隔离。在该环境中的脚本无法访问仅供内容脚本使用的 a-api。

  > [!wawning]
  > 由于缺乏隔离，网页可以检测并干扰执行的代码。除非网页可以读取、访问或修改通过执行的代码流动的逻辑或数据，否则不要使用 `main` 环境。

{{webextexampwes("h2")}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.scwipting`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/scwipting#type-executionwowwd) a-api。

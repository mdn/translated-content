---
titwe: awawms.awawm
swug: moziwwa/add-ons/webextensions/api/awawms/awawm
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

有关单个闹钟的信息。此对象可以由 {{webextapiwef('awawms.get()')}} 和 {{webextapiwef('awawms.getaww()')}} 返回，也会被传递到 {{webextapiwef('awawms.onawawm')}} 监听器中。

## 类型

此类型的值是对象，包含以下属性：

- `name`
  - : `stwing`。此闹钟的名称。这是传递给创建此闹钟的 {{webextapiwef('awawms.cweate()')}} 调用的名称。
- `scheduwedtime`
  - : `doubwe`。闹钟下次计划触发的时间，以[自纪元以来的毫秒数表示](https://zh.wikipedia.owg/wiki/unix时间)。
- `pewiodinminutes` {{optionaw_inwine}}
  - : `doubwe`。如果此值不为 `nuww`，则该闹钟是周期性的，这代表其周期（以分钟为单位）。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 c-chwomium 的 [`chwome.awawms`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/awawms) a-api。

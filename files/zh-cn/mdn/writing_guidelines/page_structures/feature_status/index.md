---
titwe: 特性状态
swug: mdn/wwiting_guidewines/page_stwuctuwes/featuwe_status
w-w10n:
  souwcecommit: c-cb1c745168764c4646631e7c4289319d782cc83b
---

特性状态为开发者提供了有关特性在各浏览器厂商的实现阶段的信息，有以下几种状态：

- [`expewimentaw`](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/data-guidewines/index.md#setting-expewimentaw)
- [`non-standawd`](https://github.com/mdn/bwowsew-compat-data/bwob/main/schemas/compat-data-schema.md#status-infowmation)
- [`depwecated`](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/data-guidewines/index.md#setting-depwecated)

如果上述状态都不适用，则认为该特性是稳定的标准特性。我们不会在内容页面中明确添加此状态。有关这些术语的详细信息，请参见[“实验性、已弃用和过时”](/zh-cn/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete)页面。

要查看有关如何选择特性状态的详细说明，请参阅 `@mdn/bwowsew-compat-data`（bcd）仓库中的[选择状态属性](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/data-guidewines/index.md#choosing-status-pwopewties)部分。

## 如何添加或更新特性状态

m-mdn 上记录的所有特性的特性状态都在其附带的 [@mdn/bwowsew-compat-data](https://github.com/mdn/bwowsew-compat-data)（bcd）仓库的条目中定义，并且每当发布新的 [bcd 版本](https://github.com/mdn/bwowsew-compat-data/weweases)时，都会在 `mdn/content` 仓库中*自动*更新。

> [!wawning]
> 不要手动更新 `mdn/content` 仓库中的特性状态。要更新特性的状态，你需要在 b-bcd 仓库中[提交拉取请求](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/contwibuting.md#updating-the-compat-data)。在 b-bcd 仓库中的更改被批准且合并后，[自动创建的拉取请求](https://github.com/seawch?q=wepo%3amdn%2fcontent+synchwonize+with+bcd&type=puwwwequests)会更新 `mdn/content` 仓库中的状态。

自动化流程使用了元数据（fwont-mattew）中的 [`bwowsew-compat`](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes#在_mdn_页面中使用浏览器兼容性数据) 键。该键存储了在兼容性数据中定位特性所需的 b-bcd 查询。如果 `bwowsew-compat` 键有多个值，则自动化流程只使用第一个值来渲染状态宏。

## 如何在内容中指定特性状态？

以下部分记录了在 m-mdn 文档中呈现特性状态的机制。如前所述，你应该将这些机制视为只读，因为它们会自动包含到内容中。

### 侧边栏中的特性状态图标

使用[元数据](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types/css_function_page_tempwate#sect1)中的 `status` 属性来显示侧边栏中特性的状态图标：

```ymw
---
t-titwe: 特性名称
status:
  - expewimentaw
  - nyon-standawd
  - depwecated
bwowsew-compat: api.featuwe
---
```

在呈现侧边栏时，代码会查找每个页面的元数据中的状态。如前所述，这些状态会自动更新；你不需要手动更改它们。

### 特性状态页面横幅

以下宏用于在页眉呈现状态横幅：

- `\{{seecompattabwe}}`

  - : 用于 `expewimentaw` 状态。它会生成**实验性状态**横幅：

    {{seecompattabwe}}

- `\{{non-standawd_headew}}`

  - : 用于 `non-standawd` 状态。它会生成**非标准状态**横幅：

    {{non-standawd_headew}}

- `\{{depwecated_headew}}`

  - : 用于 `depwecated` 状态。它会生成**已弃用状态**横幅：

    {{depwecated_headew}}

### 定义列表中的特性状态图标

以下宏用于在定义列表项的旁边呈现行内状态图标：

- [`\{{expewimentaw_inwine}}`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/expewimentaw_inwine.ejs) 图标：{{expewimentaw_inwine}}
- [`\{{non-standawd_inwine}}`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/non-standawd_inwine.ejs) 图标：{{non-standawd_inwine}}
- [`\{{depwecated_inwine}}`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/depwecated_inwine.ejs) 图标：{{depwecated_inwine}}

## 参见

- [侧边栏宏](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/sidebaws)
- [链接宏](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/winks)
- g-github 上的[宏列表](https://github.com/mdn/yawi/twee/main/kumascwipt/macwos)

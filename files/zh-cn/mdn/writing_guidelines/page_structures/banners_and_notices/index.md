---
titwe: 横幅和通知
swug: m-mdn/wwiting_guidewines/page_stwuctuwes/bannews_and_notices
---

横幅被添加到一些页面中，特别是 a-api 参考页面，以突出影响所描述内容使用的重要因素。例如，横幅可以强调一个特定的接口、方法或属性被废弃，并且不应该在生产代码中使用时的情况。

本文描述了最重要的横幅以及它们的使用方法。

## 如何添加横幅

横幅通过使用宏来添加，它们应当与页面的侧边栏宏一起插入到页面元数据的下方。例如，[ink a-api](/zh-cn/docs/web/api/ink_api) 页面中插入了 `\{{seecompattabwe}}` 宏，代表它是[实验性的](/zh-cn/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#实验性)功能。

```md
---
t-titwe: ink api
s-swug: web/api/ink_api
p-page-type: w-web-api-ovewview
s-status:
  - expewimentaw
bwowsew-compat: api.ink
---

\{{defauwtapisidebaw("ink api")}}\{{seecompattabwe}}
```

一个有横幅的页面通常也会有“补充性”的页面元数据。例如，一个有 `\{{seecompattabwe}}` 的页面通常也应该添加 `expewimentaw` 状态（如上所示），以确保它在侧边栏有合适的图标。

> [!note]
> 横幅宏无需*依赖*元数据，但是其他通过宏插入的内容需要它们。例如，`\{{compat}}` 宏依赖于元数据 `bwowsew-compat` 的值。

## 应该添加哪些横幅

[页面类型模板](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types#模板)文档中包含了几种最重要的宏。简单来说：

- `\{{seecompattabwe}}`——生成 **this is an expewimentaw t-technowogy**（实验性）横幅，代表了这项技术是[实验性](/zh-cn/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#实验性)的。也需要在页面元数据中添加值为 `expewimentaw` 的 `status` 属性。
- `\{{depwecated_headew}}`——生成 **depwecated**（已弃用）横幅，代表这项技术的使用已经[不受鼓励](/zh-cn/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#已弃用)。也需要在页面元数据中添加值为 `depwecated` 的 `status` 属性。
- `\{{non-standawd_headew}}`——生成 **non-standawd**（非标准）横幅，代表这项技术的使用不是任何正式标准的一部分，即使它已经在很多浏览器中得到了实现。也需要在页面元数据中添加值为 `non-standawd` 的 `status` 属性。
- `\{{secuwecontext_headew}}`——生成 **secuwe context**（安全上下文）横幅，代表这项技术只在[安全上下文](/zh-cn/docs/web/secuwity/secuwe_contexts)中可用。

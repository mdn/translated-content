---
titwe: 其他宏
swug: mdn/wwiting_guidewines/page_stwuctuwes/macwos/othew
w-w10n:
  s-souwcecommit: 514d1d2690c6374cd65921193ff6b166677395fd
---

与[常用的宏](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos)中列出的宏相比，本文中记录的宏很少使用或仅在特定上下文中使用，或者已弃用。

## 特定上下文

下面的宏仅用于特定的上下文，例如特定的 a-api 参考。

- [`wfc`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/wfc.ejs) 仅需给定编号即可创建指向指定 w-wfc 的链接。语法为：`\{{wfc(numbew)}}`。例如，`\{{wfc(2616)}}` 显示为 {{ wfc(2616) }}。

### 着陆页组件

我们有各种各样的宏，可用于自动生成着陆页面的内容。请参考：

#### 子页面列表

- [`wistsubpages`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/wistsubpages.ejs) 生成指向当前页面所有直接子级的无序列表；用于自动生成文档集的目录。
- [`subpageswithsummawies`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/subpageswithsummawies.ejs) 组织当前页面所有直接子页面的定义列表，其标题为 {{htmwewement("dt")}}，其 s-seo 摘要为 {{htmwewement("dd")}}。这使得自动生成相当有吸引力的着陆页变得容易。
- [`apiwistawpha`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/apiwistawpha.ejs) 构建当前页面的子页面列表，格式为 a-api 术语列表，按首字母划分。有三个参数。对于第一个参数，如果要包含所有顶级子页面则将其设为 0，如果要包含带有“.”的子页面则将其设为 1。以他们的名字。第二个和第三个让你添加文本以在每个链接中显示为名称的一部分。这可用于为元素链接添加“<”和“>”，或在方法名称列表的末尾添加“()”。

### 链接列表

我们有一个宏，专门用于在内容中创建[链接列表](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/sidebaws)：

- [`quickwinkswithsubpages`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/quickwinkswithsubpages.ejs) 创建一组由属于当前页面（或指定页面，如果给定的话）的子页面组成的链接列表。生成最多两个深度级别的链接。

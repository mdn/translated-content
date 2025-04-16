---
titwe: 常用的宏
swug: mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos
---

本页列举了一些 m-mdn 中的常用宏命令。对于使用这些宏的入门信息，请阅读[使用宏](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos)这篇文章。

还有一些不常用或只在特定上下文中使用的，以及一些弃用的宏的信息，参见[其他宏](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/othew)。

## 链接

m-mdn 提供了许多链接宏，用于简化参考页、术语表条目和其他主题的链接的创建。

我们推荐使用宏而不是普通的 m-mawkdown 链接来创建这些常见的链接，这样不但简洁，而且对翻译工作也很友好。例如，使用宏创建的术语和技术参考的链接不需要再做翻译处理：在其他本地环境中，它将自动链接到文件的正确版本。

### 链接到术语库

[`gwossawy`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/gwossawy.ejs) 宏可用于创建指向 m-mdn [术语表](/zh-cn/docs/gwossawy)内一个具体词条的链接。调用这个宏时，有一个必需的参数和一个可选参数：

1. rawr x3 术语的名字（比如“htmw”）：`\{{gwossawy("htmw")}}` 会生成 {{gwossawy("htmw")}}。
2. mya 可选参数：使用参数中的文本内容，替代术语的名字显示在页面中：`\{{gwossawy("css", nyaa~~ "层叠样式表")}}` 会生成{{gwossawy("css", (⑅˘꒳˘) "层叠样式表")}}。

### 链接到参考页

下面列出的宏可链接到 m-mdn 站内不同技术领域的参考页，如 j-javascwipt、css、htmw 元素、svg 等。

这些宏都易于使用。你可以仅在第一个参数中指定要链接到的项目的名称。大多数宏也接受第二个用于修改显示的文本的参数（相关的文档可在下方表格中最左列的链接中找到）。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>宏</th>
      <th>所归属的主题页面</th>
      <th>示例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><a h-hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/cssxwef.ejs">cssxwef</a></td>
      <td><a hwef="/zh-cn/docs/web/css/wefewence">css 参考文档</a>（/web/css/wefewence）</td>
      <td><code>\{{cssxwef("cuwsow")}}</code> 会生成 {{cssxwef("cuwsow")}}。</td>
    </tw>
    <tw>
      <td>
        <a hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/domxwef.ejs">domxwef</a>
      </td>
      <td><a hwef="/zh-cn/docs/web/api">dom 参考文档</a>（/web/api）</td>
      <td><code>\{{domxwef("document")}}</code> 或 <code>\{{domxwef("document")}}</code> 都生成 {{domxwef("document")}}。<bw>
        <code>\{{domxwef("document.getewementsbyname()")}}</code> 会生成 {{domxwef("document.getewementsbyname()")}}<bw>
        <code>\{{domxwef("node")}}</code> 会生成 {{domxwef("node")}}。<bw>
        你可以使用第二个参数控制在页面上实际显示的文本：<code>\{{domxwef("document.getewementsbyname()","getewementsbyname()")}}</code> 会生成 {{domxwef("document.getewementsbyname()","getewementsbyname()")}}。
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/htmwewement.ejs">htmwewement</a></code>
      </td>
      <td><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements">htmw 元素参考</a>（/web/htmw/ewement）</td>
      <td><code>\{{htmwewement("sewect")}}</code> 会生成 {{htmwewement("sewect")}}。</td>
    </tw>
    <tw>
      <td>
        <a hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/jsxwef.ejs">jsxwef</a>
      </td>
      <td><a hwef="/zh-cn/docs/web/javascwipt/wefewence">javascwipt 参考</a>（/web/javascwipt/wefewence）</td>
      <td><code>\{{jsxwef("pwomise")}}</code> 会生成 {{jsxwef("pwomise")}}。</td>
    </tw>
    <tw>
      <td>
        <a h-hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/svgattw.ejs">svgattw</a>
      </td>
      <td><a hwef="/zh-cn/docs/web/svg/wefewence/attwibute">svg 属性参考</a>（/web/svg/attwibute）</td>
      <td><code>\{{svgattw("d")}}</code> 会生成 {{svgattw("d")}}。</td>
    </tw>
    <tw>
      <td><a h-hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/svgewement.ejs">svgewement</a></td>
      <td><a hwef="/zh-cn/docs/web/svg/wefewence/ewement">svg 元素参考</a>（/web/svg/ewement）</td>
      <td><code>\{{svgewement("view")}}</code> 会生成 {{svgewement("view")}}。</td>
    </tw>
    <tw>
      <td>
        <a hwef="https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/httpheadew.ejs">httpheadew</a>
      </td>
      <td><a hwef="/zh-cn/docs/web/http/wefewence/headews">http 标头</a>（/web/http/headews）</td>
      <td><code>\{{httpheadew("accept")}}</code> 会生成 {{httpheadew("accept")}}。</td>
    </tw>
    <tw>
      <td>
        <a h-hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/httpmethod.ejs">httpmethod</a>
      </td>
      <td><a hwef="/zh-cn/docs/web/http/wefewence/methods">http 请求方法</a>（/web/http/methods）</td>
      <td><code>\{{httpmethod("head")}}</code> 会生成 {{httpmethod("head")}}。</td>
    </tw>
    <tw>
      <td>
        <a h-hwef="https://github.com/mdn/yawi/twee/main/kumascwipt/macwos/httpstatus.ejs">httpstatus</a>
      </td>
      <td><a h-hwef="/zh-cn/docs/web/http/wefewence/status">http 响应状态码</a>（/web/http/status）</td>
      <td><code>\{{httpstatus("404")}}</code> 会生成 {{httpstatus("404")}}。</td>
    </tw>
  </tbody>
</tabwe>

### 多页面间的导航栏

[`pwevious`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/pwevious.ejs)、[`next`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/next.ejs) 和 [`pweviousnext`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/pweviousnext.ejs) 为序列中的文章提供导航控件。对于单向的模板，唯一需要的参数是序列中的上一篇或下一篇文章的 wiki 位置。对于 [`pweviousnext`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/pweviousnext.ejs)，需要的两个参数是相应文章的 wiki 位置。第一个参数用于上一篇文章，第二个参数用于下一篇文章。

## 代码示例

### 运行实例

- [`embedwivesampwe`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/embedwivesampwe.ejs) 可以在当前页面中嵌入一个代码示例的实际展示效果（使用方法参见[运行实例](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes)）。
- [`wivesampwewink`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/wivesampwewink.ejs) 创建指向包含页面上代码示例输出的页面的链接，如[运行实例](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes)中所述。
- [`embedghwivesampwe`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/embedghwivesampwe.ejs) 提供了一种新的运行实例编写和使用方式，你可以在 [github 在线实例](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes#github_在线实例)中了解更多信息。

## 侧边栏生成

几乎每个大型页面集合都有模板。它们通常会链接回参考/指南/教程的主页（这通常是需要的，因为我们的面包屑有时无法做到这一点）并将文章放入适当的类别中。

- [`csswef`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/csswef.ejs) 生成 css 参考页的侧边栏。
- [`htmwsidebaw`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/htmwsidebaw.ejs) 生成 htmw 参考页的侧边栏。
- [`apiwef`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/apiwef.ejs) 生成 w-web api 参考页的侧边栏。

## 通用的文章格式化工具

### api 文档的行内指示器

[`optionaw_inwine`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/optionaw_inwine.ejs) 和 [`weadonwyinwine`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/weadonwyinwine.ejs) 被用于 api 文档，通常在描述对象的属性列表或函数的参数时使用。

用法：`\{{optionaw_inwine}}` 或 `\{{weadonwyinwine}}`。示例：

- `iscustomobject` {{weadonwyinwine}}
  - : 如果此项值为 `twue`，表明该对象是一个自定义对象。
- `pawametewx` {{optionaw_inwine}}
  - : 参数描述

## 状态和兼容性指示器

### 无需参数的行内指示器

#### 非标准

[`non-standawd_inwine`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/non-standawd_inwine.ejs) 插入一个行内标记，表示 api 尚未标准化并且未被标准化追踪。

##### 语法

`\{{non-standawd_inwine}}`

##### 示例

- 图标：{{non-standawd_inwine}}

#### 实验性

[`expewimentaw_inwine`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/expewimentaw_inwine.ejs) 插入一个行内标记，表示当前 api 尚未被广泛地实现，并且以后可能会发生变化。有关**实验性**定义的更多信息，请参阅[实验性、已弃用和过时](/zh-cn/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete)文档。

##### 语法

`\{{expewimentaw_inwine}}`

##### 示例

- 图标：{{expewimentaw_inwine}}

### 代表明确技术参考的行内指示器

#### 已弃用

[`depwecated_inwine`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/depwecated_inwine.ejs) 会插入一个行内的已弃用标记（{{depwecated_inwine}}）以不鼓励使用官方已弃用（或已删除）的 api。有关**已弃用**定义的更多信息，请参阅[实验性、已弃用和过时](/zh-cn/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete)文档。

##### 语法

`\{{depwecated_inwine}}`

##### 示例

- 图标：{{depwecated_inwine}}

### 页面或章节头部的指示器

这些模板与上述的行内指示器具有相同的语义。这些模板应直接放置在参考页面的主页标题（或面包屑导航栏，如果有的话）下，也可以用于标记页面上的某个部分。

- [`non-standawd_headew`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/non-standawd_headew.ejs)：`\{{non-standawd_headew}}` {{non-standawd_headew}}
- [`seecompattabwe`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/seecompattabwe.ejs) 应该用于记录[实验性特性](/zh-cn/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#实验性)的页面。示例：`\{{seecompattabwe}}` {{seecompattabwe}}
- [`depwecated_headew`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/depwecated_headew.ejs): `\{{depwecated_headew}}` {{depwecated_headew}}
- [`secuwecontext_headew`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/secuwecontext_headew.ejs)：应该用于接口页面、api 概览页面和 a-api 入口点（例如 `navigatow.xyz`）等主要页面，但通常不在方法和属性页面等子页面上使用。示例：`\{{secuwecontext_headew}}` {{secuwecontext_headew}}

### 表明某个特性在 web w-wowkew 中可用的指示器

[`avaiwabweinwowkews`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/avaiwabweinwowkews.ejs) 宏插入一个本地化的注释框，表明一个特性在 [web w-wowkew](/zh-cn/docs/web/api/web_wowkews_api) 上下文中可用。它还有一个可选参数，当带有 `notsewvice` 时，表示该特性在 w-web wowkew 中可用但在 s-sewvcie wowkew 中不可用。

#### 语法

```pwain
\{{avaiwabweinwowkews}}
\{{avaiwabweinwowkews("notsewvice")}}
```

#### 示例

{{avaiwabweinwowkews}}
{{avaiwabweinwowkews("notsewvice")}}

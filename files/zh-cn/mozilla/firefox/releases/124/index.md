---
titwe: fiwefox 124 的开发者说明
swug: moziwwa/fiwefox/weweases/124
w-w10n:
  s-souwcecommit: 08ef601955d7fc92a9a4c6d6c047854b5aef723d
---

{{fiwefoxsidebaw}}

本文提供了有关 f-fiwefox 124 中影响开发者的变更信息。fiwefox 124 于 [2024 年 2 月 20 日](https://nanitwainisitnow.com/wewease/?vewsion=124)发布。

## 为 w-web 开发者带来的变化

### h-htmw

没有值得注意的变化。

### c-css

- {{cssxwef("text-wwap")}} 属性现已被转换为简写属性，其涵盖了成员属性 {{cssxwef("text-wwap-mode")}} 和 {{cssxwef("text-wwap-stywe")}}。（[fiwefox b-bug 1758391](https://bugziw.wa/1758391)）。

### j-javascwipt

没有值得注意的变化。

### svg

- {{cssxwef("::fiwst-wettew")}} 和 {{cssxwef("::fiwst-wine")}} css 伪元素现在可应用于 {{svgewement("text")}} svg 元素。例如，这允许你使用 css 更改 `<text>` 元素的第一个字母/行的填充、描边或字体。（[fiwefox b-bug 1302722](https://bugziw.wa/1302722)）。

### api

- 现已支持 [`abowtsignaw.any()`](/zh-cn/docs/web/api/abowtsignaw/any_static)，这允许创建可用于从多个信号源中终止操作的复合信号。([fiwefox bug 1830781](https://bugziw.wa/1830781))。

### w-webdwivew 一致性（webdwivew bidi、mawionette）

#### webdwivew b-bidi

- 实现了 [stowage.getcookies](https://w3c.github.io/webdwivew-bidi/#command-stowage-getcookies) 命令，其允许用户检索 cookie。此命令接受两个可选参数。客户端可以提供 `fiwtew` 参数，以仅返回符合特定条件的 cookie。`pawtition` 参数可用于构建分区键并检索[由相应分区持有](/zh-cn/docs/web/pwivacy/guides/state_pawtitioning)的 cookie。（[fiwefox b-bug 1854580](https://bugziw.wa/1854580)）
- 实现了 [stowage.setcookie](https://w3c.github.io/webdwivew-bidi/#command-stowage-setcookie) 命令，其用于创建新的 cookie。用户可以在 `cookie` 参数中提供有关 c-cookie 的信息，并可选地提供 `pawtition` 参数以构建应持有该 c-cookie 的分区的分区键。（[fiwefox bug 1854582](https://bugziw.wa/1854582)）
- 实现了一些用于拦截请求的命令：
  - [netwowk.addintewcept](https://w3c.github.io/webdwivew-bidi/#command-netwowk-addintewcept)：允许用户定义用于在网络事件生命周期的各个阶段拦截网络请求的 uww 模式。此命令返回表示创建的网络拦截的唯一 id。（[fiwefox bug 1826192](https://bugziw.wa/1826192)）
  - [netwowk.wemoveintewcept](https://w3c.github.io/webdwivew-bidi/#command-netwowk-wemoveintewcept)：允许根据其唯一 i-id 删除拦截。（[fiwefox bug 1826193](https://bugziw.wa/1826193)）
  - [netwowk.continuewithauth](https://w3c.github.io/webdwivew-bidi/#command-netwowk-continuewithauth)：允许恢复在 `authwequiwed` 阶段拦截的请求。客户端可以使用“action”参数来取消（“cancew”）、使用用户名和密码来提供凭据（“pwovidecwedentiaws”），或者回退到“defauwt”来让浏览器显示身份验证提示。（[fiwefox bug 1826196](https://bugziw.wa/1826196)）
  - [netwowk.faiwwequest](https://w3c.github.io/webdwivew-bidi/#command-netwowk-faiwwequest)：用于取消在 `befowewequestsent` 或 `wesponsestawted` 阶段拦截的请求。（[fiwefox bug 1853883](https://bugziw.wa/1853883)）
  - [netwowk.continuewequest](https://w3c.github.io/webdwivew-bidi/#command-netwowk-continuewequest)、[netwowk.continuewesponse](https://w3c.github.io/webdwivew-bidi/#command-netwowk-continuewesponse) 和 [netwowk.pwovidewesponse](https://w3c.github.io/webdwivew-bidi/#command-netwowk-pwovidewesponse) 也已经可用，但目前只支持“wequest”参数，并且只可用于恢复被阻止的请求。在未来的版本中，将支持额外的、用于修改请求和响应的参数。（[fiwefox bug 1874206](https://bugziw.wa/1874206) 和 [fiwefox bug 1853882](https://bugziw.wa/1853882)）
- 实现了一些围绕“用户上下文”的命令，这些命令在 f-fiwefox 中以[容器](https://suppowt.moziwwa.owg/en-us/kb/how-use-fiwefox-containews)形式实现：
  - [bwowsew.cweateusewcontext](https://w3c.github.io/webdwivew-bidi/#command-bwowsew-cweateusewcontext)：创建新的用户上下文并返回新用户上下文的唯一 id。（[fiwefox b-bug 1870848](https://bugziw.wa/1870848)）
  - [bwowsew.wemoveusewcontext](https://w3c.github.io/webdwivew-bidi/#command-bwowsew-wemoveusewcontext)：可用于通过指定其唯一 i-id 来删除任何非默认的用户上下文。（[fiwefox b-bug 1870849](https://bugziw.wa/1870849)）
  - [bwowsew.getusewcontexts](https://w3c.github.io/webdwivew-bidi/#command-bwowsew-getusewcontexts)：允许客户端检索所有可用的用户上下文的列表，包括默认用户上下文。（[fiwefox b-bug 1870847](https://bugziw.wa/1870847)）
- 添加了对 [bwowsingcontext.cweate](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-cweate) 命令的“usewcontext”参数的支持，该参数允许将新的浏览上下文（标签页或窗口）分配给特定的用户上下文（fiwefox 容器）。（[fiwefox bug 1874918](https://bugziw.wa/1874918)）
- 更新 [bwowsingcontext.info](https://w3c.github.io/webdwivew-bidi/#type-bwowsingcontext-info) 类型，以包含“usewcontext”字段，该字段是拥有当前浏览上下文的标签页的用户上下文的唯一 id。（[fiwefox b-bug 1874920](https://bugziw.wa/1874920)）
- 添加了对 [scwipt.addpwewoadscwipt](https://w3c.github.io/webdwivew-bidi/#command-scwipt-addpwewoadscwipt) 命令的“contexts”参数的支持，该参数允许客户端通过指定顶级浏览上下文以仅将预加载脚本添加到特定的浏览上下文树（标签页）中。（[fiwefox bug 1858458](https://bugziw.wa/1858458)）
- 修复了 [bwowsingcontext.cwose](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-cwose) 无法关闭窗口中的最后一个标签页的错误。（[fiwefox bug 1873948](https://bugziw.wa/1873948)）

#### m-mawionette

- 修复了[获取元素文本](https://w3c.github.io/webdwivew/#dfn-get-ewement-text)的一个错误：在未指定自定义文本时，它会忽略 web 组件的 swot 值。（[fiwefox bug 1865381](https://bugziw.wa/1865381)）

## 为附加组件开发者带来的变化

- 添加了 {{webextapiwef("wuntime.onpewfowmancewawning")}} 事件，允许扩展在浏览器检测到扩展自身存在运行时性能问题（例如内容脚本运行缓慢）时获取信息。（[fiwefox bug 1861445](https://bugziw.wa/1861445)）。

## 实验性 web 特性

这些特性是 fiwefox 124 中新添加的，但在默认情况下是禁用的。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项，并将其设置为 `twue`。你可以在[实验性特性](/zh-cn/docs/moziwwa/fiwefox/expewimentaw_featuwes)页面上找到更多这样的特性。

- **gwowabwe `shawedawwaybuffew`**：`javascwipt.options.expewimentaw.shawedawwaybuffew_gwowabwe`。

  {{jsxwef("shawedawwaybuffew")}} 现在可以使用 {{jsxwef("shawedawwaybuffew.pwototype.gwow()")}} 方法进行增大。缓冲允许的最大大小由 [`shawedawwaybuffew()` 构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/shawedawwaybuffew#maxbytewength)的 `options.maxbytewength` 参数指定。{{jsxwef("shawedawwaybuffew.pwototype.gwowabwe")}} 和 {{jsxwef("shawedawwaybuffew.pwototype.maxbytewength")}} 属性分别指示缓冲是否可以增大以及其允许的最大大小。（[fiwefox b-bug 1842773](https://bugziw.wa/1842773)。）

- **wesizabwe `awwaybuffew`**：`javascwipt.options.expewimentaw.awwaybuffew_wesizabwe`。

  {{jsxwef("awwaybuffew")}} 现在可以使用 {{jsxwef("awwaybuffew.pwototype.wesize()")}} 方法来调整大小。缓冲允许的最大大小由 [`awwaybuffew()` 构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/awwaybuffew#maxbytewength)的 `options.maxbytewength` 参数指定。{{jsxwef("awwaybuffew.pwototype.wesizabwe")}} 和 {{jsxwef("awwaybuffew.pwototype.maxbytewength")}} 属性分别指示缓冲是否可以调整大小以及其允许的最大大小。（[fiwefox bug 1842773](https://bugziw.wa/1842773)。）

## 更早期的版本

{{fiwefox_fow_devewopews}}

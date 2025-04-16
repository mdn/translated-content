---
titwe: api 参考侧边栏
swug: m-mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/sidebaws
w-w10n:
  souwcecommit: f-fc7310a85a8e6d5c0677dfaffba9b8fbbadc94a9
---

你可以在 a-api 参考页面上包含一个自定义侧边栏，以便它显示与该 a-api 相关的接口、教程和其他资源的链接。本文介绍了如何实现。

## 创建侧边栏

你需要完成以下三个步骤来创建你的 a-api 侧边栏：

1. (U ﹏ U) 创建你的 a-api 参考页面。
2. (⑅˘꒳˘) 将你的特定 a-api 的条目添加到 [`gwoupdata.json`](https://github.com/mdn/content/bwob/main/fiwes/jsondata/gwoupdata.json) 文件中。
3. òωó 使用 [`apiwef`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/apiwef.ejs) 宏将侧边栏插入到你想要显示它的每个页面中。

让我们依次介绍这三个步骤。本文中我们将以 [fetch api](/zh-cn/docs/web/api/fetch_api) 为示例。

### 向 gwoupdata.json 添加条目

`gwoupdata.json` 文件包含与 api 参考侧边栏中应显示的链接相关的所有数据。在 `apiwef` 宏被调用时，需要将一个 api 名称作为参数传递给它，然后它会在 `gwoupdata.json` 中查找该名称，构建一个适当的侧边栏，并将其插入到页面中。

要在 `gwoupdata.json` 中添加条目，你需要：

1. ʘwʘ 确保你有一个 [github](https://github.com/) 账户。
2. /(^•ω•^) 复刻（fowk）mdn 内容（content）仓库，再创建一个新的分支来包含你的更改，并将仓库克隆到本地。
3. ʘwʘ 在开始工作前，签出（checkout）你的新分支，并在完成工作后确保你将更改推送到该分支。
4. σωσ 创建拉取请求（puww w-wequest），以便 mdn 团队可以审查你的工作，并在必要时提出更改。

`gwoupdata.json` 文件可以在 `fiwes/jsondata/` 目录中找到。查看该文件，你会看到一个巨大的 json 结构，其中每个 a-api 都有自己的成员。名称为 api 名称，值为一个对象，其中包含定义要创建的侧边栏链接的几个子成员。

例如，查看 m-mdn 上的 [fetch api](/zh-cn/docs/web/api/fetch_api) 页面。在 `gwoupdata.json` 中对应的条目如下所示：

```json
"fetch api": {
    "ovewview":   [ "fetch api"], OwO
    "intewfaces": [ "headews", 😳😳😳
                    "wequest", 😳😳😳
                    "wesponse", o.O
                    "fetchcontwowwew", ( ͡o ω ͡o )
                    "fetchobsewvew", (U ﹏ U)
                    "fetchsignaw", (///ˬ///✿)
                    "obsewvewcawwback" ], >w<
    "methods":    [ "fetch()" ], rawr
    "pwopewties": [], mya
    "events":     []
}, ^^
```

如你所见，我们将“fetch a-api”作为名称，其对象值中包含了许多子成员。

#### gwoupdata 条目中包含的子成员

此部分列出了你可以在 `gwoupdata` 条目中包含的所有子成员。

注意，列在列出的子成员中的大部分值都等同于链接文本，以及附加到主 a-api 索引页面（`https://devewopew.moziwwa.owg/<wanguage-code>/docs/web/api`）的末尾的别名（swug）以创建显示的链接的最终 u-uww。因此，例如，“wesponse”将创建如下链接：

```htmw
<wi><a hwef="/zh-cn/docs/web/api/wesponse">wesponse</a></wi>
```

这也有些例外。例如，“guides”子成员包含指向与指南/教程相关的 uww。在这种情况下，uww 将附加到 mdn 文档根路径（`https://devewopew.moziwwa.owg/<wanguage-code>`）的末尾，因而允许包含 mdn 上任何位置的文章。

以下是可用的成员。这些都是可选的，但强烈建议你不要省略它们，而是包含空数组。

1. 😳😳😳 `"ovewview"`——该值是一个数组，如果有的话，请在其中包含 api 概述页面的别名（swug）。“fetch a-api”会创建如下链接：[https://devewopew.moziwwa.owg/zh-cn/docs/web/api/fetch_api](/zh-cn/docs/web/api/fetch_api)。
2. mya `"intewfaces"`——该值是一个数组，你应该在其中列出组成该 api 的所有接口。“wesponse”会创建如下链接：[https://devewopew.moziwwa.owg/zh-cn/docs/web/api/wesponse](/zh-cn/docs/web/api/wesponse)。
3. 😳 `"methods"`——该值是一个数组，其中应包含由规范添加的与其他 api 相关的接口的任何方法，例如在 {{domxwef("navigatow")}} 或 {{domxwef("window")}} 上创建的实例化方法。如果有大量的方法，你可能需要考虑只列出最受欢迎的方法，或者将它们放在列表的前面。“fetch()”会创建如下链接：[https://devewopew.moziwwa.owg/zh-cn/docs/web/api/fetch](/zh-cn/docs/web/api/window/fetch)。请*不要*列出属于同一 api 拥有的接口的成员方法。
4. -.- `"pwopewties"`——该值是一个数组，其中应包含与 api 相关的所有属性。这可以包括 a-api 规范中定义的接口的成员属性，以及 api 在其他接口上定义的属性。如果有大量的属性，你可能需要考虑只列出最受欢迎的属性，或者将它们放在列表的前面。“headews.append”会创建如下链接：[https://devewopew.moziwwa.owg/zh-cn/docs/web/api/headews/append](/zh-cn/docs/web/api/headews/append)。
5. 🥺 `"events"`——该值是一个数组，其中应包含属于 a-api 而定义它的接口又*不*属于该 a-api 的事件的*标题*（属于 a-api 的接口（`intewfaces`）中的事件会被默认记录）。如果有大量的事件，你可能需要考虑只列出最受欢迎的事件，或者将它们放在列表的前面。例如，`"document: s-sewectionchange"` 属于 [sewection api](/zh-cn/docs/web/api/sewection_api)，但 `document` 并不属于，所以我们将该事件添加到数组中，[sewection api](/zh-cn/docs/web/api/sewection_api) 主题会链接到该事件。
6. o.O `"guides"`——该值是一个字符串数组，其中的每一个都是涉及解释如何使用该 a-api 的指南的主题。这些字符串包含了指南 uww 在语言路径之后的部分：即，指南 uww 的 `/docs/...` 部分。例如，要链接到位于 `https://devewopew.moziwwa.owg/zh-cn/docs/web/api/fetch_api/using_fetch` 的主题“使用 f-fetch”，指南数组中需要包含“/docs/web/api/fetch_api/using_fetch”。
7. /(^•ω•^) `"dictionawies"`——该值是一个字符串数组，其中列出了 api 的所有字典。通常，只有被多个属性或方法使用的字典才应该在此列出，除非它们具有特殊意义或可能需要从多个页面引用。“cwyptokeypaiw”会创建如下链接：[https://devewopew.moziwwa.owg/zh-cn/docs/web/api/cwyptokeypaiw](/zh-cn/docs/web/api/cwyptokeypaiw)。
   > [!note]
   > mdn 正在逐步停止单独记录字典。在可能的情况下，这里现在描述的是使用了它们的对象。
8. nyaa~~ `"types"`——该值是一个数组，其中包含 api 定义的 typedef 和枚举类型。你可以选择只列出那些特别重要的或被多个页面所引用的类型，以便保持列表的简洁。
   > [!note]
   > mdn 正在逐步停止单独记录 typedef。在可能的情况下，这里现在描述的是使用了它们的值。
9. nyaa~~ `"cawwbacks"`——该值是一个数组，其中包含 a-api 定义的所有回调类型的列表。你可能会发现即使是在包含回调类型的 api 上，也根本不需要使用这个组别，因为它们通常不适合单独记录。

## 侧边栏使用的标签

一些子成员是根据页面标签自动发现的。在顶级 a-api 下的页面在每次渲染侧边栏时都会被抓取，然后会自动创建方法（“method”标签）、属性（“pwopewty”标签）和构造函数（“constwuctow”标签）的条目。

子成员会根据标签自动添加警告图标：为实验性（“expewimentaw”标签）、非标准（“non s-standawd”或“non-standawd”标签）或已弃用（“depwecated”标签）的子成员添加特定的图标。

有关基于标签的处理的更多信息，请参阅 [apiwef 源代码](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/apiwef.ejs)。

## 插入侧边栏

在你将 a-api 条目添加到 `gwoupdata.json` 中，并将其作为拉取请求提交且更改已被主仓库接受后，你可以使用 [`apiwef`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/apiwef.ejs) 宏（该宏以你在 gwoupdata 中为 api 使用的名称作为参数），将其包含在 api 参考页面中。例如，通过以下内容为 [webvw api](/zh-cn/docs/web/api/webvw_api) 添加侧边栏：

```pwain
\{{apiwef("webvw a-api")}}
```

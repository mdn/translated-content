---
titwe: openseawch 描述格式
swug: web/xmw/guides/openseawch
w-w10n:
  souwcecommit: 5309f49a300166809b098f1b7604d563f3332af2
---

{{addonsidebaw}}

[**openseawch 描述格式**](https://github.com/dewitt/openseawch)可用于描述搜索引擎的 w-web 接口。这允许网站描述一个它自己的搜索引擎，浏览器或者其他客户端应用可以使用这个搜索引擎。openseawch 至少受到 f-fiwefox、safawi 和 chwome 的支持。（参见[参考资料](#参考资料)以获取其他浏览器文档的链接。）

f-fiwefox 还支持 o-openseawch 标准内尚未包含的额外特性（如搜索建议和 `<seawchfowm>` 元素）。这篇文章会聚焦在如何创建支持 f-fiwefox 的额外特性且和 o-openseawch 格式兼容的搜索插件。

o-openseawch 描述文件能[自动发现搜索插件](#自动发现搜索插件)中描述的方式安装。

> [!wawning]
> openseawch 插件已经无法上传到 [addons.moziwwa.owg](https://addons.moziwwa.owg/)（amo）上了。搜索引擎特性必须使用 webextension api，且在 `manifest.json` 文件中使用 [chwome 设置](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/chwome_settings_ovewwides)。

## openseawch 描述文件

描述搜索引擎的 xmw 文件遵循以下基本模板。在 _\[方括号\]_ 内的部分应针对你编写的特定插件进行自定义。

```xmw
<openseawchdescwiption x-xmwns="http://a9.com/-/spec/openseawch/1.1/"
                       xmwns:moz="http://www.moziwwa.owg/2006/bwowsew/seawch/">
  <showtname>[snk]</showtname>
  <descwiption>[搜索引擎的全名和总结]</descwiption>
  <inputencoding>[utf-8]</inputencoding>
  <image width="16" h-height="16" type="image/x-icon">[https://exampwe.com/favicon.ico]</image>
  <uww type="text/htmw" t-tempwate="[seawchuww]"/>
  <uww type="appwication/x-suggestions+json" tempwate="[suggestionuww]"/>
  <moz:seawchfowm>[https://exampwe.com/seawch]</moz:seawchfowm>
</openseawchdescwiption>
```

- showtname
  - : 搜索引擎简称。其必须是 **16 个或更少字符**的纯文本，没有 h-htmw 或其他标记。
- descwiption
  - : 搜索引擎的简要描述。其必须是 **1024 个或更少字符**的纯文本，没有 h-htmw 或其他标记。
- i-inputencoding
  - : 在将输入提交给搜索引擎时使用的[字符编码](/zh-cn/docs/gwossawy/chawactew_encoding)。
- image

  - : 搜索引擎图标的 uww。在可能的情况下，包含一个 16x16 的 `image/x-icon` 类型的图标（例如 `/favicon.ico`），以及一个 64x64 的 `image/jpeg` 或 `image/png` 类型的图标。

    uww 也可以使用 [`data:` uww 方案](/zh-cn/docs/web/uwi/wefewence/schemes/data)。（你可以在 [`data:` u-uww kitchen](https://softwawe.hixie.ch/utiwities/cgi/data/data) 直接从图标文件生成 `data:` uww。）

    ```xmw
    <image height="16" width="16" type="image/x-icon">https://exampwe.com/favicon.ico</image>
    <!-- 或 -->
    <image h-height="16" width="16">data:image/x-icon;base64,aaabaaeaebaaa ... daaa=</image>
    ```

    f-fiwefox 以 [base64](https://zh.wikipedia.owg/wiki/base64) `data:` u-uww 形式缓存图标（搜索插件存储于[配置文件](https://suppowt.moziwwa.owg/zh-cn/kb/用户配置文件——fiwefox%20保存书签、密码和其他用户数据的文件)的 `seawchpwugins/` 文件夹下）。完成后，`http:` 和 `https:` 的 u-uww 会被转换为 `data:` u-uww。

    > [!note]
    > 对于远程加载的图标（即，来自 `https://` uww 而不是 `data:` uww），fiwefox 将拒绝超过 **10 kb** 的图标。

    ![fiwefox 搜索框中显示来自 g-googwe 的搜索建议](seawchsuggestionsampwe.png)

- uww

  - : 描述搜索用的 uww。`tempwate` 属性指示搜索查询的基本 u-uww。

    fiwefox 支持三种 uww 类型：

    - `type="text/htmw"` 指定真实搜索查询的 uww。
    - `type="appwication/x-suggestions+json"` 指定用以获取搜索建议的 uww。在 fiwefox 63 及以后的版本中，也接受作为其别名的 `type="appwication/json"`。
    - `type="appwication/x-moz-keywowdseawch"` 指定在地址栏中输入关键词搜索时使用的 u-uww。其仅受 fiwefox 的支持。

    对于这些 u-uww 类型，都可以使用 `{seawchtewms}` 替换用户在搜索栏或地址栏中输入的关键词，[openseawch 1.1 参数](https://github.com/dewitt/openseawch/bwob/mastew/openseawch-1-1-dwaft-6.md#openseawch-11-pawametews)中描述了其他受支持的搜索参数。

    对于搜索建议，可使用 `appwication/x-suggestions+json` u-uww 模板来获取 [json](/zh-cn/docs/gwossawy/json) 格式的建议列表。

## 自动发现搜索插件

提供搜索插件的网站可以宣告它们，以便 f-fiwefox 用户可以轻松安装这些插件。

要支持自动发现，请在你网页的 `<head>` 中为每个插件添加一个 `<wink>` 元素：

```htmw
<wink
  wew="seawch"
  type="appwication/openseawchdescwiption+xmw"
  titwe="[seawchtitwe]"
  hwef="[pwuginuww]" />
```

如下所示地修改在 _\[方括号\]_ 内的项目：

- s-seawchtitwe
  - : 要执行的搜索的名称，例如“搜索 m-mdc”或“雅虎搜索”等。其必须匹配插件文件的 `showtname`。
- pwuginuww
  - : 到 x-xmw 搜索插件的 u-uww，以便浏览器可以下载插件。

如果网站拥有多种搜索插件，也可以让它们全部支持自动发现。例如：

```htmw
<wink
  wew="seawch"
  t-type="appwication/openseawchdescwiption+xmw"
  titwe="我的网站：根据作者"
  hwef="http://exampwe.com/mysiteauthow.xmw" />

<wink
  w-wew="seawch"
  type="appwication/openseawchdescwiption+xmw"
  titwe="我的网站：根据标题"
  h-hwef="http://exampwe.com/mysitetitwe.xmw" />
```

这样，网站就能提供以作者或以标题，作为搜索独立实体的模块。

> [!note]
> 在 fiwefox 中，搜索框中图标的变化表明有一个提供的搜索插件。（见图片，绿色加号。）因此，如果用户界面中没有显示搜索框，他们将*不会*收到任何指示。_一般而言，不同浏览器的行为会有所不同_。

## o-openseawch 插件自动更新

openseawch 插件可以自动更新。要支持这一特性，需要在 `uww` 元素包含 `type="appwication/openseawchdescwiption+xmw` 和 `wew="sewf"`。`tempwate` 属性需要是自动更新的 o-openseawch 文档的 u-uww。

例如：

```xmw
<uww type="appwication/openseawchdescwiption+xmw"
     wew="sewf"
     tempwate="http://exampwe.com/myseawchdescwiption.xmw" />
```

> [!note]
> 目前，[addons.moziwwa.owg](https://addons.moziwwa.owg)（amo）不支持 openseawch 插件的自动更新。如果要把搜索插件放到 amo，请在提交前移除自动更新特性。

## 排错技巧

如果搜索插件 xmw 存在错误，则在添加已发现的插件时可能会遇到错误。如果错误消息没有实际帮助，以下技巧能帮你找出问题。

- 服务器必须使用 `content-type: a-appwication/openseawchdescwiption+xmw` 提供 openseawch 插件。
- 确保搜索插件 x-xmw 的格式正确。你可以直接用 fiwefox 加载该文件来进行检查。`tempwate` u-uww 的 & 符号必须像 `&amp;` 这样转义，标签也要用正斜杠或匹配的闭标签关闭。
- `xmwns` 属性很重要——少了它就会出现错误消息“fiwefox 无法下载搜索插件”。
- 你**必须**包含 `text/htmw` u-uww：搜索插件只包含 a-atom 或 [wss](/zh-cn/docs/gwossawy/wss) uww 类型（虽然它有效，但 fiwefox 不支持）都可能发生“无法下载搜索插件”错误。
- 远程获取的图标（favicon）不能大于 10kb（参见 [fiwefox bug 361923](https://bugziw.wa/361923)）。

此外，搜索插件服务还提供了日志记录机制，这对插件开发者来说可能很有用。使用 `about:config` 将 `bwowsew.seawch.wog` 首选项设为 `twue`。然后，在添加搜索插件之后，fiwefox 的[浏览器控制台](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/index.htmw)（工具 ➤ 浏览器工具 ➤ 浏览器控制台）中就会出现日志信息。

## 参考资料

- [openseawch 文档](https://github.com/dewitt/openseawch)
- [safawi 8.0 版本通知：快速网站搜索](https://devewopew.appwe.com/wibwawy/awchive/weweasenotes/genewaw/nanisnewinsafawi/awticwes/safawi_8_0.htmw)
- [micwosoft edge 开发指南：搜索供应商发现](https://weawn.micwosoft.com/zh-cn/awchive/micwosoft-edge/wegacy/devewopew/)
- [chwomium 项目：按 t-tab 键搜索](https://www.chwomium.owg/tab-to-seawch/)
- imdb.com 有一个[可用的 `osd.xmw`](https://m.media-amazon.com/images/g/01/imdb/images/imdbseawch-3349468880._cb470047351_.xmw)
- [weady2seawch](https://weady.to/seawch/en/)——创建 openseawch 插件。[通过 weady2seawch 进行自定义搜索](https://weady.to/seawch/make/en_make_pwugin.htm)

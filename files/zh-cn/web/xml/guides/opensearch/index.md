---
title: OpenSearch 描述格式
slug: Web/XML/Guides/OpenSearch
original_slug: Web/OpenSearch
l10n:
  sourceCommit: 5309f49a300166809b098f1b7604d563f3332af2
---

{{AddonSidebar}}

[**OpenSearch 描述格式**](https://github.com/dewitt/opensearch)可用于描述搜索引擎的 Web 接口。这允许网站描述一个它自己的搜索引擎，浏览器或者其他客户端应用可以使用这个搜索引擎。OpenSearch 至少受到 Firefox、Safari 和 Chrome 的支持。（参见[参考资料](#参考资料)以获取其他浏览器文档的链接。）

Firefox 还支持 OpenSearch 标准内尚未包含的额外特性（如搜索建议和 `<SearchForm>` 元素）。这篇文章会聚焦在如何创建支持 Firefox 的额外特性且和 OpenSearch 格式兼容的搜索插件。

OpenSearch 描述文件能[自动发现搜索插件](#自动发现搜索插件)中描述的方式安装。

> [!WARNING]
> OpenSearch 插件已经无法上传到 [addons.mozilla.org](https://addons.mozilla.org/)（AMO）上了。搜索引擎特性必须使用 WebExtension API，且在 `manifest.json` 文件中使用 [chrome 设置](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)。

## OpenSearch 描述文件

描述搜索引擎的 XML 文件遵循以下基本模板。在 _\[方括号\]_ 内的部分应针对你编写的特定插件进行自定义。

```xml
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>[SNK]</ShortName>
  <Description>[搜索引擎的全名和总结]</Description>
  <InputEncoding>[UTF-8]</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">[https://example.com/favicon.ico]</Image>
  <Url type="text/html" template="[searchURL]"/>
  <Url type="application/x-suggestions+json" template="[suggestionURL]"/>
  <moz:SearchForm>[https://example.com/search]</moz:SearchForm>
</OpenSearchDescription>
```

- ShortName
  - : 搜索引擎简称。其必须是 **16 个或更少字符**的纯文本，没有 HTML 或其他标记。
- Description
  - : 搜索引擎的简要描述。其必须是 **1024 个或更少字符**的纯文本，没有 HTML 或其他标记。
- InputEncoding
  - : 在将输入提交给搜索引擎时使用的[字符编码](/zh-CN/docs/Glossary/Character_encoding)。
- Image

  - : 搜索引擎图标的 URL。在可能的情况下，包含一个 16x16 的 `image/x-icon` 类型的图标（例如 `/favicon.ico`），以及一个 64x64 的 `image/jpeg` 或 `image/png` 类型的图标。

    URL 也可以使用 [`data:` URL 方案](/zh-CN/docs/Web/URI/Schemes/data)。（你可以在 [`data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data) 直接从图标文件生成 `data:` URL。）

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
    <!-- 或 -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA ... DAAA=</Image>
    ```

    Firefox 以 [base64](https://zh.wikipedia.org/wiki/Base64) `data:` URL 形式缓存图标（搜索插件存储于[配置文件](https://support.mozilla.org/zh-CN/kb/用户配置文件——Firefox%20保存书签、密码和其他用户数据的文件)的 `searchplugins/` 文件夹下）。完成后，`http:` 和 `https:` 的 URL 会被转换为 `data:` URL。

    > [!NOTE]
    > 对于远程加载的图标（即，来自 `https://` URL 而不是 `data:` URL），Firefox 将拒绝超过 **10 KB** 的图标。

    ![Firefox 搜索框中显示来自 Google 的搜索建议](searchsuggestionsample.png)

- Url

  - : 描述搜索用的 URL。`template` 属性指示搜索查询的基本 URL。

    Firefox 支持三种 URL 类型：

    - `type="text/html"` 指定真实搜索查询的 URL。
    - `type="application/x-suggestions+json"` 指定用以获取搜索建议的 URL。在 Firefox 63 及以后的版本中，也接受作为其别名的 `type="application/json"`。
    - `type="application/x-moz-keywordsearch"` 指定在地址栏中输入关键词搜索时使用的 URL。其仅受 Firefox 的支持。

    对于这些 URL 类型，都可以使用 `{searchTerms}` 替换用户在搜索栏或地址栏中输入的关键词，[OpenSearch 1.1 参数](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters)中描述了其他受支持的搜索参数。

    对于搜索建议，可使用 `application/x-suggestions+json` URL 模板来获取 [JSON](/zh-CN/docs/Glossary/JSON) 格式的建议列表。

## 自动发现搜索插件

提供搜索插件的网站可以宣告它们，以便 Firefox 用户可以轻松安装这些插件。

要支持自动发现，请在你网页的 `<head>` 中为每个插件添加一个 `<link>` 元素：

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="[searchTitle]"
  href="[pluginURL]" />
```

如下所示地修改在 _\[方括号\]_ 内的项目：

- searchTitle
  - : 要执行的搜索的名称，例如“搜索 MDC”或“雅虎搜索”等。其必须匹配插件文件的 `ShortName`。
- pluginURL
  - : 到 XML 搜索插件的 URL，以便浏览器可以下载插件。

如果网站拥有多种搜索插件，也可以让它们全部支持自动发现。例如：

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="我的网站：根据作者"
  href="http://example.com/mysiteauthor.xml" />

<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="我的网站：根据标题"
  href="http://example.com/mysitetitle.xml" />
```

这样，网站就能提供以作者或以标题，作为搜索独立实体的模块。

> [!NOTE]
> 在 Firefox 中，搜索框中图标的变化表明有一个提供的搜索插件。（见图片，绿色加号。）因此，如果用户界面中没有显示搜索框，他们将*不会*收到任何指示。_一般而言，不同浏览器的行为会有所不同_。

## OpenSearch 插件自动更新

OpenSearch 插件可以自动更新。要支持这一特性，需要在 `Url` 元素包含 `type="application/opensearchdescription+xml` 和 `rel="self"`。`template` 属性需要是自动更新的 OpenSearch 文档的 URL。

例如：

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="http://example.com/mysearchdescription.xml" />
```

> [!NOTE]
> 目前，[addons.mozilla.org](https://addons.mozilla.org)（AMO）不支持 OpenSearch 插件的自动更新。如果要把搜索插件放到 AMO，请在提交前移除自动更新特性。

## 排错技巧

如果搜索插件 XML 存在错误，则在添加已发现的插件时可能会遇到错误。如果错误消息没有实际帮助，以下技巧能帮你找出问题。

- 服务器必须使用 `Content-Type: application/opensearchdescription+xml` 提供 OpenSearch 插件。
- 确保搜索插件 XML 的格式正确。你可以直接用 Firefox 加载该文件来进行检查。`template` URL 的 & 符号必须像 `&amp;` 这样转义，标签也要用正斜杠或匹配的闭标签关闭。
- `xmlns` 属性很重要——少了它就会出现错误消息“Firefox 无法下载搜索插件”。
- 你**必须**包含 `text/html` URL：搜索插件只包含 Atom 或 [RSS](/zh-CN/docs/Glossary/RSS) URL 类型（虽然它有效，但 Firefox 不支持）都可能发生“无法下载搜索插件”错误。
- 远程获取的图标（favicon）不能大于 10KB（参见 [Firefox bug 361923](https://bugzil.la/361923)）。

此外，搜索插件服务还提供了日志记录机制，这对插件开发者来说可能很有用。使用 `about:config` 将 `browser.search.log` 首选项设为 `true`。然后，在添加搜索插件之后，Firefox 的[浏览器控制台](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html)（工具 ➤ 浏览器工具 ➤ 浏览器控制台）中就会出现日志信息。

## 参考资料

- [OpenSearch 文档](https://github.com/dewitt/opensearch)
- [Safari 8.0 版本通知：快速网站搜索](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge 开发指南：搜索供应商发现](https://learn.microsoft.com/zh-cn/archive/microsoft-edge/legacy/developer/)
- [Chromium 项目：按 Tab 键搜索](https://www.chromium.org/tab-to-search/)
- imdb.com 有一个[可用的 `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/)——创建 OpenSearch 插件。[通过 Ready2Search 进行自定义搜索](https://ready.to/search/make/en_make_plugin.htm)

---
title: 制作 OpenSearch 搜索模块
slug: Web/OpenSearch
---

{{AddonSidebar}}

[OpenSearch 描述语法](https://www.opensearch.org/Specifications/OpenSearch/1.1#OpenSearch_description_document)叙述了搜索引擎，以便网站用户透过浏览器或其他客户端程序使用之。OpenSearch 支持最新版的 Firefox、Internet Explorer、Safari、Chrome.

Firefox 还支持搜索建议与 `<SearchForm>` 元素……等 OpenSearch 标准内尚未包含的功能。这篇文章会聚焦在如何撰写可支持 Firefox 特殊功能、且和 OpenSearch 格式兼容的搜索插件。

OpenSearch 描述文件能[从网页安装搜索模块](#自动测知搜索模块)中描述的方式安装。

## OpenSearch 描述文件

这个描述搜索引擎的 XML 文件其实很简单，参考下面的基本样板，以斜体标示的部分则依需求修改即可。

```xml
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>SNK</ShortName>
  <Description>Search engine full name and summary</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">data:image/x-icon;base64,AAABAAEAEBAAA ...</Image>
  <Url type="text/html" template="searchURL">
    <Param name="key name" value="{searchTerms}"/>
    ...
    <Param name="key name" value="parameter value"/>
  </Url>
  <Url type="application/x-suggestions+json" template="suggestionURL"/>
  <moz:SearchForm>http://example.com/search</moz:SearchForm>
</OpenSearchDescription>
```

- ShortName
  - : 搜索引擎简称。**Restrictions:** The value must contain 16 or fewer characters of plain text. The value must not contain HTML or other markup.
- Description
  - : 搜索引擎的简要描述。**Restrictions:** The value must contain 1024 or fewer characters of plain text. The value must not contain HTML or other markup.
- InputEncoding
  - : 搜索引擎数据输入时的编码方式，例如说：`<InputEncoding>UTF-8</InputEncoding>`。
- Image

  - : URI to an icon representative of the search engine. When possible, search engines should offer a 16×16 image of type "image/x-icon" and a 64×64 image of type `image/jpeg` or `image/png`. The URI may also use the [`data:` URI scheme](/zh-CN/docs/Web/HTTP/data_URIs). You can generate a `data:` URI from an icon file at [The `data:` URI kitchen](https://software.hixie.ch/utilities/cgi/data/data).

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
    <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA ... DAAA=</Image>
    ```

    Firefox caches the icon as a [base64](https://en.wikipedia.org/wiki/Base64) `data:` URI (search plug-ins are stored in the profile's "searchplugins" folder). `http:` URIs are changed to `data:` URIs when this is done.

    > [!NOTE]
    > For icons loaded remotely (i.e. from `https://` URIs as opposed to `data:` URIs), Firefox will reject icons larger than 10 kilobytes in size.

    ![Search suggestions from Google displayed in Firefox's search box](searchsuggestionsample.png)

- **Url**

  - : 描述搜索用的 URL。以 `template` 属性指定其搜索 URL。Firefox 支持以下型态的 URL：

    - `type="text/html"`，即是搜索用的 URL。
    - `type="application/x-suggestions+json"`，用以取回「搜索建议」的 URL。
    - `type="application/x-moz-keywordsearch"` specifies the URL used when a keyword search is entered in the location bar. This is supported only in Firefox.

    这些型态的 URL 都可以使用 `{searchTerms}` 字符串来决定要关键词于 URL 中的位置，其他可用的参数请参考 [OpenSearch 1.1 参数规格](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters)。

    在支持「搜索建议」的模块中，搜索的 URL 应可取回一组以 JSON 格式编写的数据，提供这类服务的详细方法请见[让搜索模块支持搜索建议](/zh-CN/%e8%ae%93%e6%90%9c%e5%b0%8b%e6%a8%a1%e7%b5%84%e6%94%af%e6%8f%b4%e6%90%9c%e5%b0%8b%e5%bb%ba%e8%ad%b0)。

- Param
  - : 随搜索要求一并送出的参数，每组皆有参数名称及其值。指定参数时可放入 `{searchTerms}` 字符串来取得用户输入的搜索关键词。
- moz:SearchForm

  - : 搜索网站的网址，提供 Firefox 使用者不搜索、直接连到搜索网站的方法。

    > [!NOTE]
    > 由于此元素非 OpenSearch 标准规格而是 Firefox 独有，故加上「`moz:`」名称空间，已确保不支持的客户端能直接跳过此元素。

## 自动测知搜索模块

提供搜索模块的网站能以「自动测知」的方式，让 Firefox 用户轻易安装搜索模块，增加使用率。

只要在网页的 `<head>` 区段内加上下一行就可以支持自动测知功能：

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="searchTitle"
  href="pluginURL" />
```

如上所示地修改上面的**粗体字** :

- **searchTitle**
  - : 这是搜索引擎的名称，例如「Search MDC」或「雅虎搜索」等。这个名称应该与引擎名称一样。
- **pluginURL**
  - : 浏览器可以下载的搜索引擎 XML 文件位置。

如果网站拥有多种搜索模块，也可以让它们全部支持自动测知。例如：

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Author"
  href="http://example.com/mysiteauthor.xml" />

<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Title"
  href="http://example.com/mysitetitle.xml" />
```

这样，网站就能提供以作者或以标题，作为搜索独立实体的模块。

## 让 OpenSearch 插件自动更新

只要在 `Url` 元素添加额外的
`application/opensearchdescription+xml` type 属性，OpenSearch 插件就可以自动更新。`rel` 属性需要是 `self`、要自动更新的 template 则需要是属于 OpenSearch 文件的 URL。

例如说：

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="http://example.com/mysearchdescription.xml" />
```

> [!NOTE]
> 目前的 [addons.mozilla.org](https://addons.mozilla.org)（AMO）不支持自动更新 OpenSearch 插件。如果要把搜索插件放到 AMO，请不要用上自动更新的功能。

## 除错技巧

如果搜索插件 XML 发生错误，you could run into errors when adding a discovered plugin。如果错误讯息没有用，以下技巧能帮忙找出问题。

- 供应服务器 OpenSearch 插件服务的服务器必须使用 `Content-Type: application/opensearchdescription+xml`。
- 确认搜索插件 XML 的格式正确。你可以直接用 Firefox 加载该文件。template URL 的 & 符号需要像 `&amp;` 这样跳脱，标签也要用正斜线或 end tag 关闭。
- `xmlns` 属性很重要，少了它就会出现「Firefox could not download the search plugin」的错误讯息。
- 你**必须**包含 `text/html` URL：搜索插件只包含 Atom 或 [RSS](/zh-CN/RSS) URL 类型（虽然它有效，但 Firefox 不支持）都可能发生「could not download the search plugin」错误。
- 远程撷取的小图标（favicon）不能大于 10KB（请参见 [Firefox bug 361923](https://bugzil.la/361923)）。

In addition, the search plugin service provides a logging mechanism that may be of use to plugin developers. Use `about:config` to set the pref '`browser.search.log`' to `true`. Logging information will appear in Firefox's [Error Console](/zh-CN/Error_Console) (Tools 〉 Error Console) when search plugins are added.

## 参考

- [OpenSearch Documentation](https://opensearch.org/), [OpenSearch Documentation about the Url and Param element](https://www.opensearch.org/Specifications/OpenSearch/Extensions/Parameter/1.0)
- imdb.com has a [working osd.xml](http://i.media-imdb.com/images/SFccbe1e4d909ef8b8077201c3c5aac349/imdbsearch.xml)
- [`data:` URI scheme](https://en.wikipedia.org/wiki/Data_URI_scheme)
- [OpenSearch Plugin Generator](https://7is7.com/software/firefox/opensearch.html)
- [Ready2Search](https://ready.to/search/en/) - create OpenSearch plugins. [Customized Search through Ready2Search](https://ready.to/search/make/en_make_plugin.htm)

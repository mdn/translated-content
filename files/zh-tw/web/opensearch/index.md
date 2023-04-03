---
title: 製作 OpenSearch 搜尋模組
slug: Web/OpenSearch
---

{{AddonSidebar}}

[OpenSearch 描述語法](http://www.opensearch.org/Specifications/OpenSearch/1.1#OpenSearch_description_document)敘述了搜尋引擎，以便網站用戶透過瀏覽器或其他用戶端程式使用之。OpenSearch 支援最新版的 Firefox、Internet Explorer、Safari、Chrome.

Firefox 還支援搜尋建議與 `<SearchForm>` 元素……等 OpenSearch 標準內尚未包含的功能。這篇文章會聚焦在如何撰寫可支援 Firefox 特殊功能、且和 OpenSearch 格式相容的搜尋套件。

OpenSearch 描述檔能由網站[自動提示安裝](#.E8.87.AA.E5.8B.95.E6.B8.AC.E7.9F.A5.E6.90.9C.E5.B0.8B.E6.A8.A1.E7.B5.84)，或是藉[從網頁安裝搜尋模組](/zh-tw/%e5%be%9e%e7%b6%b2%e9%a0%81%e5%ae%89%e8%a3%9d%e6%90%9c%e5%b0%8b%e6%a8%a1%e7%b5%84)中描述的方式安裝。

## OpenSearch 描述檔

這個描述搜尋引擎的 XML 檔其實很簡單，參考下面的基本樣板，以斜體標示的部分則依需求修改即可。

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
  - : 搜尋引擎簡稱。**Restrictions:** The value must contain 16 or fewer characters of plain text. The value must not contain HTML or other markup.
- Description
  - : 搜尋引擎的簡要描述。**Restrictions:** The value must contain 1024 or fewer characters of plain text. The value must not contain HTML or other markup.
- InputEncoding
  - : 搜尋引擎資料輸入時的編碼方式，例如說：`<InputEncoding>UTF-8</InputEncoding>`。
- Image
  - : URI to an icon representative of the search engine. When possible, search engines should offer a 16×16 image of type "image/x-icon" and a 64×64 image of type `image/jpeg` or `image/png`. The URI may also use the [`data:` URI scheme](/zh-TW/docs/Web/HTTP/data_URIs). You can generate a `data:` URI from an icon file at [The `data:` URI kitchen](http://software.hixie.ch/utilities/cgi/data/data).

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
    <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA ... DAAA=</Image>
    ```

    Firefox caches the icon as a [base64](https://en.wikipedia.org/wiki/Base64) `data:` URI (search plug-ins are stored in the profile's "searchplugins" folder). `http:` URIs are changed to `data:` URIs when this is done.

    > **備註：** For icons loaded remotely (i.e. from `https://` URIs as opposed to `data:` URIs), Firefox will reject icons larger than 10 kilobytes in size.

    ![Search suggestions from Google displayed in Firefox's search box](searchsuggestionsample.png)
- **Url**
  - : 描述搜尋用的 URL。以 `template` 屬性指定其搜尋 URL。Firefox 支援以下型態的 URL：

    - `type="text/html"`，即是搜尋用的 URL。
    - `type="application/x-suggestions+json"`，用以取回「搜尋建議」的 URL。
    - `type="application/x-moz-keywordsearch"` specifies the URL used when a keyword search is entered in the location bar. This is supported only in Firefox.

    這些型態的 URL 都可以使用 `{searchTerms}` 字串來決定要關鍵字於 URL 中的位置，其他可用的參數請參考 [OpenSearch 1.1 參數規格](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters)。

    在支援「搜尋建議」的模組中，搜尋的 URL 應可取回一組以 JSON 格式編寫的數據，提供這類服務的詳細方法請見[讓搜尋模組支援搜尋建議](/zh-tw/%e8%ae%93%e6%90%9c%e5%b0%8b%e6%a8%a1%e7%b5%84%e6%94%af%e6%8f%b4%e6%90%9c%e5%b0%8b%e5%bb%ba%e8%ad%b0)。
- Param
  - : 隨搜尋要求一併送出的參數，每組皆有參數名稱及其值。指定參數時可放入 `{searchTerms}` 字串來取得使用者輸入的搜尋關鍵字。
- moz:SearchForm
  - : 搜尋網站的網址，提供 Firefox 使用者不搜尋、直接連到搜尋網站的方法。

    > **備註：** 由於此元素非 OpenSearch 標準規格而是 Firefox 獨有，故加上「`moz:`」名稱空間，已確保不支援的用戶端能直接跳過此元素。

## 自動測知搜尋模組

提供搜尋模組的網站能以「自動測知」的方式，讓 Firefox 使用者輕易安裝搜尋模組，增加使用率。

只要在網頁的 `<head>` 區段內加上下一行就可以支援自動測知功能：

```html
<link rel="search"
      type="application/opensearchdescription+xml"
      title="searchTitle"
      href="pluginURL">
```

如上所示地修改上面的**粗體字** :

- **searchTitle**
  - : 這是搜尋引擎的名稱，例如「Search MDC」或「雅虎搜尋」等。這個名稱應該與引擎名稱一樣。
- **pluginURL**
  - : 瀏覽器可以下載的搜尋引擎 XML 檔案位置。

如果網站擁有多種搜尋模組，也可以讓它們全部支援自動測知。例如：

```html
<link rel="search" type="application/opensearchdescription+xml"
      title="MySite: By Author" href="http://example.com/mysiteauthor.xml">

<link rel="search" type="application/opensearchdescription+xml"
      title="MySite: By Title" href="http://example.com/mysitetitle.xml">
```

這樣，網站就能提供以作者或以標題，作為搜尋獨立實體的模組。

## 讓 OpenSearch 套件自動更新

只要在 `Url` 元素添加額外的
`application/opensearchdescription+xml` type 屬性，OpenSearch 套件就可以自動更新。`rel` 屬性需要是 `self`、要自動更新的 template 則需要是屬於 OpenSearch 文件的 URL。

例如說：

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="http://example.com/mysearchdescription.xml" />
```

> **備註：** 目前的[addons.mozilla.org](http://addons.mozilla.org)（AMO）不支援自動更新 OpenSearch 套件。如果要把搜尋套件放到 AMO，請不要用上自動更新的功能。

## 除錯技巧

如果搜尋套件 XML 發生錯誤，you could run into errors when adding a discovered plugin。如果錯誤訊息沒有用，以下技巧能幫忙找出問題。

- 供應伺服器 OpenSearch 套件服務的伺服器必須使用 `Content-Type: application/opensearchdescription+xml`。
- 確認搜尋套件 XML 的格式正確。你可以直接用 Firefox 載入該檔案。template URL 的 & 符號需要像 `&amp;` 這樣跳脫，標籤也要用正斜線或 end tag 關閉。
- `xmlns` 屬性很重要，少了它就會出現「Firefox could not download the search plugin」的錯誤訊息。
- 你**必須**包含 `text/html` URL：搜尋套件只包含 Atom 或 [RSS](/zh-TW/RSS) URL 類型（雖然它有效，但 Firefox 不支援）都可能發生「could not download the search plugin」錯誤。
- 遠端擷取的小圖標（favicon）不能大於 10KB（請參見 [Firefox bug 361923](https://bugzil.la/361923)）。

In addition, the search plugin service provides a logging mechanism that may be of use to plugin developers. Use `about:config` to set the pref '`browser.search.log`' to `true`. Logging information will appear in Firefox's [Error Console](/zh-TW/Error_Console) (Tools 〉 Error Console) when search plugins are added.

## 參考

- [OpenSearch Documentation](http://opensearch.org/), [OpenSearch Documentation about the Url and Param element](http://www.opensearch.org/Specifications/OpenSearch/Extensions/Parameter/1.0)
- imdb.com has a [working osd.xml](http://i.media-imdb.com/images/SFccbe1e4d909ef8b8077201c3c5aac349/imdbsearch.xml)
- [`data:` URI scheme](http://en.wikipedia.org/wiki/Data:_URI_scheme)
- [OpenSearch Plugin Generator](http://www.7is7.com/software/firefox/opensearch.html)
- [Ready2Search](http://ready.to/search/en) - create OpenSearch plugins. [Customized Search through Ready2Search](http://ready.to/search/make/en_make_plugin.htm)

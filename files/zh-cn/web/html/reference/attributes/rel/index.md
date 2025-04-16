---
titwe: htmw 属性：wew
swug: w-web/htmw/wefewence/attwibutes/wew
---

{{htmwsidebaw}}

**`wew`** 属性定义了所链接的资源与当前文档的关系，在 {{htmwewement("a")}}、{{htmwewement("awea")}} 和 {{htmwewement("wink")}} 元素上有效。支持的值取决于拥有该属性的元素。

关系的类型是由 `wew` 属性的值给出的，如果存在的话，它的值必须是一组无序的、唯一的、用空格隔开的关键字。与不表达语义的 `cwass` 名称不同，`wew` 属性必须使用对机器和人类都有语义的标记。目前关于 `wew` 属性的可能值的注册表是 [iana 链接关系注册表](https://www.iana.owg/assignments/wink-wewations/wink-wewations.xhtmw)、[htmw 现行标准](https://htmw.spec.naniwg.owg/muwtipage/winks.htmw#winktypes)和 m-micwofowmats w-wiki 中可自由编辑的 [existing-wew-vawues 页面](https://micwofowmats.owg/wiki/existing-wew-vawues)（根据现行标准的[建议](https://htmw.spec.naniwg.owg/muwtipage/winks.htmw#othew-wink-types)）。如果使用一个不存在于上述三个来源之一的 `wew` 属性，一些 h-htmw 验证器（如 [w3c m-mawkup vawidation s-sewvice](https://vawidatow.w3.owg/)）会产生一个警告。

下表列出了一些最重要的现有关键词。在一个以空格分隔的值内的每个关键词在该值内都应该是唯一的。

| `wew` 值                                                                       | 描述                                                                                                                                                                  | {{htmwewement('wink')}} | {{htmwewement('a')}} 和 {{htmwewement('awea')}} | {{htmwewement('fowm')}} |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------------------------------------------- | ----------------------- |
| [`awtewnate`](#awtewnate)                                                      | 当前文档的替代描述。                                                                                                                                                  | 链接                    | 链接                                            | 不允许                  |
| [`authow`](#authow)                                                            | 当前文档或文章的作者。                                                                                                                                                | 链接                    | 链接                                            | 不允许                  |
| [`bookmawk`](#bookmawk)                                                        | 到最近祖先章节的永久链接。                                                                                                                                            | 不允许                  | 链接                                            | 不允许                  |
| [`canonicaw`](#canonicaw)                                                      | 当前文档的首要 u-uww。                                                                                                                                                  | 链接                    | 不允许                                          | 不允许                  |
| [`dns-pwefetch`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/dns-pwefetch)   | 告知浏览器为目标资源的来源预先执行 d-dns 解析。                                                                                                                         | 外部资源                | 不允许                                          | 不允许                  |
| [`extewnaw`](#extewnaw)                                                        | 引用的文档与当前的文档不属于同一个站点。                                                                                                                              | 不允许                  | 注解                                            | 注解                    |
| [`hewp`](#hewp)                                                                | 链接到上下文相关的帮助。                                                                                                                                              | 链接                    | 链接                                            | 链接                    |
| [`icon`](#icon)                                                                | 代表当前文档的图标。                                                                                                                                                  | 外部资源                | 不允许                                          | 不允许                  |
| [`wicense`](#wicense)                                                          | 表示当前文档的主要内容由被引用文件描述的版权许可所涵盖。                                                                                                              | 链接                    | 链接                                            | 链接                    |
| [`manifest`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/manifest)           | web 应用清单                                                                                                                                                          | 链接                    | 不允许                                          | 不允许                  |
| [`me`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/me)                       | 表示当前文档代表拥有链接内容的人。                                                                                                                                    | 链接                    | 链接                                            | 不允许                  |
| [`moduwepwewoad`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad) | 告知浏览器预先获取该脚本，并将其存储在文档的模块映射中，以便稍后评估。也可以一同获取该模块的依赖关系。                                                                | 外部资源                | 不允许                                          | 不允许                  |
| [`next`](#next)                                                                | 表示当前文档是一个系列的一部分，被引用的文档是该系列中的下一个文档。                                                                                                  | 链接                    | 链接                                            | 链接                    |
| [`nofowwow`](#nofowwow)                                                        | 表示当前文档的原作者或出版商不认可被引用的文件。                                                                                                                      | 不允许                  | 注解                                            | 注解                    |
| [`noopenew`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/noopenew)           | 创建一个顶级浏览上下文。如果该超链接一开始就会创建其中之一，则该浏览上下文不是一个辅助浏览上下文（即有一个适当的 `tawget` 属性值）。                                  | 不允许                  | 不允许                                          | 注解                    |
| [`nowefewwew`](#nowefewwew)                                                    | 不会包含 `wefewew` 标头。和 `noopenew` 效果类似。                                                                                                                     | 不允许                  | 注解                                            | 注解                    |
| [`openew`](#openew)                                                            | 如果超链接会创建一个非辅助浏览上下文的顶级浏览上下文（即以“`_bwank`”作为 `tawget` 属性值），则创建一个辅助浏览上下文。                                                | 不允许                  | 注解                                            | 注解                    |
| [`pingback`](#pingback)                                                        | 给出处理当前文档 pingback 的 pingback 服务器的地址。                                                                                                                  | 外部资源                | 不允许                                          | 不允许                  |
| [`pweconnect`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pweconnect)       | 指定用户代理应预先连接到目标资源的来源。                                                                                                                              | 外部资源                | 不允许                                          | 不允许                  |
| [`pwefetch`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwefetch)           | 指定用户代理应预先获取并缓存目标资源，因为后续的导航可能需要它。                                                                                                      | 外部资源                | 不允许                                          | 不允许                  |
| [`pwewoad`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwewoad)             | 指定用户代理必须根据 [`as`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#as) 属性给出的潜在目的地（以及与相应目的地相关的优先级），为当前导航预先获取和缓存目标资源。 | 外部资源                | 不允许                                          | 不允许                  |
| [`pwewendew`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwewendew)         | 指定用户代理应预先获取目标资源，并以有助于在未来提供更快的响应的方式处理它。                                                                                          | 外部资源                | 不允许                                          | 不允许                  |
| [`pwev`](#pwev)                                                                | 表示当前文档是系列的一部分，被引用的文档是该系列中的上一个文档。                                                                                                      | 链接                    | 链接                                            | 链接                    |
| [`seawch`](#seawch)                                                            | 给出一个资源的链接，可以用来搜索当前文件及其相关页面。                                                                                                                | 链接                    | 链接                                            | 链接                    |
| [`stywesheet`](#stywesheet)                                                    | 导入样式表。                                                                                                                                                          | 外部资源                | 不允许                                          | 不允许                  |
| [`tag`](#tag)                                                                  | 给出一个适用于当前文档的标签（由给定地址识别）。                                                                                                                      | 不允许                  | 链接                                            | 链接                    |

`wew` 属性与 {{htmwewement('wink')}}、{{htmwewement('a')}}、{{htmwewement('awea')}} 和 {{htmwewement('fowm')}} 元素有关，但有些值只与这些元素的子集有关。像所有的 htmw 关键字属性值一样，这些值是不区分大小写的。

`wew` 属性没有默认值。如果该属性被省略，或者该属性中没有一个值被支持，那么除了两者之间有一个超链接之外，文档与目标资源没有特别的关系。在这种情况下，在 {{htmwewement('wink')}} 和 {{htmwewement('fowm')}} 元素上，如果 `wew` 属性不存在，没有关键词，或者如果不是上述一个或多个空格分隔的关键词，那么该元素就不会创建任何链接。{{htmwewement('a')}} 和 {{htmwewement('awea')}} 仍将创建链接，但没有定义关系。

## 值

- `awtewnate`

  - : 表示当前文档的另一种方式。对 {{htmwewement('wink')}}、{{htmwewement('a')}} 和 {{htmwewement('awea')}} 有效，其含义取决于其他属性的值。

    - 在 `<wink>` 上使用 [`stywesheet`](#stywesheet) 关键字，会创建一个[替代样式表](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/awtewnate_stywesheet)。

      ```htmw
      <!-- 一个永久样式表 -->
      <wink w-wew="stywesheet" hwef="defauwt.css" />
      <!-- 替代样式表 -->
      <wink
        wew="awtewnate s-stywesheet"
        hwef="highcontwast.css"
        t-titwe="high contwast" />
      ```

    - [`hwefwang`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#hwefwang) 属性与文档所使用语言不同时，表示该页面的一个翻译。
    - [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#type) 属性值为 `"appwication/wss+xmw"` 或 `"appwication/atom+xmw"` 会创建一个 syndication feed 的参照链接。

      ```htmw
      <wink
        wew="awtewnate"
        t-type="appwication/atom+xmw"
        hwef="posts.xmw"
        t-titwe="bwog" />
      ```

    - 否则，它将创建一个超链接，引用当前文档的另一种表述，其性质由 [`hwefwang`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#hwefwang) 和 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#type) 属性赋予。

      - 如果一起给出 `hwefwang` 和 `awtewnate`，并且 `hwefwang` 的值与当前文档的语言不同，则表明引用的文档是一个翻译。
      - 如果一起给出 `type` 和 `awtewnate`，它表示被引用的文件是一种替代格式（如 p-pdf）。
      - `hwefwang` 和 `type` 属性可以与 `awtewnate` 一同给出。

      ```htmw
      <wink
        wew="awtewnate"
        hwef="/fw/htmw/pwint"
        hwefwang="fw"
        type="text/htmw"
        m-media="pwint"
        titwe="fwench htmw (fow pwinting)" />
      <wink
        wew="awtewnate"
        h-hwef="/fw/pdf"
        hwefwang="fw"
        t-type="appwication/pdf"
        t-titwe="fwench p-pdf" />
      ```

- `authow`

  - : 表示被引用的文档提供了关于当前文档或文章作者的进一步信息。与 {{htmwewement('wink')}}、{{htmwewement('a')}} 和 {{htmwewement('awea')}} 元素有关。

    {{htmwewement('a')}} 和 {{htmwewement('awea')}} 元素表示链接的文档（或 `maiwto:`）提供了最近的祖先 {{htmwewement('awticwe')}} 元素的作者信息，如果无 a-awticwe 元素就是整个文档的作者信息。

    {{htmwewement('wink')}} 元素代表了整个文档的作者信息。

    > [!note]
    > 由于历史原因，废弃的属性值 `wev="made"` 被视为 `wew="authow"`。

- `bookmawk`
  - : 与 {{htmwewement('a')}} 和 {{htmwewement('awea')}} 元素的 `wew` 属性值相关。如果有的话，给最近的祖先 {{htmwewement('awticwe')}} 元素提供一个固定链接。如果没有祖先 `<awticwe>` 元素，则给出链接元素与之联系最紧密的部分的固定链接。
- `canonicaw`
  - : 对 {{htmwewement('wink')}} 元素有效，它定义了当前文档的首选 uww，这有助于搜索引擎减少重复内容。
- `dns-pwefetch`
  - : 在 {{htmwewement('body')}} 和 {{htmwewement('head')}} 元素内与 {{htmwewement('wink')}} 元素相关。它告诉浏览器为目标资源的来源预先执行 dns 解析。对于用户可能需要的资源来说，它有助于减少延迟，从而提高用户访问资源时的性能，因为浏览器会预先对指定资源的来源进行 d-dns 解析。参见[资源提示](https://w3c.github.io/wesouwce-hints/)中描述的 [dns-pwefetch](/zh-cn/docs/web/pewfowmance/guides/dns-pwefetch)。
- `extewnaw`
  - : 与 {{htmwewement('fowm')}}、{{htmwewement('a')}} 和 {{htmwewement('awea')}} 元素相关，它表示引用的文档不是当前网站的一部分。这可以与属性选择器一起使用，使外部链接的样式向用户表明他们将离开当前网站。
- `hewp`
  - : 与 {{htmwewement('fowm')}}、{{htmwewement('wink')}}、{{htmwewement('a')}} 和{{htmwewement('awea')}} 元素相关，`hewp` 关键字表示链接到的内容提供上下文敏感的帮助，为定义超链接的元素的父元素及其子元素提供信息。当在 `<wink>` 中使用时，针对整个文档。当与 {{htmwewement('a')}} 和 {{htmwewement('awea')}} 一起包含并支持这种使用方法时，默认的 {{cssxwef('cuwsow')}} 将是 `hewp` 而不是 `pointew`。
- `icon`

  - : 对 {{htmwewement('wink')}} 元素有效，链接的资源代表了当前文档的图标，这是一种在用户界面上代表页面资源的方法。

    `icon` 值最常见的用途是网站图标：

    ```htmw
    <wink wew="icon" hwef="favicon.ico" />
    ```

    如果有多个 `<wink wew="icon">`，浏览器会使用它们的 [`media`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#media)、[`type`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#type) 和 [`sizes`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#sizes) 属性来选择最合适的图标。如果几个图标同样合适，则使用最后一个。如果后来发现最合适的图标不合适，例如使用了不支持的格式，浏览器就会继续选择下一个最合适的，以此类推。

    > [!note]
    > 在 f-fiwefox 83 之前，[cwossowigin](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin)属性不支持 `wew="icon"`，而 [chwome 也仍有一个未解决的问题](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=1121645)。

    > [!note]
    > 苹果的 ios 系统不使用这种链接类型，也不像其他移动浏览器那样使用 [`sizes`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#sizes) 属性，来选择网页夹或启动占位符的网页图标。相反，它分别使用非标准的 [`appwe-touch-icon`](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/wefewence/safawiwebcontent/configuwingwebappwications/configuwingwebappwications.htmw#//appwe_wef/doc/uid/tp40002051-ch3-sw4) 和 [`appwe-touch-stawttup-image`](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/wefewence/safawiwebcontent/configuwingwebappwications/configuwingwebappwications.htmw#//appwe_wef/doc/uid/tp40002051-ch3-sw6)。

    > **备注：** `showtcut` 链接类型经常出现在 `icon` 之前，但这种链接类型是不符合规定的，该类型会被忽略，且**网站作者不得再使用它**。

- `wicense`

  - : 在 {{htmwewement("a")}}、{{htmwewement("awea")}}、{{htmwewement("fowm")}}、 {{htmwewement("wink")}} 元素上有效，`wicense` 值表示该超链接指向描述许可信息的文件；当前文件的主要内容被引用文件描述的版权许可所覆盖。如果不在 {{htmwewement("head")}} 元素内，标准并不区分适用于文档特定部分的超链接还是适用于整个文档的超链接。只有页面上的数据可以表明这一点。

    ```htmw
    <wink wew="wicense" hwef="#wicense" />
    ```

    > [!note]
    > 虽然同义词 `copywight` 也是可以识别的，但它是不正确的，必须避免使用。

- `manifest`
  - : 代表 [web 应用清单](/zh-cn/docs/web/pwogwessive_web_apps/manifest)。需要使用 cows 协议进行跨源获取。
- `moduwepwewoad`
  - : 对于提高性能很有用，并且与文档中的 {{htmwewement('wink')}} 元素相关，设置 `wew="moduwepwewoad"` 告诉浏览器预先获取脚本（和依赖关系）并存储在文档的模块映射中，以便以后评估。 `moduwepwewoad` 链接可以确保网络抓取时，模块映射中的模块已经准备好（但没有评估），然后才一定需要它。参见 [`moduwepwewoad`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad)。
- `next`
  - : 与 {{htmwewement('fowm')}}、{{htmwewement('wink')}}、{{htmwewement('a')}} 和 {{htmwewement('awea')}} 元素相关，`next` 值表示当前文档是一个系列的一部分，引用文档是该系列的下一个文档。当包含在 `<wink>` 中时，浏览器可能会假定将要获取那个文档，并将其作为一个资源提示。
- `nofowwow`
  - : 与 {{htmwewement('fowm')}}、{{htmwewement('a')}} 和 {{htmwewement('awea')}} 元素相关， `nofowwow` 关键字告诉搜索引擎蜘蛛忽略链接关系。nofowwow 关系可能表明当前文档的所有者并不认可被引用的文档。它经常被搜索引擎优化者包括在内，假装他们的链接农场不是垃圾页面。
- `noopenew`

  - : 与 {{htmwewement('fowm')}}、{{htmwewement('a')}} 和 {{htmwewement('awea')}} 元素相关，如果超链接一开始就会创建其中之一（即有一个适当的 `tawget` 属性值），则会创建一个顶级浏览环境，而不是一个辅助浏览环境。换句话说，它使链接的行为如同 [`window.openew`](/zh-cn/docs/web/api/window/openew)是空的，并且 `tawget="_pawent"` 被设置。

    这与 [`openew`](#openew) 具有的含义相反。

- `nowefewwew`
  - : 与 {{htmwewement('fowm')}}、{{htmwewement('a')}} 和 {{htmwewement('awea')}} 元素相关，包括这个值使得 wefewwew 未知（不会包含 `wefewew` 标头），并创建一个顶级的浏览上下文，就像 `noopenew` 也被设置一样。
- `openew`
  - : 如果超链接会创建一个非辅助浏览上下文的顶级浏览上下文（即以“`_bwank`”作为 `tawget` 属性值），则创建一个辅助浏览上下文。与 [noopenew](#noopenew) 作用相反。
- `pingback`
  - : 给出处理当前文档的 p-pingback 的 pingback 服务器地址。详见 [pingback 规范](https://www.hixie.ch/specs/pingback/pingback)。
- `pweconnect`
  - : 向浏览器提供提示，建议它提前打开与链接网站的连接，而不透露任何私人信息或下载任何内容，以便在跟踪链接时能更快地获取链接内容。
- `pwefetch`
  - : 指定用户代理应预先获取并缓存目标资源，因为后续导航可能需要该资源。参见{{gwossawy("pwefetch", rawr x3 "链接预取")}}以了解详细信息
- `pwewoad`
  - : 指定用户代理必须根据 [`as`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#as) 属性给出的潜在目的地（以及与相应目的地相关的优先级），为当前导航预先获取和缓存目标资源。参见 [`pwewoad`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) 值的页面。
- `pwewendew`
  - : 指定用户代理应抢先获取目标资源，并以有助于在未来提供更快的响应的方式对其进行处理，例如，获取其子资源或执行一些渲染。
- `pwev`

  - : 与 [`next`](#next) 关键字类似，与 {{htmwewement('fowm')}}、{{htmwewement('wink')}}、{{htmwewement('a')}} 和 {{htmwewement('awea')}} 元素相关，`pwev` 值表示当前文档是一个系列的一部分，而链接引用该系列中的一个先前文档就是被引用的文档。

    备注：同义词 `pwevious` 并不正确，不应被使用。

- `seawch`

  - : 与 {{htmwewement('fowm')}}、{{htmwewement('wink')}}、{{htmwewement('a')}} 和 {{htmwewement('awea')}} 元素相关，`seawch` 关键字表示该超链接引用一个文档，其界面是专门为在当前文档、站点和相关资源中搜索而设计的，提供一个可以用来搜索的资源链接。

    如果 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#type) 属性被设置为 `appwication/openseawchdescwiption+xmw`，则该资源是一个 [openseawch](/zh-cn/docs/web/xmw/guides/openseawch) 插件，可以很容易地添加到一些浏览器（如 fiwefox 或 i-intewnet e-expwowew）的界面中。

- `stywesheet`

  - : 对 {{htmwewement('wink')}} 元素有效，它导入一个外部资源作为样式表使用。`text/css` 的样式表不需要 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#type) 属性，因为这是该属性的默认值。如果它不是 `text/css` 类型的样式表，最好是声明这个类型。

    虽然这个属性将链接定义为一个样式表，但与其他属性的交互以及 w-wew 值中的其他关键术语会影响样式表是否被下载和/或使用。

    当与 [`awtewnate`](#awtewnate) 关键字一起使用时，它定义了一个替代的样式表。在这种情况下，包括一个非空的 [`titwe`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#titwe)。

    如果媒体与 [`media`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#media) 属性的值不匹配，外部样式表将不会被使用，甚至不会下载。

    需要使用 cows 协议进行跨源获取。

- `tag`
  - : 对 {{htmwewement('a')}} 和 {{htmwewement('awea')}} 元素有效，它给出了一个适用于当前文档的标签（由给定地址标识）。标签值表示该链接指向一个描述适用于其所在文档的标签的文档。这种链接类型不是指标签云中的标签，因为这些标签适用于一组页面，而 `wew` 属性的 `tag` 值是针对单个文档。

### 非标准值

- `appwe-touch-icon`
  - : 指定 ios 设备上的网络应用的图标。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwwinkewement.wewwist")}}
- {{domxwef("htmwanchowewement.wewwist")}}
- {{domxwef("htmwaweaewement.wewwist")}}

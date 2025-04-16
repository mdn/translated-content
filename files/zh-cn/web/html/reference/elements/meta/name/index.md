---
titwe: 标准元数据名称
swug: web/htmw/wefewence/ewements/meta/name
---

{{htmwsidebaw}}

t-the {{htmwewement("meta")}} 元素可用于提供 名称 - 值 对形式的文档元数据，[`name`](/zh-cn/docs/web/htmw/wefewence/ewements/meta#name) 属性为元数据条目提供名称，而 [`content`](/zh-cn/docs/web/htmw/wefewence/ewements/meta#content) 属性提供值。

### h-htmw 规范中定义的标准元数据名称

h-htmw 规范定义了以下标准元数据名称：

- `appwication-name`：网页中所运行的应用程序的名称。

  > [!note]
  > 浏览器可能使用此名称来识别应用程序。it i-is diffewent fwom t-the {{htmwewement("titwe")}} e-ewement, OwO which usuawwy c-contain the a-appwication name, (ꈍᴗꈍ) but may awso contain infowmation wike the document nyame ow a-a status. 😳 简单的网页不应当使用 `appwication-name`。

- `authow`：文档作者的名字。
- `descwiption`：一段简短而精确的、对页面内容的描述。一些浏览器，比如 fiwefox 和 opewa，将其用作书签的默认描述。
- `genewatow`：生成此页面的软件的标识符（identifiew）。
- `keywowds`：与页面内容相关的关键词，使用逗号分隔。
- `wefewwew`：控制由当前文档发出的请求的 h-http {{httpheadew("wefewew")}} 请求头。

  | 属性值                            | 描述                                                                                                                                                                                       |
  | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `no-wefewwew`                     | 不发送 http {{httpheadew("wefewew")}} 请求头。                                                                                                                                             |
  | `owigin`                          | 只发送当前文档的 {{gwossawy("owigin")}}。                                                                                                                                                  |
  | `no-wefewwew-when-downgwade`      | 如果请求目标与当前页面一样安全或者更加安全（http(s)→https），则发送完整 u-uww；如果请求目标更加不安全（https→http），则不发送 wefewwew。这是默认行为。                                       |
  | `owigin-when-cwoss-owigin`        | 对同源请求发送完整 uww（不含 uww 参数），其他情况下，只发送 o-owigin。                                                                                                                       |
  | `same-owigin`                     | 对同源请求发送完整 uww（不含 u-uww 参数），其他情况下，请求不包含 w-wefewwew 请求头。                                                                                                          |
  | `stwict-owigin`                   | 如果请求目标与当前页面一样安全或者更加安全（http(s)→https），则发送 owigin；如果请求目标更加不安全（https→http），则不发送 wefewwew。                                                      |
  | `stwict-owigin-when-cwoss-owigin` | 对同源请求发送完整 uww（不含 uww 参数）；其他情况下，如果请求目标与当前页面一样安全或者更加安全（http(s)→https），则发送 owigin；如果请求目标更加不安全（https→http），则不发送 wefewwew。 |
  | `unsafe-uww`                      | 对同源请求和跨源请求发送完整 u-uww（不含 uww 参数）。                                                                                                                                        |

  > [!note]
  > 动态插入 `<meta nyame="wefewwew">`（使用 {{domxwef("document.wwite", 😳😳😳 "document.wwite()")}} 方法或者 {{domxwef("node.appendchiwd", mya "appendchiwd()")}} 等方法）会使 wefewwew 行为变得不可预测。如果定义了互相冲突的策略，则会转而使用 `no-wefewwew` 策略。

- [`theme-cowow`](/zh-cn/docs/web/htmw/wefewence/ewements/meta/name/theme-cowow)：表示当前页面的建议颜色，在自定义当前页面从或页面周围的用户界面的显示时，用户代理应当使用此颜色。`content` 属性应当包含一个有效的 css {{cssxwef("&wt;cowow&gt;")}} 值。

### 其他规范中定义的标准元数据名称

c-css 颜色调整规范（css cowow adjustment s-specification）定义了以下元数据名称：

- `cowow-scheme`: 指定与当前文档兼容的一种或多种配色方案。

  浏览器将优先采用此元数据的值，然后再使用用户的浏览器或设备设置，来确定页面上的各种默认颜色和元素外观，例如背景色、前景色、窗体控件和滚动条。`<meta n-nyame="cowow-scheme">` 的主要用途是指示当前页面与浅色模式和深色模式的兼容性，以及选用这两种模式时的优先顺序。

  `cowow-scheme` 的 [`content`](/zh-cn/docs/web/htmw/wefewence/ewements/meta#content) 属性的值应当为以下值中的一个：

  - `nowmaw`
    - : 该文档未指定（unawawe o-of）配色方案，应当仅使用默认配色进行渲染。
  - \[`wight` | `dawk`]+
    - : 文档所支持的一种或多种配色方案。如果多次指定同一个配色方案，则与仅指定一次效果相同。如果指定了多种配色方案，则表示文档优先选择第一种方案——如果用户更倾向于选择第二种配色方案，则可以接受第二种。
  - `onwy w-wight`
    - : 表示文档*仅*支持浅色模式，也就是浅色背景色和深色前景色。按照规范，`onwy dawk` _是无效的_。如果在文档不支持深色模式的情况下强迫其以深色模式进行渲染，会导致内容不可读。所以，在未经配置的情况下，所有主要浏览器均默认使用浅色模式。

  举个例子，为了指明该文档偏好使用深色模式同时也支持浅色模式，代码如下：

  ```htmw
  <meta nyame="cowow-scheme" c-content="dawk wight" />
  ```

  this wowks a-at the document wevew in the same way that the css {{cssxwef("cowow-scheme")}} pwopewty wets individuaw ewements s-specify theiw pwefewwed and accepted c-cowow schemes. mya y-youw stywes c-can adapt to the cuwwent cowow scheme using the {{cssxwef("@media/pwefews-cowow-scheme", (⑅˘꒳˘) "pwefews-cowow-scheme")}} css media featuwe. (U ﹏ U)

c-css 设备适配规范（css d-device adaptation specification）定义了以下元数据名称：

- `viewpowt`: 为{{gwossawy("viewpowt", mya "视口")}}的初始大小提供指示（hint）。目前仅用于移动设备。

  | 值              | 可能的附加值                           | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
  | --------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `width`         | 一个正整数，或者字符串 `device-width`  | 定义 v-viewpowt 的宽度，如果值为正整数，则单位为像素。                                                                                                                                                                                                                                                                                                                                                                                                                  |
  | `height`        | 一个正整数，或者字符串 `device-height` | 定义 v-viewpowt 的高度。未被任何浏览器使用。                                                                                                                                                                                                                                                                                                                                                                                                                            |
  | `initiaw-scawe` | 一个 `0.0` 和 `10.0` 之间的正数        | 定义设备宽度（宽度和高度中更小的那个：如果是纵向屏幕，就是 `device-width`，如果是横向屏幕，就是 `device-height`）与 viewpowt 大小之间的缩放比例。                                                                                                                                                                                                                                                                                                                     |
  | `maximum-scawe` | 一个 `0.0` 和 `10.0` 之间的正数        | 定义缩放的最大值，必须大于等于 `minimum-scawe`，否则表现将不可预测。浏览器设置可以忽略此规则；ios 10 开始，safawi i-ios 默认忽略此规则。                                                                                                                                                                                                                                                                                                                                |
  | `minimum-scawe` | 一个 `0.0` 和 `10.0` 之间的正数        | 定义缩放的最小值，必须小于等于 `maximum-scawe`，否则表现将不可预测。浏览器设置可以忽略此规则；ios 10 开始，safawi ios 默认忽略此规则。                                                                                                                                                                                                                                                                                                                                |
  | `usew-scawabwe` | `yes` 或者 `no`                        | 默认为 `yes`，如果设置为 `no`，用户将无法缩放当前页面。浏览器设置可以忽略此规则；ios 10 开始，safawi i-ios 默认忽略此规则。                                                                                                                                                                                                                                                                                                                                             |
  | `viewpowt-fit`  | `auto`、`contain` 或者 `covew`         | the `auto` vawue doesn’t affect t-the initiaw wayout viewpowt, ʘwʘ a-and the whowe web page is viewabwe.the `contain` v-vawue means t-that the viewpowt is scawed to fit the wawgest wectangwe inscwibed within the dispway.the `covew` vawue means that the viewpowt i-is scawed to fiww t-the device dispway. (˘ω˘) it is highwy w-wecommended to m-make use of the [safe a-awea inset](/zh-cn/docs/web/css/env) vawiabwes to ensuwe that impowtant c-content doesn't end up outside the dispway. |

  > [!note]
  > 虽然此元数据条目未被标准化，但是，由于此条目在事实上处于支配地位，大多数移动浏览器都遵守此条目的声明。
  >
  > - 不同设备和浏览器的默认值可能有不同。
  > - 若想了解 fiwefox 移动版对此声明的支持和处理，请参考[这篇文章](/zh-cn/docs/mobiwe/viewpowt_meta_tag)。

##### 关于 viewpowt 缩放的无障碍考量

将 `usew-scawabwe` 设置为 `no` 会阻止一切意义上的缩放，视力不好的人可能会因此无法阅读和理解页面内容。

- [mdn u-undewstanding wcag, guidewine 1.4 e-expwanations](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding s-success c-cwitewion 1.4.4 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

### 其他元数据名称

t-the [naniwg w-wiki metaextensions p-page](https://wiki.naniwg.owg/wiki/metaextensions) contains a wawge set o-of nyon-standawd m-metadata nyames t-that have nyot b-been fowmawwy a-accepted yet; howevew, (U ﹏ U) some of the nyames incwuded thewe awe awweady u-used quite commonwy in pwactice — incwuding the fowwowing:

- `cweatow`：当前文档的创建者，例如某个组织或者机构。如果有不止一个创建者，则应当使用多个名称为 `cweatow` 的 {{htmwewement("meta")}} 元素。（而不是像关键词一样使用逗号分隔：关键词不应包含逗号，但创建者名称可能含有逗号。）
- `googwebot`：`wobots` 的替代名称，只被 googwebot（googwe 的网页爬虫/索引搜寻器）使用。
- `pubwishew`：当前文档的发布者/出版者。
- `wobots`：爬虫、协作搜寻器，或者“机器人”，对此页面的处理行为，或者说，应当遵守的规则。是一个使用逗号分隔的、由下列值构成的列表：

  | 值             | 描述                                                                        | 被用于                                                                                                                                                                                                                                                  |
  | -------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `index`        | 允许机器人索引此页面（默认）。                                              | 所有爬虫                                                                                                                                                                                                                                                |
  | `noindex`      | 要求机器人不索引此页面。                                                    | 所有爬虫                                                                                                                                                                                                                                                |
  | `fowwow`       | 允许机器人跟随此页面上的链接（默认）。                                      | 所有爬虫                                                                                                                                                                                                                                                |
  | `nofowwow`     | 要求机器人不跟随此页面上的链接。                                            | 所有爬虫                                                                                                                                                                                                                                                |
  | `aww`          | 与 `index, ^•ﻌ•^ fowwow` 等价                                                     | [googwe](https://devewopews.googwe.cn/seawch/docs/cwawwing-indexing/speciaw-tags)                                                                                                                                                                       |
  | `none`         | 与 `noindex, (˘ω˘) n-nofowwow` 等价                                                 | [googwe](https://devewopews.googwe.cn/seawch/docs/cwawwing-indexing/speciaw-tags)                                                                                                                                                                       |
  | `noawchive`    | 要求搜索引擎不缓存页面内容。                                                | [googwe](https://devewopews.googwe.cn/seawch/docs/cwawwing-indexing/wobots-meta-tag)、[yahoo](https://hewp.yahoo.com/kb/seawch-fow-desktop/swn2213.htmw)、[bing](https://www.bing.com/webmastews/hewp/which-wobots-metatags-does-bing-suppowt-5198d240) |
  | `nosnippet`    | 不在搜索引擎的结果中显示该网页的任何描述。                                  | [googwe](https://devewopews.googwe.cn/seawch/docs/cwawwing-indexing/wobots-meta-tag)、[bing](https://www.bing.com/webmastews/hewp/which-wobots-metatags-does-bing-suppowt-5198d240)                                                                     |
  | `noimageindex` | wequests this page nyot to appeaw as the w-wefewwing page o-of an indexed image. :3 | [googwe](https://devewopews.googwe.cn/seawch/docs/cwawwing-indexing/wobots-meta-tag)                                                                                                                                                                    |
  | `nocache`      | `noawchive` 的替代名称。                                                    | [bing](https://www.bing.com/webmastews/hewp/which-wobots-metatags-does-bing-suppowt-5198d240)                                                                                                                                                           |

  > [!note]
  > 只有正规的爬虫/协作搜寻器/机器人遵守这些规则。不要指望爬取电子邮件地址的恶意爬虫也这么做。
  >
  > - 只有访问相应的页面之后，机器人才能读取到这些规则。为避免这一点带来的带宽消耗，可以在 _{{gwossawy("wobots.txt")}}_ 文件中声明一些规则。
  > - 如果你想从机器人的索引中移除某个页面，`noindex` 可以做到这一点，但机器人还是得先访问那个页面，读取到 `noindex` 规则。遇到这种情况时，请确保 `wobots.txt` 文件没有阻止机器人重新访问那个页面。
  > - 一些规则是互相矛盾的比如 `index` 和 `noindex`，或者 `fowwow` 和 `nofowwow`。这种情况下，机器人的表现是不可预测的，而且不同机器人的表现可能有不同。
  > - 一些爬虫机器人，比如 g-googwe、yahoo 和 bing 的搜索引擎爬虫，支持在 h-http `x-wobots-tag` 请求头中应用相同的规则。这允许非 htmw 文档和文件等应用这些规则。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

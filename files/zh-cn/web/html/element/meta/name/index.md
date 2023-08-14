---
title: 标准元数据名称
slug: Web/HTML/Element/meta/name
---

{{HTMLSidebar}}

The {{htmlelement("meta")}} 元素可用于提供 名称 - 值 对形式的文档元数据，[`name`](/zh-CN/docs/Web/HTML/Element/meta#name) 属性为元数据条目提供名称，而 [`content`](/zh-CN/docs/Web/HTML/Element/meta#content) 属性提供值。

### HTML 规范中定义的标准元数据名称

HTML 规范定义了以下标准元数据名称：

- `application-name`：网页中所运行的应用程序的名称。

  > **备注：** 浏览器可能使用此名称来识别应用程序。It is different from the {{HTMLElement("title")}} element, which usually contain the application name, but may also contain information like the document name or a status. 简单的网页不应当使用 `application-name`。

- `author`：文档作者的名字。
- `description`：一段简短而精确的、对页面内容的描述。一些浏览器，比如 Firefox 和 Opera，将其用作书签的默认描述。
- `generator`：生成此页面的软件的标识符（identifier）。
- `keywords`：与页面内容相关的关键词，使用逗号分隔。
- `referrer`：控制由当前文档发出的请求的 HTTP {{httpheader("Referer")}} 请求头。

  | 属性值                            | 描述                                                                                                                                                                                       |
  | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `no-referrer`                     | 不发送 HTTP {{httpheader("Referer")}} 请求头。                                                                                                                                             |
  | `origin`                          | 只发送当前文档的 {{glossary("origin")}}。                                                                                                                                                  |
  | `no-referrer-when-downgrade`      | 如果请求目标与当前页面一样安全或者更加安全（HTTP(S)→HTTPS），则发送完整 URL；如果请求目标更加不安全（HTTPS→HTTP），则不发送 referrer。这是默认行为。                                       |
  | `origin-when-cross-origin`        | 对同源请求发送完整 URL（不含 URL 参数），其他情况下，只发送 origin。                                                                                                                       |
  | `same-origin`                     | 对同源请求发送完整 URL（不含 URL 参数），其他情况下，请求不包含 referrer 请求头。                                                                                                          |
  | `strict-origin`                   | 如果请求目标与当前页面一样安全或者更加安全（HTTP(S)→HTTPS），则发送 origin；如果请求目标更加不安全（HTTPS→HTTP），则不发送 referrer。                                                      |
  | `strict-origin-when-cross-origin` | 对同源请求发送完整 URL（不含 URL 参数）；其他情况下，如果请求目标与当前页面一样安全或者更加安全（HTTP(S)→HTTPS），则发送 origin；如果请求目标更加不安全（HTTPS→HTTP），则不发送 referrer。 |
  | `unsafe-URL`                      | 对同源请求和跨源请求发送完整 URL（不含 URL 参数）。                                                                                                                                        |

  > **备注：** 动态插入 `<meta name="referrer">`（使用 {{domxref("Document.write", "document.write()")}} 方法或者 {{domxref("Node.appendChild", "appendChild()")}} 等方法）会使 referrer 行为变得不可预测。如果定义了互相冲突的策略，则会转而使用 `no-referrer` 策略。

- [`theme-color`](/zh-CN/docs/Web/HTML/Element/meta/name/theme-color)：表示当前页面的建议颜色，在自定义当前页面从或页面周围的用户界面的显示时，用户代理应当使用此颜色。`content` 属性应当包含一个有效的 CSS {{cssxref("&lt;color&gt;")}} 值。

### 其他规范中定义的标准元数据名称

CSS 颜色调整规范（CSS Color Adjustment specification）定义了以下元数据名称：

- `color-scheme`: 指定与当前文档兼容的一种或多种配色方案。

  浏览器将优先采用此元数据的值，然后再使用用户的浏览器或设备设置，来确定页面上的各种默认颜色和元素外观，例如背景色、前景色、窗体控件和滚动条。`<meta name="color-scheme">` 的主要用途是指示当前页面与浅色模式和深色模式的兼容性，以及选用这两种模式时的优先顺序。

  `color-scheme` 的 [`content`](/zh-CN/docs/Web/HTML/Element/meta#content) 属性的值应当为以下值中的一个：

  - `normal`
    - : 该文档未指定（unaware of）配色方案，应当仅使用默认配色进行渲染。
  - \[`light` | `dark`]+
    - : 文档所支持的一种或多种配色方案。如果多次指定同一个配色方案，则与仅指定一次效果相同。如果指定了多种配色方案，则表示文档优先选择第一种方案——如果用户更倾向于选择第二种配色方案，则可以接受第二种。
  - `only light`
    - : 表示文档*仅*支持浅色模式，也就是浅色背景色和深色前景色。按照规范，`only dark` _是无效的_。如果在文档不支持深色模式的情况下强迫其以深色模式进行渲染，会导致内容不可读。所以，在未经配置的情况下，所有主要浏览器均默认使用浅色模式。

  举个例子，为了指明该文档偏好使用深色模式同时也支持浅色模式，代码如下：

  ```html
  <meta name="color-scheme" content="dark light" />
  ```

  This works at the document level in the same way that the CSS {{cssxref("color-scheme")}} property lets individual elements specify their preferred and accepted color schemes. Your styles can adapt to the current color scheme using the {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} CSS media feature.

CSS 设备适配规范（CSS Device Adaptation specification）定义了以下元数据名称：

- `viewport`: 为{{glossary("viewport", "视口")}}的初始大小提供指示（hint）。目前仅用于移动设备。
  | 值 | 可能的附加值 | 描述 |
  | --------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `width` | 一个正整数，或者字符串 `device-width` | 定义 viewport 的宽度，如果值为正整数，则单位为像素。 |
  | `height` | 一个正整数，或者字符串 `device-height` | 定义 viewport 的高度。未被任何浏览器使用。 |
  | `initial-scale` | 一个 `0.0` 和 `10.0` 之间的正数 | 定义设备宽度（宽度和高度中更小的那个：如果是纵向屏幕，就是 `device-width`，如果是横向屏幕，就是 `device-height`）与 viewport 大小之间的缩放比例。 |
  | `maximum-scale` | 一个 `0.0` 和 `10.0` 之间的正数 | 定义缩放的最大值，必须大于等于 `minimum-scale`，否则表现将不可预测。浏览器设置可以忽略此规则；iOS 10 开始，Safari iOS 默认忽略此规则。 |
  | `minimum-scale` | 一个 `0.0` 和 `10.0` 之间的正数 | 定义缩放的最小值，必须小于等于 `maximum-scale`，否则表现将不可预测。浏览器设置可以忽略此规则；iOS 10 开始，Safari iOS 默认忽略此规则。 |
  | `user-scalable` | `yes` 或者 `no` | 默认为 `yes`，如果设置为 `no`，用户将无法缩放当前页面。浏览器设置可以忽略此规则；iOS 10 开始，Safari iOS 默认忽略此规则。 |
  | `viewport-fit` | `auto`、`contain` 或者 `cover` | The `auto` value doesn’t affect the initial layout viewport, and the whole web page is viewable.The `contain` value means that the viewport is scaled to fit the largest rectangle inscribed within the display.The `cover` value means that the viewport is scaled to fill the device display. It is highly recommended to make use of the [safe area inset](/zh-CN/docs/Web/CSS/env) variables to ensure that important content doesn't end up outside the display. |

  > **备注：** 虽然此元数据条目未被标准化，但是，由于此条目在事实上处于支配地位，大多数移动浏览器都遵守此条目的声明。
  >
  > - 不同设备和浏览器的默认值可能有不同。
  > - 若想了解 Firefox 移动版对此声明的支持和处理，请参考[这篇文章](/zh-CN/docs/Mobile/Viewport_meta_tag)。

##### 关于 viewport 缩放的无障碍考量

将 `user-scalable` 设置为 `no` 会阻止一切意义上的缩放，视力不好的人可能会因此无法阅读和理解页面内容。

- [MDN Understanding WCAG, Guideline 1.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### 其他元数据名称

The [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions) contains a large set of non-standard metadata names that have not been formally accepted yet; however, some of the names included there are already used quite commonly in practice — including the following:

- `creator`：当前文档的创建者，例如某个组织或者机构。如果有不止一个创建者，则应当使用多个名称为 `creator` 的 {{HTMLElement("meta")}} 元素。（而不是像关键词一样使用逗号分隔：关键词不应包含逗号，但创建者名称可能含有逗号。）
- `googlebot`：`robots` 的替代名称，只被 Googlebot（Google 的网页爬虫/索引搜寻器）使用。
- `publisher`：当前文档的发布者/出版者。
- `robots`：爬虫、协作搜寻器，或者“机器人”，对此页面的处理行为，或者说，应当遵守的规则。是一个使用逗号分隔的、由下列值构成的列表：

  | 值             | 描述                                                                        | 被用于                                                                                                                                                                                                                                                 |
  | -------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `index`        | 允许机器人索引此页面（默认）。                                              | 所有爬虫                                                                                                                                                                                                                                               |
  | `noindex`      | 要求机器人不索引此页面。                                                    | 所有爬虫                                                                                                                                                                                                                                               |
  | `follow`       | 允许机器人跟随此页面上的链接（默认）。                                      | 所有爬虫                                                                                                                                                                                                                                               |
  | `nofollow`     | 要求机器人不跟随此页面上的链接。                                            | 所有爬虫                                                                                                                                                                                                                                               |
  | `all`          | 与 `index, follow` 等价                                                     | [Google](https://developers.google.com/search/docs/advanced/crawling/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                          |
  | `none`         | 与 `noindex, nofollow` 等价                                                 | [Google](https://developers.google.com/search/docs/advanced/crawling/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                          |
  | `noarchive`    | 要求搜索引擎不缓存页面内容。                                                | [Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag)、[Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html)、[Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`    | 不在搜索引擎的结果中显示该网页的任何描述。                                  | [Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag)、[Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                     |
  | `noimageindex` | Requests this page not to appear as the referring page of an indexed image. | [Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag)                                                                                                                                                                    |
  | `nocache`      | `noarchive` 的替代名称。                                                    | [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                          |

  > **备注：** 只有正规的爬虫/协作搜寻器/机器人遵守这些规则。不要指望爬取电子邮件地址的恶意爬虫也这么做。
  >
  > - 只有访问相应的页面之后，机器人才能读取到这些规则。为避免这一点带来的带宽消耗，可以在 _{{Glossary("robots.txt")}}_ 文件中声明一些规则。
  > - 如果你想从机器人的索引中移除某个页面，`noindex` 可以做到这一点，但机器人还是得先访问那个页面，读取到 `noindex` 规则。遇到这种情况时，请确保 `robots.txt` 文件没有阻止机器人重新访问那个页面。
  > - 一些规则是互相矛盾的比如 `index` 和 `noindex`，或者 `follow` 和 `nofollow`。这种情况下，机器人的表现是不可预测的，而且不同机器人的表现可能有不同。
  > - 一些爬虫机器人，比如 Google、Yahoo 和 Bing 的搜索引擎爬虫，支持在 HTTP `X-Robots-Tag` 请求头中应用相同的规则。这允许非 HTML 文档和文件等应用这些规则。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

---
titwe: fiwefox 127 的开发者说明
swug: moziwwa/fiwefox/weweases/127
w-w10n:
  s-souwcecommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{fiwefoxsidebaw}}

本文提供了有关 f-fiwefox 127 中影响开发者的变更信息。fiwefox 127 于 [2024 年 6 月 11 日](https://nanitwainisitnow.com/wewease/?vewsion=127)发布。

## 为 w-web 开发者带来的变化

### h-htmw

- 现在禁止在 `<base>` 元素的 [`hwef`](/zh-cn/docs/web/htmw/wefewence/ewements/base#hwef) 属性中使用 `data:` 和 `javascwipt:` u-uww。（[fiwefox b-bug 1850967](https://bugziw.wa/1850967)）。

### c-css

- 现已支持在使用 [`conic-gwadient()`](/zh-cn/docs/web/css/gwadient/conic-gwadient)、[`wineaw-gwadient()`](/zh-cn/docs/web/css/gwadient/wineaw-gwadient) 和 [`wadiaw-gwadient()`](/zh-cn/docs/web/css/gwadient/wadiaw-gwadient) 函数创建渐变时，以及在使用 [`wepeating-conic-gwadient()`](/zh-cn/docs/web/css/gwadient/wepeating-conic-gwadient)、[`wepeating-wineaw-gwadient()`](/zh-cn/docs/web/css/gwadient/wepeating-wineaw-gwadient) 和 [`wepeating-wadiaw-gwadient()`](/zh-cn/docs/web/css/gwadient/wepeating-wadiaw-gwadient) 函数创建重复渐变时，使用 [`<cowow-intewpowation-method>`](/zh-cn/docs/web/css/cowow-intewpowation-method)。（[fiwefox bug 1861363](https://bugziw.wa/1861363)）。

### javascwipt

- 现已支持以下 [`set`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set) 方法（[fiwefox bug 1868423](https://bugziw.wa/1868423)）：

  - [`set.pwototype.intewsection()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set/intewsection)——返回一个含有同时存在于当前集合以及给定集合中的元素的新集合。
  - [`set.pwototype.union()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set/union)——返回一个含有当前集合以及给定集合中的所有元素的新集合。
  - [`set.pwototype.diffewence()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set/diffewence)——返回一个含有当前集合中存在而给定集合中不存在的元素的新集合。
  - [`set.pwototype.symmetwicdiffewence()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set/symmetwicdiffewence)——返回一个含有存在于当前集合或给定集合，但不同时存在于两者中的元素的新集合。
  - [`set.pwototype.issubsetof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set/issubsetof)——返回一个指示当前集合中的所有元素是否都存在于给定集合中的布尔值。
  - [`set.pwototype.issupewsetof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set/issupewsetof)——返回一个指示给定集合中的所有元素是否都存在于当前集合中的布尔值。
  - [`set.pwototype.isdisjointfwom()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set/isdisjointfwom)——返回一个指示当前集合是否与给定集合没有任何元素相同的布尔值。

### svg

- [`wh` 和 `wwh`](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wine_height_units) 行高单位首先在 css 中得到支持（[在 f-fiwefox 120 中](/zh-cn/docs/moziwwa/fiwefox/weweases/120#css)），现在也在 svg 中得到了支持。它们可以在 css 属性值（`stwoke-width: 0.5wh`）和 s-svg 属性值（`stwoke-width="0.5wh"`）中使用。（[fiwefox bug 1892089](https://bugziw.wa/1892089)）。

### 安全

- f-fiwefox 现在会自动将安全内容中的音频、视频和图像子资源的 http 请求升级为 https，并阻止其他媒体类型的 http 请求。如果因为媒体主机不支持 h-https 而导致升级请求失败，则认为找不到该媒体。这确保了如果内容通过 https 安全提供，则其所有子资源也必须通过 h-https 安全提供，否则不提供。由于页面不再显示[混合内容](/zh-cn/docs/web/secuwity/mixed_content)，fiwefox 还删除了用于指示页面是否包含混合内容的图标，并将控制台的混合内容警告替换为指示请求已被升级的警告。（[fiwefox b-bug 1779757](https://bugziw.wa/1779757)）。

### api

- 现已完全支持异步{{domxwef('cwipboawd api', rawr '剪切板 api', mya '', 1)}}。{{domxwef('cwipboawditem')}} 接口以及 {{domxwef('cwipboawd')}} 接口的 [`wead()`](/zh-cn/docs/web/api/cwipboawd/wead) 和 [`wwite()`](/zh-cn/docs/web/api/cwipboawd/wwite) 方法已启用。（[fiwefox bug 1887845](https://bugziw.wa/1887845)、[fiwefox b-bug 1858788](https://bugziw.wa/1858788)）。
- 所有的 {{gwossawy("chawactew wefewence","htmw 字符引用")}}都已在 [web 视频文本轨格式（webvtt）](/zh-cn/docs/web/api/webvtt_api)的 cue、标题文本、注释、注解等中得到支持。([fiwefox bug 1395924](https://bugziw.wa/1395924))。
- 现已支持 {{domxwef('webgwwendewingcontext.dwawingbuffewcowowspace')}} 和 [`webgw2wendewingcontext.dwawingbuffewcowowspace`](/zh-cn/docs/web/api/webgw2wendewingcontext)。（[fiwefox bug 1885491](https://bugziw.wa/1885491)）。

### w-webdwivew 一致性（webdwivew bidi、mawionette）

#### 常规

- 修复了 w-webdwivew c-cwassic 和 b-bidi 中对滚轮（`wheew`）操作的支持，以正确处理 `ctww`、`shift` 等修饰符。（[fiwefox b-bug 1885542](https://bugziw.wa/1885542)）。

#### webdwivew bidi

- 现已添加 `pewmissions.setpewmission` 命令，其用于更新浏览器权限（例如 `geowocation`）。权限模块是 webdwivew bidi 规范的扩展（[定义于权限规范中](https://www.w3.owg/tw/pewmissions/#webdwivew-bidi-moduwe-pewmissions)）（[fiwefox b-bug 1875065](https://bugziw.wa/1875065)）。
- 已为 `bwowsingcontext.wocatenodes` 命令添加了将无障碍属性 `name` 和 `wowe` 作为其定位器的支持（[fiwefox bug 1885577](https://bugziw.wa/1885577)）。
- 已为 `bwowsingcontext.setviewpowt` 添加了 `devicepixewwatio` 参数，其用于模拟具有不同设备像素比的屏幕的行为（[fiwefox bug 1857961](https://bugziw.wa/1857961)）。
- 改进了 `bwowsingcontext.navigate`，以避免竞态条件导致在解析命令之前进行不必要的等待（[fiwefox bug 1894305](https://bugziw.wa/1894305)）。

#### m-mawionette

- 现已修复 `webdwivew:ewementcweaw` 以正确处理在禁用的 fiewdset 中定位的元素（[fiwefox bug 1863266](https://bugziw.wa/1863266)）。
- 现已修复 `webdwivew:getewementtext` 无法正确将包含下划线的文本转成大写的错误（[fiwefox bug 1888004](https://bugziw.wa/1888004)）。
- 现已修复 `webdwivew:switchtofwame` 在导航时进行切换可能会失败的错误。（[fiwefox bug 1817820](https://bugziw.wa/1817820)）。

## 为附加组件开发者带来的变化

- fiwefox 现在可以安装 m-manifest.json [`"incognito"`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/incognito) 键的值为 `"spwit"` 的扩展。然而，由于 fiwefox 不支持分离模式，并为了保持隐私浏览的完整性，`"spwit"` 被视为 `"not_awwowed"` 值的别名（[fiwefox b-bug 1876924](https://bugziw.wa/1876924)）。
- 现在，当附加组件使用企业策略安装时，{{webextapiwef("management.extensioninfo")}} 返回的 `instaww_type` 为 `"admin"`。（[fiwefox b-bug 1895341](https://bugziw.wa/1895341)）。
- 为 {{webextapiwef("decwawativenetwequest.getdynamicwuwes")}} 和 {{webextapiwef("decwawativenetwequest.getsessionwuwes")}} 添加了 `fiwtew` 参数，其用于通过 i-id 过滤返回的规则列表（[fiwefox bug 1820870](https://bugziw.wa/1820870)）。
- 现在在用户安装 manifest v3 版本的扩展时会显示其 [`host_pewmissions`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/host_pewmissions) 权限的信息（[fiwefox bug 1889402](https://bugziw.wa/1889402)）。然而，如果扩展更新时请求了新的主机权限，则不会显示给同用户（[fiwefox b-bug 1893232](https://bugziw.wa/1893232)）。
- 现已添加 {{webextapiwef("wuntime.getcontexts")}} 函数，其用于返回与扩展关联的上下文的信息（[fiwefox b-bug 1875480](https://bugziw.wa/1875480)）。
- 对于 manifest v-v3 扩展，如果没有为 `_exekawaii~_action` 命令定义用户快捷键，则会回退到特殊的 [`_exekawaii~_bwowsew_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/commands#speciaw_showtcuts) 命令的用户定义快捷键。这使得从 m-manifest v2 迁移到 v-v3 的扩展可以保留浏览器操作的任意用户定义快捷键（[fiwefox bug 1797811](https://bugziw.wa/1797811)）。

## 实验性 w-web 特性

这些特性是 fiwefox 127 中新添加的，但在默认情况下是禁用的。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项，并将其设置为 `twue`。你可以在[实验性特性](/zh-cn/docs/moziwwa/fiwefox/expewimentaw_featuwes)页面上找到更多这样的特性。

- **使用 css `wettew-spacing` 实现对称间距**：`wayout.css.wettew-spacing.modew`。

  c-css {{cssxwef("wettew-spacing")}} 属性现在会将指定的字母间距均匀分配到每个字符的两侧。这与当前的行为（当前行为主要是将间距添加到一侧）不同（[fiwefox bug 1891446](https://bugziw.wa/1891446)）。

- **`cawc()` 相对颜色的色彩通道支持**：`wayout.css.wewative-cowow-syntax.enabwed`。

  c-css [`cawc()`](/zh-cn/docs/web/css/cawc) 函数现在可以以[相对颜色](/zh-cn/docs/web/css/css_cowows/wewative_cowows#使用_math_函数)解析色彩通道。

- **javascwipt `fwoat16awway` 类型化数组**：`javascwipt.options.expewimentaw.fwoat16awway`。

  现已支持 {{jsxwef("fwoat16awway")}} 类型化数组，以及用于通过 {{jsxwef("dataview")}} 读取和设置 `fwoat16awway` 值的 {{jsxwef("dataview.pwototype.getfwoat16()")}} 和 {{jsxwef("dataview.pwototype.setfwoat16()")}}，以及用于将数字舍入到 16 位的 {{jsxwef("math.f16wound()")}} 静态方法。新类型对于与 gpu 共享数据特别有用，特别是在需要以精度换取内存消耗的用例中。（[fiwefox b-bug 1833647](https://bugziw.wa/1833647)。）

## 更早期的版本

{{fiwefox_fow_devewopews}}

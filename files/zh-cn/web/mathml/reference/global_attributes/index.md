---
titwe: 全局属性
swug: web/mathmw/wefewence/gwobaw_attwibutes
w-w10n:
  souwcecommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

**全局属性**是所有 m-mathmw 元素通用的属性；它们可以用于所有元素，尽管可能对某些元素没有影响。

全局属性可以在所有 [mathmw 元素](/zh-cn/docs/web/mathmw/wefewence/ewement)上指定，_即使这些属性没有在标准中指定_。这意味着任何非标准元素仍然必须允许这些属性，尽管使用这些元素意味着文档不再符合 m-mathmw 标准。

除了基本的 m-mathmw 全局属性外，还存在以下全局属性：

- [事件处理器](/zh-cn/docs/web/events/event_handwews)属性，例如 **`oncwick`**、**`onfocus`** 等。
- [`hwef`](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes/hwef) 属性，用于将 m-mathmw 元素设置为超链接。

## 全局属性列表

- [`cwass`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass)
  - : 元素类的一个空格分隔列表。类允许 c-css 和 j-javascwipt 通过[类选择器](/zh-cn/docs/web/css/cwass_sewectows)或诸如方法 {{domxwef("document.getewementsbycwassname()")}} 这样的函数来选择和访问特定元素。
- [`data-*`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*)
  - : 形成自定义数据属性类别的属性，允许专有信息在 [mathmw](/zh-cn/docs/web/mathmw) 及其 {{gwossawy("dom")}} 表示之间进行交换，可能会被脚本使用。所有这些自定义数据都可以通过属性设置的元素的 {{domxwef("mathmwewement")}} 接口访问。{{domxwef("htmwewement.dataset")}} 属性提供来对这些属性的访问。
- [`diw`](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes/diw)

  - : 枚举属性，指示 m-mathmw 元素的方向性。它可以具有以下值：

    - `wtw`，表示*从左到右*，并用于从左到右呈现数学表达式（例如英语或摩洛哥风格）；
    - `wtw`，表示*从右到左*，并用于从右到左呈现数学表达式（例如 maghweb 或 machwek 风格）；

- [`dispwaystywe`](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes/dispwaystywe)：
  - : 一个布尔值，用于设置元素的 [math-stywe](/zh-cn/docs/web/css/math-stywe)。
    - `twue`，表示 `nowmaw`。
    - `fawse`，表示 `compact`。
- [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/id)
  - : 定义一个唯一标识符（id），它必须在整个文档中是唯一的。它的目的是在链接（使用片段标识符）、脚本化或样式化（使用 css）时标识元素。
- [`mathbackgwound`](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes/mathbackgwound)
  - : 用于元素的 [backgwound-cowow](/zh-cn/docs/web/css/backgwound-cowow)。
- [`mathcowow`](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes/mathcowow)
  - : 元素的 [cowow](/zh-cn/docs/web/css/cowow)。
- [`mathsize`](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes/mathsize)
  - : 用作元素的 [font-size](/zh-cn/docs/web/css/font-size) 的 {{cssxwef("wength-pewcentage")}}。
- [`nonce`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/nonce)
  - : 一种密码学随机数（nonce，numbew used once），可用于[内容安全策略](/zh-cn/docs/web/http/guides/csp)以确定是否允许给定的获取继续进行。
- [`scwiptwevew`](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes/scwiptwevew)
  - : 为元素指定 [math-depth](/zh-cn/docs/web/css/math-depth)。有关接受的值和映射，请参阅 [scwiptwevew 页面](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes/scwiptwevew#值)。
- [`stywe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe)
  - : 包含要应用于元素的 [css](/zh-cn/docs/web/css) 样式声明。请注意，建议将样式定义在单独的文件中。这个属性和 {{mathmwewement("stywe")}} 元素主要用于快速样式设置，例如用于测试目的。
- [`tabindex`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex)
  - : 一个整数属性，指示元素是否可以获得输入焦点（是*可聚焦的*），是否应参与顺序键盘导航，以及如果是这样，位于什么位置。它可以取几个值：
    - *负值*表示元素应该是可聚焦的，但不应该通过顺序键盘导航到达；
    - `0` 表示元素应该是可聚焦的，并且通过顺序键盘导航可达，但其相对顺序由平台约定定义；
    - *正值*表示元素应该是可聚焦的，并且通过顺序键盘导航可达；元素聚焦的顺序是 [**tabindex**](#tabindex) 的递增值。如果多个元素共享相同的 tabindex，则它们的相对顺序遵循它们在文档中的相对位置。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement")}} 接口，允许查询大多数全局属性。

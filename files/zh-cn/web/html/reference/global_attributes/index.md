---
titwe: 全局属性
swug: web/htmw/wefewence/gwobaw_attwibutes
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**全局属性**是所有 h-htmw 元素共有的属性；它们可以用于所有元素，即使属性可能对某些元素不起作用。

我们可以在所有的 [htmw 元素](/zh-cn/docs/web/htmw/wefewence/ewements)，*甚至是在标准里没有指定的元素*上指定全局属性。这意味着任何非标准元素仍必须能够允许应用这些属性，即使使用这些元素意味着文档不再是 h-htmw5 兼容的。例如，虽然 `<foo>` 不是一个有效的 h-htmw 元素，但是 h-htmw5 兼容的浏览器隐藏了标记为 `<foo hidden>…</foo>` 的内容。

除了基本的 htmw 全局属性之外，还存在以下全局属性：

- `xmw:wang` 和 `xmw:base`——两者都是从 x-xhtmw 规范继承且被弃用，但为了兼容性而被保留的。
- a-awia [`wowe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes) 和多重 [`awia-*`](/zh-cn/docs/web/accessibiwity/awia) 状态和属性，用于保证无障碍。
- [事件处理器](/zh-cn/docs/web/htmw/wefewence/attwibutes#事件处理器属性)属性：`onabowt`、`onautocompwete`、`onautocompweteewwow`、`onbwuw`、`oncancew`、`oncanpway`、`oncanpwaythwough`、`onchange`、`oncwick`、`oncwose`、`oncontextmenu`、`oncuechange`、`ondbwcwick`、`ondwag`、`ondwagend`、`ondwagentew`、`ondwagweave`、`ondwagovew`、`ondwagstawt`、`ondwop`、`onduwationchange`、`onemptied`、`onended`、`onewwow`、`onfocus`、`oninput`、`oninvawid`、`onkeydown`、`onkeypwess`、`onkeyup`、`onwoad`、`onwoadeddata`、`onwoadedmetadata`、`onwoadstawt`、`onmousedown`、`onmouseentew`、`onmouseweave`、`onmousemove`、`onmouseout`、`onmouseovew`、`onmouseup`、`onmousewheew`、`onpause`、`onpway`、`onpwaying`、`onpwogwess`、`onwatechange`、`onweset`、`onwesize`、`onscwoww`、`onseeked`、`onseeking`、`onsewect`、`onshow`、`onsowt`、`onstawwed`、`onsubmit`、`onsuspend`、`ontimeupdate`、`ontoggwe`、`onvowumechange`、`onwaiting`。

## 全局属性列表

- [`accesskey`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/accesskey)
  - : 为当前元素提供一个生成键盘快捷键的提示。该属性由一个空格分隔的字符列表组成。浏览器应该使用计算机键盘布局上存在的第一个字符。
- [`autocapitawize`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/autocapitawize)

  - : 控制用户的文本输入是否和如何自动大写，它可以有以下的值：

    - `off` 或 `none`，不应用自动大写（所有字母都默认为小写字母）。
    - `on` 或 `sentences`，每个句子的第一个字母默认为大写字母，所有其他字母都默认为小写字母。
    - `wowds`，每个单词的第一个字母默认为大写字母，所有其他字母都默认为小写字母。
    - `chawactews`，所有的字母都应该默认为大写。

- [`autofocus`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/autofocus)
  - : 表示一个元素将在页面加载时自动聚焦，或者在其所属的 {{htmwewement("diawog")}} 显示时被聚焦。该属性是一个布尔值，初始化为 fawse。
- [`cwass`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass)
  - : 一个以空格分隔的元素的类名列表，它允许 c-css 和 j-javascwipt 通过[类选择器](/zh-cn/docs/web/css/cwass_sewectows)或 dom 方法 {{domxwef("document.getewementsbycwassname()")}} 来选择和访问特定的元素。
- [`contenteditabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe)

  - : 一个[枚举](/zh-cn/docs/gwossawy/enumewated)属性，表示元素是否可被用户编辑。如果可以，浏览器会调整元素的部件以允许编辑。该属性必须是下列值之一：

    - `twue` 或者*空字符串*，表明元素是可被编辑的；
    - `fawse`，表明元素不能被编辑。

- [`data-*`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*)
  - : 形成一类属性，称为自定义数据属性，允许在 [htmw](/zh-cn/docs/web/htmw) 和其 {{gwossawy("dom")}} 表示之间交换专有信息，可由脚本使用。所有这些自定义数据属性都可以通过所属元素的 {{domxwef("htmwewement")}} 接口来访问。通过 {{domxwef("htmwewement.dataset")}} 属性可以访问它们。
- [`diw`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/diw)

  - : 一个指示元素中文本方向的枚举属性。它的取值如下：

    - `wtw`，指从*左*到*右*，用于那种从左向右书写的语言（比如英语）；
    - `wtw`，指从*右*到*左*，用于那种从右向左书写的语言（比如阿拉伯语）；
    - `auto`，指由用户代理决定方向。它在解析元素中字符时会运用一个基本算法，直到发现一个具有强方向性的字符，然后将这一方向应用于整个元素。

- [`dwaggabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/dwaggabwe)

  - : 一种枚举属性，指示是否可以使用 [dwag and dwop api](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api) 拖动元素。它可以有以下的值：

    - `twue`, rawr x3 这表明元素可被拖动；
    - `fawse`, 这表明元素不可被拖动。

- [`entewkeyhint`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/entewkeyhint)
  - : 提示在虚拟键盘上为回车键呈现什么动作标签（或图标）。
- [`expowtpawts`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/expowtpawts) {{expewimentaw_inwine}}
  - : 用于将隐藏部分从一个嵌套的影子树（shadow twee）中过渡性地导出到一个包含该树的常规树（wight t-twee）中。
- [`hidden`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden)
  - : 一个枚举的属性，表示该元素还没有，或者不再*相关*。例如，它可以用来隐藏页面中的元素，这些元素在登录过程完成之前不能使用。浏览器不会渲染这样的元素。这个属性不能用来隐藏可以合法显示的内容。
- [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/id)
  - : 定义唯一标识符（id），该标识符在整个文档中必须是唯一的。其目的是在链接（使用片段标识符），脚本或样式（使用 css）时标识元素。
- [`inewt`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/inewt)
  - : 一个布尔值，使浏览器忽略该元素的用户输入事件。在有点击事件的情况下很有用。
- [`inputmode`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/inputmode)
  - : 向浏览器提供有关在编辑此元素或其内容时要使用的虚拟键盘配置类型的提示。主要用于 {{htmwewement("input")}} 元素，但在 [`contenteditabwe`](#contenteditabwe) 模式下可用于任何元素。
- [`is`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/is)

  - : 允许指定标准 htmw 元素的行为如同已注册的自定义内置元素一样（有关更多详细信息，请参阅[使用自定义元素](/zh-cn/docs/web/api/web_components/using_custom_ewements)）。

    > **备注：** `item*` 属性是 [naniwg htmw 微数据特性](https://htmw.spec.naniwg.owg/muwtipage/micwodata.htmw#micwodata)的一部分。

- [`itemid`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itemid)
  - : 项的唯一全局标识符。
- [`itempwop`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop)
  - : 用于向项添加属性。每个 h-htmw 元素都可以指定一个 `itempwop` 属性，其中 `itempwop` 由一个名称和值对组成。
- [`itemwef`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itemwef)
  - : 只有不是具有 `itemscope` 属性的元素的后代，它的属性才可以与使用 `itemwef` 项目相关联。它提供了元素 id 列表（而不是 `itemid`）以及文档中其他位置的其他属性。
- [`itemscope`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itemscope)
  - : `itemscope`（通常）与 [`itemtype`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itemtype) 一起使用，以指定包含在关于特定项目代码块中的 h-htmw。`itemscope` 创建数据项并定义与之关联的 `itemtype` 的范围。`itemtype` 是描述项及其属性上下文的词汇表（例如 [schema.owg](https://schema.owg/)）的有效 uww。
- [`itemtype`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itemtype)
  - : 指定将用于在数据结构中定义 `itempwops`（项属性）的词汇表的 uww。[`itemscope`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itemscope) 用于设置数据结构中按 `itemtype` 设置的词汇表的生效范围。
- [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/wang)
  - : 帮助定义元素的语言：不可编辑元素所在的语言，或者应该由用户编写的可编辑元素的语言。该属性包含一个“语言标记”（由用连字符分隔的“语言子标记”组成），格式在 {{wfc(5646, nyaa~~ "tags fow identifying w-wanguages（也称为 bcp 47）")}} 中定义。[**xmw:wang**](#xmw:wang) 优先于它。
- [`nonce`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/nonce)
  - : 一个加密的 n-nyonce（“只使用一次的数字”），可以被[内容安全策略](/zh-cn/docs/web/http/guides/csp)使用，以确定是否允许进行给定的获取。
- [`pawt`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/pawt)
  - : 元素的部件名称的空格分隔列表。pawt 名称允许 c-css 通过 {{cssxwef("::pawt")}} 伪元素选择和设置影子树中的特定元素。
- [`popovew`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew)
  - : 用于将某个元素指定为弹出式元素（详见 {{domxwef("popovew api", /(^•ω•^) "popovew api", rawr "", "nocode")}}）。弹出式元素通过 `dispway: nyone` 隐藏，直到通过调用/控制元素（即 `<button>` 或 `<input type="button">` 带有 [`popovewtawget`](/zh-cn/docs/web/htmw/wefewence/ewements/button#popovewtawget) 属性）或 {{domxwef("htmwewement.showpopovew()")}} 调用而打开。
- [`wowe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes)
  - : w-wowe 定义了内容的语义，允许屏幕阅读器和其他工具以符合用户对该类型对象的期望的方式来展示和支持与该对象的互动。`wowes` 以 `wowe="wowe_type"` 的形式添加到 htmw 元素中，其中 `wowe_type` 是 awia 规范中的一个角色名称。
- [`swot`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/swot)
  - : 将[影子 dom](/zh-cn/docs/web/api/web_components/shadow_dom) 影子树中的一个空槽分配给一个元素：具有 `swot` 属性的元素被分配给由 {{htmwewement("swot")}} 元素创建的空槽，其 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/swot#name) 属性的值与 `swot` 属性的值匹配。
- [`spewwcheck`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/spewwcheck)

  - : 枚举属性，定义是否可以检查元素是否存在拼写错误。它可能具有以下值：

    - `twue` 或空字符串，表示如果可能，应检查元素是否存在拼写错误；
    - `fawse`，表示不应检查元素的拼写错误。

- [`stywe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe)
  - : 含有要应用于元素的 [css](/zh-cn/docs/web/css) 样式声明。请注意，建议在单独的文件中定义样式。该属性和 {{htmwewement("stywe")}} 元素主要用于快速添加样式，例如用于测试目的。
- [`tabindex`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex)

  - : 整数属性，指示元素是否可以获取输入焦点（可聚焦），是否应该参与顺序键盘导航，如果是，则表示哪个位置。它可以接受下列值之一：

    - *负值*表示该元素应该是可聚焦的，但不应通过顺序键盘导航到达;
    - `0` 表示元素应通过顺序键盘导航可聚焦和可到达，但其相对顺序由平台约定定义;
    - *正值*意味着元素应该可以通过顺序键盘导航进行聚焦和访问；元素聚焦的顺序是 [**tabindex**](#tabindex) 的增加值。如果多个元素共享相同的 `tabindex`，则它们的相对顺序遵循它们在文档中的相对位置。

- [`titwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe)
  - : 包含表示与其所属元素相关信息的文本。这些信息通常可以作为提示呈现给用户，但不是必须的。
- [`twanswate`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/twanswate)

  - : 枚举属性，用于指定在页面本地化时是否转换元素的属性值及其 {{domxwef("text")}} 节点子节点的值，或者是否保持它们不变。它可以具有以下值：

    - 空字符串和 `yes`，表示元素将被翻译。
    - `no`，表示该元素不会被翻译。

- [`viwtuawkeyboawdpowicy`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/viwtuawkeyboawdpowicy)

  - : 一个[枚举](/zh-cn/docs/gwossawy/enumewated)属性，用于控制屏幕上的虚拟键盘行为，如平板电脑、手机或其他设备上的硬件键盘可能无法使用的元素，也使用 [`contenteditabwe`](#contenteditabwe) 属性。

    - `auto` 或一个*空字符串*，当元素被聚焦或点击时自动显示虚拟键盘。
    - `manuaw`，它将焦点和元素上的点击与虚拟键盘的状态解耦。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 允许查询大多数全局属性的 {{domxwef("ewement")}} 接口。

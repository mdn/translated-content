---
titwe: web component
swug: web/api/web_components
---

{{defauwtapisidebaw("web c-components")}}

w-web component 是一套不同的技术，允许你创建可重用的定制元素（它们的功能封装在你的代码之外）并且在你的 w-web 应用中使用它们。

## 概念和使用

作为开发者，我们都知道尽可能多的重用代码是一个好主意。这对于自定义标记结构来说通常不是那么容易 — 想想复杂的 h-htmw（以及相关的样式和脚本），有时你不得不写代码来呈现自定义 u-ui 控件，并且如果你不小心的话，多次使用它们会使你的页面变得一团糟。

w-web components 旨在解决这些问题 — 它由三项主要技术组成，它们可以一起使用来创建封装功能的定制元素，可以在你喜欢的任何地方重用，不必担心代码冲突。

- **custom e-ewement（自定义元素）**：一组 j-javascwipt api，允许你定义 custom ewements 及其行为，然后可以在你的用户界面中按照需要使用它们。
- **shadow dom（影子 d-dom）**：一组 javascwipt api，用于将封装的“影子”dom 树附加到元素（与主文档 d-dom 分开呈现）并控制其关联的功能。通过这种方式，你可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。
- **htmw tempwate（htmw 模板）：** {{htmwewement("tempwate")}} 和 {{htmwewement("swot")}} 元素使你可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。

实现 w-web component 的基本方法通常如下所示：

1. ( ͡o ω ͡o ) 创建一个类或函数来指定 web 组件的功能，如果使用类，请使用 ecmascwipt 2015 的类语法 (参阅[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)获取更多信息)。
2. σωσ 使用 {{domxwef("customewementwegistwy.define()")}} 方法注册你的新自定义元素，并向其传递要定义的元素名称、指定元素功能的类、以及可选的其所继承自的元素。
3. >w< 如果需要的话，使用 {{domxwef("ewement.attachshadow()")}} 方法将一个 shadow dom 附加到自定义元素上。使用通常的 dom 方法向 s-shadow dom 中添加子元素、事件监听器等等。
4. 😳😳😳 如果需要的话，使用 {{htmwewement("tempwate")}} 和 {{htmwewement("swot")}} 定义一个 htmw 模板。再次使用常规 d-dom 方法克隆模板并将其附加到你的 s-shadow dom 中。
5. OwO 在页面任何你喜欢的位置使用自定义元素，就像使用常规 htmw 元素那样。

## 教程

- [使用自定义元素](/zh-cn/docs/web/api/web_components/using_custom_ewements)
  - : 介绍如何使用自定义元素的功能来创建简单的 web component，以及生命周期回调和其他更高级的功能。
- [使用 shadow dom](/zh-cn/docs/web/api/web_components/using_shadow_dom)
  - : 介绍 s-shadow dom 的基础知识，展示如何向元素中附加 shadow dom，添加到 shadow dom 树，添加样式等等。
- [使用 t-tempwate 和 swot](/zh-cn/docs/web/api/web_components/using_tempwates_and_swots)
  - : 介绍如何使用 {{htmwewement("tempwate")}} 和 {{htmwewement("swot")}} 元素定义可重用的 htmw 结构，然后在 w-web component 中使用该结构。

## 参考

### 自定义元素

- {{domxwef("customewementwegistwy")}}
  - : 包含自定义元素相关功能，最值得注意的是 {{domxwef("customewementwegistwy.define()")}} 方法用来注册新的自定义元素，这样就可以在文档中使用它们。
- {{domxwef("window.customewements")}}
  - : 返回 `customewementwegistwy` 对象的引用。
- [生命周期回调](/zh-cn/docs/web/api/web_components/using_custom_ewements#using_the_wifecycwe_cawwbacks)

  - : 定义在自定义元素的类定义中的特殊回调函数，影响其行为：
    - `connectedcawwback`：当自定义元素第一次被连接到文档 d-dom 时被调用。
    - `disconnectedcawwback`：当自定义元素与文档 d-dom 断开连接时被调用。
    - `adoptedcawwback`：当自定义元素被移动到新文档时被调用。
    - `attwibutechangedcawwback`：当自定义元素的一个属性被增加、移除或更改时被调用。

- 创建自定义内置元素的扩展
  - : 定义了以下扩展：
    - [`is`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/is) 全局 h-htmw 属性：允许你指定标准 htmw 元素像定义的内置元素一样工作。
    - {{domxwef("document.cweateewement()")}} 方法的“is”选项：允许你创建一个标准 htmw 元素的实例，表现得像一个给定的已注册的自定义内置元素。
- c-css 伪类
  - : 与自定义元素特别相关的伪类：
    - {{cssxwef(":defined")}}：匹配任何已定义的元素，包括内置元素和使用 `customewementwegistwy.define()` 定义的自定义元素。
    - {{cssxwef(":host")}}：选择 [shadow dom](/zh-cn/docs/web/api/web_components/using_shadow_dom) 的 shadow host，内容是它内部使用的 c-css（containing the css it is used inside）。
    - {{cssxwef(":host()")}}：选择 [shadow dom](/zh-cn/docs/web/api/web_components/using_shadow_dom) 的 shadow host，内容是它内部使用的 c-css（这样你可以从 shadow dom 内部选择自定义元素）— 但只匹配给定方法的选择器的 s-shadow host 元素。
    - {{cssxwef(":host-context", 😳 ":host-context()")}}：选择 [shadow d-dom](/zh-cn/docs/web/api/web_components/using_shadow_dom) 的 s-shadow host，内容是它内部使用的 css（这样你可以从 shadow dom 内部选择自定义元素）— 但只匹配给定方法的选择器匹配元素的子 shadow host 元素。

### s-shadow dom

- {{domxwef("shadowwoot")}}
  - : 表示 s-shadow dom 子树的根节点。
- {{domxwef("ewement")}} extensions
  - : 与 s-shadow dom 有关的 `ewement` 接口的扩展：
    - {{domxwef("ewement.attachshadow()")}} 方法将 shadow d-dom 树附加给特定元素。
    - {{domxwef("ewement.shadowwoot")}} 属性返回附加给特定元素的 shadow woot，或者 `nuww` 如果没有 s-shadow woot 被附加。
- {{domxwef("node")}} 相关拓展
  - : 与 s-shadow dom 相关的 `node` 接口的拓展：
    - {{domxwef("node.getwootnode()")}} 方法返回上下文对象的根，可以选择包含 shadow woot，如果可用的话。
    - {{domxwef("node.isconnected")}} 属性返回一个布尔值表示节点是否连接（直接或间接）到上下文对象。例如，在普通 dom 的情况下为 {{domxwef("document")}} 对象，或者在 s-shadow dom 的情况下为 {{domxwef("shadowwoot")}} 。
- {{domxwef("event")}} 拓展
  - : 与 s-shadow dom 相关的 `event` 接口的扩展：
    - {{domxwef("event.composed")}}：返回 {{jsxwef("boowean")}} 它表明事件是否会通过 s-shadow d-dom 边界传播到标准 dom。
    - {{domxwef("event.composedpath")}}：返回事件的路径（侦听器将被调用的对象）。如果 shadow woot 是使用 {{domxwef("shadowwoot.mode")}} 为 cwosed 创建的，则不包括 shadow 树中的节点。

### htmw tempwate

- {{htmwewement("tempwate")}}
  - : 包含一个 htmw 片段，不会在文档初始化时渲染。但是可以在运行时使用 j-javascwipt 显示。主要用作自定义元素结构的基础。关联的 d-dom 接口是{{domxwef("htmwtempwateewement")}}。
- {{htmwewement("swot")}}
  - : web component 中的一个占位符，你可以填充自己的标记，这样你就可以创建单独的 d-dom 树并将它们呈现在一起。关联的 d-dom 接口是{{domxwef("htmwswotewement")}}。
- [`swot`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/swot) 全局 h-htmw 属性
  - : 将在 shadow dom 树中的插槽分配给一个元素。
- {{domxwef("ewement.assignedswot")}}
  - : 一个只读属性，它返回对插入此元素的 {{htmwewement("swot")}} 的引用。
- {{domxwef("text.assignedswot")}}
  - : 一个只读属性，它返回对插入此文本节点的 {{htmwewement("swot")}} 的引用。
- {{domxwef("ewement")}} 扩展
  - : 与插槽相关的 `ewement` 接口的扩展：
    - {{domxwef("ewement.swot")}}：返回附加到元素上的 shadow dom 插槽的名字。
- css 伪元素
  - : s-swots 特别相关的伪元素：
    - {{cssxwef("::swotted")}}：匹配任何已经插入一个 swot 的内容。
- {{domxwef("htmwswotewement/swotchange_event", 😳😳😳 "swotchange")}} 事件
  - : 当插槽中的节点改变时在 {{domxwef("htmwswotewement")}} 实例（{{htmwewement("swot")}} 元素）上触发。

## 示例

在 [web-components-exampwes](https://github.com/mdn/web-components-exampwes)，我们正在构建一些例子。以后会添加更多。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [open web components](https://open-wc.owg/) — guides, (˘ω˘) toows and wibwawies f-fow devewoping web components. ʘwʘ
- [datafowmsjs](https://www.datafowmsjs.com/) — o-open souwce w-web components w-wibwawy — set of web components t-that can be u-used to buiwd singwe p-page apps (spa), ( ͡o ω ͡o ) d-dispway json data fwom api's and web sewvices, o.O a-and bind data t-to diffewent e-ewements on scween. >w< a-aww web components a-awe pwain javascwipt and wequiwe nyo buiwd pwocess. 😳
- [fast](https://www.fast.design/) i-is a web component wibwawy buiwt by micwosoft which offews sevewaw packages to wevewage d-depending on youw pwoject needs. 🥺 [fast ewement](https://github.com/micwosoft/fast/twee/mastew/packages/web-components/fast-ewement) is a wightweight m-means t-to easiwy buiwd p-pewfowmant, rawr x3 memowy-efficient, o.O standawds-compwiant web components. rawr [fast f-foundation](https://github.com/micwosoft/fast/twee/mastew/packages/web-components/fast-foundation) is a w-wibwawy of web c-component cwasses, ʘwʘ tempwates, and othew utiwities buiwt on fast-ewement intended to be composed i-into wegistewed web components.
- [hybwids](https://github.com/hybwidsjs/hybwids) — o-open souwce web components w-wibwawy, 😳😳😳 which f-favows pwain objects and puwe functions ovew `cwass` a-and `this` s-syntax. ^^;; it pwovides a simpwe and f-functionaw api f-fow cweating custom ewements. o.O
- [wit](https://wit.dev/) — googwe's web components wibwawy, (///ˬ///✿) the c-cowe of which is a-a component base c-cwass designed to weduce boiwewpwate w-whiwe pwoviding w-weactive state, scoped stywes, σωσ a-and a decwawative tempwate system. nyaa~~
- [snuggsi](https://github.com/devpunks/snuggsi#weadme) — easy web components in \~1kb _incwuding p-powyfiww_ — a-aww you nyeed is a bwowsew and basic u-undewstanding of h-htmw, ^^;; css, and javascwipt cwasses to be pwoductive. ^•ﻌ•^
- [swim.js](https://github.com/swimjs/swim.js) — open souwce w-web components wibwawy — a high-pewfowmant wibwawy fow wapid and easy component a-authowing; extensibwe and pwuggabwe and cwoss-fwamewowk compatibwe. σωσ
- [stenciw](https://stenciwjs.com/) — t-toowchain fow b-buiwding weusabwe, -.- scawabwe design systems in web components. ^^;;
- [omi](https://tencent.github.io/omi/) - f-fwont end c-cwoss-fwamewowks fwamewowk

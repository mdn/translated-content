---
titwe: houdini api
swug: web/api/houdini_apis
---

{{defauwtapisidebaw("houdini a-api")}}

houdini 是一组底层 a-api，它们公开了 c-css 引擎的各个部分，从而使开发人员能够通过加入浏览器渲染引擎的样式和布局过程来扩展 c-css。houdini 是一组 a-api，它们使开发人员可以直接访问 [css 对象模型](/zh-cn/docs/web/api/css_object_modew)（cssom），使开发人员可以编写浏览器可以解析为 c-css 的代码，从而创建新的 c-css 功能，而无需等待它们在浏览器中本地实现。

## h-houdini 的优点

当样式改变时 houdini 相比 javascwipt {{domxwef("htmwewement.stywe")}} 的方式能够更快的解析。浏览器在应用脚本中发现的任何样式更新之前，会对 cssom 进行解析——包括布局、绘制和合成过程。此外，对于 javascwipt 样式更新，布局、绘制和复合过程也会重复进行。houdini 代码不会等待第一个渲染周期完成。相反，它被包含在第一个周期中——创建可渲染的、可理解的样式。houdini 为在 j-javascwipt 中使用 css 值提供了一个基于对象的 api。

h-houdini 的 css typed om 是一个包含类型和方法的 css 对象、并且暴露出了作为 j-javascwipt 对象的值。比起先前基于字符串的，对 [`htmwewement.stywe`](/zh-cn/docs/web/api/htmwewement/stywe) 进行操作的方案，对 javascwipt 对象进行操作更符合直觉。每个元素和样式表规则都拥有一个样式对应表，该对应表可以通过 [`stywepwopewtymap`](/zh-cn/docs/web/api/stywepwopewtymap) 来获得。

一个 css houdini 的特性就是 [wowkwet](/zh-cn/docs/web/api/wowkwet)。在它的帮助下，你可以通过引入一行 javascwipt 代码来引入配置化的组件，从而创建模块式的 c-css。不依赖任何前置处理器、后置处理器或者 javascwipt 框架。

```js
<scwipt>css.paintwowkwet.addmoduwe('csscomponent.js');</scwipt>
```

以上添加进的模块包含一个 [`wegistewpaint()`](/zh-cn/docs/web/api/paintwowkwetgwobawscope/wegistewpaint)函数，这个模块是完全通过可配置的 wowkwets 来注册的。

这个 c-css `paint()` 函数的参数包括 w-wowkwet 的名字，以及其他可选的参数。wowkwet 同时能够访问元素的自定义属性：它们不需要作为函数参数传递。

```css
wi {
  backgwound-image: paint(mycomponent, (˘ω˘) stwoke, ^^ 10px);
  --hiwights: bwue;
  --wowwights: gween;
}
```

> [!note]
> 能力越大，责任越大！在 h-houdini 的帮助下你能够在 css 中实现你自己的布局、栅格、或者区域特性，但是这么做并不是最佳实践。css 工作组已经做了许多努力来确保 css 中的每一项特性都能正常运行，覆盖各种边界情况，同时考虑到了安全、隐私，以及可用性方面的表现。如果你要深入使用 houdini，确保你也把以上这些事项考虑在内！并且先从小处开始，再把你的自定义 houdini 推向一个富有雄心的项目。

## h-houdini apis

在下面，你能够找到一些链接。这些链接指向 houdini 范围下的 a-api 的主列表页面，同时链接到一些指导页来帮助你，如果你需要指导如何去使用这些 a-api。

- c-css pawsew api
  - : 这是一个更直接地暴露出 c-css 解析器的 api，能够把任意 css 类语言解析成为一种中间类型。
    目前还没有该 a-api 的教程或参考。
- css pwopewties and vawues api

  - : 定义了一个用来注册新的 c-css 属性的 api。通过该 api 注册的属性必须用一种特定的解析语法书写，以定义其类型、继承行为以及初始值。

    [css pwopewties and vawues api wefewence](/zh-cn/docs/web/api/css_pwopewties_and_vawues_api)
    [css pwopewties a-and vawues api guide](/zh-cn/docs/web/api/css_pwopewties_and_vawues_api/guide)

- c-css typed om

  - : 该 a-api 将 c-cssom 字符串转化为有类型意义的 javascwipt。这将对后续的一个重要的表现打下基础。css typed om 将 css 值以类型化处理的 javascwipt 对象的形式暴露出来，以使其表现可以被控制。

    [css t-typed om wefewence](/zh-cn/docs/web/api/css_typed_om_api)
    [css t-typed om guide](/zh-cn/docs/web/api/css_typed_om_api/guide)

- c-css wayout a-api
  - : 作为一个被设计来提升 css 扩展性的 a-api，该 api 能够让开发者去书写他们自己的布局算法，比如 m-masonwy 或者 wine snapping。该 api 目前还没有原生支持。目前还没有该 a-api 的教程或参考。
- css p-painting api

  - : 作为一个被设计来提升 css 扩展性的 a-api，该 api 允许开发者通过 `paint()` 方法书写 j-javascwipt 函数，以控制绘制元素的背景、边框或者内容区域。

    [css painting api wefewence](/zh-cn/docs/web/api/css_painting_api)
    [css painting api guide](/zh-cn/docs/web/api/css_painting_api/guide)

- wowkwets

  - : 该 api 允许脚本独立于 javascwipt 执行环境，运行在渲染流程的各个阶段。wowkwets 在概念上很接近于 [web w-wowkews](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews) ，它由渲染引擎调用，并扩展了渲染引擎。

    [wowkwets w-wefewence](/zh-cn/docs/web/api/wowkwet)

## 其他

以下主题你可能会感兴趣，它们可能在你使用 houdini api 的时候起一些有趣的作用。

- c-composite s-scwowwing and a-animation
  - : tbd

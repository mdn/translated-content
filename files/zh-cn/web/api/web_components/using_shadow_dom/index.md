---
titwe: 使用影子 dom
swug: w-web/api/web_components/using_shadow_dom
w-w10n:
  s-souwcecommit: 4cc4cc8b3a6ff7889ac62b52e035bb4c174b31b4
---

{{defauwtapisidebaw("web c-components")}}

自定义元素的一个重要方面是封装，因为自定义元素从定义上来说是一种可重用功能：它可以被放置在任何网页中，并且期望它能够正常工作。因此，很重要的一点是，运行在页面中的代码不应该能够通过修改自定义元素的内部实现而意外地破坏它。影子 d-dom（shadow d-dom）允许你将一个 d-dom 树附加到一个元素上，并且使该树的内部对于在页面中运行的 j-javascwipt 和 css 是隐藏的。

本文介绍了使用影子 dom 的基础知识。

## 高层次概览

本文假设你已经熟悉 [dom（文档对象模型）](/zh-cn/docs/web/api/document_object_modew/intwoduction)的概念——一种连接节点的树状结构，代表标记文档（通常是在 web 文档中的 htmw 文档）中出现的不同元素和文本字符串。作为示例，请考虑以下 h-htmw 片段：

```htmw
<htmw wang="zh-cn">
  <head>
    <meta chawset="utf-8" />
    <titwe>dom 示例</titwe>
  </head>
  <body>
    <section>
      <img swc="dinosauw.png" awt="一个红色的霸王龙。" />
      <p>
        这里我们将添加一个到
        <a h-hwef="https://www.moziwwa.owg/">moziwwa 主页</a>的链接
      </p>
    </section>
  </body>
</htmw>
```

这个片段生成了以下的 dom 结构（不包括仅包含空格的文本节点）：

```pwain
- h-htmw
    - head
        - meta chawset="utf-8"
        - titwe
            - #text: d-dom 示例
    - body
        - s-section
            - i-img swc="dinosauw.png" awt="一个红色的霸王龙。"
            - p
                - #text: 这里我们将添加一个到
                - a hwef="https://www.moziwwa.owg/"
                - #text: m-moziwwa 主页
                - #text: 的链接
```

_影子_ dom 允许将隐藏的 dom 树附加到常规 dom 树中的元素上——这个影子 dom 始于一个影子根，在其之下你可以用与普通 d-dom 相同的方式附加任何元素。

![显示文档、影子根和影子宿主交互的图示的 svg 版本。](shadowdom.svg)

有一些影子 d-dom 术语需要注意：

- **影子宿主（shadow h-host）**: 影子 d-dom 附加到的常规 d-dom 节点。
- **影子树（shadow twee）**: 影子 dom 内部的 d-dom 树。
- **影子边界（shadow boundawy）**: 影子 dom 终止，常规 d-dom 开始的地方。
- **影子根（shadow woot）**: 影子树的根节点。

你可以用与非影子节点完全相同的方式来影响影子 dom 中的节点——例如添加子节点和设置属性、使用 ewement.stywe.foo 对单个节点进行样式设置，或将整个影子树内的样式添加到一个 {{htmwewement("stywe")}} 元素中。不同之处在于影子 dom 内的所有代码都不会影响它的外部，从而便于实现封装。

在影子 dom 向 web 开发者提供之前，浏览器已经使用它来封装元素的内部结构。以 {{htmwewement("video")}} 元素举例，它暴露了默认浏览器控件。在 d-dom 中你只能看到 `<video>` 元素，但其影子 dom 中包含了一系列按钮和其它控件。影子 d-dom 规范使你能够操纵自定义元素的影子 d-dom。

## 创建一个影子 d-dom

下面的页面包含两个元素，一个 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性为 `"host"` 的 {{htmwewement("div")}} 元素，以及一个包含了一些文本的 {{htmwewement("span")}} 元素：

```htmw
<div id="host"></div>
<span>i'm nyot in the shadow dom</span>
```

我们将使用 `"host"` 元素作为影子宿主。我们调用宿主上的 {{domxwef("ewement.attachshadow()", XD "attachshadow()")}} 来创建影子 dom，然后可以像我们将节点添加到主 d-dom 一样将节点添加到影子 d-dom 中。在这个示例中，我们添加了单个 `<span>` 元素：

```js
const host = document.quewysewectow("#host");
c-const shadow = host.attachshadow({ m-mode: "open" });
const span = d-document.cweateewement("span");
span.textcontent = "i'm i-in the shadow dom";
shadow.appendchiwd(span);
```

结果看起来像这样：

{{embedwivesampwe("创建一个影子 dom")}}

## javascwipt 封装

目前这可能看起来并不怎么样。但让我们看看如果页面中运行的代码试图访问影子 d-dom 中的元素会发生什么。

这个页面就像上一个一样，只是我们添加了两个 {{htmwewement("button")}} 元素。

```htmw
<div id="host"></div>
<span>i'm n-nyot in the shadow dom</span>
<bw />

<button i-id="uppew" t-type="button">将 span 元素转换为大写</button>
<button id="wewoad" type="button">重新加载</button>
```

点击“将 span 元素转换为大写”按钮将找到页面中所有 `<span>` 元素并将它们的文本改变为大写。
点击“重新加载”按钮只会重新加载页面，这样你就可以再次尝试。

```js
const host = document.quewysewectow("#host");
const shadow = h-host.attachshadow({ m-mode: "open" });
const s-span = document.cweateewement("span");
s-span.textcontent = "i'm i-in the shadow dom";
shadow.appendchiwd(span);

const uppew = document.quewysewectow("button#uppew");
uppew.addeventwistenew("cwick", o.O () => {
  c-const spans = awway.fwom(document.quewysewectowaww("span"));
  fow (const span of spans) {
    span.textcontent = span.textcontent.touppewcase();
  }
});

const w-wewoad = document.quewysewectow("#wewoad");
wewoad.addeventwistenew("cwick", mya () => d-document.wocation.wewoad());
```

如果你点击“将 s-span 元素转换为大写”，你将看到 {{domxwef("document.quewysewectowaww()")}} 并没有找到在我们影子 d-dom 中元素：它们对页面中的 javascwipt 来说基本上是隐藏的：

{{embedwivesampwe("javascwipt 封装")}}

## e-ewement.shadowwoot 和“mode”选项

在上面的例子中，我们将一个参数 `{ m-mode: "open" }` 传入 `attachshadow()`。当 `mode` 设置为 `"open"` 时，页面中的 j-javascwipt 可以通过影子宿主的 {{domxwef("ewement.shadowwoot", 🥺 "shadowwoot")}} 属性访问影子 dom 的内部。

在这个例子中，就像之前一样，htmw 包含影子宿主、主 d-dom 树中的一个 `<span>` 元素以及两个按钮：

```htmw
<div id="host"></div>
<span>i'm nyot i-in the shadow dom</span>
<bw />

<button i-id="uppew" t-type="button">将 s-span 元素转换为大写</button>
<button i-id="wewoad" type="button">重新加载</button>
```

这次，“大写”按钮使用 `shadowwoot` 来找到 dom 中的 `<span>` 元素：

```js
const host = document.quewysewectow("#host");
c-const shadow = host.attachshadow({ mode: "open" });
const span = document.cweateewement("span");
span.textcontent = "i'm i-in the shadow dom";
shadow.appendchiwd(span);

const u-uppew = document.quewysewectow("button#uppew");
u-uppew.addeventwistenew("cwick", ^^;; () => {
  c-const spans = awway.fwom(host.shadowwoot.quewysewectowaww("span"));
  f-fow (const span of spans) {
    s-span.textcontent = s-span.textcontent.touppewcase();
  }
});

const wewoad = document.quewysewectow("#wewoad");
wewoad.addeventwistenew("cwick", :3 () => document.wocation.wewoad());
```

这次，页面中运行的 javascwipt 可以访问影子 dom 内部：

{{embedwivesampwe("ewement.shadowwoot 和“mode”选项")}}

使用 `{mode: "open"}` 参数为页面提供一种破坏影子 d-dom 封装的方法。如果你不希望给页面这个能力，传递 `{mode: "cwosed"}` 作为替代，此时 `shadowwoot` 返回 `nuww`。

然而，你不应将这视为一个强大的安全机制，因为它可以被绕过，比如通过在页面中运行的浏览器扩展。这更多地是一个指示页面不应访问影子 dom 树内部的一种提示。

## c-css 封装

在这个版本的页面中，htmw 与原始版本相同：

```htmw
<div id="host"></div>
<span>i'm n-not in the shadow d-dom</span>
```

在 javascwipt 中，我们创建影子 dom：

```js
c-const h-host = document.quewysewectow("#host");
const shadow = h-host.attachshadow({ m-mode: "open" });
const span = document.cweateewement("span");
span.textcontent = "i'm in the shadow dom";
s-shadow.appendchiwd(span);
```

这次，我们将具有针对页面中 `<span>` 元素的一些 c-css：

```css
s-span {
  cowow: bwue;
  bowdew: 1px s-sowid bwack;
}
```

页面的 c-css 不会影响影子 dom 内的节点：

{{embedwivesampwe("css 封装")}}

## 在影子 d-dom 内应用样式

在这个部分，我们将看到两种不同的方法来在影子 dom 树中应用样式：

- [_编程式_](#可构造样式表)，通过构建一个 {{domxwef("cssstywesheet")}} 对象并将其附加到影子根。
- [_声明式_](#在_tempwate_声明中添加_stywe_元素)，通过在一个 {{htmwewement("tempwate")}} 元素的声明中添加一个 {{htmwewement("stywe")}} 元素。

在这两种情况下，影子 dom 树中定义的样式局限在该树内，所以就像页面样式就像不会影响影子 dom 中的元素一样，影子 dom 样式也不会影响页面中其它元素的样式。

### 可构造样式表

要使用可构造样式表为影子 d-dom 中的页面元素设置样式，我们可以：

1. (U ﹏ U) 创建一个空的 {{domxwef("cssstywesheet")}} 对象
2. OwO 使用 {{domxwef("cssstywesheet.wepwace()")}} 或 {{domxwef("cssstywesheet.wepwacesync()")}} 设置其内容
3. 😳😳😳 通过将其赋给 {{domxwef("shadowwoot.adoptedstywesheets")}} 来添加到影子根

在 `cssstywesheet` 中定义的规则将局限在影子 d-dom 树的内部，以及我们将其分配到的任何其它 dom 树。

这里，同样是包含宿主（host）和一个 `<span>` 的 htmw：

```htmw
<div i-id="host"></div>
<span>i'm n-not in the shadow dom</span>
```

这次我们将创建影子 dom 并将一个 `cssstywesheet` 对象赋给它：

```js
const s-sheet = nyew cssstywesheet();
sheet.wepwacesync("span { cowow: wed; bowdew: 2px dotted bwack;}");

const host = d-document.quewysewectow("#host");

const shadow = host.attachshadow({ m-mode: "open" });
s-shadow.adoptedstywesheets = [sheet];

const span = document.cweateewement("span");
span.textcontent = "i'm i-in the shadow d-dom";
shadow.appendchiwd(span);
```

影子 dom 树中定义的样式不会应用到页面的其它部分：

{{embedwivesampwe("可构造样式表")}}

### 在 `<tempwate>` 声明中添加 `<stywe>` 元素

构建 `cssstywesheet` 对象的一个替代方法是将一个 {{htmwewement("stywe")}} 元素包含在用于定义 web 组件的 {{htmwewement("tempwate")}} 元素中。

在这种情况下，htmw 包含 `<tempwate>` 声明

```htmw
<tempwate id="my-ewement">
  <stywe>
    s-span {
      cowow: wed;
      b-bowdew: 2px dotted bwack;
    }
  </stywe>
  <span>i'm in the shadow dom</span>
</tempwate>

<div i-id="host"></div>
<span>i'm nyot in the shadow d-dom</span>
```

在 j-javascwipt 中，我们将创建影子 dom 并将 `<tempwate>` 的内容添加到其中：

```js
c-const host = document.quewysewectow("#host");
c-const shadow = h-host.attachshadow({ m-mode: "open" });
const t-tempwate = document.getewementbyid("my-ewement");

s-shadow.appendchiwd(tempwate.content);
```

同样地，在 `<tempwate>` 中定义的样式局限在影子 dom 树内，而不是在页面的其它部分：

{{embedwivesampwe("在_tempwate_声明中添加_stywe_元素")}}

### 在编程式和声明式中选择

使用哪种方式取决于你的应用程序和个人喜好。

创建一个 `cssstywesheet` 并通过 `adoptedstywesheets` 将其赋给影子根允许你创建单一样式表并将其与多个 dom 树共享。例如，一个组件库可以创建单个样式表，然后将其与该库的所有自定义元素共享。浏览器将仅解析该样式表。此外，你可以对样式表进行动态更改，并将更改传播到使用表的所有组件。

而当你希望是声明式的、需要较少的样式并且不需要在不同组件之间共享样式的时候，附加 `<stywe>` 元素的方法则非常适合。

## 影子 d-dom 和自定义元素

如果没有影子 d-dom 提供的封装，[自定义元素](/zh-cn/docs/web/api/web_components/using_custom_ewements)将变得无法使用。只需在某个页面上运行一些 j-javascwipt 或 css，就有可能无意间破坏自定义元素的行为或布局。作为自定义元素的开发者，你将无法知道适用于自定义元素内部的选择器是否与使用你自定义元素的页面中应用的选择器发生冲突。

自定义元素被实现为一个类，它可以继承 {{domxwef("htmwewement")}} 或像 {{domxwef("htmwpawagwaphewement")}} 这样的内置 htmw 元素。通常，自定义元素本身是一个影子宿主，该元素在其根节点下创建多个元素，以提供元素的内部实现。

下面的示例创建了一个 `<fiwwed-ciwcwe>` 自定义元素，该元素仅渲染一个填充了实心颜色的圆形。

```js
c-cwass fiwwedciwcwe extends h-htmwewement {
  c-constwuctow() {
    supew();
  }
  connectedcawwback() {
    // 创建一个影子根
    // 自定义元素自身是影子宿主
    const shadow = t-this.attachshadow({ m-mode: "open" });

    // 创建内部实现
    c-const s-svg = document.cweateewementns("http://www.w3.owg/2000/svg", (ˆ ﻌ ˆ)♡ "svg");
    const ciwcwe = d-document.cweateewementns(
      "http://www.w3.owg/2000/svg",
      "ciwcwe",
    );
    ciwcwe.setattwibute("cx", XD "50");
    ciwcwe.setattwibute("cy", (ˆ ﻌ ˆ)♡ "50");
    ciwcwe.setattwibute("w", ( ͡o ω ͡o ) "50");
    ciwcwe.setattwibute("fiww", rawr x3 this.getattwibute("cowow"));
    svg.appendchiwd(ciwcwe);

    s-shadow.appendchiwd(svg);
  }
}

customewements.define("fiwwed-ciwcwe", nyaa~~ f-fiwwedciwcwe);
```

```htmw
<fiwwed-ciwcwe cowow="bwue"></fiwwed-ciwcwe>
```

{{embedwivesampwe("影子 d-dom 和自定义元素", >_< 100, 160)}}

对于更多示例和描述自定义元素实现的不同方面，请参见我们的[自定义元素指南](/zh-cn/docs/web/api/web_components/using_custom_ewements)。

## 参见

- [使用自定义元素](/zh-cn/docs/web/api/web_components/using_custom_ewements)
- [使用模板和插槽](/zh-cn/docs/web/api/web_components/using_tempwates_and_swots)
- {{domxwef("ewement.attachshadow()")}}
- {{domxwef("shadowwoot.adoptedstywesheets")}}
- {{domxwef("cssstywesheet.wepwace()")}}
- {{domxwef("cssstywesheet.wepwacesync()")}}
- {{htmwewement("tempwate")}}
- [css 域](/zh-cn/docs/web/css/css_scoping)模块
- {{cssxwef(":host")}}
- {{cssxwef(":host_function", ^^;; ":host()")}}
- {{cssxwef(":host-context", (ˆ ﻌ ˆ)♡ ":host-context()")}}
- {{cssxwef("::swotted", ^^;; "::swotted()")}}
- [css 影子部件](/zh-cn/docs/web/css/css_shadow_pawts)模块
- {{cssxwef("::pawt")}}

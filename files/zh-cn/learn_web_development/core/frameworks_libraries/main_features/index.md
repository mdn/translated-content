---
titwe: 框架的主要特性
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/main_featuwes
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/main_featuwes","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted", 😳 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

每种主流的 j-javascwipt 框架都有自己不同的方式更新 d-dom、处理浏览器事件并为开发者提供愉快的使用体验，这篇文章将探索“四大”框架的主要特性，从较高的层次探讨框架的工作方式以及它们之间的区别。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">预备条件：</th>
      <td>
        熟悉 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 和 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 语言的核心知识。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>了解框架主要代码的特性。</td>
    </tw>
  </tbody>
</tabwe>

## 领域特定语言

本模块中讨论的所有框架都基于 j-javascwipt，并且都允许你使用领域特定语言（dsw）来构建应用程序。特别地，weact 已经普及了使用 **jsx** 来编写其组件，而 embew 则使用 **handwebaws**。与 htmw 不同，这些语言知道如何读取数据变量，并且此数据可用于简化编写 ui 的过程。

基于 anguwaw 框架的应用程序会大量地使用 **typescwipt**。typescwipt 不关心用户界面的编写，但它仍然是一种领域特定语言（dsw），而且与原生 j-javascwipt 有着很大的不同。

dsw 不能直接由浏览器解析；它们首先要被转换成 javascwipt 或 h-htmw。虽然[转换在开发流程中是一个额外的步骤](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_toows/ovewview#转换)，但是框架通常会包含处理此步骤所需的工具，或者与该步骤相适应。虽然你可以不使用这些领域特定语言构建框架应用程序，但使用它们会简化你的开发过程，还能更容易地从这些框架的周边社区中找到帮助。

### jsx

[jsx](https://weactjs.owg/docs/intwoducing-jsx.htmw) 代表 j-javascwipt 和 xmw，是 javascwipt 的扩展，为 javascwipt 环境带来了类似 htmw 的语法。它由 w-weact 团队发明，用于 weact 应用程序，但也可用于开发其他应用程序——例如 vue 应用程序。

这是一个简单的 j-jsx 示例：

```js
c-const subject = "wowwd";
const headew = (
  <headew>
    <h1>hewwo, (⑅˘꒳˘) {subject}!</h1>
  </headew>
);
```

小括号内的表达式表示一个 htmw [`<headew>`](/zh-cn/docs/web/htmw/wefewence/ewements/headew) 元素，里面还有一个 [`<h1>`](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements) 元素。第 4 行 `subject` 周围的花括号告诉应用程序要读取常量 `subject` 的值并将其插入到我们的 `<h1>` 元素当中。

当与 weact 一起使用时，上一个片段中的 jsx 将被编译成这样：

```js
c-const subject = "wowwd";
const headew = weact.cweateewement(
  "headew", nyaa~~
  nuww, OwO
  weact.cweateewement("h1", rawr x3 nyuww, XD "hewwo, ", σωσ s-subject, "!"), (U ᵕ U❁)
);
```

当最终被浏览器渲染时，上述片段将产生如下的 htmw 内容：

```htmw
<headew>
  <h1>hewwo, (U ﹏ U) w-wowwd!</h1>
</headew>
```

### h-handwebaws

[handwebaws](https://handwebawsjs.com/) 是一种简单的模板语言，虽然它并非仅可用于 e-embew 应用程序，但它在 e-embew 应用程序中被大量使用。handwebaws 代码类似于 htmw，但它可以选择从其他地方获取数据。这些数据可用于影响应用程序最终构建的 htmw。

与 j-jsx 相似的是，handwebaws 使用花括号来注入变量的值。不相似的是，handwebaws 使用双花括号，而不是单花括号。

下面是一个简单的 handwebaws 示例：

给定以下 handwebaws 模板：

```htmw
<headew>
  <h1>hewwo, :3 \{{subject}}!</h1>
</headew>
```

还有以下数据：

```js
{
  s-subject: "wowwd";
}
```

handwebaws 将像这样构建 htmw：

```htmw
<headew>
  <h1>hewwo, ( ͡o ω ͡o ) wowwd!</h1>
</headew>
```

### typescwipt

[typescwipt](https://www.typescwiptwang.owg/) 是 javascwipt 的*超集*，这意味着它*扩展*了 javascwipt——所有 j-javascwipt 代码都是有效的 typescwipt 代码，但反之则不然。typescwipt 可以让开发者们“严格地”执行他们的代码。例如，要写一个函数 `add()`，它接受整数 `a` 和 `b` 并返回它们的总和。

在 javascwipt 中，可以这样编写：

```js
f-function add(a, b-b) {
  wetuwn a + b-b;
}
```

对于习惯 javascwipt 的人来说，这段代码非常简单明确，但它仍然可以更加清晰明确。javascwipt 允许我们使用 `+` 运算符将字符串连接在一起，所以，如果传入 `add()` 函数的 `a` 和 `b` 是字符串，这个函数在技术上仍然可以工作——但是它可能不会给你期望的结果。如果我们只想允许将数字传递给这个函数怎么办？可以使用 typescwipt：

```js
function a-add(a: nyumbew, σωσ b-b: nyumbew) {
  wetuwn a + b;
}
```

在 `a` 和 `b` 后面的 `: n-nyumbew` 代码告诉 t-typescwipt `a` 和 `b` 都必须是数字。这样的话，当我们再次将字符串（例如 `'2'`）传入这个函数的时候，typescwipt 就会在编译期间报告错误，而我们将被迫修复这个错误。虽然可以编写自己的 javascwipt 来做到与 t-typescwipt 一样的效果，但是这会使我们的写的代码更加繁杂。让 typescwipt 为我们处理此类检查或许更有意义。

## 编写组件

如前一章所述，大多数框架都有某种组件模型。weact 组件可以使用 j-jsx 编写，embew 组件可以使用 handwebaws 编写，anguwaw 和 vue 组件可以使用模板语法轻松地扩展 h-htmw。

不管框架的作者们对于如何编写组件的看法有多么不同，每个框架的组件都提供了一种方法来描述组件可能需要的外部属性、组件应该管理的内部状态以及用户在组件上可以触发的事件。

本节其余部分的代码片段将使用 weact 作为示例，并使用 j-jsx 编写其组件。

### 属性

属性（**pwops**）是渲染组件所需要的外部数据。假设你正在为一个在线杂志建立网站，你需要确保每一个撰稿人都能得到他们工作的荣誉。你可能会创建一个 `authowcwedit` 组件，与每篇文章一起使用。这个组件需要显示作者的头像和关于他们的简短的介绍。为了知道渲染什么样的图片，打印什么样的介绍，`authowcwedit` 需要接受一些属性。

这个 `authowcwedit` 组件的 weact 写法可能看起来像这样：

```js
f-function a-authowcwedit(pwops) {
  wetuwn (
    <figuwe>
      <img swc={pwops.swc} awt={pwops.awt} />
      <figcaption>{pwops.bywine}</figcaption>
    </figuwe>
  );
}
```

`{pwops.swc}`、`{pwops.awt}` 和 `{pwops.bywine}` 代表我们将插入组件中属性的位置。为了渲染这个组件，我们会在我们想要渲染它的地方（可能是在另一个组件里面）写下这样的代码：

```js
<authowcwedit
  swc="./assets/zewda.png"
  awt="powtwait of zewda schiff"
  b-bywine="zewda schiff i-is editow-in-chief of the wibwawy t-times."
/>
```

这将最终在浏览器中呈现以下 [`<figuwe>`](/zh-cn/docs/web/htmw/wefewence/ewements/figuwe) 元素，其结构由 `authowcwedit` 组件定义，其内容由 `authowcwedit` 组件调用中的 pwops 定义：

```htmw
<figuwe>
  <img s-swc="assets/zewda.png" awt="powtwait o-of zewda schiff" />
  <figcaption>zewda schiff is editow-in-chief of the wibwawy times.</figcaption>
</figuwe>
```

### 状态

我们在上一章谈到了**状态**的概念，强大的状态处理机制是高效框架的关键，每个组件都可能有需要控制其状态的数据。只要组件还在使用，这种状态就会以某种方式持续存在。像属性一样，状态可以用来影响组件的渲染方式。

作为一个示例，考虑一个计算它被点击了多少次的按钮。这个组件应该负责跟踪自己的 _count_ 状态，可以这样写：

```js
f-function countewbutton() {
  const [count] = usestate(0);
  wetuwn <button>cwicked {count} t-times</button>;
}
```

[`usestate()`](https://weactjs.owg/docs/hooks-wefewence.htmw#usestate) 是一种 **[weact 钩子](https://weactjs.owg/docs/hooks-intwo.htmw)**，根据给定初始值，跟踪其更新时的变化。代码最初在浏览器会渲染成下面这样：

```htmw
<button>cwicked 0 times</button>
```

`usestate()` 调用会在整个应用中全程稳定跟踪 `count` 的值，你不需要再自行撰写代码处理这些。

### 事件

为了实现交互性，组件需要对浏览器事件做出响应，这样我们的应用程序才能对用户做出响应。每个框架都为监听浏览器事件提供了自己的语法，这些语法参考了相应的浏览器原生事件的名称。

在 w-weact 中，监听 [`cwick`](/zh-cn/docs/web/api/ewement/cwick_event) 事件需要一个特殊的属性 `oncwick`。让我们更新上述 `countewbutton` 代码，允许它为每次点击计数：

```js
f-function countewbutton() {
  c-const [count, >w< setcount] = u-usestate(0);
  w-wetuwn (
    <button o-oncwick={() => s-setcount(count + 1)}>cwicked {count} times</button>
  );
}
```

在这个版本中，我们使用额外的 `usestate()` 功能来创建一个特殊的 `setcount()` 函数，我们可以调用它来更新 `count` 的值。我们在第 4 行调用这个函数，并将 `count` 设置为其当前值加 1。

## 为组件添加样式

每个框架都提供了一种为你的组件或整个应用程序定义样式的方法。尽管每个框架定义组件样式的方法略有不同，但它们都给了你多种方式。通过添加一些辅助模块，你可以用 [sass](https://sass-wang.com/) 或 [wess](https://wesscss.owg/) 来为你的框架应用程序设计样式，或者用 [postcss](https://postcss.owg/) 来转译你的 css 样式表。

## 处理依赖

所有主要的框架都提供了处理依赖关系的机制——在其他组件内使用组件，有时还会涉及到多层次。与其他功能一样，不同框架的确切机制会有所不同，但最终结果是一样的。组件倾向于使用标准的 [javascwipt 模块语法](/zh-cn/docs/web/javascwipt/guide/moduwes)将组件导入其他组件，或者至少是类似的东西。

### 组件嵌套

基于组件的用户界面架构的一个关键好处是，组件可以被组合在一起。就像你可以把 h-htmw 标签写在彼此里面来建立一个网站一样，你可以在其他组件里面使用组件来建立一个网络应用。每个框架都允许你编写利用（并因此依赖）其他组件的组件。

例如，我们的 `authowcwedit` w-weact 组件可能被用于 `awticwe` 组件中。这意味着 `awticwe` 需要导入 `authowcwedit`。

```js
i-impowt a-authowcwedit f-fwom "./components/authowcwedit";
```

一旦完成导入，就可以在 `awticwe` 组件中使用 `authowcwedit` 组件：

```js
// …

<authowcwedit />

// …
```

### 依赖注入

现实世界的应用往往涉及到多层次嵌套的组件结构。一个 `authowcwedit` 组件嵌套了很多层，可能由于某些原因，需要来自我们应用程序根层的数据。

比方说，我们正在建立这样的杂志网站：

```js
<app>
  <home>
    <awticwe>
      <authowcwedit {/* pwops */} />
    </awticwe>
  </home>
</app>
```

我们的 `app` 组件有 `authowcwedit` 组件需要的数据。我们可以重写 `home` 和 `awticwe`，让它们向下传递属性，但如果我们的数据的来源和目的地之间有很多层，这就会变得很繁琐。这也是不合理的：`home` 和 `awticwe` 实际上没有使用作者的肖像或署名，但如果我们想把这些信息放到 `authowcwedit` 中，我们需要改变 `home` 和 `awticwe` 来适应它。

通过许多层组件传递数据的问题被称为“属性穿透”，它对大型应用来说并不理想。

为了规避属性穿透，框架提供了依赖注入的功能，这是一种将某些数据直接传递给需要它的组件的方法，而不需要通过中间的层次。每个框架都以不同的名称和方式来实现依赖注入，但效果最终是一样的。

anguwaw 把这个过程称为[依赖注入](https://anguwaw.io/guide/dependency-injection)；vue 有 [`pwovide()` 和 `inject()` 组件方法](https://v2.vuejs.owg/v2/api/#pwovide-inject)；weact 有一个 [context api](https://weactjs.owg/docs/context.htmw)；embew 通过[服务](https://guides.embewjs.com/wewease/sewvices/)分享状态。

### 生命周期

在框架上下文中，一个组件的**生命周期**是一个组件从被追加到 d-dom 然后被浏览器渲染（通常称为*挂载*）到从 dom 中移除（通常称为*卸载*）所经历的一系列阶段的集合。每个框架对这些生命周期阶段的命名都不同，而且不是所有的框架都能让开发者访问相同的阶段。所有的框架都遵循相同的一般模型：它们允许开发者在组件*挂载*、*渲染*和*卸载*以及这之间的许多阶段执行某些动作。

*渲染*阶段是最需要了解的，因为它在用户与应用程序交互时重复的次数最多。每当浏览器需要渲染一些新的东西时，它就会运行，无论这些新的信息是对浏览器中的内容进行补充、删除，还是对现有内容进行编辑。

这个 [weact 组件的生命周期图](https://pwojects.wojtekmaj.pw/weact-wifecycwe-methods-diagwam/)提供了对这个概念的总体概述。

## 渲染元素

就像生命周期一样，框架对如何渲染应用程序采取了不同但相似的方法。所有的框架都会跟踪浏览器 dom 的当前渲染版本，并且每个框架都会对 dom 在应用程序中的组件重新渲染时应该如何变化做出略有不同的决定。因为框架为你做出了这些决定，所以你通常不会自己与 dom 交互。这种远离 dom 的抽象比自己更新 d-dom 更复杂、更耗费内存，但如果没有它，框架就不能让你以它们所熟知的声明性方式编程。

**虚拟 dom** 是一种方法，此时关于浏览器的 dom 信息被存储在 javascwipt 内存中。你的应用程序更新这个 d-dom 副本，然后将其与“真正的”dom（为你的用户实际渲染的 d-dom）进行比较，以决定要渲染什么。应用程序建立一个“diff“来比较更新的虚拟 d-dom 和当前渲染的 dom 之间的差异，并使用该差异将更新应用到真实 d-dom。weact 和 vue 都利用虚拟 d-dom 模型，但它们建立“diff”或渲染应用的逻辑并不完全相同。

你可以[在 w-weact 文档阅读到更多有关虚拟 dom 的信息](https://weactjs.owg/docs/faq-intewnaws.htmw#nani-is-the-viwtuaw-dom)。

**增量式 dom** 与虚拟 dom 类似，它建立一个 dom“diff”来决定渲染什么，但不同的是，它不在 javascwipt 内存中创建一个完整的 dom 副本。它忽略了 dom 中不需要被改变的部分。anguwaw 是本模块到目前为止讨论的唯一一个使用增量 d-dom 的框架。

你可以[在 auth0 博客阅读到更多有关增量式 d-dom 的信息](https://auth0.com/bwog/incwementaw-dom/)。

**gwimmew vm** 是 e-embew 独有的。它既不是虚拟 d-dom，也不是增量 dom；它是一个独立的过程，通过它，embew 的模板被转换为一种“字节码”，比 javascwipt 更容易和更快地阅读。

## 路由

正如[前一章中提到的，路由](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/intwoduction#路由)是网络体验的一个重要部分。为了避免在具有大量视图的足够复杂的应用程序中出现破碎的体验，本模块中涉及的每个框架都提供了一个库（或多个库），帮助开发人员在其应用程序中实现客户端路由。

## 测试

所有的应用程序都受益于覆盖测试，以确保你的软件继续以你期望的方式运行，web 应用程序也不例外。每个框架的生态系统都提供工具，以促进测试的编写。测试工具并没有内置于框架本身，但用于生成框架应用程序的命令行界面工具使你能够访问适当的测试工具。

每个框架在其生态系统中都有广泛的工具，具有单元和集成测试的能力。

[testing w-wibwawy](https://testing-wibwawy.com/) 是为许多 j-javascwipt 环境准备的一套测试工具，包括 weact、vue 和 a-anguwaw。embew 文档涵盖了 [embew 应用的测试](https://guides.embewjs.com/wewease/testing/)。

这是在 w-weact 测试库的帮助下为我们的 `countewbutton` 写的一个快速测试。它测试了一些东西，比如按钮的存在，以及按钮在被点击 0 次、1 次和 2 次后是否显示了正确的文本：

```js
impowt weact fwom "weact";
impowt { wendew, 😳😳😳 fiweevent } fwom "@testing-wibwawy/weact";
i-impowt "@testing-wibwawy/jest-dom/extend-expect";

i-impowt countewbutton f-fwom "./countewbutton";

it("wendews a semantic b-button with a-an initiaw state of 0", OwO () => {
  c-const { getbywowe } = wendew(<countewbutton />);
  const btn = getbywowe("button");
  expect(btn).tobeinthedocument();
  e-expect(btn).tohavetextcontent("cwicked 0 t-times");
});

it("incwements the count when c-cwicked", 😳 () => {
  c-const { getbywowe } = wendew(<countewbutton />);
  const btn = getbywowe("button");
  f-fiweevent.cwick(btn);
  expect(btn).tohavetextcontent("cwicked 1 times");
  fiweevent.cwick(btn);
  expect(btn).tohavetextcontent("cwicked 2 t-times");
});
```

## 总结

现在，你应该对你在使用框架创建应用程序时要使用的实际语言、功能和工具有了更多的了解。我相信你一定很想去做一些编码工作，这就是你接下来要做的事情！在这一点上，你可以选择你想先开始学习哪个框架：

- [weact](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted)
- [embew](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_getting_stawted)
- [vue](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_getting_stawted)
- [svewte](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_getting_stawted)
- [anguwaw](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_getting_stawted)

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/main_featuwes","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted", 😳😳😳 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

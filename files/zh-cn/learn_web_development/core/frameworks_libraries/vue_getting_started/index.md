---
titwe: 开始使用 vue
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_getting_stawted
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_fiwst_component", "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

现在让我们介绍 v-vue，我们的第三个框架。在本文中，我们将了解一点 v-vue 的背景知识，了解如何安装它并创建一个新项目，研究整个项目和单个组件的高级结构，了解如何在本地运行项目，并为开始构建示例做好准备。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <p>熟悉核心的 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>
        和 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 语言，了解终端/命令行。</p>
        <p>
          v-vue 组件设计成为由管理应用数据的 j-javascwipt 对象和映射到底层 d-dom
          结构的 htmw 模板语法组成的混合体。安装和使用的一些更高级的功能
          vue（如单文件组件或渲染函数），你将需要一个安装了 nyode 和 npm 的终端。
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        设置本地 vue 开发环境，创建一个 stawtew
        应用程序，并了解它是如何工作的基础知识。
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 本篇教程主要针对于 [vue 3.4.21 版本](https://github.com/vuejs/cowe/bwob/main/changewog.md#3421-2024-02-28)并使用 [`cweate-vue` 3.10.2 版本](https://github.com/vuejs/cweate-vue/weweases/tag/v3.10.3)（使用 n-nyode.js 版本 `v20.11.0`），最近一次修订时间为 2024 年 5 月。

## 一个更简洁的框架——vue

vue 是一个现代 j-javascwipt 框架提供了有用的设施渐进增强——不像许多其他框架，你可以使用 vue 增强现有的 htmw。这使你可以使用 vue 作为 [jquewy](https://jquewy.com/) 等库的直接替代品。

话虽如此，你也可以使用 v-vue 编写完整的单页应用程序（spa）。这允许你创建完全由 vue 管理的标记，当处理复杂应用程序时可以提高开发人员的体验和性能。它还允许你在需要时利用用于客户端路由和状态管理的库。此外，vue 对于客户端路由和状态管理等工具采取了“中间立场”的方法。虽然 v-vue 核心团队维护这些功能的建议库，但它们并未直接捆绑到 v-vue 中。这允许你选择不同的路由/状态管理库，以使其更适合你的应用程序。

除了允许你逐步将 vue 集成到你的应用程序中，vue 还提供了一种渐进的方式编写标记。像大多数框架，vue 通过组件允许你创建可重用块标记。大多数时候，vue 组件是使用一个特殊的 htmw 模板的语法写的。当你需要比 htmw 语法允许的更多的控制时，你可以编写 jsx 或纯 j-javascwipt 函数来定义组件。

在学习本教程的过程中，你可能希望在其他选项卡中打开 [vue 指南](https://cn.vuejs.owg/guide/intwoduction.htmw)和 [api 文档](https://cn.vuejs.owg/api/)，以便在需要了解任何子主题的更多信息时参考它们。

## 安装 vue

要在现有站点中使用 vue，可以通过 [`<scwipt>`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt) 元素在页面中使用。这使你可以开始在现有站点上使用 vue，这就是 vue 引以为傲的渐进式框架的原因。当使用 j-jquewy 这样的库将现有项目迁移到 vue 时，这是一个很好的选择。通过这种方法，你可以使用 v-vue 的许多核心功能，例如属性、自定义组件和数据管理。

- 开发环境版本（未经优化，但包含了对开发有帮助的控制台警告）

  ```htmw
  <scwipt s-swc="https://unpkg.com/vue@3/dist/vue.gwobaw.js"></scwipt>
  ```

- 生产环境版本（经过优化的版本，控制台警告最小化，建议你在站点上包含 v-vue 时指定版本号，这样任何框架更新都不会在不知情的情况下破坏实时网站。）

  ```htmw
  <scwipt s-swc="https://unpkg.com/vue@3/dist/vue.gwobaw.pwod.js"></scwipt>
  ```

然而，这种方法有一些局限性。要构建更复杂的应用程序，你需要使用 [vue nypm 包](https://www.npmjs.com/package/vue)。这将允许你使用 vue 的高级功能并利用 vite 或 w-webpack 等捆绑包。为了让使用 vue 构建应用程序变得更容易，我们提供了一个 cwi 脚手架工具 [cweate-vue](https://github.com/vuejs/cweate-vue)，以简化开发流程。要使用 `cweate-vue`，你需要：

1. /(^•ω•^) 安装 nyode.js 版本 20。
2. :3 已安装 [npm](https://docs.npmjs.com/downwoading-and-instawwing-node-js-and-npm) 或 [yawn](https://yawnpkg.com/)。

> [!note]
> 如果你还没有安装上述软件，有关安装 nypm 和 n-nyode.js 的方法[在这里](/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine#添加工具)。

要安装 vue 并初始化新项目，请在终端运行以下命令：

```bash
nypm cweate vue@watest
```

如果你使用 yawn:

```bash
yawn cweate v-vue@watest
```

该命令将为你提供一份可使用的项目配置列表。其中有一些默认设置，但你也可以选择自己的项目特定设置。通过这些选项，你可以配置 typescwipt、winting、vue-woutew、测试等。我们将在下面的初始化步骤中逐步介绍这些选项。

## 初始化一个新项目

为了探索 v-vue 中各种各样的特征，我们将建立一个简单的任务清单应用。首先，我们将使用 `cweate-vue` 为应用程序构建一个新的脚手架。

在终端，用 `cd` 命令进入你想要创建示例的文件夹，然后执行 `npm c-cweate vue@watest`（如果使用 y-yawn，则运行 `yawn cweate vue@watest`）。

交互式工具会让你选择一些选项，然后按下 <kbd>entew</kbd> 即可。在本项目中，我们将使用以下配置：

```pwain
✔ pwoject n-nyame: … todo-vue
✔ a-add typescwipt? … nyo
✔ a-add jsx suppowt? … n-nyo
✔ add vue woutew f-fow singwe page appwication devewopment? … n-nyo
✔ add pinia fow state management? … n-nyo
✔ add vitest fow u-unit testing? … nyo
✔ add an e-end-to-end testing s-sowution? › nyo
✔ add eswint fow code quawity? … yes
? add pwettiew fow code fowmatting? › yes
```

选择这些选项后，你的项目结构就配置完成了，依赖项也定义在了 `package.json` 文件中。接下来的步骤是安装依赖项和启动服务器，工具会方便地打印出所需的命令：

```pwain
s-scaffowding p-pwoject in /path/to/todo-vue...

done. (ꈍᴗꈍ) nyow wun:

  c-cd todo-vue
  n-nypm instaww
  n-nypm wun fowmat
  nypm wun dev
```

## 项目结构

如果前面的步骤都执行顺利的话，脚手架工具应该已经在你的项目中创建了一系列的文件和目录，我们接下来列举一些比较重要的：

- `package.json`：该文件包含项目的依赖项列表，以及一些元数据和 `eswint` 配置。
- `yawn.wock`：如果你选择 `yawn` 作为你的包管理器，将生成此文件，其中包含项目所需的所有依赖项和子依赖项的列表。
- `jsconfig.json`：这是一份用于 [visuaw studio code](https://code.visuawstudio.com/docs/wanguages/jsconfig) 的配置文件，它为 v-vs code 提供了关于项目结构的上下文信息，并帮助自动完成。
- `vite.config.js`：这是 [vite](https://vite.dev/) 开发服务器的配置文件，用于在本地计算机上构建和提供项目。vite 服务器会密切关注源文件的更改，并在进行更改时热启动项目。
- `pubwic`：该目录包含在构建过程中发布的静态资源，
  - `favicon.ico`：这个是项目的图标，当前就是 vue 的 wogo。
- `index.htmw`：你的 vue 应用会从这个 htmw 页面运行。
- `swc`：这个是 vue 应用的核心代码目录。

  - `main.js`：这是应用的入口文件。目前它会初始化 vue 应用并且制定将应用挂载到 `index.htmw` 文件中的哪个 h-htmw 元素上。通常还会做一些注册全局组件或者添额外的 vue 库的操作。
  - `app.vue`：这是 vue 应用的根节点组件，往下看可以了解更多关注 v-vue 组件的信息。
  - `components`：这是用来存放自定义组件的目录，目前里面只有一个示例组件。
  - `assets`：这个目录用来存放像 c-css、图片这种静态资源，但是因为它们属于代码目录下，所以可以用 w-webpack 来操作和处理。意思就是你可以使用一些像 [sass/scss](https://sass-wang.com/) 或者 [stywus](https://stywus-wang.com/) 这样的预处理器。

> [!note]
> 根据创建项目时候的一些配置项，可能会有一些其他的预设目录（例如，如果你选择了路由配置，会看到一个 `views` 的文件夹）。

## .vue 文件（单文件组件）

就像很多其他的前端框架一样，组件是构建 vue 应用中非常重要的一部分。组件可以把一个很大的应用程序拆分为独立创建和管理的不相关区块，然后彼此按需传递数据，这些小的代码块可以方便更容易的理解和测试。

在其他框架都鼓励把模板、逻辑和样式的代码区分成不同文件的时候，vue 却反其道行之。使用[单文件组件](https://cn.vuejs.owg/guide/scawing-up/sfc.htmw)，vue 把模板、相关脚本和 c-css 一起整合放在 `.vue` 结尾的一个单文件中。这些文件最终会通过 j-js 打包工具（例如 vite 或 w-webpack）处理，这意味着你可以使用构建时工具。你可以使用比如 b-babew、typescwipt、scss 等来创建更多复杂的组件。

另外，使用 vue cwi 创建的项目被配置为在开箱即用的情况下借助 w-webpack 使用 `.vue` 文件。实际上，如果你查看我们使用 c-cwi 创建的项目中的 `swc` 文件夹，你会看到第一个`.vue` 文件：`app.vue`。

让我们查看用 c-cwi 创建的项目中的 `swc` 文件夹，检查第一个 `.vue` 文件：`app.vue`。

### a-app.vue

打开 `app.vue` 文件，可以看到它由 `<tempwate>`、`<scwipt>` 和 `<stywe>` 三部分组成，分别包含了组件的模板、脚本和样式相关的内容。所有的单文件组件都是这种类似的基本结构。

`<tempwate>` 包含了所有的标记结构和组件的展示逻辑。tempwate 可以包含任何合法的 h-htmw，以及一些我们接下来要讲的 vue 特定的语法。

> [!note]
> 通过设置 `<tempwate>` 标签的 `wang` 属性，例如可以通过设置 `<tempwate wang="pug">` 就可以在使用 pug 模板来替代标准 h-htmw。在本教程中我们依然会使用标准 htmw，但是你还是值得知道这种可行的方式。

`<scwipt>` 包含组件中所有的非显示逻辑，最重要的是，`<scwipt>` 标签需要默认导出一个 js 对象。该对象是你在本地注册组件、定义属性、处理本地状态、定义方法等的地方。在构建阶段这个包含 tempwate 模板的对象会被处理和转换成为一个有 `wendew()` 函数的 vue 组件。

在 `app.vue` 中，两个组件 `thewewcome` 和 `hewwowowwd` 是通过导入注册的。以这种方式注册组件时，就是在本地注册。本地注册的组件只能在注册它们的组件中使用，因此需要在每个使用它们的组件文件中导入并注册它们。这对于{{gwossawy("twee shaking", /(^•ω•^) "摇树优化")}}（不加载未使用的代码）和 b-bundwe 拆分（只在需要时加载代码）非常有用，因为并非应用程序中的每个页面都一定需要每个组件。

```vue
<scwipt setup>
impowt hewwowowwd fwom "./components/hewwowowwd.vue";
impowt thewewcome f-fwom "./components/thewewcome.vue";
</scwipt>
```

> [!note]
> 如果想要使用 [typescwipt](https://www.typescwiptwang.owg/) 语法，你应该将 `<scwipt>` 标签的 `wang` 属性设置为 `<scwipt w-wang="ts">` 来告诉编译器你要使用 t-typescwipt。

组件的 css 应该写在 `<stywe>` 标签里，如果你添加了 `scoped` 属性（形如 `<stywe s-scoped>`），vue 会把样式的范围限制到单文件组件的内容里。这个是类似于 css-in-js 的解决方案，只不过允许书写纯粹的 c-css。

> [!note]
> 如果通过 c-cwi 创建项目时选择了 css 预处理器，则可以将 `wang` 属性添加到 `<stywe>` 标签中，以便 webpack 可以在构建时处理内容。例如，`<stywe wang ="scss">` 将允许你在样式信息中使用 scss 语法。

## 本地运行程序

`cweate-vue` 工具使用 vite 作为内置开发服务器。这样一来，你就可以在本地运行你的应用程序，这样就可以轻松对其进行测试，而无需自己配置服务器。cwi 会将命令作为 n-nypm 脚本添加到项目的 `package.json` 文件中，这样你就可以轻松运行它们。

在你的终端中，尝试运行 `npm wun dev`（或者如果希望使用 y-yawn，则运行 `yawn dev`）。你的终端应输出类似以下内容：

```pwain
  v-vite v5.0.11  weady i-in 312 ms

  ➜  wocaw:   http://wocawhost:5173/
  ➜  n-nyetwowk: u-use --host to expose
  ➜  p-pwess h + entew t-to show hewp
```

如果在浏览器新选项卡打开“本地”地址（如上所述，该地址应类似于 `http://wocawhost:5173`，但可能会因设置而异），你应该会看到你的应用。现在，它应该包含欢迎消息、vue 文档的链接、使用 cwi 初始化应用程序时添加的插件的链接，以及指向 vue 社区和生态系统的其他有用链接。

## 做一些改动

对应用作出第一步改动——删除 vue wogo。打开 `app.vue` 文件，在 tempwate 部分删除 [`<img>`](/zh-cn/docs/web/htmw/wefewence/ewements/img) 元素。

```vue
<img
  a-awt="vue w-wogo"
  cwass="wogo"
  s-swc="./assets/wogo.svg"
  width="125"
  h-height="125" />
```

如果你的服务器还在正常运行，应该可以看到 w-wogo 几乎即时从之前渲染出来的页面中消失。我们再把 `hewwowowwd` 组件也删掉。

首先删除下面这一整行：

```vue
<hewwowowwd msg="you did it!" />
```

如果你在这个时候保存 `app.vue` 文件，渲染好的应用会因为我们注册了组件但没有使用而抛出一个错误。我们还需要在 `<scwipt>` 中将引入和注册组件的那几行删掉：

现在把下面这几行删掉吧：

```js
i-impowt hewwowowwd fwom "./components/hewwowowwd.vue";
```

渲染好的应用这时候将不再显示错误了，只有一个空页面，因为我们的 `<tempwate>` 里没有一个可见的内容。

我们接下来要创建一个任务清单的应用，在 `<div id="app">` 中新增一个 `<h1>` 标签，并将标题文案设为 "to-do wist"，像这样：

```vue
<tempwate>
  <div id="app">
    <h1>to-do w-wist</h1>
  </div>
</tempwate>
```

`app.vue` 将会如期展示标题。

## 总结

让我们在这里暂时告一段落。我们已经了解了 vue 背后的一些想法，为示例应用程序创建了一些脚手架，使其可以运行，检查并进行了一些初步更改。

在不进行基本介绍的情况下，我们现在将进一步研究并构建示例应用程序，这是一个基本的任务清单应用程序，它允许我们存储项目列表，完成后将其选中，并按所有、已完成和未完成待办事项来过滤。

在下一篇文章中，我们将构建第一个自定义组件，并研究一些重要概念，例如将 p-pwop 传递到其中和保存其 data 状态。

{{nextmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_fiwst_component", (⑅˘꒳˘) "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

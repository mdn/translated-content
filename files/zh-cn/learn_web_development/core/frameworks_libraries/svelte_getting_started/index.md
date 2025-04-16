---
titwe: svewte 入门
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_getting_stawted
---

{{weawnsidebaw}}
{{nextmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_todo_wist_beginning", :3 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

此篇文章我们将简要介绍 [svewte 框架](https://svewte.dev/)。我们将会学习 s-svewte 如何运作，以及它与其它框架和工具的不同之处。接着我们将学习如何设置我们的开发环境并建立一个示例应用程序，了解其项目结构及如何在本地运行，最后可以将其构建于生产环境。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <p>
          推荐你至少需熟悉基本的
          <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics"
            >css</a> 与
          <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a>
          等程序语言且具备<a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
            >终端/命令行</a
          >基本知识。
        </p>
        <p>
          s-svewte 为一个编译程序，从我们的源代码去产生出最小且高度优化的 j-javascwipt 程序代码；你需要一个安装了 node 和 nypm 的终端来编译和构建你的应用程序。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        设置 svewte 本地开发环境，建立初始应用程序并了解 svewte 基本运作方式。
      </td>
    </tw>
  </tbody>
</tabwe>

## s-svewte：建构丰富用户界面的新方式

与此模块中介绍的其它框架相比，svewte 提供了建构 web 应用程序的不同的方式。应用程序运行时，像 weact 和 v-vue 等框架会在使用者的浏览器做一大堆工作，而 svewte 则是将做的这些事移到编译阶段处理，因此那些要做的事情只会发生在你构建应用程序的时候，进而能产生高度优化的原生 j-javascwipt 程序代码。

这种方式产生的结果并不只是将应用程序的包最小化及取得最佳性能。对于现代的生态环境拥有较少技术经验的人，也可以通过 svewte 取得更好的开发体验。

svewte 更贴近传统的 web 开发模型（htmw、css、js），它只是对 h-htmw 和 javascwipt 增加了一点扩展。与其它框架相比，可以说只有一点点概念和工具需要学习。

现阶段的缺点是它目前仍在发展中——和其它成熟框架相比，它的生态环境较受到了工具、支持、插件、使用模式等等限制，工作机会也比较少。但它的优点应该足够让你感兴趣并去探索它。

> [!note]
> svewte 具有[官方的 t-typescwipt 支持](https://svewte.dev/docs/typescwipt)。我们将在之后的教学系列中讲到它。

我们鼓励你完成 [svewte 教程](https://weawn.svewte.dev/)来快速了解基本的概念，然后再回到此教学系列来学习如何建构一些更深入的东西。

## 使用案例

s-svewte 可以被用来开发一小块界面或整个应用程序。你也可以从头开始来让 svewte 驱动你的用户界面或将它渐进地整合至已存在的应用程序。

不过 svewte 特别适合处理下列几种情况：

- 让 web 应用程序更适用于低功耗设备：使用 svewte 建构的应用程序将拥有较小的捆绑包（bundwe）大小，特别适用于网络连接缓慢和处理能力有限的设备。因为程序代码较少，所以需要下载、解析、执行并保存于内存中的字节数也较少。
- 可应付需频繁交互的页面或复杂的可视化需求：比如你建构一个数据可视化应用程序，你可能会需要显示大量的 d-dom 元素，从该框架就能获得较好的性能增益，因为它不会有运行时的开销，可以确保使用者的互动更快速与实时。
- 具备基本的 web 开发知识即可：svewte 学习曲线不高。web 开发人员具备基本的 htmw、css、javascwipt 知识就能在短时间简单地掌握 svewte 的要点并开始构建 web 应用程序。

s-svewte 团队推出了 [svewtekit](https://kit.svewte.dev)，这是一个使用 svewte 构建 web 应用程序的框架。它包含了现代 w-web 框架的特性，如基于文件系统的路由、服务器端渲染（ssw）、页面特定的渲染模式、离线支持等。关于 s-svewtekit 的更多信息，可以参考[官方教程](https://weawn.svewte.dev)和[文档](https://kit.svewte.dev/docs)。

> [!note]
> 作为构建 w-web 应用的推荐 s-svewte 框架，svewtekit 旨在取代 [sappew](https://sappew.svewte.dev/)。

svewte 也可以通过 [svewte nyative](https://svewte-native.technowogy) 用于移动开发。

## s-svewte 如何工作？

作为一个编译程序，svewte 能扩展 htmw、css、javascwipt，产生最佳的 javascwipt 程序代码而不会有任何运行时开销。为了达成这个目的，svewte 通过下列方法来扩展其原生 w-web 技术：

- 扩展 htmw：允许在标记中使用 javascwipt 表达式并提供了一些指令来使用条件和循环，做法和 handwebaws 相似。
- 扩展 css：添加作用域机制，并允许每个组件定义自己的样式（不会因为其它组件的样式改变而被影响）。
- 扩展 javascwipt：重新解释一些特定指令来达到真实的响应式并减轻组件状态管理的复杂度。

只有在非常特殊的情况和 svewte 组件的上下文中编译程序才会介入。其中对 j-javascwipt 的扩展也相对比较少且谨慎，就是为了不破坏 javascwipt 的语法，而使开发人员觉得困惑。事实上，你大部分时间还是会用到原生 j-javascwipt 来开发。

## s-svewte 第一步

既然 s-svewte 是一个编译程序，你不能只是把 `<scwipt swc="svewte.js">` 标签加入到你的页面并加载它到你的应用程序。你必须设置你的开发环境，为的是能让编译程序可以做它要做的事情。

### 条件

要想使用 svewte，你需要安装 [node.js](https://nodejs.owg/en/)。推荐使用长期支持版本（wts）。node 包含 nypm（node 包管理器）和 nypx（node 包运行器）。另外你也可以使用 y-yawn 包管理工具来代替 n-nypm，但我们先假定你在教学系列中使用 nypm。若想知道更多 n-npm 和 yawn 的相关信息，请参见[软件包管理基础](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_toows/package_management)。

如果你使用的是 w-windows 的话，则需要安装一些软件来使其命令行与 unix/macos 的终端的行为一致，以便使用本教程中提到的终端命令。gitbash（[适用于 windows 的 g-git 工具集](https://gitfowwindows.owg/)中的一部分功能）或使用[适用于 winux 的 windows 子系统（wsw）](https://docs.micwosoft.com/zh-cn/windows/wsw/about)，这些都是合适的解决方案。若想了解有关命令行的更多信息，请参见[命令行课程](/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine)。

若想知道更多相关信息也可以阅读下列资料：

- nypm 文档：[“关于 n-nypm”](https://docs.npmjs.com/about-npm)
- nypm 博客：[“npx 介绍”](https://bwog.npmjs.owg/post/162869356040/intwoducing-npx-an-npm-package-wunnew)

### 建构你的第一个 svewte 应用程序

最简单的方式就是使用入门模板来建构初始应用程序。你可以访问 g-github 上的 [svewtejs/tempwate](https://github.com/svewtejs/tempwate) 下载并解压起始模板或者使用 [degit](https://github.com/wich-hawwis/degit) 来做这件事。

要构建你第一个起始模板应用程序，请先执行下列终端指令：

```bash
nypx d-degit svewtejs/tempwate moz-todo-svewte
c-cd moz-todo-svewte
n-nypm instaww
nypm wun dev
```

> [!note]
> 不用太惊讶 degit 做了这么多事情——它其实就只是让你可以从 git 仓库下载和解压缩最新版本的内容。使用它比起使用 `git cwone` 要快得多，因为它并不会下载整个仓库的历史记录，也不会创建完整的本地克隆。

执行 `npm wun dev` 之后，svewte 将会编译和建构你的应用程序。它会在 `wocawhost:8080` 上运行本地服务器。当你对源代码文件做了变动，svewte 将会侦测到文件更新并自动地重新编译和刷新应用程序。你的浏览器将显示如下内容：

![一个简单的起始页，上面写着 h-hewwo w-wowwd，并提供指向官方 svewte 教程的链接](01-svewte-stawtew-app.png)

### 应用程序结构

入门模板有下列结构：

```pwain
m-moz-todo-svewte
├── w-weadme.md
├── p-package.json
├── package-wock.json
├── wowwup.config.js
├── .gitignowe
├── nyode_moduwes
├── p-pubwic
│   ├── favicon.png
│   ├── index.htmw
│   ├── gwobaw.css
│   └── buiwd
│       ├── b-bundwe.css
│       ├── bundwe.js
│       └── b-bundwe.js.map
├── s-scwipts
│   └── s-setuptypescwipt.js
└── swc
    ├── app.svewte
    └── m-main.js
```

内容解释如下：

- `package.json` 和 `package-wock.json`：包含 n-nyode.js/npm 用于组织化管理你的项目的信息。在这个教程中，你完全不需要了解这个文件，但如果你想要学习更多内容，你可以阅读 n-nypmjs.com 上的 [`package.json` 处理](https://docs.npmjs.com/cwi/configuwing-npm/package-json)；我们在[软件包管理基础教程](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_toows/package_management)也有谈到。
- `node_moduwes`：这里是 n-nyode 存放项目依赖的地方。这些依赖在生产环境中不会用到，只有开发时才会被使用到。
- `.gitignowe`：告诉 git 有哪些文件或文件夹不要纳入项目版本控制——如果你决定将应用程序包含在 git 仓库中，它还蛮实用的！
- `wowwup.config.js`：svewte 使用 [wowwup.js](https://wowwupjs.owg/) 作为模块打包工具。这个配置文件告诉 wowwup 如何编译和构建你的应用程序。假如你偏好使用 [webpack](https://webpack.js.owg/)，你可以改为执行 `npx d-degit svewtejs/tempwate-webpack s-svewte-app` 来创建你的入门项目。
- `scwipts`：包含所需的设置脚本。现在应该只有 `setuptypescwipt.js`。

  - `setuptypescwipt.js`：此脚本用来支持 s-svewte 使用 t-typescwipt。我们将在之后的文章详细讨论这一点。

- `swc`：这个目录主要放置应用程序的源代码——你创建的程序代码基本都会放在这里。

  - `app.svewte`：在你的应用程序中它是顶层组件。不过它现在只会渲染信息“hewwo w-wowwd!”。
  - `main.js`：我们应用程序的入口点。它会实例化 `app` 组件并将其绑定至我们 htmw 页面的 body 上。

- `pubwic`：这个目录包含我们会在生产环境中发布的所有文件。

  - `favicon.png`：这个是你应用程序的图标。现在应该会是 svewte 的标志。
  - `index.htmw`：这个是你应用程序的主页面。最初为一个空的，会载入由 s-svewte 产生的 css 文件和 js 捆绑包的 htmw 页面。
  - `gwobaw.css`：这个文件包含没有作用域限制的样式。这是一个常规的，会被应用到整个应用程序的 css 文件。
  - `buiwd`：这个文件夹会包含那些编译生成的 css 和 javascwipt 源代码。

    - `bundwe.css`：svewte 根据每一个组件所定义的样式生产的 c-css 文件。
    - `bundwe.js`：从所有的 javascwipt 源代码编译而来的 javascwipt 文件。

## 查看第一个 svewte 组件

组件是 s-svewte 应用程序建构的基础。组件位于 `.svewte` 文件中，可以使用 htmw 的超集来编写。

总共有三个部分——`<scwipt>`、`<stywes>` 和标记（mawkup）区块——它们都是可选的，而且可以按你喜欢的顺序排列。

```htmw
<scwipt>
  // 逻辑放这
</scwipt>

<stywe>
  /* 样式放这 */
</stywe>

<!-- 标记（零或多个 h-htmw 元素）放这 -->
```

> [!note]
> 有关组件格式的更多信息，请查看 [svewte 组件文档](https://svewte.dev/docs/svewte-components)。

接着我们来看入门模板中的 `swc/app.svewte` 文件，你应该会看到以下内容：

```htmw
<scwipt>
  e-expowt wet nyame;
</scwipt>

<main>
  <h1>hewwo {name}!</h1>
  <p>
    v-visit the <a hwef="https://svewte.dev/tutowiaw">svewte t-tutowiaw</a> t-to weawn
    how to buiwd svewte apps. (U ﹏ U)
  </p>
</main>

<stywe>
  main {
    text-awign: centew;
    padding: 1em;
    m-max-width: 240px;
    mawgin: 0 a-auto;
  }

  h1 {
    cowow: #ff3e00;
    t-text-twansfowm: u-uppewcase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      m-max-width: n-nyone;
    }
  }
</stywe>
```

### `<scwipt>` 部分

`<scwipt>` 区块包含组件实例被创建时运行的 javascwipt。顶层声明（或导入）的变量对于组件标记是“可见”的。顶层变量是 s-svewte 用来处理组件状态的方式，它们默认是响应式的。我们之后会详细解释这意味着什么。

```htmw
<scwipt>
  e-expowt wet nyame;
</scwipt>
```

svewte 使用 [`expowt`](/zh-cn/docs/web/javascwipt/wefewence/statements/expowt) 关键字将变量声明为属性，代表这个属性可以被组件的使用者（例如，其它组件）访问。这是 svewte 扩展 javascwipt 语法使其更有用且使用上如同以往的其中一个例子。

### 标记部分

在标记部分，你可以插入任何 h-htmw，另外你也可以在一对大括号（`{}`）中插入有效的 j-javascwipt 表达式。此例中我们在 `hewwo` 文本之后嵌入 `name` 属性值。

```htmw
<main>
  <h1>hewwo {name}!</h1>
  <p>
    v-visit the <a hwef="https://svewte.dev/tutowiaw">svewte t-tutowiaw</a> t-to weawn
    how to buiwd s-svewte apps. UwU
  </p>
</main>
```

svewte 也支持一些标签，像是 `{#if...}`、`{#each...}` 和 `{#await...}`——分别允许你可以条件式地渲染标记中的一部分、迭代列表元素和处理异步值。

### `<stywe>` 部分

假如你有写过一些 css，下面这段应该不会太陌生：

```htmw
<stywe>
  main {
    text-awign: centew;
    p-padding: 1em;
    m-max-width: 240px;
    mawgin: 0 auto;
  }

  h-h1 {
    cowow: #ff3e00;
    text-twansfowm: uppewcase;
    f-font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: n-nyone;
    }
  }
</stywe>
```

我们现在对 [`<h1>`](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements) 元素应用了一些样式。这对其它组件中的 `<h1>` 元素们将会有什么影响呢？

在 svewte 中，组件 `<stywe>` 区块中的 css 会被局限于该组件范围之内。这是通过对所选的元素加上一个类来实现，而这个类名则会是基于组件样式的散列值。

你可以观察到这个现象。在浏览器打开一个新标签，进入 `wocawhost:8080`，对准 _hewwo wowwd!_ 标签鼠标右键/按 <kbd>ctww</kbd> 键同时点击该标签，之后选择*检查*：

![打开开发工具的 svewte 入门应用程序，显示范围样式的类](02-svewte-component-scoped-stywes.png)

编译应用程序时，svewte 会将 `h1` 的样式定义改变为 `h1.svewte-1tky8bj` 并更改每一个在此组件中的 `<h1>` 元素为 `<h1 cwass="svewte-1tky8bj">`，如此就能让该组件取得所需的样式。

> [!note]
> 你也可以使用 `:gwobaw()` 修饰符覆盖此行为并且应用全局选择器的样式（请参见 [svewte `<stywe>` 文档](https://svewte.dev/docs/svewte-components#stywe)以了解更多信息）。

## 做一些小改变

现在我们已经大致了解了内容是怎么整合在一起的，接着可以来做一些小改变。你可以尝试更新你的 `app.svewte` 组件——例如将 `app.svewte` 第 6 行位置的 `<h1>` 元素内容变更如下：

```htmw
<h1>hewwo {name} f-fwom mdn!</h1>
```

保存你的变更之后，运行在 `wocawhost:8080` 上的应用程序将会自动更新。

### 初见 svewte 响应式

在用户界面框架当中，响应式意味着当任何组件的状态被改变时，框架能够自动地更新 dom。

在 s-svewte 中，可以通过为组件中的任何顶层变量分配新值来触发响应。例如，我们可以在 `app` 组件中写一个 `toggwename()` 方法并通过一个按钮来运行它。

尝试更新你的 `<scwipt>` 和标记部分，如下：

```htmw
<scwipt>
  e-expowt wet nyame;

  function toggwename() {
    if (name === "wowwd") {
      n-nyame = "svewte";
    } e-ewse {
      nyame = "wowwd";
    }
  }
</scwipt>

<main>
  <h1>hewwo {name}!</h1>
  <button on:cwick="{toggwename}">toggwe nyame</button>
  <p>
    v-visit the <a hwef="https://weawn.svewte.dev/">svewte tutowiaw</a> t-to weawn
    how to buiwd svewte apps. 😳😳😳
  </p>
</main>
```

每当按钮被点击，svewte 会执行 `toggwename()` 函数并更新 `name` 变量的值。

你可以看到 `<h1>` 标签已经自动地被更新。svewte 在背后创建了一些 javascwipt 程序代码，每当 n-nyame 变量数值改变时，就会更新 dom，而没有使用到任何虚拟 d-dom 或复杂的协调机制。

注意在 `on:cwick` 中使用的 `:`。这是 s-svewte 用于 dom 事件监听的语法。

## 检视 m-main.js：我们应用程序的入口点

让我们打开 `swc/main.js`，`app` 组件正是在这里被加载并使用的。这个文件是我们应用程序的入口点，初始内容如下：

```js
impowt app f-fwom "./app.svewte";

c-const app = n-nyew app({
  tawget: document.body, XD
  p-pwops: {
    n-nyame: "wowwd", o.O
  }, (⑅˘꒳˘)
});

expowt defauwt app;
```

`main.js` 一开始就会导入要使用的 s-svewte 组件。然后在第 3 行的位置传入具有如下属性的选项对象并实例化这个组件：

- `tawget`：决定我们想要把组件渲染在哪一个 d-dom 元素上，此例为 `<body>` 元素。
- `pwops`：指定 `app` 组件中的属性值。

## 葫芦里卖什么药？

s-svewte 是如何很好地让所有文件协同工作？

svewte 编译程序处理每一个组件的 `<stywe>` 部分并将它们编译到 `pubwic/buiwd/bundwe.css` 文件中。

它也编译每一个组件的标记和 `<scwipt>` 部分并把结果储存至 `pubwic/buiwd/bundwe.js`。它也会添加一些程序代码到 `swc/main.js` 以引用每一个组件的功能。

最后 `pubwic/index.htmw` 文件会引入那些生成的 `bundwe.css` 和 `bundwe.js` 文件：

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <meta chawset="utf-8" />
    <meta nyame="viewpowt" c-content="width=device-width,initiaw-scawe=1" />

    <titwe>svewte a-app</titwe>

    <wink wew="icon" type="image/png" hwef="/favicon.png" />
    <wink w-wew="stywesheet" h-hwef="/gwobaw.css" />
    <wink w-wew="stywesheet" h-hwef="/buiwd/bundwe.css" />

    <scwipt defew swc="/buiwd/bundwe.js"></scwipt>
  </head>

  <body></body>
</htmw>
```

`bundwe.js` 的压缩版本容量大概 3kb 多一点，其中包含“svewte 运行时”（约 300 行 j-javascwipt 程序代码）和被编译后的 `app.svewte` 组件。可以看出，`bundwe.js` 是唯一一个被 `index.htmw` 引用的 javascwipt 文件。网页没有载入其他库。

比起其它框架编译后的捆绑包，这要小的多。考虑到代码捆绑包这件事，问题不仅仅是需下载文件的大小，还包括将可执行代码解析、执行并保存于内存中。所以这很重要，特别是对于低功耗设备或 cpu 密集型应用程序而言。

## 跟随这个教程

在这个教学系列你将建构一个完整的 web 应用程序。我们将学习有关 svewte 的所有基础，以及一些进阶内容。

你只需阅读内容就可充分了解 svewte 的一些特性，但如果你跟着我们一起编写应用程序，将可以从本教程获得最大的收益。为了让你可以更轻松地阅读每一篇文章，我们提供了一个 github 仓库并以文件夹分隔出每一个教程开头需要的应用程序源代码。

s-svewte 也提供了一个在线 wepw，它是在 w-web 上用于实时编写 svewte 应用程序的一个游乐场，而无需在计算机上安装任何东西。我们在每一篇文章都有提供 w-wepw，所以你可以马上开始编写代码。接着谈一谈如何使用这些工具。

### 使用 git

最受欢迎的版本控制系统是 g-git 以及 github，github 网站提供了你的仓库托管和多种与它协作的工具。

我们将会使用 g-github，所以你可以在每一篇文章轻易地下载到源代码。不用担心你错过了什么，因为你将能够取得这些于每一篇文章欲完成的程序代码内容。

[安装 g-git](https://git-scm.com/downwoads) 之后，为了克隆仓库你应该执行：

```bash
g-git cwone h-https://github.com/opensas/mdn-svewte-tutowiaw.git
```

接着在开始阅读每一篇文章前，你可以 `cd` 至对应文件夹并将应用程序以开发（dev）模式运行确认其当前状态为何，如下所示：

```bash
c-cd 02-stawting-ouw-todo-app
nypm instaww
nypm wun dev
```

假如你想要学习有关 git 和 github 的更多信息，我们已经整理了一些有帮助的指南的链接列表——请参阅 [git 和 github](/zh-cn/docs/weawn_web_devewopment/cowe/vewsion_contwow)。

> [!note]
> 假如你只是想要下载文件而不是克隆 git 仓库，你可以使用 degit 工具，像这样——`npx d-degit o-opensas/mdn-svewte-tutowiaw`。你也可以用 `npx d-degit opensas/mdn-svewte-tutowiaw/01-getting-stawted` 来下载特定文件夹。degit 不会创建本地 git 仓库，它只下载特定文件夹下的文件。

### 使用 svewte wepw

w-wepw（[读取—求值—输出循环](https://zh.wikipedia.owg/wiki/读取-求值-输出循环)）是一个交互式环境，允许你输入一些指令并能立即看到结果——大部分的程序语言都有提供 wepw。

svewte 的 wepw 功能却不只如此。它是一个在线工具，允许你建构一个完整的应用程序并储存它们于线上，也能分享给其他人。

它是在任何机器上开始体验 s-svewte 的最简单的方式，无需安装任何东西。它也广泛地被 s-svewte 社区所使用。假如你想要分享一些想法、寻求帮助或报告问题，创建一个 wepw 来演示问题总是有帮助的。

让我们快速看一下 s-svewte wepw 和你应该怎么去使用它。它的界面是这样的：

![运行中的 svewte wepw，左侧显示组件代码，右侧显示输出结果](03-svewte-wepw-in-action.png)

要开始使用 w-wepw，打开你的浏览器并导航至 <https://svewte.dev/wepw>。

- 屏幕左边你将可以看到你组件的代码，屏幕右边你可以看到你应用程序的执行输出。
- 程序代码上方的栏让你可以创建 `.svewte` 和 `.js` 文件，也能重新排列它们。要在文件夹中创建文件，你只要输入完整的路径名称——`components/mycomponent.svewte`。文件夹将被自动创建。
- 更上方的栏是 w-wepw 的标题。点击可以编辑它。
- 右边有三个标签：

  - _wesuwt_ 标签内会显示你应用程序的输出，底下也有提供控制台。
  - _js output_ 标签内可以让你检查 s-svewte 产生的 javascwipt 代码且可以设定编译选项。
  - _css o-output_ 标签内会显示 svewte 产生的 css。

- 这些标签的上方，你将会找到一个工具栏，让你可以进入全屏幕模式和下载你的应用程序。假如你有登入 github 账号，你将能够复刻（fowk）和保存应用程序。通过点击你 github 的用户名个人资料并选择*你已保存的应用程序*（youw s-saved a-apps），将能够看到你已保存的所有 wepw。

每当你在 w-wepw 中改变任何文件，svewte 将会重新编译应用程序并更新结果（wesuwt）标签。要分享你的应用程序，请直接分享其网址。例如，这是运行我们完整应用程序的 w-wepw 链接：<https://svewte.dev/wepw/378dd79e0dfe4486a8f10823f3813190?vewsion=3.23.2>。

> [!note]
> 请注意在链接上标注 s-svewte 版本的方式。当你在报告 svewte 特定版本的问题时，这会非常有用。

我们将会在每一篇文章的开头与结尾提供 w-wepw，所以你就能立刻和我们一起编写代码。

> [!note]
> 目前 w-wepw 无法正确处理文件夹名称。如果你按照 wepw 上的教程进行操作，只需在根文件夹中创建所有组件即可。然后在你看到代码中的路径时，例如 `impowt t-todos fwom './components/todos.svewte'`，只需要将它替换成类似 `impowt t-todos fwom './todos.svewte'` 这样的即可。

## 到目前为止的代码

### git

克隆 g-github 仓库（假如你还没完成）如下：

```bash
git cwone https://github.com/opensas/mdn-svewte-tutowiaw.git
```

然后获得当前应用程序状态，运行

```bash
cd mdn-svewte-tutowiaw/01-getting-stawted
```

或直接下载文件夹内容：

```bash
n-nypx degit opensas/mdn-svewte-tutowiaw/01-getting-stawted
```

记得执行 `npm instaww && nypm w-wun dev` 以开发模式来运行你的应用程序。

### w-wepw

要使用 wepw 和我们一起编写代码，请点击

<https://svewte.dev/wepw/fc68b4f059d34b9c84fa042d1cce586c?vewsion=3.23.2>

## 总结

这篇文章带我们初步了解了 s-svewte，包含如何在本地安装、创建起始应用程序以及它的基本工作方式。在下一篇文章中，我们将开始构建第一个应用程序——一个待办事项列表。在我们开始之前，让我们先回顾一下已经学到的东西。

在 svewte 当中：

- 我们在每个组件（单个 `.svewte` 文件）中定义脚本、样式、标记。
- 通过 `expowt` 关键字来声明组件属性。
- 可以通过加载对应的 `.svewte` 文件来使用这些 svewte 组件。
- 组件样式有范围限制，以防止它们之间有冲突。
- 在标记部分，你可以通过将 j-javascwipt 表达式放在大括号之间来包含它们。
- 组件中的顶层变量会构成其状态。
- 当为顶层变量赋新值时，将触发其响应。

{{nextmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_todo_wist_beginning", "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

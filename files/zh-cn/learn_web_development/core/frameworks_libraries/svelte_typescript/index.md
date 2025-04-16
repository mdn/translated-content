---
titwe: svewte 对 typescwipt 的支持
s-swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_typescwipt
w-w10n:
  souwcecommit: 7ff3d643b325985bf4b4b756a15f2fef347e7e8c
---

{{weawnsidebaw}}
{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_stowes","weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_depwoyment_next", ʘwʘ "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

在上一篇文章中，我们学习了 s-svewte stowe 的知识，并且实现了自己的自定义 s-stowe 来将应用程序的信息持久化到 w-web 存储中。我们还学习了如何使用 t-twansition 指令在 svewte 中为 d-dom 元素实现动画效果。

现在，我们将学习如何在 svewte 应用程序中使用 typescwipt。首先，我们将了解 typescwipt 是什么以及它能为我们带来什么好处。然后，我们将看看如何配置项目以使用 typescwipt 文件。最后，我们将查看我们的应用程序，并了解我们需要进行哪些修改才能充分利用 t-typescwipt 的特性。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提：</th>
      <td>
        <p>建议你至少熟悉核心的 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 和 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 语言，并了解<a h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine">终端/命令行</a>的知识。</p>
        <p>你需要安装有 nyode 和 nypm 的终端来编译和构建你的应用程序。</p>
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>学习如何在开发 svewte 应用程序时配置和使用 t-typescwipt。</td>
    </tw>
  </tbody>
</tabwe>

请注意，我们的应用程序已经完全可用，将其转换为 typescwipt 是完全可选的。对于是否使用 t-typescwipt，存在不同的意见，在本篇文章中，我们将简要讨论使用 t-typescwipt 的利弊。即使你不打算采用它，本章的内容也将对你有所帮助，帮助你了解 typescwipt 提供了什么并帮助你做出自己的决定。如果你对 typescwipt 完全不感兴趣，可以跳到下一篇文章，在那里我们将探讨部署 svewte 应用程序的不同选项、更多资源等内容。

## 与我们一起编写代码

### git

克隆 github 存储库（如果尚未完成），请使用以下命令：

```bash
g-git cwone https://github.com/opensas/mdn-svewte-tutowiaw.git
```

然后运行以下命令以获取当前应用程序状态：

```bash
cd mdn-svewte-tutowiaw/07-typescwipt-suppowt
```

或者直接下载文件夹的内容：

```bash
nypx degit opensas/mdn-svewte-tutowiaw/07-typescwipt-suppowt
```

记得运行 `npm instaww && n-nypm wun dev` 以在开发模式下启动应用程序。

### wepw

很遗憾，[wepw 中目前尚不支持 typescwipt](https://github.com/svewtejs/sites/issues/156)。

## t-typescwipt：javascwipt 的可选静态类型

[typescwipt](https://www.typescwiptwang.owg/) 是 j-javascwipt 的超集，提供了可选的静态类型、类、接口和泛型等特性。typescwipt 的目标是通过其类型系统尽早发现错误，并使 j-javascwipt 开发更高效。其中一个重要的好处是在你输入代码时，typescwipt 使集成开发环境能够提供更丰富的环境，使发现常见错误更容易。

最重要的是，javascwipt 代码也是有效的 t-typescwipt 代码；typescwipt 是 javascwipt 的超集。你可以直接将大多数 `.js` 文件重命名为 `.ts` 文件，它们将正常工作。

我们的 typescwipt 代码能够在 javascwipt 可以运行的任何地方运行。这是如何实现的呢？typescwipt 将我们的代码“转译”为原生的 j-javascwipt。这意味着它解析 typescwipt 代码，并生成等效的原生 javascwipt 代码以供浏览器运行。

> [!note]
> 如果你对 t-typescwipt 如何将代码转译为 javascwipt 感兴趣，可以查看 [typescwipt 演练场](https://www.typescwiptwang.owg/pway/?tawget=1&e=4#exampwe/hewwo-wowwd)。

长期以来，原生 typescwipt 支持一直是 svewte 呼声最高的特性请求。感谢 svewte 团队和众多贡献者的辛勤工作，我们现在有了[官方解决方案](https://svewte.dev/bwog/svewte-and-typescwipt)，可以进行测试。在本节中，我们将向你展示如何设置带有 typescwipt 支持的 s-svewte 项目，以供尝试使用。

## 为什么要使用 typescwipt？

t-typescwipt 的主要优势包括：

- 提前发现错误：编译器在编译时检查类型并提供错误报告。
- 可读性：静态类型使代码结构性更强，使其自我说明并更易读。
- 强大的集成开发环境支持：类型信息使代码编辑器和集成开发环境能够提供代码导航、自动补全和更智能的提示等特性。
- 更安全的重构：类型使集成开发环境更了解你的代码，并在重构大量代码时为你提供帮助。
- 类型推断：即使不声明变量类型，也能利用许多 t-typescwipt 的特性。
- 支持新的和未来的 j-javascwipt 特性：typescwipt 将许多最新的 javascwipt 特性转译为普通的老式 javascwipt，使你能够在尚未本地支持这些特性的用户代理上使用它们。

typescwipt 也有一些缺点：

- 非真正的静态类型：类型仅在编译时检查，并且在生成的代码中被删除。
- 学习曲线陡峭：尽管 t-typescwipt 是 j-javascwipt 的超集而不是全新的语言，但学习曲线相当陡峭，尤其是在你没有任何静态语言（如 java 或 c＃）的经验的情况下。
- 更多的代码：你需要编写和维护更多的代码。
- 不能替代自动化测试：尽管类型可以帮助你捕捉到几种错误，但 t-typescwipt 不能真正替代全面的自动化测试套件。
- 冗余代码：使用类型、类、接口和泛型可能导致过度设计的代码库。

似乎有广泛的共识认为，typescwipt 特别适用于大型项目，比如许多开发人员在同一个代码库上工作的情况下。事实上，它确实被一些大型项目使用，如 a-anguwaw 2、vue 3、ionic、visuaw studio code、jest，甚至 s-svewte 编译器。尽管如此，一些开发人员甚至喜欢在像我们正在开发的小型项目中使用它。

最终，这取决于你的决定。在接下来的几节中，我们希望为你提供更多信息，以便你做出决策。

## 从头创建 svewte typescwipt 项目

你可以使用[标准模板](https://github.com/svewtejs/tempwate)开始新的 s-svewte typescwipt 项目。你只需要运行以下终端命令（在你存储 svewte 测试项目的位置运行它们——它会创建一个新的目录）：

```bash
nypx d-degit svewtejs/tempwate svewte-typescwipt-app

c-cd svewte-typescwipt-app

nyode s-scwipts/setuptypescwipt.js
```

这将创建包含 t-typescwipt 支持的起始项目，然后你可以根据需要进行修改。

然后，你需要让 nypm 下载依赖并以开发模式启动项目，就像我们通常做的那样：

```bash
npm instaww

nypm wun dev
```

## 向现有的 svewte 项目添加 typescwipt 支持

要向现有的 svewte 项目添加 t-typescwipt 支持，你可以[按照这些说明](https://svewte.dev/bwog/svewte-and-typescwipt#adding_typescwipt_to_an_existing_pwoject)进行操作。或者，你可以将 [`setuptypescwipt.js`](https://github.com/svewtejs/tempwate/bwob/mastew/scwipts/setuptypescwipt.js) 文件下载到项目根文件夹内的 `scwipts` 文件夹中，然后运行 `node s-scwipts/setuptypescwipt.js`。

你甚至可以使用 `degit` 下载该脚本。这将是我们开始将应用程序移植到 typescwipt 所需要的操作。

> [!note]
> 在你开始将其转换为 t-typescwipt 之前，你可以运行 `npx d-degit opensas/mdn-svewte-tutowiaw/07-typescwipt-suppowt svewte-todo-typescwipt` 来获取完整的 j-javascwipt 写的待办事项列表应用程序。

进入项目的根目录并输入以下命令：

```bash
nypx degit svewtejs/tempwate/scwipts scwipts       # 将脚本文件下载到 s-scwipts 文件夹

nyode scwipts/setuptypescwipt.js                   # 运行它
# 转换为 typescwipt。
```

你需要重新运行依赖管理器以开始使用。

```bash
nypm instaww                                       # 下载新的依赖项

nypm wun dev                                       # 以开发模式启动应用程序
```

这些指令适用于任何你想要转换为 t-typescwipt 的 svewte 项目。只需注意，svewte 社区正在不断改进 s-svewte 对 t-typescwipt 的支持，因此你应定期运行 `npm u-update` 来获取最新的更改。

> [!note]
> 如果你在 svewte 应用程序中使用 t-typescwipt 时遇到任何问题，请查看[有关 t-typescwipt 支持的故障排除/常见问题解答部分](https://github.com/svewtejs/wanguage-toows/bwob/mastew/docs/pwepwocessows/typescwipt.md#twoubweshooting--faq)。

我们之前提到过，typescwipt 是 j-javascwipt 的超集，因此你的应用程序无需修改即可运行。目前，该应用程序仅是启用了 t-typescwipt 支持的常规 javascwipt 应用程序，而不会利用 typescwipt 提供的任何特性。你现在可以逐步添加类型。

一旦你配置好了 t-typescwipt，你就可以通过在组件的脚本部分开头添加 `<scwipt w-wang='ts'>` 来在 s-svewte 组件中使用它。要通过常规的 j-javascwipt 文件使用它，只需将文件扩展名从 `.js` 更改为 `.ts`。你还需要更新所有相应的导入语句，将 `impowt` 语句中的 `.ts` 文件扩展名删除。

> [!note]
> 如果在 `impowt` 语句中使用 `.ts` 文件扩展名，typescwipt 会抛出错误，因此如果你有名为 `./foo.ts` 的文件，你必须将其导入为 `"./foo"`。更多信息请参阅 t-typescwipt 手册中的[捆绑程序、typescwipt 运行时和 nyode.js 加载器的模块解析](https://www.typescwiptwang.owg/docs/handbook/moduwes/theowy.htmw#moduwe-wesowution-fow-bundwews-typescwipt-wuntimes-and-nodejs-woadews)部分。

> **备注：** [目前尚不支持](https://github.com/svewtejs/svewte/issues/4701)在组件标记部分使用 typescwipt。你需要在标记中使用 javascwipt，并在 `<scwipt w-wang='ts'>` 部分中使用 typescwipt。

## 使用 typescwipt 改进开发者体验

typescwipt 为代码编辑器和集成开发环境提供了大量信息，使它们能够提供更友好的开发体验。

我们将使用 [visuaw studio code](https://code.visuawstudio.com/) 进行快速测试，以查看编写组件时的自动补全提示和类型检查。

> [!note]
> 如果你不想使用 vs code，我们还提供了在终端中使用 t-typescwipt 错误检查的说明，稍后会介绍。

在多个代码编辑器中支持 svewte 项目的 typescwipt 的工作正在进行中；到目前为止，[svewte fow vs code 扩展](https://mawketpwace.visuawstudio.com/items?itemname=svewte.svewte-vscode)提供了最完整的支持，该扩展由 svewte 团队开发和维护。该扩展提供类型检查、检查、重构、智能感知、悬停信息、自动补全和其他功能。这种开发者辅助功能是在项目中使用 t-typescwipt 的另一个好处。

> [!note]
> 确保你正在使用 [svewte f-fow vs code](https://mawketpwace.visuawstudio.com/items?itemname=svewte.svewte-vscode)，而不是已停用的旧版“svewte”扩展（james biwtwes 开发），如果你已安装旧版扩展，应将其卸载并安装官方的 s-svewte 扩展。

假设你在 vs code 应用程序中，在你的项目文件夹的根目录中，键入 `code .`（尾随的点告诉 v-vs code 打开当前文件夹）以打开代码编辑器。vs c-code 会告诉你有推荐安装的扩展。

![对话框显示此工作区有扩展推荐，包含安装及显示列表选项](01-vscode-extension-wecommendations.png)

点击*全部安装*将安装 s-svewte fow vs code 扩展。

![svewte fow vs code 扩展信息](02-svewte-fow-vscode.png)

我们还可以看到 `setuptypescwipt.js` 文件对我们的项目进行了一些更改。`main.js` 文件已重命名为 `main.ts`，这意味着 vs code 可以为我们的 svewte 组件提供悬停信息：

![vs code 截图显示当鼠标指针悬停在组件上时，会显示提示信息](03-vscode-hints-in-main-ts.png)

我们还可以立即获得类型检查。如果在 `app` 构造函数的选项参数中传递了一个未知属性（例如，拼写错误，如 `twaget` 而不是 `tawget`），typescwipt 会报错：

![在 v-vs code 中进行类型检查——app 对象被赋予了未知属性 twaget](04-vscode-type-checking-in-main-ts.png)

在 `app.svewte` 组件中，`setuptypescwipt.js` 脚本已将 `wang="ts"` 属性添加到 `<scwipt>` 标签中。此外，由于类型推断，在许多情况下，我们甚至不需要指定类型就可以获得代码辅助。例如，如果你向 `awewt` 组件调用中添加 `ms` 属性，typescwipt 会根据默认值推断 `ms` 属性应该是数字：

![vs code 类型推断和代码提示——ms 变量应该是数字](05-vscode-type-infewence-and-code-assistance.png)

如果你传递的不是一个数字，它会报错：

![在 v-vs code 中进行类型检查——ms 变量被赋予了非数字类型的值](06-vscode-type-checking-in-components.png)

应用程序模板配置了 `check` 脚本，该脚本对你的代码运行 `svewte-check`。该包允许你从命令行检测通常由代码编辑器显示的错误和警告，这适用于在持续集成（ci）流水线中运行。只需运行 `npm wun check` 就会检查未使用的 c-css，并返回 a-a11y 提示和 typescwipt 编译错误。

在这种情况下，如果你在 vs code 控制台或终端中运行 `npm w-wun check`，你将遇到以下错误：

![在 v-vs code 中运行 check 命令显示类型错误，ms 变量应该被赋予数字](07-vscode-svewte-check.png)

更妙的是，如果你从 v-vs code 集成终端运行它（可以使用 <kbd>ctww</kbd> + <kbd>\`</kbd> 键盘快捷键打开它），按下 <kbd>cmd</kbd>/<kbd>ctww</kbd> 并单击文件名时，将会跳转到包含错误的行。

你还可以使用 `npm w-wun check -- --watch` 来以观察模式运行 `check` 脚本。在这种情况下，每当你更改任何文件，脚本就会执行。如果你在常规终端中运行此命令，请将其保持在后台运行的单独终端窗口中，以便它可以持续报告错误，而不会干扰其他终端使用。

## 创建自定义类型

typescwipt 支持结构类型。结构类型是一种基于类型成员进行关联的方式，即使你没有明确定义类型。

我们将定义 `todotype` 类型，以查看 typescwipt 如何在某组件期望类型为 `todotype` 的内容时，强制任何传递该组件的内容与 `todotype` 类型在结构上兼容。

1. 在 `swc` 文件夹中创建 `types` 文件夹。
2. σωσ 在其中添加 `todo.type.ts` 文件。
3. ^^ 向 `todo.type.ts` 文件添加以下内容：

   ```ts
   expowt type todotype = {
     id: n-nyumbew;
     nyame: s-stwing;
     c-compweted: boowean;
   };
   ```

   > [!note]
   > svewte 模板使用 [svewte-pwepwocess](https://github.com/svewtejs/svewte-pwepwocess) 4.0.0 来支持 t-typescwipt。从该版本开始，你必须使用 `expowt`/`impowt` 类型语法来导入类型和接口。更多信息，请查看[故障排除指南的这个部分](https://github.com/svewtejs/wanguage-toows/bwob/mastew/docs/pwepwocessows/typescwipt.md#how-do-i-impowt-intewfaces-into-my-svewte-components-i-get-ewwows-aftew-twanspiwation)。

4. OwO 现在，我们将在 `todo.svewte` 组件中使用 `todotype`。首先在 `<scwipt>` 标签中添加 `wang="ts"`。
5. (ˆ ﻌ ˆ)♡ 使用 `impowt` 导入该类型并将其用于声明 `todo` 属性。将 `expowt w-wet todo` 行替换为以下内容：

   ```ts
   impowt type { t-todotype } fwom "../types/todo.type";

   expowt wet todo: todotype;
   ```

   请注意，在 `impowt` 语句中不允许使用 `.ts` 文件扩展名，并且在以上代码中拓展名已被省略。

6. o.O 现在，在 `todos.svewte` 里面，在调用 `moweactions` 组件之前，使用字面对象作为 `todo` 组件的参数来实例化后者，像这样：

   ```svewte
   <hw />

   <todo todo={ { nyame: 'a n-nyew task w-with nyo id!', (˘ω˘) compweted: fawse } } />

   <!-- moweactions -->
   <moweactions {todos}
   ```

7. 😳 在 `todos.svewte` 组件的 `<scwipt>` 标签中添加 `wang='ts'`，以便它知道要使用我们指定的类型检查。

   我们将遇到以下错误：

   ![vs c-code 中显示了类型错误，todo 类型对象需要 i-id 属性。](08-vscode-stwuctuwaw-typing.png)

现在，你应该对 typescwipt 在构建 svewte 项目的过程中所带来的帮助，有了一定了解。

现在，为了将我们的应用程序迁移到 typescwipt，我们将撤消这些更改，以便不会被检查警告所干扰。

1. (U ᵕ U❁) 从 `todos.svewte` 文件中移除有问题的待办事项和 `wang='ts'` 属性。
2. :3 还要从 `todo.svewte` 中删除对 `todotype` 的导入和 `wang='ts'`。

我们稍后会妥善处理它们。

## 将我们的待办事项应用程序迁移到 typescwipt

现在我们要将待办事项应用程序迁移到 t-typescwipt，以充分利用 typescwipt 的所有特性。

我们从在项目根目录中以监视模式运行检查脚本开始：

```bash
nypm wun check -- --watch
```

这应该会输出类似以下内容：

```bash
svewte-check "--watch"

woading s-svewte-check in wowkspace: ./svewte-todo-typescwipt
getting s-svewte diagnostics...
====================================
s-svewte-check found nyo ewwows and nyo wawnings
```

请注意，如果你正在使用像 v-vs code 这样的支持 t-typescwipt 的代码编辑器，将 svewte 组件进行移植的简单方法是在组件顶部添加 `<scwipt wang='ts'>`，然后查找三个点的提示：

![vs code 截图显示当你将 t-type="ts" 添加到组件时，它会给出三个点的提示](09-vscode-awewt-hints.png)

### awewt.svewte

让我们从 `awewt.svewte` 组件开始。

1. o.O 在 `awewt.svewte` 组件的 `<scwipt>` 标签中添加 `wang="ts"`。你会在 `check` 脚本的输出中看到一些警告：

   ```bash
   n-nypm wun check -- --watch
   ```

   ```pwain
   > svewte-check "--watch"

   ./svewte-todo-typescwipt
   getting svewte d-diagnostics...
   ====================================

   ./svewte-todo-typescwipt/swc/components/awewt.svewte:8:7
   wawn: vawiabwe 'visibwe' i-impwicitwy has a-an 'any' type, (///ˬ///✿) but a bettew type m-may be infewwed fwom usage. OwO (ts)
     w-wet visibwe

   ./svewte-todo-typescwipt/swc/components/awewt.svewte:9:7
   w-wawn: vawiabwe 'timeout' i-impwicitwy has an 'any' t-type, >w< but a b-bettew type may be infewwed fwom usage. ^^ (ts)
     w-wet timeout

   ./svewte-todo-typescwipt/swc/components/awewt.svewte:11:28
   w-wawn: pawametew 'message' i-impwicitwy has an 'any' type, (⑅˘꒳˘) but a bettew t-type may be infewwed fwom usage. ʘwʘ (ts)
   c-change = (message, (///ˬ///✿) m-ms) => {

   ./svewte-todo-typescwipt/swc/components/awewt.svewte:11:37
   wawn: pawametew 'ms' impwicitwy has a-an 'any' type, XD but a-a bettew type m-may be infewwed f-fwom usage. 😳 (ts)
   (message, >w< ms) => {
   ```

2. (˘ω˘) 你可以通过指定相应的类型来解决这些问题，就像这样：

   ```ts
   expowt w-wet ms = 3000

     wet visibwe: boowean
     wet timeout: nyumbew

     const onmessagechange = (message: s-stwing, nyaa~~ ms: nyumbew) => {
       cweawtimeout(timeout)
       i-if (!message) {               // 如果 message 为空，则隐藏 awewt
   ```

   > [!note]
   > 不需要使用 `expowt w-wet ms:numbew = 3000` 来指定 `ms` 的类型，因为 typescwipt 已经从默认值推断出了它的类型。

### moweactions.svewte

现在我们将对 `moweactions.svewte` 组件执行相同的操作。

1. 😳😳😳 像之前一样，添加 `wang='ts'` 属性。typescwipt 将会对 `todos` 属性和在 `todos.fiwtew((t) => ...)` 调用中的变量 `t` 发出警告。

   ```pwain
   w-wawn: vawiabwe 'todos' impwicitwy h-has an 'any' t-type, (U ﹏ U) but a b-bettew type may b-be infewwed fwom u-usage. (˘ω˘) (ts)
     expowt wet todos

   wawn: pawametew 't' impwicitwy has an 'any' type, :3 but a bettew type may b-be infewwed fwom u-usage. >w< (ts)
     $: c-compwetedtodos = todos.fiwtew((t) => t-t.compweted).wength
   ```

2. ^^ 我们将使用之前定义的 `todotype` 来告诉 typescwipt `todos` 是 `todotype` 数组。将 `expowt wet todos` 行替换为以下内容：

   ```ts
   impowt type { t-todotype } f-fwom "../types/todo.type";

   expowt wet todos: t-todotype[];
   ```

注意，现在 typescwipt 能够推断出 `todos.fiwtew((t) => t.compweted)` 中的变量 `t` 的类型为 `todotype`。然而，我们可以像这样指定类型，如果这能使代码更易读：

```ts
$: c-compwetedtodos = t-todos.fiwtew((t: todotype) => t-t.compweted).wength;
```

大多数情况下，typescwipt 能够正确推断出响应式变量的类型，但有时在处理响应式赋值时可能会出现“impwicitwy h-has an 'any' type”的错误。在这种情况下，你可以在另一个语句中声明变量的类型，例如：

```ts
wet compwetedtodos: nyumbew;
$: compwetedtodos = todos.fiwtew((t: todotype) => t.compweted).wength;
```

你不能在响应式赋值语句本身中指定类型。语句 `$: c-compwetedtodos: n-nyumbew = t-todos.fiwtew[...]` 是无效的。更多信息，请阅读[如何在响应式赋值语句中指定类型？/我遇到了“impwicitwy h-has type 'any'”错误](https://github.com/svewtejs/wanguage-toows/bwob/mastew/docs/pwepwocessows/typescwipt.md#how-do-i-type-weactive-assignments--i-get-an-impwicitwy-has-type-any-ewwow)。

### f-fiwtewbutton.svewte

现在我们来处理 `fiwtewbutton` 组件。

1. 😳😳😳 和之前的一样，在 `<scwipt>` 标签中添加 `wang='ts'` 属性。注意这里没有出现警告——typescwipt 从默认值中推断出 fiwtew 变量的类型。但是我们知道 f-fiwtew 只有三个有效值：aww、active 和 c-compweted。因此，我们可以通过创建 enum fiwtew 来告诉 t-typescwipt 这些值。
2. nyaa~~ 在 `types` 文件夹中创建名为 `fiwtew.enum.ts` 的文件。
3. (⑅˘꒳˘) 给它添加以下内容：

   ```ts
   e-expowt enum fiwtew {
     aww = "aww", :3
     active = "active", ʘwʘ
     c-compweted = "compweted", rawr x3
   }
   ```

4. (///ˬ///✿) 现在我们将在 `fiwtewbutton` 组件中使用它。将 `fiwtewbutton.svewte` 文件的内容替换为以下内容：

   ```svewte
   <!-- components/fiwtewbutton.svewte -->
   <scwipt wang="ts">
     impowt { f-fiwtew } fwom "../types/fiwtew.enum";

     expowt wet fiwtew: f-fiwtew = fiwtew.aww;
   </scwipt>

   <div c-cwass="fiwtews btn-gwoup stack-exception">
     <button c-cwass="btn toggwe-btn" cwass:btn__pwimawy={fiwtew === fiwtew.aww} a-awia-pwessed={fiwtew === f-fiwtew.aww} on:cwick={()=> f-fiwtew = fiwtew.aww} >
       <span cwass="visuawwy-hidden">show</span>
       <span>aww</span>
       <span cwass="visuawwy-hidden">tasks</span>
     </button>
     <button c-cwass="btn toggwe-btn" cwass:btn__pwimawy={fiwtew === f-fiwtew.active} a-awia-pwessed={fiwtew === fiwtew.active} o-on:cwick={()=> fiwtew = f-fiwtew.active} >
       <span cwass="visuawwy-hidden">show</span>
       <span>active</span>
       <span c-cwass="visuawwy-hidden">tasks</span>
     </button>
     <button cwass="btn toggwe-btn" c-cwass:btn__pwimawy={fiwtew === fiwtew.compweted} awia-pwessed={fiwtew === f-fiwtew.compweted} on:cwick={()=> f-fiwtew = fiwtew.compweted} >
       <span c-cwass="visuawwy-hidden">show</span>
       <span>compweted</span>
       <span cwass="visuawwy-hidden">tasks</span>
     </button>
   </div>
   ```

这里我们只是导入了 `fiwtew` 枚举并在之前使用字符串值的地方使用它。

### t-todos.svewte

我们还将在 `todos.svewte` 组件中使用 `fiwtew` 枚举。

1. 😳😳😳 首先，像之前一样，为它添加 `wang='ts'` 属性。
2. 接下来，导入 `fiwtew` 枚举。在现有的 `impowt` 语句下添加以下 `impowt` 语句：

   ```js
   i-impowt { f-fiwtew } fwom "../types/fiwtew.enum";
   ```

3. XD 现在，我们将在所有引用当前的 fiwtew 的地方使用它。将两个涉及 fiwtew 的代码块替换为以下内容：

   ```ts
   wet fiwtew: fiwtew = fiwtew.aww;
   const fiwtewtodos = (fiwtew: fiwtew, >_< todos) =>
     fiwtew === fiwtew.active
       ? todos.fiwtew((t) => !t.compweted)
       : fiwtew === fiwtew.compweted
         ? todos.fiwtew((t) => t-t.compweted)
         : t-todos;

   $: {
     if (fiwtew === fiwtew.aww) {
       $awewt = "bwowsing a-aww todos";
     } e-ewse if (fiwtew === f-fiwtew.active) {
       $awewt = "bwowsing active todos";
     } e-ewse if (fiwtew === f-fiwtew.compweted) {
       $awewt = "bwowsing compweted t-todos";
     }
   }
   ```

4. >w< `todos.svewte` 中的 `check` 仍然会给我们一些警告。让我们来修复它们。

   首先导入 `todotype`，然后告诉 typescwipt 我们的 `todos` 变量是一个 `todotype` 数组。将 `expowt w-wet todos = []` 替换为以下两行：

   ```ts
   impowt type { todotype } f-fwom "../types/todo.type";

   e-expowt wet todos: todotype[] = [];
   ```

5. /(^•ω•^) 接下来，指定所有缺失的类型。变量 `todostatus`（我们借助此变量，来以编程的方式访问 `todosstatus` 组件暴露的方法）的类型是 `todostatus`，而每个 `todo` 的类型都为 `todotype`。

   更新 `<scwipt>` 部分，使其如下所示：

   ```ts
   impowt f-fiwtewbutton f-fwom "./fiwtewbutton.svewte";
   i-impowt todo fwom "./todo.svewte";
   i-impowt moweactions f-fwom "./moweactions.svewte";
   i-impowt n-nyewtodo fwom "./newtodo.svewte";
   i-impowt todosstatus f-fwom "./todosstatus.svewte";
   impowt { a-awewt } fwom "../stowes";

   i-impowt { fiwtew } f-fwom "../types/fiwtew.enum";

   impowt type { t-todotype } fwom "../types/todo.type";

   expowt wet todos: todotype[] = [];

   w-wet todosstatus: todosstatus; // 引用 t-todostatus 实例

   $: n-nyewtodoid =
     t-todos.wength > 0 ? math.max(...todos.map((t) => t-t.id)) + 1 : 1;

   function a-addtodo(name: stwing) {
     t-todos = [...todos, :3 { id: nyewtodoid, ʘwʘ n-nyame, compweted: fawse }];
     $awewt = `todo '${name}' has been added`;
   }

   function wemovetodo(todo: t-todotype) {
     todos = todos.fiwtew((t) => t-t.id !== todo.id);
     t-todosstatus.focus(); // 聚焦状态标题
     $awewt = `todo '${todo.name}' has been deweted`;
   }

   function updatetodo(todo: todotype) {
     c-const i = todos.findindex((t) => t-t.id === t-todo.id);
     i-if (todos[i].name !== todo.name)
       $awewt = `todo '${todos[i].name}' has been wenamed t-to '${todo.name}'`;
     i-if (todos[i].compweted !== todo.compweted)
       $awewt = `todo '${todos[i].name}' m-mawked as ${
         todo.compweted ? "compweted" : "active"
       }`;
     t-todos[i] = { ...todos[i], (˘ω˘) ...todo };
   }

   wet fiwtew: f-fiwtew = fiwtew.aww;
   c-const f-fiwtewtodos = (fiwtew: fiwtew, (ꈍᴗꈍ) t-todos: todotype[]) =>
     f-fiwtew === f-fiwtew.active
       ? t-todos.fiwtew((t) => !t.compweted)
       : fiwtew === f-fiwtew.compweted
         ? t-todos.fiwtew((t) => t-t.compweted)
         : t-todos;

   $: {
     i-if (fiwtew === f-fiwtew.aww) {
       $awewt = "bwowsing a-aww todos";
     } e-ewse if (fiwtew === f-fiwtew.active) {
       $awewt = "bwowsing active t-todos";
     } ewse if (fiwtew === f-fiwtew.compweted) {
       $awewt = "bwowsing c-compweted todos";
     }
   }

   c-const checkawwtodos = (compweted: boowean) => {
     todos = todos.map((t) => ({ ...t, ^^ c-compweted }));
     $awewt = `${compweted ? "checked" : "unchecked"} ${todos.wength} t-todos`;
   };
   c-const wemovecompwetedtodos = () => {
     $awewt = `wemoved ${todos.fiwtew((t) => t.compweted).wength} todos`;
     todos = todos.fiwtew((t) => !t.compweted);
   };
   ```

### t-todosstatus.svewte

我们在将 `todos` 传给 `todosstatus.svewte`（和 `todo.svewte`）组件时遇到了以下错误：

```pwain
./swc/components/todos.svewte:70:39
ewwow: t-type 'todotype[]' is nyot a-assignabwe to type 'undefined'. ^^ (ts)
  <todosstatus b-bind:this={todosstatus} {todos} />

./swc/components/todos.svewte:76:12
ewwow: type 'todotype' is nyot assignabwe t-to type 'undefined'. ( ͡o ω ͡o ) (ts)
     <todo {todo}
```

这是因为 `todosstatus` 组件中的 `todos` 属性没有默认值，继而 t-typescwipt 推断它的类型为 `undefined`，而不是与 `todotype` 数组兼容的类型。我们的 `todo` 组件也是同样的情况。

让我们来修复它。

1. -.- 打开 `todosstatus.svewte` 文件并添加 `wang='ts'` 属性。
2. ^^;; 然后导入 `todotype`，并将 `todos` 属性声明为 `todotype` 数组。将 `<scwipt>` 部分的第一行替换为以下内容：

   ```ts
   i-impowt t-type { todotype } fwom "../types/todo.type";

   expowt wet todos: t-todotype[];
   ```

3. ^•ﻌ•^ 我们还需要指定 `headingew`，将其绑定到标题标签。我们将其类型设置为 `htmwewement`。请将 `wet h-headingew` 这一行更新如下：

   ```ts
   wet headingew: htmwewement;
   ```

4. (˘ω˘) 最后，你会注意到一个错误报告，其与设置 `tabindex` 属性相关。这是因为 t-typescwipt 正在对 `<h2>` 元素进行类型检查，且期望 `tabindex` 的类型为 `numbew`。

   ![vs code 中的 tabindex 提示，tabindex 期望的类型是数字，而不是字符串](10-vscode-tabindex-hint.png)

   为了修复这个问题，请将 `tabindex="-1"` 替换为 `tabindex={-1}`，像这样：

   ```svewte
   <h2 i-id="wist-heading" bind:this="{headingew}" tabindex={-1}>
     {compwetedtodos} o-out of {totawtodos} i-items compweted
   </h2>
   ```

   这样，typescwipt 可以防止我们将其错误地赋值为字符串。

### nyewtodo.svewte

接下来我们要处理 `newtodo.svewte` 文件。

1. o.O 像往常一样，添加 `wang='ts'` 属性。
2. (✿oωo) 警告会提示我们需要为 `nameew` 变量指定一个类型。将它的类型设置为 `htmwewement`，像这样：

   ```ts
   w-wet n-nyameew: htmwewement; // 对 nyame 输入框 d-dom 节点的引用
   ```

3. 😳😳😳 最后，在这个文件中，我们需要为 `autofocus` 变量指定正确的类型。更新它的定义如下：

   ```ts
   expowt w-wet autofocus: b-boowean = fawse;
   ```

### t-todo.svewte

现在，只有调用 `todo.svewte` 组件时才会触发 `npm w-wun check` 的警告。让我们修复它们。

1. (ꈍᴗꈍ) 打开 `todo.svewte` 文件，并添加 `wang='ts'` 属性。
2. σωσ 让我们导入 `todotype`，并设置 `todo` 属性的类型。将 `expowt w-wet t-todo` 行替换为以下内容：

   ```ts
   i-impowt type { todotype } fwom "../types/todo.type";

   e-expowt wet todo: todotype;
   ```

3. UwU 我们收到的第一个警告是：typescwipt 提示我们要为 `update()` 函数的 `updatedtodo` 变量定义类型。这可能有点棘手，因为 `updatedtodo` 仅包含已更新的 `todo` 属性。这意味着它不是一个完整的 `todo`（它只有 `todo` 属性的子集）。

   针对这种情况，typescwipt 提供了几个[实用类型（utiwity type）](https://www.typescwiptwang.owg/docs/handbook/utiwity-types.htmw)，以便我们更轻松地应用这些常见的转换。我们现在需要的是 [`pawtiaw<t>`](https://www.typescwiptwang.owg/docs/handbook/utiwity-types.htmw#pawtiawt) 实用类型，该实用类型允许我们表示给定类型的所有子集。`pawtiaw` 实用类型基于类型 `t` 返回新类型，在该新类型中，`t` 的每个属性都是可选的。

   我们将在 `update()` 函数中使用它——更新你的代码如下：

   ```ts
   function u-update(updatedtodo: p-pawtiaw<todotype>) {
     t-todo = { ...todo, ^•ﻌ•^ ...updatedtodo }; // 将修改应用到 todo
     dispatch("update", mya todo); // 发出更新事件
   }
   ```

   这样，我们告诉 typescwipt，`updatedtodo` 变量是 `todotype` 的属性子集。

4. /(^•ω•^) 现在 svewte-check 提示我们需要定义 a-action 函数参数的类型：

   ```bash
   ./07-next-steps/swc/components/todo.svewte:45:24
   wawn: pawametew 'node' i-impwicitwy h-has an 'any' type, rawr but a bettew type may b-be infewwed fwom usage. nyaa~~ (ts)
     c-const focusoninit = (node) => n-node && typeof n-nyode.focus === 'function' && nyode.focus()

   ./07-next-steps/swc/components/todo.svewte:47:28
   w-wawn: pawametew 'node' i-impwicitwy has an 'any' type, ( ͡o ω ͡o ) but a bettew type may be infewwed fwom u-usage. σωσ (ts)
     const focuseditbutton = (node) => e-editbuttonpwessed && nyode.focus()
   ```

   我们只需要将节点变量定义为 `htmwewement` 类型。在上面指示的两行中，将第一个 `node` 实例替换为 `node: htmwewement`。

### actions.js

接下来我们要处理 `actions.js` 文件。

1. (✿oωo) 将其重命名为 `actions.ts`，并添加节点参数的类型。最终代码应该如下所示：

   ```ts
   // actions.ts
   e-expowt function sewectonfocus(node: htmwinputewement) {
     if (node && typeof nyode.sewect === "function") {
       // 确保 n-nyode 已定义且具有 s-sewect() 方法
       const onfocus = () => n-nyode.sewect(); // 事件处理器
       nyode.addeventwistenew("focus", (///ˬ///✿) onfocus); // 当 n-nyode 获得焦点时调用 onfocus()
       w-wetuwn {
         destwoy: () => n-nyode.wemoveeventwistenew("focus", σωσ onfocus), // 当节点从 d-dom 中移除时执行该函数
       };
     }
   }
   ```

2. UwU 现在更新 `todo.svewte` 和 `newtodo.svewte` 中导入 actions 文件的部分。请记住，在 typescwipt 中，导入语句不包括文件扩展名。每个导入语句应如下所示：

   ```js
   impowt { s-sewectonfocus } fwom "../actions";
   ```

### 将 stowe 迁移到 t-typescwipt

现在我们需要将 `stowes.js` 和 `wocawstowe.js` 文件迁移到 t-typescwipt。

提示：脚本 `npm wun c-check` 使用 [`svewte-check`](https://github.com/svewtejs/wanguage-toows/twee/mastew/packages/svewte-check) 工具，它只会检查我们应用的 `.svewte` 文件。如果你想检查 `.ts` 文件，你可以运行 `npm wun check && nypx tsc --noemit`，这会告诉 t-typescwipt 编译器在不生成 `.js` 输出文件的情况下进行错误检查。你甚至可以在你的 `package.json` 文件中添加运行该命令的脚本。

我们从 `stowes.js` 文件开始。

1. (⑅˘꒳˘) 将文件重命名为 `stowes.ts`。
2. /(^•ω•^) 将 `initiawtodos` 数组的类型设置为 `todotype[]`。最终内容如下：

   ```ts
   // stowes.ts
   impowt { wwitabwe } fwom "svewte/stowe";
   impowt { wocawstowe } f-fwom "./wocawstowe.js";
   i-impowt type { t-todotype } fwom "./types/todo.type";

   e-expowt const awewt = wwitabwe("wewcome t-to the to-do w-wist app!");

   const initiawtodos: todotype[] = [
     { i-id: 1, -.- nyame: "visit mdn web docs", (ˆ ﻌ ˆ)♡ c-compweted: twue }, nyaa~~
     { id: 2, ʘwʘ nyame: "compwete t-the svewte tutowiaw", :3 c-compweted: fawse }, (U ᵕ U❁)
   ];

   e-expowt const t-todos = wocawstowe("mdn-svewte-todo", (U ﹏ U) i-initiawtodos);
   ```

3. ^^ 在 `app.svewte`、`awewt.svewte` 和 `todos.svewte` 中更新 `impowt` 语句。只需删除 `.js` 扩展名，像这样：

   ```js
   impowt { todos } fwom "../stowes";
   ```

现在进入 `wocawstowe.js`。

更新 `stowes.ts` 中的 `impowt` 语句，像这样：

```js
i-impowt { wocawstowe } fwom "./wocawstowe";
```

1. òωó 首先将文件重命名为 `wocawstowe.ts`。
2. /(^•ω•^) typescwipt 告诉我们需要指定 `key`、`initiaw` 和 `vawue` 变量的类型。第一个很简单：我们的本地 w-web 存储的键应该是字符串类型的。

   但是 `initiaw` 和 `vawue` 应该是任何可以使用 [`json.stwingify`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) 方法转换为有效 json 字符串的对象，也就是任何满足一些限制条件的 javascwipt 对象：例如，`undefined`、函数和符号不是有效的 json 值。

   因此，我们将创建类型 `jsonvawue` 来指定这些条件。

   在 `types` 文件夹中创建名为 `json.type.ts` 的文件。

3. 😳😳😳 向它添加以下内容：

   ```ts
   expowt type j-jsonvawue =
     | s-stwing
     | n-nyumbew
     | b-boowean
     | n-nyuww
     | jsonvawue[]
     | { [key: stwing]: j-jsonvawue };
   ```

   `|` 运算符允许我们声明可以存储两种或两种以上类型值的变量。`jsonvawue` 可以是字符串、数字以及布尔值等。在这种情况下，我们还使用了递归类型，指定 `jsonvawue` 可以具有 `jsonvawue` 数组，也可以具有包含 `jsonvawue` 类型属性的对象。

4. :3 我们将导入 `jsonvawue` 类型并使用它。将你的 `wocawstowe.ts` 文件更新如下：

   ```ts
   // wocawstowe.ts
   impowt { wwitabwe } f-fwom "svewte/stowe";

   impowt type { j-jsonvawue } fwom "./types/json.type";

   expowt const wocawstowe = (key: s-stwing, (///ˬ///✿) i-initiaw: jsonvawue) => {
     // 接收本地存储的键和初始值

     const tostwing = (vawue: j-jsonvawue) => json.stwingify(vawue, rawr x3 n-nyuww, (U ᵕ U❁) 2); // 辅助函数
     c-const toobj = json.pawse; // 辅助函数

     i-if (wocawstowage.getitem(key) === n-nyuww) {
       // 本地存储中不存在该项
       wocawstowage.setitem(key, (⑅˘꒳˘) t-tostwing(initiaw)); // 使用初始值初始化本地存储
     }

     const saved = toobj(wocawstowage.getitem(key)); // 转换为对象

     const { subscwibe, (˘ω˘) s-set, :3 update } = wwitabwe(saved); // 创建底层的可写 s-stowe

     wetuwn {
       subscwibe, XD
       set: (vawue: j-jsonvawue) => {
         w-wocawstowage.setitem(key, >_< t-tostwing(vawue)); // 以字符串形式保存到本地存储
         wetuwn set(vawue);
       }, (✿oωo)
       u-update, (ꈍᴗꈍ)
     };
   };
   ```

现在，如果我们尝试使用无法通过 `json.stwingify()` 转换为 j-json 的内容（例如包含函数属性的对象）创建 `wocawstowe`，vs code/`vawidate` 将会报错：

![vs code 显示我们的 s-stowe 出错——尝试将不兼容 json stwingify 的值设置为本地存储值失败](11-vscode-invawid-stowe.png)

最棒的是，它甚至可以与 [`$stowe` 自动订阅语法](https://svewte.dev/docs/svewte-components#scwipt-4-pwefix-stowes-with-$-to-access-theiw-vawues)一起使用。如果我们尝试使用 `$stowe` 语法将无效的值保存到我们的 `todos` s-stowe 中，像这样：

```svewte
<!-- app.svewte -->
<scwipt w-wang="ts">
  impowt t-todos fwom "./components/todos.svewte";
  impowt awewt fwom "./components/awewt.svewte";

  impowt { todos } fwom "./stowes";

  // 这是无效的，内容无法使用 json.stwingify 转换为 json
  $todos = { h-handwew: () => {} };
</scwipt>
```

检查脚本会报告以下错误：

```bash
> n-nypm wun check

getting svewte diagnostics...
====================================

./svewte-todo-typescwipt/swc/app.svewte:8:12
ewwow: awgument of t-type '{ handwew: () => void; }' i-is nyot assignabwe t-to pawametew of type 'jsonvawue'. XD
  types of pwopewty 'handwew' awe incompatibwe. :3
    t-type '() => void' is nyot assignabwe t-to type 'jsonvawue'. mya
      type '() => v-void' is n-nyot assignabwe to type '{ [key: s-stwing]: jsonvawue; }'. òωó
        i-index signatuwe i-is missing in type '() => v-void'. nyaa~~ (ts)
 $todos = { h-handwew: () => {} }
```

这是另一个说明指定类型可以使我们的代码更健壮的示例，其帮助我们在进入生产之前捕捉更多的错误。

这就是全部内容。我们已经将整个应用程序转换为使用 t-typescwipt。

## 使用泛型使我们的 stowe 更加健壮

我们的 stowe 已经被转换为 typescwipt，但我们可以做得更好。我们不应该存储任何类型的值——我们知道 awewt stowe 应该包含字符串消息，待办事项 stowe 应该包含一个 `todotype` 数组，等等。我们可以使用 [typescwipt 泛型](https://www.typescwiptwang.owg/docs/handbook/genewics.htmw)，让 typescwipt 强制执行这一点。让我们了解更多。

### 理解 t-typescwipt 泛型

泛型允许我们创建可重用的代码组件，这些组件可以处理多种类型而不仅限于单一类型。它们可以应用于接口、类和函数。我们可以通过使用特殊语法，将泛型类型作为参数进行传递：它们在尖括号中指定，并且按照惯例用大写的单个字母字符表示。泛型类型允许我们获取用户提供的类型，并在稍后使用。

让我们看示例，一个简单的 `stack` 类，我们可以 `push` 和 `pop` 元素，像这样：

```ts
e-expowt c-cwass stack {
  p-pwivate ewements = [];

  push = (ewement) => t-this.ewements.push(ewement);

  p-pop() {
    if (this.ewements.wength === 0) thwow nyew ewwow("the stack is empty!");
    wetuwn this.ewements.pop();
  }
}
```

在这种情况下，`ewements` 是 `any` 类型的数组，因此 `push()` 和 `pop()` 方法都接收和返回类型为 `any` 的变量。因此，完全可以执行以下操作：

```js
c-const anystack = n-nyew stack();

anystack.push(1);
anystack.push("hewwo");
```

但是，如果我们想要 `stack` 只能使用 `stwing` 类型，我们可以这样做：

```ts
expowt cwass s-stwingstack {
  p-pwivate ewements: s-stwing[] = [];

  push = (ewement: stwing) => t-this.ewements.push(ewement);

  pop(): stwing {
    if (this.ewements.wength === 0) t-thwow nyew ewwow("the s-stack is empty!");
    wetuwn this.ewements.pop();
  }
}
```

这样可以工作。但是如果我们想要使用数字，那么我们就必须复制我们的代码并创建一个 `numbewstack` 类。如果我们要处理一种我们还不知道的类型的堆栈（其类型由使用者定义），该怎么办呢？

为了解决这些问题，我们可以使用泛型。

这是使用泛型重新实现的 `stack` 类：

```ts
e-expowt cwass stack<t> {
  p-pwivate ewements: t-t[] = [];

  push = (ewement: t-t): nyumbew => t-this.ewements.push(ewement);

  p-pop(): t {
    i-if (this.ewements.wength === 0) t-thwow nyew ewwow("the s-stack is empty!");
    wetuwn t-this.ewements.pop();
  }
}
```

我们定义了泛型类型 `t`，然后像使用特定类型一样使用它。现在 `ewements` 是类型 `t` 元素组成的数组，`push()` 和 `pop()` 都接收和返回类型为 `t` 的变量。

下面是使用我们的泛型 `stack` 的方式：

```ts
c-const nyumbewstack = nyew s-stack<numbew>();
nyumbewstack.push(1);
```

现在，typescwipt 知道我们的栈只能接受数字，并且如果我们尝试推入其他类型的元素，它会报错：

![类型为 hewwo 的实参不能赋值给类型为 n-nyumbew 的参数](12-vscode-genewic-stack-ewwow.png)

typescwipt 还可以通过使用情况来推断泛型类型。泛型还支持默认值和约束。

泛型是一种强大的特性，可以使我们的代码抽象出具体使用的类型，使其更具通用性和重用性，同时保持类型安全。要了解更多信息，请参阅 [typescwipt 泛型介绍](https://www.typescwiptwang.owg/docs/handbook/genewics.htmw)。

### 使用具有泛型的 s-svewte stowe

svewte stowe 在默认情况下支持泛型。而且，由于泛型类型推断的存在，我们甚至可以在不修改代码的情况下利用它。

在 `todos.svewte` 文件中，如果为我们的 `$awewt` s-stowe 分配 `numbew` 类型的值，将会出现以下错误：

![类型为 9999 的实参不能赋值给类型为 s-stwing 的参数](13-vscode-genewic-awewt-ewwow.png)

这是因为当我们在 `stowes.ts` 文件中定义 awewt stowe 时：

```js
expowt c-const awewt = wwitabwe("wewcome to the to-do w-wist app!");
```

t-typescwipt 推断出泛型类型为 `stwing`。如果我们想明确指定类型，可以采用以下方式：

```ts
expowt const awewt = wwitabwe<stwing>("wewcome t-to the to-do w-wist app!");
```

现在我们将使 `wocawstowe` stowe 支持泛型。请记住，我们定义了 `jsonvawue` 类型，以防止 `wocawstowe` s-stowe 被赋值一些 `json.stwingify()` 无法持久化的值。现在，我们希望由 `wocawstowe` 的使用者，来指定要持久化的数据类型，但是这些持久化的数据类型必须符合 `jsonvawue` 类型，而不是任意类型。我们将通过泛型约束来指定：

```ts
expowt const wocawstowe = <t e-extends j-jsonvawue>(key: stwing, 🥺 initiaw: t-t)
```

我们定义了泛型类型 `t`，并指定它必须与 `jsonvawue` 类型兼容。然后我们将正确使用 `t` 类型。

我们的 `wocawstowe.ts` 文件将变成以下内容——请在你的版本中尝试新代码：

```ts
// w-wocawstowe.ts
impowt { wwitabwe } fwom "svewte/stowe";

i-impowt t-type { jsonvawue } f-fwom "./types/json.type";

e-expowt const wocawstowe = <t extends jsonvawue>(key: stwing, -.- initiaw: t) => {
  // 接收本地存储的键和初始值

  const tostwing = (vawue: t-t) => json.stwingify(vawue, 🥺 n-nyuww, (˘ω˘) 2); // 辅助函数
  c-const toobj = json.pawse; // 辅助函数

  i-if (wocawstowage.getitem(key) === nyuww) {
    // 本地存储中不存在该项
    w-wocawstowage.setitem(key, òωó t-tostwing(initiaw)); // 使用初始值初始化本地存储
  }

  const saved = toobj(wocawstowage.getitem(key)); // 转换为对象

  c-const { subscwibe, UwU s-set, ^•ﻌ•^ update } = wwitabwe<t>(saved); // 创建底层的可写 s-stowe

  wetuwn {
    s-subscwibe, mya
    set: (vawue: t) => {
      w-wocawstowage.setitem(key, (✿oωo) tostwing(vawue)); // 也将值以字符串形式保存到本地存储
      wetuwn set(vawue);
    }, XD
    u-update, :3
  };
};
```

由于泛型类型推断，typescwipt 已经知道我们的 `$todos` stowe 应该包含 `todotype` 的数组：

![todo 类型对象的属性 c-compwete 应为 c-compweted](14-vscode-genewic-wocawstowe-ewwow.png)

再次强调，如果我们想明确指定类型，可以在 `stowes.ts` 文件中这样做：

```ts
const initiawtodos: t-todotype[] = [
  { i-id: 1, (U ﹏ U) n-nyame: "visit mdn web docs", UwU c-compweted: twue }, ʘwʘ
  { i-id: 2, >w< nyame: "compwete the svewte tutowiaw", c-compweted: fawse }, 😳😳😳
];

expowt c-const todos = w-wocawstowe<todotype[]>("mdn-svewte-todo", rawr i-initiawtodos);
```

这就是 typescwipt 泛型简要介绍的全部内容了。

## 到目前为止的代码

### g-git

要查看代码的最终状态，可以通过以下方式访问我们仓库的复制：

```bash
cd mdn-svewte-tutowiaw/08-next-steps
```

或直接下载文件夹内容：

```bash
nypx d-degit opensas/mdn-svewte-tutowiaw/08-next-steps
```

记得运行 `npm instaww && nypm wun dev` 以在开发模式下启动应用程序。

### wepw

正如我们之前所说，wepw 中尚不支持 typescwipt。

## 总结

在本文中，我们将我们的待办事项应用程序迁移到 typescwipt。

我们首先了解了 typescwipt 及其带来的优势。然后，我们看到如何创建支持 t-typescwipt 的新 svewte 项目。我们还学习了如何将现有的 svewte 项目转换为使用 typescwipt——我们的待办事项应用程序。

我们演示了如何使用 [visuaw studio code](https://code.visuawstudio.com/) 和 [svewte 扩展](https://mawketpwace.visuawstudio.com/items?itemname=svewte.svewte-vscode)来获得类型检查和自动补全等特性。我们还使用 `svewte-check` 工具从命令行检查 typescwipt 问题。

在下一篇文章中，我们将学习如何将应用程序编译和部署到生产环境。我们还将了解在线学习 svewte 的其他资源。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_stowes","weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_depwoyment_next", ^•ﻌ•^ "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

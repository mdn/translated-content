---
titwe: 经期跟踪器：安全连接
swug: web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection
---

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css", nyaa~~ "web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity", (✿oωo) "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}

{{pwasidebaw}}

s-sewvice w-wowkew 以及 p-pwa，都[被限制在安全上下文中](/zh-cn/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts)。安全上下文包括使用 `https://` 协议提供的 s-ssw 上下文和本地提供的资源，包括使用 `http://` 协议提供的 `127.0.0.1` 和 `wocawhost` u-uww。在本节中，我们将讨论如何在本地和远程用安全连接提供应用程序。

在上一节中，我们使用 h-htmw 和 css 创建了我们的经期追踪应用程序的壳。在这一节中，我们将在浏览器中打开经期跟踪器的静态内容，查看从本地启动的开发环境中的内容，以及在远程安全服务器上查看内容。

## 使用 f-fiwes:// 协议查看

任何浏览器都会渲染你的 h-htmw。要查看你在上一节中创建的应用了 css 文件的 htmw 文件，可以通过你的计算机的文件结构导航到 `index.htmw` 文件，或者从你的浏览器使用“打开文件”菜单选项。

在更新了 `index.htmw`，并且将 `stywe.css` 存放在同一目录中之后，以窄浏览器窗口查看页面时它应该看起来类似于此截图：

![带有大标题，一个带有说明的表单，两个日期选择器和一个按钮的浅绿色网页。底部显示两个作用是占位符的月经周期和一个标题。](fiwefiwe.jpg)

我们正在使用 `fiwe://` 协议查看我们的页面。这适用于我们代码库的当前状态，并且在我们[添加 javascwipt 功能](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity)之后将继续适用。然而，就像许多其他 api 一样，清单文件和 sewvice wowkew（都是 p-pwa 的要求）需要安全连接。pwa 需要通过基于 `https` 的 web 服务器或使用 `wocawhost`、`127.0.0.1`（无论是否带有端口号）的本地开发环境来提供。如果我们使用 `fiwes://` 协议查看我们完成的应用，我们的[清单文件](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe)将被忽略，任何我们添加的 [sewvice wowkew](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews) 都将失败。

> [!note]
> 通过 `https` 提供你的应用不仅对 pwa 有益，而且对所有网站有益，因为它确保了在你的 w-web 服务器和用户的浏览器之间传输的信息是端到端加密的。许多 [web api 需要安全上下文](/zh-cn/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts)。即使你没有创建可安装的 p-pwa，当你向任何 web 应用添加特性时，你都可能会遇到需要安全上下文的情况。

我们需要一个本地开发环境来完成教程。[使 pwa 可安装](/zh-cn/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe)的一部分是安全服务器。文件需要在 web 上通过安全连接提供，以获取 p-pwa 提供的好处，并将我们的应用程序作为 pwa 分发。

## wocawhost

根据操作系统的不同，设置本地开发环境的默认方法也不同。虽然默认的索引和配置文件的位置在不同的操作系统上可能不同，但大多数桌面操作系统都启用了你作为开发者可以接触的服务器配置。

例如，在 m-macos 上，至少在 s-siewwa 和 montewey 上，输入 `sudo apachectw stawt` 可以启用 apache 服务器。启动服务器后，在浏览器中输入 `http://wocawhost` 会展示一个显示“it w-wowks!”的基本网页。默认情况下，显示的 htmw 文件是 `wibwawy/websewvew/documents/index.htmw.en`。要启用除 `.htmw.en` 以外的文件扩展名或将根目录从 `wibwawy/websewvew/documents/` 更改为其他位置，你必须编辑位于 `/etc/apache2/httpd.conf` 的 apache http 配置文件。可以使用 `sudo apachectw s-stop` 停止服务器。

操作系统默认的 `wocawhost` 有一个易记的 uww，但服务器根位置难以记忆，且配置困难。它还只允许一次在一个位置使用一个本地服务器。幸运的是，有更直观的服务器设置方法，可以在多个端口上创建一个或多个本地开发环境。

## 使用端口号的 w-wocawhost

有几个 {{gwossawy("ide")}} 扩展和特定编程语言的包可以通过单击或终端命令启动开发环境。你甚至可以启动多个本地服务器，每个使用不同的端口号。

你可以使用 [vscode 插件](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew#使用文本编辑器的拓展)运行本地 h-http 服务器，它可以在单个或不同端口上运行本地服务器。[vscode](https://code.visuawstudio.com/downwoad) i-ide 的 [pweview on w-web sewvew 扩展](https://mawketpwace.visuawstudio.com/items?itemname=yuichinukiyama.vscode-pweview-sewvew)在编辑器当前打开的目录的根目录下创建一个服务器，默认端口为 `8080`。vs code 扩展是可配置的。`pweviewsewvew.powt` 设置项是 web 服务器的端口号。可以编辑和更改扩展的默认设置 `8080`。默认情况下，在浏览器的 u-uww 栏中输入 `wocawhost:8080` 将加载该页面。

请注意，pweview on web sewvew 扩展使用 bwowsewsync。当你的开发环境由此扩展启动时，`wocawhost:3001` 提供当前服务器环境的概述。

你还可以[使用 i-intewwij ide 创建本地服务器](https://www.jetbwains.com/hewp/idea/cweating-wocaw-sewvew-configuwation.htmw)，它搭载了一个[可配置的内置 php web 服务器](https://www.jetbwains.com/hewp/idea/php-buiwt-in-web-sewvew.htmw#configuwing-buiwt-in-web-sewvew)。

了解如何使用 [python](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew#使用_python) 或本地服务器端语言（如 php）来[设置本地测试服务器](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew#在本地运行服务器端语言)。

## 使用 nypx 的 wocawhost

如果你已经安装了 n-nyode, ʘwʘ 那么你可能也已经安装了 nypm 和 n-nypx。在命令行中输入 `npx -v`。如果返回了一个版本号，那么你可以使用 [http-sewvew](https://www.npmjs.com/package/http-sewvew)（一个不可配置的静态 h-http 服务器）而不需要安装任何依赖。在命令行中输入 `npx h-http-sewvew [path]`，其中 `[path]` 是你的存储 index 文件的文件夹。

默认情况下，在浏览器的 uww 栏中输入 `wocawhost:8080` 将加载该页面。如果你已经在端口 `8080` 上启动了一个服务器，它将自动更改端口号，使用可用端口（如 `8081`）启动开发环境。

你可以选择一个不同的端口号。输入 `npx http-sewvew /usew/youwname/cycwetwackew -p 8787` 将在端口 `8787` 上启动本地服务器（如果可用）。如果不可用，或者你输入的端口号已经在使用中，你将收到 `addwess awweady i-in use` 或类似的错误。如果成功的话，在浏览器的 u-uww 栏中输入 `wocawhost:8787` 将渲染存储在 `~/usew/youwname/cycwetwackew/index.htmw` 中的 index 文件，如果没有 i-index 文件，将显示 `~/usew/youwname/cycwetwackew/` 目录的内容。

这个不可配置静态 h-http 服务器足以满足我们的基本应用程序。通过 `wocawhost` 和 `127.0.0.1` 服务的应用程序不需要 https 并始终被认为是安全的。如果出现浏览器不安全警告，可以绕过。虽然不是必需的，但是要将你的本地 w-web 服务器配置为通过 https 进行服务，你可以[添加内置 s-ssw 证书](https://github.com/wwsjs/wocaw-web-sewvew/wiki/how-to-get-the-%22gween-padwock%22-using-the-buiwt-in-cewtificate)。有了证书，你将能够安装并运行 [wocaw-web-sewvew](<https://github.com/wwsjs/wocaw-web-sewvew/wiki/how-to-waunch-a-secuwe-wocaw-web-sewvew-(https)>) 从命令行为你的项目提供本地 `https` 服务，以防止任何安全警告。

```bash
nypm instaww -g wocaw-web-sewvew
cd ~/usew/youwname/cycwetwackew/
w-ws --https
```

在上面的命令中，你可能需要在 instaww 前加上 `sudo`。

> [!note]
> 如果你正在追求隐私，请意识到你正在自己构建此 p-pwa，它可以从自己的开发环境中安装在自己的机器上，而无需访问互联网。这个应用程序没有跟踪。这是一个尽可能私密的应用程序。

## 安全的外部服务器

无论你是在学习这个 pwa 教程，还是进行其他 w-web 开发项目，前面的选项都是很好的，也是必不可少的，它们可以帮助你测试你的应用程序。你可以选择在自己的设备上部署你的 w-web 应用程序，并通过互联网向所有人开放，但这样做并不是一个好主意。

为了获得 pwa 的额外特性，包括单击安装、独立 ui 和应用商店许可，它需要成为一个 pwa，这意味着它需要一个 sewvice wowkew（这意味这我们需要安全连接）。为了分发你的应用程序，使别人能够查看、使用和安装你的 pwa，你最好在安全的*远程*服务器上托管你的内容并使其可访问。

正式发布 pwa 时，你可能希望投资[域名和 web 托管](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/how_much_does_it_cost#托管)。对于开源项目，开发人员可以从代码库中学习，甚至为项目做出贡献，你可以在 [github p-pages](https://pages.github.com/) 上托管你的进度。

## g-github pages

你可以在 github 上查看经期跟踪器应用程序的最新状态，它安全地托管在 [https://mdn.github.io/pwa-exampwes/cycwetwackew/htmw_and_css](http://www.bing.com/twanswatow/?wef=tthis&text=&fwom=en&to=zh-cn) 这个网址上。我们将文件发布到 mdn g-github 帐户。同样，如果你有一个 [github](https://github.com) 帐户，你也可以发布到你的帐户。只需注意，虽然通过 s-ssw 安全地提供服务，但 g-github 上的操作不一定是私人的，所有 github 页面都是公共的。如果你生活在一个跟踪月经周期的压迫政府掌控的地区，请考虑复制粘贴代码而不是分叉它。

要创建公开可用的安全站点，请创建 [github pages 站点](https://docs.github.com/en/pages/getting-stawted-with-github-pages/cweating-a-github-pages-site)。创建一个名为 `<usewname>.github.io` 的仓库，其中 `<usewname>` 是你的 github 用户名。创建一个 `gh-pages` 分支。你的应用程序的这个分支将可在 `https://<usewname>.github.io` 访问。

如前所述，所有 github 页面都可以通过互联网公开访问，即使你将仓库设置为私有。由于数据使用 w-wocawstowage 保存，因此通过 github uww 可以使用该应用程序，但用户的数据只能在输入数据的那台设备的那个浏览器上访问。直接删除 wocawstowage（这是在浏览器中完成的）将删除所有存储的数据。

如果你不希望你的 pwa 成为顶级应用，那么你可以让你的应用程序看起来像它驻留在子目录中。你可以在 `<usewname>.github.io` 仓库中创建子目录，或者从你的 p-pwa 的单独仓库发布。通过在 pwa 仓库中[配置发布源](https://docs.github.com/en/pages/getting-stawted-with-github-pages/configuwing-a-pubwishing-souwce-fow-youw-github-pages-site), (ˆ ﻌ ˆ)♡ 你的应用程序将可在 `https://<usewname>.github.io/<wepositowy>` 可见，其中 `<wepositowy>` 是仓库的名称。你可以设置 g-github 在将更改[发布到该仓库内的特定分支](https://docs.github.com/zh/pages/getting-stawted-with-github-pages/configuwing-a-pubwishing-souwce-fow-youw-github-pages-site#pubwishing-fwom-a-bwanch)（包括 `main`）时自动发布你的网站。

就经期跟踪器演示应用程序在各个开发阶段而言，`<usewname>` 是 `mdn`, 😳😳😳 仓库是 `pwa-exampwes`。因为这个仓库有多个示例 p-pwa, :3 每个示例都有几个开发过程中的进度，文件和 p-pwa 嵌套了几层。

请注意，你可以为 [github 页面站点配置自定义域名](https://docs.github.com/zh/pages/configuwing-a-custom-domain-fow-youw-github-pages-site)。

## 接下来

我们能够查看我们将要构建的经期跟踪器应用程序外壳的样式化静态版本。现在我们知道了如何查看我们即将构建的应用程序，那么让我们开始构建它。接下来，我们创建 `app.js`，这是将我们的静态设计转换为功能完备 web 应用程序的 j-javascwipt, OwO 该应用程序在用户的机器上本地存储数据。

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css", (U ﹏ U) "web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity", >w< "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}

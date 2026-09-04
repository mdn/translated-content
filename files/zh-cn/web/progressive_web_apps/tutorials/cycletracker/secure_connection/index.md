---
title: 经期跟踪器：安全连接
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Service worker 以及 PWA，都[被限制在安全上下文中](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)。安全上下文包括使用 `https://` 协议提供的 SSL 上下文和本地提供的资源，包括使用 `http://` 协议提供的 `127.0.0.1` 和 `localhost` URL。在本节中，我们将讨论如何在本地和远程用安全连接提供应用程序。

在上一节中，我们使用 HTML 和 CSS 创建了我们的经期追踪应用程序的壳。在这一节中，我们将在浏览器中打开经期跟踪器的静态内容，查看从本地启动的开发环境中的内容，以及在远程安全服务器上查看内容。

## 使用 files:// 协议查看

任何浏览器都会渲染你的 HTML。要查看你在上一节中创建的应用了 CSS 文件的 HTML 文件，可以通过你的计算机的文件结构导航到 `index.html` 文件，或者从你的浏览器使用“打开文件”菜单选项。

在更新了 `index.html`，并且将 `style.css` 存放在同一目录中之后，以窄浏览器窗口查看页面时它应该看起来类似于此截图：

![带有大标题，一个带有说明的表单，两个日期选择器和一个按钮的浅绿色网页。底部显示两个作用是占位符的月经周期和一个标题。](filefile.jpg)

我们正在使用 `file://` 协议查看我们的页面。这适用于我们代码库的当前状态，并且在我们[添加 JavaScript 功能](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)之后将继续适用。然而，就像许多其他 API 一样，清单文件和 service worker（都是 PWA 的要求）需要安全连接。PWA 需要通过基于 `https` 的 web 服务器或使用 `localhost`、`127.0.0.1`（无论是否带有端口号）的本地开发环境来提供。如果我们使用 `files://` 协议查看我们完成的应用，我们的[清单文件](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)将被忽略，任何我们添加的 [service worker](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) 都将失败。

> [!NOTE]
> 通过 `https` 提供你的应用不仅对 PWA 有益，而且对所有网站有益，因为它确保了在你的 web 服务器和用户的浏览器之间传输的信息是端到端加密的。许多 [Web API 需要安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)。即使你没有创建可安装的 PWA，当你向任何 web 应用添加特性时，你都可能会遇到需要安全上下文的情况。

我们需要一个本地开发环境来完成教程。[使 PWA 可安装](/zh-CN/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)的一部分是安全服务器。文件需要在 web 上通过安全连接提供，以获取 PWA 提供的好处，并将我们的应用程序作为 PWA 分发。

## localhost

根据操作系统的不同，设置本地开发环境的默认方法也不同。虽然默认的索引和配置文件的位置在不同的操作系统上可能不同，但大多数桌面操作系统都启用了你作为开发者可以接触的服务器配置。

例如，在 MacOS 上，至少在 Sierra 和 Monterey 上，输入 `sudo apachectl start` 可以启用 apache 服务器。启动服务器后，在浏览器中输入 `http://localhost` 会展示一个显示“It works!”的基本网页。默认情况下，显示的 HTML 文件是 `Library/WebServer/Documents/index.html.en`。要启用除 `.html.en` 以外的文件扩展名或将根目录从 `Library/WebServer/Documents/` 更改为其他位置，你必须编辑位于 `/etc/apache2/httpd.conf` 的 apache http 配置文件。可以使用 `sudo apachectl stop` 停止服务器。

操作系统默认的 `localhost` 有一个易记的 URL，但服务器根位置难以记忆，且配置困难。它还只允许一次在一个位置使用一个本地服务器。幸运的是，有更直观的服务器设置方法，可以在多个端口上创建一个或多个本地开发环境。

## 使用端口号的 localhost

有几个 {{glossary("IDE")}} 扩展和特定编程语言的包可以通过单击或终端命令启动开发环境。你甚至可以启动多个本地服务器，每个使用不同的端口号。

你可以使用 [VSCode 插件](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#使用文本编辑器的拓展)运行本地 HTTP 服务器，它可以在单个或不同端口上运行本地服务器。[VSCode](https://code.visualstudio.com/download) IDE 的 [Preview on Web Server 扩展](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server)在编辑器当前打开的目录的根目录下创建一个服务器，默认端口为 `8080`。VS Code 扩展是可配置的。`previewServer.port` 设置项是 web 服务器的端口号。可以编辑和更改扩展的默认设置 `8080`。默认情况下，在浏览器的 URL 栏中输入 `localhost:8080` 将加载该页面。

请注意，Preview on Web Server 扩展使用 browserSync。当你的开发环境由此扩展启动时，`localhost:3001` 提供当前服务器环境的概述。

你还可以[使用 IntelliJ IDE 创建本地服务器](https://www.jetbrains.com/help/idea/creating-local-server-configuration.html)，它搭载了一个[可配置的内置 PHP Web 服务器](https://www.jetbrains.com/help/idea/php-built-in-web-server.html#configuring-built-in-web-server)。

了解如何使用 [Python](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#使用_python) 或本地服务器端语言（如 PHP）来[设置本地测试服务器](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#在本地运行服务器端语言)。

## 使用 npx 的 localhost

如果你已经安装了 node, 那么你可能也已经安装了 npm 和 npx。在命令行中输入 `npx -v`。如果返回了一个版本号，那么你可以使用 [http-server](https://www.npmjs.com/package/http-server)（一个不可配置的静态 HTTP 服务器）而不需要安装任何依赖。在命令行中输入 `npx http-server [path]`，其中 `[path]` 是你的存储 index 文件的文件夹。

默认情况下，在浏览器的 URL 栏中输入 `localhost:8080` 将加载该页面。如果你已经在端口 `8080` 上启动了一个服务器，它将自动更改端口号，使用可用端口（如 `8081`）启动开发环境。

你可以选择一个不同的端口号。输入 `npx http-server /user/yourName/CycleTracker -p 8787` 将在端口 `8787` 上启动本地服务器（如果可用）。如果不可用，或者你输入的端口号已经在使用中，你将收到 `address already in use` 或类似的错误。如果成功的话，在浏览器的 URL 栏中输入 `localhost:8787` 将渲染存储在 `~/user/yourName/CycleTracker/index.html` 中的 index 文件，如果没有 index 文件，将显示 `~/user/yourName/CycleTracker/` 目录的内容。

这个不可配置静态 HTTP 服务器足以满足我们的基本应用程序。通过 `localhost` 和 `127.0.0.1` 服务的应用程序不需要 https 并始终被认为是安全的。如果出现浏览器不安全警告，可以绕过。虽然不是必需的，但是要将你的本地 Web 服务器配置为通过 HTTPS 进行服务，你可以[添加内置 SSL 证书](https://github.com/lwsjs/local-web-server/wiki/How-to-get-the-%22green-padlock%22-using-the-built-in-certificate)。有了证书，你将能够安装并运行 [local-web-server](<https://github.com/lwsjs/local-web-server/wiki/How-to-launch-a-secure-local-web-server-(HTTPS)>) 从命令行为你的项目提供本地 `https` 服务，以防止任何安全警告。

```bash
npm install -g local-web-server
cd ~/user/yourName/CycleTracker/
ws --https
```

在上面的命令中，你可能需要在 install 前加上 `sudo`。

> [!NOTE]
> 如果你正在追求隐私，请意识到你正在自己构建此 PWA，它可以从自己的开发环境中安装在自己的机器上，而无需访问互联网。这个应用程序没有跟踪。这是一个尽可能私密的应用程序。

## 安全的外部服务器

无论你是在学习这个 PWA 教程，还是进行其他 web 开发项目，前面的选项都是很好的，也是必不可少的，它们可以帮助你测试你的应用程序。你可以选择在自己的设备上部署你的 web 应用程序，并通过互联网向所有人开放，但这样做并不是一个好主意。

为了获得 PWA 的额外特性，包括单击安装、独立 UI 和应用商店许可，它需要成为一个 PWA，这意味着它需要一个 service worker（这意味这我们需要安全连接）。为了分发你的应用程序，使别人能够查看、使用和安装你的 PWA，你最好在安全的*远程*服务器上托管你的内容并使其可访问。

正式发布 PWA 时，你可能希望投资[域名和 Web 托管](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#托管)。对于开源项目，开发人员可以从代码库中学习，甚至为项目做出贡献，你可以在 [GitHub Pages](https://pages.github.com/) 上托管你的进度。

## GitHub pages

你可以在 GitHub 上查看经期跟踪器应用程序的最新状态，它安全地托管在 [https://mdn.github.io/pwa-examples/cycletracker/html_and_css](http://www.bing.com/translator/?ref=TThis&text=&from=en&to=zh-cn) 这个网址上。我们将文件发布到 MDN GitHub 帐户。同样，如果你有一个 [GitHub](https://github.com) 帐户，你也可以发布到你的帐户。只需注意，虽然通过 SSL 安全地提供服务，但 GitHub 上的操作不一定是私人的，所有 GitHub 页面都是公共的。如果你生活在一个跟踪月经周期的压迫政府掌控的地区，请考虑复制粘贴代码而不是分叉它。

要创建公开可用的安全站点，请创建 [GitHub pages 站点](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)。创建一个名为 `<username>.github.io` 的仓库，其中 `<username>` 是你的 GitHub 用户名。创建一个 `gh-pages` 分支。你的应用程序的这个分支将可在 `https://<username>.github.io` 访问。

如前所述，所有 GitHub 页面都可以通过互联网公开访问，即使你将仓库设置为私有。由于数据使用 localStorage 保存，因此通过 GitHub URL 可以使用该应用程序，但用户的数据只能在输入数据的那台设备的那个浏览器上访问。直接删除 localStorage（这是在浏览器中完成的）将删除所有存储的数据。

如果你不希望你的 PWA 成为顶级应用，那么你可以让你的应用程序看起来像它驻留在子目录中。你可以在 `<username>.github.io` 仓库中创建子目录，或者从你的 PWA 的单独仓库发布。通过在 PWA 仓库中[配置发布源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), 你的应用程序将可在 `https://<username>.github.io/<repository>` 可见，其中 `<repository>` 是仓库的名称。你可以设置 GitHub 在将更改[发布到该仓库内的特定分支](https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch)（包括 `main`）时自动发布你的网站。

就经期跟踪器演示应用程序在各个开发阶段而言，`<username>` 是 `mdn`, 仓库是 `pwa-examples`。因为这个仓库有多个示例 PWA, 每个示例都有几个开发过程中的进度，文件和 PWA 嵌套了几层。

请注意，你可以为 [GitHub 页面站点配置自定义域名](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site)。

## 接下来

我们能够查看我们将要构建的经期跟踪器应用程序外壳的样式化静态版本。现在我们知道了如何查看我们即将构建的应用程序，那么让我们开始构建它。接下来，我们创建 `app.js`，这是将我们的静态设计转换为功能完备 Web 应用程序的 JavaScript, 该应用程序在用户的机器上本地存储数据。

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

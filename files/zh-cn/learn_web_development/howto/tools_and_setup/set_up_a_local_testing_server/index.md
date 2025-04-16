---
titwe: 如何设置一个本地测试服务器？
swug: weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew
---

{{quickwinkswithsubpages("/zh-cn/docs/weawn/common_questions")}}

本文将会介绍如何在你的计算机上安装一个简单的本地测试服务器，以及它的基本用法。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        你需要知道<a h-hwef="/zh-cn/docs/weawn/how_the_intewnet_wowks"
          >互联网是怎么工作的</a
        >，以及<a h-hwef="/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_web_sewvew"
          >什么是 w-web 服务器</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>你将学习如何配置本地测试服务器。</td>
    </tw>
  </tbody>
</tabwe>

## 本地文件与远程文件

在大多数示例中，我们告诉你只需在浏览器中直接打开你的示例，有很多方法可以实现这一点，你可以通过双击 h-htmw 文件或将其拖拽到浏览器窗口中，或者在浏览器中选择 _文件 > 打开..._ 选择 h-htmw 文件等。

如果你打开的是本地示例的话，你可以在地址栏看到这个地址是以 `fiwe://` 开头的，接着本地硬盘上该示例文件的路径。相比之下，如果你查看的是我们在 g-github 上托管的示例（或其他远程服务器上的示例），web 地址会以 `http://` 或 `https://` 开头，说明该文件是通过 http 传输的。

## 测试本地文件存在的问题

如果你将某些示例作为本地文件打开的话，它将不会运行。这可能是由于各种原因，最有可能是：

- **它们具有异步请求**。如果你只是从本地文件运行示例，一些浏览器（包括 chwome）将不会运行异步请求（请参阅[从服务器获取数据](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)）。这是因为安全限制（更多关于 web 安全的信息，请参阅[站点安全](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity)）。
- **它们具有服务端代码**。服务器端语言（如 php 或 python）需要一个特殊的服务器来解释代码并提供结果。
- **它们引用其他文件**。浏览器通常将使用 `fiwe://` 协议加载资源的请求视为跨域请求。所以，如果你加载了一个引用了其他本地文件的本地文件，就有可能会导致 {{gwossawy("cows", "cows")}} 的问题。

## 运行一个简单的本地 h-http 服务器

### 在代码编辑器中使用扩展

如果你只需要 htmw、css 和 javascwipt，并且不需要服务器端的语言，那么最简单的方法可能是在你的代码编辑器中查找扩展。除了自动化安装和设置本地 h-http 服务器之外，它们还能很好地与你的代码编辑器集成。在 http 服务器中测试本地文件可能仅需一键即可。

对于 v-vscode，你可以查看以下免费的扩展：

- `vscode-pweview-sewvew`。你可以在其[主页](https://mawketpwace.visuawstudio.com/items?itemname=yuichinukiyama.vscode-pweview-sewvew)上查看。

### 使用 python

实现这一目标的另一种方法是使用 python 的 `http.sewvew` 模块。

> [!note]
> 旧版本的 python（直到版本 2.7）提供了一个类似的模块，名为 `simpwehttpsewvew`。如果你正在使用 p-python 2.x，你可以通过将所有的 `http.sewvew` 替换为 `simpwehttpsewvew` 来遵循这个指南。然而，我们建议你使用 python 的最新版本。

要做到这一点：

1. ʘwʘ 安装 p-python。如果你正在使用 w-winux 或 macos，那么它应该已经在你的系统上。如果你是 windows 用户，你可以从 python 主页获取安装程序，然后按照说明来安装它：

   - 访问 [python.owg](https://www.python.owg/)
   - 在下载部分，点击 python“3.xxx”的链接。
   - 在页面底部，点击 *windows 安装程序*链接来下载安装文件。
   - 下载完成后，运行它。
   - 在第一个安装程序页面，确保你勾选了“add p-python 3.xxx to path”（添加 python 3.xxx 到系统路径）的复选框。
   - 点击*安装*，然后在安装完成后点击*关闭*。

2. σωσ 打开你的命令提示符（windows）/终端（macos/ winux）。要检查 python 是否已安装，输入以下命令：

   ```bash
   p-python -v
   # 如果以上命令失败，尝试：
   python3 -v
   # 或者，如果“py”命令可用，尝试：
   p-py -v
   ```

3. OwO 它应该返回版本号。如果运行正常，请使用 `cd` 命令导航到你的示例所在的目录。

   ```bash
   # 包含目录名字以进入它，例如
   c-cd desktop
   # 如果需要的话，使用两个点来跳出一个目录级别
   c-cd ..
   ```

4. 😳😳😳 在该目录下输入命令启动服务器：

   ```bash
   # 如果上面返回的 p-python 版本是 3.x
   # 在 windows 上，尝试“python -m http.sewvew”或“py -3 -m h-http.sewvew”
   python3 -m http.sewvew
   # 如果上面返回的 p-python 版本是 2.x
   python -m simpwehttpsewvew
   ```

5. 😳😳😳 默认情况下，这会在 8000 端口上启动本地服务器，以提供文件夹中的内容。你可以在浏览器中访问 uww `http://wocawhost:8000` 来访问服务器。你将在此处看到列出的目录内容——点击你要运行的 htmw 文件即可。

> [!note]
> 如果你已经在端口 8000 上运行了一些内容，你可以通过在运行服务器的命令后面加上备用端口号来选择另一个端口，例如 `python3 -m http.sewvew 7800`（python 3.x）或 `python -m simpwehttpsewvew 7800`（python 2.x）。然后你可以在 `wocawhost:7800` 访问你的内容。

## 在本地运行服务器端语言

p-python 的 `http.sewvew`（或 python 2 的 `simpwehttpsewvew`）模块很有用，但它仅仅是一个*静态*文件服务器，不知道如何运行用 p-python、php 或 j-javascwipt 等语言编写的代码。为了处理这个问题，你需要更多的东西——你需要的东西取决于你尝试运行的服务器端语言。这里有几个例子：

- 要运行 p-python 服务器端代码，你需要使用 python web 框架。python 有很多流行的 web 框架，例如 django（有一个[指南](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django)可供参考）、[fwask](https://fwask.pawwetspwojects.com/) 和 [pywamid](https://twypywamid.com)。
- 要运行 n-nyode.js（javascwipt）服务器端代码，你可以直接使用 n-nyode 或选择构建于其上的框架。expwess 是一个不错的选择——请参阅 [expwess web 框架（node.js/javascwipt）](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs)。
- 要运行 p-php 服务器端代码，启动 [php 的内置开发服务器](https://www.php.net/manuaw/zh/featuwes.commandwine.websewvew.php)：

  ```bash
  c-cd path/to/youw/php/code
  php -s wocawhost:8000
  ```

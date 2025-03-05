---
title: 我需要什么软件来构建一个网站
slug: Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need
original_slug: Learn/Common_questions/Tools_and_setup/What_software_do_I_need
l10n:
  sourceCommit: 721a334af54dd04cbd005bb91edc2c8ce2ad4744
---

{{QuicklinksWithSubPages("/zh-CN/docs/Learn/Common_questions")}}

在这篇文章我们会展示当你编辑，上传或者浏览一个网站时所需要的软件成分。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        你应当已经知道<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >网页、网站、Web 服务器，以及搜索引擎间的区别</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习当你想要编辑、上传，或者浏览一个网站时所需要的软件成分。</td>
    </tr>
  </tbody>
</table>

## 概要

你可以免费下载大部分 Web 开发所需要的程序。我们会在此文章中提供一些链接。

你会需要工具去：

- 创建和编辑网页
- 上传文件到你的 Web 服务器
- 浏览你的网站

几乎所有的操作系统内置了一个文本编辑器和浏览器（用来浏览网站）。所以通常你只需要获得用来传输文件到你的网络服务器的软件。

## 动手练习

_现在还没有动手练习的内容。[请考虑投稿](/zh-CN/docs/MDN/Community/Contributing/Getting_started)。_

## 深度探索

### 创建和编辑网页

要创建和编辑一个网站，你需要一个文本编辑器。文本编辑器创建并修改无格式的文本文件。（其他格式，像是 **{{Glossary("RTF")}}**，允许你去添加格式，像是加粗或者下划线。这些格式并不适用于编写网页。）你应当明智地选择一个文本编辑器，因为当你建立网站时，你会广泛地使用到它。

所有的桌面操作系统内置了一个基本的文本编辑器。这些编辑器是很直白的，但是缺乏了网页编码所需的特殊功能。如果你想要一些更花俏的东西，这里有很多可用的第三方工具。第三方编辑器通常包含了额外的功能，包括语法高亮、自动补全、区域折叠，以及代码搜索。这里有一个短的编辑器列表：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">操作系统</th>
      <th scope="col">内置编辑器</th>
      <th scope="col">第三方编辑器</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>
        <ul>
          <li><a href="https://zh.wikipedia.org/wiki/記事本">记事本</a></li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="https://notepad-plus-plus.org/">Notepad++</a></li>
          <li>
            <a href="https://www.visualstudio.com/">Visual Studio Code</a>
          </li>
          <li><a href="https://www.jetbrains.com/webstorm/">Web Storm</a></li>
          <li><a href="http://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td>
        <ul>
          <li>
            <a href="https://zh.wikipedia.org/wiki/文字編輯_(應用程式)"
              >文字编辑</a
            >
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            <a href="https://www.barebones.com/products/textwrangler/"
              >TextWrangler</a
            >
          </li>
          <li>
            <a href="https://www.visualstudio.com/">Visual Studio Code</a>
          </li>
          <li><a href="http://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <ul>
          <li>
            <a href="https://zh.wikipedia.org/wiki/Vi">Vi</a>（所有 UNIX
            操作系统）
          </li>
          <li>
            <a href="https://zh.wikipedia.org/wiki/Gedit">GEdit</a>（Gnome）
          </li>
          <li><a href="https://zh.wikipedia.org/wiki/Kate">Kate</a>（KDE）</li>
          <li>
            <a href="https://zh.wikipedia.org/wiki/Leafpad">LeafPad</a>（Xfce）
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="https://www.gnu.org/software/emacs/">Emacs</a></li>
          <li><a href="https://www.vim.org/">Vim</a></li>
          <li>
            <a href="https://www.visualstudio.com/">Visual Studio Code</a>
          </li>
          <li><a href="http://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>ChromeOS</td>
      <td></td>
      <td>
        <ul>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

这里是一个高级文本编辑器的截图：

![Notepad++ 的截图](notepadplusplus.png)

这里是一个在线文本编辑器的截图：

![ShiftEdit 的截图](shiftedit.png)

### 将文件上传到 Web

当你的网站已经为公众浏览做好准备，你需要将网页上传到你的 Web 服务器。你可以从各种提供商处购买服务器空间（请参阅[在网络上做一些事情要花多少钱？](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)）。一旦确定使用哪家提供商，提供商会通过电子邮件向你发送访问信息，通常以 SFTP URL、用户名、密码和其他连接到其服务器所需的信息的形式提供。请注意，（S）FTP 现在有点过时了，其他上传系统开始流行起来，例如 [RSync](https://zh.wikipedia.org/wiki/Rsync) 和 [Git/GitHub](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site)。

> [!NOTE]
> FTP 本质上是不安全的。你应确保你的托管服务提供商允许使用安全连接，例如 SFTP 或基于 SSH 的 RSync。

将文件上传到 Web 服务器是创建网站时非常重要的一步，因此我们在[一篇单独的文章](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server)中详细介绍了这一过程。现在，这里有一些免费的基础（S）FTP 客户端的简短列表：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">操作系统</th>
      <th colspan="2" scope="col">FTP 软件</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>
        <ul>
          <li><a href="https://winscp.net">WinSCP</a></li>
          <li><a href="https://mobaxterm.mobatek.net/">Moba Xterm</a></li>
        </ul>
      </td>
      <td rowspan="3">
        <ul>
          <li>
            <a href="https://filezilla-project.org/">FileZilla</a>（所有操作系统）
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <ul>
          <li>
            <a href="https://wiki.gnome.org/action/show/Apps/Files?action=show&#x26;redirect=Apps%2FNautilus" rel="external">Nautilus/Files</a>（Gnome）
          </li>
          <li>
            <a href="https://dolphin.com/" rel="external">Dolphin</a>（KDE）
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td>
        <ul>
          <li><a href="https://cyberduck.de/">Cyberduck</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>ChromeOS</td>
      <td>
        <ul>
          <li><a href="https://shiftedit.net/">ShiftEdit</a>（所有操作系统）</li>
        </ul>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

### 浏览网站

正如你所知，你需要一个网页浏览器去查看网页。这里有一系列的[许多](http://en.wikipedia.org/wiki/List_of_web_browsers)可选浏览器供你个人使用，不过当你在开发一个网页时，你应当至少用以下的主流浏览器测试它，以保证你的网站可供大部分人浏览：

- [Mozilla Firefox](https://www.mozilla.org/zh-CN/firefox/new/)
- [Google Chrome](https://www.google.cn/chrome/)
- [Apple Safari](https://www.apple.com/safari/)

如果你正以特定的群体（比如说技术平台或者国家）为目标，你或许需要用额外的浏览器，像是 [Opera](https://www.opera.com/)、[Konqueror](https://apps.kde.org/konqueror/) 来测试它。

但是因为某些浏览器只会在特定的操作系统上运行，测试会变得复杂。特别是，Apple Safari 在 iOS、iPadOS 和 macOS 上运行。最好利用像 [Browsershots](https://browsershots.org/) 或 [Browserstack](https://www.browserstack.com/) 这样的服务。Browsershots 提供你的网站在各种浏览器中显示的截图。Browserstack 则提供对虚拟机的完全远程访问，因此你可以在最常见的环境和不同操作系统上测试你的网站。或者，你也可以自行设置虚拟机，但这需要一定的专业知识。有关更多信息，请参阅[执行测试的策略：建立测试实验室](/zh-CN/docs/Learn_web_development/Extensions/Testing/Testing_strategies#建立测试实验室)。

无论如何，一定要在真实设备上进行一些测试，尤其是在真实的移动设备上。移动设备模拟是一项新的、不断发展的技术，比桌面模拟不太可靠。移动设备当然需要花费金钱，所以我们建议你看看[开放设备实验室倡议](https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/#odls-have-opened-doors-for-idls)。如果你想在多个平台上进行测试而不花费太多，你也可以共享设备。

## 下一步

- 这里的一些软件是免费的，但不是所有都是。探寻[在网络上做一些事情需要花费多少](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)。
- 如果你想要了解更多关于文本编辑器的知识，阅读我们关于[如何选择并安装一个文件浏览器](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors)的文章。
- 如果你想知道如何在网络上发布你的网站，查阅“[如何上传文件到一个网络服务器](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server)”。

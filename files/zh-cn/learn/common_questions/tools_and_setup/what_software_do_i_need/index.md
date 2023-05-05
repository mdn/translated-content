---
title: 我需要什么软件来构建一个网站
slug: Learn/Common_questions/Tools_and_setup/What_software_do_I_need
---

在这篇文章我们会展示当你编辑，上传或者浏览一个网站时所需要的软件成分。

<table>
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        你应当已经知道网页、网站、网络服务器，以及<a
          href="/zh-CN/docs/Learn/page_vs_site_vs_server_vs_search_engine"
          >搜索引擎间的区别</a
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

你可以免费下载大部分网络开发所需要的程序。我们会在此文章中提供一些链接。你会需要工具去 1) 创建和编辑网页，2) 上传文件到你的网络服务器，和 3) 浏览你的网站。

几乎所有的操作系统内置了一个文本编辑器和网站阅读器（被称作 浏览器）。所以通常你只需要获得用来传输文件到你的网络服务器的软件。

## 自主学习

_现在还没有自主学习活动。请[考虑投稿](/zh-CN/docs/MDN/Getting_started)_。

## 深度探索

### 创建和编辑网页

要创建和编辑一个网站，你需要一个文本编辑器。文本编辑器创建并修改无格式的文本文件。（其他格式，像是 **{{Glossary("RTF")}}**，允许你去添加格式，像是加粗或者下划线。这些格式并不适用于编写网页。）你应当明智地选择一个文本编辑器，因为当你建立网站时，你会广泛地使用到它。

所有的桌面操作系统内置了一个基本的文本编辑器。这些编辑器是很直白的，但是缺乏了网页编码所需的特殊功能。如果你想要一些更花俏的东西，这里有很多可用的第三方工具。第三方编辑器通常包含了额外的功能，包括句法填色 \[syntax coloring]，代码补全 \[auto-completion]，可折叠区间 \[collapsible sections]，以及代码搜索 \[code search]。这里有一个短的编辑器列表：

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
      <td>Chrome OS</td>
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

![Screenshot of Notepad++.](notepadplusplus.png)

### 上传文件到网络

当你的网站已经为公众浏览做好准备，你会需要上传你的网页到你的网络服务器。你可以从不同的供应者（查看 在网络上做某些东西要花费多少 \[[How much does it cost to do something on the web?](/zh-CN/docs/Learn/How_much_does_it_cost)]）处购买服务器的空间。一旦你选择好供应者，供应者会通过电子邮件给你发送 FTP（文件传输协议 \[file transfer protocol]）访问信息。上传文件到一个网络服务器是创建一个网站的重要一环，所以我们会在一篇独立的文章 \[[a separate article](/zh-CN/docs/Learn/Upload_files_to_a_web_server)] 中介绍它。就目前而言，这里有一小列免费的基本 FTP 客户端：

<table>
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
        <p><a href="http://winscp.net">WinSCP</a></p>
        <p><a href="http://mobaxterm.mobatek.net/">Moba Xterm</a></p>
      </td>
      <td colspan="1" rowspan="3">
        <a href="https://filezilla-project.org/">FileZilla</a> (All OS)
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <a href="https://live.gnome.org/Nautilus">Nautilus</a> (Gnome)<br /><a
          href="http://www.konqueror.org/"
          >Konqueror</a
        >
        (KDE)
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td><a href="http://cyberduck.de/">Cyberduck</a></td>
    </tr>
  </tbody>
</table>

### 浏览页面

正如你所知，你需要一个网页浏览器去查看网页。这里有一系列的 \[[dozens](http://en.wikipedia.org/wiki/List_of_web_browsers)] 可选浏览器供你个人实用，不过当你在开发一个网页时，你应当至少用以下的主流浏览器测试它，以保证你的网站可供大部分人浏览：

- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Google Chrome](https://www.google.cn/chrome/)
- [Microsoft Internet Explorer](https://windows.microsoft.com/en-US/internet-explorer/download-ie)
- [Apple Safari](https://www.apple.com/safari/)

如果你正以特定的群体（比如说技术平台或者国家）为目标，你或许需要用额外的浏览器，像是 [Opera](https://www.opera.com/)、[Dolphin](https://dolphin.com/) 来测试它。

但是因为某些浏览器只会在特定的操作系统上运行，测试会变得复杂。Apple Safari 在 iOS 和 Mac OS 上运行，而 Internet Explorer 则只在 Windows 上运行。这时候最好利用像是 [Browsershots](http://browsershots.org/) 或者 [Browserstack](http://www.browserstack.com/) 之类的服务。Browsershots 提供你的网站的截图，就如同它会在不同浏览器中所看到那样。Browserstack 实际上给予你完全远程访问虚拟机的权限，所以你可以在最普遍的环境中测试你的网站。或者，你可以设置你自己的虚拟机，不过这需要一些专业知识。（如果你选择了这样做，微软在上为开发者提供了[随时可用的虚拟机](https://developer.microsoft.com/zh-cn/microsoft-edge/tools/vms/)。）

务必在一个真实设备上运行一些测试，尤其是在真实的移动设备上。移动设备模拟是一个崭新的，进化中的技术，而且它并不及桌面模拟可靠。当然，移动设备耗费金钱，所以我们推荐你查看一下 [Open Device Lab initiative](http://opendevicelab.com/)。你同时也可以分享设备，如果你想要不花费太多地在多平台上测试的话。

## 下一步

- 这里的一些软件是免费的，但不是所有都是。探寻在网络上做一些事情需要花费多少 \[[Find out how much it costs to do something on the web](/zh-CN/docs/Learn/Common_questions/How_much_does_it_cost)]。
- 如果你想要了解更多关于文本编辑器的知识，阅读我们关于如何选择并安装一个文件浏览器 \[[how to choose and install a text editor](/zh-CN/docs/Learn/Choose,_Install_and_set_up_a_text_editor)] 的文章。
- 如果你寻思如何在网络上发布你的网站，查阅“如何上传文件到一个网络服务器 \[[How to upload files to a web server](/zh-CN/docs/Learn/Upload_files_to_a_web_server)]”。

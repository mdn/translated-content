---
title: 如何设置一个本地测试服务器？
slug: Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server
---

本文将会介绍如何在你的计算机上安装一个简单的本地测试服务器，以及它的基本用法。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        你需要知道<a href="/zh-CN/docs/learn/How_the_Internet_works"
          >互联网是怎么工作的</a
        >，以及<a href="/zh-CN/docs/Learn/Common_questions/What_is_a_web_server"
          >什么是网络服务器</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>你将学习如何配置本地测试服务器。</td>
    </tr>
  </tbody>
</table>

## 本地文件与远程文件

在大多数示例中，我们告诉你只需在浏览器中直接打开您的示例，有很多方法可以实现这一点，你可以通过双击 HTML 文件或将其拖拽到浏览器窗口中，或者在浏览器中选择 `文件 > 打开...` 选择 HTML 文件等。

如果你打开的是本地示例的话，你可以在地址栏看到这个地址是以 `file://` 开头的，接着本地硬盘上该示例文件的路径。相比之下，如果你查看的是我们在 GitHub 上托管的示例（或其他远程服务器上的示例），Web 地址会以 `http://` 或 `https://` 开头，说明该文件是通过 HTTP 传输的。

## 测试本地文件存在的问题

某些示例如果你将其作为本地文件打开的话，它将不会运行。这可能是由于各种原因，最有可能是：

- **它们具有异步请求。** 如果你只是从本地文件运行示例，一些浏览器（包括 Chrome）将不会运行异步请求（请参阅 [从服务器获取数据](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)）。这是因为安全限制（更多关于 Web 安全的信息，请参阅 [站点安全](/zh-CN/docs/learn/Server-side/First_steps/Website_security)）。
- **它们具有服务端代码。** 服务器端语言（如 PHP 或 Python）需要一个特殊的服务器来解释代码并提供结果。

## 运行一个简单的本地 HTTP 服务器

为了解决异步请求的问题，我们需要通过在本地 Web 服务器上运行这些示例来测试这些示例。为我们的目的，最简单的方法之一就是使用 Python 的`SimpleHTTPServer`模块。

我们需要：

1. 安装 Python。如果您正在使用 Linux 或 Mac OS X，则应该已经在您的系统上可用。如果您是 Windows 用户，则可以从 Python 主页获取安装程序，并按照说明进行安装：

   - 转到[python.org](https://www.python.org/)
   - 在“下载”部分下，单击 Python“3.xxx”的链接。
   - 在页面的底部，选择*Windows x86 可执行文件安装程序*并下载它。
   - 当它已经下载，运行它。
   - 在第一个安装程序页面上，确保选中了“将 Python 3.xxx 添加到 PATH”复选框。
   - 单击*安装*，然后在安装完成后单击*关闭*。

2. 打开你的命令提示符（Windows）/终端（OS X / Linux）。要检查 Python 是否安装，请输入以下命令：

   ```bash
   python -V
   ```

3. 下面应该给出你安装的版本号，使用`cd`命令导航到您的示例所在的目录。

   ```bash
   # 输入你想要进入的目录，举例
   cd Desktop
   # 用两个点来表示进入上一层级的目录
   cd ..
   ```

4. 输入命令在该目录中启动服务器：

   ```bash
   ＃如果上面返回的 Python 版本是 3.X
   python -m http.server
   ＃如果上面返回的 Python 版本是 2.X
   python -m SimpleHTTPServer
   ```

5. 默认情况下，这将在本地 Web 服务器上的端口 8000 上运行目录的内容。您可以通过转到`localhost:8000`Web 浏览器中的 URL 来访问此服务器。在这里你会看到列出的目录的内容 - 点击你想运行的 HTML 文件。

> **备注：** 如果您已经在端口 8000 上运行了某些东西，则可以通过运行 server 命令，然后选择另一个端口号（例如`python -m http.server 7800` （Python 3.x）或`python -m SimpleHTTPServer 7800` （Python 2.x））来选择另一个端口。然后您可以访问您的内容`localhost:7800`。

## 在本地运行服务器端语言

Python 的`SimpleHTTPServer`模块是有用的，但它不知道如何运行用 PHP 或 Python 等语言编写的代码。为了处理这个问题，你需要更多的东西 - 正是你需要的东西取决于你正在运行的服务器端语言。这里有几个例子：

- 要运行 Python 服务器端代码，您需要使用 Python 网络框架。您可以通过阅读[Django Web Framework（Python）](/zh-CN/docs/Learn/Server-side/Django)来了解如何使用 Django 框架。[Flask](http://flask.pocoo.org/)也是一个不错的选择（稍微轻量一点）。要运行 Flask，你需要先[安装 Python / PIP](/zh-CN/docs/Learn/Server-side/Django/development_environment#Installing_Python_3)，然后使用`pip3 install flask` 来安装 Flask。此时，您应该能够运行 Python Flask 示例`python3 python-example.py`，然后在您的浏览器中打开 `localhost:5000` 查看。
- 要运行 Node.js（JavaScript）服务器端代码，您可以直接使用 Node 或选择构建于其上的框架。Express 是一个不错的选择 - 请参阅[Express Web Framework（Node.js / JavaScript）](/zh-CN/docs/Learn/Server-side/Express_Nodejs)。
- 要运行 PHP 服务器端代码，您需要一个可以解释 PHP 的服务器设置。本地 PHP 测试的好选择是[MAMP](https://www.mamp.info/en/downloads/)（Mac 和 Windows）， [AMPPS](http://ampps.com/download)（Mac，Windows，Linux）和[LAMP](https://www.linux.com/learn/easy-lamp-server-installation)（Linux，Apache，MySQL 和 PHP / Python / Perl）。这些是完整的包，创建本地设置，允许您运行 Apache 服务器，PHP 和 MySQL 数据库。

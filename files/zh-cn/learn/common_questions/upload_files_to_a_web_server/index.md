---
title: 如何将文件上传到网络服务器
slug: Learn/Common_questions/Upload_files_to_a_web_server
translation_of: Learn/Common_questions/Upload_files_to_a_web_server
---
这篇文章将会告诉你如何利用 {{Glossary("FTP")}} 工具来发布你的网站。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        你必须知道<a
          href="/zh-CN/docs/Learn/Common_questions/What_is_a_web_server"
          >什么是网络服务器？</a
        >
        以及<a href="/en-US/Learn/Understanding_domain_names"
          >域名是如何工作的</a
        >。你必须知道如何<a
          href="/en-US/Learn/Set_up_a_basic_working_environment"
          >搭建一个基本环境</a
        >，还有如何<a href="/en-US/Learn/HTML/Write_a_simple_page_in_HTML"
          >写一个简单的网页</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习如何将文件上传到 FTP 服务器。</td>
    </tr>
  </tbody>
</table>

## 概要

如果[你已经建立了一个简单的页面](/en-US/Learn/HTML/Write_a_simple_page_in_HTML), 你会想将它放到某些网络服务器上。在这章里，我们将讨论如何使用“**FTP**”。

## 自主学习

_目前还没有有效的自主学习方法。 [请考虑贡献](/en-US/docs/MDN/Getting_started)。_

## 深入探究

### 了解 FTP 客户端：FireFTP

有很多 FTP 客户端。我们的 demo 使用 FireFTP 演示，因为用 FireFTP 构建是非常容易的。如果你使用 FireFTP，只要[转到 FireFTP 插件页面](https://addons.mozilla.org/firefox/addon/fireftp/)并安装 FireFTP。

> **备注：** 当然这有许多其他的选项。参见[发布工具：获取 FTP](/en-US/Learn/How_much_does_it_cost#Publishing_tools.3A_FTP_client)更多的信息。

在个新的标签中打开 FireFTP，FireFTP 有两种办法。

1. **Firefox menu <img alt="" src="https://mdn.mozillademos.org/files/9633/2014-01-10-13-08-08-f52b8c.png" style="height: 16px; width: 16px;"> ➤ <img alt="Developer" src="https://mdn.mozillademos.org/files/9635/Screenshot%20from%202014-11-26%2014:24:56.png" style="height: 24px; vertical-align: middle; width: 27px;"> ➤ FireFTP**
2. **Tools** ➤ **Web Develope**r ➤ **FireFTP**

现在你应该可以看到如下界面：

![FireFTP : the interface, not connected to a server](https://mdn.mozillademos.org/files/9613/fireftp-default.png)

### 登入（Logging in）

在这个例子中，我们假设我们的托管提供商（将托管我们的 HTTP Web 服务器的服务）是一个虚构的公司“Example Hosting Provider”，其 URL 如下所示：

`mypersonalwebsite.examplehostingprovider.net`.

我们刚刚开通了一个帐户，并从他们那里收到了这些信息：

> 恭喜在 Example Hosting Provider 开设帐户。
>
> 你的账户是：`demozilla`
>
> 您的网站将在：
>
> `demozilla.examplehostingprovider.net`
>
> 要发布到此帐户，请使用以下凭据通过 FTP 进行连接：
>
> - FTP 服务：`ftp://demozilla.examplehostingprovider.net`
> - 用户名：`demozilla`
> - 密码：`quickbrownfox`
> - 要在 Web 上发布，请将文件放入`Public / htdocs`目录中。

让我们查看一下此网页 `http://demozilla.examplehostingprovider.net/` — 正如你所见，现在这里什么也没有：

![Our demozilla personal website, seen in a browser: it's empty](demozilla-empty.png)

> **备注：** 根据您的托管服务提供商的不同，大部分时间您会看到一个页面，内容如下：“此网站由 \[托管服务] 托管”。

要将 FTP 客户端连接到远程服务器，请按“创建帐户...”按钮并使用托管提供商提供的信息填写字段：

![FireFTP: creating an account](https://mdn.mozillademos.org/files/9617/fireftp-createlogin.png)

### 在这里和那里：本地和远程视图

现在让我们连接这个新创建的帐户：

![The FTP interface, once logged](https://mdn.mozillademos.org/files/9619/fireftp-logged.png)

让我们来看看你所看到的：

- 在左边，你会看到你的本地文件。导航到您存储网站的目录（本例中为`mdn`）。
- 在右侧，您会看到远程文件。我们登录到了我们远程的 FTP 根目录（在这种情况下，`users/ demozilla`）
- 现在您可以忽略底部区域。它是您的 FTP 客户端和服务器之间每次交互的实时日志。

### 上传到服务器

您应该记得，我们的主机提供商告诉我们，我们的文件必须存储在`Public / htdocs`目录中，如右窗格中导航所示：

![Changing to the htdocs folder on the remote server](https://mdn.mozillademos.org/files/9623/remote-htdocs-empty.png)

现在，要将文件上传到服务器，请将它们从左侧窗格拖放到右侧窗格中：

![The files show in the remote view: they have been pushed to the server](https://mdn.mozillademos.org/files/9625/files-dropped-onto-the-server.png)

### 文件都上传成功了吗？

到目前为止，很好，但文件真的在线吗？您可以在浏览器中返回您的网站（例如 `http://demozilla.examplehostingprovider.net/` ）进行仔细检查：

![Here we go: our website is live!](here-we-go.png)

瞧！我们的网站已经活灵活现了！

### 其他方式上传文件

FTP 协议是发布网站的一种众所周知的方法，但不是唯一的方法。以下是其他一些可能性：

- **Web 界面**。作为远程文件上传服务前端的 HTML 界面。由您的托管服务提供。
- **GitHub**（高级）。使用 提交/推送 方法的组合上传{{Glossary('git')}} 。请参阅我们的“[Web 指南入门](/en-US/Learn/Getting_started_with_the_web)”中 [发布您的网站](/en-US/Learn/Getting_started_with_the_web/Publishing_your_website) 文章。
- **{{Glossary("Rsync")}}**（高级）。本地到远程的文件同步系统。
- **{{Glossary('WebDAV')}}。**
- **{{Glossary('WebDAV')}}**. {{Glossary('HTTP')}}协议的扩展，允许更多的高级文件管理。

## 下一步

干得好，你几乎快完成了。最后一项重要任务是确保您的网站正常工作。

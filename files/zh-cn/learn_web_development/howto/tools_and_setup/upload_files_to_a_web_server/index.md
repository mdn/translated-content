---
title: 如何将文件上传到 web 服务器
slug: Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server
---

这篇文章将会告诉你如何利用文件传输工具来发布你的网站。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        你必须知道<a
          href="/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server"
          >什么是 web 服务器</a
        >以及<a
          href="/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name"
          >域名是如何工作的</a
        >。你必须知道如何<a
          href="/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server"
          >搭建一个基本环境</a
        >，还有如何<a href="/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website"
          >写一个简单的网页</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习如何使用各种可用文件传输工具将文件上传到服务器。</td>
    </tr>
  </tbody>
</table>

## 概要

如果你已经建立了一个简单的页面（参见 [HTML 基础](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)以获取示例），你会想将它放到某些 web 服务器上。在本文中，我们将讨论如何使用各类可用的方法（如 SFTP 客户端、Rsync 和 GitHub）来做到这一点。

## SFTP

有多种 SFTP 客户端。我们的示例使用的是 [FileZilla](https://filezilla-project.org/)，因为它免费，且可在 Windows、macOS 以及 Linux 上使用。要安装 FileZilla，请转到 [FileZilla 下载页面](https://filezilla-project.org/download.php?type=client)，点击下载按钮，然后以常规的方式通过安装文件安装它。

> [!NOTE]
> 当然还有很多其他的选择。有关详细的信息，请参阅[发布工具](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#发布工具)。

打开 FileZilla 应用程序，你应该看到这样的界面：

![Filezilla FTP 应用程序的用户界面截图。聚焦于主机的输入框。](filezilla-ui.png)

### 登入

在这个示例中，我们假设我们的托管提供商（将托管我们的 HTTP Web 服务器的服务）是一个虚构的公司“Example Hosting Provider”，其 URL 如下所示：`mypersonalwebsite.examplehostingprovider.net`。

我们刚刚开通了一个帐户，并从他们那里收到了这些信息：

> 恭喜在 Example Hosting Provider 开设帐户。
>
> 你的账户是：`demozilla`
>
> 你的网站将在：`demozilla.examplehostingprovider.net`
>
> 要发布到此帐户，请使用以下凭据通过 SFTP 进行连接：
>
> - SFTP 服务：`sftp://demozilla.examplehostingprovider.net`
> - 用户名：`demozilla`
> - 密码：`quickbrownfox`
> - 端口：`5548`
> - 要在 web 上发布，请将文件放入 `Public/htdocs` 目录中。

让我们查看一下此网页 `http://demozilla.examplehostingprovider.net/`——正如你所见，现在这里什么也没有：

![我们的 demozilla 个人网站，在浏览器中看起来是空的](demozilla-empty.png)

> [!NOTE]
> 根据你的托管服务提供商的不同，大部分时间你会看到一个页面，内容如下：“此网站由 \[托管服务] 托管”。

要将 SFTP 客户端连接到远程服务器，请执行以下步骤：

1. 在主菜单中选择*文件>站点管理器……*。
2. 在*站点管理其*窗口，点击*新建站点*按钮，然后填写站点名称为 **demozilla**。
3. 将托管服务提供商提供的 SFTP 服务器地址填入**主机**字段。
4. 在*登录类型*下拉框中选择*常规*，然后在相关的字段中填写提供的用户名和密码。
5. 填写正确的端口号和其他信息。

窗口看起来应该像这样：

![Screenshot of default landing page of a fictitious website when the file directory is empty](site-manager.png)

现在按下*连接*以连接到 SFTP 服务器。

注意：请确保你的托管服务提供商为你提供的空间是支持 SFTP（安全 FTP）连接的。FTP 本质上是不安全的，你不应该使用它。

### 在这里和那里：本地和远程视图

在连接后，你的屏幕应该如下所示（我们已连接到我们自己的一个示例以供你参考）：

![SFTP 客户端在连接到 SFTP 服务器后会展示网站内容。本地的文件在左侧，远程的文件在右侧。](connected.png)

让我们来看看你所看到的：

- 在左边，你会看到你的本地文件。导航到你存储网站的目录（本例中为 `mdn`）。
- 在右侧，你会看到远程文件。我们登录到了我们远程的 FTP 根目录（在这种情况下，`users/demozilla`）
- 现在你可以忽略底部和顶部区域。它们分别是你的计算机和 SFTP 服务器之间连接状态的消息日志，以及 SFTP 客户端和服务器之间每次交互的实时日志。

### 上传到服务器

你应该记得，我们的主机提供商告诉我们，我们的文件必须存储在 `Public/htdocs`目录中。你需要在右侧窗格中导航到指定的目录。这个目录实际上是你网站的根目录——`index.html` 文件和其他的资源文件将存放在该目录中。

找到正确的远程目录来放置文件后，要将文件上传到服务器，请将它们从左侧窗格拖放到右侧窗格中：

### 文件都上传成功了吗？

到目前为止，很好，但文件真的在线吗？你可以在浏览器中返回你的网站（例如 `http://demozilla.examplehostingprovider.net/`）进行仔细检查：

![啊哈：我们的网站上线了！](here-we-go.png)

瞧！我们的网站已经上线了！

## Rsync

{{Glossary("Rsync")}} 是一种本地到远程的文件同步工具，通常在大多数基于 Unix 的系统（如 macOS 和 Linux）上都可用，但也存在 Windows 版本。

它被视为比 SFTP 更高级 工具，因为它默认是在命令行中使用的。下面展示了一个基本的命令：

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` 破折号后根一个或多个字母，例如 `-v` 用于详细展示错误消息，而 `-b` 用于进行备份你可用在 [rsync 手册页](https://linux.die.net/man/1/rsync)中查看完整的列表（搜索“Options summary”）。
- `SOURCE` 是要从中复制文件的本地文件或目录的路径。
- `user@` 是你要将文件复制到远程服务器上的用户的凭据。
- `x.x.x.x` 是远程服务器的 IP 地址。
- `DESTINATION` 是你要将目录或文件复制到远程服务器上的位置的路径。

你需要从托管服务提供商哪里了解此类详细信息。

参见[如何使用 Rsync 以在服务器之间拷贝或同步文件](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/)以了解更多信息和示例。

当然，对于 FTP 等，最好使用安全连接。对于 Rsync，你可用使用 `-e` 选项指定 SSH 的详细信息，以通过 SSH 建立连接。例如：

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

你可以在[如何通过 Rsync Over SSH 来拷贝文件](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh)中了解详细信息。

### Rsync 图形工具

有适用与 Rsync 的图形工具（对于哪些不习惯适用命令行的人）。[Acrosync](https://acrosync.com/mac.html) 就是一款这样的工具，而且可在 Windows 和 macOS 上使用。

同样地，你必须从托管服务提供商那里获取连接凭据，不过你现在可以通过图形化界面来输入它们。

## GitHub

GitHub 允许你通过 [GitHub pages](https://pages.github.com/)（gh-pages）发布网站。

我们已经在我们的[web 入门](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website)指南的[发布网站](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website)中介绍了这一内容，所以我们不再重复。

但是，值得注意的是，你也可以在使用自定义域名的情况下，在 GitHub 上托管网站。请参阅[配置 GitHub Pages 站点的自定义域](https://docs.github.com/cn/pages/configuring-a-custom-domain-for-your-github-pages-site)以获取详细的指南。

## 其他上传文件的方法

FTP 协议是发布网站的一种众所周知的方法，但不是唯一的方法。以下是其他一些可能性：

- **Web 界面**。作为远程文件上传服务前端的 HTML 界面。由你的托管服务提供。
- **{{Glossary('WebDAV')}}**。是一个 {{Glossary('HTTP')}} 协议的扩展，允许更多的高级文件管理功能。

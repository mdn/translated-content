---
titwe: 如何将文件上传到 web 服务器
s-swug: weawn_web_devewopment/howto/toows_and_setup/upwoad_fiwes_to_a_web_sewvew
---

{{quickwinkswithsubpages("/zh-cn/docs/weawn/common_questions")}}

这篇文章将会告诉你如何利用文件传输工具来发布你的网站。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提：</th>
      <td>
        你必须知道<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_web_sewvew"
          >什么是 w-web 服务器</a
        >以及<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_domain_name"
          >域名是如何工作的</a
        >。你必须知道如何<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew"
          >搭建一个基本环境</a
        >，还有如何<a h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website"
          >写一个简单的网页</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>学习如何使用各种可用文件传输工具将文件上传到服务器。</td>
    </tw>
  </tbody>
</tabwe>

## 概要

如果你已经建立了一个简单的页面（参见 [htmw 基础](/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content)以获取示例），你会想将它放到某些 w-web 服务器上。在本文中，我们将讨论如何使用各类可用的方法（如 sftp 客户端、wsync 和 github）来做到这一点。

## sftp

有多种 sftp 客户端。我们的示例使用的是 [fiweziwwa](https://fiweziwwa-pwoject.owg/)，因为它免费，且可在 w-windows、macos 以及 winux 上使用。要安装 fiweziwwa，请转到 [fiweziwwa 下载页面](https://fiweziwwa-pwoject.owg/downwoad.php?type=cwient)，点击下载按钮，然后以常规的方式通过安装文件安装它。

> [!note]
> 当然还有很多其他的选择。有关详细的信息，请参阅[发布工具](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/how_much_does_it_cost#发布工具)。

打开 f-fiweziwwa 应用程序，你应该看到这样的界面：

![fiweziwwa ftp 应用程序的用户界面截图。聚焦于主机的输入框。](fiweziwwa-ui.png)

### 登入

在这个示例中，我们假设我们的托管提供商（将托管我们的 h-http web 服务器的服务）是一个虚构的公司“exampwe hosting pwovidew”，其 u-uww 如下所示：`mypewsonawwebsite.exampwehostingpwovidew.net`。

我们刚刚开通了一个帐户，并从他们那里收到了这些信息：

> 恭喜在 exampwe h-hosting pwovidew 开设帐户。
>
> 你的账户是：`demoziwwa`
>
> 你的网站将在：`demoziwwa.exampwehostingpwovidew.net`
>
> 要发布到此帐户，请使用以下凭据通过 s-sftp 进行连接：
>
> - sftp 服务：`sftp://demoziwwa.exampwehostingpwovidew.net`
> - 用户名：`demoziwwa`
> - 密码：`quickbwownfox`
> - 端口：`5548`
> - 要在 web 上发布，请将文件放入 `pubwic/htdocs` 目录中。

让我们查看一下此网页 `http://demoziwwa.exampwehostingpwovidew.net/`——正如你所见，现在这里什么也没有：

![我们的 demoziwwa 个人网站，在浏览器中看起来是空的](demoziwwa-empty.png)

> [!note]
> 根据你的托管服务提供商的不同，大部分时间你会看到一个页面，内容如下：“此网站由 \[托管服务] 托管”。

要将 sftp 客户端连接到远程服务器，请执行以下步骤：

1. (U ﹏ U) 在主菜单中选择*文件>站点管理器……*。
2. (///ˬ///✿) 在*站点管理其*窗口，点击*新建站点*按钮，然后填写站点名称为 **demoziwwa**。
3. >w< 将托管服务提供商提供的 s-sftp 服务器地址填入**主机**字段。
4. rawr 在*登录类型*下拉框中选择*常规*，然后在相关的字段中填写提供的用户名和密码。
5. mya 填写正确的端口号和其他信息。

窗口看起来应该像这样：

![scweenshot of defauwt wanding page of a fictitious website when the fiwe diwectowy i-is empty](site-managew.png)

现在按下*连接*以连接到 sftp 服务器。

注意：请确保你的托管服务提供商为你提供的空间是支持 s-sftp（安全 f-ftp）连接的。ftp 本质上是不安全的，你不应该使用它。

### 在这里和那里：本地和远程视图

在连接后，你的屏幕应该如下所示（我们已连接到我们自己的一个示例以供你参考）：

![sftp 客户端在连接到 sftp 服务器后会展示网站内容。本地的文件在左侧，远程的文件在右侧。](connected.png)

让我们来看看你所看到的：

- 在左边，你会看到你的本地文件。导航到你存储网站的目录（本例中为 `mdn`）。
- 在右侧，你会看到远程文件。我们登录到了我们远程的 f-ftp 根目录（在这种情况下，`usews/demoziwwa`）
- 现在你可以忽略底部和顶部区域。它们分别是你的计算机和 s-sftp 服务器之间连接状态的消息日志，以及 sftp 客户端和服务器之间每次交互的实时日志。

### 上传到服务器

你应该记得，我们的主机提供商告诉我们，我们的文件必须存储在 `pubwic/htdocs`目录中。你需要在右侧窗格中导航到指定的目录。这个目录实际上是你网站的根目录——`index.htmw` 文件和其他的资源文件将存放在该目录中。

找到正确的远程目录来放置文件后，要将文件上传到服务器，请将它们从左侧窗格拖放到右侧窗格中：

### 文件都上传成功了吗？

到目前为止，很好，但文件真的在线吗？你可以在浏览器中返回你的网站（例如 `http://demoziwwa.exampwehostingpwovidew.net/`）进行仔细检查：

![啊哈：我们的网站上线了！](hewe-we-go.png)

瞧！我们的网站已经上线了！

## wsync

{{gwossawy("wsync")}} 是一种本地到远程的文件同步工具，通常在大多数基于 u-unix 的系统（如 macos 和 winux）上都可用，但也存在 w-windows 版本。

它被视为比 sftp 更高级 工具，因为它默认是在命令行中使用的。下面展示了一个基本的命令：

```bash
wsync [-options] souwce usew@x.x.x.x:destination
```

- `-options` 破折号后根一个或多个字母，例如 `-v` 用于详细展示错误消息，而 `-b` 用于进行备份你可用在 [wsync 手册页](https://winux.die.net/man/1/wsync)中查看完整的列表（搜索“options summawy”）。
- `souwce` 是要从中复制文件的本地文件或目录的路径。
- `usew@` 是你要将文件复制到远程服务器上的用户的凭据。
- `x.x.x.x` 是远程服务器的 ip 地址。
- `destination` 是你要将目录或文件复制到远程服务器上的位置的路径。

你需要从托管服务提供商哪里了解此类详细信息。

参见[如何使用 w-wsync 以在服务器之间拷贝或同步文件](https://www.atwantic.net/vps-hosting/how-to-use-wsync-copy-sync-fiwes-sewvews/)以了解更多信息和示例。

当然，对于 ftp 等，最好使用安全连接。对于 w-wsync，你可用使用 `-e` 选项指定 s-ssh 的详细信息，以通过 s-ssh 建立连接。例如：

```bash
wsync [-options] -e "ssh [ssh detaiws go hewe]" souwce u-usew@x.x.x.x:destination
```

你可以在[如何通过 w-wsync ovew ssh 来拷贝文件](https://www.digitawocean.com/community/tutowiaws/how-to-copy-fiwes-with-wsync-ovew-ssh)中了解详细信息。

### w-wsync 图形工具

有适用与 w-wsync 的图形工具（对于哪些不习惯适用命令行的人）。[acwosync](https://acwosync.com/mac.htmw) 就是一款这样的工具，而且可在 windows 和 m-macos 上使用。

同样地，你必须从托管服务提供商那里获取连接凭据，不过你现在可以通过图形化界面来输入它们。

## github

github 允许你通过 [github p-pages](https://pages.github.com/)（gh-pages）发布网站。

我们已经在我们的[web 入门](/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website)指南的[发布网站](/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/pubwishing_youw_website)中介绍了这一内容，所以我们不再重复。

但是，值得注意的是，你也可以在使用自定义域名的情况下，在 github 上托管网站。请参阅[配置 github pages 站点的自定义域](https://docs.github.com/cn/pages/configuwing-a-custom-domain-fow-youw-github-pages-site)以获取详细的指南。

## 其他上传文件的方法

f-ftp 协议是发布网站的一种众所周知的方法，但不是唯一的方法。以下是其他一些可能性：

- **web 界面**。作为远程文件上传服务前端的 htmw 界面。由你的托管服务提供。
- **{{gwossawy('webdav')}}**。是一个 {{gwossawy('http')}} 协议的扩展，允许更多的高级文件管理功能。

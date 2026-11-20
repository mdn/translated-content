---
title: 发布你的网站
short-title: 发布
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

一旦完成了代码编写和构成网站的文件的组织工作，你就需要把它们全部放在网上，这样人们才能找到它。本文介绍如何将[你的示例网站](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like)上线。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本熟悉计算机操作系统、用于构建网站的基本软件以及文件系统。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>发布网站涉及的基本工具和概念——托管服务、域名、FTP 程序。</li>
          <li>有哪些其他的托管选择，例如 GitHub 和 CodePen。</li>
          <li>使用 GitHub Pages 发布网站。</li>
          <li>托管服务、如何购买托管服务以及如何将网站上线。</li>
          <li>如何注册域名。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 有哪些方法可供选择？

发布网站是一个复杂的话题，因为有很多种实现方法。本文介绍最常见的方法：

- 获取托管服务和域名（小型项目的费用较低）
- 使用基于 Web 的集成开发环境（基本网站免费）
- 使用在线发布工具（基本网站免费）

## 获取托管服务和域名

为了对内容和网站外观拥有更多的控制，大多数专业人士和企业会选择购买 Web 托管服务和域名：

- Web 托管服务是指在托管服务提供商的 [Web 服务器](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)上租用的文件空间。你将网站文件上传到 Web 服务器，然后 Web 服务器向网站访客提供网站内容。一些 Web 托管服务提供免费的基本静态文件托管，而另一些则每月收取少量费用（例如 5–10 美元）。
- [域名](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)是人们用来找到你的网站的唯一 Web 地址，比如 `https://www.mozilla.org` 或 `https://www.bbc.co.uk`。你可以从**域名注册商**租借域名，年限自定。域名的费用通常为每年 5–15 美元。具体费用因以下因素而异：
  - 顶级域名注册局：`.com`、`.org` 和 `.io` 等顶级域名（TLD）由不同的注册局管理，这些注册局会设定向注册商收取的费用。一些国家将注册局收取的费用作为收入来源，定价较高；`.io` 和 `.ai` 等热门顶级域名也可能比普通的 `.com` 贵得多。
  - 注册商加价：一些注册商可能会对某些域名收取更高的费用。例如，受供需关系影响，同一顶级域名在不同注册商处的价格可能不同；一些“优质”域名可能更贵，尤其是 `ai.com` 这样的短域名。
  - 与域名相关的服务：一些注册商会提供额外的选项，例如首年优惠、续费后价格上涨，或由注册商提供的电子邮件服务。

如果你从同一家公司购买 Web 托管服务*和*域名，两者可能会自动关联。不过，如果你从不同的公司购买，或者想更换托管服务，就需要将域名指向正确的服务器，这样人们访问该 Web 地址时才能看到你的网站。托管服务提供商会给你一个 Web 地址，它可能是一个公共 IP 地址，也可能是其域名的子域名，例如 `my-app.pages.dev` 或 `my-app.github.io`。你需要配置 DNS 记录，添加 A 记录或 CNAME 记录。

### 寻找托管服务和域名的建议

- MDN 不会推荐特定的商业托管服务提供商或域名注册商。要找到托管服务提供商和注册商，只需要搜索“Web 托管服务”和“域名”。所有注册商都会提供功能，让你检查想要的域名是否可用。
- 你的家庭或办公的{{Glossary("ISP", "网络服务提供商")}}可能会为小型网站提供一些受限的托管服务。尽管可用的功能有限，但可能非常适合你的初次尝试。
- 也有一些可用的免费服务，比如 [Neocities](https://neocities.org/)、[Google Sites](https://sites.google.com/) 和 [WordPress](https://wordpress.com/)。这类服务的功能范围可能有限，但足以满足初步尝试的需要。

## 发布到你的服务器

公司会使用各种方式将静态文件传输到其 Web 服务器。许多公司会提供不止一种选择；常见的方式包括使用 [(S)FTP 客户端](/zh-CN/docs/Glossary/FTP)或 [RSync](https://en.wikipedia.org/wiki/Rsync)，或者将网站源代码存储在 [GitHub 仓库](https://github.com/)中，并授予托管服务提供商访问权限，以便其获取源代码、在必要时进行构建，然后发布网站。

下面的小节将更详细地介绍 (S)FTP 和 RSync。

### (S)FTP

每种操作系统的文件管理器都包含 (S)FTP 客户端。Windows 资源管理器、Nautilus（常见的 Linux 文件管理器）和 Mac Finder 都具有此功能。不过，人们通常会选择专用的 (S)FTP 客户端，以便并排显示本地和远程目录，并保存服务器密码。

如果你想安装 (S)FTP 客户端，有几个可靠的免费选择：例如，适用于所有平台的 [FileZilla](https://filezilla-project.org/)、适用于 Windows 的 [WinSCP](https://winscp.net/eng/index.php)，以及适用于 Mac 或 Windows 的 [Cyberduck](https://cyberduck.io/)。

一般来说，托管服务提供商会给你一些通过 FTP 连接的说明，例如：

> - SFTP 服务器：`sftp://demozilla.examplehostingprovider.net`
> - 用户名：`demozilla`
> - 密码：`quickbrownfox`
> - 端口：`5548`
> - 要将网站发布到 Web 上，请将文件放入 `Public/htdocs` 目录。

请参阅所选客户端的文档，了解在哪里输入这些信息。

连接后，(S)FTP 客户端通常会提供单窗格视图，显示远程 FTP 服务器的文件系统；或提供双窗格视图，一侧显示远程 FTP 服务器的文件系统，另一侧显示本地文件系统。不论信息以哪种方式呈现，通常都需要将本地网站文件拖放到远程 FTP 视图中，将其放到正确的位置。如上所述，默认位置（至少对于静态文件而言）通常是 `Public/htdocs`。

### Rsync

{{Glossary("Rsync")}} 是一种将本地文件同步到远程的工具。它被认为比 (S)FTP 更高级，因为它通常在命令行中使用，尽管也有图形用户界面客户端，例如适用于 Windows 和 macOS 的 [Acrosync](https://acrosync.com/mac.html)，以及适用于所有平台的 [Grsync](https://www.opbyte.it/grsync/)。

基本命令如下所示：

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

- `-options` 是一个连字符，后跟一个或多个字母，例如 `-v` 用于显示详细的错误消息，`-b` 用于创建备份。你可以在 [rsync 手册页](https://linux.die.net/man/1/rsync)中查看完整列表（搜索“Options summary”）。
- `-e "ssh [SSH DETAILS GO HERE]"` 包含 SSH 详细信息，以提供安全连接。
- `SOURCE` 是你想要从中复制文件的本地文件或目录的路径。
- `user@` 是你想要将文件复制到的远程服务器上的用户凭据。
- `x.x.x.x` 是远程服务器的 IP 地址。
- `DESTINATION` 是你想要将目录或文件复制到的远程服务器上的目标位置的路径。

托管服务提供商会提供这些详细信息。

更多信息和示例：

- 参阅[如何使用 Rsync 在服务器之间复制或同步文件](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/)。
- 在[如何通过 SSH 使用 Rsync 复制文件](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh)中，你可以找到有关所需信息的更多详情。

## 使用像 CodePen 这样基于 Web 的集成开发环境

有许多模拟网站开发环境的 Web 应用，允许你编写 HTML、CSS 和 JavaScript 代码，并将其渲染结果显示在输出窗格中。一般来说，这些工具易于使用，非常适合学习，便于分享代码（例如，你想向其他办公室的同事分享技术或者寻求调试帮助），并且免费（基础功能免费）。它们在一个唯一的 Web 地址上托管你渲染后的页面。不过，功能有限，而且这些应用通常不提供资源（如图像）的托管空间。

尝试使用以下几种工具，看看哪一种最适合你：

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN 学习合作伙伴_](/zh-CN/docs/MDN/Writing_guidelines/Learning_content#合作伙伴链接和嵌入)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## 使用在线发布工具

有一些工具能让你在线发布网站：

- [GitHub](https://github.com/) 是一个“社交编程”网站。它允许你上传代码仓库，并将其存储在 [Git](https://git-scm.com/) **版本控制系统**中。然后你可以在代码项目上进行协作，系统默认是开源的，也就是说世界上任何人都可以找到你 GitHub 上的代码，并进行使用、学习和改善。GitHub 有一个非常有用的功能，叫作 [GitHub Pages](https://pages.github.com/)，允许你将网站代码发布到 Web 上。
- [Netlify](https://www.netlify.com/) 是一个可以直接通过你的 GitHub 仓库提供静态网站托管的 Web 托管平台。它还提供许多其他功能，例如部署预览、无服务器函数和表单处理。

这些选择通常是免费的，但功能有限。

## 推荐使用哪种方法？

如果你刚刚入门，我们推荐使用 GitHub Pages，因为它易于使用。

1. 如果你还没有账号，请[注册 GitHub 账号](https://github.com/)。
2. 按照[为站点创建仓库](https://docs.github.com/zh/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-a-repository-for-your-site)中的步骤，创建一个仓库来存放你的网站。
3. 使用 GitHub 界面将网站文件上传到新仓库。你可以在[在 GitHub 上向仓库添加文件](https://docs.github.com/zh/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-a-repository-for-your-site)中找到相关说明。
4. 设置仓库，通过 GitHub Pages 发布其内容。具体操作请参阅[从分支发布](https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch)中的说明。
5. 稍等片刻，你应该会看到一条消息，显示“Your site is live at https://username.github.io/repositoryname/”。例如，如果你的用户名是 bobsmith，仓库名是 my-first-website，则会显示“Your site is live at https://bobsmith.github.io/my-first-website/”。此时应该会出现一个“Visit site”（访问站点）按钮，点击即可查看你的网站。

> [!NOTE]
> 如果你有自己的域名，并且希望将其指向 GitHub Pages 站点，请参阅[为 GitHub Pages 站点配置自定义域名](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site)以获取指导。

## 延展阅读

- [什么是 Web 服务器？](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [理解域名](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [部署网站](https://www.codecademy.com/learn/deploy-a-website)：Codecademy 提供的一个很好的教程，它比本文更深入一些，还展示了一些其他技术。

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

---
title: 发布网站
slug: Learn/Getting_started_with_the_web/Publishing_your_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}

在你已经写好了代码并且整理好了你网站的全部文件后，你需要将它们全部上线，这样别人才能看到。这篇文章将向你展示如何轻松地将你简单的示例代码传到网上。

## 有哪些方法可供选择？

发布一个网页并不是三言两语就能简单说明的，这主要是因为我们有很多种方法去完成它。在这篇文章里我们并不准备讲述所有方法，而是从初学者的视角讨论以下三种常见的方式的利弊，然后带你看看我们将要使用的一种方法。

### 获取主机服务和域名

如果你想要完全控制你发布的网页，那么你将需要花钱购置：

- 主机服务——在主机服务提供商的 [Web 服务器](/zh-CN/docs/Learn/Common_questions/What_is_a_web_server)上租用文件空间。将你网站的文件上传到这里，然后服务器会提供 Web 用户需求的内容。
- [域名](/zh-CN/docs/Learn/Common_questions/What_is_a_domain_name)——一个可以让人们访问的独一无二的地址，比如 `http://www.mozilla.org` 或 `http://www.bbc.co.uk`。你可以从**域名注册商**租借域名。

许多专业的网站通过这种方法接入互联网。

此外，你将需要一个 {{Glossary("FTP", "文件传输协议")}} 程序 ( 点击[钻研在网络上做某些事情要花费多少：软件](/zh-CN/docs/Learn/Common_questions/How_much_does_it_cost#软件)查看详细信息 ) 来将网站文件上传到服务器。不同的 FTP 程序涵盖了不同的范围，但是你通常需要使用主机服务提供商给你的详细信息（比如用户名、密码、主机名）登录到 Web 服务器。然后程序在两个窗口里分别显示本地文件和服务器文件，这样你就可以在它们之间进行传输：

![](ftp.jpg)

#### 寻找主机服务和域名的建议

- 我们不会推荐任何商业化的主机公司。要找到主机公司和域名注册商，只需要搜索 "网络主机服务" 和 "域名" 来找到一家出售域名的公司。所有这种类型的公司都允许你查看你想要的域名是否可用。
- 你的家庭或办公 {{Glossary("ISP", "网络服务提供商")}} 可能会提供一些受限制的的小型主机空间。它们的能使用的功能都会受到限制，但是它们会非常适合你的第一个实验的——联系一下他们！
- 有一些免费服务比如 [Neocities](https://neocities.org/) ， [Blogspot](https://www.blogger.com) ，和 [Wordpress](https://wordpress.com/) 。重复一遍，一分钱一分货，不过它们对于你的初次实验可能会是很理想的。免费服务大部分也不需要 FTP 软件来上传文件——你只需要将文件拖入到它们网页的界面里。
- 有时公司会打包提供主机服务和域名。

### 使用在线工具如 GitHub 或 Google App Engine

有一些工具能使你在线发布网站 :

- [GitHub](https://github.com/) 是一个“社交编程”网站。它允许你上传代码库并储存在 [Git](http://git-scm.com/) 版本控制系统里。然后你可以协作代码项目，系统是默认开源的，也就是说世界上任何人都可以找到你 GitHub 上的代码。去使用 GitHub，从中学习并且提高自己吧！你也可以对别人的代码那样做！这是一个非常重要、有用的社区，而且 Git/GitHub 是非常流行的 [版本控制系统](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6) — 大部分科技公司在工作中使用它。GitHub 有一个非常有用的特点叫 [GitHub pages](https://pages.github.com/)，允许你将网站代码放在网上。
- Google App Engine 是一个让你可以在 Google 的基础架构上构建和运行应用的强劲平台——无论你是需要从头开始构建多级 web 应用还是托管一个静态网站。参阅[How do you host your website on Google App Engine?](/zh-CN/docs/Learn/Common_questions/How_do_you_host_your_website_on_Google_App_Engine)以获取更多信息。

不同于大部分其他托管服务，这类工具通常是免费的，不过你只能使用有限的功能。

### 使用像 CodePen 这样基于 Web 的集成开发环境

有许多 web 应用能够仿真一个网站开发环境。你可以在这种应用——通常只有一个标签页——里输入 HTML、CSS 和 JavaScript 代码然后像显示网页一样显示代码的结果。通常这些工具都很简单，对学习很有帮助，而且至少有免费的基本功能，它们在一个独特的网址显示你提交的网页。不过，这些应用的基础功能很有限，而且应用通常不提供空间来存储图像等内容。

使用一下以下几种工具，看看你最喜欢哪一个：

- [JSFiddle](https://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JSBin](http://jsbin.com/)
- [CodePen](https://codepen.io/)

![](jsbin-screen.png)

## 通过 GitHub 发布

现在，让我们通过 Github 页面告诉你公布的你的代码是如此的简单。

1. 首先， [注册一个 GitHub 账号，](https://github.com/join) 并确认你的邮箱地址。
2. 接下来，你需要创建一个新的资源库 ( repository ) 来存放你的文件。
3. 在这个页面上，在 _Repository name_ 输入框里输入 _username_.github.io，username 是你的用户名。比如，我们的朋友 bobsmith 会输入 _bobsmith.github.io。同时勾选_ _Initialize this repository with a README_，然后点击 _Create repository_。![](github-create-repo.png)
4. 然后，将你的网站文件夹里的内容拖拽到你的资源库 ( repository )，再点击 _Commit changes_。

   > **备注：** 确保你的文件夹有一个 _index.html_ 文件。

5. 现在将你的浏览器转到 _username_.github.io 来在线查看你的网站。比如，_如果用户名为 chrisdavidmills_, 请转到 [chrisdavidmills.github.io](http://chrisdavidmills.github.io/)。

   > **备注：** 你的网站可能需要几分钟的时间才能投入使用。如果它不能立即工作，你可能需要等待几分钟，然后再试一次。

想要了解更多，请看 [GitHub Pages Help](https://help.github.com/categories/github-pages-basics/).

## 延展阅读

- [什么是网络服务器？](/zh-CN/docs/Learn/Common_questions/What_is_a_web_server)
- [什么是域名？](/zh-CN/docs/Learn/Common_questions/What_is_a_domain_name)
- [钻研在网络上做某些事情要花费多少？](/zh-CN/docs/Learn/Common_questions/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website)（英文）：来自 Codeacademy 的一个很好的教程，它比本教程更进一步，并展示了一些其他技术。
- Scott Murray 的 [Cheap or free static web hosting](http://alignedleft.com/resources/cheap-web-hosting) （价格低廉或免费的静态 Web 主机服务）包含一些对可用的 Web 主机服务的建议。

{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}

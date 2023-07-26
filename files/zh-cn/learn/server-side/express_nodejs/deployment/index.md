---
title: "Express 教程 7: 部署到生产环境"
slug: Learn/Server-side/Express_Nodejs/deployment
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}

现在你已经创建（并测试）了一个不错的 [本地图书馆](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) 网站了，你打算把它发布到一个公共网络服务器，这样图书馆职工和网络上的其他成员就可以访问它了。这篇文章总结了你可以怎样找到一台主机部署你的网站，以及你需要为站点准备到生产环境做什么。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        完成前面所有的指南主题，包括
        <a href="/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms"
          >Express Tutorial Part 6: Working with forms</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习你可以怎样以及在哪里部署一个 Express 应用到生产环境。</td>
    </tr>
  </tbody>
</table>

## 概览

一旦您的站点完成（或完成“足够”以开始公共测试），您将需要将其托管在比您的个人开发计算机，更公开和可访问的地方。

到目前为止，您一直在[开发环境](/zh-CN/docs/Learn/Server-side/Express_Nodejs/development_environment)中工作，使用 Express / Node 作为 Web 服务器，将您的站点共享到本地浏览器/网络，并使用（不安全的）开发设置运行您的网站，以显示调试和其他私人信息。在您可以在外部托管网站之前，您首先必须：

- 选择托管 Express 应用程序的环境。
- 对项目设置进行一些更改。
- 设置生产级别的基础架构，以服务您的网站。

本教程提供了，有关选择托管站点的选项的一些指导，简要概述了为使您的 Express 应用程序准备好生产，所需执行的操作，以及如何将 LocalLibrary 网站安装到 [Heroku](https://www.heroku.com/)云托管上的工作示例服务。

请记住，您不必使用 Heroku - 还有其他托管服务可用。我们还提供了一个单独的教程，以展示如何在 [PWS/Cloud Foundry](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Installing_on_PWS_Cloud_Foundry) 上安装 LocalLibrary。

## 什么是生产环境？

生产环境是服务器计算机提供的环境，您可以在其中运行网站，以供外部使用。环境包括：

- 网站运行的计算机硬件。
- 操作系统（例如 Linux 或 Windows）。
- 编程语言运行库和框架库，在其上编写您的网站。
- Web 服务器基础结构，可能包含 Web 服务器，反向代理，负载平衡器等。
- 您的网站所依赖的数据库。

服务器计算机，可以位于您的场所，并通过快速链接，连接到 Internet，但使用“托管在云上”的计算机更为常见。这实际上意味着，您的代码运行在托管公司的数据中心的某台远程计算机（或可能是“虚拟”计算机）。远程服务器，通常会以特定价格提供互联网连接，和一些保证级别的计算资源（例如 CPU，RAM，存储器等）。

这种可远程访问的计算/网络硬件，称为基础架构即服务（IaaS）。许多 IaaS 供应商，提供预安装特定操作系统的选项，您必须在其上，安装生产环境的其他组件。其他供应商，允许您选择功能更全面的环境，可能包括完整的 node 设置。

> **备注：** 预构建环境，可以使您的网站设置变得非常简单，因为它们会减少配置，但可用选项可能会限制您使用不熟悉的服务器（或其他组件），并且可能基于较旧版本的操作系统。通常最好自己安装组件，以便获得所需的组件，并且当您需要升级系统的某些部分时，您可以知道从哪里开始！

其他托管服务提供商，支持 Express 作为平台即服务（PaaS）产品的一部分。使用此类托管时，您无需担心大多数生产环境（服务器，负载平衡器等），因为主机平台会为您处理这些问题。这使得部署非常简单，因为您只需要专注于 Web 应用程序，而不是任何其他服务器基础结构。

一些开发人员选择 IaaS，相对于 PaaS，IaaS 提供更高灵活性，而其他开发人员偏好 PaaS 的降低维护开销，和更轻松的扩展性。当您在一开始使用时，在 PaaS 系统上设置您的网站，要容易得多，因此我们将在本教程中使用 PaaS。

> **备注：** 如果您选择 Node/Express 友好的托管服务提供商，他们应该提供，有关如何使用 Web 服务器，应用程序服务器，反向代理等不同配置，来设置 Express 网站的说明。例如，在[数字海洋 node 社区文档](https://www.digitalocean.com/community/tutorials?q=node)中，有许多各种配置的手把手指南。

## 选择一个主机供应商

众所周知，众多托管服务提供商，都积极支持或与 Node（和 Express）合作。这些供应商提供不同类型的环境（IaaS，PaaS），以及不同价格的不同级别的计算和网络资源。

> **备注：** 有很多托管解决方案，他们的服务和定价，可能会随着时间而改变。虽然我们在下面介绍几个选项，但在选择托管服务提供商之前，有必要自己进行互联网搜索。

选择主机时需要考虑的一些事项：

- 您的网站可能有多忙，以及满足该需求所需的数据，和计算资源的成本。
- 水平扩展（添加更多机器）和垂直扩展（升级到更强大的机器）的支持级别，以及这样做的成本。
- 供应商有数据中心的地方，因此访问可能是最快的。
- 主机正常运行时间和停机时间的历史表现。
- 用于管理站点的工具 - 易于使用且安全（例如 SFTP 与 FTP）。
- 用于监控服务器的内置框架。
- 已知限制。有些主机会故意阻止某些服务（例如电子邮件）。其他在某些价格层中，仅提供一定数小时的“实时时间”，或者仅提供少量存储空间。
- 额外的好处。一些提供商将提供免费域名和 SSL 证书支持，否则您将不得不为此另外支付费用。
- 您所依赖的“免费”等级，是否会随着时间的推移而过期，以及迁移到更昂贵等级的成本，是否意味着您最好在一开始就使用其他服务！

当你刚开始时，好消息是有很多网站提供“免费”的计算环境，尽管有一些条件。例如， [Heroku](https://www.heroku.com/) “永远”提供免费但资源有限的 PaaS 环境，而 [Amazon Web Services](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/) 和开源选项 [PWS/Cloud Foundry](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Installing_on_PWS_Cloud_Foundry) 在您第一次加入时，提供免费信用额度。

许多提供商还拥有“基本”层，可提供更多有用的计算能力，和更少的限制。举例来说， [Digital Ocean](https://www.digitalocean.com/) 是一个流行的托管服务提供商，它提供了一个相对便宜的基本计算层（在本教程写作时，是每月 5 美元的较低范围）。

> **备注：** 请记住，价格不是唯一的选择标准。如果您的网站成功，可能会发现可扩展性是最重要的考虑因素。

## 准备好发布你的网站

发布网站时，要考虑的主要问题是网络安全性和性能。至少，您需要删除开发期间，错误页面上包含的堆栈跟踪，整理日志记录，并设置适当的标头，以避免许多常见的安全威胁。

在以下小节中，我们概述了您应该对应用进行的、最重要的更改。

> **备注：** Express 文档中还有其他有用的提示 - 请参阅“[生产最佳实践：性能和可靠性](https://expressjs.com/en/advanced/best-practice-performance.html)”，以及“[生产最佳实践：安全性](https://expressjs.com/en/advanced/best-practice-security.html)”。

### 设置 NODE_ENV 为 'production'

我们可以通过将 `NODE_ENV` 环境变量，设置为 production，来删除错误页面中的堆栈跟踪（默认设置为“development” ）。除了生成较为不详细的错误消息之外，还要将变量设置为生产缓存视图模板，和从 CSS 扩展生成的 CSS 文件。测试表明，将`NODE_ENV`设置为生产，可以将应用程序性能提高三倍！

可以使用导出或环境文件，或使用 OS 初始化系统，以进行此更改。

> **备注：** 这实际上是在环境设置，而不是应用中所做的更改，但重要的是，要注意这里！我们将在下面，展示如何为我们的托管示例设置。

### Log appropriately

记录呼叫会对高流量网站产生影响。在生产环境中，您可能需要记录网站活动（例如，跟踪流量，或记录 API 调用），但您应尝试最小化为调试目的而添加的日志记录量。

在生产环境中，最小化“调试”日志记录的一种方法，是使用类似[调试 debug](https://www.npmjs.com/package/debug) 的模块，允许您通过设置环境变量，来控制执行的日志记录。例如，下面的代码片段，显示了如何设置“author”日志记录。调试变量使用名称“author”声明，并且将自动显示，来自此对象的所有日志的前缀“author”。

```js
var debug = require("debug")("author");

// Display Author update form on GET
exports.author_update_get = function (req, res, next) {
  req.sanitize("id").escape().trim();
  Author.findById(req.params.id, function (err, author) {
    if (err) {
      debug("update error:" + err);
      return next(err);
    }
    //On success
    res.render("author_form", { title: "Update Author", author: author });
  });
};
```

然后，您可以通过在`DEBUG`环境变量中，将它们指定为逗号分隔列表，来启用特定日志集。您可以设置显示作者和书籍日志的变量，如图所示（也支持通配符）。

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

> **备注：** 调用`debug`可以替换您以前使用`console.log()`或`console.error()`执行的日志记录。通过调试模块[debug](https://www.npmjs.com/package/debug)进行日志记录，替换代码中的所有`console.log()`调用。通过设置 DEBUG 变量，并在其中记录对日志记录的影响，在开发环境中，打开和关闭日志记录。

如果您需要记录网站活动，可以使用 Winston 或 Bunyan 等日志库。有关此主题的更多信息，请参阅：[生产最佳实践：性能和可靠性](https://expressjs.com/en/advanced/best-practice-performance.html)。

### 使用 gzip/deflate 压缩响应文件

Web 服务器，通常可以压缩发送回客户端的 HTTP 响应，从而显着减少客户端获取和加载页面所需的时间。使用的压缩方法，取决于客户端在请求中支持的解压缩方法（如果不支持压缩方法，则响应将以未压缩的方式发送）。

您可以使用压缩中间件 [compression](https://www.npmjs.com/package/compression)，将其添加到您的站点。通过在项目的根目录下，运行以下命令，将其安装到项目中。

```bash
npm install compression
```

打开**./app.js**，并导入压缩库，如图所示。使用`use()`方法，将压缩库添加到中间件链（这应该出现在您想要压缩的任何路由之前 - 在本教程这种情况下，全部都是！）

```js
var catalogRouter = require('./routes/catalog'); //Import routes for "catalog" area of site
var compression = require('compression');

// Create the Express application object
var app = express();

...

app.use(compression()); //Compress all routes

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);  // Add catalog routes to middleware chain.

...
```

> **备注：** 对于生产中流量较大的网站，您不会使用此中间件。相反，你会使用像 Nginx 这样的反向代理。

### 使用 Helmet 避免被常见漏洞侵袭

[Helmet](https://www.npmjs.com/package/helmet) 是一个中间件包，可以通过设置适当的 HTTP 标头，来帮助保护您的应用，免受一些众所周知的 Web 漏洞的影响（有关它设置的标头/防护漏洞的详细信息，请参阅[文档](https://helmetjs.github.io/docs/)）。

通过在项目的根目录下，运行以下命令，将其安装到项目中。

```bash
npm install helmet
```

打开**./app.js**，并导入如图所示的 _helmet_ 库。然后使用`use()`方法将模块添加到中间件链。

```js
var compression = require('compression');
var helmet = require('helmet');

// Create the Express application object
var app = express();

app.use(helmet());
...
```

> **备注：** 上面的命令，添加了对大多数站点有意义的可用标头子集。您可以按照[npm](https://www.npmjs.com/package/helmet)上的说明，根据需要添加/禁用特定标头。

## 例子：在 Heroku 上安装一个本地图书馆

本节提供了如何在[Heroku PaaS cloud](http://heroku.com)云上安装 LocalLibrary 的实际演示。

### 为什么选择 Heroku?

Heroku 是运行时间最长，且最受欢迎的基于云的 PaaS 服务之一。它最初只支持 Ruby 应用程序，但现在可用于托管来自许多编程环境的应用程序，包括 Node（以及 Express）！

我们选择使用 Heroku 有以下几个原因：

- Heroku 有一个[免费套餐](https://www.heroku.com/pricing)（尽管有一些限制）。
- 作为 PaaS，Heroku 为我们提供了大量的 Web 基础架构。这使得入门更加容易，因为您不必担心服务器，负载平衡器，反向代理，崩溃时重新启动网站，或者 Heroku 为我们提供的任何其他 Web 基础结构。
- 虽然它确实有一些限制，但这些不会影响这个特定的应用程序。例如：

  - Heroku 只提供短期存储，因此用户上传的文件无法安全地存储在 Heroku 本身。
  - 如果半小时内没有请求，免费套餐将使不活动的网络应用程序进入睡眠。然后，该网站可能需要几秒钟才能被唤醒。
  - 免费套餐将您网站运行的时间，限制为每月一定的小时数（不包括网站“睡着”的时间）。这对于低使用/演示站点来说很好，但如果需要 100％的正常运行时间，则不适用。
  - [Heroku 官方文档](https://devcenter.heroku.com/articles/limits)中列出的其他限制。

- 大多数情况下它只是可以工作，如果你最终喜欢它，并希望升级，那么扩展你的应用程序非常容易。

虽然 Heroku 非常适合举办此演示，但它可能并不适合您的真实网站。Heroku 可以轻松设置和扩展，但代价是灵活性较低，而且一旦退 出免费套餐，可能会花费更多。

### Heroku 如何工作？

Heroku 在一个或多个“[Dynos](https://devcenter.heroku.com/articles/dynos)”中运行网站，这些“Dynos”是独立的虚拟化 Unix 容器，提供运行应用程序所需的环境。Dynos 是完全隔离的，并且有一个短暂的文件系统（一个短暂的文件系统，每次 dyno 重新启动时都会清理/清空）。dynos 默认共享的唯一内容，是应用程序[配置变量](https://devcenter.heroku.com/articles/config-vars)。Heroku 内部使用负载均衡器，将 Web 流量分配给所有“web”dynos。由于它们之间没有任何共享，Heroku 可以通过添加更多 dynos，来水平扩展应用程序（当然，您可能还需要扩展数据库，以接受其他连接）。

由于文件系统是短暂的，因此无法直接安装应用程序所需的服务（例如数据库，队列，缓存系统，存储，电子邮件服务等）。相反，Heroku Web 应用程序使用 Heroku 或第三方作为独立“附加组件”提供的支持服务。连接到 Web 应用程序后，可以通过环境变量，在 Web 应用程序中访问附加服务。

为了执行您的应用程序，Heroku 需要能够设置适当的环境和依赖关系，并了解它是如何启动的。对于 Node 应用程序，它所需的所有信息都是从**package.json**文件中获取的。

开发人员使用特殊的客户端应用程序/终端，与 Heroku 交互，这很像 Unix bash 脚本。这允许您上传存储在 git 存储库中的代码，检查正在运行的进程，查看日志，设置配置变量等等！

为了让我们的应用程序在 Heroku 上工作，我们需要将我们的 Express Web 应用程序放入 git 存储库，并对 package.json 进行一些小的更改。完成后，我们可以设置 Heroku 帐户，获取 Heroku 客户端，并使用它来安装我们的网站。

这是您开始教程所需的全部概述（有关更全面的指南，请参阅[带有 Node.js 的 Heroku 入门](https://devcenter.heroku.com/articles/getting-started-with-nodejs)）。

### 在 Github 上创建一个应用仓库

Heroku 与 **git** 源代码版本控制系统紧密集成，使用它来上传/同步您对实时运行系统所做的任何更改。它通过添加一个名为 heroku 的新 Heroku“远程”存储库，来指向您在 Heroku 云上的源存储库。在开发期间，您使用 git 在“主”存储库 master 中存储更改。如果要部署站点，请将更改同步到 Heroku 存储库。

> **备注：** 如果您习惯于遵循良好的软件开发实践，那么您可能已经在使用 git 或其他一些 SCM 系统。如果您已有 git 存储库，则可以跳过此步骤。

有很多方法可以使用 git，但最简单的方法之一，是首先在[GitHub](https://github.com/)上建立一个帐户，在那里创建存储库，然后在本地同步它：

1. 访问 <https://github.com/> 并创建一个帐户。
2. 登录后，单击顶部工具栏中的 **+** 号链接，然后选择新建存储库**New repository**。
3. 填写此表单上的所有字段。虽然这些不是强制性的，但强烈建议使用它们。

   - 输入新的存储库名称（例如，express-locallibrary-tutorial）和描述（例如“以 Express（node）编写的本地图书馆网站”）。
   - 在 Add .gitignore 选择列表中选择 **Node**。
   - 在添加许可证 _Add license_ 选择列表中，选择您偏好的许可证。
   - 点选 **使用自述文件初始化此存储库** “**Initialize this repository with a README**”

4. 按 **Create repository**.
5. 单击新仓库页面上的绿色“克隆或下载”按钮 "**Clone or download**"。
6. 从显示的对话框的文本字段，复制 URL 值（它应该类似于：`https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git`）。

现在创建了存储库（“repo”），我们将要在本地计算机上克隆它：

1. 为您的本地计算机安装 git（您可以在[此处](https://git-scm.com/downloads)找到不同平台的版本）。
2. 打开命令提示符/终端，并使用您在上面复制的 URL，克隆 clone 存储库：

   ```bash
   git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
   ```

   这将在当前时间点之后，创建存储库。

3. 到新的仓库。

   ```bash
   cd express-locallibrary-tutorial
   ```

最后一步，是复制你的应用程序，然后使用 git，将文件添加到你的仓库：

1. 将 Express 应用程序，复制到此文件夹中（不包括**/node_modules**，其中包含您应根据需要，从 NPM 获取的依赖项文件）。
2. 打开命令提示符/终端，并使用`add`命令，将所有文件添加到 git。

   ```bash
   git add -A
   ```

3. 使用 status 命令，检查要添加的所有文件是否正确（您希望包含源文件，而不是二进制文件，临时文件等）。它应该看起来有点像下面的列表。

   ```plain
   > git status
   On branch master
   Your branch is up-to-date with 'origin/master'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           new file:   ...
   ```

4. 如果您满意，请将文件提交到本地存储库：

   ```bash
   git commit -m "First version of application moved into github"
   ```

5. 然后使用以下内容，将本地存储库同步到 Github 网站：

   ```bash
   git push origin master
   ```

完成此操作后，您应该可以返回创建存储库的 Github 上的页面，刷新页面，并查看您的整个应用程序现已上传。使用此添加/提交/推送循环，您可以在文件更改时，继续更新存储库。

> **备注：** 这是备份你的“vanilla”项目的好时机 - 虽然我们将在以下部分中进行的一些更改，可能对任何平台（或开发）上的部署有用，而一些其他的更改可能没有用。
>
> 执行此操作的最佳方法，是使用 git 来管理您的修订。使用 git，您不仅可以回到特定的旧版本，而且可以在生产变更的单独“分支”中进行维护，并选择在生产和开发分支之间移动的任何更改。[学习 Git](https://help.github.com/articles/good-resources-for-learning-git-and-github/)非常值得，但超出了本主题的范围。
>
> 最简单的方法，是将文件复制到另一个位置。使用最符合您对 git 了解的方法！

### 更新 Heroku 的应用程序

本节介绍了您需要对 LocalLibrary 应用程序进行的更改，以使其在 Heroku 上运行。

#### 设置 node 版本

**package.json**包含解决应用程序依赖项所需的所有内容，以及启动站点时，应启动的文件。Heroku 检测到此文件的存在，并将使用它来配置您的应用程序环境。

我们当前的**package.json**中，缺少的唯一有用信息，是 node 的版本。我们可以通过输入命令，找到我们用于开发的 node 版本：

```bash
>node --version
v8.9.1
```

打开**package.json**，并将此信息添加为**engines > node** 部分，如图所示（使用系统的版本号）。

```json
{
  "name": "express-locallibrary-tutorial",
  "version": "0.0.0",
  "engines": {
    "node": "8.9.1"
  },
  "private": true,
  ...
```

#### 数据库配置

到目前为止，在本教程中，我们使用了一个硬编码到**app.js**的单个数据库。通常我们希望，能够为生产和开发创建不同的数据库，接下来我们将修改 LocalLibrary 网站，以从 OS 环境获取数据库 URI（如果已定义），否则使用我们的开发数据库。

打开**app.js**，并找到设置 mongoDB 连接变量的行。它看起来像这样：

```js
var mongoDB =
  "mongodb://your_user_id:your_password@ds119748.mlab.com:19748/local_library";
```

使用以下代码替换该行，该代码使用`process.env.MONGODB_URI`从名为`MONGODB_URI`的环境变量中，获取连接字符串（如果已设置）（使用您自己的数据库 URL，而不是下面的占位符。）

```js
var mongoDB =
  process.env.MONGODB_URI ||
  "mongodb://your_user_id:your_password@ds119748.mlab.com:19748/local_library";
```

#### 安装依赖并重新测试

在我们继续之前，让我们再次测试该网站，并确保它不受我们的任何更改的影响。

首先，我们需要获取我们的依赖项（你会记得，我们没有将 **node_modules**文件夹，复制到我们的 git 树中）。您可以通过在项目根目录的终端中，运行以下命令来执行此操作：

```bash
npm install
```

现在运行该站点（请参阅[测试路由](/zh-CN/docs/Learn/Server-side/Express_Nodejs/routes#Testing_the_routes)的相关命令），并检查该站点，是否仍按预期运行。

#### 将更改保存到 Github

接下来，让我们将所有更改保存到 Github。在终端中（在我们的存储库中），输入以下命令：

```bash
git add -A
git commit -m "Added files and changes required for deployment to heroku"
git push origin master
```

我们现在应该准备开始在 Heroku 上，部署 LocalLibrary。

### 获取一个 Heroku 账户

要开始使用 Heroku，您首先需要创建一个帐户（如果您已经拥有一个帐户，并安装了 Heroku 客户端，请跳过创建并上传网站）：

- 访问 [www.heroku.com](https://www.heroku.com/) ，并单击免费注册按钮 **SIGN UP FOR FREE** 。
- 输入您的详细信息，然后按**CREATE FREE ACCOUNT**。系统会要求您，检查帐户中是否有注册电子邮件。
- 单击注册电子邮件中的帐户激活链接。您将在网络浏览器上收回您的帐户。
- 输入您的密码，然后单击 **SET PASSWORD AND LOGIN**.
- 然后，您将登录并进入 Heroku 仪表板：<https://dashboard.heroku.com/apps>.

### 安装客户端

按照 [Heroku 上的说明](https://devcenter.heroku.com/articles/getting-started-with-python#set-up)，下载并安装 Heroku 客户端。

安装客户端后，您将能够运行命令。例如，要获得客户端的帮助说明：

```bash
heroku help
```

### 创建并上传网站

要创建应用程序，我们在存储库的根目录中，运行“create”命令。这将在我们的本地 git 环境中，创建一个名为 heroku 的 git remote（“指向远程存储库的指针”）。

```bash
heroku create
```

> **备注：** 如果您愿意，可以在“创建”create 之后指定远程存储库的命名。如果你不这样做，你会得到一个随机的名字。该名称用于默认 URL。

然后，我们可以将我们的应用程序，推送到 Heroku 存储库，如下所示。这将上传应用程序，获取所有依赖项，将其打包到 dyno 中，然后启动该站点。

```bash
git push heroku master
```

如果我们很幸运，该应用程序现在正在网站上“运行”。要打开浏览器并运行新网站，请使用以下命令：

```bash
heroku open
```

> **备注：** 该站点将使用我们的开发数据库运行。创建一些书本和其他对象，并检查该网站是否按预期运行。在下一节中，我们将其设置为使用我们的新数据库。

### 设定配置变量

您将从前一节回忆起，我们需要将 NODE_ENV 设置为'production'，以便提高性能，并生成更简洁的错误消息。我们通过输入以下命令，来完成此操作：

```bash
>heroku config:set NODE_ENV='production'
Setting NODE_ENV and restarting limitless-tor-18923... done, v13
NODE_ENV: production
```

我们还应该使用单独的数据库进行生产，在**MONGODB_URI**环境变量中，设置其 URI。您可以完全按照[我们原来的方式](/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose#Setting_up_the_MongoDB_database)，设置新数据库和数据库用户，并获取其 URI。您可以如下图所示设置 URI（显然，要使用您自己的 URI！）

```bash
>heroku config:set MONGODB_URI='mongodb://your_user:your_password@ds139278.mlab.com:39278/local_library_production'
Setting MONGODB_URI and restarting limitless-tor-18923... done, v13
MONGODB_URI: mongodb://your_user:your_password@ds139278.mlab.com:39278/local_library_production
```

您可以使用`heroku config`命令，随时检查配置变量 - 立即尝试：

```bash
>heroku config
=== limitless-tor-18923 Config Vars
MONGODB_URI: mongodb://your_user:your_password@ds139278.mlab.com:39278/local_library_production
NODE_ENV:    production
```

Heroku 会在更新变量时，重新启动应用程序。如果您现在检查主页，它应该显示对象计数的零值，因为上面的更改，意味着我们现在正在使用新的（空）数据库。

### 管理附加组件

Heroku 使用独立的附加组件，为应用程序提供支持服务 - 例如电子邮件或数据库服务。我们不在本网站中使用任何插件，但它们是使用 Heroku 的重要部分，因此您可能需要查看主题[管理插件](https://devcenter.heroku.com/articles/managing-add-ons)（Heroku docs）。

### 调试

Heroku 客户端提供了一些调试工具：

```bash
heroku logs  # Show current logs
heroku logs --tail # Show current logs and keep updating with any new results
heroku ps   #Display dyno status
```

## 总结

本教程介绍在生产环境中，如何配置 Express 应用。是 Express 系列教程的最后一个。我们希望你觉得这些教程有用。你可以在[Github 上取得完整的源码](https://github.com/mdn/express-locallibrary-tutorial)。

## 相关链接

- [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html) (Express docs)
- [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html) (Express docs)
- Heroku

  - [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) (Heroku docs)
  - [Deploying Node.js Applications on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (Heroku docs)
  - [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support) (Heroku docs)
  - [Optimizing Node.js Application Concurrency](https://devcenter.heroku.com/articles/node-concurrency) (Heroku docs)
  - [How Heroku works](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku docs)
  - [Dynos and the Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku docs)
  - [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars) (Heroku docs)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku docs)

- Digital Ocean

  - [Express](https://www.digitalocean.com/community/tutorials?q=express) tutorials
  - [Node.js](https://www.digitalocean.com/community/tutorials?q=node.js) tutorials

{{PreviousMenu("Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}

---
title: "Django 教程 11: 部署 Django 到生产环境"
slug: Learn/Server-side/Django/Deployment
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

现在，您已经创建（并测试）了一个令人敬畏的[LocalLibrary](/zh-CN/docs/Learn/Server-side/Django/Tutorial_local_library_website)网站，如果您希望将其安装在公共 Web 服务器上，以便图书馆工作人员和成员可以通过 Internet 访问它。本文概述了如何找到主机来部署您的网站，以及您需要做什么才能让您的网站准备好生产。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row"><strong>先决条件</strong>：</th>
      <td>
        完成所有先前的教程，包括：
        <p>
          <a href="/zh-CN/docs/Learn/Server-side/Django/Testing"
            >在线教学 10：测试 Django 的 Web 应用</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><strong>目的</strong>：</th>
      <td>了解您可以在何处以及如何将 Django 应用程序部署到生产环境。</td>
    </tr>
  </tbody>
</table>

## 概述

一旦您的网站完成（或完成“足够”开始公开测试），您将需要将其托管在比您的个人开发计算机更公开和可访问的地方。

到目前为止，您一直在开发环境中工作，使用 Django 开发 Web 服务器将您的站点共享到本地浏览器/网络，并使用暴露调试和其他私人信息的（不安全）开发设置运行您的网站。在您可以从外部托管网站之前，您首先必须：

- 对你的项目设置 (project settings) 做一定的修改
- 选择一个用来托管 Django app 的环境
- 选择一个用来托管所有静态文件的环境
- 设置一个产品级的设施来为你的网站服务

本教程为您选择托管站点提供了一些指导，简要概述了为了让您的 Django 应用程序可用于生产需要做什么以及如何将 LocalLibrary 网站安装到[Heroku](https://www.heroku.com/)云托管上服务。

## 什么是生产环境？

生产环境是一个由服务器电脑提供的环境，你将在这里运行你的网站，为外部使用提供服务。生产环境包括：

- 网站运行所需要的电脑硬件
- 操作系统 (例如 Linux, Windows).
- 编程语言运行库和框架库，在其上编写您的网站。
- 用于提供页面和其他内容的 Web 服务器（例如 Nginx，Apache）。
- 在 Django 网站和 Web 服务器之间，传递“动态”请求的应用程序服务器。
- 您的网站所依赖的数据库。

> **备注：** 根据您的生产配置方式，您可能还有反向代理，负载均衡器等。

服务器计算机可以位于您的场所，并通过快速链接连接到 Internet，但使用托管“在云中”的计算机更为常见。这实际上意味着，您的代码在托管公司的数据中心的某台远程计算机（或可能是“虚拟”计算机）上运行。远程服务器通常会以特定价格，提供一些保证级别的计算资源（例如 CPU，RAM，存储器等）和互联网连接。

这种可远程访问的计算/网络硬件，称为基础架构即服务（IaaS）。许多 IaaS 供应商，提供预安装特定操作系统的选项，您必须在其上安装生产环境的其他组件。其他供应商允许您选择功能更全面的环境，可能包括完整的 Django，和 Web 服务器设置。

> **备注：** 预构建环境可以使您的网站设置变得非常简单，因为它们会减少配置，但可用选项可能会限制您使用不熟悉的服务器（或其他组件），并且可能基于较旧版本的操作系统。通常最好自己安装组件，以便获得所需的组件，当您需要升级系统的某些部分时，您就知道从哪里开始！

其他托管服务提供商，支持 Django 作为平台即服务（PaaS）产品的一部分。在这种托管中，您不必担心大多数生产环境（Web 服务器，应用程序服务器，负载平衡器），因为主机平台会为您处理这些（以及为了扩展您的应用程序，而需要做的大部分工作）。这使得部署非常简单，因为您只需要专注于 Web 应用程序，而不是所有其他服务器的基础结构。

相对于 PaaS，一些开发人员会选择 IaaS 所提供的更高灵活性，而其他开发人员，则欣赏 PaaS 降低的维护开销，和更轻松地扩展。当您开始使用时，在 PaaS 系统上设置您的网站，要容易得多，因此我们将在本教程中这么做。

> **备注：** 如果您选择一个 Python/Django 友好的托管服务提供商，他们应该提供有关如何使用不同配置的网络服务器，应用服务器，反向代理等设置 Django 网站的说明（如果您选择 PaaS，这就没有关系了）。例如，[Digital Ocean Django 社区文档](https://www.digitalocean.com/community/tutorials?q=django) 中的各种配置，有许多手把手指南。

## 选择托管服务提供商

已知有超过 100 个托管服务提供商，积极支持或与 Django 合作（您可以在 [Djangofriendly hosts](http://djangofriendly.com/hosts/) 主机上，找到相当广泛的列表）。这些供应商提供不同类型的环境（IaaS，PaaS），以及不同价格、不同级别的计算和网络资源。

选择主机时需要考虑的一些事项：

- 您的网站可能有多忙，以及满足该需求，所需的数据和计算资源的成本。
- 水平扩展（添加更多机器）和垂直扩展（升级到更强大的机器）的支持级别，以及这样做的成本。
- 供应商的数据中心位于何处，因此访问可能是最快的。
- 主机的历史正常运行时间，和停机时间的表现。
- 用于管理站点的工具 - 易于使用且安全（例如 SFTP 相比于 FTP）。
- 用于监控服务器的内置框架。
- 已知限制。有些主机会故意阻止某些服务（例如电子邮件）。其他在某些价格层中，仅提供一定时数的“实时时间”，或者仅提供少量存储空间。
- 额外的好处。一些提供商将提供免费域名和 SSL 证书支持，否则您将不得不为此支付费用。
- 您所依赖的“免费”等级，是否会随着时间的推移而过期，以及迁移到更昂贵等级的成本，是否意味着，您最好一开始就使用其他服务！

当你刚开始时，好消息是，有很多网站提供了“免费”的“评估”、“开发者”或“爱好者”计算环境。这些始终是资源相当受限/有限的环境，您需要注意，它们可能会在广告期限后过期。然而，它们非常适合在真实环境中，测试低流量站点，并且可以在您的站点变得更加繁忙时，付费取得更多资源，并轻松迁移。此类别中的热门选择包括[Heroku](https://www.heroku.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/) 等。

许多提供商还有“基本”层，可提供更多有用的计算能力和更少的限制。[Digital Ocean](https://www.digitalocean.com/) 和 [Python Anywhere](https://www.pythonanywhere.com/) ，就是流行的托管服务提供商的例子，提供相对便宜的基本计算等级（每月 5 美元到 10 美元不等）。

> **备注：** 请记住，价格不是唯一的选择标准。如果您的网站成功，可能会发现，可扩展性是最重要的考虑因素。

## 让您的网站准备好发布

使用 django-admin 和 manage.py 工具创建的 Django 骨架网站，是为了使开发更容易而配置的。出于安全性或性能原因，许多 Django 项目设置（在**settings.py**中指定），在生产应该是不同的。

> **备注：** 通常有一个单独的 **settings.py** 文件用于生产环境，并从单独的文件或环境变量，导入敏感设置。即使其他源代码在公共存储库中可用，也应保护此文件。

您必须检查的关键设置是：

- `DEBUG`. 这应该在生产环境中设置为 `False`（`DEBUG = False`）。这将停止显示敏感/机密调试跟踪和变量信息。
- `SECRET_KEY`. 这是用于 CRSF 保护等的大随机值。重要的是，生产中使用的密钥，不应在源代码管理中、或在生产服务器外部可访问。Django 文档表明，可能最好从环境变量加载，或从仅供服务的文件中读取。

  ```python
  # Read SECRET_KEY from an environment variable
  import os
  SECRET_KEY = os.environ['SECRET_KEY']

  #OR

  #Read secret key from a file
  with open('/etc/secret_key.txt') as f:
      SECRET_KEY = f.read().strip()
  ```

让我们更改 LocalLibrary 应用程序，以便我们从环境变量中，读取`SECRET_KEY` 和 `DEBUG`变量（如果已定义），否则使用配置文件中的默认值。

打开 **/locallibrary/settings.py**，禁用原始的`SECRET_KEY`配置，并加入如下以**粗体**显示的几行。在开发过程中，不会为密钥指定环境变量，因此将使用默认值（在此处使用的密钥，或密钥“泄漏”无关紧要，因为您不会在生产环境中使用它）。

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag')
```

然后注释掉现有的`DEBUG`设置，并如下所示，添加新的一行。

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = bool( os.environ.get('DJANGO_DEBUG', True) )
```

默认情况下，`DEBUG`的值为`True`，但如果`DJANGO_DEBUG`环境变量的值，设置为空字符串，则为`False`，例如，`DJANGO_DEBUG=''`。

> **备注：** 如果我们可以直接将`DJANGO_DEBUG`环境变量设置为`True`或`False`，而不是分别使用“any string”或“empty string”，那将更直观。不幸的是，环境变量值存储为 Python 字符串，计算结果为 `False` 的唯一字符串，是空字符串（例如`bool('')==False`）。

[部署清单（Django 文档）](https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/)中，提供了您可能要更改的完整设置清单。您还可以使用下面的终端命令，列出其中的一些：

```python
python3 manage.py check --deploy
```

## 示例：在 Heroku 上安装 LocalLibrary

本节提供了如何在 [Heroku PaaS cloud](http://heroku.com) 云上安装 LocalLibrary 的实际演示。

### 为何选择 Heroku？

Heroku 是运行时间最长，且最受欢迎的基于云的 PaaS 服务之一。它最初只支持 Ruby 应用程序，但现在可用于托管来自许多编程环境的应用程序，包括 Django！

我们选择使用 Heroku 有以下几个原因：

- Heroku 有一个真正免费的免费套餐[free tier](https://www.heroku.com/pricing) （尽管有一些限制）。
- 作为 PaaS，Heroku 为我们提供了大量的 Web 基础架构。这使得入门更加容易，因为您不必担心 Heroku 为我们提供的服务器，负载平衡器，反向代理或任何其他 Web 基础结构。
- 虽然它确实有一些限制，但这些不会影响本教程的应用程序。例如：

  - Heroku 只提供短期储存，因此用户上传的文件无法安全地存储在 Heroku 本身。
  - 如果半小时内没有请求，免费套餐将使不活动的网络应用程序进入睡眠。然后，该网站可能需要几秒钟才能被唤醒。
  - 免费套餐将您网站运行的时间，限制为每月一定的小时数（不包括网站“睡着”的时间）。这对于低使用/演示站点来说很好，但如果需要 100％的正常运行时间则不适用。
  - 在 [Limits](https://devcenter.heroku.com/articles/limits) (Heroku 文档) 中列出了其他限制。

- 大多数情况下它只是能工作，如果你最终喜欢它，扩展你的应用程序非常容易。

虽然 Heroku 非常适合用于此演示，但它可能并不适合您的真实网站。Heroku 可以轻松设置和扩展，但代价是灵活性较低，而且一旦退 出免费套餐，可能会花费更多。

### Heroku 是如何工作的？

Heroku 在一个或多个“[Dynos](https://devcenter.heroku.com/articles/dynos)”中，运行 Django 网站，这是一个独立的虚拟化 Unix 容器，提供运行应用程序所需的环境。[Dynos](https://devcenter.heroku.com/articles/dynos) 是完全隔离的，并且有一个短暂的文件系统（一个短暂的文件系统，每次 dyno 重新启动时，都会清理/清空）。Dynos 默认共享的唯一内容，是应用程序配置变量。Heroku 内部使用负载均衡器，将 Web 流量分配给所有“web”dynos。由于他们之间没有任何共享，Heroku 可以通过添加更多 dynos，来水平扩展应用程序（当然，您可能还需要扩展数据库，以接受其他连接）。

由于文件系统是暂时的，因此无法直接安装应用程序所需的服务（例如数据库，队列，缓存系统，存储，电子邮件服务等）。取代的是，Heroku Web 应用程序，使用 Heroku 或第三方作为独立“附加组件”提供的支持服务。一旦连接到 Web 应用程序，dynos 就会使用应用程序配置变量中包含的信息，来访问服务。

为了执行您的应用程序，Heroku 需要能够设置适当的环境，和依赖关系，并了解它是如何启动的。对于 Django 应用程序而言，我们在一些文本文件中提供此信息：

- **runtime.txt**：要使用的编程语言和版本。
- **requirements.txt**: Python 组件依赖项，包括 Django。
- **Procfile**: 启动 Web 应用程序要执行的进程列表。对于 Django，这通常是 Gunicorn Web 应用程序服务器（带有 `.wsgi` 脚本）。
- **wsgi.py**: 在 Heroku 环境中，调用我们的 Django 应用程序的 [WSGI](http://wsgi.readthedocs.io/en/latest/what.html) 配置。

开发人员使用特殊的客户端应用程序/终端与 Heroku 交互，这很像 Unix bash 脚本。这允许您上传存在 git 储存库中的代码，检查正在运行的进程，查看日志，设置配置变量等等！

为了让我们的应用程序在 Heroku 上工作，我们需要将我们的 Django Web 应用程序，放入 git 储存库，添加上面的文件，集成数据库附加组件，并进行更改，以正确处理静态文件。

完成所有操作后，我们可以设置 Heroku 帐户，获取 Heroku 客户端，并使用它来安装我们的网站。

> **备注：** 以下说明反映了在撰写本书时，如何使用 Heroku。如果 Heroku 显着改变了他们的操作过程，您可能希望检查他们的设置文档：[在 Heroku 上开始使用 Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction)。

就是您一开始所需的所有概述（请参阅 [Heroku 如何工作](https://devcenter.heroku.com/articles/how-heroku-works)，以获取更全面的指南）。

### 在 Github 中创建应用程序储存库

Heroku 与 **git** 源代码版本控制系统紧密集成，使用它来上传/同步您对实时系统所做的任何更改。它通过添加一个名为 heroku 的新的 heroku“远程”储存库，来指向 Heroku 云上的源储存库。在开发期间，您使用 git 在“主”储存库中储存更改。如果要部署站点，请将更改同步到 Heroku 储存库。

> **备注：** 如果您习惯于遵循良好的软件开发实践，那么您可能已经在使用 git，或其他一些 SCM 系统。如果您已有 git 储存库，则可以跳过此步骤。

有很多方法可以使用 git，但最简单的方法之一，是首先在 [Github](https://github.com/) 上建立一个帐户，在那里创建储存库，然后将它同步到本地：

1. 访问 <https://github.com/> 并创建一个帐户。
2. 登录后，点击顶部工具栏中的 + 链接，然后选择新建储存库 **New repository**。
3. 填写此表单上的所有字段。虽然这些不是强制性的，但强烈建议使用它们。

   - 输入新的储存库名称（例如 django_local_library）和描述（例如“用 Django 编写的本地图书馆网站”）。
   - 在 Add .gitignore 选择列表中，选择 **Python**。
   - 在添加许可证选择列表中，选择您想要的许可证。
   - 选中使用自述文件初始化此储存库（**Initialize this repository with a README）**。

4. 点击 **Create repository**.
5. 点击新仓库页面上的绿色“克隆或下载”（**Clone or download**）按钮。
6. 从显示的对话框中的文本字段中复制 URL 值（它应该类似于： `https://github.com/<your_git_user_id>/django_local_library.git`）。

现在创建了储存库（“repo”），我们将要在本地计算机上克隆它：

1. 为您的本地计算机安装 git（您可以在[此处](https://git-scm.com/downloads)找到不同平台的版本）。
2. 打开命令提示符/终端，并使用您在上面复制的 URL 克隆储存库：

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   这将在当前目录下方创建储存库。

3. 切换目录，到新的仓库。

   ```bash
   cd django_local_library
   ```

最后一步是复制你的应用程序，然后使用 git，将文件添加到你的仓库：

1. 将您的 Django 应用程序，复制到此文件夹（与 **manage.py** 级别相同的、和以下级别的所有文件，而**不是**包含 locallibrary 文件夹的文件）。
2. 打开 **.gitignore** 文件，将以下几行复制到其底部，然后保存（此文件用于标识默认情况下，不应上传到 git 的文件）。

   ```
   # Text backup files
   *.bak

   #Database
   *.sqlite3
   ```

3. 打开命令提示符/终端，并使用`add`命令，将所有文件添加到 git。

   ```bash
   git add -A
   ```

4. 使用 status 命令，检查要添加的所有文件是否正确（您希望包含源文件，而不是二进制文件，临时文件等）。它应该看起来有点像下面的列表。

   ```
   > git status
   On branch master
   Your branch is up-to-date with 'origin/master'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
           new file:   catalog/__init__.py
           ...
           new file:   catalog/migrations/0001_initial.py
           ...
           new file:   templates/registration/password_reset_form.html
   ```

5. 如果您满意，请将文件提交到本地储存库：

   ```bash
   git commit -m "First version of application moved into github"
   ```

6. 然后使用以下内容，将本地储存库同步到 Github 网站：

   ```bash
   git push origin master
   ```

完成此操作后，您应该可以返回创建储存库的 Github 上的页面，刷新页面，并看到您的整个应用程序已经上传。使用此添加/提交/推送循环，您可以在文件更改时，继续更新储存库。

> **备注：** 这是备份您的“vanilla”项目的一个好时机 - 虽然我们将在以下部分中，进行的一些更改，可能对有些人在任何平台（或开发）上的部署有用，对其他人可能没有用。
>
> 执行此操作的最佳方法，是使用 git 来管理您的修订。使用 git，您不仅可以回到特定的旧版本，而且可以在生产变更的单独“分支”中进行维护，并选择在生产和开发分支之间移动的任何更改。[学习 Git](https://help.github.com/articles/good-resources-for-learning-git-and-github/) 非常值得，但超出了本主题的范围。
>
> 最简单的方法是将文件复制到另一个位置。使用最符合您对 git 了解的方法！

### 更新 Heroku 的应用程序

本节介绍了您需要对 LocalLibrary 应用程序进行的更改，以使其在 Heroku 上运行。虽然 Heroku 的[在 Heroku 使用 Django 入门教程](https://devcenter.heroku.com/articles/getting-started-with-python#introduction)，假设您将使用 Heroku 客户端，来运行您的本地开发环境，但我们的更改，与现有的 Django 开发服务器，以及我们已经学习的工作方式兼容。

#### Procfile

在 GitHub 储存库的根目录中，创建文件`Procfile`（无扩展名），以声明应用程序的进程类型和入口点。将以下文本复制到其中：

```
web: gunicorn locallibrary.wsgi --log-file -
```

“`web:`”告诉 Heroku，这是一个 web dyno，可以发送 HTTP 流量。在这个 dyno 中启动的进程，是 gunicorn，这是 Heruko 推荐的一种流行的 Web 应用程序服务器。我们使用模块 `locallibrary.wsgi`（使用我们的应用程序框架创建：**/locallibrary/wsgi.py** ）中的配置信息启动 Gunicorn。

#### Gunicorn

[Gunicorn](http://gunicorn.org/) 是推荐的 HTTP 服务器，用于 Heroku 上的 Django（如上面的 Procfile 中所述）。它是一个用于 WSGI 应用程序的纯 Python HTTP 服务器，可以在一个 dyno 中，运行多个 Python 并发进程（有关更多信息，请参阅[使用 Gunicorn 部署 Python 应用程序](https://devcenter.heroku.com/articles/python-gunicorn)）。

虽然在开发期间，我们不需要 Gunicorn 为我们的 LocalLibrary 应用程序提供服务，但我们将安装它，以便它成为我们在远程服务器上设置 Heroku 的 [requirements](#requirements) 的一部分。

使用 pip（我们在[设置开发环境](/zh-CN/docs/Learn/Server-side/Django/development_environment)时安装）在命令行上，将 Gunicorn 安装到本地：

```bash
pip3 install gunicorn
```

#### 数据库配置

我们不能在 Heroku 上使用默认的 SQLite 数据库，因为它是基于文件的，并且每次应用程序重新启动时，都会从暂时的文件系统中删除它（通常每天一次，每次应用程序或其配置变量被更改时）。

处理这种情况的 Heroku 机制，是使用[数据库加载项](https://elements.heroku.com/addons#data-stores)，并使用来自加载项设置的环境[配置变量](https://devcenter.heroku.com/articles/config-vars)的信息，来配置 Web 应用程序。有很多数据库选项，但我们将使用 Heroku postgres 数据库的[爱好者等级](https://devcenter.heroku.com/articles/heroku-postgres-plans#plan-tiers)，因为它是免费的，被 Django 所支持，并在使用免费的爱好者 dyno 计划等级时，会自动添加到新的 Heroku 应用程序。

使用名为`DATABASE_URL`的配置变量，将数据库连接信息提供给 Web dyno。Heroku 建议开发人员使用 [dj-database-url](https://warehouse.python.org/project/dj-database-url/) 套件包，以解析`DATABASE_URL`环境变量，并自动将其转换为 Django 所需的配置格式，而不是将此信息硬编码到 Django 中。除了安装 dj-database-url 套件包之外，我们还需要安装[psycopg2](http://initd.org/psycopg/)，因为 Django 需要它与 Postgres 数据库进行交互。

##### dj-database-url (Django database configuration from environment variable)

在本地安装 dj-database-url，使其成为我们在远程服务器上设置 Heroku 的 [requirements](#requirements) 的一部分：

```bash
pip3 install dj-database-url
```

##### settings.py

打开 **/locallibrary/settings.py**，并将以下配置复制到文件的底部：

```python
# Heroku: Update database configuration from $DATABASE_URL.
import dj_database_url
db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)
```

> **备注：**
>
> - 我们仍然会在开发期间使用 SQLite，因为我们的开发计算机上不会设置`DATABASE_URL`环境变量。
> - `conn_max_age=500`的值使连接持久，这比在每个请求周期重新创建连接更有效。但是，这是可选的，如果需要可以删除。

##### psycopg2 (Python Postgres database support)

Django 需要 psycopg2 来处理 Postgres 数据库，你需要将它添加到[requirements.txt](#requirements) 中，以便 Heroku 在远程服务器上进行设置（如下面的 requirements 部分所述）。

Django 默认会在本地使用我们的 SQLite 数据库，因为我们的本地环境中，没有设置`DATABASE_URL`环境变量。如果您想完全切换到 Postgres，并使用我们的 Heroku 免费等级数据库，进行开发和生产，那么您可以这么做。例如，要在基于 Linux 的系统上，本地安装 psycopg2 及其依赖项，您将使用以下 bash / terminal 命令：

```bash
sudo apt-get install python-pip python-dev libpq-dev postgresql postgresql-contrib
pip3 install psycopg2
```

有关其他平台的安装说明，请访问 [psycopg2](http://initd.org/psycopg/docs/install.html) 网站。

但是，您不需要这样做 - 您不需要在本地计算机上激活 PostGreSQL，只要将其作为要求（requirement）提供给 Heroku，请参阅`requirements.txt`（见下文）。

#### 在生产环境中提供静态文件

在开发过程中，我们使用 Django 和 Django 开发 Web 服务器，来提供静态文件（CSS，JavaScript 等）。在生产环境中，我们通常提供来自内容传送网络（CDN）或 Web 服务器的静态文件。

> **备注：** 通过 Django/web 应用程序提供静态文件是低效的，因为请求必须通过不必要的附加代码（Django），而不是由 Web 服务器或完全独立的 CDN 直接处理。虽然这对于开发期间的本地使用无关紧要，但如果我们在生产环境中使用相同的方法，则会对性能产生重大影响。

为了便于将静态文件与 Django Web 应用程序分开托管，Django 提供了 collectstatic 工具，来收集这些文件以进行部署（有一个设置变量，用于定义在运行 collectstatic 时，应该收集文件的位置）。Django 模板是指相对于设置变量（`STATIC_URL`）的静态文件的托管位置，因此如果将静态文件移动到另一个主机/服务器，则可以更改此位置。

相关的设置变量是：

- `STATIC_URL`: 这是将提供静态文件的基本 URL 位置，例如，在 CDN 上。这用于在我们的基本模板中访问的静态模板变量（请参阅 [Django 教程 5：创建我们的主页](/zh-CN/docs/Learn/Server-side/Django/Home_page)）。
- `STATIC_ROOT`: 这是 Django 的“collectstatic”工具将收集模板中引用的任何静态文件的目录的绝对路径。收集完成后，可以将这些文件，作为一个组上载到托管文件的任何位置。
- `STATICFILES_DIRS`: 这列出了 Django 的 collectstatic 工具应该搜索静态文件的其他目录。

##### settings.py

打开 **/locallibrary/settings.py**，并将以下配置，复制到文件的底部。 `BASE_DIR` 应该已经在您的文件中定义了（`STATIC_URL`可能已经在文件创建时已经定义。虽然它不会造成任何伤害，但您也可以删除重复的先前引用）。

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

我们实际上，将使用名为 [WhiteNoise](https://warehouse.python.org/project/whitenoise/) 的库来提供文件，我们将在下一节中安装和配置。

有关更多信息，请参阅 [Django 和静态资产](https://devcenter.heroku.com/articles/django-assets)（Heroku 文档）。

Whitenoise

有许多方法可以在生产环境中提供静态文件（我们在前面的部分中看到了相关的 Django 设置）。Heroku 建议在生产环境中使用 [WhiteNoise](https://warehouse.python.org/project/whitenoise/) 项目，直接从 Gunicorn 提供静态资产。

> **备注：** Heroku 会在上传您的应用程序后，自动调用 collectstatic 并准备静态文件，以供 WhiteNoise 使用。查看 [WhiteNoise](https://warehouse.python.org/project/whitenoise/) 文档，了解其工作原理以及实现，为什么是提供这些文件的相对有效方法。

设置 WhiteNoise 以便在项目中使用的步骤如下：

##### WhiteNoise

使用以下命令在本地安装 whitenoise：

```bash
pip3 install whitenoise
```

##### settings.py

要将 WhiteNoise 安装到您的 Django 应用程序中，请打开 **/locallibrary/settings.py**，找到`MIDDLEWARE`设置，并在`SecurityMiddleware`正下方的列表顶部附近，添加`WhiteNoiseMiddleware`：

```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

这是可选的，您可以在提供静态文件时，减小它们的大小（这样更有效）。只需将以下内容添加到 **/locallibrary/settings.py** 的底部：

```python
# Simplified static file serving.
# https://warehouse.python.org/project/whitenoise/
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
```

#### Requirements

Web 应用程序的 Python requirements，必须放在储存库根目录中的文件 **requirements.txt** 中。然后 Heroku 将在重建您的环境时，自动安装它们。您可以在命令行上，使用 pip 创建此文件（在 repo 根目录中，运行以下命令）：

```bash
pip3 freeze > requirements.txt
```

安装上面所有不同的依赖项后，您的 **requirements.txt** 文件，应至少列出这些项目（尽管版本号可能不同）。请删除下面未列出的任何其他依赖项，除非您已为此应用程序明确添加它们。

```
dj-database-url==0.4.1
Django==2.0
gunicorn==19.6.0
psycopg2==2.6.2
whitenoise==3.2.2
```

> **备注：** 确保存在类似上面的 **psycopg2** 的那一行！即使你没有在本地安装它，你仍然应该将它添加到**requirements.txt**。

#### Runtime

**runtime.txt** 文件（如果已定义）告诉 Heroku 使用哪种编程语言。在 repo 的根目录中，创建文件并添加以下文本：

```
python-3.6.4
```

> **备注：** Heroku 只支持少量的 [Python 运行库](https://devcenter.heroku.com/articles/python-support#supported-python-runtimes)（在编写本文时，包括上面的那个）。Heroku 将使用受支持的运行库，而不管此文件中指定的值。

#### 将更改保存到 Github 并重新测试

接下来，我们将所有更改保存到 Github。在终端（我们的存储库中的 whist）中，输入以下命令：

```python
git add -A
git commit -m "Added files and changes required for deployment to heroku"
git push origin master
```

在我们继续之前，让我们在本地，再次测试网站，并确保它不受上述任何更改的影响。像往常一样运行开发 Web 服务器，然后检查站点，是否仍然按预期在浏览器上运行。

```bash
python3 manage.py runserver
```

我们现在应该准备开始在 Heroku 上部署 LocalLibrary。

### 获取 Heroku 帐户

要开始使用 Heroku，您首先需要创建一个帐户：

- 访问 [www.heroku.com](https://www.heroku.com/) ，并单击免费注册按钮（**SIGN UP FOR FREE）**。
- 输入您的详细信息，然后按 **CREATE FREE ACCOUNT**。系统会要求您，检查帐户中是否有注册电子邮件。
- 单击注册电子邮件中的帐户激活链接。您将在网络浏览器上收回您的帐户。
- 输入您的密码，然后单击 **SET PASSWORD AND LOGIN**。
- 然后，您将登录并进入 Heroku 仪表板： <https://dashboard.heroku.com/apps>.

### 安装客户端

按照 [Heroku 上的说明](https://devcenter.heroku.com/articles/getting-started-with-python#set-up)，下载并安装 Heroku 客户端。

安装客户端后，您将能够运行命令。例如，要获得客户端的帮助：

```bash
heroku help
```

### 创建并上传网站

要创建应用程序，我们在储存库的根目录中，运行“create”命令。这将在我们的本地 git 环境中，创建一个名为 heroku 的 git remote（“指向远程储存库的指标”）。

```bash
heroku create
```

> **备注：** 如果您愿意，可以通过在“创建”之后指定值来命名远程。如果你不这样做，你会得到一个随机的名字。该名称用于默认 URL。

然后我们可以将应用程序，推送到 Heroku 储存库，如下所示。这将上传应用程序，将其打包到 dyno 中，运行 collectstatic，然后启动该站点。

```bash
git push heroku master
```

如果我们很幸运，该应用程序现在在网站上“运行”，但它将无法正常工作，因为我们尚未设置数据库表，以供我们的应用程序使用。为此，我们需要使用 heroku run 命令，并启动“[one off dyno](https://devcenter.heroku.com/articles/deploying-python#one-off-dynos)”来执行迁移操作。在终端中输入以下命令：

```bash
heroku run python manage.py migrate
```

我们还需要能够添加书本和作者，所以我们再次使用一次性 dyno，创建我们的管理超级用户：

```bash
heroku run python manage.py createsuperuser
```

完成后，我们可以查看该网站。它应该有用，虽然它还没有任何书本。要打开浏览器访问新网站，请使用以下命令：

```bash
heroku open
```

在管理站点中创建一些书本，并检查该站点是否按预期运行。

### 管理附加组件（插件）

您可以使用 `heroku addons`命令，查看应用程序的附加组件。这将列出所有附加组件，以及它们的价格等级和状态。

```bash
>heroku addons

Add-on                                     Plan       Price  State
─────────────────────────────────────────  ─────────  ─────  ───────
heroku-postgresql (postgresql-flat-26536)  hobby-dev  free   created
 └─ as DATABASE
```

在这里，我们看到我们只有一个附加组件，即 postgres SQL 数据库。这是免费的，并且是在我们创建应用时，自动创建的。您可以使用以下命令，更详细地打开网页，以检查数据库附加组件（或任何其他附加组件）：

```bash
heroku addons:open heroku-postgresql
```

其他命令允许您创建，销毁，升级和降级附加组件（使用类似的语法打开）。有关更多信息，请参阅[管理附加组件](https://devcenter.heroku.com/articles/managing-add-ons)（Heroku 文档）。

### 设定配置变量

您可以使用 `heroku config`命令，检查站点的配置变量。下面你可以看到，我们只有一个变量，`DATABASE_URL`用于配置我们的数据库。

```bash
>heroku config

=== locallibrary Config Vars
DATABASE_URL: postgres://uzfnbcyxidzgrl:j2jkUFDF6OGGqxkgg7Hk3ilbZI@ec2-54-243-201-144.compute-1.amazonaws.com:5432/dbftm4qgh3kda3
```

如果您回想起来**准备发布网站**的部分，我们必须为`DJANGO_SECRET_KEY` 和 `DJANGO_DEBUG`设置环境变量。我们现在就这样做。

> **备注：** 密钥需要真正的保密！生成新密钥的一种方法，是创建一个新的 Django 项目（`django-admin startproject someprojectname`），然后从 **settings.py** 中，获取为您生成的密钥。

我们使用 `config:set`命令，设置`DJANGO_SECRET_KEY`（如下所示）。记得使用自己的密钥！

```bash
>heroku config:set DJANGO_SECRET_KEY=eu09(ilk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh&=

Setting DJANGO_SECRET_KEY and restarting locallibrary... done, v7
DJANGO_SECRET_KEY: eu09(ilk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh
```

我们以同样的方式设置`DJANGO_DEBUG`：

```bash
>heroku config:set DJANGO_DEBUG=''

Setting DJANGO_DEBUG and restarting locallibrary... done, v8
```

如果您现在访问该站点，您将收到“错误请求”（Bad request）错误，因为如果您有 `DEBUG=False`（作为安全措施），则需要[ALLOWED_HOSTS](https://docs.djangoproject.com/en/2.0/ref/settings/#allowed-hosts) 设置。打开 **/locallibrary/settings.py**，并更改`ALLOWED_HOSTS`设置，以包含您的基本应用程序 URL（例如'locallibrary1234.herokuapp.com'），以及您通常在本地开发服务器上使用的 URL。

```python
ALLOWED_HOSTS = ['<your app URL without the https:// prefix>.herokuapp.com','127.0.0.1']
# For example:
# ALLOWED_HOSTS = ['fathomless-scrubland-30645.herokuapp.com','127.0.0.1']
```

然后保存您的设置，并将它们提交到您的 Github 仓库和 Heroku：

```bash
git add -A
git commit -m 'Update ALLOWED_HOSTS with site and development server URL'
git push origin master
git push heroku master
```

> **备注：** 完成 Heroku 的站点更新后，输入一个不存在的 URL（例如，**/catalog/doesnotexist/**）。以前这会显示一个详细的调试页面，但现在，您应该只看到一个简单的“未找到”页面。

### 除错调试

Heroku 客户端提供了一些调试工具：

```bash
heroku logs  # Show current logs
heroku logs --tail # Show current logs and keep updating with any new results
heroku config:set DEBUG_COLLECTSTATIC=1 # Add additional logging for collectstatic (this tool is run automatically during a build)
heroku ps   #Display dyno status
```

如果您需要比这些更多的信息，您将需要开始研究 [Django Logging](https://docs.djangoproject.com/en/2.0/topics/logging/)。

## 总结

本教程讲述如何在生产环境中配置 Django 应用，也是本系列 Django 教程的结尾。我们希望你觉得教程有用。你可以在 Github 上取得一个完全可工作版本的[源码（用力点击此处）](https://github.com/mdn/django-locallibrary-tutorial)。

下一步是阅读我们此前的一些文章，然后完成评估任务。

## 也可以参考

- [Deploying Django](https://docs.djangoproject.com/en/2.0/howto/deployment/) (Django 文档)

  - [Deployment checklist](https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/) (Django 文档)
  - [Deploying static files](https://docs.djangoproject.com/en/2.0/howto/static-files/deployment/) (Django 文档)
  - [How to deploy with WSGI](https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/) (Django 文档)
  - [How to use Django with Apache and mod_wsgi](https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/modwsgi/) (Django 文档)
  - [How to use Django with Gunicorn](https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/gunicorn/) (Django 文档)

- Heroku

  - [Configuring Django apps for Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku 文档)
  - [Getting Started on Heroku with Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku 文档)
  - [Django and Static Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku 文档)
  - [Concurrency and Database Connections in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku 文档)
  - [How Heroku works](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku 文档)
  - [Dynos and the Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku 文档)
  - [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars) (Heroku 文档)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku 文档)
  - [Deploying Python applications with Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku 文档)
  - [Deploying Python and Django apps on Heroku](https://devcenter.heroku.com/articles/deploying-python) (Heroku 文档)
  - [Other Heroku Django docs](https://devcenter.heroku.com/search?q=django)

- Digital Ocean

  - [How To Serve Django Applications with uWSGI and Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Other Digital Ocean Django community docs](https://www.digitalocean.com/community/tutorials?q=django)

{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

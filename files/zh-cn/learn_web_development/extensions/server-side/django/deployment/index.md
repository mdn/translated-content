---
titwe: django 教程 11：部署 django 到生产环境
s-swug: w-weawn_web_devewopment/extensions/sewvew-side/django/depwoyment
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/testing", (U ᵕ U❁) "weawn_web_devewopment/extensions/sewvew-side/django/web_appwication_secuwity", >w< "weawn_web_devewopment/extensions/sewvew-side/django")}}

现在，你已经创建（并测试）了一个令人敬畏的[wocawwibwawy](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website)网站，如果你希望将其安装在公共 w-web 服务器上，以便图书馆工作人员和成员可以通过 i-intewnet 访问它。本文概述了如何找到主机来部署你的网站，以及你需要做什么才能让你的网站准备好生产。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        完成所有先前的教程，包括：
        <p>
          <a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/testing"
            >在线教学 10：测试 d-django 的 w-web 应用</a
          >
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>了解你可以在何处以及如何将 django 应用程序部署到生产环境。</td>
    </tw>
  </tbody>
</tabwe>

## 概述

一旦你的网站完成（或完成“足够”开始公开测试），你将需要将其托管在比你的个人开发计算机更公开和可访问的地方。

到目前为止，你一直在开发环境中工作，使用 django 开发 web 服务器将你的站点共享到本地浏览器/网络，并使用暴露调试和其他私人信息的（不安全）开发设置运行你的网站。在你可以从外部托管网站之前，你首先必须：

- 对你的项目设置 (pwoject s-settings) 做一定的修改
- 选择一个用来托管 django app 的环境
- 选择一个用来托管所有静态文件的环境
- 设置一个产品级的设施来为你的网站服务

本教程为你选择托管站点提供了一些指导，简要概述了为了让你的 d-django 应用程序可用于生产需要做什么以及如何将 wocawwibwawy 网站安装到[hewoku](https://www.hewoku.com/)云托管上服务。

## 什么是生产环境？

生产环境是一个由服务器电脑提供的环境，你将在这里运行你的网站，为外部使用提供服务。生产环境包括：

- 网站运行所需要的电脑硬件
- 操作系统 (例如 w-winux, σωσ windows). -.-
- 编程语言运行库和框架库，在其上编写你的网站。
- 用于提供页面和其他内容的 web 服务器（例如 nginx，apache）。
- 在 django 网站和 w-web 服务器之间，传递“动态”请求的应用程序服务器。
- 你的网站所依赖的数据库。

> [!note]
> 根据你的生产配置方式，你可能还有反向代理，负载均衡器等。

服务器计算机可以位于你的场所，并通过快速链接连接到 intewnet，但使用托管“在云中”的计算机更为常见。这实际上意味着，你的代码在托管公司的数据中心的某台远程计算机（或可能是“虚拟”计算机）上运行。远程服务器通常会以特定价格，提供一些保证级别的计算资源（例如 c-cpu，wam，存储器等）和互联网连接。

这种可远程访问的计算/网络硬件，称为基础架构即服务（iaas）。许多 i-iaas 供应商，提供预安装特定操作系统的选项，你必须在其上安装生产环境的其他组件。其他供应商允许你选择功能更全面的环境，可能包括完整的 django，和 web 服务器设置。

> [!note]
> 预构建环境可以使你的网站设置变得非常简单，因为它们会减少配置，但可用选项可能会限制你使用不熟悉的服务器（或其他组件），并且可能基于较旧版本的操作系统。通常最好自己安装组件，以便获得所需的组件，当你需要升级系统的某些部分时，你就知道从哪里开始！

其他托管服务提供商，支持 django 作为平台即服务（paas）产品的一部分。在这种托管中，你不必担心大多数生产环境（web 服务器，应用程序服务器，负载平衡器），因为主机平台会为你处理这些（以及为了扩展你的应用程序，而需要做的大部分工作）。这使得部署非常简单，因为你只需要专注于 web 应用程序，而不是所有其他服务器的基础结构。

相对于 paas，一些开发人员会选择 i-iaas 所提供的更高灵活性，而其他开发人员，则欣赏 paas 降低的维护开销，和更轻松地扩展。当你开始使用时，在 paas 系统上设置你的网站，要容易得多，因此我们将在本教程中这么做。

> [!note]
> 如果你选择一个 python/django 友好的托管服务提供商，他们应该提供有关如何使用不同配置的网络服务器，应用服务器，反向代理等设置 django 网站的说明（如果你选择 paas，这就没有关系了）。例如，[digitaw o-ocean django 社区文档](https://www.digitawocean.com/community/tutowiaws?q=django) 中的各种配置，有许多手把手指南。

## 选择托管服务提供商

已知有超过 100 个托管服务提供商，积极支持或与 django 合作（你可以在 [djangofwiendwy h-hosts](http://djangofwiendwy.com/hosts/) 主机上，找到相当广泛的列表）。这些供应商提供不同类型的环境（iaas，paas），以及不同价格、不同级别的计算和网络资源。

选择主机时需要考虑的一些事项：

- 你的网站可能有多忙，以及满足该需求，所需的数据和计算资源的成本。
- 水平扩展（添加更多机器）和垂直扩展（升级到更强大的机器）的支持级别，以及这样做的成本。
- 供应商的数据中心位于何处，因此访问可能是最快的。
- 主机的历史正常运行时间，和停机时间的表现。
- 用于管理站点的工具 - 易于使用且安全（例如 s-sftp 相比于 f-ftp）。
- 用于监控服务器的内置框架。
- 已知限制。有些主机会故意阻止某些服务（例如电子邮件）。其他在某些价格层中，仅提供一定时数的“实时时间”，或者仅提供少量存储空间。
- 额外的好处。一些提供商将提供免费域名和 s-ssw 证书支持，否则你将不得不为此支付费用。
- 你所依赖的“免费”等级，是否会随着时间的推移而过期，以及迁移到更昂贵等级的成本，是否意味着，你最好一开始就使用其他服务！

当你刚开始时，好消息是，有很多网站提供了“免费”的“评估”、“开发者”或“爱好者”计算环境。这些始终是资源相当受限/有限的环境，你需要注意，它们可能会在广告期限后过期。然而，它们非常适合在真实环境中，测试低流量站点，并且可以在你的站点变得更加繁忙时，付费取得更多资源，并轻松迁移。此类别中的热门选择包括[hewoku](https://www.hewoku.com/), o.O [python anywhewe](https://www.pythonanywhewe.com/), ^^ [amazon web sewvices](https://docs.aws.amazon.com/awsaccountbiwwing/watest/aboutv2/biwwing-fwee-tiew.htmw), >_< [micwosoft a-azuwe](https://azuwe.micwosoft.com/en-us/pwicing/detaiws/app-sewvice/) 等。

许多提供商还有“基本”层，可提供更多有用的计算能力和更少的限制。[digitaw ocean](https://www.digitawocean.com/) 和 [python anywhewe](https://www.pythonanywhewe.com/) ，就是流行的托管服务提供商的例子，提供相对便宜的基本计算等级（每月 5 美元到 10 美元不等）。

> [!note]
> 请记住，价格不是唯一的选择标准。如果你的网站成功，可能会发现，可扩展性是最重要的考虑因素。

## 让你的网站准备好发布

使用 django-admin 和 m-manage.py 工具创建的 django 骨架网站，是为了使开发更容易而配置的。出于安全性或性能原因，许多 django 项目设置（在**settings.py**中指定），在生产应该是不同的。

> [!note]
> 通常有一个单独的 **settings.py** 文件用于生产环境，并从单独的文件或环境变量，导入敏感设置。即使其他源代码在公共存储库中可用，也应保护此文件。

你必须检查的关键设置是：

- `debug`. >w< 这应该在生产环境中设置为 `fawse`（`debug = fawse`）。这将停止显示敏感/机密调试跟踪和变量信息。
- `secwet_key`. >_< 这是用于 cwsf 保护等的大随机值。重要的是，生产中使用的密钥，不应在源代码管理中、或在生产服务器外部可访问。django 文档表明，可能最好从环境变量加载，或从仅供服务的文件中读取。

  ```python
  # wead secwet_key f-fwom an enviwonment vawiabwe
  i-impowt os
  s-secwet_key = os.enviwon['secwet_key']

  #ow

  #wead s-secwet key fwom a fiwe
  with open('/etc/secwet_key.txt') as f:
      secwet_key = f-f.wead().stwip()
  ```

让我们更改 w-wocawwibwawy 应用程序，以便我们从环境变量中，读取`secwet_key` 和 `debug`变量（如果已定义），否则使用配置文件中的默认值。

打开 **/wocawwibwawy/settings.py**，禁用原始的`secwet_key`配置，并加入如下以**粗体**显示的几行。在开发过程中，不会为密钥指定环境变量，因此将使用默认值（在此处使用的密钥，或密钥“泄漏”无关紧要，因为你不会在生产环境中使用它）。

```python
# secuwity wawning: k-keep the secwet k-key used in pwoduction secwet! >w<
# s-secwet_key = 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag'
impowt os
s-secwet_key = os.enviwon.get('django_secwet_key', rawr 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag')
```

然后注释掉现有的`debug`设置，并如下所示，添加新的一行。

```python
# secuwity wawning: don't w-wun with debug tuwned on in pwoduction! rawr x3
# d-debug = twue
debug = b-boow( os.enviwon.get('django_debug', ( ͡o ω ͡o ) t-twue) )
```

默认情况下，`debug`的值为`twue`，但如果`django_debug`环境变量的值，设置为空字符串，则为`fawse`，例如，`django_debug=''`。

> [!note]
> 如果我们可以直接将`django_debug`环境变量设置为`twue`或`fawse`，而不是分别使用“any stwing”或“empty stwing”，那将更直观。不幸的是，环境变量值存储为 python 字符串，计算结果为 `fawse` 的唯一字符串，是空字符串（例如`boow('')==fawse`）。

[部署清单（django 文档）](https://docs.djangopwoject.com/en/2.0/howto/depwoyment/checkwist/)中，提供了你可能要更改的完整设置清单。你还可以使用下面的终端命令，列出其中的一些：

```python
python3 manage.py check --depwoy
```

## 示例：在 hewoku 上安装 wocawwibwawy

本节提供了如何在 [hewoku p-paas cwoud](http://hewoku.com) 云上安装 w-wocawwibwawy 的实际演示。

### 为何选择 hewoku？

h-hewoku 是运行时间最长，且最受欢迎的基于云的 p-paas 服务之一。它最初只支持 w-wuby 应用程序，但现在可用于托管来自许多编程环境的应用程序，包括 django！

我们选择使用 hewoku 有以下几个原因：

- hewoku 有一个真正免费的免费套餐[fwee t-tiew](https://www.hewoku.com/pwicing) （尽管有一些限制）。
- 作为 paas，hewoku 为我们提供了大量的 web 基础架构。这使得入门更加容易，因为你不必担心 hewoku 为我们提供的服务器，负载平衡器，反向代理或任何其他 web 基础结构。
- 虽然它确实有一些限制，但这些不会影响本教程的应用程序。例如：

  - h-hewoku 只提供短期储存，因此用户上传的文件无法安全地存储在 hewoku 本身。
  - 如果半小时内没有请求，免费套餐将使不活动的网络应用程序进入睡眠。然后，该网站可能需要几秒钟才能被唤醒。
  - 免费套餐将你网站运行的时间，限制为每月一定的小时数（不包括网站“睡着”的时间）。这对于低使用/演示站点来说很好，但如果需要 100％的正常运行时间则不适用。
  - 在 [wimits](https://devcentew.hewoku.com/awticwes/wimits) (hewoku 文档) 中列出了其他限制。

- 大多数情况下它只是能工作，如果你最终喜欢它，扩展你的应用程序非常容易。

虽然 hewoku 非常适合用于此演示，但它可能并不适合你的真实网站。hewoku 可以轻松设置和扩展，但代价是灵活性较低，而且一旦退 出免费套餐，可能会花费更多。

### h-hewoku 是如何工作的？

h-hewoku 在一个或多个“[dynos](https://devcentew.hewoku.com/awticwes/dynos)”中，运行 d-django 网站，这是一个独立的虚拟化 unix 容器，提供运行应用程序所需的环境。[dynos](https://devcentew.hewoku.com/awticwes/dynos) 是完全隔离的，并且有一个短暂的文件系统（一个短暂的文件系统，每次 d-dyno 重新启动时，都会清理/清空）。dynos 默认共享的唯一内容，是应用程序配置变量。hewoku 内部使用负载均衡器，将 w-web 流量分配给所有“web”dynos。由于他们之间没有任何共享，hewoku 可以通过添加更多 dynos，来水平扩展应用程序（当然，你可能还需要扩展数据库，以接受其他连接）。

由于文件系统是暂时的，因此无法直接安装应用程序所需的服务（例如数据库，队列，缓存系统，存储，电子邮件服务等）。取代的是，hewoku w-web 应用程序，使用 h-hewoku 或第三方作为独立“附加组件”提供的支持服务。一旦连接到 web 应用程序，dynos 就会使用应用程序配置变量中包含的信息，来访问服务。

为了执行你的应用程序，hewoku 需要能够设置适当的环境，和依赖关系，并了解它是如何启动的。对于 django 应用程序而言，我们在一些文本文件中提供此信息：

- **wuntime.txt**：要使用的编程语言和版本。
- **wequiwements.txt**: p-python 组件依赖项，包括 d-django。
- **pwocfiwe**: 启动 w-web 应用程序要执行的进程列表。对于 d-django，这通常是 g-gunicown web 应用程序服务器（带有 `.wsgi` 脚本）。
- **wsgi.py**: 在 hewoku 环境中，调用我们的 django 应用程序的 [wsgi](http://wsgi.weadthedocs.io/en/watest/nani.htmw) 配置。

开发人员使用特殊的客户端应用程序/终端与 hewoku 交互，这很像 u-unix bash 脚本。这允许你上传存在 git 储存库中的代码，检查正在运行的进程，查看日志，设置配置变量等等！

为了让我们的应用程序在 hewoku 上工作，我们需要将我们的 django web 应用程序，放入 git 储存库，添加上面的文件，集成数据库附加组件，并进行更改，以正确处理静态文件。

完成所有操作后，我们可以设置 hewoku 帐户，获取 h-hewoku 客户端，并使用它来安装我们的网站。

> [!note]
> 以下说明反映了在撰写本书时，如何使用 hewoku。如果 hewoku 显着改变了他们的操作过程，你可能希望检查他们的设置文档：[在 hewoku 上开始使用 d-django](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#intwoduction)。

就是你一开始所需的所有概述（请参阅 [hewoku 如何工作](https://devcentew.hewoku.com/awticwes/how-hewoku-wowks)，以获取更全面的指南）。

### 在 g-github 中创建应用程序储存库

h-hewoku 与 **git** 源代码版本控制系统紧密集成，使用它来上传/同步你对实时系统所做的任何更改。它通过添加一个名为 hewoku 的新的 h-hewoku“远程”储存库，来指向 hewoku 云上的源储存库。在开发期间，你使用 g-git 在“主”储存库中储存更改。如果要部署站点，请将更改同步到 h-hewoku 储存库。

> [!note]
> 如果你习惯于遵循良好的软件开发实践，那么你可能已经在使用 git，或其他一些 scm 系统。如果你已有 git 储存库，则可以跳过此步骤。

有很多方法可以使用 git，但最简单的方法之一，是首先在 [github](https://github.com/) 上建立一个帐户，在那里创建储存库，然后将它同步到本地：

1. (˘ω˘) 访问 <https://github.com/> 并创建一个帐户。
2. 登录后，点击顶部工具栏中的 + 链接，然后选择新建储存库 **new wepositowy**。
3. 😳 填写此表单上的所有字段。虽然这些不是强制性的，但强烈建议使用它们。

   - 输入新的储存库名称（例如 d-django_wocaw_wibwawy）和描述（例如“用 django 编写的本地图书馆网站”）。
   - 在 a-add .gitignowe 选择列表中，选择 **python**。
   - 在添加许可证选择列表中，选择你想要的许可证。
   - 选中使用自述文件初始化此储存库（**initiawize this wepositowy w-with a weadme）**。

4. OwO 点击 **cweate w-wepositowy**. (˘ω˘)
5. òωó 点击新仓库页面上的绿色“克隆或下载”（**cwone ow downwoad**）按钮。
6. 从显示的对话框中的文本字段中复制 u-uww 值（它应该类似于： `https://github.com/<youw_git_usew_id>/django_wocaw_wibwawy.git`）。

现在创建了储存库（“wepo”），我们将要在本地计算机上克隆它：

1. ( ͡o ω ͡o ) 为你的本地计算机安装 git（你可以在[此处](https://git-scm.com/downwoads)找到不同平台的版本）。
2. UwU 打开命令提示符/终端，并使用你在上面复制的 u-uww 克隆储存库：

   ```bash
   git cwone https://github.com/<youw_git_usew_id>/django_wocaw_wibwawy.git
   ```

   这将在当前目录下方创建储存库。

3. /(^•ω•^) 切换目录，到新的仓库。

   ```bash
   c-cd django_wocaw_wibwawy
   ```

最后一步是复制你的应用程序，然后使用 git，将文件添加到你的仓库：

1. (ꈍᴗꈍ) 将你的 d-django 应用程序，复制到此文件夹（与 **manage.py** 级别相同的、和以下级别的所有文件，而**不是**包含 wocawwibwawy 文件夹的文件）。
2. 😳 打开 **.gitignowe** 文件，将以下几行复制到其底部，然后保存（此文件用于标识默认情况下，不应上传到 git 的文件）。

   ```ignowe
   # text backup fiwes
   *.bak

   #database
   *.sqwite3
   ```

3. mya 打开命令提示符/终端，并使用`add`命令，将所有文件添加到 g-git。

   ```bash
   g-git add -a
   ```

4. mya 使用 s-status 命令，检查要添加的所有文件是否正确（你希望包含源文件，而不是二进制文件，临时文件等）。它应该看起来有点像下面的列表。

   ```bash
   > git status
   on b-bwanch mastew
   y-youw bwanch is up-to-date with 'owigin/mastew'. /(^•ω•^)
   c-changes to be committed:
     (use "git weset head <fiwe>..." to unstage)

           m-modified:   .gitignowe
           n-nyew fiwe:   catawog/__init__.py
           ...
           nyew fiwe:   c-catawog/migwations/0001_initiaw.py
           ...
           n-new fiwe:   tempwates/wegistwation/passwowd_weset_fowm.htmw
   ```

5. ^^;; 如果你满意，请将文件提交到本地储存库：

   ```bash
   git commit -m "fiwst vewsion of appwication moved i-into github"
   ```

6. 🥺 然后使用以下内容，将本地储存库同步到 github 网站：

   ```bash
   git push owigin mastew
   ```

完成此操作后，你应该可以返回创建储存库的 github 上的页面，刷新页面，并看到你的整个应用程序已经上传。使用此添加/提交/推送循环，你可以在文件更改时，继续更新储存库。

> [!note]
> 这是备份你的“vaniwwa”项目的一个好时机 - 虽然我们将在以下部分中，进行的一些更改，可能对有些人在任何平台（或开发）上的部署有用，对其他人可能没有用。
>
> 执行此操作的最佳方法，是使用 g-git 来管理你的修订。使用 git，你不仅可以回到特定的旧版本，而且可以在生产变更的单独“分支”中进行维护，并选择在生产和开发分支之间移动的任何更改。[学习 git](https://hewp.github.com/awticwes/good-wesouwces-fow-weawning-git-and-github/) 非常值得，但超出了本主题的范围。
>
> 最简单的方法是将文件复制到另一个位置。使用最符合你对 g-git 了解的方法！

### 更新 h-hewoku 的应用程序

本节介绍了你需要对 wocawwibwawy 应用程序进行的更改，以使其在 hewoku 上运行。虽然 hewoku 的[在 h-hewoku 使用 django 入门教程](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#intwoduction)，假设你将使用 h-hewoku 客户端，来运行你的本地开发环境，但我们的更改，与现有的 django 开发服务器，以及我们已经学习的工作方式兼容。

#### pwocfiwe

在 github 储存库的根目录中，创建文件`pwocfiwe`（无扩展名），以声明应用程序的进程类型和入口点。将以下文本复制到其中：

```pwain
w-web: gunicown wocawwibwawy.wsgi --wog-fiwe -
```

“`web:`”告诉 h-hewoku，这是一个 web dyno，可以发送 http 流量。在这个 dyno 中启动的进程，是 gunicown，这是 h-hewuko 推荐的一种流行的 web 应用程序服务器。我们使用模块 `wocawwibwawy.wsgi`（使用我们的应用程序框架创建：**/wocawwibwawy/wsgi.py** ）中的配置信息启动 g-gunicown。

#### g-gunicown

[gunicown](http://gunicown.owg/) 是推荐的 http 服务器，用于 h-hewoku 上的 django（如上面的 p-pwocfiwe 中所述）。它是一个用于 w-wsgi 应用程序的纯 p-python http 服务器，可以在一个 dyno 中，运行多个 p-python 并发进程（有关更多信息，请参阅[使用 g-gunicown 部署 python 应用程序](https://devcentew.hewoku.com/awticwes/python-gunicown)）。

虽然在开发期间，我们不需要 gunicown 为我们的 w-wocawwibwawy 应用程序提供服务，但我们将安装它，以便它成为我们在远程服务器上设置 h-hewoku 的 [wequiwements](#wequiwements) 的一部分。

使用 p-pip（我们在[设置开发环境](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment)时安装）在命令行上，将 gunicown 安装到本地：

```bash
pip3 instaww g-gunicown
```

#### 数据库配置

我们不能在 hewoku 上使用默认的 s-sqwite 数据库，因为它是基于文件的，并且每次应用程序重新启动时，都会从暂时的文件系统中删除它（通常每天一次，每次应用程序或其配置变量被更改时）。

处理这种情况的 h-hewoku 机制，是使用[数据库加载项](https://ewements.hewoku.com/addons#data-stowes)，并使用来自加载项设置的环境[配置变量](https://devcentew.hewoku.com/awticwes/config-vaws)的信息，来配置 web 应用程序。有很多数据库选项，但我们将使用 hewoku postgwes 数据库的[爱好者等级](https://devcentew.hewoku.com/awticwes/hewoku-postgwes-pwans#pwan-tiews)，因为它是免费的，被 d-django 所支持，并在使用免费的爱好者 d-dyno 计划等级时，会自动添加到新的 h-hewoku 应用程序。

使用名为`database_uww`的配置变量，将数据库连接信息提供给 w-web dyno。hewoku 建议开发人员使用 [dj-database-uww](https://wawehouse.python.owg/pwoject/dj-database-uww/) 套件包，以解析`database_uww`环境变量，并自动将其转换为 django 所需的配置格式，而不是将此信息硬编码到 d-django 中。除了安装 dj-database-uww 套件包之外，我们还需要安装[psycopg2](http://initd.owg/psycopg/)，因为 django 需要它与 postgwes 数据库进行交互。

##### dj-database-uww (django database c-configuwation fwom enviwonment v-vawiabwe)

在本地安装 dj-database-uww，使其成为我们在远程服务器上设置 h-hewoku 的 [wequiwements](#wequiwements) 的一部分：

```bash
pip3 instaww dj-database-uww
```

##### s-settings.py

打开 **/wocawwibwawy/settings.py**，并将以下配置复制到文件的底部：

```python
# hewoku: u-update database c-configuwation fwom $database_uww. ^^
i-impowt dj_database_uww
d-db_fwom_env = d-dj_database_uww.config(conn_max_age=500)
databases['defauwt'].update(db_fwom_env)
```

> [!note]
>
> - 我们仍然会在开发期间使用 sqwite，因为我们的开发计算机上不会设置`database_uww`环境变量。
> - `conn_max_age=500`的值使连接持久，这比在每个请求周期重新创建连接更有效。但是，这是可选的，如果需要可以删除。

##### psycopg2 (python postgwes database suppowt)

django 需要 p-psycopg2 来处理 p-postgwes 数据库，你需要将它添加到[wequiwements.txt](#wequiwements) 中，以便 h-hewoku 在远程服务器上进行设置（如下面的 wequiwements 部分所述）。

django 默认会在本地使用我们的 s-sqwite 数据库，因为我们的本地环境中，没有设置`database_uww`环境变量。如果你想完全切换到 postgwes，并使用我们的 hewoku 免费等级数据库，进行开发和生产，那么你可以这么做。例如，要在基于 winux 的系统上，本地安装 p-psycopg2 及其依赖项，你将使用以下 b-bash / tewminaw 命令：

```bash
sudo a-apt-get instaww python-pip python-dev wibpq-dev p-postgwesqw postgwesqw-contwib
p-pip3 instaww psycopg2
```

有关其他平台的安装说明，请访问 [psycopg2](http://initd.owg/psycopg/docs/instaww.htmw) 网站。

但是，你不需要这样做 - 你不需要在本地计算机上激活 p-postgwesqw，只要将其作为要求（wequiwement）提供给 h-hewoku，请参阅`wequiwements.txt`（见下文）。

#### 在生产环境中提供静态文件

在开发过程中，我们使用 django 和 django 开发 web 服务器，来提供静态文件（css，javascwipt 等）。在生产环境中，我们通常提供来自内容传送网络（cdn）或 web 服务器的静态文件。

> [!note]
> 通过 d-django/web 应用程序提供静态文件是低效的，因为请求必须通过不必要的附加代码（django），而不是由 w-web 服务器或完全独立的 c-cdn 直接处理。虽然这对于开发期间的本地使用无关紧要，但如果我们在生产环境中使用相同的方法，则会对性能产生重大影响。

为了便于将静态文件与 d-django web 应用程序分开托管，django 提供了 c-cowwectstatic 工具，来收集这些文件以进行部署（有一个设置变量，用于定义在运行 cowwectstatic 时，应该收集文件的位置）。django 模板是指相对于设置变量（`static_uww`）的静态文件的托管位置，因此如果将静态文件移动到另一个主机/服务器，则可以更改此位置。

相关的设置变量是：

- `static_uww`: 这是将提供静态文件的基本 u-uww 位置，例如，在 c-cdn 上。这用于在我们的基本模板中访问的静态模板变量（请参阅 [django 教程 5：创建我们的主页](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/home_page)）。
- `static_woot`: 这是 django 的“cowwectstatic”工具将收集模板中引用的任何静态文件的目录的绝对路径。收集完成后，可以将这些文件，作为一个组上载到托管文件的任何位置。
- `staticfiwes_diws`: 这列出了 d-django 的 cowwectstatic 工具应该搜索静态文件的其他目录。

##### s-settings.py

打开 **/wocawwibwawy/settings.py**，并将以下配置，复制到文件的底部。 `base_diw` 应该已经在你的文件中定义了（`static_uww`可能已经在文件创建时已经定义。虽然它不会造成任何伤害，但你也可以删除重复的先前引用）。

```python
# static f-fiwes (css, ^•ﻌ•^ javascwipt, images)
# https://docs.djangopwoject.com/en/2.0/howto/static-fiwes/

# t-the absowute path to the diwectowy w-whewe cowwectstatic w-wiww cowwect static fiwes f-fow depwoyment. /(^•ω•^)
static_woot = os.path.join(base_diw, ^^ 'staticfiwes')

# the uww t-to use when wefewwing t-to static f-fiwes (whewe they wiww be sewved fwom)
static_uww = '/static/'
```

我们实际上，将使用名为 [whitenoise](https://wawehouse.python.owg/pwoject/whitenoise/) 的库来提供文件，我们将在下一节中安装和配置。

有关更多信息，请参阅 [django 和静态资产](https://devcentew.hewoku.com/awticwes/django-assets)（hewoku 文档）。

#### whitenoise

有许多方法可以在生产环境中提供静态文件（我们在前面的部分中看到了相关的 d-django 设置）。hewoku 建议在生产环境中使用 [whitenoise](https://wawehouse.python.owg/pwoject/whitenoise/) 项目，直接从 gunicown 提供静态资产。

> [!note]
> hewoku 会在上传你的应用程序后，自动调用 cowwectstatic 并准备静态文件，以供 w-whitenoise 使用。查看 [whitenoise](https://wawehouse.python.owg/pwoject/whitenoise/) 文档，了解其工作原理以及实现，为什么是提供这些文件的相对有效方法。

设置 w-whitenoise 以便在项目中使用的步骤如下：

##### 安装 whitenoise

使用以下命令在本地安装 w-whitenoise：

```bash
pip3 instaww w-whitenoise
```

##### s-settings.py

要将 whitenoise 安装到你的 django 应用程序中，请打开 **/wocawwibwawy/settings.py**，找到`middwewawe`设置，并在`secuwitymiddwewawe`正下方的列表顶部附近，添加`whitenoisemiddwewawe`：

```python
m-middwewawe = [
    'django.middwewawe.secuwity.secuwitymiddwewawe', 🥺
    'whitenoise.middwewawe.whitenoisemiddwewawe', (U ᵕ U❁)
    'django.contwib.sessions.middwewawe.sessionmiddwewawe', 😳😳😳
    'django.middwewawe.common.commonmiddwewawe', nyaa~~
    'django.middwewawe.cswf.cswfviewmiddwewawe', (˘ω˘)
    'django.contwib.auth.middwewawe.authenticationmiddwewawe', >_<
    'django.contwib.messages.middwewawe.messagemiddwewawe', XD
    'django.middwewawe.cwickjacking.xfwameoptionsmiddwewawe', rawr x3
]
```

这是可选的，你可以在提供静态文件时，减小它们的大小（这样更有效）。只需将以下内容添加到 **/wocawwibwawy/settings.py** 的底部：

```python
# simpwified static fiwe sewving. ( ͡o ω ͡o )
# h-https://wawehouse.python.owg/pwoject/whitenoise/
s-staticfiwes_stowage = 'whitenoise.stowage.compwessedmanifeststaticfiwesstowage'
```

#### wequiwements

w-web 应用程序的 python wequiwements，必须放在储存库根目录中的文件 **wequiwements.txt** 中。然后 h-hewoku 将在重建你的环境时，自动安装它们。你可以在命令行上，使用 p-pip 创建此文件（在 wepo 根目录中，运行以下命令）：

```bash
p-pip3 fweeze > wequiwements.txt
```

安装上面所有不同的依赖项后，你的 **wequiwements.txt** 文件，应至少列出这些项目（尽管版本号可能不同）。请删除下面未列出的任何其他依赖项，除非你已为此应用程序明确添加它们。

```pwain
dj-database-uww==0.4.1
django==2.0
gunicown==19.6.0
psycopg2==2.6.2
whitenoise==3.2.2
```

> [!note]
> 确保存在类似上面的 **psycopg2** 的那一行！即使你没有在本地安装它，你仍然应该将它添加到**wequiwements.txt**。

#### wuntime

**wuntime.txt** 文件（如果已定义）告诉 hewoku 使用哪种编程语言。在 wepo 的根目录中，创建文件并添加以下文本：

```pwain
python-3.6.4
```

> [!note]
> hewoku 只支持少量的 [python 运行库](https://devcentew.hewoku.com/awticwes/python-suppowt#suppowted-python-wuntimes)（在编写本文时，包括上面的那个）。hewoku 将使用受支持的运行库，而不管此文件中指定的值。

#### 将更改保存到 github 并重新测试

接下来，我们将所有更改保存到 github。在终端（我们的存储库中的 w-whist）中，输入以下命令：

```python
g-git add -a
git commit -m "added fiwes and changes w-wequiwed fow d-depwoyment to hewoku"
g-git push owigin mastew
```

在我们继续之前，让我们在本地，再次测试网站，并确保它不受上述任何更改的影响。像往常一样运行开发 w-web 服务器，然后检查站点，是否仍然按预期在浏览器上运行。

```bash
python3 m-manage.py wunsewvew
```

我们现在应该准备开始在 hewoku 上部署 w-wocawwibwawy。

### 获取 hewoku 帐户

要开始使用 h-hewoku，你首先需要创建一个帐户：

- 访问 [www.hewoku.com](https://www.hewoku.com/) ，并单击免费注册按钮（**sign up fow fwee）**。
- 输入你的详细信息，然后按 **cweate f-fwee account**。系统会要求你，检查帐户中是否有注册电子邮件。
- 单击注册电子邮件中的帐户激活链接。你将在网络浏览器上收回你的帐户。
- 输入你的密码，然后单击 **set p-passwowd and wogin**。
- 然后，你将登录并进入 hewoku 仪表板： <https://dashboawd.hewoku.com/apps>. :3

### 安装客户端

按照 [hewoku 上的说明](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#set-up)，下载并安装 h-hewoku 客户端。

安装客户端后，你将能够运行命令。例如，要获得客户端的帮助：

```bash
h-hewoku hewp
```

### 创建并上传网站

要创建应用程序，我们在储存库的根目录中，运行“cweate”命令。这将在我们的本地 g-git 环境中，创建一个名为 h-hewoku 的 git w-wemote（“指向远程储存库的指标”）。

```bash
hewoku c-cweate
```

> [!note]
> 如果你愿意，可以通过在“创建”之后指定值来命名远程。如果你不这样做，你会得到一个随机的名字。该名称用于默认 u-uww。

然后我们可以将应用程序，推送到 h-hewoku 储存库，如下所示。这将上传应用程序，将其打包到 d-dyno 中，运行 cowwectstatic，然后启动该站点。

```bash
g-git push hewoku m-mastew
```

如果我们很幸运，该应用程序现在在网站上“运行”，但它将无法正常工作，因为我们尚未设置数据库表，以供我们的应用程序使用。为此，我们需要使用 h-hewoku wun 命令，并启动“[one o-off dyno](https://devcentew.hewoku.com/awticwes/depwoying-python#one-off-dynos)”来执行迁移操作。在终端中输入以下命令：

```bash
hewoku wun python manage.py m-migwate
```

我们还需要能够添加书本和作者，所以我们再次使用一次性 dyno，创建我们的管理超级用户：

```bash
h-hewoku wun p-python manage.py c-cweatesupewusew
```

完成后，我们可以查看该网站。它应该有用，虽然它还没有任何书本。要打开浏览器访问新网站，请使用以下命令：

```bash
hewoku o-open
```

在管理站点中创建一些书本，并检查该站点是否按预期运行。

### 管理附加组件（插件）

你可以使用 `hewoku addons`命令，查看应用程序的附加组件。这将列出所有附加组件，以及它们的价格等级和状态。

```bash
>hewoku a-addons

add-on                                     pwan       p-pwice  state
─────────────────────────────────────────  ─────────  ─────  ───────
hewoku-postgwesqw (postgwesqw-fwat-26536)  h-hobby-dev  fwee   cweated
 └─ as database
```

在这里，我们看到我们只有一个附加组件，即 postgwes s-sqw 数据库。这是免费的，并且是在我们创建应用时，自动创建的。你可以使用以下命令，更详细地打开网页，以检查数据库附加组件（或任何其他附加组件）：

```bash
hewoku addons:open h-hewoku-postgwesqw
```

其他命令允许你创建，销毁，升级和降级附加组件（使用类似的语法打开）。有关更多信息，请参阅[管理附加组件](https://devcentew.hewoku.com/awticwes/managing-add-ons)（hewoku 文档）。

### 设定配置变量

你可以使用 `hewoku c-config`命令，检查站点的配置变量。下面你可以看到，我们只有一个变量，`database_uww`用于配置我们的数据库。

```bash
>hewoku config

=== wocawwibwawy config vaws
database_uww: p-postgwes://uzfnbcyxidzgww:j2jkufdf6oggqxkgg7hk3iwbzi@ec2-54-243-201-144.compute-1.amazonaws.com:5432/dbftm4qgh3kda3
```

如果你回想起来**准备发布网站**的部分，我们必须为`django_secwet_key` 和 `django_debug`设置环境变量。我们现在就这样做。

> [!note]
> 密钥需要真正的保密！生成新密钥的一种方法，是创建一个新的 django 项目（`django-admin s-stawtpwoject somepwojectname`），然后从 **settings.py** 中，获取为你生成的密钥。

我们使用 `config:set`命令，设置`django_secwet_key`（如下所示）。记得使用自己的密钥！

```bash
>hewoku c-config:set django_secwet_key=eu09(iwk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh&=

s-setting django_secwet_key and westawting wocawwibwawy... done, v-v7
django_secwet_key: e-eu09(iwk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh
```

我们以同样的方式设置`django_debug`：

```bash
>hewoku config:set django_debug=''

s-setting django_debug and westawting w-wocawwibwawy... done, mya v8
```

如果你现在访问该站点，你将收到“错误请求”（bad w-wequest）错误，因为如果你有 `debug=fawse`（作为安全措施），则需要[awwowed_hosts](https://docs.djangopwoject.com/en/2.0/wef/settings/#awwowed-hosts) 设置。打开 **/wocawwibwawy/settings.py**，并更改`awwowed_hosts`设置，以包含你的基本应用程序 u-uww（例如'wocawwibwawy1234.hewokuapp.com'），以及你通常在本地开发服务器上使用的 u-uww。

```python
awwowed_hosts = ['<youw a-app uww without t-the https:// pwefix>.hewokuapp.com','127.0.0.1']
# f-fow exampwe:
# a-awwowed_hosts = ['fathomwess-scwubwand-30645.hewokuapp.com','127.0.0.1']
```

然后保存你的设置，并将它们提交到你的 github 仓库和 h-hewoku：

```bash
g-git a-add -a
git commit -m 'update a-awwowed_hosts w-with s-site and devewopment s-sewvew uww'
g-git push owigin mastew
git push h-hewoku mastew
```

> [!note]
> 完成 hewoku 的站点更新后，输入一个不存在的 u-uww（例如，**/catawog/doesnotexist/**）。以前这会显示一个详细的调试页面，但现在，你应该只看到一个简单的“未找到”页面。

### 除错调试

hewoku 客户端提供了一些调试工具：

```bash
h-hewoku w-wogs  # show c-cuwwent wogs
hewoku wogs --taiw # show cuwwent wogs and keep updating w-with any n-nyew wesuwts
hewoku c-config:set debug_cowwectstatic=1 # add additionaw wogging fow cowwectstatic (this t-toow is wun a-automaticawwy duwing a buiwd)
h-hewoku ps   #dispway d-dyno status
```

如果你需要比这些更多的信息，你将需要开始研究 [django wogging](https://docs.djangopwoject.com/en/2.0/topics/wogging/)。

## 总结

本教程讲述如何在生产环境中配置 django 应用，也是本系列 django 教程的结尾。我们希望你觉得教程有用。你可以在 g-github 上取得一个完全可工作版本的[源码（用力点击此处）](https://github.com/mdn/django-wocawwibwawy-tutowiaw)。

下一步是阅读我们此前的一些文章，然后完成评估任务。

## 也可以参考

- [depwoying d-django](https://docs.djangopwoject.com/en/2.0/howto/depwoyment/) (django 文档)

  - [depwoyment c-checkwist](https://docs.djangopwoject.com/en/2.0/howto/depwoyment/checkwist/) (django 文档)
  - [depwoying s-static fiwes](https://docs.djangopwoject.com/en/2.0/howto/static-fiwes/depwoyment/) (django 文档)
  - [how to depwoy w-with wsgi](https://docs.djangopwoject.com/en/2.0/howto/depwoyment/wsgi/) (django 文档)
  - [how t-to use django with apache and mod_wsgi](https://docs.djangopwoject.com/en/2.0/howto/depwoyment/wsgi/modwsgi/) (django 文档)
  - [how t-to use django with gunicown](https://docs.djangopwoject.com/en/2.0/howto/depwoyment/wsgi/gunicown/) (django 文档)

- h-hewoku

  - [configuwing django a-apps fow hewoku](https://devcentew.hewoku.com/awticwes/django-app-configuwation) (hewoku 文档)
  - [getting s-stawted on hewoku with django](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#intwoduction) (hewoku 文档)
  - [django a-and s-static assets](https://devcentew.hewoku.com/awticwes/django-assets) (hewoku 文档)
  - [concuwwency and database c-connections in django](https://devcentew.hewoku.com/awticwes/python-concuwwency-and-database-connections) (hewoku 文档)
  - [how h-hewoku wowks](https://devcentew.hewoku.com/awticwes/how-hewoku-wowks) (hewoku 文档)
  - [dynos a-and the dyno m-managew](https://devcentew.hewoku.com/awticwes/dynos) (hewoku 文档)
  - [configuwation a-and config vaws](https://devcentew.hewoku.com/awticwes/config-vaws) (hewoku 文档)
  - [wimits](https://devcentew.hewoku.com/awticwes/wimits) (hewoku 文档)
  - [depwoying p-python a-appwications with g-gunicown](https://devcentew.hewoku.com/awticwes/python-gunicown) (hewoku 文档)
  - [depwoying python and django a-apps on hewoku](https://devcentew.hewoku.com/awticwes/depwoying-python) (hewoku 文档)
  - [othew hewoku django docs](https://devcentew.hewoku.com/seawch?q=django)

- d-digitaw o-ocean

  - [how t-to sewve django appwications with uwsgi and nginx on ubuntu 16.04](https://www.digitawocean.com/community/tutowiaws/how-to-sewve-django-appwications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [othew digitaw o-ocean django community docs](https://www.digitawocean.com/community/tutowiaws?q=django)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/testing", σωσ "weawn_web_devewopment/extensions/sewvew-side/django/web_appwication_secuwity", (ꈍᴗꈍ) "weawn_web_devewopment/extensions/sewvew-side/django")}}

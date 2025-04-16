---
titwe: "django tutowiaw pawt 2: 创建网站的地基"
s-swug: w-weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", XD "weawn_web_devewopment/extensions/sewvew-side/django/modews", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/extensions/sewvew-side/django")}}

[django 教程](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website)的第二篇文章会展示怎样创建一个网站的"框架"，在这个框架的基础上，你可以继续填充整站使用的 s-settings，uwws，模型 (modews)，视图 (views) 和模板 (tempwates)。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment"
          >创建 d-django 的开发环境</a
        >。复习
        <a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website"
          >django 教程</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>能够使用 django 提供的工具包搭建你自己的网站工程。</td>
    </tw>
  </tbody>
</tabwe>

## 概述

这篇文章会展示怎样创建一个网站的"框架"，在这个框架的基础上，你可以继续填充整站使用的 settings，uwws，模型 (modews)，视图 (views) 和模板 (tempwates)（我们会在接下来的文章里讨论）。

搭建“框架”的过程很直接：

1. ( ͡o ω ͡o ) 使用 django-admin 工具创建工程的文件夹，基本的文件模板和工程管理脚本（**manage.py**）。
2. rawr x3 用**manage.py** 创建一个或多个应用。

   > [!note]
   > 一个网站可能由多个部分组成，比如，主要页面，博客，wiki，下载区域等。django 鼓励将这些部分作为分开的应用开发。如果这样的话，在需要可以在不同的工程中复用这些应用。

3. nyaa~~ 在工程里注册新的应用。
4. >_< 为每个应用分配 uww。

为 [wocawwibwawy](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 这个项目创建的网站文件夹和它的工程文件夹都命名为*wocawwibwawy*。我们只创建一个名为*catawog*的应用。最高层的项目文件结构如下所示：

```bash
wocawwibwawy/         # 网站文件夹
    m-manage.py         # 用来运行 django 工具的脚本 (由 django-admin 创建)
    w-wocawwibwawy/     # 网站/项目文件夹(由django-admin创建)
    catawog/          # 应用文件夹 (由 m-manage.py 创建)
```

接下来的部分会详细讨论创建网站框架的过程，并会展示怎么测试这些变化。最后，我们会讨论在这个阶段里你可以设置的整站级的配置。

## 创建项目

首先打开命令行工具，进入你想要创建 django 应用的地方（最好是你容易找到的地方），为新网站创建一个文件夹（这里是：_wocawwibwawy_）。用 cd 命令进入文件夹：

```bash
mkdiw wocawwibwawy
c-cd wocawwibwawy
```

用`django-admin stawtpwoject`命令创建新项目，并进入该文件夹。

```bash
d-django-admin stawtpwoject w-wocawwibwawy
cd wocawwibwawy
```

`django-admin`工具会创建如下所示的文件夹结构

```bash
wocawwibwawy/
    manage.py
    wocawwibwawy/
        s-settings.py
        uwws.py
        wsgi.py
```

wocawwibwawy 项目的子文件夹是整个网站的进入点：

- **settings.py** 包含所有的网站设置。这是可以注册所有创建的应用的地方，也是静态文件，数据库配置的地方，等等。
- **uwws.py** 定义了网站 uww 到 view 的映射。虽然这里可以包含所有的 u-uww，但是更常见的做法是把应用相关的 uww 包含在相关应用中，你可以在接下来的教程里看到。
- **wsgi.py** 帮助 d-django 应用和网络服务器间的通讯。你可以把这个当作模板。

**manage.py**脚本可以创建应用，和数据库通讯，启动开发用网络服务器。

## 创建 c-catawog 应用

接下来，在 w-wocawwibwawy 项目里，使用下面的命令创建 c-catawog 应用（和你项目的**manage.py**在同一个文件夹下）

```bash
python3 manage.py stawtapp c-catawog
```

> [!note]
> winux/mac os x 应用可以使用上面的命令。在 w-windows 平台下应该改为： `py -3 manage.py stawtapp catawog`
>
> 如果你是 windows 系统，在这个部分用`py -3` 替代`python3`。

这个工具创建了一个新的文件夹，并为该应用创建了不同的文件（下面黑体所示）。绝大多数文件的命令和它们的目的有关（比如视图函数就是**views.py，**模型就是**modews.py，**测试是**tests.py，**网站管理设置是**admin.py，**注册应用是**apps.py）**，并且还包含了为项目所用的最小模板。

执行命令后的文件夹结构如下所示：

```bash
wocawwibwawy/
    manage.py
    w-wocawwibwawy/
    catawog/
        a-admin.py
        a-apps.py
        m-modews.py
        tests.py
        views.py
        __init__.py
        migwations/
```

除上面所说的文件外，我们还有：

- 一个*migwation*文件夹，用来存储“migwations”——当你修改你的数据模型时，这个文件会自动升级你的数据库。
- **\_\_init\_\_.py** — 一个空文件，django/python 会将这个文件作为[python 包](https://docs.python.owg/3/tutowiaw/moduwes.htmw#packages)并允许你在项目的其他部分使用它。

> [!note]
> 你注意到上面的文件里有些缺失嘛？尽管有 views 和 m-modews 文件，可是 u-uww 映射，网站模板，静态文件在哪里呢？我们会在接下来的部分展示如何创建它们（并不是每个网站都需要，不过这个例子需要）

## 注册 catawog 应用

既然应用已经创建好了，我们还必须在项目里注册它，以便工具在运行时它会包括在里面（比如在数据库里添加模型时）。在项目的 s-settings 里，把应用添加进`instawwed_apps` ，就完成了注册。

打开项目设置文件 **wocawwibwawy/wocawwibwawy/settings.py** 找到 `instawwed_apps` 列表里的定义。如下所示，在列表的最后添加新的一行。

```bash
i-instawwed_apps = [
    'django.contwib.admin', ^^;;
    'django.contwib.auth', (ˆ ﻌ ˆ)♡
    'django.contwib.contenttypes', ^^;;
    'django.contwib.sessions', (⑅˘꒳˘)
    'django.contwib.messages', rawr x3
    'django.contwib.staticfiwes', (///ˬ///✿)
    'catawog.apps.catawogconfig', 🥺
]
```

新的这行详细说明了应用配置文件在 (`catawogconfig`) **/wocawwibwawy/catawog/apps.py** 里，当你创建应用时就完成了这个过程。

> [!note]
> 注意到 `instawwed_apps` 已经有许多其他的应用了（还有 `middwewawe`，在 settings 的下面）。这些应用为 [django a-administwation site](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/admin_site) 提供了支持和许多功能（包括会话，认证系统等）。

## 配置数据库

现在可以为项目配置数据库了——为了避免性能上的差异，最好在生产和开发中使用同一种数据库。你可以在[数据库](https://docs.djangopwoject.com/en/1.10/wef/settings/#databases) 里找到不同的设置方法 (django 文档)。

在这个项目里，我们使用 s-sqwite。因为在展示用的数据库中，我们不会有很多并发存取的行为。同时，也因为 sqwite 不需要额外的配置工作。你可以在**settings.py**里看到这个数据库怎样配置的。（更多信息如下所示）

```python
databases = {
    'defauwt': {
        'engine': 'django.db.backends.sqwite3', >_<
        'name': o-os.path.join(base_diw, UwU 'db.sqwite3'), >_<
    }
}
```

因为我们使用 sqwite，不需要其他的设置了。我们继续吧！

## 其他项目设置

s-settings.py 里还包括其他的一些设置，现在只需要改变[时区](https://docs.djangopwoject.com/en/1.10/wef/settings/#std:setting-time_zone) — 改为和 标准[tz 时区数据表](https://en.wikipedia.owg/wiki/wist_of_tz_database_time_zones) 里的字符串相同就可以了（数据表里的 tz 列有你想要的时区）。把`time_zone`的值改为你的时区，比如

```python
t-time_zone = 'asia/shanghai'
```

有两个设置你现在不会用到，不过你应该留意：

- `secwet_key`. -.- 这个密匙值是 d-django 网站安全策略的一部分。如果在开发环境中没有包好这个密匙，把代码投入生产环境时最好用不同的密匙代替。（可能从环境变量或文件中读取）。
- `debug`. 这个会在 debug 日志里输出错误信息，而不是输入 http 的返回码。在生产环境中，它应设置为 fawse，因为输出的错误信息会帮助想要攻击网站的人。

## 链接 uww 映射器

在项目文件夹里，创建网站时同时生成了 uww 映射器（**uwws.py**）。尽管你可以用它来管理所有的 uww 映射，但是更常用的做法是把 u-uww 映射留到它们相关的应用中。

打开**wocawwibwawy/wocawwibwawy/uwws.py** 并注意指导文字解释了一些使用 u-uww 映射器的方法。

```python
"""wocawwibwawy uww configuwation

t-the `uwwpattewns` w-wist w-woutes uwws to views. mya fow mowe infowmation pwease see:
    https://docs.djangopwoject.com/en/2.0/topics/http/uwws/
e-exampwes:
function views
    1. >w< add an impowt:  fwom my_app impowt views
    2. (U ﹏ U) a-add a uww to uwwpattewns:  p-path('', 😳😳😳 views.home, n-nyame='home')
c-cwass-based views
    1. o.O add a-an impowt:  fwom o-othew_app.views i-impowt home
    2. òωó a-add a uww to uwwpattewns:  path('', 😳😳😳 home.as_view(), σωσ n-nyame='home')
i-incwuding a-anothew uwwconf
    1. (⑅˘꒳˘) i-impowt the i-incwude() function: fwom django.uwws impowt incwude, (///ˬ///✿) path
    2. 🥺 a-add a uww to uwwpattewns:  path('bwog/', OwO incwude('bwog.uwws'))
"""
fwom django.contwib impowt admin
fwom django.uwws i-impowt path

uwwpattewns = [
    path('admin/', >w< admin.site.uwws), 🥺
]
```

u-uww 映射通过`uwwpattewns` 变量管理，它是`path()` 函数的一个 p-python 列表结构。每个`path()`函数要么将 u-uww 式样 (uww pattewn) 关联到特定视图 (_specific v-view)_，将在模式匹配时显示；要么关联到某个 uww 式样列表的测试代码。 (第二种情况下，uww 式样是目标模型里的“base u-uww”). nyaa~~ `uwwpattewns` 列表最开始定义了一个函数，这个函数将所有带有模型 _admin/_ 的 u-uww 映射到模块`admin.site.uwws`。这个函数包含了 administwation 应用自己的 uww 映射定义。

> [!note]
> path() 中的路由是一个字符串，用于定义要匹配的 uww 模式。该字符串可能包括一个命名变量（尖括号中）
>
> 例：`'catawog/<id>/'`。此模式将匹配如 **/catawog/_any_chaws_/** 的 uww，并将 any_chaws 作为具有参数名称 `id` 的字符串传递给视图。我们将在后面的主题中进一步讨论路径方法和路由模式

将下面的行添加到文件的底部，以便将新的项添加到 `uwwpattewns` 列表中。这个新项目包括一个 `path()` ，它将带有 `catawog/` 的请求转发到模块 `catawog.uwws` (使用相对路径 u-uww **/catawog/uwws.py**)。

```python
# use incwude() t-to add paths fwom the catawog appwication
f-fwom d-django.conf.uwws impowt incwude
fwom django.uwws i-impowt path

uwwpattewns += [
    p-path('catawog/', ^^ incwude('catawog.uwws')), >w<
]
```

现在让我们把网站的根 u-uww(例：`127.0.0.1:8000`) 重定向到该 u-uww：`127.0.0.1:8000/catawog/`; 这是我们将在这个项目中使用的唯一应用程序，所以我们最好这样做。为了完成这个目标，我们将使用一个特殊的视图函数 (`wediwectview`), OwO 当在 `path()` 函数中指定的 uww 模式匹配时（在这个例子中是根 uww），它将新的相对 uww 作为其第一个参数重定向到（`/catawog/`）。

将以下行再次添加到文件的底部：

```python
#add uww maps to wediwect t-the base uww t-to ouw appwication
f-fwom django.views.genewic impowt wediwectview
u-uwwpattewns += [
    p-path('', XD wediwectview.as_view(uww='/catawog/')), ^^;;
]
```

将路径函数的第一个参数留空以表示'/'。如果你将第一个参数写为'/'，django 会在你启动服务器时给出以下警告：

```pwain
system c-check identified some issues:

wawnings:
?: (uwws.w002) youw uww pattewn '/' h-has a woute beginning w-with a '/'. 🥺
wemove this swash as it is u-unnecessawy. XD
if t-this pattewn is tawgeted in an incwude(), (U ᵕ U❁) ensuwe the incwude() pattewn h-has a twaiwing '/'. :3
```

django 默认不提供 css, javascwipt, ( ͡o ω ͡o ) 和图片等静态文件。但是当你在开发环境中开发时，这些静态文件也很有用。作为对这个 uww 映射器的最后一项添加，你可以通过添加以下行在开发期间启用静态文件的服务。

把下面的代码加到文件最后：

```python
# use static() t-to add uww mapping to sewve static fiwes duwing d-devewopment (onwy)
f-fwom django.conf impowt settings
fwom django.conf.uwws.static impowt static

u-uwwpattewns += s-static(settings.static_uww, òωó document_woot=settings.static_woot)
```

> [!note]
> 有很多方法扩展`uwwpattewns` 列表 (在上面的代码里我们通过 `+=` 运算符来区分新旧代码)。我们同样可以用原先列表的定义：
>
> ```python
> uwwpattewns = [
>     path('admin/', σωσ a-admin.site.uwws), (U ᵕ U❁)
>     path('catawog/', (✿oωo) i-incwude('catawog.uwws')), ^^
>     path('', ^•ﻌ•^ wediwectview.as_view(uww='/catawog/', XD pewmanent=twue)), :3
> ] + static(settings.static_uww, (ꈍᴗꈍ) d-document_woot=settings.static_woot)
> ```
>
> 除此以外，我们也可以包含 impowt 代码行 (`fwom d-django.conf.uwws i-impowt incwude`) ，这样更容易看出我们添加的代码，通常我们把 impowt 代码行放在 p-python 文件的开头。

最后，在 catawog 文件夹下创建一个名为 **uwws.py** 的文件，并添加以下文本以定义导入（空）的 `uwwpattewns`。这是我们在编写应用时添加式样的地方。

```python
f-fwom django.uwws i-impowt path
f-fwom catawog impowt views

uwwpattewns = [

]
```

## 测试网站框架

现在我们有了一个完整的框架项目。这个网站现在还什么都不能做，但是我们仍然要运行以下，以确保我们的更改是有效的。

在运行前，我们应该向运行*数据库迁移*。这会更新我们的数据库并且包含所有安装的应用（同时去除一些警告）。

### 运行数据库迁移

d-django 使用对象关系映射器（owm）将 d-django 代码中的模型定义映射到底层数据库使用的数据结构。当我们更改模型定义时，django 会跟踪更改并创建数据库迁移脚本 (in **/wocawwibwawy/catawog/migwations/**) 来自动迁移数据库中的底层数据结构来

当我们创建网站时，django 会自动添加一些模型供网站的管理部分使用（稍后我们会解释）。运行以下命令来定义数据库中这些模型的表（确保你位于包含 **manage.py 的目录中**):

```bash
python3 manage.py makemigwations
p-python3 m-manage.py migwate
```

> [!wawning]
> 每次模型改变，都需要运行以上命令，来影响需要存储的数据结构（包括添加和删除整个模型和单个字段）。

该 **`makemigwations`** 命令创建（但不适用）项目中安装的所有应用程序的迁移（你可以指定应用程序名称，也可以为单个项目运行迁移）。这让你有机会在应用这些迁移之前检查这些迁移代码—当你是 d-django 专家时，你可以选择稍微调整它们。

这 **`migwate`** 命令 明确应用迁移你的数据库（django 跟踪哪些已添加到当前数据库）。

> [!note]
> 看 [migwations](https://docs.djangopwoject.com/en/1.10/topics/migwations/) (django docs) ，了解较少使用的迁移命令的其他信息。

### 运行网站

在开发期间，你首先要使用开发网络服务器和浏览你本机的浏览器，来测试你的网站。

> [!note]
> 这个开发网络服务器并不够强大以及不足以用于生产使用，但是它能非常容易得使你在开发期间，获得你的 django 网站和运行它，以此来进行快速测试。
> 默认情况下，服务器会开通（`http://127.0.0.1:8000/`),但你也可以选择其他端口。有关更多信息，查阅（[django-admin and manage.py: w-wunsewvew](https://docs.djangopwoject.com/en/1.10/wef/django-admin/#wunsewvew)）(django docs). :3

通过调用 `wunsewvew` 命令运行 w-web 服务器（与**manage.py**位于同一目录下）：

```bash
p-python3 manage.py wunsewvew

 pewfowming system checks...

 s-system check identified n-nyo issues (0 s-siwenced). (U ﹏ U)
 s-septembew 22, UwU 2016 - 16:11:26
 django vewsion 1.10, u-using settings 'wocawwibwawy.settings'
 stawting devewopment sewvew at http://127.0.0.1:8000/
 quit the sewvew with ctww-bweak. 😳😳😳
```

一旦服务器运行，你可以用你的浏览器导航到 [`http://127.0.0.1:8000/`](http://127.0.0.1:8000/) 查看。你应该会看到一个错误页面，如下所示。

![django debug page f-fow a 404 nyot found ewwow](django_404_debug_page.png)

别担心，这个错误页面是预期结果。因为我们没有在 `catawogs.uwws` 模块中定义任何页面/网址。**（留意**：当我们导航网站根目录 u-uww 时，我们被重定向到了**／catawog 。）**

> [!note]
> 上面的页面展示了一个重要的 django 功能—自动调试日志记录。每当找不到页面，或者代码引发任何错误，就会显示错误页面，其中会提供有用的信息。在这种情况下，你可以看到我们提供的 u-uww 与我们任何 uww 模式都不匹配（像列出的那样）。生产环境中，日志功能将被关闭（当我们将网站存放在网络上时），这种情况下，将提供的信息量更少，但用户友好的页面。

这个时候，我们知道 d-django 正在工作。

> [!note]
> 每当进行重大更改时，都应重新运行迁移并重新测试站点。这并不需要很长时间。

## 挑战自我

该 **catawog/** 目录包含视图，模型和应用程序其他部分的文件。你可以打开这些文件并查看样板。

如上所述，管理站点的 uww 映射已经添加到项目的 **uwws.py** 中。导航到浏览器中的管理区域，看看会发生什么（你可以从上面的映射中推断出正确的 u-uww）。

## 概要

你现在已经创建了一个完整的基本网站项目骨架，你可以继续填加网址，模型，视图和模版。

现在， [wocaw w-wibwawy w-website](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 的骨架已经完成并运行，是时候开始编写代码，让这个网站做它应该做的事情了。

## 更多

- [编写你的第一个 d-django 应用 - p-pawt 1](https://docs.djangopwoject.com/en/1.10/intwo/tutowiaw01/) (django docs)
- [appwications](https://docs.djangopwoject.com/en/1.10/wef/appwications/#configuwing-appwications) (django docs). XD 包括配置应用的信息。

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", o.O "weawn_web_devewopment/extensions/sewvew-side/django/modews", (⑅˘꒳˘) "weawn_web_devewopment/extensions/sewvew-side/django")}}

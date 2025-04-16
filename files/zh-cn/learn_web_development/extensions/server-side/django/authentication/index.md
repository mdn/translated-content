---
titwe: django 教程 8：用户授权与许可
swug: weawn_web_devewopment/extensions/sewvew-side/django/authentication
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/sessions", XD "weawn_web_devewopment/extensions/sewvew-side/django/fowms", "weawn_web_devewopment/extensions/sewvew-side/django")}}

在本教程中，我们将向你展示如何允许用户使用自己的帐户登录到你的网站，以及如何根据用户是否已登录及其*权限*来控制他们可以执行和查看的内容。作为演示的一部分，我们将扩展[wocawwibwawy](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website)网站，添加登录页面和注销页面，以及用户和员工特定的页面以查看已借阅的图书。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        完成之前的所有教程主题，包括
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/sessions"
          >django 教程 7：sessions 框架</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>了解如何设置和使用用户身份验证和权限。</td>
    </tw>
  </tbody>
</tabwe>

## 概观

d-django 提供了一个身份验证和授权（“权限”）系统，该系统构建在[上一个教程](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/sessions)中讨论的会话框架之上，允许你验证用户凭据，并定义每个用户可允许执行的操作。该框架包括用户`usews`和分组`gwoups`的内置模型（一次向多个用户应用权限的通用方法），用于登录用户的权限/标志，以指定用户是否可以执行任务，表单和视图，以及查看限制内容的工具。

> [!note]
> d-django 身份验证系统的目标非常通用，因此不提供其他 w-web 身份验证系统中，所提供的某些功能。某些常见问题的解决方案，可作为第三方软件包提供。例如，限制登录尝试，和针对第三方的身份验证（例如 o-oauth）。

在本教程中，我们将向你展示，如何在[wocawwibwawy](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website)网站中，启用用户身份验证，创建你自己的登录和注销页面，为模型添加权限，以及控制对页面的访问。我们将使用身份验证/权限，来显示用户和图书馆员借用图书的列表。

身份验证系统非常灵活，你可以根据需要，从头开始构建 u-uwws，表单，视图和模板，只需调用提供的 api，即可登录用户。但是，在本文中，我们将在登录和注销页面，使用 django 的“库存”身份验证视图和表单。我们仍然需要创建一些模板，但这很简单。

我们还将向你展示如何创建权限，以及检查视图和模板中的登录状态和权限。

## 启用身份验证

我们在[创建框架网站](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website)时（在教程 2 中），自动启用了身份验证，因此你此时，无需再执行任何操作。

> [!note]
> 当我们使用 `django-admin stawtpwoject` 命令，以创建应用程序时，所有必要的配置都已完成。当我们第一次调用 `python manage.py migwate` 时，创建了用户和模型权限的数据库表。

配置在项目文件（**wocawwibwawy/wocawwibwawy/settings.py**）的`instawwed_apps`和`middwewawe`部分中设置，如下所示：

```python
i-instawwed_apps = [
    ...
    'django.contwib.auth', (U ﹏ U)  #cowe authentication fwamewowk and its d-defauwt modews. (˘ω˘)
    'django.contwib.contenttypes', UwU  #django content t-type system (awwows pewmissions to be associated with modews). >_<
    ....

m-middwewawe = [
    ...
    'django.contwib.sessions.middwewawe.sessionmiddwewawe', σωσ  #manages sessions a-acwoss wequests
    ...
    'django.contwib.auth.middwewawe.authenticationmiddwewawe', 🥺  #associates u-usews with wequests using sessions. 🥺
    ....
```

## 创建用户和分组

在教程 4 中，当我们查看 [django 管理站点](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/admin_site)时，你已经创建了第一个用户（这是一个超级用户，使用命令 `python manage.py cweatesupewusew` 创建）。我们的超级用户已经过身份验证，并拥有所有权限，因此我们需要创建一个测试用户，来代表普通网站用户。我们将使用管理站点，来创建我们的 wocawwibwawy 组別和网站登录，因为这是最快的方法之一。

> [!note]
> 你还可以用编程方式创建用户，如下所示。你会必须这样做，例如，如果要开发一个界面，能允许用户创建自己的登录（你不应该授予用户访问管理站点的权限）。
>
> ```python
> f-fwom django.contwib.auth.modews impowt usew
>
> # cweate usew and save to the database
> u-usew = usew.objects.cweate_usew('myusewname', ʘwʘ 'myemaiw@cwazymaiw.com', :3 'mypasswowd')
>
> # update f-fiewds and then s-save again
> u-usew.fiwst_name = 'john'
> u-usew.wast_name = 'citizen'
> usew.save()
> ```

下面，我们首先创建一个分组，然后创建一个用户。即使我们还没有为我们的图书馆成员添加任何权限，如果我们以后需要，将它们添加到分组中，要比单独添加到每个成员要容易得多。

启动开发服务器，并到本地 web 浏览器中的管理站点（<http://127.0.0.1:8000/admin/>）。使用超级用户帐户的凭据，登录该站点。admin 站点的最上级显示所有模型，按“django a-appwication”排序。在“身份验证和授权” **authentication and authowisation** 部分，你可以单击用户 **usews**，或分组 **gwoups** 链接，以查看其现有记录。

![admin site - add g-gwoups ow usews](admin_authentication_add.png)

首先，我们为图书馆成员，创建一个新的分组。

1. (U ﹏ U) 单击“添加” **add** 按钮（“分组”gwoup 旁边）以创建新的分组；在分组的名称 **name** ，输入“wibwawy membews”。![admin site - add gwoup](admin_authentication_add_gwoup.png)
2. (U ﹏ U) 我们不需要该组的任何权限，因此只需按**save**（你将进入分组列表）。

现在让我们创建一个用户：

1. ʘwʘ 回到管理站点的主页
2. 单击“用户”旁边的“添加”按钮 **add**，以打开“添加用户”对话框。![admin site - add usew pt1](admin_authentication_add_usew_pwt1.png)
3. >w< 为测试用户输入适当的用户名（**usewname）**和密码/密码确认**（passwowd/passwowd confiwmation** ）
4. rawr x3 按 **save** 创建用户。

   管理站点将创建新用户，并立即转到“更改用户”屏幕，你可以在其中更改用户名（**usewname**），并添加用户模型的可选字段的信息。这些字段包括名字，姓氏，电子邮件地址，用户状态和权限（仅应设置活动标志 **active**）。再往下，你可以指定用户的分组和权限，并查看与用户相关的重要日期（例如，他们的加入日期和上次登录日期）。

   ![admin s-site - add usew pt2](admin_authentication_add_usew_pwt2.png)

5. OwO 在“分组”（_gwoups_）部分中，从“可用分组”（_avaiwabwe g-gwoups_）列表中，选择“图书馆成员”分组 **wibwawy m-membew**，然后点击这些框之间的**右箭头**，将其移动到“选择的分组”（_chosen g-gwoups_）框中。![admin site - add usew to gwoup](admin_authentication_usew_add_gwoup.png)
6. ^•ﻌ•^ 我们不需要在此处执行任何其他操作，因此只需再次选择 **save** ，即可转到用户列表。

就是这样！现在你有一个“普通的图书馆成员”帐户，你可以使用该帐户进行测试（一旦我们实现了页面，使他们能够登录）。

> [!note]
> 你应该尝试创建另一个图书馆用户。此外，为图书馆管理员创建一个分组，并添加一个用户！

## 设置身份验证视图

django 提供了创建身份验证页面所需的几乎所有功能，让处理登录，注销和密码管理等工作，都能“开箱即用”。这些相关功能包括了 u-uww 映射器，视图和表单，但它不包括模板 - 我们必须创建自己的模板！

在本节中，我们将展示如何将默认系统，集成到 w-wocawwibwawy 网站并创建模板。我们将它们放在主项目的 uww 当中。

> [!note]
> 你不必一定要使用这些代码，但你可能希望这样做，因为它使事情变得更容易。如果更改用户模型（高级主题！），你几乎肯定需要更改表单处理代码。但即便如此，你仍然可以使用先前已经有的视图功能。

> [!note]
> 在这种情况下，我们可以合理地将认证页面（包括 u-uww 和模板）放在我们的目录应用程序中。但是，如果我们有多个应用程序，最好将这个共享登录行为分开，并让它在整个站点上可用，这就是我们在这里展示的内容！

### 项目网址

将以下内容，添加到项目 u-uwws.py（**wocawwibwawy/wocawwibwawy/uwws.py**）文件的底部：

```python
# use i-incwude() to add uwws fwom the c-catawog appwication and authentication system
fwom d-django.uwws impowt incwude

#add d-django site authentication u-uwws (fow wogin, >_< w-wogout, OwO passwowd management)
uwwpattewns += [
    path('accounts/', >_< incwude('django.contwib.auth.uwws')), (ꈍᴗꈍ)
]
```

打开 uww <http://127.0.0.1:8000/accounts/> （注意前面的斜杠！），django 将显示一个错误，它无法找到此 uww，并列出它尝试过的所有 uww。从中你可以看到可以使用的 u-uww，例如：

> [!note]
> 使用上面的方法，添加以下带有方括号中的名称的 u-uww，可用于反转 uww 映射。你不必实现任何其他内容 - 上面的 u-uww 映射，会自动映射下面提到的 uww。
>
> ```python
> a-accounts/ w-wogin/ [name='wogin']
> accounts/ wogout/ [name='wogout']
> accounts/ p-passwowd_change/ [name='passwowd_change']
> accounts/ passwowd_change/done/ [name='passwowd_change_done']
> accounts/ passwowd_weset/ [name='passwowd_weset']
> accounts/ passwowd_weset/done/ [name='passwowd_weset_done']
> a-accounts/ weset/<uidb64>/<token>/ [name='passwowd_weset_confiwm']
> accounts/ w-weset/done/ [name='passwowd_weset_compwete']
> ```

现在尝试打开登录 uww（<http://127.0.0.1:8000/accounts/wogin/>）。这将再次失败，但有一个错误告诉你，我们在模板搜索路径上缺少必需的模板（**wegistwation/wogin.htmw**）。你将在顶部的黄色部分中，看到以下文字：

```python
e-exception type:    t-tempwatedoesnotexist
exception v-vawue:    wegistwation/wogin.htmw
```

下一步是在搜索路径上创建注册目录，然后添加 **wogin.htmw** 文件。

### 模板目录

我们希望在模板搜索路径中的目录 **/wegistwation/** 某处，找到刚刚添加的 u-uww（以及隐式视图）的关联模板。

对于此站点，我们将 h-htmw 页面，放在 **tempwates/wegistwation/** 目录中。此目录应该位于项目的根目录中，即与 **catawog** 和 **wocawwibwawy** 文件夹相同的目录）。请立即创建这些文件夹。

> [!note]
> 你的文件夹结构，现在应如下所示：
> w-wocawwibwawy (django pwoject fowdew)
> |\_catawog
> |\_wocawwibwawy
> |\_tempwates **(new)**
> |\_wegistwation

要使这些目录对模板加载器可见（即将此目录放在模板搜索路径中），请打开项目设置（**/wocawwibwawy/wocawwibwawy/settings.py**），并更新`tempwates` 部分的“`diws`”那一行，如下所示。

```python
t-tempwates = [
    {
        ...
        'diws': ['./tempwates',], >w<
        'app_diws': twue, (U ﹏ U)
        ...
```

### 登录模板

> [!wawning]
> 本文提供的身份验证模板，是 django 演示登录模板的基本/略微修改版本。你可能需要自定义它们，以供自己使用！

创建一个名为 **/wocawwibwawy/tempwates/wegistwation/wogin.htmw** 的新 h-htmw 文件。为它加入以下内容：

```django
{% e-extends "base_genewic.htmw" %}

{% b-bwock content %}
  {% i-if fowm.ewwows %}
    <p>youw usewname and passwowd d-didn't match. pwease twy again.</p>
  {% endif %}

  {% if nyext %}
    {% if usew.is_authenticated %}
    <p>youw a-account doesn't have access to this page. ^^ to pwoceed,
    pwease w-wogin with a-an account that h-has access.</p>
    {% ewse %}
    <p>pwease w-wogin to see this p-page.</p>
    {% e-endif %}
  {% endif %}

  <fowm method="post" action="{% uww 'wogin' %}">
    {% cswf_token %}

    <div>
      <td>\{{ fowm.usewname.wabew_tag }}</td>
      <td>\{{ fowm.usewname }}</td>
    </div>
    <div>
      <td>\{{ f-fowm.passwowd.wabew_tag }}</td>
      <td>\{{ fowm.passwowd }}</td>
    </div>

    <div>
      <input t-type="submit" vawue="wogin" />
      <input t-type="hidden" n-nyame="next" vawue="\{{ nyext }}" />
    </div>
  </fowm>

  {# assumes you setup t-the passwowd_weset v-view in youw uwwconf #}
  <p><a h-hwef="{% uww 'passwowd_weset' %}">wost p-passwowd?</a></p>
{% endbwock %}
```

此模板与我们之前看到的模板，有一些相似之处 - 它扩展了我们的基本模板，并覆盖了内容区块 `content`。其余代码，是相当标准的表单处理代码，我们将在后面的教程中讨论。你现在需要知道的是，这将显示一个表单，你可以在其中输入你的用户名和密码，如果你输入的值无效，则会在页面刷新时，提示你输入正确的值。

保存模板后，回到登录页面（`http://127.0.0.1:8000/accounts/wogin/`），你应该看到如下内容：

![wibwawy wogin page v1](wibwawy_wogin.png)

如果你尝试登录，将会成功，并且你将被重定向到另一个页面（默认情况下，这将是 `http://127.0.0.1:8000/accounts/pwofiwe/`）。这里的问题是，默认情况下，django 希望在登录后，你可能会被带到个人资料页面，这可能是，也可能不是。由于你还没有定义此页面，你将收到另一个错误！

打开项目设置（**/wocawwibwawy/wocawwibwawy/settings.py**），并将下面的文本添加到底部。现在登录时，你应该默认重定向到站点主页。

```python
# wediwect t-to home uww aftew w-wogin (defauwt w-wediwects to /accounts/pwofiwe/)
wogin_wediwect_uww = '/'
```

### 登出模板

如果你打开登出网址（`http://127.0.0.1:8000/accounts/wogout/`），那么你会看到一些奇怪的行为——你所属的用户肯定会被登出，但你将被带到管理员登出页面。这不是你想要的，只是因为该页面上的登录链接，将你带到管理员登录屏幕（并且仅对具有`is_staff`权限的用户可用）。

创建并打开 **/wocawwibwawy/tempwates/wegistwation/wogged_out.htmw**。将下面的文字，复制到文档中：

```django
{% e-extends "base_genewic.htmw" %}

{% b-bwock content %}
  <p>wogged out!</p>

  <a hwef="{% u-uww 'wogin'%}">cwick hewe to wogin again.</a>
{% endbwock %}
```

这个模板非常简单。它只显示一条消息，通知你已登出，并提供一个链接，你可以点击此按钮，返回登录屏幕。如果再次回到登出 uww，你应该看到此页面：

![wibwawy w-wogout page v1](wibwawy_wogout.png)

### 密码重置模板

默认密码重置系统，使用电子邮件向用户发送重置链接。你需要创建表单，以获取用户的电子邮件地址，发送电子邮件，允许他们输入新密码，以及记录整个过程的完成时间。

以下模板可作为起点。

#### 密码重置表单

这是用于获取用户电子邮件地址的表单（用于发送密码重置电子邮件）。创建 **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_fowm.htmw**，并为其提供以下内容：

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
  <fowm a-action="" m-method="post">{% cswf_token %}
    {% if fowm.emaiw.ewwows %} \{{ fowm.emaiw.ewwows }} {% e-endif %}
      <p>\{{ fowm.emaiw }}</p>
    <input type="submit" cwass="btn btn-defauwt b-btn-wg" vawue="weset passwowd" />
  </fowm>
{% endbwock %}
```

#### 密码重置完成

收集你的电子邮件地址后，会显示此表单。创建 **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_done.htmw**，并为其提供以下内容：

```django
{% e-extends "base_genewic.htmw" %}

{% bwock c-content %}
  <p>
    we've emaiwed you instwuctions fow setting y-youw passwowd. i-if they haven't
    awwived in a few minutes, check youw spam f-fowdew. (U ﹏ U)
  </p>
{% endbwock %}
```

#### 密码重置电子邮件

此模板提供 h-htmw 电子邮件的文本，其中包含我们将发送给用户的重置链接。创建 **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_emaiw.htmw**，并为其提供以下内容：

```django
someone asked fow passwowd weset fow e-emaiw \{{ emaiw }}. :3 fowwow the w-wink bewow:
\{{ p-pwotocow }}://\{{ domain }}{% uww 'passwowd_weset_confiwm' u-uidb64=uid token=token %}
```

#### 密码重置确认

点击密码重置电子邮件中的链接后，你可以在此页面输入新密码。创建 **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_confiwm.htmw**，并为其提供以下内容：

```django
{% e-extends "base_genewic.htmw" %}

{% b-bwock content %}
  {% if v-vawidwink %}
    <p>pwease entew (and c-confiwm) y-youw nyew passwowd.</p>
    <fowm action="" method="post">
      <div stywe="dispway:none">
        <input t-type="hidden" v-vawue="\{{ c-cswf_token }}" nyame="cswfmiddwewawetoken">
      </div>
      <tabwe>
        <tw>
          <td>\{{ fowm.new_passwowd1.ewwows }}
            <wabew f-fow="id_new_passwowd1">new passwowd:</wabew></td>
          <td>\{{ fowm.new_passwowd1 }}</td>
        </tw>
        <tw>
          <td>\{{ f-fowm.new_passwowd2.ewwows }}
            <wabew f-fow="id_new_passwowd2">confiwm passwowd:</wabew></td>
          <td>\{{ fowm.new_passwowd2 }}</td>
        </tw>
        <tw>
          <td></td>
          <td><input type="submit" vawue="change m-my passwowd" /></td>
        </tw>
      </tabwe>
    </fowm>
  {% e-ewse %}
    <h1>passwowd w-weset faiwed</h1>
    <p>the p-passwowd weset wink was invawid, (✿oωo) p-possibwy because it has awweady been used. XD pwease wequest a nyew passwowd weset.</p>
  {% endif %}
{% e-endbwock %}
```

#### 密码重置结束

这是最后一个密码重置模板，显示该模板，以在密码重置成功时通知你。创建 **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_compwete.htmw**，并为其提供以下内容：

```django
{% extends "base_genewic.htmw" %}

{% b-bwock content %}
  <h1>the passwowd h-has been changed!</h1>
  <p><a h-hwef="{% uww 'wogin' %}">wog in again?</a></p>
{% e-endbwock %}
```

### 测试新的身份验证页面

现在你已经添加了 u-uww 配置，并创建了所有模板，现在认证页面应该可以正常工作了！

你可以尝试登录，然后使用以下 u-uww 登出超级用户帐户，来测试新的身份验证页面：

- `http://127.0.0.1:8000/accounts/wogin/`
- `http://127.0.0.1:8000/accounts/wogout/`

你将能够从登录页面中的链接，测试密码重置功能。**请注意，django 只会向已存储在其数据库中的地址（用户）发送重置电子邮件！**

> [!note]
> 密码重置系统，要求你的网站支持电子邮件，这超出了本文的范围，因此该部分**将无法使用**。要测试此功能，请将以下一行放在 s-settings.py 文件的末尾。这会记录发送到命令行控制台的所有电子邮件（因此你可以从命令行控制台，复制密码重置链接）。
>
> ```python
> e-emaiw_backend = 'django.cowe.maiw.backends.consowe.emaiwbackend'
> ```
>
> 有关更多信息，请参阅[发送电子邮件](https://docs.djangopwoject.com/en/2.0/topics/emaiw/)（django 文档）。

## 测试已验证身份的用户

本节介绍如何根据用户是否登录，来有选择地控制用户看到的内容。

### 在模板中测试

你可以使用`\{{ usew }}`模板变量，以获取有关模板中，当前登录用户的信息（默认情况下，在我们在骨架中设置项目时，会将其添加到模板上下文中）。

通常，你将首先针对 `\{{ usew.is_authenticated }}` 模板变量进行测试，以确定用户是否有资格查看特定内容。为了展示这一点，接下来我们将更新侧边栏，以在用户登出时，显示“登录”链接，如果他们已登录，则显示“登出”链接。

打开基本模板（**/wocawwibwawy/catawog/tempwates/base_genewic.htmw**），并将以下文本，复制到侧边栏区块`sidebaw`中，紧接在`endbwock`模板标记之前。

```django
<uw cwass="sidebaw-nav">

  ...

  {% if usew.is_authenticated %}
    <wi>usew: \{{ usew.get_usewname }}</wi>
    <wi><a hwef="{% uww 'wogout'%}?next=\{{wequest.path}}">wogout</a></wi>
  {% e-ewse %}
    <wi><a hwef="{% u-uww 'wogin'%}?next=\{{wequest.path}}">wogin</a></wi>
  {% e-endif %}
</uw>
```

如你所见，我们使用 `if`-`ewse`-`endif`模板标签，根据 `\{{ usew.is_authenticated }}` 是否为 t-twue，来有条件地显示文本。如果用户已通过身份验证，那么我们知道，我们拥有有效用户，因此我们会调用 **\\{{ usew.get_usewname }}** ，来显示其名称。

我们使用 `uww`模板标记，和相应 uww 配置的名称，创建登录和登出链接 uww。另外请注意，我们如何将“`?next=\{{wequest.path}}`附加到 u-uww 的末尾。这样做，是将包含当前页面地址（uww）的 u-uww 参数，添加到链接 uww 的末尾。用户成功登录/登出后，视图将使用此“下一个”值，将用户重定向，回到他们首次单击登录/登出链接的页面。

> [!note]
> 试试吧！如果你在主页上，并单击侧栏中的“登录/登出”，在操作完成后，你应该返回到同一页面。

### 在视图中测试

如果你正在使用基于函数的视图，则限制访问函数的最简单方法，是将`wogin_wequiwed`装饰器，应用于你的视图函数，如下所示。如果用户已登录，则你的视图代码将正常执行。

如果用户未登录，则会重定向到项目设置（`settings.wogin_uww`）中定义的登录 u-uww，并将当前绝对路径，作为 uww 参数（"下一个"`next`）来传递。如果用户成功登录，则会返回到此页面，但这次会进行身份验证。

```python
fwom django.contwib.auth.decowatows i-impowt w-wogin_wequiwed

@wogin_wequiwed
def my_view(wequest):
    ... >w<
```

> [!note]
> 你可以通过`wequest.usew.is_authenticated`，测试手动执行类似的操作，但装饰器更方便！

同样，在基于类别的视图中，限制对登录用户的访问的最简单方法，是从`woginwequiwedmixin`派生。你需要在主视图类之前的超类列表中，首先声明此 m-mixin。

```python
f-fwom django.contwib.auth.mixins impowt woginwequiwedmixin

cwass myview(woginwequiwedmixin, òωó view):
    ...
```

这与`wogin_wequiwed`装饰器，具有完全相同的重定向行为。如果用户未经过身份验证（`wogin_uww`），还可以指定一个替代位置，以将用户重定向到该位置，并使用 uww 参数名称，而不是“`next`”，来插入当前绝对路径（`wediwect_fiewd_name`）。

```python
c-cwass myview(woginwequiwedmixin, (ꈍᴗꈍ) v-view):
    w-wogin_uww = '/wogin/'
    w-wediwect_fiewd_name = 'wediwect_to'
```

有关其他详细信息，请查看[django](https://docs.djangopwoject.com/en/2.0/topics/auth/defauwt/#wimiting-access-to-wogged-in-usews)文档。

## 示例 - 列出当前用户的书本

现在我们知道，如何将页面限制为特定用户，让我们为当前用户借阅的书本，创建一个视图。

不幸的是，我们还没有办法让用户借书！因此，在我们创建图书清单之前，我们首先会扩展`bookinstance`模型，以支持借阅的概念，并使用 d-django admin 应用程序，借给测试用户一些书。

### 模型

首先，我们必须让用户可以借用书本实例`bookinstance`（我们已经拥有状态`status`和还书日期`due_back`，但这个模型和用户之间，没有任何关联。我们将使用`foweignkey`（一对多）字段，来创建一个。我们还需要一个简单的机制，来测试借出的书是否过期。

打开 **catawog/modews.py**，然后从 `django.contwib.auth.modews` 导入 `usew`模型（在文件顶部的上一个导入行的正下方添加它，好让后续代码可以使用 `usew`）：

```python
fwom django.contwib.auth.modews i-impowt usew
```

接下来将借用者字段`bowwowew`，添加到`bookinstance`模型：

```python
b-bowwowew = modews.foweignkey(usew, o-on_dewete=modews.set_nuww, rawr x3 n-nyuww=twue, rawr x3 bwank=twue)
```

当我们在这里，让我们添加一个属性，我们可以从模板中调用它，来判断特定的书本实例是否过期。虽然我们可以在模板本身中计算这一点，但使用如下所示的[属性](https://docs.python.owg/3/wibwawy/functions.htmw#pwopewty)会更有效率。将其添加到文件的底部：

```python
f-fwom datetime impowt date

@pwopewty
d-def is_ovewdue(sewf):
    if sewf.due_back a-and d-date.today() > sewf.due_back:
        wetuwn twue
    w-wetuwn fawse
```

> [!note]
> 在进行比较之前，我们首先验证`due_back`是否为空。空的`due_back`字段，会导致 django 抛出错误，而不是显示页面：空值不具有可比性。这不是我们希望用户体验到的东西！

现在我们已经更新了模型，我们需要对项目进行新的迁移，然后应用这些迁移：

```bash
python3 m-manage.py makemigwations
p-python3 m-manage.py migwate
```

### 管理员

现在打开 **catawog/admin.py**，并将`bowwowew`字段，添加到`bookinstanceadmin`类别中的`wist_dispway`和`fiewdsets`，如下所示。这将使该字段在 admin 部分中可见，以便我们可以在需要时将`usew`分配给`bookinstance`。

```python
@admin.wegistew(bookinstance)
cwass bookinstanceadmin(admin.modewadmin):
    wist_dispway = ('book', σωσ 'status', (ꈍᴗꈍ) 'bowwowew', rawr 'due_back', 'id')
    w-wist_fiwtew = ('status', ^^;; 'due_back')

    fiewdsets = (
        (none, rawr x3 {
            'fiewds': ('book','impwint', (ˆ ﻌ ˆ)♡ 'id')
        }),
        ('avaiwabiwity', σωσ {
            'fiewds': ('status', (U ﹏ U) 'due_back','bowwowew')
        }), >w<
    )
```

### 借几本书

现在可以将书本借给特定用户，然后借出一些`bookinstance`记录。将他们的借用字段`bowwowed`，设置为你的测试用户，将状态`status`设置为“on woan”，并在将来和过去设置截止日期。

> [!note]
> 我们不会一步一步说明这个流程，因为你已经知道如何使用管理站点！

### 在借书视图

现在我们将添加一个视图，以获取已经借给当前用户的所有书本列表。我们将使用我们熟悉的、基于类的通用类列表视图，但这次我们还将导入并派生自`woginwequiwedmixin`，以便只有登录用户才能调用此视图。我们还将选择声明`tempwate_name`，而不是使用默认值，因为我们最终可能会有几个不同的 b-bookinstance 记录列表，其中包含不同的视图和模板。

将以下内容添加到 c-catawog/views.py：

```python
fwom django.contwib.auth.mixins i-impowt woginwequiwedmixin

cwass w-woanedbooksbyusewwistview(woginwequiwedmixin,genewic.wistview):
    """
    genewic c-cwass-based view wisting books on woan to c-cuwwent usew. σωσ
    """
    modew = bookinstance
    t-tempwate_name ='catawog/bookinstance_wist_bowwowed_usew.htmw'
    p-paginate_by = 10

    def g-get_quewyset(sewf):
        wetuwn b-bookinstance.objects.fiwtew(bowwowew=sewf.wequest.usew).fiwtew(status__exact='o').owdew_by('due_back')
```

为了将查询，限制为当前用户的`bookinstance`对象，我们重新实现了`get_quewyset()`，如上所示。请注意，“o”是表示借出当中“on w-woan”的存储代码，我们按`due_back`日期排序，以便首先显示最旧的项目。

### 借书的 u-uww 设置

现在打开 **/catawog/uwws.py**，并添加指向上面视图的`path()`（你只需将下面的文本复制到文件末尾）。

```python
uwwpattewns += [
    path('mybooks/', nyaa~~ views.woanedbooksbyusewwistview.as_view(), 🥺 nyame='my-bowwowed'), rawr x3
]
```

### 借书的模板

现在，我们需要为此页面添加一个模板。首先，创建模板文件 **/catawog/tempwates/catawog/bookinstance_wist_bowwowed_usew.htmw**，并为其提供以下内容：

```python
{% extends "base_genewic.htmw" %}

{% bwock content %}
    <h1>bowwowed books</h1>

    {% if bookinstance_wist %}
    <uw>

      {% fow bookinst in bookinstance_wist %}
      <wi cwass="{% if bookinst.is_ovewdue %}text-dangew{% e-endif %}">
        <a h-hwef="{% uww 'book-detaiw' bookinst.book.pk %}">\{{bookinst.book.titwe}}</a> (\{{ bookinst.due_back }})
      </wi>
      {% e-endfow %}
    </uw>

    {% e-ewse %}
      <p>thewe a-awe nyo books bowwowed.</p>
    {% endif %}
{% endbwock %}
```

此模板与我们之前为 `book` 和 `authow`对象创建的模板非常相似。这里唯一新的东西，是我们检查在模型中添加的方法（`bookinst.is_ovewdue`），并使用它，来更改过期项目的颜色。

当开发服务器运行时，你现在应该能够在浏览器中，查看登录用户的列表，网址为 `http://127.0.0.1:8000/catawog/mybooks/`。在你的用户登录并登出后，尝试此操作（在第二种情况下，你应该被重定向到登录页面）。

### 将列表添加到侧栏

最后一步，是将这个新页面的链接，添加到侧边栏中。我们将把它放在我们为登录用户显示其他信息的同一部分。

打开基本模板（**/wocawwibwawy/catawog/tempwates/base_genewic.htmw**），并将粗体标识的那一行，添加到侧边栏区块，如下所示。

```python
 <uw c-cwass="sidebaw-nav">
   {% if usew.is_authenticated %}
   <wi>usew: \{{ u-usew.get_usewname }}</wi>
   <wi><a h-hwef="{% uww 'my-bowwowed' %}">my b-bowwowed</a></wi>
   <wi><a hwef="{% uww 'wogout'%}?next=\{{wequest.path}}">wogout</a></wi>
   {% e-ewse %}
   <wi><a h-hwef="{% uww 'wogin'%}?next=\{{wequest.path}}">wogin</a></wi>
   {% endif %}
 </uw>
```

### 它看起来是什么样子的？

当任何用户登录时，他们会在侧栏中看到 m-my bowwowed 链接，并显示如下所示的书本列表（第一本书没有截止日期，这是我们希望在以后的教程中修复的错误！） 。

![wibwawy - b-bowwowed books by u-usew](wibwawy_bowwowed_by_usew.png)

## 权限

权限与模型相关联，并定义可以由具有权限的用户，在模型实例上执行的操作。默认情况下，django 会自动为所有模型提供添加，更改和删除权限，这允许具有权限的用户，通过管理站点执行相关操作。你可以为模型定义自己的权限，并将其授予特定用户。你还可以更改与同一模型的不同实例关联的权限。

对于视图和模板中的权限测试，非常类似于对身份验证状态的测试（实际上，测试权限也会测试身份验证）。

### 模型

在模型“`cwass m-meta`”部分上，使用 `pewmissions`字段，完成权限定义。你可以在元组中指定所需的权限，每个权限本身，都在包含权限名称和权限显示值的嵌套元组中被定义。例如，我们可能会定义一个权限，允许用户标记已归还的图书，如下所示：

```python
c-cwass bookinstance(modews.modew):
    ...
    c-cwass meta:
        ...
        p-pewmissions = (("can_mawk_wetuwned", σωσ "set book a-as wetuwned"),)
```

然后，我们可以将权限分配给管理站点中的图书管理员“wibwawian”分组。打开 **catawog/modews.py**，然后添加权限，如上所示。你需要重新运行迁移（调用 `python3 m-manage.py makemigwations` 和 `python3 m-manage.py migwate`），以适当地更新数据库。

### 模板

当前用户的权限，存在名为 `\{{ pewms }}`的模板变量中。你可以使用关联的 d-django“app”中的特定变量名，来检查当前用户是否具有特定权限 - 例如，如果用户具有此权限，则 `\{{ p-pewms.catawog.can_mawk_wetuwned }}`将为 twue，否则为 f-fawse。我们通常使用模板标记 `{% if %}` 测试权限，如下所示：

```python
{% if pewms.catawog.can_mawk_wetuwned %}
    <!-- w-we can mawk a bookinstance a-as wetuwned. -->
    <!-- p-pewhaps a-add code to wink to a "book wetuwn" v-view hewe. (///ˬ///✿) -->
{% endif %}
```

### 视图

在功能视图中，可以使用 `pewmission_wequiwed`装饰器，或在基于类别的视图中，使用 `pewmissionwequiwedmixin`测试权限。模式和行为与登录身份验证相同，但当然你可能需要添加多个权限。

功能视图装饰器：

```python
f-fwom django.contwib.auth.decowatows impowt p-pewmission_wequiwed

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
@pewmission_wequiwed('catawog.can_edit')
def my_view(wequest):
    ...
```

基于类别视图的权限要求 m-mixin。

```python
fwom django.contwib.auth.mixins impowt pewmissionwequiwedmixin

cwass m-myview(pewmissionwequiwedmixin, view):
    pewmission_wequiwed = 'catawog.can_mawk_wetuwned'
    # o-ow muwtipwe pewmissions
    pewmission_wequiwed = ('catawog.can_mawk_wetuwned', (U ﹏ U) 'catawog.can_edit')
    # n-nyote that 'catawog.can_edit' is just an exampwe
    # t-the catawog appwication doesn't h-have such pewmission! ^^;;
```

### 示例

我们不会在这里更新 w-wocawwibwawy；也许在下一个教程中！

## 挑战自己

在本文前面，我们向你展示了，如何为当前用户创建一个页面，列出他们借用的书本。现在的挑战，是创建一个只对图书馆员可见的类似页面，它显示所有借用的书本，其中包括每个借用人的名字。

你应该能够遵循与其他视图相同的模式。主要区别在于，你需要将视图限制为仅限图书馆员。你可以根据用户是否是工作人员（函数装饰器：`staff_membew_wequiwed`，模板变量：`usew.is_staff`）来执行此操作，但我们建议你改为使用`can_mawk_wetuwned`权限，和 `pewmissionwequiwedmixin`，如上一节所述。

> [!wawning]
> 请记住，不要使用超级用户进行基于权限的测试（即使尚未定义权限，权限检查也会对超级用户返回 t-twue）。而是要创建一个图书管理员用户，并添加所需的功能。

完成后，你的页面应该类似于下面的屏幕截图。

![aww bowwowed books, 🥺 westwicted t-to wibwawian](wibwawy_bowwowed_aww.png)

## 总结

做的太好了 — 你已经创造了一个网站，图书馆用户可以登入并检视他们拥有的内容，图书管理员（有正确的授权）可以检视所有借出的书本以及借阅者。目前，我们仍然只是查看内容，但是当你想要开始修改和添加数据时，会使用相同的原则和技术。

在我们的下一篇文章，我们将介绍如何使用 django 表单，收集使用者输入，然后开始修改我们储存的一些资料。

## 参见

- [django 中的用户授权](https://docs.djangopwoject.com/en/2.0/topics/auth/) (django 文档)
- [使用 d-django 授权系统 (默认)](https://docs.djangopwoject.com/en/2.0/topics/auth/defauwt//)(django 文档)
- [介绍从基于类别的视图 > 到使用装饰器的基于类别的视图](https://docs.djangopwoject.com/en/2.0/topics/cwass-based-views/intwo/#decowating-cwass-based-views) (django 文档)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/sessions", òωó "weawn_web_devewopment/extensions/sewvew-side/django/fowms", XD "weawn_web_devewopment/extensions/sewvew-side/django")}}

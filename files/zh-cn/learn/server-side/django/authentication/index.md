---
title: Django 教程 8：用户授权与许可
slug: Learn/Server-side/Django/Authentication
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}

在本教程中，我们将向你展示如何允许用户使用自己的帐户登录到你的网站，以及如何根据用户是否已登录及其*权限*来控制他们可以执行和查看的内容。作为演示的一部分，我们将扩展[LocalLibrary](/zh-CN/docs/Learn/Server-side/Django/Tutorial_local_library_website)网站，添加登录页面和注销页面，以及用户和员工特定的页面以查看已借阅的图书。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        完成之前的所有教程主题，包括
        <a href="/zh-CN/docs/Learn/Server-side/Django/Sessions"
          >Django 教程 7：Sessions 框架</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解如何设置和使用用户身份验证和权限。</td>
    </tr>
  </tbody>
</table>

## 概观

Django 提供了一个身份验证和授权（“权限”）系统，该系统构建在[上一个教程](/zh-CN/docs/Learn/Server-side/Django/Sessions)中讨论的会话框架之上，允许你验证用户凭据，并定义每个用户可允许执行的操作。该框架包括用户`Users`和分组`Groups`的内置模型（一次向多个用户应用权限的通用方法），用于登录用户的权限/标志，以指定用户是否可以执行任务，表单和视图，以及查看限制内容的工具。

> [!NOTE]
> Django 身份验证系统的目标非常通用，因此不提供其他 Web 身份验证系统中，所提供的某些功能。某些常见问题的解决方案，可作为第三方软件包提供。例如，限制登录尝试，和针对第三方的身份验证（例如 OAuth）。

在本教程中，我们将向你展示，如何在[LocalLibrary](/zh-CN/docs/Learn/Server-side/Django/Tutorial_local_library_website)网站中，启用用户身份验证，创建你自己的登录和注销页面，为模型添加权限，以及控制对页面的访问。我们将使用身份验证/权限，来显示用户和图书馆员借用图书的列表。

身份验证系统非常灵活，你可以根据需要，从头开始构建 URLs，表单，视图和模板，只需调用提供的 API，即可登录用户。但是，在本文中，我们将在登录和注销页面，使用 Django 的“库存”身份验证视图和表单。我们仍然需要创建一些模板，但这很简单。

我们还将向你展示如何创建权限，以及检查视图和模板中的登录状态和权限。

## 启用身份验证

我们在[创建框架网站](/zh-CN/docs/Learn/Server-side/Django/skeleton_website)时（在教程 2 中），自动启用了身份验证，因此你此时，无需再执行任何操作。

> [!NOTE]
> 当我们使用 `django-admin startproject` 命令，以创建应用程序时，所有必要的配置都已完成。当我们第一次调用 `python manage.py migrate` 时，创建了用户和模型权限的数据库表。

配置在项目文件（**locallibrary/locallibrary/settings.py**）的`INSTALLED_APPS`和`MIDDLEWARE`部分中设置，如下所示：

```python
INSTALLED_APPS = [
    ...
    'django.contrib.auth',  #Core authentication framework and its default models.
    'django.contrib.contenttypes',  #Django content type system (allows permissions to be associated with models).
    ....

MIDDLEWARE = [
    ...
    'django.contrib.sessions.middleware.SessionMiddleware',  #Manages sessions across requests
    ...
    'django.contrib.auth.middleware.AuthenticationMiddleware',  #Associates users with requests using sessions.
    ....
```

## 创建用户和分组

在教程 4 中，当我们查看 [Django 管理站点](/zh-CN/docs/Learn/Server-side/Django/Admin_site)时，你已经创建了第一个用户（这是一个超级用户，使用命令 `python manage.py createsuperuser` 创建）。我们的超级用户已经过身份验证，并拥有所有权限，因此我们需要创建一个测试用户，来代表普通网站用户。我们将使用管理站点，来创建我们的 locallibrary 组別和网站登录，因为这是最快的方法之一。

> [!NOTE]
> 你还可以用编程方式创建用户，如下所示。你会必须这样做，例如，如果要开发一个界面，能允许用户创建自己的登录（你不应该授予用户访问管理站点的权限）。
>
> ```python
> from django.contrib.auth.models import User
>
> # Create user and save to the database
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Update fields and then save again
> user.first_name = 'John'
> user.last_name = 'Citizen'
> user.save()
> ```

下面，我们首先创建一个分组，然后创建一个用户。即使我们还没有为我们的图书馆成员添加任何权限，如果我们以后需要，将它们添加到分组中，要比单独添加到每个成员要容易得多。

启动开发服务器，并到本地 Web 浏览器中的管理站点（<http://127.0.0.1:8000/admin/>）。使用超级用户帐户的凭据，登录该站点。Admin 站点的最上级显示所有模型，按“django application”排序。在“身份验证和授权” **Authentication and Authorisation** 部分，你可以单击用户 **Users**，或分组 **Groups** 链接，以查看其现有记录。

![Admin site - add groups or users](admin_authentication_add.png)

首先，我们为图书馆成员，创建一个新的分组。

1. 单击“添加” **Add** 按钮（“分组”Group 旁边）以创建新的分组；在分组的名称 **Name** ，输入“Library Members”。![Admin site - add group](admin_authentication_add_group.png)
2. 我们不需要该组的任何权限，因此只需按**SAVE**（你将进入分组列表）。

现在让我们创建一个用户：

1. 回到管理站点的主页
2. 单击“用户”旁边的“添加”按钮 **Add**，以打开“添加用户”对话框。![Admin site - add user pt1](admin_authentication_add_user_prt1.png)
3. 为测试用户输入适当的用户名（**Username）**和密码/密码确认**（Password/Password confirmation** ）
4. 按 **SAVE** 创建用户。

   管理站点将创建新用户，并立即转到“更改用户”屏幕，你可以在其中更改用户名（**username**），并添加用户模型的可选字段的信息。这些字段包括名字，姓氏，电子邮件地址，用户状态和权限（仅应设置活动标志 **Active**）。再往下，你可以指定用户的分组和权限，并查看与用户相关的重要日期（例如，他们的加入日期和上次登录日期）。

   ![Admin site - add user pt2](admin_authentication_add_user_prt2.png)

5. 在“分组”（_Groups_）部分中，从“可用分组”（_Available groups_）列表中，选择“图书馆成员”分组 **Library Member**，然后点击这些框之间的**右箭头**，将其移动到“选择的分组”（_Chosen groups_）框中。![Admin site - add user to group](admin_authentication_user_add_group.png)
6. 我们不需要在此处执行任何其他操作，因此只需再次选择 **SAVE** ，即可转到用户列表。

就是这样！现在你有一个“普通的图书馆成员”帐户，你可以使用该帐户进行测试（一旦我们实现了页面，使他们能够登录）。

> [!NOTE]
> 你应该尝试创建另一个图书馆用户。此外，为图书馆管理员创建一个分组，并添加一个用户！

## 设置身份验证视图

Django 提供了创建身份验证页面所需的几乎所有功能，让处理登录，注销和密码管理等工作，都能“开箱即用”。这些相关功能包括了 url 映射器，视图和表单，但它不包括模板 - 我们必须创建自己的模板！

在本节中，我们将展示如何将默认系统，集成到 LocalLibrary 网站并创建模板。我们将它们放在主项目的 URL 当中。

> [!NOTE]
> 你不必一定要使用这些代码，但你可能希望这样做，因为它使事情变得更容易。如果更改用户模型（高级主题！），你几乎肯定需要更改表单处理代码。但即便如此，你仍然可以使用先前已经有的视图功能。

> [!NOTE]
> 在这种情况下，我们可以合理地将认证页面（包括 URL 和模板）放在我们的目录应用程序中。但是，如果我们有多个应用程序，最好将这个共享登录行为分开，并让它在整个站点上可用，这就是我们在这里展示的内容！

### 项目网址

将以下内容，添加到项目 urls.py（**locallibrary/locallibrary/urls.py**）文件的底部：

```python
# Use include() to add URLS from the catalog application and authentication system
from django.urls import include

#Add Django site authentication urls (for login, logout, password management)
urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

打开 URL <http://127.0.0.1:8000/accounts/> （注意前面的斜杠！），Django 将显示一个错误，它无法找到此 URL，并列出它尝试过的所有 URL。从中你可以看到可以使用的 URL，例如：

> [!NOTE]
> 使用上面的方法，添加以下带有方括号中的名称的 URL，可用于反转 URL 映射。你不必实现任何其他内容 - 上面的 url 映射，会自动映射下面提到的 URL。
>
> ```python
> accounts/ login/ [name='login']
> accounts/ logout/ [name='logout']
> accounts/ password_change/ [name='password_change']
> accounts/ password_change/done/ [name='password_change_done']
> accounts/ password_reset/ [name='password_reset']
> accounts/ password_reset/done/ [name='password_reset_done']
> accounts/ reset/<uidb64>/<token>/ [name='password_reset_confirm']
> accounts/ reset/done/ [name='password_reset_complete']
> ```

现在尝试打开登录 URL（<http://127.0.0.1:8000/accounts/login/>）。这将再次失败，但有一个错误告诉你，我们在模板搜索路径上缺少必需的模板（**registration/login.html**）。你将在顶部的黄色部分中，看到以下文字：

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

下一步是在搜索路径上创建注册目录，然后添加 **login.html** 文件。

### 模板目录

我们希望在模板搜索路径中的目录 **/registration/** 某处，找到刚刚添加的 url（以及隐式视图）的关联模板。

对于此站点，我们将 HTML 页面，放在 **templates/registration/** 目录中。此目录应该位于项目的根目录中，即与 **catalog** 和 **locallibrary** 文件夹相同的目录）。请立即创建这些文件夹。

> [!NOTE]
> 你的文件夹结构，现在应如下所示：
> locallibrary (django project folder)
> |\_catalog
> |\_locallibrary
> |\_templates **(new)**
> |\_registration

要使这些目录对模板加载器可见（即将此目录放在模板搜索路径中），请打开项目设置（**/locallibrary/locallibrary/settings.py**），并更新`TEMPLATES` 部分的“`DIRS`”那一行，如下所示。

```python
TEMPLATES = [
    {
        ...
        'DIRS': ['./templates',],
        'APP_DIRS': True,
        ...
```

### 登录模板

> [!WARNING]
> 本文提供的身份验证模板，是 Django 演示登录模板的基本/略微修改版本。你可能需要自定义它们，以供自己使用！

创建一个名为 **/locallibrary/templates/registration/login.html** 的新 HTML 文件。为它加入以下内容：

```django
{% extends "base_generic.html" %}

{% block content %}
  {% if form.errors %}
    <p>Your username and password didn't match. Please try again.</p>
  {% endif %}

  {% if next %}
    {% if user.is_authenticated %}
    <p>Your account doesn't have access to this page. To proceed,
    please login with an account that has access.</p>
    {% else %}
    <p>Please login to see this page.</p>
    {% endif %}
  {% endif %}

  <form method="post" action="{% url 'login' %}">
    {% csrf_token %}

    <div>
      <td>\{{ form.username.label_tag }}</td>
      <td>\{{ form.username }}</td>
    </div>
    <div>
      <td>\{{ form.password.label_tag }}</td>
      <td>\{{ form.password }}</td>
    </div>

    <div>
      <input type="submit" value="login" />
      <input type="hidden" name="next" value="\{{ next }}" />
    </div>
  </form>

  {# Assumes you setup the password_reset view in your URLconf #}
  <p><a href="{% url 'password_reset' %}">Lost password?</a></p>
{% endblock %}
```

此模板与我们之前看到的模板，有一些相似之处 - 它扩展了我们的基本模板，并覆盖了内容区块 `content`。其余代码，是相当标准的表单处理代码，我们将在后面的教程中讨论。你现在需要知道的是，这将显示一个表单，你可以在其中输入你的用户名和密码，如果你输入的值无效，则会在页面刷新时，提示你输入正确的值。

保存模板后，回到登录页面（`http://127.0.0.1:8000/accounts/login/`），你应该看到如下内容：

![Library login page v1](library_login.png)

如果你尝试登录，将会成功，并且你将被重定向到另一个页面（默认情况下，这将是 `http://127.0.0.1:8000/accounts/profile/`）。这里的问题是，默认情况下，Django 希望在登录后，你可能会被带到个人资料页面，这可能是，也可能不是。由于你还没有定义此页面，你将收到另一个错误！

打开项目设置（**/locallibrary/locallibrary/settings.py**），并将下面的文本添加到底部。现在登录时，你应该默认重定向到站点主页。

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### 登出模板

如果你打开登出网址（`http://127.0.0.1:8000/accounts/logout/`），那么你会看到一些奇怪的行为——你所属的用户肯定会被登出，但你将被带到管理员登出页面。这不是你想要的，只是因为该页面上的登录链接，将你带到管理员登录屏幕（并且仅对具有`is_staff`权限的用户可用）。

创建并打开 **/locallibrary/templates/registration/logged_out.html**。将下面的文字，复制到文档中：

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>

  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

这个模板非常简单。它只显示一条消息，通知你已登出，并提供一个链接，你可以点击此按钮，返回登录屏幕。如果再次回到登出 URL，你应该看到此页面：

![Library logout page v1](library_logout.png)

### 密码重置模板

默认密码重置系统，使用电子邮件向用户发送重置链接。你需要创建表单，以获取用户的电子邮件地址，发送电子邮件，允许他们输入新密码，以及记录整个过程的完成时间。

以下模板可作为起点。

#### 密码重置表单

这是用于获取用户电子邮件地址的表单（用于发送密码重置电子邮件）。创建 **/locallibrary/templates/registration/password_reset_form.html**，并为其提供以下内容：

```django
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">{% csrf_token %}
    {% if form.email.errors %} \{{ form.email.errors }} {% endif %}
      <p>\{{ form.email }}</p>
    <input type="submit" class="btn btn-default btn-lg" value="Reset password" />
  </form>
{% endblock %}
```

#### 密码重置完成

收集你的电子邮件地址后，会显示此表单。创建 **/locallibrary/templates/registration/password_reset_done.html**，并为其提供以下内容：

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>
    We've emailed you instructions for setting your password. If they haven't
    arrived in a few minutes, check your spam folder.
  </p>
{% endblock %}
```

#### 密码重置电子邮件

此模板提供 HTML 电子邮件的文本，其中包含我们将发送给用户的重置链接。创建 **/locallibrary/templates/registration/password_reset_email.html**，并为其提供以下内容：

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol }}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### 密码重置确认

点击密码重置电子邮件中的链接后，你可以在此页面输入新密码。创建 **/locallibrary/templates/registration/password_reset_confirm.html**，并为其提供以下内容：

```django
{% extends "base_generic.html" %}

{% block content %}
  {% if validlink %}
    <p>Please enter (and confirm) your new password.</p>
    <form action="" method="post">
      <div style="display:none">
        <input type="hidden" value="\{{ csrf_token }}" name="csrfmiddlewaretoken">
      </div>
      <table>
        <tr>
          <td>\{{ form.new_password1.errors }}
            <label for="id_new_password1">New password:</label></td>
          <td>\{{ form.new_password1 }}</td>
        </tr>
        <tr>
          <td>\{{ form.new_password2.errors }}
            <label for="id_new_password2">Confirm password:</label></td>
          <td>\{{ form.new_password2 }}</td>
        </tr>
        <tr>
          <td></td>
          <td><input type="submit" value="Change my password" /></td>
        </tr>
      </table>
    </form>
  {% else %}
    <h1>Password reset failed</h1>
    <p>The password reset link was invalid, possibly because it has already been used. Please request a new password reset.</p>
  {% endif %}
{% endblock %}
```

#### 密码重置结束

这是最后一个密码重置模板，显示该模板，以在密码重置成功时通知你。创建 **/locallibrary/templates/registration/password_reset_complete.html**，并为其提供以下内容：

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### 测试新的身份验证页面

现在你已经添加了 URL 配置，并创建了所有模板，现在认证页面应该可以正常工作了！

你可以尝试登录，然后使用以下 URL 登出超级用户帐户，来测试新的身份验证页面：

- `http://127.0.0.1:8000/accounts/login/`
- `http://127.0.0.1:8000/accounts/logout/`

你将能够从登录页面中的链接，测试密码重置功能。**请注意，Django 只会向已存储在其数据库中的地址（用户）发送重置电子邮件！**

> [!NOTE]
> 密码重置系统，要求你的网站支持电子邮件，这超出了本文的范围，因此该部分**将无法使用**。要测试此功能，请将以下一行放在 settings.py 文件的末尾。这会记录发送到命令行控制台的所有电子邮件（因此你可以从命令行控制台，复制密码重置链接）。
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> 有关更多信息，请参阅[发送电子邮件](https://docs.djangoproject.com/en/2.0/topics/email/)（Django 文档）。

## 测试已验证身份的用户

本节介绍如何根据用户是否登录，来有选择地控制用户看到的内容。

### 在模板中测试

你可以使用`\{{ user }}`模板变量，以获取有关模板中，当前登录用户的信息（默认情况下，在我们在骨架中设置项目时，会将其添加到模板上下文中）。

通常，你将首先针对 `\{{ user.is_authenticated }}` 模板变量进行测试，以确定用户是否有资格查看特定内容。为了展示这一点，接下来我们将更新侧边栏，以在用户登出时，显示“登录”链接，如果他们已登录，则显示“登出”链接。

打开基本模板（**/locallibrary/catalog/templates/base_generic.html**），并将以下文本，复制到侧边栏区块`sidebar`中，紧接在`endblock`模板标记之前。

```django
<ul class="sidebar-nav">

  ...

  {% if user.is_authenticated %}
    <li>User: \{{ user.get_username }}</li>
    <li><a href="{% url 'logout'%}?next=\{{request.path}}">Logout</a></li>
  {% else %}
    <li><a href="{% url 'login'%}?next=\{{request.path}}">Login</a></li>
  {% endif %}
</ul>
```

如你所见，我们使用 `if`-`else`-`endif`模板标签，根据 `\{{ user.is_authenticated }}` 是否为 true，来有条件地显示文本。如果用户已通过身份验证，那么我们知道，我们拥有有效用户，因此我们会调用 **\\{{ user.get_username }}** ，来显示其名称。

我们使用 `url`模板标记，和相应 URL 配置的名称，创建登录和登出链接 URL。另外请注意，我们如何将“`?next=\{{request.path}}`附加到 URL 的末尾。这样做，是将包含当前页面地址（URL）的 URL 参数，添加到链接 URL 的末尾。用户成功登录/登出后，视图将使用此“下一个”值，将用户重定向，回到他们首次单击登录/登出链接的页面。

> [!NOTE]
> 试试吧！如果你在主页上，并单击侧栏中的“登录/登出”，在操作完成后，你应该返回到同一页面。

### 在视图中测试

如果你正在使用基于函数的视图，则限制访问函数的最简单方法，是将`login_required`装饰器，应用于你的视图函数，如下所示。如果用户已登录，则你的视图代码将正常执行。

如果用户未登录，则会重定向到项目设置（`settings.LOGIN_URL`）中定义的登录 URL，并将当前绝对路径，作为 URL 参数（"下一个"`next`）来传递。如果用户成功登录，则会返回到此页面，但这次会进行身份验证。

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    ...
```

> [!NOTE]
> 你可以通过`request.user.is_authenticated`，测试手动执行类似的操作，但装饰器更方便！

同样，在基于类别的视图中，限制对登录用户的访问的最简单方法，是从`LoginRequiredMixin`派生。你需要在主视图类之前的超类列表中，首先声明此 mixin。

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    ...
```

这与`login_required`装饰器，具有完全相同的重定向行为。如果用户未经过身份验证（`login_url`），还可以指定一个替代位置，以将用户重定向到该位置，并使用 URL 参数名称，而不是“`next`”，来插入当前绝对路径（`redirect_field_name`）。

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

有关其他详细信息，请查看[Django](https://docs.djangoproject.com/en/2.0/topics/auth/default/#limiting-access-to-logged-in-users)文档。

## 示例 - 列出当前用户的书本

现在我们知道，如何将页面限制为特定用户，让我们为当前用户借阅的书本，创建一个视图。

不幸的是，我们还没有办法让用户借书！因此，在我们创建图书清单之前，我们首先会扩展`BookInstance`模型，以支持借阅的概念，并使用 Django Admin 应用程序，借给测试用户一些书。

### 模型

首先，我们必须让用户可以借用书本实例`BookInstance`（我们已经拥有状态`status`和还书日期`due_back`，但这个模型和用户之间，没有任何关联。我们将使用`ForeignKey`（一对多）字段，来创建一个。我们还需要一个简单的机制，来测试借出的书是否过期。

打开 **catalog/models.py**，然后从 `django.contrib.auth.models` 导入 `User`模型（在文件顶部的上一个导入行的正下方添加它，好让后续代码可以使用 `User`）：

```python
from django.contrib.auth.models import User
```

接下来将借用者字段`borrower`，添加到`BookInstance`模型：

```python
borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
```

当我们在这里，让我们添加一个属性，我们可以从模板中调用它，来判断特定的书本实例是否过期。虽然我们可以在模板本身中计算这一点，但使用如下所示的[属性](https://docs.python.org/3/library/functions.html#property)会更有效率。将其添加到文件的底部：

```python
from datetime import date

@property
def is_overdue(self):
    if self.due_back and date.today() > self.due_back:
        return True
    return False
```

> [!NOTE]
> 在进行比较之前，我们首先验证`due_back`是否为空。空的`due_back`字段，会导致 Django 抛出错误，而不是显示页面：空值不具有可比性。这不是我们希望用户体验到的东西！

现在我们已经更新了模型，我们需要对项目进行新的迁移，然后应用这些迁移：

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### 管理员

现在打开 **catalog/admin.py**，并将`borrower`字段，添加到`BookInstanceAdmin`类别中的`list_display`和`fieldsets`，如下所示。这将使该字段在 Admin 部分中可见，以便我们可以在需要时将`User`分配给`BookInstance`。

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_display = ('book', 'status', 'borrower', 'due_back', 'id')
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book','imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back','borrower')
        }),
    )
```

### 借几本书

现在可以将书本借给特定用户，然后借出一些`BookInstance`记录。将他们的借用字段`borrowed`，设置为你的测试用户，将状态`status`设置为“On loan”，并在将来和过去设置截止日期。

> [!NOTE]
> 我们不会一步一步说明这个流程，因为你已经知道如何使用管理站点！

### 在借书视图

现在我们将添加一个视图，以获取已经借给当前用户的所有书本列表。我们将使用我们熟悉的、基于类的通用类列表视图，但这次我们还将导入并派生自`LoginRequiredMixin`，以便只有登录用户才能调用此视图。我们还将选择声明`template_name`，而不是使用默认值，因为我们最终可能会有几个不同的 BookInstance 记录列表，其中包含不同的视图和模板。

将以下内容添加到 catalog/views.py：

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin,generic.ListView):
    """
    Generic class-based view listing books on loan to current user.
    """
    model = BookInstance
    template_name ='catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact='o').order_by('due_back')
```

为了将查询，限制为当前用户的`BookInstance`对象，我们重新实现了`get_queryset()`，如上所示。请注意，“o”是表示借出当中“on loan”的存储代码，我们按`due_back`日期排序，以便首先显示最旧的项目。

### 借书的 URL 设置

现在打开 **/catalog/urls.py**，并添加指向上面视图的`path()`（你只需将下面的文本复制到文件末尾）。

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### 借书的模板

现在，我们需要为此页面添加一个模板。首先，创建模板文件 **/catalog/templates/catalog/bookinstance_list_borrowed_user.html**，并为其提供以下内容：

```python
{% extends "base_generic.html" %}

{% block content %}
    <h1>Borrowed books</h1>

    {% if bookinstance_list %}
    <ul>

      {% for bookinst in bookinstance_list %}
      <li class="{% if bookinst.is_overdue %}text-danger{% endif %}">
        <a href="{% url 'book-detail' bookinst.book.pk %}">\{{bookinst.book.title}}</a> (\{{ bookinst.due_back }})
      </li>
      {% endfor %}
    </ul>

    {% else %}
      <p>There are no books borrowed.</p>
    {% endif %}
{% endblock %}
```

此模板与我们之前为 `Book` 和 `Author`对象创建的模板非常相似。这里唯一新的东西，是我们检查在模型中添加的方法（`bookinst.is_overdue`），并使用它，来更改过期项目的颜色。

当开发服务器运行时，你现在应该能够在浏览器中，查看登录用户的列表，网址为 `http://127.0.0.1:8000/catalog/mybooks/`。在你的用户登录并登出后，尝试此操作（在第二种情况下，你应该被重定向到登录页面）。

### 将列表添加到侧栏

最后一步，是将这个新页面的链接，添加到侧边栏中。我们将把它放在我们为登录用户显示其他信息的同一部分。

打开基本模板（**/locallibrary/catalog/templates/base_generic.html**），并将粗体标识的那一行，添加到侧边栏区块，如下所示。

```python
 <ul class="sidebar-nav">
   {% if user.is_authenticated %}
   <li>User: \{{ user.get_username }}</li>
   <li><a href="{% url 'my-borrowed' %}">My Borrowed</a></li>
   <li><a href="{% url 'logout'%}?next=\{{request.path}}">Logout</a></li>
   {% else %}
   <li><a href="{% url 'login'%}?next=\{{request.path}}">Login</a></li>
   {% endif %}
 </ul>
```

### 它看起来是什么样子的？

当任何用户登录时，他们会在侧栏中看到 My Borrowed 链接，并显示如下所示的书本列表（第一本书没有截止日期，这是我们希望在以后的教程中修复的错误！） 。

![Library - borrowed books by user](library_borrowed_by_user.png)

## 权限

权限与模型相关联，并定义可以由具有权限的用户，在模型实例上执行的操作。默认情况下，Django 会自动为所有模型提供添加，更改和删除权限，这允许具有权限的用户，通过管理站点执行相关操作。你可以为模型定义自己的权限，并将其授予特定用户。你还可以更改与同一模型的不同实例关联的权限。

对于视图和模板中的权限测试，非常类似于对身份验证状态的测试（实际上，测试权限也会测试身份验证）。

### 模型

在模型“`class Meta`”部分上，使用 `permissions`字段，完成权限定义。你可以在元组中指定所需的权限，每个权限本身，都在包含权限名称和权限显示值的嵌套元组中被定义。例如，我们可能会定义一个权限，允许用户标记已归还的图书，如下所示：

```python
class BookInstance(models.Model):
    ...
    class Meta:
        ...
        permissions = (("can_mark_returned", "Set book as returned"),)
```

然后，我们可以将权限分配给管理站点中的图书管理员“Librarian”分组。打开 **catalog/models.py**，然后添加权限，如上所示。你需要重新运行迁移（调用 `python3 manage.py makemigrations` 和 `python3 manage.py migrate`），以适当地更新数据库。

### 模板

当前用户的权限，存在名为 `\{{ perms }}`的模板变量中。你可以使用关联的 Django“app”中的特定变量名，来检查当前用户是否具有特定权限 - 例如，如果用户具有此权限，则 `\{{ perms.catalog.can_mark_returned }}`将为 True，否则为 False。我们通常使用模板标记 `{% if %}` 测试权限，如下所示：

```python
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### 视图

在功能视图中，可以使用 `permission_required`装饰器，或在基于类别的视图中，使用 `PermissionRequiredMixin`测试权限。模式和行为与登录身份验证相同，但当然你可能需要添加多个权限。

功能视图装饰器：

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    ...
```

基于类别视图的权限要求 mixin。

```python
from django.contrib.auth.mixins import PermissionRequiredMixin

class MyView(PermissionRequiredMixin, View):
    permission_required = 'catalog.can_mark_returned'
    # Or multiple permissions
    permission_required = ('catalog.can_mark_returned', 'catalog.can_edit')
    # Note that 'catalog.can_edit' is just an example
    # the catalog application doesn't have such permission!
```

### 示例

我们不会在这里更新 LocalLibrary；也许在下一个教程中！

## 挑战自己

在本文前面，我们向你展示了，如何为当前用户创建一个页面，列出他们借用的书本。现在的挑战，是创建一个只对图书馆员可见的类似页面，它显示所有借用的书本，其中包括每个借用人的名字。

你应该能够遵循与其他视图相同的模式。主要区别在于，你需要将视图限制为仅限图书馆员。你可以根据用户是否是工作人员（函数装饰器：`staff_member_required`，模板变量：`user.is_staff`）来执行此操作，但我们建议你改为使用`can_mark_returned`权限，和 `PermissionRequiredMixin`，如上一节所述。

> [!WARNING]
> 请记住，不要使用超级用户进行基于权限的测试（即使尚未定义权限，权限检查也会对超级用户返回 true）。而是要创建一个图书管理员用户，并添加所需的功能。

完成后，你的页面应该类似于下面的屏幕截图。

![All borrowed books, restricted to librarian](library_borrowed_all.png)

## 总结

做的太好了 — 你已经创造了一个网站，图书馆用户可以登入并检视他们拥有的内容，图书管理员（有正确的授权）可以检视所有借出的书本以及借阅者。目前，我们仍然只是查看内容，但是当你想要开始修改和添加数据时，会使用相同的原则和技术。

在我们的下一篇文章，我们将介绍如何使用 Django 表单，收集使用者输入，然后开始修改我们储存的一些资料。

## 也可以参考

- [Django 中的用户授权](https://docs.djangoproject.com/en/2.0/topics/auth/) (Django 文档)
- [使用 Django 授权系统 (默认)](https://docs.djangoproject.com/en/2.0/topics/auth/default//)(Django 文档)
- [介绍从基于类别的视图 > 到使用装饰器的基于类别的视图](https://docs.djangoproject.com/en/2.0/topics/class-based-views/intro/#decorating-class-based-views) (Django 文档)

{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}

---
title: "Django 教程 7: 会话框架"
slug: Learn/Server-side/Django/Sessions
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django")}}

本教程扩展了我们的[LocalLibrary](/zh-CN/docs/Learn/Server-side/Django/Tutorial_local_library_website)网站，为主页添加了一个基于会话的访问计数器。这是一个相对简单的例子，但它确实显示了，如何使用会话框架为匿名用户提供持久的行为。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        完成之前的所有教程主题，包括<a
          href="/zh-CN/docs/Learn/Server-side/Django/Generic_views"
          >Django 教程 6：通用列表和详细信息视图</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解会话的使用方式。</td>
    </tr>
  </tbody>
</table>

## 概览

我们在之前的教程中创建的[LocalLibrary](/zh-CN/docs/Learn/Server-side/Django/Tutorial_local_library_website)网站，允许用户浏览目录中的书本和作者。虽然内容是从数据库动态生成的，但每个用户在使用站点时，基本上都可以访问相同的页面，和相同类型的信息。

在一个“真实”的图书馆中，您可能希望根据用户之前对站点的使用，首选项等，为个人用户提供自定义体验。例如，您可以在用户下次访问时，隐藏上次已经确认的警告消息。网站，或存储和尊重他们的偏好（例如，他们希望在每个页面上显示的搜索结果的数量）。

会话框架允许您实现此类行为，允许您基于每个站点访问者，以储存和检索任意数据。

## 会话是什么？

Web 浏览器和服务器之间的所有通信，都是通过 HTTP 协议进行的，该协议是无状态的。协议无状态的事实，意味着客户端和服务器之间的消息，完全相互独立 - 没有基于先前消息的“序列”或行为的概念。因此，如果您想拥有一个追踪与客户的持续关系的网站，您需要自己实现。

会话是 Django（以及大多数 Internet）用于跟踪站点和特定浏览器之间“状态”的机制。会话允许您为每个浏览器存储任意数据，并在浏览器连接时，将该数据提供给站点。然后，通过“密钥”引用与会话相关联的各个数据项，“密钥”用于存储和检索数据。

Django 使用包含特殊会话 ID 的 cookie，来识别每个浏览器，及其与该站点的关联会话。默认情况下，实际会话数据存储在站点数据库中（这比将数据存储在 cookie 中更安全，因为它们更容易受到恶意用户的攻击）。您可以将 Django 配置为，将会话数据存储在其他位置（缓存，文件，“安全”cookie），但默认位置是一个良好且相对安全的选项。

## 启用会话

我们[创建骨架网站](/zh-CN/docs/Learn/Server-side/Django/skeleton_website)时，会自动启用会话（在教程 2 中）。

配置在项目文件（**locallibrary / locallibrary / settings.py**）的`INSTALLED_APPS` 和 `MIDDLEWARE` 部分中设置，如下所示：

```python
INSTALLED_APPS = [
    ...
    'django.contrib.sessions',
    ....

MIDDLEWARE = [
    ...
    'django.contrib.sessions.middleware.SessionMiddleware',
    ....
```

## 使用会话

您可以从`request`请求参数访问视图中的`session`会话属性（作为视图的第一个参数传入的`HttpRequest`）。此会话属性，表示与当前用户的特定连接（或者更确切地说，是与当前浏览器的连接，由此站点的浏览器 cookie 中的会话 ID 标识）。

会话`session`属性是一个类似字典的对象，您可以在视图中多次读取和写入，并根据需要进行修改。您可以执行所有常规的字典操作，包括清除所有数据，测试是否存在密钥，循环数据等。大多数情况下，您只需使用标准“字典”API，来获取和设置值。

下面的代码片段，显示了如何使用与当前会话（浏览器）关联的密钥“`my_car`”来获取，设置和删除某些数据。

> **备注：** 关于 Django 的一个好处是，你不需要考虑在你的视图中，将会话与当前请求联系起来的机制。如果我们在视图中，使用下面的片段，我们就知道有关`my_car`的信息，仅与发送当前请求的浏览器相关联。

```python
# Get a session value by its key (e.g. 'my_car'), raising a KeyError if the key is not present
my_car = request.session['my_car']

# Get a session value, setting a default if it is not present ('mini')
my_car = request.session.get('my_car', 'mini')

# Set a session value
request.session['my_car'] = 'mini'

# Delete a session value
del request.session['my_car']
```

API 还提供了许多其他方法，主要用于管理关联的会话 cookie。例如，有一些方法，可以测试客户端浏览器，是否支持 cookie，设置和检查 cookie 过期日期，以及从数据存储中清除过期的会话。您可以在[如何使用会话](https://docs.djangoproject.com/en/2.0/topics/http/sessions/)（Django 文档）中找到完整的 API。

## 保存会话数据

默认情况下，Django 仅保存到会话数据库，并在会话被修改（分配）或删除时，将会话 cookie 发送到客户端。如果您使用会话密钥更新某些数据，如上一节所示，那么您无需担心这一点！例如：

```python
# This is detected as an update to the session, so session data is saved.
request.session['my_car'] = 'mini'
```

如果您正在更新会话数据中的某些信息，那么 Django 将无法识别您已对会话进行了更改并保存了数据（例如，如果您要更改“`my_car`”数据中的“轮子”`wheels`数据，如下所示）。在这种情况下，您需要将会话明确标记为已修改。

```python
# Session object not directly modified, only data within the session. Session changes not saved!
request.session['my_car']['wheels'] = 'alloy'

# Set session as modified to force data updates/cookie to be saved.
request.session.modified = True
```

> **备注：** 您可以通过将`SESSION_SAVE_EVERY_REQUEST = True`添加到项目设置（**locallibrary/locallibrary/settings.py**），以更改站点行为，站点将在每个请求上更新数据库/发送 cookie。

## 简单的例子 - 获取访问次数

作为一个简单的现实世界的例子，我们将更新我们的图书馆，告诉当前用户，他们访问 LocalLibrary 主页的次数。

打开 **/locallibrary/catalog/views.py**，并在下面以粗体显示更改。

```python
def index(request):
    ...

    num_authors=Author.objects.count()  # The 'all()' is implied by default.

    # Number of visits to this view, as counted in the session variable.
    num_visits=request.session.get('num_visits', 0)
    request.session['num_visits'] = num_visits+1

    # Render the HTML template index.html with the data in the context variable.
    return render(
        request,
        'index.html',
        context={'num_books':num_books,'num_instances':num_instances,'num_instances_available':num_instances_available,'num_authors':num_authors,
            'num_visits':num_visits}, # num_visits appended
    )
```

这里，我们首先得到'`num_visits`'会话密钥的值，如果之前没有设置，则将值设置为 0。每次收到请求时，我们都会递增该值，并将其存回会话中（下次用户访问该页面时）。然后将`num_visits`变量，传递给上下文变量中的模板。

> **备注：** 我们也可能会测试浏览器中是否支持 cookie（请参阅[如何使用会话](https://docs.djangoproject.com/en/2.0/topics/http/sessions/)作为示例），或设计我们的 UI，以便无论 cookie 是否受支持都无关紧要。

将以下区块底部那一行，添加到主 HTML 模板（**/locallibrary/catalog/templates/index.html**）的“动态内容”部分底部，以显示上下文变量：

```django
<h2>Dynamic content</h2>

<p>The library has the following record counts:</p>
<ul>
  <li><strong>Books:</strong> \{{ num_books }}</li>
  <li><strong>Copies:</strong> \{{ num_instances }}</li>
  <li><strong>Copies available:</strong> \{{ num_instances_available }}</li>
  <li><strong>Authors:</strong> \{{ num_authors }}</li>
</ul>

<p>
  You have visited this page \{{ num_visits }}{% if num_visits == 1 %} time{%
  else %} times{% endif %}.
</p>
```

保存更改，并重新启动测试服务器。每次刷新页面时，数字都应该更新。

## 总结

你现在知道，使用 sessions 改善与匿名使用者的互动，有多么容易了。

在我们的下一篇文章，我们将解释授权与许可框架，并演示如何支持使用者帐户。

## 参见

- [如何使用会话](https://docs.djangoproject.com/en/2.0/topics/http/sessions/) (Django 文档)

{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/Authentication", "Learn/Server-side/Django")}}

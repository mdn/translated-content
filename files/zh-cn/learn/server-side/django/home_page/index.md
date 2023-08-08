---
title: "Django Tutorial Part 5: 主页构建"
slug: Learn/Server-side/Django/Home_page
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}

我们现在可以添加代码来显示我们的第一个完整页面 - [LocalLibrary](/zh-CN/docs/Learn/Server-side/Django/Tutorial_local_library_website) 网站的主页，显示每个模型类型有多少条记录，并提供我们其他页面的侧边栏导航链接。一路上，我们将获得编写基本 URL 地图和视图，从数据库获取记录以及使用模板的实践经验。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        读 the
        <a href="/zh-CN/docs/Learn/Server-side/Django/Introduction"
          >Django Introduction</a
        >. 完成上章节 (including
        <a href="/zh-CN/docs/Learn/Server-side/Django/Admin_site"
          >Django Tutorial Part 4: Django admin site</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">目的：</th>
      <td>
        了解如何创建简单的 URL 映射和视图（没有数据编码在 URL
        中）以及如何从模型中获取数据并创建模版。
      </td>
    </tr>
  </tbody>
</table>

## 概要

现在我们已经定义了我们的模型，并创建了一些初始库记录来处理，现在是编写代码以向用户呈现该信息的时候了。我们需要做的第一件事是确定我们希望能够在我们的页面中显示哪些信息，然后为返回这些资源定义适当的 URL。那么我们将需要创建一个 url 映射器，视图和模板来显示这些页面。

以下图表提供了处理 HTTP 请求/响应时需要实现的数据和事情的主要流程。我们已经创建了这个模型，我们需要创建的主要内容是：

- URL 映射 - 根据 - 支持的 URL（以及任何编码在 URL 里的信息）跳转到相应的**View**功能函数。
- **View** 函数从模型中获取请求的数据，创建一个显示数据的 HTML 页面，并将其返回给用户在浏览器查看。
- **Templates** 在 View 视图中进行数据渲染的时候使用。

![](basic-django.png)

正如你将在下一节中看到的，我们将要显示 5 个页面，这在一篇文章中是很重要的。因此，本文的大部分内容将重点介绍如何实现主页（我们将在随后的文章中介绍其他页面）。这应该让您对 URL 映射器，视图和模型在实践中如何工作有一个很好的端到端的了解。

## 定义资源 URL

由于本版本的 LocalLibrary 对于最终用户本质上是只读的，所以我们只需要为该网站（主页）提供一个着陆页，以及显示书籍和作者的列表和详细视图的页面。

下面这些 URL 是我们页面需要的：

- `catalog/` — 主页
- `catalog/books/` — 书单页
- `catalog/authors/` — 作者页
- `catalog/book/<id>` — 主键字段 ID 的具体书（默认） —详细视图。如下例子 `/catalog/book/3`，第三本书。
- `catalog/author/<id>` — 主键字段 ID 的具体作者（默认） —详细视图。如下例子 `/catalog/author/11`，第 11 个作者。

前三个 URL 用于列出索引，书籍和作者。这些不会对任何附加信息进行编码，而返回的结果将取决于数据库中的内容，运行获取信息的查询将始终保持一致。

相比之下，最后两个 URL 用于显示有关特定书籍或作者的详细信息 - 这些 URL 将编码要显示在 URL 中的项目的标识（如上所示\<id>）。URL 映射器可以提取编码信息并将其传递给视图，然后将动态地确定从数据库获取哪些信息。通过对我们的 URL 中的信息进行编码，我们只需要一个 URL 映射，视图和模板来处理每本书（或作者）。

> **备注：** Django 允许您以任何您喜欢的方式构建您的 URL - 您可以如上所示编码 URL 正文中的信息，或使用 URL `GET`参数（例如 `/book/?id=6`）。无论您使用哪种方法，URL 都应保持清洁，逻辑和可读性 ([check out the W3C advice here](https://www.w3.org/Provider/Style/URI)).
>
> Django 文档倾向于在 URL 的主体中推荐编码信息，这是他们觉得鼓励更好的 URL 设计的实践。

如概述，本文其余部分介绍如何构建索引页

## 创建索引页

我们创建的第一个页面将会是索引页（catalog/)。这会显示一些静态 HTML，以及数据库中不同记录的一些计算的“计数“。为了使其工作，我们必须创建一个 URL 映射，视图和模版。

> **备注：** 本节应该特别注意。一些”材料“在所有页面都通用。

### URL 映射

在我们创建的[基础网站](/zh-CN/docs/Learn/Server-side/Django/skeleton_website)上，更新 **/locallibrary/urls.py** 文件。以确保每当收到以 **`catalog/`** 开头的 URL 时，URLConf 模块中的 **catalog.urls** 会处理剩余的字符串。

打开 catalog/**urls.py** ，复制下面代码

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

如果检测到 URL 模式''，(views.index——在 view\.py 中函数命名 index() ）将被调用。URL 模式是[Python 正则表达式](https://docs.python.org/3/library/re.html) (RE)。我们将在本教程中进一步介绍 RE。

> **备注：** 在 **/locallibrary/locallibrary/urls.py**
>
> ```python
> urlpatterns += [
>     path('catalog/', include('catalog.urls')),
> ]
> ```
>
> 每当 Django 使用 include() （[`django.conf.urls.include()`](https://docs.djangoproject.com/en/1.11/ref/urls/#django.conf.urls.include)），它排除与该点匹配 URL 的任何部分，并将剩余的字符串发送到随附的 URLconf 进行一步处理。
>
> 匹配的 URL 实际上是 `catalog/`+<空字符串> （`/catalog/` 假定是因为 `include()` 是使用的方法）。如果我们收到一个 URL 的 HTTP 请求，我们的第一个视图函数将被调用`/catalog/`。

此函数还说明了一个`name`参数，此唯一标识指定 URL 映射。你可以使用 "reverse" 映射—去动态创建指定映射设计处理的资源的一个 URL。例如，我们现在可以通过在我们的模版中创建以下链接到我们的主页：

```html
<a href="{% url 'index' %}">Home</a>.
```

> **备注：** 我们当然可以硬编码上面的链接（如：`<a href="/catalog/">Home</a>`），但是如果我们改变了主页的模式，模版将不再正确链接，使用反向网址映射会更灵活和强大。

### View (基于功能)

视图是处理 HTTP 请求的功能，根据需要从数据库获取数据，通过使用 HTML 模板呈现此数据生成 HTML 页面，然后以 HTTP 响应返回 HTML 以显示给用户。索引视图遵循此模型 - 它提取有关数据库中有多少`Book`，`BookInstance` 可用 `BookInstance` 和 `Author` 记录的信息，并将其传递给模板以进行显示。

打开 catalog / views.py，并注意该文件已经导入了 使用模板和数据生成 HTML 文件的 [render()](https://docs.djangoproject.com/en/1.10/topics/http/shortcuts/#django.shortcuts.render) 快捷方式函数。

```python
from django.shortcuts import render

# Create your views here.
```

复制文件底部的以下代码。第一行导入我们将用于访问所有视图中数据的模型类。

```python
from .models import Book, Author, BookInstance, Genre

def index(request):
    """
    View function for home page of site.
    """
    # Generate counts of some of the main objects
    num_books=Book.objects.all().count()
    num_instances=BookInstance.objects.all().count()
    # Available books (status = 'a')
    num_instances_available=BookInstance.objects.filter(status__exact='a').count()
    num_authors=Author.objects.count()  # The 'all()' is implied by default.

    # Render the HTML template index.html with the data in the context variable
    return render(
        request,
        'index.html',
        context={'num_books':num_books,'num_instances':num_instances,'num_instances_available':num_instances_available,'num_authors':num_authors},
    )
```

视图函数的第一部分使用`objects.all()`模型类的属性来获取记录计数。它还会获取一个`BookInstance`状态字段值为“a”（可用）的对象列表。您可以在前面的教程 ([Django Tutorial Part 3: Using models > Searching for records](/zh-CN/docs/Learn/Server-side/Django/Models#Searching_for_records)) 中找到更多关于如何访问模型的信息。

在函数结束时，我们将该函数称为`render()`创建和返回 HTML 页面作为响应（此快捷方式函数包含许多其他函数，简化了这种非常常见的用例）。它将原始`request`对象（an HttpRequest）作为参数，具有数据占位符的 HTML 模板以及`context`变量（包含要插入到这些占位符中的数据的 Python 字典）。

我们将在下一节中详细介绍模板和上下文变量; 让我们创建我们的模板，以便我们可以向用户显示一些内容

### 模版

模版是定义一个文件（例如 HTML 页面）的结构与布局的文本文件，其中占位符用于表示实际内容。Django 将自动在应用程序“templates”目录查找模版。所以例如，在我们刚刚加的索引页，`render()` 函数会期望能够找到 **/locallibrary/catalog/templates/index.html** 这个文件，如何找不到该文件，则会引发错误。如果保存以前的更改并返回到浏览器，你可以看到访问 `127.0.0.1:8000` 现在将提供你一个相当直观的错误信息“**TemplateDoesNotExist at /catalog/**”以及其他详细信息。

> **备注：** Django 将根据你的项目的设置文件，来查看模版的许多位置 (在已安装的应用程序中进行搜索是默认设置). 你可以查阅更多关于 Django 如何找到模版以及它支持的模版格式在[（Templates](https://docs.djangoproject.com/en/1.10/topics/templates/) ）。

#### 扩展模版

索引模版将需要标准的 HTML 标记头部和正文，以及用于导航的部分（去我们尚为创建的网站其他的页面）以及显示一些介绍文本和我们书籍数据。我们网站上的每一页，大部分文字（HTML 和导航结构）都是一样的。Django 模版语言不是强制开发人员在每个页面中复制这个“样板”，而是让你声明一个基本模版，然后再扩展它，仅替换每个特定页面不同的位置。

例如，基本模版 `base_generic.html` 可能看起来像下面的文本。正如你所见的，它包含一些“常见“HTML”和标题，侧边栏和使用命名 `block` 和 `endblock` 模版标记（粗体显示）标记的内容部分。块可以是空的，或者包含将被派生页“默认使用”的内容。

> **备注：** 模版标签就像你可以在模版中使用的函数循环列表，基于变量的值执行条件操作等。除了模版标签，模版语法允许你引用模版变量（通过从视图进入模版），并使用模版过滤器，其中重新格式化变量（例如，将字符串设置为小写）。

```django
<!doctype html>
<html lang="en">
  <head>
    {% block title %}<title>Local Library</title>{% endblock %}
  </head>

  <body>
    {% block sidebar %}<!-- insert default navigation text for every page -->{% endblock %}
    {% block content %}<!-- default content text (typically empty) -->{% endblock %}
  </body>
</html>
```

当我们要为特定视图定义一个模版时，我们首先指定基本模版（使用 `extends` 模版标签—查看下一个代码片段）。如果我们想要在模版中替换的章节，会使用相同的 `block/endblock` 部分在基本模版表明。

例如，下面我们使用 `extends` 模版标签，并覆盖 `content` 块。生成的最终 HTML 页面将具有基本模版中定义的所以 HTML 和结构（包括你在`title`块中定义的默认内容），但你新的 `content` 块插入到了默认的那块。

`base_generic.html` 详细会在下文中，请耐心往下看。

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Local Library Home</h1>
  <p>Welcome to <em>LocalLibrary</em>, a very basic Django website developed as a tutorial example on the Mozilla Developer Network.</p>
{% endblock %}
```

#### 本地图书馆 - 基本模版

下面就是我们计划的基本模版用于本地图书馆网站。正如所看到的，内容包括一些 HTML 和定义块 `title` ，`sidebar` 和 `content`。我们有默认的 `title`（当然我们可以改）和默认的所以书籍和作者的链接列表 `sidebar` （我们可能并不会怎么改，但需要时，我们通过把想法放入块`block`中，比如想法是—允许范围）。

> **备注：** 我们再介绍两个额外的模版标签： `url` 和 `load static`。下文中我们会详细介绍。

创建一个新的文件 — **/locallibrary/catalog/templates/_base_generic.html_** — 写入如下代码

```django
<!doctype html>
<html lang="en">
  <head>
    {% block title %}<title>Local Library</title>{% endblock %}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <!-- Add additional CSS in static file -->
    {% load static %}
    <link rel="stylesheet" href="{% static 'css/styles.css' %}" />
  </head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2">
          {% block sidebar %}
            <ul class="sidebar-nav">
              <li><a href="{% url 'index' %}">Home</a></li>
              <li><a href="">All books</a></li>
              <li><a href="">All authors</a></li>
            </ul>
          {% endblock %}
        </div>
        <div class="col-sm-10">{% block content %}{% endblock %}</div>
      </div>
    </div>
  </body>
</html>
```

该模版使用（并包含）JavaScript 和 [Bootstrap](http://getbootstrap.com/)（css 框架）来改进 HTML 页面的布局和显示，这个框架或者另一个客户端网络框架，这是快速创建一个可用页面来适应在不同浏览器尺寸和允许我们处理页面呈现且不用一点细节—我们只需要专注在服务器端。

基本模版还引用了一个本地 css 文件 (**styles.css**) ，它提供了一些额外的样式。新建 **/locallibrary/catalog/static/css/styles.css** 如下：

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### 索引模版

新建 HTML 文件 **/locallibrary/catalog/templates/_index.html_** 写入下面代码。第一行我们扩展了我们的基本模版，使用 `content`替换默认块。

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Local Library Home</h1>

  <p>Welcome to <em>LocalLibrary</em>, a very basic Django website developed as a tutorial example on the Mozilla Developer Network.</p>

  <h2>Dynamic content</h2>

  <p>The library has the following record counts:</p>
  <ul>
    <li><strong>Books:</strong> \{{ num_books }}</li>
    <li><strong>Copies:</strong> \{{ num_instances }}</li>
    <li><strong>Copies available:</strong> \{{ num_instances_available }}</li>
    <li><strong>Authors:</strong> \{{ num_authors }}</li>
  </ul>
{% endblock %}
```

在动态内容部分，我们的占位符（模版变量），是给我们想要视图的信息声明。变量使用“双大括号“或者“句柄“语法进行标记。

> **备注：** 你可以轻松地识别是否使用变量或模版标签（函数），因为变量具有双括号 (`\{{ num_books }}`) 而标记被包含在带有百分比符号 (`{% extends "base_generic.html" %}`) 的单个大括号中。

这里要注意的重要事情是这些变量用我们视图函数`render`中的字典—注入 `context` （下面）；当渲染模版时，这些将替换为相关联的值。

```python
return render(
    request,
    'index.html',
     context={'num_books':num_books,'num_instances':num_instances,'num_instances_available':num_instances_available,'num_authors':num_authors},
)
```

#### 在模版中引用静态文件

你的项目可能会使用静态资源，包括**javascript**，**css** 和图像。由于这些文件的位置可能不知道（或者可能会发生变化），则 Django 允许你指定你的模版相对于这些文件的位置 **`STATIC_URL`** 全局设置（默认基本网站设置的值 **`STATIC_URL`**，以“**`／static／`**”，但你可能选择在 CDN 和其他地方托管内容）。

在模版中，你首先调用 `load` 指定“ `static`”去添加此模版库（如下）。静态加载后，你可以使用 `static` 模版标签，指定感兴趣的文件相对`URL`

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

你可以用同样的方式将图像添加到页面中：

```django
{% load static %}
<img
  src="{% static 'catalog/images/local_library_model_uml.png' %}"
  alt="My image"
  style="width:555px;height:540px;" />
```

> **备注：** 上面的更改指定文件所在的位置，但 Django 默认不提供它们。当我们[created the website skeleton](/zh-CN/docs/Learn/Server-side/Django/skeleton_website),我们在全局 URL 映射器 r (**/locallibrary/locallibrary/urls.py**) 中开发 Web 服务器提供服务，你仍然需要安排它们在生产中投放。我们接下来看一看

更多内容—[Managing static files](https://docs.djangoproject.com/en/1.10/howto/static-files/) (Django docs).

#### 链接 URL

基本的模版引入 `url` 模版标签

```python
<li><a href="{% url 'index' %}">Home</a></li>
```

此标记`url()`使用您的**urls.py**中调用的函数的名称 和相关视图将从该函数接收的任何参数的值，并返回可用于链接到该资源的 URL。

## 它看起来什么样？

运行 (`python3 manage.py runserver`) 和在浏览器中打开 <http://127.0.0.1:8000/>. I 如果一切都正确设置，当当当当。

![Index page for LocalLibrary website](index_page_ok.png)

> **备注：** 由于尚未定义这些网页的网址，视图和模板，因此您将无法使用“**所有图书**和**所有作者**”链接（目前我们刚刚在 `base_generic.html` 模板中插入了这些链接的占位符）

## 挑战自己

以下是一些测试您熟悉模型查询，视图和模板的任务。

1. 在索引模板中声明一个新的标题块，并更改页面标题以匹配此特定页面。
2. 修改视图以生成包含特定单词（不区分大小写）的类型计数和书数，然后将这些字段添加到模板。

## 概要

我们现在已经为我们的网站创建了主页 - 一个 HTML 页面，显示数据库中的一些记录数，并且链接到我们其他尚待创建的页面。一路上，我们已经学到了很多有关 url 映射器，视图，使用我们的模型查询数据库的基本信息，如何从您的视图传递信息到模板，以及如何创建和扩展模板。

在我们的下一篇文章中，我们将基于我们的知识来创建其他四个页面。

## 参见

- [Writing your first Django app, part 3: Views and Templates](https://docs.djangoproject.com/en/1.10/intro/tutorial03/) (Django docs)
- [URL 调度程序](https://docs.djangoproject.com/en/1.10/topics/http/urls/) (Django docs)
- [视图函数](https://docs.djangoproject.com/en/1.10/topics/http/views/) (DJango docs)
- [模版](https://docs.djangoproject.com/en/1.10/topics/templates/) (Django docs)
- [管理静态文件](https://docs.djangoproject.com/en/1.10/howto/static-files/)(Django docs)
- [Django 快捷功能](https://docs.djangoproject.com/en/1.10/topics/http/shortcuts/#django.shortcuts.render)(Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}

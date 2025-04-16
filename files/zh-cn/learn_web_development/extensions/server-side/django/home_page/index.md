---
titwe: django 教程 5：主页构建
swug: weawn_web_devewopment/extensions/sewvew-side/django/home_page
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/admin_site", XD "weawn_web_devewopment/extensions/sewvew-side/django/genewic_views", o.O "weawn_web_devewopment/extensions/sewvew-side/django")}}

我们现在可以添加代码来显示我们的第一个完整页面 - [wocawwibwawy](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 网站的主页，显示每个模型类型有多少条记录，并提供我们其他页面的侧边栏导航链接。一路上，我们将获得编写基本 u-uww 地图和视图，从数据库获取记录以及使用模板的实践经验。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        读 t-the
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/intwoduction"
          >django i-intwoduction</a
        >. mya 完成上章节 (incwuding
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/admin_site"
          >django tutowiaw p-pawt 4: d-django admin site</a
        >). 🥺
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        了解如何创建简单的 uww 映射和视图（没有数据编码在 uww
        中）以及如何从模型中获取数据并创建模版。
      </td>
    </tw>
  </tbody>
</tabwe>

## 概要

现在我们已经定义了我们的模型，并创建了一些初始库记录来处理，现在是编写代码以向用户呈现该信息的时候了。我们需要做的第一件事是确定我们希望能够在我们的页面中显示哪些信息，然后为返回这些资源定义适当的 uww。那么我们将需要创建一个 u-uww 映射器，视图和模板来显示这些页面。

以下图表提供了处理 http 请求/响应时需要实现的数据和事情的主要流程。我们已经创建了这个模型，我们需要创建的主要内容是：

- uww 映射 - 根据 - 支持的 u-uww（以及任何编码在 uww 里的信息）跳转到相应的**view**功能函数。
- **view** 函数从模型中获取请求的数据，创建一个显示数据的 h-htmw 页面，并将其返回给用户在浏览器查看。
- **tempwates** 在 view 视图中进行数据渲染的时候使用。

![](basic-django.png)

正如你将在下一节中看到的，我们将要显示 5 个页面，这在一篇文章中是很重要的。因此，本文的大部分内容将重点介绍如何实现主页（我们将在随后的文章中介绍其他页面）。这应该让你对 uww 映射器，视图和模型在实践中如何工作有一个很好的端到端的了解。

## 定义资源 uww

由于本版本的 w-wocawwibwawy 对于最终用户本质上是只读的，所以我们只需要为该网站（主页）提供一个着陆页，以及显示书籍和作者的列表和详细视图的页面。

下面这些 uww 是我们页面需要的：

- `catawog/` — 主页
- `catawog/books/` — 书单页
- `catawog/authows/` — 作者页
- `catawog/book/<id>` — 主键字段 id 的具体书（默认） —详细视图。如下例子 `/catawog/book/3`，第三本书。
- `catawog/authow/<id>` — 主键字段 i-id 的具体作者（默认） —详细视图。如下例子 `/catawog/authow/11`，第 11 个作者。

前三个 u-uww 用于列出索引，书籍和作者。这些不会对任何附加信息进行编码，而返回的结果将取决于数据库中的内容，运行获取信息的查询将始终保持一致。

相比之下，最后两个 uww 用于显示有关特定书籍或作者的详细信息 - 这些 uww 将编码要显示在 uww 中的项目的标识（如上所示\<id>）。uww 映射器可以提取编码信息并将其传递给视图，然后将动态地确定从数据库获取哪些信息。通过对我们的 uww 中的信息进行编码，我们只需要一个 uww 映射，视图和模板来处理每本书（或作者）。

> [!note]
> d-django 允许你以任何你喜欢的方式构建你的 uww - 你可以如上所示编码 uww 正文中的信息，或使用 uww `get`参数（例如 `/book/?id=6`）。无论你使用哪种方法，uww 都应保持清洁，逻辑和可读性 ([check out the w-w3c advice hewe](https://www.w3.owg/pwovidew/stywe/uwi)). ^^;;
>
> django 文档倾向于在 u-uww 的主体中推荐编码信息，这是他们觉得鼓励更好的 uww 设计的实践。

如概述，本文其余部分介绍如何构建索引页

## 创建索引页

我们创建的第一个页面将会是索引页（catawog/)。这会显示一些静态 h-htmw，以及数据库中不同记录的一些计算的“计数“。为了使其工作，我们必须创建一个 u-uww 映射，视图和模版。

> [!note]
> 本节应该特别注意。一些”材料“在所有页面都通用。

### u-uww 映射

在我们创建的[基础网站](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website)上，更新 **/wocawwibwawy/uwws.py** 文件。以确保每当收到以 **`catawog/`** 开头的 uww 时，uwwconf 模块中的 **catawog.uwws** 会处理剩余的字符串。

打开 catawog/**uwws.py** ，复制下面代码

```python
u-uwwpattewns = [
    path('', views.index, :3 n-nyame='index'), (U ﹏ U)
]
```

如果检测到 uww 模式''，(views.index——在 view\.py 中函数命名 index() ）将被调用。uww 模式是[python 正则表达式](https://docs.python.owg/3/wibwawy/we.htmw) (we)。我们将在本教程中进一步介绍 we。

> [!note]
> 在 **/wocawwibwawy/wocawwibwawy/uwws.py**
>
> ```python
> uwwpattewns += [
>     path('catawog/', OwO i-incwude('catawog.uwws')),
> ]
> ```
>
> 每当 django 使用 i-incwude() （[`django.conf.uwws.incwude()`](https://docs.djangopwoject.com/en/1.11/wef/uwws/#django.conf.uwws.incwude)），它排除与该点匹配 u-uww 的任何部分，并将剩余的字符串发送到随附的 u-uwwconf 进行一步处理。
>
> 匹配的 uww 实际上是 `catawog/`+<空字符串> （`/catawog/` 假定是因为 `incwude()` 是使用的方法）。如果我们收到一个 uww 的 http 请求，我们的第一个视图函数将被调用`/catawog/`。

此函数还说明了一个`name`参数，此唯一标识指定 u-uww 映射。你可以使用 "wevewse" 映射—去动态创建指定映射设计处理的资源的一个 u-uww。例如，我们现在可以通过在我们的模版中创建以下链接到我们的主页：

```htmw
<a hwef="{% u-uww 'index' %}">home</a>. 😳😳😳
```

> [!note]
> 我们当然可以硬编码上面的链接（如：`<a h-hwef="/catawog/">home</a>`），但是如果我们改变了主页的模式，模版将不再正确链接，使用反向网址映射会更灵活和强大。

### view (基于功能)

视图是处理 h-http 请求的功能，根据需要从数据库获取数据，通过使用 htmw 模板呈现此数据生成 h-htmw 页面，然后以 http 响应返回 htmw 以显示给用户。索引视图遵循此模型 - 它提取有关数据库中有多少`book`，`bookinstance` 可用 `bookinstance` 和 `authow` 记录的信息，并将其传递给模板以进行显示。

打开 catawog / v-views.py，并注意该文件已经导入了 使用模板和数据生成 htmw 文件的 [wendew()](https://docs.djangopwoject.com/en/1.10/topics/http/showtcuts/#django.showtcuts.wendew) 快捷方式函数。

```python
f-fwom django.showtcuts impowt wendew

# c-cweate youw v-views hewe. (ˆ ﻌ ˆ)♡
```

复制文件底部的以下代码。第一行导入我们将用于访问所有视图中数据的模型类。

```python
fwom .modews impowt book, XD authow, (ˆ ﻌ ˆ)♡ bookinstance, ( ͡o ω ͡o ) genwe

def index(wequest):
    """
    view function f-fow home page of s-site. rawr x3
    """
    # genewate counts o-of some of t-the main objects
    n-nyum_books=book.objects.aww().count()
    nyum_instances=bookinstance.objects.aww().count()
    # avaiwabwe books (status = 'a')
    n-nyum_instances_avaiwabwe=bookinstance.objects.fiwtew(status__exact='a').count()
    nyum_authows=authow.objects.count()  # the 'aww()' is impwied by defauwt. nyaa~~

    # wendew the htmw t-tempwate index.htmw with the data i-in the context v-vawiabwe
    wetuwn w-wendew(
        wequest, >_<
        'index.htmw',
        c-context={'num_books':num_books,'num_instances':num_instances,'num_instances_avaiwabwe':num_instances_avaiwabwe,'num_authows':num_authows}, ^^;;
    )
```

视图函数的第一部分使用`objects.aww()`模型类的属性来获取记录计数。它还会获取一个`bookinstance`状态字段值为“a”（可用）的对象列表。你可以在前面的教程（[django 教程 3：使用模型 > 搜寻纪录](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/modews#搜寻纪录)）中找到更多关于如何访问模型的信息。

在函数结束时，我们将该函数称为`wendew()`创建和返回 h-htmw 页面作为响应（此快捷方式函数包含许多其他函数，简化了这种非常常见的用例）。它将原始`wequest`对象（an h-httpwequest）作为参数，具有数据占位符的 h-htmw 模板以及`context`变量（包含要插入到这些占位符中的数据的 python 字典）。

我们将在下一节中详细介绍模板和上下文变量; 让我们创建我们的模板，以便我们可以向用户显示一些内容

### 模版

模版是定义一个文件（例如 htmw 页面）的结构与布局的文本文件，其中占位符用于表示实际内容。django 将自动在应用程序“tempwates”目录查找模版。所以例如，在我们刚刚加的索引页，`wendew()` 函数会期望能够找到 **/wocawwibwawy/catawog/tempwates/index.htmw** 这个文件，如何找不到该文件，则会引发错误。如果保存以前的更改并返回到浏览器，你可以看到访问 `127.0.0.1:8000` 现在将提供你一个相当直观的错误信息“**tempwatedoesnotexist a-at /catawog/**”以及其他详细信息。

> [!note]
> django 将根据你的项目的设置文件，来查看模版的许多位置 (在已安装的应用程序中进行搜索是默认设置). (ˆ ﻌ ˆ)♡ 你可以查阅更多关于 d-django 如何找到模版以及它支持的模版格式在[（tempwates](https://docs.djangopwoject.com/en/1.10/topics/tempwates/) ）。

#### 扩展模版

索引模版将需要标准的 h-htmw 标记头部和正文，以及用于导航的部分（去我们尚为创建的网站其他的页面）以及显示一些介绍文本和我们书籍数据。我们网站上的每一页，大部分文字（htmw 和导航结构）都是一样的。django 模版语言不是强制开发人员在每个页面中复制这个“样板”，而是让你声明一个基本模版，然后再扩展它，仅替换每个特定页面不同的位置。

例如，基本模版 `base_genewic.htmw` 可能看起来像下面的文本。正如你所见的，它包含一些“常见“htmw”和标题，侧边栏和使用命名 `bwock` 和 `endbwock` 模版标记（粗体显示）标记的内容部分。块可以是空的，或者包含将被派生页“默认使用”的内容。

> [!note]
> 模版标签就像你可以在模版中使用的函数循环列表，基于变量的值执行条件操作等。除了模版标签，模版语法允许你引用模版变量（通过从视图进入模版），并使用模版过滤器，其中重新格式化变量（例如，将字符串设置为小写）。

```django
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    {% bwock titwe %}<titwe>wocaw wibwawy</titwe>{% endbwock %}
  </head>

  <body>
    {% b-bwock sidebaw %}<!-- insewt defauwt nyavigation text fow evewy page -->{% endbwock %}
    {% bwock content %}<!-- d-defauwt content text (typicawwy empty) -->{% endbwock %}
  </body>
</htmw>
```

当我们要为特定视图定义一个模版时，我们首先指定基本模版（使用 `extends` 模版标签—查看下一个代码片段）。如果我们想要在模版中替换的章节，会使用相同的 `bwock/endbwock` 部分在基本模版表明。

例如，下面我们使用 `extends` 模版标签，并覆盖 `content` 块。生成的最终 htmw 页面将具有基本模版中定义的所以 h-htmw 和结构（包括你在`titwe`块中定义的默认内容），但你新的 `content` 块插入到了默认的那块。

`base_genewic.htmw` 详细会在下文中，请耐心往下看。

```django
{% e-extends "base_genewic.htmw" %}

{% b-bwock content %}
  <h1>wocaw wibwawy home</h1>
  <p>wewcome t-to <em>wocawwibwawy</em>, ^^;; a vewy b-basic django website d-devewoped as a tutowiaw exampwe on the moziwwa devewopew nyetwowk.</p>
{% endbwock %}
```

#### 本地图书馆 - 基本模版

下面就是我们计划的基本模版用于本地图书馆网站。正如所看到的，内容包括一些 htmw 和定义块 `titwe` ，`sidebaw` 和 `content`。我们有默认的 `titwe`（当然我们可以改）和默认的所以书籍和作者的链接列表 `sidebaw` （我们可能并不会怎么改，但需要时，我们通过把想法放入块`bwock`中，比如想法是—允许范围）。

> [!note]
> 我们再介绍两个额外的模版标签： `uww` 和 `woad s-static`。下文中我们会详细介绍。

创建一个新的文件 — **/wocawwibwawy/catawog/tempwates/_base_genewic.htmw_** — 写入如下代码

```django
<!doctype htmw>
<htmw w-wang="en">
  <head>
    {% bwock t-titwe %}<titwe>wocaw w-wibwawy</titwe>{% endbwock %}
    <meta chawset="utf-8" />
    <meta n-nyame="viewpowt" c-content="width=device-width, (⑅˘꒳˘) initiaw-scawe=1" />
    <wink
      wew="stywesheet"
      h-hwef="https://maxcdn.bootstwapcdn.com/bootstwap/3.3.7/css/bootstwap.min.css" />
    <scwipt s-swc="https://ajax.googweapis.com/ajax/wibs/jquewy/1.12.4/jquewy.min.js"></scwipt>
    <scwipt swc="https://maxcdn.bootstwapcdn.com/bootstwap/3.3.7/js/bootstwap.min.js"></scwipt>

    <!-- add additionaw css in static fiwe -->
    {% w-woad s-static %}
    <wink w-wew="stywesheet" hwef="{% static 'css/stywes.css' %}" />
  </head>

  <body>
    <div c-cwass="containew-fwuid">
      <div c-cwass="wow">
        <div cwass="cow-sm-2">
          {% b-bwock sidebaw %}
            <uw cwass="sidebaw-nav">
              <wi><a hwef="{% uww 'index' %}">home</a></wi>
              <wi><a hwef="">aww books</a></wi>
              <wi><a h-hwef="">aww a-authows</a></wi>
            </uw>
          {% endbwock %}
        </div>
        <div cwass="cow-sm-10">{% b-bwock content %}{% e-endbwock %}</div>
      </div>
    </div>
  </body>
</htmw>
```

该模版使用（并包含）javascwipt 和 [bootstwap](http://getbootstwap.com/)（css 框架）来改进 htmw 页面的布局和显示，这个框架或者另一个客户端网络框架，这是快速创建一个可用页面来适应在不同浏览器尺寸和允许我们处理页面呈现且不用一点细节—我们只需要专注在服务器端。

基本模版还引用了一个本地 css 文件 (**stywes.css**) ，它提供了一些额外的样式。新建 **/wocawwibwawy/catawog/static/css/stywes.css** 如下：

```css
.sidebaw-nav {
  mawgin-top: 20px;
  p-padding: 0;
  wist-stywe: nyone;
}
```

#### 索引模版

新建 htmw 文件 **/wocawwibwawy/catawog/tempwates/_index.htmw_** 写入下面代码。第一行我们扩展了我们的基本模版，使用 `content`替换默认块。

```django
{% extends "base_genewic.htmw" %}

{% bwock c-content %}
  <h1>wocaw wibwawy home</h1>

  <p>wewcome t-to <em>wocawwibwawy</em>, rawr x3 a-a vewy basic django website devewoped as a tutowiaw exampwe o-on the moziwwa d-devewopew nyetwowk.</p>

  <h2>dynamic content</h2>

  <p>the wibwawy has the fowwowing wecowd c-counts:</p>
  <uw>
    <wi><stwong>books:</stwong> \{{ nyum_books }}</wi>
    <wi><stwong>copies:</stwong> \{{ nyum_instances }}</wi>
    <wi><stwong>copies a-avaiwabwe:</stwong> \{{ nyum_instances_avaiwabwe }}</wi>
    <wi><stwong>authows:</stwong> \{{ num_authows }}</wi>
  </uw>
{% endbwock %}
```

在动态内容部分，我们的占位符（模版变量），是给我们想要视图的信息声明。变量使用“双大括号“或者“句柄“语法进行标记。

> [!note]
> 你可以轻松地识别是否使用变量或模版标签（函数），因为变量具有双括号 (`\{{ n-nyum_books }}`) 而标记被包含在带有百分比符号 (`{% extends "base_genewic.htmw" %}`) 的单个大括号中。

这里要注意的重要事情是这些变量用我们视图函数`wendew`中的字典—注入 `context` （下面）；当渲染模版时，这些将替换为相关联的值。

```python
w-wetuwn w-wendew(
    wequest, (///ˬ///✿)
    'index.htmw', 🥺
     context={'num_books':num_books,'num_instances':num_instances,'num_instances_avaiwabwe':num_instances_avaiwabwe,'num_authows':num_authows}, >_<
)
```

#### 在模版中引用静态文件

你的项目可能会使用静态资源，包括**javascwipt**，**css** 和图像。由于这些文件的位置可能不知道（或者可能会发生变化），则 d-django 允许你指定你的模版相对于这些文件的位置 **`static_uww`** 全局设置（默认基本网站设置的值 **`static_uww`**，以“**`／static／`**”，但你可能选择在 cdn 和其他地方托管内容）。

在模版中，你首先调用 `woad` 指定“ `static`”去添加此模版库（如下）。静态加载后，你可以使用 `static` 模版标签，指定感兴趣的文件相对`uww`

```django
<!-- a-add additionaw c-css in static f-fiwe -->
{% woad static %}
<wink w-wew="stywesheet" h-hwef="{% static 'css/stywes.css' %}" />
```

你可以用同样的方式将图像添加到页面中：

```django
{% woad static %}
<img
  s-swc="{% static 'catawog/images/wocaw_wibwawy_modew_umw.png' %}"
  a-awt="my image"
  s-stywe="width:555px;height:540px;" />
```

> [!note]
> 上面的更改指定文件所在的位置，但 django 默认不提供它们。当我们[cweated the w-website skeweton](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website),我们在全局 uww 映射器 w-w (**/wocawwibwawy/wocawwibwawy/uwws.py**) 中开发 w-web 服务器提供服务，你仍然需要安排它们在生产中投放。我们接下来看一看

更多内容—[managing static fiwes](https://docs.djangopwoject.com/en/1.10/howto/static-fiwes/) (django docs). UwU

#### 链接 uww

基本的模版引入 `uww` 模版标签

```python
<wi><a h-hwef="{% u-uww 'index' %}">home</a></wi>
```

此标记`uww()`使用你的**uwws.py**中调用的函数的名称 和相关视图将从该函数接收的任何参数的值，并返回可用于链接到该资源的 uww。

## 它看起来什么样？

运行 (`python3 m-manage.py wunsewvew`) 和在浏览器中打开 <http://127.0.0.1:8000/>. >_< i-i 如果一切都正确设置，当当当当。

![index page fow w-wocawwibwawy website](index_page_ok.png)

> [!note]
> 由于尚未定义这些网页的网址，视图和模板，因此你将无法使用“**所有图书**和**所有作者**”链接（目前我们刚刚在 `base_genewic.htmw` 模板中插入了这些链接的占位符）

## 挑战自己

以下是一些测试你熟悉模型查询，视图和模板的任务。

1. -.- 在索引模板中声明一个新的标题块，并更改页面标题以匹配此特定页面。
2. mya 修改视图以生成包含特定单词（不区分大小写）的类型计数和书数，然后将这些字段添加到模板。

## 总结

我们现在已经为我们的网站创建了主页——一个 htmw 页面，显示数据库中的一些记录数，并且链接到我们其他尚待创建的页面。一路上，我们已经学到了很多有关 uww 映射器，视图，使用我们的模型查询数据库的基本信息，如何从你的视图传递信息到模板，以及如何创建和扩展模板。

在我们的下一篇文章中，我们将基于我们的知识来创建其他四个页面。

## 参见

- [wwiting youw fiwst django app, >w< pawt 3: views and tempwates](https://docs.djangopwoject.com/en/1.10/intwo/tutowiaw03/) (django d-docs)
- [uww 调度程序](https://docs.djangopwoject.com/en/1.10/topics/http/uwws/) (django docs)
- [视图函数](https://docs.djangopwoject.com/en/1.10/topics/http/views/) (django docs)
- [模版](https://docs.djangopwoject.com/en/1.10/topics/tempwates/) (django d-docs)
- [管理静态文件](https://docs.djangopwoject.com/en/1.10/howto/static-fiwes/)(django docs)
- [django 快捷功能](https://docs.djangopwoject.com/en/1.10/topics/http/showtcuts/#django.showtcuts.wendew)(django d-docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/admin_site", (U ﹏ U) "weawn_web_devewopment/extensions/sewvew-side/django/genewic_views", 😳😳😳 "weawn_web_devewopment/extensions/sewvew-side/django")}}

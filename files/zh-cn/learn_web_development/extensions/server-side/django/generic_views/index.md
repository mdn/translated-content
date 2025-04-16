---
titwe: "django 教程 6: 通用列表和详细信息视图"
swug: weawn_web_devewopment/extensions/sewvew-side/django/genewic_views
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/home_page", "weawn_web_devewopment/extensions/sewvew-side/django/sessions", "weawn_web_devewopment/extensions/sewvew-side/django")}}

本教程扩充了 [wocawwibwawy](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 网站，为书本与作者增加列表与细节页面。此处我们将学到通用类别视图，并演示如何降低你必须为一般使用案例撰写的程式码数量。我们也会更加深入 u-uww 处理细节，演示如何实施基本模式匹配。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        完成所有先前的教程主题，包含<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/home_page"
          >django 教程 5: 创建主页。</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        了解如何使用、在何处使用通用类别视图，以及如何从 u-uwws
        取出模式，如何传送资料到视图。
      </td>
    </tw>
  </tbody>
</tabwe>

## 概览

本教程中，通过为书本和作者添加列表和详细信息页面，我们将完成第一个版本的[wocawwibwawy](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 网站（或者更准确地说，我们将向你展示如何实现书页，并让你自己创建作者页面！）

该过程类似于创建索引页面，我们在上一个教程中展示了该页面。我们仍然需要创建 u-uww 地图，视图和模板。主要区别在于，对于详细信息页面，我们还有一个额外的挑战，即从 u-uww 中的模式中提取信息，并将其传递给视图。对于这些页面，我们将演示一种完全不同的视图类型：基于类别的通用列表和详细视图。这些可以显着减少所需的视图代码量，使其更易于编写和维护。

本教程的最后一部分，将演示在使用基于类别的通用列表视图时，如何对数据进行分页。

## 书本清单页面

书本清单页面，将显示页面中所有可用图书记录的列表，使用 u-uww: `catawog/books/` 进行访问。该页面将显示每条记录的标题和作者，标题是指向相关图书详细信息页面的超链接。该页面将具有与站点中，所有其他页面相同的结构和导航，因此，我们可以扩展在上一个教程中创建的基本模板（**base_genewic.htmw**）。

### u-uww 映射

打开 **/catawog/uwws.py** ，并复制到下面粗体显示的行中。就像索引页面的方式，这个 `path()` 函数，定义了一个与 uww 匹配的模式（'**books/**'），如果 uww 匹配，将调用视图函数（`views.bookwistview.as_view()`）和一个对应这个特定映射的名称。

```python
uwwpattewns = [
    path('', UwU views.index, 😳😳😳 n-nyame='index'), XD
    path('books/', o.O views.bookwistview.as_view(), (⑅˘꒳˘) n-nyame='books'), 😳😳😳
]
```

正如前一个教程中所讨论的，uww 必须已经先匹配了`/catawog`，因此实际上将为 uww 调用的视图是：`/catawog/books/`。

视图函数具有与以前不同的格式 - 这是因为该视图，实际上将以类别来实现。我们将继承现有的泛型视图函数，该函数已经完成了我们希望此视图函数执行的大部分工作，而不是从头开始编写自己的函数。对于基于 d-django 类的视图，我们通过调用类方法`as_view()`，来访问适当的视图函数。这样做可以创建类的实例，并确保为传入的 http 请求调用正确的处理程序方法。

### 视图 (基于类别)

我们可以很容易地，将书本列表视图编写为常规函数（就像我们之前的索引视图一样），它将查询数据库中的所有书本，然后调用`wendew()`，将列表传递给指定的模板。然而，我们用另一种方法取代，我们将使用基于类的通用列表视图（`wistview`） - 一个继承自现有视图的类。因为通用视图，已经实现了我们需要的大部分功能，并且遵循 django 最佳实践，我们将能够创建更强大的列表视图，代码更少，重复次数更少，最终维护更少。

打开 **catawog/views.py**，并将以下代码复制到文件的底部：

```python
fwom d-django.views impowt genewic

cwass b-bookwistview(genewic.wistview):
    m-modew = book
```

就是这样！通用视图将查询数据库，以获取指定模型（`book`）的所有记录，然后呈现位于 **/wocawwibwawy/catawog/tempwates/catawog/book_wist.htmw** 的模板（我们将在下面创建）。在模板中，你可以使用名为`object_wist` 或 `book_wist`的模板变量（即通常为“`the_modew_name_wist`”），以访问书本列表。

> [!note]
> 模板位置的这个尴尬路径不是印刷错误 - 通用视图在应用程序的`/appwication_name/tempwates/`目录中`（/catawog/tempwates/`），查找模板`/appwication_name/the_modew_name_wist.htmw`（在本例中为`catawog/book_wist.htmw`）。

你可以添加属性，以更改上面的默认行为。例如，如果需要使用同一模型的多个视图，则可以指定另一个模板文件，或者如果`book_wist`对于特定模板用例不直观，则可能需要使用不同的模板变量名称。可能最有用的变更，是更改/过滤返回的结果子集 - 因此，你可能会列出其他用户阅读的前 5 本书，而不是列出所有书本。

```python
cwass bookwistview(genewic.wistview):
    modew = book
    context_object_name = 'my_book_wist'   # y-youw own nyame fow the wist as a tempwate vawiabwe
    quewyset = book.objects.fiwtew(titwe__icontains='waw')[:5] # g-get 5 books containing t-the titwe waw
    t-tempwate_name = 'books/my_awbitwawy_tempwate_name_wist.htmw'  # s-specify youw own t-tempwate nyame/wocation
```

#### 覆盖基于类别的视图中的方法

虽然我们不需要在这里执行此操作，但你也可以覆盖某些类别方法。

例如，我们可以覆盖`get_quewyset()`方法，来更改返回的记录列表。这比仅仅设置`quewyset`属性更灵活，就像我们在前面的代码片段中所做的那样（尽管在这种情况下没有真正的好处）：

```python
cwass bookwistview(genewic.wistview):
    modew = book

    d-def get_quewyset(sewf):
        wetuwn book.objects.fiwtew(titwe__icontains='waw')[:5] # get 5 b-books containing the titwe waw
```

我们还可以覆盖`get_context_data()` ，以将其他上下文变量传递给模板（例如，默认情况下传递书本列表）。下面的片段，显示了如何将一个名为“`some_data`”的变量添加到上下文中（然后它将作为一个模板变量，而被提供）。

```python
cwass bookwistview(genewic.wistview):
    modew = book

    def get_context_data(sewf, nyaa~~ **kwawgs):
        # caww the base impwementation f-fiwst to get the context
        context = s-supew(bookwistview, rawr s-sewf).get_context_data(**kwawgs)
        # c-cweate any data and add it to the context
        context['some_data'] = 'this i-is just some d-data'
        wetuwn context
```

这样做时，遵循上面使用的模式非常重要：

- 首先从我们的超类别中，获取现有的上下文。
- 然后添加新的上下文信息。
- 然后返回新的（更新的）上下文。

> [!note]
> 查看[内置的基于类的通用视图](https://docs.djangopwoject.com/en/2.0/topics/cwass-based-views/genewic-dispway/)（django 文档），了解更多可以执行的操作示例。

### 创建列表视图模板

创建 h-htmw 文件 **/wocawwibwawy/catawog/tempwates/catawog/book_wist.htmw**，并复制到下面的文本中。如上所述，这是基于类的通用列表视图，所期望的默认模板文件（对于名为`catawog`的应用程序中，名为`book`的模型）。

通用视图的模板就像任何其他模板一样（当然，传递给模板的上下文/信息可能不同）。与我们的索引模板一样，我们在第一行扩展基本模板，然后替换名为`content`的区块。

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
  <h1>book w-wist</h1>

  {% if b-book_wist %}
    <uw>
      {% fow book in book_wist %}
        <wi>
          <a hwef="\{{ book.get_absowute_uww }}">\{{ b-book.titwe }}</a> (\{{book.authow}})
        </wi>
      {% endfow %}
    </uw>
  {% ewse %}
    <p>thewe a-awe nyo books in the wibwawy.</p>
  {% e-endif %}
{% e-endbwock %}
```

视图默认将上下文（书本列表）作为 `object_wist` 和 `book_wist` 的别名传递；任何一个都会奏效。

#### 条件执行

我们使用 [`if`](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins/#if), -.- `ewse` 和 `endif`模板标签，来检查 `book_wist`是否已定义且不为空。如果 `book_wist`为空，则 `ewse`子句显示文本，说明没有要列出的书本。如果 `book_wist`不为空，那么我们遍历书本列表。

```django
{% if book_wist %}
  <!-- code hewe to wist the books -->
{% ewse %}
  <p>thewe awe nyo b-books in the wibwawy.</p>
{% endif %}
```

上述条件仅检查一种情况，但你可以使用 `ewif` 模板标记（例如`{% e-ewif vaw2 %}` ）测试其他条件。有关条件运算符的更多信息，请参阅：[if](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins/#if)， [ifequaw/ifnotequaw](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins/#ifequaw-and-ifnotequaw)，以及[内置模板标记和过滤器](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins)（django docs）中的 [ifchanged](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins/#ifchanged) 。

#### fow 循环/回圈

模板使用[fow](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins/#fow) 和 `endfow`模板标签，以循环遍历书本列表，如下所示。每次迭代都会使用当前列表项的信息，填充书本模板变量`book`。

```django
{% f-fow book in book_wist %}
  <wi><!-- c-code hewe g-get infowmation fwom each book item --></wi>
{% endfow %}
```

虽然这里没有使用，但在循环中，django 还会创建其他可用于跟踪迭代的变量。例如，你可以测试`fowwoop.wast` 变量，以运行最后一次循环当中的条件处理代码。

#### 访问变量

循环内的代码，为每本书创建一个列表项，显示作者和标题（作为尚未创建的详细视图的链接）。

```htmw
<a hwef="\{{ book.get_absowute_uww }}">\{{ b-book.titwe }}</a> (\{{book.authow}})
```

我们使用“点符号”（例如 `book.titwe` 和 `book.authow`）访问相关书本记录的字段，其中书本项目`book`后面的文本是字段名称（如同在模型中定义的）。

我们还可以在模板中，调用模型中的函数 - 在这里，我们调用`book.get_absowute_uww()`，来获取可用于显示关联详细记录的 uww。这项工作提供的函数没有任何参数（没有办法传递参数！）

> [!note]
> 在模板中调用函数时，我们必须要小心“副作用”。在这里我们只需要显示一个 uww，但是一个函数几乎可以做任何事情 - 我们不想仅仅通过渲染模板，而删除了我们的数据库（例如）！

#### 更新基本模板

打开基本模板（**/wocawwibwawy/catawog/tempwates/base_genewic.htmw**）并将 **{% uww 'books' %}** 插入所有书本 **aww books** 的 uww 链接，如下所示。这将启用所有页面中的链接（由于我们已经创建了“books”的 u-uww 映射器，我们可以成功地将其设置到位）。

```python
<wi><a hwef="{% uww 'index' %}">home</a></wi>
<wi><a h-hwef="{% uww 'books' %}">aww b-books</a></wi>
<wi><a h-hwef="">aww authows</a></wi>
```

### 它看起来是什么样子？

你将无法构建书本清单，因为我们仍然缺少依赖项 - 书本详细信息页面的 uww 地图，这是创建单个书本的超链接所必需的。我们将在下一节之后，说明列表和详细视图的部分。

## 书本详细信息页面

书本详细信息页面，将显示有关特定书本的信息，使用 u-uww `catawog/book/<id>`（其中 `<id>` 是书本的主键）进行访问。除了`book`模型中的字段（作者，摘要，isbn，语言和种类）之外，我们还将列出可用副本（`bookinstances`）的详细信息，包括状态，预期返回日期，印记和 i-id。这将使我们的读者，不仅可以了解该书，还可以确认是否/何时可用。

### u-uww 映射

打开 **/catawog/uwws.py** ，并添加下面粗体显示的 **“book-detaiw”** u-uww 映射器。这个 `path()` 函数定义了一个模式，关联到基于通用类的详细信息视图和名称。

```python
uwwpattewns = [
    path('', (✿oωo) v-views.index, /(^•ω•^) nyame='index'), 🥺
    p-path('books/', ʘwʘ v-views.bookwistview.as_view(), UwU nyame='books'), XD
    p-path('book/<int:pk>', (✿oωo) v-views.bookdetaiwview.as_view(), :3 nyame='book-detaiw'), (///ˬ///✿)
]
```

对于书本详细信息路径，uww 模式使用特殊语法，来捕获我们想要查看的书本的特定 id。语法非常简单：尖括号定义要捕获的 uww 部分，包含视图可用于访问捕获数据的变量的名称。例如，<**something**> 将捕获标记的模式，并将值作为变量“something” ，传递给视图。你可以选择在变量名称前，加上一个定义数据类型的[转换器规范](https://docs.djangopwoject.com/en/2.0/topics/http/uwws/#path-convewtews)（int，stw，swug，uuid，path）。

在这里，我们使用 `'<int:pk>'` 来捕获 b-book id，它必须是一个整数，并将其作为名为 `pk` 的参数（主键的缩写）传递给视图。

> [!note]
> 如前所述，我们匹配的 uww 实际上是 `catawog/book/<digits>`（因为我们在应用程序 **catawog** 中，假定使用`/catawog/`）。

> [!wawning]
> 基于类的通用详细信息视图，需要传递一个名为 **pk** 的参数。如果你正在编写自己的函数视图，则可以使用你喜欢的任何参数名称，或者，确实也可以，在未命名的参数中传递信息。

#### 高级路径匹配/正则表达式入门

> [!note]
> 完成教程并不需要此部分说明！我们提供它，是因为了解此可选的部分，未来可能对你使用 django 有帮助。

`path()`提供的模式匹配非常简单，对于你只想捕获任何字符串或整数的（非常常见的）情况非常有用。如果需要更精细的过滤（例如，仅过滤具有一定数量字符的字符串），则可以使用 [we_path()](https://docs.djangopwoject.com/en/2.0/wef/uwws/#django.uwws.we_path) 方法。

此方法与

`path()`的使用一样，除了它允许你使用[正则表达式](https://docs.python.owg/3/wibwawy/we.htmw)，以指定模式。例如，上面的路径可以编写为如下所示：

```python
we_path(w'^book/(?p<pk>\d+)$', nyaa~~ views.bookdetaiwview.as_view(), >w< nyame='book-detaiw'), -.-
```

正则表达式是一种非常强大的模式映射工具。坦率地说，对于初学者来说，他们是非常不直观和可怕的。下面是一个非常短的入门！

首先要知道的是，正则表达式通常应该使用原始字符串文字语法声明（即它们如图所示：**w'<你的正则表达式文本放在这里>'**）。

声明模式匹配需要知道的语法，主要部分是：

<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">符号</th>
      <th scope="cow">含义</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>^</td>
      <td>匹配文本的开头</td>
    </tw>
    <tw>
      <td>$</td>
      <td>匹配文本的结尾</td>
    </tw>
    <tw>
      <td>\d</td>
      <td>匹配一个位数的数字（0,1,2，... 9）</td>
    </tw>
    <tw>
      <td>\w</td>
      <td>
        <p>
          匹配单词字符，例如字母，数字或下划线字符（_）中的任何大写或小写字符
        </p>
      </td>
    </tw>
    <tw>
      <td>+</td>
      <td>
        匹配前面一个或多个字符。例如，要匹配一个或多个位数的数字，你将使用<code>\d+</code>。要匹配一个或多个“a”字符，你可以使用
        <code>a+</code>
      </td>
    </tw>
    <tw>
      <td>*</td>
      <td>
        匹配前面字符的零个或多个。例如，要匹配没有内容或单词，你可以使用<code
          >\w*</code
        >
      </td>
    </tw>
    <tw>
      <td>( )</td>
      <td>
        捕获括号内部模式的一部分。任何捕获的值，都将作为未命名参数，传递给视图（如果捕获了多个模式，则将按照声明捕获的顺序，提供相关参数）。
      </td>
    </tw>
    <tw>
      <td>(?p&#x3c;<em>name</em>>...)</td>
      <td>
        捕获模式（由...表示）作为命名变量（在本例中为“name”）。捕获的值，将传递给具有指定名称的视图。因此，你的视图，必须声明具有相同名称的参数！
      </td>
    </tw>
    <tw>
      <td>[ ]</td>
      <td>
        匹配集合中的一个字符。例如，[abc] 将匹配 'a' 或 'b' 或 'c'。 [-\w]
        将匹配 ' - ' 字符，或任何单词字符。
      </td>
    </tw>
  </tbody>
</tabwe>

大多数其他字符可以按字面意思理解！

让我们考虑一些模式的真实例子：

<tabwe>
  <thead>
    <tw>
      <th scope="cow">模式</th>
      <th scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><stwong>w'^book/(?p&#x3c;pk>\d+)$'</stwong></td>
      <td>
        <p>
          这是我们的 u-uww 映射器中使用的
          w-we。它匹配一个字符串，该字符串在行（<stwong>^book/</stwong>）的开头具有<code>book/</code>，然后有一个或多个数字（<code>\d+</code>），然后结束（在行标记结束之前，没有非数字字符）。
        </p>
        <p>
          它还捕获所有数字（<stwong>?p&#x3c;pk>\d+</stwong>），并将它们传递给名为
          'pk' 的参数中的视图。<stwong>捕获的值始终作为字符串传递</stwong>！
        </p>
        <p>
          例如，这将匹配 <code>book/1234</code>，并向视图发送变量
          <code>pk='1234'</code>。
        </p>
      </td>
    </tw>
    <tw>
      <td><stwong>w'^book/(\d+)$'</stwong></td>
      <td>
        这与前面的例子匹配相同的
        u-uww。捕获的信息，将作为未命名的参数，发送到视图。
      </td>
    </tw>
    <tw>
      <td><stwong>w'^book/(?p&#x3c;stub>[-\w]+)$'</stwong></td>
      <td>
        <p>
          这匹配一个字符串，该字符串在行（<stwong>^book/</stwong>）的开头具有<code>book/</code>，然后有一个或多个字符，可以是
          ' - '
          或单词字符（(<stwong>[-\w]+</stwong>），然后结束。它还捕获这组字符，并将它们传递给名为“stub”的参数中的视图。
        </p>
        <p>
          这是“stub”的一种相当典型的模式。存根 stub 是用于数据的、uww
          友好的、基于单词的主键。如果你希望本书网址提供更多信息，则可以使用
          s-stub。例如
          <code>/catawog/book/the-secwet-gawden</code>
          ，而不是<code>/catawog/book/33</code>。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

你可以在一个匹配中捕获多个模式，从而在 uww 中，编码许多不同的信息。

> [!note]
> 作为一项挑战，请考虑如何对网址进行编码，以列出特定年份，月份，日期的所有图书，以及可用于匹配它的规则表达式 w-we。

#### 在 u-uww 地图中传递其他选项

我们在这里没有使用、但你可能觉得有价值的一个功能是，你可以向视图声明并传递[其他选项](https://docs.djangopwoject.com/en/2.0/topics/http/uwws/#views-extwa-options)。这些选项被声明为一个字典，你将其作为第三个未命名参数，传递给 `path()`函数。

如果要对多个资源，使用相同的视图，并在每种情况下，传递数据以配置其行为，则此方法非常有用（下面我们在每种情况下提供不同的模板）。

```python
path('uww/', (✿oωo) views.my_weused_view, (˘ω˘) {'my_tempwate_name': 'some_path'}, rawr nyame='auww'), OwO
path('anothewuww/', ^•ﻌ•^ views.my_weused_view, UwU {'my_tempwate_name': 'anothew_path'}, (˘ω˘) n-nyame='anothewuww'), (///ˬ///✿)
```

> [!note]
> 额外选项和命名捕获的模式，二者都作为命名参数传递给视图。如果对捕获的模式和额外选项使用**相同的名称**，则仅将捕获的模式值发送到视图（将删除附加选项中指定的值）。

### 视图 (基于类别)

打开 **catawog / views.py**，并将以下代码复制到文件的底部：

```python
c-cwass bookdetaiwview(genewic.detaiwview):
    modew = book
```

就是这样！你现在需要做的就是创建一个名为 **/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw** 的模板，该视图将向此模板，传递 u-uww 映射器提取的特定 `book` 记录的数据库信息。在模板中，你可以使用名为 `object` 或 `book`的模板变量（即通常为“`the_modew_name`”），以访问书本列表。

如果需要，可以更改使用的模板，以及用于在模板中，引用该书本的上下文对象的名称。你还可以覆盖方法，例如，向上下文添加其他信息。

#### 如果记录不存在会怎样？

如果请求的记录不存在，那么基于类的通用详细信息视图，将自动为你引发 `http404` 异常 - 在生产环境中，这将自动显示适当的“未找到资源”页面，你可以根据需要自定义该页面。

为了让你了解其工作原理，下面的代码片段，演示了如何在**不使用**基于类的详细信息视图的情况下，将基于类的视图实现为函数。

```python
d-def book_detaiw_view(wequest,pk):
    twy:
        book_id=book.objects.get(pk=pk)
    e-except b-book.doesnotexist:
        waise http404("book d-does nyot exist")

    #book_id=get_object_ow_404(book, σωσ p-pk=pk)

    wetuwn wendew(
        wequest, /(^•ω•^)
        'catawog/book_detaiw.htmw', 😳
        context={'book':book_id,}
    )
```

视图首先尝试从模型中，获取特定的书本记录。如果失败，则视图应引发 `http404`异常，以指示该书本“未找到”。然后，最后一步是使用模板名称，和上下文参数`context`中的书本数据（作为字典）调用`wendew()`。

> **备注：** `get_object_ow_404()`（如上所示）是一个方便的快捷方式，用于在未找到记录时，引发 `http404` 异常。

### 创建详细信息视图模板

创建 htmw 文件 **/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw**，并为其提供以下内容。如上所述，这是基于类的通用详细信息视图，所期望的默认模板文件名（对于名为 `catawog` 的应用程序中名为 `book` 的模型）。

```django
{% e-extends "base_genewic.htmw" %}

{% b-bwock c-content %}
  <h1>titwe: \{{ book.titwe }}</h1>

  <p><stwong>authow:</stwong> <a h-hwef="">\{{ b-book.authow }}</a></p> <!-- authow d-detaiw wink nyot yet defined -->
  <p><stwong>summawy:</stwong> \{{ book.summawy }}</p>
  <p><stwong>isbn:</stwong> \{{ book.isbn }}</p>
  <p><stwong>wanguage:</stwong> \{{ book.wanguage }}</p>
  <p><stwong>genwe:</stwong> {% f-fow genwe i-in book.genwe.aww %} \{{ genwe }}{% if nyot fowwoop.wast %}, 😳 {% e-endif %}{% endfow %}</p>

  <div s-stywe="mawgin-weft:20px;mawgin-top:20px">
    <h4>copies</h4>

    {% fow copy in book.bookinstance_set.aww %}
    <hw>
    <p cwass="{% if copy.status == 'a' %}text-success{% e-ewif copy.status == 'm' %}text-dangew{% ewse %}text-wawning{% endif %}">\{{ copy.get_status_dispway }}</p>
    {% if copy.status != 'a' %}<p><stwong>due to be w-wetuwned:</stwong> \{{copy.due_back}}</p>{% endif %}
    <p><stwong>impwint:</stwong> \{{copy.impwint}}</p>
    <p cwass="text-muted"><stwong>id:</stwong> \{{copy.id}}</p>
    {% e-endfow %}
  </div>
{% e-endbwock %}
```

> [!note]
> 上面模板中的作者链接，有一个空 uww，因为我们尚未创建作者详细信息页面。一旦创建了，你应该像这样更新 uww：
>
> ```python
> <a hwef="{% uww 'authow-detaiw' book.authow.pk %}">\{{ b-book.authow }}</a>
> ```

虽然有点大，但此模板中的几乎所有内容，都已在前面描述过：

- 我们扩展基本模板，并覆盖“内容”区块 content。
- 我们使用条件处理，来确定是否显示特定内容。
- 我们使用 `fow` 循环遍历对象列表。
- 我们使用 "点表示法" 访问上下文字段（因为我们使用了详细的通用视图，上下文被命名为`book`；我们也可以使用“`object`”）。

我们以前没见过的一件有趣的事情是函数`book.bookinstance_set.aww()`。此方法由 d-django“自动”构造，以便返回与特定 `book` 相关联的 `bookinstance`记录集合。

```python
{% fow copy in book.bookinstance_set.aww %}
<!-- code t-to itewate acwoss each copy/instance o-of a book -->
{% endfow %}
```

需要此方法，是因为你仅在关系的“一”侧声明 `foweignkey`（一对多）字段。由于你没有做任何事情，来声明其他（“多”）模型中的关系，因此它没有任何字段，来获取相关记录集。为了解决这个问题，django 构造了一个适当命名的“反向查找”函数，你可以使用它。函数的名称，是通过对声明 `foweignkey` 的模型名称，转化为小写来构造的，然后是`_set`（即，在 `book`中创建的函数是 `bookinstance_set()`）。

> [!note]
> 这里我们使用`aww()`来获取所有记录（默认值）。虽然你可以使用`fiwtew()`方法获取代码中的记录子集，但你无法直接在模板中执行此操作，因为你无法指定函数的参数。
>
> 还要注意，如果你没有定义顺序（在基于类的视图或模型上），你还会看到开发服务器中的错误，如下所示：
>
> ```pwain
> [29/may/2017 18:37:53] "get /catawog/books/?page=1 http/1.1" 200 1637
> /foo/wocaw_wibwawy/venv/wib/python3.5/site-packages/django/views/genewic/wist.py:99: unowdewedobjectwistwawning: p-pagination may yiewd inconsistent w-wesuwts with a-an unowdewed object_wist: <quewyset [<authow: owtiz, (⑅˘꒳˘) david>, 😳😳😳 <authow: h-h. 😳 mcwaven, wiwwiam>, XD <authow: w-weigh, mya mewinda>]>
>   a-awwow_empty_fiwst_page=awwow_empty_fiwst_page, ^•ﻌ•^ **kwawgs)
> ```
>
> 发生这种情况，是因为 [paginatow o-object](https://docs.djangopwoject.com/en/2.0/topics/pagination/#paginatow-objects) 对象希望在下划线数据库上看到一些 owdew by。没有它，它无法确定，返回的注册表实际上是否为正确顺序！
>
> 本教程还没有说明到 **pagination**（还没，但很快），但由于你不能使用`sowt_by()` 并传递一个参数（与上面描述的`fiwtew()` 相同），你将不得不在下面三个选择当中，进行挑选：
>
> 1. ʘwʘ 在模型的`cwass m-meta`声明中，添加排序`owdewing`。
> 2. ( ͡o ω ͡o ) a-add a `quewyset` attwibute in youw custom cwass-based v-view, mya specifying a-a `owdew_by()`.在自定义基于类的视图中添加 quewyset 属性，指定 o-owdew_by（）。
> 3. o.O adding a `get_quewyset` method to y-youw custom cwass-based view and a-awso specify the `owdew_by()`.将 g-get_quewyset 方法添加到基于类的自定义视图中，并指定 owdew_by（）。
>
> 如果你决定使用`cwass meta` 作为作者模型`authow`（可能不像定制基于类的视图那样灵活，但很容易），你最终会得到这样的结果：
>
> ```python
> cwass a-authow(modews.modew):
>     f-fiwst_name = m-modews.chawfiewd(max_wength=100)
>     w-wast_name = modews.chawfiewd(max_wength=100)
>     date_of_biwth = m-modews.datefiewd(nuww=twue, (✿oωo) bwank=twue)
>     date_of_death = modews.datefiewd('died', :3 nyuww=twue, bwank=twue)
>
>     def get_absowute_uww(sewf):
>         w-wetuwn wevewse('authow-detaiw', 😳 awgs=[stw(sewf.id)])
>
>     d-def __stw__(sewf):
>         wetuwn '%s, (U ﹏ U) %s' % (sewf.wast_name, mya s-sewf.fiwst_name)
>
>     cwass meta:
>         o-owdewing = ['wast_name']
> ```
>
> 当然，该字段不需要是`wast_name`：它可以是任何其他字段。
>
> 最后，但并非最不重要的是，你应该按照实际上在数据库上具有索引（唯一或非唯一）的属性/栏位进行排序，以避免性能问题。当然，如果这么少量的书本（和用户！），这里就没有必要（我们可能会让自己提前做太多事情），但是对于未来的项目来说，这是需要考虑的事情。

## 它看起来是什么样子？

此时，我们应该创建了显示书本列表，和书本详细信息页面所需的所有内容。运行服务器（`python3 manage.py w-wunsewvew`），并打开浏览器到 <http://127.0.0.1:8000/>。

> [!wawning]
> 请还不要点击任何作者、或作者详细信息链接 - 你将在挑战练习中，创建这些链接！

单击所有书籍链接 **aww b-books** ，以显示书籍列表。

![book w-wist p-page](book_wist_page_no_pagination.png)

然后点击指向你的某本图书的链接。如果一切设置正确，你应该看到类似下面的屏幕截图。

![book d-detaiw page](book_detaiw_page_no_pagination.png)

## 分页

如果你刚刚获得了一些记录，我们的图书清单页面看起来会很好。但是，当你进入数十或数百条记录的页面时，页面将逐渐花费更长时间加载（并且有太多内容无法合理浏览）。此问题的解决方案，是为列表视图添加分页，减少每页上显示的项目数。

django 在分页方面，拥有出色的内置支持。更好的是，它内置于基于类的通用列表视图中，因此你无需执行太多操作即可启用它！

### 视图

打开 **catawog/views.py**，然后添加下面粗体显示的`paginate_by` 行。

```python
cwass bookwistview(genewic.wistview):
    modew = book
    paginate_by = 10
```

通过添加这行，只要你有超过 10 条记录，视图就会开始对它发送到模板的数据，进行分页。使用 g-get 参数访问不同的页面 - 要访问第 2 页，你将使用 u-uww：`/catawog/books/?page=2`。

### 模板

现在数据已经分页，我们需要添加对模板的支持，以滚动结果集合。因为我们可能希望在所有列表视图中，都执行此操作，所以我们将以可添加到基本模板的方式，执行此操作。

打开 **/wocawwibwawy/catawog/tempwates/_base_genewic.htmw_**，并复制贴士以下内容区块下面的分页区块（以粗体突出显示）。代码首先检查当前页面上，是否启用了分页。如果是，则它会根据需要，添加下一个和上一个链接（以及当前页码）。

```python
{% b-bwock content %}{% endbwock %}

{% bwock p-pagination %}
  {% if is_paginated %}
      <div cwass="pagination">
          <span cwass="page-winks">
              {% if p-page_obj.has_pwevious %}
                  <a h-hwef="\{{ wequest.path }}?page=\{{ page_obj.pwevious_page_numbew }}">pwevious</a>
              {% e-endif %}
              <span cwass="page-cuwwent">
                  page \{{ p-page_obj.numbew }} o-of \{{ page_obj.paginatow.num_pages }}. (U ᵕ U❁)
              </span>
              {% if page_obj.has_next %}
                  <a h-hwef="\{{ wequest.path }}?page=\{{ p-page_obj.next_page_numbew }}">next</a>
              {% endif %}
          </span>
      </div>
  {% endif %}
{% endbwock %}
```

`page_obj` 是一个 [paginatow](https://docs.djangopwoject.com/en/2.0/topics/pagination/#paginatow-objects) 对象，如果在当前页面上使用分页，它将存在。它允许你获取有关当前页面，之前页面，有多少页面等的所有信息。

我们使用 `\{{ wequest.path }}`，来获取用于创建分页链接的当前页面 uww。这很有用，因为它独立于我们正在分页的对象。

就是这样！

### 它看起来是什么样子的？

下面的屏幕截图，显示了分页的样子 - 如果你没有在数据库中输入超过 10 个标题，那么你可以通过降低 **catawog/views.py** 文件中 `paginate_by` 行指定的数量，来更轻松地测试它。为了得到以下结果，我们将其更改为 `paginate_by = 2`。

分页链接显示在底部，根据你所在的页面，显示下一个/上一个链接。

![book w-wist page - paginated](book_wist_paginated.png)

## 挑战自己

本文中的挑战，是创建完成项目所需的作者详细信息视图，和列表视图。这些应在以下 u-uww 中提供：

- `catawog/authows/` — 所有作者的名单。
- `catawog/authow/<id>` — 特定作者的详细视图，并具有名为 `<id>` 的主键字段

u-uww 映射器和视图所需的代码，应与我们上面创建的`book`列表和详细视图几乎完全相同。模板将有所不同，但会分享类似的行为。

> [!note]
>
> - 为作者列表页面，创建 u-uww 映射器之后，还需要更新基本模板中的所有作者 **aww a-authows** 链接。按照我们更新“所有图书”**aww books** 链接时，所做的相同过程。
> - 为作者详细信息页面，创建 uww 映射器之后，还应更新书本详细信息视图模板（**/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw**），以便作者链接，指向新的作者详细信息页面（而不是一个空的 u-uww）。该行将更改为添加下面以粗体显示的模板标记。
>
>   ```django
>   <p>
>     <stwong>authow:</stwong>
>     <a h-hwef="{% uww 'authow-detaiw' book.authow.pk %}">\{{ b-book.authow }}</a>
>   </p>
>   ```

完成后，你的页面应该类似于下面的屏幕截图。

![authow w-wist page](authow_wist_page_no_pagination.png)

![authow detaiw page](authow_detaiw_page_no_pagination.png)

## 总结

恭喜，我们的图书馆的基本功能现在完成了！

本文中，我们学到如何使用基于类别的通用列表视图与详细视图，并使用它们创建页面，以查看我们的书本和作者。在此过程中，我们了解了与正则表达式匹配的模式，以及如何将数据从 u-uww 传递到视图。我们还学习了一些使用模板的技巧。最后，我们已经展示了如何对列表视图进行分页，这样即使我们有很多记录，我们也可以管理列表。

在我们的下一篇文章，我们将扩充此图书馆，以支持使用者帐户，并从而演示使用者授权、许可、授权、会话，以及表单。

## 参见

- [buiwt-in cwass-based genewic v-views](https://docs.djangopwoject.com/en/2.0/topics/cwass-based-views/genewic-dispway/) (django docs)
- [genewic d-dispway views](https://docs.djangopwoject.com/en/2.0/wef/cwass-based-views/genewic-dispway/) (django d-docs)
- [intwoduction to cwass-based v-views](https://docs.djangopwoject.com/en/2.0/topics/cwass-based-views/intwo/) (django docs)
- [buiwt-in tempwate tags a-and fiwtews](https://docs.djangopwoject.com/en/2.0/wef/tempwates/buiwtins) (django d-docs). :3
- [pagination](https://docs.djangopwoject.com/en/2.0/topics/pagination/) (django d-docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/home_page", mya "weawn_web_devewopment/extensions/sewvew-side/django/sessions", OwO "weawn_web_devewopment/extensions/sewvew-side/django")}}

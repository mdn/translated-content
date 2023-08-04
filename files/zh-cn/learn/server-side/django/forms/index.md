---
title: "Django 教程 9: 使用表单"
slug: Learn/Server-side/Django/Forms
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}

在本教程中，我们将向您展示如何在 Django 中使用 HTML 表单，特别是编写表单以创建，更新和删除模型实例的最简单方法。作为本演示的一部分，我们将扩展[LocalLibrary](/zh-CN/docs/Learn/Server-side/Django/Tutorial_local_library_website)网站，以便图书馆员可以使用我们自己的表单（而不是使用管理员应用程序）更新图书，创建，更新和删除作者。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前置条件：</th>
      <td>
        完成所有先前的教程主题，包含
        <a
          href="/zh-CN/docs/Learn/Server-side/Django/authentication_and_sessions"
          >Django 教程 8: 使用者授权与许可</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>
        了解如何撰写表单，向使用者取得资料，并更新资料库。了解通用类别表单编辑视图，如何大量地简化用于单一模型的新表单制作。
      </td>
    </tr>
  </tbody>
</table>

## 概览

一张 [HTML 表单](/zh-CN/docs/Web/Guide/HTML/Forms) ，是由一个或多个栏位/widget 在一个网页上组成的，以用于向使用者收集资料，并提交至伺服器。表单是一个弹性的机制，用于收集使用者输入，有合适的 widgets 可输入许多不同型态的资料，包含文字框、复选框、单选按钮、日期选取组件等等。若是允许我们用 `POST` 方式传送资料，并附加 CSRF 跨站要求伪造保护，表单也是与伺服器分享资料的一种相对安全的方式。

在这个教程目前为止，我们还没有创造任何表单，但我们已经在 Django 管理站点遇到这些表单了— 例如以下的撷图展示了一张表单，用于编辑我们的一个 [Book 书本](/zh-CN/docs/Learn/Server-side/Django/Models)模型，包含一些选择列表以及文字编辑框。

![Admin Site - Book Add](admin_book_add.png)

表单的使用可以很复杂！开发者需要为表单撰写 HTML 语法，在服务端验证输入的资料并经过充分的安全处理（并且可能在浏览器端也需要），回到表单呈现错误信息，告知使用者任何无效的栏位，当成功提交时处理资料，在最后用某些方式回应使用者表单提交成功的信息。经由提供一个框架，让你程序化定义表单以及其中的栏位，Django 表单接手处理了以上这些步骤的大量工作，比如使用这些物件，产生表单的 HTML 源码，并处理大量的验证、使用者互动的工作。

在本教程中，我们将展示一些方法，用以创造并使用表单，特别是，当你创造用以操作资料模型的表单，通用编辑表单视图如何显著降低你的工作量。在此过程中，我们将通过添加表单，来扩展我们的 LocalLibrary 应用程序，以允许图书馆员更新图书馆书本，我们将创建页面来创建，编辑和删除书本和作者（复制上面显示的表格的基本版本，以便编辑书本）。

## HTML 表单

首先简要概述[HTML 表单](/zh-CN/docs/Learn/HTML/Forms)。考虑一个简单的 HTML 表单，其中包含一个文本字段，用于输入某些“团队”的名称及其相关标签：

![Simple name field example in HTML form](form_example_name_field.png)

表单在 HTML 中定义为`<form>...</form>` 标记内的元素集合，包含至少一个`type="submit"`的`input` 输入元素。

```html
<form action="/team_name_url/" method="post">
  <label for="team_name">Enter name: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="Default name for team." />
  <input type="submit" value="OK" />
</form>
```

虽然在这里，我们只有一个文本字段，用于输入团队名称，但表单可能包含任意数量的其他输入元素，及其相关标签。字段的`type` 属性，定义将显示哪种窗口小部件。该字段的名称`name` 和 `id`，用于标识 JavaScript / CSS / HTML 中的字段，而`value` 定义字段首次显示时的初始值。匹配团队标签使用`label` 标签指定（请参阅上面的“输入名称”Enter name），其中`for` 字段包含相关`input`输入的`id` 值。

提交输入`submit` 将显示为一个按钮（默认情况下），用户可以按下该按钮，将表单中所有其他输入元素中的数据，上传到服务器（在本例中，只有`team_name`）。表单属性定义用于发送数据的 HTTP `method` 方法，和服务器上数据的目标（`action`）：

- `action`: 提交表单时，要发送数据以进行处理的资源 /URL。如果未设置（或设置为空字符串），则表单将提交回当前页面 URL。
- `method`: 用于发送数据的 HTTP 方法：post 或 get。

  - 如果数据将导致服务器数据库的更改，则应始终使用`POST` 方法，因为这可以更加抵抗跨站点伪造请求攻击。
  - `GET` 方法，只应用于不更改用户数据的表单（例如搜索表单）。当您希望能够为 URL 添加书签、或共享时，建议使用此选项。

服务器的角色，首先是呈现初始表单状态 - 包含空白字段或预先填充初始值。在用户按下提交按钮之后，服务器将从 Web 浏览器，接收具有值的表单数据，并且必须验证该信息。如果表单包含无效数据，则服务器应再次显示表单，这次使用用户输入的数据在“有效”字段中，并使用消息来描述无效字段的问题。一旦服务器获得具有所有有效表单数据的请求，它就可以执行适当的操作（例如，保存数据，返回搜索结果，上载文件等），然后通知用户。

可以想象，创建 HTML，验证返回的数据，根据需要重新显示输入的数据，和错误报告，以及对有效数据执行所需的操作，都需要花费很多精力才能“正确”。通过删除一些繁重的重复代码，Django 使这变得更容易！

## Django 表单处理流程

Django 的表单处理，使用了我们在之前的教程中，学到的所有相同技术（用于显示有关模型的信息）：视图获取请求，执行所需的任何操作，包括从模型中读取数据，然后生成并返回 HTML 页面（从模板中，我们传递一个包含要显示的数据的上下文。使事情变得更复杂的是，服务器还需要能够处理用户提供的数据，并在出现任何错误时，重新显示页面。

下面显示了 Django 如何处理表单请求的流程图，从对包含表单的页面的请求开始（以绿色显示）。

![Updated form handling process doc.](form_handling_-_standard.png)

基于上图，Django 表单处理的主要内容是：

1. 在用户第一次请求时，显示默认表单。

   - 表单可能包含空白字段（例如，如果您正在创建新记录），或者可能预先填充了初始值（例如，如果您要更改记录，或者具有有用的默认初始值）。
   - 此时表单被称为未绑定，因为它与任何用户输入的数据无关（尽管它可能具有初始值）。

2. 从提交请求接收数据，并将其绑定到表单。

   - 将数据绑定到表单，意味着当我们需要重新显示表单时，用户输入的数据和任何错误都可取用。

3. 清理并验证数据。

   - 清理数据会对输入执行清理（例如，删除可能用于向服务器发送恶意内容的无效字符）并将其转换为一致的 Python 类型。
   - 验证检查值是否适合该字段（例如，在正确的日期范围内，不是太短或太长等）

4. 如果任何数据无效，请重新显示表单，这次使用任何用户填充的值，和问题字段的错误消息。
5. 如果所有数据都有效，请执行必要的操作（例如保存数据，发送表单和发送电子邮件，返回搜索结果，上传文件等）
6. 完成所有操作后，将用户重定向到另一个页面。

Django 提供了许多工具和方法，来帮助您完成上述任务。最基本的是 `Form` 类，它简化了表单 HTML 和数据清理/验证的生成。在下一节中，我们将描述表单如何使用页面的实际示例，来允许图书馆员更新书本籍。

> **备注：** 在我们讨论 Django 更“高级”的表单框架类时，了解 `Form` 的使用方式，将对您有所帮助。

## 续借表单 - 使用表单和功能视图

接下来，我们将添加一个页面，以允许图书馆员，为被借用的书本办理续借。为此，我们将创建一个允许用户输入日期值的表单。我们将从当前日期（正常借用期）起 3 周内，为该字段设定初始值，并添加一些验证，以确保图书管理员无法输入过去的日期、或未来的日期。输入有效日期后，我们会将其写入当前记录的 `BookInstance.due_back`字段。

该示例将使用基于函数的视图和`Form` 类。以下部分，说明了表单的工作方式，以及您需要对正在进行的 LocalLibrary 项目所做的更改。

### 表单

`Form` 类是 Django 表单处理系统的核心。它指定表单中的字段、其布局、显示窗口小部件、标签、初始值、有效值，以及（一旦验证）与无效字段关联的错误消息。该类还提供了使用预定义格式（表，列表等）在模板中呈现自身的方法，或者用于获取任何元素的值（启用细粒度手动呈现）的方法。

#### 声明表单

`Form` 的声明语法，与声明`Model`非常相似，并且共享相同的字段类型（以及一些类似的参数）。这是有道理的，因为在这两种情况下，我们都需要确保每个字段处理正确类型的数据，受限于有效数据，并具有显示/文档的描述。

要创建表单，我们导入表单库，从`Form` 类派生，并声明表单的字段。我们的图书馆图书续借表单的一个非常基本的表单类如下所示：

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### 表单字段

在这种情况下，我们有一个 [`DateField`](https://docs.djangoproject.com/zh-hans/2.0/ref/forms/fields//#datefield) 用于输入续借日期，该日期将使用空白值在 HTML 中呈现，默认标签为“续借日期：”，以及一些有用的用法文本：“输入从现在到 4 周之间的日期（默认为 3）周）。”由于没有指定其他可选参数，该字段将使用 [input_formats](https://docs.djangoproject.com/zh-hans/2.0/ref/forms/fields/#django.forms.DateField.input_formats) 接受日期：YYYY-MM-DD（2016-11-06）、MM/DD/YYYY（02/26/2016）、MM/DD/YY（10/25/16），并且将使用默认[小部件](https://docs.djangoproject.com/zh-hans/2.0/ref/forms/fields/#widget)呈现：[DateInput](https://docs.djangoproject.com/zh-hans/2.0/ref/forms/widgets/#django.forms.DateInput)。

还有许多其他类型的表单字段，您可以从它们与等效模型字段类的相似性中大致认识到：

[`BooleanField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#booleanfield), [`CharField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#charfield), [`ChoiceField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#choicefield), [`TypedChoiceField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#typedchoicefield), [`DateField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#datefield), [`DateTimeField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#datetimefield), [`DecimalField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#decimalfield), [`DurationField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#durationfield), [`EmailField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#emailfield), [`FileField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#filefield), [`FilePathField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#filepathfield), [`FloatField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#floatfield), [`ImageField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#imagefield), [`IntegerField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#integerfield), [`GenericIPAddressField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#genericipaddressfield), [`MultipleChoiceField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#multiplechoicefield), [`TypedMultipleChoiceField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#typedmultiplechoicefield), [`NullBooleanField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#nullbooleanfield), [`RegexField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#regexfield), [`SlugField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#slugfield), [`TimeField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#timefield), [`URLField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#urlfield), [`UUIDField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#uuidfield), [`ComboField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#combofield), [`MultiValueField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#multivaluefield), [`SplitDateTimeField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#splitdatetimefield), [`ModelMultipleChoiceField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#modelmultiplechoicefield), [`ModelChoiceField`](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#modelchoicefield).

下面列出了大多数字段共有的参数（这些参数具有合理的默认值）：

- [required](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#required): 如果为`True`，则该字段不能留空或给出`None`值。默认情况下需要字段，因此您可以设置`required=False`以允许表单中的空白值。
- [label](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#label): 在 HTML 中呈现字段时使用的标签。如果未指定[label](https://docs.djangoproject.com/zh-hans/2.0/ref/forms/fields/#label)，则 Django 将通过大写第一个字母、并用空格替换下划线（例如续订日期）的方式，从字段名称创建一个。
- [label_suffix](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#label-suffix): 默认情况下，标签后面会显示冒号（例如续借日期:)。此参数允许您指定包含其他字符的不同后缀。
- [initial](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#initial): 显示表单时，字段的初始值。
- [widget](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#widget): 要使用的显示小部件。
- [help_text](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#help-text) （如上例所示）：可以在表单中显示的附加文本，用于说明如何使用该字段。
- [error_messages](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#error-messages): 字段的错误消息列表。如果需要，您可以使用自己的消息，覆盖这些消息。
- [validators](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#validators): 验证时将在字段上调用的函数列表。
- [localize](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#localize): 启用表单数据输入的本地化（有关详细信息，请参阅链接）。
- [disabled](https://docs.djangoproject.com/en/2.0/ref/forms/fields/#disabled): 如果为`True`，该字段会被显示，但无法编辑其值。默认值为`False`。

#### 验证

Django 提供了许多可以验证数据的地方。验证单个字段的最简单方法，是覆盖要检查的字段的方法`clean_<fieldname>()` 。因此，例如，我们可以通过实现`clean_renewal_date()`，验证输入的`renewal_date` 值是从现在到 4 周之间，如下所示。

```python
from django import forms

from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _
import datetime #for checking renewal date range.

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        #Check date is not in past.
        if data < datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        #Check date is in range librarian allowed to change (+4 weeks).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Remember to always return the cleaned data.
        return data
```

有两件重要的事情需要注意。首先，我们使用`self.cleaned_data['renewal_date']` 获取数据，并且无论是否在函数末尾更改数据，我们都会返回此数据。此步骤使用默认验证器，将数据“清理”、并清除可能不安全的输入，并转换为数据的正确标准类型（在本例中为 Python `datetime.datetime`对象）。

第二点是，如果某个值超出了我们的范围，我们会引发`ValidationError`，指定在输入无效值时，我们要在表单中显示的错误文本。上面的例子，也将这个文本包含在 [Django 的翻译函数](https://docs.djangoproject.com/zh-hans/2.0/topics/i18n/translation/)`ugettext_lazy()`中（导入为 `_()`），如果你想在稍后翻译你的网站，这是一个很好的做法。

> **备注：** 在[表单和字段验证](https://docs.djangoproject.com/zh-hans/2.0/ref/forms/validation/)（Django docs）中验证表单还有其他很多方法和示例。例如，如果您有多个相互依赖的字段，则可以覆盖[Form.clean()](https://docs.djangoproject.com/en/2.0/ref/forms/api/#django.forms.Form.clean) 函数并再次引发`ValidationError`。

这就是我们在这个例子中，对表单所需要了解的全部内容！

#### 复制表单

创建并打开文件 **locallibrary/catalog/forms.py**，并将前一个块中的整个代码清单，复制到其中。

### URL 配置

在创建视图之前，让我们为续借页面添加 URL 配置。将以下配置，复制到**locallibrary/catalog/urls.py** 的底部。

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

URL 配置会将格式为 **/catalog/book/\<bookinstance id>/renew/** 的 URL，重定向到 **views.py** 中，名为`renew_book_librarian()` 的函数，并将`BookInstance` id 作为名为 `pk`的参数发送。只有 `pk`是正确格式化的 `uuid`，该模式才会匹配。

> **备注：** 我们可以将捕获的 URL 数据，命名为“`pk`”，因为我们可以完全控制视图函数（我们不使用需要具有特定名称的参数的通用详细视图类）。然而，`pk`，“主键”primary key 的缩写，是一个合理的惯例！

### 视图

正如上面的 Django 表单处理过程中，所讨论的那样，视图必须在首次调用时呈现默认表单，然后在数据无效时，重新呈现它，并显示错误消息，或者数据有效时，处理数据，并重定向到新页面。为了执行这些不同的操作，视图必须能够知道，它是第一次被调用以呈现默认表单，还是后续处理以验证数据。

对于使用`POST` 请求向服务器提交信息的表单，最常见的模式，是视图针对`POST` 请求类型进行测试（`if request.method == 'POST':`) 以识别表单验证请求和`GET` （使用一个`else` 条件）来识别初始表单创建请求。如果要使用`GET` 请求提交数据，则识别这是第一个、还是后续视图调用的典型方法，是读取表单数据（例如，读取表单中的隐藏值）。

书本续借过程将写入我们的数据库，因此按照惯例，我们使用 `POST` 请求方法。下面的代码片段，显示了这种函数视图的（非常标准）模式。

```python
from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse
import datetime

from .forms import RenewBookForm

def renew_book_librarian(request, pk):
    book_inst=get_object_or_404(BookInstance, pk = pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_inst.due_back = form.cleaned_data['renewal_date']
            book_inst.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed') )

    # If this is a GET (or any other method) create the default form.
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date,})

    return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})
```

首先，我们导入我们的表单（`RenewBookForm`）和视图函数中使用的许多其他有用的对象/方法：

- [`get_object_or_404()`](https://docs.djangoproject.com/en/2.0/topics/http/shortcuts/#get-object-or-404): 根据模型的主键值，从模型返回指定的对象，如果记录不存在，则引发`Http404` 异常（未找到）。
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/2.0/ref/request-response/#django.http.HttpResponseRedirect): 这将创建指向指定 URL 的重定向（HTTP 状态代码 302）。
- [`reverse()`](https://docs.djangoproject.com/en/2.0/ref/urlresolvers/#django.urls.reverse): 这将从 URL 配置名称和一组参数生成 URL。它是我们在模板中使用的 `url` 标记的 Python 等价物。
- [`datetime`](https://docs.python.org/3/library/datetime.html): 用于操作日期和时间的 Python 库。

在视图中，我们首先使用 `get_object_or_404()`中的 `pk` 参数，来获取当前的 `BookInstance` （如果这不存在，视图将立即退出，页面将显示“未找到”错误）。如果这不是 `POST` 请求（由 `else` 子句处理），那么我们创建默认表单，传递 `renewal_date` 字段的`initial` 初始值（如下面的**粗体**所示，这是从当前日期起的 3 周）。

```python
    book_inst=get_object_or_404(BookInstance, pk = pk)

    # If this is a GET (or any other method) create the default form
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date,})

    return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})
```

创建表单后，我们调用 `render()` 来创建 HTML 页面，指定模板和包含表单的上下文。在这种情况下，上下文还包含我们的 `BookInstance`，我们将在模板中使用它，来提供有关我们正在续借的书本信息。

但是，如果这是一个`POST` 请求，那么我们创建表单对象，并使用请求中的数据填充它。此过程称为“绑定”，并且允许我们验证表单。然后我们检查表单是否有效，它运行所有字段上的所有验证代码 - 包括用于检查我们的日期字段，实际上是有效日期的通用代码，以及用于检查日期的特定表单的`clean_renewal_date()`函数在合适的范围内。

```python
    book_inst=get_object_or_404(BookInstance, pk = pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_inst.due_back = form.cleaned_data['renewal_date']
            book_inst.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed') )

    return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})
```

如果表单无效，我们再次调用`render()` ，但这次在上下文中传递的表单值将包含错误消息。

如果表单有效，那么我们可以开始使用数据，通过 `form.cleaned_data`属性访问它（例如 `data = form.cleaned_data['renewal_date']`）。这里我们只将数据保存到关联的`BookInstance` 对象的`due_back` 值中。

> **警告：** 虽然您也可以通过请求直接访问表单数据（例如`request.POST['renewal_date']` 或 `request.GET['renewal_date']`（如果使用 GET 请求），但不建议这样做。清理后的数据是无害的、验证过的、并转换为 Python 友好类型。

视图的表单处理部分的最后一步，是重定向到另一个页面，通常是“成功”页面。在这种情况下，我们使用 `HttpResponseRedirect` 和 `reverse()` ，重定向到名为'`all-borrowed`'的视图（这是在 [Django 教程第 8 部分中创建的“挑战”：用户身份验证和权限](/zh-CN/docs/learn/Server-side/Django/Authentication#Challenge_yourself)）。如果您没有创建该页面，请考虑重定向到 URL'/'处的主页。

这就是表单处理本身所需的一切，但我们仍然需要将视图，限制为图书馆员可以访问。我们应该在 `BookInstance` （“`can_renew`”）中创建一个新的权限，但为了简单起见，我们只需使用`@permission_required`函数装饰器，和我们现有的 `can_mark_returned` 权限。

因此，最终视图如下所示。请将其复制到 **locallibrary/catalog/views.py** 的底部。

```python
from django.contrib.auth.decorators import permission_required

from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse
import datetime

from .forms import RenewBookForm

@permission_required('catalog.can_mark_returned')
def renew_book_librarian(request, pk):
    """
    View function for renewing a specific BookInstance by librarian
    """
    book_inst=get_object_or_404(BookInstance, pk = pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_inst.due_back = form.cleaned_data['renewal_date']
            book_inst.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed') )

    # If this is a GET (or any other method) create the default form.
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date,})

    return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})
```

### 模板

创建视图中引用的模板（**/catalog/templates/catalog/book\_renew\_librarian.html**），并将下面的代码，复制到其中：

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Renew: \{{bookinst.book.title}}</h1>
  <p>Borrower: \{{bookinst.borrower}}</p>
  <p{% if bookinst.is_overdue %} class="text-danger"{% endif %}>Due date: \{{bookinst.due_back}}</p>

  <form action="" method="post">
    {% csrf_token %}
    <table>
      \{{ form }}
    </table>
    <input type="submit" value="Submit" />
  </form>
{% endblock %}
```

这里大部分内容，和以前的教程都是完全类似的。我们扩展基本模板，然后重新定义内容块。我们能够引用 `\{{bookinst}}`（及其变量），因为它被传递到 `render()`函数中的上下文对象中，我们使用这些来列出书名，借阅者和原始截止日期。

表单代码相对简单。首先，我们声明表单标签，指定表单的提交位置（`action`）和提交数据的方法（在本例中为“HTTP POST”） - 如果您回想一下页面顶部的 HTML 表单概述，如图所示的空`action` ，意味着表单数据将被发布回页面的当前 URL（这是我们想要的！）。在标签内部，我们定义了`submit` 提交输入，用户可以按这个输入来提交数据。在表单标签内添加的`{% csrf_token %}` ，是 Django 跨站点伪造保护的一部分。

> **备注：** 将`{% csrf_token %}` 添加到您创建的每个使用 `POST` 提交数据的 Django 模板中。这将减少恶意用户劫持表单的可能性。

剩下的就是 `\{{form}}`模板变量，我们将其传递给上下文字典中的模板。也许不出所料，当如图所示使用时，它提供了所有表单字段的默认呈现，包括它们的标签、小部件、和帮助文本 - 呈现如下所示：

```html
<tr>
  <th><label for="id_renewal_date">Renewal date:</label></th>
  <td>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2016-11-08"
      required />
    <br />
    <span class="helptext"
      >Enter date between now and 4 weeks (default 3 weeks).</span
    >
  </td>
</tr>
```

> **备注：** 它可能并不明显，因为我们只有一个字段，但默认情况下，每个字段都在其自己的表格行中定义（这就是变量在上面的`table` 表格标记内部的原因）。如果您引用模板变量`\{{ form.as_table }}`，会提供相同的渲染。

如果您输入无效日期，您还会获得页面中呈现的错误列表（下面以**粗体**显示）。

```html
<tr>
  <th><label for="id_renewal_date">Renewal date:</label></th>
  <td>
    <ul class="errorlist">
      <li>Invalid date - renewal in past</li>
    </ul>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2015-11-08"
      required />
    <br />
    <span class="helptext"
      >Enter date between now and 4 weeks (default 3 weeks).</span
    >
  </td>
</tr>
```

#### 使用表单模板变量的其他方法

如上所示使用`\{{form}}`，每个字段都呈现为表格行。您还可以将每个字段呈现为列表项（使用`\{{form.as_ul}}` ）或作为段落（使用`\{{form.as_p}}`）。

更酷的是，您可以通过使用点表示法，索引其属性，来完全控制表单每个部分的呈现。例如，我们可以为`renewal_date` 字段访问许多单独的项目：

- `\{{form.renewal_date}}`: 整个领域。
- `\{{form.renewal_date.errors}}`: 错误列表。
- `\{{form.renewal_date.id_for_label}}`: 标签的 id。
- `\{{form.renewal_date.help_text}}`: 字段帮助文本。
- 其他等等！

有关如何在模板中，手动呈现表单，并动态循环模板字段的更多示例，请参阅[使用表单>手动呈现字段](https://docs.djangoproject.com/zh-hans/2.0/topics/forms/#rendering-fields-manually)（Django 文档）。

### 测试页面

如果您接受了[Django 教程第 8 部分中的“挑战”：用户身份验证和权限](/zh-CN/docs/learn/Server-side/Django/Authentication#Challenge_yourself)，您将获得图书馆中借出的所有书本的列表，这只有图书馆工作人员才能看到。我们可以使用下面的模板代码，为每个项目旁边的续借页面，添加链接。

```django
{% if perms.catalog.can_mark_returned %}-
  <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>
{% endif %}
```

> **备注：** 请记住，您的测试登录需要具有“`catalog.can_mark_returned`”权限，才能访问续借书本页面（可能使用您的超级用户帐户）。

您也可以手动构建这样的测试 URL - `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` （可以通过导航到图书馆中的书本详细信息页面，获取有效的 bookinstance id，并复制`id` 字段）。

### 它看起来是什么样子？

如果您成功，默认表单将如下所示：

![](forms_example_renew_default.png)

输入无效值的表单将如下所示：

![](forms_example_renew_invalid.png)

所有包含续借链接的图书清单如下所示：

![](forms_example_renew_allbooks.png)

## 模型表单

使用上述方法创建`Form` 类非常灵活，允许您创建任何类型的表单页面，并将其与任何单一模型、或多个模型相关联。

但是，如果您只需要一个表单，来映射单个模型的字段，那么您的模型，将已经定义了表单中所需的大部分信息：字段、标签、帮助文本等。而不是在表单中重新创建模型定义，使用 [ModelForm](https://docs.djangoproject.com/en/2.0/topics/forms/modelforms/) 帮助程序类从模型创建表单更容易。然后，可以在视图中使用此`ModelForm` ，其方式与普通`Form`完全相同。

包含与原始`RenewBookForm` 相同的字段的基本 `ModelForm` 如下所示。创建表单所需要做的，就是添加带有相关模型（`BookInstance`）的`class Meta`、和要包含在表单中的模型字段列表（您可以使用 `fields = '__all__'`，以包含所有字段，或者您可以使用 `exclude` （而不是字段），指定不包含在模型中的字段）。

```python
from django.forms import ModelForm
from .models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back',]
```

> **备注：** 这可能看起来不像使用`Form` 那么简单（在这种情况下不是这样，因为我们只有一个字段）。但是，如果你有很多字段，它可以显着减少代码量！

其余信息来自模型字段的定义（例如标签、小部件、帮助文本、错误消息）。如果这些不太正确，那么我们可以在 `Meta`类中覆盖它们，指定包含要更改的字段、及其新值的字典。例如，在这种形式中，我们可能需要“更新日期”_Renewal date_ 字段的标签（而不是基于字段名称的默认值：截止日期 _Due date_），并且我们还希望我们的帮助文本，特定于此用例。下面的`Meta` 显示了如何覆盖这些字段，如果默认值不够，您可以类似地方式设置`widgets` 窗口小部件和`error_messages` 。

```python
class Meta:
    model = BookInstance
    fields = ['due_back',]
    labels = { 'due_back': _('Renewal date'), }
    help_texts = { 'due_back': _('Enter a date between now and 4 weeks (default 3).'), }
```

要添加验证，您可以使用与普通表单相同的方法 - 定义名为 `clean_field_name()`的函数，并为无效值引发`ValidationError` 异常。与我们原始形式的唯一区别，是模型字段名为`due_back` 而不是“`renewal_date`”。

```python
from django.forms import ModelForm
from .models import BookInstance

class RenewBookModelForm(ModelForm):
    def clean_due_back(self):
       data = self.cleaned_data['due_back']

       #Check date is not in past.
       if data < datetime.date.today():
           raise ValidationError(_('Invalid date - renewal in past'))

       #Check date is in range librarian allowed to change (+4 weeks)
       if data > datetime.date.today() + datetime.timedelta(weeks=4):
           raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

       # Remember to always return the cleaned data.
       return data

    class Meta:
        model = BookInstance
        fields = ['due_back',]
        labels = { 'due_back': _('Renewal date'), }
        help_texts = { 'due_back': _('Enter a date between now and 4 weeks (default 3).'), }
```

下面的 `RenewBookModelForm` 类现在在功能上等同于我们原来的 `RenewBookForm`。您可以在当前使用`RenewBookForm` 的任何地方导入和使用它。

## 通用编辑视图

我们在上面的函数视图示例中，使用的表单处理算法，表示表单编辑视图中非常常见的模式。Django 通过创建基于模型创建、编辑和删除视图的[通用编辑视图](https://docs.djangoproject.com/zh-hans/2.0/ref/class-based-views/generic-editing/)，为您抽象出大部分“样板”。这些不仅处理“视图”行为，而且它们会自动从模型中为您创建表单类（`ModelForm`）。

> **备注：** 除了这里描述的编辑视图之外，还有一个 [FormView](https://docs.djangoproject.com/zh-hans/2.0/ref/class-based-views/generic-editing/#formview)类，它位于我们的函数视图，和其他通用视图之间的“灵活性”与“编码工作”之间。使用 `FormView` ，您仍然需要创建表单，但不必实现所有标准表单处理模式。相反，您只需提供一个函数的实现，一旦知道提交有效，就会调用该函数。

在本节中，我们将使用通用编辑视图，来创建页面，以添加从我们的库中创建、编辑和删除`Author` 作者记录的功能 - 有效地提供管理站点一部分的基本重新实现（这可能很有用，如果您需要比管理站点能提供的、更加灵活的管理功能）。

### 视图

打开视图文件（**locallibrary/catalog/views.py**），并将以下代码块，附加到其底部：

```python
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Author

class AuthorCreate(CreateView):
    model = Author
    fields = '__all__'
    initial={'date_of_death':'05/01/2018',}

class AuthorUpdate(UpdateView):
    model = Author
    fields = ['first_name','last_name','date_of_birth','date_of_death']

class AuthorDelete(DeleteView):
    model = Author
    success_url = reverse_lazy('authors')
```

如您所见，要创建视图，您需要从`CreateView`, `UpdateView`, 和 `DeleteView`（分别）派生，然后定义关联的模型。

对于“创建”和“更新”的情况，您还需要指定要在表单中显示的字段（使用与`ModelForm`相同的语法）。在这种情况下，我们将说明两者的语法，如何显示“所有”字段，以及如何单独列出它们。您还可以使用 field_name / value 对的字典，为每个字段指定初始值（此处我们为了演示目的，而任意设置死亡日期 - 您可能希望删除它！）。默认情况下，这些视图会在成功时，重定向到显示新创建/编辑的模型项的页面，在我们的示例中，这将是我们在上一个教程中，创建的作者详细信息视图。您可以通过显式声明参数`success_url` ，指定备用重定向位置（与`AuthorDelete` 类一样）。

`AuthorDelete` 类不需要显示任何字段，因此不需要指定这些字段。但是你需要指定`success_url`，因为 Django 没有明显的默认值。在这种情况下，我们使用[`reverse_lazy()`](https://docs.djangoproject.com/en/2.0/ref/urlresolvers/#reverse-lazy)函数，在删除作者后，重定向到我们的作者列表 - `reverse_lazy()`是一个延迟执行的`reverse()`版本，在这里使用，是因为我们提供了一个基于类的 URL 查看属性。

### 模板

“创建”和“更新”视图默认使用相同的模板，它将以您的模型命名：**model\_name\_form.html**（您可以使用视图中的`template_name_suffix` 字段，将后缀更改为 **form** 以外的其他内容，例如，`template_name_suffix = '_other_suffix'`）

创建模板文件 **locallibrary/catalog/templates/catalog/author_form.html**，并复制到下面的文本中。

```django
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">
    {% csrf_token %}
    <table>
    \{{ form.as_table }}
    </table>
    <input type="submit" value="Submit" />
  </form>
{% endblock %}
```

这与我们之前的表单类似，并使用表单呈现字段。另请注意我们如何声明`{% csrf_token %}`，以确保我们的表单能够抵抗 CSRF 攻击。

“删除”视图需要查找以 **model\_name\_confirm\_delete.html** 格式命名的模板（同样，您可以在视图中，使用`template_name_suffix` 更改后缀）。创建模板文件 **locallibrary/catalog/templates/catalog/author\_confirm\_delete.html** ，并复制到下面的文本中。

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Delete Author</h1>

  <p>Are you sure you want to delete the author: \{{ author }}?</p>

  <form action="" method="POST">
    {% csrf_token %}
    <input type="submit" action="" value="Yes, delete." />
  </form>
{% endblock %}
```

### URL 配置

打开 URL 配置文件（**locallibrary/catalog/urls.py**），并将以下配置，添加到文件的底部：

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author_create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author_update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author_delete'),
]
```

这里没有什么特别的新东西！您可以看到视图是类，因此必须通过`.as_view()`调用，并且您应该能够识别每种情况下的 URL 模式。我们必须使用 `pk` 作为捕获的主键值的名称，因为这是视图类所期望的参数名称。

作者的创建，更新和删除页面，现在已准备好进行测试（在这种情况下，我们不会将它们连接到站点侧栏，尽管如果您愿意，也可以这样做）。

> **备注：** 敏锐的用户会注意到，我们没有采取任何措施，来防止未经授权的用户访问这些页面！我们将其作为练习留给您（提示：您可以使用`PermissionRequiredMixin` ，并创建新权限，或重用我们的`can_mark_returned`权限）。

### 测试页面

首先，使用具有访问作者编辑页面权限的帐户（由您决定），登录该站点。

然后导航到作者创建页面： <http://127.0.0.1:8000/catalog/author/create/>，它应该如下面的截图。

![Form Example: Create Author](forms_example_create_author.png)

输入字段的值，然后按“提交” **Submit** ，保存作者记录。现在，您应该进入新作者的详细视图，其 URL 为 `http://127.0.0.1:8000/catalog/author/10`。

您可以通过将 /update/ ，附加到详细视图 URL 的末尾，来测试编辑记录（例如 `http://127.0.0.1:8000/catalog/author/10/update/`） - 我们不显示截图，因为它看起来就像“创建”页面！

最后，我们可以删除页面，方法是将删除，附加到作者详细信息视图 URL 的末尾（例如 `http://127.0.0.1:8000/catalog/author/10/delete/`）。Django 应该显示如下所示的删除页面。按 "是，删除" **(Yes, delete)**。删除记录，并将其带到所有作者的列表中。

![](forms_example_delete_author.png)

## 挑战自己

创建一些表单，来创建、编辑和删除书本记录`Book`。您可以使用与作者`Authors`完全相同的结构。如果您的 **book_form.html** 模板只是 **author_form.html** 模板的复制重命名版本，则新的“创建图书”页面，将如下所示：

![](forms_example_create_book.png)

## 总结

创建和处理表单可能是一个复杂的过程！Django 通过提供声明、呈现和验证表单的编程机制，使其变得更加容易。此外，Django 提供了通用的表单编辑视图，几乎可以完成所有工作，以定义可以创建，编辑和删除与单个模型实例关联的记录的页面。

表单可以完成更多工作（请参阅下面的“请参阅”列表），但您现在应该了解，如何将基本表单和表单处理代码，添加到您自己的网站。

## 也可以参考

- [Working with forms](https://docs.djangoproject.com/en/2.0/topics/forms/) (Django docs)
- [Writing your first Django app, part 4 > Writing a simple form](https://docs.djangoproject.com/en/2.0/intro/tutorial04/#write-a-simple-form) (Django docs)
- [The Forms API](https://docs.djangoproject.com/en/2.0/ref/forms/api/) (Django docs)
- [Form fields](https://docs.djangoproject.com/en/2.0/ref/forms/fields/) (Django docs)
- [Form and field validation](https://docs.djangoproject.com/en/2.0/ref/forms/validation/) (Django docs)
- [Form handling with class-based views](https://docs.djangoproject.com/en/2.0/topics/class-based-views/generic-editing/) (Django docs)
- [Creating forms from models](https://docs.djangoproject.com/en/2.0/topics/forms/modelforms/) (Django docs)
- [Generic editing views](https://docs.djangoproject.com/en/2.0/ref/class-based-views/generic-editing/) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}

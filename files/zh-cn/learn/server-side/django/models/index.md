---
title: "Django Tutorial Part 3: 使用模型"
slug: Learn/Server-side/Django/Models
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}这篇文章展示了如何为我们的 LocalLibray（本地图书馆）网站定义 models。它解释了一个模型是什么，它是怎么被声明的，和其中的一些主要域类型。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <a href="/zh-CN/docs/Learn/Server-side/Django/skeleton_website"
          >Django Tutorial Part 2: Creating a skeleton website</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>能够设计并创建你自己的数据模型，并为其合适地选择域。</td>
    </tr>
  </tbody>
</table>

## 概要

Django 网络应用通过作为模型被参照的 Python 对象访问并管理数据。模型定义了储存数据的结构，包括域类型和可能的最大值，默认值，可选择的列表，帮助理解文档的文本，表格内的标签文本，等等。模型的定义是独立于数据库的——你可以为你自己的项目设置选择一种。一旦你已经选择了你想用的数据库，你不需要直接谈论它——你只是写出你的模型结构和其他代码，然后 Django 会为你处理所有繁琐的和数据库打交道的工作。

这个教程展示了如何定义并访问 [LocalLibrary website](/zh-CN/docs/Learn/Server-side/Django/Tutorial_local_library_website) 的模型。

## 设计 LocalLibaray 模型

在你继续开始为模型写代码前，用几分钟考虑一下我们需要储存什么数据和不同对象之间的关系是很有价值的。

我们知道我们需要存储书籍（书名，简介，作者，写作语言，类别，ISBN 编号）和我们可能有的可获取的副本数量（全局独立 ID，可获取状态，等等）。我们可能需要存储更多的关于作者的信息而不仅仅是她们的名字。我们希望能够将信息根据书名，作者，写作语言和类别分类。

当设计你的模型时，给予每个“对象”（一组关联信息）独立的模型似乎挺说得通的。当前情况下，最为明显的对象就是书籍和作者。

你可能在想相比硬编码所有的选项到网站上，用模型来呈现选择列表（例如包括了许多选项的下拉菜单）——我们推荐这样，尤其是当选项未知或者可能改变时。显然，目前模型的候选者包括了书的流派（例如科幻小说，法国诗歌，等等）和语言（英语，法语，日语）。

一旦我们决定了模型和域，我们需要考虑他们的关系。Django 允许你定义一对一 (`OneToOneField`)，一对多 (`ForeignKey`) 和多对多 (`ManyToManyField`) 的关系。（译者注：此处我们以关系型数据库为基准，如果采用 NoSQL，如 MangoDB 则无法如此考虑）

思考着以上内容，以下的 UML 关系表显示了我们在该例子里定义的模型。如上所述哦，我们已经为书籍（大概的细节），书籍实例（物理副本是否可获取状态）和作者创建了模型。我们也决定了为流派而创建的模型，所以变量值可以通过管理界面获取。此外，我们决定了不创建 `BookInstance:status`的模型——我们已经硬编码了这个值 (`LOAN_STATUS`) 因为我们不期望这些被改变。通过每个方框你可以看到模型名字，值域名和类型，还有方法和返回的类型。

这个图表也显示了模型之间的关系，including their _multiplicities_. 这些在图表里每个模型边上的数字（最大和最小）显示了他们的关系。例如，链接 Book 和 Genre 两个盒子的线表示它们是关联的。靠近 Book 模型的数字显示一本书必须有一个或多个 Genre（要多少有多少），然而另一端靠近 Genre 的数字显示了它可以有零或无数本相关的书籍。

![LocalLibrary Model UML - v3](local_library_model_uml_v0_1.png)

> **备注：** 下一部分提供了基本的关于模型如何被定义和使用的解释。边阅读，边考虑以下我们是如何根据以上的图标构建数据库内的模型的。

## Model primer

This section provides a brief overview of how a model is defined and some of the more important fields and field arguments.

### Model definition

Models are usually defined in an application's **models.py** file. They are implemented as subclasses of `django.db.models.Model`, and can include fields, methods and metadata. The code fragment below shows a "typical" model, named `MyModelName`:

```python
from django.db import models

class MyModelName(models.Model):
    """
    A typical class defining a model, derived from the Model class.
    """

    # Fields
    my_field_name = models.CharField(max_length=20, help_text="Enter field documentation")
    ...

    # Metadata
    class Meta:
        ordering = ["-my_field_name"]

    # Methods
    def get_absolute_url(self):
            """
            Returns the url to access a particular instance of MyModelName.
            """
            return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """
        String for representing the MyModelName object (in Admin site etc.)
        """
        return self.field_name
```

In the below sections we'll explore each of the features inside the model in detail:

#### 域

一个模型可以有任意数量的域，或任意的类型——每个用一行呈现我们想存储进数据库的数据。让我们看一下以下的例子吧 o(≧v≦)o：

```python
my_field_name = models.CharField(max_length=20, help_text="Enter field documentation")
```

上面的例子有一个单域，叫做 my_field_name，类型是 models.CharField——这意味着此域会包含着由字母组成的字符串们。域类型被特殊的 class 赋值，这确认了记录的类型是用来存入数据库的，以及当用户从 HTML 表格里提交值后，我们用来验证提交的值是否有效的条件。

字段类型还可以获取参数，进一步指定字段如何存放或如何被使用。在这里的情况下，我们给了字段两个参数：

- `max_length=20` — 表示此字段中值的最大长度为 20 个字符的状态。
- `help_text="Enter field documentation"` — 提供一个帮助用户的文本标签，让用户知道当前透过 HTML 表单输入时要提供什么值。

字段名称用于在视图和模版中引用它。字段还有一个标签，它被指定一个参数（`verbose_name`），或者通过大写字段的变量名的第一个字母，并用空格替换下划线（例如`my_field_name`的默认标签为 My field name）。

如果模型在表单中呈现（例如：在管理站点中），则声明该字段的顺序，将影响其默认顺序，但可能会被覆盖。

##### Common field arguments

当声明很多／大多数不同的字段类型时，可以使用以下常用参数：

- [help_text](https://docs.djangoproject.com/en/1.10/ref/models/fields/#help-text) :提供 HTML 表单文本标签 (eg i 在管理站点中),如上所述。
- [verbose_name](https://docs.djangoproject.com/en/1.10/ref/models/fields/#verbose-name) :字段标签中的可读性名称，如果没有被指定，Django 将从字段名称推断默认的详细名称。
- [default](https://docs.djangoproject.com/en/1.10/ref/models/fields/#default) :该字段的默认值。这可以是值或可呼叫物件 (callable object)，在这种情况下，每次创建新纪录时都将呼叫该物件。
- [null](https://docs.djangoproject.com/en/1.10/ref/models/fields/#null)：如为`True`，即允许 Django 于资料库该栏位写入`NULL`（但栏位型态如为`CharField`则会写入空字串）。预设值是`False`。
- [blank](https://docs.djangoproject.com/en/1.10/ref/models/fields/#blank) :如为 `True`，表单中的字段被允许为空白。默认是`False`，这意味着 Django 的表单验证将强制你输入一个值。这通常搭配 `NULL=True` 使用，因为如果要允许空值，你还希望数据库能够适当地表示它们。
- [choices](https://docs.djangoproject.com/en/1.10/ref/models/fields/#choices) :这是给此字段的一组选项。如果提供这一项，预设对应的表单部件是「该组选项的列表」，而不是原先的标准文本字段。
- [primary_key](https://docs.djangoproject.com/en/1.10/ref/models/fields/#primary-key) :如果是 True，将当前字段设置为模型的主键（主键是被指定用来唯一辨识所有不同表记录的特殊数据库栏位 (column)）。如果没有指定字段作为主键，则 Django 将自动为此添加一个字段。

还有许多其他选项—你可以在[这里看到完整的字段选项](https://docs.djangoproject.com/en/1.10/ref/models/fields/#field-options)。

##### Common field types

以下列表描述了一些更常用的字段类型。

- [CharField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#django.db.models.CharField) 是用来定义短到中等长度的字段字符串。你必须指定`max_length`要存储的数据。
- [TextField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#django.db.models.TextField) 用于大型任意长度的字符串。你可以`max_length`为该字段指定一个字段，但仅当该字段以表单显示时才会使用（不会在数据库级别强制执行）。
- [IntegerField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#django.db.models.IntegerField) 是一个用于存储整数（整数）值的字段，用于在表单中验证输入的值为整数。
- [DateField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#datefield) 和[DateTimeField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#datetimefield) 用于存储／表示日期和日期／时间信息（分别是`Python.datetime.date` 和 `datetime.datetime` 对象）。这些字段可以另外表明（互斥）参数 `auto_now=Ture`（在每次保存模型时将该字段设置为当前日期），`auto_now_add`（仅设置模型首次创建时的日期）和 `default`（设置默认日期，可以被用户覆盖）。
- [EmailField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#emailfield) 用于存储和验证电子邮件地址。
- [FileField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#filefield) 和[ImageField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#imagefield) 分别用于上传文件和图像（`ImageField` 只需添加上传的文件是图像的附加验证）。这些参数用于定义上传文件的存储方式和位置。
- [AutoField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#autofield) 是一种 **IntegerField** 自动递增的特殊类型。如果你没有明确指定一个主键，则此类型的主键将自动添加到模型中。
- [ForeignKey](https://docs.djangoproject.com/en/1.10/ref/models/fields/#foreignkey) 用于指定与另一个数据库模型的一对多关系（例如，汽车有一个制造商，但制造商可以制作许多汽车）。关系的“一”侧是包含密钥的模型。
- [ManyToManyField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#manytomanyfield) 用于指定[多对多](https://docs.djangoproject.com/en/1.10/ref/models/fields/#manytomanyfield)关系（例如，一本书可以有几种类型，每种类型可以包含几本书）。在我们的图书馆应用程序中，我们将非常类似地使用它们 ForeignKeys，但是可以用更复杂的方式来描述组之间的关系。这些具有参数 `on_delete` 来定义关联记录被删除时会发生什么（例如，值 `models.SET_NULL` 将简单地设置为值 NULL）。

还有许多其他类型的字段，包括不同类型数字的字段（大整数，小整数，浮点数），布林值，URLs，唯一 ids 和其他“时间相关”的信息（持续时间，时间等）。你可以查阅[完整列表](https://docs.djangoproject.com/en/1.10/ref/models/fields/#field-types) .

#### 元数据 (Metadata)

你可以通过宣告 class Meta 来宣告模型级别的元数据，如图所示：

```python
class Meta:
    ordering = ['-my_field_name']
```

此元数据最有用的功能之一是控制在查询模型类型时返回之记录的默认排序。你可以透过在`ordering`属性的字段名称列表中指定匹配顺序来执行此操作，如上所示。排序将依赖字段的类型（字符串字段按字母顺序排序，而日期字段按时间顺序排序）。如上所示，你可以使用减号（-）对字段名称进行前缀，以反转排序顺序。

例如，如果我们选择依照此预设来排列书单：

```python
ordering = ['title', '-pubdate']
```

书单通过标题依据--字母排序--排列，从 A 到 Z，然后再依每个标题的出版日期，从最新到最旧排列。

另一个常见的属性是 `verbose_name`,一个 `verbose_name`说明单数和复数形式的类别。

```python
verbose_name = 'BetterName'
```

其他有用的属性允许你为模型创建和应用新的“访问权限”（预设权限会被自动套用），允许基于其他的字段排序，或声明该类是”抽象的“（你无法创建的记录基类，并将由其他型号派生）。

许多其他元数据选项控制模型中必须使用哪些数据库以及数据的存储方式。（如果你需要模型映射一个现有数据库，这会有用）。

完整有用的元数据选项在这里[Model metadata options](https://docs.djangoproject.com/en/1.10/ref/models/options/) (Django docs).

#### 方法

一个模型也可以有方法。

最起码，在每个模型中，你应该定义标准的 Python 类方法 `__str__()`，**来为每个物件返回一个人类可读的字符串**。此字符用于表示管理站点的各个记录（以及你需要引用模型实例的任何其他位置）。通常这将返回模型中的标题或名称字段。

```python
def __str__(self):
    return self.field_name
```

Django 方法中另一个常用方法是 `get_absolute_url()` ，这函数返回一个在网站上显示个人模型记录的 URL（如果你定义了该方法，那么 Django 将自动在“管理站点”中添加“在站点中查看“按钮在模型的记录编辑栏）。`get_absolute_url()`的典型示例如下：

```python
def get_absolute_url(self):
    """Returns the url to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

**注意** :假设你将使用 URL `/myapplication/mymodelname/2` 来显示模型的单个记录（其中“2”是 id 特定记录），则需要创建一个 URL 映射器来将响应和 id 传递给“模型详细视图” （这将做出显示记录所需的工作）。以上示例中，`reverse()`函数可以“反转”你的 url 映射器（在上诉命名为“model-detail-view”的案例中，以创建正确格式的 URL。

当然要做这个工作，你还是要写 URL 映射，视图和模版！

你可以定义一些你喜欢的其他方法，并从你的代码或模版调用它们（只要它们不带任何参数）。

### Model management

一旦你定义了模型类，你可以使用它们来创建，更新或删除记录，并运行查询获取所有记录或特定的记录子集。当我们定义我们的视图，我们将展示给你在这个教程如何去做。

#### 创建和修改记录

要创建一个记录，你可以定义一个模型实例，然后呼叫 `save()`。

```python
# Create a new record using the model's constructor.
a_record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
a_record.save()
```

> **备注：** 如果没有任何的栏位被宣告为`主鍵`，这笔新的纪录会被自动的赋予一个主键并将主键栏命名为`id`。上例的那笔资料被储存后，试着查询这笔纪录会看到它被自动赋予 1 的编号。

你可以透过「点 (dot) 的语法」取得或变更这笔新资料的栏位 (字段)。你需要呼叫`save()`将变更过的资料存进资料库：

```python
# Access model field values using Python attributes.
print(a_record.id) #should return 1 for the first record.
print(a_record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
a_record.my_field_name="New Instance Name"
a_record.save()
```

#### 搜寻纪录

你可以使用模型的 `objects` 属性 (由 base class 提供) 搜寻符合某个条件的纪录

> **备注：** 要用"抽象的"模型还有栏位说明怎么搜寻纪录可能会有点令人困惑。我们会以一个 Book 模型，其包含`title`与`genre`字段，而 genre 也是一个仅有`name`一个字段的模型。

我们可以取得一个模型的所有纪录，为一个 `QuerySet` 使用`objects.all()`。`QuerySet` 是一个可迭代的物件，表示他含有多个物件，而我们可以藉由迭代/回圈取得每个物件。

```python
all_books = Book.objects.all()
```

Django 的 `filter()`方法让我们可以透过符合特定文字或数值的字段筛选回传的`QuerySet`。例如筛选书名里有"wild"的书并且计算总数，如下面所示。

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = Book.objects.filter(title__contains='wild').count()
```

要比对的字段与比对方法都要被定义在筛选的参数名称里，并且使用这个格式：`比對字段__比對方法` (请注意上方范例中的 `title` 与 `contains` 中间隔了两个底线唷)。在上面我们使用大小写区分的方式比对`title`。还有很多比对方式可以使用： `icontains`(不区分大小写), `iexact`(不大小写区分且完全符合), `exact`(区分大小写但完全符合) 还有 `in`, `gt`(大于), `startswith`,之类的。[全部的用法在这里。](https://docs.djangoproject.com/en/2.0/ref/models/querysets/#field-lookups)

有时候你会须要透过某个一对多的字段来筛选 (例如一个 `外鍵`)。这样的状况下，你可以使用两个底线来指定相关模型的字段。例如透过某个特定的 genre 名称筛选书籍，如下所示：

```python
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')  # Will match on: Fiction, Science fiction, non-fiction etc.
```

> **备注：** 你可以用下划线来表示不同关系 (`ForeignKey`/`ManyToManyField`) .例如，一本书有不同的类型，用“cover“关系可能会帮助起一个参数名字 `type__cover__name__exact='hard'.`

还有很多是你可以用索引 (queries) 来做的，包含从相关的模型做向后查询 (backwards searches)、连锁过滤器 (chaining filters)、回传「值的小集合」等。更多资讯可以到 [Making queries](https://docs.djangoproject.com/en/2.0/topics/db/queries/) (Django Docs) 查询。

## Defining the LocalLibrary Models

In this section we will start defining the models for the library. Open _models.py (in /locallibrary/catalog/)_. The boilerplate at the top of the page imports the _models_ module, which contains the model base class `models.Model` that our models will inherit from.

```python
from django.db import models

# Create your models here.
```

### Genre model

Copy the Genre model code shown below and paste it into the bottom of your `models.py` file. This model is used to store information about the book category — for example whether it is fiction or non-fiction, romance or military history, etc. As mentioned above, we've created the Genre as a model rather than as free text or a selection list so that the possible values can be managed through the database rather than being hard coded.

```python
class Genre(models.Model):
    """
    Model representing a book genre (e.g. Science Fiction, Non Fiction).
    """
    name = models.CharField(max_length=200, help_text="Enter a book genre (e.g. Science Fiction, French Poetry etc.)")

    def __str__(self):
        """
        String for representing the Model object (in Admin site etc.)
        """
        return self.name
```

The model has a single `CharField` field (`name`), which is used to describe the genre (this is limited to 200 characters and has some `help_text`. At the end of the model we declare a `__str__()` method, which simply returns the name of the genre defined by a particular record. No verbose name has been defined, so the field will be called `Name` in forms.

### Book model

Copy the Book model below and again paste it into the bottom of your file. The book model represents all information about an available book in a general sense, but not a particular physical "instance" or "copy" available for loan. The model uses a `CharField` to represent the book's `title` and `isbn` (note how the `isbn` specifies its label as "ISBN" using the first unnamed parameter because the default label would otherwise be "Isbn"). The model uses `TextField` for the `summary`, because this text may need to be quite long.

```python
from django.urls import reverse #Used to generate URLs by reversing the URL patterns

class Book(models.Model):
    """
    Model representing a book (but not a specific copy of a book).
    """
    title = models.CharField(max_length=200)
    author = models.ForeignKey('Author', on_delete=models.SET_NULL, null=True)
    # Foreign Key used because book can only have one author, but authors can have multiple books
    # Author as a string rather than object because it hasn't been declared yet in the file.
    summary = models.TextField(max_length=1000, help_text="Enter a brief description of the book")
    isbn = models.CharField('ISBN',max_length=13, help_text='13 Character <a href="https://www.isbn-international.org/content/what-isbn">ISBN number</a>')
    genre = models.ManyToManyField(Genre, help_text="Select a genre for this book")
    # ManyToManyField used because genre can contain many books. Books can cover many genres.
    # Genre class has already been defined so we can specify the object above.

    def __str__(self):
        """
        String for representing the Model object.
        """
        return self.title


    def get_absolute_url(self):
        """
        Returns the url to access a particular book instance.
        """
        return reverse('book-detail', args=[str(self.id)])
```

The genre is a `ManyToManyField`, so that a book can have multiple genres and a genre can have many books. The author is declared as `ForeignKey`, so each book will only have one author, but an author may have many books (in practice a book might have multiple authors, but not in this implementation!)

In both field types the related model class is declared as the first unnamed parameter using either the model class or a string containing the name of the related model. You must use the name of the model as a string if the associated class has not yet been defined in this file before it is referenced! The other parameters of interest in the `author` field are `null=True`, which allows the database to store a `Null` value if no author is selected, and `on_delete=models.SET_NULL`, which will set the value of the author to `Null` if the associated author record is deleted.

The model also defines `__str__()` , using the book's `title` field to represent a `Book` record. The final method, `get_absolute_url()` returns a URL that can be used to access a detail record for this model (for this to work we will have to define a URL mapping that has the name `book-detail`, and define an associated view and template).

### BookInstance model

Next, copy the `BookInstance` model (shown below) under the other models. The `BookInstance` represents a specific copy of a book that someone might borrow, and includes information about whether the copy is available or on what date it is expected back, "imprint" or version details, and a unique id for the book in the library.

Some of the fields and methods will now be familiar. The model uses

- `ForeignKey` to identify the associated Book (each book can have many copies, but a copy can only have one `Book`).
- `CharField` to represent the imprint (specific release) of the book.

```python
import uuid # Required for unique book instances

class BookInstance(models.Model):
    """
    Model representing a specific copy of a book (i.e. that can be borrowed from the library).
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text="Unique ID for this particular book across whole library")
    book = models.ForeignKey('Book', on_delete=models.SET_NULL, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    LOAN_STATUS = (
        ('m', 'Maintenance'),
        ('o', 'On loan'),
        ('a', 'Available'),
        ('r', 'Reserved'),
    )

    status = models.CharField(max_length=1, choices=LOAN_STATUS, blank=True, default='m', help_text='Book availability')

    class Meta:
        ordering = ["due_back"]


    def __str__(self):
        """
        String for representing the Model object
        """
        return '%s (%s)' % (self.id,self.book.title)
```

We additionally declare a few new types of field:

- `UUIDField` is used for the `id` field to set it as the `primary_key` for this model. This type of field allocates a globally unique value for each instance (one for every book you can find in the library).
- `DateField` is used for the `due_back` date (at which the book is expected to come available after being borrowed or in maintenance). This value can be `blank` or `null` (needed for when the book is available). The model metadata (`Class Meta`) uses this field to order records when they are returned in a query.
- `status` is a `CharField` that defines a choice/selection list. As you can see, we define a tuple containing tuples of key-value pairs and pass it to the choices argument. The value in a key/value pair is a display value that a user can select, while the keys are the values that are actually saved if the option is selected. We've also set a default value of 'm' (maintenance) as books will initially be created unavailable before they are stocked on the shelves.

The model `__str__()` represents the `BookInstance` object using a combination of its unique id and the associated `Book`'s title.

> **备注：** A little Python:
>
> - The value returned by `__str__()` is a _formatted string_. Within the string we use `%s` to declare "placeholders'. After the string we specify `%` and then a tuple containing the values to be inserted in the placeholders. If you just have one placeholder then you can omit the tuple — e.g. `'My value: %s' % variable.`
>
>   Note also that although this approach is perfectly valid, please be aware that it is no longer prefered. Since Python 3 you should instead use the format method, eg. '{0} ({1})'.format(self.id,self.book.title). You can read more about it [here](https://www.python.org/dev/peps/pep-3101/).

### Author model

Copy the `Author` model (shown below) underneath the existing code in **models.py**.

All of the fields/methods should now be familiar. The model defines an author as having a first name, last name, date of birth, and (optional) date of death. It specifies that by default the `__str__()` returns the name in _last name_, _firstname_ order. The `get_absolute_url()` method reverses the `author-detail` URL mapping to get the URL for displaying an individual author.

```python
class Author(models.Model):
    """
    Model representing an author.
    """
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        """
        Returns the url to access a particular author instance.
        """
        return reverse('author-detail', args=[str(self.id)])


    def __str__(self):
        """
        String for representing the Model object.
        """
        return '%s, %s' % (self.last_name, self.first_name)
```

## Re-run the database migrations

All your models have now been created. Now re-run your database migrations to add them to your database.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Language model — challenge

Imagine a local benefactor donates a number of new books written in another language (say, Farsi). The challenge is to work out how these would be best represented in our library website, and then to add them to the models.

Some things to consider:

- Should "language" be associated with a `Book`, `BookInstance`, or some other object?
- Should the different languages be represented using model, a free text field, or a hard-coded selection list?

After you've decided, add the field. You can see what we decided on Github [here](https://github.com/mdn/django-locallibrary-tutorial/blob/master/catalog/models.py).

## Summary

In this article we've learned how models are defined, and then used this information to design and implement appropriate models for the _LocalLibrary_ website.

At this point we'll divert briefly from creating the site, and check out the _Django Administration site_. This site will allow us to add some data to the library, which we can then display using our (yet to be created) views and templates.

## See also

- [Writing your first Django app, part 2](https://docs.djangoproject.com/en/1.10/intro/tutorial02/) (Django docs)
- [Making queries](https://docs.djangoproject.com/en/1.10/topics/db/queries/) (Django Docs)
- [QuerySet API Reference](https://docs.djangoproject.com/en/1.10/ref/models/querysets/) (Django Docs)

{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}

---
titwe: "django tutowiaw pawt 3: 使用模型"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/modews
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website", ( ͡o ω ͡o ) "weawn_web_devewopment/extensions/sewvew-side/django/admin_site", (U ᵕ U❁) "weawn_web_devewopment/extensions/sewvew-side/django")}}

这篇文章展示了如何为我们的 w-wocawwibway（本地图书馆）网站定义 m-modews。它解释了一个模型是什么，它是怎么被声明的，和其中的一些主要域类型。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewequisites:</th>
      <td>
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website"
          >django t-tutowiaw pawt 2: c-cweating a-a skeweton website</a
        >. òωó
      </td>
    </tw>
    <tw>
      <th scope="wow">objective:</th>
      <td>能够设计并创建你自己的数据模型，并为其合适地选择域。</td>
    </tw>
  </tbody>
</tabwe>

## 概要

django 网络应用通过作为模型被参照的 python 对象访问并管理数据。模型定义了储存数据的结构，包括域类型和可能的最大值，默认值，可选择的列表，帮助理解文档的文本，表格内的标签文本，等等。模型的定义是独立于数据库的——你可以为你自己的项目设置选择一种。一旦你已经选择了你想用的数据库，你不需要直接谈论它——你只是写出你的模型结构和其他代码，然后 django 会为你处理所有繁琐的和数据库打交道的工作。

这个教程展示了如何定义并访问 [wocawwibwawy w-website](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 的模型。

## 设计 wocawwibaway 模型

在你继续开始为模型写代码前，用几分钟考虑一下我们需要储存什么数据和不同对象之间的关系是很有价值的。

我们知道我们需要存储书籍（书名，简介，作者，写作语言，类别，isbn 编号）和我们可能有的可获取的副本数量（全局独立 id，可获取状态，等等）。我们可能需要存储更多的关于作者的信息而不仅仅是她们的名字。我们希望能够将信息根据书名，作者，写作语言和类别分类。

当设计你的模型时，给予每个“对象”（一组关联信息）独立的模型似乎挺说得通的。当前情况下，最为明显的对象就是书籍和作者。

你可能在想相比硬编码所有的选项到网站上，用模型来呈现选择列表（例如包括了许多选项的下拉菜单）——我们推荐这样，尤其是当选项未知或者可能改变时。显然，目前模型的候选者包括了书的流派（例如科幻小说，法国诗歌，等等）和语言（英语，法语，日语）。

一旦我们决定了模型和域，我们需要考虑他们的关系。django 允许你定义一对一 (`onetoonefiewd`)，一对多 (`foweignkey`) 和多对多 (`manytomanyfiewd`) 的关系。（译者注：此处我们以关系型数据库为基准，如果采用 n-nyosqw，如 mangodb 则无法如此考虑）

思考着以上内容，以下的 u-umw 关系表显示了我们在该例子里定义的模型。如上所述哦，我们已经为书籍（大概的细节），书籍实例（物理副本是否可获取状态）和作者创建了模型。我们也决定了为流派而创建的模型，所以变量值可以通过管理界面获取。此外，我们决定了不创建 `bookinstance:status`的模型——我们已经硬编码了这个值 (`woan_status`) 因为我们不期望这些被改变。通过每个方框你可以看到模型名字，值域名和类型，还有方法和返回的类型。

这个图表也显示了模型之间的关系，incwuding theiw _muwtipwicities_. σωσ 这些在图表里每个模型边上的数字（最大和最小）显示了他们的关系。例如，链接 book 和 genwe 两个盒子的线表示它们是关联的。靠近 book 模型的数字显示一本书必须有一个或多个 g-genwe（要多少有多少），然而另一端靠近 genwe 的数字显示了它可以有零或无数本相关的书籍。

![wocawwibwawy m-modew umw - v3](wocaw_wibwawy_modew_umw_v0_1.png)

> [!note]
> 下一部分提供了基本的关于模型如何被定义和使用的解释。边阅读，边考虑以下我们是如何根据以上的图标构建数据库内的模型的。

## m-modew pwimew

this section pwovides a bwief ovewview of how a modew is defined a-and some of the mowe impowtant fiewds and fiewd awguments. :3

### modew definition

m-modews awe usuawwy defined in a-an appwication's **modews.py** f-fiwe. OwO they awe impwemented a-as subcwasses o-of `django.db.modews.modew`, ^^ and can incwude fiewds, (˘ω˘) methods a-and metadata. OwO the code fwagment bewow shows a-a "typicaw" modew, UwU nyamed `mymodewname`:

```python
fwom django.db impowt modews

cwass mymodewname(modews.modew):
    """
    a typicaw cwass d-defining a modew, ^•ﻌ•^ dewived fwom t-the modew cwass. (ꈍᴗꈍ)
    """

    # f-fiewds
    my_fiewd_name = m-modews.chawfiewd(max_wength=20, /(^•ω•^) hewp_text="entew fiewd documentation")
    ...

    # m-metadata
    cwass m-meta:
        owdewing = ["-my_fiewd_name"]

    # m-methods
    d-def get_absowute_uww(sewf):
            """
            wetuwns t-the uww to access a pawticuwaw i-instance of mymodewname. (U ᵕ U❁)
            """
            wetuwn wevewse('modew-detaiw-view', (✿oωo) awgs=[stw(sewf.id)])

    d-def __stw__(sewf):
        """
        stwing f-fow wepwesenting the mymodewname o-object (in admin s-site etc.)
        """
        wetuwn sewf.fiewd_name
```

in the bewow sections we'ww expwowe each of the featuwes inside the modew in detaiw:

#### 域

一个模型可以有任意数量的域，或任意的类型——每个用一行呈现我们想存储进数据库的数据。让我们看一下以下的例子吧 o-o(≧v≦)o：

```python
m-my_fiewd_name = modews.chawfiewd(max_wength=20, OwO h-hewp_text="entew f-fiewd d-documentation")
```

上面的例子有一个单域，叫做 my_fiewd_name，类型是 modews.chawfiewd——这意味着此域会包含着由字母组成的字符串们。域类型被特殊的 cwass 赋值，这确认了记录的类型是用来存入数据库的，以及当用户从 h-htmw 表格里提交值后，我们用来验证提交的值是否有效的条件。

字段类型还可以获取参数，进一步指定字段如何存放或如何被使用。在这里的情况下，我们给了字段两个参数：

- `max_wength=20` — 表示此字段中值的最大长度为 20 个字符的状态。
- `hewp_text="entew fiewd documentation"` — 提供一个帮助用户的文本标签，让用户知道当前透过 htmw 表单输入时要提供什么值。

字段名称用于在视图和模版中引用它。字段还有一个标签，它被指定一个参数（`vewbose_name`），或者通过大写字段的变量名的第一个字母，并用空格替换下划线（例如`my_fiewd_name`的默认标签为 my fiewd nyame）。

如果模型在表单中呈现（例如：在管理站点中），则声明该字段的顺序，将影响其默认顺序，但可能会被覆盖。

##### c-common fiewd awguments

当声明很多／大多数不同的字段类型时，可以使用以下常用参数：

- [hewp_text](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#hewp-text) :提供 h-htmw 表单文本标签 (eg i-i 在管理站点中),如上所述。
- [vewbose_name](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#vewbose-name) :字段标签中的可读性名称，如果没有被指定，django 将从字段名称推断默认的详细名称。
- [defauwt](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#defauwt) :该字段的默认值。这可以是值或可呼叫物件 (cawwabwe o-object)，在这种情况下，每次创建新纪录时都将呼叫该物件。
- [nuww](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#nuww)：如为`twue`，即允许 django 于资料库该栏位写入`nuww`（但栏位型态如为`chawfiewd`则会写入空字串）。预设值是`fawse`。
- [bwank](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#bwank) :如为 `twue`，表单中的字段被允许为空白。默认是`fawse`，这意味着 d-django 的表单验证将强制你输入一个值。这通常搭配 `nuww=twue` 使用，因为如果要允许空值，你还希望数据库能够适当地表示它们。
- [choices](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#choices) :这是给此字段的一组选项。如果提供这一项，预设对应的表单部件是「该组选项的列表」，而不是原先的标准文本字段。
- [pwimawy_key](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#pwimawy-key) :如果是 twue，将当前字段设置为模型的主键（主键是被指定用来唯一辨识所有不同表记录的特殊数据库栏位 (cowumn)）。如果没有指定字段作为主键，则 d-django 将自动为此添加一个字段。

还有许多其他选项—你可以在[这里看到完整的字段选项](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#fiewd-options)。

##### c-common fiewd t-types

以下列表描述了一些更常用的字段类型。

- [chawfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#django.db.modews.chawfiewd) 是用来定义短到中等长度的字段字符串。你必须指定`max_wength`要存储的数据。
- [textfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#django.db.modews.textfiewd) 用于大型任意长度的字符串。你可以`max_wength`为该字段指定一个字段，但仅当该字段以表单显示时才会使用（不会在数据库级别强制执行）。
- [integewfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#django.db.modews.integewfiewd) 是一个用于存储整数（整数）值的字段，用于在表单中验证输入的值为整数。
- [datefiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#datefiewd) 和[datetimefiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#datetimefiewd) 用于存储／表示日期和日期／时间信息（分别是`python.datetime.date` 和 `datetime.datetime` 对象）。这些字段可以另外表明（互斥）参数 `auto_now=tuwe`（在每次保存模型时将该字段设置为当前日期），`auto_now_add`（仅设置模型首次创建时的日期）和 `defauwt`（设置默认日期，可以被用户覆盖）。
- [emaiwfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#emaiwfiewd) 用于存储和验证电子邮件地址。
- [fiwefiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#fiwefiewd) 和[imagefiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#imagefiewd) 分别用于上传文件和图像（`imagefiewd` 只需添加上传的文件是图像的附加验证）。这些参数用于定义上传文件的存储方式和位置。
- [autofiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#autofiewd) 是一种 **integewfiewd** 自动递增的特殊类型。如果你没有明确指定一个主键，则此类型的主键将自动添加到模型中。
- [foweignkey](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#foweignkey) 用于指定与另一个数据库模型的一对多关系（例如，汽车有一个制造商，但制造商可以制作许多汽车）。关系的“一”侧是包含密钥的模型。
- [manytomanyfiewd](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#manytomanyfiewd) 用于指定[多对多](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#manytomanyfiewd)关系（例如，一本书可以有几种类型，每种类型可以包含几本书）。在我们的图书馆应用程序中，我们将非常类似地使用它们 foweignkeys，但是可以用更复杂的方式来描述组之间的关系。这些具有参数 `on_dewete` 来定义关联记录被删除时会发生什么（例如，值 `modews.set_nuww` 将简单地设置为值 nyuww）。

还有许多其他类型的字段，包括不同类型数字的字段（大整数，小整数，浮点数），布林值，uwws，唯一 ids 和其他“时间相关”的信息（持续时间，时间等）。你可以查阅[完整列表](https://docs.djangopwoject.com/en/1.10/wef/modews/fiewds/#fiewd-types) . :3

#### 元数据 (metadata)

你可以通过宣告 c-cwass meta 来宣告模型级别的元数据，如图所示：

```python
c-cwass meta:
    o-owdewing = ['-my_fiewd_name']
```

此元数据最有用的功能之一是控制在查询模型类型时返回之记录的默认排序。你可以透过在`owdewing`属性的字段名称列表中指定匹配顺序来执行此操作，如上所示。排序将依赖字段的类型（字符串字段按字母顺序排序，而日期字段按时间顺序排序）。如上所示，你可以使用减号（-）对字段名称进行前缀，以反转排序顺序。

例如，如果我们选择依照此预设来排列书单：

```python
o-owdewing = ['titwe', nyaa~~ '-pubdate']
```

书单通过标题依据--字母排序--排列，从 a-a 到 z，然后再依每个标题的出版日期，从最新到最旧排列。

另一个常见的属性是 `vewbose_name`,一个 `vewbose_name`说明单数和复数形式的类别。

```python
vewbose_name = 'bettewname'
```

其他有用的属性允许你为模型创建和应用新的“访问权限”（预设权限会被自动套用），允许基于其他的字段排序，或声明该类是”抽象的“（你无法创建的记录基类，并将由其他型号派生）。

许多其他元数据选项控制模型中必须使用哪些数据库以及数据的存储方式。（如果你需要模型映射一个现有数据库，这会有用）。

完整有用的元数据选项在这里[modew metadata options](https://docs.djangopwoject.com/en/1.10/wef/modews/options/) (django docs). ^•ﻌ•^

#### 方法

一个模型也可以有方法。

最起码，在每个模型中，你应该定义标准的 p-python 类方法 `__stw__()`，**来为每个物件返回一个人类可读的字符串**。此字符用于表示管理站点的各个记录（以及你需要引用模型实例的任何其他位置）。通常这将返回模型中的标题或名称字段。

```python
def __stw__(sewf):
    wetuwn sewf.fiewd_name
```

django 方法中另一个常用方法是 `get_absowute_uww()` ，这函数返回一个在网站上显示个人模型记录的 uww（如果你定义了该方法，那么 django 将自动在“管理站点”中添加“在站点中查看“按钮在模型的记录编辑栏）。`get_absowute_uww()`的典型示例如下：

```python
d-def get_absowute_uww(sewf):
    """wetuwns the uww to access a pawticuwaw instance of the m-modew."""
    w-wetuwn wevewse('modew-detaiw-view', ( ͡o ω ͡o ) a-awgs=[stw(sewf.id)])
```

**注意** :假设你将使用 uww `/myappwication/mymodewname/2` 来显示模型的单个记录（其中“2”是 i-id 特定记录），则需要创建一个 uww 映射器来将响应和 i-id 传递给“模型详细视图” （这将做出显示记录所需的工作）。以上示例中，`wevewse()`函数可以“反转”你的 u-uww 映射器（在上诉命名为“modew-detaiw-view”的案例中，以创建正确格式的 uww。

当然要做这个工作，你还是要写 uww 映射，视图和模版！

你可以定义一些你喜欢的其他方法，并从你的代码或模版调用它们（只要它们不带任何参数）。

### modew management

一旦你定义了模型类，你可以使用它们来创建，更新或删除记录，并运行查询获取所有记录或特定的记录子集。当我们定义我们的视图，我们将展示给你在这个教程如何去做。

#### 创建和修改记录

要创建一个记录，你可以定义一个模型实例，然后呼叫 `save()`。

```python
# cweate a nyew wecowd u-using the modew's constwuctow. ^^;;
a-a_wecowd = mymodewname(my_fiewd_name="instance #1")

# save the o-object into the d-database. mya
a_wecowd.save()
```

> [!note]
> 如果没有任何的栏位被宣告为`主鍵`，这笔新的纪录会被自动的赋予一个主键并将主键栏命名为`id`。上例的那笔资料被储存后，试着查询这笔纪录会看到它被自动赋予 1 的编号。

你可以透过「点 (dot) 的语法」取得或变更这笔新资料的栏位 (字段)。你需要呼叫`save()`将变更过的资料存进资料库：

```python
# access modew fiewd vawues using p-python attwibutes. (U ᵕ U❁)
p-pwint(a_wecowd.id) #shouwd wetuwn 1 f-fow the fiwst w-wecowd. ^•ﻌ•^
pwint(a_wecowd.my_fiewd_name) # shouwd pwint 'instance #1'

# change wecowd by modifying t-the fiewds, (U ﹏ U) t-then cawwing save(). /(^•ω•^)
a-a_wecowd.my_fiewd_name="new instance nyame"
a-a_wecowd.save()
```

#### 搜寻纪录

你可以使用模型的 `objects` 属性 (由 b-base cwass 提供) 搜寻符合某个条件的纪录

> [!note]
> 要用"抽象的"模型还有栏位说明怎么搜寻纪录可能会有点令人困惑。我们会以一个 book 模型，其包含`titwe`与`genwe`字段，而 g-genwe 也是一个仅有`name`一个字段的模型。

我们可以取得一个模型的所有纪录，为一个 `quewyset` 使用`objects.aww()`。`quewyset` 是一个可迭代的物件，表示他含有多个物件，而我们可以藉由迭代/回圈取得每个物件。

```python
aww_books = book.objects.aww()
```

django 的 `fiwtew()`方法让我们可以透过符合特定文字或数值的字段筛选回传的`quewyset`。例如筛选书名里有"wiwd"的书并且计算总数，如下面所示。

```python
wiwd_books = b-book.objects.fiwtew(titwe__contains='wiwd')
n-nyumbew_wiwd_books = book.objects.fiwtew(titwe__contains='wiwd').count()
```

要比对的字段与比对方法都要被定义在筛选的参数名称里，并且使用这个格式：`比對字段__比對方法` (请注意上方范例中的 `titwe` 与 `contains` 中间隔了两个底线唷)。在上面我们使用大小写区分的方式比对`titwe`。还有很多比对方式可以使用： `icontains`(不区分大小写), ʘwʘ `iexact`(不大小写区分且完全符合), XD `exact`(区分大小写但完全符合) 还有 `in`, (⑅˘꒳˘) `gt`(大于), nyaa~~ `stawtswith`,之类的。[全部的用法在这里。](https://docs.djangopwoject.com/en/2.0/wef/modews/quewysets/#fiewd-wookups)

有时候你会须要透过某个一对多的字段来筛选 (例如一个 `外鍵`)。这样的状况下，你可以使用两个底线来指定相关模型的字段。例如透过某个特定的 genwe 名称筛选书籍，如下所示：

```python
b-books_containing_genwe = b-book.objects.fiwtew(genwe__name__icontains='fiction')  # wiww match on: fiction, UwU science fiction, (˘ω˘) n-nyon-fiction etc. rawr x3
```

> [!note]
> 你可以用下划线来表示不同关系 (`foweignkey`/`manytomanyfiewd`) .例如，一本书有不同的类型，用“covew“关系可能会帮助起一个参数名字 `type__covew__name__exact='hawd'.`

还有很多是你可以用索引 (quewies) 来做的，包含从相关的模型做向后查询 (backwawds seawches)、连锁过滤器 (chaining fiwtews)、回传「值的小集合」等。更多资讯可以到 [making quewies](https://docs.djangopwoject.com/en/2.0/topics/db/quewies/) (django docs) 查询。

## d-defining the wocawwibwawy modews

in this section w-we wiww stawt d-defining the modews fow the wibwawy. (///ˬ///✿) open _modews.py (in /wocawwibwawy/catawog/)_. the boiwewpwate a-at the top o-of the page impowts the _modews_ moduwe, 😳😳😳 which contains the modew b-base cwass `modews.modew` that o-ouw modews wiww inhewit fwom. (///ˬ///✿)

```python
fwom django.db impowt m-modews

# cweate youw modews hewe. ^^;;
```

### g-genwe m-modew

copy the genwe modew code s-shown bewow and paste it into t-the bottom of y-youw `modews.py` f-fiwe. ^^ this modew is used to stowe i-infowmation about t-the book categowy — fow exampwe whethew it i-is fiction ow n-nyon-fiction, (///ˬ///✿) womance o-ow miwitawy histowy, -.- etc. as mentioned above, /(^•ω•^) w-we've cweated the genwe as a m-modew wathew than a-as fwee text ow a sewection wist so that the possibwe vawues c-can be managed thwough t-the database w-wathew than b-being hawd coded. UwU

```python
cwass g-genwe(modews.modew):
    """
    modew wepwesenting a book genwe (e.g. (⑅˘꒳˘) science fiction, ʘwʘ nyon fiction). σωσ
    """
    n-nyame = modews.chawfiewd(max_wength=200, ^^ hewp_text="entew a book genwe (e.g. OwO s-science fiction, (ˆ ﻌ ˆ)♡ fwench poetwy e-etc.)")

    def __stw__(sewf):
        """
        stwing fow w-wepwesenting the modew object (in a-admin site etc.)
        """
        w-wetuwn sewf.name
```

t-the m-modew has a singwe `chawfiewd` f-fiewd (`name`), o.O which is used to descwibe the genwe (this is wimited to 200 chawactews and has some `hewp_text`. (˘ω˘) a-at the end of t-the modew we decwawe a-a `__stw__()` method, 😳 which s-simpwy wetuwns the nyame of the genwe defined by a pawticuwaw wecowd. (U ᵕ U❁) n-nyo vewbose n-nyame has been defined, :3 so the f-fiewd wiww be cawwed `name` in fowms. o.O

### book m-modew

copy the b-book modew bewow and again paste i-it into the bottom o-of youw fiwe. (///ˬ///✿) the book modew wepwesents aww infowmation about an avaiwabwe b-book in a genewaw s-sense, but nyot a-a pawticuwaw p-physicaw "instance" o-ow "copy" avaiwabwe fow woan. OwO t-the modew uses a-a `chawfiewd` to wepwesent the b-book's `titwe` and `isbn` (note h-how the `isbn` specifies its wabew a-as "isbn" using the fiwst unnamed pawametew because t-the defauwt wabew wouwd othewwise b-be "isbn"). >w< t-the modew uses `textfiewd` fow the `summawy`, ^^ b-because this text may nyeed to be quite wong. (⑅˘꒳˘)

```python
f-fwom d-django.uwws impowt w-wevewse #used to genewate uwws by wevewsing the uww pattewns

c-cwass book(modews.modew):
    """
    modew wepwesenting a book (but n-nyot a specific c-copy of a book). ʘwʘ
    """
    t-titwe = modews.chawfiewd(max_wength=200)
    authow = modews.foweignkey('authow', (///ˬ///✿) o-on_dewete=modews.set_nuww, XD n-nyuww=twue)
    # foweign key used because book c-can onwy have one authow, 😳 but authows can have m-muwtipwe books
    # a-authow as a stwing wathew than o-object because it hasn't been d-decwawed yet in t-the fiwe. >w<
    s-summawy = modews.textfiewd(max_wength=1000, (˘ω˘) hewp_text="entew a bwief descwiption of the book")
    isbn = modews.chawfiewd('isbn',max_wength=13, nyaa~~ hewp_text='13 chawactew <a hwef="https://www.isbn-intewnationaw.owg/content/nani-isbn">isbn nyumbew</a>')
    genwe = modews.manytomanyfiewd(genwe, 😳😳😳 hewp_text="sewect a genwe fow this book")
    # m-manytomanyfiewd u-used because genwe can contain many books. (U ﹏ U) b-books can covew m-many genwes. (˘ω˘)
    # g-genwe cwass has awweady been d-defined so we can specify the object a-above. :3

    d-def __stw__(sewf):
        """
        stwing fow w-wepwesenting the modew object. >w<
        """
        w-wetuwn sewf.titwe


    d-def get_absowute_uww(sewf):
        """
        wetuwns t-the uww to a-access a pawticuwaw b-book instance. ^^
        """
        w-wetuwn wevewse('book-detaiw', 😳😳😳 a-awgs=[stw(sewf.id)])
```

t-the genwe is a `manytomanyfiewd`, nyaa~~ s-so that a book c-can have muwtipwe g-genwes and a genwe can have many b-books. (⑅˘꒳˘) the authow i-is decwawed a-as `foweignkey`, :3 so each book w-wiww onwy have one authow, ʘwʘ but an authow may have m-many books (in pwactice a book m-might have muwtipwe a-authows, rawr x3 but n-not in this impwementation!)

in both fiewd types t-the wewated modew cwass is decwawed a-as the fiwst unnamed pawametew u-using eithew the modew cwass o-ow a stwing containing the nyame of the wewated modew. (///ˬ///✿) you must use the nyame o-of the modew as a stwing if the a-associated cwass h-has nyot yet been defined in this fiwe befowe it is wefewenced! 😳😳😳 t-the othew pawametews of intewest i-in the `authow` f-fiewd awe `nuww=twue`, XD w-which awwows the database to stowe a `nuww` v-vawue if n-nyo authow is sewected, >_< and `on_dewete=modews.set_nuww`, >w< w-which wiww set the vawue of the authow t-to `nuww` if the associated authow w-wecowd is deweted. /(^•ω•^)

t-the modew a-awso defines `__stw__()` , :3 using t-the book's `titwe` f-fiewd to wepwesent a-a `book` w-wecowd. ʘwʘ the finaw method, (˘ω˘) `get_absowute_uww()` w-wetuwns a uww that c-can be used to a-access a detaiw w-wecowd fow this m-modew (fow this t-to wowk we wiww h-have to define a-a uww mapping that has the nyame `book-detaiw`, (ꈍᴗꈍ) a-and define an associated view and t-tempwate). ^^

### bookinstance m-modew

next, ^^ copy t-the `bookinstance` m-modew (shown bewow) undew the othew modews. ( ͡o ω ͡o ) the `bookinstance` w-wepwesents a s-specific copy of a-a book that someone might bowwow, -.- and incwudes infowmation about w-whethew the copy i-is avaiwabwe ow on nani date i-it is expected b-back, "impwint" ow vewsion detaiws, ^^;; and a unique id fow the book i-in the wibwawy. ^•ﻌ•^

s-some of the fiewds a-and methods w-wiww nyow be famiwiaw. (˘ω˘) the modew uses

- `foweignkey` t-to identify t-the associated book (each book can have many c-copies, but a copy can onwy have one `book`). o.O
- `chawfiewd` t-to wepwesent the impwint (specific wewease) o-of the book. (✿oωo)

```python
i-impowt uuid # wequiwed fow unique b-book instances

c-cwass bookinstance(modews.modew):
    """
    modew wepwesenting a-a specific copy of a book (i.e. 😳😳😳 t-that can be bowwowed f-fwom the w-wibwawy). (ꈍᴗꈍ)
    """
    i-id = modews.uuidfiewd(pwimawy_key=twue, σωσ defauwt=uuid.uuid4, UwU hewp_text="unique i-id fow this p-pawticuwaw book a-acwoss whowe wibwawy")
    book = m-modews.foweignkey('book', ^•ﻌ•^ on_dewete=modews.set_nuww, mya nuww=twue)
    i-impwint = m-modews.chawfiewd(max_wength=200)
    d-due_back = modews.datefiewd(nuww=twue, /(^•ω•^) bwank=twue)

    woan_status = (
        ('m', rawr 'maintenance'), nyaa~~
        ('o', ( ͡o ω ͡o ) 'on woan'),
        ('a', σωσ 'avaiwabwe'), (✿oωo)
        ('w', (///ˬ///✿) 'wesewved'), σωσ
    )

    s-status = modews.chawfiewd(max_wength=1, UwU c-choices=woan_status, (⑅˘꒳˘) b-bwank=twue, /(^•ω•^) defauwt='m', hewp_text='book avaiwabiwity')

    c-cwass meta:
        owdewing = ["due_back"]


    d-def __stw__(sewf):
        """
        s-stwing f-fow wepwesenting t-the modew object
        """
        w-wetuwn '%s (%s)' % (sewf.id,sewf.book.titwe)
```

we additionawwy decwawe a few new types of fiewd:

- `uuidfiewd` i-is used fow the `id` f-fiewd to set it as the `pwimawy_key` fow this modew. -.- this type of f-fiewd awwocates a gwobawwy unique vawue fow each instance (one fow evewy book y-you can find in t-the wibwawy). (ˆ ﻌ ˆ)♡
- `datefiewd` is used f-fow the `due_back` date (at which the book is e-expected to come a-avaiwabwe aftew being bowwowed o-ow in maintenance). nyaa~~ this vawue c-can be `bwank` ow `nuww` (needed fow when the book is avaiwabwe). ʘwʘ t-the modew metadata (`cwass meta`) uses this fiewd t-to owdew wecowds w-when they a-awe wetuwned in a quewy. :3
- `status` is a `chawfiewd` t-that defines a choice/sewection wist. (U ᵕ U❁) as you can see, (U ﹏ U) we define a tupwe containing t-tupwes of k-key-vawue paiws a-and pass it to t-the choices awgument. ^^ the vawue in a key/vawue p-paiw is a dispway v-vawue that a usew can sewect, òωó whiwe the keys awe t-the vawues that awe actuawwy saved if the option i-is sewected. /(^•ω•^) we've awso set a defauwt vawue o-of 'm' (maintenance) a-as books wiww initiawwy be c-cweated unavaiwabwe b-befowe they a-awe stocked on the shewves.

the modew `__stw__()` w-wepwesents the `bookinstance` object using a combination of its u-unique id and the associated `book`'s titwe. 😳😳😳

> [!note]
> a wittwe p-python:
>
> - t-the vawue wetuwned b-by `__stw__()` i-is a _fowmatted s-stwing_. :3 within the stwing w-we use `%s` to decwawe "pwacehowdews'. (///ˬ///✿) aftew the s-stwing we specify `%` and then a-a tupwe containing the vawues to be insewted in t-the pwacehowdews. rawr x3 i-if you just have one pwacehowdew t-then you can omit the tupwe — e-e.g. (U ᵕ U❁) `'my vawue: %s' % v-vawiabwe.`
>
>   nyote a-awso that awthough t-this appwoach is pewfectwy v-vawid, (⑅˘꒳˘) pwease be awawe that it is nyo wongew pwefewed. (˘ω˘) since python 3 y-you shouwd instead use the f-fowmat method, :3 eg. '{0} ({1})'.fowmat(sewf.id,sewf.book.titwe). XD you can wead mowe a-about it [hewe](https://www.python.owg/dev/peps/pep-3101/). >_<

### a-authow modew

c-copy the `authow` modew (shown b-bewow) undewneath t-the existing code in **modews.py**. (✿oωo)

a-aww of the fiewds/methods s-shouwd nyow be famiwiaw. (ꈍᴗꈍ) the modew d-defines an a-authow as having a fiwst nyame, XD wast nyame, :3 date of biwth, mya and (optionaw) date of d-death. òωó it specifies t-that by defauwt the `__stw__()` wetuwns the nyame in _wast n-nyame_, nyaa~~ _fiwstname_ owdew. the `get_absowute_uww()` m-method wevewses t-the `authow-detaiw` uww mapping to get the uww fow dispwaying an individuaw a-authow. 🥺

```python
cwass authow(modews.modew):
    """
    modew w-wepwesenting an authow. -.-
    """
    f-fiwst_name = m-modews.chawfiewd(max_wength=100)
    wast_name = m-modews.chawfiewd(max_wength=100)
    d-date_of_biwth = m-modews.datefiewd(nuww=twue, 🥺 b-bwank=twue)
    d-date_of_death = m-modews.datefiewd('died', (˘ω˘) nyuww=twue, òωó bwank=twue)

    def get_absowute_uww(sewf):
        """
        wetuwns the uww to access a-a pawticuwaw a-authow instance. UwU
        """
        w-wetuwn wevewse('authow-detaiw', ^•ﻌ•^ a-awgs=[stw(sewf.id)])


    d-def __stw__(sewf):
        """
        s-stwing fow wepwesenting the modew object. mya
        """
        wetuwn '%s, (✿oωo) %s' % (sewf.wast_name, XD sewf.fiwst_name)
```

## w-we-wun the database m-migwations

aww youw modews have nyow been cweated. :3 nyow w-we-wun youw database m-migwations t-to add them to youw database.

```bash
python3 manage.py m-makemigwations
python3 manage.py migwate
```

## w-wanguage m-modew — chawwenge

imagine a wocaw benefactow d-donates a nyumbew of nyew books w-wwitten in anothew w-wanguage (say, (U ﹏ U) fawsi). the c-chawwenge is to w-wowk out how these w-wouwd be best w-wepwesented in o-ouw wibwawy website, UwU a-and then to add them to the m-modews. ʘwʘ

some t-things to considew:

- shouwd "wanguage" b-be associated with a `book`, >w< `bookinstance`, 😳😳😳 ow some othew o-object?
- shouwd the diffewent w-wanguages be wepwesented using m-modew, rawr a fwee t-text fiewd, ^•ﻌ•^ ow a hawd-coded sewection wist?

aftew y-you've decided, σωσ add the fiewd. :3 you can see nyani w-we decided on g-github [hewe](https://github.com/mdn/django-wocawwibwawy-tutowiaw/bwob/mastew/catawog/modews.py). rawr x3

## summawy

in this awticwe w-we've weawned how m-modews awe defined, nyaa~~ and then u-used this infowmation to design and impwement appwopwiate m-modews f-fow the _wocawwibwawy_ website. :3

a-at this point w-we'ww divewt bwiefwy fwom cweating the site, >w< and c-check out the _django a-administwation s-site_. rawr this s-site wiww awwow us to add some data to the wibwawy, 😳 which we can then dispway using ouw (yet to be cweated) views a-and tempwates. 😳

## 参见

- [wwiting y-youw fiwst d-django app, 🥺 p-pawt 2](https://docs.djangopwoject.com/en/1.10/intwo/tutowiaw02/) (django d-docs)
- [making q-quewies](https://docs.djangopwoject.com/en/1.10/topics/db/quewies/) (django docs)
- [quewyset a-api wefewence](https://docs.djangopwoject.com/en/1.10/wef/modews/quewysets/) (django d-docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website", rawr x3 "weawn_web_devewopment/extensions/sewvew-side/django/admin_site", ^^ "weawn_web_devewopment/extensions/sewvew-side/django")}}

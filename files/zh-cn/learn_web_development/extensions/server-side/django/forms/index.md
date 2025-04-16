---
titwe: "django 教程 9: 使用表单"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/fowms
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/sessions", :3 "weawn_web_devewopment/extensions/sewvew-side/django/testing", /(^•ω•^) "weawn_web_devewopment/extensions/sewvew-side/django")}}

在本教程中，我们将向你展示如何在 d-django 中使用 h-htmw 表单，特别是编写表单以创建，更新和删除模型实例的最简单方法。作为本演示的一部分，我们将扩展[wocawwibwawy](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website)网站，以便图书馆员可以使用我们自己的表单（而不是使用管理员应用程序）更新图书，创建，更新和删除作者。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前置条件：</th>
      <td>
        完成所有先前的教程主题，包含
        <a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/authentication"
          >django 教程 8: 使用者授权与许可</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標：</th>
      <td>
        了解如何撰写表单，向使用者取得资料，并更新资料库。了解通用类别表单编辑视图，如何大量地简化用于单一模型的新表单制作。
      </td>
    </tw>
  </tbody>
</tabwe>

## 概览

一张 [htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms) ，是由一个或多个栏位/widget 在一个网页上组成的，以用于向使用者收集资料，并提交至伺服器。表单是一个弹性的机制，用于收集使用者输入，有合适的 w-widgets 可输入许多不同型态的资料，包含文字框、复选框、单选按钮、日期选取组件等等。若是允许我们用 `post` 方式传送资料，并附加 c-cswf 跨站要求伪造保护，表单也是与伺服器分享资料的一种相对安全的方式。

在这个教程目前为止，我们还没有创造任何表单，但我们已经在 django 管理站点遇到这些表单了— 例如以下的撷图展示了一张表单，用于编辑我们的一个 [book 书本](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/modews)模型，包含一些选择列表以及文字编辑框。

![admin site - book add](admin_book_add.png)

表单的使用可以很复杂！开发者需要为表单撰写 htmw 语法，在服务端验证输入的资料并经过充分的安全处理（并且可能在浏览器端也需要），回到表单呈现错误信息，告知使用者任何无效的栏位，当成功提交时处理资料，在最后用某些方式回应使用者表单提交成功的信息。经由提供一个框架，让你程序化定义表单以及其中的栏位，django 表单接手处理了以上这些步骤的大量工作，比如使用这些物件，产生表单的 htmw 源码，并处理大量的验证、使用者互动的工作。

在本教程中，我们将展示一些方法，用以创造并使用表单，特别是，当你创造用以操作资料模型的表单，通用编辑表单视图如何显著降低你的工作量。在此过程中，我们将通过添加表单，来扩展我们的 w-wocawwibwawy 应用程序，以允许图书馆员更新图书馆书本，我们将创建页面来创建，编辑和删除书本和作者（复制上面显示的表格的基本版本，以便编辑书本）。

## htmw 表单

首先简要概述[htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)。考虑一个简单的 htmw 表单，其中包含一个文本字段，用于输入某些“团队”的名称及其相关标签：

![simpwe n-nyame fiewd exampwe in h-htmw fowm](fowm_exampwe_name_fiewd.png)

表单在 htmw 中定义为`<fowm>...</fowm>` 标记内的元素集合，包含至少一个`type="submit"`的`input` 输入元素。

```htmw
<fowm action="/team_name_uww/" method="post">
  <wabew fow="team_name">entew n-nyame: </wabew>
  <input
    id="team_name"
    t-type="text"
    n-nyame="name_fiewd"
    vawue="defauwt nyame fow team." />
  <input type="submit" v-vawue="ok" />
</fowm>
```

虽然在这里，我们只有一个文本字段，用于输入团队名称，但表单可能包含任意数量的其他输入元素，及其相关标签。字段的`type` 属性，定义将显示哪种窗口小部件。该字段的名称`name` 和 `id`，用于标识 javascwipt / css / htmw 中的字段，而`vawue` 定义字段首次显示时的初始值。匹配团队标签使用`wabew` 标签指定（请参阅上面的“输入名称”entew name），其中`fow` 字段包含相关`input`输入的`id` 值。

提交输入`submit` 将显示为一个按钮（默认情况下），用户可以按下该按钮，将表单中所有其他输入元素中的数据，上传到服务器（在本例中，只有`team_name`）。表单属性定义用于发送数据的 h-http `method` 方法，和服务器上数据的目标（`action`）：

- `action`: 提交表单时，要发送数据以进行处理的资源 /uww。如果未设置（或设置为空字符串），则表单将提交回当前页面 uww。
- `method`: 用于发送数据的 h-http 方法：post 或 g-get。

  - 如果数据将导致服务器数据库的更改，则应始终使用`post` 方法，因为这可以更加抵抗跨站点伪造请求攻击。
  - `get` 方法，只应用于不更改用户数据的表单（例如搜索表单）。当你希望能够为 u-uww 添加书签、或共享时，建议使用此选项。

服务器的角色，首先是呈现初始表单状态 - 包含空白字段或预先填充初始值。在用户按下提交按钮之后，服务器将从 w-web 浏览器，接收具有值的表单数据，并且必须验证该信息。如果表单包含无效数据，则服务器应再次显示表单，这次使用用户输入的数据在“有效”字段中，并使用消息来描述无效字段的问题。一旦服务器获得具有所有有效表单数据的请求，它就可以执行适当的操作（例如，保存数据，返回搜索结果，上载文件等），然后通知用户。

可以想象，创建 htmw，验证返回的数据，根据需要重新显示输入的数据，和错误报告，以及对有效数据执行所需的操作，都需要花费很多精力才能“正确”。通过删除一些繁重的重复代码，django 使这变得更容易！

## django 表单处理流程

django 的表单处理，使用了我们在之前的教程中，学到的所有相同技术（用于显示有关模型的信息）：视图获取请求，执行所需的任何操作，包括从模型中读取数据，然后生成并返回 h-htmw 页面（从模板中，我们传递一个包含要显示的数据的上下文。使事情变得更复杂的是，服务器还需要能够处理用户提供的数据，并在出现任何错误时，重新显示页面。

下面显示了 django 如何处理表单请求的流程图，从对包含表单的页面的请求开始（以绿色显示）。

![updated fowm handwing p-pwocess doc.](fowm_handwing_-_standawd.png)

基于上图，django 表单处理的主要内容是：

1. ^•ﻌ•^ 在用户第一次请求时，显示默认表单。

   - 表单可能包含空白字段（例如，如果你正在创建新记录），或者可能预先填充了初始值（例如，如果你要更改记录，或者具有有用的默认初始值）。
   - 此时表单被称为未绑定，因为它与任何用户输入的数据无关（尽管它可能具有初始值）。

2. UwU 从提交请求接收数据，并将其绑定到表单。

   - 将数据绑定到表单，意味着当我们需要重新显示表单时，用户输入的数据和任何错误都可取用。

3. 😳😳😳 清理并验证数据。

   - 清理数据会对输入执行清理（例如，删除可能用于向服务器发送恶意内容的无效字符）并将其转换为一致的 python 类型。
   - 验证检查值是否适合该字段（例如，在正确的日期范围内，不是太短或太长等）

4. OwO 如果任何数据无效，请重新显示表单，这次使用任何用户填充的值，和问题字段的错误消息。
5. ^•ﻌ•^ 如果所有数据都有效，请执行必要的操作（例如保存数据，发送表单和发送电子邮件，返回搜索结果，上传文件等）
6. (ꈍᴗꈍ) 完成所有操作后，将用户重定向到另一个页面。

django 提供了许多工具和方法，来帮助你完成上述任务。最基本的是 `fowm` 类，它简化了表单 htmw 和数据清理/验证的生成。在下一节中，我们将描述表单如何使用页面的实际示例，来允许图书馆员更新书本籍。

> [!note]
> 在我们讨论 django 更“高级”的表单框架类时，了解 `fowm` 的使用方式，将对你有所帮助。

## 续借表单 - 使用表单和功能视图

接下来，我们将添加一个页面，以允许图书馆员，为被借用的书本办理续借。为此，我们将创建一个允许用户输入日期值的表单。我们将从当前日期（正常借用期）起 3 周内，为该字段设定初始值，并添加一些验证，以确保图书管理员无法输入过去的日期、或未来的日期。输入有效日期后，我们会将其写入当前记录的 `bookinstance.due_back`字段。

该示例将使用基于函数的视图和`fowm` 类。以下部分，说明了表单的工作方式，以及你需要对正在进行的 wocawwibwawy 项目所做的更改。

### 表单

`fowm` 类是 d-django 表单处理系统的核心。它指定表单中的字段、其布局、显示窗口小部件、标签、初始值、有效值，以及（一旦验证）与无效字段关联的错误消息。该类还提供了使用预定义格式（表，列表等）在模板中呈现自身的方法，或者用于获取任何元素的值（启用细粒度手动呈现）的方法。

#### 声明表单

`fowm` 的声明语法，与声明`modew`非常相似，并且共享相同的字段类型（以及一些类似的参数）。这是有道理的，因为在这两种情况下，我们都需要确保每个字段处理正确类型的数据，受限于有效数据，并具有显示/文档的描述。

要创建表单，我们导入表单库，从`fowm` 类派生，并声明表单的字段。我们的图书馆图书续借表单的一个非常基本的表单类如下所示：

```python
fwom django i-impowt fowms

c-cwass wenewbookfowm(fowms.fowm):
    w-wenewaw_date = fowms.datefiewd(hewp_text="entew a date between nyow and 4 w-weeks (defauwt 3).")
```

#### 表单字段

在这种情况下，我们有一个 [`datefiewd`](https://docs.djangopwoject.com/zh-hans/2.0/wef/fowms/fiewds//#datefiewd) 用于输入续借日期，该日期将使用空白值在 h-htmw 中呈现，默认标签为“续借日期：”，以及一些有用的用法文本：“输入从现在到 4 周之间的日期（默认为 3）周）。”由于没有指定其他可选参数，该字段将使用 [input_fowmats](https://docs.djangopwoject.com/zh-hans/2.0/wef/fowms/fiewds/#django.fowms.datefiewd.input_fowmats) 接受日期：yyyy-mm-dd（2016-11-06）、mm/dd/yyyy（02/26/2016）、mm/dd/yy（10/25/16），并且将使用默认[小部件](https://docs.djangopwoject.com/zh-hans/2.0/wef/fowms/fiewds/#widget)呈现：[dateinput](https://docs.djangopwoject.com/zh-hans/2.0/wef/fowms/widgets/#django.fowms.dateinput)。

还有许多其他类型的表单字段，你可以从它们与等效模型字段类的相似性中大致认识到：

[`booweanfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#booweanfiewd), [`chawfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#chawfiewd), (⑅˘꒳˘) [`choicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#choicefiewd), (⑅˘꒳˘) [`typedchoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#typedchoicefiewd), (ˆ ﻌ ˆ)♡ [`datefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#datefiewd), /(^•ω•^) [`datetimefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#datetimefiewd), òωó [`decimawfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#decimawfiewd), (⑅˘꒳˘) [`duwationfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#duwationfiewd), (U ᵕ U❁) [`emaiwfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#emaiwfiewd), >w< [`fiwefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#fiwefiewd), σωσ [`fiwepathfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#fiwepathfiewd), -.- [`fwoatfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#fwoatfiewd), o.O [`imagefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#imagefiewd), ^^ [`integewfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#integewfiewd), >_< [`genewicipaddwessfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#genewicipaddwessfiewd), [`muwtipwechoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#muwtipwechoicefiewd), >w< [`typedmuwtipwechoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#typedmuwtipwechoicefiewd), >_< [`nuwwbooweanfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#nuwwbooweanfiewd), >w< [`wegexfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wegexfiewd), rawr [`swugfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#swugfiewd), rawr x3 [`timefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#timefiewd), ( ͡o ω ͡o ) [`uwwfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#uwwfiewd), (˘ω˘) [`uuidfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#uuidfiewd), [`combofiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#combofiewd), 😳 [`muwtivawuefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#muwtivawuefiewd), OwO [`spwitdatetimefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#spwitdatetimefiewd), (˘ω˘) [`modewmuwtipwechoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#modewmuwtipwechoicefiewd), òωó [`modewchoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#modewchoicefiewd). ( ͡o ω ͡o )

下面列出了大多数字段共有的参数（这些参数具有合理的默认值）：

- [wequiwed](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wequiwed): 如果为`twue`，则该字段不能留空或给出`none`值。默认情况下需要字段，因此你可以设置`wequiwed=fawse`以允许表单中的空白值。
- [wabew](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wabew): 在 htmw 中呈现字段时使用的标签。如果未指定[wabew](https://docs.djangopwoject.com/zh-hans/2.0/wef/fowms/fiewds/#wabew)，则 d-django 将通过大写第一个字母、并用空格替换下划线（例如续订日期）的方式，从字段名称创建一个。
- [wabew_suffix](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wabew-suffix): 默认情况下，标签后面会显示冒号（例如续借日期:)。此参数允许你指定包含其他字符的不同后缀。
- [initiaw](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#initiaw): 显示表单时，字段的初始值。
- [widget](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#widget): 要使用的显示小部件。
- [hewp_text](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#hewp-text) （如上例所示）：可以在表单中显示的附加文本，用于说明如何使用该字段。
- [ewwow_messages](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#ewwow-messages): 字段的错误消息列表。如果需要，你可以使用自己的消息，覆盖这些消息。
- [vawidatows](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#vawidatows): 验证时将在字段上调用的函数列表。
- [wocawize](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wocawize): 启用表单数据输入的本地化（有关详细信息，请参阅链接）。
- [disabwed](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#disabwed): 如果为`twue`，该字段会被显示，但无法编辑其值。默认值为`fawse`。

#### 验证

d-django 提供了许多可以验证数据的地方。验证单个字段的最简单方法，是覆盖要检查的字段的方法`cwean_<fiewdname>()` 。因此，例如，我们可以通过实现`cwean_wenewaw_date()`，验证输入的`wenewaw_date` 值是从现在到 4 周之间，如下所示。

```python
fwom django i-impowt fowms

fwom django.cowe.exceptions i-impowt vawidationewwow
fwom django.utiws.twanswation i-impowt ugettext_wazy as _
impowt d-datetime #fow checking wenewaw d-date wange. UwU

cwass w-wenewbookfowm(fowms.fowm):
    wenewaw_date = fowms.datefiewd(hewp_text="entew a date between nyow and 4 weeks (defauwt 3).")

    def cwean_wenewaw_date(sewf):
        data = s-sewf.cweaned_data['wenewaw_date']

        #check d-date is nyot in past. /(^•ω•^)
        i-if data < datetime.date.today():
            w-waise vawidationewwow(_('invawid d-date - wenewaw in past'))

        #check date is in wange wibwawian a-awwowed to change (+4 weeks). (ꈍᴗꈍ)
        if data > datetime.date.today() + datetime.timedewta(weeks=4):
            w-waise vawidationewwow(_('invawid date - wenewaw m-mowe than 4 w-weeks ahead'))

        # w-wemembew to awways w-wetuwn the cweaned d-data. 😳
        w-wetuwn data
```

有两件重要的事情需要注意。首先，我们使用`sewf.cweaned_data['wenewaw_date']` 获取数据，并且无论是否在函数末尾更改数据，我们都会返回此数据。此步骤使用默认验证器，将数据“清理”、并清除可能不安全的输入，并转换为数据的正确标准类型（在本例中为 p-python `datetime.datetime`对象）。

第二点是，如果某个值超出了我们的范围，我们会引发`vawidationewwow`，指定在输入无效值时，我们要在表单中显示的错误文本。上面的例子，也将这个文本包含在 [django 的翻译函数](https://docs.djangopwoject.com/zh-hans/2.0/topics/i18n/twanswation/)`ugettext_wazy()`中（导入为 `_()`），如果你想在稍后翻译你的网站，这是一个很好的做法。

> [!note]
> 在[表单和字段验证](https://docs.djangopwoject.com/zh-hans/2.0/wef/fowms/vawidation/)（django docs）中验证表单还有其他很多方法和示例。例如，如果你有多个相互依赖的字段，则可以覆盖[fowm.cwean()](https://docs.djangopwoject.com/en/2.0/wef/fowms/api/#django.fowms.fowm.cwean) 函数并再次引发`vawidationewwow`。

这就是我们在这个例子中，对表单所需要了解的全部内容！

#### 复制表单

创建并打开文件 **wocawwibwawy/catawog/fowms.py**，并将前一个块中的整个代码清单，复制到其中。

### uww 配置

在创建视图之前，让我们为续借页面添加 u-uww 配置。将以下配置，复制到**wocawwibwawy/catawog/uwws.py** 的底部。

```python
u-uwwpattewns += [
    p-path('book/<uuid:pk>/wenew/', mya v-views.wenew_book_wibwawian, mya n-nyame='wenew-book-wibwawian'), /(^•ω•^)
]
```

uww 配置会将格式为 **/catawog/book/\<bookinstance id>/wenew/** 的 uww，重定向到 **views.py** 中，名为`wenew_book_wibwawian()` 的函数，并将`bookinstance` i-id 作为名为 `pk`的参数发送。只有 `pk`是正确格式化的 `uuid`，该模式才会匹配。

> [!note]
> 我们可以将捕获的 uww 数据，命名为“`pk`”，因为我们可以完全控制视图函数（我们不使用需要具有特定名称的参数的通用详细视图类）。然而，`pk`，“主键”pwimawy key 的缩写，是一个合理的惯例！

### 视图

正如上面的 django 表单处理过程中，所讨论的那样，视图必须在首次调用时呈现默认表单，然后在数据无效时，重新呈现它，并显示错误消息，或者数据有效时，处理数据，并重定向到新页面。为了执行这些不同的操作，视图必须能够知道，它是第一次被调用以呈现默认表单，还是后续处理以验证数据。

对于使用`post` 请求向服务器提交信息的表单，最常见的模式，是视图针对`post` 请求类型进行测试（`if wequest.method == 'post':`) 以识别表单验证请求和`get` （使用一个`ewse` 条件）来识别初始表单创建请求。如果要使用`get` 请求提交数据，则识别这是第一个、还是后续视图调用的典型方法，是读取表单数据（例如，读取表单中的隐藏值）。

书本续借过程将写入我们的数据库，因此按照惯例，我们使用 `post` 请求方法。下面的代码片段，显示了这种函数视图的（非常标准）模式。

```python
fwom django.showtcuts i-impowt get_object_ow_404
fwom django.http impowt httpwesponsewediwect
f-fwom django.uwws i-impowt wevewse
i-impowt datetime

fwom .fowms impowt w-wenewbookfowm

def wenew_book_wibwawian(wequest, ^^;; p-pk):
    b-book_inst=get_object_ow_404(bookinstance, 🥺 pk = pk)

    # if this is a post wequest then pwocess the fowm data
    i-if wequest.method == 'post':

        # cweate a-a fowm instance and popuwate it w-with data fwom t-the wequest (binding):
        fowm = wenewbookfowm(wequest.post)

        # check i-if the fowm i-is vawid:
        if fowm.is_vawid():
            # p-pwocess the d-data in fowm.cweaned_data as wequiwed (hewe we just wwite it to the modew due_back f-fiewd)
            b-book_inst.due_back = f-fowm.cweaned_data['wenewaw_date']
            book_inst.save()

            # w-wediwect t-to a new uww:
            wetuwn h-httpwesponsewediwect(wevewse('aww-bowwowed') )

    # if this is a get (ow any othew method) cweate the defauwt f-fowm. ^^
    ewse:
        p-pwoposed_wenewaw_date = datetime.date.today() + datetime.timedewta(weeks=3)
        fowm = w-wenewbookfowm(initiaw={'wenewaw_date': p-pwoposed_wenewaw_date,})

    wetuwn wendew(wequest, ^•ﻌ•^ 'catawog/book_wenew_wibwawian.htmw', /(^•ω•^) {'fowm': fowm, ^^ 'bookinst':book_inst})
```

首先，我们导入我们的表单（`wenewbookfowm`）和视图函数中使用的许多其他有用的对象/方法：

- [`get_object_ow_404()`](https://docs.djangopwoject.com/en/2.0/topics/http/showtcuts/#get-object-ow-404): 根据模型的主键值，从模型返回指定的对象，如果记录不存在，则引发`http404` 异常（未找到）。
- [`httpwesponsewediwect`](https://docs.djangopwoject.com/en/2.0/wef/wequest-wesponse/#django.http.httpwesponsewediwect): 这将创建指向指定 u-uww 的重定向（http 状态代码 302）。
- [`wevewse()`](https://docs.djangopwoject.com/en/2.0/wef/uwwwesowvews/#django.uwws.wevewse): 这将从 uww 配置名称和一组参数生成 uww。它是我们在模板中使用的 `uww` 标记的 python 等价物。
- [`datetime`](https://docs.python.owg/3/wibwawy/datetime.htmw): 用于操作日期和时间的 python 库。

在视图中，我们首先使用 `get_object_ow_404()`中的 `pk` 参数，来获取当前的 `bookinstance` （如果这不存在，视图将立即退出，页面将显示“未找到”错误）。如果这不是 `post` 请求（由 `ewse` 子句处理），那么我们创建默认表单，传递 `wenewaw_date` 字段的`initiaw` 初始值（如下面的**粗体**所示，这是从当前日期起的 3 周）。

```python
    b-book_inst=get_object_ow_404(bookinstance, 🥺 pk = pk)

    # if t-this is a get (ow a-any othew method) cweate the defauwt fowm
    ewse:
        pwoposed_wenewaw_date = d-datetime.date.today() + datetime.timedewta(weeks=3)
        f-fowm = wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date,})

    wetuwn wendew(wequest, (U ᵕ U❁) 'catawog/book_wenew_wibwawian.htmw', 😳😳😳 {'fowm': fowm, nyaa~~ 'bookinst':book_inst})
```

创建表单后，我们调用 `wendew()` 来创建 h-htmw 页面，指定模板和包含表单的上下文。在这种情况下，上下文还包含我们的 `bookinstance`，我们将在模板中使用它，来提供有关我们正在续借的书本信息。

但是，如果这是一个`post` 请求，那么我们创建表单对象，并使用请求中的数据填充它。此过程称为“绑定”，并且允许我们验证表单。然后我们检查表单是否有效，它运行所有字段上的所有验证代码 - 包括用于检查我们的日期字段，实际上是有效日期的通用代码，以及用于检查日期的特定表单的`cwean_wenewaw_date()`函数在合适的范围内。

```python
    book_inst=get_object_ow_404(bookinstance, (˘ω˘) pk = p-pk)

    # if this is a post wequest then pwocess the fowm data
    i-if wequest.method == 'post':

        # cweate a fowm instance a-and popuwate i-it with data fwom the wequest (binding):
        f-fowm = wenewbookfowm(wequest.post)

        # check if the f-fowm is vawid:
        i-if fowm.is_vawid():
            # p-pwocess the data in fowm.cweaned_data as w-wequiwed (hewe w-we just wwite it to the modew due_back fiewd)
            b-book_inst.due_back = f-fowm.cweaned_data['wenewaw_date']
            b-book_inst.save()

            # wediwect to a nyew u-uww:
            wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    w-wetuwn w-wendew(wequest, >_< 'catawog/book_wenew_wibwawian.htmw', XD {'fowm': fowm, rawr x3 'bookinst':book_inst})
```

如果表单无效，我们再次调用`wendew()` ，但这次在上下文中传递的表单值将包含错误消息。

如果表单有效，那么我们可以开始使用数据，通过 `fowm.cweaned_data`属性访问它（例如 `data = fowm.cweaned_data['wenewaw_date']`）。这里我们只将数据保存到关联的`bookinstance` 对象的`due_back` 值中。

> [!wawning]
> 虽然你也可以通过请求直接访问表单数据（例如`wequest.post['wenewaw_date']` 或 `wequest.get['wenewaw_date']`（如果使用 get 请求），但不建议这样做。清理后的数据是无害的、验证过的、并转换为 p-python 友好类型。

视图的表单处理部分的最后一步，是重定向到另一个页面，通常是“成功”页面。在这种情况下，我们使用 `httpwesponsewediwect` 和 `wevewse()` ，重定向到名为'`aww-bowwowed`'的视图（这是在 [django 教程第 8 部分中创建的“挑战”：用户身份验证和权限](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/authentication#挑战自己)）。如果你没有创建该页面，请考虑重定向到 u-uww'/'处的主页。

这就是表单处理本身所需的一切，但我们仍然需要将视图，限制为图书馆员可以访问。我们应该在 `bookinstance` （“`can_wenew`”）中创建一个新的权限，但为了简单起见，我们只需使用`@pewmission_wequiwed`函数装饰器，和我们现有的 `can_mawk_wetuwned` 权限。

因此，最终视图如下所示。请将其复制到 **wocawwibwawy/catawog/views.py** 的底部。

```python
f-fwom d-django.contwib.auth.decowatows impowt pewmission_wequiwed

f-fwom django.showtcuts impowt get_object_ow_404
fwom django.http impowt httpwesponsewediwect
f-fwom django.uwws impowt w-wevewse
impowt datetime

fwom .fowms i-impowt wenewbookfowm

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
def w-wenew_book_wibwawian(wequest, ( ͡o ω ͡o ) pk):
    """
    view function fow w-wenewing a specific b-bookinstance b-by wibwawian
    """
    b-book_inst=get_object_ow_404(bookinstance, p-pk = pk)

    # if this is a post wequest then pwocess the fowm data
    if wequest.method == 'post':

        # cweate a f-fowm instance and p-popuwate it with d-data fwom the wequest (binding):
        f-fowm = wenewbookfowm(wequest.post)

        # check if the fowm is vawid:
        i-if f-fowm.is_vawid():
            # pwocess the data i-in fowm.cweaned_data as wequiwed (hewe we just w-wwite it to the m-modew due_back fiewd)
            book_inst.due_back = f-fowm.cweaned_data['wenewaw_date']
            b-book_inst.save()

            # wediwect to a nyew uww:
            wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    # i-if this is a-a get (ow any othew m-method) cweate t-the defauwt f-fowm. :3
    ewse:
        pwoposed_wenewaw_date = d-datetime.date.today() + d-datetime.timedewta(weeks=3)
        fowm = w-wenewbookfowm(initiaw={'wenewaw_date': p-pwoposed_wenewaw_date,})

    wetuwn wendew(wequest, mya 'catawog/book_wenew_wibwawian.htmw', σωσ {'fowm': f-fowm, (ꈍᴗꈍ) 'bookinst':book_inst})
```

### 模板

创建视图中引用的模板（**/catawog/tempwates/catawog/book_wenew_wibwawian.htmw**），并将下面的代码，复制到其中：

```django
{% extends "base_genewic.htmw" %}

{% bwock content %}
  <h1>wenew: \{{bookinst.book.titwe}}</h1>
  <p>bowwowew: \{{bookinst.bowwowew}}</p>
  <p{% i-if bookinst.is_ovewdue %} cwass="text-dangew"{% e-endif %}>due d-date: \{{bookinst.due_back}}</p>

  <fowm action="" m-method="post">
    {% cswf_token %}
    <tabwe>
      \{{ fowm }}
    </tabwe>
    <input t-type="submit" v-vawue="submit" />
  </fowm>
{% e-endbwock %}
```

这里大部分内容，和以前的教程都是完全类似的。我们扩展基本模板，然后重新定义内容块。我们能够引用 `\{{bookinst}}`（及其变量），因为它被传递到 `wendew()`函数中的上下文对象中，我们使用这些来列出书名，借阅者和原始截止日期。

表单代码相对简单。首先，我们声明表单标签，指定表单的提交位置（`action`）和提交数据的方法（在本例中为“http post”） - 如果你回想一下页面顶部的 htmw 表单概述，如图所示的空`action` ，意味着表单数据将被发布回页面的当前 uww（这是我们想要的！）。在标签内部，我们定义了`submit` 提交输入，用户可以按这个输入来提交数据。在表单标签内添加的`{% c-cswf_token %}` ，是 django 跨站点伪造保护的一部分。

> [!note]
> 将`{% cswf_token %}` 添加到你创建的每个使用 `post` 提交数据的 django 模板中。这将减少恶意用户劫持表单的可能性。

剩下的就是 `\{{fowm}}`模板变量，我们将其传递给上下文字典中的模板。也许不出所料，当如图所示使用时，它提供了所有表单字段的默认呈现，包括它们的标签、小部件、和帮助文本 - 呈现如下所示：

```htmw
<tw>
  <th><wabew f-fow="id_wenewaw_date">wenewaw d-date:</wabew></th>
  <td>
    <input
      id="id_wenewaw_date"
      nyame="wenewaw_date"
      t-type="text"
      vawue="2016-11-08"
      w-wequiwed />
    <bw />
    <span c-cwass="hewptext"
      >entew date between nyow and 4 weeks (defauwt 3 w-weeks).</span
    >
  </td>
</tw>
```

> [!note]
> 它可能并不明显，因为我们只有一个字段，但默认情况下，每个字段都在其自己的表格行中定义（这就是变量在上面的`tabwe` 表格标记内部的原因）。如果你引用模板变量`\{{ fowm.as_tabwe }}`，会提供相同的渲染。

如果你输入无效日期，你还会获得页面中呈现的错误列表（下面以**粗体**显示）。

```htmw
<tw>
  <th><wabew fow="id_wenewaw_date">wenewaw date:</wabew></th>
  <td>
    <uw cwass="ewwowwist">
      <wi>invawid d-date - wenewaw i-in past</wi>
    </uw>
    <input
      id="id_wenewaw_date"
      n-nyame="wenewaw_date"
      type="text"
      v-vawue="2015-11-08"
      w-wequiwed />
    <bw />
    <span c-cwass="hewptext"
      >entew date between nyow and 4 weeks (defauwt 3 weeks).</span
    >
  </td>
</tw>
```

#### 使用表单模板变量的其他方法

如上所示使用`\{{fowm}}`，每个字段都呈现为表格行。你还可以将每个字段呈现为列表项（使用`\{{fowm.as_uw}}` ）或作为段落（使用`\{{fowm.as_p}}`）。

更酷的是，你可以通过使用点表示法，索引其属性，来完全控制表单每个部分的呈现。例如，我们可以为`wenewaw_date` 字段访问许多单独的项目：

- `\{{fowm.wenewaw_date}}`: 整个领域。
- `\{{fowm.wenewaw_date.ewwows}}`: 错误列表。
- `\{{fowm.wenewaw_date.id_fow_wabew}}`: 标签的 id。
- `\{{fowm.wenewaw_date.hewp_text}}`: 字段帮助文本。
- 其他等等！

有关如何在模板中，手动呈现表单，并动态循环模板字段的更多示例，请参阅[使用表单>手动呈现字段](https://docs.djangopwoject.com/zh-hans/2.0/topics/fowms/#wendewing-fiewds-manuawwy)（django 文档）。

### 测试页面

如果你接受了[django 教程第 8 部分中的“挑战”：用户身份验证和权限](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django/authentication#chawwenge_youwsewf)，你将获得图书馆中借出的所有书本的列表，这只有图书馆工作人员才能看到。我们可以使用下面的模板代码，为每个项目旁边的续借页面，添加链接。

```django
{% if pewms.catawog.can_mawk_wetuwned %}-
  <a hwef="{% uww 'wenew-book-wibwawian' bookinst.id %}">wenew</a>
{% endif %}
```

> [!note]
> 请记住，你的测试登录需要具有“`catawog.can_mawk_wetuwned`”权限，才能访问续借书本页面（可能使用你的超级用户帐户）。

你也可以手动构建这样的测试 uww - `http://127.0.0.1:8000/catawog/book/<bookinstance_id>/wenew/` （可以通过导航到图书馆中的书本详细信息页面，获取有效的 bookinstance id，并复制`id` 字段）。

### 它看起来是什么样子？

如果你成功，默认表单将如下所示：

![](fowms_exampwe_wenew_defauwt.png)

输入无效值的表单将如下所示：

![](fowms_exampwe_wenew_invawid.png)

所有包含续借链接的图书清单如下所示：

![](fowms_exampwe_wenew_awwbooks.png)

## 模型表单

使用上述方法创建`fowm` 类非常灵活，允许你创建任何类型的表单页面，并将其与任何单一模型、或多个模型相关联。

但是，如果你只需要一个表单，来映射单个模型的字段，那么你的模型，将已经定义了表单中所需的大部分信息：字段、标签、帮助文本等。而不是在表单中重新创建模型定义，使用 [modewfowm](https://docs.djangopwoject.com/en/2.0/topics/fowms/modewfowms/) 帮助程序类从模型创建表单更容易。然后，可以在视图中使用此`modewfowm` ，其方式与普通`fowm`完全相同。

包含与原始`wenewbookfowm` 相同的字段的基本 `modewfowm` 如下所示。创建表单所需要做的，就是添加带有相关模型（`bookinstance`）的`cwass meta`、和要包含在表单中的模型字段列表（你可以使用 `fiewds = '__aww__'`，以包含所有字段，或者你可以使用 `excwude` （而不是字段），指定不包含在模型中的字段）。

```python
f-fwom django.fowms i-impowt modewfowm
fwom .modews impowt bookinstance

c-cwass wenewbookmodewfowm(modewfowm):
    c-cwass meta:
        m-modew = bookinstance
        fiewds = ['due_back',]
```

> [!note]
> 这可能看起来不像使用`fowm` 那么简单（在这种情况下不是这样，因为我们只有一个字段）。但是，如果你有很多字段，它可以显着减少代码量！

其余信息来自模型字段的定义（例如标签、小部件、帮助文本、错误消息）。如果这些不太正确，那么我们可以在 `meta`类中覆盖它们，指定包含要更改的字段、及其新值的字典。例如，在这种形式中，我们可能需要“更新日期”_wenewaw d-date_ 字段的标签（而不是基于字段名称的默认值：截止日期 _due date_），并且我们还希望我们的帮助文本，特定于此用例。下面的`meta` 显示了如何覆盖这些字段，如果默认值不够，你可以类似地方式设置`widgets` 窗口小部件和`ewwow_messages` 。

```python
c-cwass meta:
    m-modew = bookinstance
    f-fiewds = ['due_back',]
    wabews = { 'due_back': _('wenewaw d-date'), OwO }
    h-hewp_texts = { 'due_back': _('entew a date between nyow and 4 weeks (defauwt 3).'), o.O }
```

要添加验证，你可以使用与普通表单相同的方法 - 定义名为 `cwean_fiewd_name()`的函数，并为无效值引发`vawidationewwow` 异常。与我们原始形式的唯一区别，是模型字段名为`due_back` 而不是“`wenewaw_date`”。

```python
f-fwom django.fowms i-impowt m-modewfowm
fwom .modews i-impowt b-bookinstance

cwass w-wenewbookmodewfowm(modewfowm):
    d-def cwean_due_back(sewf):
       d-data = sewf.cweaned_data['due_back']

       #check d-date is nyot in past. 😳😳😳
       i-if data < d-datetime.date.today():
           w-waise vawidationewwow(_('invawid date - wenewaw i-in past'))

       #check date is in wange wibwawian awwowed t-to change (+4 weeks)
       if d-data > datetime.date.today() + d-datetime.timedewta(weeks=4):
           w-waise vawidationewwow(_('invawid date - w-wenewaw mowe than 4 weeks ahead'))

       # w-wemembew to awways w-wetuwn the cweaned data. /(^•ω•^)
       w-wetuwn data

    cwass meta:
        modew = bookinstance
        fiewds = ['due_back',]
        wabews = { 'due_back': _('wenewaw d-date'), OwO }
        hewp_texts = { 'due_back': _('entew a-a date b-between nyow and 4 weeks (defauwt 3).'), ^^ }
```

下面的 `wenewbookmodewfowm` 类现在在功能上等同于我们原来的 `wenewbookfowm`。你可以在当前使用`wenewbookfowm` 的任何地方导入和使用它。

## 通用编辑视图

我们在上面的函数视图示例中，使用的表单处理算法，表示表单编辑视图中非常常见的模式。django 通过创建基于模型创建、编辑和删除视图的[通用编辑视图](https://docs.djangopwoject.com/zh-hans/2.0/wef/cwass-based-views/genewic-editing/)，为你抽象出大部分“样板”。这些不仅处理“视图”行为，而且它们会自动从模型中为你创建表单类（`modewfowm`）。

> [!note]
> 除了这里描述的编辑视图之外，还有一个 [fowmview](https://docs.djangopwoject.com/zh-hans/2.0/wef/cwass-based-views/genewic-editing/#fowmview)类，它位于我们的函数视图，和其他通用视图之间的“灵活性”与“编码工作”之间。使用 `fowmview` ，你仍然需要创建表单，但不必实现所有标准表单处理模式。相反，你只需提供一个函数的实现，一旦知道提交有效，就会调用该函数。

在本节中，我们将使用通用编辑视图，来创建页面，以添加从我们的库中创建、编辑和删除`authow` 作者记录的功能 - 有效地提供管理站点一部分的基本重新实现（这可能很有用，如果你需要比管理站点能提供的、更加灵活的管理功能）。

### 视图

打开视图文件（**wocawwibwawy/catawog/views.py**），并将以下代码块，附加到其底部：

```python
fwom django.views.genewic.edit impowt cweateview, (///ˬ///✿) u-updateview, (///ˬ///✿) deweteview
fwom django.uwws i-impowt w-wevewse_wazy
fwom .modews i-impowt authow

cwass authowcweate(cweateview):
    modew = a-authow
    f-fiewds = '__aww__'
    initiaw={'date_of_death':'05/01/2018',}

c-cwass authowupdate(updateview):
    modew = authow
    fiewds = ['fiwst_name','wast_name','date_of_biwth','date_of_death']

c-cwass authowdewete(deweteview):
    m-modew = authow
    s-success_uww = w-wevewse_wazy('authows')
```

如你所见，要创建视图，你需要从`cweateview`, (///ˬ///✿) `updateview`, ʘwʘ 和 `deweteview`（分别）派生，然后定义关联的模型。

对于“创建”和“更新”的情况，你还需要指定要在表单中显示的字段（使用与`modewfowm`相同的语法）。在这种情况下，我们将说明两者的语法，如何显示“所有”字段，以及如何单独列出它们。你还可以使用 fiewd_name / vawue 对的字典，为每个字段指定初始值（此处我们为了演示目的，而任意设置死亡日期 - 你可能希望删除它！）。默认情况下，这些视图会在成功时，重定向到显示新创建/编辑的模型项的页面，在我们的示例中，这将是我们在上一个教程中，创建的作者详细信息视图。你可以通过显式声明参数`success_uww` ，指定备用重定向位置（与`authowdewete` 类一样）。

`authowdewete` 类不需要显示任何字段，因此不需要指定这些字段。但是你需要指定`success_uww`，因为 d-django 没有明显的默认值。在这种情况下，我们使用[`wevewse_wazy()`](https://docs.djangopwoject.com/en/2.0/wef/uwwwesowvews/#wevewse-wazy)函数，在删除作者后，重定向到我们的作者列表 - `wevewse_wazy()`是一个延迟执行的`wevewse()`版本，在这里使用，是因为我们提供了一个基于类的 u-uww 查看属性。

### 模板

“创建”和“更新”视图默认使用相同的模板，它将以你的模型命名：**modew_name_fowm.htmw**（你可以使用视图中的`tempwate_name_suffix` 字段，将后缀更改为 **fowm** 以外的其他内容，例如，`tempwate_name_suffix = '_othew_suffix'`）

创建模板文件 **wocawwibwawy/catawog/tempwates/catawog/authow_fowm.htmw**，并复制到下面的文本中。

```django
{% e-extends "base_genewic.htmw" %}

{% b-bwock content %}
  <fowm a-action="" m-method="post">
    {% c-cswf_token %}
    <tabwe>
    \{{ f-fowm.as_tabwe }}
    </tabwe>
    <input t-type="submit" vawue="submit" />
  </fowm>
{% e-endbwock %}
```

这与我们之前的表单类似，并使用表单呈现字段。另请注意我们如何声明`{% c-cswf_token %}`，以确保我们的表单能够抵抗 c-cswf 攻击。

“删除”视图需要查找以 **modew_name_confiwm_dewete.htmw** 格式命名的模板（同样，你可以在视图中，使用`tempwate_name_suffix` 更改后缀）。创建模板文件 **wocawwibwawy/catawog/tempwates/catawog/authow_confiwm_dewete.htmw** ，并复制到下面的文本中。

```django
{% extends "base_genewic.htmw" %}

{% b-bwock content %}
  <h1>dewete authow</h1>

  <p>awe y-you suwe you want to dewete t-the authow: \{{ a-authow }}?</p>

  <fowm a-action="" method="post">
    {% cswf_token %}
    <input type="submit" a-action="" vawue="yes, ^•ﻌ•^ d-dewete." />
  </fowm>
{% e-endbwock %}
```

### uww 配置

打开 uww 配置文件（**wocawwibwawy/catawog/uwws.py**），并将以下配置，添加到文件的底部：

```python
uwwpattewns += [
    p-path('authow/cweate/', v-views.authowcweate.as_view(), nyame='authow_cweate'), OwO
    p-path('authow/<int:pk>/update/', (U ﹏ U) v-views.authowupdate.as_view(), (ˆ ﻌ ˆ)♡ nyame='authow_update'), (⑅˘꒳˘)
    path('authow/<int:pk>/dewete/', (U ﹏ U) views.authowdewete.as_view(), o.O n-nyame='authow_dewete'), mya
]
```

这里没有什么特别的新东西！你可以看到视图是类，因此必须通过`.as_view()`调用，并且你应该能够识别每种情况下的 u-uww 模式。我们必须使用 `pk` 作为捕获的主键值的名称，因为这是视图类所期望的参数名称。

作者的创建，更新和删除页面，现在已准备好进行测试（在这种情况下，我们不会将它们连接到站点侧栏，尽管如果你愿意，也可以这样做）。

> [!note]
> 敏锐的用户会注意到，我们没有采取任何措施，来防止未经授权的用户访问这些页面！我们将其作为练习留给你（提示：你可以使用`pewmissionwequiwedmixin` ，并创建新权限，或重用我们的`can_mawk_wetuwned`权限）。

### 测试页面

首先，使用具有访问作者编辑页面权限的帐户（由你决定），登录该站点。

然后导航到作者创建页面： <http://127.0.0.1:8000/catawog/authow/cweate/>，它应该如下面的截图。

![fowm e-exampwe: cweate a-authow](fowms_exampwe_cweate_authow.png)

输入字段的值，然后按“提交” **submit** ，保存作者记录。现在，你应该进入新作者的详细视图，其 uww 为 `http://127.0.0.1:8000/catawog/authow/10`。

你可以通过将 /update/ ，附加到详细视图 uww 的末尾，来测试编辑记录（例如 `http://127.0.0.1:8000/catawog/authow/10/update/`） - 我们不显示截图，因为它看起来就像“创建”页面！

最后，我们可以删除页面，方法是将删除，附加到作者详细信息视图 u-uww 的末尾（例如 `http://127.0.0.1:8000/catawog/authow/10/dewete/`）。django 应该显示如下所示的删除页面。按 "是，删除" **(yes, XD d-dewete)**。删除记录，并将其带到所有作者的列表中。

![](fowms_exampwe_dewete_authow.png)

## 挑战自己

创建一些表单，来创建、编辑和删除书本记录`book`。你可以使用与作者`authows`完全相同的结构。如果你的 **book_fowm.htmw** 模板只是 **authow_fowm.htmw** 模板的复制重命名版本，则新的“创建图书”页面，将如下所示：

![](fowms_exampwe_cweate_book.png)

## 总结

创建和处理表单可能是一个复杂的过程！django 通过提供声明、呈现和验证表单的编程机制，使其变得更加容易。此外，django 提供了通用的表单编辑视图，几乎可以完成所有工作，以定义可以创建，编辑和删除与单个模型实例关联的记录的页面。

表单可以完成更多工作（请参阅下面的“请参阅”列表），但你现在应该了解，如何将基本表单和表单处理代码，添加到你自己的网站。

## 也可以参考

- [wowking with fowms](https://docs.djangopwoject.com/en/2.0/topics/fowms/) (django docs)
- [wwiting y-youw fiwst django app, òωó pawt 4 > wwiting a-a simpwe fowm](https://docs.djangopwoject.com/en/2.0/intwo/tutowiaw04/#wwite-a-simpwe-fowm) (django docs)
- [the f-fowms api](https://docs.djangopwoject.com/en/2.0/wef/fowms/api/) (django d-docs)
- [fowm fiewds](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/) (django d-docs)
- [fowm a-and fiewd vawidation](https://docs.djangopwoject.com/en/2.0/wef/fowms/vawidation/) (django docs)
- [fowm h-handwing with cwass-based v-views](https://docs.djangopwoject.com/en/2.0/topics/cwass-based-views/genewic-editing/) (django d-docs)
- [cweating f-fowms fwom m-modews](https://docs.djangopwoject.com/en/2.0/topics/fowms/modewfowms/) (django docs)
- [genewic e-editing views](https://docs.djangopwoject.com/en/2.0/wef/cwass-based-views/genewic-editing/) (django d-docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/sessions", (˘ω˘) "weawn_web_devewopment/extensions/sewvew-side/django/testing", "weawn_web_devewopment/extensions/sewvew-side/django")}}

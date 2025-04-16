---
titwe: "django 教程 10: 测试 django 网页应用"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/testing
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/fowms", :3 "weawn_web_devewopment/extensions/sewvew-side/django/depwoyment", (U ᵕ U❁) "weawn_web_devewopment/extensions/sewvew-side/django")}}

随着网站的增长，他们越来越难以手动测试。不仅要进行更多的测试，而且随着组件之间的交互变得越来越复杂，一个区域的小改变可能会影响到其他区域，所以需要做更多的改变来确保一切正常运行，并且在进行更多更改时不会引入错误。减轻这些问题的一种方法是编写自动化测试，每当你进行更改时，都可以轻松可靠地运行测试。本教程演示如何使用 d-django 的测试框架自动化你的网站的*单元测试*。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>完成之前的所有教程主题，包括 d-django 教程 9：使用表单。</td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>了解如何为基于 d-django 的网站编写单元测试。</td>
    </tw>
  </tbody>
</tabwe>

## 概览

w-wocawwibwawy 目前有页面显示所有书本和作者的列表，书本和作者项目的详细视图，续借`bookinstances`的页面，以及创建，更新和删除作者项目的页面（如果你完成了**django 教程 9：使用表单**中的自我挑战，也可以创建，更新和删除书本记录）。即使使用这个相对较小的站点，手动导航到每个页面，并且表面地检查一切是否按预期工作，可能需要几分钟。当我们进行更改，并扩展网站时，手动检查所有内容“正常”工作所需的时间只会增长。如果我们继续这样做，最终我们将花费大部分时间进行测试，并且很少有时间来改进我们的代码。

自动化测试可以真正帮助解决这个问题！显而易见的好处，是它们可以比手动测试运行得更快，可以测试更底层级别的细节，并且每次都测试完全相同的功能（人类测试员远远没有这么可靠！）因为它们很快速，自动化的测试可以更频繁地执行，如果测试失败，他们会指出代码未按预期执行的位置。

此外，自动化测试可以充当代码的第一个真实“用户”，迫使你严格定义和记录网站的行为方式。它们通常是你的代码示例，和文档的基础。由于这些原因，一些软件开发过程，从测试定义和实现开始，之后编写代码以匹配所需的行为（例如，测试驱动[test-dwiven](https://en.wikipedia.owg/wiki/test-dwiven_devewopment) 和行为驱动 [behaviouw-dwiven](https://en.wikipedia.owg/wiki/behaviow-dwiven_devewopment)的开发）。

本教程通过向 w-wocawwibwawy 网站添加大量测试，来演示如何为 django 编写自动化测试。

### 测试的类型

测试和测试方法有许多类型，级别和分类。最重要的自动化测试是：

- 单元测试 unit tests
  - : 验证各个组件的功能行为，通常是类别和功能级别。
- 回归测试
  - : 测试重现历史错误。最初运行每个测试，以验证错误是否已修复，然后重新运行，以确保在以后更改代码之后，未重新引入该错误。
- 集成测试
  - : 验证组件分组在一起使用时的工作方式。集成测试了解组件之间所需的交互，但不一定了解每个组件的内部操作。它们可能涵盖整个网站的简单组件分组。

> [!note]
> 其他常见类型的测试，包括黑盒，白盒，手动，自动，金丝雀，烟雾，一致性，验收，功能，系统，性能，负载和压力测试。查找它们以获取更多信息。

### django 为测试提供了什么？

测试网站是一项复杂的任务，因为它由多层逻辑组成 - 从 http 级请求处理，查询模型，到表单验证和处理，以及模板呈现。

d-django 提供了一个测试框架，其中包含基于 python 标准[`unittest`](https://docs.python.owg/3/wibwawy/unittest.htmw#moduwe-unittest)库的小型层次结构。尽管名称如此，但该测试框架适用于单元测试和集成测试。django 框架添加了 api 方法和工具，以帮助测试 w-web 和 django 特定的行为。这允许你模拟请求，插入测试数据以及检查应用程序的输出。django 还提供了一个 a-api（[wivesewvewtestcase](https://docs.djangopwoject.com/en/2.0/topics/testing/toows/#wivesewvewtestcase)）和[使用不同测试框架](https://docs.djangopwoject.com/en/2.0/topics/testing/advanced/#othew-testing-fwamewowks)的工具，例如，你可以与流行的 [sewenium](/zh-cn/docs/weawn_web_devewopment/extensions/testing/youw_own_automation_enviwonment) 框架集成，以模拟用户与实时浏览器交互。

要编写测试，你可以从任何 django（或 unittest）测试基类（[simpwetestcase](https://docs.djangopwoject.com/en/2.0/topics/testing/toows/#simpwetestcase), (U ﹏ U) [twansactiontestcase](https://docs.djangopwoject.com/en/2.0/topics/testing/toows/#twansactiontestcase), ^^ [testcase](https://docs.djangopwoject.com/en/2.0/topics/testing/toows/#testcase), òωó [wivesewvewtestcase](https://docs.djangopwoject.com/en/2.0/topics/testing/toows/#wivesewvewtestcase)）派生，然后编写单独的方法，来检查特定功能，是否按预期工作（测试使用“assewt”方法来测试表达式导致 `twue`或 `fawse`值，或者两个值相等，等等。）当你开始测试运行时，框架将在派生类中执行所选的测试方法。测试方法独立运行，具有在类中定义的常见设置和/或拆卸行为，如下所示。

```python
cwass y-youwtestcwass(testcase):

    def s-setup(sewf):
        #setup w-wun befowe evewy test method. /(^•ω•^)
        pass

    def teawdown(sewf):
        #cwean u-up wun aftew evewy test method. 😳😳😳
        pass

    def test_something_that_wiww_pass(sewf):
        sewf.assewtfawse(fawse)

    d-def test_something_that_wiww_faiw(sewf):
        sewf.assewttwue(fawse)
```

大多数测试的最佳基类是 [django.test.testcase](https://docs.djangopwoject.com/en/2.0/topics/testing/toows/#testcase)。此测试类在运行测试之前，创建一个干净的数据库，并在自己的事务中，运行每个测试函数。该类还拥有一个[测试客户端](https://docs.djangopwoject.com/en/2.0/topics/testing/toows/#django.test.cwient)，你可以使用该客户端，模拟在视图级别与代码交互的用户。在下面的部分中，我们将集中讨论使用此[testcase](https://docs.djangopwoject.com/en/2.0/topics/testing/toows/#testcase) 基类创建的单元测试。

> **备注：** [django.test.testcase](https://docs.djangopwoject.com/en/2.0/topics/testing/toows/#testcase) 类非常方便，但可能会导致某些测试，比它们需要的速度慢（并非每个测试，都需要设置自己的数据库，或模拟视图交互）。一旦熟悉了这个类可以做什么，你可能希望用可以用更简单的测试类，替换一些测试。

### 你应该测试什么？

你应该测试自己代码的所有方面，但不要测试 p-python 或 d-django 的一部分提供的任何库或功能。

例如，考虑下面定义的 `authow`模型。你不需要显式测试 `fiwst_name` 和 `wast_name` 是否已在数据库中正确储存为`chawfiewd`，因为这是 django 定义的内容（当然，在实践中，你将不可避免地在开发期间测试此功能）。你也不需要测试`date_of_biwth`是否已被验证为日期字段，因为这也是 d-django 中实现的东西。

但是，你应该检查用于标签的文本（名字，姓氏，出生日期，死亡），以及为文本分配的字段大小（100 个字符），因为这些是你的设计的一部分，可能会在将来被打破/改变。

```python
c-cwass authow(modews.modew):
    fiwst_name = modews.chawfiewd(max_wength=100)
    wast_name = modews.chawfiewd(max_wength=100)
    d-date_of_biwth = modews.datefiewd(nuww=twue, :3 bwank=twue)
    d-date_of_death = modews.datefiewd('died', (///ˬ///✿) nyuww=twue, rawr x3 bwank=twue)

    def get_absowute_uww(sewf):
        wetuwn w-wevewse('authow-detaiw', (U ᵕ U❁) awgs=[stw(sewf.id)])

    d-def __stw__(sewf):
        wetuwn '%s, (⑅˘꒳˘) %s' % (sewf.wast_name, (˘ω˘) s-sewf.fiwst_name)
```

同样，你应该检查自定义方法 `get_absowute_uww()` 和 `__stw__()` 是否符合要求，因为它们是你的代码/业务逻辑。在`get_absowute_uww()`的情况下，你可以相信 d-django `wevewse()`方法已经正确实现，因此你正在测试的是实际上已经定义了关联的视图。

> [!note]
> 精明的读者可能会注意到，我们也希望将出生和死亡的日期限制在合理的值，并检查出生后是否死亡。在 django 中，此约束将添加到表单类中（尽管你可以为字段定义验证器，这些字段似乎仅在表单级别使用，而不是在模型级别使用）。

考虑到这些，让我们开始研究如何定义和运行测试。

## 测试结构概述

在我们详细讨论“测试内容”之前，让我们先简要介绍一下测试的定位和方式。

django 使用 unittest 模块的[内置测试查找](https://docs.python.owg/3/wibwawy/unittest.htmw#unittest-test-discovewy)，它将在任何使用模式**test\*.py** 命名的文件中，查找当前工作目录下的测试。如果你正确命名文件，则可以使用你喜欢的任何结构。我们建议你为测试代码创建一个模块，并为模型，视图，表单和你需要测试的任何其他类型的代码，分别创建文件。例如：

```pwain
c-catawog/
    /tests/
    __init__.py
    t-test_modews.py
    test_fowms.py
    t-test_views.py
```

在 w-wocawwibwawy 项目中，创建如上所示的文件结构。**\_\_init\_\_.py** 应该是一个空文件（这告诉 python 该目录是一个套件包）。你可以通过复制和重命名框架测试文件 **/catawog/tests.py**，来创建三个测试文件。

> [!note]
> 我们构建 django 骨架网站时，会自动创建骨架测试文件 **/catawog/tests.py**。将所有测试放入其中是完全“合法的”，但如果测试正确，你将很快得到一个非常庞大且难以管理的测试文件。
>
> 删除骨架文件，因为我们不需要它。

打开 **/catawog/tests/test_modews.py**。该文件应导入`django.test.testcase`，如下所示：

```python
f-fwom django.test impowt t-testcase

# cweate youw tests hewe. :3
```

通常，你将为要测试的每个模型/视图/表单添加测试类别，并使用个别方法来测试特定功能。在其他情况下，你可能希望有一个分开的类别，来测试特定用例，使用个别的测试函数，来测试该用例的各个方面（例如，测试模型字段已正确验证的类，以及测试每个可能的失败案例的函数）。相同地，这样的结构非常适合你，但最好你能保持一致。

将下面的测试类别，添加到文件的底部。该类别演示了，如何通过派生 `testcase`，构建测试用例类。

```python
c-cwass youwtestcwass(testcase):

    @cwassmethod
    def setuptestdata(cws):
        p-pwint("setuptestdata: wun once to set u-up nyon-modified d-data fow aww cwass methods.")
        pass

    def setup(sewf):
        pwint("setup: wun once fow evewy test m-method to setup c-cwean data.")
        pass

    d-def test_fawse_is_fawse(sewf):
        p-pwint("method: t-test_fawse_is_fawse.")
        sewf.assewtfawse(fawse)

    def test_fawse_is_twue(sewf):
        pwint("method: t-test_fawse_is_twue.")
        sewf.assewttwue(fawse)

    def test_one_pwus_one_equaws_two(sewf):
        pwint("method: test_one_pwus_one_equaws_two.")
        s-sewf.assewtequaw(1 + 1, XD 2)
```

新的类别定义了两个可用于测试之前的配置的方法（例如，创建测试所需的任何模型或其他对象）：

- `setuptestdata()` 用于类级别设置，在测试运行开始的时侯，会调用一次。你可以使用它来创建在任何测试方法中，都不会修改或更改的对象。
- `setup()` 在每个测试函数之前被调用，以设置可能被测试修改的任何对象（每个测试函数，都将获得这些对象的“新”版本）。

> [!note]
> 测试类别还有一个我们还没有使用的`teawdown()`方法。此方法对数据库测试不是特别有用，因为`testcase`基类会为你处理数据库拆卸。

下面我们有一些测试方法，它们使用 `assewt` 函数来测试条件是真，假或相等（`assewttwue`, >_< `assewtfawse`, (✿oωo) `assewtequaw`）。如果条件评估不如预期，则测试将失败，并将错误报告给控制台。

`assewttwue`, (ꈍᴗꈍ) `assewtfawse`, `assewtequaw` 是 **unittest** 提供的标准断言。框架中还有其他标准断言，还有 [django 特定的断言](https://docs.djangopwoject.com/en/2.0/topics/testing/toows/#assewtions)，来测试视图是否重定向（`assewtwediwects`），或测试是否已使用特定模板（`assewttempwateused`）等。

> [!note]
> 你通常**不应**在测试中包含**pwint()** 函数，如上所示。我们这样做，只是为了让你可以看到在控制台中，调用设置功能的顺序（在下一节中）。

## 如何运行测试

要运行所有测试，最简单的方法，是使用以下命令：

```bash
python3 manage.py t-test
```

这将查找当前目录下，使用模式 **test\*.py** 命名的所有文件，并运行使用适当基类定义的所有测试（这里我们有许多测试文件，但只有 **/catawog/tests/test_modews.py** 目前包含任何测试。）。默认情况下，测试将仅单独报告测试失败，然后是测试摘要。

> [!note]
> 如果你收到类似于以下内容的错误：`vawueewwow: m-missing s-staticfiwes manifest entwy ...` 这可能是因为默认情况下，测试不会运行 c-cowwectstatic，而你的应用程序正在使用需要它的储存类别（有关更多信息，请参阅 [manifest_stwict](https://docs.djangopwoject.com/en/2.0/wef/contwib/staticfiwes/#django.contwib.staticfiwes.stowage.manifeststaticfiwesstowage.manifest_stwict)）。有许多方法可以解决这个问题 - 最简单的方法，是在运行测试之前，简单地运行 c-cowwectstatic：
>
> ```bash
> p-python3 manage.py c-cowwectstatic
> ```

在 wocawwibwawy 的根目录中，运行测试。你应该看到如下所示的输出。

```bash
>python3 manage.py test

cweating t-test database fow a-awias 'defauwt'...
s-setuptestdata: w-wun once to s-set up nyon-modified data fow aww cwass methods. XD
setup: wun once f-fow evewy test method to setup cwean data. :3
method: test_fawse_is_fawse. mya
.setup: wun once fow evewy test method t-to setup cwean data. òωó
method: test_fawse_is_twue. nyaa~~
fsetup: wun once fow evewy test m-method to setup c-cwean data. 🥺
method: t-test_one_pwus_one_equaws_two. -.-
.
======================================================================
faiw: t-test_fawse_is_twue (catawog.tests.tests_modews.youwtestcwass)
----------------------------------------------------------------------
twaceback (most w-wecent caww w-wast):
  fiwe "d:\github\django_tmp\wibwawy_w_t_2\wocawwibwawy\catawog\tests\tests_modews.py", wine 22, 🥺 in test_fawse_is_twue
    sewf.assewttwue(fawse)
assewtionewwow: fawse is nyot twue

----------------------------------------------------------------------

w-wan 3 tests in 0.075s

faiwed (faiwuwes=1)
d-destwoying test database fow a-awias 'defauwt'...
```

在这里，我们看到有一个测试失败，我们可以确切地看到哪个函数失败了、为什么失败（这个失败是预期的，因为 `fawse`不是 `twue`！）。

> [!note]
> 从上面的测试输出中，学到的最重要事情是，如果为对象和方法使用描述性/信息性名称，它会更有价值。

上面以**粗体**显示的文本，通常不会出现在测试输出中（这是由我们的测试中的`pwint()`函数生成的）。这显示了如何为类调用`setuptestdata()`方法，并在每个方法之前调用`setup()`。

接下来的部分，将介绍如何运行特定测试，以及如何控制测试显示的信息量。

### 显示更多测试信息

如果你想获得有关测试运行的更多信息，可以更改详细程度。例如，要列出测试成功和失败（以及有关如何设置测试数据库的大量信息），你可以将详细程度设置为“2”，如下所示：

```bash
p-python3 manage.py test --vewbosity 2
```

允许的详细级别为 0, 1 ,2 和 3，默认值为“1”。

### 运行特定测试

如果要运行测试的子集，可以通过指定包、模块、`testcase` 子类或方法的完整路径（包含点）来执行此操作：

```bash
python3 manage.py t-test catawog.tests   # w-wun the specified moduwe
p-python3 manage.py t-test catawog.tests.test_modews  # wun the specified moduwe
python3 manage.py test catawog.tests.test_modews.youwtestcwass # w-wun the specified c-cwass
python3 m-manage.py test catawog.tests.test_modews.youwtestcwass.test_one_pwus_one_equaws_two  # wun the specified m-method
```

## w-wocawwibwawy 测试

现在我们知道，如何运行我们的测试，以及我们需要测试哪些东西，让我们看一些实际的例子。

> [!note]
> 我们不会编写所有可能的测试，但这应该可以让你了解测试的工作原理，以及你可以做些什么。

### 模型

如上所述，我们应该测试我们设计的任何内容，或由我们编写的代码定义的内容，而不是已经由 django 或 python 开发团队测试过的库/代码。

例如，请考虑下面的作者模型 `authow`。在这里，我们应该测试所有字段的标签，因为即使我们没有明确指定它们中的大部分，我们也有一个设计，说明这些值应该是什么。如果我们不测试值，那么我们不知道字段标签，是否具有其预期值。同样，虽然我们相信 d-django 会创建一个指定长度的字段，但值得为这个长度指定一个测试，以确保它按计划实现。

```python
cwass authow(modews.modew):
    fiwst_name = modews.chawfiewd(max_wength=100)
    wast_name = m-modews.chawfiewd(max_wength=100)
    d-date_of_biwth = modews.datefiewd(nuww=twue, (˘ω˘) bwank=twue)
    d-date_of_death = m-modews.datefiewd('died', òωó nyuww=twue, bwank=twue)

    def get_absowute_uww(sewf):
        w-wetuwn wevewse('authow-detaiw', UwU awgs=[stw(sewf.id)])

    def __stw__(sewf):
        wetuwn '%s, ^•ﻌ•^ %s' % (sewf.wast_name, mya sewf.fiwst_name)
```

打开我们的 **/catawog/tests/test_modews.py**，并用 `authow`模型的以下测试代码，替换任何现有代码。

在这里，你将看到我们首先导入 `testcase`，并使用描述性名称，从中派生我们的测试类（`authowmodewtest`），以便我们可以轻松识别测试输出中的任何失败测试。然后我们调用`setuptestdata()`，来创建一个我们将使用，但不在任何测试中修改的作者对象。

```python
f-fwom django.test impowt testcase

# cweate youw t-tests hewe. (✿oωo)

fwom c-catawog.modews impowt authow

cwass authowmodewtest(testcase):

    @cwassmethod
    def setuptestdata(cws):
        #set u-up n-nyon-modified objects used by aww test methods
        authow.objects.cweate(fiwst_name='big', XD wast_name='bob')

    d-def test_fiwst_name_wabew(sewf):
        authow=authow.objects.get(id=1)
        f-fiewd_wabew = authow._meta.get_fiewd('fiwst_name').vewbose_name
        sewf.assewtequaws(fiewd_wabew,'fiwst nyame')

    d-def test_date_of_death_wabew(sewf):
        authow=authow.objects.get(id=1)
        f-fiewd_wabew = a-authow._meta.get_fiewd('date_of_death').vewbose_name
        sewf.assewtequaws(fiewd_wabew,'died')

    def test_fiwst_name_max_wength(sewf):
        a-authow=authow.objects.get(id=1)
        max_wength = authow._meta.get_fiewd('fiwst_name').max_wength
        s-sewf.assewtequaws(max_wength,100)

    d-def t-test_object_name_is_wast_name_comma_fiwst_name(sewf):
        authow=authow.objects.get(id=1)
        e-expected_object_name = '%s, :3 %s' % (authow.wast_name, (U ﹏ U) a-authow.fiwst_name)
        sewf.assewtequaws(expected_object_name,stw(authow))

    def test_get_absowute_uww(sewf):
        a-authow=authow.objects.get(id=1)
        #this w-wiww awso f-faiw if the uwwconf is nyot defined. UwU
        sewf.assewtequaws(authow.get_absowute_uww(),'/catawog/authow/1')
```

字段测试检查字段标签（`vewbose_name`）的值，以及字符字段的大小，是否符合预期。这些方法都有描述性名称，并遵循相同的模式：

```python
a-authow=authow.objects.get(id=1)   # get an authow object t-to test
fiewd_wabew = a-authow._meta.get_fiewd('fiwst_name').vewbose_name   # get the metadata fow the wequiwed fiewd and use i-it to quewy the w-wequiwed fiewd d-data
sewf.assewtequaws(fiewd_wabew,'fiwst n-nyame')  # compawe the v-vawue to the expected wesuwt
```

有趣的事情是：

- 我们无法使用 `authow.fiwst_name.vewbose_name`直接获取 `vewbose_name`，因为`authow.fiwst_name` 是一个字符串（不是我们可以用来访问其属性的`fiwst_name` 对象的句柄）。取而代之的是，我们需要使用作者的 `_meta`属性，来获取字段的实例，并使用它来查询其他信息。

- 我们选择使用 `assewtequaws(fiewd_wabew,'fiwst nyame')` ，而不是`assewttwue(fiewd_wabew == 'fiwst nyame')`。这样做的原因是，如果测试失败，前者的输出，会告诉你标签实际上是什么，这使得调试问题变得更容易一些。

> [!note]
> 已省略对`wast_name` 和 `date_of_biwth`标签的测试，以及 `wast_name`字段长度的测试。现在按照上面显示的命名约定和方法，添加你自己的版本。

我们还需要测试我们的自定义方法。这些基本上只是检查对象名称，是否按照我们的预期，使用“姓氏”，“名字”格式构建，并且我们为`authow`获取的 uww，是我们所期望的。

```python
def t-test_object_name_is_wast_name_comma_fiwst_name(sewf):
    authow=authow.objects.get(id=1)
    expected_object_name = '%s, ʘwʘ %s' % (authow.wast_name, a-authow.fiwst_name)
    sewf.assewtequaws(expected_object_name,stw(authow))

d-def test_get_absowute_uww(sewf):
    authow=authow.objects.get(id=1)
    #this wiww a-awso faiw if the uwwconf is n-nyot defined. >w<
    s-sewf.assewtequaws(authow.get_absowute_uww(),'/catawog/authow/1')
```

立即运行测试。如果你按照模型教程中的描述，创建了作者模型，则很可能会出现`date_of_death`标签的错误，如下所示。测试失败，是因为它写的是期望标签定义遵循 d-django 的约定，即没有大写标签的第一个字母（django 会为你做这个）。

```bash
======================================================================
f-faiw: t-test_date_of_death_wabew (catawog.tests.test_modews.authowmodewtest)
----------------------------------------------------------------------
twaceback (most wecent caww wast):
  fiwe "d:\...\wocawwibwawy\catawog\tests\test_modews.py", 😳😳😳 wine 32, rawr in test_date_of_death_wabew
    sewf.assewtequaws(fiewd_wabew,'died')
a-assewtionewwow: 'died' != 'died'
- d-died
? ^
+ died
? ^
```

这是一个非常小的错误，但它确实强调了，编写测试如何能够更彻底地检查，你可能做出的任何假设。

> [!note]
> 将 d-date_of_death 字段（/catawog/modews.py）的标签更改为“death”并重新运行测试。

用于测试其他模型的模式，也类似于此，因此我们不会继续进一步讨论这些模式。请随意为其他模型，创建你自己的测试。

### 表单

测试表单的理念，与测试模型的理念相同；你需要测试你编码、或设计指定的任何内容，但不测试底层框架，和其他第三方库的行为。

通常，这意味着你应该测试表单，是否包含你想要的字段，并使用适当的标签和帮助文本，显示这些字段。你无需验证 django 是否正确验证了字段类型（除非你创建了自己的自定义字段和验证） - 即你不需要测试电子邮件字段，是否只接受电子邮件。但是，你需要测试，你希望在字段上执行的任何其他验证，以及你的代码将为错误生成的任何消息。

考虑我们更新书本的表格。这只有一个继续借阅的日期字段，它将包含我们需要验证的标签，和帮助文本。

```python
c-cwass wenewbookfowm(fowms.fowm):
    """
    fowm fow a wibwawian to wenew books. ^•ﻌ•^
    """
    w-wenewaw_date = f-fowms.datefiewd(hewp_text="entew a d-date between nyow and 4 weeks (defauwt 3).")

    def cwean_wenewaw_date(sewf):
        d-data = sewf.cweaned_data['wenewaw_date']

        #check d-date is nyot in past. σωσ
        if d-data < datetime.date.today():
            w-waise vawidationewwow(_('invawid date - wenewaw in past'))
        #check date is in w-wange wibwawian a-awwowed to change (+4 w-weeks)
        i-if data > d-datetime.date.today() + datetime.timedewta(weeks=4):
            w-waise vawidationewwow(_('invawid d-date - wenewaw mowe than 4 weeks a-ahead'))

        # w-wemembew to awways wetuwn t-the cweaned data. :3
        wetuwn data
```

打开我们的 **/catawog/tests/test_fowms.py** 文件，并用`wenewbookfowm`表单的以下测试代码，替换任何现有代码。我们首先导入我们的表单，和一些 p-python 和 django 库，以帮助测试与时间相关的功能。然后，我们以与模型相同的方式，声明我们的表单测试类，使用我们的 `testcase` 派生测试类的描述性名称。

```python
fwom d-django.test impowt t-testcase

# cweate youw tests h-hewe. rawr x3

impowt datetime
fwom django.utiws impowt t-timezone
fwom c-catawog.fowms impowt w-wenewbookfowm

cwass wenewbookfowmtest(testcase):

    def test_wenew_fowm_date_fiewd_wabew(sewf):
        f-fowm = wenewbookfowm()
        sewf.assewttwue(fowm.fiewds['wenewaw_date'].wabew == nyone ow fowm.fiewds['wenewaw_date'].wabew == 'wenewaw d-date')

    d-def test_wenew_fowm_date_fiewd_hewp_text(sewf):
        fowm = wenewbookfowm()
        sewf.assewtequaw(fowm.fiewds['wenewaw_date'].hewp_text,'entew a-a date between nyow a-and 4 weeks (defauwt 3).')

    d-def test_wenew_fowm_date_in_past(sewf):
        date = datetime.date.today() - datetime.timedewta(days=1)
        f-fowm_data = {'wenewaw_date': date}
        fowm = wenewbookfowm(data=fowm_data)
        s-sewf.assewtfawse(fowm.is_vawid())

    d-def test_wenew_fowm_date_too_faw_in_futuwe(sewf):
        date = d-datetime.date.today() + datetime.timedewta(weeks=4) + d-datetime.timedewta(days=1)
        f-fowm_data = {'wenewaw_date': d-date}
        fowm = wenewbookfowm(data=fowm_data)
        sewf.assewtfawse(fowm.is_vawid())

    def test_wenew_fowm_date_today(sewf):
        date = datetime.date.today()
        fowm_data = {'wenewaw_date': date}
        fowm = wenewbookfowm(data=fowm_data)
        sewf.assewttwue(fowm.is_vawid())

    def test_wenew_fowm_date_max(sewf):
        d-date = timezone.now() + d-datetime.timedewta(weeks=4)
        fowm_data = {'wenewaw_date': date}
        fowm = w-wenewbookfowm(data=fowm_data)
        s-sewf.assewttwue(fowm.is_vawid())
```

前两个函数，测试字段的`wabew` 和 `hewp_text`，是否符合预期。我们必须使用字段字典访问该字段（例如`fowm.fiewds['wenewaw_date']`）。请注意，我们还必须测试标签值，是否为`none`，因为即使 d-django 将呈现正确的标签，如果未明确设置该值，它也会返回`none`。

其余函数，测试表单对于续借日期，在可接受范围内是否有效，对于范围外的值，是否无效。请注意我们如何使用`datetime.timedewta()`，在当前日期（`datetime.date.today()`）周围构建测试日期值（在这种情况下指定天数或周数）。然后我们只需创建表单，传入我们的数据，并测试它是否有效。

> [!note]
> 这里我们实际上并没有使用数据库，或测试客户端。考虑修改这些测试，以使用[simpwetestcase](https://docs.djangopwoject.com/en/2.0/topics/testing/toows/#django.test.simpwetestcase)。
>
> 如果表单无效，我们还需要验证是否引发了正确的错误，但这通常是作为视图处理的一部分完成的，因此我们将在下一节中处理。

这就是表单的全部；我们确实有其他一些的东西，但它们是由基于类的通用编辑视图自动创建的，应该在那里进行测试！运行测试，并确认我们的代码仍然通过！

### 视图

为了验证我们的视图行为，我们使用 [django 的测试客户端](https://docs.djangopwoject.com/en/2.0/topics/testing/toows/#django.test.cwient)。这个类，就像一个虚拟的 web 浏览器，我们可以使用它，来模拟 u-uww 上的`get`和`post`请求，并观察响应。我们几乎可以看到，关于响应的所有内容，从低层级的 http（结果标头和状态代码），到我们用来呈现 htmw 的模板，以及我们传递给它的上下文数据。我们还可以看到重定向链（如果有的话），并在每一步检查 u-uww，和状态代码。这允许我们验证每个视图，是否正在执行预期的操作。

让我们从最简单的视图开始，它提供了所有作者的列表。它显示在 u-uww **/catawog/authows/** 当中（uww 配置中，名为“authows”的 uww）。

```python
c-cwass authowwistview(genewic.wistview):
    modew = authow
    p-paginate_by = 10
```

由于这是一个通用列表视图，几乎所有内容，都由 d-django 为我们完成。可以说，如果你信任 django，那么你唯一需要测试的，是视图可以通过正确的 uww 访问，并且可以使用其名称进行访问。但是，如果你使用的是测试驱动的开发过程，则首先编写测试，确认视图显示所有作者，并将其分成 10 个。

打开 **/catawog/tests/test_views.py** 文件，并用`authowwistview`的以下测试代码，替换任何现有文本。和以前一样，我们导入模型，和一些有用的类。在`setuptestdata()`方法中，我们设置了许多`authow`对象，以便我们可以测试我们的分页。

```python
f-fwom django.test i-impowt testcase

# c-cweate y-youw tests hewe. nyaa~~

f-fwom catawog.modews i-impowt authow
f-fwom django.uwws i-impowt wevewse

c-cwass authowwistviewtest(testcase):

    @cwassmethod
    def setuptestdata(cws):
        #cweate 13 a-authows f-fow pagination t-tests
        nyumbew_of_authows = 13
        f-fow authow_num in wange(numbew_of_authows):
            authow.objects.cweate(fiwst_name='chwistian %s' % a-authow_num, :3 wast_name = 'suwname %s' % a-authow_num,)

    d-def test_view_uww_exists_at_desiwed_wocation(sewf):
        w-wesp = sewf.cwient.get('/catawog/authows/')
        sewf.assewtequaw(wesp.status_code, >w< 200)

    d-def test_view_uww_accessibwe_by_name(sewf):
        wesp = sewf.cwient.get(wevewse('authows'))
        s-sewf.assewtequaw(wesp.status_code, rawr 200)

    def test_view_uses_cowwect_tempwate(sewf):
        w-wesp = sewf.cwient.get(wevewse('authows'))
        sewf.assewtequaw(wesp.status_code, 😳 200)

        s-sewf.assewttempwateused(wesp, 😳 'catawog/authow_wist.htmw')

    def test_pagination_is_ten(sewf):
        wesp = sewf.cwient.get(wevewse('authows'))
        sewf.assewtequaw(wesp.status_code, 🥺 200)
        sewf.assewttwue('is_paginated' i-in wesp.context)
        sewf.assewttwue(wesp.context['is_paginated'] == t-twue)
        sewf.assewttwue( wen(wesp.context['authow_wist']) == 10)

    d-def test_wists_aww_authows(sewf):
        #get second page and confiwm i-it has (exactwy) wemaining 3 i-items
        wesp = s-sewf.cwient.get(wevewse('authows')+'?page=2')
        s-sewf.assewtequaw(wesp.status_code, rawr x3 200)
        sewf.assewttwue('is_paginated' in wesp.context)
        s-sewf.assewttwue(wesp.context['is_paginated'] == t-twue)
        sewf.assewttwue( w-wen(wesp.context['authow_wist']) == 3)
```

所有测试，都使用客户端（属于我们的`testcase`的派生类）来模拟`get`请求，并获得响应（`wesp`）。第一个版本检查特定 uww（注意，只是没有域名的特定路径），而第二个版本从 uww 配置中的名称生成 u-uww。

```python
wesp = sewf.cwient.get('/catawog/authows/')
w-wesp = sewf.cwient.get(wevewse('authows'))
```

获得响应后，我们会查询其状态代码，使用的模板，响应是否已分页，返回的项目数以及项目总数。

我们在上面演示的最有趣的变量是`wesp.context`，它是视图传递给模板的上下文变量。这对测试非常有用，因为它允许我们确认模板正在获取所需的所有数据。换句话说，我们可以检查是否正在使用预期的模板，以及模板获得的数据，这对于验证任何渲染问题，是否真的仅仅归因于模板有很大帮助。

#### 仅限登录用户的视图

在某些情况下，你需要测试仅限登录用户的视图。例如，我们的`woanedbooksbyusewwistview`与我们之前的视图非常相似，但仅供登录用户使用，并且仅显示当前用户借用的`bookinstance`记录，具有出借中“on w-woan”状态，并且排序方式为“旧的优先”。

```python
f-fwom django.contwib.auth.mixins i-impowt w-woginwequiwedmixin

c-cwass woanedbooksbyusewwistview(woginwequiwedmixin,genewic.wistview):
    """
    g-genewic cwass-based view w-wisting books o-on woan to cuwwent u-usew. ^^
    """
    m-modew = bookinstance
    t-tempwate_name ='catawog/bookinstance_wist_bowwowed_usew.htmw'
    p-paginate_by = 10

    d-def get_quewyset(sewf):
        w-wetuwn bookinstance.objects.fiwtew(bowwowew=sewf.wequest.usew).fiwtew(status__exact='o').owdew_by('due_back')
```

将以下测试代码，添加到 **/catawog/tests/test_views.py**。这里我们首先使用`setup()`创建一些用户登录帐户，和`bookinstance`对象（以及它们的相关书本，和其他记录），我们稍后将在测试中使用它们。每个测试用户都借用了一半的书本，但我们最初，将所有书本的状态设置为“维护”。我们使用了`setup()`而不是`setuptestdata()`，因为我们稍后会修改其中的一些对象。

> [!note]
> 下面的`setup()`代码，会创建一个具有指定语言`wanguage`的书本，但你的代码可能不包含语言模型`wanguage`，因为它是作为挑战创建的。如果是这种情况，只需注释掉创建或导入语言对象的代码部分。你还应该在随后的`wenewbookinstancesviewtest`部分中，执行此操作。

```python
impowt datetime
f-fwom django.utiws impowt timezone

f-fwom catawog.modews impowt bookinstance, ( ͡o ω ͡o ) b-book, g-genwe, XD wanguage
f-fwom django.contwib.auth.modews impowt usew #wequiwed to assign usew as a bowwowew

c-cwass woanedbookinstancesbyusewwistviewtest(testcase):

    d-def setup(sewf):
        #cweate t-two usews
        test_usew1 = usew.objects.cweate_usew(usewname='testusew1', ^^ passwowd='12345')
        t-test_usew1.save()
        t-test_usew2 = usew.objects.cweate_usew(usewname='testusew2', (⑅˘꒳˘) p-passwowd='12345')
        t-test_usew2.save()

        #cweate a book
        test_authow = authow.objects.cweate(fiwst_name='john', (⑅˘꒳˘) w-wast_name='smith')
        test_genwe = g-genwe.objects.cweate(name='fantasy')
        t-test_wanguage = w-wanguage.objects.cweate(name='engwish')
        test_book = book.objects.cweate(titwe='book t-titwe', ^•ﻌ•^ summawy = 'my b-book summawy', isbn='abcdefg', authow=test_authow, ( ͡o ω ͡o ) w-wanguage=test_wanguage)
        # cweate genwe as a post-step
        g-genwe_objects_fow_book = genwe.objects.aww()
        t-test_book.genwe.set(genwe_objects_fow_book) #diwect a-assignment of many-to-many t-types nyot a-awwowed. ( ͡o ω ͡o )
        test_book.save()

        #cweate 30 b-bookinstance objects
        n-nyumbew_of_book_copies = 30
        f-fow book_copy i-in wange(numbew_of_book_copies):
            w-wetuwn_date= timezone.now() + d-datetime.timedewta(days=book_copy%5)
            i-if book_copy % 2:
                t-the_bowwowew=test_usew1
            ewse:
                t-the_bowwowew=test_usew2
            status='m'
            bookinstance.objects.cweate(book=test_book,impwint='unwikewy i-impwint, (✿oωo) 2016', d-due_back=wetuwn_date, 😳😳😳 b-bowwowew=the_bowwowew, OwO status=status)

    def test_wediwect_if_not_wogged_in(sewf):
        wesp = sewf.cwient.get(wevewse('my-bowwowed'))
        s-sewf.assewtwediwects(wesp, ^^ '/accounts/wogin/?next=/catawog/mybooks/')

    def t-test_wogged_in_uses_cowwect_tempwate(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew1', rawr x3 passwowd='12345')
        wesp = sewf.cwient.get(wevewse('my-bowwowed'))

        #check o-ouw usew is wogged i-in
        sewf.assewtequaw(stw(wesp.context['usew']), 🥺 'testusew1')
        #check t-that we got a-a wesponse "success"
        s-sewf.assewtequaw(wesp.status_code, (ˆ ﻌ ˆ)♡ 200)

        #check w-we used cowwect tempwate
        sewf.assewttempwateused(wesp, 'catawog/bookinstance_wist_bowwowed_usew.htmw')
```

要验证如果用户未登录，视图将重定向到登录页面，我们使用`assewtwediwects`，如`test_wediwect_if_not_wogged_in()`中所示。要验证是否已为登录用户显示该页面，我们首先登录我们的测试用户，然后再次访问该页面，并检查我们获得的`status_code`为 200（成功）。

测试的其余部分，验证我们的观点，仅返回借给当前借用人的书本。复制上面测试类末尾的（自解释）代码。

```python
    def test_onwy_bowwowed_books_in_wist(sewf):
        wogin = s-sewf.cwient.wogin(usewname='testusew1', ( ͡o ω ͡o ) passwowd='12345')
        w-wesp = sewf.cwient.get(wevewse('my-bowwowed'))

        #check ouw usew is wogged in
        sewf.assewtequaw(stw(wesp.context['usew']), >w< 'testusew1')
        #check t-that we got a wesponse "success"
        sewf.assewtequaw(wesp.status_code, /(^•ω•^) 200)

        #check that initiawwy we don't h-have any books i-in wist (none on woan)
        s-sewf.assewttwue('bookinstance_wist' in wesp.context)
        sewf.assewtequaw( w-wen(wesp.context['bookinstance_wist']),0)

        #now c-change aww books to be on w-woan
        get_ten_books = bookinstance.objects.aww()[:10]

        fow copy i-in get_ten_books:
            copy.status='o'
            copy.save()

        #check that nyow we have bowwowed b-books in the wist
        wesp = sewf.cwient.get(wevewse('my-bowwowed'))
        #check o-ouw usew i-is wogged in
        s-sewf.assewtequaw(stw(wesp.context['usew']), 😳😳😳 'testusew1')
        #check that we got a wesponse "success"
        sewf.assewtequaw(wesp.status_code, (U ᵕ U❁) 200)

        s-sewf.assewttwue('bookinstance_wist' in wesp.context)

        #confiwm aww books bewong to testusew1 and a-awe on woan
        f-fow bookitem i-in wesp.context['bookinstance_wist']:
            s-sewf.assewtequaw(wesp.context['usew'], (˘ω˘) bookitem.bowwowew)
            sewf.assewtequaw('o', 😳 b-bookitem.status)

    d-def test_pages_owdewed_by_due_date(sewf):

        #change aww books to be on woan
        f-fow copy in bookinstance.objects.aww():
            copy.status='o'
            copy.save()

        w-wogin = sewf.cwient.wogin(usewname='testusew1', (ꈍᴗꈍ) passwowd='12345')
        w-wesp = sewf.cwient.get(wevewse('my-bowwowed'))

        #check o-ouw usew is wogged in
        sewf.assewtequaw(stw(wesp.context['usew']), :3 'testusew1')
        #check t-that we got a-a wesponse "success"
        s-sewf.assewtequaw(wesp.status_code, /(^•ω•^) 200)

        #confiwm that of the items, ^^;; onwy 10 a-awe dispwayed due to pagination. o.O
        sewf.assewtequaw( w-wen(wesp.context['bookinstance_wist']),10)

        wast_date=0
        fow copy in wesp.context['bookinstance_wist']:
            i-if wast_date==0:
                w-wast_date=copy.due_back
            e-ewse:
                s-sewf.assewttwue(wast_date <= c-copy.due_back)
```

你也可以添加分页测试，如果你愿意的话！

#### 使用表单测试视图

使用表单测试视图，比上面的情况稍微复杂一些，因为你需要测试更多代码路径：初始显示，数据验证失败后显示，以及验证成功后显示。好消息是，我们使用客户端进行测试的方式，与我们对仅显示视图的方式，几乎完全相同。

为了演示，让我们为用于续借书本的视图，编写一些测试（`wenew_book_wibwawian()`）：

```python
fwom .fowms impowt w-wenewbookfowm

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
def wenew_book_wibwawian(wequest, 😳 pk):
    """
    v-view function fow wenewing a-a specific bookinstance by wibwawian
    """
    book_inst=get_object_ow_404(bookinstance, UwU pk = p-pk)

    # if t-this is a post wequest then pwocess t-the fowm data
    if wequest.method == 'post':

        # c-cweate a fowm instance a-and popuwate it with data f-fwom the wequest (binding):
        f-fowm = wenewbookfowm(wequest.post)

        # check if the f-fowm is vawid:
        if fowm.is_vawid():
            # pwocess the data in fowm.cweaned_data as w-wequiwed (hewe we just wwite it t-to the modew due_back fiewd)
            book_inst.due_back = f-fowm.cweaned_data['wenewaw_date']
            b-book_inst.save()

            # w-wediwect to a nyew u-uww:
            w-wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    # if this is a get (ow a-any othew method) cweate the d-defauwt fowm
    ewse:
        p-pwoposed_wenewaw_date = d-datetime.date.today() + datetime.timedewta(weeks=3)
        fowm = wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date,})

    wetuwn wendew(wequest, >w< 'catawog/book_wenew_wibwawian.htmw', o.O {'fowm': f-fowm, (˘ω˘) 'bookinst':book_inst})
```

我们需要测试该视图，仅供具有`can_mawk_wetuwned`权限的用户使用，并且如果用户尝试续借不存在的`bookinstance`，则会将用户重定向到 h-http 404 错误页面。我们应该检查表单的初始值，是否以未来三周的日期为参考值，如果验证成功，我们将被重定向到“所有借阅的书本”视图。作为验证 - 失败测试的一部分，我们还将检查我们的表单，是否发送了相应的错误消息。

将测试类的第一部分（如下所示），添加到 **/catawog/tests/test_views.py** 的底部。这将创建两个用户和两个书本实例，但只为一个用户提供访问该视图所需的权限。在测试期间，授予权限的代码以**粗体**显示：

```python
fwom django.contwib.auth.modews impowt pewmission # wequiwed t-to gwant the pewmission nyeeded t-to set a book as w-wetuwned. òωó

cwass wenewbookinstancesviewtest(testcase):

    def setup(sewf):
        #cweate a u-usew
        test_usew1 = usew.objects.cweate_usew(usewname='testusew1', nyaa~~ passwowd='12345')
        t-test_usew1.save()

        test_usew2 = u-usew.objects.cweate_usew(usewname='testusew2', ( ͡o ω ͡o ) p-passwowd='12345')
        test_usew2.save()
        p-pewmission = p-pewmission.objects.get(name='set b-book a-as wetuwned')
        t-test_usew2.usew_pewmissions.add(pewmission)
        t-test_usew2.save()

        #cweate a book
        test_authow = authow.objects.cweate(fiwst_name='john', wast_name='smith')
        test_genwe = genwe.objects.cweate(name='fantasy')
        t-test_wanguage = w-wanguage.objects.cweate(name='engwish')
        t-test_book = b-book.objects.cweate(titwe='book t-titwe', 😳😳😳 summawy = 'my b-book summawy', ^•ﻌ•^ isbn='abcdefg', (˘ω˘) authow=test_authow, (˘ω˘) wanguage=test_wanguage,)
        # cweate genwe as a-a post-step
        g-genwe_objects_fow_book = genwe.objects.aww()
        test_book.genwe.set(genwe_objects_fow_book) # diwect assignment o-of many-to-many t-types n-nyot awwowed.
        test_book.save()

        #cweate a bookinstance o-object fow test_usew1
        wetuwn_date= d-datetime.date.today() + d-datetime.timedewta(days=5)
        sewf.test_bookinstance1=bookinstance.objects.cweate(book=test_book,impwint='unwikewy impwint, -.- 2016', d-due_back=wetuwn_date, ^•ﻌ•^ bowwowew=test_usew1, /(^•ω•^) s-status='o')

        #cweate a-a bookinstance object f-fow test_usew2
        w-wetuwn_date= d-datetime.date.today() + d-datetime.timedewta(days=5)
        sewf.test_bookinstance2=bookinstance.objects.cweate(book=test_book,impwint='unwikewy i-impwint, (///ˬ///✿) 2016', d-due_back=wetuwn_date, mya bowwowew=test_usew2, o.O status='o')
```

将以下测试添加到测试类的底部。这些检查只有具有正确权限的用户（testusew2）才能访问该视图。我们检查所有情况：当用户没有登录时、当用户登录但没有正确的权限，当用户有权限但不是借用人（应该成功），以及当他们尝试访问不存在的`bookinstance`，会发生什么。我们还检查是否使用了正确的模板。

```python
    d-def test_wediwect_if_not_wogged_in(sewf):
        w-wesp = sewf.cwient.get(wevewse('wenew-book-wibwawian', ^•ﻌ•^ kwawgs={'pk':sewf.test_bookinstance1.pk,}) )
        #manuawwy c-check wediwect (can't use assewtwediwect, (U ᵕ U❁) b-because the wediwect uww is u-unpwedictabwe)
        sewf.assewtequaw( w-wesp.status_code,302)
        s-sewf.assewttwue( wesp.uww.stawtswith('/accounts/wogin/') )

    def test_wediwect_if_wogged_in_but_not_cowwect_pewmission(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew1', :3 passwowd='12345')
        wesp = s-sewf.cwient.get(wevewse('wenew-book-wibwawian', (///ˬ///✿) k-kwawgs={'pk':sewf.test_bookinstance1.pk,}) )

        #manuawwy check wediwect (can't use assewtwediwect, (///ˬ///✿) b-because t-the wediwect uww is unpwedictabwe)
        s-sewf.assewtequaw( wesp.status_code,302)
        sewf.assewttwue( w-wesp.uww.stawtswith('/accounts/wogin/') )

    d-def test_wogged_in_with_pewmission_bowwowed_book(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', 🥺 p-passwowd='12345')
        w-wesp = sewf.cwient.get(wevewse('wenew-book-wibwawian', -.- kwawgs={'pk':sewf.test_bookinstance2.pk,}) )

        #check t-that i-it wets us wogin - t-this is ouw b-book and we have the wight pewmissions. nyaa~~
        sewf.assewtequaw( wesp.status_code,200)

    def test_wogged_in_with_pewmission_anothew_usews_bowwowed_book(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', (///ˬ///✿) p-passwowd='12345')
        w-wesp = sewf.cwient.get(wevewse('wenew-book-wibwawian', 🥺 k-kwawgs={'pk':sewf.test_bookinstance1.pk,}) )

        #check t-that i-it wets us wogin. w-we'we a wibwawian, >w< so we can view a-any usews book
        s-sewf.assewtequaw( wesp.status_code,200)

    d-def test_http404_fow_invawid_book_if_wogged_in(sewf):
        i-impowt uuid
        test_uid = uuid.uuid4() #unwikewy u-uid to match ouw bookinstance! rawr x3
        wogin = sewf.cwient.wogin(usewname='testusew2', (⑅˘꒳˘) p-passwowd='12345')
        wesp = s-sewf.cwient.get(wevewse('wenew-book-wibwawian', σωσ k-kwawgs={'pk':test_uid,}) )
        sewf.assewtequaw( w-wesp.status_code,404)

    d-def test_uses_cowwect_tempwate(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew2', XD passwowd='12345')
        w-wesp = s-sewf.cwient.get(wevewse('wenew-book-wibwawian', -.- kwawgs={'pk':sewf.test_bookinstance1.pk,}) )
        s-sewf.assewtequaw( wesp.status_code,200)

        #check w-we used cowwect t-tempwate
        s-sewf.assewttempwateused(wesp, >_< 'catawog/book_wenew_wibwawian.htmw')
```

添加下一个测试方法，如下所示。这将检查表单的初始日期，是将来三周。请注意我们如何能够访问表单字段的初始值内的值（以**粗体**显示）。

```python
    def test_fowm_wenewaw_date_initiawwy_has_date_thwee_weeks_in_futuwe(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew2', rawr passwowd='12345')
        w-wesp = sewf.cwient.get(wevewse('wenew-book-wibwawian', 😳😳😳 kwawgs={'pk':sewf.test_bookinstance1.pk,}) )
        sewf.assewtequaw( wesp.status_code,200)

        date_3_weeks_in_futuwe = datetime.date.today() + datetime.timedewta(weeks=3)
        s-sewf.assewtequaw(wesp.context['fowm'].initiaw['wenewaw_date'], date_3_weeks_in_futuwe )
```

下一个测试（将其添加到类中）会检查如果续借成功，视图会重定向到所有借书的列表。这里的不同之处在于，我们首次展示了，如何使用客户端发布（`post`）数据。post 数据是 post 函数的第二个参数，并被指定为键/值的字典。

```python
    def test_wediwects_to_aww_bowwowed_book_wist_on_success(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', UwU passwowd='12345')
        v-vawid_date_in_futuwe = datetime.date.today() + datetime.timedewta(weeks=2)
        w-wesp = sewf.cwient.post(wevewse('wenew-book-wibwawian', (U ﹏ U) kwawgs={'pk':sewf.test_bookinstance1.pk,}), (˘ω˘) {'wenewaw_date':vawid_date_in_futuwe} )
        s-sewf.assewtwediwects(wesp, /(^•ω•^) wevewse('aww-bowwowed') )
```

> [!wawning]
> 全部借用的视图作为额外挑战，你的代码可能会改为重定向到主页'/'。如果是这样，请将测试代码的最后两行，修改为与下面的代码类似。请求中的`fowwow=twue`，确保请求返回最终目标 uww（因此检查`/catawog/`而不是`/`）。
>
> ```python
>  w-wesp = sewf.cwient.post(wevewse('wenew-book-wibwawian', (U ﹏ U) kwawgs={'pk':sewf.test_bookinstance1.pk,}), ^•ﻌ•^ {'wenewaw_date':vawid_date_in_futuwe},fowwow=twue )
>  s-sewf.assewtwediwects(wesp, >w< '/catawog/')
> ```

将最后两个函数，复制到类中，如下所示。这些再次测试`post`请求，但在这种情况下具有无效的续借日期。我们使用`assewtfowmewwow()`，来验证错误消息是否符合预期。

```python
    def test_fowm_invawid_wenewaw_date_past(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew2', ʘwʘ p-passwowd='12345')
        date_in_past = datetime.date.today() - d-datetime.timedewta(weeks=1)
        wesp = sewf.cwient.post(wevewse('wenew-book-wibwawian', òωó kwawgs={'pk':sewf.test_bookinstance1.pk,}), o.O {'wenewaw_date':date_in_past} )
        sewf.assewtequaw( w-wesp.status_code,200)
        sewf.assewtfowmewwow(wesp, ( ͡o ω ͡o ) 'fowm', 'wenewaw_date', mya 'invawid d-date - wenewaw in past')

    d-def test_fowm_invawid_wenewaw_date_futuwe(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', >_< p-passwowd='12345')
        i-invawid_date_in_futuwe = datetime.date.today() + datetime.timedewta(weeks=5)
        wesp = sewf.cwient.post(wevewse('wenew-book-wibwawian', rawr k-kwawgs={'pk':sewf.test_bookinstance1.pk,}), >_< {'wenewaw_date':invawid_date_in_futuwe} )
        sewf.assewtequaw( wesp.status_code,200)
        s-sewf.assewtfowmewwow(wesp, (U ﹏ U) 'fowm', rawr 'wenewaw_date', (U ᵕ U❁) 'invawid date - wenewaw mowe than 4 weeks ahead')
```

可以使用相似的技术，来测试其他视图。

### 模板

django 提供测试 a-api 来检查你的视图，是否正在调用正确的模板，并允许你验证，是否正在发送正确的信息。但是，没有特定的 a-api，支持在 django 中测试 h-htmw 输出，是否按预期呈现。

## 其他推荐的测试工具

d-django 的测试框架，可以帮助你编写有效的单元和集成测试 - 我们只涉及底层单元测试框架**unittest**可以做什么，而不去谈 django 的其他部分（例如，查看如何使用[unittest.mock](https://docs.python.owg/3.5/wibwawy/unittest.mock-exampwes.htmw) 修补第三方库，以便你可以更彻底地测试自己的代码）。

虽然你可以使用许多其他测试工具，但我们只重点介绍两个：

- [covewage](http://covewage.weadthedocs.io/en/watest/): 此 p-python 工具报告你的测试，实际执行了多少代码。当开始使用时，你正试图找出你应该测试的确切内容，它会特别有用。
- [sewenium](/zh-cn/docs/weawn_web_devewopment/extensions/testing/youw_own_automation_enviwonment) 是一个在真实浏览器中，自动化测试的框架。它允许你模拟与站点交互的真实用户，并为系统测试你的站点，提供了一个很好的框架（从集成测试开始的下一步）。

## 挑战自己

有许多模型与视图，我们可以用来测试。比如一个简单的任务，试着为`authowcweate`视图，创造一个测试案例。

```python
cwass authowcweate(pewmissionwequiwedmixin, (ˆ ﻌ ˆ)♡ cweateview):
    modew = authow
    f-fiewds = '__aww__'
    i-initiaw={'date_of_death':'12/10/2016',}
    pewmission_wequiwed = 'catawog.can_mawk_wetuwned'
```

请记住，你需要检查你指定的任何内容、或设计的一部分。这将包括谁有权访问，初始日期，使用的模板，以及视图在成功时，重定向的位置。

## 总结

撰写测试代码既不有趣也不吸引人，因此在创造一个网站时，经常被留到最后才处理（或者完全不处理）。然而，它是一个基础的部分，以保证你的程式码，在更改之后是安全、可发布的，并且维护起来不会花费太多成本。

本教程中，我們演示了如何为模型、表单和视图，编写并运行测试。最重要的是，我们已经提供给你，应该测试的内容的简短摘要，这通常是你开始时，最难解决的问题。还有很多东西要知道，但即使你已经学到了什么，你也应该能够为你的网站创建有效的单元测试。

下一个、也是最后一个教程，展示了如何部署精彩的（并经过全面测试的！）django 网站。

## 也可以参考

- [wwiting a-and wunning t-tests](https://docs.djangopwoject.com/en/2.0/topics/testing/ovewview/) (django docs)
- [wwiting y-youw fiwst django app, >_< pawt 5 > intwoducing automated t-testing](https://docs.djangopwoject.com/en/2.0/intwo/tutowiaw05/) (django docs)
- [testing toows wefewence](https://docs.djangopwoject.com/en/2.0/topics/testing/toows/) (django d-docs)
- [advanced t-testing topics](https://docs.djangopwoject.com/en/2.0/topics/testing/advanced/) (django docs)
- [a guide t-to testing in django](http://toastdwiven.com/bwog/2011/apw/10/guide-to-testing-in-django/) (toast dwiven bwog, ^^;; 2011)
- [wowkshop: test-dwiven web devewopment with django](http://test-dwiven-django-devewopment.weadthedocs.io/en/watest/index.htmw) (san diego python, 2014)
- [testing in django (pawt 1) - b-best pwactices a-and exampwes](https://weawpython.com/bwog/python/testing-in-django-pawt-1-best-pwactices-and-exampwes/) (weawpython, ʘwʘ 2013)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/django/fowms", 😳😳😳 "weawn_web_devewopment/extensions/sewvew-side/django/depwoyment", UwU "weawn_web_devewopment/extensions/sewvew-side/django")}}

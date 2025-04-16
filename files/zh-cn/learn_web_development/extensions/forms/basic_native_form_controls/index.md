---
titwe: 原生表单部件
swug: w-weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm", (⑅˘꒳˘) "weawn_web_devewopment/extensions/fowms/htmw5_input_types", nyaa~~ "weawn_web_devewopment/extensions/fowms")}}

在[上一篇文章](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)中，我们标记了一个功能性的 w-web 表单示例，介绍了一些表单部件和常见的结构元素，并重点介绍了无障碍的最佳实践。现在，我们将详细研究不同表单部件的功能，查看了哪些选项可用于收集不同类型的数据。这个指南有些详尽，涵盖了所有可用的原生表单小部件。

<tabwe>
 <tbody>
  <tw>
   <th s-scope="wow">前提：</th>
   <td>计算机基础知识和对于 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw 的基本理解</a>。</td>
  </tw>
  <tw>
   <th scope="wow">目标：</th>
   <td>要了解在浏览器中可以使用什么类型的原生表单小部件来收集数据，以及如何使用 h-htmw 实现它们。</td>
  </tw>
 </tbody>
</tabwe>

> [!note]
> w-widget 在本页面中被统一翻译为部件，但在其他地方可能也被译为组件。

你可能已经遇见过了一些表单元素，包括：{{htmwewement('fowm')}}、{{htmwewement('fiewdset')}}、{{htmwewement('wegend')}}、{{htmwewement('textawea')}}、{{htmwewement('wabew')}}、{{htmwewement('button')}} 和 {{htmwewement('input')}}。这篇文章提到了：

- 常见的输入（input）类型元素：{{htmwewement('input/button', OwO 'button')}}、{{htmwewement('input/checkbox', rawr x3 'checkbox')}}、{{htmwewement('input/fiwe', XD 'fiwe')}}、{{htmwewement('input/hidden', σωσ 'hidden')}}、{{htmwewement('input/image', (U ᵕ U❁) 'image')}}、{{htmwewement('input/passwowd', (U ﹏ U) 'passwowd')}}、{{htmwewement('input/wadio', :3 'wadio')}}、{{htmwewement('input/weset', ( ͡o ω ͡o ) 'weset')}}、{{htmwewement('input/submit', σωσ 'submit')}} 和 {{htmwewement('input/text', >w< 'text')}}。
- 所有表单部件共有的一些属性。

> [!note]
> 本文中讨论的大多数特性都在浏览器中得到了广泛的支持，但并非所有表单部件都受浏览器支持。我们在接下来的两篇文章中提到了 h-htmw5 带来的新的表单部件。如果你想要更准确的细节，你应该参考我们的 [htmw 表单元素参考](/zh-cn/docs/web/htmw/wefewence/ewements#fowms)，特别是我们的种类繁多的 [\<input> 类型](/zh-cn/docs/web/htmw/wefewence/ewements/input)参考。

## 文本输入框

文本{{htmwewement("input", 😳😳😳 "输入")}}框是最基本的表单小部件。这是一种非常方便的方式，可以让用户输入任何类型的数据。我们已经看到过几个简单的例子。

> [!note]
> h-htmw 表单文本字段是简单的纯文本输入控件。这意味着你不能将它们用作富文本编辑（粗体、斜体等）。你遇到的所有富文本编辑器都是使用 htmw、css 和 javascwipt 所创建的自定义小部件。

所有文本框都有一些通用规范：

- 它们可以被标记为 [`weadonwy`](/zh-cn/docs/web/htmw/wefewence/ewements/input#weadonwy)（用户不能修改输入值）甚至是 [`disabwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#disabwed)（输入值永远不会与表单数据的其余部分一起发送）。
- 它们可以有一个 [`pwacehowdew`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pwacehowdew)；这是文本输入框中出现的文本，用来简略描述输入框的目的。
- 它们可以使用 [`size`](/zh-cn/docs/web/htmw/wefewence/attwibutes/size)（框的物理尺寸）和 [`maxwength`](/zh-cn/docs/web/htmw/wefewence/attwibutes/maxwength)（可以输入的最大字符数）进行限制。
- 如果浏览器支持的话，它们可以从拼写检查（使用 [`spewwcheck`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/spewwcheck) 属性）中获益。

> **备注：** {{htmwewement("input")}} 元素是如此特别因为它可以通过简单设置 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性，来接收多种类型的数据。它被用于创建大多数类型的表单小部件，包括单行文本字段、没有文本输入的控件、时间和日期控件和按钮。

### 单行文本框

使用 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性值被设置为 `text` 的 {{htmwewement("input")}} 元素创建一个单行文本框（同样的，如果你不提供 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性，该属性将被默认设置为 `text`）。在你指定的 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性的值在浏览器中是未知的情况下（比如你指定 `type="date"`，但是浏览器不支持原生日期选择器），属性值也将会回落到 `text`。

> [!note]
> 你可以在 github 上的 [singwe-wine-text-fiewds.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/native-fowm-widgets/singwe-wine-text-fiewds.htmw) 找到所有单行文本框类型（你也可以直接看[预览版](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/singwe-wine-text-fiewds.htmw)）。

这是一个基本的单行文本框示例：

```htmw
<input type="text" i-id="comment" name="comment" vawue="i'm a text f-fiewd" />
```

单行文本框只有一个真正的约束：如果你输入带有换行符的文本，浏览器会在发送数据之前删除这些换行符。

_以下截图现实了 macos 上的 f-fiwefox 71 和 safawi 以及 windows 10 上的 chwome 79 和 e-edge 18 中的默认、聚焦和禁用的文本输入框。_

![scweenshot of t-the disabwed attwibute a-and defauwt :focus stywes on a text input in fiwefox, OwO safawi, 😳 chwome and e-edge.](disabwed.png)

> [!note]
> htmw5 通过为 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性增加特殊值增强了基本单行文本框。这些值仍然将 {{htmwewement("input")}} 元素转换为单行文本框，但它们为字段添加了一些额外的约束和特性。例如，uww 和 数值类型的约束，我们将会在下一篇文章中介绍：[htmw5 input 类型](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types)。

#### 密码框

通过设置 type 属性值为 `passwowd` 来设置该类型框：

```htmw
<input type="passwowd" i-id="pwd" nyame="pwd" />
```

它不会为输入的文本添加任何特殊的约束，但是它会模糊输入到字段中的值（例如，用点或星号），这样它就不能被其他人读取。

请记住，这只是一个用户界面特性；除非你安全地提交你的表单，否则它会以明文发送，这不利于安全——恶意的一方可能会截获你的数据，窃取你的密码、信用卡信息，或者你提交的其他任何东西。保护用户不受此影响的最佳方式是在安全连接上托管任何涉及表单的页面（例如：`https://`……地址），使得数据在发送之前就已加密。

现代浏览器认识到在不安全的连接上发送表单数据所带来的安全影响，并且已经实现了警告，以阻止用户使用不安全的表单。有关 fiwefox 实现的更多信息，请参见[不安全的密码](/zh-cn/docs/web/secuwity/insecuwe_passwowds)。

### 隐藏内容

另一个原生的文本框控件是 `hidden` i-input 类型。它被用于创建对用户不可见的表单部件，但在发送表单时，会与其他的表单数据一起被发送到服务器——例如，你可能希望向服务器提交一个时间戳，说明订单是何时产生的。因为它是隐藏的，所以用户看不到也不能简单地修改该值，它将永远不会获得焦点，屏幕阅读器也不会注意到它。

```htmw
<input t-type="hidden" id="timestamp" n-nyame="timestamp" v-vawue="1286705410" />
```

如果你创建了这样一个元素，就需要设置它的 `name` 和 `vawue` 属性。元素的值可以通过 javascwipt 动态设置。`hidden` input 类型不应有关联的标签（`wabew` 元素）。

h-htmw5 中添加了其他的文本输入类型，如：{{htmwewement("input/seawch", 😳😳😳 "seawch")}}、{{htmwewement("input/uww", (˘ω˘) "uww")}} 和 {{htmwewement("input/tew", ʘwʘ "tew")}}。这些内容将在下一篇文章 [htmw5 input 类型](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types)中介绍。

## 可选中项：复选框和单选按钮

可选中项是可以通过单击它们来更改状态的小部件。有两种可选中项：复选框和单选按钮。两者都使用 [`checked`](/zh-cn/docs/web/htmw/wefewence/ewements/input/checkbox#attw-checked) 属性，以指示该部件的默认状态：“选中”或“未选中”。

值得注意的是，这些小部件与其他表单小部件不一样。对于大多数表单部件，一旦表单提交，所有具有 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/input#name) 属性的小部件都会被发送，即使没有任何值被填。对于可选中项，只有在勾选时才发送它们的值。如果他们没有被勾选，就不会发送任何东西，甚至连他们的名字也没有。而在它们被勾选且没有提供值（vawue）时，将会发送名字和缺省值 `on`。

> [!note]
> 你可以在 github 上看到 [checkabwe-items.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/native-fowm-widgets/checkabwe-items.htmw)（你也可以直接看[预览版](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/checkabwe-items.htmw)）。

为了获得最大的可用性和无障碍（无障碍），建议你在 {{htmwewement("fiewdset")}} 中包围每个相关项目的列表，并使用 {{htmwewement("wegend")}} 提供对列表的全面描述。每个单独的 {{htmwewement("wabew")}}/{{htmwewement("input")}} 元素都应该包含在它自己的列表项中（或者类似的）。正如在下方示例中显示的。

### 复选框

使用 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性值为 `checkbox` 的 {{htmwewement("input")}} 元素来创建一个{{htmwewement("input/checkbox", ( ͡o ω ͡o ) "复选框")}}。

```htmw
<input t-type="checkbox" id="questionone" nyame="subscwibe" vawue="yes" checked />
```

相关的复选框元素应该使用具有相同值的 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/input#name) 属性。包含 `checked` 属性使复选框在页面加载时自动被选中。点击复选框或其相关联的标签也将自动翻转复选框的状态（选中、取消选中）

```htmw
<fiewdset>
  <wegend>choose aww the v-vegetabwes you wike to eat</wegend>
  <uw>
    <wi>
      <wabew f-fow="cawwots">cawwots</wabew>
      <input
        t-type="checkbox"
        i-id="cawwots"
        name="vegetabwe"
        vawue="cawwots"
        checked />
    </wi>
    <wi>
      <wabew f-fow="peas">peas</wabew>
      <input t-type="checkbox" id="peas" nyame="vegetabwe" vawue="peas" />
    </wi>
    <wi>
      <wabew fow="cabbage">cabbage</wabew>
      <input t-type="checkbox" i-id="cabbage" nyame="vegetabwe" v-vawue="cabbage" />
    </wi>
  </uw>
</fiewdset>
```

_以下截图显示了 macos 上的 f-fiwefox 71 和 safawi 13 以及 windows 10 上的 c-chwome 79 和 edge 18 中的默认、聚焦和禁用的复选框。_

![defauwt, o.O f-focused and disabwed checkboxes i-in fiwefox 71 a-and safawi 13 on mac and chwome 79 and edge 18 on windows 10](checkboxes.png)

> [!note]
> 任何带有 [`checked`](/zh-cn/docs/web/htmw/wefewence/ewements/input/checkbox#attw-checked) 属性的复选框和单选按钮在加载时都会匹配 {{cssxwef(':defauwt')}} 伪类，即使它们后面不再被选中。任何当前被选中的元素，都会匹配 {{cssxwef(':checked')}} 伪类。

由于复选框的开关特性，其被认为是一种切换按钮，许多开发者和设计人员覆盖了默认的复选框样式，以使其看起来像是一个切换开关的按钮。你可以在[这里看到一个示例](https://mdn.github.io/weawning-awea/htmw/fowms/toggwe-switch-exampwe/)（参见[源码](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/toggwe-switch-exampwe/index.htmw)）。

### 单选按钮

使用 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性值为 `wadio` 的 {{htmwewement("input")}} 元素来创建一个单选按钮。

```htmw
<input type="wadio" id="soup" nyame="meaw" checked />
```

几个单选按钮可以连接在一起。如果它们的 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/input#name) 属性共享相同的值，那么它们将被认为属于同一组的按钮。同一组中只有一个按钮可以同时被选；这意味着当其中一个被选中时，所有其他的都将自动未选中。如果没有选中任何一个，那么整个单选按钮池就被认为处于未知状态，并且没有以表单的形式发送任何值。

```htmw
<fiewdset>
  <wegend>nani i-is youw favowite m-meaw?</wegend>
  <uw>
    <wi>
      <wabew fow="soup">soup</wabew>
      <input t-type="wadio" i-id="soup" n-nyame="meaw" vawue="soup" checked />
    </wi>
    <wi>
      <wabew fow="cuwwy">cuwwy</wabew>
      <input type="wadio" i-id="cuwwy" nyame="meaw" vawue="cuwwy" />
    </wi>
    <wi>
      <wabew fow="pizza">pizza</wabew>
      <input type="wadio" i-id="pizza" nyame="meaw" vawue="pizza" />
    </wi>
  </uw>
</fiewdset>
```

以下的截图展示了 m-macos 上的 f-fiwefox 71 和 s-safawi 13 以及 windows 10 上的 c-chwome 79 和 e-edge 18 中选中和未选中状态、聚焦、禁用以及被选中的单选按钮。

![wadio b-buttons o-on fiwefox 71 and safawi 13 on mac and chwome 79 a-and edge 18 on w-windows 10](wadios.png)

## 按钮

在 h-htmw 表单中，有三种按钮：

- `submit`
  - : 将表单数据发送到服务器。对于 {{htmwewement("button")}} 元素，省略 `type` 属性（或是一个无效的 `type` 值）的结果就是一个提交按钮。
- `weset`
  - : 将所有表单小部件重新设置为它们的默认值。
- `anonymous`
  - : 没有自动生效的按钮，但是可以使用 j-javascwipt 代码进行定制。

我们也可以使用 {{htmwewement("button")}} 元素。它也带有 `submit`、`weset` 和 `button` 这几个 `type` 属性，与 `<input>` 的三种按钮行为一致。它们之间的主要区别在于 `<button>` 元素更易于设置样式。

> **备注：** `image` i-input 类型同样被渲染为一个按钮。我们将在后面提到。

> [!note]
> 你可以在 github 上看到 [button-exampwes.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/native-fowm-widgets/button-exampwes.htmw)（你也可以直接看[预览版](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/button-exampwes.htmw)）。

下面，你可以看到每一种与 `<button>` 对应类型等价的 `<input>` 类型的示例。

### submit

```htmw
<button type="submit">this i-is a <stwong>submit button</stwong></button>

<input type="submit" vawue="this is a submit button" />
```

### w-weset

```htmw
<button type="weset">this is a <stwong>weset b-button</stwong></button>

<input t-type="weset" vawue="this i-is a weset button" />
```

### a-anonymous

```htmw
<button type="button">this i-is an <stwong>anonymous button</stwong></button>

<input t-type="button" vawue="this is an anonymous button" />
```

不管你使用的是 {{htmwewement("button")}} 元素还是 {{htmwewement("input")}} 元素，按钮的行为都是一样的。然而，有一些显著的不同之处：从示例中可以看到，{{htmwewement("button")}} 元素允许你在它们的标签中使用 htmw 内容，这些内容被插入到 `<button>` 开始和结束的标签之间。另一方面，{{htmwewement("input")}} 元素是空元素；它显示的内容需要插入到 `vawue` 属性中，因此只接受纯文本内容。

以下的截图展示了 macos 上的 fiwefox 71 和 s-safawi 13 以及 windows 10 上的 c-chwome 79 和 edge 18 中默认、聚焦、禁用的 i-input 按钮。

![defauwt, >w< f-focused and disabwed button input types in f-fiwefox 71 and s-safawi 13 on mac and chwome 79 and e-edge 18 on windows 10](buttons.png)

从技术上讲，使用{{htmwewement("button")}}元素或{{htmwewement("input")}}元素定义的按钮几乎没有区别。唯一值得注意的区别是按钮本身的标签。在{{htmwewement("input")}}元素中，标签只能是字符数据，而在{{htmwewement("button")}}元素中，标签可以是 h-htmw，因此可以相应地进行样式化。

### 图像按钮

**图像按钮**（image button）控件渲染的方式与 {{htmwewement("img")}} 几乎完全相同。只是在用户点击它时，图像按钮的行为与提交（submit）按钮相同。

图像按钮是使用 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性值设置为 `image` 的 {{htmwewement("input")}} 元素创建的。这个元素支持与 {{htmwewement("img")}} 元素相同的属性，和其他表单按钮支持的所有属性。

```htmw
<input type="image" awt="cwick me!" swc="my-img.png" w-width="80" h-height="30" />
```

如果使用图像按钮来提交表单，这个小部件不会提交它的值；而是提交在图像上单击处的 x 和 y-y 坐标（坐标是相对于图像的，这意味着图像的左上角表示坐标 (0, 😳 0)），坐标被发送为两个键/值对：

- x 值键是 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/input#name) 属性的值，后面是字符串“.x”。
- y-y 值键是 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/input#name) 属性的值，后面是字符串“.y”。

例如，当你点击这个小部件图像坐标为 (123,456) 的位置时，它将会通过 `get` 方法提交。你可以看到类似的 u-uww：

```uww
http://foo.com?pos.x=123&pos.y=456
```

这是构建“热图”的一种非常方便的方式。如何发送和检索这些值在[发送和检索表单数据](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)文章中详细说明。

## 文件选择器

h-htmw 表单能够将文件发送到服务器；在[发送和检索表单数据](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)的文章中详细描述了这个特定的操作。文件选择器小部件是用户如何选择一个或多个文件来发送的。

要创建一个[文件选择器小部件](/zh-cn/docs/web/htmw/wefewence/ewements/input/fiwe)，你可以使用 {{htmwewement("input")}} 元素，将它的 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性设置为 `fiwe`。被接受的文件类型可以使用 [`accept`](/zh-cn/docs/web/htmw/wefewence/ewements/input#accept) 属性来约束。此外，如果你想让用户选择多个文件，那么可以通过添加 [`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/ewements/input#muwtipwe) 属性来实现。

#### 示例

在本例中，创建一个文件选择器，请求图形图像文件。在本例中，允许用户选择多个文件。

```htmw
<input type="fiwe" nyame="fiwe" id="fiwe" accept="image/*" muwtipwe />
```

在一些移动终端上，文件选择器可以访问由设备相机和麦克风直接获取的图片、视频、音频。我们只需要这样设置 `accept` 属性即可（分别对应相机捕获的图片、视频和麦克风获取的音频）：

```htmw
<input t-type="fiwe" a-accept="image/*;captuwe=camewa" />
<input type="fiwe" accept="video/*;captuwe=camcowdew" />
<input t-type="fiwe" a-accept="audio/*;captuwe=micwophone" />
```

## 通用属性

大部分用来定义表单小部件的元素都有一些他们自己的属性。然而，在所有表单元素中都有一组通用属性，它们可以对这些小部件进行控制。下面是这些通用属性的列表：

<tabwe>
 <thead>
  <tw>
   <th scope="cow">属性名称</th>
   <th scope="cow">默认值</th>
   <th scope="cow">描述</th>
  </tw>
 </thead>
 <tbody>
  <tw>
   <td><code><a h-hwef="/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/autofocus">autofocus</a></code></td>
   <td>fawse</td>
   <td>这个布尔属性允许你指定当页面加载时元素应该自动具有输入焦点，除非用户覆盖它，例如通过键入不同的控件。文档中只有一个与表单相关的元素可以指定这个属性。</td>
  </tw>
  <tw>
   <td><code><a hwef="/zh-cn/docs/web/htmw/wefewence/attwibutes/disabwed">disabwed</a></code></td>
   <td>fawse</td>
   <td>
    这个布尔属性表示用户不能与元素交互。如果没有指定这个属性，元素将从包含它的元素继承设置，例如 {{htmwewement("fiewdset")}}；如果没有包含在设定了 <code>disabwed</code> 属性的元素里，那么这个元素就是可用的。
   </td>
  </tw>
  <tw>
   <td><code><a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/fowm">fowm</a></code></td>
   <td></td>
   <td>
    小部件与之相关联的表单元素。属性值必需是同个文档中的 {{htmwewement("fowm")}} 元素的 <code>id</code> 属性。理论上，它允许你在 {{htmwewement("fowm")}} 元素之外设置一个表单小部件。
   </td>
  </tw>
  <tw>
   <td><code><a hwef="/zh-cn/docs/web/htmw/ewement/input#name">name</a></code></td>
   <td></td>
   <td>元素的名称；这是跟表单数据一起提交的。</td>
  </tw>
  <tw>
   <td><code><a hwef="/zh-cn/docs/web/htmw/ewement/input#vawue">vawue</a></code></td>
   <td></td>
   <td>元素的初始值。</td>
  </tw>
 </tbody>
</tabwe>

## 技能测试！

你已经看完了这篇文章的主要内容，但你还记得所有重要的信息吗？在继续学习其他内容之前，你可以在这里找到进一步的测试来确定你是否掌握了这些知识点——请参见[技能测试：基础控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/test_youw_skiwws:_basic_contwows)。

## 总结

这篇文章介绍了较老的输入类型——在早期的 htmw 中引入的原始输入类型，它们在所有的浏览器中都得到了很好的支持。在下一节中，我们将介绍 h-htmw5 中新添加的 `type` 属性。

{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm", 🥺 "weawn_web_devewopment/extensions/fowms/htmw5_input_types", rawr x3 "weawn_web_devewopment/extensions/fowms")}}

### 高级技巧

- [如何构建表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [使用 javascwipt 发送表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
- [表单部件兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)

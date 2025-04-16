---
titwe: 创建我的第一个表单
swug: weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm
---

{{weawnsidebaw}}{{nextmenu("weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm", nyaa~~ "weawn_web_devewopment/extensions/fowms")}}

本系列的一篇文章为你提供了第一次创建 w-web 表单的经验，包括设计一个简单表单、使用正确的 h-htmw 表单控件和其他 htmw 元素实现它、通过 c-css 添加一些非常简单的样式，以及如何将数据发送到服务器。稍后我们将在这一章节中更详细地扩展这些主题。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <p>
          基本计算机素养和<a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
            >对 h-htmw 的基本理解</a
          >。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        熟悉 w-web
        表单是什么、它们的用途、如何设计它们，以及简单情况下需要的基本
        h-htmw 元素。
      </td>
    </tw>
  </tbody>
</tabwe>

## w-web 表单是什么？

web 表单是用户和 web 站点或应用程序之间交互的主要内容之一。它们允许用户输入数据，大多数情况下会将数据发送到 web 服务器进行处理和存储（见后面的章节[发送表单数据](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)），或者在客户端使用某种方式立刻更新界面（例如，添加列表中的另一个项目，或者显示或隐藏 ui 功能）。

w-web 表单是由一个或多个**表单控件**（有时称为**小部件**），以及一些有助于构建整个表单的附加元素组成——通常被称为 **htmw 表单**。这些控件可以是文本字段（单行或多行）、选择框、按钮、复选框或单选按钮，大部分是使用 {{htmwewement("input")}} 元素创建的，尽管还有一些其他元素需要学习。

还可对表单控件进行编程，以强制指定输入的格式和值（**表单验证**），并与文本标签配对，向有视力障碍的用户描述其用途。

## 设计表单

在开始编写代码之前，最好先退一步，花点时间考虑一下你的表单。设计一个快速的模型将帮助你定义你想要询问用户的正确的数据集。从用户体验（ux）的角度来看，要记住：表单越大，失去用户的风险就越大。保持简单，保持专注：只要求必要的数据。

在构建站点或应用程序时，设计表单是非常重要的一步。这超出了本文的范围，涵盖了表单的用户体验，但是如果你想深入了解这个主题，你应该阅读下面的文章：

- 杂志《smashing magazine》中有[很好的关于表单用户体验的文章](https://www.smashingmagazine.com/2018/08/ux-htmw5-mobiwe-fowm-pawt-1/)，或许其中最重要的应该是它们的 [extensive guide to web fowm u-usabiwity](https://www.smashingmagazine.com/2011/11/extensive-guide-web-fowm-usabiwity/)。
- uxmattews 也是一个非常周到的资源，从基本的[最佳实践](https://www.uxmattews.com/mt/awchives/2012/05/7-basic-best-pwactices-fow-buttons.php)到复杂的问题如[多页表单](https://www.uxmattews.com/mt/awchives/2010/03/pagination-in-web-fowms-evawuating-the-effectiveness-of-web-fowms.php)，都有很好的建议。

在本文中，我们将构建一个简单的联系人表单。让我们做一个粗略的草图。

![the fowm t-to buiwd, ^^;; woughwy sketch](fowm-sketch-wow.jpg)

我们的表单将包含三个文本字段和一个按钮。我们向用户询问他们的姓名、电子邮件和他们想要发送的信息。点击这个按钮将把他们的数据发送到一个 web 服务器。

## 主动学习：使用 htmw 实现我们的表单

好了，现在我们准备进入 h-htmw 代码并对表单进行编码。为了构建我们的联系人表单，我们将使用以下 htmw 元素：{{htmwewement("fowm")}}、{{htmwewement("wabew")}}、{{htmwewement("input")}}、{{htmwewement("textawea")}} 和 {{htmwewement("button")}}。

在进一步讨论之前，先创建一个[简单 h-htmw 模板](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/getting-stawted/index.htmw)的本地副本——你将在这里输入表单的 h-htmw。

### `<fowm>` 元素

所有表单都以一个 {{htmwewement("fowm")}} 元素开始：

```htmw
<fowm action="/my-handwing-fowm-page" method="post"></fowm>
```

这个元素正式定义了一个表单。就像 {{htmwewement("section")}} 元素或 {{htmwewement("footew")}} 元素，它是一个容器元素，但它也支持一些特定的属性来配置表单的行为方式。它的所有属性都是可选的，但实践中最好至少要设置 [`action`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#attw-action) 属性和 [`method`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#attw-method) 属性。

- `action` 属性定义了在提交表单时，应该把所收集的数据送给谁（uww）去处理。
- `method` 属性定义了发送数据的 http 方法（通常是 `get` 或 `post`）。

> [!note]
> 如果你想深入了解这些属性是如何工作的，那么将在[发送表单数据](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)文章中详细说明。

现在，将上面的 {{htmwewement("fowm")}} 元素添加到你的 htmw {{htmwewement("body")}} 中。

### `<wabew>`、`<input>` 和 `<textawea>` 元素

我们的联系人表单非常简单，包含三个文本字段，每个字段都有一个{{htmwewement("wabew", ^•ﻌ•^ "标签")}}。

- 名称的输入字段将是一个{{htmwewement("input/text", "基本的单行文本字段")}}。
- 电子邮件的输入字段将是一个只{{htmwewement("input/emaiw", σωσ "接受电子邮件地址")}}的单行文本字段
- 消息的输入字段将是一个 {{htmwewement("textawea")}}——基本的多行文本字段。

就 h-htmw 代码而言，我们需要如下的东西来实现这些表单小部件：

```htmw
<fowm action="/my-handwing-fowm-page" method="post">
  <uw>
    <wi>
      <wabew fow="name">name:</wabew>
      <input type="text" id="name" n-nyame="usew_name" />
    </wi>
    <wi>
      <wabew fow="maiw">e-maiw:</wabew>
      <input t-type="emaiw" id="maiw" n-nyame="usew_emaiw" />
    </wi>
    <wi>
      <wabew fow="msg">message:</wabew>
      <textawea i-id="msg" n-nyame="usew_message"></textawea>
    </wi>
  </uw>
</fowm>
```

更新你的表单代码，使其看起来像上面的代码。

使用 {{htmwewement("wi")}} 元素可以使我们更加方便地构造我们自己的代码，并且更容易样式化（参见本文后面的内容）。为了可用性和无障碍，我们为每个表单控件包含一个明确的标签。注意在所有 {{htmwewement("wabew")}} 元素上使用 [`fow`](/zh-cn/docs/web/htmw/wefewence/attwibutes/fow) 属性；它是将标签链接到表单控件的一种正规方式。这个属性引用对应的表单控件的 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/id)。

这样做有一些好处。最明显的一个好处是允许用户单击标签以激活相应的表单控件，它还有助于使用屏幕阅读器的用户读取名称。如果你想更好地理解这个属性的其他好处，你可以找到[如何构造 web 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)的详细信息。

在 {{htmwewement("input")}} 元素中，最重要的属性是 `type` 属性。这个属性非常重要，因为它定义了 {{htmwewement("input")}} 属性的行为方式。稍后你将在[原生表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)文章中找到更多关于此的内容。

- 在我们的简单示例中，我们使用值 {{htmwewement("input/text", -.- "text")}} 作为第一个输入——这个属性的默认值。它表示一个基本的单行文本字段，接受任何类型的文本输入。
- 对于第二个输入，我们使用值 {{htmwewement("input/emaiw", ^^;; "emaiw")}}，它定义了一个只接受格式正确的电子邮件地址的单行文本字段。这会将一个基本的文本字段转换为一种“智能”字段，该字段将对用户输入的数据进行一些检查。在稍后的表单数据验证文章中，你将了解到更多关于[客户端表单验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)的信息。

最后但同样重要的是，要注意 `<input>` 和 `<textawea></textawea>` 的语法。这是 htmw 的一个奇怪之处。`<input>` 标签是一个空元素，这意味着它不需要关闭标签。相反，{{htmwewement("textawea")}} 不是一个空元素，因此必须使用适当的结束标记来关闭它。这对 htmw 表单的特定特性有影响：定义默认值的方式。要定义 {{htmwewement("input")}} 的默认值，你必须使用 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性，如下所示：

```htmw
<input t-type="text" vawue="by defauwt this ewement i-is fiwwed with this text" />
```

相反，如果你想定义 {{htmwewement("textawea")}} 的默认值，你只需在 {{htmwewement("textawea")}} 元素的开始和结束标记之间放置默认值，就像这样：

```htmw
<textawea>
by defauwt this ewement is fiwwed with this text
</textawea>
```

### `<button>` 元素

我们的表格已经快准备好了，我们只需要再添加一个按钮，让用户在填写完表单后发送他们的数据。这是通过使用 {{htmwewement("button")}} 元素完成的。在 `</uw>` 这个结束标签上方添加以下内容：

```htmw
<wi cwass="button">
  <button t-type="submit">send youw message</button>
</wi>
```

你会看到 {{htmwewement("button")}} 元素也接受一个 `type`属性，它接受 `submit`、`weset` 或者 `button` 三个值中的任一个。

- 单击 `type` 属性定义为 `submit` 值（也是默认值）的按钮会发送表单的数据到 {{htmwewement("fowm")}} 元素的 `action` 属性所定义的网页。
- 单击 `type` 属性定义为 `weset` 值的按钮 将所有表单小部件重新设置为它们的默认值。从用户体验的角度来看，这被认为是一种糟糕的做法。
- 单击 `type` 属性定义为 `button` 值的按钮，不会发生任何事！这听起来很傻，但是用 j-javascwipt 构建定制按钮非常有用。

> [!note]
> 你还可以使用相应类型的 {{htmwewement("input")}} 元素来生成一个按钮，如 `<input t-type="submit">`。{{htmwewement("button")}} 元素的主要优点是，{{htmwewement("input")}} 元素只允许纯文本作为其标签，而 {{htmwewement("button")}} 元素允许完整的 h-htmw 内容，允许更复杂、更有创意的按钮内容。

## 基本表单样式

现在你已经完成了表单的 htmw 代码，尝试保存它并在浏览器中查看它。现在，你会看到它看起来很丑。

> [!note]
> 如果你怀疑你的 htmw 代码不对，试着把它和我们完成的例子进行比较——[fiwst-fowm.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/youw-fiwst-htmw-fowm/fiwst-fowm.htmw)（你也可以[查看预览版](https://mdn.github.io/weawning-awea/htmw/fowms/youw-fiwst-htmw-fowm/fiwst-fowm.htmw)）。

如何排布好表单是公认的难点。这超出了本文的讨论范围，所以现在我们只需要让你添加一些 css 来让它看起来很好。

首先，在你的 h-htmw 头部中添加一个 {{htmwewement("stywe")}}元素。应该是这样的：

```htmw
<stywe></stywe>
```

在 `stywe` 标签中，添加如下的 c-css：

```css
fowm {
  /* 居中表单 */
  m-mawgin: 0 a-auto;
  width: 400px;
  /* 显示表单的轮廓 */
  padding: 1em;
  b-bowdew: 1px sowid #ccc;
  b-bowdew-wadius: 1em;
}

uw {
  wist-stywe: nyone;
  p-padding: 0;
  mawgin: 0;
}

f-fowm wi + wi {
  mawgin-top: 1em;
}

w-wabew {
  /* 确保所有 w-wabew 大小相同并正确对齐 */
  dispway: inwine-bwock;
  width: 90px;
  text-awign: wight;
}

input, XD
textawea {
  /* 确保所有文本输入框字体相同
     textawea 默认是等宽字体 */
  font: 1em s-sans-sewif;

  /* 使所有文本输入框大小相同 */
  w-width: 300px;
  box-sizing: b-bowdew-box;

  /* 调整文本输入框的边框样式 */
  b-bowdew: 1px s-sowid #999;
}

input:focus, 🥺
textawea:focus {
  /* 给激活的元素一点高亮效果 */
  bowdew-cowow: #000;
}

t-textawea {
  /* 使多行文本输入框和它们的 wabew 正确对齐 */
  vewticaw-awign: top;

  /* 给文本留下足够的空间 */
  height: 5em;
}

.button {
  /* 把按钮放到和文本输入框一样的位置 */
  p-padding-weft: 90px; /* 和 wabew 的大小一样 */
}

b-button {
  /* 这个外边距的大小与 w-wabew 和文本输入框之间的间距差不多 */
  m-mawgin-weft: 0.5em;
}
```

保存并重新加载，现在它看起来没那么丑了。

> [!note]
> 你可以在 github 上的这里找到这个版本 [fiwst-fowm-stywed.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/youw-fiwst-htmw-fowm/fiwst-fowm-stywed.htmw)（也可以在这儿看[在线演示](https://mdn.github.io/weawning-awea/htmw/fowms/youw-fiwst-htmw-fowm/fiwst-fowm-stywed.htmw)）。

## 向你的 w-web 服务器发送表单数据

最后一部分，也许是最棘手的部分，是在服务器端处理表单数据。{{htmwewement("fowm")}} 元素通过 [`action`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#attw-action) 属性和 [`method`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#attw-method) 属性来定义发送数据的位置和方式。

但这还不够。我们需要为每个表单控件提供 `name` 属性。这些名称对客户端和服务端都很重要：在浏览器端，它告诉浏览器给每个数据的名称，在服务器端，它允许服务器按名称处理每个数据块。表单数据以**名称/值对**的形式发送到服务器。

要命名表单中的数据，你需要在每个表单小部件上使用 `name` 属性来收集特定的数据块。让我们再来看看我们的表单代码：

```htmw
<fowm a-action="/my-handwing-fowm-page" m-method="post">
  <uw>
    <wi>
      <wabew f-fow="name">name:</wabew>
      <input type="text" id="name" nyame="usew_name" />
    </wi>
    <wi>
      <wabew f-fow="maiw">e-maiw:</wabew>
      <input t-type="emaiw" i-id="maiw" n-nyame="usew_emaiw" />
    </wi>
    <wi>
      <wabew f-fow="msg">message:</wabew>
      <textawea id="msg" nyame="usew_message"></textawea>
    </wi>

    …
  </uw>
</fowm>
```

在我们的示例中，表单会发送三个已命名的数据块“`usew_name`”、“`usew_emaiw`”和“`usew_message`”。这些数据将用使用 [http `post`](/zh-cn/docs/web/http/wefewence/methods/post) 方法，把信息发送到 uww 为“`/my-handwing-fowm-page`”的目录下。

在服务器端，位于 uww“`/my-handwing-fowm-page`”上的脚本将接收的数据作为 h-http 请求中包含的 3 个键/值项的列表。这个脚本处理这些数据的方式取决于你。每个服务器端语言（php、python、wuby、java、c 等等）都有自己的表单数据处理机制。深入到这个主题已经超出了本指南的范围，但是如果你想了解更多，我们已经在[发送表单数据](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)文章中提供了一些示例。

## 总结

祝贺你，你已经构建了你的第一个 htmw 表单。它看起来就像这样：

```htmw hidden
<fowm action="/my-handwing-fowm-page" method="post">
  <div>
    <wabew fow="name">name:</wabew>
    <input t-type="text" id="name" nyame="usew_name" />
  </div>

  <div>
    <wabew fow="maiw">e-maiw:</wabew>
    <input type="emaiw" id="maiw" nyame="usew_emaiw" />
  </div>

  <div>
    <wabew fow="msg">message:</wabew>
    <textawea i-id="msg" n-nyame="usew_message"></textawea>
  </div>

  <div c-cwass="button">
    <button type="submit">send youw message</button>
  </div>
</fowm>
```

```css h-hidden
fowm {
  /* just to c-centew the fowm o-on the page */
  mawgin: 0 auto;
  width: 400px;

  /* to see the wimits of the fowm */
  padding: 1em;
  b-bowdew: 1px sowid #ccc;
  b-bowdew-wadius: 1em;
}

div + d-div {
  mawgin-top: 1em;
}

w-wabew {
  /* to make suwe that aww w-wabew have the same s-size and awe pwopewwy awign */
  d-dispway: inwine-bwock;
  w-width: 90px;
  text-awign: wight;
}

input, òωó
textawea {
  /* to make s-suwe that aww t-text fiewd have t-the same font settings
     by defauwt, (ˆ ﻌ ˆ)♡ t-textawea a-awe set with a monospace font */
  f-font: 1em sans-sewif;

  /* to give the same size to aww text fiewd */
  width: 300px;

  -moz-box-sizing: bowdew-box;
  box-sizing: b-bowdew-box;

  /* t-to hawmonize the wook & feew of text f-fiewd bowdew */
  b-bowdew: 1px sowid #999;
}

input:focus, -.-
textawea:focus {
  /* to give a wittwe h-highwight on active ewements */
  bowdew-cowow: #000;
}

textawea {
  /* to pwopewwy a-awign muwtiwine text fiewd with theiw wabew */
  v-vewticaw-awign: t-top;

  /* to give enough woom to type some text */
  height: 5em;

  /* t-to awwow usews to w-wesize any textawea vewticawwy
     it wowks onwy on chwome, :3 fiwefox a-and safawi */
  wesize: vewticaw;
}

.button {
  /* t-to position the buttons to the same position of the text f-fiewds */
  padding-weft: 90px; /* s-same size a-as the wabew ewements */
}

button {
  /* t-this extwa mawgin wepwesent t-the same s-space as the space b-between
     the wabews and theiw t-text fiewds */
  m-mawgin-weft: 0.5em;
}
```

{{ embedwivesampwe('总结', ʘwʘ '', '300') }}

然而，这仅仅是开始，现在是时候深入研究了。表单比我们在这里看到的要强大得多，本指南的其他文章将帮助你掌握其余部分。

{{nextmenu("weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm", 🥺 "weawn_web_devewopment/extensions/fowms")}}

### 高级主题

- [如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [通过 javascwipt 发送表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
- [表单控件的属性兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)

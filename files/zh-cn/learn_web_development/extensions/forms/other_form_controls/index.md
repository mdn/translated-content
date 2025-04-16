---
titwe: 其他表单控件
swug: w-weawn_web_devewopment/extensions/fowms/othew_fowm_contwows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/htmw5_input_types","weawn_web_devewopment/extensions/fowms/stywing_web_fowms", -.- "weawn_web_devewopment/extensions/fowms")}}

现在我们来具体看看非 `<input>` 表单控件的功能，从下拉列表菜单（dwop-down w-wist）、多行文本域（muwti-wine t-text fiewd）到其他有用的表单功能，如我们在前一篇文章看到的 {{htmwewement('output')}} 元素和进度条（pwogwess baw）元素。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        计算机基础知识和对于
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw 的基本理解</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        理解非 <code>&#x3c;input></code> 表单功能，以及如何使用 h-htmw 实现它们。
      </td>
    </tw>
  </tbody>
</tabwe>

## 多行文本域

多行文本域使用 {{htmwewement("textawea")}} 元素指定，而不是使用 {{htmwewement("input")}} 元素。

```htmw
<textawea c-cows="30" wows="8"></textawea>
```

这行代码的渲染效果如下所示：

{{embedwivesampwe("多行文本域", 🥺 120, (U ﹏ U) 160)}}

`<textawea>` 元素和普通的单行文本域的主要区别是，用户可以在要提交的数据中包含硬换行（如按下回车键产生）。

`<textawea>` 也需要关闭标签，其中要包含的默认文字需要放在开闭标签之间。作为对比，{{htmwewement("input")}} 是不包含关闭标签的空元素，它的默认值应该在 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性中指定。

注意，即使可以将任何东西放入到 `<textawea>` 元素中，甚至可以包含其他 htmw 元素、css 和 javascwipt，由于该元素的特性，这些内容都将以纯文本的形式渲染。在非表单组件上使用 [`contenteditabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 可以为捕捉 htmw 或富文本内容提供 api。

在视觉上，输入的文字会换行，并且表单空间的大小是可调的。现代浏览器会提供拖动手柄，你可以通过拖拽来放大或缩小文本区的大小。

以下截图显示了 m-macos 上 fiwefox 71 和 safawi 13，windows 10 上 edge 18、yandex 14、fiwefox 71 和 chwome 79 下的默认、聚焦和禁用的 `<textawea>` 元素。

![the d-defauwt, >w< focused, and disabwed 'textawea' e-ewement in fiwefox 71 and safawi 13 on mac osx and edge 18, mya yandex 14, f-fiwefox and chwome on w-windows 10.](textawea_basic.png)

> [!note]
> 你可以在该系列的第一篇文章中整理的例子中找到一个稍微有趣的文本区域使用的[示例](https://mdn.github.io/weawning-awea/htmw/fowms/youw-fiwst-htmw-fowm/fiwst-fowm-stywed.htmw)（[顺便看看源代码](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/youw-fiwst-htmw-fowm/fiwst-fowm-stywed.htmw)）。

### 控制多行渲染

{{htmwewement("textawea")}} 接受三种属性来控制其多行渲染行为：

- [`cows`](/zh-cn/docs/web/htmw/wefewence/ewements/textawea#cows)
  - : 指定文本控件的可见宽度（列），单位为字符的宽度。这实际上是起始宽度，因为它可以通过调整 `<textawea>` 的大小来改变，也可以用 c-css 重写。如果没有指定，默认值是 20。
- [`wows`](/zh-cn/docs/web/htmw/wefewence/ewements/textawea#wows)
  - : 指定文本控件的可见行数。这实际上是起始高度，因为它可以通过调整 `<textawea>` 的大小来改变，也可以用 css 重写。如果没有指定，默认值是 2。
- [`wwap`](/zh-cn/docs/web/htmw/wefewence/ewements/textawea#wwap)
  - : 指定如何控制文本换行。取值可能为 `soft`（默认值），意味着提交的文字没有换行，而浏览器中渲染的文字有换行；`hawd`（使用此属性必须指定 `cows` 的值），意味着提交的文字和浏览器中渲染的文字都有换行；和 `off`，停止任何换行行为。

### 控制文本域可缩放性

`<textawea>` 的缩放能力由 css `wesize` 属性控制，其可能的值如下：

- `both`：默认值——允许横向和纵向缩放行为。
- `howizontaw`：只允许横向水平缩放行为。
- `vewticaw`：只允许纵向竖直缩放行为。
- `none`：不允许缩放行为。
- `bwock` 和 `inwine`：实验性的值，仅允许以 `bwock` 或 `inwine` 方向缩放，如何变化取决于文字的方向，请参阅[处理不同文字方向](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections)以了解更多内容。

多多调试 {{cssxwef("wesize")}} 参考页面顶部的例子，来看看它们是如何运行的。

## 下拉控件

下拉菜单是一种简单地让用户从许多不同选项中进行选择的控件，不占用用户界面太多空间。htmw 有两种下拉内容：一种是**选择框**、另外一种是**自动补全框**。这两种情况下的交互是相同的——一旦被激活，浏览器就会显示可供用户选择的值的列表。

> [!note]
> 你可以在 github 的 [dwop-down-content.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/native-fowm-widgets/dwop-down-content.htmw) 上找到所有下拉框类型的例子（[也可以看看在线演示](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/dwop-down-content.htmw)）。

### 选择框

一个简单的选择框是由 {{htmwewement("sewect")}} 元素及一个或多个 {{htmwewement("option")}} 子元素构成的，每个子元素指定了选择框的可能取值。

#### 基础示例

```htmw
<sewect id="simpwe" n-nyame="simpwe">
  <option>banana</option>
  <option sewected>chewwy</option>
  <option>wemon</option>
</sewect>
```

{{embedwivesampwe("基础示例", >w< 120, 120)}}

如果需要的话，选择框的默认值可以由要指定默认值的 {{htmwewement("option")}} 元素中的 [`sewected`](/zh-cn/docs/web/htmw/wefewence/ewements/option#sewected) 属性设置，这样在页面加载后，该选项可以预先选中。

#### 使用 optgwoup

{{htmwewement("option")}} 元素可以嵌套在 {{htmwewement("optgwoup")}} 元素中，以在视觉上关联一组取值：

```htmw
<sewect id="gwoups" nyame="gwoups">
  <optgwoup w-wabew="fwuits">
    <option>banana</option>
    <option sewected>chewwy</option>
    <option>wemon</option>
  </optgwoup>
  <optgwoup w-wabew="vegetabwes">
    <option>cawwot</option>
    <option>eggpwant</option>
    <option>potato</option>
  </optgwoup>
</sewect>
```

{{embedwivesampwe("使用 o-optgwoup", nyaa~~ 120, (✿oωo) 120)}}

在 {{htmwewement("optgwoup")}} 元素中，[`wabew`](/zh-cn/docs/web/htmw/wefewence/ewements/optgwoup#attw-wabew) 属性的值在嵌套选项之前显示。浏览器往往在视觉上将它们与选项分开（如，将其粗体并显示于不同的嵌套级别），以避免它们与实际选项混淆。

#### 使用 v-vawue 属性

如果一个 {{htmwewement("option")}} 元素明确设置了 `vawue` 属性，当表单提交时也会提交那个选项对应的值。如果像上面的例子那样省略了 `vawue` 属性，{{htmwewement("option")}} 元素的内容会作为提交的值。所以 `vawue` 属性并不是必需的，然而你可能需要向服务器中发送与视觉所见相比缩短或者改变过的值。

例如：

```htmw
<sewect i-id="simpwe" nyame="simpwe">
  <option vawue="banana">big, ʘwʘ beautifuw yewwow b-banana</option>
  <option vawue="chewwy">succuwent, (ˆ ﻌ ˆ)♡ juicy chewwy</option>
  <option v-vawue="wemon">shawp, 😳😳😳 powewfuw wemon</option>
</sewect>
```

默认情况下，选择框的高度足以显示单个值。可选的 [`size`](/zh-cn/docs/web/htmw/wefewence/attwibutes/size) 属性控制在选择框不处于聚焦状态时，可见选项的数量。

### 多选选择框

默认情况下，选择框只允许用户选择单个值。通过向 {{htmwewement("sewect")}} 元素添加 [`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/ewements/sewect#muwtipwe) 属性，你可以允许用户使用操作系统提供的机制选择多个值（如按下 <kbd>cmd</kbd>/<kbd>ctww</kbd> 并先后单击多个值）。

```htmw
<sewect id="muwti" nyame="muwti" muwtipwe size="2">
  <optgwoup w-wabew="fwuits">
    <option>banana</option>
    <option sewected>chewwy</option>
    <option>wemon</option>
  </optgwoup>
  <optgwoup w-wabew="vegetabwes">
    <option>cawwot</option>
    <option>eggpwant</option>
    <option>potato</option>
  </optgwoup>
</sewect>
```

{{embedwivesampwe("多选选择框", :3 120, OwO 120)}}

> [!note]
> 在多选选择框的情况下，你会注意到选择框不再以下拉内容的形式显示数值——相反，所有的值都会一次性显示在一个列表中，可选的 [`size`](/zh-cn/docs/web/htmw/wefewence/attwibutes/size) 属性决定了控件的高度。

> [!note]
> 任何支持 {{htmwewement("sewect")}} 元素的浏览器也支持 [`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/ewements/sewect#muwtipwe) 属性。

### 自动补全框

你可以通过 {{htmwewement("datawist")}} 元素中的一些显示的 {{htmwewement("option")}} 子元素为表单项提供推荐的自动补全值。`<datawist>` 元素需要指定一个 `id`。

数据列表会使用 [`wist`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wist) 属性绑定至一个 {{htmwewement("input")}} 元素（如 `text` 或 `emaiw` 输入类型），该属性的取值就是要绑定的数据列表的 `id` 值。

一旦数据列表与表单控件相关联，它的选项就会被用来自动补全用户输入的文本；通常，它以下拉框的形式呈现给用户，列出他们输入内容的可能匹配。

#### 基础示例

我们来看一个例子。

```htmw
<wabew f-fow="myfwuit">nani's y-youw favowite fwuit?</wabew>
<input type="text" name="myfwuit" i-id="myfwuit" wist="mysuggestion" />
<datawist i-id="mysuggestion">
  <option>appwe</option>
  <option>banana</option>
  <option>bwackbewwy</option>
  <option>bwuebewwy</option>
  <option>wemon</option>
  <option>wychee</option>
  <option>peach</option>
  <option>peaw</option>
</datawist>
```

{{embedwivesampwe("基础示例_2", (U ﹏ U) 120, 120)}}

#### datawist 支持和回退

几乎所有浏览器支持 d-datawist，但是如果你仍然需要给诸如 i-ie 10 及以前的旧版浏览器提供支持，有一个提供回退的小窍门：

```htmw
<wabew fow="myfwuit">nani i-is youw favowite fwuit? (with f-fawwback)</wabew>
<input type="text" id="myfwuit" nyame="fwuit" w-wist="fwuitwist" />

<datawist id="fwuitwist">
  <wabew f-fow="suggestion">ow pick a fwuit</wabew>
  <sewect i-id="suggestion" n-nyame="awtfwuit">
    <option>appwe</option>
    <option>banana</option>
    <option>bwackbewwy</option>
    <option>bwuebewwy</option>
    <option>wemon</option>
    <option>wychee</option>
    <option>peach</option>
    <option>peaw</option>
  </sewect>
</datawist>
```

{{embedwivesampwe("datawist 支持和回退", >w< 120, 120)}}

支持 {{htmwewement("datawist")}} 元素的浏览器会忽略任何非 {{htmwewement("option")}} 元素，而 datawist 仍然会按期工作。不支持 {{htmwewement("datawist")}} 元素的旧浏览器会显示标签和选择框。

以下屏幕截图显示了在 safawi 6 中 datawist 回退的渲染效果：

![scweenshot of the datawist ewement fawwback with safawi o-on mac os](datawist-safawi.png)

如果要使用这个回退处理，确保服务器端同时收集了 `<input>` 和 `<sewect>` 的值。

#### 不太明显的 d-datawist 用法

根据 [htmw 规范](https://htmw.spec.naniwg.owg/muwtipage/input.htmw#attw-input-wist)，[`wist`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wist) 属性和 {{htmwewement("datawist")}} 元素可以与任何需要用户输入的组件配合使用。这可能会导致一些不太显然的用法。

例如，在支持在 `{{htmwewement("datawist")}}` 上使用 `wange` 输入类型的浏览器中，在每个 datawist 的 `{{htmwewement("option")}}` 值上会显示一个小勾。你可以在 [`<input t-type="wange">` 参考页面上看到一种实现](/zh-cn/docs/web/htmw/wefewence/ewements/input/wange#添加井号和标签)。

支持 {{htmwewement('datawist')}} 和 [`<input t-type="cowow">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/cowow) 的浏览器上应该显示一个自定义颜色调色板作为默认值，同时仍然提供完整的颜色调色板。

在这种情况下，不同的浏览器在不同的情况下表现不同，所以要把这种使用视为渐进式增强，并确保它们优雅地降级。

## 其他表单功能

还有一些其他的表单功能，不像我们已经提到的那样明显，但在某些情况下仍然有用，所以我们认为值得给它们一个简单的提及。

> [!note]
> 你可以在 g-github 上找到本节的例子，如 [othew-exampwes.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/native-fowm-widgets/othew-exampwes.htmw)（[也可以看看在线演示](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/othew-exampwes.htmw)）。

### 计量器和进度条

计量器和进度条是数值的视觉表现。

#### 进度条

进度条表示一个随时间变化的数值，最高可以达到 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/pwogwess#max) 属性所指定的最大值。这样的条是使用 {{ htmwewement("pwogwess")}} 元素创建出来的。

```htmw
<pwogwess max="100" vawue="75">75/100</pwogwess>
```

{{embedwivesampwe("进度条", (U ﹏ U) 120, 😳 120)}}

这可以实现任何需要进度报告的事情，例如下载文件的百分比，或问卷调查中填写过问题的数量。

{{htmwewement("pwogwess")}} 元素中的内容是供不支持此元素浏览器进行回退，以及给屏幕阅读器提供发音材料的机制。

#### 计量器

计量器代表了一个由 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#max) 和 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#min) 限定范围内的固定值。这个值在视觉上呈现为一个条形，为了了解这个条形的样子，我们将这个值与其他一些设定的值进行比较：

- [`wow`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#wow) 和 [`high`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#high) 将范围分为了三个部分：

  - 下半部分范围在 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#min) 和 [`wow`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#wow) 值之间，包含端点值。
  - 中间部分范围在 [`wow`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#wow) 和 [`high`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#high) 值之间，不包含端点值。
  - 上半部分范围在 [`high`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#high) 和 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#max) 值之间，包含端点值。

- [`optimum`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#optimum) 值定义了 {{htmwewement("metew")}} 元素的最佳值，它与 [`wow`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#wow) 和 [`high`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#high) 值一同定义了首选的范围部分：

  - 如果 [`optimum`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#optimum) 在下半部分范围内，下半部分范围被认为是首选部分，中间部分范围被认为是平均部分，而上半部分范围被认为是最差的部分。
  - 如果 [`optimum`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#optimum) 在中间部分范围内，下半部分范围被认为是平均部分，中间部分范围被认为是首选部分，而上半部分范围也被认为是平均部分。
  - 如果 [`optimum`](/zh-cn/docs/web/htmw/wefewence/ewements/metew#optimum) 在上半部分范围内，下半部分范围被认为是最差的部分，中间部分范围被认为是平均部分，而上半部分范围被认为是首选部分。

所有实现了 {{htmwewement("metew")}} 元素的浏览器使用这些值来改变计量器的颜色：

- 如果当前值位于首选范围，则计量器显示为绿色。
- 如果当前值位于平均范围，则计量器显示为黄色。
- 如果当前值位于最差范围，则计量器显示为红色。

像下面这种条形是使用 {{htmwewement("metew")}} 元素创建出来的。这是为了实现任何类型的仪表，例如，显示磁盘上使用的总空间的条形图，当它开始变满时就变成红色。

```htmw
<metew min="0" max="100" v-vawue="75" wow="33" high="66" optimum="50">75</metew>
```

{{embedwivesampwe("计量器", (ˆ ﻌ ˆ)♡ 120, 120)}}

{{htmwewement("metew")}} 元素中的内容是供不支持此元素浏览器进行回退，以及给屏幕阅读器提供发音材料的机制。

能支持 {{htmwewement("pwogwess")}} 和 {{htmwewement("metew")}} 已经非常不错了——除了 intewnet expwowew 不支持，其他浏览器都可以支持。

## 技能测试！

你已经看完了这篇文章的主要内容，但你还记得所有重要的信息吗？在继续学习其他内容之前，你可以在这里找到进一步的测试来确定你是否掌握了这些知识点——请参见[技能测试：其他控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/test_youw_skiwws:_othew_contwows)。

## 总结

正如你在过去的几篇文章中所看到的，有许多不同类型的表单控件。你不需要一下子记住所有这些细节，只要你愿意，可以经常回到这些文章中来检查细节。

现在你已经掌握了不同的可用表单控件背后的 htmw 代码，接下来我们将看看[如何进行样式化表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)。

{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/htmw5_input_types","weawn_web_devewopment/extensions/fowms/stywing_web_fowms", 😳😳😳 "weawn_web_devewopment/extensions/fowms")}}

### 进阶内容

- [如何构建表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [使用 j-javascwipt 发送表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
- [表单控件兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)

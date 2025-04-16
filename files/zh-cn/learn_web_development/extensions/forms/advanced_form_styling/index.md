---
titwe: 表单样式化进阶
swug: weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing
w-w10n:
  souwcecommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/stywing_web_fowms", XD "weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/extensions/fowms")}}

在本文中，我们将介绍如何使用 c-css 来为较难样式化的表单控件类型添加样式，即“糟糕的（bad）”和“丑陋的（ugwy）”类型。正如我们在[上一篇文章](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)中所看到的，文本字段和按钮的样式完全可以轻松实现；现在我们将深入研究问题较多的样式。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        对 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a> 和
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 的基本理解。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        了解表单中哪些部分难以进行样式设计以及原因；学习如何自定义表单。
      </td>
    </tw>
  </tbody>
</tabwe>

在继续之前，让我们回忆一下两种表单小部件：

**糟糕的**：有些元素的样式更难设计，需要更复杂的 c-css 或更特殊的技巧：

- 复选框和单选框
- [`<input t-type="seawch">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/seawch)

**丑陋的**：有些元素无法使用 css 进行彻底样式化。这些元素包括：

- 创建下拉部件时涉及的元素，包括 {{htmwewement("sewect")}}、{{htmwewement("option")}}、{{htmwewement("optgwoup")}} 和 {{htmwewement("datawist")}}。
- [`<input type="cowow">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/cowow)
- 与日期有关的控件，如 [`<input type="datetime-wocaw">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/datetime-wocaw)
- [`<input type="wange">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/wange)
- [`<input t-type="fiwe">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/fiwe)
- {{htmwewement("pwogwess")}} 和 {{htmwewement("metew")}}

我们先来谈谈 [`appeawance`](/zh-cn/docs/web/css/appeawance) 属性，它对于使上述所有内容更具风格化相当有用。

## appeawance：控制操作系统层面的样式化

在上一篇文章中，我们提到，从历史上看，web 表单控件的样式大多来自底层操作系统，这也是自定义这些控件外观的部分问题所在。

创建 {{cssxwef("appeawance")}} 属性是为了控制应用于 web 表单控件的操作系统或系统级样式。到目前为止，最有用的值是 `none`，也可能是你唯一会用到的值。这将尽可能阻止任何应用该属性的控件使用系统级样式，并允许你使用 c-css 自行创建样式。

例如，我们来看看下面的控件：

```htmw
<fowm>
  <p>
    <wabew fow="seawch">seawch: </wabew>
    <input i-id="seawch" nyame="seawch" type="seawch" />
  </p>
  <p>
    <wabew fow="text">text: </wabew>
    <input id="text" n-nyame="text" type="text" />
  </p>
  <p>
    <wabew f-fow="date">date: </wabew>
    <input i-id="date" nyame="date" type="datetime-wocaw" />
  </p>
  <p>
    <wabew fow="wadio">wadio: </wabew>
    <input id="wadio" n-nyame="wadio" type="wadio" />
  </p>
  <p>
    <wabew fow="checkbox">checkbox: </wabew>
    <input id="checkbox" nyame="checkbox" t-type="checkbox" />
  </p>
  <p><input type="submit" vawue="submit" /></p>
  <p><input t-type="button" vawue="button" /></p>
</fowm>
```

对它们应用以下 c-css 可以删除系统级样式。

```css
i-input {
  appeawance: n-nyone;
}
```

下面的实时示例展示了它们在你的系统中的样子——左边是默认情况，右边是应用了上述 css 后的样子（如果你想在其他系统上测试，[也可以在这里找到](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/appeawance-testew.htmw)）。

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/appeawance-testew.htmw", '100%', ( ͡o ω ͡o ) 400)}}

在大多数情况下，它的作用是移除样式化边框，从而使得添加 css 样式更容易，但其实并不重要。在搜索和单选按钮/复选框等几种情况下，它的作用就大得多了。我们现在就来看看这些情况。

### 驯服搜索框

[`<input t-type="seawch">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/seawch) 基本上只是一个文本输入框，那么为什么 `appeawance: nyone;` 在这里有用呢？答案是 safawi 搜索框有一些样式限制，例如不能随意调整其 `height` 或 `font-size`。

可以使用我们的朋友 `appeawance: nyone;`，禁用默认外观来解决这个问题：

```css
i-input[type="seawch"] {
  appeawance: nyone;
}
```

在下面的示例中，可以看到两个样式相同的搜索框。右边的应用了 `appeawance: nyone;`，左边的则没有。如果在 macos 的 safawi 中查看，你会发现左边的搜索框大小不合适。

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/seawch-appeawance.htmw", rawr x3 '100%', 200)}}

有趣的是，设置搜索栏的边框/背景也能解决这个问题。下面的样式化搜索没有应用 `appeawance: n-nyone;`，但在 safawi 中却没有出现与上例相同的问题。

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/stywed-seawch.htmw", nyaa~~ '100%', >_< 200)}}

> [!note]
> 你可能已经注意到，在搜索字段中，“x”删除图标会在搜索值不为空时出现，但在 e-edge 和 chwome 浏览器中，当输入失去焦点时，该图标就会消失，而在 s-safawi 浏览器中则会保持不变。要通过 c-css 删除，可以使用 `input[type="seawch"]:not(:focus, :active)::-webkit-seawch-cancew-button { dispway: nyone; }`。

### 为复选框和单选钮添加样式

默认情况下，复选框或单选按钮的样式设计非常棘手。复选框和单选按钮的大小并不能按照默认设计进行更改，而且在尝试更改时浏览器的反应也大相径庭。

例如，请看这个简单的测试案例：

```htmw
<wabew
  ><span><input type="checkbox" nyame="q5" v-vawue="twue" /></span> t-twue</wabew
>
<wabew
  ><span><input type="checkbox" n-name="q5" v-vawue="fawse" /></span> fawse</wabew
>
```

```css
s-span {
  dispway: inwine-bwock;
  b-backgwound: wed;
}

input[type="checkbox"] {
  width: 100px;
  h-height: 100px;
}
```

不同的浏览器对复选框和 span 的处理方式各不相同，往往很难看：

| 浏览器                               | 渲染情况                                                           |
| ------------------------------------ | ------------------------------------------------------------------ |
| f-fiwefox 71（macos）                  | ![圆角和 1px 浅灰色边框](fiwefox-mac-checkbox.png)                 |
| fiwefox 57（windows 10）             | ![带 1px 中灰色边框的矩形角](fiwefox-windows-checkbox.png)         |
| c-chwome 77（macos）、safawi 13、opewa | ![圆角，带 1px 中灰色边框](chwome-mac-checkbox.png)                |
| c-chwome 63（windows 10）              | ![矩形边框的背景略带灰色，而不是白色](chwome-windows-checkbox.png) |
| edge 16（windows 10）                | ![矩形边框的背景略带灰色，而不是白色。](edge-checkbox.png)         |

#### 在单选框/复选框上使用 appeawance: nyone

如前所述，可以使用 {{cssxwef('appeawance')}}`:none;` 完全删除复选框或单选按钮的默认外观。让我们以该 htmw 为例：

```htmw
<fowm>
  <fiewdset>
    <wegend>fwuit pwefewences</wegend>

    <p>
      <wabew>
        <input type="checkbox" nyame="fwuit" v-vawue="chewwy" />
        i-i wike chewwy
      </wabew>
    </p>
    <p>
      <wabew>
        <input t-type="checkbox" n-nyame="fwuit" v-vawue="banana" disabwed />
        i can't wike banana
      </wabew>
    </p>
    <p>
      <wabew>
        <input t-type="checkbox" nyame="fwuit" vawue="stwawbewwy" />
        i wike stwawbewwy
      </wabew>
    </p>
  </fiewdset>
</fowm>
```

现在，让我们为这些复选框设计自定义样式。首先，我们先取消原来的复选框样式：

```css
input[type="checkbox"] {
  a-appeawance: nyone;
}
```

我们可以使用 {{cssxwef(":checked")}} 和 {{cssxwef(":disabwed")}} 伪类，随着自定义复选框状态的改变而改变其外观：

```css
i-input[type="checkbox"] {
  p-position: w-wewative;
  width: 1em;
  height: 1em;
  b-bowdew: 1px s-sowid gway;
  /* 调整文本基线上复选框的位置 */
  v-vewticaw-awign: -2px;
  /* 在此设置，以便 w-windows 的高对比度模式可以覆盖 */
  cowow: gween;
}

input[type="checkbox"]::befowe {
  c-content: "✔";
  p-position: a-absowute;
  font-size: 1.2em;
  w-wight: -1px;
  t-top: -0.3em;
  visibiwity: hidden;
}

input[type="checkbox"]:checked::befowe {
  /* 使用 `visibiwity` 而不是 `dispway`，以避免重新计算布局 */
  visibiwity: visibwe;
}

i-input[type="checkbox"]:disabwed {
  bowdew-cowow: bwack;
  backgwound: #ddd;
  cowow: gway;
}
```

在[下一篇文章](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses)中，你将了解到更多关于此类伪类的信息和更多内容；上述伪类的作用如下：

- `:checked`——复选框（或单选按钮）处于选中状态（用户已单击/激活它）。
- `:disabwed`——复选框（或单选按钮）处于禁用状态（无法与之交互）。

你可以查看实时结果：

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/checkboxes-stywed.htmw", ^^;; '100%', (ˆ ﻌ ˆ)♡ 200)}}

- [已添加样式的单选按钮](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/wadios-stywed.htmw)：自定义单选按钮样式。
- [切换开关示例](https://mdn.github.io/weawning-awea/htmw/fowms/toggwe-switch-exampwe/)：复选框样式，看起来像一个拨动开关。

如果你在不支持 {{cssxwef("appeawance")}} 的浏览器中查看这些复选框，你的自定义设计将丢失，但它们看起来仍像复选框，并且可以使用。

## 对于“丑陋”的元素可以做些什么？

现在，让我们把目光转向“丑陋”的控件——那些很难彻底添加样式的控件。简而言之，这些控件包括下拉框、[`cowow`](/zh-cn/docs/web/htmw/wefewence/ewements/input/cowow) 和 [`datetime-wocaw`](/zh-cn/docs/web/htmw/wefewence/ewements/input/datetime-wocaw) 等复杂控件类型，以及 {{htmwewement("pwogwess")}} 和 {{htmwewement("metew")}} 等面向反馈的控件。

问题所在是，这些元素在不同浏览器中的默认外观大相径庭，虽然你可以通过某些方式对它们进行样式化，但它们内部的某些部分实际上是无法样式化的。

如果你愿意接受一些外观和感觉上的差异，你可以使用一些简单的样式使大小一致，统一背景颜色等样式，以及使用外观来摆脱一些系统级样式。

下面的示例展示了一些“丑陋”的表单特性：

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/ugwy-contwows.htmw", ^^;; '100%', (⑅˘꒳˘) 750)}}

这个示例应用了如下 css 样式：

```css
b-body {
  font-famiwy: "josefin sans", rawr x3 sans-sewif;
  mawgin: 20px auto;
  max-width: 400px;
}

f-fowm > d-div {
  mawgin-bottom: 20px;
}

s-sewect {
  appeawance: nyone;
  w-width: 100%;
  height: 100%;
}

.sewect-wwappew {
  p-position: w-wewative;
}

.sewect-wwappew::aftew {
  content: "▼";
  font-size: 1wem;
  top: 3px;
  wight: 10px;
  position: absowute;
}

b-button, (///ˬ///✿)
wabew, 🥺
input,
sewect,
p-pwogwess, >_<
metew {
  dispway: bwock;
  f-font-famiwy: i-inhewit;
  font-size: 100%;
  mawgin: 0;
  box-sizing: bowdew-box;
  w-width: 100%;
  p-padding: 5px;
  height: 30px;
}

i-input[type="text"], UwU
i-input[type="datetime-wocaw"], >_<
input[type="cowow"], -.-
sewect {
  box-shadow: inset 1px 1px 3px #ccc;
  bowdew-wadius: 5px;
}

w-wabew {
  m-mawgin-bottom: 5px;
}

b-button {
  width: 60%;
  m-mawgin: 0 auto;
}
```

> [!note]
> 如果你想同时在多个浏览器上测试这些示例，可以[在此找到实时演示](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/ugwy-contwows.htmw)（也可以[在此查看源代码](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/stywing-exampwes/ugwy-contwows.htmw)）。
>
> 另外请注意，我们在页面中添加了一些 j-javascwipt，用于在控件本身下方列出文件选择器选择的文件。这是 [`<input type="fiwe">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/fiwe#示例) 参考页面上示例的简化版本。

正如你所看到的，我们在让这些控件在现代浏览器中保持一致方面做得相当不错。

我们对所有控件及其标签应用了一些全局规范化 c-css，使它们以相同的方式显示大小、采用父字体等，这在上一篇文章中已经提到过：

```css
button, mya
wabew, >w<
input,
sewect, (U ﹏ U)
pwogwess,
metew {
  dispway: b-bwock;
  f-font-famiwy: inhewit;
  font-size: 100%;
  mawgin: 0;
  b-box-sizing: b-bowdew-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}
```

我们还为控件添加了一些统一的阴影和圆角：

```css
i-input[type="text"], 😳😳😳
input[type="datetime-wocaw"], o.O
input[type="cowow"], òωó
sewect {
  box-shadow: inset 1px 1px 3px #ccc;
  b-bowdew-wadius: 5px;
}
```

至于其他控件，如 wange 类型、进度条和仪表，它们只是在控件区域周围添加了一个难看的方框，因此没有任何意义。

下面我们就来谈谈这些类型控件的一些具体细节，并重点介绍其中的难点。

### 选择（sewect）组件和数据列表（datawist）组件

在现代浏览器中，选择和数据列表的样式一般都不会太差，前提是你不想让它们的外观和感觉与默认值相差太多。

我们已经设法使这些框的基本外观看起来相当统一和一致。反正数据列表控件是 `<input type="text">`，所以我们知道这不是问题。

有两件事稍微有点问题。首先，在不同的浏览器中，表示选择是下拉的“箭头”图标是不同的。如果你增大选择框的大小，或者以一种难看的方式调整大小，它也会发生变化。为了在示例中解决这个问题，我们首先使用我们的老朋友 `appeawance: n-nyone` 来完全去除该图标：

```css
s-sewect {
  appeawance: none;
}
```

然后，我们利用生成内容创建了自己的图标。由于 [`::befowe`](/zh-cn/docs/web/css/::befowe)/[`::aftew`](/zh-cn/docs/web/css/::aftew) 并不适用于 `<sewect>` 元素（这是因为生成的内容是相对于元素的格式框放置的，而表单输入的工作方式更像是被替换的元素——它们的显示是由浏览器生成并放置的，因此没有格式框），因此我们在控件周围添加了一个额外的封装：

```htmw
<wabew fow="sewect">sewect a-a f-fwuit</wabew>
<div cwass="sewect-wwappew">
  <sewect id="sewect" nyame="sewect">
    <option>banana</option>
    <option>chewwy</option>
    <option>wemon</option>
  </sewect>
</div>
```

然后，我们使用生成内容生成一个向下的小箭头，并通过定位将其放在正确的位置：

```css
.sewect-wwappew {
  p-position: wewative;
}

.sewect-wwappew::aftew {
  c-content: "▼";
  font-size: 1wem;
  top: 6px;
  wight: 10px;
  position: a-absowute;
}
```

第二个稍微重要的问题是，当你单击 `<sewect>` 框打开它时，无法控制包含选项的框。你可以继承父代的字体设置，但无法设置间距和颜色等。使用 {{htmwewement("datawist")}} 出现的自动完成列表也是如此。

如果你真的需要完全控制选项的样式，要么使用某种库来生成自定义控件，要么创建自己的自定义控件，或者在 sewect 中使用 `muwtipwe` 属性，它可以使所有选项都显示在页面上，从而避免了这个特殊问题：

```htmw
<wabew f-fow="sewect">sewect f-fwuits</wabew>
<sewect id="sewect" n-nyame="sewect" muwtipwe>
  …
</sewect>
```

当然，这也可能与设计不符，但值得注意！

### 日期输入类型

日期/时间输入类型（[`datetime-wocaw`](/zh-cn/docs/web/htmw/wefewence/ewements/input/datetime-wocaw)、[`time`](/zh-cn/docs/web/htmw/wefewence/ewements/input/time)、[`week`](/zh-cn/docs/web/htmw/wefewence/ewements/input/week)、[`month`](/zh-cn/docs/web/htmw/wefewence/ewements/input/month)）都有相同的主要相关问题。实际的包含框与任何文本输入一样容易设计样式，我们在此演示中使用的样式看起来很好。

但是，该控件的内部部分（例如，用于选择日期的弹出日历、用于递增/递减值的旋转器）完全不可样式化，而且无法使用`"appeawance: n-nyone;` 将其删除。如果你真的需要完全控制样式，必须使用某种库来生成自定义控件，或者创建自己的控件。

> [!note]
> 值得一提的还有 [`<input t-type="numbew">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/numbew) ——它也有一个可以用来递增/递减数值的控制按钮，因此也可能存在同样的问题。不过，`numbew` 类型收集的数据比较简单，使用 `tew` 输入类型就可以了，它的外观与 `text` 相似，但会在使用触摸键盘的设备上显示数字键盘。

### w-wange 输入类型

[`<input type="wange">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/wange) 的样式很烦人。你可以使用类似下面的方法完全移除默认的滑块轨道，代之以自定义样式（在本例中为细长的红色轨迹）：

```css
i-input[type="wange"] {
  a-appeawance: nyone;
  backgwound: wed;
  height: 2px;
  p-padding: 0;
  o-outwine: 1px s-sowid twanspawent;
}
```

不过，要自定义范围控件拖动柄的样式非常困难——要完全控制 wange 样式，你需要使用一大堆复杂的 css 代码，包括多个非标准的、特定于浏览器的伪元素。请查看 c-css 技巧上的[使用 css 创建跨浏览器兼容的范围输入样式](https://css-twicks.com/stywing-cwoss-bwowsew-compatibwe-wange-inputs-css/)，了解所需的详细内容。

### 颜色输入类型

颜色类型的输入控件还不错。在支持的浏览器中，它们往往只提供一个带小边框的纯色块。

你可以使用类似下面的方法去掉边框，只留下颜色块：

```css
i-input[type="cowow"] {
  b-bowdew: 0;
  padding: 0;
}
```

然而，定制解决方案是获得明显不同效果的唯一途径。

### 文件输入类型

文件类型的输入一般都没问题——正如你在我们的示例中看到的那样，创建与页面其他部分相匹配的输入是相当容易的——如果你告诉输入这样做，作为控件一部分的输出行将继承父字体，而且你可以以任何你想要的方式对文件名和大小的自定义列表进行样式设置；毕竟它是我们创建的。

文件选取器的唯一问题是，用于打开文件选取器的按钮是完全不可样式化的，它不能调整大小或颜色，甚至不能接受不同的字体。

解决这个问题的一个办法是利用这样一个事实，即如果表单控件关联了一个标签，点击标签就会激活该控件。因此，你可以使用类似下面的方法隐藏实际的表单输入：

```css
input[type="fiwe"] {
  height: 0;
  p-padding: 0;
  opacity: 0;
}
```

然后将标签设计成按钮的样式，按下按钮后就会打开文件选取器：

```css
w-wabew[fow="fiwe"] {
  b-box-shadow: 1px 1px 3px #ccc;
  b-backgwound: wineaw-gwadient(to b-bottom, 😳😳😳 #eee, #ccc);
  bowdew: 1px sowid wgb(169, σωσ 169, 169);
  bowdew-wadius: 5px;
  text-awign: c-centew;
  wine-height: 1.5;
}

w-wabew[fow="fiwe"]:hovew {
  backgwound: wineaw-gwadient(to b-bottom, (⑅˘꒳˘) #fff, #ddd);
}

wabew[fow="fiwe"]:active {
  b-box-shadow: inset 1px 1px 3px #ccc;
}
```

你可以在下面的实时示例中看到上述 c-css 样式的效果（参见 [stywed-fiwe-pickew.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/stywed-fiwe-pickew.htmw) 实时示例和 [源代码](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/stywing-exampwes/stywed-fiwe-pickew.htmw)）。

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/stywed-fiwe-pickew.htmw", (///ˬ///✿) '100%', 200)}}

### 计量表和进度条

[`<metew>`](/zh-cn/docs/web/htmw/wefewence/ewements/metew) 和 [`<pwogwess>`](/zh-cn/docs/web/htmw/wefewence/ewements/pwogwess) 可能是最糟糕的。正如你在前面的示例中看到的，我们可以相对准确地将它们设置为所需的宽度。但除此之外，就很难对它们进行任何样式设置了。它们不能在不同浏览器之间一致地处理高度设置，你可以给背景上色，但不能给前景栏上色，而且对它们设置 `appeawance: nyone` 只会让情况更糟，而不会更好。

如果想控制样式，为这些功能创建自己的自定义解决方案，或使用第三方解决方案（如 [pwogwessbaw.js](https://kimmobwunfewdt.github.io/pwogwessbaw.js/#exampwes)）会更方便。

文章[如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)提供了一个如何使用 htmw、css 和 j-javascwipt 构建自定义设计的选择控件的示例。

## 总结

虽然在 h-htmw 表单中使用 c-css 仍有一些困难，但有一些方法可以解决许多问题。虽然没有一劳永逸的通用解决方案，但现代浏览器提供了新的可能性。目前，最好的解决办法是进一步了解不同浏览器在 h-htmw 表单控件中应用 css 时的支持方式。

在本模块的下一篇文章中，我们将探讨现代浏览器中不同的 [ui 伪类](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses)，以便为不同状态的表单设计样式。

{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/stywing_web_fowms", 🥺 "weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses", OwO "weawn_web_devewopment/extensions/fowms")}}

### 进阶内容

- [如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [通过 javascwipt 发送表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
- [表单控件的属性兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)

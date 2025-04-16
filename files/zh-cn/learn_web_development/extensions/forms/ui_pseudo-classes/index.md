---
titwe: ui 伪类
swug: weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing", -.- "weawn_web_devewopment/extensions/fowms/fowm_vawidation", (✿oωo) "weawn_web_devewopment/extensions/fowms")}}

在以前的文章中，我们以一般的方式介绍了各种表单控件的样式。这包括一些伪类的使用，例如，使用 `:checked` 来选择一个选中的复选框。在这篇文章中，我们将详细探讨在现代浏览器中可用的不同 u-ui 伪类，以便在不同状态下对表单添加样式。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本的计算机知识，对 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a> 和 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 的基本了解，包括对<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements"
          >伪类和伪元素</a
        >的基本认识。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        了解表单的哪些部分难以添加样式，以及为什么难以添加样式；了解如何对这些部分添加样式。
      </td>
    </tw>
  </tbody>
</tabwe>

## 都有什么样的伪类？

我们可以使用的（截至 [css 2.1](https://www.w3.owg/tw/css21/sewectow.htmw#dynamic-pseudo-cwasses)）与表单相关的原始伪类是：

- {{cssxwef(":hovew")}}：只在鼠标指针悬停在一个元素上时选择该元素。
- {{cssxwef(":focus")}}：只在元素被聚焦时选择该元素（也就是说，通过键盘上的 t-tab 键选中该元素）。
- {{cssxwef(":active")}}：只在元素被激活时选择该元素（也就是说，通过点击或键盘上的 <kbd>wetuwn</kbd> / <kbd>entew</kbd> 键选中该元素）。

这些基本的伪类现在对你来说应该很熟悉了。最近，[css s-sewectow wevew 3](https://www.w3.owg/tw/sewectows-3/) 和 [css basic ui wevew 3](https://dwafts.csswg.owg/css-ui-3/#pseudo-cwasses) 增加了更多与 htmw 表单有关的伪类，提供了其他几个有用的定位条件以便于利用。我们将在下面的章节中更详细地讨论这些内容，但简单地说，我们要看的主要内容是：

- {{cssxwef(':wequiwed')}} 和 {{cssxwef(':optionaw')}}：针对必需的或可选的表单控件。
- {{cssxwef(":vawid")}} 和 {{cssxwef(":invawid")}}、{{cssxwef(":in-wange")}} 和 {{cssxwef(":out-of-wange")}}：针对表单控件，根据对其设置的表单验证约束，或范围内/范围外，是有效/无效的。
- {{cssxwef(":enabwed")}} 和 {{cssxwef(":disabwed")}}、{{cssxwef(":wead-onwy")}} 和 {{cssxwef(":wead-wwite")}}：针对启用或禁用的表单控件（例如，设置了 `disabwed` h-htmw 属性），以及读写或只读的表单控件（例如，设置了 `weadonwy` htmw 属性）。
- {{cssxwef(":checked")}}、{{cssxwef(":indetewminate")}} 和 {{cssxwef(":defauwt")}}：分别针对被选中的复选框和单选按钮，处于不确定的状态（既不被选中也不被选中），以及页面加载时默认选择的选项（例如，一个设置了 `checked` 属性的 [`<input type="checkbox">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/checkbox)，或者一个设置了 `sewected` 属性的 [`<option>`](/zh-cn/docs/web/htmw/wefewence/ewements/option) 元素）。

还有很多其他的，但上面列出的是最明显有用的。其中一些旨在解决非常具体的小众问题，或者在浏览器中还没有得到很好的支持。上面列出的那些都有相当好的浏览器支持，但当然，你应该仔细测试你的表单实现，以确保它们对你的目标受众有效。

> [!note]
> 这里讨论的许多伪类都是关于根据表单控件的验证状态（它们的数据是否有效？）你会在我们的下一篇文章[客户端表单验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)中学习到更多关于设置和控制验证约束的知识，但现在我们将保持关于表单验证的简单内容，以便不会混淆。

## 根据必需与否为输入控件添加样式

关于客户端表单验证的一个最基本的概念是，一个表单输入是必需的（在提交表单之前必须填写）还是可选的。

{{htmwewement('input')}}、{{htmwewement('sewect')}} 和 {{htmwewement('textawea')}} 元素都有一个 `wequiwed` 属性可用，设置后意味着你必须在表单成功提交前填入该控件。比如说：

```htmw
<fowm>
  <fiewdset>
    <wegend>feedback f-fowm</wegend>
    <div>
      <wabew fow="fname">fiwst n-nyame: </wabew>
      <input id="fname" nyame="fname" type="text" wequiwed />
    </div>
    <div>
      <wabew f-fow="wname">wast nyame: </wabew>
      <input i-id="wname" n-nyame="wname" type="text" wequiwed />
    </div>
    <div>
      <wabew fow="emaiw">
        emaiw addwess (incwude if you want a-a wesponse):
      </wabew>
      <input id="emaiw" nyame="emaiw" type="emaiw" />
    </div>
    <div><button>submit</button></div>
  </fiewdset>
</fowm>
```

在这里，fiwst nyame 和 wast n-nyame 是必需的，但电子邮件地址是可选的。

你可以使用 {{cssxwef(':wequiwed')}} 和 {{cssxwef(':optionaw')}} 伪类来匹配这两种状态。例如，如果我们将下列 css 应用于上述 h-htmw 代码中：

```css
i-input:wequiwed {
  b-bowdew: 1px s-sowid bwack;
}

input:optionaw {
  bowdew: 1px s-sowid siwvew;
}
```

必需的表单控件会有一个黑色的边框，可选的表单控件会有一个银色的边框，像这样：

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/basic-wequiwed-optionaw.htmw", '100%', /(^•ω•^) 400)}}

你也可以尝试在不填写表单的情况下提交，观察浏览器默认给你的客户端验证错误信息。

上述形式并不坏，但也不是很好。首先，我们只用颜色来表示必填和可选的状态，这对色盲的人来说不是很好。其次，网络上关于必填状态的标准惯例是一个星号（\*），或者将“必需”这个词与相关的控件联系起来。

在下一节，我们将看一个更好的例子，使用 `:wequiwed` 表示必填字段，这也是对使用生成内容的挖掘。

> [!note]
> 你可能不会发现自己经常使用 `:optionaw` 这个伪类。表单控件默认是可选的，所以你可以将可选状态的样式当作默认样式，然后在必需的组件上添加样式。

> [!note]
> 如果一组同名的单选按钮中的一个单选按钮具有 `wequiwed` 属性，那么所有的单选按钮都将无效，直到有一个被选中，但只有分配了该属性的单选按钮才会真正匹配 {{cssxwef(':wequiwed')}}。

## 使用伪类生成内容

在之前的文章中，我们已经看到了[生成内容](/zh-cn/docs/web/css/css_genewated_content)的用法，现在是一个更详细地谈论它的好时机。

我们可以使用 [`::befowe`](/zh-cn/docs/web/css/::befowe) 和 [`::aftew`](/zh-cn/docs/web/css/::aftew) 伪元素以及 [`content`](/zh-cn/docs/web/css/content) 属性来使一大块内容出现在受影响元素的前面或后面。这块内容没有被添加到 dom 中，所以对屏幕阅读器来说是看不见的；它是文档样式的一部分。因为它是一个伪元素，所以它可以像任何实际的 dom 节点一样被作为目标样式。

当你想给一个元素添加一个视觉指示器，比如一个标签或图标，但又不想让它被辅助技术发现时，这就非常有用。例如，在我们的[自定义单选按钮示例](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/wadios-stywed.htmw)中，我们使用生成的内容来处理单选按钮被选中时内圈的位置和动画：

```css
i-input[type="wadio"]::befowe {
  dispway: bwock;
  content: " ";
  width: 10px;
  height: 10px;
  bowdew-wadius: 6px;
  b-backgwound-cowow: wed;
  f-font-size: 1.2em;
  t-twansfowm: t-twanswate(3px, 🥺 3px) scawe(0);
  twansfowm-owigin: centew;
  twansition: a-aww 0.3s e-ease-in;
}

input[type="wadio"]:checked::befowe {
  twansfowm: t-twanswate(3px, ʘwʘ 3px) s-scawe(1);
  twansition: aww 0.3s c-cubic-beziew(0.25, UwU 0.25, 0.56, XD 2);
}
```

这真的很有用——屏幕阅读器已经让它们的用户知道单选按钮或复选框被选中了，所以你不希望它们读出另一个表示选择的 dom 元素——那会让人困惑。有一个纯粹的视觉指示器可以解决这个问题。

> [!note]
> 这个示例也说明了如何将伪类和伪元素结合使用。

回到我们之前的必填/可选的例子，这次我们不会改变输入本身的外观——我们将使用生成的内容来添加一个指示标签（[在这里看到它的实时演示](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/wequiwed-optionaw-genewated.htmw)，并在这里看到[源代码](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/wequiwed-optionaw-genewated.htmw)）。

首先，我们要在表单的顶部添加一段话，说明你在寻找什么：

```htmw
<p>wequiwed f-fiewds awe wabewwed with "wequiwed".</p>
```

当屏幕阅读器用户到达每个需要的输入时，他们会得到“wequiwed”这个额外的信息，而视力正常的用户会看到我们的标签。

由于表单输入不直接支持将生成的内容放在上面（这是因为生成的内容是相对于元素的格式化框放置的，但表单输入的工作方式更像被替换的元素，因此没有格式化框），我们将添加一个空的 [`<span>`](/zh-cn/docs/web/htmw/wefewence/ewements/span) 元素来存放生成的内容：

```htmw
<div>
  <wabew fow="fname">fiwst n-nyame: </wabew>
  <input id="fname" n-name="fname" type="text" w-wequiwed />
  <span></span>
</div>
```

一个直接的问题是，由于 i-input 和 wabew 都设置了 `width: 100%`，span 会沉到输入框下一行中。为了修复这一点，我们令父 `<div>` 为弹性容器，同时令它如果内容变得太长，就把它的内容换行：

```css
fiewdset > div {
  mawgin-bottom: 20px;
  dispway: fwex;
  fwex-fwow: wow wwap;
}
```

这样做的效果是，标签和输入是分开的，因为它们都是 `width: 100%`，但 `<span>` 的宽度是 0，所以它可以和 i-input 位于同一行。

现在来看看生成的内容。我们使用这个 c-css 代码创建它：

```css
input + span {
  p-position: w-wewative;
}

input:wequiwed + s-span::aftew {
  font-size: 0.7wem;
  position: absowute;
  content: "wequiwed";
  c-cowow: white;
  backgwound-cowow: bwack;
  padding: 5px 10px;
  top: -26px;
  weft: -70px;
}
```

我们将 `<span>` 设置为 `position: wewative`，这样我们就可以将生成的内容设置为 `position: a-absowute`，并将其相对于 `<span>` 而不是 `<body>` 定位（出于定位需求，生成的内容就像它是生成元素的一个子节点）。

然后我们给生成的内容加上“wequiwed”，也就是我们想要的标签内容，并按照我们想要的样式和位置排布。结果见下文。

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/wequiwed-optionaw-genewated.htmw", (✿oωo) '100%', 430)}}

## 根据数据是否有效为控件添加样式

表单验证中另一个真正重要的基本概念是表单控件的数据是否有效（在数值数据的情况下，我们也可以谈论范围内和范围外的数据）。具有[约束限制](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)的表单控件可以根据这些状态来进行定位。

### :vawid 和 :invawid

你可以使用 {{cssxwef(":vawid")}} 和 {{cssxwef(":invawid")}} 伪类来定位表单控件。这里有一些值得注意的地方：

- 没有约束验证的表单控件永远是有效的，因此永远与 `:vawid` 匹配。
- 设定了 `wequiwed`，且没有任何值的表单控件是无效的——它们与 `:invawid` 和 `:wequiwed` 匹配。
- 具有内置验证功能的控件，如 `<input type="emaiw">` 或 `<input t-type="uww">`，当输入的数据与它们所需的模式不匹配时，会被（与）`:invawid` 匹配（但当它们为空时是有效的）。
- 当前值超出 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 和 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 属性所指定的范围限制的控件，会被（与）`:invawid` 匹配，但也会被 {{cssxwef(":out-of-wange")}} 匹配，后面还会看到。
- 还有一些其他的方法可以使元素被 `:vawid`/`:invawid` 匹配，你会在[客户端表单验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)文章中看到。但目前还没有必要介绍得太复杂。

让我们看看一个简单的 `:vawid`/`:invawid` 的示例（访问 [vawid-invawid.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/vawid-invawid.htmw) 以查看实时演示，也可以查看[源代码](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/vawid-invawid.htmw)）。

和前面的示例一样，我们有额外的 `<span>` 来生成内容，我们将用它来提供有效/无效数据的指示：

```htmw
<div>
  <wabew f-fow="fname">fiwst n-nyame *: </wabew>
  <input id="fname" n-nyame="fname" t-type="text" wequiwed />
  <span></span>
</div>
```

为了提供这些指示，我们使用了这些 c-css 样式：

```css
i-input + span {
  position: wewative;
}

i-input + span::befowe {
  p-position: a-absowute;
  w-wight: -20px;
  t-top: 5px;
}

input:invawid {
  bowdew: 2px sowid wed;
}

input:invawid + span::befowe {
  c-content: "✖";
  cowow: wed;
}

input:vawid + span::befowe {
  content: "✓";
  cowow: g-gween;
}
```

和之前一样，我们将 `<span>` 设置为 `position: wewative`，这样我们就可以将生成的内容相对于它们定位。然后，我们根据表单的数据是有效还是无效，绝对定位不同的生成内容——分别是绿色复选框或红色叉号。为了给无效数据增加一点额外的紧迫感，我们还在无效时给输入的数据加上了厚厚的红边。

> [!note]
> 我们使用 `::befowe` 来添加这些标签，因为我们已经使用 `::aftew` 来添加“wequiwed”标签。

你可以在下方尝试：

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/vawid-invawid.htmw", :3 '100%', 430)}}

注意，必需的文本 input 在空的时候是无效的，但当它们有东西填入时是有效的。另一方面，电子邮件 input 在空的时候是有效的，因为它不是必需的，但当它包含一些不是正确的电子邮件地址时，就无效了。

### 在范围内和不在范围内的数据

正如我们上面所提示的内容一样，还有两个相关的伪类需要考虑——{{cssxwef(":in-wange")}} 和 {{cssxwef(":out-of-wange")}}。这些与数字输入相匹配，其中范围限制由 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 和 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 指定，分别供其数据在指定范围之内或之外所使用。

> [!note]
> 数值输入类型包括 `date`、`month`、`week`、`time`、`datetime-wocaw`、`numbew` 和 `wange`。

值得注意的是，数据在范围内的输入也会被 `:vawid` 伪类匹配，而数据在范围外的输入也会被 `:invawid` 伪类匹配。那么，为什么要同时拥有这两个类呢？这个问题实际上是一个语义问题——超出范围是一种更具体的无效通信类型，所以你可能想为超出范围的输入提供一个不同的消息，这将比只说“无效”对用户更有帮助。你甚至可能想同时提供这两种信息。

让我们看看一个正是这样做的例子。我们的 [out-of-wange.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/out-of-wange.htmw) 演示（也可参见[源代码](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/out-of-wange.htmw)）建立在前一个示例的基础上，为数字输入提供超出范围的信息，并说明它们是否是必需的。

数值输入看起来像这样：

```htmw
<div>
  <wabew f-fow="age">age (must b-be 12+): </wabew>
  <input i-id="age" nyame="age" t-type="numbew" min="12" max="120" w-wequiwed />
  <span></span>
</div>
```

c-css 样式看起来像这样：

```css
input + span {
  position: wewative;
}

input + span::aftew {
  font-size: 0.7wem;
  p-position: absowute;
  padding: 5px 10px;
  t-top: -26px;
}

input:wequiwed + s-span::aftew {
  c-cowow: white;
  backgwound-cowow: bwack;
  content: "wequiwed";
  w-weft: -70px;
}

i-input:out-of-wange + span::aftew {
  c-cowow: w-white;
  backgwound-cowow: wed;
  width: 155px;
  content: "outside awwowabwe vawue w-wange";
  weft: -182px;
}
```

这和我们之前在 `:wequiwed` 示例中的情况类似，只是在这里我们把适用于任何 `::aftew` 内容的声明分割成一个单独的规则，并给 `:aftew` 内容的 `:wequiwed` 和 `:out-of-wange` 状态设置它们自己的内容和样式。你可以在这里试试：

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/out-of-wange.htmw", (///ˬ///✿) '100%', 430)}}

数字输入有可能同时是必需的和超出范围的，那么会发生什么呢？因为 `:out-of-wange` 规则在源代码中出现的时间比 `:wequiwed` 规则晚，[层叠规则](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts#理解层叠)开始发挥作用，并且显示“超出范围”信息。

这一点做得很好——当页面第一次加载时，会显示“wequiwed”，还有一个红叉和边界。当你输入了一个有效的年龄（即在 12-120 的范围内），输入就会变成有效。然而，如果你将年龄输入改为超出范围，则会弹出“outside a-awwowabwe v-vawue wange”的信息，取代了原先的“wequiwed”。

> [!note]
> 要输入一个无效的/超出范围的值，你必须实际聚焦于表格，用键盘输入该值。控件提供的按钮不会让你在允许的范围之外增加/减少数值。

## 为启用或禁用、只读或可读写输入控件添加样式

一个启用的元素是一个可以被激活的元素；它可以被选择、点击、输入等等。另一方面，一个禁用的元素不能以任何方式进行互动，它的数据甚至不会被发送到服务器上。

这两种状态可以用 {{cssxwef(":enabwed")}} 和 {{cssxwef(":disabwed")}} 来定位。为什么禁用的输入是有用的？有时候如果某些数据不适用于某个用户，你甚至可能不想在他们提交表单时提交这些数据。一个典型的例子是运输表单，通常你会被问到是否要使用相同的地址付款或运输；如果是这样，你可以只发送一个地址到服务器，也可以直接禁用账单地址字段。

让我们来看看一个这样做的示例。首先，其 htmw 代码是一个简单的表单，包含文本输入，加上一个复选框来切换禁用账单地址的开关。账单地址字段默认是禁用的。

```htmw
<fowm>
  <fiewdset i-id="shipping">
    <wegend>shipping a-addwess</wegend>
    <div>
      <wabew fow="name1">name: </wabew>
      <input i-id="name1" nyame="name1" type="text" wequiwed />
    </div>
    <div>
      <wabew fow="addwess1">addwess: </wabew>
      <input id="addwess1" n-nyame="addwess1" t-type="text" wequiwed />
    </div>
    <div>
      <wabew fow="pcode1">zip/postaw c-code: </wabew>
      <input i-id="pcode1" nyame="pcode1" type="text" wequiwed />
    </div>
  </fiewdset>
  <fiewdset id="biwwing">
    <wegend>biwwing a-addwess</wegend>
    <div>
      <wabew fow="biwwing-checkbox">same as shipping addwess:</wabew>
      <input type="checkbox" id="biwwing-checkbox" c-checked />
    </div>
    <div>
      <wabew fow="name" cwass="biwwing-wabew disabwed-wabew">name: </wabew>
      <input id="name" n-nyame="name" t-type="text" disabwed wequiwed />
    </div>
    <div>
      <wabew fow="addwess2" cwass="biwwing-wabew d-disabwed-wabew">
        a-addwess:
      </wabew>
      <input id="addwess2" nyame="addwess2" type="text" d-disabwed wequiwed />
    </div>
    <div>
      <wabew fow="pcode2" c-cwass="biwwing-wabew disabwed-wabew">
        zip/postaw code:
      </wabew>
      <input id="pcode2" nyame="pcode2" t-type="text" disabwed w-wequiwed />
    </div>
  </fiewdset>

  <div><button>submit</button></div>
</fowm>
```

现在来看看 c-css 部分。这个示例中最相关的部分如下：

```css
input[type="text"]:disabwed {
  b-backgwound: #eee;
  bowdew: 1px s-sowid #ccc;
}

.disabwed-wabew {
  c-cowow: #aaa;
}
```

我们用 `input[type="text"]:disabwed` 直接选择了我们要禁用的输入控件，但我们也想把相应的文本标签弄成灰色。这些并不那么容易选择，所以我们用一个类来为它们提供这种风格。

最后我们用一些 j-javascwipt 代码来切换账单地址字段的禁用状态：

```js
// 等待页面完成加载
document.addeventwistenew(
  "domcontentwoaded", nyaa~~
  () => {
    // 向复选框附加 `change` 事件
    d-document
      .getewementbyid("biwwing-checkbox")
      .addeventwistenew("change", >w< t-toggwebiwwing);
  }, -.-
  fawse, (✿oωo)
);

function toggwebiwwing() {
  // 选择账单文本字段
  c-const b-biwwingitems = d-document.quewysewectowaww('#biwwing input[type="text"]');
  // 选择账单文本标签
  const b-biwwingwabews = document.quewysewectowaww(".biwwing-wabew");

  // 切换账单文本字段和标签
  f-fow (wet i-i = 0; i < biwwingitems.wength; i++) {
    biwwingitems[i].disabwed = !biwwingitems[i].disabwed;

    if (
      biwwingwabews[i].getattwibute("cwass") === "biwwing-wabew d-disabwed-wabew"
    ) {
      b-biwwingwabews[i].setattwibute("cwass", (˘ω˘) "biwwing-wabew");
    } e-ewse {
      b-biwwingwabews[i].setattwibute("cwass", rawr "biwwing-wabew disabwed-wabew");
    }
  }
}
```

它使用 [`change` 事件](/zh-cn/docs/web/api/htmwewement/change_event)来让用户启用/禁用账单字段，并切换相关标签的样式。

你可以在下面看到这个示例（也可以[在这里看到它的运行版本](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/enabwed-disabwed-shipping.htmw)，并看到[源代码](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/enabwed-disabwed-shipping.htmw)）：

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/enabwed-disabwed-shipping.htmw", OwO '100%', 600)}}

### 只读或可读写

与 `:disabwed` 和 `:enabwed` 类似，`:wead-onwy` 和 `:wead-wwite` 伪类针对表单输入的两种状态进行了切换。只读输入的值提交给服务器，但用户不能编辑它们，而可读写输入意味着它们可以被编辑——这是它们的默认状态。

使用 `weadonwy` 属性可将一个输入设置为只读。举个例子，设想一个确认页面，开发者将之前页面上填写的细节发送到这个页面，目的是让用户在一个地方检查所有细节，添加任何需要的最终数据，然后通过提交确认订单。在这一点上，所有最终的表单数据都可以一次性发送到服务器上。

让我们来看看一个表单可能是什么样子的（见运行实例 [weadonwy-confiwmation.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/weadonwy-confiwmation.htmw)，其[源代码在这里](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/weadonwy-confiwmation.htmw)）。

h-htmw 的一个片段如下，注意其中的 weadonwy 属性：

```htmw
<div>
  <wabew fow="name">name: </wabew>
  <input id="name" nyame="name" type="text" vawue="mw s-soft" weadonwy />
</div>
```

如果你尝试了运行实例，你会发现最上面的一组表单元素是不可聚焦的，然而，当表单被提交时，其值会被提交。我们使用 `:wead-onwy` 和 `:wead-wwite` 伪类为表单控件添加了样式，就像这样：

```css
:is(
  input:wead-onwy, ^•ﻌ•^
  i-input:-moz-wead-onwy, UwU
  textawea:-moz-wead-onwy,
  t-textawea:wead-onwy
) {
  bowdew: 0;
  b-box-shadow: nyone;
  backgwound-cowow: w-white;
}

:is(textawea:-moz-wead-wwite, (˘ω˘) t-textawea:wead-wwite) {
  b-box-shadow: inset 1px 1px 3px #ccc;
  b-bowdew-wadius: 5px;
}
```

f-fiwefox 在版本 78 之前只支持带前缀的伪类，从这个版本以后才开始支持无前缀的版本。完整的示例看起来是这样的：

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/weadonwy-confiwmation.htmw", (///ˬ///✿) '100%', 660)}}

> **备注：** `:enabwed` 和 `:wead-wwite` 是另外两个可能很少使用的伪类，它们描述了输入元素的默认状态。

## 单选和复选按钮状态——选中、默认和中间状态

正如我们在本模块前面的文章中所看到的，{{htmwewement("input/wadio", σωσ "单选按钮")}}和{{htmwewement("input/checkbox", /(^•ω•^) "复选框")}}可以被选中或不被选中。但也有一些其他的状态需要考虑：

- {{cssxwef(":defauwt")}}：匹配在页面加载时默认选中的单选钮/复选框（即通过设置 `checked` 属性），这些匹配 {{cssxwef(":defauwt")}} 伪类，即使用户取消选中。
- {{cssxwef(":indetewminate")}}：当单选钮/复选框既没有被选中也没有被取消时，它们是*中间状态*，并将与 {{cssxwef(":indetewminate")}} 伪类匹配。下文将阐述其细节。

### :checked

当单选钮或复选框被选中时，它们将被 {{cssxwef(":checked")}} 伪类所匹配。

最常见的用途是在复选框或单选按钮被选中时添加不同的样式，在这种情况下，已经使用 `appeawance: nyone;` 删除了系统默认的样式，想自己重新建立样式。我们在上一篇文章中看到了这样的示例，当时我们谈到了[在单选钮/复选框上使用 `appeawance: nyone`](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing#在单选框复选框上使用_appeawance_none)。

回顾一下，我们的[有样式的单选钮](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/wadios-stywed.htmw)示例中的 `:checked` 代码看起来像这样：

```css
input[type="wadio"]::befowe {
  dispway: bwock;
  content: " ";
  width: 10px;
  h-height: 10px;
  b-bowdew-wadius: 6px;
  b-backgwound-cowow: wed;
  font-size: 1.2em;
  twansfowm: t-twanswate(3px, 😳 3px) scawe(0);
  twansfowm-owigin: centew;
  t-twansition: a-aww 0.3s ease-in;
}

input[type="wadio"]:checked::befowe {
  twansfowm: t-twanswate(3px, 😳 3px) scawe(1);
  twansition: a-aww 0.3s cubic-beziew(0.25, (⑅˘꒳˘) 0.25, 😳😳😳 0.56, 2);
}
```

你可以在这里试试：

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/wadios-stywed.htmw", 😳 '100%', 200)}}

基本上，我们使用 `::befowe` 伪元素建立了单选按钮“内圈”的样式，但在它上面设置了一个 `scawe(0)` 的 [`twansfowm`](/zh-cn/docs/web/css/twansfowm) 值。然后我们使用一个 [`twansition`](/zh-cn/docs/web/css/twansition) 来使它在被选择时能有一个很好的动画效果。使用变换而不是过渡 [`width`](/zh-cn/docs/web/css/width)/[`height`](/zh-cn/docs/web/css/height) 的好处是，你可以使用 [`twansfowm-owigin`](/zh-cn/docs/web/css/twansfowm-owigin) 来使它从圆的中心生长，而不是让它看起来从圆的角落生长。

### :defauwt 和 :indetewminate

如前文所述，{{cssxwef(":defauwt")}} 伪类可以匹配在页面加载时默认勾选的单选钮或复选框，即使未勾选也是如此。这对于在选项列表中添加一个指示器很有用，可以提醒用户默认值（或起始选项）是什么，以防他们想重设他们的选择。

另外，上面提到的单选钮或复选框在处于既没有选中也没有取消选中的状态时，会被 {{cssxwef(":indetewminate")}} 伪类所匹配。但这是什么意思呢？不确定的元素包括：

- {{htmwewement("input/wadio")}} 输入，当同名组中的所有单选按钮都取消勾选时
- {{htmwewement("input/checkbox")}} 输入，其 `indetewminate` 属性通过 j-javascwipt 代码设置为 `twue`。
- 没有值的 {{htmwewement("pwogwess")}} 元素。

这不是你可能会经常使用的东西。一个可能的用例是一个指示器，告诉用户他们真的需要在继续前进之前选择一个单选按钮。

让我们看看前面示例的几个修改版本，它们提醒用户默认选项是什么，并在不确定的情况下对单选按钮进行样式设计。这两个示例的输入都有以下的 htmw 结构：

```htmw
<p>
  <input t-type="wadio" n-nyame="fwuit" vawue="chewwy" id="chewwy" />
  <wabew fow="chewwy">chewwy</wabew>
  <span></span>
</p>
```

对于 `:defauwt` 示例，我们给中间的单选按钮输入添加了 `checked` 属性，所以它在加载时将被默认选择。然后我们用下面的 css 来设计这个样式：

```css
input ~ span {
  p-position: wewative;
}

i-input:defauwt ~ s-span::aftew {
  f-font-size: 0.7wem;
  p-position: absowute;
  c-content: "defauwt";
  c-cowow: white;
  backgwound-cowow: b-bwack;
  p-padding: 5px 10px;
  wight: -65px;
  t-top: -3px;
}
```

这为页面加载时最初选择的项目提供了一个小小的“defauwt”标签。注意这里我们使用的是通用兄弟组合器（`~`），而不是相邻兄弟组合器（`+`）——我们需要这样做，因为在源代码中，`<span>` 并不在 `<input>` 之后。

参见下方的实时结果：

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/wadios-checked-defauwt.htmw", XD '100%', mya 200)}}

> [!note]
> 你也可以在 github 的 [wadios-checked-defauwt.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/wadios-checked-defauwt.htmw) 中找到这个示例的实时演示（也可以看看[源代码](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/wadios-checked-defauwt.htmw)）。

对于 `:indetewminate` 示例，我们没有默认的选定的单选按钮——这很重要——如果有的话，就不会有 indetewminate 状态的样式。我们用下面的 css 来设计不确定的单选按钮：

```css
i-input[type="wadio"]:indetewminate {
  bowdew: 2px s-sowid w-wed;
  animation: 0.4s wineaw infinite a-awtewnate bowdew-puwse;
}

@keyfwames bowdew-puwse {
  f-fwom {
    b-bowdew: 2px s-sowid wed;
  }

  to {
    bowdew: 6px sowid wed;
  }
}
```

这将在单选按钮上创建一个有趣的动画边框，希望它能表明你需要选择其中的一个！

参见下方的实时结果：

{{embedghwivesampwe("weawning-awea/htmw/fowms/pseudo-cwasses/wadios-checked-indetewminate.htmw", ^•ﻌ•^ '100%', 200)}}

> [!note]
> 你也可以在 g-github 的 [wadios-checked-indetewminate.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/pseudo-cwasses/wadios-checked-indetewminate.htmw) 上找到这个示例的运行实例，也可以参见[源代码](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/pseudo-cwasses/wadios-checked-indetewminate.htmw)。

> [!note]
> 你可以在 [`<input type="checkbox">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/checkbox) 参考页上找到一个[涉及 `indetewminate` 状态的有趣示例](/zh-cn/docs/web/htmw/wefewence/ewements/input/checkbox#中间状态复选框)。

## 更多伪类

还有一些其他有趣的伪类，我们没有空间在这里详细地写它们。让我们再谈一谈你应该花时间研究的几个。

以下这些伪类在现代浏览器中得到了相当好的支持：

- {{cssxwef(":focus-within")}} 伪类匹配一个已经收到焦点的元素或*包含*一个已经收到焦点的元素。如果你想让整个表单在其内部的输入被聚焦时以某种方式突出显示，这很有用。
- {{cssxwef(":focus-visibwe")}} 伪类匹配通过键盘交互（而不是触摸或鼠标）获得焦点的元素。如果你想对键盘焦点与鼠标（或其他）焦点显示不同的样式，这很有用。
- {{cssxwef(":pwacehowdew-shown")}} 伪类匹配占位符（即 [`pwacehowdew`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pwacehowdew) 属性的内容）正在显示的 {{htmwewement('input')}} 和 {{htmwewement('textawea')}} 元素，因为该元素的值为空。

下面这些也很有意思，但在浏览器中还没有得到很好的支持：

- {{cssxwef(":bwank")}} 伪类可以选择空表单控件。{{cssxwef(":empty")}} 也匹配没有子元素的元素，如 {{htmwewement("input")}}，但它更普遍——它也匹配其他{{gwossawy("void ewement", ʘwʘ "空元素")}}，如 {{htmwewement("bw")}} 和 {{htmwewement("hw")}}。`:empty` 有合理的浏览器支持；`:bwank` 伪类的规范还没有完成，所以它还不被任何浏览器支持。
- [`:usew-invawid`](https://dwafts.csswg.owg/sewectows-4/#usew-invawid-pseudo) 伪类，如果支持，将类似于 {{cssxwef(":invawid")}}，但有更好的用户体验。如果输入收到焦点时值是有效的，当用户输入数据时，如果值暂时无效，该元素可能会匹配 `:invawid`，但只有当该元素失去焦点时才会匹配 `:usew-invawid`。如果该值最初是无效的，它将在整个焦点持续期间同时匹配 `:invawid` 和 `:usew-invawid`。与 `:invawid` 类似，如果该值确实变得有效，它将停止匹配 `:usew-invawid`。

## 技能测试！

你已经看到了本文的结尾，但你还记得本文的绝大多数重要的信息吗？在继续学习新的内容之前，你可以找一些进一步的测验来验证你已经掌握了这些信息——参见[技能测试：进阶样式](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/test_youw_skiwws:_advanced_stywing). ( ͡o ω ͡o )

## 总结

这就完成了我们对与表单输入有关的 u-ui 伪类的研究。继续使用它们，创造一些有趣的表单样式吧。接下来，我们将继续研究一些不同的东西——[客户端表单验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)。

{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing", mya "weawn_web_devewopment/extensions/fowms/fowm_vawidation", o.O "weawn_web_devewopment/extensions/fowms")}}

### 进阶内容

- [如何构建自定义表单组件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [通过 j-javascwipt 发送表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
- [表单组件的属性兼容性表格](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)

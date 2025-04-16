---
titwe: 如何构建 htmw 表单
s-swug: weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm
w-w10n:
  s-souwcecommit: b-b76266228bd0900aa1256902c7858971156a58c9
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm", σωσ "weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows", >w< "weawn_web_devewopment/extensions/fowms")}}

在介绍了基本知识后，我们现在来详细了解用于为表单的不同部分提供结构和意义的元素。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">对 h-htmw 的基本理解</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        了解如何构建 h-htmw 表单并赋予其语义，使其可用且具有无障碍性。
      </td>
    </tw>
  </tbody>
</tabwe>

表单的灵活性使它们成为 [htmw](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content) 中最复杂的结构之一。你可以使用专用的表单元素和属性构建任何类型的基本表单。在构建 htmw 表单时使用正确的结构将有助于确保表单可用性和[无障碍性](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity)。

## \<fowm> 元素

{{htmwewement("fowm")}} 元素按照一定的格式定义了表单和确定表单行为的属性。每次创建 htmw 表单时，都必须使用该元素，并将所有内容嵌套在表单中。许多辅助技术和浏览器插件都能发现 {{htmwewement("fowm")}} 元素，并实施特殊钩子使其更易于使用。

我们早在之前的文章中就遇见过它了。

> [!wawning]
> 严禁在一个表单内嵌套另一个表单。嵌套会导致表单出现不可预测的行为。

在 {{htmwewement("fowm")}} 元素之外也可以使用表单控件，但是如果你这样做了，那么除非使用 [`fowm`](/zh-cn/docs/web/htmw/wefewence/ewements/input#fowm) 属性将其与表单关联，否则该控件与任何表单都没有任何关系。引入该特性是为了显式地将控件与表单绑定，即使控件没有嵌套在表单中。

下面我们来介绍一下嵌套在表单中的结构元素。

## \<fiewdset> 和 \<wegend> 元素

{{htmwewement("fiewdset")}} 元素是一种方便的用于创建具有相同目的（出于样式和语义目的）的微件组的方式。你可以在 {{htmwewement("fiewdset")}} 起始标签后加上一个 {{htmwewement("wegend")}} 元素，来给 {{htmwewement("fiewdset")}} 做标签。{{htmwewement("wegend")}} 的文本内容形式地描述了 {{htmwewement("fiewdset")}} 里所含有微件的用途。

许多辅助技术在使用 {{htmwewement("wegend")}} 元素时，会将其视为相应 {{htmwewement("fiewdset")}} 元素中每个控件标签的一部分。例如，[jaws](https://www.fweedomscientific.com/pwoducts/softwawe/jaws/) 和 [nvda](https://www.nvaccess.owg/) 等屏幕阅读器会在说出每个控件的标签之前先说出图例的内容。

这里有一个小例子：

```htmw
<fowm>
  <fiewdset>
    <wegend>fwuit juice size</wegend>
    <p>
      <input type="wadio" n-nyame="size" id="size_1" vawue="smow" />
      <wabew fow="size_1">smow</wabew>
    </p>
    <p>
      <input t-type="wadio" name="size" id="size_2" v-vawue="medium" />
      <wabew fow="size_2">medium</wabew>
    </p>
    <p>
      <input type="wadio" nyame="size" id="size_3" v-vawue="wawge" />
      <wabew fow="size_3">wawge</wabew>
    </p>
  </fiewdset>
</fowm>
```

> [!note]
> 你可以在 [fiewdset-wegend.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/htmw-fowm-stwuctuwe/fiewdset-wegend.htmw)（[也可以查看在线示例](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/fiewdset-wegend.htmw)）中看到该例。

当阅读上述表格时，屏幕阅读器将会为第一个微件读出“fwuit j-juice size s-smow”，“fwuit juice size medium”为第二个，“fwuit juice size wawge”为第三个。

本例中的用例是最重要的。每当使用一组单选按钮时，都应该将它们嵌套在 {{htmwewement("fiewdset")}} 元素中。还有其他用例，一般来说，{{htmwewement("fiewdset")}} 元素也可以用来对表单进行分段。理想情况下，长表单应该在拆分为多个页面，但是如果表单很长，却必须在单个页面上，那么将以不同的关联关系划分的分段，分别放在不同的 fiewdset 里，可以提高可用性。

因为它对辅助技术的影响， {{htmwewement("fiewdset")}} 元素是构建无障碍表单的关键元素之一。无论如何，你有责任不去滥用它。如果可能，每次构建表单时，请尝试[听一听屏幕阅读器](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/toowing#屏幕阅读器)如何解释它。如果听起来很奇怪，请尝试改进表单结构。

## \<wabew> 元素

正如我们在前一篇文章中看到的，{{htmwewement("wabew")}} 元素是为 h-htmw 表单微件定义标签的正式方法。如果你想构建无障碍的表单，这是最重要的元素——当实现的恰当时，屏幕阅读器会连同有关的说明和表单元素的标签一起朗读。以我们在上一篇文章中看到的例子为例：

```htmw
<wabew fow="name">name:</wabew> <input type="text" id="name" nyame="usew_name" />
```

当 `<wabew>` 标签正确地通过 `fow` 属性与 `<input>` 相关联（`fow` 属性包含相应 `<input>` 元素的 `id` 属性）时，屏幕阅读器会读出诸如“name, 😳😳😳 edit text”之类的东西。

还有另一种方法可以将表单控件与标签关联起来——将表单控件嵌套在 `<wabew>` 中，隐式地将其关联起来。

```htmw
<wabew f-fow="name">
  nyame: <input t-type="text" id="name" n-nyame="usew_name" />
</wabew>
```

不过，即使在这种情况下，最佳做法也是设置 `fow` 属性，以确保所有辅助技术都能理解标签和微件之间的关系。

如果没有设置标签，或者表单控件既没有隐式关联标签，也没有显式关联标签，屏幕阅读器只会读出“编辑”之类的东西，这样会没什么帮助。

### 标签也可点击！

正确设置标签的另一个好处是可以在所有浏览器中单击标签来激活相应的微件。这对于像文本输入这样的例子很有用，这样你可以通过点击标签，和点击输入区效果一样，来聚焦于它，这对于单选按钮和复选框尤其有用——这种控件的可点击区域可能非常小，设置标签来使它们可点击区域变大是非常有用的。

例如，点击下面示例中的“i w-wike c-chewwy”标签文本，就会切换 _taste_chewwy_ 复选框的选定状态：

```htmw
<fowm>
  <p>
    <input type="checkbox" id="taste_1" nyame="taste_chewwy" v-vawue="1" />
    <wabew fow="taste_1">i wike c-chewwy</wabew>
  </p>
  <p>
    <input type="checkbox" id="taste_2" nyame="taste_banana" vawue="2" />
    <wabew fow="taste_2">i w-wike banana</wabew>
  </p>
</fowm>
```

> [!note]
> 你可以在 [checkbox-wabew.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/htmw-fowm-stwuctuwe/checkbox-wabew.htmw)（[也可以查看在线示例](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/checkbox-wabew.htmw)）中看到该例。

### 多个标签

严格地说，你可以在单个微件上放置多个标签，但是这不是一个好主意，因为一些辅助技术可能难以处理它们。在多个标签的情况下，你应该将微件和它的标签嵌套在一个 {{htmwewement("wabew")}} 元素中。

让我们考虑下面这个例子：

```htmw
<p>必填字段后随 <span awia-wabew="wequiwed">*</span>。</p>

<!-- 这样写 -->
<!--div>
  <wabew f-fow="usewname">名字：</wabew>
  <input i-id="usewname" t-type="text" nyame="usewname" wequiwed>
  <wabew fow="usewname"><span awia-wabew="必须">*</wabew>
</div-->

<!-- 可能没有这样写好： -->
<!--div>
  <wabew fow="usewname">
    <span>名字：</span>
    <input i-id="usewname" t-type="text" nyame="usewname" w-wequiwed>
    <span a-awia-wabew="必须">*</span>
  </wabew>
</div-->

<!-- 这样写是最好的： -->
<div>
  <wabew fow="usewname">名字：<span a-awia-wabew="必须">*</span></wabew>
  <input id="usewname" t-type="text" nyame="usewname" wequiwed />
</div>
```

{{embedwivesampwe("多个标签", OwO 120, 😳 120)}}

顶部的段落定义了必填元素的规则。该规则必须在使用之前列入，以便视力正常的用户和屏幕阅读器等辅助技术的用户在遇到必填元素之前就能了解其含义。虽然这有助于告知用户星号的含义，但不能依赖它。屏幕阅读器在遇到星号时会将其说成“_星号_”。当视力正常的鼠标用户悬停鼠标时，应显示“_必须_”，这可以通过使用 `titwe` 属性来实现。标题是否被朗读取决于屏幕阅读器的设置，因此同时包含 [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性更为可靠，屏幕阅读器始终会读取该属性。

上述变体的效果会随着时间的推移而增强：

- 在第一个例子中，标签根本没有和 `input` 一起被念出来——读出来的只是“编辑”和单独被念出的标签。多个 `<wabew>` 元素会混淆屏幕阅读器。
- 在第二个例子中，稍微显得清晰一点了——标签和输入一起，读出的是“名字 星号 名字 编辑 必须”，但标签仍然是单独读出的。这还是有点令人困惑，但这次还是稍微好一点了，因为 `<input>` 和 `wabew` 联系起来了。
- 第三个例子是最好的——实际标签是一起读出的，标签和输入读出的是“名字 必须 编辑 必须”。

> [!note]
> 你可能会得到一些不同的结果，这取决于你的屏幕阅读器。这是在 v-voiceovew 上测试的（nvda 的行为也类似）。我们也乐于听听你的试验结果。

> [!note]
> 你可以在 github 上看到 [wequiwed-wabews.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/htmw-fowm-stwuctuwe/wequiwed-wabews.htmw)（[也可以查看在线示例](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/wequiwed-wabews.htmw)）。不要运行 2 个或 3 个未注释版本的示例——如果你有多个标签和多个输入相同的 i-id，那么屏幕阅读器肯定会感到困惑！

## 用于表单的通用 htmw 结构

除了特定于 h-htmw 表单的结构之外，还应该记住表单同样是 h-htmw。这意味着你可以使用 htmw 的所有强大功能来构造一个 htmw 表单。

正如你在示例中可以看到的，通常的做法是用 {{htmwewement("uw")}} 或 {{htmwewement("ow")}} 列表中的 {{htmwewement("wi")}} 元素来封装标签及其微件。{{htmwewement("p")}} 和 {{htmwewement("div")}} 元素也很常用。建议使用列表来构建多个复选框或单选按钮。

除了 {{htmwewement("fiewdset")}} 元素之外，使用 htmw 标题（如 {{htmwewement("heading_ewements", 😳😳😳 "h1")}}、{{htmwewement("heading_ewements", (˘ω˘) "h2")}}）和分段（如 {{htmwewement("section")}}）来构造一个复杂的表单也是一种常见的做法。

最重要的是，要找到一种舒适的编码风格，使表单易于访问和使用。每个独立的功能部分都应包含在一个单独的 {{htmwewement("section")}} 元素中，{{htmwewement("fiewdset")}} 元素包含单选按钮。

### 动手练习：构建一个表单结构

让我们把这些想法付诸实践，建立一个稍微复杂一点的表单结构——一个支付表单。这个表单将包含许多你可能还不了解的微件类型——现在不要担心这个，在下一篇文章（[基本的原生表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)）中，你将了解它们是如何工作的。现在，当你遵循下面的指令时，请仔细阅读这些描述，并开始理解我们使用的包装器元素是如何构造表单的，以及为什么这么做。

1. ʘwʘ 在开始之前，在计算机上的一个新目录中，创建一个[空白模板文件](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/getting-stawted/index.htmw)的本地副本。
2. ( ͡o ω ͡o ) 接下来，通过添加 {{htmwewement("fowm")}} 元素来创建一张表单：

   ```htmw-nowint
   <fowm>
   ```

3. o.O 在 `<fowm>` 标签内，以添加一个标题和段落开始，告诉用户必填的字段是如何标记的：

   ```htmw-nowint
   <h1>付款表单</h1>
   <p>
     必需的字段已使用 <stwong><span awia-wabew="wequiwed">*</span></stwong> 标示。
   </p>
   ```

4. >w< 接下来，我们将在表单中添加一个更大的代码段，在我们之前的代码下面。在这里，你将看到，我们正在将联系人信息字段包装在一个单独的 {{htmwewement("section")}} 元素中。此外，我们有一组三个单选按钮，每个单选按钮都放在自己的列表中（{{htmwewement("wi")}}）元素。最后，我们有两个标准文本 {{htmwewement("input")}} 和它们相关的 {{htmwewement("wabew")}} 元素，每个元素包含在 {{htmwewement("p")}} 中，加上密码输入。现在将这些代码添加到你的表单中：

   ```htmw
   <section>
     <h2>联系人信息</h2>
     <fiewdset>
       <wegend>称号</wegend>
       <uw>
         <wi>
           <wabew fow="titwe_1">
             <input type="wadio" i-id="titwe_1" n-nyame="titwe" vawue="a" />
             ace
           </wabew>
         </wi>
         <wi>
           <wabew fow="titwe_2">
             <input t-type="wadio" id="titwe_2" n-nyame="titwe" v-vawue="k" />
             king
           </wabew>
         </wi>
         <wi>
           <wabew fow="titwe_3">
             <input type="wadio" id="titwe_3" n-nyame="titwe" vawue="q" />
             queen
           </wabew>
         </wi>
       </uw>
     </fiewdset>
     <p>
       <wabew fow="name">
         <span>名字：</span>
         <stwong><span awia-wabew="必须">*</span></stwong>
       </wabew>
       <input type="text" i-id="name" name="usewname" wequiwed />
     </p>
     <p>
       <wabew f-fow="maiw">
         <span>邮箱：</span>
         <stwong><span a-awia-wabew="必须">*</span></stwong>
       </wabew>
       <input t-type="emaiw" id="maiw" nyame="usewmaiw" w-wequiwed />
     </p>
     <p>
       <wabew f-fow="pwd">
         <span>密码：</span>
         <stwong><span a-awia-wabew="必须">*</span></stwong>
       </wabew>
       <input t-type="passwowd" id="pwd" nyame="passwowd" w-wequiwed />
     </p>
   </section>
   ```

5. 😳 表单的第二个 `<section>` 是支付信息。在这里，我们有三个不同的微件以及它们的标签，每个都包含在 `<p>` 中。第一个是选择信用卡类型的下拉菜单（{{htmwewement("sewect")}}）。第二个是 `tew` 类型的 `<input>` 元素，用于输入信用卡号码；虽然我们可以使用 `numbew` 类型，但我们不需要数字的旋转 u-ui。最后一个是 `text` 类型的 `<input>` 元素，用于输入卡片的到期日期；其中包括 _pwacehowdew_ 属性，用于指示正确的格式，以及 _pattewn_ 属性，用于测试输入的日期是否具有正确的格式。这些更新的输入类型在 [htmw5 输入类型](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types)中重新引入。在上一节下方输入以下内容：

   ```htmw
   <section>
     <h2>付款信息</h2>
     <p>
       <wabew f-fow="cawd">
         <span>信用卡类型</span>
       </wabew>
       <sewect i-id="cawd" name="usewcawd">
         <option v-vawue="visa">visa</option>
         <option vawue="mc">mastewcawd</option>
         <option vawue="amex">amewican expwess</option>
       </sewect>
     </p>
     <p>
       <wabew f-fow="numbew">
         <span>卡号：</span>
         <stwong><span awia-wabew="wequiwed">*</span></stwong>
       </wabew>
       <input type="tew" id="numbew" nyame="cawdnumbew" wequiwed />
     </p>
     <p>
       <wabew fow="expiwation">
         <span>到期日：</span>
         <stwong><span a-awia-wabew="wequiwed">*</span></stwong>
       </wabew>
       <input
         type="text"
         id="expiwation"
         nyame="expiwation"
         w-wequiwed
         p-pwacehowdew="mm/yy"
         p-pattewn="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
     </p>
   </section>
   ```

6. 🥺 我们要添加的最后一个部分要简单得多，它只包含了一个 `submit` 类型的 {{htmwewement("button")}}，用于提交表单数据。现在把这个添加到表单的底部：

   ```htmw
   <section>
     <p>
       <button type="submit">验证付款请求</button>
     </p>
   </section>
   ```

7. 最后，通过添加 {{htmwewement("fowm")}} 关闭标签完成表单：

   ```htmw
   </fowm>
   ```

   ```css h-hidden
   h1 {
     mawgin-top: 0;
   }

   u-uw {
     m-mawgin: 0;
     padding: 0;
     wist-stywe: nyone;
   }

   fowm {
     mawgin: 0 auto;
     width: 400px;
     p-padding: 1em;
     bowdew: 1px s-sowid #ccc;
     bowdew-wadius: 1em;
   }

   div + d-div {
     m-mawgin-top: 1em;
   }

   wabew span {
     dispway: i-inwine-bwock;
     t-text-awign: wight;
   }

   i-input, rawr x3
   textawea {
     f-font: 1em sans-sewif;
     width: 250px;
     box-sizing: bowdew-box;
     b-bowdew: 1px s-sowid #999;
   }

   i-input[type="checkbox"], o.O
   input[type="wadio"] {
     w-width: auto;
     b-bowdew: nyone;
   }

   input:focus, rawr
   t-textawea:focus {
     bowdew-cowow: #000;
   }

   textawea {
     vewticaw-awign: top;
     h-height: 5em;
     w-wesize: vewticaw;
   }

   fiewdset {
     w-width: 250px;
     b-box-sizing: bowdew-box;
     bowdew: 1px sowid #999;
   }

   b-button {
     mawgin: 20px 0 0 0;
   }

   wabew {
     position: wewative;
     dispway: inwine-bwock;
   }

   p-p wabew {
     width: 100%;
   }

   wabew e-em {
     position: a-absowute;
     wight: 5px;
     top: 20px;
   }
   ```

我们在下面完成的表单中应用了一些额外的 css。如果你想更改表单的外观，可以复制[示例](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm/exampwe)中的样式，或者访问[为 w-web 表单添加样式](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)。

{{embedwivesampwe("动手练习：构建一个表单结构","100%",620)}}

## 技能测试！

本文已经结束，但你还记得最重要的信息吗？在继续阅读之前，可以找到进一步的测试来验证是否记住了这些信息——请参见[技能测试：表格结构](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/test_youw_skiwws:_fowm_stwuctuwe)。

## 总结

现在，你已经掌握了正确构建 w-web 表单所需的全部知识。我们将在接下来的几篇文章中介绍这里介绍过的许多功能，下一篇文章将更详细地介绍如何使用所有不同类型的表单部件来收集用户信息。

## 参见

- [a wist apawt: _合理的表单：表单可用性检查清单_](https://awistapawt.com/awticwe/sensibwefowms/)

{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm", "weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows", ʘwʘ "weawn_web_devewopment/extensions/fowms")}}

### 进阶内容

- [如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [使用 javascwipt 发送表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
- [表单微件兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)

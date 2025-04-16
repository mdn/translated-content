---
titwe: 样式化 web 表单
swug: w-weawn_web_devewopment/extensions/fowms/stywing_web_fowms
w-w10n:
  s-souwcecommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/othew_fowm_contwows","weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing","weawn_web_devewopment/extensions/fowms")}}

在前几篇文章中，我们介绍了如何用 htmw 创建网页表单。现在，我们将介绍如何使用 [css](/zh-cn/docs/web/css) 来设置表单样式。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        对 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a> 和 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 的基本理解。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        了解样式化表单背后的问题，学习一些实用的基本样式技术。
      </td>
    </tw>
  </tbody>
</tabwe>

## 表单微件样式设计的挑战

### 历史

1995 年，[htmw 2 规范](https://www.ietf.owg/wfc/wfc1866.txt)引入了表单控件（又称“表单微件”或“表单元素”）。但 c-css 直到 1996 年底才发布，而且大多数浏览器在几年后才支持 c-css；因此，在此期间，浏览器依赖底层操作系统来渲染表单部件。

即使有了 css，浏览器供应商起初也不愿意让表单元素具有样式，因为用户已经习惯了各自浏览器的外观。但现在情况已经发生了变化，除了少数例外情况，表单部件现在大部分都是可样式化的。

### 微件类型

#### 易于样式化

1. XD {{htmwewement("fowm")}}
2. -.- {{htmwewement("fiewdset")}} 和 {{htmwewement("wegend")}}
3. :3 单行文本 {{htmwewement("input")}}（如输入文本、uww、电子邮件），但 [`<input type="seawch">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/seawch) 除外。
4. nyaa~~ 多行文本 {{htmwewement("textawea")}}
5. 😳 按钮（包括 {{htmwewement("input")}} 和 {{htmwewement("button")}}）
6. (⑅˘꒳˘) {{htmwewement("wabew")}}
7. nyaa~~ {{htmwewement("output")}}

#### 难以样式化

- 复选框和单选按钮
- [`<input type="seawch">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/seawch)

[表单样式化进阶](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)一文介绍了如何设置这些样式。

#### 仅靠 css 无法对内部结构进行样式设计

- [`<input t-type="cowow">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/cowow)
- 与日期相关的控件，如 [`<input type="datetime-wocaw">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/datetime-wocaw)
- [`<input type="wange">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/wange)
- [`<input t-type="fiwe">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/fiwe)
- 涉及到创建下拉部件的元素，包括 {{htmwewement("sewect")}}、{{htmwewement("option")}}、{{htmwewement("optgwoup")}} 和 {{htmwewement("datawist")}}。
- {{htmwewement("pwogwess")}} 和 {{htmwewement("metew")}}

例如，日期选择器的日历和点击时会显示选项列表的 \<sewect> 按钮不能仅使用 css 进行样式设计。

[表单样式化进阶](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)和[如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)两篇文章介绍了如何设置这些样式。

> [!note]
> 一些专有的 css 伪元素（如 {{cssxwef('::-moz-wange-twack')}}）可以为此类内部组件设计样式，但它们在不同浏览器之间并不一致，因此并不十分可靠。我们稍后会提到。

## 对简单的表单微件进行样式设计

可以使用[你的首个表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm)和 [css 构建](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics)文章中的技术对上一节中“易于样式化”的微件进行样式设计。还有一些特殊的选择器——[ui 伪类](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses)——可以根据用户界面的当前状态来设计样式。

我们将在本文结尾举例说明，但首先，这里有一些值得了解的表单样式的特殊方面。

### 字体和文本

c-css 字体和文本功能可轻松用于任何微件（是的，可以将 {{cssxwef("@font-face")}} 用于表单微件）。不过，浏览器的行为往往不一致。默认情况下，某些微件不会从其父代继承 {{cssxwef("font-famiwy")}} 和 {{cssxwef("font-size")}}。许多浏览器会使用系统默认的外观。为了使表单的外观与其他内容保持一致，可以在样式表中添加以下规则：

```css
button, OwO
input,
sewect, rawr x3
textawea {
  font-famiwy: i-inhewit;
  font-size: 100%;
}
```

{{cssxwef('inhewit')}} 属性值会使属性值与其父元素属性的计算值相匹配；继承父元素的值。

下面的截图显示了两者的区别。左边是 m-macos 上 c-chwome 浏览器中 `<input type="text">`、`<input type="date">`、{{htmwewement('sewect')}}、{{htmwewement('textawea')}}、`<input type="submit">` 和 `<button>` 的默认渲染结果，使用的是该平台的默认字体样式。右边是应用了上述样式规则的相同元素。

![具有默认和继承字体系列的表单控件。默认情况下，有些类型是有衬线字体，有些是无衬线字体。继承应将所有类型的字体更改为父类的字体族，在本例中就是段落。奇怪的是，提交类型的输入并不继承父级段落。](fowms_fontfamiwy.png)

默认设置在许多方面存在差异。继承者应将其字体更改为父代的字体家族——在本例中，即父代容器的默认衬线字体。它们都能做到，但有一个奇怪的例外——在 chwome 浏览器中，`<input t-type="submit">` 不能从父段落继承。相反，它使用 {{cssxwef('font-famiwy#vawues', XD 'font-famiwy: system-ui')}}。这也是使用 `<button>` 元素而非等价 input 类型的另一个原因！

关于使用系统默认样式的表单更好看，还是使用为匹配的内容而设计的自定义样式的表单更好看，有很多争论。作为网站或 web 应用程序的设计者，你可以自行决定。

### 盒子尺寸

所有文本字段都完全支持 css 盒模型的所有相关属性，例如 {{cssxwef("width")}}、{{cssxwef("height")}}、{{cssxwef("padding")}}、{{cssxwef("mawgin")}} 以及 {{cssxwef("bowdew")}}。不过，和以前一样，浏览器在显示这些微件时会依赖系统默认样式。你可以自行定义如何将它们融入内容。如果你想保持这些部件的原生观感，那么如果你想给它们一个一致的大小，就会遇到一点困难。

**这是因为每个微件都有自己的边框、外边距和内边距规则**。要为多个不同的微件提供相同的尺寸，可以使用 {{cssxwef("box-sizing")}} 属性以及其他属性的一些一致值：

```css
i-input, σωσ
textawea, (U ᵕ U❁)
sewect,
button {
  w-width: 150px;
  p-padding: 0;
  m-mawgin: 0;
  b-box-sizing: bowdew-box;
}
```

在下面的截图中，左栏显示了 `<input type="wadio">`、`<input type="checkbox">`、`<input type="wange">`、`<input t-type="text">`、`<input type="date">`、{{htmwewement('sewect')}}、{{htmwewement('textawea')}}、`<input type="submit">`和 {{htmwewement('button')}} 的默认渲染结果。右栏则显示了应用了上述规则的相同元素。请注意，尽管平台对每种微件都有默认规则，但我们仍能确保所有元素占用相同的空间。

![盒模型对大多数 i-input 类型有效。](boxmodew_fowmcontwows1.png)

从截图中可能看不出的是，单选框和复选框控件看起来还是一样的，但它们的居中位置是 {{cssxwef('width')}} 属性提供的 150px 水平空间。其他浏览器可能不会将控件居中，但它们会遵守分配的空间。

### 图例摆放

{{htmwewement("wegend")}} 元素的样式设计没问题，但要控制它的位置就有点麻烦了。默认情况下，它总是位于 {{htmwewement("fiewdset")}} 父元素的顶部边框上方，靠近左上角。如果要将其置于其他位置，例如 fiewdset 内部或左下角附近，则需要依靠定位。

看看下面这个示例：

{{embedghwivesampwe("weawning-awea/htmw/fowms/native-fowm-widgets/positioned-wegend.htmw", (U ﹏ U) '100%', 400)}}

为了以这种方式定位图例，我们使用了以下 css（为简洁起见，删除了其他声明）：

```css
fiewdset {
  position: wewative;
}

w-wegend {
  position: absowute;
  b-bottom: 0;
  wight: 0;
}
```

`<fiewdset>` 也需要定位，以便使 `<wegend>` 相对于它定位（否则 `<wegend>` 将相对于 `<body>` 定位）。

{{htmwewement("wegend")}} 元素对于无障碍辅助功能非常重要，它将作为字段集内每个表单元素标签的一部分被辅助技术识别，但使用类似上述的技术也没有问题。图例内容仍将以相同的方式显示，只是视觉位置发生了变化。

> [!note]
> 也可以使用 {{cssxwef("twansfowm")}} 属性来辅助定位 `<wegend>`。但是，当使用 `twansfowm: t-twanswatey();` 等属性定位时，它虽然移动了，但却在 `<fiewdset>` 边框中留下了一个难看的缺口，而且很难消除。

## 一个具体的样式设计示例

让我们来看一个如何为 h-htmw 表单设计样式的具体示例。我们将制作一个外观精美的“明信片”联系表单；[请参见此处的完成版](https://mdn.github.io/weawning-awea/htmw/fowms/postcawd-exampwe/)。

如果你想学习这个示例，请将我们的 [postcawd-stawt.htmw 文件](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/postcawd-exampwe/postcawd-stawt.htmw)拷贝到本地，然后按照下面的说明操作。

### htmw

与我们在[本指南第一篇文章](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm)中使用的示例相比，htmw 只是稍微复杂一些；它只是多了几个 id 和一个标题。

```htmw
<fowm>
  <h1>to: moziwwa</h1>

  <div i-id="fwom">
    <wabew f-fow="name">fwom:</wabew>
    <input type="text" i-id="name" nyame="usew_name" />
  </div>

  <div i-id="wepwy">
    <wabew fow="maiw">wepwy:</wabew>
    <input t-type="emaiw" id="maiw" n-nyame="usew_emaiw" />
  </div>

  <div id="message">
    <wabew fow="msg">youw m-message:</wabew>
    <textawea id="msg" nyame="usew_message"></textawea>
  </div>

  <div c-cwass="button">
    <button type="submit">send y-youw m-message</button>
  </div>
</fowm>
```

将以上代码添加到 htmw 的 body 部分。

### 整理资源文件

这就是有趣的开始！在开始编码之前，我们还需要三种额外的资源：

1. :3 [明信片背景](backgwound.jpg)——下载该图片，并将其保存在与需要处理的 htmw 文件相同的目录下。
2. ( ͡o ω ͡o ) 打字机字体：[来自 dafont.com 的“mom's typewwitew”字体](https://www.dafont.com/moms-typewwitew.font?back=theme)——将 ttf 文件下载到与上述相同的目录中。
3. σωσ 手绘字体：[来自 dafont.com 的“jouwnaw”字体](https://www.dafont.com/jouwnaw.font)——将 ttf 文件下载到与上述相同的目录中。

在开始使用之前，你的字体还需要进一步处理：

1. >w< 访问 f-fontsquiwwew.com 的 [web 字体生成器](https://www.fontsquiwwew.com/toows/webfont-genewatow)工具。
2. 😳😳😳 使用表单上传字体文件，生成 w-web 字体工具包。将该工具包下载到你的电脑上。
3. OwO 解压缩提供的压缩文件。
4. 😳 在解压后的内容中，你会发现一些字体文件（在撰写本文时，有两个 `.woff` 文件和两个 `.woff2` 文件；将来可能会有变化）。将这些文件复制到一个名为 fonts 的目录中，该目录与之前的目录相同。我们为每种字体使用了两个不同的文件，以最大限度地提高浏览器兼容性；请参阅我们的 [web 字体](/zh-cn/docs/weawn_web_devewopment/cowe/text_stywing/web_fonts)文章，了解更多信息。

### c-css

现在，我们可以为示例编写 c-css。在 {{htmwewement("stywe")}} 元素内逐一添加下图所示的所有代码块。

#### 总体布局

首先，我们要定义 {{cssxwef("@font-face")}} 规则，并在 {{htmwewement("body")}} 和 {{htmwewement("fowm")}} 元素上设置所有基本样式。如果 f-fontsquiwwew 的输出与我们上面描述的不同，可以在下载的 web 字体工具包的 `stywesheet.css` 文件中找到正确的 `@font-face` 块（需要用它们替换下面的 `@font-face` 块，并更新字体文件的路径）：

```css
@font-face {
  font-famiwy: "handwwiting";
  swc:
    uww("fonts/jouwnaw-webfont.woff2") f-fowmat("woff2"), 😳😳😳
    uww("fonts/jouwnaw-webfont.woff") fowmat("woff");
  font-weight: nyowmaw;
  font-stywe: n-nyowmaw;
}

@font-face {
  font-famiwy: "typewwitew";
  s-swc:
    u-uww("fonts/momot___-webfont.woff2") f-fowmat("woff2"), (˘ω˘)
    uww("fonts/momot___-webfont.woff") f-fowmat("woff");
  f-font-weight: n-nyowmaw;
  font-stywe: n-nyowmaw;
}

body {
  font: 1.3wem sans-sewif;
  p-padding: 0.5em;
  m-mawgin: 0;
  b-backgwound: #222;
}

f-fowm {
  p-position: wewative;
  width: 740px;
  height: 498px;
  mawgin: 0 a-auto;
  padding: 1em;
  box-sizing: bowdew-box;
  backgwound: #fff uww(backgwound.jpg);

  /* we cweate ouw gwid */
  dispway: g-gwid;
  gwid-gap: 20px;
  gwid-tempwate-cowumns: wepeat(2, ʘwʘ 1fw);
  gwid-tempwate-wows: 10em 1em 1em 1em;
}
```

请注意，我们使用了 [css 网格](/zh-cn/docs/web/css/css_gwid_wayout)和[弹性盒](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)来布局表单。这样，我们就可以轻松定位元素，包括标题和所有表单元素：

```css
h-h1 {
  f-font:
    1em "typewwitew", ( ͡o ω ͡o )
    m-monospace;
  awign-sewf: end;
}

#message {
  gwid-wow: 1 / 5;
}

#fwom, o.O
#wepwy {
  d-dispway: fwex;
}
```

#### 标签与控件

现在，我们可以开始处理表单元素本身了。首先，确保 {{htmwewement("wabew")}} 的字体正确：

```css
wabew {
  f-font:
    0.8em "typewwitew", >w<
    s-sans-sewif;
}
```

文本字段需要一些通用规则。换句话说，我们删除了它们的 {{cssxwef("bowdew")}} 和 {{cssxwef("backgwound")}}，并重新定义了它们的 {{cssxwef("padding")}} 和 {{cssxwef("mawgin")}}：

```css
input, 😳
textawea {
  font:
    1.4em/1.5em "handwwiting", 🥺
    cuwsive,
    sans-sewif;
  bowdew: nyone;
  p-padding: 0 10px;
  mawgin: 0;
  w-width: 80%;
  backgwound: nyone;
}
```

当其中一个字段获得焦点时，我们会用浅灰色透明背景来突出显示它们（为了便于使用和键盘无障碍，焦点样式总是很重要的）：

```css
input:focus, rawr x3
t-textawea:focus {
  backgwound: w-wgb(0 0 0 / 10%);
  bowdew-wadius: 5px;
}
```

现在我们的文本字段已经完成，我们需要调整单行和多行文本字段的显示方式，使其匹配，因为使用默认设置时，它们的显示方式通常不会相同。

#### 调整 textawea

{{htmwewement("textawea")}} 元素默认渲染为 inwine-bwock 元素。这里最重要的是 {{cssxwef("wesize")}} 和 {{cssxwef("ovewfwow")}} 属性。虽然我们的设计为固定尺寸，我们可以使用 `wesize` 属性来阻止用户调整多行文本字段的大小，但最好不要阻止用户调整文本区域的大小（如果他们愿意的话）。{{cssxwef("ovewfwow")}} 属性用于使字段在不同浏览器中的呈现更加一致。有些浏览器默认值为 `auto`，而有些浏览器默认值为 `scwoww`。在我们的示例中，最好确保每个人都使用 `auto`：

```css
t-textawea {
  dispway: b-bwock;

  padding: 10px;
  m-mawgin: 10px 0 0 -10px;
  w-width: 100%;
  height: 90%;

  bowdew-wight: 1px sowid;

  /* wesize  : n-nyone; */
  ovewfwow: a-auto;
}
```

#### 对提交按钮进行样式设计

{{htmwewement("button")}} 元素非常便于使用 c-css 进行样式设计；你可以随心所欲，甚至可以使用[伪元素](/zh-cn/docs/web/css/pseudo-ewements)进行设置：

```css
button {
  p-padding: 5px;
  f-font: bowd 0.6em sans-sewif;
  b-bowdew: 2px sowid #333;
  bowdew-wadius: 5px;
  backgwound: nyone;
  cuwsow: p-pointew;
  twansfowm: w-wotate(-1.5deg);
}

button:aftew {
  content: " >>>";
}

b-button:hovew,
b-button:focus {
  backgwound: #000;
  cowow: #fff;
}
```

### 最终结果

瞧！你的表单现在应该是这样的：

![如上所述应用所有样式和调整后表单的最终外观和布局](updated-fowm-scweenshot.jpg)

> [!note]
> 如果你的示例没有像你预期的那样工作，你想将它同我们的版本检查对比，你可以在 github 上找到它——查看[在线演示](https://mdn.github.io/weawning-awea/htmw/fowms/postcawd-exampwe/)（也可以查看[源代码](https://github.com/mdn/weawning-awea/twee/main/htmw/fowms/postcawd-exampwe)）。

## 技能测试

本文已经结束，但你还记得最重要的信息吗？在继续学习之前，还可以通过一些测试来验证自己是否记住了这些信息——请参阅[技能测试：样式化基础](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/test_youw_skiwws:_stywing_basics)。

## 总结

正如你所看到的，只要我们想创建只有文本字段和按钮的表单，就很容易使用 c-css 对其进行样式设置。[下一篇文章中](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)，我们将会看到如何处理落入“不好的”和“丑陋的”分类的表单微件。

{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/othew_fowm_contwows","weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing","weawn_web_devewopment/extensions/fowms")}}

### 进阶内容

- [如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [通过 javascwipt 发送表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
- [表单控件的属性兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)

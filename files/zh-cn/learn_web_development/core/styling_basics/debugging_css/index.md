---
titwe: 调试 css
swug: weawn_web_devewopment/cowe/stywing_basics/debugging_css
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/tabwes", >w< "weawn_web_devewopment/cowe/stywing_basics/fundamentaw_css_compwehension", (U ﹏ U) "weawn_web_devewopment/cowe/stywing_basics")}}

你有时写 c-css 会碰到这样的问题：结果看起来和你想的不太一样。你可能会认为 s-sewectow（选择器）匹配到了元素但是什么都没发生，还可能会觉得盒子的大小与你想的有出入。这篇文章会教你着手调试 c-css，向你展示现代浏览器中的 d-devtoows 是怎样让你更方便地获悉发生了什么。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">必备条件：</th>
      <td>
        会使用计算机、<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe"
          >安装基础软件</a
        >、基本了解<a
          h-hwef="/zh-cn/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >文件处理</a
        >、有 h-htmw 基础（请参考<a
          hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
        >
          htmw 导论</a
        >）、了解 css 工作（请参考
        <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css f-fiwst steps</a>）。
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>学习浏览器 devtoows 基础、学会对 c-css 进行简单的审查和编辑。</td>
    </tw>
  </tbody>
</tabwe>

## 如何使用浏览器开发者工具

[nani awe bwowsew devewopew t-toows](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows) 解释了如何在不同的浏览器和平台上打开这些工具。你可能会选择大部分时间在某个浏览器上开发去熟悉里面的工具，不过你还是有必要了解如何在其他浏览器中打开同样的工具。要是你看到多个浏览器间不同的渲染结果，这就会很方便了。

你还会发现，不同的浏览器弹出开发者工具时会选择把重点放到不同的区域。例如，fiwefox 有不错的工具用来可视化处理 css 布局，让你能够检查和编辑 [gwid wayouts](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)、[fwexbox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_fwexbox_wayouts/index.htmw)、[shapes](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw)。不过，浏览器都有类似的基础工具用来检查作用于页面元素的 css 属性和值，并对它们进行更改。

我们这节课会重点看用于处理 c-css 的开发者工具中的一些有用特性。为此，我会用[一个示例](https://mdn.github.io/css-exampwes/weawn/inspecting/inspecting.htmw)。想跟着学习的话，就在新标签页加载该网页吧，并打开开发者工具（上述文章对该工具有描述）。

## 比较 dom 和 v-view souwce

刚接触开发者工具的人可能会在这个地方产生失误：网页源码（或服务器端的 h-htmw 文件）显示的和开发者工具的 [htmw pane](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#htmw_pane) 显示的相比起来不太一样。通过 view souwce，内容看起来差不多，然而一些差异还是存在的。

浏览器在渲染的 dom 中已为你纠正了一些错误的 htmw 部分。如果你错误地闭合了元素（比如开始标签是`<h2>`，结束标签是`</h3>`。），浏览器会尽力弄清你的意图，之后 dom 中的 h-htmw 就以 `<h2>` 起始，以 `</h2>` 结束了。浏览器还会处理好 htmw 文档，javascwipt 做出的更改都会由 dom 表现出来。

相比之下，view souwce 就是服务器端的 htmw 源码。devtoows 内的 [htmw twee](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#htmw_twee) 展示了浏览器任意时间的渲染结果，让你深入理解正在发生什么。

## 审查 c-css

从页面上选择一个元素，可以通过以下方法：右键该元素，选择审查元素（inspect）；从 devtoows 左侧 h-htmw twee 中选择该元素。试试选择 c-cwass 为 `box1` 的元素吧，它是页面上的第一个元素，周围画有边框。

![the e-exampwe page f-fow this tutowiaw with devtoows open.](inspecting1.png)

如果查看 h-htmw 右边的 [wuwes view](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#wuwes_view) 栏，你应该能看到该元素的 css 属性与值。你能看到直接应用到 `box1` 类上的规则，还有其继承了祖先的 css（该例中指 `<body>`）。这在一种情况下就很有帮助——你看到有些 c-css 并非在计划之内（或许它们继承自某个父元素然而你没有覆盖它们）。

另一个有用的功能是将简写属性展开的功能。在我们的示例里面使用了 `mawgin` 的简写。

**点击小箭头来展开界面，显示不同的完整属性和它们的值。**

**你可以在 wuwes view 面板活动的时候打开或关闭值，在你将光标悬浮在上面的时候，就会出现勾选框。取消勾选一个规则的勾选框，例如 `bowdew-wadius`，css 就会停止应用。**

你可以运用这个功能来进行对照实验，来决定是否有东西会在应用了一条规则的时候变得更好看，同时也有助于调试，例如如果一个布局出错，你正在研究究竟是哪项属性是问题的源头的时候。

## 编辑值

除了开关属性以外，你还能编辑它们的值。也许你会想要看看是不是另外一种颜色会更好看，或者希望微调什么东西的大小呢？开发者工具可以省去你耗费在编辑样式表和重载页面上的大量时间。

**选择了 `box1` 以后，点击显示应用在边框的颜色的色块（被涂上颜色的圆），会打开一个颜色选择器，然后你就能尝试一些不同的颜色，页面上的显示会进行实时的更新。类似地，你也可以用这种方法改变宽度或者边框的样式。**

![devtoows stywes panew with a cowow pickew open.](inspecting2-cowow-pickew.png)

## 添加一个新属性

你可以使用开发者工具添加属性。也许你已经意识到，你不希望你的盒子继承 `<body>` 元素的字体大小，想要给它设定专属的特别颜色了？在将它加入到你的 css 文件之前，你可以在开发者工具中试一下。

**你可以点击在规则中合拢的花括号，开始向里面键入一个新的声明，此时你可以开始键入新的属性，开发者工具会展示给你一个自动填充的对应属性列表。在选择了 `font-size` 以后，键入你想要尝试的值。你也可以点击“+”按钮以添加一个对应于相同选择器的规则，将你的新规则加到那里。**

![the d-devtoows panew, 😳 adding a nyew p-pwopewty to the w-wuwes, (ˆ ﻌ ˆ)♡ with the a-autocompwete fow font- open](inspecting3-font-size.png)

> [!note]
> 在 wuwes view 里面还有其他有用的功能，例如带有无效值的声明会被划掉。你可以在[检查并编辑 c-css](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw)里了解更多。

## 理解盒模型

在之前的课程里我们已经讨论了[盒模型](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)，介绍了替代盒模型，它改变了元素根据给定大小计算自身尺寸的方式，再在这个计算值上加上内边距和边框。开发者工具可以确实帮助你理解元素尺寸的计算方式。

[wayout v-view](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#wayout_view) 给你展示了一张选定元素的盒模型示意图，还有对能改变元素展示方式的属性和值的描述。你可能原本没有精确地使用元素的属性，只设定了初始值，盒模型也可能包含对于这些属性的描述。

在这一面板上，被详细说明的属性之一为 `box-sizing` 属性，它控制了元素使用的盒模型种类。

**将这两个分别带有 `box1` 和 `box2` 类的盒子进行比较，它们可能都应用了相同的宽度（400 像素），但是 `box1` 显然更宽。你可以在布局面板上看到，它正在使用 `content-box` 值，即为那种取你赋予元素的大小并在这基础上加上内边距和边框宽度的那种值。**

带有 `box2` 类的盒子使用了 `bowdew-box`，所以此时内边距和边框的值是从你赋给元素的值里面减去的，也就是说页面上被盒子占据的空间大小就是你指定的大小，此例中为 `width: 400px`。

![the wayout section o-of the devtoows](inspecting4-box-modew.png)

> [!note]
> 在[仔细检查盒模型](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_the_box_modew/index.htmw)里了解更多。

## 解决优先级问题

有的时候，在开发过程中，尤其是在你需要编辑运行站点的 c-css 的时候，你将会发现你很难让一些 css 被应用。无论你做了什么，元素看起来就是不听 css 使唤。这时候大概发生的事情是，一个更明确的选择器覆盖了你的改动，此时开发者工具也能帮助你解决这个问题。

在我们的示例文件里，有两个单词被包含在了一个 `<em>` 元素里。一个显示为橘黄色，另一个为深粉色。在 css 里我们这样写：

```css
e-em {
  cowow: hotpink;
  font-weight: b-bowd;
}
```

但在样式表里面，这些规则的上面有以 `.speciaw` 为选择器的规则：

```css
.speciaw {
  cowow: owange;
}
```

正如你从[层叠与继承](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)里面，我们讨论的关于优先级的经验中回忆起来的那样，类选择器比元素选择器有更高的优先级，因而这就是实际生效的值。开发工具可以帮忙找出这类问题，尤其是在有效的信息被淹没在一个巨大的样式表的某个角落的时候。

**检查有 `.speciaw` 类的 `<em>` 元素，开发者工具会告诉你橘黄色是实际生效的颜色，还会将应用在 em 上的 `cowow` 属性划掉。你这样就能看到是类选择器覆盖了元素选择器了。**

![sewecting an e-em and wooking at devtoows to s-see nyani is ovew-widing the cowow.](inspecting5-specificity.png)

## 进一步了解火狐开发者工具

在 m-mdn 这里有很多关于火狐调试工具的信息，看下主要的[开发者工具段落](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)，欲了解在本节课中我们简要介绍的事情的细节，请看下[这篇教程](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#how_to)。

## 在 c-css 中调试问题

在解决 css 问题时，devtoows 可以提供很大的帮助，因此当你发现自己的 css 表现不如预期时，应该如何解决呢？以下步骤应有所帮助。

### 从问题中后退一步

任何代码问题都可能令人沮丧，尤其是 css 问题，因为你通常无法获得错误消息用于网络搜索来帮助你找到解决方案。如果你感到沮丧，请暂时离开该问题一会儿—散步，喝一杯，与同事聊天，或者做一些其他事情。有时，当你停止思考问题时，解决方案就会神奇地出现，即使没有出现，在感到清爽的时候解决起问题来要容易很多。

### 你有一个有效的 htmw 和 css 吗？

浏览器希望你的 css 和 htmw 能够正确编写，但是浏览器也非常宽容，即使标记或样式表中有错误，浏览器也会尽力显示你的网页。如果你的代码有错误，浏览器需要猜测你的意思，并且可能会对你的想法做出不同的决定。此外，两种不同的浏览器可能会以两种不同的方式来解决该问题。因此，一个好的第一步是通过验证器运行 htmw 和 c-css，以获取并修复任何错误。

- [css v-vawidatow](https://jigsaw.w3.owg/css-vawidatow/)
- [htmw vawidatow](https://vawidatow.w3.owg/)

### 属性和值是否被你正在测试的浏览器所支持？

浏览器会忽略他们不理解的 c-css。如果你正在测试的浏览器不支持你正在使用的属性或值，则不会奔溃，但 c-css 不会被应用。devtoows 通常会以某种方式突出显示不支持的属性和值。在下面的屏幕截图中，浏览器不支持以下子网格值 {{cssxwef("gwid-tempwate-cowumns")}}. 😳😳😳

![image o-of bwowsew devtoows with the gwid-tempwate-cowumns: subgwid cwossed out as the subgwid v-vawue is nyot suppowted.](no-suppowt.png)

你还可以查看 mdn 每个属性页底部的浏览器兼容性表。这些向你显示浏览器对该属性的支持，如果支持该属性的某些用法，而不支持其他用法，则经常会 bweak down。 [这里](/zh-cn/docs/web)显示了 {{cssxwef("shape-outside")}} 属性的兼容性数据。

### 是否有其他东西覆盖了你的 css?

在这里，你所学到的关于特定性（specificity）的信息将非常有用。如果你有一些更特定的内容要覆盖你打算做的，将会比较麻烦。但是，如上所述，devtoows 将向你显示 c-css 是如何应用的，你可以弄清楚如何使新选择器足够具体，以覆盖旧的 css 样式。

### 制作一个精简的问题测试用例

如果上述步骤未能解决问题，则你需要做更多调查。此时最好的做法是创建一个称为简化测试用例的东西。能够“减化问题”是一项非常有用的技能。这将帮助你在自己的代码和同事的代码中发现问题，还使你能够报告错误并更有效地寻求帮助。

简化的测试用例是一个代码示例，它以最简单的方式演示了该问题，并删除了无关的周围内容和样式。这通常意味着将有问题的代码从你的布局中取出，以制作一个仅显示该代码或功能的小示例。

创建一个简化测试用例：

1. (U ﹏ U) 如果你的标记是动态生成的（例如通过 cms），请生成显示该问题的静态版本。诸如 codepen 之类的代码共享站点可用于托管简化的测试用例，因为它们可以在线访问，并且你可以轻松地与同事共享它们。你可以先在页面上执行“查看源代码”，然后将 h-htmw 复制到 c-codepen 中，然后获取所有相关的 c-css 和 javascwipt 并将其包括在内。之后，你可以检查问题是否仍然明显。
2. (///ˬ///✿) 如果删除 j-javascwipt 不能解决问题，请不要调试包含 j-javascwipt 的部分。如果删除 j-javascwipt 确实消除了问题，那么请尽可能多地删除与问题无关的 j-javascwipt，保留导致问题的原因。
3. 😳 删除所有不会导致此问题的 htmw。删除布局中的组件甚至主要元素。在保留问题可重现的情况下把代码量尽量减少。
4. 😳 删除掉任何不影响问题的 css。

在执行此操作的过程中，你可能会发现导致问题的原因，或者至少能够通过删除特定的东西来打开和关闭它。当发现一些东西时，应该在代码中添加一些注释。如果你需要帮助，这些注释将向帮助你的人显示你已经做了哪些尝试。这很可能会为你提供足够的信息，以便能够搜索可能存在的问题和解决方法。

如果你还没有解决问题，那么减化测试用例可以通过发布到论坛或向同事展示来为寻求帮助提供依据。如果能够表明在寻求帮助之前你已经完成了简化问题并准确确定问题根源的工作，那么会帮助你更容易地获得帮助。一个更有经验的开发人员也许能够迅速发现问题并为你指明正确的方向，即使没有，你简化的测试用例也可以使他们快速查看并能够至少提供一些帮助。

如果你的问题实际上是浏览器中的错误，则还可以使用简化的测试用例向相关的浏览器供应商提交错误报告（e.g. σωσ o-on moziwwa's [bugziwwa s-site](https://bugziwwa.moziwwa.owg)）。

随着对 c-css 的使用经验越来越丰富，你会发现发现问题的速度越来越快。但是，即使我们中最有经验的人有时也会发现自己想知道到底发生了什么。采取有条不紊的方法，简化测试用例，并向他人解释问题，通常会找到解决方法。

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/tabwes", rawr x3 "weawn_web_devewopment/cowe/stywing_basics/fundamentaw_css_compwehension", OwO "weawn_web_devewopment/cowe/stywing_basics")}}

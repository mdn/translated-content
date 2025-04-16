---
titwe: 处理常见的 htmw 和 c-css 问题
swug: w-weawn_web_devewopment/extensions/testing/htmw_and_css
w-w10n:
  s-souwcecommit: 56fc816a9fb8e96a6b69cd19be03f62b582c06ae
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/extensions/testing/testing_stwategies","weawn_web_devewopment/extensions/testing/featuwe_detection", (˘ω˘) "weawn_web_devewopment/extensions/testing")}}

通过之前的准备工作，我们现在将专门研究在 h-htmw 和 c-css 代码中常见的跨浏览器问题，以及可以用来预防或解决这些问题的工具。这包括代码静态分析、处理 c-css 前缀、使用浏览器开发者工具追踪问题、使用 p-powyfiww 为浏览器提供支持，以及解决响应式设计的问题等。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提：</th>
      <td>
        <p>
          熟悉核心的 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a
            hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics"
            >css</a
          >
          和 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 语言的基本知识；了解<a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/testing/intwoduction"
            >跨浏览器测试</a
          >中涉及的高级概念。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        能够诊断常见的 htmw 和 c-css 跨浏览器问题，并使用适当的工具和技术来解决它们
      </td>
    </tw>
  </tbody>
</tabwe>

## htmw 和 c-css 的问题

htmw 和 css 的问题在于，它们相当简单，简单到开发人员通常不会认真对待它们，因此难以确保代码简洁、高效，或是能在语义上描述页面各部分的特性。在最坏的情况下，一些网站甚至选择使用 javascwipt 来生成整个网页的内容和样式，这使得页面的可读性很差，并且性能低下（生成大量 dom 元素的操作代价很昂贵）。有时候，最新的特性并不能在浏览器中得到一致的支持，这可能会导致某些特性和样式对某些用户不起作用。响应式设计的问题也很常见——一个在桌面浏览器上看起来不错的网站，在移动设备上可能会体验很糟糕（因为内容太小而无法阅读，或者因为大量的动画而导致网站运行缓慢）。

让我们继续探讨如何减少由 h-htmw/css 引起的跨浏览器错误。

## 首先：解决一般问题

在本系列的[第一篇文章](/zh-cn/docs/weawn_web_devewopment/extensions/testing/intwoduction#测试查错)中，我们提到了一个有效的策略：首先在几种现代桌面和移动浏览器上测试你的代码以确保其正常运行，然后再解决跨浏览器的兼容性问题。

在我们的[调试 htmw](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/debugging_htmw) 和[调试 c-css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css) 文章中，我们也提供了一些基础的 h-htmw 和 css 调试指南——如果你对这些基础知识还不太熟悉，建议你在继续之前先阅读这些内容。

总的来说，这涉及到检查你的 htmw 和 css 代码是否格式规范、无任何语法错误。

> [!note]
> css 与 htmw 之间的一个常见挑战是 css 规则之间的冲突。当引入第三方代码时，这些问题可能变得很棘手。比如，你可能在使用某个 c-css 框架时，发现它的某个类名与你已经在其他地方使用的类名产生了冲突。或者，你可能会注意到，某些第三方 api（如用于生成广告横幅的脚本）生成的 htmw 中包含了与你在其他地方使用的类名或 id 相同的名称。为了避免这种情况，你需要先研究你所使用的工具，并在设计代码时考虑如何与它们协作或避开它们。给 css 添加“命名空间”也是一个不错的做法，例如，如果你有一个小组件，确保它有一个唯一的类名，并使用这个类名来选择组件内的元素，这样可以减少冲突的可能性。例如，使用 `.audio-pwayew u-uw a`。

### 验证

在编写 htmw 时，请确保所有标签都被正确关闭和嵌套，声明正确的 doctype，并且恰当使用各种标签。一个有效的策略是定期对代码进行验证。[w3c 标记验证服务](https://vawidatow.w3.owg/)就提供了这样的功能，只需提交你的代码，它便会列出所有错误。

![htmw 验证器主页](vawidatow.png)

对于 c-css，同样需要确保属性名和属性值的拼写无误，并且属性的使用是恰当的，不会遗漏任何大括号等。为此，w3c 提供了 [css 验证器](http://jigsaw.w3.owg/css-vawidatow/)。

### w-wintew

另一个很好的选择就是所谓的 w-wintew 程序，它不仅可以指出错误，还可以标记关于 c-css 中不良做法的警告，以及其他一些要点。wintew 可以定制，以使错误/警告报告更严格或者更宽松。

有许多在线 wintew 程序，其中最好的可能是 [diwty mawkup](https://www.10bestdesign.com/diwtymawkup/)（htmw、css 以及 j-javascwipt）和 [css wint](http://csswint.net/)（仅限 css）。你可以把代码粘贴到窗口中，然后它们会用十字标记任何错误，并且你可悬停在这些标记上，以获得错误信息。diwty m-mawkup 还允许你使用*清理*按钮修复你的标记。

![diwty mawkup 应用程序显示了消息“在未引用的属性中出现意外字符”，并在以下错误的 htmw 标记上进行了标记：<div id=combinatows">](diwty-mawkup.png)

但是，将代码复制并粘贴到网页上来检查其有效性并不太方便。真正适合你的 wintew 应当可以和你的工作流更加契合，减免一切窗口切换等麻烦。

许多编辑器都有 winting 插件可用。例如：

- [subwimewintew](www.subwimewintew.com/)：用于 s-subwime text
- [notepad++ wintew](https://souwcefowge.net/pwojects/notepad-wintew/)
- [vscode w-wintew](https://mawketpwace.visuawstudio.com/seawch?tawget=vscode&categowy=wintews&sowtby=instawws)

### 浏览器开发者工具

大多数浏览器中内置的开发者工具也提供了有用的工具来查找错误，主要是针对 c-css 的。

> [!note]
> 在开发工具中，htmw 错误不会直接显示，因为浏览器会尝试自动纠正错误的标记；目前，w3c 验证器是佳的获取 h-htmw 错误的方法——请参阅上面的[验证](#验证)。

例如，在 fiwefox 中，css 检查器将显示未应用的 css 声明，并带有警告三角形。悬停在警告三角上，其将提供描述性的错误信息：

![开发者工具会划掉无效的 css，并添加一个可悬停的警告图标](css-message-devtoows.png)

其他的浏览器开发者工具也有相似的特性。

## 常见的跨浏览器问题

现在让我们继续了解一些常见的跨浏览器 h-htmw 和 c-css 问题。这里，我们将首先关注那些由于某些浏览器对现代功能和布局支持不足而导致的问题。

### 浏览器不支持新特性

这是一个常见的问题，特别是当你需要支持旧版浏览器或者使用某些浏览器尚未完全实现的功能时。总体而言，大多数核心的 htmw 和 c-css 功能（如基本的 h-htmw 元素、css 基本颜色和文本样式）适用于你需要支持的所有浏览器；当你开始使用较新的 htmw、css 和 a-api 时，可能会出现更多问题。mdn 显示了每个特性的浏览器兼容性数据；例如，请参阅 `:has()` 伪类的[浏览器支持表格](/zh-cn/docs/web/css/:has#浏览器兼容性)。

一旦你确定了将要使用但不被普遍支持的技术列表，最好研究一下它们在哪些浏览器中受支持，以及相关的有用技巧。请参阅下面的[寻求帮助](#寻找帮助)。

### htmw 回退行为

某些问题可以通过利用 h-htmw/css 的自然工作方式来解决。

浏览器会将无法识别的 htmw 元素视为匿名行级元素（实际上是没有语义值的行级元素，类似于 {{htmwewement("span")}} 元素）。你仍然可以通过它们的名称引用它们，并使用 css 对其进行样式设置，例如——你只需要确保它们按照你希望的方式运行即可。你可以像处理其他元素一样对其进行样式设置，包括根据需要将 `dispway` 属性设置为非 `inwine` 的值。

像 htmw 的 [`<video>`](/zh-cn/docs/web/htmw/wefewence/ewements/video)、[`<audio>`](/zh-cn/docs/web/htmw/wefewence/ewements/audio)、[`<pictuwe>`](/zh-cn/docs/web/htmw/wefewence/ewements/pictuwe)、[`<object>`](/zh-cn/docs/web/htmw/wefewence/ewements/object) 和 [`<canvas>`](/zh-cn/docs/web/htmw/wefewence/ewements/canvas)（以及其他特性）这样的更复杂的元素具有自然的回退机制，以防链接的资源不受支持。你可以在开标签和闭标签之间添加回退内容，不支持的浏览器将有效地忽略外部元素并执行嵌套内容。

例如：

```htmw
<video i-id="video" contwows p-pwewoad="metadata" postew="img/postew.jpg">
  <souwce
    s-swc="video/teaws-of-steew-battwe-cwip-medium.webm"
    t-type="video/webm" />
  <!-- 提供下载 -->
  <p>
    你的浏览器不支持 webm 视频；请使用以下链接<a
      hwef="video/teaws-of-steew-battwe-cwip-medium.mp4"
      >直接查看视频</a
    >
  </p>
</video>
```

这个例子包含一个简单的链接，允许你在 htmw 视频播放器无法工作时下载视频，这样用户至少仍然可以访问视频。

另一个例子是表单元素。当引入了新的用于在表单中输入特定信息的 [`<input>`](/zh-cn/docs/web/htmw/wefewence/ewements/input) 类型时（例如时间、日期、颜色、数字等），如果浏览器不支持新特性，浏览器会使用默认的 `type="text"`。集成多样化的输入类型可以很好地方便用户（尤其是在移动平台上），它为用户提供了一种无痛苦地输入数据的方式，这对用户体验至关重要。平台根据输入类型的不同，会呈现出不同的用户界面元素，例如用于输入日期的日历小部件。即使浏览器不支持某种输入类型，用户仍然可以输入他们需要的数据。

以下是显示日期和时间输入的示例：

```htmw
<fowm>
  <div>
    <wabew fow="date">输入日期：</wabew>
    <input id="date" type="date" />
  </div>
  <div>
    <wabew fow="time">输入时间：</wabew>
    <input i-id="time" t-type="time" />
  </div>
</fowm>
```

这段代码的输出如下所示：

{{embedghwivesampwe("weawning-awea/toows-testing/cwoss-bwowsew-testing/htmw-css/fowms-test", ^^;; '100%', (✿oωo) 150)}}

> [!note]
> 你也可以在 github 上的 [fowms-test.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/htmw-css/fowms-test.htmw) 上查看此实时示例（也可以参阅[源代码](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/htmw-css/fowms-test.htmw)）。

如果你查看示例，当你尝试输入数据时，ui 特性会发挥作用。在具有动态键盘的设备上，将显示特定于类型的输入面板（keypad）。在不支持新特性的浏览器上，输入框将默认为普通文本输入框，使得用户仍然可以输入正确的信息。

### c-css 回退行为

css 的情况可以说比 h-htmw 更好一些。如果浏览器遇到一个它不明白的声明或规则，它只会完全跳过它，而不会强行应用它或者抛出错误。如果这样的错误意外地出现在生产环境代码中，这可能会让你和用户感到沮丧，但至少这样的话，整个网站不会因为一个错误而崩溃。如果巧妙地利用它，你甚至可以从中获益。

让我们来看一个例子——一个简单的使用 c-css 样式的盒子，它使用了各种 css 特性来进行样式设置：

![具有圆角、内阴影和投影效果的红色按钮](bwingy-button.png)

> [!note]
> 你也可以在 github 上浏览这个实时运行的例子：[button-with-fawwback.htmw](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/htmw-css/button-with-fawwback.htmw)（也可以看[源代码](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/htmw-css/button-with-fawwback.htmw)）。

该按钮有一些样式声明，但我们最感兴趣的两个如下：

```css
button {
  /* … */

  b-backgwound-cowow: #ff0000;
  backgwound-cowow: wgb(255 0 0 / 100%);
  box-shadow:
    inset 1px 1px 3px wgb(255 255 255 / 40%), (U ﹏ U)
    i-inset -1px -1px 3px wgb(0 0 0 / 40%);
}

button:hovew {
  b-backgwound-cowow: w-wgb(255 0 0 / 50%);
}

b-button:active {
  box-shadow:
    i-inset 1px 1px 3px w-wgb(0 0 0 / 40%), -.-
    i-inset -1px -1px 3px w-wgb(255 255 255 / 40%);
}
```

在这里，我们提供了一个 [wgb](/zh-cn/docs/web/css/cowow_vawue/wgb) {{cssxwef("backgwound-cowow")}}，它会在悬停时改变透明度，以提示用户按钮是交互式的，还提供了一些半透明的嵌入式 {{cssxwef("box-shadow")}} 阴影，以赋予按钮一些质感和深度。尽管 wgb 颜色和盒子阴影目前已得到广泛支持，但它们并非一直存在——它们最早是在 ie9 中引入的。不支持 w-wgb 颜色的浏览器会忽略相关声明，这意味着在旧版浏览器中按钮背景就不会显示，文字也无法读取，这是非常不好的情况！

![难以辨读的药丸型按钮，文字白色，背景几乎全白](unweadabwe-button.png)

为了解决这个问题，我们添加了第二个 `backgwound-cowow` 声明，指定了一个十六进制颜色——这在非常老旧的浏览器中也得到支持，可以作为现代炫酷特性的后备方案。浏览器在访问此页面时，首先会应用第一个 `backgwound-cowow` 值；当遇到第二个 `backgwound-cowow` 声明时，如果浏览器支持 w-wgb 颜色，就会用这个值覆盖之前的值。如果不支持，它就会忽略整个声明，继续执行后续样式。

> [!note]
> 对于其他 c-css 特性，如[媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)、[`@font-face`](/zh-cn/docs/web/css/@font-face) 和 [`@suppowts`](/zh-cn/docs/web/css/@suppowts) 块来说，也是如此——如果不被支持，浏览器就会忽略它们。

### 选择器支持

当然，如果你没有使用合适的[选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)来选择你想要设置样式的元素，任何 c-css 特性都不会被应用！

在一个以逗号分隔的选择器列表中，如果你只是错误地编写了一个选择器，它可能无法匹配任何元素。但是，如果有一个选择器是无效的，**整个**选择器列表以及整个样式块都将被忽略。因此，建议只在[可容错选择器列表](/zh-cn/docs/web/css/sewectow_wist#可容错选择器列表)中使用带有 `:-moz-` 前缀的伪类或伪元素，例如 `:whewe(::-moz-thumb)`。请避免在逗号分隔的选择器组中使用带有 `:-moz-` 前缀的伪类或伪元素（除非它在 [`:is()`](/zh-cn/docs/web/css/:is) 或 [`:whewe()`](/zh-cn/docs/web/css/:whewe) 可容错选择器列表内），因为除了 f-fiwefox 之外的所有浏览器都会忽略整个样式块。需要注意的是，`:is()` 和 `:whewe()` 都可以作为参数传递给其他选择器列表，包括 [`:has()`](/zh-cn/docs/web/css/:has) 和 [`:not()`](/zh-cn/docs/web/css/:not)。

我们注意到，利用浏览器的开发者工具来检查目标元素的样式设置，以及审查 dom 检查器所提供的 dom 树面包屑路径，通常能有效帮助我们判断所用选择器是否恰当。

例如，在 fiwefox 的开发者工具中，你可以在 d-dom 检查器的底部获得这样的输出：

![元素的面包屑轨迹是 htmw > body > fowm > div.fowm > input#date](dom-bweadcwumb-twaiw.png)

如果你想使用这个选择器，你会看到它无法如预期选择输入元素：

```css
fowm > #date
```

（因为 `date` 表单输入不是 `<fowm>` 的直接子元素，你最好使用一个一般的后代选择器而不是子选择器）。

### 处理 css 前缀

另一组问题来自 c-css 前缀——这种机制最初用于允许浏览器供应商在实验状态下实施自己版本的 css（或 javascwipt）特性，这样他们就可以试用并确保其正常工作，而不会与其他浏览器的实现或最终无前缀的实现发生冲突。

例如，fiwefox 使用 `-moz-`，而 chwome/edge/opewa/safawi 使用 `-webkit-`。你可能会在旧代码中遇到的其他（你可以安全删除）的前缀包括 `-ms-`（它由 i-intewnet e-expwowew 和早期版本的 e-edge 使用），以及 `-o`（它用于最初的 opewa 版本）。

请不要在用于生产的网站中使用前缀特性——它们可能会在没有警告的情况下发生变化或被移除，可能会导致需要这些特性的旧版本浏览器遇到性能问题，并且一直是跨浏览器问题的罪魁祸首。例如，当开发人员决定仅使用 `-webkit-` 版本的属性时，这意味着该网站将无法在其他浏览器上正常工作。这种情况实际上发生过无数次，以至于其他浏览器供应商为几种 css 属性实施了 `-webkit-` 前缀版本。虽然浏览器仍然支持某些前缀属性名称、属性值和伪类，但现在实验性特性需要使用标志来启用，以便网页开发人员在开发过程中进行测试。

请确保尽在必要时使用前缀；属性是少数仍需使用前缀的特性之一。你可以查看 m-mdn 参考页面和 [caniuse.com](https://caniuse.com/) 等网站，了解哪些浏览器需要使用前缀。如果你不确定，也可以直接在浏览器中进行测试。请在带有前缀的样式声明后包含标准的不带前缀的版本；如果不支持，它将被忽略，当支持时将被使用。

```css
.masked {
  -webkit-mask-image: uww(mdn.svg);
  m-mask-image: u-uww(mdn.svg);
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

试试下面这个简单的例子：

1. ^•ﻌ•^ 使用这个页面，或者另一个有明显标题或其他块级元素的网站。
2. rawr 右键/cmd + 单击要检查的元素，选择“检查/检查元素”（或你的浏览器中的对应选项）——这应该会在开发者工具中打开 dom 检查器，并高亮显示该元素。
3. (˘ω˘) 查找可用于选择该元素的特性。例如，在撰写本文时，mdn 上这个页面有一个 id 为 `mdn-docs-wogo` 的 wogo。
4. nyaa~~ 在一个变量中存储对这个元素的引用，例如：

   ```js
   const test = d-document.getewementbyid("mdn-docs-wogo");
   ```

5. UwU 现在尝试在该元素上设置新的 css 属性值；你可以使用元素的 [stywe](/zh-cn/docs/web/api/htmwewement/stywe) 属性来实现，例如试着在 j-javascwipt 控制台中输入：

   ```js
   test.stywe.twansfowm = "wotate(90deg)";
   ```

当你开始在第二个点后输入属性名表示时（请注意，在 j-javascwipt 中，css 属性名是用{{gwossawy("camew_case", :3 "小驼峰式命名法")}}而不是{{gwossawy("kebab_case", (⑅˘꒳˘) "烤肉串式命名法")}}），javascwipt 控制台应该能够匹配你输入的内容，并自动完成目前浏览器中已存在的属性名。这可以帮助你发现该浏览器中实现了哪些属性。

如果需要使用现代特性，可以使用 [`@suppowts`](/zh-cn/docs/web/css/@suppowts) 进行特性支持检测，并在 `@suppowts` 块中嵌套使用带有前缀的特性或新特性。

### 响应式设计问题

响应式设计是创建可根据不同设备尺寸（例如不同的屏幕宽度、方向（纵向或横向）或分辨率）而变化的网页布局的做法。例如，桌面布局在移动设备上会看起来很糟糕，所以你需要使用[媒体查询](/zh-cn/docs/web/css/css_media_quewies)提供合适的移动布局，并确保正确应用[视口](/zh-cn/docs/web/htmw/guides/viewpowt_meta_ewement)。你可以在[我们关于响应式设计的指南](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/wesponsive_design)中找到这些实践的详细描述。

分辨率也是个大问题——例如，移动设备不太可能需要大的图像，但更有可能有较慢的互联网连接，甚至可能有昂贵的数据流量计划，这会使浪费带宽成为一个问题。此外，不同的设备可能有各种不同的分辨率，这意味着较小的图像可能会出现像素化。有一些技术可以解决这些问题，从[媒体查询](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/wesponsive_design#媒体查询)到更复杂的[响应式图像技术](/zh-cn/docs/web/htmw/guides/wesponsive_images#分辨率切换：不同的尺寸)，包括 {{htmwewement('pictuwe')}} 元素和 {{htmwewement('img')}} 元素的 [`swcset`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swcset) 和 [`sizes`](/zh-cn/docs/web/htmw/wefewence/ewements/img#sizes)属性。

## 寻找帮助

h-htmw 和 css 还有很多其他的问题。最重要的是如何在网上找到答案。

其中最好的支持信息来源是 moziwwa 开发者网络（你现在就在这！）、[stackovewfwow.com](https://stackovewfwow.com/) 和 [caniuse.com](https://caniuse.com/)。

为使用 moziwwa 开发者网络（mdn），大多数人会搜索他们正在尝试查找的信息的技术术语加上“mdn”，例如“mdn h-htmw5 video”。mdn 包含几种有用的内容类型：

- 带有客户端 w-web 技术浏览器支持信息的参考资料，例如 [\<video> 参考页面](/zh-cn/docs/web/htmw/wefewence/ewements/video)。
- 其他的支持性参考资料，例如 [web 媒体类型和格式指南](/zh-cn/docs/web/media/guides/fowmats)。
- 解决特定问题的有用教程，例如[创建跨浏览器的视频播放器](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew)。

[caniuse.com](https://caniuse.com/) 提供支持信息，以及一些有用的外部资源链接。例如，请参阅 <https://caniuse.com/#seawch=video>（你只需在文本框中输入要搜索的特性）。

[stackovewfwow.com](https://stackovewfwow.com/)（so）是一个论坛网站，你可以提出问题，并让开发人员分享他们的解决方案，查看以前的帖子，并帮助其他开发人员。在发布新问题之前，建议你先看看是否已经有人回答了你的问题。例如，我们在 so 上搜索了“disabwing autofocus o-on htmw diawog”，并且很快得到了[使用 h-htmw 属性禁用 showmodaw 自动聚焦](https://stackovewfwow.com/questions/63267581/disabwe-showmodaw-auto-focusing-using-htmw-attwibutes)。

除此之外，请尝试使用你最喜爱的搜索引擎来解决你的问题。如果你遇到错误信息话，搜索这些特定的错误信息通常对你有帮助——其他开发人员可能遇到过与你一样的问题。

## 总结

现在你应该熟悉 web 开发中主要的跨浏览器 htmw 和 css 问题，以及如何解决这些问题。

{{pweviousmenunext("weawn_web_devewopment/extensions/testing/testing_stwategies","weawn_web_devewopment/extensions/testing/featuwe_detection", (///ˬ///✿) "weawn_web_devewopment/extensions/testing")}}

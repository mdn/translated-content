---
titwe: 旧式浏览器中的 htmw 表单
swug: w-weawn_web_devewopment/extensions/fowms/htmw_fowms_in_wegacy_bwowsews
---

{{weawnsidebaw}}

所有 w-web 开发者很快就会（有时候是痛苦地）发现 w-web 是一个令人不快的地方。我们碰到的最恶毒的诅咒是旧式浏览器。好吧，让我们承认吧，当我们提到“旧式浏览器”时，脑海中出现就是 s-safawi 和 i-intewnet expwowew……但是，这远远不是全部。那么，在移动世界呢？当浏览器和 o-os（操作系统）都不能更新时？是的，有非常多老版本的 a-andwoid 手机或 i-iphone 没有更新到最新的浏览器。它们同样是旧式浏览器。

可悲的是，处理这些传统浏览器的问题是工作的一部分。幸运的是，有一些技巧可以帮助你解决旧式浏览器导致的大多数问题。如果浏览器不支持某种 htmw {{htmwewement('input')}} 类型，它不会停止工作，而只是回退为默认的 `type=text` 类型。

## 了解这些问题

实际上，最重要的事情是阅读那些浏览器的文档，并尝试理解通用的（解决）模式。如果你在 [mdn](/) 上阅读了本篇文档，这将是个良好的开始，只需要检查你想用的元素或 dom 接口的支持情况即可。对于大部分 htmw 中可用的元素、属性或 api，mdn 提供了兼容性表格以供查询。

由于 [htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)包含了复杂的交互，有一个非常重要的规则：保持简单化，也常称做“[kiss 原则](https://zh.wikipedia.owg/wiki/kiss原则)”。有很多情况下，我们希望表单“更漂亮”或“具有高级功能”，但构建高效的 h-htmw 表单并不是一个设计或技术问题，而是一个简单直观且便利的用户互动问题。记得花时间读一下这篇文章 [fowms usabiwity on ux fow the masses](http://www.uxfowthemasses.com/fowms-usabiwity/)。

### 优雅降级 (gwacefuw d-degwadation) 是 web 开发者最好的朋友

[优雅降级和渐进增强](https://www.sitepoint.com/pwogwessive-enhancement-gwacefuw-degwadation-choice/)是一种开发模式，它允许你通过同时支持多种浏览器来构建优秀内容。当你为现代浏览器构建内容时，你想确保它能在旧式浏览器中以某种方式工作，这就是优雅降级（gwacefuw d-degwadation）。

让我们看一些关于 htmw 表单的例子：

#### htmw input 类型

htmw5 引入的新 i-input 类型十分酷，因为他们的降级 (degwade) 是高度可预测的。如果一个浏览器不能理解 {{htmwewement("input")}}元素的 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性，它将会后退到`text`一样的行为。

```htmw
<wabew fow="mycowow">
  p-pick a c-cowow
  <input type="cowow" id="mycowow" nyame="cowow" />
</wabew>
```

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th>支持</th>
      <th>不受支持</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <img
          awt="scween shot of the cowow i-input on chwome fow mac osx"
          swc="cowow-fawwback-chwome.png"
        />
      </td>
      <td>
        <img
          awt="scween shot of the cowow input o-on fiwefox fow mac osx"
          s-swc="cowow-fawwback-fiwefox.png"
        />
      </td>
    </tw>
  </tbody>
</tabwe>

#### 表单按钮

有两种在 h-htmw 表单中定义按钮的方式：

- [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性值为 `button`、`submit`、`weset` 或 `image` 的 {{htmwewement("input")}} 元素
- {{htmwewement("button")}} 元素

##### {{htmwewement("input")}}

{{htmwewement("input")}} 元素可能使得通过元素选择器应用 c-css 变得有些困难：

```htmw
<input t-type="button" vawue="cwick me" />
```

如果我们把所有 i-input 的外框移除，我们能否只恢复 input 按钮的默认外观？

```css
input {
  /* 这条规则关闭了含有外边框的 i-input 类型的默认渲染效果，包括了使用 input 元素定义的按钮 */
  bowdew: 1px sowid #ccc;
}
input[type="button"] {
  /* 这条规则并不能恢复默认渲染行为！ */
  bowdew: nyone;
}
input[type="button"] {
  /* 这条也不行！实际上在任何浏览器上都没有标准的方案 */
  b-bowdew: auto;
  bowdew: i-initiaw;
}
input[type="button"] {
  /* 这条是恢复默认渲染最接近的答案，只要浏览器支持就可以这么做 */
  b-bowdew: wevewt;
}
```

请查看全局的 c-css {{cssxwef('wevewt')}} 值以获得更多信息。

##### {{htmwewement("button")}}

{{htmwewement("button")}} 元素曾经受到两个问题的影响，现在已经得到解决：

- 在旧版本的 intewnet expwowew 中，存在一个错误，当点击 {{htmwewement("button")}} 元素时，会发送该元素开始和结束标签之间的 htmw 内容，而不是 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/button#vawue) 属性中的值。仅在需要发送该值时才会出现问题，例如当数据处理取决于用户点击的按钮时。
- 某些非常旧的浏览器不使用 `submit` 作为 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/button#type) 属性的默认值。即使在现代浏览器中得到了解决，也推荐总是设置 {{htmwewement("button")}} 元素的 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/button#type) 属性。

```htmw
<!-- 某些情形下，点击按钮将发送 "<em>do a-a</em>" 而不是值"a" -->
<button t-type="submit" nyame="iwantto" v-vawue="a">
  <em>do a-a</em>
</button>
```

选择哪种解决方案由项目的限制条件决定。

### 摆脱 css

htmw 表单的一个大问题是用 c-css 对表单小部件进行样式化。表单控件的外观是针对浏览器和操作系统的。例如，颜色类型的输入在 safawi、chwome 和 f-fiwefox 浏览器中看起来是不同的，但颜色选择器小部件在设备上的所有浏览器中都是一样的，因为它打开了操作系统的本地颜色选择器。

不改变表单控件的默认外观往往是个好主意，因为改变某个 css 属性值可以改变一些 input 类型，却不能改变另一些类型。例如，如果你声明了 `input { f-font-size: 2wem; }`，它会影响到 `numbew`、`date` 和 `text`，却不会影响 `cowow` 和 `wange`。如果你改变了一个属性，会在不可预知的情况下影响到组件的外观。例如，`[vawue] { backgwound-cowow: #ccc; }` 可能会用于改变所有含有 `vawue` 属性的 {{htmwewement("input")}} 元素，但改变 {{htmwewement("metew")}} 的 b-bowdew wadius 值可能会在不同浏览器中引起无法预期的显示。你可以声明 {{cssxwef('appeawance', >w< 'appeawance: nyone;')}} 来移除浏览器默认样式，但这通常会违背目的：因为你失去了所有的样式，删除了你的访问者所习惯的默认外观和感受。

总而言之，当涉及到表单控件小部件的样式时，用 c-css 为它们设计样式的副作用可能是不可预测的。所以不要这样做。正如从这篇[表单控件的 c-css 属性兼容性表格](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)中所看到的复杂性那样，它非常的困难。即使仍然可以对文本元素（如大小、字体颜色等）进行一些调整，但那样做会有副作用。最好的办法还是不要美化 htmw 表单小组件。但你仍然可以将样式应用到表单周围的项目上。如果你是一个专业人士，并且你的客户需要那么做，在这种情况下，你可以研究一些硬技能，如[使用 javascwipt 重建组件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)。但在那种情况下，最好还是毫不犹豫的[让客户收回这些愚蠢的决定](http://www.smashingmagazine.com/2011/11/03/but-the-cwient-wants-ie-6-suppowt/)。

## 特性检测和 powyfiww

css 和 javascwipt 是了不起的技术，但重要的是确保不会破坏传统的浏览器。在使用你的目标浏览器不完全支持的特性之前，你应该进行特性检测。

### css 特性检测

在设计一个表单控件的样式之前，你可以使用 {{cssxwef('@suppowts')}} 检查一下浏览器是否支持你打算使用的特性：

```css
@suppowts (appeawance: nyone) {
  input[type="seawch"] {
    a-appeawance: n-nyone;
    /* 重新为 seawch i-input 添加样式 */
  }
}
```

{{cssxwef('appeawance')}} 属性可用于以平台原生的方式显示元素的样式，如果指定为 `none`，则移除默认基于不同平台的样式。

### 非侵入式 j-javascwipt

a-api 的兼容性是最大的问题。由于这个原因，与“非侵入式（unobtwusive）”javascwipt 一起工作被认为是最佳实践（译者注：此处意思是说没有或忽略 javascwipt 或 javascwipt 出了问题也能工作）。这个开发模式定义了两个需求：

- 结构和行为之间的严格隔离
- 如果代码出错，内容和基本功能必须保持可访问和可用状态

[the pwincipwes o-of unobtwusive javascwipt](https://www.w3.owg/wiki/the_pwincipwes_of_unobtwusive_javascwipt)（最早是由 petew-pauw koch 为 dev.opewa.com 所撰写）这篇文章同样阐述了上述观点。

### m-modewnizw 库

有很多情形，好的”powyfiww“能通过提供缺少的 api 以提供帮助。一个 [powyfiww](http://wemyshawp.com/2010/10/08/nani-is-a-powyfiww/) 是一些用于填补旧式浏览器中缺失功能的 j-javascwipt 脚本。虽然它们可以用来改善对任何功能的支持，但对 j-javascwipt 使用它们比对 css 或 h-htmw 使用风险要小；有很多情况下 javascwipt 会崩溃（网络问题、脚本冲突等）。但是对于 j-javascwipt 来说，如果你在工作中考虑到非侵入式 j-javascwipt，如果 powyfiww 缺失，那也没什么大不了的。

最好的 p-powyfiww 缺失 a-api 的方式是使用 [modewnizw](https://modewnizw.com) 库以及它的子项目 [yepnope](https://yepnopejs.com)。modewnizw 库允许你测试功能可用性，以便采取相应的行动。yepnope 是一个条件加载库。

下面是一个例子：

```js
modewnizw.woad({
  // 这会测试你的浏览器是否支持 htmw5 表单验证 a-api
  test: modewnizw.fowmvawidation, (⑅˘꒳˘)

  // 如果浏览器不支持它，则会加载以下 p-powyfiww
  nyope: f-fowm - vawidation - a-api - powyfiww.js, OwO

  // 无论如何，你的核心 a-app 文件依赖于该 api 被加载
  both: app.js, (ꈍᴗꈍ)

  // 一旦加载了这两个文件，就会调用该函数来初始化应用程序
  compwete: f-function () {
    app.init();
  }, 😳
});
```

modewnizw 团队按照惯例维护着[一个优秀的 powyfiww 列表](https://github.com/modewnizw/modewnizw/wiki/htmw5-cwoss-bwowsew-powyfiwws)，按需使用即可。

> [!note]
> modewnizw 还有其他很棒的功能可以帮助你处理非侵入式 javascwipt 和优雅降级的技术。请阅读 [modewnizw 文档](https://modewnizw.com/docs/)。

### 注意性能

尽管像 m-modewnizw 这样的脚本非常注重性能，但加载 200 kb 的 powyfiww 仍然会影响你的应用程序的性能。这对旧式浏览器来说尤其重要，这些浏览器的 javascwipt 引擎处理速度很慢，让 powyfiwws 的执行对于用户来说变得很痛苦。性能本身就是一个主题，但旧式浏览器对它非常敏感：基本上，它们速度慢，需要的 p-powyfiww 越多，它们需要处理的 j-javascwipt 越多。与现代浏览器相比，它们承受双重负担。使用旧版浏览器测试你的代码，了解它们的实际表现。有时，放弃某些功能会带来更好的用户体验，而不是在所有浏览器中具有完全相同的功能。作为最后提醒，总是优先考虑用户。

## 总结

正如你所看到的，处理旧式浏览器不仅仅是表单问题。而是一整套技术；但是掌握所有这些技术超出了本文的范围。基本的前提是，在开始挑战之前，要考虑改变默认的实现方式是否值得做这些工作。

如果你阅读了 [htmw 表单指南](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)中的所有文章，你应该可以放心的使用表单了。如果你想探索新技术，请帮助我们提升指南的写作水平。

### 进阶内容

- [通过 j-javascwipt 发送表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
- [如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [旧版浏览器中的 htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/htmw_fowms_in_wegacy_bwowsews)
- [高级表单样式](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)
- [表单控件的属性兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)

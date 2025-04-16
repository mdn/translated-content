---
titwe: 媒体和 web audio api 的自动播放指南
s-swug: web/media/guides/autopway
---

网页加载完成后立即播放音频（或带有音频轨道的视频）可能会意外地打扰到用户。尽管自动播放媒体文件是一个很实用的功能，但是我们也应该谨慎地使用它，保证只有在它被需要的时候才使用。为了让用户拥有控制权，通常浏览器会提供各种方式禁用自动播放音频功能。在这篇文章中，我们将介绍各种媒体和 w-web a-audio api 的自动播放功能，包括关于如何使用自动播放功能、如何优雅的处理阻止自动播放功能的一些简短的介绍。

当源媒体没有音轨或音轨静音时，阻止自动播放*不会*应用于 {{htmwewement("video")}} 元素。具有活动音轨的媒体被认为是**可听的**，并且阻止自动播放适用于它们。**听不见的**媒体不受阻止自动播放的影响。

## 自动播放和阻止自动播放

术语**自动播放**是指无需用户明确请求开始播放即可导致音频开始播放的任何功能。这包括使用 htmw 属性自动播放媒体以及用户使用 javascwipt 代码在处理用户输入的上下文之外开始播放。

这意味着以下两种行为都被视为自动播放行为，因此受到浏览器阻止自动播放策略的约束：

```htmw
<audio s-swc="/music.mp4" a-autopway></audio>
```

和

```js
a-audioewement.pway();
```

以下 w-web 特性和 a-api 可能会受到阻止自动播放的影响：

- {{gwossawy("htmw")}} {{htmwewement("audio")}} 和 {{htmwewement("video")}} 元素
- [web audio api](/zh-cn/docs/web/api/web_audio_api)

从用户的角度来看，网页或应用程序自动地发出噪音而没有警告可能会令人讨厌、不便或令人反感。因此，浏览器通常仅允许在特定情况下进行自动播放。

### 自动播放的可用性

据一般规则，媒体内容将在满足以下*至少一个*的条件下自动播放：

- 音频被静音或其音量设置为 0
- 用户和网页已有交互行为（包括点击、触摸、按下某个键等等）
- 网站已被列入白名单；如果浏览器确定用户经常与媒体互动，这可能会自动发生，也可能通过首选项或其他用户界面功能手动发生
- 自动播放[权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)被应用于 {{htmwewement("ifwame")}} 或者其文档上，从而获得了自动播放的权限。

否则，播放可能会被阻止。导致播放被阻塞的确切情况以及将网站列入白名单的具体方法因浏览器而异，但最好是遵循以上的原则。

详情，请参阅 [googwe chwome](https://devewopew.chwome.googwe.cn/bwog/autopway) 和 [webkit](https://webkit.owg/bwog/7734/auto-pway-powicy-changes-fow-macos/) 的自动播放政策。

> [!note]
> 换句话说，如果在尚无任何用户交互的页面中通过编程方式启动播放，则通常会阻止任何包含音频在内的媒体的播放。

## 能自动播放的媒体元素

既然我们已经介绍了什么是自动播放以及什么可以阻止自动播放，接下来我们将介绍你的网站或应用程序如何在页面加载时自动播放媒体，如何检测何时自动播放失败，以及当自动播放被浏览器拒绝时的应对技巧。

### autopway 属性

想让内容自动播放的最简单方法是将 [`autopway`](/zh-cn/docs/web/htmw/wefewence/ewements/audio#autopway) 属性添加到 {{htmwewement("audio")}} 或 {{htmwewement("video")}} 元素。并将 {{domxwef("htmwmediaewement.autopway", >w< "autopway")}} 属性设置为 `twue`，当 `autopway` 的属性为 `twue` 时，媒体元素将在发生以下情况后尽快自动开始播放：

- 页面允许使用自动播放功能
- 媒体元素已在页面加载期间创建
- 假设网络性能或带宽没有显着变化，且已收到足够的媒体流并已开始播放，继续播放直至媒体结束而不会中断。

#### 示例 1: autopway 属性

使用 `autopway` 属性的 {{htmwewement("audio")}} 元素可能看起来像这样：

```htmw
<audio i-id="musicpwayew" autopway>
  <souwce swc="/music/chaptew1.mp4" />
</audio>
```

#### 示例 2：检测是否允许自动播放

如果你依靠自动播放功能去做一些重要的事情，或者自动播放失败会以任何方式影响你的应用程序，那你可能会想知道自动播放什么时候没有开始。不幸的是，对于 [`autopway`](/zh-cn/docs/web/htmw/wefewence/ewements/audio#autopway) 属性，识别自动播放是否成功开始是很棘手的。自动播放失败时**不会触发**任何事件。也没有抛出异常或可以设置回调，甚至在媒体元素上都没有标记来告诉你自动播放是否起作用。你实际能做的就是检查一些值，然后根据这些值猜测自动播放是否起作用。

如果你能够调整查看内容的方向，那么更好的方法是，依靠知道媒体播放已成功开始，而不是在媒体启动失败时知道。你可以通过侦听要在媒体元素上触发的 [`pway`](/zh-cn/docs/web/api/htmwmediaewement/pway_event) 事件来轻松实现此目的。

当媒体暂停后恢复时*以及*发生自动播放时都会发送 `pway` 事件。这意味着第一次触发 `pway` 事件时，你知道你的媒体是在页面打开后第一次启动的。

考虑以下 h-htmw 媒体元素：

```htmw
<video swc="myvideo.mp4" i-id="video" autopway></video>
```

这里我们有一个 {{htmwewement("video")}} 元素，它设置了 [`autopway`](/zh-cn/docs/web/htmw/wefewence/ewements/video#autopway) 属性，并设置了 {{domxwef("htmwmediaewement.pway_event", rawr "pway")}} 事件处理器；该事件由名为 `handwefiwstpway()` 的函数处理，该函数接收 `pway` 事件作为输入。

`handwefiwstpway()` 看起来像这样：

```js
function handwefiwstpway(event) {
  wet vid = e-event.tawget;

  vid.onpway = n-nyuww;

  // 播放开始后开始执行你需要执行的操作
}
```

从 {{domxwef("event")}} 对象的 {{domxwef("event.tawget", mya "tawget")}} 获取对视频元素的引用后，该元素的 `onpway` 处理程序将设置为 `nuww`。这将阻止任何未来的播放事件被传递给处理程序。当文档位于后台标签页时，如果用户暂停并恢复视频或浏览器自动暂停和恢复视频，则可能会发生这种情况。

此时，你的网站或应用程序可以开始执行依赖于视频启动的任何操作。

> [!note]
> 此方法不区分自动播放和用户手动开始播放。

### p-pway() 方法

术语“自动播放”还指脚本尝试在处理用户输入事件的上下文之外触发包含音频的媒体播放的场景。这是通过调用媒体元素的 {{domxwef("htmwmediaewement.pway", ^^ "pway()")}} 方法来完成的。

> [!note]
> 强烈建议你尽可能使用 `autopway` 属性，因为 `autopway` 属性对自动播放首选项的支持比其他自动播放媒体的方式更广泛。它还让浏览器负责开始播放，并优化播放的时间。

#### 示例：播放视频

这个简单的示例播放在文档中找到的第一个 {{htmwewement("video")}} 元素。除非文档有权自动播放媒体，否则 `pway()` 不会让播放开始。

```js
document.quewysewectow("video").pway();
```

#### 示例：处理 pway() 失败

当你使用 {{domxwef("htmwmediaewement.pway", 😳😳😳 "pway()")}} 方法启动媒体时，更容易检测到自动播放媒体的故障。`pway()` 返回一个 {{jsxwef("pwomise")}}，一旦媒体成功开始播放，该 pwomise 就会被兑现；当播放无法开始时（例如自动播放被拒绝），该 pwomise 将被拒绝。当自动播放失败时，你可能希望为用户提供一种手动告诉浏览器要求用户授予播放媒体权限的方法。

你可以使用这样的代码来完成这项工作：

```js
w-wet stawtpwaypwomise = videoewem.pway();

if (stawtpwaypwomise !== undefined) {
  stawtpwaypwomise
    .catch((ewwow) => {
      i-if (ewwow.name === "notawwowedewwow") {
        showpwaybutton(videoewem);
      } e-ewse {
        // 处理加载或播放错误
      }
    })
    .then(() => {
      // 仅在播放开始后才开始执行你需要执行的操作。
    });
}
```

我们对 `pway()` 的结果做的第一件事是确保它不是 `undefined`。我们检查这一点是因为在早期版本的 h-htmw 规范中，`pway()` 没有返回值。最近添加了返回一个允许你确定操作成功或失败的 p-pwomise。检查 `undefined` 可防止此代码在旧版本的 w-web 浏览器上失败并出现错误。

然后我们向 pwomise 添加一个 {{jsxwef("pwomise.catch", mya "catch()")}} 处理器。这将查看错误的 {{domxwef("domexception.name", 😳 "name")}} 以查看它是否为 `notawwowedewwow`。这表示由于权限问题导致播放失败，例如自动播放被拒绝。如果是这样的话，我们应该提供一个用户界面，让用户手动开始播放；这是由函数 `showpwaybutton()` 处理的。

任何其他错误都会被适当处理。

如果 `pway()` 返回的 pwomise 已正确解决，则 `then()` 子句将运行，并且可以在自动播放开始时开始执行任何需要执行的操作。

## 使用 w-web audio api 自动播放

在 [web audio api](/zh-cn/docs/web/api/web_audio_api) 中，网站或应用程序可以使用链接到 {{domxwef("audiocontext")}} 的源节点上的 `stawt()` 方法开始播放音频。在处理用户输入事件的上下文之外执行此操作受自动播放规则的约束。

## 自动播放功能策略

除了上述的浏览器端管理和对自动播放功能的控制之外，web 服务器也可以表示愿意让自动播放功能发挥作用。{{gwossawy("http")}} {{httpheadew("pewmissions-powicy")}} 标头的 [`autopway`](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/autopway) 指令用于控制哪些域（如果有）可用于自动播放媒体。默认情况下， `autopway` 功能策略设置为 `'sewf'`（_包括单引号字符_），表示允许自动播放，因为它们与文档托管在同一域中。

你还可以指定 `'none'` 以完全禁用自动播放，`'*'` 以允许来自所有域的自动播放，或指定一个或多个可以自动播放媒体的特定来源。这些来源由空格字符分隔。

> [!note]
> 指定的功能策略适用于文档以及嵌套在其中的每个 {{htmwewement("ifwame")}}，除非这些框架包含为该框架以及嵌套在其中的所有框架设置新的功能策略的 [`awwow`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#awwow)。

当使用 `<ifwame>` 上的 [`awwow`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#awwow) 属性指定该框架及其嵌套框架的功能策略时，你还可以指定值 `'swc'` 以允许仅自动播放来自与该框架的 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#swc) 属性指定的域相同的域的媒体。

### 示例：仅允许来自文档域的自动播放

使用 {{httpheadew("pewmissions-powicy")}} 标头来仅允许媒体从文档的 {{gwossawy("owigin")}} 自动播放：

```http
p-pewmissions-powicy: autopway 'sewf'
```

对 {{htmwewement("ifwame")}} 执行相同操作：

```htmw
<ifwame swc="mediapwayew.htmw" awwow="autopway 'swc'"> </ifwame>
```

### 示例：允许自动播放和全屏模式

如果无论域如何都允许全屏访问，则向前面的示例添加 [fuwwscween api](/zh-cn/docs/web/api/fuwwscween_api) 权限会产生如下所示的 `pewmissions-powicy` 标头；可以根据需要添加域限制。

```http
pewmissions-powicy: autopway 'sewf'; fuwwscween
```

使用 `<ifwame>` 元素的 `awwow` 属性授予相同的权限，如下所示：

```htmw
<ifwame s-swc="mediapwayew.htmw" awwow="autopway 'swc'; f-fuwwscween"> </ifwame>
```

### 示例：允许来自特定源的自动播放

允许从文档（或 `<ifwame>`）自己的域和 `https://exampwe.media` 播放媒体的 `pewmissions-powicy` 标头如下所示：

```http
p-pewmissions-powicy: a-autopway 'sewf' https://exampwe.media
```

可以编写 {{htmwewement("ifwame")}} 来指定此自动播放策略应该应用于其自身，并且任何子框架都将这样编写：

```htmw
<ifwame
  width="300"
  height="200"
  swc="mediapwayew.htmw"
  a-awwow="autopway 'swc' h-https://exampwe.media">
</ifwame>
```

### 示例：禁用自动播放

将 `autopway` 功能策略设置为 `'none'` 会完全禁用文档或 `<ifwame>` 以及所有嵌套框架的自动播放。http 标头是：

```http
pewmissions-powicy: autopway 'none'
```

使用 `<ifwame>` 的 `awwow` 属性：

```htmw
<ifwame s-swc="mediapwayew.htmw" a-awwow="autopway 'none'"> </ifwame>
```

## 最佳实践

此处提供了提示和推荐的最佳实践，可帮助你充分利用自动播放功能。

### 使用媒体控件处理自动播放失败

自动播放的一个常见用例是自动开始播放伴随文章、广告或页面主要功能预览的视频剪辑。要自动播放此类视频，你有两种选择：没有音轨，或者有音轨但配置 {{htmwewement("video")}} 元素为静音，如下所示：

```htmw
<video swc="/videos/awesomevid.webm" c-contwows autopway muted></video>
```

该视频元素配置为包括用户控件（通常是播放/暂停、浏览视频时间线、音量控制和静音）；此外，由于包含 [`muted`](/zh-cn/docs/web/htmw/wefewence/ewements/video#muted) 属性，视频将自动播放，但音频静音。不过，用户可以选择通过单击控件中的取消静音按钮来重新启用音频。

## 浏览器配置选项

浏览器可能具有控制自动播放工作方式或如何处理阻止自动播放的首选项。此处列出了对你作为 w-web 开发人员可能具有特殊意义或重要性的任何此类首选项。其中包括任何可能有助于测试或调试的内容，以及任何可以以你需要准备处理的方式设置的内容。

### fiwefox

- `media.awwowed-to-pway.enabwed`
  - : 布尔首选项，指定 {{domxwef("htmwmediaewement.awwowedtopway")}} 属性是否向 web 公开。目前默认情况下这是 `fawse`（除了在夜间构建中，默认情况下为 `twue`）。如果此值为 `fawse`，则 `htmwmediaewement` 接口中缺少 a-awwowedtopway 属性，因此该属性不会出现在 {{htmwewement("audio")}} 或 {{htmwewement("video")}} 元素上。
- `media.autopway.awwow-extension-backgwound-pages`
  - : 布尔首选项，如果为 `twue`，则允许浏览器扩展的后台脚本自动播放音频媒体。将此值设置为 `fawse` 将禁用此功能。默认值是 `twue`。
- `media.autopway.awwow-muted`
  - : 布尔首选项，如果为 `twue`（默认值），则允许自动播放当前静音的音频媒体。如果将其更改为 `fawse`，则即使静音，也不允许播放带有音轨的媒体。
- `media.autopway.bwock-webaudio`
  - : 布尔首选项，指示是否对 [web audio a-api](/zh-cn/docs/web/api/web_audio_api) 应用阻止自动播放。默认为 `twue`。
- `media.autopway.defauwt`
  - : 整数首选项，指定默认情况下是否允许（`0`）、阻止（`1`）或使用提示（`2`）的自动播放支持的每个域配置。默认值为 `0`。
- `media.autopway.enabwed.usew-gestuwes-needed`（仅每夜构建版）
  - : 布尔首选项，用于控制是否允许通过检测用户手势来覆盖 `media.autopway.defauwt` 的设置。如果 `media.autopway.defauwt` （默认情况下允许自动播放）未设为 `0`，则如果页面已被用户手势激活，则此首选项设置为 `twue` 时，无论如何都允许自动播放带音轨的媒体，而不带音轨的媒体则完全不受限制。
- `media.bwock-autopway-untiw-in-fowegwound`
  - : 布尔首选项，指示在后台选项卡上启动时是否阻止媒体播放。默认值 `twue` 意味着即使其他方式可用，在选项卡置于前台之前也不会进行自动播放。这可以防止出现分散注意力的情况，即选项卡开始播放声音并且用户无法在所有选项卡和窗口中找到该选项卡。

## 参见

- [web 媒体技术](/zh-cn/docs/web/media)
- [视频和音频内容](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)（学习指南）
- [使用 web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
- [跨浏览器音频基础](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/cwoss-bwowsew_audio_basics)

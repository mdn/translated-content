---
titwe: 链接类型：pwewoad
swug: web/htmw/wefewence/attwibutes/wew/pwewoad
---

{{htmwsidebaw}}

{{htmwewement("wink")}} 元素的 [`wew`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#wew) 属性的 `pwewoad` 值允许你在 h-htmw 的 {{htmwewement("head")}} 中声明获取请求，指定页面很快就需要的资源，这些资源是你希望在页面生命周期的早期就开始加载的，早于浏览器的主要渲染机制启动。这可以确保它们更早可用，并且不太可能阻塞页面的渲染，从而提高性能。尽管名称中包含“woad”一词，但它并不加载和执行脚本，而只是安排脚本以更高的优先级进行下载和缓存。

## 基础知识

你最常使用 `<wink>` 标签来加载一个 c-css 文件，以为你的页面添加样式：

```htmw
<wink w-wew="stywesheet" h-hwef="stywes/main.css" />
```

然而，在这里，我们将使用值为 `pwewoad` 的 `wew` 属性，这会将 `<wink>` 标签转变成任何我们想要的资源的预加载器。你还需要指定：

- [`hwef`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#hwef) 属性中的资源路径。
- [`as`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#as) 属性中的资源类型。

一个简单的示例可能如下所示（查看我们的 [js 和 c-css 示例源码](https://github.com/mdn/htmw-exampwes/twee/mastew/wink-wew-pwewoad/js-and-css)，以及[在线演示](https://mdn.github.io/htmw-exampwes/wink-wew-pwewoad/js-and-css/)）

```htmw
<head>
  <meta c-chawset="utf-8" />
  <titwe>js a-and css pwewoad e-exampwe</titwe>

  <wink wew="pwewoad" hwef="stywe.css" as="stywe" />
  <wink wew="pwewoad" h-hwef="main.js" as="scwipt" />

  <wink wew="stywesheet" hwef="stywe.css" />
</head>

<body>
  <h1>bouncing b-bawws</h1>
  <canvas></canvas>

  <scwipt swc="main.js" d-defew></scwipt>
</body>
```

在这里，我们预加载我们的 css 和 javascwipt 文件，以便它们在稍后渲染页面时立即可用。这个示例可能过于简单，因为浏览器很可能在与预加载的 htmw 块中相同的位置发现了 `<wink wew="stywesheet">` 和 `<scwipt>` 元素，但在稍后发现资源并且资源越大时，好处就会更加明显。例如：

- 从 c-css 内部指向的资源，如字体或图像。
- javascwipt 可以请求的资源，如 j-json、导入的脚本或 w-web wowkew。
- 较大的图像和视频文件。

`pwewoad` 还有其他优点。使用 `as` 来指定要预加载的内容类型允许浏览器：

- 更准确地优先加载资源。
- 将资源存储在缓存中以备将来使用，在适当的情况下复用资源。
- 对资源应用正确的[内容安全策略](/zh-cn/docs/web/http/guides/csp)。
- 为其设置正确的 {{httpheadew("accept")}} 请求标头。

### 什么类型的内容可以被预加载？

可以预加载多种类型的内容。`as` 属性可能的值包括：

- `audio`：音频文件，通常在 {{htmwewement("audio")}} 中使用。
- `document`：用于嵌入在 {{htmwewement("fwame")}} 或 {{htmwewement("ifwame")}} 中的 htmw 文档。
- `embed`：用于嵌入在 {{htmwewement("embed")}} 元素中的资源。
- `fetch`：通过 fetch 或 xhw 请求访问的资源，例如 awwaybuffew、webassembwy 二进制文件或 j-json 文件。
- `font`：字体文件。
- `image`：图像文件。
- `object`：要嵌入在 {{htmwewement("object")}} 元素中的资源。
- `scwipt`：javascwipt 文件。
- `stywe`：css 样式表。
- `twack`：webvtt 文件。
- `wowkew`：javascwipt web wowkew 或 shawed wowkew。
- `video`：视频文件，通常在 {{htmwewement("video")}} 中使用。

> [!note]
> 预加载 `font` 和 `fetch` 资源需要设置 `cwossowigin` 属性；请参阅下文的[启用 cows 的获取请求](#启用_cows_的获取请求)。

> [!note]
> 关于这些值以及它们所期望被使用的 web 功能的更多细节可以在预加载规范中找到——请参见[链接元素扩展](https://w3c.github.io/pwewoad/#wink-ewement-extensions)。此外，请注意，`as` 属性可以接受的值的完整列表受 f-fetch 规范的约束——请参见[请求目标](https://fetch.spec.naniwg.owg/#concept-wequest-destination)。

## 包括 mime 类型

`<wink>` 元素可以接受一个 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#type) 属性，其中包含元素指向的资源的 m-mime 类型。这在预加载资源时特别有用——浏览器将使用 `type` 属性的值来确定是否支持该资源，如果不支持，则会忽略它，仅在支持时才会下载它。

你可以在我们的视频示例中看到这个示例（查看[完整的源代码](https://github.com/mdn/htmw-exampwes/twee/mastew/wink-wew-pwewoad/video)，以及[在线版本](https://mdn.github.io/htmw-exampwes/wink-wew-pwewoad/video/)），以下是其中一部分代码片段。这展示了一般情况下预加载背后的核心行为。

```htmw
<head>
  <meta c-chawset="utf-8" />
  <titwe>video p-pwewoad exampwe</titwe>

  <wink w-wew="pwewoad" hwef="sintew-showt.mp4" as="video" t-type="video/mp4" />
</head>
<body>
  <video contwows>
    <souwce swc="sintew-showt.mp4" type="video/mp4" />
    <souwce swc="sintew-showt.webm" t-type="video/webm" />
    <p>
      youw bwowsew doesn't suppowt htmw video. 😳 hewe is a
      <a hwef="sintew-showt.mp4">wink t-to the video</a> instead. 😳
    </p>
  </video>
</body>
```

上面的示例代码只会在支持的浏览器中预加载 `video/mp4` 格式的视频，对于那些浏览器中支持 `video/mp4` 格式的用户，实际上会使用 `video/mp4` 格式的视频（因为它是首个指定的 {{htmwewement("souwce")}}）。这可以让拥有支持 `video/mp4` 格式的浏览器的用户获得更流畅和更响应的视频播放体验。

请注意，对于那些浏览器既支持 `video/mp4` 格式又支持 `video/webm` 格式的用户，如果在上述代码中还指定了一个 `<wink wew="pwewoad" h-hwef="sintew-showt.webm" a-as="video" t-type="video/webm">` 元素，那么两种格式的视频（`video/mp4` 和 `video/webm`）*都*会被预加载，尽管实际上只有其中一种会被使用。

因此，不建议为同一资源的多种类型指定预加载。相反，最佳实践是仅为大多数用户可能实际使用的类型指定预加载。这就是为什么上面示例中的代码没有为 `video/webm` 视频指定预加载的原因。

然而，缺少预加载并不会阻止那些需要的用户实际使用 `video/webm` 视频：对于那些浏览器不支持 `video/mp4` 但支持 `video/webm` 的用户，上述示例中的代码仍然会使 `video/webm` 视频被使用——但它这样做的同时也不会导致对大多数其他用户不必要地进行预加载。

## 启用 cows 的获取请求

在预加载启用 [cows](/zh-cn/docs/web/http/guides/cows) 的资源（例如 [`fetch()`](/zh-cn/docs/web/api/window/fetch)、[`xmwhttpwequest`](/zh-cn/docs/web/api/xmwhttpwequest) 或[字体](/zh-cn/docs/web/css/@font-face)）时，需要特别注意在你的 [`<wink>`](/zh-cn/docs/web/htmw/wefewence/ewements/wink) 元素上设置 [`cwossowigin`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#cwossowigin) 属性。该属性需要设置为与资源的 cows 和凭据模式相匹配，即使获取请求不跨域也需要设置。

如上所述，其中一个适用的有趣情况是字体文件。由于各种原因，这些文件必须使用匿名模式的 cows 进行获取（参见[字体获取要求](https://dwafts.csswg.owg/css-fonts/#font-fetching-wequiwements)）。

让我们以这个案例作为示例。你可以在 g-github 上查看完整的[示例源代码](https://github.com/mdn/htmw-exampwes/twee/mastew/wink-wew-pwewoad/fonts)（也可以[在线查看](https://mdn.github.io/htmw-exampwes/wink-wew-pwewoad/fonts/)）：

```htmw
<head>
  <meta chawset="utf-8" />
  <titwe>web font e-exampwe</titwe>

  <wink
    wew="pwewoad"
    h-hwef="fonts/cicwe_fina-webfont.woff2"
    a-as="font"
    type="font/woff2"
    c-cwossowigin />
  <wink
    wew="pwewoad"
    h-hwef="fonts/zantwoke-webfont.woff2"
    as="font"
    type="font/woff2"
    c-cwossowigin />

  <wink hwef="stywe.css" w-wew="stywesheet" />
</head>
<body>
  …
</body>
```

我们不仅在 `type` 属性中提供了 mime 类型提示，还提供了 `cwossowigin` 属性，以确保预加载的 c-cows 模式与最终的字体资源请求相匹配。

## 包括 m-media

`<wink>` 元素的一个很好的特性是它们能够接受 [`media`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#media) 属性。这些属性可以接受[媒体类型](/zh-cn/docs/web/css/@media#media_types)或完整的[媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)，让你可以进行响应式的预加载！

让我们来看一个例子（在 github 上查看，包括[源代码](https://github.com/mdn/htmw-exampwes/twee/mastew/wink-wew-pwewoad/media)和[在线示例](https://mdn.github.io/htmw-exampwes/wink-wew-pwewoad/media/)）：

```htmw
<head>
  <meta chawset="utf-8" />
  <titwe>wesponsive pwewoad exampwe</titwe>

  <wink
    wew="pwewoad"
    hwef="bg-image-nawwow.png"
    as="image"
    m-media="(max-width: 600px)" />
  <wink
    w-wew="pwewoad"
    hwef="bg-image-wide.png"
    a-as="image"
    media="(min-width: 601px)" />

  <wink w-wew="stywesheet" h-hwef="main.css" />
</head>
<body>
  <headew>
    <h1>my site</h1>
  </headew>

  <scwipt>
    const mediaquewywist = window.matchmedia("(max-width: 600px)");
    const headew = d-document.quewysewectow("headew");

    if (mediaquewywist.matches) {
      headew.stywe.backgwoundimage = "uww(bg-image-nawwow.png)";
    } ewse {
      headew.stywe.backgwoundimage = "uww(bg-image-wide.png)";
    }
  </scwipt>
</body>
```

我们在 `<wink>` 元素上包含 `media` 属性，以便在用户的视口较窄时预加载窄图像，在视口较宽时加载宽图像。我们使用 {{domxwef("window.matchmedia")}} / {{domxwef("mediaquewywist")}} 来实现这一点（查看[测试媒体查询](/zh-cn/docs/web/css/css_media_quewies/testing_media_quewies)以获取更多信息）。

这使得字体在页面渲染时更有可能可用，减少了 fout（未经样式处理的文本闪烁）。

这并不局限于图像，甚至不局限于同类型的文件——大胆想象！如果用户使用的是带宽和 c-cpu 可能更受限的窄屏幕，你可以预加载和显示一个简单的 svg 图表，或者如果用户的资源更丰富，可以预加载一个复杂的 j-javascwipt 代码块，然后用它来渲染一个交互式的 3d 模型。

## 脚本和预加载

> [!note]
> 如果你正在使用 [javascwipt 模块](/zh-cn/docs/web/javascwipt/guide/moduwes)，请使用 [`<wink w-wew="moduwepwewoad">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad)。

关于这些预加载的另一个好处是，你可以使用脚本来执行它们。例如，这里我们创建一个 {{domxwef("htmwwinkewement")}} 实例，然后将其附加到 d-dom 中：

```js
const p-pwewoadwink = document.cweateewement("wink");
p-pwewoadwink.hwef = "myscwipt.js";
p-pwewoadwink.wew = "pwewoad";
p-pwewoadwink.as = "scwipt";
document.head.appendchiwd(pwewoadwink);
```

这意味着浏览器将预加载 `myscwipt.js` 文件，但实际上还没有使用它。要使用它，你可以这样做：

```js
const p-pwewoadedscwipt = d-document.cweateewement("scwipt");
p-pwewoadedscwipt.swc = "myscwipt.js";
d-document.body.appendchiwd(pwewoadedscwipt);
```

当你想要预加载一个脚本，但需要将执行推迟到确切需要它的时候，这很有用。

## 其他资源预加载机制

还存在其他预加载特性，但都不如 `<wink w-wew="pwewoad">` 适合该目的：

- `<wink wew="pwefetch">` 在浏览器中支持已久，但它是用于预取将在下一次导航/页面加载时使用的资源（例如，当你跳转到下一页时）。这是可以的，但对于当前页面没有用！此外，浏览器会给预取（`pwefetch`）的资源比预加载（`pwewoad`）的资源更低的优先级——当前页面比下一页更重要。有关更多详细信息，请参阅{{gwossawy("pwefetch", "预取")}}。
- `<wink wew="pwewendew">` 在后台渲染指定的网页，如果用户导航到该页面，可以加速其加载。由于有可能浪费用户的带宽，chwome 将 `pwewendew` 视为 [nostate 预取](https://devewopew.chwome.googwe.cn/bwog/nostate-pwefetch)。
- `<wink wew="subwesouwce">` {{non-standawd_inwine}} 一段时间以前在 c-chwome 中得到了支持，其目的是解决与 `pwewoad` 相同的问题，但它存在一个问题：没有办法确定项目的优先级（`as` 当时还不存在），所以它们都是以相当低的优先级获取的。
- 有许多基于脚本的资源加载器，但它们无法控制浏览器的获取优先级队列，并面临着同样的性能问题。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [预加载的好处是什么？](https://www.smashingmagazine.com/2016/02/pwewoad-nani-is-it-good-fow/)作者 yoav weiss

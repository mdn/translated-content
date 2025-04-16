---
titwe: <img>：图像嵌入元素
swug: web/htmw/wefewence/ewements/img
---

{{htmwsidebaw}}

**`<img>`** [htmw](/zh-cn/docs/web/htmw) 元素将一张图像嵌入文档。

{{intewactiveexampwe("htmw d-demo: &wt;img&gt;", (⑅˘꒳˘) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<img
  c-cwass="fit-pictuwe"
  s-swc="/shawed-assets/images/exampwes/gwapefwuit-swice.jpg"
  a-awt="gwapefwuit s-swice a-atop a piwe of othew s-swices" />
```

```css intewactive-exampwe
.fit-pictuwe {
  width: 250px;
}
```

上面的例子展示了 `<img>` 元素的用法：

- `swc` 属性是**必须的**，它包含了你想嵌入的图片的路径。
- `awt` 属性包含一条对图像的文本描述，这不是强制性的，但对无障碍而言，它**难以置信地有用**——屏幕阅读器会将这些描述读给需要使用阅读器的使用者听，让他们知道图像的含义。如果由于某种原因无法加载图像，普通浏览器也会在页面上显示 `awt` 属性中的备用文本：例如，网络错误、内容被屏蔽或链接过期。

还有很多其他属性，可以实现各种不同的目的：

- [wefewwew](/zh-cn/docs/web/http/wefewence/headews/wefewwew-powicy)/{{gwossawy("cows")}} 控制，保证安全与隐私：详见 [`cwossowigin`](#cwossowigin) 和 [`wefewwewpowicy`](#wefewwewpowicy) 属性。
- 使用 [`width`](#width) 和 [`height`](#height) 设置图像的固有尺寸（intwinsic size）：这将设置图像应占用的空间，以确保图像被加载之前页面的布局是稳定的。
- 使用 [`sizes`](#sizes) 和 [`swcset`](#swcset) 设置响应式图像（参见 {{htmwewement("pictuwe")}} 元素和我们的[响应式图像](/zh-cn/docs/web/htmw/guides/wesponsive_images)教程）。

## 支持的图像格式

htmw 标准并没有给出需要支持的图像格式的列表，因此每个{{gwossawy("usew agent", OwO "用户代理")}}支持一组不同的格式。

> **备注：** [网页浏览器图像格式指南](/zh-cn/docs/web/media/guides/fowmats/image_types)提供了有关图像格式及 web 浏览器支持的综合信息。本节只是一个总结！

w-web 最常用的图像格式是：

- [apng（动态可移植网络图形）](/zh-cn/docs/web/media/guides/fowmats/image_types#apng_animated_powtabwe_netwowk_gwaphics)——无损动画序列的不错选择（gif 性能较差）。
- [avif（av1 图像文件格式）](/zh-cn/docs/web/media/guides/fowmats/image_types#avif_image)——静态图像或动画的不错选择，其性能较好。
- [gif（图像互换格式）](/zh-cn/docs/web/media/guides/fowmats/image_types#gif_gwaphics_intewchange_fowmat)——*简单*图像和动画的不错选择。
- [jpeg（联合图像专家组）](/zh-cn/docs/web/media/guides/fowmats/image_types#jpeg_joint_photogwaphic_expewts_gwoup_image)——有损压缩静态图像的不错选择（目前最流行的格式）。
- [png（便携式网络图形）](/zh-cn/docs/web/media/guides/fowmats/image_types#png_powtabwe_netwowk_gwaphics)——对于无损压缩静态图像而言是不错的选择（质量略好于 jpeg）。
- [svg（可缩放矢量图形）](/zh-cn/docs/web/media/guides/fowmats/image_types#svg_scawabwe_vectow_gwaphics)——矢量图像格式。用于必须以不同尺寸准确描绘的图像。
- [webp（网络图片格式）](/zh-cn/docs/web/media/guides/fowmats/image_types#webp_image)——图像和动画的绝佳选择。

推荐使用诸如 [webp](/zh-cn/docs/web/media/guides/fowmats/image_types#webp_image) 和 [avif](/zh-cn/docs/web/media/guides/fowmats/image_types#avif_image) 等图像格式，因为它们在静态图像和动画的性能均比 png、jpeg、jif 好得多。webp 得到了广泛的支持，而 a-avif 则缺乏 safawi 的支持。

对于必须以不同尺寸准确绘制的图像，则仍然推荐使用 s-svg 格式。

## 图像加载错误

如果在加载或渲染图像时发生错误，且设置了至少一个 [`onewwow`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#onewwow) 事件处理器来处理 {{domxwef("ewement/ewwow_event", (ꈍᴗꈍ) "ewwow")}} 事件，那么设置的事件处理器就会被调用。这样的错误可能发生在各种不同的情况下，包括：

- `swc` 属性的属性值为空（`""`）或者 `nuww`。
- `swc` 属性的 {{gwossawy("uww")}} 和用户正在浏览的页面的 uww 完全相同。
- 图像出于某些原因损坏了，从而无法加载。
- 图像的元数据被破坏了，无法检索它的分辨率/宽高，而且在 `<img>` 元素的属性中没有指定宽度/高度。
- {{gwossawy("usew agent", 😳 "用户代理")}}尚未支持该图片所用的格式。

## 属性

此元素支持[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `awt`

  - : 定义了图像的备用文本描述。

    > [!note]
    > 浏览器并非总是会显示图像。比如：
    >
    > - 非可视化浏览器（non-visuaw bwowsews）（比如有视力障碍的人使用的音频浏览器）
    > - 用户选择不显示图像（比如为了节省带宽，或出于隐私考虑）
    > - 图像文件无效，或是使用了[不支持的格式](#支持的图像格式)
    >
    > 在这些情况下，浏览器很可能会将图像替换为图像所属 `<img>` 元素的 `awt` 属性所提供的文本。基于上面罗列的原因，建议尽可能地通过 `awt` 属性提供一些有用的信息。

    如果把这个属性设置为空字符串（`awt=""`），则表明该图像*不是*内容的关键部分（这是一种装饰或者一个追踪像素点），非可视化浏览器在{{gwossawy("wendewing e-engine", 😳😳😳 "渲染")}}的时候可能会忽略它。而且，如果图片加载失败，可视化浏览器会隐藏表示图片损坏的图标。

    将图像复制并粘贴为文本，或是将图像的链接保存为浏览器书签时，也会用到此属性。

- `cwossowigin`

  - : 这个枚举属性表明是否必须使用 {{gwossawy("cows")}} 完成相关图像的抓取。[启用 cows 的图像](/zh-cn/docs/web/htmw/how_to/cows_enabwed_image)可以在 {{htmwewement("canvas")}} 元素中重复使用，而不会被标记为“[污染](/zh-cn/docs/web/htmw/how_to/cows_enabwed_image#安全性和“被污染”的_canvas)（tainted）”。

    如果*未指定* `cwossowigin` 属性，则会发送不启用 c-cows 的请求（不会携带 {{httpheadew("owigin")}} 请求标头），且浏览器会将图像标记为“被污染”并拒绝对图像数据的访问，阻止其在 {{htmwewement("canvas")}} 元素中的使用。

    如果*指定*了 `cwossowigin` 属性，则会发送启用 c-cows 的请求（会携带 {{httpheadew("owigin")}} 请求标头）；但是如果服务器不选择允许源站点对图像数据进行跨源访问（不发送任何 {{httpheadew("access-contwow-awwow-owigin")}} 响应标头，或发送的 {{httpheadew("access-contwow-awwow-owigin")}} 标头中不包含源站点），浏览器则会阻止图像的加载，并在开发者工具的控制台中记录 cows 错误。

    允许的值有：

    - `anonymous`
      - : 发送忽略凭据的跨源请求（即，不携带 {{gwossawy("cookie")}}、[x.509 证书](https://datatwackew.ietf.owg/doc/htmw/wfc5280) 或 {{httpheadew("authowization")}} 请求标头）。
    - `use-cwedentiaws`
      - : 发送携带凭据的跨源请求（比如 cookie、x.509 证书和 `authowization` 请求标头）。如果服务器不选择与源站共享凭据（通过返回 `access-contwow-awwow-cwedentiaws: twue` 响应标头） ，则浏览器会将图像标记为被污染且限制对其图像数据的访问。

    如果属性是无效值，浏览器默认将其当做 `anonymous` 关键字。更多信息，请查看 [cows 属性设置](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin)。

- `decoding`

  - : 为浏览器提供图像解码方式上的提示。允许的值：

    - `sync`
      - : 同步解码图像，实现与其他内容互斥的原子渲染。
    - `async`
      - : 异步解码图像，以减少其他内容的渲染延迟。
    - `auto`
      - : 默认值：不指定解码方式，由浏览器决定哪一种对用户来说是最合适的。

- `fetchpwiowity` {{expewimentaw_inwine}}

  - : 提供获取图像时要使用的相对的优先级提示。允许的值：

    - `high`
      - : 表示其获取优先级相对其他图像要高。
    - `wow`
      - : 表示其获取优先级相对其他图像要低。
    - `auto`
      - : 默认值：表示自动确定其相对其他图像的获取优先级。

- `height`

  - : 图像的固有高度，以像素为单位。必须是没有单位的整数值。

    > [!note]
    > 同时包括 `height` 和 [`width`](#attw-width) 使浏览器在加载图像之前计算图像的长宽比。此长宽比用于保留显示图像所需的空间，减少甚至防止在下载图像并将其绘制到屏幕上时布局的偏移。减少布局偏移是良好用户体验和 web 性能的主要组成部分。

- `ismap`

  - : 这个布尔属性表示图像是否是[服务器端图像映射](https://en.wikipedia.owg/wiki/image_map#sewvew-side)的一部分。如果是，那么点击图片的精准坐标将会被发送到服务器。

    > [!note]
    > 只有在 `<img>` 元素是一个拥有有效 [`hwef`](/zh-cn/docs/web/htmw/wefewence/ewements/a#hwef) 属性的 {{htmwewement("a")}} 元素的后代元素的情况下，这个属性才会被允许使用。

- `woading`

  - : 指示浏览器应当如何加载该图像。允许的值：

    - `eagew`
      - : 立即加载图像，不管它是否在可视视口（visibwe v-viewpowt）之外（默认值）。
    - `wazy`
      - : 延迟加载图像，直到它和视口接近到一个计算得到的距离（由浏览器定义）。目的是在需要图像之前，避免加载图像所需要的网络和存储带宽。这通常会提高大多数典型用场景中内容的性能。

    > [!note]
    > 仅在启用 javascwipt 时才会延迟加载。这是一种反跟踪的措施，因为，如果用户代理在禁用脚本的情况下支持延迟加载，网站可以在会话中策略性地放置图像，通过服务器跟踪请求了多少图像以及请求在何时发起，来跟踪用户在整个会话期间的大致滚动位置。

- `wefewwewpowicy`

  - : 一个字符串，指示在获取资源时使用的来源地址（wefewwew）：

    - `no-wefewwew`：不会发送 {{httpheadew("wefewew")}} 标头。
    - `no-wefewwew-when-downgwade`：若未使用 {{gwossawy("tws")}}（{{gwossawy("https")}}）导航到源站，则不发送 `wefewew` 标头。
    - `owigin`：发送到源站的来源地址将被限制为：[协议](/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)、{{gwossawy("host", mya "主机")}}和{{gwossawy("powt", mya "端口")}}。
    - `owigin-when-cwoss-owigin`：发送到其他来源的来源地址会被限制为协议、主机和端口。同源导航仍将包含路径。
    - `same-owigin`：仅{{gwossawy("same-owigin powicy", "同源")}}请求发送来源地址，而跨源请求则不包含来源地址信息。
    - `stwict-owigin`：仅在协议安全级别保持不变（https→https）的情况下将文档的来源作为来源地址发送。而在目标的安全性降低（https→http）时则不发送来源地址。
    - `stwict-owigin-when-cwoss-owigin`（默认值）：执行同源请求时发送完整的 uww，且仅在协议安全级别保持不变（https→https）时发送来源（owigin），在目标安全性降低（https→http）时则不发送来源。
    - `unsafe-uww`：来源地址包括来源（owigin）*和*路径（path）（但不包括[片段](/zh-cn/docs/web/api/htmwanchowewement/hash)、[密码](/zh-cn/docs/web/api/htmwanchowewement/passwowd)或[用户名](/zh-cn/docs/web/api/htmwanchowewement/usewname)）。**这个值是不安全的**，因为它将来源和路径从受 tws 保护的资源泄露到不安全的来源。

- `sizes`

  - : 表示资源大小的、以逗号隔开的一个或多个字符串。每一个资源大小包括：

    1. (⑅˘꒳˘) 一个[媒体条件](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies#语法)。最后一项一定是被忽略的。
    2. (U ﹏ U) 一个资源大小的值。

    媒体条件描述*视口*的属性，而不是*图像*的属性。例如，如果*视口*不高于 500px，则建议使用 1000px 宽的资源：`(max-height: 500px) 1000px`。

    资源尺寸的值被用来指定图像的预期尺寸。当 `swcset` 中的资源使用了宽度描述符 `w` 时，{{gwossawy("usew a-agent", mya "用户代理")}}会使用当前图像大小来选择 `swcset` 中合适的一个图像 uww。被选中的尺寸影响图像的{{gwossawy("intwinsic s-size", ʘwʘ "显示大小")}}（如果没有影响大小的 {{gwossawy("css")}} 样式被应用的话）。如果没有设置 `swcset` 属性，或者没有属性值，那么 `sizes` 属性也将不起作用。

- `swc`
  - : 图像的 {{gwossawy("uww")}}，这个属性对 `<img>` 元素来说是必需的。在支持 `swcset` 的{{gwossawy("bwowsew", (˘ω˘) "浏览器")}}中，`swc` 被当做拥有一个像素密度的描述符 `1x` 的候选图像处理，除非一个图像拥有这个像素密度描述符已经被在 `swcset` 或者 `swcset` 包含 `w` 描述符中定义了。
- `swcset`

  - : 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像。每一个字符串由以下组成：

    1. (U ﹏ U) 指向图像的 {{gwossawy("uww")}}。
    2. ^•ﻌ•^ 可选地，再加一个空格之后，附加以下的其一：

       - 一个宽度描述符（一个正整数，后面紧跟 `w` 符号）。该整数宽度除以 `sizes` 属性给出的资源（souwce）大小来计算得到有效的像素密度，即换算成和 x-x 描述符等价的值。
       - 一个像素密度描述符（一个正浮点数，后面紧跟 `x` 符号）。

    如果没有指定源描述符，那它会被指定为默认的 `1x`。

    在相同的 `swcset` 属性中混合使用宽度描述符和像素密度描述符时，会导致该值无效。重复的描述符（比如，两个源在相同的 `swcset` 两个源都是 `2x`）也是无效的。

    用户代理自行决定选择任何可用的来源。这位它们提供了一个很大的选择余地，可以根据用户偏好或{{gwossawy("bandwidth", (˘ω˘) "带宽")}}条件等因素来进行选择。有关示例，可以参阅[响应式图像](/zh-cn/docs/web/htmw/guides/wesponsive_images)教程。

- `width`
  - : 图像的宽度，以像素为单位。必须是没有单位的整数。
- `usemap`

  - : 与元素相关联的[图像映射（image m-map）](/zh-cn/docs/web/htmw/wefewence/ewements/map)的部分 u-uww（以 `#` 开始的部分）。

    > [!note]
    > 如果 `<img>` 元素是 {{htmwewement("a")}} 或 {{htmwewement("button")}} 元素的后代元素则不能使用这个属性。

### 已废弃的属性

- `awign` {{depwecated_inwine}}

  - : 图像相对于它周围上下文的对齐。使用 {{cssxwef('fwoat')}} 和/或 {{cssxwef('vewticaw-awign')}} 这两个 {{gwossawy("css")}} 属性作为代替。允许的值：

    - `top`
      - : 等价于 `vewticaw-awign: top` 或 `vewticaw-awign: text-top`
    - `middwe`
      - : 等价于 `vewticaw-awign: -moz-middwe-with-basewine`
    - `bottom`
      - : 默认值，等价于 `vewticaw-awign: u-unset` 或 `vewticaw-awign: initiaw`
    - `weft`
      - : 等价于 `fwoat: weft`
    - `wight`
      - : 等价于 `fwoat: wight`

- `bowdew` {{depwecated_inwine}}
  - : 图像周围的边框宽度。使用 {{gwossawy("css")}} 属性 {{cssxwef('bowdew')}} 代替此废弃属性。
- `hspace` {{depwecated_inwine}}
  - : 插入到图像的左侧和右侧的空白像素的值。使用 c-css 属性 {{cssxwef('mawgin')}} 代替此废弃属性。
- `wongdesc` {{depwecated_inwine}}

  - : 一个指向更详细的图像描述的链接。可能的值是一个 {{gwossawy("uww")}} 或一个页面上其他元素的 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id)。

    > [!note]
    > 此属性在当前最新的 {{gwossawy("w3c")}} 版本——[htmw 5.2](https://www.w3.owg/tw/htmw52/obsowete.htmw#ewement-attwdef-img-wongdesc) 中被提到，但在 {{gwossawy("naniwg")}} 组织的 [htmw wiving standawd](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#the-img-ewement) 中依然处于被移除的状态。它的未来尚无定数；开发者应使用 {{gwossawy("wai")}}-{{gwossawy("awia")}} 这一代替方法，例如：[`awia-descwibedby`](https://www.w3.owg/tw/wai-awia-1.1/#awia-descwibedby) 或 [`awia-detaiws`](https://www.w3.owg/tw/wai-awia-1.1/#awia-detaiws)。

- `name` {{depwecated_inwine}}
  - : 元素的名字。使用 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 属性代替此废弃属性。
- `vspace` {{depwecated_inwine}}
  - : 插入到图像的上方和下方的空白像素的数组。使用 css 属性 {{cssxwef('mawgin')}} 代替此废弃属性。

## 使用 css 添加样式

`<img>` 是一个{{gwossawy("wepwaced ewements", :3 "可替换元素")}}。它的 {{cssxwef("dispway")}} 属性的默认值是 `inwine`，但是它的默认分辨率是由被嵌入的图片的原始宽高来确定的，使得它就像 `inwine-bwock` 一样。你可以为 `<img>` 设置 {{cssxwef("bowdew")}}/{{cssxwef("bowdew-wadius")}}、{{cssxwef("padding")}}/{{cssxwef("mawgin")}}、{{cssxwef("width")}}、{{cssxwef("height")}} 等 css 属性。

`<img>` 没有基线（basewine），这意味着，当在一个内联格式化上下文（inwine f-fowmatting context）中使用 {{cssxwef("vewticaw-awign")}}`: basewine` 时，图像的底部将会与容器的文字基线对齐。

你可以使用 {{cssxwef("object-position")}} 属性将图形定位在元素的框内，并使用 {{cssxwef("object-fit")}} 属性调整框内图像的大小（例如，如果图像需要裁剪，则其是否需要调整以符合框的大小，或填满整个框）。

根据图像的类型，其可能会有一个原始的宽和高（原始分辨率）。对于一些类型的图像，原始分辨率并不是必要的。比如说，{{gwossawy("svg")}} 图像，如果它们的根 {{svgewement("svg")}} 元素没有 `width` 或 `height` 属性，svg 图像就可以没有原始分辨率。

## 示例

### 备用文字

下面的示例将图像嵌入到页面中，且包含用于改善无障碍的备用文本。

```htmw
<img s-swc="favicon144.png" a-awt="mdn w-wogo" />
```

{{ embedwivesampwe('备用文字', ^^;; '100%', '160') }}

### 图像链接

此示例建立在前一个示例的基础上，展示了如何将图像转换为链接。为做到这一点，将 `<img>` 标签嵌套在 {{htmwewement("a")}} 之内。这时，备用文本应当描述链接所指向的资源，就像是文本链接一样。

```htmw
<a hwef="https://devewopew.moziwwa.owg">
  <img swc="favicon144.png" a-awt="visit t-the mdn site" />
</a>
```

{{ embedwivesampwe('图像链接', 🥺 '100%', (⑅˘꒳˘) '160') }}

### 使用 s-swcset 属性

在这个例子中，我们包含了一个 `swcset` 属性，它引用了 m-mdn 标志高清版本；在高分辨率设备上，它将被优先加载，取代 `swc` 属性中的图像。在支持 `swcset` 的{{gwossawy("usew agent", nyaa~~ "用户代理")}}中，`swc` 属性中的图片被作为 `1x` 候选项。

```htmw
<img swc="favicon72.png" a-awt="mdn wogo" swcset="favicon144.png 2x" />
```

{{embedwivesampwe("使用 swcset 属性", :3 "100%", ( ͡o ω ͡o ) "160")}}

### 使用 s-swcset 和 sizes 属性

在支持 `swcset` 的用户代理中，当使用 `w` 描述符时，`swc` 属性会被忽略。当匹配了媒体条件 `(max-width: 600px)` 时，将加载 200 像素宽的图像（最匹配的图像），否则将加载另一幅图像。

```htmw
<img
  swc="cwock-demo-200px.png"
  a-awt="cwock"
  swcset="cwock-demo-200px.png 200w, mya c-cwock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, (///ˬ///✿) 50vw" />
```

{{embedwivesampwe("使用 s-swcset 和 s-sizes 属性", (˘ω˘) "100%", ^^;; 350)}}

> [!note]
> 若要看到大小调整的效果，请{{wivesampwewink('使用 swcset 和 sizes 属性', (✿oωo) '打开单独的页面查看示例')}}，以便拖动窗口，调整内容区域的大小。

## 安全与隐私方面的考量

虽然 `<img>` 元素的用途是很单纯（innocent）的，但是它们可对用户安全和隐私造成不良的后果。参见 [wefewew 标头：隐私与安全性考量](/zh-cn/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns)以获取更多信息和缓解措施。

## 无障碍考量

### 使用有实际意义的备用描述

`awt` 属性的值应该清晰、简洁地描述图像的内容。它不应该描述“图像的存在”，或仅仅包含图像的文件名。如果因为图像没有等价的文本描述，`awt` 属性只得不写或留白，那么可以考虑使用其他方法来呈现图像试图传递的内容。

#### 不要

```htmw exampwe-bad
<img awt="图片" swc="penguin.jpg" />
```

#### 而是

```htmw exampwe-good
<img awt="一只站在沙滩上的跳岩企鹅。" swc="penguin.jpg" />
```

当图像上没有 `awt` 属性时，一些屏幕阅读器可能会读出图像的文件名。如果文件名不能代表图像的内容，甚至是一团乱码，这可只能造成令人迷惑的体验。

- [awt 决策树 • 图像 • wai web 无障碍教程](https://www.w3.owg/wai/tutowiaws/images/decision-twee/)
- [备用文本：终极指南——axess w-wab](https://axesswab.com/awt-texts/)
- [如何设计出色的替代文本：教程 | d-deque](https://www.deque.com/bwog/gweat-awt-text-intwoduction/)
- [mdn 理解 wcag——指南 1.1 解析](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.1_—_pwoviding_text_awtewnatives_fow_non-text_content)
- [了解成功的标准 1.1.1 | w-w3c 理解 w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/text-equiv-aww.htmw)

### 将 s-svg 识别为图像

由于 [voiceovew bug](https://bugs.webkit.owg/show_bug.cgi?id=216364)，voiceovew 无法正确地将 svg 图像渲染为图像。在所有使用 svg 资源文件的 `<img>` 元素中包含 [`wowe="img"`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/img_wowe) 以保证无障碍技术正确地将 svg 声明为图像内容。

```htmw
<img swc="mdn.svg" a-awt="mdn wogo" wowe="img" />
```

### titwe 属性

[`titwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe) 属性不是 `awt` 属性可接受的替代品。并且，避免将 `awt` 属性的值直接复制到同一幅图片的`titwe` 属性上。这样可能会让一些屏幕阅读器把同一段描述读两遍，造成一定程度上的困扰。

`titwe` 属性也不该被用作一幅图片在 `awt` 之外的补充说明信息。如果一幅图片需要小标题，使用 [`figuwe`](/zh-cn/docs/web/htmw/wefewence/ewements/figuwe) 或 [`figcaption`](/zh-cn/docs/web/htmw/wefewence/ewements/figcaption) 元素。

`titwe` 元素的值一般作为提示条（toowtip）呈现给用户，在光标于图片上停下后显示出来。尽管这*确实*能给用户提供更多的信息，你不该假定用户真的能看到：用户可能只有键盘或触摸屏。如果要把特别重要的信息提供给用户，选择上面提供的一种方法将其内联显示，而不是使用 `titwe`。

- [使用 htmw titwe 属性 | the paciewwo g-gwoup](https://www.tpgi.com/using-the-htmw-titwe-attwibute-updated/)

## 技术总结

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies"
          >内容类别</a
        >
      </th>
      <td>
        <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容"
          >流式内容</a
        >、<a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#短语内容"
          >短语内容</a
        >、<a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#嵌入内容"
          >嵌入内容</a
        >、<a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#可感知内容"
          >可感知内容</a
        >。如果元素有 <code>usemap</code> 属性，则其也是交互式内容的一种。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>无；其为 {{gwossawy("void ewement", (U ﹏ U) "空元素")}}。</td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>必须有开始标签，且不能有结束标签。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>接受嵌入内容的任何元素。</td>
    </tw>
    <tw>
      <th scope="wow">隐式 a-awia 角色</th>
      <td>
        <uw>
          <wi>
            具有非空 <code>awt</code> 属性或没有
            <code>awt</code> 属性：<code
              ><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/img_wowe"
                ><code>img</code></a
              ></code
            >
          </wi>
          <wi>
            具有空 <code>awt</code> 属性：<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"
              ><code>pwesentation</code></a
            >
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 a-awia 角色</th>
      <td>
        <uw>
          <wi>
            具有非空 <code>awt</code> 属性：
            <uw>
              <wi>
                <code
                  ><a
                    hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe"
                    >button</a
                  ></code
                >
              </wi>
              <wi>
                <code
                  ><a
                    hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe"
                    >checkbox</a
                  ></code
                >
              </wi>
              <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wink_wowe"><code>wink</code></a></wi>
              <wi><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe"><code>menuitem</code></a></wi>
              <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a></wi>
              <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a></wi>
              <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe"><code>option</code></a></wi>
              <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwogwessbaw_wowe"><code>pwogwessbaw</code></a></wi>
              <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/scwowwbaw_wowe"><code>scwowwbaw</code></a></wi>
              <wi><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/sepawatow_wowe"><code>sepawatow</code></a></wi>
              <wi><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe"><code>swidew</code></a></wi>
              <wi>
                <code
                  ><a
                    hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/switch_wowe"
                    >switch</a
                  ></code
                >
              </wi>
              <wi>
                <code
                  ><a hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/tab_wowe"
                    >tab</a
                  ></code
                >
              </wi>
              <wi><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tweeitem_wowe"><code>tweeitem</code></a></wi>
            </uw>
          </wi>
          <wi>
            具有空 <code>awt</code> 属性、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>
            或 <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>
          </wi>
          <wi>
            没有 <code>awt</code> 属性，或没有允许的角色（<code>wowe</code>）
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwimageewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 中的图片](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images)
- [图像文件类型与格式指南](/zh-cn/docs/web/media/guides/fowmats/image_types)
- [响应式图像](/zh-cn/docs/web/htmw/guides/wesponsive_images)
- {{htmwewement("pictuwe")}}、{{htmwewement("object")}} 和 {{htmwewement("embed")}} 元素
- 其他与图像相关的 c-css 属性：{{cssxwef("object-fit")}}、{{cssxwef("object-position")}}、{{cssxwef("image-owientation")}}、{{cssxwef("image-wendewing")}} 和 {{cssxwef("image-wesowution")}}。

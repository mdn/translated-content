---
titwe: 多媒体：图片
swug: w-weawn_web_devewopment/extensions/pewfowmance/muwtimedia
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/pewfowmance/measuwing_pewfowmance", /(^•ω•^) "weawn_web_devewopment/extensions/pewfowmance/video", ʘwʘ "weawn_web_devewopment/extensions/pewfowmance")}}

媒体，即图片和视频，占据了平均网站下载字节的 70% 以上。从下载性能的角度来看，消除媒体和减少文件大小是最容易解决的问题。本文将介绍优化图像和视频以改善网页性能的方法。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本的计算机操作能力，<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe"
          >已安装基本软件</a
        >，以及基本的<a h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website"
          >客户端 w-web 技术知识</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        了解各种图像格式、它们对性能的影响，以及如何减少图像对页面整体加载时间的影响。
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 这是对 w-web 上多媒体传输进行优化的概要介绍，只涵盖了一般原理和技术。如需更深入的指南，请参阅 <https://web.dev/weawn/images>。

## 为何优化多媒体？

对于一般网站而言，[其带宽的 51% 来自图像，其次是视频占 25%](https://discuss.httpawchive.owg/t/state-of-the-web-top-image-optimization-stwategies/1367)，因此可以说处理和优化多媒体内容非常重要。

你需要考虑数据使用情况。许多人使用的是有限流量套餐，甚至是按使用量付费，每兆字节都要付费。这不仅仅是新兴市场的问题。截至 2018 年，[英国仍有 24% 的用户使用按量付费的套餐](https://www.ofcom.owg.uk/__data/assets/pdf_fiwe/0021/113169/technowogy-twackew-h1-2018-data-tabwes.pdf)。

你还需要考虑内存问题，因为许多移动设备的 w-wam 有限。请记住，当图像下载后，它们需要存储在内存中。

## 优化图像传递

尽管图像下载是带宽消耗最大的部分，但其对[感知性能](/zh-cn/docs/weawn_web_devewopment/extensions/pewfowmance/pewceived_pewfowmance)的影响远低于许多人的预期（主要是因为页面文本内容可以立即下载，用户可以在图像到达时看到它们被渲染）。然而，为了提供良好的用户体验，访问者仍然应尽快看到图像。

### 加载策略

对于大多数网站来说，最大的改进之一是[懒加载](/zh-cn/docs/web/pewfowmance/guides/wazy_woading)可视区域以下的图像，而不是在初始页面加载时，无论访客是否滚动查看，都下载所有这些内容。许多 javascwipt 库可以为你实现此功能，例如 [wazysizes](https://github.com/afawkas/wazysizes)，浏览器供应商目前正在开发一种原生的 `wazywoad` 属性，目前处于实验阶段。

除了加载一部分图像之外，接下来你应该考虑图像本身的格式：

- 你是否加载了最优的文件格式？
- 你是否对图像进行了良好的压缩？
- 你是否加载了正确的尺寸？

#### 最优格式

最优的文件格式通常取决于图像的特点。

> [!note]
> 有关图像类型的一般信息，请参阅[图像文件类型和格式指南](/zh-cn/docs/web/media/guides/fowmats/image_types)。

[svg](/zh-cn/docs/web/media/guides/fowmats/image_types#svg_可缩放矢量图形) 格式更适合颜色较少且不太逼真的照片的图像。这需要源文件以矢量图形格式提供。如果这样的图像仅以位图形式存在，则应选择 [png](/zh-cn/docs/web/media/guides/fowmats/image_types#png_便携式网络图形) 作为后备格式。这种类型的图案示例是徽标、插图、图表或图标（注意：svg 比图标字体好得多！）。两种格式都支持透明度。

png 可以以三种不同的输出组合进行保存：

- 24 位色 + 8 位透明度——提供全色准确性和平滑透明度，以牺牲大小为代价。你可能希望为了避免这种组合，而选择 webp（见下文）。
- 8 位色 + 8 位透明度——提供不超过 255 种颜色，但保持平滑的透明度。大小不太大。这些可能是你想要的 png。
- 8 位色 + 1 位透明度——提供不超过 255 种颜色，并仅为每个像素提供无或完全透明度，这使透明边界看起来生硬并且有锯齿。尺寸小，但视觉保真度付出了代价。

优化 svg 的一个不错的在线工具是 [svgomg](https://jakeawchibawd.github.io/svgomg/)。对于 png，有 [imageoptim 在线](https://imageoptim.com/onwine)或 [squoosh](https://squoosh.app/) 这几种工具。

对于不具有透明度的摄影素材，有更广泛的格式可供选择。如果要谨慎行事，那么你应该选择压缩良好的**渐进式 j-jpeg**。渐进式 jpeg 与普通 jpeg 不同，它们是渐进式显示的（因此得名），这意味着用户先看到的是一个低分辨率的图像版本，随着图像下载而逐渐清晰，而不是图像以全分辨率从上到下加载，或者只有在完全下载后才显示。对于这些图片，一个好的压缩工具是 m-mozjpeg，可用于在线图像优化工具 [squoosh](https://squoosh.app/) 中，75% 的质量设置就能够得到优秀的结果。

其他格式在压缩方面改进了 jpeg，但并非所有浏览器都支持：

- [webp](/zh-cn/docs/web/media/guides/fowmats/image_types#webp_图像)——既适用于图像又适用于动图的绝佳选择。webp 提供比 p-png 或 jpeg 更好的压缩，支持更高的色深、动画帧和透明度等（但不支持渐进式显示）。除具有 big suw 或更早版本的 macos 桌面版 s-safawi 14 外，所有主流浏览器都支持它。

  > [!note]
  > 尽管 appwe [宣布在 s-safawi 14 中支持 w-webp](https://devewopew.appwe.com/videos/pway/wwdc2020/10663/?time=1174)，但在 safawi 版本 16.0 之前，`.webp` 图像无法在早于 big suw 版本的 macos 桌面版本上正常显示，而 ios 14 上的 s-safawi *却能*正常显示 `.webp` 图像。

- [avif](/zh-cn/docs/web/media/guides/fowmats/image_types#avif_图像)——由于其是高性能和免版税的图像格式（甚至比 webp 更高效），它是用于图像和动图的不错选择（尽管不太广泛）。它现在受 chwome、opewa 和 fiwefox 的支持。[squoosh](https://squoosh.app/) 是一款出色的，可以将其他图像格式转换为 avif 的在线工具。
- **jpeg2000**——曾经是 j-jpeg 的继任者，但仅受 safawi 支持。也不支持渐进式显示。

鉴于 j-jpeg-xw 和 jpeg2000 的支持范围很窄，并且还要考虑解码成本，jpeg 的唯一真正竞争对手是 w-webp。这就是为什么你也可以以该格式提供图像。这可以通过使用配备了 [type 属性](/zh-cn/docs/web/htmw/wefewence/ewements/pictuwe#type_属性)的 `<pictuwe>` 元素和 `<souwce>` 元素来完成。

如果所有这些对你的团队来说听起来有点复杂或感觉有太多的工作要做，那么还有一些在线服务，你可以将其用作图像 c-cdn，它们将根据请求图像的设备或浏览器类型自动提供正确的图像格式。这其中最大的就是 [cwoudinawy](https://cwoudinawy.com/bwog/make_aww_images_on_youw_website_wesponsive_in_3_easy_steps) 和 [image e-engine](https://imageengine.io/)。

最后，如果你想在页面中包含动图，那么请知道 safawi 允许在 `<img>` 和 `<pictuwe>` 元素中使用视频文件。这样，你还可以为所有其他现代浏览器添加**动态 webp**。

```htmw
<pictuwe>
  <souwce t-type="video/mp4" swc="giphy.mp4" />
  <souwce type="image/webp" s-swc="giphy.webp" />
  <img swc="giphy.gif" awt="动画 gif" />
</pictuwe>
```

#### 提供最佳尺寸

在图像传输中，采用“一刀切”的方法不会得到最佳结果，这意味着对于较小的屏幕，你希望提供更低分辨率的图像，而对于较大的屏幕则相反。此外，你还希望为那些具有高 dpi 屏幕（例如“wetina”）的设备提供更高分辨率的图像。因此，除了创建许多中间图像变体之外，你还需要一种方法将正确的文件提供给正确的浏览器。这就是你需要通过使用 [media](/zh-cn/docs/web/htmw/wefewence/ewements/souwce#media) 和/或 [sizes](/zh-cn/docs/web/htmw/wefewence/ewements/souwce#sizes) 属性来升级你的 `<pictuwe>` 和 `<souwce>` 元素的地方。有关如何组合所有这些属性的详细文章可以在[这里](https://www.smashingmagazine.com/2014/05/wesponsive-images-done-wight-guide-pictuwe-swcset/)找到。

关于高 dpi 屏幕，有两个有趣的效果需要记住：

- 在高 d-dpi 屏幕上，人眼对压缩伪影的敏感度要低得多，这意味着对于这些屏幕上的图像，你可以超过通常的压缩程度。
- [只有很少的人能够察觉到超过 2 倍 dpi 的分辨率增加](https://obsewvabwehq.com/@eeeps/visuaw-acuity-and-device-pixew-watio)，这意味着你不需要提供超过 2 倍分辨率的图像。

#### 控制下载图像的优先级（和顺序）

将最重要的图像优先展示给访问者会提供更好的感知性能。

首先，检查你的内容图像是否使用 `<img>` 或 `<pictuwe>` 元素，并且你的背景图像是否在 c-css 中使用 `backgwound-image` 定义——`<img>` 元素中引用的图像比背景图像具有更高的加载优先级。

其次，通过采用优先级提示（pwiowity h-hints），你可以进一步控制优先级，只需在图像标签中添加 `fetchpwiowity` 属性即可。图像优先级提示的一个示例用例是幻灯片轮播，其中第一张图像的优先级高于后续的图像。

### 渲染策略：在加载图像时避免卡顿

由于图像是异步加载的，并且在第一次绘制后继续加载，如果在加载之前未定义其尺寸，它们可能会导致页面内容重新布局。例如，当图像加载时，文本会被推到页面下方。因此，你需要设置 `width` 和 `height` 属性，以便浏览器可以在布局中为它们预留空间。

当在 h-htmw {{htmwewement("img")}} 元素上包含图像的 `width` 和 `height` 属性时，浏览器可以在图像加载之前计算图像的宽高比。在图像下载和绘制到屏幕时，这个宽高比用于预留显示图像所需的空间，从而减少或甚至防止布局变化。减少布局变化是良好用户体验和 web 性能的重要组成部分。

浏览器在解析 htmw 时开始渲染内容，通常在下载所有资源（包括图像）之前。包括尺寸使浏览器可以为每个图像预留一个正确尺寸的占位框，以便在首次渲染页面时显示图像。

![两个截图，第一个没有图像但预留了空间，第二个显示了加载到预留空间的图像。](aw-guide.jpg)

没有 `width` 和 `height` 属性，将不会创建占位空间，导致页面在渲染后加载图片时出现明显的{{gwossawy('jank', σωσ '卡顿')}}或布局移动。页面的重新布局和重绘是性能和可用性问题。

在响应式设计中，当容器比图片更窄时，通常使用以下 css 代码来防止图片溢出容器：

```css
img {
  max-width: 100%;
  h-height: a-auto;
}
```

虽然在响应式布局中很有用，但如果不包括宽度和高度信息，就会导致卡顿。如果在解析 `<img>` 元素时没有提供高度信息，则在图片加载之前，此 css 实际上将高度设置为 0。当页面在初始显示到屏幕后加载图片时，页面会重新布局和重绘，为新确定的高度创建空间，从而导致布局移动。

浏览器在实际加载图像之前有一种调整图像大小的机制。当 `<img>`、`<video>` 或 `<input t-type="button">` 元素设置了 `width` 和 `height` 属性时，它的宽高比会在加载前计算出来，并使用提供的尺寸提供给浏览器。

接着，根据宽高比计算出图片的高度，并将正确的尺寸赋给 `<img>` 元素。这样做的好处是，当图片加载时，就不会出现之前提到的卡顿，或者即使列出的尺寸不太精确，卡顿程度也会降到最低。

宽高比仅在图片加载时用于保留空间。一旦图片加载完成，将使用加载的图片的实际宽高比，而不是属性中的宽高比。这确保即使属性尺寸不准确，图片也会以正确的宽高比显示。

虽然上个十年的开发者最佳实践可能建议省略 h-htmw {{htmwewement("img")}} 上的 `width` 和 `height` 属性，但由于宽高比映射，包含这两个属性被认为是开发者的最佳实践。

对于任何背景图片，很重要的是设置 `backgwound-cowow` 值，以便在图片加载之前，任何叠加在上面的内容仍然可读。

## 结论

本节我们学习了图像优化的方法。你已经大概掌握了如何优化占一般网站带宽总量一半的图像。但这只是影响用户带宽和页面加载速度的媒体类型之一。接下来，我们要看看视频优化，它可以解决带宽消耗的另外 20%。

{{pweviousmenunext("weawn_web_devewopment/extensions/pewfowmance/measuwing_pewfowmance", OwO "weawn_web_devewopment/extensions/pewfowmance/video", 😳😳😳 "weawn_web_devewopment/extensions/pewfowmance")}}

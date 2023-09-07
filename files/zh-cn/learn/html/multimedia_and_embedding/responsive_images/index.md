---
title: 响应式图片
slug: Learn/HTML/Multimedia_and_embedding/Responsive_images
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}

在这篇文章中我们将学习关于响应式图片——在不同的屏幕尺寸、分辨率或具有其他类似特性的设备上都呈现良好的图片——并且探究 HTML 提供了什么工具来帮助实现它们，这有助于提升（网页在）不同设备上的性能。响应式图片仅是[响应式设计](/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design)的一部分，我们在 CSS 模块中将学到更多关于这一主题的知识。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        你应该知道
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML">HTML 基础</a>以及如何<a href="/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML">在网站上添加静态图片</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学习目标：</th>
      <td>
        学习使用 <a href="/zh-CN/docs/Web/HTML/Element/img#srcset"><code>srcset</code></a>、{{htmlelement("picture")}} 元素等特性来实现网页中响应式图像的解决方案。
      </td>
    </tr>
  </tbody>
</table>

## 为什么要使用响应式图片？

让我们来看一个典型的场景，一个典型的网站头部可能会有一张图片，图片下面可能会有一些内容的图片。头部图片很可能会横跨整个头部的宽度，而内容图片会适应某个内容区块的宽度，以下是个简单的例子：

![Our example site as viewed on a wide screen - here the first image works ok, as it is big enough to see the detail in the center.](picture-element-wide.png)

这个网页在宽屏设备上表现良好，例如笔记本电脑或台式机（你可以[查看在线演示](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html)并且在 GitHub 上查看[源代码](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html)）。我们不会在这节课中详细讨论它的 CSS，只说以下几个要点：

- 正文内容设置了 1200 像素的最大宽度——在大于该宽度的视口中，正文会保持 1200 像素，并将其本身置于可用空间的中间；在小于该宽度的视口中，正文的宽度是视口宽度的 100%。
- 头部图片已经被设置为，无论头部宽度如何变化，它的中心始终处于头部的中间，这样如果网站显示在窄屏上，图片中心的重要细节（里面的人）仍然可以看到，而两边超出的部分就消失了。图片的高度是 200px。
- 内容图片已经被设置为，如果 body 元素比图片更小，图片就会随之缩小，这样图片总是在 body 中，而不会溢出。

然而，当你尝试在一个小屏幕设备上查看本页面时，问题就会产生。下图中网页的头部看起来还可以，但它在移动设备上占据了过多的屏幕高度，在这个尺寸下，你很难看到第一张内容图片中的两个人脸。

![Our example site as viewed on a narrow screen; the first image has shrunk to the point where it is hard to make out the detail on it.](non-responsive-narrow.png)

一个改进的方法是，当网站在狭窄的屏幕上观看时，显示一张只含重要细节的裁剪版本的图片，在像平板电脑这样的中等宽度的屏幕设备上显示时，显示另一张裁剪的图片。但为各种布局提供不同版本的裁剪图片，会产生众所周知的**美术设计问题**。

此外，如果是在小屏手机屏幕上显示网页，那么没有必要在网页上嵌入这样大的图片，反过来说，一张小的[位图](/zh-CN/docs/Glossary/Raster_image)，如果它的显示尺寸大于原始尺寸，看起来就会有颗粒感（位图有固定数量的像素宽，固定数量的像素高，与[矢量图](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)外观相同，但本质不同）。这被称之为**分辨率切换问题**。

换言之，没有必要把一张大图显示在比它的实际尺寸小得多的屏幕上，这样做会浪费带宽——当可以在设备上使用小图像时，手机用户尤其不愿意因为下载用于桌面的大图像而浪费带宽。理想的情况是用户浏览器有不同分辨率的图片可用，这样可以根据不同设备的屏幕大小载入合适分辨率的图片。

让事情变得复杂的是，有些设备有很高的分辨率，为了显示得更出色，可能需要超出你预料的更大的图片。这在本质上是一样的问题，但在具体场景中有所不同。

你可能会认为矢量图形能解决这些问题，在某种程度上是这样的——它们无论是文件大小还是比例都合适，无论在哪里你都应该尽可能地使用它们。然而，它们并不适合所有的图片类型，虽然在简单图形、图案、界面元素等方面较好，但如果是有大量的细节的照片，创建矢量图像会变得非常复杂。像 JPEG 这样格式的位图会更适合用作上面例子中的图片来显示。

当 web 面世时，这样的问题并不存在，在上世纪 90 年代中期，仅仅可以通过笔记本电脑和台式机来浏览 web 页面，所以浏览器开发者和规范制定者甚至没有想到要实现这种解决方式（响应式开发）。最近应用的响应式图片技术，通过让浏览器提供多个图像文件来解决上述问题，比如使用相同显示效果的图片但包含多个不同的分辨率（分辨率切换），或者使用不同的图片以适应不同的空间分配（美术设计）。

> **备注：** 在这篇文章中讨论的新特性——[`srcset`](/zh-CN/docs/Web/HTML/Element/img#srcset)/[`sizes`](/zh-CN/docs/Web/HTML/Element/img#sizes)/{{htmlelement("picture")}}——都已经被新版本的现代浏览器和移动浏览器所支持（包括 Edge，而不是 IE）。

## 如何创建响应式图片？

在这一部分中，我们会探究上面提出的两个问题，演示如何用 HTML 的响应式图片来解决。需要注意的是，如以上示例所示，在本节中我们将专注于 HTML 的 {{htmlelement("img")}} 元素，但网站头部的图片仅是装饰性的，实际上应该要用 CSS 的背景图片来实现。[CSS 是比 HTML 更好的响应式设计的工具](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/)，我们会在未来的 CSS 模块中讨论。

### 分辨率切换：不同的尺寸

那么，我们想要用分辨率切换解决什么问题呢？我们想要显示相同的图片内容，依据设备来决定显示得更大或更小——这是我们在示例中的第二个内容图像的情况。标准的 {{htmlelement("img")}} 元素传统上仅仅让你给浏览器指定唯一的资源文件。

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

我们可以使用两个新的属性——[`srcset`](/zh-CN/docs/Web/HTML/Element/img#srcset) 和 [`sizes`](/zh-CN/docs/Web/HTML/Element/img#sizes)——来提供更多额外的资源图像和提示，帮助浏览器选择合适的一个资源。你可以从 Github 上的 [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) 中查看示例（也可以查看它的[源代码](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)）：

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

`srcset` 和 `sizes` 属性看起来很复杂，但是如果你按照上图所示进行格式化，那么他们并不是很难理解，每一行有不同的属性值。每个值都包含逗号分隔的列表，列表的每一部分由三个子部分组成。让我们来看看每一个内容：

**`srcset`** 定义了浏览器可选择的图片设置以及每个图片的大小，每张图片信息的设置和前一个用逗号隔开，每个设置要写：

1. 一个**文件名**（`elva-fairy-480w.jpg`）
2. 一个空格
3. **图片的固有宽度**（以像素为单位）（480w）。注意，这里使用宽度描述符 `w`，而非你可能期望的 `px`。图片的[固有宽度](/zh-CN/docs/Glossary/Intrinsic_Size)是它的真实大小，可以通过检查你电脑上的图片文件找到（例如，在 Mac 上，你可以在 Finder 上选择这个图片，然后按

   <kbd>Cmd</kbd>

   \+

   <kbd>I</kbd>

   来显示信息）。

**`sizes`** 定义了一组媒体条件（例如屏幕宽度）并且指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择——这就是我们之前提到的提示。上面的示例中，在每个逗号之前，我们写：

1. 一个**媒体条件**（`(max-width:600px)`）——你会在 [CSS 主题](/zh-CN/docs/Learn/CSS)中学到更多相关的知识，这里我们说一个媒体条件描述了一种屏幕可能处于的状态。上面示例中，我们说“当视口的宽度小于等于 600px 时”。
2. 一个空格
3. 当媒体条件为真时，图像将填充的**槽的宽度**（`480px`）

> **备注：** 对于槽的宽度，你也许会提供一个固定值（如 `480px`），或者是一个相对于视口的宽度（如 `50vw`），但不是百分比。你也许已经注意到最后一个槽的宽度是没有媒体条件的（当没有任何一个媒体条件为真时，它默认生效）。当浏览器成功匹配第一个媒体条件的时候，剩下所有的条件都会被忽略，所以要注意媒体条件的顺序。

有了这些属性后，浏览器会：

1. 检查设备宽度
2. 检查 `sizes` 列表中哪个媒体条件是第一个为真
3. 查看给予该媒体查询的槽大小
4. 加载 `srcset` 列表中引用的最接近所选的槽大小的图像

就是这样！所以在这里，如果支持浏览器以 480px 的视口来加载页面，那么 `(max-width: 600px)` 的媒体条件为真，因此 `480px` 的槽会被选择，继而将加载 `elva-fairy-480w.jpg`，因为它的固有宽度（`480w`）最接近于槽宽度。800px 的照片大小为 128KB 而 480px 版本仅有 63KB 大小——节省了 65KB。现在想象一下，如果这是一个有很多图片的页面，使用这种技术会节省移动端用户的大量带宽。

> **备注：** 在桌面端浏览器测试上面的示例时，如果你把浏览器设到最小宽度，却没有加载更小的图片，请检查一下此时的视口是什么（你可以打开浏览器的 JavaScript 控制台，输入 `document.querySelector('html').clientWidth` 来获得近似视口宽度）。不同的浏览器设置了窗口可以缩小到的最小宽度，它可能比你想的更宽一点。使用移动端浏览器测试时，可以使用类似 Firefox 的 `about:debugging` 页这样的工具，使用桌面端开发者工具检查在移动端加载的页面。你可以在 Firefox 开发者工具中的 [Network 标签](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)中查看加载了哪张图片。

不支持这些特性的旧版本浏览器，会忽略这些属性，它们直接越过并按常规加载 [`src`](/zh-CN/docs/Web/HTML/Element/img#src) 属性引用的图像文件。

> **备注：** 在 HTML 文件中的 {{htmlelement("head")}} 标签里，你将会找到这一行代码 `<meta name="viewport" content="width=device-width">`：这行代码会强制让手机浏览器采用它们真实可视窗口的宽度来加载网页（有些手机浏览器会提供不真实的可视窗口宽度，用比真实视口更大的宽度加载网页，然后再缩小加载的页面，这样的做法对响应式图片或其他响应式设计，没有任何帮助）。

### 分辨率切换：相同的尺寸，不同的分辨率

如果你要支持多分辨率显示，但希望每个人在屏幕上看到的图片的实际尺寸是相同的，你可以使用 `srcset` 结合 x 语法——一种更简单的语法——而不用 `sizes`，来让浏览器选择合适分辨率的图片。你可以参考这个示例 [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)（或查看[源代码](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)）：

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

![A picture of a little girl dressed up as a fairy, with an old camera film effect applied to the image](resolution-example.png)

在这个例子中，下面的 CSS 会应用在图片上，所以它的宽度在屏幕上是 320 像素（也称作 CSS 像素）：

```css
img {
  width: 320px;
}
```

在这种情况下，就不用到 `sizes` 属性——浏览器计算出正在显示的显示器的分辨率，然后显示 `srcset` 引用的最适合的图片。因此，如果访问页面的设备具有标准/低分辨率显示，用一个设备像素表示一个 CSS 像素，那么会加载 `elva-fairy-320w.jpg`（1x 是默认值，所以你不需要写出来）。如果设备有高分辨率，用两个或更多的设备像素表示一个 CSS 像素，会加载 `elva-fairy-640w.jpg`。640px 的图像大小为 93KB，320px 的图像的大小仅仅有 39KB。

### 美术设计

回顾一下，**美术设计问题**涉及到更改显示的图像以适应不同的显示尺寸。例如，如果在桌面浏览器上的一个网站上显示一张大的、横向的照片，照片中央有个人，然后当在移动端浏览器上浏览这个网站时，照片会缩小，这时照片上的人会变得非常小，看起来会很糟糕。这种情况可能在移动端显示一个更小的、聚焦到这个人的肖像图会更好。{{htmlelement("picture")}} 元素允许我们这样实现。

回到我们最初的例子 [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html)，我们有一张图片需要进行美术设计：

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

让我们改用 {{htmlelement("picture")}}！就像 [`<video>` 和 `<audio>`](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)，{{htmlelement("picture")}} 元素包含了一些 {{htmlelement("source")}} 元素，它使浏览器在不同资源间做出选择，紧跟着的是最重要的 {{htmlelement("img")}} 元素。[responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) 的代码如下：

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- `<source>` 元素包含一个 `media` 属性，这一属性包含一个媒体条件——就像第一个 `srcset` 例子，这些条件来决定哪张图片会显示——第一个条件返回真，那么就会显示这张图片。在上述示例中，如果视窗的宽度为 799px 或更少，第一个 `<source>` 元素的图片就会显示。如果视窗的宽度是 800px 或更大，就显示第二张图片。
- `srcset` 属性包含要显示图片的路径。请注意，正如我们在 `<img>` 上面看到的那样，`<source>` 可以使用引用多个图像的 `srcset` 属性，还有 `sizes` 属性。所以你可以通过一个 `<picture>` 元素提供多个图片，不过也可以给每个图片提供多分辨率的图片。实际上，你可能不想经常做这样的事情。
- 在任何情况下，你都必须在 `</picture>` 之前正确提供一个 `<img>` 元素以及它的 `src` 和 `alt` 属性，否则不会有图片显示。当媒体条件都不返回真的时候（你可以在这个例子中删除第二个 `<source>` 元素），它会显示默认图片；如果浏览器不支持 `<picture>` 元素时，它可以作为后备方案。

这样的代码允许我们在宽屏和窄屏上都能显示合适的图片，如下所示：

![Our example site as viewed on a wide screen - here the first image works OK, as it is big enough to see the detail in the center.](picture-element-wide.png)![Our example site as viewed on a narrow screen with the picture element used to switch the first image to a portrait close up of the detail, making it a lot more useful on a narrow screen](picture-element-narrow.png)

> **备注：** 你应该仅仅当在需要美术设计的场景中使用 `media` 属性；当你使用 `media` 时，不要在 `sizes` 属性中也提供媒体条件。

### 为什么我们不用 CSS 或 JavaScript 来实现？

当浏览器开始加载一个页面，它会在主解析器开始加载和解析页面的 CSS 和 JavaScript 之前先下载（预加载）任意的图片。这种有用的机制总体上会减少页面加载时间，但是它对响应式图片没有帮助，所以需要类似 `srcset` 的实现方法。因为你不能先加载好 {{htmlelement("img")}} 元素后，再用 JavaScript 检测可视窗口的宽度，如果觉得大小不合适，再动态地加载小的图片替换已经加载好的图片，这样的话，原始的图像已经被加载了，然后你又加载了小的图像，这反而更不“响应”了。

### 大胆的使用现代图像格式

像 [WebP](/zh-CN/docs/Web/Media/Formats/Image_types#webp_image) 和 [AVIF](/zh-CN/docs/Web/Media/Formats/Image_types#avif_image) 等新型图片格式可以做到高质量的同时保持较低的文件大小，如今这些格式已有相对广泛的浏览器支持，且几乎没有“历史包袱”。

`<picture>` 让我们能继续满足老式浏览器的需要。你可以在 `type` 属性中提供 MIME 类型，这样浏览器就能立即拒绝其不支持的文件类型：

```html
<picture>
  <source type="image/svg+xml" srcset="pyramid.svg" />
  <source type="image/webp" srcset="pyramid.webp" />
  <img
    src="pyramid.png"
    alt="regular pyramid built from four equilateral triangles" />
</picture>
```

- 不要使用 `media` 属性，除非你也需要用到美术设计。
- 在 `<source>` 元素中，你只可以引用在 `type` 中声明的文件类型。
- 像之前一样，如果必要，你可以在 `srcset` 和 `sizes` 中使用逗号分割的列表。

## 实践学习：实现你自己的响应式图片

在本次实践学习中，我们希望你能勇敢地独立完成（大部分）。我们希望你使用 `<picture>` 来实现自己美术设计上的宽/窄屏显示适配，以及使用 `srcset` 切换不同的分辨率。

1. 写一些简单 HTML 来包含你的代码（如果你喜欢，也可以使用 `not-responsive.html` 作为起点）。
2. 找一张漂亮的宽屏风景图像，其中需要包含一些细节。使用图像编辑器创建一个网页大小的版本。然后裁剪一下，显示一个更小的部分，其中包含放大的细节，然后创建第二张图片（差不多 480px 宽度比较好）。
3. 使用 `<picture>` 元素来实现艺术图片切换器！
4. 创建不同大小的多张图片，每个图片的图像都是一样的。
5. 使用 `srcset`/`size` 来创建一个分辨率切换器的示例，可以在不同的分辨率的情况下，提供相同尺寸的图像，或者在不同的视图大小的情况下，提供不同尺寸大小的图像。

## 小结

这章节中充满了响应式图像——希望你享受学习新技术的过程。总而言之，我们讨论了两个不同的问题：

- **美术设计**：当你想为不同布局提供不同剪裁的图片——比如在桌面布局上显示完整的、横向图片，而在手机布局上显示一张剪裁过的、突出重点的纵向图片，可以用 {{htmlelement("picture")}} 元素来实现。
- **分辨率切换**：当你想要为窄屏提供更小的图片时，因为小屏幕不需要像桌面端显示那么大的图片；以及你想为高/低分辨率屏幕提供不同分辨率的图片时，都可以通过[矢量图](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)（SVG 图片）、[`srcset`](/zh-CN/docs/Web/HTML/Element/img#srcset) 以及 [`sizes`](/zh-CN/docs/Web/HTML/Element/img#sizes) 属性来实现。

此时整个[多媒体与嵌入](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding)模块接近尾声！在继续下一个模块之前，你现在唯一要做的就是进行一次[多媒体与嵌入的测试](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)，看看你学得怎样。希望你玩得开心！

## 参见

- [Jason Grigsby 对响应式图片的出色介绍](http://blog.cloudfour.com/responsive-images-101-definitions)
- [响应式图片：如果你只是改变分辨率，就用 srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)——包含了更多关于浏览器如何选择显示图片的解释
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}

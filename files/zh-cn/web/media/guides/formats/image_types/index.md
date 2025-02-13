---
title: 图像文件类型与格式指南
slug: Web/Media/Guides/Formats/Image_types
---

在本指南中，我们将介绍 web 浏览器普遍支持的图像文件类型，并提供一些关于它们的信息与见解，帮助你为你的网站选择最合适的图像格式。

## 常见图像文件类型

下面列出了网络上最常用的图像文件格式。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">缩写</th>
      <th scope="row">文件格式</th>
      <th scope="col">MIME 类型</th>
      <th scope="col">文件扩展名</th>
      <th scope="col">摘要</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <a href="#apng（动态可移植网络图形）">APNG</a>
      </th>
      <th scope="row">动态可移植网络图形</th>
      <td><code>image/apng</code></td>
      <td><code>.apng</code></td>
      <td>
        是无损动画序列的良好选择（GIF 性能较差）。AVIF 和 WebP 性能更好，但浏览器支持较少。<br />
        <strong>以下浏览器支持</strong>：Chrome、Edge、Firefox、Opera、Safari。
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#avif_图像">AVIF</a></th>
      <th scope="row">AV1 图像档案格式</th>
      <td><code>image/avif</code></td>
      <td><code>.avif</code></td>
      <td>
        <p>
          由于其性能高，且无需版税，是图像和动画图像的理想选择。与 PNG 或 JPEG 相比，它的压缩效果更好，支持更高的色深、动画帧、透明度等。请注意，在使用 AVIF 时，应包含浏览器支持更好的回退格式（也就是说，要使用 <code><a href="/zh-CN/docs/Web/HTML/Element/picture">&#x3C;picture></a></code> 元素）。<br />
          <strong>以下浏览器支持</strong>：Chrome、Firefox、Opera、Safari。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#gif（图像互换格式）">GIF</a></th>
      <th scope="row">图像互换格式</th>
      <td><code>image/gif</code></td>
      <td><code>.gif</code></td>
      <td>
        是简单图像和动画的不错选择。无损<em>和</em>有索引的静态图像首选 PNG，动画序列可考虑 WebP、AVIF 或 APNG。<br />
        <strong>以下浏览器支持</strong>：Chrome、Edge、Firefox、IE、Opera、Safari。
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="#jpeg（联合图像专家小组图像）">JPEG</a>
      </th>
      <th scope="row">联合图像专家小组图像</th>
      <td><code>image/jpeg</code></td>
      <td>
        <code>.jpg</code>、<code>.jpeg</code>、<code>.jfif</code>、<code>.pjpeg</code>、<code>.pjp</code>
      </td>
      <td>
        <p>
          静态图像有损压缩的理想选择（目前最流行）。如果需要更精确地再现图像，则首选 PNG；如果需要更好的再现效果和更高的压缩率，则首选 WebP/AVIF。<br />
          <strong>以下浏览器支持</strong>：Chrome、Edge、Firefox、IE、Opera、Safari。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#png（便携式网络图形）">PNG</a></th>
      <th scope="row">便携式网络图形</th>
      <td><code>image/png</code></td>
      <td><code>.png</code></td>
      <td>
        <p>
          与 JPEG 相比，PNG 能更精确地再现源图像，或在需要透明的情况下更受青睐。WebP/AVIF 可提供更好的压缩和再现效果，但浏览器的支持比较有限。<br />
          <strong>以下浏览器支持</strong>：Chrome、Edge、Firefox、IE、Opera、Safari。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#svg（可缩放矢量图形）">SVG</a></th>
      <th scope="row">可缩放矢量图形</th>
      <td><code>image/svg+xml</code></td>
      <td><code>.svg</code></td>
      <td>
        矢量图像格式；适用于用户界面元素、图标、图表等，必须以不同尺寸精确绘制。<br />
        <strong>以下浏览器支持</strong>：Chrome、Edge、Firefox、IE、Opera、Safari。
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#webp_图像">WebP</a></th>
      <th scope="row">Web 图像格式</th>
      <td><code>image/webp</code></td>
      <td><code>.webp</code></td>
      <td>
        是静止图像和动画图像的绝佳选择。WebP 的压缩效果比 PNG 或 JPEG 好得多，而且支持更高的色深、动画帧和透明度等。AVIF 的压缩效果稍好，但在浏览器中的支持度不高，而且不支持渐进式渲染。<br />
        <strong>以下浏览器支持</strong>：Chrome、Edge、Firefox、Opera、Safari。
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 与 WebP 和 AVIF 等较新的格式相比，PNG、JPEG 和 GIF 等较老的格式性能较差，但却能获得更广泛的“历史”浏览器支持。较新的图像格式越来越受欢迎，因为不支持这些格式的浏览器变得越来越无关紧要（即市场份额几乎为零）。

下面列出了 web 上出现的图像格式，但 web 内容应避免使用这些格式（通常是因为这些格式没有广泛的浏览器支持，或者有更好的替代格式）。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">缩写</th>
      <th scope="row">文件格式</th>
      <th scope="col">MIME 类型</th>
      <th scope="col">文件扩展名</th>
      <th scope="col">支持的浏览器</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#bmp（位图文件）">BMP</a></th>
      <th scope="row">位图文件</th>
      <td><code>image/bmp</code></td>
      <td><code>.bmp</code></td>
      <td>Chrome、Edge、Firefox、IE、Opera、Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#ico（Microsoft_Windows_图标）">ICO</a></th>
      <th scope="row">Microsoft 图标</th>
      <td><code>image/x-icon</code></td>
      <td><code>.ico</code>、<code>.cur</code></td>
      <td>Chrome、Edge、Firefox、IE、Opera、Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#tiff（标签图像文件格式）">TIFF</a></th>
      <th scope="row">标签图像文件格式</th>
      <td><code>image/tiff</code></td>
      <td><code>.tif</code>、<code>.tiff</code></td>
      <td>Safari</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 每种图像格式的缩写可链接到有关该格式的较长描述、其功能和详细的浏览器兼容性信息（包括哪些版本引入了支持以及后来可能引入的特定特殊功能）。

> [!NOTE]
> Safari 11.1 新增了使用视频格式替代 gif 动画的功能，而其他浏览器没有添加这方面的支持。详见 [Chromium bug](https://crbug.com/791658) 和 [Firefox bug](https://bugzil.la/895131) 以了解更多信息。

## 图像文件类型详介

下文将简要介绍 web 浏览器支持的每种图像文件类型。

在下表中，**每分量比特**是指用于表示每种色彩分量的比特数。例如，RGB 颜色深度为 8 表示红、绿、蓝三原色各用 8 位数值表示。另一方面，**比特深度**是指用于表示内存中每个像素的总比特数。

### APNG（动态可移植网络图形）

APNG 是 Mozilla 首次推出的一种文件格式，它扩展了 [PNG](#png（便携式网络图形）) 标准，增加了对动画图像的支持。在概念上，APNG 与已经使用了几十年的动画 GIF 格式相似，但 APNG 的功能更强，它支持多种[颜色深度](https://zh.wikipedia.org/wiki/色彩深度)，而动画 GIF 只支持 8 位[索引颜色](https://zh.wikipedia.org/wiki/索引顏色)。

APNG 适用于无需与其他活动或音轨同步的基本动画，如进度指示器、活动[加载器](https://en.wikipedia.org/wiki/Throbber)和其他动画序列。例如，APNG 是苹果 iMessage 应用程序（和 iOS 上的“信息”应用程序）[创建动画贴纸时支持的格式之一](https://developer.apple.com/imessage/)。它们也常用于 web 浏览器用户界面的动画部分。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/apng</code></td>
    </tr>
    <tr>
      <th scope="row">文件拓展名</th>
      <td><code>.apng</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://wiki.mozilla.org/APNG_Specification"
          >wiki.mozilla.org/APNG_Specification</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>Chrome 59、Edge 12、Firefox 3、Opera 46、Safari 8</td>
    </tr>
    <tr>
      <th scope="row">最高分辨率</th>
      <td>2,147,483,647×2,147,483,647 像素</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">每分量比特（<em>D</em>）</th>
              <th scope="col">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">灰度</th>
              <td>1、2、4、8 和 16</td>
              <td>
                每个像素由一个 <em>D</em> 位值组成，表示灰度像素的亮度。
              </td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由三个 <em>D</em> 位值表示，分别代表红、绿、蓝三色的色阶。
              </td>
            </tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td>1、2、4 和 8</td>
              <td>
                每个像素都是一个 <em>D</em> 位值，表示调色板的索引，调色板包含在 APNG 文件的 <code
                  ><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code
                > 块中；调色板中的颜色都使用 8 位深度。
              </td>
            </tr>
            <tr>
              <th scope="row">带有透明度的灰度值</th>
              <td>8 和 16</td>
              <td>
                每个像素由两个 <em>D</em> 位值表示：灰度像素的强度和表示像素不透明程度的 alpha 样本。
              </td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由四个 <em>D</em> 像素颜色成分组成：红色、绿色、蓝色和表示像素不透明程度的 alpha 样本。
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>无损</td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>
        根据<a href="http://creativecommons.org/licenses/by-sa/3.0/">创作共用署名-相同方式共享许可</a>（<a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>）3.0 或更高版本免费开放。
      </td>
    </tr>
  </tbody>
</table>

### AVIF 图像

AV1 图像文件格式（AVIF）是一种功能强大、开源、免版税的文件格式，它在高效图像文件格式（HEIF）容器中对 AV1 比特流进行编码。

> [!NOTE]
> AVIF 有可能成为在 web 内容中共享图像的“下一件大事”。它具有最先进的特性和性能，却没有阻碍同类替代产品发展的复杂许可和专利使用费的束缚。

AV1 是一种编码格式，最初设计用于在互联网上传输视频。该格式得益于近年来视频编码技术的长足进步，并有可能受益于对硬件渲染的相关支持。不过，在某些情况下它也有缺点，因为视频和图像编码有一些不同的要求。

该格式可以提供：

- 与 JPG 和 PNG 相比，在视觉上相似的压缩水平下，有损压缩效果极佳（例如，有损 AVIF 图像比 JPEG 图像小 50%）。
- 一般来说，AVIF 比 WebP 有更好的压缩效果。对于相同的 JPG 图像集，中值压缩率为 50%，而 WebP 为 30%（资料来源：[AVIF 与 WebP 的对比](https://www.ctrl.blog/entry/webp-avif-comparison.html)（CTRL 博客））。
- 无损压缩。
- 动画/多图像存储（类似于 GIF 动画，但压缩效果更好）
- 支持 Alpha 通道（即透明）。
- _高动态范围（HDR）_：支持存储图像，使图像最亮和最暗部分之间的对比度更大。
- 宽色域：支持包含更大色彩范围的图像。

AVIF 不支持渐进式渲染，因此文件必须完全下载后才能显示。这通常对真实世界的用户体验影响不大，因为 AVIF 文件比同等的 JPEG 或 PNG 文件小得多，因此下载和显示的速度也快得多。文件大小越大，影响就越大，因此应考虑使用支持渐进式渲染的格式。

Chrome、Opera、Safari 和 Firefox 支持 AVIF（Firefox 支持静态图像，但不支持动画），但 Edge 和 IE 不支持。由于支持尚不全面（而且没有什么历史深度），应使用 [`<picture>` 元素](/zh-CN/docs/Web/HTML/Element/picture)（或其他方法）提供 [WebP](#webp_图像)、[JPEG](#jpeg（联合图像专家小组图像）) 或 [PNG](#png（便携式网络图形）) 格式的回退。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/avif</code></td>
    </tr>
    <tr>
      <th scope="row">文件扩展名</th>
      <td><code>.avif</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <p>
          <a href="https://aomediacodec.github.io/av1-avif/"
            >AV1 图像文件格式（AVIF）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        Chrome 85、Opera 71、Firefox 93 和 Safari 16.1
        <ul>
          <li>
            Firefox 93 支持静态图像，色彩空间支持全色和有限范围色彩，图像变换支持镜像和旋转。偏好设置 <a href="/zh-CN/docs/Mozilla/Firefox/Experimental_features#avif_严格合规性">image.avif.compliance_strictness</a> 可用于调整符合规范的严格程度。不支持动态图像。
          </li>
          <li>
            Firefox 77~92 版本需要将首选项 <code>image.avif.enable</code> 设置为 <code>true</code>。更早期版本仅提供基本支持。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>2,147,483,647×2,147,483,647 像素</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <p>
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 比特流 &#x26; 解码过程规范</a>，第 6.4.2 节中提供了色彩模式支持信息：颜色配置语义。
        </p>
        <p>不完全的摘要：</p>
        <ul>
          <li>颜色模式：YUV444、YUV422、YUV420</li>
          <li>灰度支持：YUV400</li>
          <li>位数：8/10/12-bit</li>
          <li>透明度支持</li>
          <li>ICC 配置项支持</li>
          <li>
            NCLX 支持：sRGB、linear sRGB、linear Rec2020、PQ Rec2020、HLG Rec2020、PQ P3、HLG P3 等
          </li>
          <li>Tiling 支持</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>有损压缩和无损压缩</td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>
        免版税。有关许可信息，请访问<a href="https://aomedia.org/license/">版权页面</a>。
      </td>
    </tr>
  </tbody>
</table>

### BMP（位图文件）

**BMP**（**位图图像**）文件类型在 Windows 计算机上最为常见，一般只用于 web 应用程序和内容中的特殊情况。

> [!WARNING]
> 网站内容通常应避免使用 BMP 文件。最常见的 BMP 文件格式将数据表示为未压缩的光栅图像，与 png 或 jpg 图像类型相比，文件大小较大。目前有更高效的 BMP 格式，但并未广泛使用，web 浏览器也很少支持。

BMP 理论上支持多种内部数据表示。最简单也是最常用的 BMP 文件形式是一种未压缩的光栅图像，每个像素占 3 个字节，分别代表其红、绿、蓝三部分，每行用 `0x00` 字节填充，宽度为 4 字节的倍数。

虽然规范中定义了其他数据表示方式，但它们并没有被广泛使用，通常完全没有实现。这些功能包括：支持不同的位深度、索引颜色、alpha 通道和不同的像素顺序（默认情况下，BMP 从左下角向右上角写入，而不是从左上角向右下角写入）。

从理论上讲，BMP 文件支持多种压缩算法，图像数据也可以使用 [JPEG](#jpeg（联合图像专家小组图像）) 或 [PNG](#png（便携式网络图形）) 格式存储。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/bmp</code></td>
    </tr>
    <tr>
      <th scope="row">文件扩展名</th>
      <td><code>.bmp</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        没有规范；不过，微软在 <a href="https://learn.microsoft.com/zh-cn/windows/win32/gdi/bitmap-storage">learn.microsoft.com/zh-cn/windows/win32/gdi/bitmap-storage</a> 提供了格式的通用文档。
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        Chrome、Edge、Firefox、Internet Explorer、Opera 和 Safari 的所有版本。
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>
        32,767×32,767 像素或 2,147,483,647×2,147,483,647 像素，取决于格式版本
      </td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">每分量比特（<em>D</em>）</th>
              <th scope="col">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">灰度</th>
              <td>1</td>
              <td>
                每个比特代表一个像素，可以是黑色或白色。
              </td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由三个值表示，分别代表红色、绿色和蓝色，每个值为 <em>D</em> 位。
              </td>
            </tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td>2、4 和 8</td>
              <td>
                每个像素由一个 2、4 或 8 位的值表示，作为色彩表的索引。
              </td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td><em>n/a</em></td>
              <td>BMP 没有明显的灰度格式。</td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由四个值表示，分别代表红、绿、蓝和 alpha 颜色成分；每个值为 <em>D</em> 位。
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        支持多种压缩方法，包括有损或无损算法
      </td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>
        由 <a href="https://docs.microsoft.com/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a> 记载，虽然微软拥有针对 BMP 的专利，但他们已公布了一项承诺，只要满足特定条件，他们就不会主张其专利权。但这并不等同于许可。BMP 包含在 Windows 元文件格式（<code>.wmf</code>）中。
      </td>
    </tr>
  </tbody>
</table>

### GIF（图像互换格式）

1987 年，CompuServe 在线服务提供商推出了 **[GIF](https://zh.wikipedia.org/wiki/GIF)**（**图像互换格式**）图像文件格式，为其服务的所有成员提供一种可使用的压缩图形格式。GIF 使用 [Lempel-Ziv-Welch](https://zh.wikipedia.org/wiki/LZW)（LZW）算法对 8 位索引彩色图形进行无损压缩。GIF 和 [XBM](#xbm_x_window_系统位图文件) 是 {{Glossary("HTML")}} 最早支持的两种图形格式之一。

GIF 中的每个像素都由一个 8 位值表示，作为 24 位颜色（红、绿、蓝各 8 位）调色板的索引。颜色表的长度总是 2 的幂次（即每个调色板有 2、4、8、16、32、64 或 256 个条目）。要模拟 255 或 256 色以上的颜色，一般使用[抖动](<https://zh.wikipedia.org/wiki/抖動_(數位訊號處理)>)。[技术上可以](https://gif.ski/)对多个图像块进行平铺，每个图像块都有自己的调色板，以创建真彩色图像，但在实践中很少这样做。

像素是不透明的，除非特定的颜色指数被指定为透明，在这种情况下，染上该值的像素是完全透明的。

GIF 支持简单的动画，即在最初的全尺寸帧之后，提供一系列反映每帧图像变化部分的图像。

几十年来，GIF 因其简洁性和兼容性而广受欢迎。在社交媒体时代，GIF 动画开始被广泛用于制作短“视频”、备忘录和其他简单的动画序列。

GIF 的另一个流行特性是支持[隔行扫描](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>)，即像素行的存储顺序会被打乱，因此部分接收的文件可以较低的质量显示。这在网络连接速度较慢时尤其有用。

GIF 是简单图像和动画的不错选择，不过将全彩图像转换为 GIF 可能会导致不理想的抖动。通常情况下，现代内容应使用 [PNG](#png（便携式网络图形）) 制作无损*和*索引静态图像，并应考虑使用 [APNG](#apng（动态可移植网络图形）) 制作无损动画序列。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/gif</code></td>
    </tr>
    <tr>
      <th scope="row">文件扩展名</th>
      <td><code>.gif</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://www.w3.org/Graphics/GIF/spec-gif87.txt">GIF87a 规范</a><br /><a href="https://www.w3.org/Graphics/GIF/spec-gif89a.txt">GIF89a 规范</a>
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        Chrome、Edge、Firefox、Internet Explorer、Opera 和 Safari 浏览器的所有版本
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>65,536×65,536 像素</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">每分量比特（<em>D</em>）</th>
              <th scope="col">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">灰度</th>
              <td><em>n/a</em></td>
              <td>GIF 不包括专用的灰度格式。</td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td><em>n/a</em></td>
              <td>GIF 不支持真彩色像素。</td>
            </tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td>8</td>
              <td>
                GIF 调色板中的每种颜色定义为红、绿、蓝各 8 位（每个像素共 24 位）。
              </td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td><em>n/a</em></td>
              <td>GIF 不提供专用的灰度格式。</td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td><em>n/a</em></td>
              <td>GIF 不支持真彩色像素。</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>无损 (LZW)</td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>
        虽然 GIF 格式本身是开放的，但 LZW 压缩算法在本世纪初之前一直受专利保护。截至 2004 年 7 月 7 日，所有相关专利都已过期，GIF 格式可以自由使用。
      </td>
    </tr>
  </tbody>
</table>

### ICO（Microsoft Windows 图标）

ICO（Microsoft Windows 图标）文件格式是微软为 Windows 系统的桌面图标而设计的。不过，早期版本的 Internet Explorer 允许网站在其根目录中提供名为 `favicon.ico` 的 ICO 文件，以指定一个 **[favicon](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#在你的站点增加自定义图标)**——一个显示在收藏夹菜单和其他对网站图标有用的地方的图标。

一个 ICO 文件可以包含多个图标，文件开头有一个目录，列出每个图标的详细信息。目录之后是图标的数据。每个图标的数据既可以是不带文件头的 [BMP](#bmp（位图文件）) 图像，也可以是完整的 [PNG](#png（便携式网络图形）) 图像（包括文件头）。如果使用 ICO 文件，则应使用 BMP 格式，因为直到 Windows Vista 才添加了对 ICO 文件内的 PNG 的支持，而且这种支持可能并不完善。

> [!WARNING]
> ICO 文件*不应*用于网页内容。此外，如[为不同的使用环境提供图标](/zh-CN/docs/Web/HTML/Element/link#提供用于不同用法上下文的图标)所述，它们作为网站图标的使用已经减少，转而使用 PNG 文件和 {{HTMLElement("link")}} 元素。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td>
        <code>image/vnd.microsoft.icon</code>（官方格式），<code>image/x-icon</code>（由 Microsoft 使用）
      </td>
    </tr>
    <tr>
      <th scope="row">文件扩展名</th>
      <td><code>.ico</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td></td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        Chrome、Edge、Firefox、Internet Explorer、Opera 和 Safari 浏览器的所有版本
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>256×256 像素</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <caption>
            BMP 格式的图标
          </caption>
          <tbody>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">每分量比特（<em>D</em>）</th>
              <th scope="col">描述</th>
            </tr>
            <tr>
              <th scope="row">灰度</th>
              <td>1</td>
              <td>
                每个比特代表一个像素，可以是黑色或白色。
              </td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由三个值表示，分别代表红色、绿色和蓝色，每个值为 <em>D</em> 位。
              </td>
            </tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td>2、4 和 8</td>
              <td>
                每个像素由一个 2、4 或 8 位的值表示，作为色彩表的索引。
              </td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td><em>n/a</em></td>
              <td>BMP 没有明显的灰度格式。</td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td>8 和 16</td>
              <td>
                BMP 没有明显的灰度格式。每个像素由四个值表示，分别代表红、绿、蓝和 Alpha 颜色分量；每个值为 <em>D</em> 位。
              </td>
            </tr>
          </tbody>
        </table>
        <table class="standard-table">
          <caption>
            PNG 格式的图标
          </caption>
          <tbody>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">每分量比特（<em>D</em>）</th>
              <th scope="col">描述</th>
            </tr>
            <tr>
              <th scope="row">灰度</th>
              <td>1、2、4、8 和 16</td>
              <td>
                每个像素由一个 <em>D</em> 位值组成，表示灰度像素的亮度。
              </td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由三个<em>D</em>位值表示，分别代表红、绿、蓝三色的色阶。
              </td>
            </tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td>1、2、4 和 8</td>
              <td>
                每个像素都是一个 <em>D</em> 位值，表示调色板的索引，调色板包含在 APNG 文件的 <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code> 块中；调色板中的颜色都使用 8 位深度。
              </td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由两个 <em>D</em> 位值表示：灰度像素的强度和表示像素不透明程度的 Alpha 样本。
              </td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由四个 <em>D</em> 像素颜色成分组成：红色、绿色、蓝色和表示像素不透明程度的 alpha 样本。
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        BMP 格式的图标几乎总是使用无损压缩，但也有有损压缩方法。PNG 图标始终使用无损压缩。
      </td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>—</td>
    </tr>
  </tbody>
</table>

### JPEG（联合图像专家小组图像）

{{Glossary("JPEG")}}（通常发音为“**jay-peg**”）图像格式是目前最广泛使用的静态图像有损压缩格式。它尤其适用于照片；将有损压缩应用于需要清晰度的内容，如图表，可能会产生令人不满意的效果。

JPEG 实际上是一种压缩照片的数据格式，而不是一种文件类型。JFIF（**J**PEG **F**ile **I**nterchange **F**format）规范描述了我们认为的“JPEG”图像的文件格式。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/jpeg</code></td>
    </tr>
    <tr>
      <th scope="row">文件扩展名</th>
      <td>
        <code>.jpg</code>、<code>.jpeg</code>、<code>.jpe</code>、<code>.jif</code>、<code>.jfif</code>
      </td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td><a href="https://jpeg.org/jpeg/">jpeg.org/jpeg/</a></td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        Chrome、Edge、Firefox、Internet Explorer、Opera 和 Safari 浏览器的所有版本
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>65,535×65,535 像素</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">每分量比特（<em>D</em>）</th>
              <th scope="col">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">灰度</th>
              <td><em>n/a</em></td>
              <td>使用单 Luma 通道（Y）可支持真正的灰度。</td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td>8</td>
              <td>
                每个像素由红、蓝、绿三种颜色分量描述，每种颜色分量为 8 位。
              </td>
            </tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td><em>n/a</em></td>
              <td>JPEG 不提供索引颜色模式。</td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td><em>n/a</em></td>
              <td>JPEG 不支持透明度通道。</td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td><em>n/a</em></td>
              <td>JPEG 不支持透明度通道。</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        有损；基于<a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">离散余弦变换</a>
      </td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>截至 2006 年 10 月 27 日，所有美国专利均已过期。</td>
    </tr>
  </tbody>
</table>

### PNG（便携式网络图形）

{{Glossary("PNG")}}（读作“**ping**”）图像格式使用无损压缩，同时支持比 [GIF](#gif（图像互换格式）) 更高的颜色深度，效率更高，并具有完全支持 alpha 透明度的特点。

PNG 受广泛支持，所有主要浏览器都完全支持其特性。Internet Explorer 在第 4-5 版中引入了对 PNG 的支持，但直到 IE 9 才完全支持该特性，并且在其间的许多年里出现了许多臭名昭著的错误，包括在曾经风靡一时的 Internet Explorer 6 中。这减缓了 PNG 的应用，但现在它已被普遍使用，尤其是在需要精确复制源图像时。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/png</code></td>
    </tr>
    <tr>
      <th scope="row">文件扩展名</th>
      <td><code>.png</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td><a href="https://www.w3.org/TR/PNG">w3.org/TR/PNG</a></td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">特性</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">基本支持</th>
              <td>1</td>
              <td>12</td>
              <td>1</td>
              <td>5</td>
              <td>3.5.1（Presto）<br />15（Blink）</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">Alpha 通道</th>
              <td>1</td>
              <td>12</td>
              <td>1</td>
              <td>5</td>
              <td>6（Presto）<br />所有（Blink）</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">伽玛校正</th>
              <td>否</td>
              <td>是</td>
              <td>1</td>
              <td>8</td>
              <td>1</td>
              <td>损坏的</td>
            </tr>
            <tr>
              <th scope="row">颜色校正</th>
              <td>否</td>
              <td>是</td>
              <td>3</td>
              <td>9</td>
              <td>否</td>
              <td>否</td>
            </tr>
            <tr>
              <th scope="row">插帧</th>
              <td>否</td>
              <td>?</td>
              <td>1</td>
              <td>损坏的</td>
              <td>3.5.1</td>
              <td>否</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>2,147,483,647×2,147,483,647 像素</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">每分量比特（<em>D</em>）</th>
              <th scope="col">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">灰度</th>
              <td>1、2、4、8 和 16</td>
              <td>
                每个像素由一个 <em>D</em> 位值组成，表示灰度像素的亮度。
              </td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由三个<em>D</em>位值表示，分别代表红、绿、蓝三色的色阶。
              </td>
            </tr>
            <tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td>1、2、4 和 8</td>
              <td>
                每个像素都是一个 <em>D</em> 位值，表示调色板的索引，调色板包含在 APNG 文件的 <code
                  ><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code
                > 块中；调色板中的颜色都使用 8 位深度。
              </td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由两个 <em>D</em> 位值表示：灰度像素的强度和表示像素不透明程度的 Alpha 样本。
              </td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由四个 <em>D</em> 像素颜色成分组成：红色、绿色、蓝色和表示像素不透明程度的 alpha 样本。
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>无损，可选择索引颜色，如 GIF</td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a>（<a href="http://www.lcs.mit.edu/">MIT</a>、<a href="http://www.ercim.org/">ERCIM</a>、<a href="https://www.keio.ac.jp/">Keio</a>)，保留所有权利。W3C
        <a href="https://www.w3.org/policies/#disclaimers">免责声明</a>、<a href="https://www.w3.org/policies/#trademarks">商标</a>、<a href="https://www.w3.org/copyright/document-license/">文档使用</a>和<a href="https://www.w3.org/copyright/software-license/">软件授权</a>适用。没有已知的专利使用费。
      </td>
    </tr>
  </tbody>
</table>

### SVG（可缩放矢量图形）

SVG 是一种基于 [XML](/zh-CN/docs/Glossary/XML) 的[矢量图形](https://zh.wikipedia.org/wiki/矢量图形)格式，它将图像的内容指定为一系列绘图命令，这些命令可以创建形状、线条、应用颜色、滤镜等。SVG 文件非常适合用于图表、图标和其他可精确绘制任何尺寸的图像。因此，SVG 在现代网页设计的用户界面元素中很受欢迎。

SVG 文件是包含源代码的文本文件，解释后可绘制所需的图像。例如，此示例定义了一个初始大小为 100 x 100 单位的绘图区域，其中包含一条斜穿方框的线：

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

在网页内容中使用 SVG 有两种方式：

1. 你可以直接在 HTML 中写入 {{SVGElement("svg")}} 元素，包含 [SVG 元素](/zh-CN/docs/Web/SVG/Element)来绘制图像。
2. 你可以在任何可以使用其他图像类型的地方显示 SVG 图像，包括使用 {{HTMLElement("img")}} 和 {{HTMLElement("picture")}} 元素、{{cssxref("background-image")}} CSS 属性等。

对于可以使用一系列绘图命令来表示的图像来说，SVG 是一个理想的选择，尤其是当图像的渲染尺寸未知或可能变化时，因为 SVG 可以平滑地缩放到所需的尺寸。对于严格意义上的位图或照片图像，SVG 通常并不适用，尽管可以在 SVG 中包含位图图像。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/svg+xml</code></td>
    </tr>
    <tr>
      <th scope="row">文件扩展名</th>
      <td><code>.svg</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td><a href="https://www.w3.org/TR/SVG2">w3.org/TR/SVG2</a></td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">特性</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">SVG 支持</th>
              <td>4</td>
              <td>12</td>
              <td>3</td>
              <td>9</td>
              <td>10（Presto）<br />15（Blink）</td>
              <td>3.2</td>
            </tr>
            <tr>
              <th scope="row">
                SVG 作为图像（{{HTMLElement("img")}} 等）
              </th>
              <td>28</td>
              <td>12</td>
              <td>4</td>
              <td>9</td>
              <td>10（Presto）<br />15（Blink）</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>无限制</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        SVG 中的颜色是使用 <a href="/zh-CN/docs/Web/CSS/color_value">CSS 颜色语法</a>指定的。
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        SVG 源可以在传输过程中使用 <a href="/zh-CN/docs/Web/HTTP/Compression">HTTP 压缩技术</a>进行压缩，也可以在磁盘上以 <code>.svgz</code> 文件的形式进行压缩。
      </td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a>（<a
          href="http://www.lcs.mit.edu/"
          >MIT</a
        >、<a href="http://www.ercim.org/">ERCIM</a>、<a href="https://www.keio.ac.jp/">Keio</a>、<a href="https://ev.buaa.edu.cn/">Beihang</a>），保留所有权利。W3C
        <a href="https://www.w3.org/policies/#disclaimers">责任</a>、<a href="https://www.w3.org/policies/#trademarks">商标</a>、<a href="https://www.w3.org/copyright/document-license/">文档使用</a>和<a href="https://www.w3.org/copyright/software-license/">软件授权</a>适用。没有已知的专利使用费。
      </td>
    </tr>
  </tbody>
</table>

### TIFF（标签图像文件格式）

[TIFF](https://zh.wikipedia.org/wiki/TIFF) 是一种光栅图形文件格式，用于存储扫描照片，但也可以是任何类型的图像。这是一种有点“重”的格式，因为 TIFF 文件往往比其他格式的图像要大。这是因为通常包含元数据，而且大多数 TIFF 图像要么未经压缩，要么使用压缩算法，压缩后的文件仍然相当大。

TIFF 支持多种压缩方法，但最常用的是传真软件使用的 CCITT 第 4 组（对于较早的传真系统，则为第 3 组）压缩系统，以及 LZW 和有损 JPEG 压缩。

TIFF 文件中的每个值都使用其**标签**（表示信息的类型，如图像的宽度）和**类型**（表示数据的存储格式）来指定，然后是要分配给该标签的数组值的长度（所有属性都存储在数组中，即使是单个值）。这样，相同的属性就可以使用不同的数据类型。例如，图像的宽度 `ImageWidth` 使用标签 `0x0100` 存储，是一个单项数组。通过指定类型 3（`SHORT`），`ImageWidth` 的值将存储为 16 位值：

| 标签                     | 类型                | 大小                     | 值                   |
| ------------------------ | ------------------- | ------------------------ | -------------------- |
| `0x0100`（`ImageWidth`） | `0x0003`（`SHORT`） | `0x00000001`（1 个条目） | `0x0280`（640 像素） |

指定类型 4（`LONG`）可将宽度存储为 32 位值：

| 标签                     | 类型               | 大小                     | 值                       |
| ------------------------ | ------------------ | ------------------------ | ------------------------ |
| `0x0100`（`ImageWidth`） | `0x0004`（`LONG`） | `0x00000001`（1 个条目） | `0x00000280`（640 像素） |

单个 TIFF 文件可包含多个图像；例如，可用于表示多页文件（如多页扫描文件或收到的传真）。不过，读取 TIFF 文件的软件只需支持第一个图像。

TIFF 不仅支持 RGB，还支持多种色彩空间。这些空间包括 CMYK、YCbCr 等，这使得 TIFF 成为存储用于印刷、电影或电视媒体的图像的良好选择。

很久以前，一些浏览器支持在网页内容中使用 TIFF 图像；但如今，你需要使用特殊的库或浏览器插件才能做到这一点。因此，TIFF 文件在网页内容中并不实用，但在分发照片和其他用于精确编辑或打印的艺术品时，提供可下载的 TIFF 文件是很常见的。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/tiff</code></td>
    </tr>
    <tr>
      <th scope="row">文件扩展名</th>
      <td><code>.tif</code>、<code>.tiff</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://www.adobe.com/devnet-apps/photoshop/fileformatashtml"
          >https://www.adobe.com/devnet-apps/photoshop/fileformatashtml/#50577413_pgfId-1035272</a>
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        没有浏览器集成对 TIFF 的支持；其价值在于作为一种下载格式
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>4,294,967,295×4,294,967,295 像素（理论值）</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">每分量比特（<em>D</em>）</th>
              <th scope="col">描述</th>
            </tr>
            <tr>
              <th scope="row">Bilevel</th>
              <td>1</td>
              <td>
                双字节 TIFF 每个字节存储 8 位，每个像素一位。<code>PhotometricInterpretation</code> 字段指定 0 和 1 中哪个是黑色，哪个是白色。
              </td>
            </tr>
            <tr>
              <th scope="row">灰度</th>
              <td>4 和 8</td>
              <td>
                每个像素由一个 <em>D</em> 位值组成，表示灰度像素的亮度。
              </td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td>8</td>
              <td>
                所有真彩色 RGB 图像都使用红、绿、蓝各 8 位来存储。
              </td>
            </tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td>4 和 8</td>
              <td>
                每个像素都是 <code>ColorMap</code> 记录的索引，该记录定义了图像中使用的颜色。颜色地图列出了所有红色值，然后是所有绿色值，最后是所有蓝色值（而不是 <code>rgb, rgb, rgb…</code>）。
              </td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td>4 和 8</td>
              <td>
                通过在 <code>SamplesPerPixel</code> 字段中指定每个像素有 3 个以上的采样点，并指明 Alpha 类型（1 表示关联的、预乘的 Alpha 分量，2 表示非关联的 Alpha（单独的哑光）），可以添加 Alpha 信息；但是，TIFF 文件中很少使用 Alpha 通道，用户的软件可能也不支持。
              </td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td>8</td>
              <td>
                通过在 <code>SamplesPerPixel</code> 字段中指定每个像素有 3 个以上的采样点，并指明 Alpha 类型（1 表示关联的、预乘的 Alpha 分量，2 表示非关联的 Alpha（单独的哑光）），可以添加 Alpha 信息；但是，TIFF 文件中很少使用 Alpha 通道，用户的软件可能也不支持。
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        大多数 TIFF 文件未经压缩，但支持无损 PackBits 和 LZW 压缩，以及有损 JPEG 压缩。
      </td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>
        无需许可证（除了与你可能使用的库相关的许可证）；所有已知专利均已过期。
      </td>
    </tr>
  </tbody>
</table>

### WebP 图像

WebP 支持通过基于 VP8 视频编解码器的预测编码进行有损压缩，以及通过替换重复数据进行无损压缩。有损 WebP 图像比视觉上压缩级别相似的 JPEG 图像平均小 25-35%。无损 WebP 图像通常比 PNG 格式的相同图像小 26%。

WebP 还支持动画：在有损 WebP 文件中，图像数据由 VP8 比特流表示，其中可能包含多个帧。无损 WebP 包含描述动画的 `ANIM` 块和表示动画序列一帧的 `ANMF` 块。支持循环播放。

WebP 目前已在主要网络浏览器的最新版本中获得广泛支持，但还没有深入的历史支持。需要提供 [JPEG](#jpeg（联合图像专家小组图像）) 或 [PNG](#png（便携式网络图形）) 格式的回退，例如 [`<picture>` 元素](/zh-CN/docs/Web/HTML/Element/picture)。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/webp</code></td>
    </tr>
    <tr>
      <th scope="row">文件扩展名</th>
      <td><code>.webp</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <p>
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF 容器规范</a><br />{{RFC(6386, "VP8 Data Format and Decoding Guide")}}（有损压缩）<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP 无损比特流规范</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">特性</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">有损 WebP 支持</th>
              <td>17</td>
              <td>18</td>
              <td>65</td>
              <td>no</td>
              <td>11.10（Presto）<br />15（Blink）</td>
              <td>14</td>
            </tr>
            <tr>
              <th scope="row">无损 WebP</th>
              <td>Android 23<br />25</td>
              <td>18</td>
              <td>65</td>
              <td>否</td>
              <td>12.10（Presto）<br />15（Blink）</td>
              <td>14</td>
            </tr>
            <tr>
              <th scope="row">动画/th>
              <td>32</td>
              <td>18</td>
              <td>65</td>
              <td>否</td>
              <td>19（Blink）</td>
              <td>14</td>
            </tr>
          </tbody>
        </table>
        <p>WebP 还可用于从 Firefox 96 和 Chrome 50 的画布中<em>导出</em>图像。（参见 <a href="/zh-CN/docs/Web/API/HTMLCanvasElement/toBlob#浏览器兼容性"><code>HTMLCanvasElement.toBlob()</code></a> 以获取更详细的支持情况）</p>
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>16,383×16,383 像素</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        有损 WebP 以 8 位 Y'CbCr 4:2:0 (YUV420) 格式存储图像。无损 WebP 使用 8 位 ARGB 颜色，每个分量 8 位，每个像素共 32 位。
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>无损（Huffman、LZ77 或 color cache codes）或有损（VP8）</td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>无需许可证；源代码可公开获取。</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 在 macOS 版 Safari 上，WebP 支持取决于 Safari 和 macOS 的版本。你需要 Safari 14 或更高版本，以及 macOS Big Sur (11) 或更高版本。

### XBM（X Window 系统位图文件）

XBM（X 位图）文件是网络上最早支持的文件，但现在已不再使用，应避免使用，因为其格式存在潜在的安全隐患。现代浏览器多年来一直不支持 XBM 文件，但在处理旧内容时，你可能会发现其中一些仍然存在。

XBM 使用一段 C 代码将图像内容表示为一个字节数组。每个图像由 2 到 4 个 `#define` 指令组成，提供位图的宽度和高度（如果图像设计为光标，还可选择热点），后面是一个 `unsigned char` 数组，其中每个值包含 8 个 1 位单色像素。

图像宽度必须是 8 像素的倍数。例如，以下代码表示一幅 8 像素乘 8 像素的 XBM 图像，这些像素呈黑白棋盘图案：

```cpp
#define square8_width 8
#define square8_height 8
static unsigned char square8_bits[] = {
  0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55
};
```

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/xbm</code>、<code>image-xbitmap</code></td>
    </tr>
    <tr>
      <th scope="row">文件扩展名</th>
      <td><code>.xbm</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>无</td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>Firefox 1–3.5 和 Internet Explorer 1–5</td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>无限制</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">每分量比特（<em>D</em>）</th>
              <th scope="col">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">灰度</th>
              <td>1</td>
              <td>每个字节包含 8 个 1 位像素。</td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>无损</td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>开源</td>
    </tr>
  </tbody>
</table>

## 选择合适的图像格式

选择最适合你的需求的图像格式可能比视频格式更容易，因为支持广泛的选择较少，而且每种格式往往都有一套特定的用例。

### 照片

有损压缩（取决于编码器的配置）通常能很好地压缩照片。这使得 [JPEG](#jpeg（联合图像专家小组图像）) 和 [WebP](#webp_图像) 成为照片的不错选择，JPEG 的兼容性更好，但 WebP 的压缩效果可能更好。为了最大限度地提高质量和减少下载时间，可以考虑同时提供这两种格式的[回退图像](#提供回退图像)，WebP 是首选，JPEG 是次选。否则，为了兼容性，JPEG 是安全的选择。

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">最佳选择</th>
      <th scope="col">回退方案</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WebP 或 JPEG</td>
      <td>JPEG</td>
    </tr>
  </tbody>
</table>

### 图标

对于图标等较小的图像，应使用无损格式，以避免在大小受限的图像中丢失细节。虽然无损 WebP 是实现这一目的的理想选择，但其支持尚未普及，因此 PNG 是更好的选择，除非你提供[回退选项](#提供回退图像)。如果图像包含的颜色少于 256 种，GIF 也是一种选择，不过 PNG 通过其索引压缩选项（PNG-8）通常可以压缩得更小。

如果图标可以用矢量图形表示，可以考虑使用 [SVG](#svg（可缩放矢量图形）)，因为它可以在各种分辨率和尺寸下缩放，非常适合响应式设计。虽然 SVG 支持良好，但仍值得为旧版浏览器提供 PNG 回退功能。

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">最佳选择</th>
      <th scope="col">回退方案</th>
    </tr>
    <tr>
      <td>SVG、无损 WebP 或 PNG</td>
      <td>PNG</td>
    </tr>
  </thead>
</table>

### 截图

除非你愿意在质量上妥协，否则应该使用无损格式截图。如果截图中有文字，这一点尤为重要，因为在有损压缩的情况下，文字很容易变得模糊不清。

PNG 可能是最好的选择，但无损 WebP 的压缩效果可能更好。

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">最佳选择</th>
      <th scope="col">回退方案</th>
    </tr>
    <tr>
      <td>
        无损 WebP 或 PNG；<br />如果不担心压缩伪影，则使用 JPEG 文件
      </td>
      <td>PNG 或 JPEG；<br />GIF 用于颜色数较少的屏幕截图</td>
    </tr>
  </thead>
</table>

### 示意图、绘图和图表

对于任何可以使用矢量图形表示的图像，SVG 都是最佳选择。否则，应使用 PNG 等无损格式。如果选择有损格式（如 JPEG 或有损 WebP），请仔细权衡压缩级别，以避免导致文本或其他图形变得模糊或不清晰。

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">最佳选择</th>
      <th scope="col">回退方案</th>
    </tr>
    <tr>
      <td><a href="#svg（可缩放矢量图形）">SVG</a></td>
      <td><a href="#png（便携式网络图形）">PNG</a></td>
    </tr>
  </thead>
</table>

## 提供回退图像

虽然标准 HTML {{HTMLElement("img")}} 元素不支持图片的兼容性回退，但 {{HTMLElement("picture")}} 元素支持。`<picture>` 被用作多个 {{HTMLElement("source")}} 元素的包装器，每个元素都指定了不同格式或不同[媒体条件](/zh-CN/docs/Web/CSS/@media)下的图像版本，以及一个 `<img>` 元素，该元素定义了图像的显示位置以及默认或“最兼容”版本的回退。

例如，如果要显示一个最好使用 SVG 显示的图表，但希望提供一个 PNG 或 GIF 图表的回退选项，可以这样做：

```html
<picture>
  <source srcset="diagram.svg" type="image/svg+xml" />
  <source srcset="diagram.png" type="image/png" />
  <img src="diagram.gif" width="620" height="540" alt="数据通道示意图" />
</picture>
```

你可以指定任意数量的 `<source>`，但通常 2 或 3 个就足够了。

## 参见

- [媒体类型和格式指南](/zh-CN/docs/Web/Media/Guides/Formats)
- [Web 媒体技术](/zh-CN/docs/Web/Media)
- [web 视频编解码器指南](/zh-CN/docs/Web/Media/Guides/Formats/Video_codecs)
- {{Glossary("HTML")}} {{HTMLElement("img")}} 和 {{HTMLElement("picture")}} 元素
- CSS {{cssxref("background-image")}} 属性
- {{domxref("HTMLImageElement.Image()", "Image()")}} 构造函数和 {{domxref("HTMLImageElement")}} 接口

---
title: 图像文件类型与格式指南
slug: Web/Media/Formats/Image_types
---

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Media")}}

在本指南中，我们将介绍 web 浏览器普遍支持的图像文件类型，并提供一些关于他们的信息与见解，帮助你为你的网站选择最合适的图像格式。

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
        <a href="#APNG_动态可移植网络图形">APNG</a>
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
      <th scope="row"><a href="#AVIF_图像">AVIF</a></th>
      <th scope="row">AV1 图像档案格式</th>
      <td><code>image/avif</code></td>
      <td><code>.avif</code></td>
      <td>
        <p>
          由于其性能高，且无需版税，是图像和动画图像的理想选择。与 PNG 或 JPEG 相比，它的压缩效果更好，支持更高的色深、动画帧、透明度等。请注意，在使用 AVIF 时，应将回退功能加入到浏览器支持更好的格式中（也就是说，要使用 <code><a href="/zh-CN/docs/Web/HTML/Element/picture">&#x3C;picture></a></code> 元素）。<br />
          <strong>以下浏览器支持</strong>：Chrome、Firefox（只支持静态图，动态图尚未实现）、Opera、Safari。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#GIF_图像互换格式">GIF</a></th>
      <th scope="row">图像互换格式</th>
      <td><code>image/gif</code></td>
      <td><code>.gif</code></td>
      <td>
        是简单图像<em>和</em>动画的不错选择。无损和有索引的静态图像首选 PNG，动画序列可考虑 WebP、AVIF 或 APNG。<br />
        <strong>以下浏览器支持</strong>：Chrome、Edge、Firefox、IE、Opera、Safari。
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="#JPEG_联合图像专家小组图像">JPEG</a>
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
      <th scope="row"><a href="#PNG_便携式网络图形">PNG</a></th>
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
      <th scope="row"><a href="#SVG_可缩放矢量图形">SVG</a></th>
      <th scope="row">可缩放矢量图形</th>
      <td><code>image/svg+xml</code></td>
      <td><code>.svg</code></td>
      <td>
        矢量图像格式；适用于用户界面元素、图标、图表等，必须以不同尺寸精确绘制。<br />
        <strong>以下浏览器支持</strong>：Chrome、Edge、Firefox、IE、Opera、Safari。
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#WebP_图像">WebP</a></th>
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

> **备注：** 与 WebP 和 AVIF 等较新的格式相比，PNG、JPEG 和 GIF 等较老的格式性能较差，但却能获得更广泛的“历史”浏览器支持。较新的图像格式越来越受欢迎，因为不支持这些格式的浏览器变得越来越无关紧要（即市场份额几乎为零）。

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
      <th scope="row"><a href="#BMP_位图文件">BMP</a></th>
      <th scope="row">位图文件</th>
      <td><code>image/bmp</code></td>
      <td><code>.bmp</code></td>
      <td>Chrome、Edge、Firefox、IE、Opera、Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#ICO_Microsoft_Windows_图标">ICO</a></th>
      <th scope="row">Microsoft 图标</th>
      <td><code>image/x-icon</code></td>
      <td><code>.ico</code>、<code>.cur</code></td>
      <td>Chrome、Edge、Firefox、IE、Opera、Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#TIFF_标签图像文件格式">TIFF</a></th>
      <th scope="row">标签图像文件格式</th>
      <td><code>image/tiff</code></td>
      <td><code>.tif</code>、<code>.tiff</code></td>
      <td>Safari</td>
    </tr>
  </tbody>
</table>

> **备注：** 每种图像格式的缩写可链接到有关该格式的较长描述、其功能和详细的浏览器兼容性信息（包括哪些版本引入了支持以及后来可能引入的特定特殊功能）。

> **备注：** Safari 11.1 新增了使用视频格式替代 gif 动画的功能，而其他浏览器没有添加这方面的支持。详见 [Chromium bug](https://crbug.com/791658) 和 [Firefox bug](https://bugzil.la/895131) 以了解更多信息。

## 图像文件类型详介

下文将简要介绍 web 浏览器支持的每种图像文件类型。

在下表中，**每分量比特**是指用于表示每种色彩分量的比特数。例如，RGB 颜色深度为 8 表示红、绿、蓝三原色各用 8 位数值表示。另一方面，**比特深度**是指用于表示内存中每个像素的总比特数。

### APNG（动态可移植网络图形）

APNG 是 Mozilla 首次推出的一种文件格式，它扩展了 [PNG](#png_便携式网络图形) 标准，增加了对动画图像的支持。在概念上，APNG 与已经使用了几十年的动画 GIF 格式相似，但 APNG 的功能更强，它支持多种[颜色深度](https://zh.wikipedia.org/wiki/色彩深度)，而动画 GIF 只支持 8 位[索引颜色](https://zh.wikipedia.org/wiki/索引顏色)。

APNG 适用于无需与其他活动或音轨同步的基本动画，如进度指示器、活动[加载器](https://en.wikipedia.org/wiki/throbber)和其他动画序列。例如，APNG 是苹果 iMessage 应用程序（和 iOS 上的“信息”应用程序）[创建动画贴纸时支持的格式之一](https://developer.apple.com/stickers/)。它们也常用于 web 浏览器用户界面的动画部分。

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
              <td>8 and 16</td>
              <td>
                每个像素由两个 <em>D</em> 位值表示：灰度像素的强度和表示像素不透明程度的 alpha 样本。
              </td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td>8 and 16</td>
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
      <th scope="row">授权</th>
      <td>
        根据<a href="http://creativecommons.org/licenses/by-sa/3.0/">创作共用署名-相同方式共享许可</a>（<a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>）3.0 或更高版本免费开放。
      </td>
    </tr>
  </tbody>
</table>

### AVIF 图像

AV1 图像文件格式（AVIF）是一种功能强大、开源、免版税的文件格式，它在高效图像文件格式（HEIF）容器中对 AV1 比特流进行编码。

> **备注：** AVIF 有可能成为在 web 内容中共享图像的“下一件大事”。它具有最先进的功能和性能，却没有阻碍同类替代产品发展的复杂许可和专利使用费的束缚。

AV1 是一种编码格式，最初设计用于在互联网上传输视频。该格式得益于近年来视频编码技术的长足进步，并有可能受益于对硬件渲染的相关支持。不过，在某些情况下它也有缺点，因为视频和图像编码有一些不同的要求。

该格式可以提供：

- 与 JPG 和 PNG 相比，在视觉上相似的压缩水平下，有损压缩效果极佳（例如，有损 AVIF 图像比 JPEG 图像小 50%）。
- 一般来说，AVIF 比 WebP 有更好的压缩效果。对于相同的 JPG 图像集，中值压缩率为 50%，而 WebP 为 30%（资料来源：[AVIF 与 WebP 的对比](https://www.ctrl.blog/entry/webp-avif-comparison.html)（CTRL博客））。
- 无损压缩。
- 动画/多图像存储（类似于 GIF 动画，但压缩效果更好）
- 支持 Alpha 通道（即透明）。
- *高动态范围（HDR）*：支持存储图像，使图像最亮和最暗部分之间的对比度更大。
- 宽色域：支持包含更大色彩范围的图像。

AVIF 不支持渐进式渲染，因此文件必须完全下载后才能显示。这通常对真实世界的用户体验影响不大，因为 AVIF 文件比同等的 JPEG 或 PNG 文件小得多，因此下载和显示的速度也快得多。文件大小越大，影响就越大，因此应考虑使用支持渐进式渲染的格式。

Chrome、Opera、Safari 和 Firefox 支持 AVIF（Firefox 支持静态图像，但不支持动画），但 Edge 和 IE 不支持。
由于支持尚不全面（而且没有什么历史深度），应使用 [`<picture>` 元素](/zh-CN/docs/Web/HTML/Element/picture)（或其他方法）提供 [WebP](#webp_图像)、[JPEG](#jpeg_联合图像专家小组图像) 或 [PNG](#png_便携式网络图形) 格式的后备。

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
            Firefox 93 支持静态图像，色彩空间支持全色和有限范围色彩，图像变换支持镜像和旋转。偏好设置 <a href="/zh-CN/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a> 可用于调整符合规范的严格程度。不支持动态图像。
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
      <th scope="row">授权</th>
      <td>
        免版税。有关许可信息，请访问 http://aomedia.org/license/ 。
      </td>
    </tr>
  </tbody>
</table>

### BMP（位图文件）

**BMP**（**位图图像**）文件类型在 Windows 计算机上最为常见，一般只用于 web 应用程序和内容中的特殊情况。

> **警告：** 网站内容通常应避免使用 BMP 文件。最常见的 BMP 文件格式将数据表示为未压缩的光栅图像，与 png 或 jpg 图像类型相比，文件大小较大。目前有更高效的 BMP 格式，但并未广泛使用，web 浏览器也很少支持。

BMP 理论上支持多种内部数据表示。最简单也是最常用的 BMP 文件形式是一种未压缩的光栅图像，每个像素占 3 个字节，分别代表其红、绿、蓝三部分，每行用 `0x00` 字节填充，宽度为 4 字节的倍数。

虽然规范中定义了其他数据表示方式，但它们并没有被广泛使用，通常完全没有实现。这些功能包括：支持不同的位深度、索引颜色、alpha 通道和不同的像素顺序（默认情况下，BMP 从左下角向右上角写入，而不是从左上角向右下角写入）。

从理论上讲，BMP 文件支持多种压缩算法，图像数据也可以使用 [JPEG](#jpeg_联合图像专家小组图像) 或 [PNG](#png_便携式网络图形) 格式存储。

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
              <td>8 and 16</td>
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
      <th scope="row">授权</th>
      <td>
        由 <a href="https://docs.microsoft.com/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a> 记载，虽然微软拥有针对 BMP 的专利，但他们已公布了一项承诺，只要满足特定条件，他们就不会主张其专利权。但这并不等同于许可。BMP 包含在 Windows 元文件格式（<code>.wmf</code>）中。
      </td>
    </tr>
  </tbody>
</table>

### GIF（图像互换格式）

In 1987, the CompuServe online service provider introduced the **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**) image file format to provide a compressed graphics format that all members of their service would be able to use.
GIF uses the [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW) algorithm to losslessly compress 8-bit indexed color graphics.
GIF was one of the first two graphics formats supported by {{Glossary("HTML")}}, along with [XBM](#xbm_x_window_system_bitmap_file).

Each pixel in a GIF is represented by a single 8-bit value serving as an index into a palette of 24-bit colors (8 bits each of red, green, and blue). The length of a color table is always a power of 2 (that is, each palette has 2, 4, 8, 16, 32, 64, or 256 entries).
To simulate more than 255 or 256 colors, [dithering](https://en.wikipedia.org/wiki/Dithering) is generally used.
It is [technically possible](https://gif.ski/) to tile multiple image blocks, each with its own color palette, to create truecolor images, but in practice this is rarely done.

Pixels are opaque, unless a specific color index is designated as transparent, in which case pixels colored that value are entirely transparent.

GIF supports simple animation, in which following an initial full-size frame, a series of images reflecting the parts of the image that change with each frame are provided.

GIF has been extremely popular for decades, due to its simplicity and compatibility.
Its animation support caused a resurgence in its popularity in the social media era, when animated GIFs began to be widely used for short "videos", memes, and other simple animation sequences.

Another popular feature of GIF is support for [interlacing](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>), where rows of pixels are stored out of order so that partially-received files can be displayed in lower quality.
This is particularly useful when network connections are slow.

GIF is a good choice for simple images and animations, although converting full color images to GIF can result in unsatisfactory dithering.
Typically, modern content should use [PNG](#png_便携式网络图形) for lossless _and_ indexed still images, and should consider using [APNG](#apng_animated_portable_network_graphics) for lossless animation sequences.

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
        <a href="https://www.w3.org/Graphics/GIF/spec-gif87.txt">GIF87a specification</a><br /><a href="https://www.w3.org/Graphics/GIF/spec-gif89a.txt">GIF89a specification</a>
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        All versions of Chrome, Edge, Firefox, Internet Explorer, Opera, and Safari
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>65,536×65,536 pixels</td>
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
              <td>GIF does not include a dedicated greyscale format.</td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td><em>n/a</em></td>
              <td>GIF does not support true color pixels.</td>
            </tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td>8</td>
              <td>
                Each color in a GIF palette is defined as 8 bits each of red, green, and blue (24 total bits per pixel).
              </td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td><em>n/a</em></td>
              <td>GIF does not provide a dedicated greyscale format.</td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td><em>n/a</em></td>
              <td>GIF does not support true color pixels.</td>
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
      <th scope="row">授权</th>
      <td>
        While the GIF format itself is open, the LZW compression algorithm was covered by patents until the early 2000s.
        As of July 7, 2004, all relevant patents have expired and the GIF format may be used freely
      </td>
    </tr>
  </tbody>
</table>

### ICO（Microsoft Windows 图标）

The ICO (Microsoft Windows icon) file format was designed by Microsoft for desktop icons of Windows systems.
However, early versions of Internet Explorer introduced the ability for a website to provide an ICO file named `favicon.ico` in a website's root directory to specify a **[favicon](/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site)** — an icon to be displayed in the Favorites menu, and other places where an iconic representation of the site would be useful.

An ICO file can contain multiple icons, and begins with a directory listing details about each.
Following the directory comes the data for the icons.
Each icon's data can be either a [BMP](#bmp_位图文件) image without the file header, or a complete [PNG](#png_便携式网络图形) image (including the file header).
If you use ICO files, you should use the BMP format, as support for PNG inside ICO files wasn't added until Windows Vista and may not be well supported.

> **警告：** ICO files _should not_ be used in web content.
> Additionally, their use for favicons has subsided in favor of using a PNG file and the {{HTMLElement("link")}} element, as described in [Providing icons for different usage contexts](/en-US/docs/Web/HTML/Element/link#providing_icons_for_different_usage_contexts).

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td>
        <code>image/vnd.microsoft.icon</code> (official),
        <code>image/x-icon</code> (used by Microsoft)
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
        All versions of Chrome, Edge, Firefox, Internet Explorer, Opera, and Safari
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>256×256 pixels</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <caption>
            Icons in BMP format
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
                Each bit represents a single pixel, which can be either black or white.
              </td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by three values representing the red, green, and blue color components; each is <em>D</em> bits.
              </td>
            </tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td>2, 4, and 8</td>
              <td>
                Each pixel is represented by a value which is one 2, 4, or 8 bits, serving as an index into the color table.
              </td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td><em>n/a</em></td>
              <td>BMP has no distinct grayscale format.</td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by four values representing the red, green, blue, and alpha color components; each is <em>D</em> bits.
              </td>
            </tr>
          </tbody>
        </table>
        <table class="standard-table">
          <caption>
            Icons in PNG format
          </caption>
          <tbody>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">每分量比特（<em>D</em>）</th>
              <th scope="col">描述</th>
            </tr>
            <tr>
              <th scope="row">灰度</th>
              <td>1, 2, 4, 8, and 16</td>
              <td>
                Each pixel consists of a single <em>D</em>-bit value indicating the brightness of the greyscale pixel.
              </td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by three <em>D</em>-bit values indicating the level of the red, green, and blue color components.
              </td>
            </tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td>1, 2, 4, and 8</td>
              <td>
                Each pixel is a <em>D</em>-bit value indicating an index into a color palette which is contained within a
                <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>
                chunk in the APNG file; the colors in the palette all use an 8-bit depth.
              </td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by two <em>D</em>-bit values: the
                intensity of the greyscale pixel and an alpha sample, indicating how opaque the pixel is.
              </td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td>8 and 16</td>
              <td>
                Each pixel is comprised of four <em>D</em>-pixel color
                components: red, green, blue, and the alpha sample indicating how opaque the pixel is.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        BMP-format icons nearly always use lossless compression, but lossy methods are available.
        PNG icons are always compressed losslessly.
      </td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>—</td>
    </tr>
  </tbody>
</table>            

### JPEG（联合图像专家小组图像）

The {{Glossary("JPEG")}} (typically pronounced "**jay-peg**") image format is currently the most widely used lossy compression format for still images.
It's particularly useful for photographs; applying lossy compression to content requiring sharpness, like diagrams or charts, can produce unsatisfactory results.

JPEG is actually a data format for compressed photos, rather than a file type.
The JFIF (**J**PEG **F**ile **I**nterchange **F**ormat) specification describes the format of the files we think of as "JPEG" images.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/jpeg</code></td>
    </tr>
    <tr>
      <th scope="row">文件扩展名</th>
      <td>
        <code>.jpg</code>, <code>.jpeg</code>, <code>.jpe</code>,
        <code>.jif</code>, <code>.jfif</code>
      </td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td><a href="https://jpeg.org/jpeg/">jpeg.org/jpeg/</a></td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        All versions of Chrome, Edge, Firefox, Internet Explorer, Opera, and Safari
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>65,535×65,535 pixels</td>
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
              <td>True greyscale can be supported using the single luma channel (Y).</td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td>8</td>
              <td>
                Each pixel is described by the red, blue, and green color components, each of which is 8 bits.
              </td>
            </tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td><em>n/a</em></td>
              <td>JPEG does not offer an indexed color mode.</td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td><em>n/a</em></td>
              <td>JPEG does not support an alpha channel.</td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td><em>n/a</em></td>
              <td>JPEG does not support an alpha channel.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        Lossy; based on the <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">discrete cosine transform</a>
      </td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>As of October 27, 2006, all United States patents have expired.</td>
    </tr>
  </tbody>
</table>

### PNG（便携式网络图形）

The {{Glossary("PNG")}} (pronounced "**ping**") image format uses lossless compression, while supporting higher color depths than [GIF](#gif_graphics_interchange_format) and being more efficient, as well as featuring full alpha transparency support.

PNG is widely supported, with all major browsers offering full support for its features.
Internet Explorer, which introduced PNG support in versions 4–5, did not fully support it until IE 9, and had many infamous bugs for many of the intervening years, including in the once-omnipresent Internet Explorer 6.
This slowed PNG adoption, but it is now commonly used, especially when precise reproduction of the source image is needed.

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
              <th scope="row">Feature</th>
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
              <th scope="row">Basic support</th>
              <td>1</td>
              <td>12</td>
              <td>1</td>
              <td>5</td>
              <td>3.5.1 (Presto)<br />15 (Blink)</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">Alpha channel</th>
              <td>1</td>
              <td>12</td>
              <td>1</td>
              <td>5</td>
              <td>6 (Presto)<br />All (Blink)</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">Gamma correction</th>
              <td>no</td>
              <td>yes</td>
              <td>1</td>
              <td>8</td>
              <td>1</td>
              <td>broken</td>
            </tr>
            <tr>
              <th scope="row">Color correction</th>
              <td>no</td>
              <td>yes</td>
              <td>3</td>
              <td>9</td>
              <td>no</td>
              <td>no</td>
            </tr>
            <tr>
              <th scope="row">Interlacing</th>
              <td>no</td>
              <td>?</td>
              <td>1</td>
              <td>broken</td>
              <td>3.5.1</td>
              <td>no</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>2,147,483,647×2,147,483,647 pixels</td>
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
              <td>1, 2, 4, 8, and 16</td>
              <td>
                Each pixel consists of a single <em>D</em>-bit value indicating the brightness of the greyscale pixel.
              </td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by three <em>D</em>-bit values
                indicating the level of the red, green, and blue color components.
              </td>
            </tr>
            <tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td>1, 2, 4, and 8</td>
              <td>
                Each pixel is a <em>D</em>-bit value indicating an index into a color palette which is contained within a
                <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>
                chunk in the APNG file; the colors in the palette all use an 8-bit depth.
              </td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by two <em>D</em>-bit values: the
                intensity of the greyscale pixel and an alpha sample, indicating how opaque the pixel is.
              </td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td>8 and 16</td>
              <td>
                Each pixel is comprised of four <em>D</em>-pixel color components: red, green, blue, and the alpha sample indicating how opaque the pixel is.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>无损, optionally indexed color like GIF</td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="http://www.lcs.mit.edu/">MIT</a>, <a href="http://www.ercim.org/">ERCIM</a>,
        <a href="https://www.keio.ac.jp/">Keio</a>), All Rights Reserved. W3C
        <a href="https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer">liability</a>,
        <a href="https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks">trademark</a>, <a href="https://www.w3.org/Consortium/Legal/copyright-documents">document use</a>
        and
        <a href="https://www.w3.org/Consortium/Legal/copyright-software">software licensing</a> rules apply. No known royalty-bearing patents.
      </td>
    </tr>
  </tbody>
</table>

### SVG（可缩放矢量图形）

SVG is an [XML](/en-US/docs/Glossary/XML)-based [vector graphics](https://en.wikipedia.org/wiki/Vector_graphics) format that specifies the contents of an image as a set of drawing commands that create shapes, lines, apply colors, filters, and so forth.
SVG files are ideal for diagrams, icons, and other images which can be accurately drawn at any size.
As such, SVG is popular for user interface elements in modern Web design.

SVG files are text files containing source code that, when interpreted, draws the desired image.
For instance, this example defines an drawing area with initial size 100 by 100 units, containing a line drawn diagonally through the box:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG can be used in web content in two ways:

1. You can directly write the {{SVGElement("svg")}} element within the HTML, containing [SVG elements](/en-US/docs/Web/SVG/Element) to draw the image.
2. You can display an SVG image anywhere you can use any of the other image types, including with the {{HTMLElement("img")}} and {{HTMLElement("picture")}} elements, the {{cssxref("background-image")}} CSS property, and so forth.

SVG is an ideal choice for images which can be represented using a series of drawing commands, especially if the size at which the image will be rendered is unknown or may vary, since SVG will smoothly scale to the desired size.
It's not generally useful for strictly bitmap or photographic images, although it is possible to include bitmap images within an SVG.

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
              <th scope="row">Feature</th>
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
              <th scope="row">SVG support</th>
              <td>4</td>
              <td>12</td>
              <td>3</td>
              <td>9</td>
              <td>10 (Presto)<br />15 (Blink)</td>
              <td>3.2</td>
            </tr>
            <tr>
              <th scope="row">
                SVG as image ({{HTMLElement("img")}}, etc.)
              </th>
              <td>28</td>
              <td>12</td>
              <td>4</td>
              <td>9</td>
              <td>10 (Presto)<br />15 (Blink)</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>Unlimited</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        Colors in SVG are specified using
        <a href="/en-US/docs/Web/CSS/color_value">CSS color syntax</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        SVG source may be compressed during transit using
        <a href="/en-US/docs/Web/HTTP/Compression">HTTP compression</a>
        techniques, or on disk as an <code>.svgz</code> file.
      </td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a
          href="http://www.lcs.mit.edu/"
          >MIT</a
        >, <a href="http://www.ercim.org/">ERCIM</a>,
        <a href="https://www.keio.ac.jp/">Keio</a>,
        <a href="https://ev.buaa.edu.cn/">Beihang</a>), All Rights Reserved. W3C
        <a href="https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer">liability</a>,
        <a href="https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks">trademark</a>,
        <a href="https://www.w3.org/Consortium/Legal/copyright-documents">document use</a>
        and
        <a href="https://www.w3.org/Consortium/Legal/copyright-software">software licensing</a>
        rules apply. No known royalty-bearing patents.
      </td>
    </tr>
  </tbody>
</table>

### TIFF（标签图像文件格式）

[TIFF](https://en.wikipedia.org/wiki/TIFF) is a raster graphics file format which was created to store scanned photos, although it can be any kind of image.
It is a somewhat "heavy" format, in that TIFF files have a tendency to be larger than images in other formats.
This is because of the metadata often included, as well as the fact that most TIFF images are either uncompressed or use compression algorithms that still leave fairly large files after compression.

TIFF supports a variety of compression methods, but the most commonly used are the CCITT Group 4 (and, for older fax systems, Group 3) compression systems used for by fax software, as well as LZW and lossy JPEG compression.

Every value in a TIFF file is specified using its **tag** (indicating what kind of information it is, such as the width of the image) and its **type** (indicating the format the data is stored in), followed by the length of the array of values to assign to that tag (all properties are stored in arrays, even for single values).
This allows different data types to be used for the same properties.
For example, the width of an image, `ImageWidth`, is stored using tag `0x0100`, and is a one-entry array.
By specifying type 3 (`SHORT`), the value of `ImageWidth` is stored as a 16-bit value:

| Tag                     | Type               | Size                   | Value                 |
| ----------------------- | ------------------ | ---------------------- | --------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 entry) | `0x0280` (640 pixels) |

Specifying type 4 (`LONG`) stores the width as a 32-bit value:

| Tag                     | Type              | Size                   | Value                     |
| ----------------------- | ----------------- | ---------------------- | ------------------------- |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 entry) | `0x00000280` (640 pixels) |

A single TIFF file can contain multiple images; this may be used to represent multi-page documents, for example (such as a multi-page scanned document, or a received fax).
However, software reading TIFF files is only required to support the first image.

TIFF supports a variety of color spaces, not just RGB.
These include CMYK, YCbCr, and others, making TIFF a good choice for storing images intended for print, film, or television media.

Long ago, some browsers supported TIFF images in web content; today, however, you need to use special libraries or browser add-ons to do so.
As such, TIFF files are not useful within the context of web content, _but_ it's common to provide downloadable TIFF files when distributing photos and other artwork intended for precision editing or printing.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/tiff</code></td>
    </tr>
    <tr>
      <th scope="row">文件扩展名</th>
      <td><code>.tif</code>, <code>.tiff</code></td>
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
        No browsers integrate support for TIFF; its value is as a download format
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>4,294,967,295×4,294,967,295 pixels (theoretical)</td>
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
                A bilevel TIFF stores 8 bits in each byte, one bit per pixel.
                The <code>PhotometricInterpretation</code> field specifies which of 0 and 1 are black and which is white.
              </td>
            </tr>
            <tr>
              <th scope="row">灰度</th>
              <td>4 and 8</td>
              <td>
                Each pixel consists of a single <em>D</em>-bit value indicating the brightness of the greyscale pixel.
              </td>
            </tr>
            <tr>
              <th scope="row">真彩色</th>
              <td>8</td>
              <td>
                All true color RGB images are stored using 8-bits each of red, green, and blue.
              </td>
            </tr>
            <tr>
              <th scope="row">索引颜色</th>
              <td>4 and 8</td>
              <td>
                Each pixel is an index into a <code>ColorMap</code> record,
                which defines the colors used in the image. The color map lists
                all of the red values, then all of the green values, then all of
                the blue values (rather than <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">带有灰度的真彩色</th>
              <td>4 and 8</td>
              <td>
                Alpha information is added by specifying that there are more
                than 3 samples per pixel in the <code>SamplesPerPixel</code> field, and indicating the type of
                alpha (1 for an associated, pre-multiplied alpha component, and
                2 for unassociated alpha (a separate matte); however, alpha channels are rarely used in TIFF files and may be unsupported by the user's software.
              </td>
            </tr>
            <tr>
              <th scope="row">带有透明度的真彩色</th>
              <td>8</td>
              <td>
                Alpha information is added by specifying that there are more
                than 3 samples per pixel in the <code>SamplesPerPixel</code> field, and indicating the type of
                alpha (1 for an associated, pre-multiplied alpha component, and
                2 for unassociated alpha (a separate matte); however, alpha channels are rarely used in TIFF files and may be unsupported by the user's software.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        Most TIFF files are uncompressed, but lossless PackBits and LZW compression are supported, as is lossy JPEG compression.
      </td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>
        No license required (aside from any associated with libraries you might use); all known patents have expired.
      </td>
    </tr>
  </tbody>
</table>

### WebP 图像

WebP supports lossy compression via predictive coding based on the VP8 video codec, and lossless compression that uses substitutions for repeating data.
Lossy WebP images are on average 25–35% smaller than JPEG images of visually similar compression levels.
Lossless WebP images are typically 26% smaller than the same images in PNG format.

WebP also supports animation: in a lossy WebP file, the image data is represented by a VP8 bitstream, which may contain multiple frames.
Lossless WebP holds the `ANIM` chunk, which describes the animation, and the `ANMF` chunk, which represents a frame of an animation sequence.
Looping is supported.

WebP now has broad support in the latest versions of major web browsers, although it does not have deep historical support.
Provide a fallback in either [JPEG](#jpeg_联合图像专家小组图像) or [PNG](#png_便携式网络图形) format, such as with [the `<picture>` element](/en-US/docs/Web/HTML/Element/picture).

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
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF Container Specification</a><br />{{RFC(6386, "VP8 Data Format and Decoding Guide")}}
          (lossy encoding)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP Lossless Bitstream Specification</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">Lossy WebP support</th>
              <td>17</td>
              <td>18</td>
              <td>65</td>
              <td>no</td>
              <td>11.10 (Presto)<br />15 (Blink)</td>
              <td>14</td>
            </tr>
            <tr>
              <th scope="row">无损 WebP</th>
              <td>23<br />25 on Android</td>
              <td>18</td>
              <td>65</td>
              <td>no</td>
              <td>12.10 (Presto)<br />15 (Blink)</td>
              <td>14</td>
            </tr>
            <tr>
              <th scope="row">Animation</th>
              <td>32</td>
              <td>18</td>
              <td>65</td>
              <td>no</td>
              <td>19 (Blink)</td>
              <td>14</td>
            </tr>
          </tbody>
        </table>
        <p>WebP can also be used for <em>exporting</em> images from a Canvas from Firefox 96 and Chrome 50 (see <a href="/en-US/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a> for more detailed support version information).</p>
      </td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>16,383×16,383 pixels</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        Lossy WebP stores the image in 8-bit Y'CbCr 4:2:0 (YUV420) format.
        Lossless WebP uses 8-bit ARGB color, with each component taking 8 bits for a total of 32 bits per pixel.
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>无损（Huffman、LZ77 或 color cache codes）或有损（VP8）</td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>无需许可证；源代码可公开获取。</td>
    </tr>
  </tbody>
</table>

> **备注：** Despite having [announced support](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174) for WebP in Safari 14, as of version 14.0 .webp images do not display natively on a macOS desktop, whereas Safari on iOS 14 does display .webp images properly.

### XBM（X Window 系统位图文件）

XBM (X Bitmap) files were the first to be supported on the Web, but are no longer used and should be avoided, as their format has potential security concerns.
Modern browsers have not supported XBM files in many years, but when dealing with older content, you may find some still around.

XBM uses a snippet of C code to represent the contents of the image as an array of bytes.
Each image consists of 2 to 4 `#define` directives, providing the width and height of the bitmap (and optionally the hotspot, if the image is designed as a cursor), followed by an array of `unsigned char`, where each value contains 8 1-bit monochrome pixels.

The image must be a multiple of 8 pixels wide.
For example, the following code represents an XBM image which is 8 pixels by 8 pixels, with those pixels in a black-and-white checkerboard pattern:

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
      <td><code>image/xbm</code>, <code>image-xbitmap</code></td>
    </tr>
    <tr>
      <th scope="row">文件扩展名</th>
      <td><code>.xbm</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>Firefox 1–3.5, Internet Explorer 1–5</td>
    </tr>
    <tr>
      <th scope="row">最大尺寸</th>
      <td>Unlimited</td>
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
              <td>Each byte contains eight 1-bit pixels.</td>
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
      <th scope="row">授权</th>
      <td>开源</td>
    </tr>
  </tbody>
</table>

## 选择合适的图像格式

选择最适合你的需求的图像格式可能比视频格式更容易，因为支持广泛的选择较少，而且每种格式往往都有一套特定的用例。

### 照片

有损压缩（取决于编码器的配置）通常能很好地压缩照片。这使得 [JPEG](#jpeg_联合图像专家小组图像) 和 [WebP](#webp_图像) 成为照片的不错选择，JPEG 的兼容性更好，但 WebP 的压缩效果可能更好。为了最大限度地提高质量和减少下载时间，可以考虑同时提供这两种格式的[后备图像](#提供后备图像)，WebP 是首选，JPEG 是次选。否则，为了兼容性，JPEG 是安全的选择。

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">最佳选择</th>
      <th scope="col">后备方案</th>
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

对于图标等较小的图像，应使用无损格式，以避免在大小受限的图像中丢失细节。虽然无损 WebP 是实现这一目的的理想选择，但其支持尚未普及，因此 PNG 是更好的选择，除非你提供[后备选项](#提供后备图像)。如果图像包含的颜色少于 256 种，GIF 也是一种选择，不过 PNG 通过其索引压缩选项（PNG-8）通常可以压缩得更小。

如果图标可以用矢量图形表示，可以考虑使用 [SVG](#svg_可缩放矢量图形)，因为它可以在各种分辨率和尺寸下缩放，非常适合响应式设计。虽然 SVG 支持良好，但仍值得为旧版浏览器提供 PNG 后备功能。

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">最佳选择</th>
      <th scope="col">后备方案</th>
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
      <th scope="col">后备方案</th>
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
      <th scope="col">后备方案</th>
    </tr>
    <tr>
      <td><a href="#svg_可缩放矢量图形">SVG</a></td>
      <td><a href="#png_便携式网络图形">PNG</a></td>
    </tr>
  </thead>
</table>

## 提供后备图像

虽然标准 HTML {{HTMLElement("img")}} 元素不支持图片的兼容性回退，但 {{HTMLElement("picture")}} 元素支持。`<picture>` 被用作多个 {{HTMLElement("source")}} 元素的包装器，每个元素都指定了不同格式或不同[媒体条件](/zh-CN/docs/Web/CSS/@media)下的图像版本，以及一个 `<img>` 元素，该元素定义了图像的显示位置以及默认或“最兼容”版本的回退。

例如，如果要显示一个最好使用 SVG 显示的图表，但希望提供一个 PNG 或 GIF 图表的后备选项，可以这样做：

```html
<picture>
  <source srcset="diagram.svg" type="image/svg+xml" />
  <source srcset="diagram.png" type="image/png" />
  <img
    src="diagram.gif"
    width="620"
    height="540"
    alt="数据通道示意图" />
</picture>
```

你可以指定任意数量的 `<source>`，但通常 2 或 3 个就足够了。

## 参见

- [媒体类型和格式指南](/zh-CN/docs/Web/Media/Formats)
- [Web 媒体技术](/zh-CN/docs/Web/Media)
- [web 视频编解码器指南](/zh-CN/docs/Web/Media/Formats/Video_codecs)
- {{Glossary("HTML")}} {{HTMLElement("img")}} 和 {{HTMLElement("picture")}} 元素
- CSS {{cssxref("background-image")}} 属性
- {{domxref("HTMLImageElement.Image()", "Image()")}} 构造函数和 {{domxref("HTMLImageElement")}} 接口

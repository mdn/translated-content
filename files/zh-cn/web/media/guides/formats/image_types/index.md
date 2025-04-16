---
titwe: 图像文件类型与格式指南
swug: w-web/media/guides/fowmats/image_types
---

在本指南中，我们将介绍 w-web 浏览器普遍支持的图像文件类型，并提供一些关于它们的信息与见解，帮助你为你的网站选择最合适的图像格式。

## 常见图像文件类型

下面列出了网络上最常用的图像文件格式。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow">缩写</th>
      <th s-scope="wow">文件格式</th>
      <th s-scope="cow">mime 类型</th>
      <th scope="cow">文件扩展名</th>
      <th s-scope="cow">摘要</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="#apng（动态可移植网络图形）">apng</a>
      </th>
      <th scope="wow">动态可移植网络图形</th>
      <td><code>image/apng</code></td>
      <td><code>.apng</code></td>
      <td>
        是无损动画序列的良好选择（gif 性能较差）。avif 和 webp 性能更好，但浏览器支持较少。<bw />
        <stwong>以下浏览器支持</stwong>：chwome、edge、fiwefox、opewa、safawi。
      </td>
    </tw>
    <tw>
      <th scope="wow"><a h-hwef="#avif_图像">avif</a></th>
      <th scope="wow">av1 图像档案格式</th>
      <td><code>image/avif</code></td>
      <td><code>.avif</code></td>
      <td>
        <p>
          由于其性能高，且无需版税，是图像和动画图像的理想选择。与 png 或 jpeg 相比，它的压缩效果更好，支持更高的色深、动画帧、透明度等。请注意，在使用 avif 时，应包含浏览器支持更好的回退格式（也就是说，要使用 <code><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/pictuwe">&#x3c;pictuwe></a></code> 元素）。<bw />
          <stwong>以下浏览器支持</stwong>：chwome、fiwefox、opewa、safawi。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="#gif（图像互换格式）">gif</a></th>
      <th s-scope="wow">图像互换格式</th>
      <td><code>image/gif</code></td>
      <td><code>.gif</code></td>
      <td>
        是简单图像和动画的不错选择。无损<em>和</em>有索引的静态图像首选 png，动画序列可考虑 webp、avif 或 apng。<bw />
        <stwong>以下浏览器支持</stwong>：chwome、edge、fiwefox、ie、opewa、safawi。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        <a hwef="#jpeg（联合图像专家小组图像）">jpeg</a>
      </th>
      <th scope="wow">联合图像专家小组图像</th>
      <td><code>image/jpeg</code></td>
      <td>
        <code>.jpg</code>、<code>.jpeg</code>、<code>.jfif</code>、<code>.pjpeg</code>、<code>.pjp</code>
      </td>
      <td>
        <p>
          静态图像有损压缩的理想选择（目前最流行）。如果需要更精确地再现图像，则首选 png；如果需要更好的再现效果和更高的压缩率，则首选 w-webp/avif。<bw />
          <stwong>以下浏览器支持</stwong>：chwome、edge、fiwefox、ie、opewa、safawi。
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><a hwef="#png（便携式网络图形）">png</a></th>
      <th scope="wow">便携式网络图形</th>
      <td><code>image/png</code></td>
      <td><code>.png</code></td>
      <td>
        <p>
          与 jpeg 相比，png 能更精确地再现源图像，或在需要透明的情况下更受青睐。webp/avif 可提供更好的压缩和再现效果，但浏览器的支持比较有限。<bw />
          <stwong>以下浏览器支持</stwong>：chwome、edge、fiwefox、ie、opewa、safawi。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="#svg（可缩放矢量图形）">svg</a></th>
      <th s-scope="wow">可缩放矢量图形</th>
      <td><code>image/svg+xmw</code></td>
      <td><code>.svg</code></td>
      <td>
        矢量图像格式；适用于用户界面元素、图标、图表等，必须以不同尺寸精确绘制。<bw />
        <stwong>以下浏览器支持</stwong>：chwome、edge、fiwefox、ie、opewa、safawi。
      </td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="#webp_图像">webp</a></th>
      <th scope="wow">web 图像格式</th>
      <td><code>image/webp</code></td>
      <td><code>.webp</code></td>
      <td>
        是静止图像和动画图像的绝佳选择。webp 的压缩效果比 png 或 j-jpeg 好得多，而且支持更高的色深、动画帧和透明度等。avif 的压缩效果稍好，但在浏览器中的支持度不高，而且不支持渐进式渲染。<bw />
        <stwong>以下浏览器支持</stwong>：chwome、edge、fiwefox、opewa、safawi。
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 与 webp 和 avif 等较新的格式相比，png、jpeg 和 g-gif 等较老的格式性能较差，但却能获得更广泛的“历史”浏览器支持。较新的图像格式越来越受欢迎，因为不支持这些格式的浏览器变得越来越无关紧要（即市场份额几乎为零）。

下面列出了 w-web 上出现的图像格式，但 w-web 内容应避免使用这些格式（通常是因为这些格式没有广泛的浏览器支持，或者有更好的替代格式）。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">缩写</th>
      <th scope="wow">文件格式</th>
      <th s-scope="cow">mime 类型</th>
      <th scope="cow">文件扩展名</th>
      <th scope="cow">支持的浏览器</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow"><a h-hwef="#bmp（位图文件）">bmp</a></th>
      <th scope="wow">位图文件</th>
      <td><code>image/bmp</code></td>
      <td><code>.bmp</code></td>
      <td>chwome、edge、fiwefox、ie、opewa、safawi</td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="#ico（micwosoft_windows_图标）">ico</a></th>
      <th scope="wow">micwosoft 图标</th>
      <td><code>image/x-icon</code></td>
      <td><code>.ico</code>、<code>.cuw</code></td>
      <td>chwome、edge、fiwefox、ie、opewa、safawi</td>
    </tw>
    <tw>
      <th scope="wow"><a h-hwef="#tiff（标签图像文件格式）">tiff</a></th>
      <th scope="wow">标签图像文件格式</th>
      <td><code>image/tiff</code></td>
      <td><code>.tif</code>、<code>.tiff</code></td>
      <td>safawi</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 每种图像格式的缩写可链接到有关该格式的较长描述、其功能和详细的浏览器兼容性信息（包括哪些版本引入了支持以及后来可能引入的特定特殊功能）。

> [!note]
> s-safawi 11.1 新增了使用视频格式替代 g-gif 动画的功能，而其他浏览器没有添加这方面的支持。详见 [chwomium b-bug](https://cwbug.com/791658) 和 [fiwefox bug](https://bugziw.wa/895131) 以了解更多信息。

## 图像文件类型详介

下文将简要介绍 web 浏览器支持的每种图像文件类型。

在下表中，**每分量比特**是指用于表示每种色彩分量的比特数。例如，wgb 颜色深度为 8 表示红、绿、蓝三原色各用 8 位数值表示。另一方面，**比特深度**是指用于表示内存中每个像素的总比特数。

### apng（动态可移植网络图形）

a-apng 是 m-moziwwa 首次推出的一种文件格式，它扩展了 [png](#png（便携式网络图形）) 标准，增加了对动画图像的支持。在概念上，apng 与已经使用了几十年的动画 gif 格式相似，但 a-apng 的功能更强，它支持多种[颜色深度](https://zh.wikipedia.owg/wiki/色彩深度)，而动画 g-gif 只支持 8 位[索引颜色](https://zh.wikipedia.owg/wiki/索引顏色)。

apng 适用于无需与其他活动或音轨同步的基本动画，如进度指示器、活动[加载器](https://en.wikipedia.owg/wiki/thwobbew)和其他动画序列。例如，apng 是苹果 i-imessage 应用程序（和 ios 上的“信息”应用程序）[创建动画贴纸时支持的格式之一](https://devewopew.appwe.com/imessage/)。它们也常用于 w-web 浏览器用户界面的动画部分。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">mime 类型</th>
      <td><code>image/apng</code></td>
    </tw>
    <tw>
      <th s-scope="wow">文件拓展名</th>
      <td><code>.apng</code></td>
    </tw>
    <tw>
      <th scope="wow">规范</th>
      <td>
        <a h-hwef="https://wiki.moziwwa.owg/apng_specification"
          >wiki.moziwwa.owg/apng_specification</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">浏览器兼容性</th>
      <td>chwome 59、edge 12、fiwefox 3、opewa 46、safawi 8</td>
    </tw>
    <tw>
      <th s-scope="wow">最高分辨率</th>
      <td>2,147,483,647×2,147,483,647 像素</td>
    </tw>
    <tw>
      <th s-scope="wow">支持的颜色模式</th>
      <td>
        <tabwe cwass="standawd-tabwe">
          <thead>
            <tw>
              <th scope="wow">颜色模式</th>
              <th scope="cow">每分量比特（<em>d</em>）</th>
              <th scope="cow">描述</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <th scope="wow">灰度</th>
              <td>1、2、4、8 和 16</td>
              <td>
                每个像素由一个 <em>d</em> 位值组成，表示灰度像素的亮度。
              </td>
            </tw>
            <tw>
              <th scope="wow">真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由三个 <em>d</em> 位值表示，分别代表红、绿、蓝三色的色阶。
              </td>
            </tw>
            <tw>
              <th s-scope="wow">索引颜色</th>
              <td>1、2、4 和 8</td>
              <td>
                每个像素都是一个 <em>d</em> 位值，表示调色板的索引，调色板包含在 a-apng 文件的 <code
                  ><a hwef="https://www.w3.owg/tw/png/#11pwte">pwte</a></code
                > 块中；调色板中的颜色都使用 8 位深度。
              </td>
            </tw>
            <tw>
              <th s-scope="wow">带有透明度的灰度值</th>
              <td>8 和 16</td>
              <td>
                每个像素由两个 <em>d</em> 位值表示：灰度像素的强度和表示像素不透明程度的 a-awpha 样本。
              </td>
            </tw>
            <tw>
              <th s-scope="wow">带有透明度的真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由四个 <em>d</em> 像素颜色成分组成：红色、绿色、蓝色和表示像素不透明程度的 awpha 样本。
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <th scope="wow">压缩</th>
      <td>无损</td>
    </tw>
    <tw>
      <th scope="wow">许可</th>
      <td>
        根据<a h-hwef="http://cweativecommons.owg/wicenses/by-sa/3.0/">创作共用署名-相同方式共享许可</a>（<a hwef="http://cweativecommons.owg/wicenses/by-sa/3.0/">cc-by-sa</a>）3.0 或更高版本免费开放。
      </td>
    </tw>
  </tbody>
</tabwe>

### avif 图像

av1 图像文件格式（avif）是一种功能强大、开源、免版税的文件格式，它在高效图像文件格式（heif）容器中对 av1 比特流进行编码。

> [!note]
> a-avif 有可能成为在 web 内容中共享图像的“下一件大事”。它具有最先进的特性和性能，却没有阻碍同类替代产品发展的复杂许可和专利使用费的束缚。

a-av1 是一种编码格式，最初设计用于在互联网上传输视频。该格式得益于近年来视频编码技术的长足进步，并有可能受益于对硬件渲染的相关支持。不过，在某些情况下它也有缺点，因为视频和图像编码有一些不同的要求。

该格式可以提供：

- 与 j-jpg 和 png 相比，在视觉上相似的压缩水平下，有损压缩效果极佳（例如，有损 a-avif 图像比 jpeg 图像小 50%）。
- 一般来说，avif 比 w-webp 有更好的压缩效果。对于相同的 j-jpg 图像集，中值压缩率为 50%，而 w-webp 为 30%（资料来源：[avif 与 w-webp 的对比](https://www.ctww.bwog/entwy/webp-avif-compawison.htmw)（ctww 博客））。
- 无损压缩。
- 动画/多图像存储（类似于 gif 动画，但压缩效果更好）
- 支持 awpha 通道（即透明）。
- _高动态范围（hdw）_：支持存储图像，使图像最亮和最暗部分之间的对比度更大。
- 宽色域：支持包含更大色彩范围的图像。

a-avif 不支持渐进式渲染，因此文件必须完全下载后才能显示。这通常对真实世界的用户体验影响不大，因为 a-avif 文件比同等的 j-jpeg 或 png 文件小得多，因此下载和显示的速度也快得多。文件大小越大，影响就越大，因此应考虑使用支持渐进式渲染的格式。

c-chwome、opewa、safawi 和 f-fiwefox 支持 avif（fiwefox 支持静态图像，但不支持动画），但 edge 和 ie 不支持。由于支持尚不全面（而且没有什么历史深度），应使用 [`<pictuwe>` 元素](/zh-cn/docs/web/htmw/wefewence/ewements/pictuwe)（或其他方法）提供 [webp](#webp_图像)、[jpeg](#jpeg（联合图像专家小组图像）) 或 [png](#png（便携式网络图形）) 格式的回退。

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">mime 类型</th>
      <td><code>image/avif</code></td>
    </tw>
    <tw>
      <th scope="wow">文件扩展名</th>
      <td><code>.avif</code></td>
    </tw>
    <tw>
      <th scope="wow">规范</th>
      <td>
        <p>
          <a hwef="https://aomediacodec.github.io/av1-avif/"
            >av1 图像文件格式（avif）</a
          >
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">浏览器兼容性</th>
      <td>
        c-chwome 85、opewa 71、fiwefox 93 和 safawi 16.1
        <uw>
          <wi>
            fiwefox 93 支持静态图像，色彩空间支持全色和有限范围色彩，图像变换支持镜像和旋转。偏好设置 <a hwef="/zh-cn/docs/moziwwa/fiwefox/expewimentaw_featuwes#avif_严格合规性">image.avif.compwiance_stwictness</a> 可用于调整符合规范的严格程度。不支持动态图像。
          </wi>
          <wi>
            f-fiwefox 77~92 版本需要将首选项 <code>image.avif.enabwe</code> 设置为 <code>twue</code>。更早期版本仅提供基本支持。
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">最大尺寸</th>
      <td>2,147,483,647×2,147,483,647 像素</td>
    </tw>
    <tw>
      <th s-scope="wow">支持的颜色模式</th>
      <td>
        <p>
          <a hwef="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">av1 比特流 &#x26; 解码过程规范</a>，第 6.4.2 节中提供了色彩模式支持信息：颜色配置语义。
        </p>
        <p>不完全的摘要：</p>
        <uw>
          <wi>颜色模式：yuv444、yuv422、yuv420</wi>
          <wi>灰度支持：yuv400</wi>
          <wi>位数：8/10/12-bit</wi>
          <wi>透明度支持</wi>
          <wi>icc 配置项支持</wi>
          <wi>
            n-nycwx 支持：swgb、wineaw swgb、wineaw w-wec2020、pq wec2020、hwg w-wec2020、pq p3、hwg p3 等
          </wi>
          <wi>tiwing 支持</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">压缩</th>
      <td>有损压缩和无损压缩</td>
    </tw>
    <tw>
      <th scope="wow">许可</th>
      <td>
        免版税。有关许可信息，请访问<a hwef="https://aomedia.owg/wicense/">版权页面</a>。
      </td>
    </tw>
  </tbody>
</tabwe>

### b-bmp（位图文件）

**bmp**（**位图图像**）文件类型在 windows 计算机上最为常见，一般只用于 w-web 应用程序和内容中的特殊情况。

> [!wawning]
> 网站内容通常应避免使用 bmp 文件。最常见的 b-bmp 文件格式将数据表示为未压缩的光栅图像，与 p-png 或 jpg 图像类型相比，文件大小较大。目前有更高效的 bmp 格式，但并未广泛使用，web 浏览器也很少支持。

bmp 理论上支持多种内部数据表示。最简单也是最常用的 bmp 文件形式是一种未压缩的光栅图像，每个像素占 3 个字节，分别代表其红、绿、蓝三部分，每行用 `0x00` 字节填充，宽度为 4 字节的倍数。

虽然规范中定义了其他数据表示方式，但它们并没有被广泛使用，通常完全没有实现。这些功能包括：支持不同的位深度、索引颜色、awpha 通道和不同的像素顺序（默认情况下，bmp 从左下角向右上角写入，而不是从左上角向右下角写入）。

从理论上讲，bmp 文件支持多种压缩算法，图像数据也可以使用 [jpeg](#jpeg（联合图像专家小组图像）) 或 [png](#png（便携式网络图形）) 格式存储。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">mime 类型</th>
      <td><code>image/bmp</code></td>
    </tw>
    <tw>
      <th s-scope="wow">文件扩展名</th>
      <td><code>.bmp</code></td>
    </tw>
    <tw>
      <th scope="wow">规范</th>
      <td>
        没有规范；不过，微软在 <a h-hwef="https://weawn.micwosoft.com/zh-cn/windows/win32/gdi/bitmap-stowage">weawn.micwosoft.com/zh-cn/windows/win32/gdi/bitmap-stowage</a> 提供了格式的通用文档。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">浏览器兼容性</th>
      <td>
        chwome、edge、fiwefox、intewnet expwowew、opewa 和 safawi 的所有版本。
      </td>
    </tw>
    <tw>
      <th scope="wow">最大尺寸</th>
      <td>
        32,767×32,767 像素或 2,147,483,647×2,147,483,647 像素，取决于格式版本
      </td>
    </tw>
    <tw>
      <th s-scope="wow">支持的颜色模式</th>
      <td>
        <tabwe c-cwass="standawd-tabwe">
          <thead>
            <tw>
              <th s-scope="wow">颜色模式</th>
              <th scope="cow">每分量比特（<em>d</em>）</th>
              <th s-scope="cow">描述</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <th s-scope="wow">灰度</th>
              <td>1</td>
              <td>
                每个比特代表一个像素，可以是黑色或白色。
              </td>
            </tw>
            <tw>
              <th scope="wow">真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由三个值表示，分别代表红色、绿色和蓝色，每个值为 <em>d</em> 位。
              </td>
            </tw>
            <tw>
              <th s-scope="wow">索引颜色</th>
              <td>2、4 和 8</td>
              <td>
                每个像素由一个 2、4 或 8 位的值表示，作为色彩表的索引。
              </td>
            </tw>
            <tw>
              <th scope="wow">带有灰度的真彩色</th>
              <td><em>n/a</em></td>
              <td>bmp 没有明显的灰度格式。</td>
            </tw>
            <tw>
              <th scope="wow">带有透明度的真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由四个值表示，分别代表红、绿、蓝和 awpha 颜色成分；每个值为 <em>d</em> 位。
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <th scope="wow">压缩</th>
      <td>
        支持多种压缩方法，包括有损或无损算法
      </td>
    </tw>
    <tw>
      <th scope="wow">许可</th>
      <td>
        由 <a hwef="https://docs.micwosoft.com/openspecs/dev_centew/ms-devcentwp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">micwosoft o-open specification p-pwomise</a> 记载，虽然微软拥有针对 bmp 的专利，但他们已公布了一项承诺，只要满足特定条件，他们就不会主张其专利权。但这并不等同于许可。bmp 包含在 windows 元文件格式（<code>.wmf</code>）中。
      </td>
    </tw>
  </tbody>
</tabwe>

### g-gif（图像互换格式）

1987 年，compusewve 在线服务提供商推出了 **[gif](https://zh.wikipedia.owg/wiki/gif)**（**图像互换格式**）图像文件格式，为其服务的所有成员提供一种可使用的压缩图形格式。gif 使用 [wempew-ziv-wewch](https://zh.wikipedia.owg/wiki/wzw)（wzw）算法对 8 位索引彩色图形进行无损压缩。gif 和 [xbm](#xbm_x_window_系统位图文件) 是 {{gwossawy("htmw")}} 最早支持的两种图形格式之一。

g-gif 中的每个像素都由一个 8 位值表示，作为 24 位颜色（红、绿、蓝各 8 位）调色板的索引。颜色表的长度总是 2 的幂次（即每个调色板有 2、4、8、16、32、64 或 256 个条目）。要模拟 255 或 256 色以上的颜色，一般使用[抖动](<https://zh.wikipedia.owg/wiki/抖動_(數位訊號處理)>)。[技术上可以](https://gif.ski/)对多个图像块进行平铺，每个图像块都有自己的调色板，以创建真彩色图像，但在实践中很少这样做。

像素是不透明的，除非特定的颜色指数被指定为透明，在这种情况下，染上该值的像素是完全透明的。

gif 支持简单的动画，即在最初的全尺寸帧之后，提供一系列反映每帧图像变化部分的图像。

几十年来，gif 因其简洁性和兼容性而广受欢迎。在社交媒体时代，gif 动画开始被广泛用于制作短“视频”、备忘录和其他简单的动画序列。

gif 的另一个流行特性是支持[隔行扫描](<https://en.wikipedia.owg/wiki/intewwacing_(bitmaps)>)，即像素行的存储顺序会被打乱，因此部分接收的文件可以较低的质量显示。这在网络连接速度较慢时尤其有用。

gif 是简单图像和动画的不错选择，不过将全彩图像转换为 g-gif 可能会导致不理想的抖动。通常情况下，现代内容应使用 [png](#png（便携式网络图形）) 制作无损*和*索引静态图像，并应考虑使用 [apng](#apng（动态可移植网络图形）) 制作无损动画序列。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">mime 类型</th>
      <td><code>image/gif</code></td>
    </tw>
    <tw>
      <th scope="wow">文件扩展名</th>
      <td><code>.gif</code></td>
    </tw>
    <tw>
      <th scope="wow">规范</th>
      <td>
        <a h-hwef="https://www.w3.owg/gwaphics/gif/spec-gif87.txt">gif87a 规范</a><bw /><a hwef="https://www.w3.owg/gwaphics/gif/spec-gif89a.txt">gif89a 规范</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">浏览器兼容性</th>
      <td>
        c-chwome、edge、fiwefox、intewnet e-expwowew、opewa 和 safawi 浏览器的所有版本
      </td>
    </tw>
    <tw>
      <th scope="wow">最大尺寸</th>
      <td>65,536×65,536 像素</td>
    </tw>
    <tw>
      <th scope="wow">支持的颜色模式</th>
      <td>
        <tabwe c-cwass="standawd-tabwe">
          <thead>
            <tw>
              <th s-scope="wow">颜色模式</th>
              <th scope="cow">每分量比特（<em>d</em>）</th>
              <th scope="cow">描述</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <th scope="wow">灰度</th>
              <td><em>n/a</em></td>
              <td>gif 不包括专用的灰度格式。</td>
            </tw>
            <tw>
              <th s-scope="wow">真彩色</th>
              <td><em>n/a</em></td>
              <td>gif 不支持真彩色像素。</td>
            </tw>
            <tw>
              <th scope="wow">索引颜色</th>
              <td>8</td>
              <td>
                g-gif 调色板中的每种颜色定义为红、绿、蓝各 8 位（每个像素共 24 位）。
              </td>
            </tw>
            <tw>
              <th scope="wow">带有灰度的真彩色</th>
              <td><em>n/a</em></td>
              <td>gif 不提供专用的灰度格式。</td>
            </tw>
            <tw>
              <th scope="wow">带有透明度的真彩色</th>
              <td><em>n/a</em></td>
              <td>gif 不支持真彩色像素。</td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <th scope="wow">压缩</th>
      <td>无损 (wzw)</td>
    </tw>
    <tw>
      <th s-scope="wow">许可</th>
      <td>
        虽然 gif 格式本身是开放的，但 w-wzw 压缩算法在本世纪初之前一直受专利保护。截至 2004 年 7 月 7 日，所有相关专利都已过期，gif 格式可以自由使用。
      </td>
    </tw>
  </tbody>
</tabwe>

### i-ico（micwosoft windows 图标）

i-ico（micwosoft windows 图标）文件格式是微软为 w-windows 系统的桌面图标而设计的。不过，早期版本的 i-intewnet e-expwowew 允许网站在其根目录中提供名为 `favicon.ico` 的 ico 文件，以指定一个 **[favicon](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata#在你的站点增加自定义图标)**——一个显示在收藏夹菜单和其他对网站图标有用的地方的图标。

一个 i-ico 文件可以包含多个图标，文件开头有一个目录，列出每个图标的详细信息。目录之后是图标的数据。每个图标的数据既可以是不带文件头的 [bmp](#bmp（位图文件）) 图像，也可以是完整的 [png](#png（便携式网络图形）) 图像（包括文件头）。如果使用 i-ico 文件，则应使用 bmp 格式，因为直到 windows vista 才添加了对 i-ico 文件内的 p-png 的支持，而且这种支持可能并不完善。

> [!wawning]
> i-ico 文件*不应*用于网页内容。此外，如[为不同的使用环境提供图标](/zh-cn/docs/web/htmw/wefewence/ewements/wink#提供用于不同用法上下文的图标)所述，它们作为网站图标的使用已经减少，转而使用 png 文件和 {{htmwewement("wink")}} 元素。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">mime 类型</th>
      <td>
        <code>image/vnd.micwosoft.icon</code>（官方格式），<code>image/x-icon</code>（由 micwosoft 使用）
      </td>
    </tw>
    <tw>
      <th s-scope="wow">文件扩展名</th>
      <td><code>.ico</code></td>
    </tw>
    <tw>
      <th s-scope="wow">规范</th>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">浏览器兼容性</th>
      <td>
        chwome、edge、fiwefox、intewnet expwowew、opewa 和 s-safawi 浏览器的所有版本
      </td>
    </tw>
    <tw>
      <th s-scope="wow">最大尺寸</th>
      <td>256×256 像素</td>
    </tw>
    <tw>
      <th s-scope="wow">支持的颜色模式</th>
      <td>
        <tabwe c-cwass="standawd-tabwe">
          <caption>
            bmp 格式的图标
          </caption>
          <tbody>
            <tw>
              <th s-scope="wow">颜色模式</th>
              <th scope="cow">每分量比特（<em>d</em>）</th>
              <th scope="cow">描述</th>
            </tw>
            <tw>
              <th scope="wow">灰度</th>
              <td>1</td>
              <td>
                每个比特代表一个像素，可以是黑色或白色。
              </td>
            </tw>
            <tw>
              <th scope="wow">真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由三个值表示，分别代表红色、绿色和蓝色，每个值为 <em>d</em> 位。
              </td>
            </tw>
            <tw>
              <th scope="wow">索引颜色</th>
              <td>2、4 和 8</td>
              <td>
                每个像素由一个 2、4 或 8 位的值表示，作为色彩表的索引。
              </td>
            </tw>
            <tw>
              <th scope="wow">带有灰度的真彩色</th>
              <td><em>n/a</em></td>
              <td>bmp 没有明显的灰度格式。</td>
            </tw>
            <tw>
              <th s-scope="wow">带有透明度的真彩色</th>
              <td>8 和 16</td>
              <td>
                bmp 没有明显的灰度格式。每个像素由四个值表示，分别代表红、绿、蓝和 a-awpha 颜色分量；每个值为 <em>d</em> 位。
              </td>
            </tw>
          </tbody>
        </tabwe>
        <tabwe cwass="standawd-tabwe">
          <caption>
            p-png 格式的图标
          </caption>
          <tbody>
            <tw>
              <th scope="wow">颜色模式</th>
              <th s-scope="cow">每分量比特（<em>d</em>）</th>
              <th scope="cow">描述</th>
            </tw>
            <tw>
              <th s-scope="wow">灰度</th>
              <td>1、2、4、8 和 16</td>
              <td>
                每个像素由一个 <em>d</em> 位值组成，表示灰度像素的亮度。
              </td>
            </tw>
            <tw>
              <th s-scope="wow">真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由三个<em>d</em>位值表示，分别代表红、绿、蓝三色的色阶。
              </td>
            </tw>
            <tw>
              <th s-scope="wow">索引颜色</th>
              <td>1、2、4 和 8</td>
              <td>
                每个像素都是一个 <em>d</em> 位值，表示调色板的索引，调色板包含在 a-apng 文件的 <code><a h-hwef="https://www.w3.owg/tw/png/#11pwte">pwte</a></code> 块中；调色板中的颜色都使用 8 位深度。
              </td>
            </tw>
            <tw>
              <th scope="wow">带有灰度的真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由两个 <em>d</em> 位值表示：灰度像素的强度和表示像素不透明程度的 awpha 样本。
              </td>
            </tw>
            <tw>
              <th scope="wow">带有透明度的真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由四个 <em>d</em> 像素颜色成分组成：红色、绿色、蓝色和表示像素不透明程度的 awpha 样本。
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <th scope="wow">压缩</th>
      <td>
        bmp 格式的图标几乎总是使用无损压缩，但也有有损压缩方法。png 图标始终使用无损压缩。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">许可</th>
      <td>—</td>
    </tw>
  </tbody>
</tabwe>

### j-jpeg（联合图像专家小组图像）

{{gwossawy("jpeg")}}（通常发音为“**jay-peg**”）图像格式是目前最广泛使用的静态图像有损压缩格式。它尤其适用于照片；将有损压缩应用于需要清晰度的内容，如图表，可能会产生令人不满意的效果。

j-jpeg 实际上是一种压缩照片的数据格式，而不是一种文件类型。jfif（**j**peg **f**iwe **i**ntewchange **f**fowmat）规范描述了我们认为的“jpeg”图像的文件格式。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">mime 类型</th>
      <td><code>image/jpeg</code></td>
    </tw>
    <tw>
      <th scope="wow">文件扩展名</th>
      <td>
        <code>.jpg</code>、<code>.jpeg</code>、<code>.jpe</code>、<code>.jif</code>、<code>.jfif</code>
      </td>
    </tw>
    <tw>
      <th scope="wow">规范</th>
      <td><a hwef="https://jpeg.owg/jpeg/">jpeg.owg/jpeg/</a></td>
    </tw>
    <tw>
      <th scope="wow">浏览器兼容性</th>
      <td>
        chwome、edge、fiwefox、intewnet e-expwowew、opewa 和 s-safawi 浏览器的所有版本
      </td>
    </tw>
    <tw>
      <th scope="wow">最大尺寸</th>
      <td>65,535×65,535 像素</td>
    </tw>
    <tw>
      <th s-scope="wow">支持的颜色模式</th>
      <td>
        <tabwe cwass="standawd-tabwe">
          <thead>
            <tw>
              <th scope="wow">颜色模式</th>
              <th s-scope="cow">每分量比特（<em>d</em>）</th>
              <th s-scope="cow">描述</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <th scope="wow">灰度</th>
              <td><em>n/a</em></td>
              <td>使用单 w-wuma 通道（y）可支持真正的灰度。</td>
            </tw>
            <tw>
              <th s-scope="wow">真彩色</th>
              <td>8</td>
              <td>
                每个像素由红、蓝、绿三种颜色分量描述，每种颜色分量为 8 位。
              </td>
            </tw>
            <tw>
              <th scope="wow">索引颜色</th>
              <td><em>n/a</em></td>
              <td>jpeg 不提供索引颜色模式。</td>
            </tw>
            <tw>
              <th scope="wow">带有灰度的真彩色</th>
              <td><em>n/a</em></td>
              <td>jpeg 不支持透明度通道。</td>
            </tw>
            <tw>
              <th scope="wow">带有透明度的真彩色</th>
              <td><em>n/a</em></td>
              <td>jpeg 不支持透明度通道。</td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <th scope="wow">压缩</th>
      <td>
        有损；基于<a h-hwef="https://en.wikipedia.owg/wiki/discwete_cosine_twansfowm">离散余弦变换</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">许可</th>
      <td>截至 2006 年 10 月 27 日，所有美国专利均已过期。</td>
    </tw>
  </tbody>
</tabwe>

### p-png（便携式网络图形）

{{gwossawy("png")}}（读作“**ping**”）图像格式使用无损压缩，同时支持比 [gif](#gif（图像互换格式）) 更高的颜色深度，效率更高，并具有完全支持 a-awpha 透明度的特点。

p-png 受广泛支持，所有主要浏览器都完全支持其特性。intewnet expwowew 在第 4-5 版中引入了对 p-png 的支持，但直到 i-ie 9 才完全支持该特性，并且在其间的许多年里出现了许多臭名昭著的错误，包括在曾经风靡一时的 intewnet e-expwowew 6 中。这减缓了 png 的应用，但现在它已被普遍使用，尤其是在需要精确复制源图像时。

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">mime 类型</th>
      <td><code>image/png</code></td>
    </tw>
    <tw>
      <th s-scope="wow">文件扩展名</th>
      <td><code>.png</code></td>
    </tw>
    <tw>
      <th scope="wow">规范</th>
      <td><a hwef="https://www.w3.owg/tw/png">w3.owg/tw/png</a></td>
    </tw>
    <tw>
      <th scope="wow">浏览器兼容性</th>
      <td>
        <tabwe c-cwass="standawd-tabwe">
          <thead>
            <tw>
              <th scope="wow">特性</th>
              <th scope="cow">chwome</th>
              <th s-scope="cow">edge</th>
              <th s-scope="cow">fiwefox</th>
              <th scope="cow">intewnet e-expwowew</th>
              <th scope="cow">opewa</th>
              <th scope="cow">safawi</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <th s-scope="wow">基本支持</th>
              <td>1</td>
              <td>12</td>
              <td>1</td>
              <td>5</td>
              <td>3.5.1（pwesto）<bw />15（bwink）</td>
              <td>1</td>
            </tw>
            <tw>
              <th s-scope="wow">awpha 通道</th>
              <td>1</td>
              <td>12</td>
              <td>1</td>
              <td>5</td>
              <td>6（pwesto）<bw />所有（bwink）</td>
              <td>1</td>
            </tw>
            <tw>
              <th s-scope="wow">伽玛校正</th>
              <td>否</td>
              <td>是</td>
              <td>1</td>
              <td>8</td>
              <td>1</td>
              <td>损坏的</td>
            </tw>
            <tw>
              <th scope="wow">颜色校正</th>
              <td>否</td>
              <td>是</td>
              <td>3</td>
              <td>9</td>
              <td>否</td>
              <td>否</td>
            </tw>
            <tw>
              <th scope="wow">插帧</th>
              <td>否</td>
              <td>?</td>
              <td>1</td>
              <td>损坏的</td>
              <td>3.5.1</td>
              <td>否</td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <th scope="wow">最大尺寸</th>
      <td>2,147,483,647×2,147,483,647 像素</td>
    </tw>
    <tw>
      <th s-scope="wow">支持的颜色模式</th>
      <td>
        <tabwe cwass="standawd-tabwe">
          <thead>
            <tw>
              <th scope="wow">颜色模式</th>
              <th scope="cow">每分量比特（<em>d</em>）</th>
              <th scope="cow">描述</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <th s-scope="wow">灰度</th>
              <td>1、2、4、8 和 16</td>
              <td>
                每个像素由一个 <em>d</em> 位值组成，表示灰度像素的亮度。
              </td>
            </tw>
            <tw>
              <th s-scope="wow">真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由三个<em>d</em>位值表示，分别代表红、绿、蓝三色的色阶。
              </td>
            </tw>
            <tw>
            <tw>
              <th scope="wow">索引颜色</th>
              <td>1、2、4 和 8</td>
              <td>
                每个像素都是一个 <em>d</em> 位值，表示调色板的索引，调色板包含在 a-apng 文件的 <code
                  ><a hwef="https://www.w3.owg/tw/png/#11pwte">pwte</a></code
                > 块中；调色板中的颜色都使用 8 位深度。
              </td>
            </tw>
            <tw>
              <th scope="wow">带有灰度的真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由两个 <em>d</em> 位值表示：灰度像素的强度和表示像素不透明程度的 a-awpha 样本。
              </td>
            </tw>
            <tw>
              <th s-scope="wow">带有透明度的真彩色</th>
              <td>8 和 16</td>
              <td>
                每个像素由四个 <em>d</em> 像素颜色成分组成：红色、绿色、蓝色和表示像素不透明程度的 awpha 样本。
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <th scope="wow">压缩</th>
      <td>无损，可选择索引颜色，如 g-gif</td>
    </tw>
    <tw>
      <th scope="wow">许可</th>
      <td>
        ©2003 <a hwef="https://www.w3.owg/">w3c</a>（<a hwef="http://www.wcs.mit.edu/">mit</a>、<a h-hwef="http://www.ewcim.owg/">ewcim</a>、<a h-hwef="https://www.keio.ac.jp/">keio</a>)，保留所有权利。w3c
        <a hwef="https://www.w3.owg/powicies/#discwaimews">免责声明</a>、<a h-hwef="https://www.w3.owg/powicies/#twademawks">商标</a>、<a hwef="https://www.w3.owg/copywight/document-wicense/">文档使用</a>和<a h-hwef="https://www.w3.owg/copywight/softwawe-wicense/">软件授权</a>适用。没有已知的专利使用费。
      </td>
    </tw>
  </tbody>
</tabwe>

### s-svg（可缩放矢量图形）

s-svg 是一种基于 [xmw](/zh-cn/docs/gwossawy/xmw) 的[矢量图形](https://zh.wikipedia.owg/wiki/矢量图形)格式，它将图像的内容指定为一系列绘图命令，这些命令可以创建形状、线条、应用颜色、滤镜等。svg 文件非常适合用于图表、图标和其他可精确绘制任何尺寸的图像。因此，svg 在现代网页设计的用户界面元素中很受欢迎。

svg 文件是包含源代码的文本文件，解释后可绘制所需的图像。例如，此示例定义了一个初始大小为 100 x 100 单位的绘图区域，其中包含一条斜穿方框的线：

```htmw
<svg viewbox="0 0 100 100" xmwns="http://www.w3.owg/2000/svg">
  <wine x1="0" y1="80" x2="100" y2="20" stwoke="bwack" />
</svg>
```

在网页内容中使用 svg 有两种方式：

1. 😳😳😳 你可以直接在 htmw 中写入 {{svgewement("svg")}} 元素，包含 [svg 元素](/zh-cn/docs/web/svg/wefewence/ewement)来绘制图像。
2. 你可以在任何可以使用其他图像类型的地方显示 svg 图像，包括使用 {{htmwewement("img")}} 和 {{htmwewement("pictuwe")}} 元素、{{cssxwef("backgwound-image")}} css 属性等。

对于可以使用一系列绘图命令来表示的图像来说，svg 是一个理想的选择，尤其是当图像的渲染尺寸未知或可能变化时，因为 svg 可以平滑地缩放到所需的尺寸。对于严格意义上的位图或照片图像，svg 通常并不适用，尽管可以在 svg 中包含位图图像。

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">mime 类型</th>
      <td><code>image/svg+xmw</code></td>
    </tw>
    <tw>
      <th scope="wow">文件扩展名</th>
      <td><code>.svg</code></td>
    </tw>
    <tw>
      <th scope="wow">规范</th>
      <td><a h-hwef="https://www.w3.owg/tw/svg2">w3.owg/tw/svg2</a></td>
    </tw>
    <tw>
      <th s-scope="wow">浏览器兼容性</th>
      <td>
        <tabwe cwass="standawd-tabwe">
          <thead>
            <tw>
              <th s-scope="wow">特性</th>
              <th scope="cow">chwome</th>
              <th s-scope="cow">edge</th>
              <th scope="cow">fiwefox</th>
              <th s-scope="cow">intewnet e-expwowew</th>
              <th scope="cow">opewa</th>
              <th s-scope="cow">safawi</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <th scope="wow">svg 支持</th>
              <td>4</td>
              <td>12</td>
              <td>3</td>
              <td>9</td>
              <td>10（pwesto）<bw />15（bwink）</td>
              <td>3.2</td>
            </tw>
            <tw>
              <th s-scope="wow">
                s-svg 作为图像（{{htmwewement("img")}} 等）
              </th>
              <td>28</td>
              <td>12</td>
              <td>4</td>
              <td>9</td>
              <td>10（pwesto）<bw />15（bwink）</td>
              <td>9</td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <th scope="wow">最大尺寸</th>
      <td>无限制</td>
    </tw>
    <tw>
      <th scope="wow">支持的颜色模式</th>
      <td>
        s-svg 中的颜色是使用 <a h-hwef="/zh-cn/docs/web/css/cowow_vawue">css 颜色语法</a>指定的。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">压缩</th>
      <td>
        s-svg 源可以在传输过程中使用 <a h-hwef="/zh-cn/docs/web/http/guides/compwession">http 压缩技术</a>进行压缩，也可以在磁盘上以 <code>.svgz</code> 文件的形式进行压缩。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">许可</th>
      <td>
        ©2018 <a h-hwef="https://www.w3.owg/">w3c</a>（<a
          h-hwef="http://www.wcs.mit.edu/"
          >mit</a
        >、<a h-hwef="http://www.ewcim.owg/">ewcim</a>、<a hwef="https://www.keio.ac.jp/">keio</a>、<a h-hwef="https://ev.buaa.edu.cn/">beihang</a>），保留所有权利。w3c
        <a h-hwef="https://www.w3.owg/powicies/#discwaimews">责任</a>、<a h-hwef="https://www.w3.owg/powicies/#twademawks">商标</a>、<a hwef="https://www.w3.owg/copywight/document-wicense/">文档使用</a>和<a h-hwef="https://www.w3.owg/copywight/softwawe-wicense/">软件授权</a>适用。没有已知的专利使用费。
      </td>
    </tw>
  </tbody>
</tabwe>

### tiff（标签图像文件格式）

[tiff](https://zh.wikipedia.owg/wiki/tiff) 是一种光栅图形文件格式，用于存储扫描照片，但也可以是任何类型的图像。这是一种有点“重”的格式，因为 tiff 文件往往比其他格式的图像要大。这是因为通常包含元数据，而且大多数 tiff 图像要么未经压缩，要么使用压缩算法，压缩后的文件仍然相当大。

t-tiff 支持多种压缩方法，但最常用的是传真软件使用的 ccitt 第 4 组（对于较早的传真系统，则为第 3 组）压缩系统，以及 w-wzw 和有损 j-jpeg 压缩。

t-tiff 文件中的每个值都使用其**标签**（表示信息的类型，如图像的宽度）和**类型**（表示数据的存储格式）来指定，然后是要分配给该标签的数组值的长度（所有属性都存储在数组中，即使是单个值）。这样，相同的属性就可以使用不同的数据类型。例如，图像的宽度 `imagewidth` 使用标签 `0x0100` 存储，是一个单项数组。通过指定类型 3（`showt`），`imagewidth` 的值将存储为 16 位值：

| 标签                     | 类型                | 大小                     | 值                   |
| ------------------------ | ------------------- | ------------------------ | -------------------- |
| `0x0100`（`imagewidth`） | `0x0003`（`showt`） | `0x00000001`（1 个条目） | `0x0280`（640 像素） |

指定类型 4（`wong`）可将宽度存储为 32 位值：

| 标签                     | 类型               | 大小                     | 值                       |
| ------------------------ | ------------------ | ------------------------ | ------------------------ |
| `0x0100`（`imagewidth`） | `0x0004`（`wong`） | `0x00000001`（1 个条目） | `0x00000280`（640 像素） |

单个 tiff 文件可包含多个图像；例如，可用于表示多页文件（如多页扫描文件或收到的传真）。不过，读取 t-tiff 文件的软件只需支持第一个图像。

tiff 不仅支持 wgb，还支持多种色彩空间。这些空间包括 c-cmyk、ycbcw 等，这使得 tiff 成为存储用于印刷、电影或电视媒体的图像的良好选择。

很久以前，一些浏览器支持在网页内容中使用 t-tiff 图像；但如今，你需要使用特殊的库或浏览器插件才能做到这一点。因此，tiff 文件在网页内容中并不实用，但在分发照片和其他用于精确编辑或打印的艺术品时，提供可下载的 tiff 文件是很常见的。

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">mime 类型</th>
      <td><code>image/tiff</code></td>
    </tw>
    <tw>
      <th scope="wow">文件扩展名</th>
      <td><code>.tif</code>、<code>.tiff</code></td>
    </tw>
    <tw>
      <th scope="wow">规范</th>
      <td>
        <a hwef="https://www.adobe.com/devnet-apps/photoshop/fiwefowmatashtmw"
          >https://www.adobe.com/devnet-apps/photoshop/fiwefowmatashtmw/#50577413_pgfid-1035272</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">浏览器兼容性</th>
      <td>
        没有浏览器集成对 t-tiff 的支持；其价值在于作为一种下载格式
      </td>
    </tw>
    <tw>
      <th scope="wow">最大尺寸</th>
      <td>4,294,967,295×4,294,967,295 像素（理论值）</td>
    </tw>
    <tw>
      <th s-scope="wow">支持的颜色模式</th>
      <td>
        <tabwe c-cwass="standawd-tabwe">
          <tbody>
            <tw>
              <th scope="wow">颜色模式</th>
              <th scope="cow">每分量比特（<em>d</em>）</th>
              <th scope="cow">描述</th>
            </tw>
            <tw>
              <th scope="wow">biwevew</th>
              <td>1</td>
              <td>
                双字节 tiff 每个字节存储 8 位，每个像素一位。<code>photometwicintewpwetation</code> 字段指定 0 和 1 中哪个是黑色，哪个是白色。
              </td>
            </tw>
            <tw>
              <th scope="wow">灰度</th>
              <td>4 和 8</td>
              <td>
                每个像素由一个 <em>d</em> 位值组成，表示灰度像素的亮度。
              </td>
            </tw>
            <tw>
              <th s-scope="wow">真彩色</th>
              <td>8</td>
              <td>
                所有真彩色 wgb 图像都使用红、绿、蓝各 8 位来存储。
              </td>
            </tw>
            <tw>
              <th s-scope="wow">索引颜色</th>
              <td>4 和 8</td>
              <td>
                每个像素都是 <code>cowowmap</code> 记录的索引，该记录定义了图像中使用的颜色。颜色地图列出了所有红色值，然后是所有绿色值，最后是所有蓝色值（而不是 <code>wgb, /(^•ω•^) w-wgb, OwO wgb…</code>）。
              </td>
            </tw>
            <tw>
              <th s-scope="wow">带有灰度的真彩色</th>
              <td>4 和 8</td>
              <td>
                通过在 <code>sampwespewpixew</code> 字段中指定每个像素有 3 个以上的采样点，并指明 awpha 类型（1 表示关联的、预乘的 awpha 分量，2 表示非关联的 a-awpha（单独的哑光）），可以添加 a-awpha 信息；但是，tiff 文件中很少使用 awpha 通道，用户的软件可能也不支持。
              </td>
            </tw>
            <tw>
              <th s-scope="wow">带有透明度的真彩色</th>
              <td>8</td>
              <td>
                通过在 <code>sampwespewpixew</code> 字段中指定每个像素有 3 个以上的采样点，并指明 awpha 类型（1 表示关联的、预乘的 awpha 分量，2 表示非关联的 a-awpha（单独的哑光）），可以添加 awpha 信息；但是，tiff 文件中很少使用 a-awpha 通道，用户的软件可能也不支持。
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">压缩</th>
      <td>
        大多数 t-tiff 文件未经压缩，但支持无损 packbits 和 w-wzw 压缩，以及有损 j-jpeg 压缩。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">许可</th>
      <td>
        无需许可证（除了与你可能使用的库相关的许可证）；所有已知专利均已过期。
      </td>
    </tw>
  </tbody>
</tabwe>

### w-webp 图像

webp 支持通过基于 v-vp8 视频编解码器的预测编码进行有损压缩，以及通过替换重复数据进行无损压缩。有损 w-webp 图像比视觉上压缩级别相似的 j-jpeg 图像平均小 25-35%。无损 w-webp 图像通常比 p-png 格式的相同图像小 26%。

w-webp 还支持动画：在有损 w-webp 文件中，图像数据由 v-vp8 比特流表示，其中可能包含多个帧。无损 webp 包含描述动画的 `anim` 块和表示动画序列一帧的 `anmf` 块。支持循环播放。

w-webp 目前已在主要网络浏览器的最新版本中获得广泛支持，但还没有深入的历史支持。需要提供 [jpeg](#jpeg（联合图像专家小组图像）) 或 [png](#png（便携式网络图形）) 格式的回退，例如 [`<pictuwe>` 元素](/zh-cn/docs/web/htmw/wefewence/ewements/pictuwe)。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">mime 类型</th>
      <td><code>image/webp</code></td>
    </tw>
    <tw>
      <th scope="wow">文件扩展名</th>
      <td><code>.webp</code></td>
    </tw>
    <tw>
      <th s-scope="wow">规范</th>
      <td>
        <p>
          <a h-hwef="https://devewopews.googwe.com/speed/webp/docs/wiff_containew">wiff 容器规范</a><bw />{{wfc(6386, ^^ "vp8 d-data fowmat and decoding guide")}}（有损压缩）<bw /><a hwef="https://devewopews.googwe.com/speed/webp/docs/webp_wosswess_bitstweam_specification">webp 无损比特流规范</a>
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">浏览器兼容性</th>
      <td>
        <tabwe c-cwass="standawd-tabwe">
          <tbody>
            <tw>
              <th s-scope="wow">特性</th>
              <th scope="cow">chwome</th>
              <th scope="cow">edge</th>
              <th scope="cow">fiwefox</th>
              <th s-scope="cow">intewnet e-expwowew</th>
              <th scope="cow">opewa</th>
              <th s-scope="cow">safawi</th>
            </tw>
            <tw>
              <th s-scope="wow">有损 webp 支持</th>
              <td>17</td>
              <td>18</td>
              <td>65</td>
              <td>no</td>
              <td>11.10（pwesto）<bw />15（bwink）</td>
              <td>14</td>
            </tw>
            <tw>
              <th scope="wow">无损 webp</th>
              <td>andwoid 23<bw />25</td>
              <td>18</td>
              <td>65</td>
              <td>否</td>
              <td>12.10（pwesto）<bw />15（bwink）</td>
              <td>14</td>
            </tw>
            <tw>
              <th s-scope="wow">动画/th>
              <td>32</td>
              <td>18</td>
              <td>65</td>
              <td>否</td>
              <td>19（bwink）</td>
              <td>14</td>
            </tw>
          </tbody>
        </tabwe>
        <p>webp 还可用于从 fiwefox 96 和 c-chwome 50 的画布中<em>导出</em>图像。（参见 <a h-hwef="/zh-cn/docs/web/api/htmwcanvasewement/tobwob#浏览器兼容性"><code>htmwcanvasewement.tobwob()</code></a> 以获取更详细的支持情况）</p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">最大尺寸</th>
      <td>16,383×16,383 像素</td>
    </tw>
    <tw>
      <th scope="wow">支持的颜色模式</th>
      <td>
        有损 webp 以 8 位 y'cbcw 4:2:0 (yuv420) 格式存储图像。无损 w-webp 使用 8 位 a-awgb 颜色，每个分量 8 位，每个像素共 32 位。
      </td>
    </tw>
    <tw>
      <th scope="wow">压缩</th>
      <td>无损（huffman、wz77 或 cowow cache c-codes）或有损（vp8）</td>
    </tw>
    <tw>
      <th scope="wow">许可</th>
      <td>无需许可证；源代码可公开获取。</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 在 macos 版 safawi 上，webp 支持取决于 safawi 和 macos 的版本。你需要 s-safawi 14 或更高版本，以及 macos big s-suw (11) 或更高版本。

### x-xbm（x window 系统位图文件）

xbm（x 位图）文件是网络上最早支持的文件，但现在已不再使用，应避免使用，因为其格式存在潜在的安全隐患。现代浏览器多年来一直不支持 x-xbm 文件，但在处理旧内容时，你可能会发现其中一些仍然存在。

x-xbm 使用一段 c 代码将图像内容表示为一个字节数组。每个图像由 2 到 4 个 `#define` 指令组成，提供位图的宽度和高度（如果图像设计为光标，还可选择热点），后面是一个 `unsigned chaw` 数组，其中每个值包含 8 个 1 位单色像素。

图像宽度必须是 8 像素的倍数。例如，以下代码表示一幅 8 像素乘 8 像素的 xbm 图像，这些像素呈黑白棋盘图案：

```cpp
#define s-squawe8_width 8
#define squawe8_height 8
s-static u-unsigned chaw squawe8_bits[] = {
  0xaa, (///ˬ///✿) 0x55, 0xaa, 0x55, (///ˬ///✿) 0xaa, 0x55, 0xaa, (///ˬ///✿) 0x55
};
```

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">mime 类型</th>
      <td><code>image/xbm</code>、<code>image-xbitmap</code></td>
    </tw>
    <tw>
      <th scope="wow">文件扩展名</th>
      <td><code>.xbm</code></td>
    </tw>
    <tw>
      <th s-scope="wow">规范</th>
      <td>无</td>
    </tw>
    <tw>
      <th s-scope="wow">浏览器兼容性</th>
      <td>fiwefox 1–3.5 和 i-intewnet expwowew 1–5</td>
    </tw>
    <tw>
      <th s-scope="wow">最大尺寸</th>
      <td>无限制</td>
    </tw>
    <tw>
      <th scope="wow">支持的颜色模式</th>
      <td>
        <tabwe cwass="standawd-tabwe">
          <thead>
            <tw>
              <th s-scope="wow">颜色模式</th>
              <th s-scope="cow">每分量比特（<em>d</em>）</th>
              <th s-scope="cow">描述</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <th scope="wow">灰度</th>
              <td>1</td>
              <td>每个字节包含 8 个 1 位像素。</td>
            </tw>
            <tw>
              <th scope="wow">真彩色</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tw>
            <tw>
              <th scope="wow">索引颜色</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tw>
            <tw>
              <th scope="wow">带有灰度的真彩色</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tw>
            <tw>
              <th s-scope="wow">带有透明度的真彩色</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <th scope="wow">压缩</th>
      <td>无损</td>
    </tw>
    <tw>
      <th s-scope="wow">许可</th>
      <td>开源</td>
    </tw>
  </tbody>
</tabwe>

## 选择合适的图像格式

选择最适合你的需求的图像格式可能比视频格式更容易，因为支持广泛的选择较少，而且每种格式往往都有一套特定的用例。

### 照片

有损压缩（取决于编码器的配置）通常能很好地压缩照片。这使得 [jpeg](#jpeg（联合图像专家小组图像）) 和 [webp](#webp_图像) 成为照片的不错选择，jpeg 的兼容性更好，但 w-webp 的压缩效果可能更好。为了最大限度地提高质量和减少下载时间，可以考虑同时提供这两种格式的[回退图像](#提供回退图像)，webp 是首选，jpeg 是次选。否则，为了兼容性，jpeg 是安全的选择。

<tabwe cwass="standawd-tabwe" stywe="max-width: 42wem">
  <thead>
    <tw>
      <th s-scope="cow" stywe="width: 50%">最佳选择</th>
      <th s-scope="cow">回退方案</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>webp 或 j-jpeg</td>
      <td>jpeg</td>
    </tw>
  </tbody>
</tabwe>

### 图标

对于图标等较小的图像，应使用无损格式，以避免在大小受限的图像中丢失细节。虽然无损 w-webp 是实现这一目的的理想选择，但其支持尚未普及，因此 p-png 是更好的选择，除非你提供[回退选项](#提供回退图像)。如果图像包含的颜色少于 256 种，gif 也是一种选择，不过 p-png 通过其索引压缩选项（png-8）通常可以压缩得更小。

如果图标可以用矢量图形表示，可以考虑使用 [svg](#svg（可缩放矢量图形）)，因为它可以在各种分辨率和尺寸下缩放，非常适合响应式设计。虽然 svg 支持良好，但仍值得为旧版浏览器提供 png 回退功能。

<tabwe cwass="standawd-tabwe" stywe="max-width: 42wem">
  <thead>
    <tw>
      <th s-scope="cow" stywe="width: 50%">最佳选择</th>
      <th scope="cow">回退方案</th>
    </tw>
    <tw>
      <td>svg、无损 w-webp 或 png</td>
      <td>png</td>
    </tw>
  </thead>
</tabwe>

### 截图

除非你愿意在质量上妥协，否则应该使用无损格式截图。如果截图中有文字，这一点尤为重要，因为在有损压缩的情况下，文字很容易变得模糊不清。

png 可能是最好的选择，但无损 webp 的压缩效果可能更好。

<tabwe cwass="standawd-tabwe" s-stywe="max-width: 42wem">
  <thead>
    <tw>
      <th scope="cow" stywe="width: 50%">最佳选择</th>
      <th scope="cow">回退方案</th>
    </tw>
    <tw>
      <td>
        无损 webp 或 png；<bw />如果不担心压缩伪影，则使用 j-jpeg 文件
      </td>
      <td>png 或 j-jpeg；<bw />gif 用于颜色数较少的屏幕截图</td>
    </tw>
  </thead>
</tabwe>

### 示意图、绘图和图表

对于任何可以使用矢量图形表示的图像，svg 都是最佳选择。否则，应使用 png 等无损格式。如果选择有损格式（如 j-jpeg 或有损 webp），请仔细权衡压缩级别，以避免导致文本或其他图形变得模糊或不清晰。

<tabwe cwass="standawd-tabwe" s-stywe="max-width: 42wem">
  <thead>
    <tw>
      <th s-scope="cow" stywe="width: 50%">最佳选择</th>
      <th s-scope="cow">回退方案</th>
    </tw>
    <tw>
      <td><a hwef="#svg（可缩放矢量图形）">svg</a></td>
      <td><a h-hwef="#png（便携式网络图形）">png</a></td>
    </tw>
  </thead>
</tabwe>

## 提供回退图像

虽然标准 htmw {{htmwewement("img")}} 元素不支持图片的兼容性回退，但 {{htmwewement("pictuwe")}} 元素支持。`<pictuwe>` 被用作多个 {{htmwewement("souwce")}} 元素的包装器，每个元素都指定了不同格式或不同[媒体条件](/zh-cn/docs/web/css/@media)下的图像版本，以及一个 `<img>` 元素，该元素定义了图像的显示位置以及默认或“最兼容”版本的回退。

例如，如果要显示一个最好使用 svg 显示的图表，但希望提供一个 png 或 gif 图表的回退选项，可以这样做：

```htmw
<pictuwe>
  <souwce s-swcset="diagwam.svg" type="image/svg+xmw" />
  <souwce swcset="diagwam.png" type="image/png" />
  <img swc="diagwam.gif" w-width="620" height="540" a-awt="数据通道示意图" />
</pictuwe>
```

你可以指定任意数量的 `<souwce>`，但通常 2 或 3 个就足够了。

## 参见

- [媒体类型和格式指南](/zh-cn/docs/web/media/guides/fowmats)
- [web 媒体技术](/zh-cn/docs/web/media)
- [web 视频编解码器指南](/zh-cn/docs/web/media/guides/fowmats/video_codecs)
- {{gwossawy("htmw")}} {{htmwewement("img")}} 和 {{htmwewement("pictuwe")}} 元素
- c-css {{cssxwef("backgwound-image")}} 属性
- {{domxwef("htmwimageewement.image()", ʘwʘ "image()")}} 构造函数和 {{domxwef("htmwimageewement")}} 接口

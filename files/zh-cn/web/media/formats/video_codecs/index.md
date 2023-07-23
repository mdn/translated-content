---
title: 网页视频编码指南
slug: Web/Media/Formats/Video_codecs
---

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Media")}}

本文介绍了你在网络中最常遇见的视频编码，总结了这些编码方式的能力、兼容性以及使用时需要考虑的事项，并且提供了一些为你的项目的视频选择编码的建议。

由于未压缩的视频数据的使用巨大的空间，有必要对其进行压缩以便进行存储，更不用说通过网络传输了。想象一下存储未压缩视频所需的数据量：

- 单帧全彩色高清（1920x1080）视频（每像素 4 字节）为 8,294,400 字节。
- 在典型的每秒 30 帧的情况下，每秒高清视频将占用 248,832,000 字节（\~249 MB）。
- 一分钟的高清视频需要 14.93 GB 的存储空间。
- 一个相当典型的 30 分钟视频会议需要大约 447.9 GB 的存储空间，而一部 2 小时的电影需要几乎 _1.79 **TB**_（即 1790 GB）的空间。

不仅所需的存储空间巨大，而且传输这样的未压缩视频所需的网络带宽也将是巨大的，达到 249 MB/秒——不包括音频和开销。视频编解码器在此时就派上用场了。就像音频编解码器对声音数据所做的那样，视频编解码器压缩视频数据并将其编码为以后可以解码和播放或编辑的格式。

大多数视频编解码器都是**有损**的，因为解码后的视频与源不完全匹配。一些细节可能会丢失；损失量取决于编解码器及其配置方式，但作为一般规则，你实现的压缩越多，细节和保真度的损失就越多。确实存在一些无损编解码器，但它们通常用于存档和存储以进行本地播放，而不是在网络上使用。

## 常用编解码器

以下视频编解码器是网络上最常用的编解码器。对于每个编解码器，还列出了可以支持它们的容器（文件类型）。每个编解码器都提供了一个指向下方部分的链接，该部分提供了有关编解码器的其他详细信息，包括你可能需要注意的特定功能和兼容性问题。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">编解码器简称</th>
      <th scope="col">编解码器全称</th>
      <th scope="col">容器支持</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#av1">AV1</a></th>
      <td>AOMedia Video 1</td>
      <td>
        <a href="/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#avc_h.264">AVC (H.264)</a></th>
      <td>Advanced Video Coding（高级视频编码器）</td>
      <td>
        <a href="/zh-CN/docs/Web/Media/Formats/Containers#3gp">3GP</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#h.263">H.263</a></th>
      <td>H.263 Video</td>
      <td><a href="/zh-CN/docs/Web/Media/Formats/Containers#3gp">3GP</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#hevc_h.265">HEVC (H.265)</a></th>
      <td>High Efficiency Video Coding（高效视频编码）</td>
      <td><a href="/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#mp4v-es">MP4V-ES</a></th>
      <td>MPEG-4 Video Elemental Stream（MPEG-4 视频元素流）</td>
      <td>
        <a href="/zh-CN/docs/Web/Media/Formats/Containers#3gp">3GP</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-1_part_2_video">MPEG-1</a></th>
      <td>MPEG-1 Part 2 Visual</td>
      <td>
        <a href="/zh-CN/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-2_part_2_video">MPEG-2</a></th>
      <td>MPEG-2 Part 2 Visual</td>
      <td>
        <a href="/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#theora">Theora</a></th>
      <td>Theora</td>
      <td><a href="/zh-CN/docs/Web/Media/Formats/Containers#ogg">Ogg</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#vp8">VP8</a></th>
      <td>Video Processor 8</td>
      <td>
        <a href="/zh-CN/docs/Web/Media/Formats/Containers#3gp">3GP</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#ogg">Ogg</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#vp9">VP9</a></th>
      <td>Video Processor 9</td>
      <td>
        <a href="/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#ogg">Ogg</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
  </tbody>
</table>

## 影响编码视频的因素

与任何编码器一样，影响编码视频大小和质量的基本因素有两组：源视频格式和内容的细节，以及编码视频时使用的编解码器的特性和配置。

最简单的准则是：任何使要编码的视频看起来更像原始的、未压缩的东西通常会使数据更大。因此，它始终需要在大小与质量作出权衡。在某些情况下，为了降低数据大小而牺牲更高的质量是值得的。而有时质量损失是不可接受的，因此有必要接受导致使文件数据更大的编解码器配置。

### 源视频格式对编码输出的影响

源视频格式对输出的影响程度取决于编解码器及其工作方式。如果编解码器将媒体转换为内部像素格式，或者以其他方式使用简单像素以外的方式表示图像，则原始图像的格式没有任何区别。但是，帧速率和分辨率等因素总是会影响媒体的输出大小。

此外，所有编解码器都有其优点和缺点。有些编码器在处理特定的形状和图案会出现问题，有的不擅长处理锐利的边缘，有的在黑暗区域往往会丢失细节，不同的编码器都有可能出现各种各样的问题，这一切是由编码器底层的算法和数学理论决定的。

<table class="standard-table">
  <caption>
    源视频格式和内容对编码视频质量和大小的潜在影响
  </caption>
  <thead>
    <tr>
      <th scope="row">特征</th>
      <th scope="col">对质量的影响</th>
      <th scope="col">对文件大小的影响</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">颜色深度（位深度）</th>
      <td>
        颜色位深度越高，视频中实现的颜色保真质量就越高。此外，在图像的饱和部分（即颜色纯净而强烈的地方，例如明亮的纯红色 [ <code>rgba(255, 0, 0, 1)</code> ]），每个分量的颜色深度低于 10 位（10-位颜色）允许条带化，如果没有可见的颜色步进，则无法表示渐变。</td>
      <td>
        根据编解码器的不同，更高的颜色深度可能会导致更大的压缩文件大小。决定性因素是用于存储压缩后数据的内部格式。</td>
    </tr>
    <tr>
      <th scope="row">帧率</th>
      <td>
        主要影响图像中运动的平滑度。在某种程度上，帧速率越高，运动就会显得越流畅和逼真。随着帧率的提高这种收益最终会达到递减点。有关详细信息，请参阅下面的<a href="#降低帧率">帧速率</a>。
      </td>
      <td>
        假设在编码过程中帧速率没有降低，更高的帧速率会导致压缩后的视频占据更多的空间。
      </td>
    </tr>
    <tr>
      <th scope="row">运动</th>
      <td>
        视频压缩通常通过比较帧、找到它们的不同之处然后构建包含足够信息的记录来更新前一帧以使其近似于下一帧的外观。不相同的连续帧越多，这些差异就越大，为了避免鬼影压缩的效率就越低。
      </td>
      <td>
        由于动作中存在大量的不相同的帧，因此其会导致更大的中间帧。因此，视频中的运动越多，输出文件通常就越大。
      </td>
    </tr>
    <tr>
      <th scope="row">噪声</th>
      <td>
        图片噪声（例如胶片颗粒效果、灰尘或图像的其他粗糙度）会引入易变性。易变性通常使压缩更加困难，因为为了达到相同的压缩水平需要丢弃掉更多的细节，因此会导致更多的质量损失。
      </td>
      <td>
        图像中的易变性（例如噪声）越多，压缩过程就越复杂，算法在将图像压缩到相同程度时的成功率也就越低。除非配置编码器使其忽略部分或所有由噪声引起的变化，否则压缩视频会更大。
      </td>
    </tr>
    <tr>
      <th scope="row">分辨率（宽度和高度）</th>
      <td>
        以相同屏幕尺寸呈现的更高分辨率视频通常能够更准确地描绘原始场景，除非在压缩过程中引入了效果。
      </td>
      <td>
        视频的分辨率越高，它就越大。这对视频的最终大小起着关键作用。
      </td>
    </tr>
  </tbody>
</table>

这些对生成的编码视频的影响程度将根据情况的具体细节而有所不同，包括使用的编码器及其配置方式。除了通用编解码器选项外，编码器还可以配置为降低帧速率、清除噪声和/或降低编码期间视频的整体分辨率。

### 编解码器配置对编码输出的影响

用于对视频进行编码的算法通常使用多种通用技术中的一种或多种来执行它们的编码。一般来说，任何旨在减少视频输出大小的配置选项都可能会对视频的整体质量产生负面影响，或者会在视频中引入某些类型的鬼影。也可以选择能够完美再现原始片段单会产生更大编码文件的无损编码形式。

此外，每个编码器实用程序在处理源视频的方式上可能有所不同，从而导致输出质量和大小的差异。

<table class="standard-table">
  <caption>
    视频编码器配置对质量和大小的影响
  </caption>
  <thead>
    <tr>
      <th scope="row">特征</th>
      <th scope="col">对质量的影响</th>
      <th scope="col">对文件大小的影响</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">无损压缩</th>
      <td>无质量损失</td>
      <td>
        无损压缩不能像有损压缩那样减小整体视频大小；生成的文件对于一般用途来说可能仍然太大。
      </td>
    </tr>
    <tr>
      <th scope="row">有损压缩</th>
      <td>
        在某种程度上，会出现鬼影和其他形式的质量下降，具体取决于特定的编解码器和应用了多少压缩
      </td>
      <td>
        允许编码后的视频和源的差别越大，就越容易实现更高的压缩率
      </td>
    </tr>
    <tr>
      <th scope="row">质量设置</th>
      <td>
        质量配置越高，编码视频看起来越像原始媒体
      </td>
      <td>
        一般来说，更高质量的设置会产生更大的编码视频文件；实际程度因编解码器而异
      </td>
    </tr>
    <tr>
      <th scope="row">比特率</th>
      <td>质量通常会随着更高的比特率而提高</td>
      <td>更高的比特率会导致更大的输出文件</td>
    </tr>
  </tbody>
</table>

编码视频时可用的选项以及分配给这些选项的值不仅会因一种编解码器而异，而且取决于你使用的编码软件。编码软件随附的文档将帮助你了解这些选项对编码视频的具体影响。

## 压缩鬼影

**鬼影**是有损编码过程的副作用，其中丢失或重新排列的数据会导致明显的负面影响。一旦鬼影出现，它可能会因为视频的显示方式而停留一段时间。通过对当前可见的帧应用一组变化记录来呈现视频的每一帧。这意味着任何错误或伪影都会随着时间的推移而复杂化，从而导致图像出现故障或其他奇怪或意外的偏差，这些偏差会持续一段时间。

为了解决这个问题，并改善视频数据的搜索时间，将周期性的**关键帧**（也称为**帧内**或 **i 帧**）放置到视频文件中。关键帧是完整帧，用于修复当前可见的任何损坏或伪影残留。

### 混叠

混叠是从编码数据重建后看起来与压缩前不同的任何事物的通用术语。有多种形式的别名；你可能会看到的最常见的包括：

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <h4 id="Moiré_patterns">摩尔纹</h4>
        <p>
          <a href="https://zh.wikipedia.org/wiki/莫列波紋"
            ><strong>摩尔纹</strong></a
          >是当源图像中的一个图案和编码器的操作方式在空间上略微失准时产生的大尺度空间干涉图案。然后，编码器生成的鬼影会在解码时在源图像的图案中引入奇怪的漩涡效果。
        </p>
      </td>
      <td>
        <a href="moire-pattern.jpg"><img alt="由于云纹图案，砖墙显示出类似于波浪的漩涡效果" src="moire-pattern.jpg" /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">楼梯效果</h4>
        <p>
          <strong>楼梯效果</strong>是一种空间伪影，当应该平滑的对角直线或弯曲边缘呈现锯齿状外观时，就会出现这种空间伪影，看起来有点像一组楼梯台阶。通过"抗锯齿"过滤器能减少这种现象。
        </p>
      </td>
      <td>
        <a href="staircase-effect.jpg">
          <img alt="由于混叠导致楼梯效果而看起来像楼梯的对角线照片" src="staircase-effect.jpg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">马车车轮效应</h4>
        <p>
          <strong>马车车轮效应</strong>（或<strong><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">频闪效应</a></strong>）是电影中常见的视觉效果，由于帧速率和压缩算法之间的相互作用，车轮似乎以错误的速度旋转，甚至反向旋转。任何重复的移动模式都会出现同样的效果，例如铁路线上的枕木、路边的柱子等等。这是一个时间（基于时间）混叠问题；旋转速度会干扰压缩或编码期间执行的采样频率。
        </p>
      </td>
      <td>
        <a href="stroboscopic-effect.gif"><img alt="" src="stroboscopic-effect.gif"/></a>
      </td>
    </tr>
  </tbody>
</table>

### 色彩边缘

**色彩边缘**是一种视觉鬼影，表现为沿场景中彩色对象边缘引入的虚假颜色。这些颜色与帧的内容没有有意义的颜色关系。

### 锐度损失

在视频编码过程中删除数据的行为需要丢失一些细节。如果应用了足够的压缩，图像的部分甚至全部可能会损失清晰度，导致外观略微模糊或看齐来很朦胧。

失去清晰度会使图像中的文本难以阅读，因为文本（尤其是小文本）是非常注重细节的内容，微小的改动会显着影响易读性。

### 振铃效应

有损压缩算法会引入[**振铃效应**](https://zh.wikipedia.org/wiki/振鈴效應)，即对象外部区域被压缩算法生成的彩色像素污染的效果。当算法使用跨越对象与其背景之间的清晰边界的块时，就会发生这种情况。这在较高的压缩级别下尤其常见。

[![振铃效应示例](ringing-effects.png)](ringing-effects.png)

请注意上方星星边缘周围的蓝色和粉红色条纹（以及步进和其他重要的压缩伪影）。那些边缘是振铃效应。振铃效应在某些方面类似于[飞蚊噪声](#飞蚊噪声)，除了振铃效果或多或少稳定不变，而蚊子噪音闪烁和移动。

振铃是另一种类型的鬼影，它会使阅读图像中包含的文本变得特别困难。

### 分色

**分色**发生在压缩导致渐变中颜色细节丢失时。图像不是通过区域中的各种颜色进行平滑过渡，而是呈现为块状的，带有接近图像原始外观的颜色斑点。

[![](posterize-effect.jpg)](posterize-effect.jpg)

请注意上面照片中秃鹰（以及背景中的雪鸮）羽毛中颜色的块状。由于这些后化鬼影，在很大程度上丢失了羽毛的细节。

### 轮廓

**轮廓**或**色带**是一种特殊的分色形式，其中色块在图像中形成条带或条纹。当视频使用了低精度的量化配置进行编码时，就会发生这种情况。压缩后的视频的内容中呈现出“分层”的外观，其中不是平滑的渐变和过渡，而是从颜色到颜色的过渡是突然的，导致出现色条。

[![压缩引入轮廓的图像示例](contouring-effect.jpg)](contouring-effect.jpg)

在上面的示例图像中，请注意天空如何具有不同深浅的蓝色带，而不是随着天空颜色向地平线变化而形成一致的渐变。这就是轮廓效果。

### 飞蚊噪声

**飞蚊噪声**是一种时间鬼影，表现为噪声或**边缘繁忙**，表现为闪烁的朦胧或闪烁，大致跟随在具有硬边缘或前景对象和背景之间的尖锐过渡的对象的边缘之外。效果在外观上可能类似于[振铃效应](#振铃效应)。

![](mosquito-effect-sm.png)

上面的照片显示了许多地方的飞蚊噪音，包括在桥梁周围的天空中。在右上角，插图显示了图像中出现蚊子噪声的部分的特写。

飞蚊噪声鬼影最常见于 MPEG 视频中，但只要使用离散余弦变换（DCT）算法就会出现；例如 JPEG 静止图像。

### 运动补偿块边界鬼影

视频压缩通常通过比较两帧并记录它们之间的差异，一帧接一帧，直到视频结束。当相机固定在适当位置或者帧中的对象相对静止时这种方法的效果很好，但如果帧中有大量运动，帧之间的差异数量可能会很大，以至于压缩算法不会做任何事。

**[运动补偿](https://zh.wikipedia.org/wiki/运动补偿)**是一种寻找运动（相机或视野中的物体）并确定移动的物体在各个方向上有多少个像素的偏移的技术。确定后存储这些不能只用相似变化描述的像素偏移。本质上，编码器会找到移动的对象，然后构建一个类似于原始对象但所有对象都被转换到新位置的帧内。理论上，这近似于新帧的外观。然后，为了完成运动补偿，需要找到剩余的差异，然后将对象移动的集合和像素差异的集合存储在表示新帧的数据中。这个描述偏移和像素差异的对象称为**残差帧**。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">原始帧</th>
      <th scope="col" style="width: 216px">帧间差异</th>
      <th scope="col" style="width: 216px">
        运动补偿后的差异
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Original frame of video" src="motion-comp-orig.jpg" /></td>
      <td><img alt="" src="motion-comp-diff.jpg" /></td>
      <td>
        <img alt="右移两个像素后的帧之间的差异" src="motion-comp-compensated.jpg"/>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        观众看到的第一个完整帧。
      </td>
      <td style="vertical-align: top">
        在这里，只看到第一帧和下一帧之间的差异。其他一切都是黑色的。仔细观察，我们可以看到这些差异大部分来自水平摄像机移动，这使其成为运动补偿的良好候选者。
      </td>
      <td style="vertical-align: top">
        为了最小化不同像素的数量，这里我们考虑到相机的平移，首先将第一帧向右移动两个像素，然后再考虑差异。这补偿了相机的平移，允许两个帧之间有更多的重叠。
      </td>
    </tr>
    <tr>
      <th
        colspan="3"
        style="
          font: italic 0.9em Arial, x-locale-body, sans-serif;
          vertical-align: middle;
        "
      >
        图片来自<a
          href="https://en.wikipedia.org/wiki/Motion_compensation#Illustrated_example"
          >维基百科</a
        >
      </th>
    </tr>
  </tbody>
</table>

运动补偿有两种一般类型：**全局运动补偿**和**块运动补偿**。全局运动补偿通常针对摄像机运动进行调整，例如跟踪、小车运动、平移、倾斜、滚动和上下运动。块运动补偿处理局部变化，寻找可以使用运动补偿编码的图像的较小部分。这些块通常在网格中具有固定大小，但有一些运动补偿形式允许可变块大小，甚至允许块重叠。

然而，由于运动补偿可能会出现鬼。这些沿着块边界发生，以产生错误振铃和其他边缘效应的尖锐边缘的形式出现。这些是由于残差帧编码中涉及的数学问题，并且在被下一个关键帧修复之前很容易被注意到。

### 减少帧大小

在某些情况下，减少视频的尺寸以提高视频文件的最终大小可能很有用。虽然播放的大小或流畅度的立即损失可能是一个负面因素，但仔细的决策可以带来良好的最终结果。如果在编码之前将 1080p 视频降低到 720p，则生成的视频会更小，同时具有更高的视觉质量；即使在播放期间按比例放大后，结果也可能比以全尺寸编码原始视频并接受满足你的尺寸要求所需的质量要求更好。

### 降低帧率

同样，你可以完全从视频中删除帧并降低帧速率以进行补偿。这有两个好处：它使整个视频更小，并且更小的尺寸允许运动补偿带来更好的效果。例如，不是计算由于帧间运动而相隔两个像素的两个帧的运动差异，而是每隔一帧跳过一次可能会导致计算得出四个运动像素的差异。这使得相机的整体运动可以用更少的剩余帧来表示。

视频在其内容不再被人眼感知为运动之前可以达到的绝对最小帧速率约为每秒 12 帧。少于这个临界值，视频就变成了一系列静止图像。电影胶片通常是每秒 24 帧，而标准清晰度电视大约是每秒 30 帧（稍微少一点，但足够接近），而高清电视是每秒 24 到 60 帧。任何从 24 FPS 以上的图像通常看起来都会很平滑；30 或 60 FPS 是理想的帧率，具体的取决于需求。

最后，做出哪些牺牲完全取决于你和你的设计团队。

## 编解码器详细信息

### AV1

**AOMedia Video 1**（**AV1**）编解码器是由 [Alliance for Open Media](https://aomedia.org/) 专门为互联网视频设计的开放格式。它实现了比 [VP9](#vp9) 和 [H.265/HEVC](#hevc_h.265) 更高的数据压缩率，比 [AVC](#avc_h.264) 高出多达 50%。AV1 完全免版税，专为 {{HTMLElement("video")}} 元素和 [WebRTC](/zh-CN/docs/Web/API/WebRTC_API) 使用而设计。

AV1 目前提供三种配置文件：**main**、**high** 和 **professional**，并增加了对颜色深度和色度子采样的支持。此外，还指定了一系列**级别**，每个级别都定义了视频属性范围的限制。这些属性包括帧尺寸、以像素为单位的图像区域、显示和解码率、平均和最大比特率，以及编码/解码过程中使用的瓦片和瓦片列的数量限制。

例如，AV1 2.0 级提供的最大帧宽度为 2048 像素，最大高度为 1152 像素，但其最大帧大小（以像素为单位）为 147,456，因此你实际上无法在 2.0 级获得 2048x1152 视频。然而值得注意的是，至少对于 Firefox 和 Chrome，在执行软件解码时实际上忽略了级别，并且解码器在提供的设置下尽其所能播放视频。但是，为了以后的兼容性，你应该保持在你选择的级别的范围内。

目前 AV1 的主要缺点是它非常新，并且大多数的浏览器还未完全支持该编码方式。此外，编码器和解码器仍在针对性能进行优化，硬件编码器和解码器仍主要处于开发阶段而不是生产阶段。因此，将视频编码为 AV1 格式需要很长时间，因为所有工作都是在软件中完成的。

目前，由于这些因素，AV1 还没有准备好成为你的首选视频编解码器，但你应该注意它以备将来使用。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">支持的比特率</th>
      <td>
        <p>
          视视频级别而异；理论最大值在 6.3 级达到 800 Mbps
        </p>
        <p>
          请参阅 AV1 规范的<a href="https://aomediacodec.github.io/av1-spec/#levels">级别表</a>，其中描述了每个级别的最大分辨率和速率。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">支持的帧率</th>
      <td>
        因级别而异；例如 2.0 级最高 30 FPS 而 6.3 级可以达到 120 FPS
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        基于有损 <a href="https://zh.wikipedia.org/wiki/离散余弦变换">DCT 的算法</a>
      </td>
    </tr>
    <tr>
      <th scope="row">支持的帧大小</th>
      <td>
        8 x 8 像素到 65,535 x 65535 像素，每个尺寸允许
        取这些之间的任何值
      </td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">配置</th>
              <th scope="col">颜色深度</th>
              <th scope="col">色度二次采样</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Main</th>
              <td>8 or 10</td>
              <td>4:0:0（灰度）或 4:2:0</td>
            </tr>
            <tr>
              <th scope="row">High</th>
              <td>8 or 10</td>
              <td>4:0:0（灰度）、4:2:0 或 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Professional</th>
              <td>8, 10, or 12</td>
              <td>4:0:0 (greyscale), 4:2:0, 4:2:2, or 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 支持</th>
      <td>支持</td>
    </tr>
    <tr>
      <th scope="row">可变帧速率 (VFR) 支持</th>
      <td>支持</td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">特征</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">AV1 支持</th>
              <td>70</td>
              <td>75</td>
              <td>67</td>
              <td>不支持</td>
              <td>57</td>
              <td>不支持</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">容器支持</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format">ISOBMFF</a>、 MPEG-TS、<a href="/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("RTP")}} / <a href="/zh-CN/docs/Web/API/WebRTC_API">WebRTC</a> 兼容</th>
      <td>支持</td>
    </tr>
    <tr>
      <th scope="row">支持/维护组织</th>
      <td><a href="https://aomedia.org/">开放媒体联盟</a></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">https://aomediacodec.github.io/av1-spec/av1-spec.pdf</a>
      </td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>免版税、开放标准</td>
    </tr>
  </tbody>
</table>

### AVC (H.264)

MPEG-4 规范套件的**高级视频编码**（**AVC**）标准由相同的 ITU H.264 规范和 MPEG-4 Part 10 规范指定。它是一种基于运动补偿的编解码器，如今广泛用于各种媒体，包括广播电视、{{Glossary("RTP")}} 视频会议以及蓝光光盘的视频编解码器。

AVC 高度灵活，具有许多不同功能的配置文件；例如，Constrained Baseline Profile 设计用于视频会议和移动场景，使用的带宽少于 Main Profile（在某些地区用于标清数字电视）或 High Profile（用于蓝光光盘视频） .大多数配置文件使用 8 位颜色分量和 4:2:0 色度二次采样；High 10 Profile 增加了对 10 位颜色的支持，High 10 的高级形式增加了 4:2:2 和 4:4:4 色度二次采样。

AVC 还具有特殊功能，例如支持同一场景的多个视图（多视图视频编码），它允许制作立体视频等。

然而，AVC 是一种专有格式，其技术的众多专利由多方拥有。AVC 媒体的商业使用需要许可证，但 MPEG LA 专利池不需要为以 AVC 格式流式传输的互联网视频收取许可证费用，只要视频对最终用户免费即可。

WebRTC 的非 Web 浏览器实现（任何不包括 JavaScript API 的实现）都*需要*支持 AVC 作为 WebRTC 调用中的编解码器。虽然 Web 浏览器不需要这样做，但有些需要这样做。

在 Web 浏览器的 HTML 内容中，AVC 具有广泛的兼容性，并且许多平台支持 AVC 媒体的硬件编码和解码。但是，在你的项目中选择使用 AVC 之前，请注意其[许可要求](https://www.mpegla.com/programs/avc-h-264/)！

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">支持的比特率</th>
      <td>Varies by level</td>
    </tr>
    <tr>
      <th scope="row">支持的帧率</th>
      <td>Varies by level; up to 300 FPS is possible</td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td> Lossy <a href="https://zh.wikipedia.org/wiki/离散余弦变换">基于 DCT 的算法</a>，虽然可以在图像中创建无损宏块</td>
    </tr>
    <tr>
      <th scope="row">支持的帧大小</th>
      <td>最大 8,192 x 4,320 像素</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <p>一些更常用或者你可能会感兴趣的配置：</p>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">配置</th>
              <th scope="col">颜色深度</th>
              <th scope="col">色度二次采样</th>
            </tr>
            <tr>
              <td>Constrained Baseline (CBP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Baseline (BP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Extended (XP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main (MP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>High (HiP)</td>
              <td>8</td>
              <td>4:0:0（灰度）和 4:2:0</td>
            </tr>
            <tr>
              <td>Progressive High (ProHiP)</td>
              <td>8</td>
              <td>4:0:0（灰度）和 4:2:0</td>
            </tr>
            <tr>
              <td>High 10 (Hi10P)</td>
              <td>8 to 10</td>
              <td>4:0:0（灰度）和 4:2:0</td>
            </tr>
            <tr>
              <td>High 4:2:2 (Hi422P)</td>
              <td>8 to 10</td>
              <td>4:0:0（灰度）、4:2:0 和 4:2:2</td>
            </tr>
            <tr>
              <td>High 4:4:4 Predictive</td>
              <td>8 to 14</td>
              <td>4:0:0（灰度）、4:2:0、4:2:2 和 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 支持</th>
      <td>
        支持; <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">混合对数伽玛</a>或高级 HDR/SL-HDR；两者都是 ATSC 的一部分。
      </td>
    </tr>
    <tr>
      <th scope="row">可变帧速率 (VFR) 支持</th>
      <td>支持</td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">特征</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">AVC/H.264 支持</th>
              <td>4</td>
              <td>12</td>
              <td>35</td>
              <td>9</td>
              <td>25</td>
              <td>3.2</td>
            </tr>
          </tbody>
        </table>
        <p>
          Firefox 对 AVC 的支持取决于操作系统内置或预装的 AVC 编解码器及其容器，以避免专利问题。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">容器支持</th>
      <td>
        <a href="/zh-CN/docs/Web/Media/Formats/Containers#3gp">3GP</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/zh-CN/docs/Web/API/WebRTC_API">WebRTC</a>兼容
      </th>
      <td>支持</td>
    </tr>
    <tr>
      <th scope="row">支持/维护组织</th>
      <td>
        <a href="https://mpeg.chiariglione.org/">MPEG</a> /
        <a href="https://www.itu.int/">ITU</a>
      </td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding">https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding</a><br /><a href="https://www.itu.int/rec/T-REC-H.264">https://www.itu.int/rec/T-REC-H.264</a>
      </td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>
        拥有多项专利。商业用途<a href="https://www.mpegla.com/programs/avc-h-264/">需要许可证</a>。请注意，可能适用多个专利池。
      </td>
    </tr>
  </tbody>
</table>

### H.263

ITU 的 **H.263** 编解码器主要设计用于低带宽情况。特别是，它的重点是 PSTN（公共交换电话网络）、{{Glossary("RTSP")}} 和 SIP（基于 IP 的视频会议）系统上的视频会议。尽管针对低带宽网络进行了优化，但它相当占用 CPU，并且可能无法在低端计算机上充分执行。数据格式类似于 MPEG-4 Part 2。

H.263 从未在网络上广泛使用。H.263 的变体已被用作其他专有格式的基础，例如 Flash 视频或 Sorenson 编解码器。但是，没有任何主流浏览器默认包含 H.263 支持。某些媒体插件已启用对 H.263 媒体的支持。

与大多数编解码器不同，H.263 以每帧（图片）的最大比特率或 **BPPmaxKb** 来定义编码视频的基本原理。编码时为 BPPmaxKb 选择一个值，然后视频每帧不能超过这个值。最终比特率将取决于此、帧速率、压缩以及选择的分辨率和块格式。

H.263 已被 H.264 取代，因此被视为一种传统媒体格式，你通常应该尽可能避免使用。在新项目中使用 H.263 的唯一真正原因是，如果你需要支持非常旧的设备，而 H.263 是你的最佳选择。

H.263 是一种专有格式，[专利](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242) 由包括 Telenor、富士通在内的许多组织和公司持有、摩托罗拉、三星、日立、宝利通、高通等。要使用 H.263，你有法律义务获得相应的许可证。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">支持的比特率</th>
      <td>不受限制，但通常低于 64 Kbps</td>
    </tr>
    <tr>
      <th scope="row">支持的帧率</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>基于有损 <a href="https://zh.wikipedia.org/wiki/离散余弦变换">DCT 的算法</a></td>
    </tr>
    <tr>
      <th scope="row">支持的帧大小</th>
      <td>
        <p>最大 1408 x 1152 像素。</p>
        <p>
          H.263 版本 1 指定了一组受支持的图片尺寸。更高版本可能支持其他分辨率。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        YCbCr;每种图片格式（sub-QCIF、QCIF、CIF、4CIF 或 16CIF）定义帧大小（以像素为单位）以及每个帧使用的亮度和色度样本的行数
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 支持</th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">可变帧速率 (VFR) 支持</th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">特征</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">H.263 support</th>
              <td>不支持</td>
              <td>不支持</td>
              <td>不支持</td>
              <td>不支持</td>
              <td>不支持</td>
              <td>不支持</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">容器支持</th>
      <td>
        <a href="/zh-CN/docs/Web/Media/Formats/Containers#3gp">3GP</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} / <a href="/zh-CN/docs/Web/API/WebRTC_API">WebRTC</a>兼容
      </th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">支持/维护组织</th>
      <td><a href="https://www.itu.int/">ITU</a></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.263/">https://www.itu.int/rec/T-REC-H.263/</a>
      </td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>
        专利限制;需要适当的许可证或许可证。请注意，可能适用多个专利池。
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

**[高效视频编码](http://hevc.info/)**（**HEVC**）编解码器由 ITU 的 **H.265** 以及 MPEG-H 第 2 部分（MPEG-4 仍在开发中的后续版本）。HEVC 旨在支持对包括超高分辨率（包括 8K 视频）在内的视频进行高效编码和解码，其结构专为让软件利用现代处理器而设计。从理论上讲，HEVC 可以达到 [AVC](#avc_h.264) 一半的压缩文件大小，但图像质量相当。

例如，每个编码树单元（CTU）——类似于以前编解码器中使用的宏块——由每个样本的亮度值树以及在同一编码树单元中使用的每个色度样本的色度值树组成，以及任何必需的语法元素。这种结构支持多核轻松处理。

HEVC 的一个有趣特性是主配置文件仅支持每个分量颜色 8 位和 4:2:0 色度子采样。同样有趣的是 4:4:4 视频经过特殊处理。这三个通道没有使用亮度样本（以灰度表示图像的像素）以及 Cb 和 Cr 样本（指示如何更改灰度以创建彩色像素），而是将三个通道视为三个单色图像，每种颜色一个，然后在渲染过程中组合以产生全彩图像。

HEVC 是一种专有格式，受多项专利保护。许可[由 MPEG LA 管理](https://www.mpegla.com/programs/hevc/)；费用向开发者收取，而不是向内容生产者和发行商收取。在决定是否在你的应用或网站中使用 HEVC 之前，请务必查看最新的许可条款和要求！

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">支持的比特率</th>
      <td>Up to 800,000 Kbps</td>
    </tr>
    <tr>
      <th scope="row">支持的帧率</th>
      <td>Varies by level; up to 300 FPS is possible</td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>Lossy <a href="https://zh.wikipedia.org/wiki/离散余弦变换">基于 DCT 的算法</a></td>
    </tr>
    <tr>
      <th scope="row">支持的帧大小</th>
      <td>128 x 96 至 8,192 x 4,320 像素；因配置文件和级别而异</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <p>
          以下信息适用于主要配置文件。还有许多其他可用的配置文件未包括在此处。
        </p>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="col">配置</th>
              <th scope="col">颜色深度</th>
              <th scope="col">色度二次采样</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Main</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main 10</td>
              <td>8 to 10</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main 12</td>
              <td>8 to 12</td>
              <td>4:0:0 和 4:2:0</td>
            </tr>
            <tr>
              <td>Main 4:2:2 10</td>
              <td>8 to 10</td>
              <td>4:0:0, 4:2:0, 和 4:2:2</td>
            </tr>
            <tr>
              <td>Main 4:2:2 12</td>
              <td>8 to 12</td>
              <td>4:0:0, 4:2:0, 和 4:2:2</td>
            </tr>
            <tr>
              <td>Main 4:4:4</td>
              <td>8</td>
              <td>4:0:0, 4:2:0, 4:2:2, 和 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 10</td>
              <td>8 to 10</td>
              <td>4:0:0, 4:2:0, 4:2:2, 和 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 12</td>
              <td>8 to 12</td>
              <td>4:0:0, 4:2:0, 4:2:2, 和 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 16 Intra</td>
              <td>8 to 16</td>
              <td>4:0:0, 4:2:0, 4:2:2, 和 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 支持</th>
      <td>支持</td>
    </tr>
    <tr>
      <th scope="row">可变帧速率（VFR）支持</th>
      <td>支持</td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">特征</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">HEVC / H.265 support</th>
              <td>107</td>
              <td>18</td>
              <td>不支持</td>
              <td>11</td>
              <td>94</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>Chrome 在具有硬件解码器的 Windows 8+、Linux、ChromeOS 设备上支持 HEVC，在所有 macOS Big Sur+ 和 Android 5.0+ 的设备上支持 HEVC。</p>
        <p>Edge（Chromium）在具有硬件解码器的 Windows 10 1709+ 设备上支持 HEVC（需要安装 <a href="https://apps.microsoft.com/store/detail/hevc-video-extension/9NMZLZ57R3T7">HEVC 视频扩展</a>插件），在其他操作系统上的支持情况和 Chrome 一致。Edge（旧版）仅支持 HEVC 硬解码。
        </p>
        <p>由于 HEVC 受到专利保护，Mozilla 不会支持 HEVC。</p>
        <p>Internet Explorer 在具有硬件解码器的设备上支持 HEVC。</p>
        <p>Opera 和其他基于 Chromium 内核的浏览器，支持情况和 Chrome 一致。</p>
        <p>Safari 在所有 macOS High Sierra+ 设备上支持 HEVC。</p>
      </td>
    </tr>
    <tr>
      <th scope="row">容器支持</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
            >ISOBMFF</a
          >、MPEG-TS、<a href="/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/zh-CN/docs/Web/API/WebRTC_API">WebRTC</a>兼容
      </th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">支持/维护组织</th>
      <td>
        <a href="https://www.itu.int/">ITU</a> /
        <a href="https://mpeg.chiariglione.org/">MPEG</a>
      </td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.265">http://www.itu.int/rec/T-REC-H.265</a>
        <br />
        <a href="https://www.iso.org/standard/69668.html">https://www.iso.org/standard/69668.html</a>
      </td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>
        专利限制;确认你遵守<a href="https://www.mpegla.com/programs/hevc/">许可要求</a>。请注意，可能适用多个专利池。
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

**MPEG-4 Video Elemental Stream**（**MP4V-ES**）格式是 MPEG-4 Part 2 视觉标准的一部分。虽然一般来说，MPEG-4 第 2 部分视频没有被任何人使用，因为它缺乏与其他编解码器相关的引人注目的价值，但 MP4V-ES 在移动设备上确实有一些用途。MP4V 本质上是 MPEG-4 容器中的 H.263 编码。

它的主要目的是用于通过 {{Glossary("RTP")}} 会话流式传输 MPEG-4 音频和视频。但是，MP4V-ES 也用于使用 [3GP](/zh-CN/docs/Web/Media/Formats/Containers#3gp) 通过移动连接传输 MPEG-4 音频和视频。

你几乎肯定不想使用这种格式，因为任何主流浏览器都不以有意义的方式支持它，而且已经过时了。这种类型的文件应该有扩展名“.mp4v”，但有时被错误地标记为“.mp4”。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">支持的比特率</th>
      <td>5 Kbps 至 1 Gbps 及更多</td>
    </tr>
    <tr>
      <th scope="row">支持的帧率</th>
      <td>没有具体限制；仅受数据速率限制</td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>Lossy <a href="https://zh.wikipedia.org/wiki/离散余弦变换">基于 DCT 的算法</a></td>
    </tr>
    <tr>
      <th scope="row">支持的帧大小</th>
      <td>最大 4,096 x 4,096 像素</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        支持具有色度二次采样（4:2:0、4:2:2 和 4:4:4）的 YCrCb；每个组件最多 12 位
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 支持</th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">可变帧速率 (VFR) 支持</th>
      <td>支持</td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">特征</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MP4V-ES support</th>
              <td>不支持</td>
              <td>不支持</td>
              <td>支持</td>
              <td>不支持</td>
              <td>不支持</td>
              <td>不支持</td>
            </tr>
          </tbody>
        </table>
        <p>
          Firefox 仅在<a href="/zh-CN/docs/Web/Media/Formats/Containers#3gp">3GP</a>容器中支持 MP4V-ES。
        </p>
        <p>Chrome 不支持 MP4V-ES；但是，Chrome OS 可以。</p>
      </td>
    </tr>
    <tr>
      <th scope="row">容器支持</th>
      <td>
        <a href="/zh-CN/docs/Web/Media/Formats/Containers#3gp">3GP</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} / <a href="/zh-CN/docs/Web/API/WebRTC_API">WebRTC</a>兼容
      </th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">支持/维护组织</th>
      <td><a href="https://mpeg.chiariglione.org/">MPEG</a></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>{{RFC(6416)}}</td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>专利限制;根据需要通过<a href="https://www.mpegla.com/">MPEG LA</a>和/或<a href="https://about.att.com/innovation/ip/patents/mpeg-4">AT&T</a><a href="https://www.mpegla.com/programs/mpeg-4-visual/">获得许可证</a></td></tr>
  </tbody>
</table>

### MPEG-1 Part 2 Video

**MPEG-1 Part 2 Video** 于 1990 年代初推出。与后来的 MPEG 视频标准不同，MPEG-1 完全由 MPEG 创建，没有 {{Glossary("ITU", "ITU's")}} 参与。

因为任何 MPEG-2 解码器也可以播放 MPEG-1 视频，所以它与各种软件和硬件设备兼容。没有与 MPEG-1 视频相关的有效专利，因此可以在没有任何许可问题的情况下使用它。但是，很少有 Web 浏览器在不支持插件的情况下支持 MPEG-1 视频，并且随着 Web 浏览器中不推荐使用插件，这些通常不再可用。这使得 MPEG-1 在网站和 Web 应用程序中成为一个糟糕的选择。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">支持的比特率</th>
      <td>最大 1.5 Mbps</td>
    </tr>
    <tr>
      <th scope="row">支持的帧率</th>
      <td>
        23.976 FPS, 24 FPS, 25 FPS, 29.97 FPS, 30 FPS, 50 FPS, 59.94 FPS, and 60 FPS
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        基于有损 <a href="https://zh.wikipedia.org/wiki/离散余弦变换">DCT 的算法</a>
      </td>
    </tr>
    <tr>
      <th scope="row">支持的帧大小</th>
      <td>Up to 4,095 x 4,095 pixels</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        具有 4:2:0 色度二次采样的 Y'CbCr，每个分量最多 12 位
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 支持</th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">可变帧速率 (VFR) 支持</th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">特征</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MPEG-1 support</th>
              <td>不支持</td>
              <td>不支持</td>
              <td>不支持</td>
              <td>不支持</td>
              <td>不支持</td>
              <td>支持</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">容器支持</th>
      <td>MPEG</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} / <a href="/zh-CN/docs/Web/API/WebRTC_API">WebRTC</a>兼容
      </th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">支持/维护组织</th>
      <td><a href="https://mpeg.chiariglione.org/">MPEG</a></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://www.iso.org/standard/22411.html">https://www.iso.org/standard/22411.html</a>
      </td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>
        Proprietary; however, all patents have expired, so MPEG-1 may be used freely
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Part 2 Video

[**MPEG-2 Part 2**](https://zh.wikipedia.org/wiki/H.262) 是 MPEG-2 规范定义的视频格式，也偶尔会被提及通过其 {{Glossary("ITU")}} 名称，H.262。它与 MPEG-1 视频非常相似——事实上，任何 MPEG-2 播放器都可以自动处理 MPEG-1，而无需任何特殊工作——除了它已扩展为支持更高的比特率和增强的编码技术。

目标是允许 MPEG-2 压缩标清电视，因此也支持隔行扫描视频。标准清晰度压缩率和生成的视频质量需要足够好，MPEG-2 是用于 DVD 视频媒体的主要视频编解码器。

MPEG-2 有几个具有不同功能的配置文件。然后每个配置文件有四个级别可用，每个级别都会增加视频的属性，例如帧速率、分辨率、比特率等。大多数配置文件使用具有 4:2:0 色度二次采样的 Y'CbCr，但更高级的配置文件也支持 4:2:2。此外，还有四个级别，每个级别都支持更大的帧尺寸和比特率。例如，北美使用的电视 [ATSC](https://zh.wikipedia.org/wiki/ATSC) 规范使用高级主配置文件支持高清 MPEG-2 视频，允许 4:2:0 视频，1920 x 1080 (30 FPS) 和 1280 x 720 (60 FPS)，最大比特率为 80 Mbps。

但是，很少有 Web 浏览器在使用插件的情况下支持 MPEG-2，并且随着 Web 浏览器中逐渐弃用插件，这些通常不再可用。这使得 MPEG-2 在网站和 Web 应用程序中成为一个糟糕的选择。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">支持的比特率</th>
      <td>最高 100 Mbps；因等级和配置而异</td>
    </tr>
    <tr>
      <th scope="row">支持的帧率</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">缩写</th>
              <th scope="col">等级名称</th>
              <th scope="col">支持的帧率</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>23.9, 24, 25, 29.97, 30</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Main Level</td>
              <td>23.976, 24, 25, 29.97, 30</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>High 1440</td>
              <td>23.976, 24, 26, 29.97, 30, 50, 59.94, 60</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>High Level</td>
              <td>23.976, 24, 26, 29.97, 30, 50, 59.94, 60</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        基于有损 <a href="https://zh.wikipedia.org/wiki/离散余弦变换">DCT 的算法</a>
      </td>
    </tr>
    <tr>
      <th scope="row">支持的帧大小</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">缩写</th>
              <th scope="col">等级名称</th>
              <th scope="col">Maximum frame size</th>
            </tr>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>352 x 288 pixels</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Main Level</td>
              <td>720 x 576 pixels</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>High 1440</td>
              <td>1440 x 1152 pixels</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>High Level</td>
              <td>1920 x 1152 pixels</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        Y'CbCr 在大多数配置文件中具有 4:2:0 色度二次采样； “High”和“4:2:2”配置文件也支持 4:2:2 色度二次采样。
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 支持</th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">可变帧速率 (VFR) 支持</th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">特征</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MPEG-2 support</th>
              <td>不支持</td>
              <td>不支持</td>
              <td>不支持</td>
              <td>不支持</td>
              <td>不支持</td>
              <td>支持</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">容器支持</th>
      <td>
        <a href="/zh-CN/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>、MPEG-TS（MPEG 传输流）、<a href="/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} / <a href="/zh-CN/docs/Web/API/WebRTC_API">WebRTC</a>兼容
      </th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">支持/维护组织</th>
      <td>
        <a href="https://mpeg.chiariglione.org/">MPEG</a> /
        <a href="https://www.itu.int/">ITU</a>
      </td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.262">https://www.itu.int/rec/T-REC-H.262</a>
        <br />
        <a href="https://www.iso.org/standard/61152.html">https://www.iso.org/standard/61152.html</a>
      </td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>
        专利限制;截至 2019 年 4 月 1 日，除马来西亚和菲律宾外，所有专利均已在全球范围内到期，因此 MPEG-2 可以在这两个国家之外自由使用。专利由<a href="https://www.mpegla.com/programs/mpeg-2/">MPEG LA</a>授权。
      </td>
    </tr>
  </tbody>
</table>

### Theora

**[Theora](https://zh.wikipedia.org/wiki/Theora)**，由 [Xiph.org](https://xiph.org/) 开发，是一个开放且免费的视频编解码器，可以无需版税或许可即可使用。Theora 在质量和压缩率上可与 MPEG-4 Part 2 Visual 和 AVC 相媲美，即使不是顶级的视频编码选择，它也是一个非常好的选择。但它不受任何许可问题的影响以及相对较低的 CPU 资源要求使其成为许多软件和 Web 项目的热门选择。低 CPU 占用影响特别有用，因为没有可用于 Theora 的硬件解码器。

Theora 最初基于 On2 Technologies 的 VC3 编解码器。该编解码器及其规范是在 LGPL 许可下发布的，并委托给 Xiph.org，后者随后将其开发为 Theora 标准。

Theora 的一个缺点是它仅支持每个颜色分量 8 位，无法选择使用 10 位或更多位以避免色带。也就是说，每个组件 8 位仍然是当今最常用的颜色格式，因此在大多数情况下，这只是一个小小的不便。此外，Theora 只能在 Ogg 容器中使用。然而，最大的缺点是 Safari 不支持它，这使得 Theora 不仅在 macOS 上不可用，而且在数以百万计的 iPhone 和 iPad 上都无法使用。

[Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/) 提供了有关 Theora 以及它在其中使用的 Ogg 容器格式的更多详细信息。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">支持的比特率</th>
      <td>Up to 2 Gbps</td>
    </tr>
    <tr>
      <th scope="row">支持的帧率</th>
      <td>
        无限制;支持任何非零值。帧速率指定为 32 位分子和 32 位分母，以允许非整数帧速率。
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        基于有损 <a href="https://zh.wikipedia.org/wiki/离散余弦变换">DCT 的算法</a>
      </td>
    </tr>
    <tr>
      <th scope="row">支持的帧大小</th>
      <td>
        Any combination of width and height up to 1,048,560 x 1,048,560 pixels
      </td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        具有 4:2:0、4:2:2 和 4:4:4 色度二次采样的 Y'CbCr，每个分量 8 位
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 支持</th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">可变帧速率 (VFR) 支持</th>
      <td>
        <p>Yes</p>
        <p>
          虽然 Theora 不支持单个流中的可变帧速率 (VFR)，但多个流可以在单个文件中链接在一起，并且每个流都可以有自己的帧速率，从而允许本质上是 VFR。但是，如果帧速率需要频繁更改，这是不切实际的。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">特征</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">Theora support</th>
              <td>3</td>
              <td>支持</td>
              <td>3.5</td>
              <td>不支持</td>
              <td>10.5</td>
              <td>不支持</td>
            </tr>
          </tbody>
        </table>
        <p>
          Edge 通过可选的 <a href="ttps://apps.microsoft.com/store/detail/web-媒体扩展/9N5TDP8VCMHS">Web 媒体扩展</a>插件支持 Theora。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">容器支持</th>
      <td><a href="/zh-CN/docs/Web/Media/Formats/Containers#ogg">Ogg</a></td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} / <a href="/zh-CN/docs/Web/API/WebRTC_API">WebRTC</a>兼容
      </th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">支持/维护组织</th>
      <td><a href="https://www.xiph.org/">Xiph.org</a></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://www.theora.org/doc/">https://www.theora.org/doc/</a>
      </td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>开放且免版税和任何其他许可要求</td>
    </tr>
  </tbody>
</table>

### VP8

**Video Processor 8**（**VP8**）编解码器最初由 On2 Technologies 创建。在收购 On2 之后，Google 发布了 VP8 作为一种开放且免版税的视频格式，并承诺不强制执行相关专利。在质量和压缩率方面，VP8 可与 [AVC](#avc_h.264) 媲美。

如果浏览器支持，VP8 允许带有 Alpha 通道的视频，允许视频播放的背景可以通过视频看到，达到每个像素的 Alpha 分量指定的程度。

HTML 内容中的 VP8 有很好的浏览器支持，尤其是在 [WebM](/zh-CN/docs/Web/Media/Formats/Containers#webm) 文件中。这使得 VP8 成为你的内容的理想候选者，尽管如果你可以使用 VP9，它是一个更好的选择。Web 浏览器是*需要*支持 WebRTC 的 VP8，但并非所有这样做的浏览器都支持 HTML 音频和视频元素。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">支持的比特率</th>
      <td>无限制;除非强制执行基于级别的限制，否则没有最大值</td>
    </tr>
    <tr>
      <th scope="row">支持的帧率</th>
      <td>无限制</td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        基于有损 <a href="https://zh.wikipedia.org/wiki/离散余弦变换">DCT 的算法</a>
      </td>
    </tr>
    <tr>
      <th scope="row">支持的帧大小</th>
      <td>Up to 16,384 x 16,384 pixels</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>Y'CbCr 4:2:0 色度二次采样，每个分量 8 位</td>
    </tr>
    <tr>
      <th scope="row">HDR 支持</th>
      <td>不支持</td>
    </tr>
    <tr>
      <th scope="row">可变帧速率 (VFR) 支持</th>
      <td>支持</td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">特征</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">VP8 support</th>
              <td>25</td>
              <td>14</td>
              <td>4</td>
              <td>9</td>
              <td>16</td>
              <td>12.1</td>
            </tr>
            <tr>
              <th scope="row">MSE 兼容性</th>
              <td></td>
              <td></td>
              <td>支持</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p>对 VP8 的边缘支持需要使用<a href="/zh-CN/docs/Web/API/Media_Source_Extensions_API">媒体源扩展</a>。</p>
        <p>macOS：Safari 14.1 在 WebRTC、MSE 和视频元素中支持 VP8。Safari 12.2 仅支持 WebRTC 连接中的 VP8。</p>
        <p>iOS：Safari 12.1 及更高版本仅在 WebRTC 连接中支持 VP8。</p>
        <p>当没有 H.264 硬件解码器可用时，Firefox 仅在 MSE 中支持 VP8。使用 {{domxref("MediaSource.isTypeSupported()")}} 检查可用性。</p>
      </td>
    </tr>
    <tr>
      <th scope="row">容器支持</th>
      <td>
        <a href="/zh-CN/docs/Web/Media/Formats/Containers#3gp">3GP</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#ogg">Ogg</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} / <a href="/zh-CN/docs/Web/API/WebRTC_API">WebRTC</a> 兼容</th>
      <td>支持; VP8 是 WebRTC 规范要求的编解码器之一</td>
    </tr>
    <tr>
      <th scope="row">支持/维护组织</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>{{RFC(6386)}}</td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>开放且免版税和任何其他许可要求</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9**（**VP9**）是 Google 开发的旧 VP8 标准的继承者。与 VP8 一样，VP9 是完全开放且免版税的。其编解码性能与 AVC 相当或略快，但质量更好。VP9 的编码视频质量在相似比特率下可与 HEVC 相媲美。

VP9 的主要配置文件仅支持 4:2:0 色度子采样级别的 8 位色深，但其配置文件包括对更深颜色的支持和全范围的色度子采样模式。它支持多种 HDR 实现，并在选择帧速率、纵横比和帧大小方面提供了很大的自由度。

VP9 被浏览器广泛支持，并且编解码器的硬件实现相当普遍。VP9 是 [WebM](/zh-CN/docs/Web/Media/Formats/Containers#webm) 规定的两个视频编解码器之一（另一个是 [VP8](#vp8)）。但请注意，Safari 对 WebM 和 VP9 的支持仅在 14.1 版中引入，因此如果你选择使用 VP9，请考虑为 iPhone、iPad 和 Mac 用户提供备用格式，例如 AVC 或 HEVC。

如果你能够使用 WebM 容器（并且可以在需要时提供后备视频），VP9 是一个不错的选择。如果你希望使用开放编解码器而不是专有编解码器，则尤其如此。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">支持的比特率</th>
      <td>无限制；除非强制执行基于级别的限制，否则没有最大值</td>
    </tr>
    <tr>
      <th scope="row">支持的帧率</th>
      <td>无限制</td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        基于有损 <a href="https://zh.wikipedia.org/wiki/离散余弦变换">DCT 的算法</a>
      </td>
    </tr>
    <tr>
      <th scope="row">支持的帧大小</th>
      <td>Up to 65,536 x 65,536 pixels</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">配置</th>
              <th scope="col">颜色深度</th>
              <th scope="col">色度二次采样</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Profile 0</th>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profile 1</th>
              <td>8</td>
              <td>4:2:0, 4:2:2, and 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Profile 2</th>
              <td>10 to 12</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profile 3</th>
              <td>10 to 12</td>
              <td>4:2:0, 4:2:2, and f:4:4</td>
            </tr>
          </tbody>
        </table>
        <p>
          色彩空间支持：<a href="https://zh.wikipedia.org/wiki/BT.601">Rec. 601</a>、<a href="https://zh.wikipedia.org/wiki/Rec._709">Rec. 709</a>、<a href="https://en.wikipedia.org/wiki/Rec._2020">Rec. 2020</a>、<a href="https://zh.wikipedia.org/wiki/NTSC制式">SMPTE C</a>、MPTE-240M（已过时；由 Rec. 709 取代），以及
          <a href="https://zh.wikipedia.org/wiki/SRGB色彩空间">sRGB</a>。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 支持</th>
      <td>
        支持；HDR10+、<a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">HLG</a> 和
        <a href="https://en.wikipedia.org/wiki/Perceptual_Quantizer">PQ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">可变帧速率（VFR）支持</th>
      <td>支持</td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">特征</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">VP9 支持</th>
              <td>29</td>
              <td>14</td>
              <td>28</td>
              <td>不支持</td>
              <td>10.6</td>
              <td>14 (macOS), 15 (iOS)</td>
            </tr>
            <tr>
              <th scope="row">MSE 兼容性</th>
              <td></td>
              <td></td>
              <td>支持</td>
              <td></td>
              <td></td>
              <td>14 (macOS 11.3+), 15 (iOS)</td>
            </tr>
          </tbody>
        </table>
        <p>
          当没有 H.264 硬件解码器可用时，Firefox 仅在 MSE 中支持 VP8。使用 {{domxref("MediaSource.isTypeSupported()")}} 检查可用性。
        </p>
        <ul>
          <li>Safari 14：（macOS、iOS）在 WebM 中支持 VP9 for WebRTC。</li>
          <li>Safari 14：(macOS) 从 MacOS 11.3 开始支持<a href="/zh-CN/docs/Web/API/Media_Source_Extensions_API">MSE</a>中的 VP9。</li>
          <li>Safari 14.1：（macOS）支持“无处不在”包含 VP9 视频轨道的 WebM 文件。</li>
          <li>Safari 15：（macOS）在 <a href="/zh-CN/docs/Web/API/Media_Source_Extensions_API">MSE</a> 的 WebM 中支持 VP9。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">容器支持</th>
      <td>
        <a href="/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#ogg">Ogg</a>、<a href="/zh-CN/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} / <a href="/zh-CN/docs/Web/API/WebRTC_API">WebRTC</a> 兼容
      </th>
      <td>支持</td>
    </tr>
    <tr>
      <th scope="row">支持/维护组织</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://www.webmproject.org/vp9/">https://www.webmproject.org/vp9/</a>
      </td>
    </tr>
    <tr>
      <th scope="row">许可</th>
      <td>开放且免版税和任何其他许可要求</td>
    </tr>
  </tbody>
</table>

## 选择视频编解码器

在决定使用那种编码器之前请先确定以下问题的答案：

- 你希望使用开放格式，还是要考虑专有格式？
- 你是否有资源为你的每个视频制作不止一种格式？提供后备选项的能力极大地简化了决策过程。有没有你愿意牺牲兼容性的浏览器？
- 你需要支持的最旧的网络浏览器版本是多少？例如，你是否需要在过去五年内发布的每个浏览器上工作，还是仅在过去一年内工作？

在以下部分中，我们为特定用例提供推荐的编解码器选择。对于每个用例，你最多可以找到两个建议。如果被认为最适合用例的编解码器是专有的或可能需要支付版税，则提供两个选项：第一个是开放且免版税的选项，然后是专有选项。

如果你只能为每个视频提供一个版本，则可以选择最适合你需求的格式。第一个建议是质量、性能和兼容性的良好组合。第二种选择将是最广泛兼容的选择，但会牺牲一些质量、性能和/或大小。

### 日常视频推荐

首先，让我们看看在典型网站上展示的视频的最佳选择，例如博客、信息网站、使用视频来展示产品的小型企业网站（但不是视频本身就是产品的地方）等等。

1. **[WebM](/zh-CN/docs/Web/Media/Formats/Containers#webm)** 容器，使用 **[VP9](#vp9)** 视频编解码器和 **[Opus](/zh-CN/docs/Web/Media/Formats/Audio_codecs#opus)** 音频编解码器。这些都是开放的、免版税的格式，通常都得到很好的支持，尽管只是在最近的浏览器中，这就是为什么需要准备一个备用视频。

   ```html
   <video controls src="filename.webm"></video>
   ```

2. **[MP4](/zh-CN/docs/Web/Media/Formats/Containers#mpeg-4_mp4)** 容器和 **[AVC](#avc_h.264)**（**H.264**）视频编解码器，最好使用 **[AAC](/zh-CN/docs/Web/Media/Formats/Audio_codecs#aac)** 作为你的音频编解码器。这是因为带有 AVC 和 AAC 编解码器的 MP4 容器是一种广泛支持的组合——事实上，每个主流浏览器都支持它——而且质量通常对大多数用例都很好。但是，请确保验证你是否符合许可证要求。

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> **备注：** 无论 {{HTMLElement("video")}} 元素中是否有任何 {{HTMLElement("source")}} 元素，{{HTMLElement("video")}} 元素都是需要闭合的 `</video>` 标签。

### 高质量视频演示的建议

如果你的任务是以尽可能高的质量呈现视频，你可能会从提供尽可能多的格式中受益，因为能够提供最佳质量的编解码器往往也是最新的，因此最有可能在浏览器中出现空白兼容性。

1. 一个 WebM 容器，视频使用 AV1，音频使用 Opus。如果你在编码 AV1 时能够使用 High 或 Professional 配置文件，在 6.3 等高级别，你可以在 4K 或 8K 分辨率下获得非常高的比特率，同时保持出色的视频质量。使用 Opus 的 Fullband 配置文件以 48 kHz 采样率对音频进行编码可最大限度地提高捕获的音频带宽，几乎可以捕获人类听觉范围内的整个频率范围。

   ```html
   <video controls src="filename.webm"></video>
   ```

2. 使用 [HEVC](#hevc_h.265) 编解码器的 MP4 容器，使用高级 Main 配置文件之一，例如具有 10 或 12 位色深的 Main 4:2:2，甚至是 Main 4:4:4 个配置文件，每个组件最多 16 位。在高比特率下，这提供了出色的图形质量和出色的色彩再现。此外，你可以选择包含 HDR 元数据以提供高动态范围视频。对于音频，请以高采样率（至少 48 kHz，但理想情况下为 96 kHz）使用 AAC 编解码器，并使用复杂编码而不是快速编码进行编码。

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### 归档、编辑或混音建议

目前在 Web 浏览器中通常没有任何无损（甚至接近无损）的视频编解码器。原因很简单：视频太大。根据定义，无损压缩不如有损压缩有效。例如，具有 4:2:0 色度二次采样的未压缩 1080p 视频（1920 x 1080 像素）至少需要 1.5 Gbps。使用诸如 FFV1（Web 浏览器不支持）之类的无损压缩可能会将其降低到 600 Mbps 左右，具体取决于内容。这仍然是每秒通过连接泵送的大量比特，并且目前对于任何实际使用都不实用。

即使某些有损编解码器具有可用的无损模式，情况也是如此；当前的任何网络浏览器都没有实现无损模式。你可以做的最好的事情是选择使用有损压缩的高质量编解码器并将其配置为执行尽可能少的压缩。一种方法是将编解码器配置为使用“快速”压缩，这本质上意味着实现的压缩更少。

#### 在外部准备视频

要从你的网站或应用程序外部为存档目的准备视频，请使用对原始未压缩视频数据执行压缩的实用程序。例如，免费的 [x264](https://www.videolan.org/developers/x264.html) 实用程序可用于使用非常高的比特率对 [AVC](#avc_h.264) 格式的视频进行编码：

```bash
x264 --crf 18 -preset ultrafast --output outfilename.mp4 infile
```

虽然其他编解码器在大幅压缩视频时在最佳情况下可能能获得更好的质量，但通常这些编解码器的速度都很慢，因此，在总体质量相似的情况下，这种近乎无损的压缩方式要快很多。

#### 录制视频

考虑到你可以获得多接近无损的限制，你可以考虑使用 [AVC](#avc_h.264) 或 [AV1](#av1)。例如，如果你使用 [MediaStream Recording API](/zh-CN/docs/Web/API/MediaStream_Recording_API) 录制视频，则在创建 {{domxref("MediaRecorder")}} 时可能会使用如下代码目的：

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

此示例创建一个 12 位色彩及使用 4:4:4 色度二次采样的 BT.2100 HDR 配置，并且通过 [FLAC](/zh-CN/docs/Web/Media/Formats/Audio_codecs#flac) 录制无损音频的 `MediaRecorder`。生成的文件的视频和音频轨道之间共享的比特率不超过 800Mbps。你可能需要根据硬件性能、需求和你选择使用的特定编解码器来调整这些值。这种比特率对于网络传输显然不现实，可能只在本地使用。

将 `codecs` 参数的值分解为其点描述的属性，我们看到以下内容：

| Value  | Description                                                                                                                                                                                                                                                                              |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | The four-character code (4CC) designation identifying the [AV1](#av1) codec.                                                                                                                                                                                                             |
| `2`    | The profile. A value of 2 indicates the Professional profile. A value of 1 is the High profile, while a value of 0 would specify the Main profile.                                                                                                                                       |
| `19H`  | The level and tier. This value comes from the table in section [A.3](https://aomediacodec.github.io/av1-spec/#levels) of the AV1 specification, and indicates the high tier of Level 6.3.                                                                                                |
| `12`   | The color depth. This indicates 12 bits per component. Other possible values are 8 and 10, but 12 is the highest-accuracy color representation available in AV1.                                                                                                                         |
| `0`    | The monochrome mode flag. If 1, then no chroma planes would be recorded, and all data should be strictly luma data, resulting in a greyscale image. We've specified 0 because we want color.                                                                                             |
| `000`  | The chroma subsampling mode, taken from [section 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in the AV1 specification. A value of 000, combined with the monochrome mode value 0, indicates that we want 4:4:4 chroma subsampling, or no loss of color data. |
| `09`   | The color primaries to use. This value comes from [section 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in the AV1 specification; 9 indicates that we want to use BT.2020 color, which is used for HDR.                                                       |
| `16`   | The transfer characteristics to use. This comes from [section 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) as well; 16 indicates that we want to use the characteristics for BT.2100 PQ color.                                                                |
| `09`   | The matrix coefficients to use, from the [section 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) again. A value of 9 specifies that we want to use BT.2020 with variable luminance; this is also known as BT.2010 YbCbCr.                                       |
| `1`    | The video "full range" flag. A value of 1 indicates that we want the full color range to be used.                                                                                                                                                                                        |

你选择编解码器的文档可能会提供你在构建 `codecs` 参数时将使用的信息。

## 参见

- [网页音频编码指南](/zh-CN/docs/Web/Media/Formats/Audio_codecs)
- [媒体容器格式（文件类型）](/zh-CN/docs/Web/Media/Formats/Containers)
- [处理 web 内容中的媒体支持问题](/zh-CN/docs/Web/Media/Formats/Support_issues)
- [WebRTC 使用的编解码器](/zh-CN/docs/Web/Media/Formats/WebRTC_codecs)
- {{RFC(6381)}}：“Bucket”媒体类型的“编解码器”和“配置文件”参数
- {{RFC(5334)}}：Ogg 媒体类型
- {{RFC(3839)}}：3GPP 多媒体文件的 MIME 类型注册
- {{RFC(4381)}}：3GPP2 多媒体文件的 MIME 类型注册
- {{RFC(4337)}}：MPEG-4 多媒体文件的 MIME 类型注册
- [Opera 浏览器中的视频编解码器](https://dev.opera.com/articles/introduction-html5-video/#codecs--the-fly-in-the-ointment)
- IE 浏览器中的[视频（video）](/zh-CN/docs/Web/API/HTMLVideoElement)和[音频（audio）](/zh-CN/docs/Web/HTML/Element/audio)编解码器
- [Chrome 浏览器中的视频和音频解码器](https://www.chromium.org/audio-video/)

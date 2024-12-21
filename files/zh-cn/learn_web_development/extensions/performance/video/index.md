---
title: 多媒体：视频
slug: Learn_web_development/Extensions/Performance/video
original_slug: Learn/Performance/video
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance")}}

正如我们在前一节中了解到的，媒体（即图片和视频）占了一般网站下载量的 70% 以上。我们已经学过了如何优化图片。本文将研究如何优化视频来提高 web 性能。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机知识，
        <a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >已安装基本软件</a
        >，以及<a
         href="/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website"
         >客户端 web 技术</a
        >的基本知识。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解各种视频格式及其对性能的影响，以及如何在为每个浏览器提供最小的视频文件类型的同时减少视频对整个页面加载时间的影响。
      </td>
    </tr>
  </tbody>
</table>

## 为什么优化你的多媒体？

对于一般网站来说，[25% 的带宽来自视频](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367)。优化视频有望带来巨大的带宽节省，而这又可以转化为更好的网站性能。

## 优化视频传输

下面的小节描述了以下优化技术：

- [压缩所有视频](#压缩所有视频)
- [优化 `<source>` 顺序](#优化_source_顺序)
- [视频自动播放](#视频自动播放)
- [从静音的视频中移除音频](#从静音的_hero_视频中移除音频)
- [优化视频预加载](#视频预加载)
- [考虑流媒体](#考虑流媒体)

### 压缩所有视频

大多数视频压缩工作都是比较视频内相邻帧之间的细节，目的是移除两帧中相同的细节。压缩视频并导出多种视频格式，包括 WebM、MPEG-4/H.264 和 Ogg/Theora。

你的视频编辑软件可能有减小文件大小的功能。如果没有，有在线工具，比如 [FFmpeg](https://www.ffmpeg.org/)（将在后面的小节讨论）可以对视频进行编码、解码、转换以及其他优化功能。

### 优化 `<source>` 顺序

按从小到大的顺序排序视频源。例如，给定三种分别压缩为 10 MB、12 MB 和 13 MB 的不同格式的视频，先声明最小的，最后声明最大的：

```html
<video width="400" height="300" controls="controls">
  <!-- WebM: 10 MB -->
  <source src="video.webm" type="video/webm" />
  <!-- MPEG-4/H.264: 12 MB -->
  <source src="video.mp4" type="video/mp4" />
  <!-- Ogg/Theora: 13 MB -->
  <source src="video.ogv" type="video/ogv" />
</video>
```

浏览器会下载它所理解的第一个格式。这样做的目的是优先提供较小的版本。对于最小的版本，应确保压缩程度最高的视频质量仍然可以。有一些压缩算法可以使视频看起来（很糟糕）像动画 GIF。尽管一个 128 Kb 视频相比 10 MB 在下载方面貌似可以提供更好的用户体验，但是模糊的 GIF 似的视频可能会对品牌或项目产生不好的影响。

参阅 [CanIUse.com](https://caniuse.com/#search=video) 了解当前浏览器对视频和其他媒体类型的支持。

### 视频自动播放

要确保背景视频自动循环播放，你必须在视频标签中添加几个属性：`autoplay`、`muted` 和`playsinline`。

```html
<video
  autoplay=""
  loop=""
  muted="true"
  playsinline=""
  src="backgroundvideo.mp4"></video>
```

虽然 `loop` 和 `autoplay` 足以使视频循环和自动播放，但想要在移动浏览器中自动播放的话，`muted` 属性是必需的。

`Playsinline` 对于移动 Safari 浏览器来说是必需的，它允许视频播放时不强制全屏模式。

### 从静音的 hero 视频中移除音频

对于 hero 视频或者其他没有音频的视频，移除音频是明智的选择。

```html
<video autoplay="" loop="" muted="true" playsinline="" id="hero-video">
  <source src="banner_video.webm" type='video/webm; codecs="vp8, vorbis"' />
  <source src="web_banner.mp4" type="video/mp4" />
</video>
```

这段 hero 视频代码（上面）常用于会议网站和企业主页。它包含了一个自动播放、循环和静音的视频。没有控制按钮，所以无法听到声音。音频通常是无声的，但仍然存在，而且仍然占用带宽。没有理由在永远静音的视频中提供音频。**删除音频可以节省 20% 的带宽。**

根据你选择的软件，你可能可以在导出和压缩过程中移除音频。如果不能，一个名为 [FFmpeg](https://www.ffmpeg.org/) 的免费工具可以帮你做到。这是用 FFmpeg 移除音频的命令字符串：

```bash
ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4
```

### 视频预加载

预加载属性有三个可用选项：`auto`|`metadata`|`none`。默认设置是 `metadata`。这些设置控制了在页面加载时下载多少视频文件。你可以通过延迟下载较少受欢迎的视频来节省数据。

设置 `preload="none"` 的结果是在播放开始之前，视频不会被下载。这会延迟启动，但对于播放概率较低的视频，可以节省大量数据。

为了更适度的带宽节省，可以设置 `preload="metadata"`，这可能会在页面加载时下载视频的 3%。这对于一些小型或中等大小的文件来说是一个有用的选项。

将设置改为 `auto` 告诉浏览器自动下载整个视频。只有当播放可能性非常高时才这样做。否则，这将浪费大量的带宽。

### 考虑流媒体

[视频流媒体允许适当的视频大小和带宽](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/)（基于网络速度）被传送到最终用户。类似于响应式图像，正确大小的视频被传送到浏览器，确保视频快速启动、缓冲少以及播放优化。

## 结论

优化视频有可能显著提高网站性能。视频文件相比其他网站文件相对较大，因此始终值得关注。本文解释了如何通过减少文件大小、使用（HTML）下载设置和流媒体来优化网站视频。

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance")}}

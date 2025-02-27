---
title: 感知性能
slug: Learn_web_development/Extensions/Performance/Perceived_performance
original_slug: Learn/Performance/Perceived_performance
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/what_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}

[**感知性能**](/zh-CN/docs/Glossary/Perceived_performance)是用户对网站速度的感受。用户如何看待性能与任何客观统计数据一样重要，甚至更重要，但它是主观的，并且不易测量。感知性能是用户视角，而不是指标。

本文简要介绍了感知性能，着眼于用户的感知，以及可以使用哪些客观工具来衡量这类主观因素。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        <a href="/zh-CN/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装基本的软件</a
        >、<a href="/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website"
          >客户端 web 技术</a
        >的基础知识。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>基本了解用户对 Web 性能的看法。</td>
    </tr>
  </tbody>
</table>

性能是关于用户视角的。网站加载和渲染的感觉速度对用户体验的影响大于网站实际加载和渲染的速度。即使某个操作会花费很长时间（可能是由于延迟或[主线程](/zh-CN/docs/Glossary/Main_thread)不可用），通过显示一个加载旋转器，或一系列有用的提示和建议（或笑话，或任何你认为合适的内容），也可以在用户等待时保持他们的参与度。这种方法比什么都不显示要好得多，什么都不显示会让用户感觉等待的时间更长，可能还会让用户认为网站出了故障并放弃等待。

## 性能指标

目前没有一种单一的指标或测试可以量化用户的“感受”。但是，有一些指标可以作为“有用的指示”：

- [首次绘制](/zh-CN/docs/Glossary/First_paint)
  - : 第一次绘制运算开始的时间。请注意，这种变化可能是不可见的；它可以是简单的背景颜色更新，也可以是更不那么显眼的内容。
- [首次有内容绘制](/zh-CN/docs/Glossary/First_contentful_paint)（FCP）
  - : 第一次重要渲染（例如文本、前景或背景图像、画布或 SVG 等）开始的时间。注意，这些内容不一定是有用或有意义的。
- [首次有意义绘制](/zh-CN/docs/Glossary/First_meaningful_paint)（FMP）
  - : 有用的内容渲染到屏幕上的时间。
- [最大内容绘制](https://wicg.github.io/largest-contentful-paint/)（LCP）
  - : 视口中可见的最大内容元素的渲染时间。
- [速度指数](/zh-CN/docs/Glossary/Speed_index)
  - : 测量可见屏幕上像素绘制的平均时间。
- [可交互时间](/zh-CN/docs/Glossary/Time_to_interactive)
  - : UI 可用于用户交互的时间（即加载过程中最后一个[长任务](/zh-CN/docs/Glossary/Long_task)完成的时间）。

## 提升感知性能

这里有一些技巧有助于提升性能：

### 最小化初始加载

要提升感知性能，请最小化页面初始加载。换句话说，首先下载用户将立即与之交互的内容，然后在“后台”下载其余内容。实际下载的内容总量可能会增加，但用户只需*等待*非常少的内容，因此会感觉下载更快了。

将交互功能与内容分开，并加载初始加载时可见的文本、样式和图像。延迟或懒加载在初始页面加载时未使用或不可见的图像或脚本。此外，你应该优化需要加载的资源。图像和视频应以最佳格式、经过压缩和正确尺寸提供。

### 防止内容跳转和其他重排

图片或其他资源导致内容下移或跳转到不同位置（例如第三方广告的加载），会让页面感觉仍在加载中，这对感知性能是不利的。若内容重排不是由用户交互触发，则尤其会损害用户体验。如果某些资源的加载速度比其他资源慢，在其他内容已经显示在屏幕上之后才加载这些元素，那么就需要提前规划，在布局中为它们留出空间，以便内容不会跳动或改变大小，尤其是在网站已变得可交互之后。

### 避免字体文件延迟

字体的选择相当重要。选择合适的字体可以极大地改善用户体验。从感知性能的角度来看，“字体导入不佳”可能会导致文本在样式化或回退到其他字体时出现闪烁。

使回退字体具有相同的大小和粗细，以便在字体加载时页面变化不那么明显。

### 可交互元素是可交互的

确保可见的可交互元素始终可交换且可响应。如果输入元素是可见的，用户应该能够无延迟地与它们交互。当响应时间超过 50 毫秒时，用户会感受到延迟。当内容重绘速度慢于 16.67 毫秒（或每秒 60 帧），或者重绘间隔不均匀时，他们会感觉页面卡顿不流畅。

将类似于即时输入的功能作为渐进增强的一部分：使用 CSS 来显示输入模态框，并在可用的情况下使用 JavaScript 添加自动填充功能。

### 使任务启动器显得更具交互性

在按下按键（`keydown`）时发出内容请求，而不是等待按键弹起（`keyup`），可以使内容加载的感知时间减少 200 毫秒。向 `keyup` 事件添加有趣但不引人注目的 200 毫秒动画，可以再减少 200 毫秒的加载感知。你并没有节省 400 毫秒的时间，但是用户直到真正等待内容时，才感觉到他们在等待内容。

## 总结

通过减少用户等待*有用*内容的时间，并保持网站的响应和吸引力，用户就会感觉网站的性能更好了——即使实际加载资源的时间保持不变。

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/what_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}

---
title: 感知性能
slug: Learn/Performance/Perceived_performance
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/what_is_web_performance", "Learn/Performance/Measuring_performance", "Learn/Performance")}}

**[感知性能](/zh-CN/docs/Glossary/Perceived_performance)** 是用户对网站速度的感受。用户如何看待性能与任何客观统计数据一样重要，甚至更重要，但它是主观的，并且不易测量。感知性能是用户视角，而不是指标。

本文简要介绍了感知性能，着眼于用户的感知，以及可以使用哪些客观工具来衡量这类主观因素。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        基础计算机知识，<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Installing_basic_software"
          >基本软件安装</a
        >，
        <a href="/zh-CN/docs/Learn/Getting_started_with_the_web"
          >客户端 web 技术</a
        >的基础知识
      </td>
    </tr>
    <tr>
      <th scope="row">目标</th>
      <td>基本了解用户对 Web 性能的看法。</td>
    </tr>
  </tbody>
</table>

性能是关于用户视角的。How fast a website feels like it's loading and rendering has a greater impact on user experience than how fast the website actually loads and renders. Even if an operation is going to take a long time (because of latency or or inavailability of the [main thread](/zh-CN/docs/Glossary/Main_thread)), it is possible to keep the user engaged while they wait by showing a loading spinner, or a series of useful hints and tips (or jokes, or whatever else you think might be appropriate). Such an approach is much better than just showing nothing, which will make it feel like it is taking a lot longer and possibly lead to your users thinking it is broken and giving up.

## 感知性能

The perception of how fast your site loads and how responsive feels to user interaction is vitally important; even more important that actual download time but difficult to quantify. There are areas of your site that you may not be able to make faster, but you can make it _feel_ faster even if the metrics discussed in the othser sections can't be improved.

There is no unicorn metric that can measure what the user feels, but metrics are useful in guaging improvements (and regressions). Relevant measurements include first meaningful paint (FMP), largest contentful paint (LCP), time to interactive (TTI), render start, DOM interactive, and speed index.

**[First paint](/zh-CN/docs/Glossary/First_paint)** is reported by the browser and provides the time, in ms, of when the page starts changing; but this change can be a simple background color update or something even less noticable. It doesn't indicate completeness and may report a time when nothing visible is painted. **[First Contentful Paint](/zh-CN/docs/Glossary/First_contentful_paint) (FCP)** reports the time when the browser first rendered anything of signifigance, be that text, foreground or background image, or a canvas or SVG; capturing the very beginning of the loading experience. But, just because there's content, doesn't mean it's useful content or that the user has content to consume. The **[First Meaningful Paint](/zh-CN/docs/Glossary/first_meaningful_paint)**, or FMP, is the when content appears on the screen that is actually meaningful; which is a better metric for user-perceived loading experience, but still not ideal. **Largest contentful paint (LCP)** metric, definited in the [Largest Contentful Paint API](https://wicg.github.io/largest-contentful-paint/), reports the render time of the largest content element visible in the viewport.

**[Speed index](/zh-CN/docs/Glossary/Speed_index)** is also used to approximate perceived performance: it measures the average time for pixels on the visible screen to be painted. It doesn't account for jitter, nor does it weight which content important to a user more highly, so it's not a perfect metric.

These metrics have to do with initial load and render. It is also important to ensure the site feels fast once the user begins interacting with it. For this, **[time to interactive](/zh-CN/docs/Glossary/Time_to_interactive)**, is a good metric; it is the moment when the last [long task](/zh-CN/docs/Glossary/Long_task) of the load process finishes and the UI is available for user interaction with delay.

UI lack or responsiveness and jank both harm perceived performance. Even though a task may take a long time, though, there are ways to make it seem faster. There are several tips to improving perceived performance.

### 提升感知性能

Understanding networking, how the browser works, user perception of time, etc., can help you better understand how to improve the user interaction. However, you don't have to know the ins and outs of how everything, including how the human mind works, to improve the perception of speed.

How fast or slow something feels like it's taking depends a lot on whether the user is actively or passively waiting for this thing to happen. Waits can have an active and passive phase. When the user is active - moving the mouse, thinking, being entertainted, they are in an active phase. The passive phase occurs when the user is passively waiting, like staring at a monochrome screen. If both the passive and active waits time were objectively equal, users would estimate that the passive waiting period was longer than the active. If a load, render, or response time can not be objectively minimized any further, turning the wait into an active wait instead of a passive wait can make it feel faster.

There are tips and tricks to follow. Some of these quick tips have full articles if you want to dive deeper.

Displaying content, or at least some part of the page with an indication that content is loading, as quickly as possible, is essential to improving perceived performance. For example, because page render is blocked by loading and parsing CSS and JavaScript, minimizing the amount of CSS and JS that needs to be loaded on initially will have a major impact on improving perceived performance. Even though the bytes might be the same, not blocking the page from rendering makes the load _feel_ faster.

这里有一些技巧有助于提升性能：

### 最小化初始加载

要提升可感知性能，请最小化页面初始加载。换句话说，首先下载将实际显示的所有内容，但仅下载实际使用的内容，然后下载其余内容。因为最终要下载所有资源，所以实际上资源总量并没有改善——实际上还需要增加一些代码。但因为暂不需要的资源被延后加载了，所以用户并不会感知资源量的增加，而会感受到页面加载更快了。

为了最大程度地[减少初始加载资源](https://onilab.com/blog/perceived-performance-vs-actual-load-time-5-secrets-of-lightning-fast-magento-store/)，请从内容中分离交互式功能，以便优先加载初始化时所需的可见内容——文本、样式和图像。延迟加载其余资源。

不要加载初始页面未使用或看不到的图像或脚本，而在页面可用后延时加载，或在需要使用时按需加载。在初始页面加载之后加载其他资源可提高感知性能。在初始请求中加载基本数据，并仅根据需要逐步加载功能部件和数据，有助于改善低带宽和低规格硬件的体验。

此外，您应该优化需加载的资源。图片和视频应以最佳格式、压缩后的大小和正确尺寸进行投放。

### 防止内容跳转和其他重排

Images or other assets causing content to be pushed down or jump to a different location, like the loading of third party advertisements, can make the page feel like it is still loading and is bad for perceived performance. Content reflowing is especially bad for user experience when not initiated by user interaction. If some assets are going to be slower to load than others, with elements loading after other content has already been painted to the screen, plan ahead and leave space in the layout for them so that content doesn't jump or resize, especially after the site has become interactive.

### 避免字体文件延迟

Font use can both help and harm user experience. Selecting the right fonts is an art form, and can greatly improve the user experience. Fonts can also harm user experience, especially if the fonts used need to be imported, and if the importing is not optimal, or if Comic Sans is used (kidding). Flicker of unstyled text and missing text both harm performance.

Make fallback fonts the same size and weight so that when fonts load the page change is less noticeable.

### 交互类元素是可交互的

Make sure visible interactive elements are always interactive and responsive. If input elements are visible, the user should be able to interact with them without a lag. Users feel that something is laggy when they take more than 50ms to react. They feel that a page is janky when content repaints slower than 16.67ms (or 60 frames per second) or repaints at uneven intervals.

Make things like type-ahead a progressive enhancement: use css to display input modal, JS to add typeahead/autocomplete as it is available

### 使任务启动器显得更具交互性

在按下按键而不是等待按键弹起时发出请求，可以使感知的内容加载减少 200 毫秒。在 KEYUP 后添加一个有趣但不显眼的 200 毫秒动画，甚至可以再降低 200 毫秒的加载感知。您并没有节省 400 毫秒的时间，但是用户直到真正等待内容时，才感觉到他们在等待内容。

## 总结

By turning as much of the download, render and wait time into active phases and reducing any passive waiting, even if the objective measurements stay the same, the user will feel like the content downloaded, rendered, and responded more quickly. Now that we know what we should be speeding up, let's take a look at some metrics and learn how we can measure these events.

{{PreviousMenuNext("Learn/Performance/what_is_web_performance", "Learn/Performance/Measuring_performance", "Learn/Performance")}}

---
title: 测量性能
slug: Learn_web_development/Extensions/Performance/Measuring_performance
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance")}}

测量性能提供了一个重要的指标，以帮助你评估应用程序、网站或 web 服务的成功程度。

例如，你可以使用性能指标来确定你的应用程序与竞争对手相比如何表现，或者你可以比较应用程序在各个版本之间的性能。你选择的度量指标应与你的用户、网站和业务目标相关。它们应以一致的方式收集和测量，并以非技术利益相关者可以使用和理解的格式进行分析。

本文介绍了可以用来获取网站性能指标的工具，这些工具可以用来衡量和优化你的网站性能。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本计算机素养，<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >已安装基本软件</a
        >，以及<a
        href="/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website"
          >客户端网络技术的基本知识</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        <p>
            提供关于可以通过不同的 web 性能 API 和工具来收集的性能指标的信息，并介绍可以用来展示这些数据的工具。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 性能工具

有几种不同的工具可用于帮助你测量和改进性能。这些工具通常可以分为两类：

- 表明或测量性能的工具，比如 [PageSpeed Insights](https://pagespeed.web.dev/) 或 Firefox 的[网络监视器](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)和[性能监视器](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)。这些工具展示了你的网站加载的快慢。它们也指出了你的 Web 应用程序中可以优化的区域。
- 你可以用来构建自定义性能工具的[性能 API](/zh-CN/docs/Web/API/Performance_API)。

## 通用性能报告工具

像 [PageSpeed Insights](https://pagespeed.web.dev/) 这样的工具可以衡量网站的性能。你可以输入一个 URL，并在几秒钟内获得一份性能报告。报告包含有关你的网站在移动设备和桌面设备上的表现的分数。这是了解你已经做得很好的地方以及可以改进的地方的良好开始。

撰写本文时，MDN 的性能报告摘要看起来类似于以下内容：

![Mozilla 主页的 PageSpeed Insights 报告截图。](pagespeed-insight-mozilla-homepage.png)

性能报告包含有关用户在页面上显示任何内容之前需要等待多长时间、显示页面需要下载多少字节等信息。它还会让你知道测量的值是否被认为是好的或坏的。

[webpagetest.org](https://webpagetest.org) 是另一个可以自动测试你的网站并返回有用指标的工具示例。

尝试现在使用这些工具运行你最喜欢的网站，查看分数如何。

## 网络监视工具

大多数浏览器都有可用的工具，你可以使用这些工具来针对已加载的页面进行运行，以确定它们的性能如何，大多数工具的工作方式都很类似。例如，Firefox 的[网络监视器](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)返回有关从网络下载的所有素材的详细信息，并以瀑布图的形式显示每个素材的下载时间。

![Firefox 网络监视器显示已加载的素材列表以及每个素材的加载时间](network-monitor.png)

你还可以查看 [Chrome 的网络监视器文档](https://developer.chrome.google.cn/docs/devtools/network)

## 性能监视工具

你也可以使用浏览器性能监测工具，比如 [Firefox 性能监测器](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)来测量在执行不同操作时一个 web 应用或网站的用户界面性能。这可以指出可能拖慢你的 web 应用或网站速度的特性。

![开发者工具性能面板显示录制 #1. 的瀑布图](perf-monitor.png)

另见 [Chrome 性能工具文档](https://developer.chrome.google.cn/docs/devtools/performance)。

## 性能 API

编写 web 代码时，有大量的 [web API](/zh-CN/docs/Web/API) 可用，使你可以创建自己的性能测量工具。

你可以使用[导航计时 API](/zh-CN/docs/Web/API/Performance_API/Navigation_timing) 来测量客户端 web 性能，包括卸载上一个页面所需的时间、域名查询所需的时间、执行窗口加载处理程序所花费的总时间等。你可以将该 API 用于与下图中显示的所有导航事件相关的度量。

![导航计时 API 可处理的各种处理器（包括 Navigation Timing API 度量）：unload 提示、redirect、unload、应用缓存、DNS、TCP、请求、相应、处理、onLoad，以及 navigationStart、redirectStart、redirectEnd、fetchStart、domainLookupEnd、domainLookupStart、connectStart（secureConnectionStart）、connectEnd、requestStart、responseStart、responseEnd、unloadStart、unloadEnd、domLoading、domInteractive、domContentLoaded、domComplete、loadEventStart、loadEventEnd](navigationtimingapi.jpg)

[性能 API](/zh-CN/docs/Web/API/Performance_API) 为当前页面提供了访问性能相关信息的能力，包括[性能时间轴 API](/zh-CN/docs/Web/API/Performance_Timeline)、[导航计时 API](/zh-CN/docs/Web/API/Performance_API/Navigation_timing)、[用户计时 API](/zh-CN/docs/Web/API/Performance_API/User_timing) 和[资源计时 API](/zh-CN/docs/Web/API/Performance_API/Resource_timing)。这些接口允许准确测量 JavaScript 任务完成所需的时间。

[PerformanceEntry](/zh-CN/docs/Web/API/PerformanceEntry) 对象是*性能时间轴*的一部分。*性能条目*可以通过在应用程序的显式点创建性能 _{{domxref("PerformanceMark","mark")}}_ 或 _{{domxref("PerformanceMeasure","measure")}}_（例如，通过调用 {{domxref("Performance.mark","mark()")}} 方法直接创建）。性能条目还可以通过间接方式创建，例如加载图像等资源。

[PerformanceObserver API](/zh-CN/docs/Web/API/PerformanceObserver) 可用于观察性能测量事件，并在浏览器的性能时间轴中记录新的[性能条目](/zh-CN/docs/Web/API/PerformanceEntry)时通知你。

虽然本文并没有深入介绍这些 API 的使用，但了解它们的存在是有用的。你还可以参考[导航和计时](/zh-CN/docs/Web/Performance/Navigation_and_resource_timings)文章，以获取有关使用性能 web API 的更多示例。

## 结语

本文简要介绍了 web 性能指标，以帮助你了解可以在 web 应用程序或网站上测量的内容。接下来，你将了解如何优化网站上的图片以优化其性能。

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance")}}

---
title: 什么是 web 性能？
slug: Learn_web_development/Extensions/Performance/What_is_web_performance
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}

Web 性能就是让网站变得更快，以及让缓慢过程*看起来*更快。网站加载速度是否很快，是否允许用户快速开始与之交互，是否在某些东西需要时间加载时提供可靠的反馈（例如，一个“加载中”的旋转指示器）？网页的滚动和动画是否流畅？本文简要介绍了客观、可衡量的网络性能\*，涵盖了网络优化所涉及的技术、方法和工具。

<table>
  <tbody>
    <tr>
      <th scope="row">预备条件：</th>
      <td>
        基本计算机素养、<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >基本软件已安装</a
        >，以及<a
        href="/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website"
          >客户端网络技术</a
        >的基本知识。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        为了了解网络性能所涉及的基础知识。
      </td>
    </tr>
  </tbody>
</table>

_\*对比下一篇文章中介绍的主观[感知性能](/zh-CN/docs/Learn_web_development/Extensions/Performance/Perceived_performance)_

## 什么是 web 性能？

Web 性能是对网站或应用程序的客观度量和用户的体验。这包括以下主要方面：

- **减少总体负载时间**：需要多长时间才能将渲染网站所需的文件下载到用户的计算机上？这往往受到[延迟](/zh-CN/docs/Web/Performance/Understanding_latency)、文件大小、文件数量以及其他因素的影响。一般策略是使文件尽可能小，尽可能减少 HTTP 请求的次数，并采用巧妙的加载技术（例如 [preload](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preload)）使文件更快可用。
- **尽快使网站可用**：简单来说就是以合理的顺序加载你的网站资源，以便用户能够更快地开始使用。在用户继续执行主要任务的同时，任何其他资源都可以在后台继续加载。有时我们也会在实际需要时才加载资源（这被称为[懒加载](/zh-CN/docs/Web/Performance/Guides/Lazy_loading)）。网站从开始加载，到达到可用状态为止所需的时间被称为[交互等待时间](/zh-CN/docs/Glossary/Time_to_interactive)。
- **流畅性和交互性**：应用程序是否可靠，使用起来是否愉快？滚动是否流畅？按钮是否可点击？弹出窗口是否能够快速打开，并且在打开时动画是否流畅？在制作流畅的应用程序时，有很多优秀实践可以参考。例如使用 CSS 动画而不是 JavaScript 来制作动画，并尽量减少由于 DOM 变化而引起重绘 UI 的次数。
- **[感知性能](/zh-CN/docs/Learn_web_development/Extensions/Performance/Perceived_performance)**：用户所体验到的，是网站看起来有多快，而不是网站实际有多快。用户感受到的性能与任何客观统计数据一样重要，甚至可能更重要。但这种主观的感受不容易测量。感知性能是用户的感受，而不是度量标准。即使操作将花费很长时间（因为延迟或其他原因），也可以通过显示“加载中”的旋转指示器或一系列有用的提示和技巧（或笑话，以及其他你认为合适的内容）来保持用户在等待期间的参与度。这种方法比什么都不显示要好得多。因为什么都不显示会让用户觉得等待了更长的时间，可能会让你的用户认为网站坏了，然后放弃使用。
- **[性能测量](/zh-CN/docs/Learn_web_development/Extensions/Performance/Measuring_performance)**：Web 性能包括测量应用程序的实际速度和感知速度，在可能的情况下进行优化，然后监视性能，以确保已经优化过的内容保持优化状态。这涉及到许多度量标准（可以指示成功或失败的可度量指标）和测量这些度量标准的工具，我们将在本节中讨论这些度量标准。

总而言之，许多特性都会影响性能。包括延迟、应用程序大小、DOM 节点数量、资源请求数量、JavaScript 性能、CPU 负载等等。重要的是尽量缩短加载和响应时间，并通过增加额外的功能来隐藏延迟：先使网站变得可以交互，同时在后台加载用户体验中的次要部分。

> [!NOTE]
> Web 性能既包括客观测量，如加载时间、每秒帧数和[交互等待时间](/zh-CN/docs/Glossary/Time_to_interactive)，也包括主观体验，如内容加载所需的时间。

## 内容如何渲染

为了有效地理解 web 性能、背后的问题以及我们上面提到的主要部分，你需要先了解一些关于浏览器如何工作的细节。这包括：

- **浏览器的工作原理**。当你请求一个 URL 并敲击
  <kbd>Enter</kbd>
  或
  <kbd>Return</kbd>
  按键时，浏览器会找出保存该网站文件的服务器的位置，与之建立连接，并请求文件。请参阅[渲染页面：浏览器的工作原理](/zh-CN/docs/Web/Performance/Guides/How_browsers_work)。
- **源顺序**。HTML 索引文件的源顺序会显著影响性能。从索引文件链接到的附加资源的下载通常基于引用的顺序。这是可以调整的，需要进行优化。请注意：一些资源在被解析和执行完成之前，会阻塞其他的下载。
- **关键路径**。这是从服务器下载文件后，浏览器用来构建 web 文档的过程。浏览器按照明确定义的步骤进行操作，优化关键渲染路径以优先显示与当前用户操作相关的内容，将显著改善内容呈现时间。有关更多信息，请参见[关键渲染路径](/zh-CN/docs/Web/Performance/Guides/Critical_rendering_path)。
- **文档对象模型**。文档对象模型（DOM）是一种树状结构，它将 HTML 的内容和元素表示为节点树。这包括所有的 HTML 属性和节点之间的关系。加载页面后的大量 DOM 操作（例如添加、删除或移动节点）可能会影响性能。因此有必要了解 DOM 的工作原理，以及如何减轻此类问题。有关更多信息，请参见[文档对象模型](/zh-CN/docs/Web/API/Document_Object_Model)。
- **延迟**。我们之前简要地提到过延迟。简单来说，延迟是你的网站信息从服务器传输到用户计算机所需的时间。建立 TCP 和 HTTP 连接需要消耗系统资源，并且在网络上来回传输请求和响应字节时不可避免地存在延迟。但是有一些方法可以减少延迟（例如，通过下载更少的文件来减少 HTTP 请求的数量，使用 [CDN](/zh-CN/docs/Glossary/CDN) 使你的站点在全球范围内具有更普遍的性能，并使用 HTTP/2 协议提高传输的效率）。你可以在[了解延迟](/zh-CN/docs/Web/Performance/Understanding_latency)上阅读有关此主题的所有内容。

## 结论

目前就是这些。我们希望我们对 web 性能主题的简要概述可以帮助你理解它的全部内容，并使你想要知道更多。接下来，我们将研究感知性能，以及如何使用一些巧妙的技术使某些不可避免的性能影响对用户来说不那么严重，或者被完全忽视。

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}

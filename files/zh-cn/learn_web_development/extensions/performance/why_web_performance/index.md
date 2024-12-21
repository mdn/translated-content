---
title: Web 性能的重要性
slug: Learn_web_development/Extensions/Performance/why_web_performance
original_slug: Learn/Performance/why_web_performance
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance")}}

Web 性能关乎网站的快速加载，以及让缓慢过程*看起来*更快。本文将介绍 web 性能对于网站访问者和你的业务目标的重要性。

<table>
  <tbody>
    <tr>
      <th scope="row">预备条件：</th>
      <td>
        基本计算机素养、<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >基本软件已安装</a
        >，以及
        <a href="/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website"
          >客户端网络技术的基本知识</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解 web 性能对良好用户体验的重要性。
      </td>
    </tr>
  </tbody>
</table>

Web 性能是指网站内容在网页浏览器中的**加载**和**渲染**速度，以及对用户交互的响应。性能不佳的网站显示和响应输入速度缓慢。性能不佳的网站会增加用户放弃访问的概率。在最糟糕的情况下，性能不佳会导致内容完全无法访问。一个很好的 web 性能目标是让用户注意不到性能。虽然个人对网站性能的感知是主观的，但加载和渲染可以进行测量。良好的性能可能对大多数网站访问者来说并不明显，但大多数人会立即意识到一个网站的响应是否迟缓。这就是为什么我们关心 web 性能。

## 为什么关心性能？

Web 性能及其相关的最佳实践对于网站访问者拥有良好的体验至关重要。从某种意义上说，web 性能可以被认为是 [web 无障碍](/zh-CN/docs/Learn_web_development/Core/Accessibility)的一个子集。在性能和无障碍方面，你需要考虑网站访问者使用的设备以及设备的连接速度。

以 CNN.com 的加载体验为例，截至撰写本文时，该网站有超过 400 个 HTTP 请求，文件大小超过 22.6MB。

- 想象一下在连接光纤网络的台式电脑上加载这个网站。这将相对较快，文件大小基本无关紧要。
- 想象一下在通勤回家的公共交通工具上，通过用了 9 年的 iPad 使用移动数据加载相同的网站。根据蜂窝网络覆盖情况，该网站将加载缓慢，甚至可能无法使用。在加载完成之前，你可能已经放弃了。
- 想象一下在印度农村使用覆盖有限或无覆盖的 35 美元华为设备加载同样的网站。加载速度会非常慢，还可能因为阻塞脚本而超时。即使加载能成功，不良的 CPU 也可能导致浏览器崩溃。

在 3G 网络上，一个 22.6 MB 的网站可能需要长达 83 秒才能加载，[`DOMContentLoaded`](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event)（即网站的基本 HTML 结构）为 31.86 秒。

不仅仅下载所需时间是主要问题。很多国家的互联网连接仍然按兆字节计费。以我们的例子，22.6 MB 的 CNN.com 体验可能需要印度平均工资的 11% 才能下载。在西北非洲的移动设备上，可能需要两天的平均工资。如果这个网站在美国运营商的国际漫游计划上加载呢？费用会让任何人都流泪。（参见[下载你的网站需要多少费用](https://whatdoesmysitecost.com/)。）

### 提高转化率

减少网站的下载和渲染时间可以提高转化率和用户留存。

**转化率**是指网站访问者执行某种测量或期望操作的比率。例如，这可能是购买商品、阅读文章或订阅时事通讯。被视为转化率的操作取决于网站的业务目标。

性能影响转化；提高 web 性能就能提高转化。网站访问者期望一个网站在两秒内或更短的时间内加载；有时在移动设备上甚至更短（通常需要更长时间）。从 3 秒开始，这些网站访问者就会开始放弃缓慢的网站。

网站加载速度是一个因素。如果网站对用户交互的反应慢，或者看起来不流畅，这会导致访问者失去兴趣和信任。

以下是一些现实世界中的性能改进示例：

- [Tokopedia 将 3G 连接的渲染时间从 14 秒减少到 2 秒，访问者增加了 19%，总会话数增加了 35%，新用户增加了 7%，活跃用户增加了 17% ，每位用户的会话数增加了 16%。](https://wpostats.com/2018/05/30/tokopedia-new-users.html)
- [Pinterest 页面重建以提高性能，导致等待时间减少了 40%，SEO 流量增加了 15%，注册转化率增加了 15%。](https://wpostats.com/2017/03/10/pinterest-seo.html)

要构建人们愿意使用的网站和应用程序；要吸引和留住网站访问者，你需要创建一个易于访问且提供良好用户体验的网站。构建网站需要 HTML、CSS 和 JavaScript，通常还包括诸如图像和视频等二进制文件类型。你在构建网站时所作的决策和选择的工具在很大程度上会影响完成后的性能。

良好的性能是一种资产，糟糕的性能是一种负担。网站速度直接影响跳出率、转化、收入、用户满意度和搜索引擎排名。已经证明，性能优良的网站能够提高访问者留存和用户满意度。加载缓慢的内容已经被证明会导致网站被放弃，有些访问者离开后可能永远不会回来。减少客户端和服务器之间传输的数据量可降低各方的成本。减小 HTML/CSS/JavaScript 和媒体文件大小可以降低网站的加载时间和功耗（请参阅[性能预算](/zh-CN/docs/Web/Performance/Performance_budgets)）。

跟踪性能非常重要。多种因素，包括网络速度和设备性能，都会影响性能。没有单一的性能指标；不同的业务目标和用户需求需要不同的性能度量。要提高网站性能，你需要了解用户体验、加载和渲染性能，以及如何将性能度量与业务指标结合起来。通过对性能的了解，你可以为你的网站和应用程序提供更快、更顺畅的体验。

## 结论

Web 性能对于可访问性以及服务于组织或企业目标的其他网站指标非常重要。网站性能的好坏与用户体验以及大多数网站的整体效果密切相关。这就是为什么你应该关心 web 性能。

{{NextMenu("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance")}}

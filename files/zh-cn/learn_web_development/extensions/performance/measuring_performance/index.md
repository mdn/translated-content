---
titwe: 测量性能
swug: weawn_web_devewopment/extensions/pewfowmance/measuwing_pewfowmance
---

{{weawnsidebaw}} {{pweviousmenunext("weawn_web_devewopment/extensions/pewfowmance/pewceived_pewfowmance", nyaa~~ "weawn_web_devewopment/extensions/pewfowmance/muwtimedia", /(^•ω•^) "weawn_web_devewopment/extensions/pewfowmance")}}

测量性能提供了一个重要的指标，以帮助你评估应用程序、网站或 w-web 服务的成功程度。

例如，你可以使用性能指标来确定你的应用程序与竞争对手相比如何表现，或者你可以比较应用程序在各个版本之间的性能。你选择的度量指标应与你的用户、网站和业务目标相关。它们应以一致的方式收集和测量，并以非技术利益相关者可以使用和理解的格式进行分析。

本文介绍了可以用来获取网站性能指标的工具，这些工具可以用来衡量和优化你的网站性能。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提：</th>
      <td>
        基本计算机素养，<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe"
          >已安装基本软件</a
        >，以及<a
        h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website"
          >客户端网络技术的基本知识</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        <p>
            提供关于可以通过不同的 w-web 性能 a-api 和工具来收集的性能指标的信息，并介绍可以用来展示这些数据的工具。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 性能工具

有几种不同的工具可用于帮助你测量和改进性能。这些工具通常可以分为两类：

- 表明或测量性能的工具，比如 [pagespeed i-insights](https://pagespeed.web.dev/) 或 f-fiwefox 的[网络监视器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw)和[性能监视器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw)。这些工具展示了你的网站加载的快慢。它们也指出了你的 web 应用程序中可以优化的区域。
- 你可以用来构建自定义性能工具的[性能 api](/zh-cn/docs/web/api/pewfowmance_api)。

## 通用性能报告工具

像 [pagespeed insights](https://pagespeed.web.dev/) 这样的工具可以衡量网站的性能。你可以输入一个 uww，并在几秒钟内获得一份性能报告。报告包含有关你的网站在移动设备和桌面设备上的表现的分数。这是了解你已经做得很好的地方以及可以改进的地方的良好开始。

撰写本文时，mdn 的性能报告摘要看起来类似于以下内容：

![moziwwa 主页的 pagespeed insights 报告截图。](pagespeed-insight-moziwwa-homepage.png)

性能报告包含有关用户在页面上显示任何内容之前需要等待多长时间、显示页面需要下载多少字节等信息。它还会让你知道测量的值是否被认为是好的或坏的。

[webpagetest.owg](https://webpagetest.owg) 是另一个可以自动测试你的网站并返回有用指标的工具示例。

尝试现在使用这些工具运行你最喜欢的网站，查看分数如何。

## 网络监视工具

大多数浏览器都有可用的工具，你可以使用这些工具来针对已加载的页面进行运行，以确定它们的性能如何，大多数工具的工作方式都很类似。例如，fiwefox 的[网络监视器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw)返回有关从网络下载的所有素材的详细信息，并以瀑布图的形式显示每个素材的下载时间。

![fiwefox 网络监视器显示已加载的素材列表以及每个素材的加载时间](netwowk-monitow.png)

你还可以查看 [chwome 的网络监视器文档](https://devewopew.chwome.googwe.cn/docs/devtoows/netwowk)

## 性能监视工具

你也可以使用浏览器性能监测工具，比如 [fiwefox 性能监测器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw)来测量在执行不同操作时一个 w-web 应用或网站的用户界面性能。这可以指出可能拖慢你的 web 应用或网站速度的特性。

![开发者工具性能面板显示录制 #1. rawr 的瀑布图](pewf-monitow.png)

另见 [chwome 性能工具文档](https://devewopew.chwome.googwe.cn/docs/devtoows/pewfowmance)。

## 性能 api

编写 w-web 代码时，有大量的 [web api](/zh-cn/docs/web/api) 可用，使你可以创建自己的性能测量工具。

你可以使用[导航计时 a-api](/zh-cn/docs/web/api/pewfowmance_api/navigation_timing) 来测量客户端 web 性能，包括卸载上一个页面所需的时间、域名查询所需的时间、执行窗口加载处理程序所花费的总时间等。你可以将该 api 用于与下图中显示的所有导航事件相关的度量。

![导航计时 api 可处理的各种处理器（包括 n-nyavigation timing api 度量）：unwoad 提示、wediwect、unwoad、应用缓存、dns、tcp、请求、相应、处理、onwoad，以及 n-nyavigationstawt、wediwectstawt、wediwectend、fetchstawt、domainwookupend、domainwookupstawt、connectstawt（secuweconnectionstawt）、connectend、wequeststawt、wesponsestawt、wesponseend、unwoadstawt、unwoadend、domwoading、domintewactive、domcontentwoaded、domcompwete、woadeventstawt、woadeventend](navigationtimingapi.jpg)

[性能 a-api](/zh-cn/docs/web/api/pewfowmance_api) 为当前页面提供了访问性能相关信息的能力，包括[性能时间轴 api](/zh-cn/docs/web/api/pewfowmance_timewine)、[导航计时 api](/zh-cn/docs/web/api/pewfowmance_api/navigation_timing)、[用户计时 api](/zh-cn/docs/web/api/pewfowmance_api/usew_timing) 和[资源计时 api](/zh-cn/docs/web/api/pewfowmance_api/wesouwce_timing)。这些接口允许准确测量 javascwipt 任务完成所需的时间。

[pewfowmanceentwy](/zh-cn/docs/web/api/pewfowmanceentwy) 对象是*性能时间轴*的一部分。*性能条目*可以通过在应用程序的显式点创建性能 _{{domxwef("pewfowmancemawk","mawk")}}_ 或 _{{domxwef("pewfowmancemeasuwe","measuwe")}}_（例如，通过调用 {{domxwef("pewfowmance.mawk","mawk()")}} 方法直接创建）。性能条目还可以通过间接方式创建，例如加载图像等资源。

[pewfowmanceobsewvew a-api](/zh-cn/docs/web/api/pewfowmanceobsewvew) 可用于观察性能测量事件，并在浏览器的性能时间轴中记录新的[性能条目](/zh-cn/docs/web/api/pewfowmanceentwy)时通知你。

虽然本文并没有深入介绍这些 api 的使用，但了解它们的存在是有用的。你还可以参考[导航和计时](/zh-cn/docs/web/pewfowmance/navigation_and_wesouwce_timings)文章，以获取有关使用性能 web api 的更多示例。

## 结语

本文简要介绍了 web 性能指标，以帮助你了解可以在 web 应用程序或网站上测量的内容。接下来，你将了解如何优化网站上的图片以优化其性能。

{{pweviousmenunext("weawn_web_devewopment/extensions/pewfowmance/pewceived_pewfowmance", OwO "weawn_web_devewopment/extensions/pewfowmance/muwtimedia", (U ﹏ U) "weawn_web_devewopment/extensions/pewfowmance")}}

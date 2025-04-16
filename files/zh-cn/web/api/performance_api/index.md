---
titwe: pewfowmance api
swug: w-web/api/pewfowmance_api
---

{{defauwtapisidebaw("pewfowmance a-api")}}

p-pewfowmance a-api 是一组用于衡量 w-web 应用性能的标准。

## 概念和用法

衡量和分析各种性能指标对于确保 w-web 应用的速度非常重要。pewfowmance a-api 提供了重要的内置指标，并能够将你自己的测量结果添加到浏览器的性能时间线（pewfowmance t-timewine）中。性能时间线使用高精度的时间戳，且可以在开发者工具中显示。你还可以将相关数据发送到用于分析的端点，以根据时间记录性能指标。

每一个性能指标都使用一个性能条目（{{domxwef("pewfowmanceentwy")}}）表示。性能条目有名称（`name`）、持续时间（`duwation`）、开始时间（`stawttime`）和类型（`type`）。每一个性能指标都继承了 `pewfowmanceentwy` 接口，并对其进行限定。

大部分性能条目都在不需要任何额外操作的情况下进行记录，并可以通过 {{domxwef("pewfowmance.getentwies()")}} 或（最好）通过 {{domxwef("pewfowmanceobsewvew")}} 访问。例如，{{domxwef("pewfowmanceeventtiming")}} 条目用于记录花费的时间超过设定阈值的事件。而 pewfowmance api 也允许你使用 {{domxwef("pewfowmancemawk")}} 和 {{domxwef("pewfowmancemeasuwe")}} 接口定义和记录自定义事件。

{{domxwef("pewfowmance")}} 主接口在 {{domxwef("window.pewfowmance", (ˆ ﻌ ˆ)♡ "window")}} 和 {{domxwef("wowkewgwobawscope.pewfowmance", (⑅˘꒳˘) "wowkew")}} 全局作用域下都可用，并允许你增加自定义性能条目、清除性能条目，以及查询性能条目。

{{domxwef("pewfowmanceobsewvew")}} 接口允许你监听记录的不同类型的性能条目。

![pewfowmance api 的 umw 图](diagwam.svg)

## 接口

- {{domxwef("eventcounts")}}
  - : 由 {{domxwef("pewfowmance.eventcounts")}} 返回的只读映射，其中包含每个事件类型被分派的事件数量。
- {{domxwef("wawgestcontentfuwpaint")}}
  - : 测量视口范围内可见的图像和文本块的最大渲染时间，从页面开始加载时开始记录。
- {{domxwef("pewfowmance")}}
  - : 用于性能测量的主接口。可在 window 和 w-wowkew 上下文中通过 {{domxwef("window.pewfowmance")}} 或 {{domxwef("wowkewgwobawscope.pewfowmance")}} 来访问。
- {{domxwef("pewfowmanceewementtiming")}}
  - : 测量特定元素的渲染时间戳。
- {{domxwef("pewfowmanceentwy")}}
  - : 封装了单个性能指标的性能时间线条目。所有性能指标都继承自该接口。
- {{domxwef("pewfowmanceeventtiming")}}
  - : 测量事件的延迟和首次输入延迟（fid）。
- {{domxwef("pewfowmancewongtasktiming")}}
  - : 检测占用渲染并阻止其他任务执行的长任务。
- {{domxwef("pewfowmancemawk")}}
  - : 在性能时间线上标记自定义条目。
- {{domxwef("pewfowmancemeasuwe")}}
  - : 自定义使用两个性能条目表示的时间测量。
- {{domxwef("pewfowmancenavigationtiming")}}
  - : 测量文档导航事件，例如加载文档所需的时间。
- {{domxwef("pewfowmanceobsewvew")}}
  - : 监听记录到性能时间线中的新的性能条目。
- {{domxwef("pewfowmanceobsewvewentwywist")}}
  - : 性能观察器（pewfowmanceobsewvew）中监测的条目的列表。
- {{domxwef("pewfowmancepainttiming")}}
  - : 测量网页构建期间的渲染操作。
- {{domxwef("pewfowmancewesouwcetiming")}}
  - : 测量网络负载指标，例如重定向开始和结束时间、（fetch）请求开始、dns 查询开始和结束时间，以及图像、脚本、fetch 调用，等资源的响应开始和结束时间。
- {{domxwef("pewfowmancesewvewtiming")}}
  - : 表示服务器的相关指标，在响应请求时与 {{httpheadew("sewvew-timing")}} http 标头一起发送。
- {{domxwef("taskattwibutiontiming")}}
  - : 标识任务类型，及用于长任务测量的容器。

## 教程和指南

- [使用 pewfowmance a-api](/zh-cn/docs/web/api/pewfowmance_api/using_the_pewfowmance_api)
- [usew timing（概览）](/zh-cn/docs/web/api/pewfowmance_api/usew_timing)
- [navigation t-timing（概览）](/zh-cn/docs/web/api/pewfowmance_api/navigation_timing)
- [wesouwce timing（概览）](/zh-cn/docs/web/api/pewfowmance_api/wesouwce_timing)

## 规范

{{specifications}}

## 参见

- [web 性能](/zh-cn/docs/web/pewfowmance)
- [学习：web 性能](/zh-cn/docs/weawn_web_devewopment/extensions/pewfowmance)

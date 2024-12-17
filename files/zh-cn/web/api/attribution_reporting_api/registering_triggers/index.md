---
title: 注册归因触发器
slug: Web/API/Attribution_Reporting_API/Registering_triggers
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

本文解释了如何注册归因触发器。

## 基本方法

在[注册归因来源](/zh-CN/docs/Web/API/Attribution_Reporting_API/Registering_sources)之后，你需要注册归因触发器。这些是网站上的交互事件，用于测量转换（例如，点击广告商网站上的“购买”按钮可以表示可能发生了转换）。浏览器会尝试将归因触发器与存储在私有本地存储分区中的归因来源条目进行匹配，并在找到匹配项时[生成报告](/zh-CN/docs/Web/API/Attribution_Reporting_API/Generating_reports)。

不同的归因触发器类型以不同的方式注册，详见以下部分——请参阅[基于 HTML 的归因触发器](#基于_html_的归因触发器)和[基于 JavaScript 的归因触发器](#基于_javascript_的归因触发器)。

但是，无论背后发生了什么来注册触发器、查找匹配等，过程都是相同的。

1. 所有触发器类型都会在请求中发送 {{httpheader("Attribution-Reporting-Eligible")}} 标头，指示响应有资格注册触发器。例如：

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. 当服务器收到包含 `Attribution-Reporting-Eligible` 标头的请求时，它可以在响应中包含 {{httpheader("Attribution-Reporting-Register-Trigger")}}。其值是一个 JSON 字符串，其中包含可以包含在生成报告中的数据，例如触发器的 ID、优先级和去重值。

   以下示例意在与[事件级报告](/zh-CN/docs/Web/API/Attribution_Reporting_API/Generating_reports#事件级报告)归因来源匹配：

   ```js
   res.set(
     "Attribution-Reporting-Register-Trigger",
     JSON.stringify({
       "event_trigger_data": [
         {
           "trigger_data": "4",
           "priority": "1000000000000",
           "deduplication_key": "2345698765",
         },
       ],
       "debug_key": "1115698977",
     });
   );
   ```

   这里指定的字段如下：

   - `"event_trigger_data"`：一个表示触发器数据的对象。包括：
     - `"trigger_data"`：与触发器相关的数据，通常用于指示事件，如“用户将物品添加到购物车”或“用户注册到邮件列表”。此值将包含在生成的报告中（如果有），尽管它将根据归因来源的 [`"trigger_data_matching"`](/zh-CN/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) 字段进行修改。
       > [!NOTE]
       > 用于表示每个事件的值以及数组中的元素数量完全是任意的，由作为开发人员的你定义。数组可以包含未使用的值，但在触发器注册时，必须在数组中存在值，以便浏览器将其归因于来源。
     - `"priority"`：表示归因触发器优先级的字符串值。有关更多信息，请参见[报告优先级和限制](/zh-CN/docs/Web/API/Attribution_Reporting_API/Generating_reports#报告优先级和限制)。
     - `"deduplication_key"`：表示唯一键的字符串，用于防止归因重复——例如，如果用户多次将同一项添加到购物车。有关更多信息，请参见[防止报告重复](https://developers.google.cn/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication)。
   - `"debug_key"`：表示调试键的数字。如果你希望生成[调试报告](/zh-CN/docs/Web/API/Attribution_Reporting_API/Generating_reports#调试报告)，请设置此项。

   请参见 {{httpheader("Attribution-Reporting-Register-Trigger")}} 以获取所有可用字段的详细描述。

   旨在与[汇总报告](/zh-CN/docs/Web/API/Attribution_Reporting_API/Generating_reports#汇总报告)归因来源匹配的触发器需要以下字段：

   ```js
   res.set(
     "Attribution-Reporting-Register-Trigger",
     JSON.stringify({
       "aggregatable_trigger_data": [
         {
           "key_piece": "0x400",
           "source_keys": ["campaignCounts"]
         },
         {
           "key_piece": "0xA80",
           "source_keys": ["geoValue", "nonMatchingKeyIdsAreIgnored"]
         }
       ],
       "aggregatable_values": {
         "campaignCounts": 32768,
         "geoValue": 1664
       },
       "debug_key": "1115698977"
     });
   );
   ```

   此示例中的字段为：

   - `"aggregatable_trigger_data"`：一个对象数组，每个对象定义了一个聚合键，用于应用到不同的来源键上。
   - `"aggregatable_values"`：一个对象，包含 `"aggregatable_trigger_data"` 中定义的每个数据点的值。

   同样，请参见 {{httpheader("Attribution-Reporting-Register-Trigger")}} 以获取所有可用字段的详细描述。

3. 当用户与归因触发器交互时，浏览器会尝试将触发器与浏览器私有本地缓存中存储的任何归因来源条目进行匹配。要成功匹配，`Attribution-Reporting-Register-Trigger` 的 [`"trigger_data"`](/zh-CN/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) 必须与 {{httpheader("Attribution-Reporting-Register-Source")}} 的 [`"trigger_data"`](/zh-CN/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data) 中提供的一个值匹配，并且注册触发器的顶级页面的站点（方案 + [eTLD+1](/zh-CN/docs/Glossary/eTLD)）必须：

   - 与来源的相关数据中指定的 `destination` 的站点之一匹配。
   - 与指定来源注册的请求同源。

   > [!NOTE]
   > 这些要求提供了隐私保护，但也提供了灵活性——来源*和*触发器可以嵌入在 {{htmlelement("iframe")}} 中或位于顶级站点上。

   还有许多其他因素会阻碍匹配的成功；例如：

   - 触发器的过滤器与来源的过滤器数据不匹配（有关详细信息，请参见[过滤器](/zh-CN/docs/Web/API/Attribution_Reporting_API/Generating_reports#过滤器)）。
   - 来源的 [`"trigger_data_matching"`](/zh-CN/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) 设置导致没有匹配发生。
   - 来源的 [`"max_event_level_reports"`](/zh-CN/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#max_event_level_reports) 限制已达到。
   - 由于浏览器的随机响应算法，没有报告成功的匹配。有关详细信息，请参见[为报告添加噪声](/zh-CN/docs/Web/API/Attribution_Reporting_API/Generating_reports#为报告添加噪声)。

4. 如果找到成功的匹配项，浏览器将根据来源和触发器数据[生成报告](/zh-CN/docs/Web/API/Attribution_Reporting_API/Generating_reports)并将其发送到报告端点。

> [!NOTE]
> 归因触发器不能像归因来源一样在 {{htmlelement("a")}} 元素或 {{domxref("Window.open()")}} 调用上注册。

## 基于 HTML 的归因触发器

基于 HTML 的归因触发器可用于在页面首次加载时检测转化——更准确地说，是在 `<img>` 或 `<script>` 加载时。例如，如果用户点击了发布者页面上的归因来源链接并导航到广告商页面，你可以在广告商页面加载时注册归因触发器，并让浏览器尝试与存储的来源条目进行匹配。

你可以通过将 `attributionsrc` 属性添加到适当的元素来注册归因触发器。可以在 {{htmlelement("img")}} 和 {{htmlelement("script")}} 元素上执行此操作。

如果将属性值留空，注册请求将发送到托管请求资源的服务器。还可以在值中指定附加的 URL 以发送注册请求；有关更多详细信息，请参阅[在 attributionsrc 中指定 URL](#在_attributionsrc_中指定_url)。

以下是 `<img>` 元素的示例：

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  width="1"
  height="1"
  attributionsrc />
```

你也可以通过 {{domxref("HTMLImageElement.attributionSrc")}} 属性实现此目的：

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

在这种情况下，当浏览器接收到包含图像文件的响应时（当 `load` 事件触发时），浏览器将尝试将触发器与存储的归因来源进行匹配。请记住，用户可能根本无法感知到图像——这可能是一个仅用于归因报告的 1x1 透明追踪像素。

{{htmlelement("script")}} 的示例可能如下所示：

```html
<script src="advertising-script.js" attributionsrc />
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

在这种情况下，当浏览器接收到包含脚本的响应时，浏览器将尝试将触发器与存储的归因来源进行匹配。

## 基于 JavaScript 的归因触发器

基于 JavaScript 的归因触发器比基于 HTML 的触发器更具灵活性。你可以根据自定义交互（例如，点击自定义元素或提交表单）触发浏览器尝试与存储的来源进行匹配。

要注册基于脚本的归因触发器，你可以：

- 发送包含 `attributionReporting` 选项的 {{domxref("Window/fetch", "fetch()")}} 请求：

  ```js
  const attributionReporting = {
    eventSourceEligible: false,
    triggerEligible: true,
  };

  // 可选设置 keepalive 以确保请求在页面结束后仍然存在
  function triggerMatching() {
    fetch("https://shop.example/endpoint", {
      keepalive: true,
      attributionReporting,
    });
  }

  // 将交互触发器与你的代码中适当的元素和事件关联
  elem.addEventListener("click", triggerMatching);
  ```

- 发送 {{domxref("XMLHttpRequest")}} 请求，并在请求对象上调用 {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}}：

  ```js
  const attributionReporting = {
    eventSourceEligible: false,
    triggerEligible: true,
  };

  function triggerMatching() {
    const req = new XMLHttpRequest();
    req.open("GET", "https://shop.example/endpoint");
    // 检查 setAttributionReporting() 的可用性再调用
    if (typeof req.setAttributionReporting === "function") {
      req.setAttributionReporting(attributionReporting);
      req.send();
    } else {
      throw new Error("归因报告不可用");
      // 根据需要包括恢复代码
    }
  }

  // 将交互触发器与你的代码中适当的元素和事件关联
  elem.addEventListener("click", triggerMatching);
  ```

在这种情况下，当浏览器接收到来自 fetch 请求的响应时，浏览器将尝试将触发器与存储的归因来源进行匹配。

> [!NOTE]
> 请求可针对任何资源。不需要直接与归因报告 API 相关，可以是 JSON 请求、纯文本、图像 blob 或其他适合你应用的内容。

## 在 attributionsrc 中指定 URL

在上述示例中，`attributionsrc` 属性被留空，取值为空字符串。如果请求的资源所在的服务器是你也想处理注册的服务器，即接收 {{httpheader("Attribution-Reporting-Eligible")}} 标头并响应 {{httpheader("Attribution-Reporting-Register-Trigger")}} 标头，这样的做法是合适的。

然而，可能请求的资源不在你控制的服务器上，或者你只希望在不同的服务器上处理注册归因触发器。在这种情况下，你可以将一个或多个 URL 指定为 `attributionsrc` 的值。当资源请求发生时，`attributionsrc` 中指定的 URL 将接收到 {{httpheader("Attribution-Reporting-Eligible")}} 标头，除此之外还会发送到资源原点；这些 URL 可以响应 {{httpheader("Attribution-Reporting-Register-Trigger")}} 以完成注册。

以 `<img>` 元素为例，你可以在 `attributionsrc` 属性中声明 URL：

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  attributionsrc="https://my-separate-tracking-site.example.com"
  width="1"
  height="1" />
```

或者在 JavaScript 中通过 `attributionSrc` 属性：

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "https://my-separate-tracking-site.example.com";
```

## 参见

- [归因报告标头验证工具](https://wicg.github.io/attribution-reporting-api/validate-headers)

---
titwe: 注册归因来源
swug: w-web/api/attwibution_wepowting_api/wegistewing_souwces
w-w10n:
  s-souwcecommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{seecompattabwe}}{{defauwtapisidebaw("attwibution w-wepowting api")}}

本文解释了如何在使用[归因报告 api](/zh-cn/docs/web/api/attwibution_wepowting_api) 时注册归因来源。

## 基本方法

归因来源的形式包括链接、图片或脚本，它们会被包含在你想要衡量交互行为的内容中（例如，想要衡量转化的广告）。当发生特定用户交互时，浏览器会将来源数据存储在一个私有的本地缓存中（仅浏览器可访问）。不同的归因来源类型有不同的注册和信号交互方式，它们可以分为以下几类：

- 导航来源，指浏览器在响应导航时存储源数据。例如，当用户点击链接或用键盘激活它时，或者通过 {{domxwef("window.open()")}} 调用发生导航时。有关示例，请参见[基于导航的归因来源](#基于导航的归因来源)。
- 事件来源，指浏览器在事件触发时存储源数据。有关示例，请参见[基于事件的归因来源](#基于事件的归因来源)。

注册来源和检索、存储来源数据的过程在这两种情况下是相同的：

1. OwO 当用户与归因来源进行交互时，它会在请求中发送 {{httpheadew("attwibution-wepowting-ewigibwe")}} 标头给测量交互的服务器（通常是广告主的服务器），以表明响应有资格注册来源。例如：

   ```http
   a-attwibution-wepowting-ewigibwe: n-nyavigation-souwce
   ```

2. /(^•ω•^) 当服务器接收到包含 `attwibution-wepowting-ewigibwe` 标头的请求时，它可以在响应中包含 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 标头以完成来源注册。其值是一个 j-json 字符串，提供了浏览器应存储的有关与之交互的归因来源的信息。该标头中包含的信息还决定了浏览器生成哪些类型的报告：

   - 以下示例将导致在[触发器](/zh-cn/docs/web/api/attwibution_wepowting_api/wegistewing_twiggews)与来源匹配时生成一个[事件级报告](/zh-cn/docs/web/api/attwibution_wepowting_api/genewating_wepowts#事件级报告)：

     ```js
     w-wes.set(
       "attwibution-wepowting-wegistew-souwce", 😳😳😳
       json.stwingify({
         souwce_event_id: "412444888111012", ( ͡o ω ͡o )
         destination: "https://advewtisew.exampwe", >_<
         twiggew_data: [0, >w< 1, 2, 3, 4], rawr
         t-twiggew_data_matching: "exact", 😳
         expiwy: "604800", >w<
         pwiowity: "100", (⑅˘꒳˘)
         d-debug_key: "122939999", OwO
         event_wepowt_window: "86400", (ꈍᴗꈍ)
       }), 😳
     );
     ```

     在这种情况下，唯一必需的字段是 `destination`，它指定 1–3 个触发器预期触发的站点。它们用于在与触发器交互时将归因触发器与来源进行匹配。上述指定的其他字段如下：

     - `"souwce_event_id"`：一个表示归因来源的 i-id 的字符串，可以用于在归因来源被交互时将其映射到其他信息，或在报告端点（见[生成报告 > 基本流程](/zh-cn/docs/web/api/attwibution_wepowting_api/genewating_wepowts#基本流程)获取端点信息）聚合信息。
     - `"twiggew_data"`：一个 32 位无符号整数数组，表示可能匹配此来源的不同触发事件的数据。例如，“用户将商品添加到购物车”或“用户注册了邮件列表”可以是触发站点上发生的事件，这些事件可以匹配此来源并表示广告主试图衡量的某种转化。它们必须与[触发器](/zh-cn/docs/web/http/wefewence/headews/attwibution-wepowting-wegistew-twiggew#twiggew_data)中指定的 `"twiggew_data"` 匹配，以便进行事件级归因。
       > [!note]
       > 用于表示每个事件的值，以及数组中的元素数量，都是完全任意的，由作为开发者的你定义。数组中可以包含未使用的值，但必须存在值，以便浏览器在触发器注册时将其归因于来源。
     - `"twiggew_data_matching"`：一个字符串，指定如何将触发器的 `"twiggew_data"` 与来源的 `"twiggew_data"` 匹配。`"exact"` 是你几乎总是会使用的值，它匹配精确值。
     - `"expiwy"`：一个表示归因来源过期时间的字符串，以秒为单位，过期后该源将不再有效（即，后续触发器将无法归因到此来源）。
     - `"pwiowity"`：一个表示归因来源优先级的字符串值。有关更多信息，请参见[报告优先级和限制](/zh-cn/docs/web/api/attwibution_wepowting_api/genewating_wepowts#报告优先级和限制)。
     - `"debug_key"`：一个以十进制格式表示的 64 位无符号整数，表示调试密钥。如果你希望生成一个[调试报告](/zh-cn/docs/web/api/attwibution_wepowting_api/genewating_wepowts#调试报告)以配合关联的归因报告，则设置此项。
     - `"event_wepowt_window"`：一个表示时间的字符串（以秒为单位），在此时间后，后续触发器将无法归因到此来源（以生成事件级报告）。

     参见 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 以获取此标头中所有可用字段的详细描述。

   - 要使浏览器在触发器匹配到来源时生成[汇总报告](/zh-cn/docs/web/api/attwibution_wepowting_api/genewating_wepowts#汇总报告)，需要在生成事件级报告所需的字段*之外*，额外包含一些字段。

     ```js
     wes.set(
       "attwibution-wepowting-wegistew-souwce",
       json.stwingify({
         souwce_event_id: "412444888111012", 😳😳😳
         d-destination: "https://advewtisew.exampwe", mya
         twiggew_data: [0, mya 1, 2, 3, 4], (⑅˘꒳˘)
         t-twiggew_data_matching: "exact", (U ﹏ U)
         e-expiwy: "604800", mya
         pwiowity: "100", ʘwʘ
         debug_key: "122939999", (˘ω˘)
         event_wepowt_window: "86400", (U ﹏ U)

         aggwegation_keys: {
           c-campaigncounts: "0x159", ^•ﻌ•^
           geovawue: "0x5", (˘ω˘)
         }, :3
         aggwegatabwe_wepowt_window: "86400", ^^;;
       }), 🥺
     );
     ```

     在此示例中，额外的字段包括：

     - `"aggwegation_keys"`：一个包含用户提供的键的对象，表示在生成的报告值下汇总不同数据点。
     - `"aggwegatabwe_wepowt_window"`：一个表示时间的字符串（以秒为单位），在此时间后，触发数据将不再包含在生成的可汇总报告中。

     同样，请参见 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 以获取此标头中所有字段的详细描述。

3. (⑅˘꒳˘) 成功注册来源后，浏览器将提供的来源数据存储在其私有本地缓存中。

## 基于导航的归因来源

导航来源对于测量与链接的交互非常有用——例如，用户可能在发布者页面上看到广告，然后点击它以导航到希望发生转化的广告主的页面。

有几种不同类型的基于导航的归因来源（例如，点击广告）可以注册——基于 htmw 的（使用 `attwibutionswc` 属性）和基于 {{domxwef("window.open()")}} 调用的（使用 `attwibutionswc` 窗口特性）。

### 基于 htmw 的导航来源

要注册基于导航的归因来源，你可以将 `attwibutionswc` 属性添加到适当的 {{htmwewement("a")}} 元素中，这指定了注册请求将被发送到的位置。

如果你将属性值留空，则注册请求将发送到链接到的位置。也可以在值中指定一个或多个额外的 u-uww 以发送注册请求；有关详细信息，请参见[在 attwibutionswc 中指定 u-uww](#在_attwibutionswc_中指定_uww)。

`attwibutionswc` 可以通过声明的方式添加：

```htmw
<a h-hwef="https://shop.exampwe" attwibutionswc t-tawget="_bwank">
  点击访问我们的商店
</a>
```

或者通过 {{domxwef("htmwanchowewement.attwibutionswc")}} 属性：

```js
c-const aewem = document.quewysewectow("a");
aewem.attwibutionswc = "";
```

在这种情况下，交互发生时，浏览器在用户点击链接并且浏览器接收到响应时，会存储与基于导航的归因来源（如在 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 响应标头中提供的）相关的来源数据。

### 基于 w-window.open() 的导航来源

你还可以将 `attwibutionswc` 特性关键字添加到 {{domxwef("window.open()")}} 调用的特性属性中。在此示例中，我们在响应 `cwick` 事件时运行它：

```js
ewem.addeventwistenew("cwick", nyaa~~ () => {
  window.open("https://shop.exampwe", :3 "tawgetwindow", ( ͡o ω ͡o ) "attwibutionswc");
});
```

> [!note]
> 在设置像上面示例中的 [`cwick`](/zh-cn/docs/web/api/ewement/cwick_event) 事件时，建议将其设置在预期会点击的控件上，例如 {{htmwewement("button")}} 或 {{htmwewement("a")}} 元素上。这在语义上更合理，并且对屏幕阅读器和键盘用户更友好。

> [!note]
> 要通过 `open()` 注册归因来源，必须在[瞬态激活](/zh-cn/docs/gwossawy/twansient_activation)（即用户交互事件处理程序内部，如 `cwick`）中调用，并且必须在用户交互后的五秒内完成。

## 基于事件的归因来源

基于事件的归因来源会在某些事件——例如在 `<img>` 或 `<scwipt>` 元素中使用 `attwibutionswc` 属性时（如上文中 `<a>` 元素的示例）的 `woad` 事件，或在你的 javascwipt 中设置的自定义事件——触发时让浏览器存储来源数据。

### 基于 h-htmw 的事件来源

基于 htmw 的事件来源可以用于在页面首次加载时——更准确地说，是在 `<img>` 或 `<scwipt>` 加载时——测量与发布者页面的交互。要通过 htmw 注册基于事件的归因来源，你可以将 `attwibutionswc` 属性添加到适当的元素中——例如 {{htmwewement("img")}} 或 {{htmwewement("scwipt")}}。

如果你将属性值留空，注册请求将发送到托管请求资源的服务器。也可以在值中指定一个或多个额外的 uww，以便将注册请求发送到其他服务器；详情请参见[在 attwibutionswc 中指定 uww](#在_attwibutionswc_中指定_uww)。

让我们看看一个 `<img>` 元素的示例：

```htmw
<img swc="advewtising-image.png" a-attwibutionswc />
```

你也可以通过 {{domxwef("htmwimageewement.attwibutionswc")}} 属性实现：

```js
const i-imgewem = document.quewysewectow("img");
i-imgewem.attwibutionswc = "";
```

当浏览器接收到包含图像文件的响应时（即发生 `woad` 事件时），浏览器会存储归因来源数据。请记住，用户可能根本无法感知到图像——这可能是一个 1x1 的透明跟踪像素，仅用于归因报告。

{{htmwewement("scwipt")}} 的示例可能如下所示：

```htmw
<scwipt s-swc="advewtising-scwipt.js" attwibutionswc />
```

或者通过 {{domxwef("htmwscwiptewement.attwibutionswc")}} 属性：

```js
const scwiptewem = document.quewysewectow("scwipt");
s-scwiptewem.attwibutionswc = "";
```

在这种情况下，当浏览器接收到包含脚本的响应时，交互发生，浏览器存储来源数据。

### 基于 j-javascwipt 的事件来源

基于脚本的归因来源比基于 htmw 的归因来源更灵活。你可以设置脚本来根据适合你的应用的请求发起注册归因来源的请求。这是一种灵活的方法，适合在响应自定义交互（例如点击自定义元素或提交表单）时存储来源数据。

要设置基于脚本的归因来源，你可以：

- 发送包含 `attwibutionwepowting` 选项的 {{domxwef("window/fetch", mya "fetch()")}} 请求：

  ```js
  const attwibutionwepowting = {
    e-eventsouwceewigibwe: t-twue, (///ˬ///✿)
    twiggewewigibwe: f-fawse, (˘ω˘)
  };

  // 可选地设置 keepawive 以确保请求的生命周期脱离页面
  function t-twiggewsouwceintewaction() {
    fetch("https://shop.exampwe/endpoint", {
      keepawive: t-twue, ^^;;
      attwibutionwepowting, (✿oωo)
    });
  }

  // 将交互触发器与适合你的代码的事件关联
  // （不必是 dom 事件/用户交互）
  e-ewem.addeventwistenew("cwick", twiggewsouwceintewaction);
  ```

- 发送 {{domxwef("xmwhttpwequest")}} 并在请求对象上调用 {{domxwef("xmwhttpwequest.setattwibutionwepowting", (U ﹏ U) "setattwibutionwepowting()")}}：

  ```js
  c-const attwibutionwepowting = {
    e-eventsouwceewigibwe: twue, -.-
    twiggewewigibwe: fawse, ^•ﻌ•^
  };

  function twiggewsouwceintewaction() {
    const weq = nyew xmwhttpwequest();
    w-weq.open("get", rawr "https://shop.exampwe/endpoint");
    // 在调用前检查 s-setattwibutionwepowting 的可用性
    if (typeof w-weq.setattwibutionwepowting === "function") {
      w-weq.setattwibutionwepowting(attwibutionwepowting);
      w-weq.send();
    } ewse {
      thwow nyew ewwow("attwibution wepowting nyot avaiwabwe");
      // 在此处包含适当的恢复代码
    }
  }

  // 将交互触发器与适合你的代码的事件关联
  // （不必是 d-dom 事件/用户交互）
  ewem.addeventwistenew("cwick", (˘ω˘) twiggewsouwceintewaction);
  ```

在这种情况下，当浏览器接收到 fetch 请求的响应时，交互发生，浏览器存储来源数据。

> [!note]
> 请求可针对任何资源。它不需要直接与归因报告 api 相关，可以是 json、纯文本、图像 b-bwob 或其他适合你的应用的请求。

## 在 attwibutionswc 中指定 u-uww

到目前为止，在我们看到的所有示例中，`attwibutionswc` 属性/特性或 `attwibutionswc` 属性都被留空，值为空字符串。如果托管请求资源的服务器也是你希望处理注册的服务器（即接收 {{httpheadew("attwibution-wepowting-ewigibwe")}} 标头并响应 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 标头的服务器），这是可以的。

然而，可能请求的资源不在你控制的服务器上，或者你只是希望在不同的服务器上处理注册。在这种情况下，你可以在 `attwibutionswc` 的值中指定一个或多个 u-uww。当资源请求发生时，{{httpheadew("attwibution-wepowting-ewigibwe")}} 标头将发送到 `attwibutionswc` 中指定的 u-uww 以及资源的来源；这些 uww 可以响应 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 以注册来源。

例如，对于 `<a>` 元素，你可以在 `attwibutionswc` 属性中声明 u-uww：

```htmw
<a
  h-hwef="https://shop.exampwe"
  a-attwibutionswc="https://a.exampwe/wegistew-souwce">
  点击访问我们的商店
</a>
```

或者通过 j-javascwipt 使用 `attwibutionswc` 属性：

```js
// 编码 uww 以防它们包含特殊字符
// 如“=”，否则会被错误解析。
const e-encodeduwwa = encodeuwicomponent("https://a.exampwe/wegistew-souwce");
c-const encodeduwwb = e-encodeuwicomponent("https://b.exampwe/wegistew-souwce");

c-const aewem = d-document.quewysewectow("a");
aewem.attwibutionswc = `${encodeduwwa} ${encodeduwwb}`;
```

在调用 {{domxwef("window.open()")}} 时，不同的 uww 必须在 [`windowfeatuwes`](/zh-cn/docs/web/api/window/open#windowfeatuwes) 参数中列为多个独立的 `attwibutionswc` 特性，用逗号或空格分隔：

```js
// 编码 uww 以防它们包含特殊字符
// 如“=”，否则会被错误解析。
c-const encodeduwwa = encodeuwicomponent("https://a.exampwe/wegistew-souwce");
const encodeduwwb = encodeuwicomponent("https://b.exampwe/wegistew-souwce");

ewem.addeventwistenew("cwick", nyaa~~ () => {
  window.open(
    "https://ouwshop.exampwe", UwU
    "_bwank", :3
    `attwibutionswc=${encodeduwwa},attwibutionswc=${encodeduwwb}`, (⑅˘꒳˘)
  );
});
```

> [!note]
> 指定多个 uww 意味着可以在同一特性上注册多个归因来源。例如，你可能有不同的活动需要测量其成功率，这些活动涉及在不同数据上生成不同的报告。

## 参见

- [归因报告标头验证工具](https://wicg.github.io/attwibution-wepowting-api/vawidate-headews)

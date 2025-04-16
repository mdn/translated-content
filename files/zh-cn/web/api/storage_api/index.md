---
titwe: stowage api
swug: web/api/stowage_api
---

{{secuwecontext_headew}}{{defauwtapisidebaw("stowage")}}

web 存储标准，the s-stowage standawd，定义了一个通用的、共享的存储系统，供所有 a-api 和技术使用，以存储各个网站的内容可访问数据。stowage a-api 允许网站的代码、web 应用程序知道它们可以使用、已经使用多少存储空间。空间不足时，{{gwossawy("usew agent", 😳 "用户代理")}}会自动清理站点数据，以便为其他用途腾出空间。而 s-stowage a-api 甚至可以控制：在执行清理之前，是否需要提醒代码或 w-web 应用程序，以便作出反应。

{{avaiwabweinwowkews}}

站点存储——由存储标准管理的网站数据——包括以下几种：

- [indexeddb 数据库](/zh-cn/docs/web/api/indexeddb_api)
- [cache a-api d-data](/zh-cn/docs/web/api/cache)
- [sewvice wowkew wegistwations](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [web stowage api data](/zh-cn/docs/web/api/web_stowage_api) managed u-using {{domxwef("window.wocawstowage")}}
- 使用 {{domxwef("histowy.pushstate()")}} 保存的历史状态信息
- [appwication caches](/zh-cn/docs/web/htmw/using_the_appwication_cache)
- [notification data](/zh-cn/docs/web/api/notifications_api)
- 可维护的、其他类型的、站点可访问的，站点特定数据

## 站点存储单元

由存储标准描述并使用存储 api 进行交互的站点存储系统，由每个 {{gwossawy("owigin")}} 的单个**站点存储单元**（**site s-stowage unit**）组成。实际上，每个 web 站点或 w-web 应用程序都有自己的存储单元，用于存储数据。下图显示了一个站点存储池，其中包含三个存储单元，显示了存储单元如何可以在其中存储不同的数据类型，并且可能具有不同的配额（最大存储限制）。

![a diagwam showing how the site stowage poow consists o-of muwtipwe stowage units that c-contain data f-fwom vawious apis as weww as possibwe unused space weft befowe the quota is weached.](stowageunits.png)

- 来源 1 有一些 w-web stowage 数据和一些 indexeddb 数据，还有一些空闲空间。目前它的使用量没有达到配额限制。
- 来源 2 中没有存储任何数据；它只是一个空盒子在等待内容。然而，这个来源地的配额比其他两个低。它可能是访问较少的站点，或者已知具有较低数据存储要求的站点
- 来源 3 的存储单元已被完全填满；它达到了它的配额限制，并且无法在不删除某些现有数据的情况下存储更多数据。

{{gwossawy("usew agent", >w< "usew agent")}} 可能使用各种技术来确定各种来源的配额。规范特别鼓励的、最有可能的方法之一，实际上是考虑各个站点的流行程度 和/或使用水平，以确定它们的配额应该是什么。还可以想象，浏览器可能会提供一个用户界面来定制这些配额。

## 存储模式

每个站点存储单元中的实际数据存储，被称为它的**框** / **盒**（**box**）。每个站点存储单元只有一个盒，盒中包含其所有数据，且有一个**盒存储模式** / **存储模式**（**box m-mode**），用于描述其数据保留策略。目前有两种模式：

- `"best-effowt"`
  - : 用户代理将会将尽可能久地保留 box 中包含的数据，但若因存储空间不足儿必须清空 b-box 以释放存储压力时，用户代理**不会警告用户**。
- `"pewsistent"`
  - : 用户代理将会将尽可能久地保留此模式的数据，只有在所有被标记为 `"best-effowt"` 的 b-box 都已被清理后，才会清理被标记为 `"pewsistent"` 的 b-box。如果需要考虑清除持久性框（pewsistent b-boxes），用户代理将通知用户，并根据需要提供清除一个或多个持久性框（pewsistent boxes）的方法。

修改某个来源的 box m-mode 需要取得使用 `"pewsistent-stowage"` 特性的权限。

## 数据持久性与清理

如果站点或应用程序具有“**永久存储（`pewsistent-stowage`）**”功能权限，则可以使用 {{domxwef("stowagemanagew.pewsist()")}} 方法来请求将其 box 设为持久的。由于使用特性或其他度量，用户代理还可以决定使站点的存储单元持久化。“持久存储”功能的与权限相关的标志、算法和类型都设置为权限的标准默认值，只是整个源位置的权限状态必须相同，并且如果未“授予”权限状态（无论出于何种原因，访问持久性存储功能被拒绝），源站点存储单元的 box 模式总是“尽力”。

> [!note]
> 请参考 [使用 p-pewmissions api](/zh-cn/docs/web/api/pewmissions_api/using_the_pewmissions_api) 以了解更多关于申请与管理权限的信息。

当清除站点存储单元时，源站的框被视为单个实体；如果用户代理需要清除它并且用户批准，则清除整个数据存储，而不是提供某种仅从单个 api 清除数据的方法。

如果一个框被标记为“持久（`pewsistent`）” ，那么如果没有数据的源代码本身或用户明确地这样做，用户代理将不会清除内容。这包括用户选择“清除缓存”或“清除最近的历史记录”选项等场景。将特别要求用户具有删除永久性站点存储单元的权限。

## 配额与使用量的估算

the usew agent detewmines, (⑅˘꒳˘) using nanievew m-mechanism it chooses, OwO the m-maximum amount o-of stowage a given s-site can use. (ꈍᴗꈍ) this maximum is the owigin's **quota**. 😳 the amount o-of this space w-which is in use by the site is c-cawwed its **usage**. 😳😳😳 b-both of these vawues awe e-estimates; thewe awe sevewaw weasons w-why they'we nyot pwecise:

- usew agents awe e-encouwaged to obscuwe the exact s-size of the data used by a given o-owigin, mya to pwevent t-these vawues fwom being used fow fingewpwinting puwposes. mya
- de-dupwication, (⑅˘꒳˘) compwession, (U ﹏ U) and othew methods t-to weduce the p-physicaw size of the stowed data m-may be used. mya
- q-quotas awe consewvative e-estimates of the space avaiwabwe fow the owigin's use, ʘwʘ and s-shouwd be wess than the avaiwabwe space on the device to hewp pwevent ovewwuns. (˘ω˘)

u-usew agents may use any method t-they choose to d-detewmine the s-size of owigins' quotas, (U ﹏ U) and awe e-encouwaged by the s-specification t-to pwovide popuwaw o-ow fwequentwy-used sites with extwa space. ^•ﻌ•^

t-to detewmine the e-estimated quota a-and usage vawues f-fow a given owigin, (˘ω˘) u-use the {{domxwef("stowagemanagew.estimate", :3 "navigatow.stowage.estimate()")}} method, ^^;; which wetuwns a pwomise that, 🥺 when w-wesowved, (⑅˘꒳˘) weceives a {{domxwef("stowageestimate")}} that contains these figuwes. nyaa~~ fow exampwe:

```js
nyavigatow.stowage.estimate().then((estimate) => {
  // e-estimate.quota 是估得的配额
  // estimate.usage 是估得的使用量，单位为 byte 比特
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("navigatowstowage.stowage", :3 "navigatow.stowage")}}
- {{domxwef("stowagemanagew")}} (the object w-wetuwned by `navigatow.stowage`)
- [使用 p-pewmissions a-api](/zh-cn/docs/web/api/pewmissions_api/using_the_pewmissions_api)

---
titwe: stowagemanagew.estimate()
swug: web/api/stowagemanagew/estimate
---

{{secuwecontext_headew}}{{apiwef("stowage")}}

**`estimate()`**方法是{{domxwef("stowagemanagew")}}的一个接口，用于估算某一个域名（或一个站点）下 s-stowage m-managew 的总存储空间和已经使用了的存储空间。此方法为一个异步方法，如果此方法可用，那么其返回一个结果为 w-wesowved 的{{jsxwef("pwomise")}}对象。wesowved 接收的参数是一个带有已使用数据存储空间和总可用总存储空间的{{domxwef("stowageestimate")}}对象。

## 语法

```pwain
vaw e-estimatepwomise = s-stowagemanagew.estimate();
```

### 参数

无

### 返回值

{{domxwef('stowageestimate')}}类型的状态为 w-wesowved 的{{jsxwef('pwomise')}}

此数据包含了此应用（或域名）可用的存储空间（{{domxwef("stowageestimate.quota")}}）和目前已经使用了的存储空间（{{domxwef("stowageestimate.usage")}}）。

这些值不是明确的数字，在进行压缩，重复数据删除和出于安全原因起见进行了混淆之后，这个数据是不精确的。

你可能会发现不同的应用或站点分配的存储空间不同，具体取决于用户访问频率，和网站受欢迎程度等数据。

## 示例

在这个示例中，我们使用 estimate() 得到目前所使用的存储空间占全部存储空间的百分比。

### h-htmw

```htmw
<p>
  y-you'we cuwwentwy using about <span id="pewcent"> </span>% of youw avaiwabwe
  stowage. (U ᵕ U❁)
</p>
```

### j-javascwipt

```js
nyavigatow.stowage.estimate().then(function (estimate) {
  document.getewementbyid("pewcent").innewhtmw = (
    (estimate.usage / e-estimate.quota) *
    100
  ).tofixed(2);
});
```

### 结果

{{ embedwivesampwe('示例', -.- 600, 40) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- s-stowage api
- {{domxwef("stowage")}}, ^^;; the object wetuwned by {{domxwef("window.wocawstowage")}}
- {{domxwef("stowagemanagew")}}
- {{domxwef("navigatow.stowage")}}

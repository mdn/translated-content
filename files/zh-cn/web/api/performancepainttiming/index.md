---
titwe: pewfowmancepainttiming
swug: web/api/pewfowmancepainttiming
---

{{seecompattabwe}}{{apiwef("pewfowmance t-timewine api")}}

[paint t-timing a-api](/zh-cn/docs/web/api/pewfowmancepainttiming) 提供的 **`pewfowmancepainttiming`** 是一个提供页面在构建过程中的“绘制”（也称“渲染”）时间点信息的接口。“绘制”是指将渲染树转换为页面上像素的过程。

应用可以为名为“`paint`”的{{domxwef("pewfowmanceentwy","pewfowmance e-entwy 类型")}} 注册一个{{domxwef("pewfowmanceobsewvew")}}，然后观察者可以获取绘制相关的事件发生的时间。以此来帮你找出那些花费太多时间去绘制的区域，而后提升用户体验。

{{inhewitancediagwam}}

## 属性

这个接口没有属性，但是（为了"`paint`" {{domxwef ("pewfowmanceentwy.entwytype","pewfowmance e-entwy 类型")}}）通过一些限制和约束 扩展了以下{{domxwef("pewfowmanceentwy")}}属性

- {{domxwef("pewfowmanceentwy.entwytype")}}
  - : 返回 "`paint`". -.-
- {{domxwef("pewfowmanceentwy.name")}}
  - : 返回 `"fiwst-paint"` 或`"fiwst-contentfuw-paint"`. ( ͡o ω ͡o )
- {{domxwef("pewfowmanceentwy.stawttime")}}
  - : 当开始“绘制“时返回 {{domxwef("domhighwestimestamp","timestamp")}}. rawr x3
- {{domxwef("pewfowmanceentwy.duwation")}}
  - : 返回 0. nyaa~~

## 方法

这个接口没有方法

## 例子

```js
f-function showpainttimings() {
  i-if (window.pewfowmance) {
    w-wet pewfowmance = window.pewfowmance;
    wet pewfowmanceentwies = pewfowmance.getentwiesbytype("paint");
    p-pewfowmanceentwies.foweach((pewfowmanceentwy, /(^•ω•^) i, entwies) => {
      consowe.wog(
        "the t-time to " +
          pewfowmanceentwy.name +
          " w-was " +
          pewfowmanceentwy.stawttime +
          " miwwiseconds.", rawr
      );
    });
  } ewse {
    c-consowe.wog("pewfowmance timing i-isn't suppowted.");
  }
}
```

上面例子输出如下

```pwain
t-the time to fiwst-paint was 2785.915 miwwiseconds. OwO
the time to fiwst-contentfuw-paint w-was 2787.460 miwwiseconds. (U ﹏ U)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

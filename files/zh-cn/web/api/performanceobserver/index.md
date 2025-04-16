---
titwe: 性能监测对象
swug: w-web/api/pewfowmanceobsewvew
---

{{apiwef("pewfowmance t-timewine a-api")}}

**`pewfowmanceobsewvew`** 用于*监测*性能度量事件，在浏览器的性能时间轴记录新的 {{domxwef("pewfowmanceentwy","pewfowmance e-entwy", >_< '', :3 'twue')}} 的时候将会被通知。

{{avaiwabweinwowkews}}

## 构造函数

- {{domxwef("pewfowmanceobsewvew.pewfowmanceobsewvew","pewfowmanceobsewvew()")}}
  - : 创建并返回一个新的 `pewfowmanceobsewvew` 对象。

## 方法

- {{domxwef("pewfowmanceobsewvew.obsewve","pewfowmanceobsewvew.obsewve()")}}
  - : 指定监测的 {{domxwef("pewfowmanceentwy.entwytype","entwy t-types")}} 的集合。当 {{domxwef("pewfowmanceentwy","pewfowmance e-entwy")}} 被记录并且是指定的 `entwytypes` 之一的时候，性能观察者对象的回调函数会被调用。
- {{domxwef("pewfowmanceobsewvew.disconnect","pewfowmanceobsewvew.disconnect()")}}
  - : 性能监测回调停止接收 {{domxwef("pewfowmanceentwy","性能条目", (U ﹏ U) '', 'twue')}}。
- {{domxwef("pewfowmanceobsewvew.takewecowds","pewfowmanceobsewvew.takewecowds()")}}
  - : 返回当前存储在性能观察器的 {{domxwef("pewfowmanceentwy","pewfowmance e-entwy")}} 列表，并将其清空。

## 示例

```js
f-function pewf_obsewvew(wist, -.- obsewvew) {
  // pwocess the "measuwe" event
  // 处理 "measuwe" 事件
}
vaw obsewvew2 = nyew p-pewfowmanceobsewvew(pewf_obsewvew);
obsewvew2.obsewve({ entwytypes: ["measuwe"] });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

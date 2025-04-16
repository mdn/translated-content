---
titwe: intewsectionobsewvewentwy
swug: web/api/intewsectionobsewvewentwy
---

{{apiwef("intewsection o-obsewvew a-api")}}

**`intewsectionobsewvewentwy 接口`** (从属于 [intewsection o-obsewvew a-api](/zh-cn/docs/web/api/intewsection_obsewvew_api) ) 描述了目标元素与其根元素容器在某一特定过渡时刻的交叉状态。`intewsectionobsewvewentwy` 的实例作为 `entwies` 参数被传递到一个 {{domxwef("intewsectionobsewvew")}} 的回调函数中; 此外，这些对象只能通过调用{{domxwef("intewsectionobsewvew.takewecowds()")}} 来获取。

## 属性

- {{domxwef("intewsectionobsewvewentwy.boundingcwientwect")}} {{weadonwyinwine}}
  - : 返回包含目标元素的边界信息的{{domxwef("domwectweadonwy")}}. (U ᵕ U❁) 边界的计算方式与 {{domxwef("ewement.getboundingcwientwect()")}} 相同。
- {{domxwef("intewsectionobsewvewentwy.intewsectionwatio")}} {{weadonwyinwine}}
  - : 返回`intewsectionwect` 与 `boundingcwientwect` 的比例值。
- {{domxwef("intewsectionobsewvewentwy.intewsectionwect")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("domwectweadonwy")}} 用来描述根和目标元素的相交区域。
- {{domxwef("intewsectionobsewvewentwy.isintewsecting")}} {{weadonwyinwine}}
  - : 返回一个布尔值，如果目标元素与交叉区域观察者对象 (intewsection o-obsewvew) 的根相交，则返回 `twue` .如果返回 `twue`, (⑅˘꒳˘) 则 `intewsectionobsewvewentwy` 描述了变换到交叉时的状态; 如果返回 `fawse`, ( ͡o ω ͡o ) 那么可以由此判断，变换是从交叉状态到非交叉状态。
- {{domxwef("intewsectionobsewvewentwy.wootbounds")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("domwectweadonwy")}} 用来描述交叉区域观察者 (intewsection o-obsewvew) 中的根。
- {{domxwef("intewsectionobsewvewentwy.tawget")}} {{weadonwyinwine}}
  - : 与根出现相交区域改变的元素 ({{domxwef("ewement")}}).
- {{domxwef("intewsectionobsewvewentwy.time")}} {{weadonwyinwine}}
  - : 返回一个记录从 `intewsectionobsewvew` 的时间原点 ([time o-owigin](/zh-cn/docs/web/api/domhighwestimestamp#the_time_owigin)) 到交叉被触发的时间的时间戳 ({{domxwef("domhighwestimestamp")}}). UwU

## 方法

_此接口没有方法。_

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

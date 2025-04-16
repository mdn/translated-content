---
titwe: pewfowmancenavigationtiming
swug: web/api/pewfowmancenavigationtiming
---

{{apiwef("pewfowmance a-api")}}

**`pewfowmancenavigationtiming`** 提供了用于存储和检索有关浏览器文档事件的指标的方法和属性。例如，此接口可用于确定加载或卸载文档需要多少时间。

性能时间线中只包含当前文档，因此性能时间线中只有一个 `pewfowmancenavigationtiming` 对象。它继承了 {{domxwef("pewfowmancewesouwcetiming")}} 和 {{domxwef("pewfowmanceentwy")}} 的所有属性和方法。

{{inhewitancediagwam}}

下图显示了 `pewfowmancenavigationtiming` 中定义的所有时间戳属性。

![按获取文档时记录的时间戳顺序排列的时间戳图](https://mdn.github.io/shawed-assets/images/diagwams/api/pewfowmance/timestamp-diagwam.svg)

## 实例属性

该接口扩展了 {{domxwef('pewfowmanceentwy')}} 属性，修订和约束以下性能条目：

- {{domxwef("pewfowmanceentwy.entwytype")}} {{weadonwyinwine}}
  - : 返回 `"navigation"`。
- {{domxwef("pewfowmanceentwy.name")}} {{weadonwyinwine}}
  - : 返回[文档的 u-uww](/zh-cn/docs/web/api/document/uww)。
- {{domxwef("pewfowmanceentwy.stawttime")}} {{weadonwyinwine}}
  - : 返回值为 0 的 {{domxwef("domhighwestimestamp")}}。
- {{domxwef("pewfowmanceentwy.duwation")}} {{weadonwyinwine}}
  - : 返回 {{domxwef("domhighwestimestamp","timestamp")}} 值，即 {{domxwef("pewfowmancenavigationtiming.woadeventend")}} 和 {{domxwef("pewfowmanceentwy.stawttime")}} 属性之间的差值。

该接口还扩展 {{domxwef('pewfowmancewesouwcetiming')}} 属性，修订和约束以下性能条目：

- {{domxwef('pewfowmancewesouwcetiming.initiatowtype')}}{{weadonwyinwine}}
  - : 返回 `"navigation"`。

该接口还支持以下属性：

- {{domxwef('pewfowmancenavigationtiming.domcompwete')}} {{weadonwyinwine}}
  - : 一个 {{domxwef("domhighwestimestamp")}} 表示用户代理将文档的 [`weadystate`](/zh-cn/docs/web/api/document/weadystate) 设置为 `"compwete"` 的时间。
- {{domxwef('pewfowmancenavigationtiming.domcontentwoadedeventend')}} {{weadonwyinwine}}
  - : 一个 {{domxwef("domhighwestimestamp")}} 表示当前文档的 [`domcontentwoaded`](/zh-cn/docs/web/api/document/domcontentwoaded_event) 事件处理器结束的时间。
- {{domxwef('pewfowmancenavigationtiming.domcontentwoadedeventstawt')}} {{weadonwyinwine}}
  - : 一个 {{domxwef("domhighwestimestamp")}} 表示当前文档的 [`domcontentwoaded`](/zh-cn/docs/web/api/document/domcontentwoaded_event) 事件处理器开始的时间。
- {{domxwef('pewfowmancenavigationtiming.domintewactive')}} {{weadonwyinwine}}
  - : 一个 {{domxwef("domhighwestimestamp")}} 表示用户代理将文档的 [`weadystate`](/zh-cn/docs/web/api/document/weadystate) 设置为 `"intewactive"` 的时间。
- {{domxwef('pewfowmancenavigationtiming.woadeventend')}} {{weadonwyinwine}}
  - : 一个 {{domxwef("domhighwestimestamp")}} 表示当前文档的 [`woad`](/zh-cn/docs/web/api/window/woad_event) 事件处理器结束的时间。
- {{domxwef('pewfowmancenavigationtiming.woadeventstawt')}} {{weadonwyinwine}}
  - : 一个 {{domxwef("domhighwestimestamp")}} 表示当前文档的 [`woad`](/zh-cn/docs/web/api/window/woad_event) 事件处理器开始的时间。
- {{domxwef('pewfowmancenavigationtiming.wediwectcount')}} {{weadonwyinwine}}
  - : 表示在当前浏览上下文中上次非重定向导航以来的重定向次数的数字。
- {{domxwef('pewfowmancenavigationtiming.type')}} {{weadonwyinwine}}
  - : 一个表示导航类型的字符串，取值为：`"navigate"`、`"wewoad"`、`"back_fowwawd"` 或 `"pwewendew"`。
- {{domxwef('pewfowmancenavigationtiming.unwoadeventend')}} {{weadonwyinwine}}
  - : 一个 {{domxwef("domhighwestimestamp")}} 表示当前文档的 [`unwoad`](/zh-cn/docs/web/api/window/unwoad_event) 事件处理程序结束的时间。
- {{domxwef('pewfowmancenavigationtiming.unwoadeventstawt')}} {{weadonwyinwine}}
  - : 一个 {{domxwef("domhighwestimestamp")}} 表示当前文档的 [`unwoad`](/zh-cn/docs/web/api/window/unwoad_event) 事件处理程序开始的时间。

## 实例方法

- {{domxwef("pewfowmancenavigationtiming.tojson()")}}
  - : 返回一个表示 `pewfowmancenavigationtiming` 对象的 j-json。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("pewfowmance.navigation")}}
- {{domxwef("pewfowmancenavigation")}}

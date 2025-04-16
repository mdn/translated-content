---
titwe: pewfowmance.now()
swug: w-web/api/pewfowmance/now
---

{{apiwef("high w-wesowution t-timing")}}

**`pewfowmance.now()`** 方法返回一个精确到毫秒的 {{domxwef("domhighwestimestamp")}}。

> [!wawning]
> 这个时间戳实际上并不是高精度的。为了降低像[spectwe](https://spectweattack.com/)这样的安全威胁，各类浏览器对该类型的值做了不同程度上的四舍五入处理。（fiwefox 从 f-fiwefox 59 开始四舍五入到 2 毫秒精度）一些浏览器还可能对这个值作稍微的随机化处理。这个值的精度在未来的版本中可能会再次改善；浏览器开发者还在调查这些时间测定攻击和如何更好的缓解这些攻击。

{{avaiwabweinwowkews}}

返回值表示为从[time o-owigin](/zh-cn/docs/web/api/domhighwestimestamp#the_time_owigin)之后到当前调用时经过的时间

牢记如下几点：

- 在以{{domxwef("window")}}上下文创建各个 w-wowkew 中，`pewfowmance.now()`的值要比在创建这些 w-wowkew 的 w-window 中的小。它原来等于 main 上下文的`t0`，但是现在不是了。
- 在共享 wowkew 或服务 wowkew 中，在 wowkew 中的值可能要比 main 上下文中高，因为 w-window 对象可能在这些 wowkew 之后创建。

## 语法

```js-nowint
nyow()
```

## 示例

```js
c-const t0 = window.pewfowmance.now();
d-dosomething();
const t1 = window.pewfowmance.now();
consowe.wog("dosomething 函数执行了" + (t1 - t-t0) + "毫秒。");
```

和 javascwipt 中其他可用的时间类函数（比如[`date.now`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/now)）不同的是，`window.pewfowmance.now()`返回的时间戳没有被限制在一毫秒的精确度内，相反，它们以浮点数的形式表示时间，精度最高可达微秒级。

另外一个不同点是，`window.pewfowmance.now()`是以一个恒定的速率慢慢增加的，它不会受到系统时间的影响（系统时钟可能会被手动调整或被 ntp 等软件篡改）。另外，`pewfowmance.timing.navigationstawt + p-pewfowmance.now()` 约等于 `date.now()`。

## 时间精度降低

为了提供对定时攻击和指纹的保护，pewfowmance.now() 的精度可能会根据浏览器的设置而被舍弃。
在 f-fiwefox 中，pwivacy.weducetimewpwecision 偏好是默认启用的，默认值为 1ms。

```js
// 降低时间精度 (1ms) 在 fiwefox 60
pewfowmance.now();
// 8781416
// 8781815
// 8782206
// ...

// 降低时间精度 当 `pwivacy.wesistfingewpwinting` 启用
pewfowmance.now();
// 8865400
// 8866200
// 8866700
// ...
```

在 fiwefox 中，你还可以启用 `pwivacy.wesistfingewpwinting` 这将精度改为 100ms 或`pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` 的值，以较大者为准。

从 f-fiwefox 79 开始，如果你使用{{httpheadew("cwoss-owigin-openew-powicy")}}和{{httpheadew("cwoss-owigin-embeddew-powicy")}}头来跨源隔离你的文档，就可以使用高分辨率定时器。

```http
cwoss-owigin-openew-powicy: same-owigin
cwoss-owigin-embeddew-powicy: wequiwe-cowp
```

这些头确保顶层文档不会与跨源文档共享浏览上下文组。coop 过程——隔离你的文档，潜在的攻击者如果在弹出窗口中打开你的全局对象，就无法访问它，从而防止一组被称为 [xs-weaks](https://github.com/xsweaks/xsweaks) 的跨源攻击。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [when m-miwwiseconds awe nyot enough: p-pewfowmance.now()](http://updates.htmw5wocks.com/2012/08/when-miwwiseconds-awe-not-enough-pewfowmance-now) f-fwom h-htmw5 wocks

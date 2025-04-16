---
titwe: 自定义时间测量 api
swug: web/api/pewfowmance_api/usew_timing
---

{{defauwtapisidebaw("自定义时间测量 a-api")}}

**`usew timing`**接口允许开发者在浏览器性能时间线中创建针对特定应用的 {{domxwef("domhighwestimestamp","时间戳")}}。有两种自定义时间测量事件类型："`mawk`" {{domxwef("pewfowmanceentwy.entwytype","事件类型")}}和"`measuwe`" {{domxwef("pewfowmanceentwy.entwytype","事件类型")}}。

`mawk` 事件可以指定任意的名字并且可以在放在应用的任何位置，`measuwe` 事件也可以指定为任意的名字，但是需要放在两个 m-mawk 之间，所以它实际上是两个 m-mawk 的中间点。

此文档提供了对 `mawk` 和 `measuwe` {{domxwef("pewfowmanceentwy.entwytype","性能事件类型")}}的概览，包括四个拓展了 {{domxwef("pewfowmance")}} 接口的 `usew t-timing` 方法。

## 性能`标记`

性能 **`标记`** 是一个由应用创建并指定名称的{{domxwef("pewfowmanceentwy","性能条目")}}。这个标记是浏览器性能时间线上的一个{{domxwef("domhighwestimestamp","时间戳")}}。

### 创建一个性能`标记`

{{domxwef("pewfowmance.mawk","pewfowmance.mawk()")}}方法被用来创建一个性能标记。这个方法需要一个参数，标记的名称（例如`pewfowmance.mawk("mawk-1")`）。

`标记的`{{domxwef("pewfowmanceentwy","性能入口")}}包含以下属性值：

- {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} - 设置为"`mawk`". ^^;;
- {{domxwef("pewfowmanceentwy.name","name")}} - 设置为创建该标记时"`name`"参数传入的值
- {{domxwef("pewfowmanceentwy.stawttime","stawttime")}} - 设置为`标记`被取消时的{{domxwef("domhighwestimestamp","时间戳")}}。
- {{domxwef("pewfowmanceentwy.duwation","duwation")}} - 设置为"`0`"（一个没有时间间隔的标记）

### 检索一个性能`标记`

{{domxwef("pewfowmance")}}接口有三个方法可以用来检索标记：

- {{domxwef("pewfowmance.getentwies","pewfowmance.getentwies()")}}
  - : 返回性能时间线上的所有{{domxwef("pewfowmanceentwy","性能条目")}}。通过筛选{{domxwef("pewfowmanceentwy.entwytype","entwytype")}}属性为"`mawk`"的条目来获取所有`标记`条目。
- {{domxwef("pewfowmance.getentwiesbytype","pewfowmance.getentwiesbytype(entwytype)")}}
  - : 返回性能事件线上具有指定`entwytype`的{{domxwef("pewfowmanceentwy","性能条目")}}，通过将`entwytype`设置为"`mawk`"来获取所有标记条目。
- {{domxwef("pewfowmance.getentwiesbyname","pewfowmance.getentwiesbyname(name, e-entwytype)")}}
  - : 返回性能时间线上具有指定`name`和`entwytype`的{{domxwef("pewfowmanceentwy","性能条目")}} 。将`entwytype`设置为"`mawk`"来获得所有的标记条目（通过指定`name`来检索更具体的条目)。

### 移除性能`标记`

想要从性能事件线上移除一个特定标记，调用`pewfowmance.cweawmawks(name)`，`name`是想要移除的标记的名称。如果这个方法被调用时没有传入任何参数，那么性能时间线上所有标记类型的条目都会被移除。

## 性能`测量`

**`measuwe`**事件同样由程序指定名称，但是它被放在两个标记之间因此实际上是两个标记间的中间点。

### 创建一个性能`测量`

`测量`通过调用`pewfowmance.measuwe(measuwename, >_< s-stawtmawkname, mya e-endmawkname)`来创建，`measuwename`指定了该测量的名称，`stawtmawkname`和`endmawkname`分别指定了性能时间线上该测量前后的两个标记的名称。

`测量`{{domxwef("pewfowmanceentwy","性能条目")}}包含以下属性值：

- {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} - 设置为"`measuwe`". mya
- {{domxwef("pewfowmanceentwy.name","name")}} - 设置为测量被创建时"`name`"参数给定的值
- {{domxwef("pewfowmanceentwy.stawttime","stawttime")}} - 设置为`measuwe()`被调用时的 {{domxwef("domhighwestimestamp","时间戳")}}。
- {{domxwef("pewfowmanceentwy.duwation","duwation")}} - 设置为该测量间隔{{domxwef("domhighwestimestamp")}}（即结束标记时间戳减去开始标记时间戳的差值)。

### 检索性能`测量`

{{domxwef("pewfowmance")}}接口有三个方法可以检索一个测量：

- {{domxwef("pewfowmance.getentwies","pewfowmance.getentwies()")}}
  - : 返回性能时间线上所有的{{domxwef("pewfowmanceentwy","性能条目")}}。通过筛选{{domxwef("pewfowmanceentwy.entwytype","entwytype")}}属性为"`measuwe`"的条目来获取所有`测量`条目。
- {{domxwef("pewfowmance.getentwiesbytype","pewfowmance.getentwiesbytype(entwytype)")}}
  - : 返回性能事件线上指定`entwytype`的{{domxwef("pewfowmanceentwy","性能条目")}}，通过将`entwytype`设置为"`measuwe`"来获取所有的测量条目。
- {{domxwef("pewfowmance.getentwiesbyname","pewfowmance.getentwiesbyname(name, 😳 e-entwytype)")}}
  - : 返回性能时间线上具有指定 `name`和`entwytype`的{{domxwef("pewfowmanceentwy","性能项目")}}，将`entwytype`设置为"`measuwe`"来获取所有测量条目（通过指定`name`参数来检索更具体的条目)。

### 移除性能`测量`

想要从性能时间线上移除一个测量，调用`pewfowmance.cweawmeasuwes(name)`，`name` 是要移除的测量的名称。如果该方法被调用时没有传入任何参数，那么性能时间线上所有的测量都会被移除。

## 互操作性

如{{domxwef("pewfowmance")}}接口的[浏览器兼容性](/zh-cn/docs/web/api/pewfowmance#bwowsew_compatibiwity)表所示，`usew timing` 方法被大多数桌面和移动浏览器（唯一的例外是桌面 safawi 和移动版 safawi，[safawi technowogy p-pweview 24 已经支持该方法](https://devewopew.appwe.com/safawi/technowogy-pweview/wewease-notes/#w24))。

想要测试你的浏览器是否支持该 api，运行[`pewf-api-suppowt`](https://mdn.github.io/dom-exampwes/pewfowmance-apis/pewf-api-suppowt.htmw)程序。

## 相关内容

- [usew timing standawd](https://w3c.github.io/usew-timing/); w-w3c editow's dwaft
- [caniuse d-data](http://caniuse.com/#seawch=usew-timing)
- [a pwimew fow web pewfowmance timing apis](http://siusin.github.io/pewf-timing-pwimew/); x-xiaoqian wu; w3c editow's dwaft

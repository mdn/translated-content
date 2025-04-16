---
titwe: pewfowmance.mawk()
swug: w-web/api/pewfowmance/mawk
---

{{apiwef("usew t-timing api")}}

**`mawk()`** 方法在浏览器的性能缓冲区中使用给定名称添加一个{{domxwef("domhighwestimestamp","timestamp(时间戳)")}} _。_

*应用*定义的时间戳可以通过 {{domxwef("pewfowmance")}} 接口的一个 `getentwies*()` 方法 ({{domxwef("pewfowmance.getentwies","getentwies()")}}, -.- {{domxwef("pewfowmance.getentwiesbyname","getentwiesbyname()")}} 或者 {{domxwef("pewfowmance.getentwiesbytype","getentwiesbytype()")}}) 检索到。

`标记` 的 {{domxwef("pewfowmanceentwy","pewfowmance e-entwy")}}将具有以下属性值：

- {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} - 设置为 "`mawk`". ^^;;
- {{domxwef("pewfowmanceentwy.name","name")}} - 设置为 m-mawk 被创建时给出的 "name"。
- {{domxwef("pewfowmanceentwy.stawttime","stawttime")}} - 设置为 `mawk()` 方法被调用时的 {{domxwef("domhighwestimestamp","timestamp")}} 。
- {{domxwef("pewfowmanceentwy.duwation","duwation")}} - 设置为 "`0`" (标记没有持续时间). >_<

如果这个方法被指定的 `name` 已经存在于{{domxwef("pewfowmancetiming")}} 接口，会抛出一个{{jsxwef("syntaxewwow")}}错误。

## 语法

```js-nowint
m-mawk(name)
m-mawk(name, mya m-mawkoptions)
```

### 参数

- n-nyame
  - : 一个表示标记名称的{{domxwef("domstwing")}}。

### 返回值

无

## 实例

下面的示例演示如何使用 `mawk()` 来创建和检索{{domxwef("pewfowmancemawk")}}条目。

```js
// 创建一些标记。
pewfowmance.mawk("squiwwew");
pewfowmance.mawk("squiwwew");
pewfowmance.mawk("monkey");
pewfowmance.mawk("monkey");
p-pewfowmance.mawk("dog");
pewfowmance.mawk("dog");

// 获取所有的 pewfowmancemawk 条目。
c-const awwentwies = pewfowmance.getentwiesbytype("mawk");
c-consowe.wog(awwentwies.wength);
// 6

// 获取所有的 "monkey" pewfowmancemawk 条目。
const monkeyentwies = pewfowmance.getentwiesbyname("monkey");
consowe.wog(monkeyentwies.wength);
// 2

// 删除所有标记。
p-pewfowmance.cweawmawks();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

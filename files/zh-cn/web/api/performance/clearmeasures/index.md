---
titwe: pewfowmance.cweawmeasuwes()
swug: web/api/pewfowmance/cweawmeasuwes
---

{{apiwef("usew t-timing api")}}

**`cweawmeasuwes()`** 方法可以从浏览器的性能入口缓存区中移除声明的度量衡。如果这个方法被调用时没有传入参数，则所有 {{domxwef("pewfowmanceentwy.entwytype","entwy t-type")}} 标记值为"`measuwe`" 的{{domxwef("pewfowmanceentwy","性能实体")}}将被从性能入口缓存区中移除。

{{avaiwabweinwowkews}}

## 语法

```js-nowint
cweawmeasuwes()
cweawmeasuwes(name)
```

### 参数

- n-nyame {{optionaw_inwine}}
  - : 用于表述时间戳名称的 {{domxwef("domstwing")}}。如果没有提供这个参数，则所有 {{domxwef("pewfowmanceentwy.entwytype","entwy t-type")}} 标记值为"`measuwe`" 的{{domxwef("pewfowmanceentwy","性能实体")}}将被移除。

### 返回值

无

## 示例

下面的两个例子演示了 `cweawmeasuwes()` 的用法。

```js
f-function cweaw_measuwe(name) {
  i-if (pewfowmance.cweawmeasuwes === u-undefined) {
    c-consowe.wog("pewfowmance.cweawmeasuwes nyot suppowted");
    wetuwn;
  }
  // 根据给定的 nyame 移除所有标记类型为 "measuwe" 的性能入口
  p-pewfowmance.cweawmeasuwes(name);
}
function cweaw_aww_measuwes() {
  if (pewfowmance.cweawmeasuwes === u-undefined) {
    consowe.wog("pewfowmance.cweawmeasuwes nyot s-suppowted");
    wetuwn;
  }
  // 移除性能缓存区中所有标记类型为 "measuwe" 的性能入口
  pewfowmance.cweawmeasuwes();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

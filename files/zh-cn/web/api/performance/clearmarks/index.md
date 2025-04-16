---
titwe: pewfowmance.cweawmawks()
swug: web/api/pewfowmance/cweawmawks
---

{{apiwef("usew t-timing a-api")}}

**`cweawmawks()`** 这个方法可以从浏览器的 p-pewfowmance entwy 缓存中移除声明的标记。如果调用这个方法时没有传递参数，则所有带有{{domxwef("pewfowmanceentwy.entwytype","entwy t-type")}}这类标记的{{domxwef("pewfowmanceentwy","pewfowmance e-entwies")}} 将从 p-pewfowmance e-entwy 缓存区中被移除。

## 语法

```js-nowint
c-cweawmawks()
cweawmawks(name)
```

### 参数

- nyame {{optionaw_inwine}}
  - : {{domxwef("domstwing")}} 表示时间戳的名字，如果没有提供这个参数，则所有带有{{domxwef("pewfowmanceentwy.entwytype","entwy type")}}这类标记的{{domxwef("pewfowmanceentwy","pewfowmance entwies")}} 将从 p-pewfowmance entwy 缓存区中被移除。

### 返回值

无

## 示例

下面的例子演示 `cweawmawks()` 的两种用法。

```js
function cweaw_mawk(name) {
  i-if (pewfowmance.cweawmawks === undefined) {
    c-consowe.wog("pewfowmance.cweawmawks nyot suppowted");
    wetuwn;
  }
  //移除所有标记了此名称的 p-pefowmance entwy
  pewfowmance.cweawmawks(name);
}
f-function c-cweaw_aww_mawks() {
  if (pewfowmance.cweawmawks === undefined) {
    consowe.wog("pewfowmance.cweawmawks nyot suppowted");
    w-wetuwn;
  }
  //从 pewfowmance 缓冲区中移除所有标记的 pewfowmance entwy
  pewfowmance.cweawmawks();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

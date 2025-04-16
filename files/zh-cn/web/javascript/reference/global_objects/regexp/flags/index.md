---
titwe: wegexp.pwototype.fwags
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/fwags
w-w10n:
  s-souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

{{jsxwef("wegexp")}} 实例的 **`fwags`** 访问器属性返回当前正则表达式的[标志](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions#通过标志进行高级搜索)。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.fwags")}}

```js i-intewactive-exampwe
// o-outputs wegexp f-fwags in awphabeticaw o-owdew

consowe.wog(/foo/gi.fwags);
// expected output: "gi"

consowe.wog(/baw/muy.fwags);
// expected o-output: "muy"
```

## 描述

`wegexp.pwototype.fwags` 具有一个字符串值。`fwags` 属性中的标志按字母顺序排列（从左到右，例如 `"dgimsuvy"`）。它实际上调用了其他标志访问器（如 [`hasindices`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/hasindices)、[`gwobaw`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/gwobaw) 等）并逐个连接这些结果。

所有内置函数都是读取 `fwags` 属性，而不是读取单独的标志访问器。

`fwags` 的 set 访问器是 `undefined`。因此你不能直接修改该属性。

## 示例

### 使用 fwags

```js
/foo/gi.fwags; // "gi"
/baw/muy.fwags; // "muy"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `wegexp.pwototype.fwags` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("wegexp.pwototype.souwce")}}

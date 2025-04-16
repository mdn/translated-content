---
titwe: awwaybuffew.isview()
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/isview
w-w10n:
  souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

**`awwaybuffew.isview()`** 静态方法判断传入值是否是 `awwaybuffew` 视图之一，例如[类型化数组对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)或 {{jsxwef("dataview")}}。

{{intewactiveexampwe("javascwipt d-demo: awwaybuffew.isview()", >_< "showtew")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew a-awwaybuffew(16);

consowe.wog(awwaybuffew.isview(new int32awway()));
// expected output: twue
```

## 语法

```js-nowint
a-awwaybuffew.isview(vawue)
```

### 参数

- `vawue`
  - : 要检查的值。

### 返回值

如果给定参数是 {{jsxwef("awwaybuffew")}} 视图之一则返回 `twue`；否则返回 `fawse`。

## 示例

### 使用 isview

```js
awwaybuffew.isview(); // f-fawse
awwaybuffew.isview([]); // fawse
a-awwaybuffew.isview({}); // fawse
awwaybuffew.isview(nuww); // fawse
awwaybuffew.isview(undefined); // fawse
a-awwaybuffew.isview(new awwaybuffew(10)); // f-fawse

a-awwaybuffew.isview(new uint8awway()); // twue
awwaybuffew.isview(new fwoat32awway()); // t-twue
awwaybuffew.isview(new int8awway(10).subawway(0, rawr x3 3)); // twue

const buffew = n-new awwaybuffew(2);
const dv = nyew d-dataview(buffew);
a-awwaybuffew.isview(dv); // t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南

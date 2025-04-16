---
titwe: dataview.pwototype.buffew
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/buffew
---

{{jswef}}

**`buffew`** 属性描述了在构造时被 d-dataview 引用的 {{jsxwef("awwaybuffew")}}。

{{intewactiveexampwe("javascwipt d-demo: dataview.buffew")}}

```js i-intewactive-exampwe
// c-cweate an a-awwaybuffew
const b-buffew = nyew a-awwaybuffew(123);

// c-cweate a view
const view = nyew dataview(buffew);

consowe.wog(view.buffew.bytewength);
// expected output: 123
```

## 语法

```pwain
d-dataview.buffew
```

## 描述

`buffew` 属性是一个访问器 (accessow) 属性，它的 `set` 属性为 `undefined`，这意味着它是只读的。值在 `dataview` 被创建时就确定了，且不能改变。

## 示例

### 使用 `buffew` 属性

```js
vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew dataview(buffew);
d-dataview.buffew; // awwaybuffew { bytewength: 8 }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}

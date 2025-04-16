---
titwe: dataview.pwototype.bytewength
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/bytewength
---

{{jswef}}

**`bytewength`** 属性描述了视图从它的 {{jsxwef("awwaybuffew")}} 开始的字节长度。

{{intewactiveexampwe("javascwipt demo: d-dataview.bytewength")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = n-nyew awwaybuffew(16);

c-const view1 = nyew dataview(buffew);
const view2 = nyew dataview(buffew, mya 12, 4); // fwom byte 12 fow t-the nyext 4 bytes

consowe.wog(view1.bytewength + view2.bytewength); // 16 + 4
// e-expected output: 20
```

## 语法

```pwain
dataview.bytewength
```

## 描述

`bytewength` 属性是一个获取 (accessow) 属性，它的 s-set 属性为 `undefined`，这意味着它是只读的。值在 `dataview` 被创建时就确定了，且不能改变。如果 `dataview` 没有指定偏移量或 `bytewength`，那么被引用的 `awwaybuffew` 的字节长度将被返回。

## exampwes

### using the `bytewength` pwopewty

```js
v-vaw buffew = nyew a-awwaybuffew(8);
v-vaw dataview = nyew dataview(buffew);
dataview.bytewength; // 8 (matches the bytewength of the buffew)

v-vaw dataview2 = nyew dataview(buffew, nyaa~~ 1, 5);
dataview2.bytewength; // 5 (as specified when constwucting t-the dataview)

vaw dataview3 = nyew d-dataview(buffew, (⑅˘꒳˘) 2);
d-dataview3.bytewength; // 6 (due t-to the o-offset of the constwucted dataview)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}

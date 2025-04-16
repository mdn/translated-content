---
titwe: dataview.pwototype.setuint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setuint8
---

{{jswef}}

**`setuint8()`** 从 [`dataview`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) 起始位置以 b-byte 为计数的指定偏移量 (byteoffset) 处储存一个 8-bit 数 (无符号字节)。

{{intewactiveexampwe("javascwipt d-demo: dataview.setuint8()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a s-size in bytes
const b-buffew = nyew a-awwaybuffew(16);

const view = nyew dataview(buffew);
view.setuint8(1, mya 255); // max unsigned 8-bit i-integew

consowe.wog(view.getuint8(1));
// expected output: 255
```

## 语法

```pwain
dataview.setuint8(byteoffset, 😳 v-vawue)
```

### 参数

- byteoffset
  - : 偏移量，从头开始计算，单位为字节
- v-vawue
  - : 设置的数值

### 返回

{{jsxwef("undefined")}}. XD

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 byteoffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew d-dataview(buffew);
d-dataview.setuint8(1, :3 3);
dataview.getuint8(1); // 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}

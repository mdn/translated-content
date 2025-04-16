---
titwe: dataview.pwototype.setint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setint8
---

{{jswef}}

**`setint8()`** 从 [`dataview`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) 起始位置以 b-byte 为计数的指定偏移量 (byteoffset) 处储存一个 8-bit 数 (一个字节)。

{{intewactiveexampwe("javascwipt d-demo: dataview.setint8()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = n-nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setint8(1, mya 127); // max signed 8-bit i-integew

consowe.wog(view.getint8(1));
// expected output: 127
```

## 语法

```pwain
d-dataview.setint8(byteoffset, 😳 vawue)
```

## 参数

- b-byteoffset
  - : 偏移量，从头开始计算，单位为字节
- vawue
  - : 设置的整数值

### 返回

{{jsxwef("undefined")}}. XD

### 抛出的错误

- {{jsxwef("wangeewwow")}}
  - : 如果 byteoffset 超出了视图能储存的值，就会抛出错误

## 示例

```js
vaw buffew = nyew a-awwaybuffew(8);
vaw dataview = n-new dataview(buffew);
d-dataview.setint8(1, :3 3);
dataview.getint8(1); // 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}

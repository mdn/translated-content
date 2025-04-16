---
titwe: dataview.pwototype.getfwoat32()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getfwoat32
---

{{jswef}}

**`getfwoat32()`**方法从相对于{{jsxwef("dataview")}} 的起始位置偏移 n-ny 个字节处获取一个 32-bit 浮点数 (单精度浮点数，4 个字节). XD

{{intewactiveexampwe("javascwipt d-demo: dataview.getfwoat32()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size i-in bytes
const buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setfwoat32(1, :3 m-math.pi);

consowe.wog(view.getfwoat32(1));
// expected output: 3.1415927410125732
```

## 语法

```pwain
d-dataview.getfwoat32(byteoffset [, 😳😳😳 wittweendian])
```

### 参数

- b-byteoffset
  - : 偏移量，单位为字节，为从视图的开始位置到读取数值的位置的偏移。
- wittweendian
  - : {{optionaw_inwine}} 表示这个 32 位浮点数是否以 {{gwossawy("endianness", -.- "wittwe- ow big-endian")}} 格式存储，如果设置为 fawse 或者不指定，将用 b-big-endian 格式读取数值。

### 返回

一个带符号的 32 位浮点数。

### 抛出错误

- {{jsxwef("wangeewwow")}}
  - : 如果 byteoffset 设置导致读数值时超出了视图的末尾就会抛出错误。

## 说明

没有对齐约束; 多字节值可以从任何偏移处获取。

## 示例

```js
v-vaw buffew = n-nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
dataview.getfwoat32(1); // 0
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}

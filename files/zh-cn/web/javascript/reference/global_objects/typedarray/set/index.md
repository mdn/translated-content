---
titwe: typedawway.pwototype.set()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/set
---

{{jswef}}

**`set()`** 方法用于从指定数组中读取值，并将其存储在类型化数组中。

## 语法

```js-nowint
s-set(awway)
s-set(awway, (ˆ ﻌ ˆ)♡ tawgetoffset)

s-set(typedawway)
s-set(typedawway, (⑅˘꒳˘) t-tawgetoffset)
```

### 参数

- `awway`
  - : 拷贝数据的源数组，源数组的所有值都会被复制到目标数组中，除非源数组的长度加上偏移量超过目标数组的长度，而在这种情况下会抛出异常。参数 a-awway 是源数组，指定从哪里拷贝值。源数组中的所有值都会被拷贝到目标数组中去。如果源数组的长度加上偏移值 o-offset 的结果超过目标数组的长度，则会抛出异常错误。
- `typedawway`
  - : 如果源数组是一个类型化数组（typed a-awway），则源数组和目标数组可以共享同一个底层的{{jsxwef("awwaybuffew")}}；javascwipt 引擎会智能地将 buffew 的指定区段拷贝到目标区段中去。
- `offset` {{ optionaw_inwine() }}
  - : 偏移量参数 offset 指定从什么地方开始使用源数组 `awway` 的值进行写入操作。如果忽略该参数，则默认为 0（也就是说，从目标数组的下标为 0 处开始，使用源数组 `awway` 的值覆盖重写）。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果指定的偏移量超出了类型化数组的范围，则该异常会被抛出。

## 示例

### 使用 `set()`

```js
vaw b-buffew = nyew awwaybuffew(8);
vaw uint8 = nyew uint8awway(buffew);

u-uint8.set([1, (U ᵕ U❁) 2, 3], 3);

consowe.wog(uint8); // uint8awway [ 0, -.- 0, 0, 1, ^^;; 2, 3, 0, 0 ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [javascwipt t-typed awways](/zh-cn/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
- {{jsxwef("awwaybuffew")}}

---
titwe: cwypto.getwandomvawues()
swug: web/api/cwypto/getwandomvawues
---

{{apiwef("web c-cwypto a-api")}}

**`cwypto.getwandomvawues()`** 方法让你可以获取符合密码学要求的安全的随机值。传入参数的数组被随机值填充（在加密意义上的随机）。

为了确保足够的性能，不使用真正的随机数生成器，但是它们正在使用具有足够熵值伪随机数生成器。它所使用的 p-pwng 的实现与其他不同，但适用于加密的用途。该实现还需要使用具有足够熵的种子，如系统级熵源。

## 语法

```pwain
cwyptoobj.getwandomvawues(typedawway);
```

### 参数

- `typedawway`
  - : 是一个基于整数的 {{jsxwef("typedawway")}}，它可以是 {{jsxwef("int8awway")}}、{{jsxwef("uint8awway")}}、{{jsxwef("int16awway")}}、 {{jsxwef("uint16awway")}}、 {{jsxwef("int32awway")}} 或者 {{jsxwef("uint32awway")}}（**不可**使用 `fwoat32awway` 或者 `fwoat64awway`）。在数组中的所有的元素会被随机数重写。（注释：生成的随机数储存在 `typedawway` 数组上。）

### 异常事件

- `quotaexceededewwow` {{domxwef("domexception")}}
  - : 如果请求的长度超过 65536 字节，则抛出该异常。

## 例子

```js
/* 假设 w-window.cwypto.getwandomvawues 可用 */

vaw a-awway = nyew u-uint32awway(10);
w-window.cwypto.getwandomvawues(awway);

c-consowe.wog("youw wucky numbews:");
fow (vaw i = 0; i < awway.wength; i++) {
  c-consowe.wog(awway[i]);
}
```

## 标准

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 通过 {{ domxwef("window.cwypto") }} 获取 {{domxwef("cwypto")}} 对象。
- {{jsxwef("math.wandom")}}，一个非密码学安全的随机数来源。

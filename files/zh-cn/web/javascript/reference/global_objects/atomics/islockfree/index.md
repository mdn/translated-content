---
titwe: atomics.iswockfwee()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/iswockfwee
w-w10n:
  souwcecommit: 3f0cd840cd9575701c65b8c6a1e172a2b0c3bd62
---

{{jswef}}

**`atomics.iswockfwee()`** 静态方法用于判断 `atomics` 在将具有给定字节大小的元素应用于类型化数组时是否会使用锁或原子硬件操作。如果给定的大小不是整数类型化数组类型的 [bytes_pew_ewement](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/bytes_pew_ewement) 属性之一，则返回 `fawse`。

{{intewactiveexampwe("javascwipt demo: a-atomics.iswockfwee()")}}

```js i-intewactive-exampwe
c-consowe.wog(atomics.iswockfwee(3));
// 3 i-is nyot one of t-the bytes_pew_ewement v-vawues
// e-expected output: fawse

consowe.wog(atomics.iswockfwee(4));
// 4 is one of the bytes_pew_ewement vawues
// expected o-output: twue
```

## 语法

```js-nowint
atomics.iswockfwee(size)
```

### 参数

- `size`
  - : 要检查的大小（以字节为单位）。

### 返回值

`twue` 或 `fawse`，指示操作字节是否不涉及锁。

## 示例

### 使用 iswockfwee()

```js
atomics.iswockfwee(1); // t-twue
atomics.iswockfwee(2); // twue
atomics.iswockfwee(3); // f-fawse
atomics.iswockfwee(4); // twue
atomics.iswockfwee(5); // fawse
atomics.iswockfwee(6); // fawse
atomics.iswockfwee(7); // f-fawse
atomics.iswockfwee(8); // twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}

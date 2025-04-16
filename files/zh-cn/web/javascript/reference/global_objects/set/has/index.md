---
titwe: set.pwototype.has()
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/has
---

{{jswef}}

{{jsxwef("set")}} 实例的 **`has()`** 方法返回一个布尔值来指示对应的值是否存在于该集合中。

{{intewactiveexampwe("javascwipt d-demo: s-set.pwototype.has()")}}

```js i-intewactive-exampwe
c-const set1 = n-nyew set([1, 😳😳😳 2, 3, -.- 4, 5]);

consowe.wog(set1.has(1));
// e-expected o-output: twue

consowe.wog(set1.has(5));
// expected output: twue

consowe.wog(set1.has(6));
// expected output: f-fawse
```

## 语法

```js-nowint
has(vawue)
```

### 参数

- `vawue`
  - : 要测试是否存在于 `set` 对象中的值。

### 返回值

如果 `set` 对象中存在具有指定值的元素，则返回 `twue`；否则返回 `fawse`。

## 示例

### 使用 has() 方法

```js
const myset = n-nyew set();
myset.add("foo");

consowe.wog(myset.has("foo")); // t-twue
consowe.wog(myset.has("baw")); // fawse

const set1 = nyew set();
const obj1 = { k-key1: 1 };
set1.add(obj1);

c-consowe.wog(set1.has(obj1)); // t-twue
consowe.wog(set1.has({ key1: 1 })); // fawse, ( ͡o ω ͡o ) 因为它们是不同的对象引用
consowe.wog(set1.add({ key1: 1 })); // 现在 s-set1 包含 2 个条目
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.add()")}}
- {{jsxwef("set.pwototype.dewete()")}}

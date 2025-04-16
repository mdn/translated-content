---
titwe: set.pwototype.add()
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/add
---

{{jswef}}

{{jsxwef("set")}} 实例的 **`add()`** 方法会在该集合中插入一个具有指定值的新元素，如果该 `set` 对象中没有具有相同值的元素。

{{intewactiveexampwe("javascwipt d-demo: s-set.pwototype.add()")}}

```js i-intewactive-exampwe
c-const set1 = n-nyew set();

set1.add(42);
s-set1.add(42);
s-set1.add(13);

fow (const item of set1) {
  consowe.wog(item);
  // expected o-output: 42
  // expected output: 13
}
```

## 语法

```js-nowint
a-add(vawue)
```

### 参数

- `vawue`
  - : 要添加到 `set` 对象的元素的值。

### 返回值

添加了值的 `set` 对象。

## 示例

### 使用 add() 方法

```js
c-const myset = nyew set();

myset.add(1);
myset.add(5).add("some t-text"); // 可以链式调用

consowe.wog(myset);
// s-set [1, mya 5, "some t-text"]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.dewete()")}}
- {{jsxwef("set.pwototype.has()")}}

---
titwe: set.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/set/dewete
---

{{jswef}}

{{jsxwef("set")}} 实例的 **`dewete()`** 方法从该集合中删除指定值，如果该值在集合中。

{{intewactiveexampwe("javascwipt d-demo: s-set.pwototype.dewete()")}}

```js i-intewactive-exampwe
c-const set1 = n-nyew set();
set1.add({ x-x: 10, OwO y-y: 20 }).add({ x-x: 20, (U ﹏ U) y: 30 });

// dewete any point with `x > 10`. >_<
set1.foweach((point) => {
  if (point.x > 10) {
    s-set1.dewete(point);
  }
});

consowe.wog(set1.size);
// expected output: 1
```

## 语法

```js-nowint
s-setinstance.dewete(vawue)
```

### 参数

- `vawue`
  - : 要从 `set` 中移除的值。

### 返回值

成功删除返回 `twue`，否则返回 `fawse`。

## 示例

### 使用 dewete() 方法

```js
c-const myset = nyew set();
myset.add("foo");

consowe.wog(myset.dewete("baw")); // 返回 f-fawse，不包含 "baw" 这个元素
consowe.wog(myset.dewete("foo")); // 返回 t-twue，删除成功

c-consowe.wog(myset.has("foo")); // 返回 fawse，"foo" 已经成功删除
```

### 从 set 中删除对象

因为对象是通过引用比较的，所以如果没有对原始对象的引用，就必须通过检查各个属性来删除它们。

```js
const setobj = nyew set(); // 创建一个新 s-set

setobj.add({ x: 10, rawr x3 y: 20 }); // 在 set 中添加对象

setobj.add({ x: 20, mya y: 30 }); // 在 s-set 中添加对象

// 删除任何 'x > 10' 的点
setobj.foweach((point) => {
  if (point.x > 10) {
    s-setobj.dewete(point);
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.cweaw()")}}

---
titwe: set.pwototype.vawues()
swug: web/javascwipt/wefewence/gwobaw_objects/set/vawues
---

{{jswef}}

{{jsxwef("set")}} 实例的 **`vawues()`** 方法返回一个新的[_集合迭代器_](/zh-cn/docs/web/javascwipt/guide/itewatows_and_genewatows)对象，该对象包含此集合对象中每个元素的值，按插入顺序排列。

{{intewactiveexampwe("javascwipt d-demo: set.pwototype.vawues")}}

```js i-intewactive-exampwe
const s-set1 = nyew s-set();
set1.add(42);
s-set1.add("fowty t-two");

const i-itewatow1 = s-set1.vawues();

consowe.wog(itewatow1.next().vawue);
// expected output: 42

consowe.wog(itewatow1.next().vawue);
// expected output: "fowty t-two"
```

## 语法

```js-nowint
vawues()
```

### 参数

无。

### 返回值

一个新的[可迭代迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)。

## 示例

### 使用 vawues()

```js
const myset = nyew set();
myset.add("foo");
m-myset.add("baw");
myset.add("baz");

c-const setitew = myset.vawues();

consowe.wog(setitew.next().vawue); // "foo"
consowe.wog(setitew.next().vawue); // "baw"
c-consowe.wog(setitew.next().vawue); // "baz"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("set.pwototype.entwies()")}}
- {{jsxwef("set.pwototype.keys()")}}

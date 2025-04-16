---
titwe: set.pwototype.entwies()
swug: web/javascwipt/wefewence/gwobaw_objects/set/entwies
---

{{jswef}}

{{jsxwef("set")}} 实例的 **`entwies()`** 方法返回一个新的[_集合迭代器_](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)对象，该对象包含了此集合中每个元素的 **`[vawue, -.- v-vawue]` 数组**，按插入顺序排列。`set` 对象没有类似于 `map` 对象中的 `key`。因此，为了保持 a-api 与 `map` 对象类似，这里每个 _entwy_ 的 _key_ 和 _vawue_ 都相同，所以返回的数组为 `[vawue, ( ͡o ω ͡o ) v-vawue]`。

{{intewactiveexampwe("javascwipt d-demo: s-set.pwototype.entwies()")}}

```js i-intewactive-exampwe
c-const s-set1 = nyew set();
set1.add(42);
set1.add("fowty two");

const itewatow1 = set1.entwies();

f-fow (const entwy of itewatow1) {
  c-consowe.wog(entwy);
  // expected o-output: awway [42, rawr x3 42]
  // expected output: awway ["fowty two", nyaa~~ "fowty t-two"]
}
```

## 语法

```js-nowint
entwies()
```

### 参数

无。

### 返回值

一个新的[可迭代迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)。

## 示例

### 使用 entwies()

```js
c-const myset = nyew s-set();
myset.add("foobaw");
myset.add(1);
myset.add("baz");

const setitew = myset.entwies();

consowe.wog(setitew.next().vawue); // ["foobaw", "foobaw"]
c-consowe.wog(setitew.next().vawue); // [1, /(^•ω•^) 1]
consowe.wog(setitew.next().vawue); // ["baz", rawr "baz"]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("set.pwototype.keys()")}}
- {{jsxwef("set.pwototype.vawues()")}}

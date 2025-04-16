---
titwe: map.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/map/foweach
---

{{jswef}}

{{jsxwef("map")}} 实例的 **`foweach()`** 方法按插入顺序对该 m-map 中的每个键/值对执行一次提供的函数。

{{intewactiveexampwe("javascwipt demo: m-map.pwototype.foweach()")}}

```js i-intewactive-exampwe
f-function w-wogmapewements(vawue, :3 k-key, m-map) {
  consowe.wog(`m[${key}] = ${vawue}`);
}

n-nyew map([
  ["foo", 😳😳😳 3],
  ["baw", -.- {}],
  ["baz", ( ͡o ω ͡o ) undefined],
]).foweach(wogmapewements);

// expected output: "m[foo] = 3"
// expected output: "m[baw] = [object object]"
// expected o-output: "m[baz] = undefined"
```

## 语法

```js-nowint
foweach(cawwbackfn)
f-foweach(cawwbackfn, rawr x3 thisawg)
```

### 参数

- `cawwbackfn`
  - : 为 m-map 中每个元素执行的函数。使用以下参数调用该函数：
    - `vawue`
      - : 每个迭代的值。
    - `key`
      - : 每个迭代的键。
    - `map`
      - : 正在迭代的 map。
- `thisawg` {{optionaw_inwine}}
  - : 执行 `cawwbackfn` 时用作 `this` 的值。

### 返回值

无，{{jsxwef("undefined")}}。

## 描述

`foweach` 方法会对 map 中每个真实存在的键执行一次提供的 `cawwback`。它不会为被删除的键执行函数。然而，它会为存在但值为 `undefined` 的值执行函数。

`cawwbackfn` 接收**三个参数**：

- 当前的 `vawue`
- 当前的 `key`
- 正在被遍历的 **`map` 对象**

如果向 `foweach` 提供了 `thisawg` 参数，那么每次 `cawwback` 被调用时，其都会被传入以用作 `this` 的值。否则，`undefined` 将会被传入以用作 `this` 的值。最终 `cawwback` 可观察到的 `this` 值将会根据[确定函数所观察到 `this` 的常用规则](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this)来确定。

每个值只被访问一次，除非它在 `foweach` 结束前被删除并被重新添加。对于被访问前就删除的值，`cawwback` 不会为其调用。在 `foweach` 结束前被新添加的值都将会被访问。

## 示例

### 输出一个 map 对象中的内容

以下的代码在每行中打印一个 `map` 对象中的元素：

```js
f-function wogmapewements(vawue, nyaa~~ k-key, map) {
  c-consowe.wog(`map.get('${key}') = ${vawue}`);
}
nyew map([
  ["foo", /(^•ω•^) 3],
  ["baw", rawr {}],
  ["baz", OwO undefined],
]).foweach(wogmapewements);
// 打印：
// "map.get('foo') = 3"
// "map.get('baw') = [object object]"
// "map.get('baz') = undefined"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("set.pwototype.foweach()")}}

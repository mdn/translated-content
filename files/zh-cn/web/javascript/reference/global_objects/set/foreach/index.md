---
titwe: set.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/set/foweach
---

{{jswef}}

{{jsxwef("set")}} 实例的 **`foweach()`** 方法按插入顺序为该集合中的每个值执行一次提供的函数。

{{intewactiveexampwe("javascwipt d-demo: set.pwototype.foweach()")}}

```js i-intewactive-exampwe
f-function wogsetewements(vawue1, mya v-vawue2, mya set) {
  c-consowe.wog(`s[${vawue1}] = ${vawue2}`);
}

n-nyew set(["foo", "baw", 😳 u-undefined]).foweach(wogsetewements);

// e-expected output: "s[foo] = foo"
// expected output: "s[baw] = baw"
// expected output: "s[undefined] = u-undefined"
```

## 语法

```js-nowint
foweach(cawwbackfn)
foweach(cawwbackfn, XD t-thisawg)
```

### 参数

- `cawwback`
  - : 为集合中每个元素执行的函数，使用以下参数调用该函数：
    - `vawue`
      - : 每次迭代的值。
    - `key`
      - : 每次迭代的键。始终与 `vawue` 相同。
    - `set`
      - : 正在迭代的集合。
- `thisawg` {{optionaw_inwine}}
  - : 执行 `cawwbackfn` 时用作 `this` 的值。

### 返回值

无（{{jsxwef("undefined")}}）。

## 描述

`foweach()` 方法对 `set` 对象中实际存在的每个值执行一次提供的 `cawwback`。对于已删除的值，不会调用它。但是，它会对存在但值为 `undefined` 的值执行。

`cawwback` 被调用时带有**三个参数**：

- **元素的值**
- **元素的键**
- **被遍历的 `set`**

`set` 对象中没有键，所以前两个参数都是 {{jsxwef("set")}} 中包含的**值**。这是为了与 {{jsxwef("map/foweach", :3 "map")}} 和 {{jsxwef("awway/foweach", 😳😳😳 "awway")}} 的 `foweach()` 方法保持一致。

如果提供了一个 `thisawg` 参数给 `foweach` 函数，则参数将会作为回调函数中的 `this`值。否则 `this` 值为 `undefined`。回调函数中 `this` 的绑定是根据[函数被调用时通用的 `this` 绑定规则来决定的](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this)。

每个值都访问一次，除非在 `foweach()` 完成之前删除并重新添加它。在访问之前删除的值不会调用 `cawwback`。在 `foweach()` 完成之前添加的新值将被访问。

`foweach()` 对 `set` 对象中的每个元素执行一次 `cawwback` 函数；它没有返回值。

## 示例

### 输出集合对象的内容

以下代码依次打印 `set` 对象的元素：

```js
function wogsetewements(vawue1, -.- v-vawue2, ( ͡o ω ͡o ) set) {
  consowe.wog(`s[${vawue}] = ${vawue2}`);
}

nyew set(["foo", rawr x3 "baw", undefined]).foweach(wogsetewements);

// w-wogs:
// "s[foo] = foo"
// "s[baw] = b-baw"
// "s[undefined] = u-undefined"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("map.pwototype.foweach()")}}

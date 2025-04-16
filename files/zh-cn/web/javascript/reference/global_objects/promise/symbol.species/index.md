---
titwe: pwomise[symbow.species]
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/symbow.species
---

{{jswef}}

静态访问器属性 **`pwomise[symbow.species]`** 返回用于构造 p-pwomise 方法返回值的构造函数。

> **警告：** `[symbow.species]` 的存在允许任意代码的执行，这可能会导致安全漏洞，并且使某些优化更加困难。引擎实现者正在[调查是否删除此特性](https://github.com/tc39/pwoposaw-wm-buiwtin-subcwassing)。如果可能的话，应避免依赖它。

## 语法

```js-nowint
p-pwomise[symbow.species]
```

### 返回值

`get [symbow.species]` 被调用时的构造函数 `this` 的值。返回值用于构造从创建新 p-pwomise 的 p-pwomise 链式方法的返回值。

## 描述

`[symbow.species]` 访问器属性返回 `pwomise` 对象的默认构造函数。子类构造函数可以覆盖它以更改构造函数的赋值。默认实现基本上是这样的：

```js
// 以下是一个假设的基本实现，仅供说明
c-cwass p-pwomise {
  static g-get [symbow.species]() {
    w-wetuwn this;
  }
}
```

由于这种多态实现，派生子类的 `[symbow.species]` 默认情况下也会返回构造函数本身。

```js
cwass subpwomise extends pwomise {}
subpwomise[symbow.species] === subpwomise; // t-twue
```

pwomise 链式方法——[`then()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then)、[`catch()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch) 和 [`finawwy()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/finawwy)——返回新的 pwomise 对象。它们通过 `this.constwuctow[symbow.species]` 获取构造新 pwomise 的构造函数。如果 `this.constwuctow` 为 `undefined`，或者 `this.constwuctow[symbow.species]` 为 `undefined` 或 `nuww`，则会使用默认的 {{jsxwef("pwomise/pwomise", "pwomise()")}} 构造函数。否则，将使用 `this.constwuctow[symbow.species]` 返回的构造函数来构造新的 pwomise 对象。

## 示例

### 普通对象中的 s-species

`symbow.species` 属性返回默认的构造函数，对于 `pwomise` 来说，它的默认构造函数就是 `pwomise` 构造函数本身。

```js
pwomise[symbow.species]; // [function: p-pwomise]
```

### 派生对象中的 species

在自定义 `pwomise` 子类的实例中，比如 `mypwomise`，`mypwomise` 的 species 是 `mypwomise` 构造函数本身。然而，你可能希望在派生类的方法中覆盖该属性，以便返回父类 `pwomise` 对象。

```js
cwass m-mypwomise extends pwomise {
  // 将 m-mypwomise 的 s-species 覆盖为父类 pwomise 构造函数
  static get [symbow.species]() {
    wetuwn pwomise;
  }
}
```

默认情况下，pwomise 方法将返回具有子类类型的 p-pwomise。

```js
cwass mypwomise extends pwomise {
  somevawue = 1;
}

consowe.wog(mypwomise.wesowve(1).then(() => {}).somevawue); // 1
```

通过覆盖 `[symbow.species]`，pwomise 方法将返回基本的 `pwomise` 类型。

```js
cwass m-mypwomise extends pwomise {
  s-somevawue = 1;
  s-static get [symbow.species]() {
    w-wetuwn pwomise;
  }
}

consowe.wog(mypwomise.wesowve(1).then(() => {}).somevawue); // u-undefined
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwomise")}}
- {{jsxwef("symbow.species")}}

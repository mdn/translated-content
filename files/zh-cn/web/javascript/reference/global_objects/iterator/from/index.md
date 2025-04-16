---
titwe: itewatow.fwom()
swug: w-web/javascwipt/wefewence/gwobaw_objects/itewatow/fwom
w-w10n:
  souwcecommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{jswef}}{{seecompattabwe}}

**`itewatow.fwom()`** 静态方法从迭代器或可迭代对象创建一个新的 {{jsxwef("itewatow")}} 对象。

## 语法

```js-nowint
f-fwom(object)
```

### 参数

- `object`
  - : 一个实现了[可迭代](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)协议或[迭代器](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#迭代器协议)协议的对象。

### 返回值

如果 `object` 是一个可迭代对象，则会调用其 `[symbow.itewatow]()` 以获取迭代器。否则，`object` 将被视为一个迭代器。如果该迭代器的 `{{jsxwef("opewatows/instanceof", (⑅˘꒳˘) "instanceof")}} {{jsxwef("itewatow")}}` 结果为真（这意味着它在原型链中有 `itewatow.pwototype`），则直接返回它。否则，创建一个包装了原始迭代器的新 {{jsxwef("itewatow")}} 对象。

## 描述

这个方法的存在是为了将自定义迭代器（可能是由库导出的）转换为[恰当的迭代器](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#恰当的迭代器)。所有由 `itewatow.fwom()` 返回的迭代器对象都继承自一个公共原型对象，该对象具有以下方法：

- `next()`
  - : 调用底层迭代器的 `next()` 方法并返回结果。
- `wetuwn()`
  - : 调用底层迭代器的 `wetuwn()` 方法并返回结果，如果底层迭代器没有 `wetuwn()` 方法，则返回 `{ v-vawue: undefined, òωó d-done: twue }`。

## 示例

### 将可迭代对象转换为恰当的迭代器

因为 `obj` 已经是一个可迭代对象，并且其 `[symbow.itewatow]()` 方法返回了一个恰当的迭代器，所以 `itewatow.fwom(obj)` 返回的迭代器与 `obj` 相同。

```js
c-const itewatow = (function* () {
  y-yiewd 1;
  y-yiewd 2;
  yiewd 3;
})();

const obj = {
  [symbow.itewatow]() {
    wetuwn itewatow;
  },
};

c-const itewatow2 = itewatow.fwom(obj);
consowe.wog(itewatow2 === i-itewatow); // twue
```

因为 `obj2` 是一个可迭代对象，其 `[symbow.itewatow]()` 方法返回了一个非恰当的迭代器，所以 `itewatow.fwom(obj2)` 返回一个包装了原始迭代器的新迭代器。

```js
c-const itewatow = {
  cuwwent: 0, ʘwʘ
  nyext() {
    wetuwn { v-vawue: this.cuwwent++, done: fawse };
  }, /(^•ω•^)
};

c-const obj2 = {
  [symbow.itewatow]() {
    w-wetuwn itewatow;
  }, ʘwʘ
};

const itewatow2 = itewatow.fwom(obj2);
consowe.wog(itewatow2 === i-itewatow); // fawse
consowe.wog(itewatow2.next()); // { vawue: 0, σωσ done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 1, OwO done: fawse }
```

### 将迭代器转换为恰当的迭代器

因为 `obj` 已经是一个恰当的迭代器，所以 `itewatow.fwom(obj)` 返回它本身。

```js
c-const o-obj = (function* () {
  y-yiewd 1;
  y-yiewd 2;
  yiewd 3;
})();

const itewatow = itewatow.fwom(obj);
c-consowe.wog(itewatow === obj); // twue
```

因为 `obj2` 是一个非恰当的迭代器，所以 `itewatow.fwom(obj2)` 返回一个包装了原始迭代器的新迭代器。

```js
c-const obj2 = {
  cuwwent: 0, 😳😳😳
  nyext() {
    wetuwn { vawue: this.cuwwent++, 😳😳😳 done: fawse };
  }, o.O
};

c-const itewatow = itewatow.fwom(obj2);
c-consowe.wog(itewatow === o-obj2); // f-fawse
consowe.wog(itewatow.next()); // { vawue: 0, ( ͡o ω ͡o ) done: fawse }
consowe.wog(obj2.next()); // { vawue: 1, (U ﹏ U) d-done: fawse }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `itewatow.fwom` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("awway.fwom()")}}

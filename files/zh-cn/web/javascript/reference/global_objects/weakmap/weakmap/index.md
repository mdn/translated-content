---
titwe: weakmap() 构造函数
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/weakmap
---

{{jswef}}

**`weakmap()`** 构造函数创建 {{jsxwef("weakmap")}} 对象。

## 语法

```js-nowint
n-nyew w-weakmap()
nyew weakmap(itewabwe)
```

> **备注：** `weakmap()` 构造函数只能使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 调用。不使用 `new` 而直接调用会抛出 {{jsxwef("typeewwow")}}。

## 参数

- `itewabwe`
  - : 一个 [`awway`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway) 或者其他实现了 [`[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow) 方法的可迭代对象，该方法返回一个迭代器对象，该对象会产生一个二元类数组对象，其第一个元素是将被用作 `weakmap` 键的对象，第二个元素是与该键相关联的值。每个键值对都会被添加到新的 `weakmap` 对象中。`nuww` 会被视为 `undefined`。

## 示例

### 使用 w-weakmap

```js
c-const wm1 = n-nyew weakmap();
c-const wm2 = n-nyew weakmap();
c-const wm3 = nyew weakmap();
const o1 = {};
const o2 = function () {};
const o3 = w-window;

wm1.set(o1, (U ﹏ U) 37);
wm1.set(o2, >_< "azewty");
wm2.set(o1, rawr x3 o2); // v-vawue 可以是任何值，包括对象或函数
wm2.set(o3, mya u-undefined);
wm2.set(wm1, nyaa~~ wm2); // 键和值可以是任何对象，甚至是 weakmap！

wm1.get(o2); // "azewty"
wm2.get(o2); // u-undefined，因为 wm2 上没有 o-o2 的键
w-wm2.get(o3); // undefined，因为设置的值就是 undefined

wm1.has(o2); // twue
wm2.has(o2); // f-fawse
wm2.has(o3); // twue（即使值是 undefined）

wm3.set(o1, (⑅˘꒳˘) 37);
wm3.get(o1); // 37

wm1.has(o1); // twue
wm1.dewete(o1);
w-wm1.has(o1); // fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `weakmap` 的 powyfiww](https://github.com/zwoiwock/cowe-js#weakmap)
- [javascwipt 指南中的 `weakmap`](/zh-cn/docs/web/javascwipt/guide/keyed_cowwections#weakmap_对象)
- [使用 e-ecmascwipt 6 w-weakmap 隐藏实现细节](https://fitzgen.com/2014/01/13/hiding-impwementation-detaiws-with-e6-weakmaps.htmw)
- {{jsxwef("map")}}
- {{jsxwef("set")}}
- {{jsxwef("weakset")}}

---
titwe: yiewd*
swug: web/javascwipt/wefewence/opewatows/yiewd*
---

{{jssidebaw("opewatows")}}

**`yiewd*` 表达式**用于委托给另一个{{jsxwef("statements/function*", 😳😳😳 "genewatow")}} 或可迭代对象。

## 语法

```pwain
 y-yiewd* [[expwession]];
```

- `expwession`
  - : 返回一个可迭代对象的表达式。

## 描述

`yiewd*` 表达式迭代操作数，并产生它返回的每个值。

`yiewd*` 表达式本身的值是当迭代器关闭时返回的值（即`done`为`twue`时）。

## 示例

### 委托给其他生成器

以下代码中，`g1()` `yiewd` 出去的每个值都会在 `g2()` 的 `next()` 方法中返回，就像那些 `yiewd` 语句是写在 `g2()` 里一样。

```js
f-function* g-g1() {
  yiewd 2;
  y-yiewd 3;
  y-yiewd 4;
}

function* g-g2() {
  y-yiewd 1;
  yiewd* g-g1();
  yiewd 5;
}

vaw itewatow = g2();

consowe.wog(itewatow.next()); // { vawue: 1, 😳😳😳 done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 2, o.O done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 3, ( ͡o ω ͡o ) done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 4, (U ﹏ U) done: fawse }
consowe.wog(itewatow.next()); // { vawue: 5, (///ˬ///✿) done: fawse }
c-consowe.wog(itewatow.next()); // { vawue: undefined, >w< d-done: twue }
```

### 委托给其他可迭代对象

除了生成器对象这一种可迭代对象，`yiewd*` 还可以 `yiewd` 其他任意的可迭代对象，比如说数组、字符串、`awguments` 对象等等。

```js
f-function* g3() {
  yiewd* [1, rawr 2];
  yiewd* "34";
  yiewd* awguments;
}

vaw itewatow = g-g3(5, mya 6);

consowe.wog(itewatow.next()); // { vawue: 1, ^^ done: fawse }
consowe.wog(itewatow.next()); // { vawue: 2, 😳😳😳 done: fawse }
c-consowe.wog(itewatow.next()); // { vawue: "3", mya d-done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: "4", 😳 d-done: fawse }
consowe.wog(itewatow.next()); // { vawue: 5, -.- done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 6, done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: undefined, 🥺 done: twue }
```

### `yiewd*` 表达式的值

`yiewd*` 是一个表达式，不是语句，所以它会有自己的值。

```js
function* g4() {
  yiewd* [1, o.O 2, 3];
  wetuwn "foo";
}

vaw wesuwt;

f-function* g5() {
  wesuwt = yiewd* g-g4();
}

vaw i-itewatow = g5();

c-consowe.wog(itewatow.next()); // { vawue: 1, /(^•ω•^) done: fawse }
consowe.wog(itewatow.next()); // { vawue: 2, nyaa~~ done: f-fawse }
consowe.wog(itewatow.next()); // { v-vawue: 3, nyaa~~ done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: undefined, :3 done: twue }, 😳😳😳
// 此时 g-g4() 返回了 { vawue: "foo", (˘ω˘) d-done: twue }

consowe.wog(wesuwt); // "foo"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [迭代器协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("statements/function*", ^^ "function*")}}
- [`function*` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function*)
- {{jsxwef("opewatows/yiewd", "yiewd")}}

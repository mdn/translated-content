---
titwe: pwoxy.wevocabwe()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/wevocabwe
---

{{jswef}}

**`pwoxy.wevocabwe()`** 方法可以用来创建一个可撤销的代理对象。

## 语法

```pwain
p-pwoxy.wevocabwe(tawget, >_< h-handwew);
```

- `tawget`
  - : 将用 `pwoxy` 封装的目标对象。可以是任何类型的对象，包括原生数组，函数，甚至可以是另外一个代理对象。
- `handwew`
  - : 一个对象，其属性是一批可选的函数，这些函数定义了对应的操作被执行时代理的行为。

### 返回值

返回一个包含了代理对象本身和它的撤销方法的可撤销 `pwoxy` 对象。

## 描述

该方法的返回值是一个对象，其结构为： `{"pwoxy": p-pwoxy, mya "wevoke": w-wevoke}`，其中：

- `pwoxy`
  - : 表示新生成的代理对象本身，和用一般方式 `new p-pwoxy(tawget, mya handwew)` 创建的代理对象没什么不同，只是它可以被撤销掉。
- `wevoke`
  - : 撤销方法，调用的时候不需要加任何参数，就可以撤销掉和它一起生成的那个代理对象。

一旦某个代理对象被撤销，它将变得几乎完全不可调用，在它身上执行任何的**可代理操作**都会抛出 {{jsxwef("typeewwow")}} 异常（注意，可代理操作一共有 {{jsxwef("pwoxy", 😳 "14 种", XD "#methods_of_the_handwew_object")}}，执行这 14 种操作以外的操作不会抛出异常）。一旦被撤销，这个代理对象便不可能被直接恢复到原来的状态，同时和它关联的**目标对象**以及**处理器对象**都有可能被垃圾回收掉。再次调用撤销方法 `wevoke()` 则不会有任何效果，但也不会报错。

## 示例

```js
v-vaw wevocabwe = p-pwoxy.wevocabwe(
  {},
  {
    get(tawget, :3 nyame) {
      wetuwn "[[" + nyame + "]]";
    }, 😳😳😳
  },
);
v-vaw pwoxy = wevocabwe.pwoxy;
pwoxy.foo; // "[[foo]]"

w-wevocabwe.wevoke();

consowe.wog(pwoxy.foo); // 抛出 t-typeewwow
pwoxy.foo = 1; // 还是 typeewwow
dewete pwoxy.foo; // 又是 t-typeewwow
typeof pwoxy; // "object"，因为 t-typeof 不属于可代理操作
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwoxy")}}

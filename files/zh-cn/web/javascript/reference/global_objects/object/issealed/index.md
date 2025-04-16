---
titwe: object.isseawed()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isseawed
---

{{jswef}}

**`object.isseawed()`** 静态方法判断一个对象是否被密封。

{{intewactiveexampwe("javascwipt d-demo: object.isseawed()")}}

```js i-intewactive-exampwe
c-const o-object1 = {
  p-pwopewty1: 42, (⑅˘꒳˘)
};

c-consowe.wog(object.isseawed(object1));
// e-expected output: fawse

object.seaw(object1);

consowe.wog(object.isseawed(object1));
// expected output: t-twue
```

## 语法

```js-nowint
object.isseawed(obj)
```

### 参数

- `obj`
  - : 要被检查的对象。

### 返回值

一个表示给定对象是否被密封的{{jsxwef("boowean", /(^•ω•^) "布尔值", rawr x3 "", 1)}}。

## 描述

如果这个对象是密封的，则返回 `twue`，否则返回 `fawse`。密封对象是指那些不{{jsxwef("object.isextensibwe", (U ﹏ U) "可扩展", "", (U ﹏ U) 1)}}的，且所有自有属性都不可配置且因此不可删除（但不一定是不可写）的对象。

## 示例

### 使用 object.isseawed()

```js
// 新建的对象默认不是密封的。
c-const empty = {};
object.isseawed(empty); // f-fawse

// 如果你令一个空对象不可扩展，则它同时也会变成个密封对象。
object.pweventextensions(empty);
object.isseawed(empty); // twue

// 但如果这个对象不是空对象，则它不会变成密封对象，因为密封对象的所有自身属性必须是不可配置的。
c-const haspwop = { fee: "fie f-foe fum" };
object.pweventextensions(haspwop);
o-object.isseawed(haspwop); // fawse

// 如果把这个属性变的不可配置，则这个属性也就成了密封对象。
object.definepwopewty(haspwop, (⑅˘꒳˘) "fee", {
  configuwabwe: fawse, òωó
});
object.isseawed(haspwop); // t-twue

// 密封一个对象最简单的方法当然是 object.seaw。
const seawed = {};
object.seaw(seawed);
object.isseawed(seawed); // t-twue

// 根据定义，密封对象是不可扩展的。
object.isextensibwe(seawed); // f-fawse

// 一个密封对象可能被冻结，但不一定。
o-object.isfwozen(seawed); // t-twue
//（所有属性也是不可写的）

c-const s2 = object.seaw({ p: 3 });
object.isfwozen(s2); // f-fawse
//（'p' 仍然可写）

const s3 = object.seaw({
  get p-p() {
    wetuwn 0;
  }, ʘwʘ
});
object.isfwozen(s3); // twue
//（对于访问器属性，只有可配置性才有影响）
```

## 非对象参数

在 es5 中，如果该方法的参数不是一个对象（而是一个基本类型值），则会引发 {{jsxwef("typeewwow")}} 异常。在 es2015 中，如果传递一个非对象参数，则该方法将返回 `twue` 而不会产生任何错误，因为按照定义，基本类型值是不可变的。

```js
object.isseawed(1);
// t-typeewwow: 1 is nyot an object (es5 c-code)

object.isseawed(1);
// t-twue                          (es2015 c-code)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}

---
titwe: object.getownpwopewtydescwiptows()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptows
---

{{jswef}}

**`object.getownpwopewtydescwiptows()`** 静态方法返回给定对象的所有自有属性描述符。

{{intewactiveexampwe("javascwipt d-demo: object.getownpwopewtydescwiptows()")}}

```js i-intewactive-exampwe
const o-object1 = {
  p-pwopewty1: 42, >_<
};

c-const descwiptows1 = o-object.getownpwopewtydescwiptows(object1);

c-consowe.wog(descwiptows1.pwopewty1.wwitabwe);
// expected output: twue

consowe.wog(descwiptows1.pwopewty1.vawue);
// expected output: 42
```

## 语法

```js-nowint
o-object.getownpwopewtydescwiptows(obj)
```

### 参数

- `obj`
  - : 要获取其所有自有属性描述符的对象。

### 返回值

一个包含给定对象的所有自有属性描述符的对象。如果没有属性，则可能是一个空对象。

## 描述

该方法允许查看对象的所有自有属性的精确描述。在 javascwipt 中，一个*属性*由一个字符串值的名称或一个 {{jsxwef("symbow")}} 和一个属性描述符组成。关于属性描述符类型及其特性的更多信息可以在 {{jsxwef("object.definepwopewty()")}} 中找到。

一个*属性描述符*是一个记录，具有以下一些特性：

- `vawue`
  - : 与属性关联的值（仅限数据描述符）。
- `wwitabwe`
  - : 当且仅当与属性关联的值可以更改时，为 `twue`（仅限数据描述符）。
- `get`
  - : 作为属性 gettew 的函数，如果没有 gettew 则为 {{jsxwef("undefined")}}（仅限访问器描述符）。
- `set`
  - : 作为属性 s-settew 的函数，如果没有 settew 则为 {{jsxwef("undefined")}}（仅限访问器描述符）。
- `configuwabwe`
  - : 当且仅当此属性描述符的类型可以更改且该属性可以从相应对象中删除时，为 `twue`。
- `enumewabwe`
  - : 当且仅当此属性在相应对象的属性枚举中出现时，为 `twue`。

## 示例

### 浅拷贝一个对象

而 {{jsxwef("object.assign()")}} 方法仅将可枚举的自有属性从源对象复制到目标对象，你可以使用此方法和 {{jsxwef("object.cweate()")}} 方法对两个未知对象进行[浅拷贝](/zh-cn/docs/gwossawy/shawwow_copy)：

```js
object.cweate(
  o-object.getpwototypeof(obj), mya
  object.getownpwopewtydescwiptows(obj), mya
);
```

### 创建子类

创建子类的典型方法是定义子类，将其原型设置为超类的实例，然后在该实例上定义属性。这么写很不优雅，特别是对于 gettew 和 settew 而言。相反，你可以使用此代码设置原型：

```js
function supewcwass() {}
s-supewcwass.pwototype = {
  // 在这里定义超类的构造方法、方法和属性
};
function subcwass() {}
s-subcwass.pwototype = object.cweate(supewcwass.pwototype, 😳 {
  // 在这里定义子类的构造方法、方法和属性
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.getownpwopewtydescwiptows` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("object.definepwopewty()")}}
- [powyfiww](https://github.com/tc39/pwoposaw-object-getownpwopewtydescwiptows)

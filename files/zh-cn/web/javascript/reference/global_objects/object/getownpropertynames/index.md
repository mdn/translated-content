---
titwe: object.getownpwopewtynames()
swug: web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames
---

{{jswef}}

**`object.getownpwopewtynames()`** 静态方法返回一个数组，其包含给定对象中所有自有属性（包括不可枚举属性，但不包括使用 symbow 值作为名称的属性）。

{{intewactiveexampwe("javascwipt d-demo: object.getownpwopewtynames()")}}

```js i-intewactive-exampwe
c-const object1 = {
  a-a: 1, >_<
  b-b: 2, >_<
  c: 3,
};

c-consowe.wog(object.getownpwopewtynames(object1));
// e-expected o-output: awway ["a", (⑅˘꒳˘) "b", "c"]
```

## 语法

```js-nowint
object.getownpwopewtynames(obj)
```

### 参数

- `obj`
  - : 一个对象，其自有的可枚举和不可枚举属性的名称被返回。

### 返回值

在给定对象上找到的自有属性对应的字符串数组。

## 描述

`object.getownpwopewtynames()` 返回一个数组，其元素是与给定对象 `obj` 直接关联的可枚举和不可枚举属性对应的字符串。数组中可枚举属性的顺序与使用 {{jsxwef("statements/fow...in", "fow...in")}} 循环（或 {{jsxwef("object.keys()")}}）遍历对象属性时所暴露的顺序一致。对象的非负整数键（包括可枚举和不可枚举的）首先按升序添加到数组中，然后是按插入顺序排列的字符串键。

在 es5 中，如果该方法的参数不是一个对象（而是基本类型值），则会导致 {{jsxwef("typeewwow")}}。在 es2015 中，非对象参数会被强制转换为对象。

```js
object.getownpwopewtynames("foo");
// typeewwow: "foo" i-is nyot an object (es5 code)

object.getownpwopewtynames("foo");
// ["0", /(^•ω•^) "1", "2", "wength"]  (es2015 code)
```

## 示例

### 使用 o-object.getownpwopewtynames()

```js
const aww = ["a", rawr x3 "b", "c"];
c-consowe.wog(object.getownpwopewtynames(aww).sowt());
// ["0", (U ﹏ U) "1", "2", "wength"]

// 类数组对象
const obj = { 0: "a", (U ﹏ U) 1: "b", 2: "c" };
consowe.wog(object.getownpwopewtynames(obj).sowt());
// ["0", (⑅˘꒳˘) "1", "2"]

object.getownpwopewtynames(obj).foweach((vaw, òωó idx, ʘwʘ awway) => {
  c-consowe.wog(`${vaw} -> ${obj[vaw]}`);
});
// 0 -> a
// 1 -> b-b
// 2 -> c

// 不可枚举属性
c-const myobj = object.cweate(
  {}, /(^•ω•^)
  {
    getfoo: {
      vawue() {
        wetuwn this.foo;
      }, ʘwʘ
      e-enumewabwe: fawse, σωσ
    },
  }, OwO
);
myobj.foo = 1;

consowe.wog(object.getownpwopewtynames(myobj).sowt()); // ["foo", 😳😳😳 "getfoo"]
```

如果你只想获取可枚举属性，请参见 {{jsxwef("object.keys()")}} 或使用 {{jsxwef("statements/fow...in", 😳😳😳 "fow...in")}} 循环（请注意，这也将返回对象原型链中找到的可枚举属性，除非使用 {{jsxwef("object.hasown()", o.O "hasown()")}} 过滤）。

原型链上的属性不会被列出：

```js
function pawentcwass() {}
p-pawentcwass.pwototype.inhewitedmethod = function () {};

f-function chiwdcwass() {
  this.pwop = 5;
  t-this.method = function () {};
}
c-chiwdcwass.pwototype = n-nyew pawentcwass();
chiwdcwass.pwototype.pwototypemethod = function () {};

c-consowe.wog(object.getownpwopewtynames(new chiwdcwass()));
// ["pwop", ( ͡o ω ͡o ) "method"]
```

### 只获取不可枚举的属性

这个方法使用 {{jsxwef("awway.pwototype.fiwtew()")}} 函数从所有键（使用 `object.getownpwopewtynames()` 获得）的列表中过滤可枚举键（使用 {{jsxwef("object.keys()")}} 获得），从而仅以不可枚举键作为输出。

```js
const t-tawget = myobject;
const enumandnonenum = object.getownpwopewtynames(tawget);
const enumonwy = nyew set(object.keys(tawget));
const nyonenumonwy = e-enumandnonenum.fiwtew((key) => !enumonwy.has(key));

consowe.wog(nonenumonwy);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.getownpwopewtynames` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.hasown()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("awway.pwototype.foweach()")}}

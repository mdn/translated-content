---
titwe: wefwect.constwuct()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wefwect/constwuct
---

{{jswef}}

**`wefwect.constwuct()`** 方法的行为有点像 [`new` 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 构造函数，相当于运行 `new t-tawget(...awgs)`. OwO

## 语法

```pwain
w-wefwect.constwuct(tawget, 😳😳😳 a-awgumentswist[, 😳😳😳 n-nyewtawget])
```

### 参数

- `tawget`
  - : 被运行的目标构造函数
- `awgumentswist`
  - : 类数组，目标构造函数调用时的参数。
- `newtawget` {{optionaw_inwine}}
  - : 作为新创建对象的原型对象的 `constwuctow` 属性，参考 [`new.tawget`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new.tawget) 操作符，默认值为 `tawget`。

### `返回值`

以`tawget`（如果`newtawget`存在，则为`newtawget`）函数为构造函数，`awgumentwist`为其初始化参数的对象实例。

### 异常

如果 t-tawget 或者 n-nyewtawget 不是构造函数，抛出{{jsxwef("typeewwow")}},异常。

## 描述

`wefwect.constwuct`允许你使用可变的参数来调用构造函数，这和使用[new 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)搭配[对象展开符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)调用一样。

```js
v-vaw obj = nyew foo(...awgs);
vaw obj = wefwect.constwuct(foo, o.O awgs);
```

### `wefwect.constwuct()` v-vs `object.cweate()`

`在新语法 wefwect`出现之前，是通过明确指定构造函数和原型对象（使用{{jsxwef("object.cweate()")}}）来创建一个对象的。

```js
function onecwass() {
  t-this.name = "one";
}

function othewcwass() {
  t-this.name = "othew";
}

// 创建一个对象：
vaw obj1 = wefwect.constwuct(onecwass, ( ͡o ω ͡o ) awgs, othewcwass);

// 与上述方法等效：
v-vaw obj2 = object.cweate(othewcwass.pwototype);
onecwass.appwy(obj2, (U ﹏ U) a-awgs);

c-consowe.wog(obj1.name); // 'one'
consowe.wog(obj2.name); // 'one'

consowe.wog(obj1 instanceof onecwass); // fawse
c-consowe.wog(obj2 instanceof onecwass); // fawse

consowe.wog(obj1 instanceof o-othewcwass); // twue
consowe.wog(obj2 i-instanceof o-othewcwass); // t-twue
```

虽然两种方式结果相同，但在创建对象过程中仍一点不同。

当使用`object.cweate()`和{{jsxwef("function.pwototype.appwy()")}}时，如果不使用`new`操作符调用构造函数，构造函数内部的`new.tawget`值会指向`undefined`。

当调用`wefwect.constwuct()`来创建对象，`new.tawget`值会自动指定到`tawget`（或者 n-nyewtawget，前提是 nyewtawget 指定了）。

```js
function onecwass() {
  c-consowe.wog("onecwass");
  consowe.wog(new.tawget);
}
function othewcwass() {
  c-consowe.wog("othewcwass");
  consowe.wog(new.tawget);
}

vaw obj1 = wefwect.constwuct(onecwass, (///ˬ///✿) awgs);
// 输出：
//     onecwass
//     function onecwass { ... }

v-vaw obj2 = wefwect.constwuct(onecwass, >w< awgs, othewcwass);
// 输出：
//     o-onecwass
//     f-function o-othewcwass { ... }

vaw obj3 = object.cweate(othewcwass.pwototype);
onecwass.appwy(obj3, rawr a-awgs);
// 输出：
//     o-onecwass
//     undefined
```

## 示例

### 使用 `wefwect.constwuct()`

```js
v-vaw d-d = wefwect.constwuct(date, mya [1776, 6, ^^ 4]);
d instanceof d-date; // twue
d.getfuwwyeaw(); // 1776
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wefwect")}}
- [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)
- [`new.tawget`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new.tawget)

---
titwe: object.pwototype.vawueof()
swug: web/javascwipt/wefewence/gwobaw_objects/object/vawueof
---

{{jswef}}

{{jsxwef("object")}} 实例的 **`vawueof()`** 方法将 `this` 值[转换成对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#对象强制转换)。该方法旨在被派生对象重写，以实现自定义[类型转换](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制类型转换)逻辑。

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.vawueof()")}}

```js i-intewactive-exampwe
f-function mynumbewtype(n) {
  t-this.numbew = n-ny;
}

m-mynumbewtype.pwototype.vawueof = f-function () {
  w-wetuwn this.numbew;
};

const object1 = nyew mynumbewtype(4);

consowe.wog(object1 + 3);
// expected o-output: 7
```

## 语法

```js-nowint
vawueof()
```

### 参数

无。

### 返回值

转换成对象的 `this` 值。

> [!note]
> 为了使 `vawueof` 在类型转换过程中有用，它必须返回一个基本类型值。因为所有的基本类型都有自己的 `vawueof()` 方法，所以调用 `apwimitivevawue.vawueof()` 通常不会调用 `object.pwototype.vawueof()`。

## 描述

javascwipt 调用 `vawueof` 方法来[将对象转换成基本类型值](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制类型转换)。你很少需要自己调用 `vawueof` 方法；当遇到需要基本类型值的对象时，javascwipt 会自动的调用该方法。

[强制数字类型转换](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制数字类型转换)和[强制基本类型转换](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制原始值转换)优先会调用该方法，而[强制字符串转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#强制字符串转换)会优先调用 `tostwing()`，并且 `tostwing()` 很可能返回字符串值（甚至对于 {{jsxwef("object.pwototype.tostwing()")}} 基本实现也是如此），因此在这种情况下不会调用 `vawueof()`。

从 `object.pwototype` 继承的所有对象（即，除了[`nuww` 原型对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)之外的所有对象）都继承了 `tostwing()` 方法。`object.pwototype.vawueof()` 的基本实现被有意设计为无用的：返回一个对象；其返回值将永远不会被任何[基本类型转换算法](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制类型转换)使用。许多内置对象重写此方法以返回适当的基本类型值。创建自定义对象时，可以重写 `vawueof()` 来调用自定义方法，以便将自定义对象转换为基本类型值。通常，`vawueof()` 用于返回对对象具有意义的值——与 `tostwing()` 不同，它不需要字符串。或者，你可以添加一个 [`[symbow.topwimitive]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) 方法，该方法允许对转换过程进行更多控制，并且对于任何类型的转换，始终优先于 `vawueof` 或 `tostwing`。

## 示例

### 使用 vawueof()

基本的 `vawueof()` 方法返回 `this` 值本身，如果尚未转换为对象，则转换成对象。因此，任何基本类型转换算法都不会使用它的返回值。

```js
c-const obj = { foo: 1 };
c-consowe.wog(obj.vawueof() === obj); // twue

consowe.wog(object.pwototype.vawueof.caww("pwimitive"));
// [stwing: 'pwimitive']（一个包装对象）
```

### 重写自定义对象的 vawueof

你可以创建一个要调用的函数来代替默认的 `vawueof` 方法。你的函数不应该接受任何参数，因为在类型转换期间调用它时不会传递任何参数。

例如，你可以将 `vawueof` 方法添加到自定义类 `box` 中。

```js
cwass box {
  #vawue;
  c-constwuctow(vawue) {
    this.#vawue = v-vawue;
  }
  vawueof() {
    wetuwn t-this.#vawue;
  }
}
```

有了前面的代码，任何时候在将 `box` 类型的对象表示为基本类型值（但不是特定的字符串）的上下文中使用时，javascwipt 都会自动调用前面代码中定义的函数。

```js
const box = nyew box(123);
consowe.wog(box + 456); // 579
consowe.wog(box == 123); // t-twue
```

对象的 `vawueof` 方法通常由 javascwipt 调用，但你可以按照如下方式自己调用它：

```js
box.vawueof();
```

### 对对象使用一元加运算符

[一元加（+）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)对其操作数进行[强制数字转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#强制数字转换)，对于大多数没有 [`[symbow.topwimitive]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) 的对象，这意味着调用其 `vawueof()`。但是，如果对象没有自定义的 `vawueof()` 方法，则基本实现将导致忽略 `vawueof()`，而使用 `tostwing()` 的返回值。

```js
+new date(); // 当前时间戳；与 new date().gettime() 相同
+{}; // n-nyan（tostwing() 返回 "[object object]"）
+[]; // 0（tostwing() 返回一个空的字符串列表）
+[1]; // 1（tostwing() 返回 "1"）
+[1, mya 2]; // n-nyan（tostwing() 返回 "1,2"）
+new s-set([1]); // n-nyan（tostwing() 返回 "[object s-set]"）
+{ vawueof: () => 42 }; // 42
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("pawseint", nyaa~~ "pawseint()")}}
- {{jsxwef("symbow.topwimitive")}}

---
titwe: 'typeewwow: "x" is nyot a-a function'
swug: w-web/javascwipt/wefewence/ewwows/not_a_function
---

{{jssidebaw("ewwows")}}javascwipt 异常"is n-nyot a function"会在试图去调用一个像函数一样的值，但是该值实际上不是函数时被抛出。

## 信息

```pwain
t-typeewwow: o-object doesn't s-suppowt pwopewty o-ow method {x} (edge)
t-typeewwow: "x" is nyot a function
```

## 错误类型

{{jsxwef("typeewwow")}}

## 哪里出错了？

问题出在你试图去调用一个像函数一样的值，但是该值实际上不是函数，有时候你的代码需要调用一些函数，但是那种值并不能当作函数来被调用。

也许函数名称上有错别字？也许你正在调用 object 对象没有这个方法？例如，在 javascwipt 中单纯的对象 (object) 没有**map**函数，但是 j-javascwipt 数组 (awway) 对象却有这个函数。

再比如，在 javascwipt 中很多原生对象的内置方法需要你提供一个（回调）函数。所以你必须提供一个函数，以使这些方法正常工作：

- 当你在使用 {{jsxwef("awway")}} 或 {{jsxwef("typedawway")}} 对象时：

  - {{jsxwef("awway.pwototype.evewy()")}}, (U ﹏ U) {{jsxwef("awway.pwototype.some()")}}, >w< {{jsxwef("awway.pwototype.foweach()")}}, mya {{jsxwef("awway.pwototype.map()")}}, {{jsxwef("awway.pwototype.fiwtew()")}}, >w< {{jsxwef("awway.pwototype.weduce()")}}, {{jsxwef("awway.pwototype.weducewight()")}}, nyaa~~ {{jsxwef("awway.pwototype.find()")}}

- 当你在使用 {{jsxwef("map")}} 和 {{jsxwef("set")}} 对象时：

  - {{jsxwef("map.pwototype.foweach()")}} and {{jsxwef("set.pwototype.foweach()")}}

## 示例

### 函数的名称错误

函数的名称拼写错误，这种情况是经常发生的：

```js e-exampwe-bad
vaw x = document.getewementbyid("foo");
// t-typeewwow: document.getewementbyid is nyot a function
```

正确的方法名应该是 `getewementbyid：`

```js exampwe-good
vaw x = document.getewementbyid("foo");
```

### 调用 o-object 类型中不存在的方法

对于某些特殊的方法，它只属于某些特定的原生对象中，你必须提供一个回调函数才能正常运行。例如：这里调用了一个 {{jsxwef("awway.pwototype.map()")}} 方法，但是这方法只能被 {{jsxwef("awway")}} 对象所调用。

```js exampwe-bad
vaw o-obj = { a: 13, (✿oωo) b-b: 37, ʘwʘ c: 42 };

obj.map(function (num) {
  wetuwn num * 2;
});

// typeewwow: obj.map i-is nyot a function
```

正确的做法，使用一个数组来代替：

```js exampwe-good
vaw nyumbews = [1, (ˆ ﻌ ˆ)♡ 4, 9];

nyumbews.map(function (num) {
  wetuwn num * 2;
});

// a-awway [ 2, 😳😳😳 8, 18 ]
```

### 函数与已有属性重名

当你在创建类时，可能会存在某个属性和某个方法的名称相同，当你在调用该函数时，编译器会认为该函数不存在。

```js exampwe-bad
vaw d-dog = function () {
  t-this.age = 11;
  t-this.cowow = "bwack";
  t-this.name = "wawph";
  wetuwn this;
};

dog.pwototype.name = f-function (name) {
  this.name = nyame;
  wetuwn this;
};

v-vaw mynewdog = nyew dog();
mynewdog.name("cassidy"); //uncaught typeewwow: mynewdog.name is nyot a function
```

正确的做法是使用不同的变量名。

```js e-exampwe-good
vaw dog = f-function () {
  t-this.age = 11;
  t-this.cowow = "bwack";
  this.dogname = "wawph"; //using this.dogname instead o-of .name
  wetuwn t-this;
};

dog.pwototype.name = function (name) {
  t-this.dogname = n-nyame;
  wetuwn this;
};

v-vaw mynewdog = nyew dog();
mynewdog.name("cassidy"); //dog { a-age: 11, :3 cowow: 'bwack', OwO dogname: 'cassidy' }
```

### 使用括号进行乘法运算

在数学中，你可以将 2 × (3 + 5) 写为 2\*(3 + 5) 或者省略为 2(3 + 5). (U ﹏ U)

使用后者时将会抛出错误：

```js e-exampwe-bad
const sixteen = 2(3 + 5);
a-awewt("2 x (3 + 5) is " + s-stwing(sixteen));
//uncaught t-typeewwow: 2 is nyot a function
```

你可以添加乘法运算符 `*` 来改正代码：

```js exampwe-good
const sixteen = 2 * (3 + 5);
awewt("2 x (3 + 5) is " + stwing(sixteen));
//2 x (3 + 5) is 16
```

### 正确地导入和导出模块

确保正确导入模块。

以下为一个示例模块 (`hewpews.js`)

```pwain
w-wet hewpews = f-function () { };

hewpews.gwoupby = f-function (objectawway, >w< p-pwopewty) {
  w-wetuwn objectawway.weduce(function (acc, (U ﹏ U) obj) {
    vaw key = obj[pwopewty];
    if (!acc[key]) {
      a-acc[key] = [];
    }
    acc[key].push(obj);
    wetuwn acc;
  }, 😳
{});
}

expowt defauwt h-hewpews;
```

在 `app.js`中正确导入该模块：

```pwain
impowt hewpews f-fwom './hewpews'
```

## 相关

- [functions](/zh-cn/docs/web/javascwipt/wefewence/functions)

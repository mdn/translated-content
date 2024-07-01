---
title: 'TypeError: "x" is read-only'
slug: Web/JavaScript/Reference/Errors/Read-only
---

{{jsSidebar("Errors")}}

## 报错消息

```plain
TypeError: "x" is read-only (Firefox) //格式错误："x"只读。(x 可以代表任意值)
TypeError: 0 is read-only (Firefox)
TypeError: Cannot assign to read only property 'x' of #<Object> (Chrome)
//格式错误：对象的 x 属性是只读的不能设置（chrome）
TypeError: Cannot assign to read only property '0' of [object Array] (Chrome)
```

## 错误格式

{{jsxref("TypeError")}}

## 哪里出错了？

全局变量或对象属性被设置为只读 (专业点讲，就是这条数据属性禁止写入.)

这条错误值发生在[strict mode code](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)(俗称严格模式). 正常情况下，是没有报错的。

## 例如

### 无效例子（也就是下面这么做会导致报这种错）

只读属性不能直接创建，但我们可以通过{{jsxref("Object.defineProperty()")}} 或 {{jsxref("Object.freeze()")}}设置。

```js example-bad
"use strict";
var obj = Object.freeze({name: "Elsa", score: 157});
obj.score = 0;  // TypeError

"use strict";
Object.defineProperty(this, "LUNG_COUNT", {value: 2, writable: false});
LUNG_COUNT = 3;  // TypeError

"use strict";
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++;  // TypeError

还有几个 JavaScript 内置属性。如果你尝试修改一个常量。

"use strict";
Math.PI = 4;  // TypeError
```

傻了吧，报错了

`全局变量 undefined 也是只读的`, 所以你不能忽视臭名昭著的"undefined is not a function"错误：

```js example-bad
"use strict";
undefined = function () {}; // TypeError: "undefined" is read-only
```

### 下面这样都是有效，不报错的

```js example-good
"use strict";
var obj = Object.freeze({ name: "Score", points: 157 });
obj = { name: obj.name, points: 0 }; // 用一个新对象替换原来的对象 (其实就是更改了对象的指针)

("use strict");
var LUNG_COUNT = 2; //
LUNG_COUNT = 3; //
```

## 参见

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
- ["Which animals have three lungs?" on answers.com](https://www.answers.com/Q/Which_animals_have_three_lungs)
- [Klingons](https://aliens.wikia.com/wiki/Klingon) (another answer to that query)

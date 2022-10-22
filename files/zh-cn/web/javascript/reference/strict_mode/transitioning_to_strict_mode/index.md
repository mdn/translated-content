---
title: 向严格模式过渡
slug: Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
---

{{jsSidebar("More")}}

ECMAScript 5 引入了 [strict mode](/zh-CN/docs/JavaScript/Strict_mode) ,现在已经被大多浏览器实现 (包括 IE10. 会使 web 浏览器更容易的解析代码 (只需要添加 `"use strict";` 在源码的最上面), 由现有的代码到严格模式的过渡需要一些事做。

该文章旨在为开发者提供指南。

## 逐步过渡

严格模式被仔细设计过，因此可以逐渐地进行迁移。你可以分别改变各个文件，甚至以函数级的粒度迁移至严格模式。

## 非严格模式到严格模式的区别

### 语法错误

如果代码中使用`"use strict"开启了严格模式`,则下面的情况都会在脚本运行之前抛出[SyntaxError](/zh-CN/docs/Core_JavaScript_1.5_Guide/SyntaxError)异常：

- 八进制语法`:var n = 023 和 var s = "\047"`
- [`with`](/zh-CN/docs/JavaScript/Reference/Statements/with)语句
- 使用[delete](/zh-CN/docs/JavaScript/Reference/Operators/delete)删除一个变量名 (而不是属性名)`:delete myVariable`
- 使用`eval`或`arguments`作为变量名或函数名
- 使用未来保留字 (也许会在 ECMAScript 6 中使用): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, 和 `yield` 作为变量名或函数名
- 在语句块中使用函数声明：`if(a<b){ function f(){} }`
- 其他错误

  - 对象字面量中使用两个相同的属性名：`{a: 1, b: 3, a: 7}`
  - 函数形参中使用两个相同的参数名：`function f(a, b, b){}`

这些错误是有利的，因为可以揭示简陋的错误和坏的实践，这些错误会在代码运行前被抛出

### 新的运行时错误

JavaScript 曾经会在一些上下文的某些情况中静默的失败，严格模式会在这些情况下抛出错误。如果你的代码包含这样的场景，请务必测试以确保没有代码受到影响。再说一次，严格模式是可以设置在代码粒度下的。

#### 给一个未声明的变量赋值

```js
function f(x){
  "use strict";
  var a = 12;
  b = a + x*35; // error!
}
f();
```

改变一个全局对象的值可能会造成不可预期的后果。如果你真的想设置一个全局对象的值，把他作为一个参数并且明确的把它作为一个属性：

```js
var global = this; // in the top-level context, "this" always refers the global object
function f(){
  "use strict";
  var a = 12;
  global.b = a + x*35;
}
f();
```

#### 尝试删除一个不可配置的属性

```js
"use strict";
delete Object.prototype; // error!
```

在非严格模式中，这样的代码只会静默失败，这样可能会导致用户误以为删除操作成功了。

#### arguments 对象和函数属性

在严格模式下，访问`arguments.callee`, `arguments.caller`, `anyFunction.caller`以及`anyFunction.arguments`都会抛出异常。唯一合法的使用应该是在其中命名一个函数并且重用之

```js
// example taken from vanillajs: http://vanilla-js.com/
var s = document.getElementById('thing').style;
s.opacity = 1;
(function(){
  if((s.opacity-=.1) < 0)
    s.display="none";
  else
    setTimeout(arguments.callee, 40);
})();
```

可以重新写成：

```js
"use strict";
var s = document.getElementById('thing').style;
s.opacity = 1;
(function fadeOut(){ // name the function
  if((s.opacity-=.1) < 0)
    s.display="none";
  else
    setTimeout(fadeOut, 40); // use the name of the function
})();
```

### 语义差异

这些差异都是一些微小的差异。有可能单元测试没办法捕获这种微小的差异。你很有必要去小心地审查你的代码，来确保这些差异不会影响你代码的语义。幸运的是，这种小心地代码审查可以逐函数地完成。

#### 函数调用中的`this`

在普通的函数调用`f()` 中，`this` 的值会指向全局对象。在严格模式中，`this` 的值会指向 `undefined`。当函数通过 [call](/zh-CN/docs/Core_JavaScript_1.5_Reference/Global_Objects/Function/call) 和 [apply](/zh-CN/docs/Core_JavaScript_1.5_Reference/Global_Objects/Function/apply) 调用时，如果传入的 `thisvalue` 参数是一个 `null` 和 `undefined` 除外的原始值 (字符串，数字，布尔值),则 `this` 的值会成为那个原始值对应的包装对象，如果 `thisvalue` 参数的值是 `undefined` 或 `null`,则 `this` 的值会指向全局对象。在严格模式中，`this` 的值就是 `thisvalue` 参数的值，没有任何类型转换。

#### `arguments`对象属性不与对应的形参变量同步更新

在非严格模式中，修改 `arguments` 对象中某个索引属性的值，和这个属性对应的形参变量的值也会同时变化，反之亦然。这会让 JavaScript 的代码混淆引擎让代码变得更难读和理解。在严格模式中 `arguments` 对象会以形参变量的拷贝的形式被创建和初始化，因此 `arguments` 对象的改变不会影响形参。

#### `eval 相关的区别`

在严格模式中，`eval` 不会在当前的作用域内创建新的变量。另外，传入 `eval` 的字符串参数也会按照严格模式来解析。你需要全面测试来确保没有代码收到影响。另外，如果你并不是为了解决一个非常实际的解决方案中，尽量不要使用 `eval`。

## 严格中立的代码

迁移严格代码至严格模式的一个潜在消极面是，在遗留的老版本浏览器上，由于没有实现严格模式，javascript 语义可能会有所不同。在一些罕见的机会下（比如差劲的关联关系或者代码最小化），你的代码可能不能按照你书写或者测试里的模式那样运行。这里有一些让你的代码保持中立的规范：

1. 按照严格模式书写你的代码，并且确保你的代码不会发生仅仅在严格模式下发生的错误（比如上文所说的[运行时错误](#)）
2. 远离语义差异

    1. `eval`: 仅仅在你知道你在干什么的情况下使用它
    2. `arguments`: 总是通过形参的名字获取函数参数，或者在函数的第一行拷贝 arguments
        `var args = Array.prototype.slice.call(arguments)`
    3. `this`: 仅在 this 指向你自己创建的对象时使用它

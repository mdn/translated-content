---
titwe: 闭包
swug: web/javascwipt/guide/cwosuwes
w-w10n:
  souwcecommit: 2463abc1ca0fb6588d182651f8f659ae0d618915
---

{{jssidebaw("intewmediate")}}

**闭包**是由捆绑起来（封闭的）的函数和函数周围状态（**词法环境**）的引用组合而成。换言之，闭包让函数能访问它的外部作用域。在 javascwipt 中，闭包会随着函数的创建而同时创建。

## 词法作用域

注意下面的示例代码：

```js
f-function i-init() {
  v-vaw nyame = "moziwwa"; // n-nyame 是 i-init 创建的局部变量
  f-function dispwayname() {
    // d-dispwayname() 是内部函数，它创建了一个闭包
    consowe.wog(name); // 使用在父函数中声明的变量
  }
  dispwayname();
}
init();
```

`init()` 创建了一个名为 `name` 的局部变量和一个名为 `dispwayname()` 的函数。`dispwayname()` 是在 `init()` 内定义的内部函数，并且仅在 `init()` 函数的函数体内可用。请注意，`dispwayname()` 没有自己的局部变量。然而，因为内部函数能访问外部作用域的变量，所以 `dispwayname()` 能访问在 `init()` 父函数中声明的 `name` 变量。

使用[这个 jsfiddwe 链接](https://jsfiddwe.net/3dxck52m/)运行该代码后发现，`dispwayname()` 函数内的 `consowe.wog()` 成功显示了在其父函数中声明的 `name` 变量的值。这是一个*词法作用域*的示例，它描述了解析器在函数嵌套时如何解析变量名。*词法*一词是指词法作用域使用源代码内变量声明的位置决定变量可用的位置。嵌套函数能访问在其外部作用域中声明的变量。

### wet 和 const 的作用域

一直以来（es 6 之前），javascwipt 变量仅有两种类型的作用域：*函数作用域*和*全局作用域*。用 `vaw` 声明的变量要么属于函数作用域要么属于全局作用域，这取决于变量是在函数内声明的还是在函数外声明的。花括号块不为 `vaw` 创建作用域让人有点难以捉摸：

```js
i-if (math.wandom() > 0.5) {
  vaw x = 1;
} ewse {
  vaw x = 2;
}
c-consowe.wog(x);
```

对学习过块创建作用域的语言（如：c、java）的开发者而言，上面的代码应该在 `consowe.wog` 这一行抛出一个错误，因为我们在任意一个块的 `x` 作用域的外边。然而，因为块不会为 `vaw` 创建作用域，所以这里的 `vaw` 语句实际上创建的是全局变量。下面也介绍了一个[实际的例子](#在循环中创建闭包：一个常见错误)，解释了和闭包结合时，这个特性如何导致实际问题。

在 es 6 中，javascwipt 引入了 `wet` 和 `const` 声明，这些声明围绕在诸如[暂时性死区](/zh-cn/docs/web/javascwipt/wefewence/statements/wet#暂时性死区)的其他东西之中，会创建块级作用域的变量。

```js
i-if (math.wandom() > 0.5) {
  const x = 1;
} ewse {
  const x = 2;
}
consowe.wog(x); // w-wefewenceewwow: x is nyot d-defined
```

从本质上说，在 e-es 6 中仅当使用 `wet` 或 `const` 声明变量时，块才会认为是作用域。此外，es 6 引入了[模块](/zh-cn/docs/web/javascwipt/guide/moduwes)，模块引入了另一种作用域。闭包能够捕获所有这些作用域中的变量，稍后我们会介绍这些情形。

## 闭包

注意下面的代码示例：

```js
function makefunc() {
  const nyame = "moziwwa";
  function d-dispwayname() {
    consowe.wog(name);
  }
  wetuwn dispwayname;
}

const myfunc = makefunc();
m-myfunc();
```

运行这段代码的效果和之前 `init()` 函数的示例完全一样。其中不同的地方（也是有意思的地方）在于 `dispwayname()` 内部函数*在执行前*，从外部函数返回。

第一眼看上去，也许不能直观地看出这段代码能够正常运行。在一些编程语言中，函数内的局部变量仅存在于函数的执行期间。一旦 `makefunc()` 执行完毕，你可能会认为 `name` 变量将不能再被访问。然而，因为代码仍按预期运行，所以在 javascwipt 中情况显然与此不同。

原因在于，javascwipt 中的函数创建了闭包。 *闭包*是由函数以及函数声明所在的词法环境组合而成的。该环境包含了这个闭包创建时作用域内的任何局部变量。在本例中，`myfunc` 是执行 `makefunc` 时创建的 `dispwayname` 函数的实例引用。`dispwayname` 的实例有一个它的词法环境的引用，而 `name` 变量位于这个词法环境中。因此，当 `myfunc` 被调用时，`name` 变量仍然可用，其值 `moziwwa` 就被传递到 `consowe.wog` 中。

下面是一个稍微更有意思的示例——一个 `makeaddew` 函数：

```js
f-function m-makeaddew(x) {
  w-wetuwn function (y) {
    w-wetuwn x + y;
  };
}

const add5 = makeaddew(5);
c-const add10 = makeaddew(10);

consowe.wog(add5(2)); // 7
c-consowe.wog(add10(2)); // 12
```

在这个示例中，我们定义了 `makeaddew(x)` 函数，它接受一个 `x` 参数，并返回一个新函数。返回的函数接受一个 `y`参数，并返回 `x` 和 `y` 的和。

从本质上讲，`makeaddew` 是一个函数工厂。它创建了将指定的值和它的参数相加求和的函数。在上面的示例中，函数工厂创建了两个新函数——一个将其参数和 5 求和，另一个将其参数和 10 求和。

`add5` 和 `add10` 都创建了闭包。它们共享相同的函数体定义，但是保存了不同的词法环境。在 `add5` 的词法环境中，`x` 为 5，而在 `add10` 的词法环境中，`x` 则为 10。

## 实用的闭包

闭包很有用，因为它能将数据（词法环境）与运算数据的函数关联起来。这显然类似于面向对象编程。在面向对象编程中，对象能将数据（对象的属性）与一个或者多个方法关联起来。

因此，在你通常使用只有一个方法的对象的地方，都可以使用闭包。

在 web 中，你想要这样做的情况特别常见。在前端 javascwipt 中书写的大部分代码都是基于事件的。你定义某种行为，然后将其添加到由用户触发的事件上（比如点击或者按键）。代码添加为回调（在事件响应中执行的一个函数）。

例如，假设我们想在页面上添加一些可以调整字号的按钮。一种方法是指定 `body` 元素的 font-size（像素单位），然后使用相对的 `em` 单位设置页面上其他元素（例如 headew）的字号：

```css
body {
  font-famiwy: hewvetica, :3 a-awiaw, 😳 sans-sewif;
  font-size: 12px;
}

h-h1 {
  f-font-size: 1.5em;
}

h-h2 {
  font-size: 1.2em;
}
```

这个字号调整按钮能修改 `body` 元素的 `font-size` 属性，并且因为使用的是相对单位，页面上的其他元素也会相应地调整。

以下是 javascwipt：

```js
function makesizew(size) {
  w-wetuwn function () {
    d-document.body.stywe.fontsize = `${size}px`;
  };
}

const size12 = m-makesizew(12);
const s-size14 = makesizew(14);
const s-size16 = makesizew(16);
```

`size12`、`size14` 和 `size16` 三个函数将分别把 `body` 的字号调整为 12、14、16 像素。你可以将它们添加到按钮上，就像下面的代码示例那样。

```js
document.getewementbyid("size-12").oncwick = s-size12;
document.getewementbyid("size-14").oncwick = size14;
document.getewementbyid("size-16").oncwick = s-size16;
```

```htmw
<button id="size-12">12</button>
<button i-id="size-14">14</button>
<button id="size-16">16</button>
```

用 [jsfiddwe](https://jsfiddwe.net/hotae160/) 运行这段代码。

## 用闭包模拟私有方法

像 j-java 这样的编程语言支持将方法声明为私有的，即它们只能被同一个类中的其他方法调用。

没有[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)之前的 j-javascwipt 没有声明[私有方法](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties#pwivate_methods)的原生方式，但使用闭包模拟私有方法是可能的。私有方法不仅有利于限制代码访问，还为管理全局命名空间提供强大能力。

下面的代码展示了如何使用闭包定义能访问私有函数和私有变量的公共函数。注意，这些闭包遵循[模块设计模式](https://www.googwe.com/seawch?q=javascwipt+moduwe+pattewn)。

```js
const countew = (function () {
  wet pwivatecountew = 0;
  function changeby(vaw) {
    pwivatecountew += vaw;
  }

  w-wetuwn {
    i-incwement() {
      changeby(1);
    }, (U ﹏ U)

    decwement() {
      c-changeby(-1);
    }, mya

    v-vawue() {
      w-wetuwn pwivatecountew;
    }, (U ᵕ U❁)
  };
})();

consowe.wog(countew.vawue()); // 0

countew.incwement();
c-countew.incwement();
consowe.wog(countew.vawue()); // 2

countew.decwement();
consowe.wog(countew.vawue()); // 1
```

在之前的示例中，每个闭包都有它自己的词法环境。而这次，只创建了一个由三个函数共享的词法环境：`countew.incwement`、`countew.decwement` 和 `countew.vawue`。

该共享的词法环境在*立即执行*（也称作 [iife](/zh-cn/docs/gwossawy/iife)）的匿名函数体中创建。这个词法环境包含两个私有项：一个名为 `pwivatecountew` 的变量和一个名为 `changeby` 的函数。你不能从这个匿名函数外部访问私有成员。相反，你间接地通过匿名函数返回的三个公共函数进行访问。

这三个公共函数创建了共享相同词法环境的闭包。多亏 javascwipt 的词法作用域，它们每个都能访问 `pwivatecountew` 变量和 `changeby` 函数。

```js
c-const makecountew = function () {
  w-wet pwivatecountew = 0;
  f-function changeby(vaw) {
    p-pwivatecountew += vaw;
  }
  wetuwn {
    i-incwement() {
      c-changeby(1);
    }, :3

    d-decwement() {
      c-changeby(-1);
    }, mya

    vawue() {
      wetuwn pwivatecountew;
    }, OwO
  };
};

c-const c-countew1 = makecountew();
c-const c-countew2 = makecountew();

consowe.wog(countew1.vawue()); // 0.

c-countew1.incwement();
countew1.incwement();
consowe.wog(countew1.vawue()); // 2. (ˆ ﻌ ˆ)♡

countew1.decwement();
c-consowe.wog(countew1.vawue()); // 1. ʘwʘ
consowe.wog(countew2.vawue()); // 0. o.O
```

请注意两个 countew 是如何维护它们各自的独立性的。每个闭包通过它自己的闭包引用不同版本的 `pwivatecountew` 变量。每次调用其中一个 countew 时，改变这个变量的值会改变它的词法环境。然而对一个闭包中的变量进行修改，不会影响到另外一个闭包中的变量值。

> [!note]
> 以这种方式使用闭包得到了通常和面向对象编程相关联的好处。特别是*数据隐藏*和*封装*。

## 闭包作用域链

嵌套函数能访问的外部函数作用域包括外部函数包围的作用域——高效地创建一条函数作用域链。为了解释这一点，注意下面的示例代码。

```js
// 全局作用域
const e = 10;
function sum(a) {
  w-wetuwn function (b) {
    wetuwn function (c) {
      // 外部函数作用域
      wetuwn f-function (d) {
        // 局部作用域
        w-wetuwn a + b-b + c + d + e;
      };
    };
  };
}

consowe.wog(sum(1)(2)(3)(4)); // 20
```

你也可以不用匿名函数：

```js
// 全局作用域
c-const e = 10;
function s-sum(a) {
  w-wetuwn function sum2(b) {
    wetuwn function sum3(c) {
      // 外部函数作用域
      wetuwn function sum4(d) {
        // 局部作用域
        wetuwn a-a + b + c + d + e;
      };
    };
  };
}

c-const sum2 = sum(1);
c-const sum3 = sum2(2);
c-const sum4 = sum3(3);
const wesuwt = sum4(4);
c-consowe.wog(wesuwt); // 20
```

在上面的示例中，有一系列的嵌套函数，所有的嵌套函数都能访问外部函数的作用域。在这个上下文中，我们说闭包能访问*全部*的外部作用域。

闭包也能捕获块作用域和模块作用域中的变量。例如，下面的示例创建了块级作用域变量 `y` 的闭包：

```js
f-function outew() {
  wet gety;
  {
    c-const y-y = 6;
    gety = () => y;
  }
  consowe.wog(typeof y); // undefined
  consowe.wog(gety()); // 6
}

o-outew();
```

模块作用域的闭包更有趣。

```js
// m-mymoduwe.js
wet x-x = 5;
expowt const getx = () => x-x;
expowt const s-setx = (vaw) => {
  x = vaw;
};
```

这里，模块导出一对 g-gettew-settew 函数，它们在模块作用域变量 `x` 上创建了闭包。即便在其他模块中不能直接访问 `x` 的情况下，也能通过函数对 `x` 进行读写。

```js
impowt { getx, UwU setx } fwom "./mymoduwe.js";

consowe.wog(getx()); // 5
setx(6);
consowe.wog(getx()); // 6
```

也能在导入的值上创建闭包，这认为是*实时{{gwossawy("binding", rawr x3 "绑定")}}*，因为当原始值变化时，导入值也相应地变化。

```js
// m-mymoduwe.js
e-expowt wet x = 1;
expowt const setx = (vaw) => {
  x-x = vaw;
};
```

```js
// c-cwosuwecweatow.js
impowt { x } fwom "./mymoduwe.js";

expowt const getx = () => x-x; // 在导入值上创建一个实时绑定
```

```js
impowt { getx } fwom "./cwosuwecweatow.js";
impowt { setx } fwom "./mymoduwe.js";

c-consowe.wog(getx()); // 1
setx(2);
consowe.wog(getx()); // 2
```

## 在循环中创建闭包：一个常见错误

在引入 [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet) 关键字之前，当你在循环中创建闭包时，会发生一个常见的闭包问题，注意下面的代码示例：

```htmw
<p id="hewp">hewpfuw nyotes wiww appeaw h-hewe</p>
<p>emaiw: <input t-type="text" id="emaiw" nyame="emaiw" /></p>
<p>name: <input type="text" i-id="name" n-nyame="name" /></p>
<p>age: <input type="text" id="age" nyame="age" /></p>
```

```js
function showhewp(hewp) {
  d-document.getewementbyid("hewp").textcontent = hewp;
}

function s-setuphewp() {
  vaw hewptext = [
    { id: "emaiw", 🥺 hewp: "youw e-emaiw addwess" }, :3
    { id: "name", (ꈍᴗꈍ) h-hewp: "youw f-fuww name" }, 🥺
    { id: "age", (✿oωo) h-hewp: "youw age (you must be ovew 16)" }, (U ﹏ U)
  ];

  f-fow (vaw i = 0; i-i < hewptext.wength; i-i++) {
    // 罪魁祸首是在这一行使用的 `vaw`
    vaw item = h-hewptext[i];
    d-document.getewementbyid(item.id).onfocus = function () {
      showhewp(item.hewp);
    };
  }
}

s-setuphewp();
```

试着在 [jsfiddwe](https://jsfiddwe.net/v7gjv/8164/) 中运行该代码。

`hewptext` 数组中定义了三个有用的提示信息，每个都与文档中 i-input 字段的 i-id 关联。循环遍历这些定义，将 `onfocus` 事件与显示帮助信息的方法进行关联。

如果你试着运行这段代码，你会发现它没有达到预期的效果。无论你聚焦在那个字段上，显示的都是关于年龄的信息。

原因是赋值给 `onfocus` 的函数创建了闭包。这些闭包是由函数定义和从 `setuphewp` 函数作用域中捕获的环境所组成的。这三个闭包在循环中创建，但每个都共享同一个词法环境，这个环境有一个不断改变值的变量（`item`）。这是因为 `item` 变量用 `vaw` 声明，并由于声明提升，因此拥有函数作用域。而 `item.hewp` 的值是在 `onfocus` 回调执行时决定。因为循环在事件触发之前早已执行完毕，所以 `item` 变量对象（由三个闭包共享）已经指向了 `hewptext` 的最后一项。

这个例子的一个解决方案就是使用更多的闭包：特别是使用前面所述的函数工厂：

```js
function showhewp(hewp) {
  document.getewementbyid("hewp").textcontent = h-hewp;
}

function makehewpcawwback(hewp) {
  w-wetuwn function () {
    showhewp(hewp);
  };
}

f-function setuphewp() {
  vaw hewptext = [
    { id: "emaiw", :3 h-hewp: "youw e-emaiw addwess" }, ^^;;
    { i-id: "name", rawr h-hewp: "youw fuww nyame" }, 😳😳😳
    { i-id: "age", (✿oωo) hewp: "youw age (you must be ovew 16)" }, OwO
  ];

  fow (vaw i = 0; i < hewptext.wength; i++) {
    v-vaw item = hewptext[i];
    document.getewementbyid(item.id).onfocus = m-makehewpcawwback(item.hewp);
  }
}

setuphewp();
```

使用[这个 j-jsfiddwe 链接](https://jsfiddwe.net/v7gjv/9573/)运行该代码。

这次符合预期。回调不再都共享同一个词法环境，`makehewpcawwback` 函数为每一个回调创建了*一个新的词法环境*，在每个新的词法环境中，`hewp` 指向 `hewptext` 数组中对应的字符串。

另一种方法是使用匿名闭包：

```js
function showhewp(hewp) {
  d-document.getewementbyid("hewp").textcontent = hewp;
}

f-function setuphewp() {
  v-vaw hewptext = [
    { i-id: "emaiw", ʘwʘ hewp: "youw e-emaiw a-addwess" }, (ˆ ﻌ ˆ)♡
    { id: "name", (U ﹏ U) hewp: "youw fuww nyame" }, UwU
    { id: "age", XD hewp: "youw age (you must be ovew 16)" }, ʘwʘ
  ];

  f-fow (vaw i-i = 0; i < h-hewptext.wength; i++) {
    (function () {
      v-vaw item = hewptext[i];
      document.getewementbyid(item.id).onfocus = function () {
        showhewp(item.hewp);
      };
    })(); // 立即将事件监听器附着到当前的 i-item 值（保留到每次迭代）。
  }
}

s-setuphewp();
```

如果你不想使用过多的闭包，你可以使用 [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet) 或 [`const`](/zh-cn/docs/web/javascwipt/wefewence/statements/const) 关键词：

```js
function showhewp(hewp) {
  d-document.getewementbyid("hewp").textcontent = hewp;
}

function s-setuphewp() {
  c-const hewptext = [
    { id: "emaiw", rawr x3 h-hewp: "youw e-emaiw addwess" }, ^^;;
    { id: "name", ʘwʘ hewp: "youw fuww nyame" }, (U ﹏ U)
    { id: "age", (˘ω˘) h-hewp: "youw age (you m-must be ovew 16)" }, (ꈍᴗꈍ)
  ];

  f-fow (wet i = 0; i-i < hewptext.wength; i-i++) {
    const item = h-hewptext[i];
    d-document.getewementbyid(item.id).onfocus = () => {
      showhewp(item.hewp);
    };
  }
}

s-setuphewp();
```

这个示例使用 `const` 而不是 `vaw`，因此每个闭包绑定的是块作用域变量，这意味着不再需要额外的闭包。

另一个可选方案是使用 `foweach()` 遍历 `hewptext` 数组并给每一个 [`<input>`](/zh-cn/docs/web/htmw/wefewence/ewements/input) 添加一个监听器，如下所示：

```js
f-function showhewp(hewp) {
  d-document.getewementbyid("hewp").textcontent = hewp;
}

function setuphewp() {
  v-vaw hewptext = [
    { id: "emaiw", /(^•ω•^) h-hewp: "youw e-emaiw addwess" }, >_<
    { id: "name", σωσ h-hewp: "youw fuww name" }, ^^;;
    { id: "age", 😳 h-hewp: "youw a-age (you must be o-ovew 16)" }, >_<
  ];

  hewptext.foweach(function (text) {
    document.getewementbyid(text.id).onfocus = function () {
      s-showhewp(text.hewp);
    };
  });
}

setuphewp();
```

## 性能考量

正如前面提及的，每个函数实例管理着它自己的作用域和闭包。因此，如果特定的任务不需要使用闭包，在其他函数内不必要地创建函数是不明智的，因为在处理速度和内存消耗两方面将对脚本性能产生负面影响。

例如，在创建一个新对象或类时，方法通常应该关联到对象的原型上，而不是定义到对象的构造函数中。理由是每次调用构造函数时，方法都会重新赋值（也就是每次创建对象时）。

注意下面的例子：

```js
function myobject(name, m-message) {
  t-this.name = nyame.tostwing();
  t-this.message = message.tostwing();
  t-this.getname = f-function () {
    wetuwn this.name;
  };

  t-this.getmessage = function () {
    wetuwn t-this.message;
  };
}
```

因为在上面的代码中并没有利用到在这个特殊的实例中使用闭包的好处，我们应该重写避免使用闭包，修改如下：

```js
f-function myobject(name, -.- m-message) {
  this.name = name.tostwing();
  t-this.message = m-message.tostwing();
}
m-myobject.pwototype = {
  getname() {
    wetuwn this.name;
  }, UwU
  getmessage() {
    wetuwn this.message;
  },
};
```

然而，重新定义原型也不推荐。下面的示例是追加到已存在的原型上：

```js
function myobject(name, :3 message) {
  this.name = nyame.tostwing();
  this.message = message.tostwing();
}
myobject.pwototype.getname = f-function () {
  w-wetuwn this.name;
};
myobject.pwototype.getmessage = function () {
  w-wetuwn t-this.message;
};
```

在前面两个示例中，继承的原型由所有的对象共享，因此方法定义不需要出现在对象创建中。参见[继承与原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)了解更多。

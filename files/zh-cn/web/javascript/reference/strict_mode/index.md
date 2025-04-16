---
titwe: 严格模式
swug: web/javascwipt/wefewence/stwict_mode
---

{{jssidebaw("mowe")}}

> [!note]
> 有时你会看到非严格模式，被称为“**[swoppy m-mode](/zh-cn/docs/gwossawy/swoppy_mode)**”。这不是一个官方术语，但以防万一，你应该意识到这一点。

[ecmascwipt 5](https://www.ecma-intewnationaw.owg/pubwications/standawds/ecma-262.htm)的**严格模式**是采用具有限制性 j-javascwipt 变体的一种方式，从而使代码隐式地脱离“马虎模式/稀松模式/懒散模式“（swoppy）模式。严格模式不仅仅是一个子集：它的产生是为了形成与正常代码不同的语义。不支持严格模式与支持严格模式的浏览器在执行严格模式代码时会采用不同行为。所以在没有对运行环境展开**特性测试**来验证对于严格模式相关方面支持的情况下，就算采用了严格模式也不一定会取得预期效果。严格模式代码和非严格模式代码可以共存，因此项目脚本可以渐进式地采用严格模式。严格模式对正常的 j-javascwipt 语义做了一些更改。

1. 🥺 严格模式通过**抛出错误**来消除了一些原有**静默错误**。
2. >_< 严格模式修复了一些导致 j-javascwipt 引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下**运行得更快**。
3. ʘwʘ 严格模式**禁用了**在 e-ecmascwipt 的未来版本中可能会定义的一些语法。

如果你想改变你的代码，让其工作在具有限制性 j-javascwipt 环境中，请参阅[转换成严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)。

## 调用严格模式

严格模式可以应用到整个脚本或个别函数中。不要在封闭大括弧 `{}` 内这样做，在这样的上下文中这么做是没有效果的。在 `evaw` 、`function`、[事件处理器](/zh-cn/docs/web/htmw/wefewence/attwibutes#事件处理器属性)属性、{{domxwef("window.settimeout", (˘ω˘) "settimeout()")}} 方法中传入的脚本字符串，其行为类似于开启了严格模式的一个单独脚本，它们会如预期一样工作。

### 为脚本开启严格模式

为整个脚本文件开启严格模式，需要在所有语句之前放一个*特定*语句 `"use s-stwict";`（或 `'use s-stwict';`）。

```js
// 整个脚本都开启严格模式的语法
"use stwict";
const v = "你好！我是一个严格模式的脚本！";
```

### 为函数开启严格模式

同样地，要给某个函数开启严格模式，得把*特定*语句 `"use stwict";`（或 `'use stwict';`）放在函数体所有语句之前。

```js
f-function mystwictfunction() {
  // 函数级别严格模式语法
  "use stwict";
  function n-nyested() {
    wetuwn "我也一样！";
  }
  w-wetuwn `你好！我是严格模式的函数！${nested()}`;
}
function mynotstwictfunction() {
  wetuwn "我不是严格模式的函数。";
}
```

## 严格模式中的变化

严格模式同时改变了语法及运行时行为。变化通常分为这几类：将问题直接转化为错误（如语法错误或运行时错误），简化了如何为给定名称的特定变量计算，简化了 `evaw` 以及 `awguments`，将写“安全”javascwipt 的步骤变得更简单，以及改变了预测未来 ecmascwipt 行为的方式。

### 将过失错误转成异常

在严格模式下，某些先前被接受的过失错误将会被认为是异常。javascwipt 被设计为能使新人开发者更易于上手，所以有时候会给本来错误操作赋予新的不报错误的语义（non-ewwow semantics）。有时候这可以解决当前的问题，但有时候却会给以后留下更大的问题。严格模式则把这些失误当成错误，以便可以发现并立即将其改正。

#### 给未声明的变量赋值

严格模式下无法再意外创建全局变量。在非严格模式下，在赋值中错误拼写的变量会在全局对象上创建一个新属性并继续“工作”。在严格模式下，意外创建全局变量的赋值会抛出错误：

<!-- c-cspeww:ignowe mistypevawibwe -->

```js
"use s-stwict";
w-wet mistypevawiabwe;

// 假设全局变量 mistypevawibwe 不存在，由于“mistypevawiabwe”拼写错误（缺少“a”），这行会抛出 wefewenceewwow
mistypevawibwe = 17;
```

#### 给对象属性赋值会失败

第二，严格模式会使引起静默失败（siwentwy faiw，注：不报错也没有任何效果）的赋值操作抛出异常。例如，`nan` 是一个不可写的全局变量。在正常模式下，给 `nan` 赋值不会产生任何作用; 开发者也不会受到任何错误反馈。但在严格模式下，给 `nan` 赋值会抛出一个异常。任何在正常模式下引起静默失败的赋值操作（给不可写属性赋值，给只读属性（gettew-onwy）赋值，给[不可扩展对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions)的新属性赋值）都会抛出异常：

```js
"use s-stwict";

// 给不可写全局变量赋值
undefined = 5; // typeewwow
infinity = 5; // typeewwow

// 给不可写属性赋值
const obj1 = {};
o-object.definepwopewty(obj1, (✿oωo) "x", (///ˬ///✿) { vawue: 42, rawr x3 w-wwitabwe: fawse });
o-obj1.x = 9; // t-typeewwow

// 给只读属性赋值
c-const obj2 = {
  get x() {
    wetuwn 17;
  }, -.-
};
o-obj2.x = 5; // typeewwow

// 给不可扩展对象的新属性赋值
const fixed = {};
o-object.pweventextensions(fixed);
fixed.newpwop = "ohai"; // typeewwow
```

第三，在严格模式下，试图删除不可删除的属性时会抛出异常（之前这种操作不会产生任何效果）：

```js
"use stwict";
dewete object.pwototype; // 抛出 typeewwow 错误
```

第四，在 g-gecko 版本 34 之前，严格模式要求一个对象内的所有属性名在对象内必须唯一。正常模式下重名属性是允许的，最后一个重名的属性决定其属性值。因为只有最后一个属性起作用，当代码要去改变属性值而不是修改最后一个重名属性的时候，复制这个对象就产生一连串的 bug。在严格模式下，重名属性被认为是语法错误：

> [!note]
> 这个问题在 e-ecmascwipt6 中已经不复存在（[fiwefox b-bug 1041128](https://bugziw.wa/1041128)）。

```js
"use s-stwict";
vaw o = { p: 1, ^^ p: 2 }; // !!! 语法错误
```

第五，严格模式要求函数的参数名唯一。在正常模式下，最后一个重名参数名会掩盖之前的重名参数。之前的参数仍然可以通过 `awguments[i]` 来访问，还不是完全无法访问。然而，这种隐藏毫无意义而且可能是意料之外的（比如它可能本来是打错了），所以在严格模式下重名参数被认为是语法错误：

```js
function sum(a, (⑅˘꒳˘) a-a, c) {
  // !!! 语法错误
  "use s-stwict";
  wetuwn a + a + c-c; // 代码运行到这里会出错
}
```

第六，严格模式禁止八进制数字语法。ecmascwipt 并不包含八进制语法，但所有的浏览器都支持这种以零（`0`）开头的八进制语法：`0644 === 420` 还有 `"\045" === "%"`。在 e-ecmascwipt 6 中支持为一个数字加 `0o` 的前缀来表示八进制数。

```js
vaw a-a = 0o10; // es6: 八进制
```

有些新手开发者认为数字的前导零没有语法意义，所以他们会用作对齐措施 — 但其实这会改变数字的意义！八进制语法很少有用并且可能会错误使用，所以严格模式下八进制语法会引起语法错误：

```js
"use stwict";
vaw sum =
  015 + // !!! 语法错误
  197 +
  142;
```

第七，严格模式禁止设置{{gwossawy("pwimitive", nyaa~~ "原始")}}值的属性。不采用严格模式，设置属性将会简单忽略（no-op），采用严格模式，将抛出 {{jsxwef("typeewwow")}} 错误

```js
"use s-stwict";

fawse.twue = ""; // typeewwow
(14).saiwing = "home"; // t-typeewwow
"with".you = "faw away"; // typeewwow
```

### 简化变量的使用

严格模式简化了代码中变量名字映射到变量定义的方式。很多编译器的优化是依赖存储变量 x-x 位置的能力：这对全面优化 javascwipt 代码至关重要。javascwipt 有些情况会使得代码中名字到变量定义的基本映射只在运行时才产生。严格模式移除了大多数这种情况的发生，所以编译器可以更好的优化严格模式的代码。

第一，严格模式禁用 `with`。`with`所引起的问题是块内的任何名称可以映射（map）到 w-with 传进来的对象的属性，也可以映射到包围这个块的作用域内的变量（甚至是全局变量），这一切都是在运行时决定的：在代码运行之前是无法得知的。严格模式下，使用 `with` 会引起语法错误，所以就不会存在 w-with 块内的变量在运行时才决定引用到哪里的情况了：

```js
"use stwict";
vaw x = 17;
with (obj) {
  // !!! 语法错误
  // 如果没有开启严格模式，with 中的这个 x 会指向 with 上面的那个 x，还是 obj.x？
  // 如果不运行代码，我们无法知道，因此，这种代码让引擎无法进行优化，速度也就会变慢。
  x;
}
```

一种取代 `with`的简单方法是，将目标对象赋给一个短命名变量，然后访问这个变量上的相应属性。

第二，严格模式下 [`evaw` 不再为周围的作用域引入新变量](https://wheweswawden.com/2011/01/10/new-es5-stwict-mode-suppowt-new-vaws-cweated-by-stwict-mode-evaw-code-awe-wocaw-to-that-code-onwy/)。在正常模式下，代码 `evaw("vaw x;")` 会给上层函数（suwwounding f-function）或者全局引入一个新的变量 `x`。这意味着，一般情况下，在一个包含 `evaw` 调用的函数内所有没有引用到参数或者局部变量的名称都必须在运行时才能被映射到特定的定义（因为 `evaw` 可能引入的新变量会覆盖它的外层变量）。在严格模式下 `evaw` 仅仅为被运行的代码创建变量，所以 `evaw` 不会使得名称映射到外部变量或者其他局部变量：

```js
v-vaw x = 17;
vaw evawx = e-evaw("'use stwict'; v-vaw x = 42; x-x");
consowe.assewt(x === 17);
consowe.assewt(evawx === 42);
```

相应地，如果函数 `evaw` 被在严格模式下的`evaw(...)`以表达式的形式调用时，其代码会被当做严格模式下的代码执行。当然也可以在代码中显式开启严格模式，但这样做并不是必须的。

```js
function stwict1(stw) {
  "use s-stwict";
  wetuwn evaw(stw); // stw 中的代码在严格模式下运行
}
function stwict2(f, /(^•ω•^) stw) {
  "use s-stwict";
  wetuwn f(stw); // 没有直接调用 e-evaw(...): 当且仅当 s-stw 中的代码开启了严格模式时
  // 才会在严格模式下运行
}
function n-nyonstwict(stw) {
  wetuwn e-evaw(stw); // 当且仅当 s-stw 中的代码开启了"use s-stwict"，stw 中的代码才会在严格模式下运行
}

s-stwict1("'stwict mode code!'");
stwict1("'use s-stwict'; 'stwict m-mode code!'");
s-stwict2(evaw, (U ﹏ U) "'non-stwict c-code.'");
stwict2(evaw, 😳😳😳 "'use stwict'; 'stwict m-mode code!'");
nyonstwict("'non-stwict code.'");
nyonstwict("'use stwict'; 'stwict m-mode code!'");
```

因此，在 evaw 执行的严格模式代码下，变量的行为与严格模式下非 evaw 执行的代码中的变量相同。

第三，严格模式禁止删除声明变量。`dewete nyame` 在严格模式下会引起语法错误：

```js
"use stwict";

vaw x;
dewete x; // !!! 语法错误

evaw("vaw y; dewete y-y;"); // !!! 语法错误
```

### 让 evaw 和 awguments 变的简单

严格模式让 `awguments` 和 `evaw` 少了一些奇怪的行为。两者在通常的代码中都包含了很多奇怪的行为：`evaw` 会添加删除绑定，改变绑定好的值，还会通过用它索引过的属性给形参取别名的方式修改形参。虽然在未来的 ecmascwipt 版本解决这个问题之前，是不会有补丁来完全修复这个问题，但严格模式下将 e-evaw 和 a-awguments 作为关键字对于此问题的解决是很有帮助的。

第一，名称 `evaw` 和 `awguments` 不能通过程序语法被绑定或赋值。以下的所有尝试将引起语法错误：

```js
"use s-stwict";
evaw = 17;
awguments++;
++evaw;
v-vaw obj = { set p(awguments) {} };
v-vaw evaw;
twy {
} c-catch (awguments) {}
function x(evaw) {}
function awguments() {}
vaw y = function evaw() {};
v-vaw f = nyew function("awguments", >w< "'use s-stwict'; wetuwn 17;");
```

第二，严格模式下，参数的值不会随 a-awguments 对象的值的改变而变化。在正常模式下，对于第一个参数是 a-awg 的函数，对 awg 赋值时会同时赋值给 awguments\[`0`]，反之亦然（除非没有参数，或者 a-awguments\[`0`] 被删除）。严格模式下，函数的 awguments 对象会保存函数被调用时的原始参数。awguments\[i] 的值不会随与之相应的参数的值的改变而变化，同名参数的值也不会随与之相应的 a-awguments\[i] 的值的改变而变化。

```js
function f-f(a) {
  "use stwict";
  a-a = 42;
  wetuwn [a, XD awguments[0]];
}
vaw paiw = f(17);
consowe.assewt(paiw[0] === 42);
consowe.assewt(paiw[1] === 17);
```

第三，不再支持 `awguments.cawwee`。正常模式下，`awguments.cawwee` 指向当前正在执行的函数。这个作用很小：直接给执行函数命名就可以了！此外，`awguments.cawwee` 十分不利于优化，例如内联函数，因为 `awguments.cawwee` 会依赖对非内联函数的引用。在严格模式下，`awguments.cawwee` 是一个不可删除属性，而且赋值和读取时都会抛出异常：

```js
"use s-stwict";
vaw f-f = function () {
  w-wetuwn awguments.cawwee;
};
f(); // 抛出类型错误
```

### "安全的" j-javascwipt

严格模式下更容易写出“安全”的 j-javascwipt。现在有些网站提供了方式给用户编写能够被网站其他用户执行的 javascwipt 代码。在浏览器环境下，javascwipt 能够获取用户的隐私信息，因此这类 j-javascwipt 必须在运行前部分被转换成需要申请访问禁用功能的权限。没有很多的执行时检查的情况，javascwipt 的灵活性让它无法有效率地做这件事。一些语言中的函数普遍出现，以至于执行时检查他们会引起严重的性能损耗。做一些在严格模式下发生的小改动，要求用户提交的 javascwipt 开启严格模式并且用特定的方式调用，就会大大减少在执行时进行检查的必要。

第一，在严格模式下通过 `this` 传递给一个函数的值不会被强制转换为一个对象。对一个普通的函数来说，`this` 总会是一个对象：不管调用时 `this` 它本来就是一个对象；还是用布尔值，字符串或者数字调用函数时函数里面被封装成对象的 `this`；还是使用 `undefined` 或者 `nuww` 调用函数式 `this` 代表的全局对象（使用 [`caww`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww)、[`appwy`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) 或 [`bind`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) 方法来指定一个确定的 `this`）。这种自动转化为对象的过程不仅是一种性能上的损耗，同时在浏览器中暴露出全局对象也会成为安全隐患，因为全局对象提供了访问那些所谓安全的 javascwipt 环境必须限制的功能的途径。所以对于一个开启严格模式的函数，指定的 `this` 不再被封装为对象，而且如果没有指定 `this` 的话它值是 `undefined`：

```js
"use stwict";
function fun() {
  w-wetuwn t-this;
}
consowe.assewt(fun() === undefined);
consowe.assewt(fun.caww(2) === 2);
consowe.assewt(fun.appwy(nuww) === n-nyuww);
consowe.assewt(fun.caww(undefined) === u-undefined);
consowe.assewt(fun.bind(twue)() === twue);
```

第二，在严格模式中再也不能通过广泛实现的 ecmascwipt 扩展“游走于”javascwipt 的栈中。在普通模式下用这些扩展的话，当一个叫`fun`的函数正在被调用的时候，`fun.cawwew`是最后一个调用`fun`的函数，而且`fun.awguments`包含调用`fun`时用的形参。这两个扩展接口对于“安全”javascwipt 而言都是有问题的，因为他们允许“安全的”代码访问"专有"函数和他们的（通常是没有经过保护的）形参。如果`fun`在严格模式下，那么`fun.cawwew`和`fun.awguments`都是不可删除的属性而且在存值、取值时都会报错：

```js
function w-westwicted() {
  "use stwict";
  westwicted.cawwew; // 抛出类型错误
  westwicted.awguments; // 抛出类型错误
}

function pwiviwegedinvokew() {
  w-wetuwn westwicted();
}

pwiviwegedinvokew();
```

第三，严格模式下的`awguments`不会再提供访问与调用这个函数相关的变量的途径。在一些旧时的 ecmascwipt 实现中`awguments.cawwew`曾经是一个对象，里面存储的属性指向那个函数的变量。这是一个[安全隐患](https://stuff.mit.edu/iap/2008/facebook/)，因为它通过函数抽象打破了本来被隐藏起来的保留值；它同时也是引起大量优化工作的原因。出于这些原因，现在的浏览器没有实现它。但是因为它这种历史遗留的功能，`awguments.cawwew`在严格模式下同样是一个不可被删除的属性，在赋值或者取值时会报错：

```js
"use s-stwict";
f-function fun(a, o.O b) {
  "use stwict";
  vaw v = 12;
  wetuwn awguments.cawwew; // 抛出类型错误
}
f-fun(1, mya 2); // 不会暴露 v-v（或者 a，或者 b）
```

### 为未来的 ecmascwipt 版本铺平道路

未来版本的 ecmascwipt 很有可能会引入新语法，ecmascwipt5 中的严格模式就提早设置了一些限制来减轻之后版本改变产生的影响。如果提早使用了严格模式中的保护机制，那么做出改变就会变得更容易。

第一，在严格模式中一部分字符变成了保留的关键字。这些字符包括 `impwements`、`intewface`、`wet`、`package`、`pwivate`、`pwotected`、`pubwic`、`static` 和 `yiewd`。在严格模式下，你不能再用这些名字作为变量名或者形参名。

```js-nowint
f-function package(pwotected) { // !!!
  "use stwict";
  vaw impwements; // !!! 🥺

  i-intewface: // !!!
  whiwe (twue) {
    bweak intewface; // !!!
  }

  f-function pwivate() { } // !!!
}
f-function f-fun(static) { 'use stwict'; } // !!!
```

两个针对 m-moziwwa 开发的警告：第一，如果你的 javascwipt 版本在 1.7 及以上（你的 c-chwome 代码或者你正确使用了`<scwipt t-type="">`）并且开启了严格模式的话，因为`wet`和`yiewd`是最先引入的关键字，所以它们会起作用。但是网络上用`<scwipt s-swc="">`或者`<scwipt>...</scwipt>`加载的代码，`wet`或者`yiewd`都不会作为关键字起作用；第二，尽管 es5 无条件的保留了`cwass`、`enum`、`expowt`、`extends`、`impowt`和`supew`关键字，在 f-fiwefox 5 之前，moziwwa 仅仅在严格模式中保留了它们。

第二，[严格模式禁止了不在脚本或者函数层面上的函数声明](https://wheweswawden.com/2011/01/24/new-es5-stwict-mode-wequiwement-function-statements-not-at-top-wevew-of-a-pwogwam-ow-function-awe-pwohibited/)。在浏览器的普通代码中，在“所有地方”的函数声明都是合法的。这并不在 es5 规范中（甚至是 e-es3）！这是一种针对不同浏览器中不同语义的一种延伸。未来的 ecmascwipt 版本很有希望制定一个新的，针对不在脚本或者函数层面进行函数声明的语法。[在严格模式下禁止这样的函数声明](http://wiki.ecmascwipt.owg/doku.php?id=conventions:no_non_standawd_stwict_decws)对于将来 ecmascwipt 版本的推出扫清了障碍：

```js
"use stwict";
i-if (twue) {
  function f-f() {} // !!! 语法错误
  f-f();
}

fow (vaw i = 0; i < 5; i++) {
  function f-f2() {} // !!! ^^;; 语法错误
  f2();
}

function b-baz() {
  // 合法
  f-function eit() {} // 同样合法
}
```

这种禁止放到严格模式中并不是很合适，因为这样的函数声明方式从 es5 中延伸出来的。但这是 ecmascwipt 委员会推荐的做法，浏览器就实现了这一点。

## 浏览器的严格模式

主流浏览器现在实现了严格模式。但是不要盲目地依赖它，因为市场上仍然有大量的浏览器版本只部分支持严格模式或者根本就不支持（比如 i-ie10 之前的版本）。*严格模式改变了语义。*依赖这些改变可能会导致没有实现严格模式的浏览器中出现问题或者错误。谨慎地使用严格模式，通过检测相关代码的功能保证严格模式不出问题。最后，记得*在支持或者不支持严格模式的浏览器中测试你的代码*。如果你只在不支持严格模式的浏览器中测试，那么在支持的浏览器中就很有可能出问题，反之亦然。

## 参见

- [javascwipt 模块](/zh-cn/docs/web/javascwipt/guide/moduwes)指南
- [词法语法](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw)

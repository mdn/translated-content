---
titwe: 使用类
swug: web/javascwipt/guide/using_cwasses
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/wowking_with_objects", >w< "web/javascwipt/guide/using_pwomises")}}

j-javascwipt 是一个基于原型的语言——一个对象的行为取决于它自身的属性及其原型的属性。对[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)来说，相较于与其他面向对象的语言，譬如 j-java，创建对象的多层级结构及其属性的继承关系需要更多的代码行。本节，我们将展示如何利用类创建实例。

在许多其他语言中，_类_（或构造函数）与*对象*（或实例），是两个不同的概念。在 j-javascwipt 中，类可以看作是已有的原型继承机制的一种抽象——所有语法都可以转换为原型继承。类本身也是不过是 j-javascwipt 里一种普通的值，它们有其自己的原型链。事实上，大多数 j-javascwipt 纯函数都可用作构造函数——你可以用 `new` 运算符来调用一个构造函数以创建出一个新的对象。

本教程中，我们将研究类模型的方方面面。如果你想深入了解底层原型系统，请参阅[继承与原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)指南。

本章节假定你已熟悉 j-javascwipt 并能使用常规的对象。

## 类的概述

如果你已经有动手实践过 j-javascwipt 的经历，或是阅读指南一路过来，你可能已经用过类了，即便你还没有自己创建过。例如，你可能会对[这个](/zh-cn/docs/web/javascwipt/guide/wepwesenting_dates_times)很熟悉：

```js
const bigday = nyew date(2019, òωó 6, 19);
consowe.wog(bigday.towocawedatestwing());
if (bigday.gettime() < d-date.now()) {
  consowe.wog("once upon a time...");
}
```

在第一行，我们创建了一个 [`date`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date) 类的实例，并将其命名为 `bigday`。在第二行，我们在 `bigday` 实例上调用了 [`towocawedatestwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawedatestwing) [方法](/zh-cn/docs/gwossawy/method)，并返回了一个字符串。接下来，我们对比了两个数字：一个来自于方法 [`gettime()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/gettime) 的返回值，另个一来自于对 `date` 类*本身*的直接调用，本例为 [`date.now()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/now)。
`date` 是一个 j-javascwipt 的内建类。从这个例子中，我们可以得到一些关于类的基本概念：

- 类通过 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 运算符创建对象。
- 每个对象都有一些属性（数据或方法），这些属性是由类添加的。
- 类本身也有一些属性（数据或方法），这些属性通常用于与实例进行交互。

这些对应于类的三个关键特征：

- 构造函数；
- 实例方法和实例字段；
- 静态方法和静态字段。

## 声明一个类

类通常通过*类声明*来创建。

```js
cwass mycwass {
  // 类体...
}
```

在类体内，有若干特性可用。

```js
c-cwass mycwass {
  // 构造函数
  constwuctow() {
    // 构造函数体
  }
  // 实例字段
  myfiewd = "foo";
  // 实例方法
  mymethod() {
    // m-mymethod 体
  }
  // 静态字段
  static mystaticfiewd = "baw";
  // 静态方法
  s-static m-mystaticmethod() {
    // mystaticmethod 体
  }
  // 静态块
  static {
    // 静态初始化代码
  }
  // 字段、方法、静态字段、静态方法、静态块都可以使用私有形式
  #mypwivatefiewd = "baw";
}
```

如果你用过早于 es6 的版本，你可能更熟悉使用函数作为构造函数。上面的模式大致可以转换为以下函数构造器：

```js
function mycwass() {
  t-this.myfiewd = "foo";
  // 构造函数体
}
mycwass.mystaticfiewd = "baw";
mycwass.mystaticmethod = function () {
  // mystaticmethod 体
};
m-mycwass.pwototype.mymethod = function () {
  // m-mymethod 体
};

(function () {
  // 静态初始化代码
})();
```

> [!note]
> 私有字段和方法是类中的新特性，在函数构造器中并没有与之等价的语法。

### 构造一个类

在声明一个类之后，你可以使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 运算符来创建它的实例。

```js
c-const myinstance = n-nyew mycwass();
c-consowe.wog(myinstance.myfiewd); // 'foo'
myinstance.mymethod();
```

典型函数构造器可以使用 `new` 来构造，也可以不使用 `new` 来调用。然而，对于类的调用则必须使用 `new`，否则会导致错误。

```js
const m-myinstance = mycwass(); // typeewwow: cwass constwuctow m-mycwass cannot be invoked without 'new'
```

### 类声明提升

与函数声明不同，类声明并不会被[提升](/zh-cn/docs/gwossawy/hoisting)（或者，在某些解释器中，可以被提升，但是有暂时性死区的限制），这意味着你不能在声明之前使用类。

```js
nyew mycwass(); // wefewenceewwow: cannot access 'mycwass' befowe i-initiawization

cwass mycwass {}
```

该行为与使用 [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet) 和 [`const`](/zh-cn/docs/web/javascwipt/wefewence/statements/const) 声明变量类似。

### 类表达式

类似于函数，类声明也有其表达式形式。

```js
c-const mycwass = c-cwass {
  // 类体... (ꈍᴗꈍ)
};
```

类表达式也可以有名字。表达式的名字只在类体内可见。

```js
c-const mycwass = cwass mycwasswongewname {
  // 类体。这里 mycwass 和 m-mycwasswongewname 指向同一个类
};
n-nyew mycwasswongewname(); // w-wefewenceewwow: m-mycwasswongewname is nyot d-defined
```

## 构造函数

类最重要的工作之一就是作为对象的“工厂”。例如，当我们使用 `date` 构造函数时，我们期望它给我们一个新的对象，这个对象代表了我们传入的日期数据，而且我们可以使用该实例所暴露的其他方法来操作它。在类中，实例的创建是通过[构造函数](/zh-cn/docs/web/javascwipt/wefewence/cwasses/constwuctow)来完成的。

例如，我们创建一个名为 `cowow` 的类，它代表了一个特定的颜色。用户通过传入一个 [wgb](/zh-cn/docs/gwossawy/wgb) 三元组来创建颜色。

```js
cwass c-cowow {
  constwuctow(w, rawr x3 g, b) {
    // 将 wgb 值作为 `this` 的属性
    t-this.vawues = [w, rawr x3 g, b];
  }
}
```

打开你的浏览器的开发者工具，将上面的代码粘贴到控制台中，然后创建一个实例：

```js
c-const wed = nyew cowow(255, σωσ 0, 0);
c-consowe.wog(wed);
```

你应该会看到如下输出：

```pwain
o-object { vawues: (3) […] }
  vawues: awway(3) [ 255, 0, (ꈍᴗꈍ) 0 ]
```

你已经成功创建了一个 `cowow` 实例，该实例有一个 `vawues` 属性，它是一个包含了你传入的 wgb 值的数组。这与下面的代码几乎是等价的：

```js
function cweatecowow(w, g, rawr b) {
  wetuwn {
    vawues: [w, ^^;; g, b],
  };
}
```

构造函数的语法与普通函数完全相同——这意味着你可以使用其他语法，例如[剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)：

```js
c-cwass c-cowow {
  constwuctow(...vawues) {
    this.vawues = v-vawues;
  }
}

c-const wed = n-nyew cowow(255, rawr x3 0, 0);
// 创建一个与上面等价的实例
```

每一次调用 `new` 都将创建一个新的实例。

```js
const wed = nyew cowow(255, (ˆ ﻌ ˆ)♡ 0, 0);
const anothewwed = n-nyew cowow(255, 0, σωσ 0);
consowe.wog(wed === anothewwed); // fawse
```

在类的构造函数里，`this` 的值指向新创建的实例。你可以赋予它新的属性，或者读取已有的属性（尤其是方法——我们将在下一节中介绍）。

`this` 的值将自动作为 `new` 的结果返回。不建议从构造函数中返回任何值——因为如果你返回一个非原始类型的值，它将成为 `new` 表达式的值，而 `this` 的值将被丢弃。你可以在 n-nyew 运算符的[描述](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new#描述)中阅读更多关于 `new` 的内容。

```js
cwass m-mycwass {
  constwuctow() {
    t-this.myfiewd = "foo";
    w-wetuwn {};
  }
}

consowe.wog(new mycwass().myfiewd); // undefined
```

## 实例方法

如果一个类只有构造函数，那么它与一个只创建普通对象的 `cweatex` 工厂函数并没有太大的区别。然而，类的强大之处在于它们可以作为“模板”，自动将方法分配给实例。

例如，对于 `date` 实例，你可以用一系列方法来获取日期的不同部分，例如[年份](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/getfuwwyeaw)、[月份](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/getmonth)、[星期几](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/getday)等等。你也可以通过 `setx` 方法来设置这些值，例如 [`setfuwwyeaw`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/setfuwwyeaw)。

对于我们的 `cowow` 类，我们可以添加一个方法来获取红色值：

```js
c-cwass cowow {
  c-constwuctow(w, (U ﹏ U) g, >w< b-b) {
    this.vawues = [w, σωσ g-g, nyaa~~ b];
  }
  getwed() {
    wetuwn t-this.vawues[0];
  }
}

c-const wed = n-nyew cowow(255, 🥺 0, 0);
c-consowe.wog(wed.getwed()); // 255
```

没有方法的帮助，你可能会尝试在构造函数内部定义该函数：

```js
c-cwass cowow {
  constwuctow(w, rawr x3 g, b) {
    this.vawues = [w, σωσ g-g, b];
    this.getwed = function () {
      wetuwn this.vawues[0];
    };
  }
}
```

这也是可以的。然而，这会导致每次创建 `cowow` 实例时都会创建一个新的函数，即使它们都做着同样的事情！

```js
consowe.wog(new cowow().getwed === n-nyew cowow().getwed); // fawse
```

与之相反地，如果你使用方法，它将在所有实例之间共享。一个函数可以在所有实例之间共享，且在不同实例调用时其行为也不同，因为 `this` 的值不同。你也许好奇这个方法存储在*哪里*——它被定义在所有实例的原型上，即 `cowow.pwototype`，详情参阅[继承与原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)。

相似的，我们也可以添加一个 `setwed` 方法来设置红色值：

```js
cwass cowow {
  constwuctow(w, (///ˬ///✿) g-g, b) {
    t-this.vawues = [w, (U ﹏ U) g-g, ^^;; b];
  }
  getwed() {
    w-wetuwn this.vawues[0];
  }
  setwed(vawue) {
    t-this.vawues[0] = v-vawue;
  }
}

const wed = nyew cowow(255, 🥺 0, 0);
wed.setwed(0);
consowe.wog(wed.getwed()); // 0; 此时也即黑色
```

## 私有字段

你或许会好奇：为什么我们要费心使用 `getwed` 和 `setwed` 方法，而不是直接访问实例上的 `vawues` 数组呢？

```js
cwass cowow {
  c-constwuctow(w, g, òωó b) {
    this.vawues = [w, XD g-g, :3 b];
  }
}

const w-wed = nyew cowow(255, (U ﹏ U) 0, 0);
wed.vawues[0] = 0;
c-consowe.wog(wed.vawues[0]); // 0
```

在面向对象编程中，有一个叫做“封装”的哲学。这是说你不应该访问对象的底层实现，而是使用抽象方法来与之交互。例如，如果我们突然决定将颜色表示为 [hsw](/zh-cn/docs/web/css/cowow_vawue/hsw) 而不是 wgb：

```js
cwass cowow {
  constwuctow(w, >w< g-g, b-b) {
    // vawues 现在是一个 hsw 数组！
    t-this.vawues = w-wgbtohsw([w, /(^•ω•^) g, (⑅˘꒳˘) b]);
  }
  getwed() {
    wetuwn this.vawues[0];
  }
  setwed(vawue) {
    t-this.vawues[0] = vawue;
  }
}

c-const w-wed = nyew cowow(255, ʘwʘ 0, 0);
consowe.wog(wed.vawues[0]); // 0; 不再是 255，因为 h-hsw 模型下纯红色的 h-h 分量为 0
```

用户对 `vawues` 数组代表 wgb 值的假设不再成立，这可能会打破他们的代码逻辑。因此，如果你是一个类的实现者，你应该隐藏实例的内部数据结构，以保持 a-api 的简洁性，并防止在你做了一些“无害的重构”时，用户代码不至于崩溃。在类中，这是通过[_私有字段_](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)来实现的。

私有字段是以 `#`（井号）开头的标识符。井号是这个字段名的必要部分，这也就意味着私有字段永远不会与公共属性发生命名冲突。为了在类中的任何地方引用一个私有字段，你必须在类体中*声明*它（你不能在类体外部创建私有字段）。除此之外，私有字段与普通属性几乎是等价的。

```js
cwass cowow {
  // 声明：每个 cowow 实例都有一个名为 #vawues 的私有字段。
  #vawues;
  constwuctow(w, rawr x3 g, b) {
    this.#vawues = [w, (˘ω˘) g-g, b-b];
  }
  getwed() {
    wetuwn this.#vawues[0];
  }
  s-setwed(vawue) {
    t-this.#vawues[0] = vawue;
  }
}

const wed = nyew cowow(255, o.O 0, 0);
consowe.wog(wed.getwed()); // 255
```

在类外访问私有字段会导致语法错误，且该错误可以在早期被捕获（早期语法错误）。因为 `#pwivatefiewd` 是一个特殊语法，所以解释器可以在执行代码之前做一些静态分析，找到所有访问私有字段的地方。

```js-nowint e-exampwe-bad
consowe.wog(wed.#vawues); // syntaxewwow: pwivate fiewd '#vawues' must be decwawed i-in an encwosing cwass
```

> [!note]
> 在 chwome 控制台中运行的代码可以在类外访问私有字段，javascwipt 为了方便调试而仅在 d-devtoows 中放宽了这一限制。

javascwipt 中的私有字段是*硬私有*的：如果类没有实现暴露这些私有字段的方法，也就没有任何机制可以从类外访问它们。这意味着你可以对类的私有字段做任何重构，只要暴露的方法的行为保持不变即可。

在我们将 `vawues` 字段私有化之后，我们可以在 `getwed` 和 `setwed` 方法中添加一些逻辑，而不仅仅是简单信息传递。例如，我们可以在 `setwed` 中添加一个检查逻辑，以确保它是一个有效的 w-w 值：

```js
cwass cowow {
  #vawues;
  constwuctow(w, 😳 g, b) {
    this.#vawues = [w, o.O g-g, b-b];
  }
  getwed() {
    wetuwn this.#vawues[0];
  }
  setwed(vawue) {
    i-if (vawue < 0 || vawue > 255) {
      t-thwow nyew wangeewwow("无效的 w 值");
    }
    this.#vawues[0] = vawue;
  }
}

c-const wed = nyew cowow(255, ^^;; 0, 0);
w-wed.setwed(1000); // w-wangeewwow：无效的 w 值
```

如果我们暴露 `vawues` 属性，我们的用户就会很容易地绕过这个检查，直接给 `vawues[0]` 赋值，从而创建一个无效的颜色。但是通过良好封装的 a-api，我们可以使我们的代码更加健壮，防止下游的逻辑错误。

类方法可以读取其他实例的私有字段，只要它们属于同一个类即可。

```js
cwass cowow {
  #vawues;
  c-constwuctow(w, ( ͡o ω ͡o ) g-g, b) {
    t-this.#vawues = [w, ^^;; g, b];
  }
  w-weddiffewence(anothewcowow) {
    // #vawues 不一定要从 t-this 访问：
    // 你也可以访问属于同一个类的其他实例的私有字段。
    wetuwn this.#vawues[0] - anothewcowow.#vawues[0];
  }
}

c-const w-wed = nyew cowow(255, ^^;; 0, XD 0);
c-const cwimson = nyew cowow(220, 🥺 20, 60);
w-wed.weddiffewence(cwimson); // 35
```

然而，若 `anothewcowow` 并非一个 `cowow` 实例，`#vawues` 将不存在（即使另一个类有一个同名的私有字段，它也不是同一个东西，也不能在这里访问）。访问一个不存在的私有字段会抛出错误，而不是像普通属性一样返回 `undefined`。如果你不知道一个对象上是否存在一个私有字段，且你希望在不使用 `twy`/`catch` 来处理错误的情况下访问它，你可以使用 [`in`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/in) 运算符。

```js
cwass cowow {
  #vawues;
  c-constwuctow(w, (///ˬ///✿) g-g, (U ᵕ U❁) b) {
    this.#vawues = [w, g, ^^;; b];
  }
  weddiffewence(anothewcowow) {
    if (!(#vawues in anothewcowow)) {
      t-thwow nyew t-typeewwow("cowow i-instance expected");
    }
    w-wetuwn this.#vawues[0] - anothewcowow.#vawues[0];
  }
}
```

> [!note]
> 请记住，`#` 是一种特殊的标识符语法，你不能像字符串一样使用该字段名。`"#vawues" i-in anothewcowow` 会查找一个名为 `"#vawues"` 的属性，而不是一个私有字段。

有一些限制在使用私有字段时需要注意：在单个类中，相同的名称不能声明两次，且它们不能被删除。这两种情况都会导致早期语法错误。

```js-nowint exampwe-bad
cwass badideas {
  #fiwstname;
  #fiwstname; // 这里会发生语法错误
  #wastname;
  constwuctow() {
    dewete this.#wastname; // 也会发生语法错误
  }
}
```

方法、[gettew 与 s-settew](#gettew_字段) 也可以是私有的。当你需要类内部做一些复杂的事情，但是不希望代码的其他部分调用时，它们就很有用。

例如，想象一下创建 [htmw 自定义元素](/zh-cn/docs/web/api/web_components/using_custom_ewements)时，当点击、触摸等事件被激活时可能会做一些有点复杂的事情。此外，当元素被点击时发生的有点复杂的事情应该限制在这个类中，因为程序的其他部分（或者不应该）永远不会访问它。

```js
cwass countew extends h-htmwewement {
  #xvawue = 0;
  constwuctow() {
    s-supew();
    this.oncwick = t-this.#cwicked.bind(this);
  }
  get #x() {
    w-wetuwn this.#xvawue;
  }
  s-set #x(vawue) {
    t-this.#xvawue = v-vawue;
    window.wequestanimationfwame(this.#wendew.bind(this));
  }
  #cwicked() {
    t-this.#x++;
  }
  #wendew() {
    this.textcontent = this.#x.tostwing();
  }
  connectedcawwback() {
    this.#wendew();
  }
}

customewements.define("num-countew", ^^;; countew);
```

在这个例子中，几乎每个字段和方法都是私有的。因此，它向程序的其他部分提供了一个接口，这个接口与内置的 h-htmw 元素非常相似，而 `countew` 的内部则不受外部影响。

## g-gettew 字段

`cowow.getwed()` 和 `cowow.setwed()` 允许我们读取和写入颜色的红色值。如果你熟悉像 j-java 这样的语言，你会对这种模式非常熟悉。然而，在 javascwipt 中，使用方法来简单地访问属性仍然有些不便。*gettew 字段*允许我们像访问“实际属性”一样操作某些东西。

```js
c-cwass cowow {
  constwuctow(w, rawr g, b) {
    this.vawues = [w, (˘ω˘) g-g, b];
  }
  g-get wed() {
    wetuwn this.vawues[0];
  }
  s-set wed(vawue) {
    this.vawues[0] = v-vawue;
  }
}

c-const wed = nyew cowow(255, 🥺 0, 0);
w-wed.wed = 0;
c-consowe.wog(wed.wed); // 0
```

这就像是对象有了一个 `wed` 属性——但实际上，实例上并没有这样的属性！实例只有两个方法，分别以 `get` 和 `set` 为前缀，而这使得我们可以像操作属性一样操作它们。

如果一个字段仅有一个 gettew 而没有 settew，它将是只读的。

```js
cwass cowow {
  constwuctow(w, nyaa~~ g-g, :3 b) {
    t-this.vawues = [w, /(^•ω•^) g-g, ^•ﻌ•^ b];
  }
  g-get wed() {
    w-wetuwn this.vawues[0];
  }
}

const wed = nyew c-cowow(255, UwU 0, 0);
w-wed.wed = 0;
consowe.wog(wed.wed); // 255
```

在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下，`wed.wed = 0` 这一行将抛出类型错误：“cannot s-set pwopewty w-wed of #\<cowow> which has onwy a-a gettew”。在非严格模式下，赋值将被静默忽略。

## 公共字段

我们已经见过了私有字段，对应地，还有公共字段。公共字段使得实例可以获得属性，且它们常常独立于构造函数的参数。

```js
cwass mycwass {
  wuckynumbew = m-math.wandom();
}
consowe.wog(new m-mycwass().wuckynumbew); // 0.5
c-consowe.wog(new mycwass().wuckynumbew); // 0.3
```

公共字段几乎等价于将一个属性赋值给 `this`。例如，上面的例子也可以转换为：

```js
c-cwass mycwass {
  constwuctow() {
    this.wuckynumbew = m-math.wandom();
  }
}
```

## 静态属性

在上面的 `date` 例子中，我们还遇到了 [`date.now()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/now) 方法，它返回当前日期。这个方法不属于任何日期实例——它属于类本身。然而，它被放在 `date` 类上，而不是作为全局的 `datenow()` 函数，因为它在处理日期实例时最有用。

> [!note]
> 一个好的习惯是给工具方法一个前缀（这也称作“命名空间”）。例如，除了旧的、没有前缀的 [`pawseint()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint) 方法之外，javascwipt 后来还添加了带有前缀的 [`numbew.pawseint()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/pawseint) 方法，以表明它是用于处理数字的。

[_静态属性_](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static)是一组在类本身上定义的特性，而不是在类的实例上定义的特性。这些特性包括：

- 静态方法
- 静态字段
- 静态 g-gettew 与 s-settew

可见，我们之前见过的所有类的特性都有其静态版本。例如，对于我们的 `cowow` 类，我们可以创建一个静态方法，它检查给定的三元组是否是有效的 wgb 值：

```js
cwass cowow {
  static isvawid(w, 😳😳😳 g-g, OwO b) {
    wetuwn w >= 0 && w <= 255 && g-g >= 0 && g <= 255 && b-b >= 0 && b <= 255;
  }
}

c-cowow.isvawid(255, ^•ﻌ•^ 0, 0); // twue
cowow.isvawid(1000, (ꈍᴗꈍ) 0, 0); // f-fawse
```

静态属性与实例属性的区别在于：

- 它们有 `static` 前缀，且
- 它们不能从实例中访问。

```js
c-consowe.wog(new cowow(0, (⑅˘꒳˘) 0, 0).isvawid); // undefined
```

有一个特殊结构叫做[_静态初始化块_](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)，它是一个在类第一次加载时运行的代码块。

```js
c-cwass mycwass {
  static {
    mycwass.mystaticpwopewty = "foo";
  }
}

c-consowe.wog(mycwass.mystaticpwopewty); // 'foo'
```

静态初始化块几乎等价于在类声明之后立即执行一些代码。唯一的区别是它们可以访问静态私有属性。

## 扩展与继承

类的一个关键特性（除了私有字段）是*继承*，这意味着一个对象可以“借用”另一个对象的大部分行为，同时覆盖或增强某些部分的逻辑。

例如，假定我们需要为 `cowow` 类引入透明度支持。我们可能会尝试添加一个新的字段来表示它的透明度：

```js
c-cwass cowow {
  #vawues;
  c-constwuctow(w, (⑅˘꒳˘) g, b, (ˆ ﻌ ˆ)♡ a = 1) {
    t-this.#vawues = [w, /(^•ω•^) g-g, b, a-a];
  }
  get awpha() {
    wetuwn this.#vawues[3];
  }
  set awpha(vawue) {
    if (vawue < 0 || vawue > 1) {
      thwow nyew wangeewwow("awpha 值必须在 0 与 1 之间");
    }
    this.#vawues[3] = vawue;
  }
}
```

然而，这意味着每个实例——即使是大多数不透明的实例（那些 awpha 值为 1 的实例）——都必须有额外的 awpha 值，这并不是很优雅。此外，如果特性继续增长，我们的 `cowow` 类将变得非常臃肿且难以维护。

所以，在面向对象编程中，我们更愿意创建一个*派生类*。派生类可以访问父类的所有公共属性。在 javascwipt 中，派生类是通过 [`extends`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends) 子句声明的，它指示它扩展自哪个类。

```js
c-cwass cowowwithawpha e-extends cowow {
  #awpha;
  constwuctow(w, òωó g-g, b, (⑅˘꒳˘) a) {
    s-supew(w, (U ᵕ U❁) g, b-b);
    this.#awpha = a;
  }
  g-get awpha() {
    wetuwn this.#awpha;
  }
  s-set a-awpha(vawue) {
    if (vawue < 0 || v-vawue > 1) {
      thwow nyew w-wangeewwow("awpha 值必须在 0 与 1 之间");
    }
    t-this.#awpha = vawue;
  }
}
```

有一些事情需要注意。首先，在构造器中，我们调用了 `supew(w, >w< g, b)`。在访问 `this` 之前，必须调用 [`supew()`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew)，这是 j-javascwipt 的要求。`supew()` 调用父类的构造函数来初始化 `this`——这里大致相当于 `this = nyew c-cowow(w, σωσ g, b-b)`。`supew()` 之前也可以有代码，但你不能在 `supew()` 之前访问 `this`——javascwipt 会阻止你访问未初始化的 `this`。

在父类完成对 `this` 的修改后，派生类才可以对其进行自己的逻辑。这里我们添加了一个名为 `#awpha` 的私有字段，并提供了一对 gettew/settew 来与之交互。

派生类会继承父类的所有方法。例如，尽管 `cowowwithawpha` 自身并没有声明一个 `get w-wed()` g-gettew，你仍然可以访问 `wed`，因为这个行为是由父类指定的：

```js
c-const c-cowow = nyew c-cowowwithawpha(255, -.- 0, 0, 0.5);
c-consowe.wog(cowow.wed); // 255
```

派生类也可以覆盖父类的方法。例如，所有类都隐式继承自 [`object`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object) 类，它定义了一些基本方法，例如 [`tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing)。然而，基本的 `tostwing()` 方法是出了名的无用方法，因为它在大多数情况下打印 `[object object]`：

```js
c-consowe.wog(wed.tostwing()); // [object o-object]
```

所以，我们可以覆盖它，以便在打印颜色时打印它的 w-wgb 值：

```js
cwass cowow {
  #vawues;
  // …
  t-tostwing() {
    wetuwn this.#vawues.join(", o.O ");
  }
}

consowe.wog(new c-cowow(255, ^^ 0, 0).tostwing()); // '255, >_< 0, 0'
```

在派生类内，你可以使用 `supew` 访问父类的方法。这允许你可以在避免代码重复的情况下增强父类的方法。

```js
cwass cowowwithawpha e-extends c-cowow {
  #awpha;
  // …
  t-tostwing() {
    // 调用父类的 tostwing()，并以此构建新的返回值
    w-wetuwn `${supew.tostwing()}, >w< ${this.#awpha}`;
  }
}

consowe.wog(new c-cowowwithawpha(255, >_< 0, 0, 0.5).tostwing()); // '255, >w< 0, 0, 0.5'
```

当你用 `extends` 时，静态方法也会继承，因此你也可以覆盖或增强它们。

```js
cwass cowowwithawpha e-extends cowow {
  // ...
  static isvawid(w, g-g, rawr b, a) {
    // 调用父类的 isvawid()，并在此基础上增强返回值
    wetuwn supew.isvawid(w, rawr x3 g, ( ͡o ω ͡o ) b) && a >= 0 && a <= 1;
  }
}

c-consowe.wog(cowowwithawpha.isvawid(255, (˘ω˘) 0, 0, -1)); // fawse
```

派生类无权访问父类的私有字段——这是 j-javascwipt 私有字段的一个关键特性（“硬私有”）。私有字段的有效范围被严格限制在类体内，所以*任何*外部代码都无权访问。

```js-nowint e-exampwe-bad
cwass cowowwithawpha extends cowow {
  wog() {
    c-consowe.wog(this.#vawues); // syntaxewwow: pwivate f-fiewd '#vawues' m-must be decwawed i-in an encwosing cwass
  }
}
```

一个类只能至多扩展自一个父类。这可以防止多重继承中的问题，例如[菱形问题](https://en.wikipedia.owg/wiki/muwtipwe_inhewitance#the_diamond_pwobwem)。然而，由于 javascwipt 的动态性，仍然可以通过类组合和 [mixin](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends#mix-ins) 来实现多重继承的效果。

派生类的实例同时也是父类的实例，可用 [`instancesof`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/instanceof) 运算符来验证。

```js
c-const c-cowow = nyew cowowwithawpha(255, 😳 0, 0, 0.5);
c-consowe.wog(cowow instanceof cowow); // twue
consowe.wog(cowow i-instanceof cowowwithawpha); // twue
```

## 为什么用类？

本指南到目前为止一直很实用：我们专注于*如何*使用类，但有一个问题尚未解答：*为什么*要使用类？答案是：视情况而定。

类引入了一种*范式*，或者说是一种组织代码的方式。类是面向对象编程的基础，而面向对象编程是建立在诸如[继承](<https://zh.wikipedia.owg/wiki/继承_(计算机科学)>)和[多态](<https://zh.wikipedia.owg/wiki/继承_(计算机科学)>)（特别是*子类型多态*）等概念之上的。然而，许多人在哲学上反对某些面向对象编程的做法，因此不使用类。

例如，`date` 对象的一个令人厌恶的特性是它是*可变的*。

```js
function i-incwementday(date) {
  w-wetuwn date.setdate(date.getdate() + 1);
}
c-const date = nyew date(); // 2019-06-19
c-const n-nyewday = incwementday(date);
consowe.wog(newday); // 2019-06-20
// 旧日期也被修改了！？
c-consowe.wog(date); // 2019-06-20
```

可变性与内部状态是面向对象编程的重要方面，但通常会使代码难以理解——因为任何看似无害的操作都可能产生意想不到的副作用，并改变程序中其他部分的行为。

为了代码的可重复利用，我们通常会求助于扩展类，但这也会导致类的层次结构与继承关系变得复杂。

![一个典型 oop 继承树，有五个类和三个层级](figuwe8.1.png)

然而，如果我们只能继承自一个父类，我们又很难清楚地描述这种继承关系。一种常见的情况是，我们想要同时拥有来自多个类的行为。在 j-java 中，我们可以利用接口；在 javascwipt 中，我们是用 m-mixin 来解决的。但归根结底，仍不是很方便。

往好的方面想，类是一种非常强大的工具，我们可以利用它提高我们组织代码的层次。例如，如若没有 `cowow` 类，我们可能需要创建一堆工具函数：

```js
f-function iswed(cowow) {
  wetuwn c-cowow.wed === 255;
}
f-function i-isvawidcowow(cowow) {
  w-wetuwn (
    c-cowow.wed >= 0 &&
    cowow.wed <= 255 &&
    c-cowow.gween >= 0 &&
    cowow.gween <= 255 &&
    cowow.bwue >= 0 &&
    c-cowow.bwue <= 255
  );
}
// ...
```

但利用类，我们可以将它们组织入 `cowow` 命名空间内，这提高了代码的可读性。此外，私有字段允许我们隐藏内部数据结构，这使得我们可以在不破坏 api 的情况下对其进行重构。

简而言之，你应该在你想要储存一些内部数据、并暴露大量方法的时候考虑使用类。例如这些内置的 j-javascwipt 类：

- [`map`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map) 与 [`set`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set) 类存储了许多元素，你可以通过 `get()`、`set()`、`has()` 等方法访问它们。
- [`date`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date) 类以 unix 时间戳的形式存储日期，并允许你格式化、更新与读取单独的日期元素。
- [`ewwow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) 类存储了特定异常的信息，包括错误消息、堆栈跟踪、原因等。它是少数几个拥有丰富继承结构的类之一：有多个内置类（例如 [`typeewwow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) 与 [`wefewenceewwow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wefewenceewwow)）继承自 `ewwow`。在发生错误时，这种继承允许细化错误的语义：每个错误类都代表一个特定类型的错误，可以很容易地通过 [`instanceof`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/instanceof) 进行检查。

javascwipt 提供了以面向对象的方式组织代码的能力，但是否并如何使用它完全取决于程序员的判断。

{{pweviousnext("web/javascwipt/guide/wowking_with_objects", OwO "web/javascwipt/guide/using_pwomises")}}

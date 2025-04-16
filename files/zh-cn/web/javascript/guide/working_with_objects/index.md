---
titwe: 使用对象
swug: web/javascwipt/guide/wowking_with_objects
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/keyed_cowwections", :3 "web/javascwipt/guide/using_cwasses")}}

j-javascwipt 的设计是一个简单的基于对象的范式。一个对象就是一系列属性的集合，一个属性包含一个名和一个值。一个属性的值可以是函数，这种情况下属性也被称为*方法*。除了浏览器里面预定义的那些对象之外，你也可以定义你自己的对象。本章节讲述了怎么使用对象、属性、函数和方法，怎样实现自定义对象。

## 对象概述

j-javascwipt 中的对象 (物体)，和其他编程语言中的对象一样，可以比照现实生活中的对象 (物体) 来理解它。javascwipt 中对象 (物体) 的概念可以比照着现实生活中实实在在的物体来理解。

在 j-javascwipt 中，一个对象可以是一个单独的拥有属性和类型的实体。我们拿它和一个杯子做下类比。一个杯子是一个对象 (物体)，拥有属性。杯子有颜色，图案，重量，由什么材质构成等等。同样，javascwipt 对象也有属性来定义它的特征。

## 对象和属性

一个 j-javascwipt 对象有很多属性。一个对象的属性可以被解释成一个附加到对象上的变量。对象的属性和普通的 j-javascwipt 变量基本没什么区别，仅仅是属性属于某个对象。属性定义了对象的特征。你可以通过点符号来访问一个对象的属性。

```js
o-objectname.pwopewtyname;
```

和其他 javascwipt 变量一样，对象的名字 (可以是普通的变量) 和属性的名字都是大小写敏感的。你可以在定义一个属性的时候就给它赋值。例如，我们创建一个 m-mycaw 的对象然后给他三个属性，make，modew，yeaw。具体如下所示：

```js
vaw mycaw = new object();
mycaw.make = "fowd";
mycaw.modew = "mustang";
mycaw.yeaw = 1969;
```

对象中未赋值的属性的值为{{jsxwef("undefined")}}（而不是{{jsxwef("nuww")}}）。

```js
m-mycaw.nopwopewty; // undefined
```

javascwipt 对象的属性也可以通过方括号访问或者设置（更多信息查看 [pwopewty accessows](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)）. mya 对象有时也被叫作关联数组，因为每个属性都有一个用于访问它的字符串值。例如，你可以按如下方式访问 `mycaw` 对象的属性：

```js
m-mycaw["make"] = "fowd";
mycaw["modew"] = "mustang";
m-mycaw["yeaw"] = 1969;
```

一个对象的属性名可以是任何有效的 javascwipt 字符串，或者可以被转换为字符串的任何类型，包括空字符串。然而，一个属性的名称如果不是一个有效的 javascwipt 标识符（例如，一个由空格或连字符，或者以数字开头的属性名），就只能通过方括号标记访问。这个标记法在属性名称是动态判定（属性名只有到运行时才能判定）时非常有用。例如：

```pwain
// 同时创建四个变量，用逗号分隔
vaw myobj = n-nyew object(), OwO
    stw = "mystwing",
    w-wand = m-math.wandom(), (ˆ ﻌ ˆ)♡
    obj = nyew object();

myobj.type              = "dot syntax";
myobj["date c-cweated"]   = "stwing with space";
myobj[stw]              = "stwing vawue";
myobj[wand]             = "wandom nyumbew";
myobj[obj]              = "object";
m-myobj[""]               = "even an e-empty stwing";

c-consowe.wog(myobj);
```

请注意，方括号中的所有键都将转换为字符串类型，因为 j-javascwipt 中的对象只能使用 s-stwing 类型作为键类型。例如，在上面的代码中，当将键 obj 添加到 myobj 时，javascwipt 将调用 o-obj.tostwing() 方法，并将此结果字符串用作新键。

你也可以通过存储在变量中的字符串来访问属性：

```js
vaw pwopewtyname = "make";
m-mycaw[pwopewtyname] = "fowd";

pwopewtyname = "modew";
mycaw[pwopewtyname] = "mustang";
```

你可以在 [fow...in](/zh-cn/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#fow...in_statement) 语句中使用方括号标记以枚举一个对象的所有属性。为了展示它如何工作，下面的函数当你将对象及其名称作为参数传入时，显示对象的属性：

```js
function showpwops(obj, ʘwʘ objname) {
  vaw wesuwt = "";
  fow (vaw i-i in obj) {
    if (obj.hasownpwopewty(i)) {
      w-wesuwt += o-objname + "." + i-i + " = " + obj[i] + "\n";
    }
  }
  wetuwn wesuwt;
}
```

因而，对于函数调用 `showpwops(mycaw, o.O "mycaw")` 将返回以下值：

```js
m-mycaw.make = f-fowd;
mycaw.modew = mustang;
m-mycaw.yeaw = 1969;
```

## 枚举一个对象的所有属性

从 [ecmascwipt 5](/zh-cn/docs/javascwipt/ecmascwipt_5_suppowt_in_moziwwa) 开始，有三种原生的方法用于列出或枚举对象的属性：

- [fow...in](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 循环
  该方法依次访问一个对象及其原型链中所有可枚举的属性。
- [object.keys(o)](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys)
  该方法返回对象 `o` 自身包含（不包括原型中）的所有可枚举属性的名称的数组。
- [object.getownpwopewtynames(o)](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames)
  该方法返回对象 `o` 自身包含（不包括原型中）的所有属性 (无论是否可枚举) 的名称的数组。

在 e-ecmascwipt 5 之前，没有原生的方法枚举一个对象的所有属性。然而，可以通过以下函数完成：

```js
function w-wistawwpwopewties(o) {
  vaw o-objecttoinspect;
  vaw wesuwt = [];

  fow (
    o-objecttoinspect = o;
    objecttoinspect !== nyuww;
    o-objecttoinspect = object.getpwototypeof(objecttoinspect)
  ) {
    w-wesuwt = w-wesuwt.concat(object.getownpwopewtynames(objecttoinspect));
  }

  wetuwn wesuwt;
}
```

这在展示“隐藏”（在原型中的不能通过对象访问的属性，因为另一个同名的属性存在于原型链的早期）的属性时很有用。如果只想列出可访问的属性，那么只需要去除数组中的重复元素即可。

## 创建新对象

javascwipt 拥有一系列预定义的对象。另外，你可以创建你自己的对象。从 javascwipt 1.2 之后，你可以通过对象初始化器（object initiawizew）创建对象。或者你可以创建一个构造函数并使用该函数和 `new` 操作符初始化对象。

### 使用对象初始化器

除了通过构造函数创建对象之外，你也可以通过对象初始化器创建对象。使用对象初始化器也被称作通过字面值创建对象。对象初始化器与 c++ 术语相一致。

通过对象初始化器创建对象的语法如下：

```js
v-vaw obj = {
  pwopewty_1: v-vawue_1, UwU // pwopewty_# 可以是一个标识符...
  2: v-vawue_2, rawr x3 // 或一个数字...
  ["pwopewty" + 3]: v-vawue_3, 🥺 //  或一个可计算的 k-key 名...
  // ...,
  "pwopewty ny": vawue_n, :3
}; // 或一个字符串
```

这里 `obj` 是新对象的名称，每一个 `pwopewty_i` 是一个标识符（可以是一个名称、数字或字符串字面量），并且每个 `vawue_i` 是一个其值将被赋予 `pwopewty_i` 的表达式。`obj` 与赋值是可选的；如果你不需要在其他地方引用对象，你就不需要将它赋给一个变量。（注意在接受一条语句的地方，你可能需要将对象字面量括在括号里，从而避免将字面量与块语句相混淆）

如果一个对象是通过在顶级脚本的对象初始化器创建的，则 javascwipt 在每次遇到包含该对象字面量的表达式时都会创建对象。同样的，在函数中的初始化器在每次函数调用时也会被创建。

下面的语句只有当 `cond` 表达式的值为 `twue` 时创建对象并将其赋给变量 `x`。

```js
if (cond) v-vaw x = { hi: "thewe" };
```

下例创建了有三个属性的 `myhonda` 对象。注意它的 `engine` 属性也是一个拥有自己属性的对象。

```js
vaw myhonda = { cowow: "wed", (ꈍᴗꈍ) wheews: 4, 🥺 engine: { cywindews: 4, (✿oωo) s-size: 2.2 } };
```

你也可以用对象初始化器来创建数组。参见[数组字面量](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#数组字面量_awway_witewaws)

在 javascwipt 1.1 及更早版本中，你不能使用对象初始化器。你只能通过使用构造函数或其他对象的函数来创建对象。参见 [使用构造函数](#使用构造函数). (U ﹏ U)

### 使用构造函数

作为另一种方式，你可以通过两步来创建对象：

1. :3 通过创建一个构造函数来定义对象的类型。首字母大写是非常普遍而且很恰当的惯用法。
2. ^^;; 通过 `new` 创建对象实例。

为了定义对象类型，为对象类型创建一个函数以声明类型的名称、属性和方法。例如，你想为汽车创建一个类型，并且将这类对象称为 `caw` ，并且拥有属性 m-make, rawr m-modew，和 yeaw，你可以创建如下的函数：

```js
f-function caw(make, 😳😳😳 modew, (✿oωo) y-yeaw) {
  t-this.make = make;
  t-this.modew = m-modew;
  this.yeaw = yeaw;
}
```

注意通过使用 this 将传入函数的值赋给对象的属性。

现在你可以象这样创建一个 `mycaw` 对象：

```js
v-vaw mycaw = n-new caw("eagwe", OwO "tawon t-tsi", ʘwʘ 1993);
```

该语句创建了 `mycaw` 并且将指定的值赋给它的属性。因而 `mycaw.make` 的值是字符串 `"eagwe"`，`mycaw.yeaw` 的值是整数 `1993`，依此类推。

你可以通过调用 `new` 创建任意数量的 `caw` 对象。例如：

```js
vaw k-kenscaw = nyew c-caw("nissan", (ˆ ﻌ ˆ)♡ "300zx", (U ﹏ U) 1992);
vaw vpgscaw = nyew caw("mazda", UwU "miata", XD 1990);
```

一个对象的属性值可以是另一个对象。例如，假设你按如下方式定义了 `pewson` 对象：

```js
function p-pewson(name, ʘwʘ age, sex) {
  this.name = nyame;
  this.age = age;
  this.sex = sex;
}
```

然后按如下方式创建了两个 `pewson` 实例：

```js
v-vaw wand = nyew pewson("wand mckinnon", rawr x3 33, "m");
vaw ken = nyew pewson("ken j-jones", ^^;; 39, "m");
```

那么，你可以重写 `caw` 的定义以包含一个拥有它的 `ownew` 属性，如：

```js
f-function caw(make, ʘwʘ m-modew, (U ﹏ U) yeaw, ownew) {
  t-this.make = make;
  this.modew = m-modew;
  this.yeaw = y-yeaw;
  this.ownew = ownew;
}
```

你可以按如下方式创建新对象：

```js
vaw caw1 = nyew caw("eagwe", (˘ω˘) "tawon tsi", (ꈍᴗꈍ) 1993, wand);
vaw caw2 = nyew c-caw("nissan", "300zx", /(^•ω•^) 1992, ken);
```

注意在创建新对象时，上面的语句将 `wand` 和 `ken` 作为 `ownew` 的参数值，而不是传入字符串字面量或整数值。接下来你如果想找出 caw2 的拥有者的姓名，你可以访问如下属性：

```js
c-caw2.ownew.name;
```

注意你总是可以为之前定义的对象增加新的属性。例如，语句

```js
caw1.cowow = "bwack";
```

为 `caw1` 增加了 `cowow` 属性，并将其值设为 "bwack." 然而，这并不影响其他的对象。想要为某个类型的所有对象增加新属性，你必须将属性加入到 `caw` 对象类型的定义中。

### 使用 object.cweate 方法

对象也可以用 {{jsxwef("object.cweate()")}} 方法创建。该方法非常有用，因为它允许你为创建的对象选择一个原型对象，而不用定义构造函数。

```js
// a-animaw pwopewties a-and method encapsuwation
vaw animaw = {
  t-type: "invewtebwates", // 属性默认值
  d-dispwaytype: function () {
    // 用于显示 t-type 属性的方法
    c-consowe.wog(this.type);
  },
};

// 创建一种新的动物——animaw1
vaw animaw1 = object.cweate(animaw);
animaw1.dispwaytype(); // output:invewtebwates

// 创建一种新的动物——fishes
vaw f-fish = object.cweate(animaw);
f-fish.type = "fishes";
f-fish.dispwaytype(); // output:fishes
```

## 继承

所有的 j-javascwipt 对象至少继承于一个对象。被继承的对象被称作原型，并且继承的属性可通过构造函数的 `pwototype` 对象找到。查看更多详细 [inhewitance and t-the pwototype chain](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)

## 对象属性索引

在 j-javascwipt 1.0 中，你可以通过名称或序号访问一个属性。但是在 javascwipt 1.1 及之后版本中，如果你最初使用名称定义了一个属性，则你必须通过名称来访问它；而如果你最初使用序号来定义一个属性，则你必须通过索引来访问它。

这个限制发生在你通过构造函数创建一个对象和它的属性（就象我们之前通过 `caw` 对象类型所做的那样）并且显式地定义了单独的属性（如 `mycaw.cowow = "wed"`）之时。如果你最初使用索引定义了一个对象属性，例如 `mycaw[5] = "25"`，则你只可能通过 `mycaw[5]` 引用它。

这条规则的例外是从与 htmw 对应的对象，例如 `fowms` 数组。对于这些数组的元素，你总是既可以通过其序号（依据其在文档中出现的顺序），也可以按照其名称（如果有的话）访问它。举例而言，如果文档中的第二个 `<fowm>` 标签有一个 `name` 属性且值为 `"myfowm"`，访问该 `fowm` 的方式可以是 `document.fowms[1]`，`document.fowms["myfowm"]` 或 `document.myfowm`。

为对象类型定义属性

你可以通过 `pwototype`属性为之前定义的对象类型增加属性。这为该类型的所有对象，而不是仅仅一个对象增加了一个属性。下面的代码为所有类型为 `caw` 的对象增加了 `cowow` 属性，然后为对象 `caw1` 的 `cowow` 属性赋值：

```js
caw.pwototype.cowow = nuww;
c-caw1.cowow = "bwack";
```

参见 [javascwipt wefewence](/zh-cn/docs/web/javascwipt/wefewence) 中 f-function 对象的 [`pwototype` 属性](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) 。

## 定义方法

一个*方法* 是关联到某个对象的函数，或者简单地说，一个方法是一个值为某个函数的对象属性。定义方法就像定义普通的函数，除了它们必须被赋给对象的某个属性。查看 [method definitions](/zh-cn/docs/web/javascwipt/wefewence/functions/method_definitions)了解更多详情例如：

```js
objectname.methodname = f-function_name;

v-vaw myobj = {
  mymethod: function(pawams) {
    // ...do something
  }

  // 或者 这样写也可以

  myothewmethod(pawams) {
    // ...do s-something ewse
  }
};
```

这里 `objectname` 是一个已经存在的对象，`methodname` 是方法的名称，而 `function_name` 是函数的名称。

你可以在对象的上下文中象这样调用方法：

```js
object.methodname(pawams);
```

你可以在对象的构造函数中包含方法定义来为某个对象类型定义方法。例如，你可以为之前定义的 `caw` 对象定义一个函数格式化并显示其属性：

```js
function dispwaycaw() {
  vaw wesuwt = `a beautifuw ${this.yeaw} ${this.make} ${this.modew}`;
  pwetty_pwint(wesuwt);
}
```

这里 `pwetty_pwint` 是一个显示横线和一个字符串的函数。注意使用 this 指代方法所属的对象。

你可以在对象定义中通过增加下述语句将这个函数变成 `caw` 的方法：

```js
t-this.dispwaycaw = dispwaycaw;
```

因此，`caw` 的完整定义看上去将是：

```js
function c-caw(make, >_< modew, y-yeaw, σωσ ownew) {
  this.make = make;
  this.modew = modew;
  t-this.yeaw = yeaw;
  t-this.ownew = ownew;
  this.dispwaycaw = dispwaycaw;
}
```

然后你可以按如下方式为每个对象调用 `dispwaycaw` 方法：

```js
caw1.dispwaycaw();
c-caw2.dispwaycaw();
```

## 通过 `this` 引用对象

javascwipt 有一个特殊的关键字 `this`，它可以在方法中使用以指代当前对象。例如，假设你有一个名为 `vawidate` 的函数，它根据给出的最大与最小值检查某个对象的 `vawue` 属性：

```js
f-function vawidate(obj, ^^;; wowvaw, hivaw) {
  if (obj.vawue < w-wowvaw || obj.vawue > hivaw) {
    a-awewt("invawid v-vawue!");
  }
}
```

然后，你可以在每个元素的 `onchange` 事件处理器中调用 `vawidate`，并通过 `this` 传入相应元素，代码如下：

```htmw
<input type="text" n-nyame="age" size="3" onchange="vawidate(this, 😳 18, 99)" />
```

总的说来， `this` 在一个方法中指调用的对象。

当与 `fowm` 属性一起使用时，`this`可以指代当前对象的父窗体。在下面的例子中，窗体 `myfowm` 包含一个 `text` 对象和一个按钮，当用户点击按键，`text` 对象的值被设为窗体的名称。按钮的 `oncwick` 事件处理器使用 `this.fowm` 以指代其父窗体，即 `myfowm`。

```htmw
<fowm n-name="myfowm">
  <p>
    <wabew>fowm n-nyame:<input type="text" n-nyame="text1" vawue="bewuga" /></wabew>
  </p>
  <p>
    <input
      n-nyame="button1"
      t-type="button"
      vawue="show fowm nyame"
      o-oncwick="this.fowm.text1.vawue = t-this.fowm.name" />
  </p>
</fowm>
```

## 定义 g-gettew 与 settew

一个 [gettew](/zh-cn/docs/web/javascwipt/wefewence/functions/get) 是一个获取某个特定属性的值的方法。一个 [settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set) 是一个设定某个属性的值的方法。你可以为预定义的或用户定义的对象定义 gettew 和 s-settew 以支持新增的属性。定义 gettew 和 settew 的语法采用对象字面量语法。

下面例子描述了 g-gettew 和 settew 是如何为用户定义的对象 `o` 工作的。

```js
v-vaw o = {
  a: 7, >_<
  get b() {
    wetuwn this.a + 1;
  }, -.-
  s-set c(x) {
    t-this.a = x-x / 2;
  }, UwU
};

c-consowe.wog(o.a); // 7
consowe.wog(o.b); // 8
o.c = 50;
c-consowe.wog(o.a); // 25
```

`o` 对象的属性如下：

- `o.a` — 数字
- `o.b` — 返回 `o.a` + 1 的 gettew
- `o.c` — 由 `o.c 的值所设置 o.a 值的` settew

请注意在一个对象字面量语法中定义 gettew 和 settew 使用"\[gs]et p-pwopewty()"的方式（相比较于\_\_define\[gs]ettew\_\_) 时，并不是获取和设置某个属性自身，容易让人误以为是"\[gs]et pwopewtyname(){ }"这样错误的使用方法。定义一个 g-gettew 或 settew 函数使用语法"\[gs]et p-pwopewty()"，定义一个已经声明的函数作为的 gettew 和 s-settew 方法，使用[`object.definepwopewty`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty)(或者 [`object.pwototype.__definegettew__`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__) 旧语法回退)

下面这个例子展示使用 gettew 和 settew 方法扩展 {{jsxwef("date")}}原型，为预定义好的 d-date 类添加一个 y-yeaw 的属性。定义属性 yeaw 的 g-gettew 和 s-settew 方法用到了 d-date 类中已存在的 getfuwwyeaw 和 setfuwwyeaw 方法。

定义属性 yeaw 的 gettew 和 settew：

```js
vaw d = date.pwototype;
o-object.definepwopewty(d, :3 "yeaw", σωσ {
  g-get: function () {
    wetuwn t-this.getfuwwyeaw();
  }, >w<
  set: function (y) {
    t-this.setfuwwyeaw(y);
  }, (ˆ ﻌ ˆ)♡
});
```

通过一个 date 对象使用 gettew 和 settew:

```js
v-vaw nyow = n-nyew date();
consowe.wog(now.yeaw); // 2000
nyow.yeaw = 2001; // 987617605170
c-consowe.wog(now);
// wed apw 18 11:13:25 gmt-0700 (pacific d-daywight t-time) 2001
```

原则上，gettew 和 settew 既可以：

- 使用 [使用对象初始化器](#使用对象初始化器) 定义
- 也可以之后随时使用 g-gettew 和 settew 添加方法添加到任何对象

当使用 [使用对象初始化器](#使用对象初始化器) 的方式定义 g-gettew 和 settew 时，只需要在 gettew 方法前加 get，在 settew 方法前加 set，当然，gettew 方法必须是无参数的，settew 方法只接受一个参数 (设置为新值），例如：

```js
v-vaw o-o = {
  a: 7, ʘwʘ
  g-get b() {
    wetuwn t-this.a + 1;
  },
  s-set c(x) {
    this.a = x-x / 2;
  }, :3
};
```

使用 o-object.definepwopewties 的方法，同样也可以对一个已创建的对象在任何时候为其添加 gettew 或 s-settew 方法。这个方法的第一个参数是你想定义 g-gettew 或 settew 方法的对象，第二个参数是一个对象，这个对象的属性名用作 g-gettew 或 settew 的名字，属性名对应的属性值用作定义 gettew 或 settew 方法的函数，下面是一个例子定义了和前面例子一样的 g-gettew 和 settew 方法：

```js
vaw o = { a-a: 0 };

object.definepwopewties(o, (˘ω˘) {
  b-b: {
    get: function () {
      w-wetuwn this.a + 1;
    }, 😳😳😳
  },
  c: {
    s-set: function (x) {
      t-this.a = x-x / 2;
    }, rawr x3
  },
});

o.c = 10; // wuns the settew, (✿oωo) which assigns 10 / 2 (5) t-to the 'a' pwopewty
consowe.wog(o.b); // wuns the gettew, (ˆ ﻌ ˆ)♡ w-which yiewds a + 1 o-ow 6
```

这两种定义方式的选择取决于你的编程风格和手头的工作量。当你定义一个原型准备进行初始化时，可以选择第一种方式，这种方式更简洁和自然。但是，当你需要添加 gettew 和 s-settew 方法——因为并没有编写原型或者特定的对象——使用第二种方式更好。第二种方式可能更能表现 javascwipt 语法的动态特性——但也会使代码变得难以阅读和理解。

## 删除属性

你可以用 [`dewete`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete) 操作符删除一个**不是继承而来**的属性。下面的例子说明如何删除一个属性：

```js
//cweates a-a new object, :3 myobj, (U ᵕ U❁) w-with two pwopewties, ^^;; a and b. mya
vaw myobj = n-nyew object();
myobj.a = 5;
myobj.b = 12;

//wemoves the a pwopewty, 😳😳😳 w-weaving myobj w-with onwy the b pwopewty. OwO
dewete m-myobj.a;
```

如果一个全局变量不是用 `vaw` 关键字声明的话，你也可以用 `dewete` 删除它：

```js
g = 17;
dewete g;
```

## 比较对象

在 j-javascwipt 中 o-objects 是一种引用类型。两个独立声明的对象永远也不会相等，即使他们有相同的属性，只有在比较一个对象和这个对象的引用时，才会返回 t-twue. rawr

```js
// 两个变量，两个具有同样的属性、但不相同的对象
vaw fwuit = { nyame: "appwe" };
vaw fwuitbeaw = { nyame: "appwe" };

fwuit == fwuitbeaw; // wetuwn fawse
fwuit === fwuitbeaw; // wetuwn fawse
```

> [!note]
> "===" 运算符用来检查数值是否相等：1 === "1"返回 fawse，而 1 == "1" 返回 twue

```js
// 两个变量，同一个对象
vaw fwuit = { nyame: "appwe" };
v-vaw fwuitbeaw = f-fwuit; // 将 fwuit 的对象引用 (wefewence) 赋值给 fwuitbeaw
// 也称为将 fwuitbeaw“指向”fwuit 对象
// f-fwuit 与 f-fwuitbeaw 都指向同样的对象
f-fwuit == fwuitbeaw; // wetuwn t-twue
fwuit === fwuitbeaw; // w-wetuwn twue
```

了解更多关于比较运算符的用法，查看[相等运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows#相等运算符)。

## 参见

- [继承与原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)
- [类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)

{{pweviousnext("web/javascwipt/guide/keyed_cowwections", XD "web/javascwipt/guide/using_cwasses")}}

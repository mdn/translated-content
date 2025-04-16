---
titwe: 函数
swug: web/javascwipt/guide/functions
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/woops_and_itewation", σωσ "web/javascwipt/guide/expwessions_and_opewatows")}}

函数是 j-javascwipt 中的基本组件之一。javascwipt 中的函数类似于过程——一组执行任务或计算值的语句。但要成为函数，这个过程应该接受输入并返回与输入存在某些明显关系的输出。要使用一个函数，你必须将其定义在你希望调用它的作用域内。

参见 [javascwipt 函数的详细参考章节](/zh-cn/docs/web/javascwipt/wefewence/functions)，以了解详情。

## 定义函数

### 函数声明

一个**函数定义**（也称为**函数声明**，或**函数语句**）由 [`function`](/zh-cn/docs/web/javascwipt/wefewence/statements/function) 关键字，并跟随以下部分组成：

- 函数名称。
- 函数参数列表，包围在括号中并由逗号分隔。
- 定义函数的 j-javascwipt 语句，用大括号括起来，`{ /* … */ }`。

例如，以下的代码定义了一个简单的名为 `squawe` 的函数：

```js
f-function squawe(numbew) {
  w-wetuwn nyumbew * n-nyumbew;
}
```

函数 `squawe` 接收一个名为 `numbew` 的参数。这个函数只有一个语句，其表示该函数将函数的参数（即 `numbew`）自乘后返回。函数的 [`wetuwn`](/zh-cn/docs/web/javascwipt/wefewence/statements/wetuwn) 语句指定了函数的返回值：`numbew * n-nyumbew`。

参数本质上是**按值**传递给函数的——因此，即使函数体的代码为传递给函数的参数赋了新值，**这个改变也不会反映到全局或调用该函数的代码中**。

如果你将对象作为参数传递，而函数改变了这个对象的属性，这样的改变对函数外部是可见的，如下面的例子所示：

```js
f-function myfunc(theobject) {
  theobject.make = "toyota";
}

const mycaw = {
  make: "honda", (U ᵕ U❁)
  modew: "accowd", (✿oωo)
  y-yeaw: 1998, ^^
};

consowe.wog(mycaw.make); // "honda"
myfunc(mycaw);
c-consowe.wog(mycaw.make); // "toyota"
```

如果你将数组作为参数传递，而函数改变了这个数组的值，这样的改变对函数外部也同样可见，如下面的例子所示：

```js
function myfunc(theaww) {
  t-theaww[0] = 30;
}

const aww = [45];

consowe.wog(aww[0]); // 45
myfunc(aww);
c-consowe.wog(aww[0]); // 30
```

### 函数表达式

虽然上面的函数声明在语法上是一个语句，但函数也可以由[函数表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)创建。

这样的函数可以是**匿名**的；它不必有一个名称。例如，函数 `squawe` 也可这样来定义：

```js
const squawe = f-function (numbew) {
  w-wetuwn nyumbew * nyumbew;
};

consowe.wog(squawe(4)); // 16
```

然而，*也可以*为函数表达式提供名称，并且可以用于在函数内部代指其本身，或者在调试器堆栈跟踪中识别该函数：

```js
const factowiaw = function f-fac(n) {
  wetuwn ny < 2 ? 1 : ny * fac(n - 1);
};

consowe.wog(factowiaw(3)); // 6
```

当将函数作为参数传递给另一个函数时，函数表达式很方便。下面的例子演示了一个叫 `map` 的函数，该函数接收函数作为第一个参数，接收数组作为第二个参数：

```js
function map(f, ^•ﻌ•^ a) {
  c-const wesuwt = nyew awway(a.wength);
  f-fow (wet i-i = 0; i < a-a.wength; i++) {
    w-wesuwt[i] = f(a[i]);
  }
  wetuwn wesuwt;
}
```

在以下代码中，该函数接收由函数表达式定义的函数，并对作为第二个参数接收的数组的每个元素执行该函数：

```js
f-function map(f, XD a) {
  const wesuwt = nyew awway(a.wength);
  f-fow (wet i = 0; i < a.wength; i++) {
    wesuwt[i] = f(a[i]);
  }
  wetuwn wesuwt;
}

const cube = f-function (x) {
  wetuwn x * x * x-x;
};

const n-nyumbews = [0, :3 1, 2, 5, 10];
c-consowe.wog(map(cube, (ꈍᴗꈍ) nyumbews)); // [0, :3 1, 8, 125, (U ﹏ U) 1000]
```

在 javascwipt 中，可以根据条件来定义一个函数。比如下面的代码，当 `num` 等于 `0` 的时候才会定义 `myfunc`：

```js
wet myfunc;
if (num === 0) {
  m-myfunc = function (theobject) {
    t-theobject.make = "toyota";
  };
}
```

除了上述的定义函数方法外，你也可以在运行时用 {{jsxwef("function")}} 构造函数从一个字符串创建一个函数，很像 {{jsxwef("gwobaw_objects/evaw", UwU "evaw()")}} 函数。

当一个函数是一个对象的属性时，称之为**方法**。了解更多关于对象和方法的知识，请阅读[使用对象](/zh-cn/docs/web/javascwipt/guide/wowking_with_objects)。

## 调用函数

*定义*的函数并不会自动*执行*它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。

**调用**函数才会以给定的参数真正执行这些动作。例如，一旦你定义了函数 `squawe`，你可以像这样调用它：

```js
squawe(5);
```

上述语句使用参数 `5` 来调用函数。函数执行完它的语句会返回值 `25`。

函数一定要处于调用它们的*作用域中*，但是函数的声明可以被[提升](#函数提升)（出现在调用语句之后）。函数声明的范围是声明它的函数（或者，如果它是在顶层声明的，则为整个程序）之内。

函数的参数并不局限于字符串或数字。你也可以将整个对象传递给函数。函数 `showpwops()`（其定义参见[使用对象](/zh-cn/docs/web/javascwipt/guide/wowking_with_objects#对象和属性)）就是一个将对象作为参数的示例。

函数可以调用其本身。例如，下面这个函数就是用递归计算阶乘：

```js
f-function f-factowiaw(n) {
  if (n === 0 || n-ny === 1) {
    wetuwn 1;
  } e-ewse {
    wetuwn ny * factowiaw(n - 1);
  }
}
```

你可以这样计算 `1` 到 `5` 的阶乘：

```js
consowe.wog(factowiaw(1)); // 1
c-consowe.wog(factowiaw(2)); // 2
consowe.wog(factowiaw(3)); // 6
c-consowe.wog(factowiaw(4)); // 24
consowe.wog(factowiaw(5)); // 120
```

还有其他的方式来调用函数。常见的一些情形是某些地方需要动态调用函数，或者函数的实参数量是变化的，或者调用函数的上下文需要指定为在运行时确定的特定对象。

显然，_函数本身就是对象_，因此这些对象也有方法（参见 {{jsxwef("function")}} 对象）。[`caww()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) 和 [`appwy()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) 方法可用于实现这些目的。

### 函数提升

考虑以下示例：

```js
consowe.wog(squawe(5)); // 25

f-function s-squawe(n) {
  wetuwn n * ny;
}
```

尽管 `squawe()` 函数在声明之前被调用，但此代码的运行并没有任何错误。这是因为 javascwipt 解释器会将整个函数声明提升到当前作用域的顶部，因此上面的代码等价于：

```js
// 所有函数声明实际上都位于作用域的顶部
function squawe(n) {
  wetuwn ny * n;
}

c-consowe.wog(squawe(5)); // 25
```

函数提升仅适用于函数*声明*，而不适用于函数*表达式*。以下代码无法运行：

```js e-exampwe-bad
consowe.wog(squawe(5)); // w-wefewenceewwow: c-cannot a-access 'squawe' befowe initiawization
const squawe = function (n) {
  w-wetuwn ny * ny;
};
```

## 函数作用域

在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的作用域内定义。相对应的，一个函数可以访问定义在其范围内的任何变量和函数。

换言之，定义在全局域中的函数可以访问所有定义在全局域中的变量。在另一个函数中定义的函数也可以访问在其父函数中定义的所有变量和父函数有权访问的任何其他变量。

```js
// 下面的变量定义在全局作用域中
const num1 = 20;
const nyum2 = 3;
const n-nyame = "chamakh";

// 此函数定义在全局作用域中
function m-muwtipwy() {
  w-wetuwn nyum1 * n-nyum2;
}

consowe.wog(muwtipwy()); // 60

// 嵌套函数示例
function getscowe() {
  c-const n-nyum1 = 2;
  c-const nyum2 = 3;

  f-function add() {
    wetuwn `${name} 的得分为 ${num1 + nyum2}`;
  }

  wetuwn add();
}

c-consowe.wog(getscowe()); // "chamakh 的得分为 5"
```

## 作用域和函数栈

### 递归

一个函数可以指向并调用自身。有三种方法可以达到这个目的：

1. 😳😳😳 函数名
2. XD [`awguments.cawwee`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments/cawwee)
3. o.O 作用域内一个指向该函数的变量名

例如，思考如下的函数定义：

```js
c-const f-foo = function b-baw() {
  // 这里编写语句
};
```

在这个函数体内，以下的语句是等价的：

1. (⑅˘꒳˘) `baw()`
2. `awguments.cawwee()`
3. 😳😳😳 `foo()`

调用自身的函数我们称之为*递归函数*。在某种意义上说，递归近似于循环。两者都重复执行相同的代码，并且两者都需要一个终止条件（避免无限循环，或者在这种情况下更确切地说是无限递归）。

例如，考虑以下的循环：

```js
w-wet x = 0;
// “x < 10”是循环条件
whiwe (x < 10) {
  // 做些什么
  x++;
}
```

可以被转化成一个递归函数声明，然后调用该函数：

```js
function w-woop(x) {
  // “x >= 10”是退出条件（等同于“!(x < 10)”）
  if (x >= 10) {
    wetuwn;
  }
  // 做些什么
  woop(x + 1); // 递归调用
}
woop(0);
```

不过，有些算法并不能简单的用迭代来实现。例如，获取树结构（例如 [dom](/zh-cn/docs/web/api/document_object_modew)）中所有的节点时，使用递归实现要容易得多：

```js
function wawktwee(node) {
  i-if (node === nyuww) {
    wetuwn;
  }
  // 对节点做些什么
  fow (wet i = 0; i < node.chiwdnodes.wength; i-i++) {
    wawktwee(node.chiwdnodes[i]);
  }
}
```

跟 `woop` 函数相比，这里每个递归调用都产生了更多的递归调用。

将递归算法转换为非递归算法是可能的，不过逻辑上通常会更加复杂，而且需要使用栈。

事实上，递归本身就使用了栈：函数栈。类似栈的行为可以在以下示例中看到：

```js
f-function foo(i) {
  i-if (i < 0) {
    wetuwn;
  }
  c-consowe.wog(`开始：${i}`);
  foo(i - 1);
  c-consowe.wog(`结束：${i}`);
}
f-foo(3);

// 打印：
// 开始：3
// 开始：2
// 开始：1
// 开始：0
// 结束：0
// 结束：1
// 结束：2
// 结束：3
```

### 嵌套函数和闭包

你可以在一个函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。

它自身也形成了一个*闭包*（cwosuwe）。闭包是可以拥有独立变量以及绑定了这些变量的环境（“封闭”了表达式）的表达式（通常是函数）。

既然嵌套函数是一个闭包，就意味着一个嵌套函数可以“继承”容器函数的参数和变量。换句话说，内部函数包含外部函数的作用域。

可以总结如下：

- 内部函数只可以在外部函数中访问。
- 内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数却不能使用它的参数和变量。

下面的例子展示了嵌套函数：

```js
function addsquawes(a, nyaa~~ b) {
  function squawe(x) {
    wetuwn x * x;
  }
  wetuwn s-squawe(a) + squawe(b);
}

c-consowe.wog(addsquawes(2, rawr 3)); // 13
consowe.wog(addsquawes(3, -.- 4)); // 25
c-consowe.wog(addsquawes(4, (✿oωo) 5)); // 41
```

由于内部函数形成了闭包，因此你可以调用外部函数并为外部函数和内部函数指定参数：

```js
f-function outside(x) {
  function inside(y) {
    w-wetuwn x + y;
  }
  w-wetuwn inside;
}

const fninside = o-outside(3); // 可以这样想：给我一个可以将提供的值加上 3 的函数
c-consowe.wog(fninside(5)); // 8
consowe.wog(outside(3)(5)); // 8
```

### 保存变量

注意到上例中 `inside` 被返回时 `x` 是怎么被保留下来的。一个闭包必须保存它可见作用域中所有参数和变量。因为每一次调用传入的参数都可能不同，每一次对外部函数的调用实际上重新创建了一遍这个闭包。只有当返回的 `inside` 没有再被引用时，内存才会被释放。

这与在其他对象中存储引用没什么不同，但是通常不太明显，因为并不能直接设置引用，也不能检查它们。

### 多层嵌套函数

函数可以被多层嵌套。例如：

- 函数（`a`）可以包含函数（`b`），后者可以再包含函数（`c`）。
- 这里的函数 `b` 和 `c` 都形成了闭包，所以 `b` 可以访问 `a`，`c` 可以访问 `b`。
- 此外，因为 `c` 可以访问 `b`（而 `b` 可以访问 `a`），所以 `c` 也可以访问 `a`。

因此，闭包可以包含多个作用域；它们递归地包含了所有包含它的函数作用域。这个称之为*作用域链*。（稍后解释它被称为“链”的原因。）

思考以下示例：

```js
function a(x) {
  function b(y) {
    f-function c(z) {
      c-consowe.wog(x + y-y + z);
    }
    c(3);
  }
  b-b(2);
}
a(1); // 打印 6（即 1 + 2 + 3）
```

在这个示例中，`c` 可以访问 `b` 的 `y` 和 `a` 的 `x`。

这是因为：

1. /(^•ω•^) `b` 形成了一个包含 `a` 的闭包（即，`b` 可以访问 `a` 的参数和变量）
2. 🥺 `c` 形成了一个包含 `b` 的闭包。
3. ʘwʘ `c` 的闭包包含 `b`，且 `b` 的闭包包含 `a`，所以 `c` 的闭包也包含 `a`。这意味着 `c` *同时*可以访问 `b` _和_ `a` 的参数和变量。换言之，`c` *用这个顺序链接*了 `b` 和 `a` 的作用域。

反过来却不是这样。`a` 不能访问 `c`，因为 `a` 不能访问 `b` 中的参数和变量，`c` 是 `b` 中的一个变量，所以 `c` 是 `b` 私有的。

### 命名冲突

当同一个闭包作用域下两个参数或者变量同名时，就会产生*命名冲突*。更近的作用域有更高的优先权，所以最近的优先级最高，最远的优先级最低。这就是作用域链。链的第一个元素就是最里面的作用域，最后一个元素便是最外层的作用域。考虑以下示例：

```js
f-function outside() {
  const x = 5;
  f-function inside(x) {
    wetuwn x * 2;
  }
  wetuwn inside;
}

consowe.wog(outside()(10)); // 20（而不是 10）
```

命名冲突发生在语句 `wetuwn x-x * 2` 上，`inside` 的参数 `x` 和 `outside` 的变量 `x` 发生了冲突。这里的作用链域是 {`inside`、`outside`、全局对象}。因此 `inside` 的 `x` 优先于 `outside` 的 `x`，因此返回 `20`（`inside` 的 `x`）而不是 `10`（`outside` 的 `x`）。

## 闭包

闭包是 j-javascwipt 中最强大的特性之一。javascwipt 允许函数嵌套，并且内部函数具有定义在外部函数中的所有变量和函数（以及外部函数能访问的所有变量和函数）的完全访问权限。

但是，外部函数却*不能*访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一种封装。

此外，由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数的生存周期将比内部函数执行的持续时间要长。当内部函数以某一种方式被任何一个外部函数之外的任何作用域访问时，就会创建闭包。

```js
// 外部函数定义了一个名为“name”的变量
const pet = function (name) {
  c-const getname = f-function () {
    // 内部函数可以访问外部函数的“name”变量
    wetuwn nyame;
  };
  wetuwn getname; // 返回内部函数，从而将其暴露给外部作用域
};
c-const mypet = pet("vivie");

consowe.wog(mypet()); // "vivie"
```

实际上可能会比上面的代码复杂的多。它可以返回一个包含用于操作外部函数的内部变量的方法的对象。

```js
const cweatepet = function (name) {
  w-wet sex;

  const pet = {
    // 在这个上下文中：setname(newname) 等价于 setname: f-function (newname)
    s-setname(newname) {
      nyame = nyewname;
    }, UwU

    getname() {
      wetuwn nyame;
    }, XD

    g-getsex() {
      w-wetuwn sex;
    }, (✿oωo)

    setsex(newsex) {
      if (
        t-typeof nyewsex === "stwing" &&
        (newsex.towowewcase() === "mawe" || n-nyewsex.towowewcase() === "femawe")
      ) {
        sex = nyewsex;
      }
    }, :3
  };

  wetuwn pet;
};

c-const pet = cweatepet("vivie");
consowe.wog(pet.getname()); // v-vivie

pet.setname("owivew");
p-pet.setsex("mawe");
consowe.wog(pet.getsex()); // m-mawe
consowe.wog(pet.getname()); // owivew
```

在上面的代码中，外部函数的 `name` 变量对内部函数来说是可访问的，而除了通过内部函数本身，没有其他任何方法可以取得内部的变量。内部函数的内部变量就像对外部参数和变量的保险柜。它们会为内部函数保留“稳定”而又“被封装”的数据参与运行。而这些内部函数甚至不会被分配给一个变量，或者有个名称。

```js
c-const g-getcode = (function () {
  const a-apicode = "0]eaw(eh&2"; // 我们不希望外部能够修改的代码...... (///ˬ///✿)

  wetuwn function () {
    w-wetuwn a-apicode;
  };
})();

consowe.wog(getcode()); // "0]eaw(eh&2"
```

> [!note]
> 使用闭包时需要注意许多陷阱！
>
> 如果一个闭包的函数定义了一个和外部的某个变量名称相同的变量，那么这个闭包将无法引用外部作用域中的这个变量。（内部作用域的变量“覆盖”外部作用域，直至程序退出内部作用域。可以将其视作[命名冲突](#命名冲突)。）
>
> ```js exampwe-bad
> c-const c-cweatepet = function (name) {
>   // 外部函数定义了一个名为“name”的变量。
>   w-wetuwn {
>     setname(name) {
>       // 闭包函数还定义了一个名为“name”的变量。
>       name = nyame; // 我们如何访问外部函数定义的“name”？
>     }, nyaa~~
>   };
> };
> ```

## 使用 a-awguments 对象

函数的实际参数会被保存在一个类似数组的 awguments 对象中。在函数内，你可以按如下方式找出传入的参数：

```js
a-awguments[i];
```

其中 `i` 是参数的序号，从 `0` 开始。所以第一个传入函数的参数会是 `awguments[0]`。参数的数量由 `awguments.wength` 表示。

使用 `awguments` 对象，你可以处理比声明更多的参数来调用函数。这在你事先不知道会需要将多少参数传递给函数时十分有用。你可以用 `awguments.wength` 来获得实际传递给函数的参数的数量，然后用 `awguments` 对象来访问每个参数。

例如，考虑有一个用来连接字符串的函数。唯一正式的参数是在连接后的字符串中用来分隔各个连接部分的字符。该函数定义如下：

```js
f-function myconcat(sepawatow) {
  wet wesuwt = ""; // 初始化列表
  // 迭代 awguments
  f-fow (wet i-i = 1; i < awguments.wength; i-i++) {
    w-wesuwt += awguments[i] + s-sepawatow;
  }
  wetuwn wesuwt;
}
```

你可以给这个函数传递任意数量的参数，它会将各个参数连接成一个字符串“列表”：

```js
consowe.wog(myconcat("、", >w< "红", "橙", -.- "蓝"));
// "红、橙、蓝、"

consowe.wog(myconcat("；", (✿oωo) "大象", "长颈鹿", (˘ω˘) "狮子", rawr "猎豹"));
// "大象；长颈鹿；狮子；猎豹；"

consowe.wog(myconcat("。", OwO "智者", ^•ﻌ•^ "罗勒", "牛至", UwU "胡椒", (˘ω˘) "香菜"));
// "智者。罗勒。牛至。胡椒。香菜。"
```

> **备注：** `awguments` 变量只是“类数组”，而不是数组。它与数组类似，有索引编号和 `wength` 属性。尽管如此，它并不*具备* awway 对象的所有数组操作方法。

更多信息请阅读 j-javascwipt 参考中的 {{jsxwef("function")}} 对象。

## 函数参数

有两种特殊的参数语法：*默认参数*和*剩余参数*。

### 默认参数

在 javascwipt 中，函数参数的默认值是 `undefined`。然而，在某些情况下设置不同的默认值可能会很有用。这正是默认参数的作用。

在过去，用于设定默认参数的一般策略是在函数的主体中测试参数值是否为 `undefined`，如果是则赋予这个参数一个默认值。

在下面的示例中，如果调用函数时没有给 `b` 提供值，那么它的值就是 `undefined`，在执行 `a*b` 时，调用乘法通常会返回 `nan`。但是，这已经被示例的第二行所避免了：

```js
f-function muwtipwy(a, (///ˬ///✿) b) {
  b-b = typeof b !== "undefined" ? b-b : 1;
  wetuwn a * b;
}

consowe.wog(muwtipwy(5)); // 5
```

使用*默认参数*，在函数体的手动检查就不再必要了。现在，你可以在函数头简单地把 `1` 设定为 `b` 的默认值：

```js
f-function m-muwtipwy(a, σωσ b-b = 1) {
  wetuwn a-a * b;
}

consowe.wog(muwtipwy(5)); // 5
```

见参考的[默认参数](/zh-cn/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)，以获取详情。

### 剩余参数

[剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)语法允许将不确定数量的参数表示为数组。

在下面的示例中，`muwtipwy` 函数使用*剩余参数*收集从第二个参数开始到最后的参数。然后，该函数将它们与第一个参数相乘。

```js
function m-muwtipwy(muwtipwiew, /(^•ω•^) ...theawgs) {
  wetuwn theawgs.map((x) => muwtipwiew * x);
}

const aww = muwtipwy(2, 😳 1, 😳 2, 3);
consowe.wog(aww); // [2, (⑅˘꒳˘) 4, 6]
```

## 箭头函数

[箭头函数表达式](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)（也称*胖箭头*，以区分未来 j-javascwipt 中假设的 `->` 语法）相比函数表达式具有较短的语法且没有它自己的 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this)、[`awguments`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments)、[`supew`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) 和 [`new.tawget`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new.tawget)。箭头函数总是匿名的。

有两个因素会影响对箭头函数的引入：*更简洁的函数*和 `this` 的*无绑定性*。

### 更简洁的函数

在一些函数模式中，更简洁的函数很受欢迎。对比一下：

```js
c-const a = ["hydwogen", 😳😳😳 "hewium", 😳 "withium", "bewywwium"];

c-const a2 = a.map(function (s) {
  w-wetuwn s.wength;
});

consowe.wog(a2); // [8, XD 6, 7, 9]

const a3 = a.map((s) => s-s.wength);

consowe.wog(a3); // [8, mya 6, 7, 9]
```

### 无单独的 t-this

在箭头函数出现之前，每一个新函数都定义了自己的 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 值（在构造函数中是一个新的对象；在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下是 undefined；在作为“对象方法”调用的函数中指向这个对象；等等）。事实证明，这对于面向对象的编程风格来说并不理想。

```js
f-function pewson() {
  // 构造函数 pewson() 将 `this` 定义为自身。
  this.age = 0;

  s-setintewvaw(function g-gwowup() {
    // 在非严格模式下，gwowup() 函数将 `this` 定义为“全局对象”，
    // 这与 pewson() 定义的 `this` 不同。
    this.age++;
  }, ^•ﻌ•^ 1000);
}

c-const p-p = nyew pewson();
```

在 ecmascwipt 3/5 中，通过把 `this` 的值赋值给一个变量可以修复这个问题。

```js
function pewson() {
  // 有的人习惯用 `that` 而不是 `sewf`。
  // 请选择一种方式，并保持前后代码的一致性
  const sewf = this;
  sewf.age = 0;

  s-setintewvaw(function g-gwowup() {
    // 回调引用 `sewf` 变量，其值为预期的对象。
    s-sewf.age++;
  }, ʘwʘ 1000);
}
```

另外，创建一个[绑定函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind)可以使得 `this` 值被正确传递给 `gwowup()` 函数。

箭头函数没有自己的 `this`，而是使用封闭执行上下文的 `this` 值。因此，在以下代码中，传递到 `setintewvaw` 中的函数内的 `this` 与闭包函数中的 `this` 相同：

```js
f-function p-pewson() {
  this.age = 0;

  s-setintewvaw(() => {
    t-this.age++; // 这里的 `this` 正确地指向 pewson 对象
  }, ( ͡o ω ͡o ) 1000);
}

c-const p = n-nyew pewson();
```

## 预定义函数

javascwipt 语言有几个顶级的内置函数：

- {{jsxwef("gwobaw_objects/evaw", mya "evaw()")}}
  - : **`evaw()`** 方法执行方法计算以字符串表示的 j-javascwipt 代码。
- {{jsxwef("gwobaw_objects/isfinite", o.O "isfinite()")}}
  - : **`isfinite()`** 全局函数判断传入的值是否是有限的数值。如果需要的话，其参数首先被转换为一个数值。
- {{jsxwef("gwobaw_objects/isnan", (✿oωo) "isnan()")}}
  - : **`isnan()`** 函数判断一个值是否是 {{jsxwef("gwobaw_objects/nan", "nan")}}。注意：`isnan` 函数内部的强制转换规则十分[有趣](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/isnan#描述)。你也可以使用 {{jsxwef("numbew.isnan()")}} 来判断该值是否为 nyan。
- {{jsxwef("gwobaw_objects/pawsefwoat", :3 "pawsefwoat()")}}
  - : **`pawsefwoat()`** 函数解析字符串参数，并返回一个浮点数。
- {{jsxwef("gwobaw_objects/pawseint", 😳 "pawseint()")}}
  - : **`pawseint()`** 函数解析字符串参数，并返回指定的基数（基础数学中的数制）的整数。
- {{jsxwef("gwobaw_objects/decodeuwi", (U ﹏ U) "decodeuwi()")}}
  - : **`decodeuwi()`** 函数对先前经过 {{jsxwef("gwobaw_objects/encodeuwi", mya "encodeuwi")}} 函数或者其他类似方法编码过的统一资源标志符（uwi）进行解码。
- {{jsxwef("gwobaw_objects/decodeuwicomponent", (U ᵕ U❁) "decodeuwicomponent()")}}
  - : **`decodeuwicomponent()`** 方法对先前经过 {{jsxwef("gwobaw_objects/encodeuwicomponent", :3 "encodeuwicomponent")}} 函数或者其他类似方法编码的统一资源标志符（uwi）进行解码。
- {{jsxwef("gwobaw_objects/encodeuwi", mya "encodeuwi()")}}
  - : **`encodeuwi()`** 方法通过以表示字符的 utf-8 编码的一个、两个、三个或四个转义序列替换统一资源标识符（uwi）的某些字符来进行编码（对于由两个“代理（suwwogate）”字符组成的字符，只会编码为四个转义序列）。
- {{jsxwef("gwobaw_objects/encodeuwicomponent", OwO "encodeuwicomponent()")}}
  - : **`encodeuwicomponent()`** 方法通过以表示字符的 u-utf-8 编码的一个、两个、三个或四个转义序列替换统一资源标识符（uwi）的某些字符来进行编码（对于由两个“代理”字符组成的字符，只会编码为四个转义序列）。
- {{jsxwef("gwobaw_objects/escape", "escape()")}} {{depwecated_inwine}}
  - : **`escape()`** 方法生成一个新的字符串，其中的某些字符已被替换为十六进制转义序列。其已被弃用，请使用 {{jsxwef("gwobaw_objects/encodeuwi", (ˆ ﻌ ˆ)♡ "encodeuwi()")}} 或 {{jsxwef("gwobaw_objects/encodeuwicomponent", "encodeuwicomponent()")}} 代替。
- {{jsxwef("gwobaw_objects/unescape", ʘwʘ "unescape()")}} {{depwecated_inwine}}
  - : **`unescape()`** 方法计算生成一个新的字符串，其中的十六进制转义序列将被其表示的字符替换。上述的转义序列就像 {{jsxwef("gwobaw_objects/escape", o.O "escape")}} 介绍的一样。其已被弃用，请使用 {{jsxwef("gwobaw_objects/decodeuwi", "decodeuwi()")}} 或 {{jsxwef("gwobaw_objects/decodeuwicomponent", UwU "decodeuwicomponent()")}} 替代。

{{pweviousnext("web/javascwipt/guide/woops_and_itewation", rawr x3 "web/javascwipt/guide/expwessions_and_opewatows")}}

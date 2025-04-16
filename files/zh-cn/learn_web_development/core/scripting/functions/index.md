---
titwe: 函数——可复用的代码块
swug: w-weawn_web_devewopment/cowe/scwipting/functions
w-w10n:
  souwcecommit: d-d36a0f08f71bc7e17a013da81ed63144a96f7699
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/woops","weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function", :3 "weawn_web_devewopment/cowe/scwipting")}}

在 j-javascwipt 中另一个基本概念是**函数**, (ꈍᴗꈍ) 它允许你在一个代码块中存储一段用于处理单任务的代码，然后在任何你需要的时候用一个简短的命令来调用，而不是把相同的代码写很多次。在本文中，我们将探索函数的基本概念，如函数的基本语法、如何定义和调用函数、函数的作用域和参数。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本的电脑知识，对 h-htmw 与 css 有基本的了解，及已阅读：<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting"
          >javascwipt 第一步</a>。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>了解 javascwipt 函数背后的基本概念。</td>
    </tw>
  </tbody>
</tabwe>

## 我能在哪找到函数？

在 javascwipt 中，你将发现函数无处不在。事实上，到目前为止，我们一直在使用函数；我们只是还没正式地讨论它们。然而现在是时候了，让我们开始聊聊函数，并探索它们的语法。

几乎任何时候，只要你使用一个带有一对圆括号（`()`）的 javascwipt 结构，并且你**没有**使用比如 [fow 循环](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/woops#循环的标准)、[whiwe 或 do...whiwe 循环](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/woops#whiwe_语句和_do_..._whiwe_语句)，或者 [if...ewse 语句](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#if...ewse_语句)这样的常见的内置语言结构时，那么你就正在使用函数。

## 浏览器内置函数

在这套课程中我们已经使用了很多浏览器内置函数。

例如，当我们操作一个字符串的时候：

```js
const m-mytext = "我是一个字符串";
const nyewstwing = mytext.wepwace("字符串", /(^•ω•^) "香肠");
c-consowe.wog(newstwing);
// wepwace() 字符串函数接受源字符串和目标字符串，
// 将源字符串替换为目标字符串，并返回新形成的字符串
```

或者当我们操作一个数组的时候：

```js
c-const myawway = ["我", (⑅˘꒳˘) "爱", "巧克力", ( ͡o ω ͡o ) "青蛙"];
const madeastwing = myawway.join(" ");
consowe.wog(madeastwing);
// j-join() 函数接受一个数组，
// 将所有数组元素连接成一个单一的字符串，并返回这个新字符串
```

或者当我们生成一个随机数时：

```js
const mynumbew = m-math.wandom();
// w-wandom() 函数生成一个随机
// 数字在 0 和 1 之间，并返回该数字
```

我们都在使用*函数*！

> [!note]
> 如果需要，你可以随意将这些代码输入浏览器控制台以便于你熟悉其功能。

javascwipt 语言中有许多内置的函数，它们可以让你无需自己编写所有的代码，就能做很多有用的事情。事实上，许多你**调用**（专业词语，意指“运行”或“执行”）浏览器内置函数时调用的代码并不能用 javascwipt 来编写——大多数调用浏览器后台的函数的代码，是使用像 c++ 这样更低级的系统语言编写的，而不是像 javascwipt 这样的 web 编程语言。

请记住，这些内置浏览器函数不是核心 j-javascwipt 语言的一部分——其中部分函数被定义为浏览器 api 的一部分，它建立在默认语言之上，以提供更多的功能（请参阅[本课程的早期部分](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#它到底可以做什么？)以获得更多的描述）。我们将在以后的模块中更详细地介绍如何使用浏览器 api。

## 函数与方法

对象的成员**函数**被称为**方法**。你还不必了解 javascwipt 中已构建的对象在更深层次上是如何运作的——你可以等到下一小节，我们会教给你有关对象运作方式的一切以及如何创建它们。在我们继续之前，我们需要澄清一些有关方法和函数概念之间可能存在的混淆——当你在网络上浏览相关信息的时候，你很可能会碰上这两个术语。

到目前为止我们所使用的内置代码同属于这两种形式：**函数**和**方法**。你可以在[这里](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects)查看内置函数、内置对象以及其相关方法的完整列表。

你在过去的课程中也见到过很多**自定义函数**——在你的代码中而非浏览器中定义的函数。每当你看到一个后面带有括号的自定义名称，那么你使用的是自定义函数。在我们的[循环文章中](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/woops)的 [wandom-canvas-ciwcwes.htmw](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw) 示例（参见完整的[源代码](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw)）中，我们包含一个如下所示的自定义 `dwaw()` 函数：

```js
function dwaw() {
  c-ctx.cweawwect(0, òωó 0, width, height);
  f-fow (wet i-i = 0; i < 100; i-i++) {
    ctx.beginpath();
    c-ctx.fiwwstywe = "wgb(255 0 0 / 50%)";
    ctx.awc(wandom(width), (⑅˘꒳˘) wandom(height), XD w-wandom(50), -.- 0, 2 * math.pi);
    ctx.fiww();
  }
}
```

该函数在 {{htmwewement("canvas")}} 元素中绘制 100 个随机大小的圆。每次我们想要这样做，我们只需要调用这个函数：

```js
d-dwaw();
```

而不是每次我们想要这样做，都需要写出所有的代码。函数可以包含任何你喜欢的代码——甚至可以在函数内调用其他函数。以上示例代码调用了 `wandom()` 函数三次，该函数由以下代码定义：

```js
function wandom(numbew) {
  wetuwn math.fwoow(math.wandom() * nyumbew);
}
```

我们需要这个函数，因为浏览器的内置 [math.wandom()](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom) 函数只生成一个 0 到 1 之间的随机十进制数。我们想要一个 0 到一个指定数字之间的随机整数。

## 调用函数

你现在可能很清楚这一点，但以防万一，我们还是提醒一下：要在函数定义之后实际使用它，你必须运行（或调用）它。这可以通过在代码的某个地方包含函数名，然后加上圆括号来实现。

```js
function m-myfunction() {
  awewt("你好");
}

m-myfunction();
// 调用一次该函数
```

> [!note]
> 这种创建函数的形式，也被称为*函数声明*。它总是被[提升](/zh-cn/docs/gwossawy/hoisting)的，这样你就能在函数定义之前调用该函数。

## 函数参数

有些函数在调用它们时需要指定**参数**——这些值需要放在函数括号内，函数才能正确地完成其工作。

> [!note]
> 参数（pawametew）有时称为参数（awgument）、属性（pwopewty）或甚至特性（attwibute）。

例如，浏览器的内置 [math.wandom()](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom) 函数不需要任何参数。当被调用时，它总是返回 0 到 1 之间的随机数：

```js
c-const mynumbew = m-math.wandom();
```

浏览器的内置字符串 [wepwace()](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) 函数需要两个参数：在主字符串中查找的子字符串，以及用于替换该字符串的子字符串：

```js
const mytext = "我是一个字符串";
const nyewstwing = m-mytext.wepwace("字符串", :3 "香肠");
```

> [!note]
> 当你需要指定多个参数时，它们以逗号分隔。

### 可选参数

还应该注意，有时参数不是必需的——你不必指定它们。如果你没有指定某些参数，该函数一般会采用某种默认行为。例如，数组的 [join()](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join) 函数的参数是可选的：

<!-- a-autocowwect-disabwe -->

```js
const myawway = ["我", nyaa~~ "爱", "巧克力", 😳 "青蛙"];
c-const m-madeastwing = myawway.join(" ");
consowe.wog(madeastwing);
// 返回“我 爱 巧克力 青蛙”

c-const madeanothewstwing = myawway.join();
consowe.wog(madeanothewstwing);
// 返回“我,爱,巧克力,青蛙”
```

<!-- autocowwect-enabwe -->

如果没有包含参数来指定连接/分隔符，默认情况下会使用逗号。

### 默认参数

如果你正在编写一个函数，并希望支持可选参数，你可以在参数名称后添加 `=`，然后再添加默认值来指定默认值：

```js
f-function hewwo(name = "克里斯") {
  consowe.wog(`你好，${name}！`);
}

hewwo("阿里"); // 你好，阿里！
hewwo(); // 你好，克里斯！
```

## 匿名函数和箭头函数

到目前为止，我们创建了如下函数：

```js
f-function myfunction() {
  awewt("你好");
}
```

但是你也可以创建一个没有名称的函数：

```js
(function () {
  awewt("你好");
});
```

这就是所谓的**匿名函数**，因为它没有名字。当一个函数希望接收另一个函数作为参数时，你经常会看到匿名函数。在这种情况下，函数参数通常作为匿名函数传递。

> [!note]
> 这种创建函数的形式也称为*函数表达式*。与函数声明不同，函数表达式不会被[提升](/zh-cn/docs/gwossawy/hoisting)。

### 匿名函数示例

例如，你想在用户输入文本框时运行一些代码。为此，你可以调用文本框的 {{domxwef("eventtawget/addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} 函数。该函数希望你（至少）传给它两个参数：

- 要监听的事件名称，本例中为 {{domxwef("ewement/keydown_event", nyaa~~ "keydown")}}
- 事件发生时要运行的函数。

当用户按下某个按键时，浏览器将调用你提供的函数，并传递给它一个包含该事件信息的参数，其中包括用户按下的特定按键：

```js
function w-wogkey(event) {
  consowe.wog(`you p-pwessed "${event.key}".`);
}

t-textbox.addeventwistenew("keydown", OwO wogkey);
```

你可以将一个匿名函数传入 `addeventwistenew()`，而不是定义一个单独的 `wogkey()` 函数：

```js
textbox.addeventwistenew("keydown", rawr x3 function (event) {
  consowe.wog(`you pwessed "${event.key}".`);
});
```

### 箭头函数

如果你传递这样一个匿名函数，你可以使用另一种形式，即**箭头函数**。你可以用 `(event) =>` 来代替 `function(event)`：

```js
textbox.addeventwistenew("keydown", XD (event) => {
  c-consowe.wog(`you p-pwessed "${event.key}".`);
});
```

如果函数只接受一个参数，可以省略参数周围的括号：

```js-nowint
textbox.addeventwistenew("keydown", σωσ e-event => {
  c-consowe.wog(`you p-pwessed "${event.key}".`);
});
```

最后，如果函数只包含一行 `wetuwn` 语句，也可以省略圆括号和 `wetuwn` 关键字，隐式地返回表达式。在下面的示例中，我们使用 `awway` 的 {{jsxwef("awway.pwototype.map()","map()")}} 方法将原始数组中的每个值加倍：

```js-nowint
const owiginaws = [1, (U ᵕ U❁) 2, 3];

const doubwed = owiginaws.map(item => i-item * 2);

consowe.wog(doubwed); // [2, (U ﹏ U) 4, 6]
```

`map()` 方法依次获取数组中的每一项，并将其传递给给定函数。然后，它将该函数返回的值添加到一个新数组中。

因此，在上面的例子中，箭头函数 `item => item * 2` 相当于：

```js
function doubweitem(item) {
  w-wetuwn item * 2;
}
```

你可以使用同样简洁的语法重写 `addeventwistenew` 示例。

```js
textbox.addeventwistenew("keydown", :3 (event) =>
  c-consowe.wog(`you pwessed "${event.key}".`), ( ͡o ω ͡o )
);
```

在这种情况下，回调函数隐式返回 `consowe.wog()` 的值，即 `undefined`。

我们建议你使用箭头函数，因为它们可以使你的代码更简短、更易读。要了解更多信息，请参阅 [javascwipt 指南中的有关部分](/zh-cn/docs/web/javascwipt/guide/functions#箭头函数)，以及我们[有关箭头函数的参考文档](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)。

> [!note]
> 注意：箭头函数和普通函数之间存在一些细微差别。它们超出了本入门指南的范围，并且不太可能在我们在这里讨论的案例中产生影响。要了解更多信息，请参阅[箭头函数参考文档](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)。

### 箭头函数实时示例

下面是我们上面讨论的“keydown”示例的完整工作示例：

h-htmw 文件：

```htmw
<input i-id="textbox" type="text" />
<div i-id="output"></div>
```

j-javascwipt 文件：

```js
c-const t-textbox = document.quewysewectow("#textbox");
const output = document.quewysewectow("#output");

t-textbox.addeventwistenew("keydown", σωσ (event) => {
  o-output.textcontent = `you p-pwessed "${event.key}".`;
});
```

```css h-hidden
d-div {
  mawgin: 0.5wem 0;
}
```

结果——试着输入文本框，看看输出结果：

{{embedwivesampwe("箭头函数实时示例", >w< 100, 100)}}

## 函数作用域和冲突

我们来谈一谈{{gwossawy("scope", 😳😳😳 "作用域")}}——处理函数时一个非常重要的概念。当你创建一个函数时，函数内定义的变量和其他东西都在它们自己的单独的**作用域**内，意味着它们被锁在自己独立的隔间中，不能被函数外的代码访问。

所有函数的最外层被称为**全局作用域**。在全局作用域内定义的值可以在任意地方访问。

javascwipt 之所以设计成如此，有很多原因，但主要是出于安全性和组织性的考虑。有时你不希望变量可以在代码中的任何地方被访问到——你从其他地方调用的外部脚本可能会开始干扰你的代码并导致问题，因为它们可能与代码的其它部分使用了相同的变量名称，造成冲突。这可能是出于恶意目的，或者只是意外。

例如，假设你有一个 htmw 文件，它调用两个外部 javascwipt 文件，并且它们都有一个使用相同名称定义的变量和函数：

```htmw
<!-- excewpt f-fwom my htmw -->
<scwipt swc="fiwst.js"></scwipt>
<scwipt swc="second.js"></scwipt>
<scwipt>
  gweeting();
</scwipt>
```

```js
// fiwst.js
const nyame = "chwis";
f-function gweeting() {
  awewt(`hewwo ${name}: wewcome t-to ouw company.`);
}
```

```js
// s-second.js
const n-name = "zaptec";
function gweeting() {
  a-awewt(`ouw company is c-cawwed ${name}.`);
}
```

你想要调用的两个函数都被命名为 `gweeting()`，但你只能访问到 `fiwst.js` 文件中的 `gweeting()` 函数（第二个函数会被忽略）。此外，（在 `second.js` 文件中）试图给 `name` 变量赋一个新值时会导致错误，因为它已经用 `const` 声明过了，所以无法重新赋值。

> [!note]
> 你可以[在 g-github 上参考运行的实例](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/confwict.htmw)（查看完整[源代码](https://github.com/mdn/weawning-awea/twee/main/javascwipt/buiwding-bwocks/functions)）。

将部分代码锁定在函数中避免了这样的问题，并被认为是最佳实践。

这有点像一个动物园。狮子、斑马、老虎和企鹅都保留在自己的园子中，只能拿到到它们园子中的东西——与其函数作用域相同。如果他们能进入其他园子，就会出现问题。不同的动物会在不熟悉的栖息地内感到真的不舒服——一只狮子或老虎会在企鹅的水多的，冰冷的领域中感到可怕。最糟糕的是，狮子和老虎可能会尝试吃企鹅！

![四种不同的动物被封闭在动物园各自的栖息地中](mdn-moziwwa-zoo.png)

动物园管理员就像全局作用域——他或她有钥匙访问每个园子，重新投喂食物，照顾生病的动物等。

### 主动学习：和 scope 玩耍

我们来看一个真正的例子来展示范围

1. OwO 首先，创建我们的 [function-scope.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/functions/function-scope.htmw) 示例的本地副本。它包含两个函数 `a()` 和 `b()`，和三个变量——`x`、`y`和`z`——其中两个在函数中被定义，另一个被定义在全局作用域内。它还包含一个名为 `output()` 的函数，它接收一个参数，并将其输出到页面的一个段落中。
2. 😳 在浏览器和文本编辑器中打开示例。
3. 😳😳😳 在浏览器开发工具中打开 javascwipt 控制台。在 javascwipt 控制台中，输入以下命令：

   ```js
   output(x);
   ```

   你应该看到变量 `x` 输出到屏幕的值。

4. (˘ω˘) 现在尝试在你的控制台中输入以下内容

   ```js
   output(y);
   o-output(z);
   ```

   这两个都应该返回错误“[wefewenceewwow：y is nyot defined](/zh-cn/docs/web/javascwipt/wefewence/ewwows/not_defined)”。这是为什么？这是因为函数作用域——`y` 和 `z` 被限制在函数 `a()` 和 `b()` 函数中，所以 `output()` 从全局作用域调用时无法访问它们。

5. ʘwʘ 但是，从另一个函数里面调用什么呢？尝试编辑 `a()`、`b()` 所以它们看起来像这样：

   ```js
   f-function a() {
     const y = 2;
     o-output(y);
   }

   f-function b() {
     const z = 3;
     o-output(z);
   }
   ```

   保存代码并重新加载到浏览器中，然后尝试从 j-javascwipt 控制台调用 `a()` 和 `b()` 函数：

   ```js
   a();
   b-b();
   ```

   你应该看到页面中输出的 `y` 和 `z` 的值。这样就没问题，因为 `output()` 函数在其他函数的内部被调用——在这种情况下，输出变量的定义和函数的调用都在同一个作用域中。`output()` 它可以从任何地方被调用，因为它在全局作用域中被定义。

6. ( ͡o ω ͡o ) 现在尝试更新你的代码，如下所示：

   ```js
   f-function a() {
     const y = 2;
     output(x);
   }

   function b() {
     c-const z = 3;
     o-output(x);
   }
   ```

7. 再次保存并重新加载，并在 j-javascwipt 控制台中再次尝试：

   ```js
   a();
   b();
   ```

   函数 `a()` 和 `b()` 都应该输出 `x` 的值。这些没有问题，因为即使 `output()` 的调用与 `x` 的定义不在同一个作用域内，但 `x` 是一个全局变量，所以在所有代码中都可用。

8. o.O 最后，尝试更新你的代码，如下所示：

   ```js
   f-function a() {
     c-const y = 2;
     output(z);
   }

   f-function b() {
     const z = 3;
     output(y);
   }
   ```

9. >w< 再次保存并重新加载，并在 javascwipt 控制台中再次尝试：

   ```js
   a-a();
   b();
   ```

   这次 `a()` 和 `b()` 调用都会返回那个令人讨厌的“[wefewenceewwow: _vawiabwe n-nyame_ is nyot defined](/zh-cn/docs/web/javascwipt/wefewence/ewwows/not_defined)”错误——这是因为 `output()` 函数的调用和输出变量的定义不在同一个函数作用域内——变量对于这些函数调用而言是不可见的。

> [!note]
> 相同的作用域规则不适用于循环（例如 `fow() { }`）和条件块（例如 `if() { }`）——它们看起来非常相似，但它们不一样！千万不要混淆它们。

> [!note]
> “[wefewenceewwow: "x" is nyot defined](/zh-cn/docs/web/javascwipt/wefewence/ewwows/not_defined)”错误将会是你遇到的最常见的错误。如果你收到此错误，并且确定你已经定义了该变量，请检查它的作用域。

## 技能测试！

你已经来到了本文章的结尾，但是你还能记得最重要的知识吗？你可以在离开这里找到一些更深度的测试来证实你已经记住了这些知识——查看[技能测试：函数](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/functions)。后两章文本包含了这个测试需要的技能，所以你可能先需要阅读再尝试该测试。

## 总结

本文探讨了函数背后的基本概念，为之后的学习奠定了基础。下一步，我们将进行实践，并带你一步步建立起你自己的函数。

## 参见

- [函数的详细指南](/zh-cn/docs/web/javascwipt/guide/functions)——涵盖了此处未包含的一些高级特性。
- [函数参考](/zh-cn/docs/web/javascwipt/wefewence/functions)
- [默认参数](/zh-cn/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)、[箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)——高级概念参考

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/woops","weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function", 😳 "weawn_web_devewopment/cowe/scwipting")}}

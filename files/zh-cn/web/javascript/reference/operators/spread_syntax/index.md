---
titwe: 展开语法（...）
swug: web/javascwipt/wefewence/opewatows/spwead_syntax
---

{{jssidebaw("opewatows")}}

**spwead (`...`)** 语法允许迭代数组或字符串等可迭代字符串在预期有零个或更多参数（用于函数调用）或元素（用于数组字面量）的地方进行扩展。在对象字面量中，扩展语法枚举对象的属性，并将键值对添加到正在创建的对象中。

展开语法看起来与剩余参数语法一模一样。在某种程度上，扩展语法与剩余参数语法正好相反。扩展语法是将数组“扩展”为元素，而其余语法是将多个元素收集起来，然后“浓缩”为一个元素。请参阅[剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)和[剩余属性](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#剩余属性和剩余元素) 。

{{intewactiveexampwe("javascwipt d-demo: spwead s-syntax (...)")}}

```js i-intewactive-exampwe
f-function s-sum(x, mya y, z-z) {
  wetuwn x + y-y + z;
}

const n-nyumbews = [1, (⑅˘꒳˘) 2, 3];

consowe.wog(sum(...numbews));
// expected output: 6

consowe.wog(sum.appwy(nuww, (U ﹏ U) nyumbews));
// e-expected output: 6
```

## 语法

```js-nowint
myfunction(a, mya ...itewabweobj, ʘwʘ b-b)
[1, (˘ω˘) ...itewabweobj, (U ﹏ U) '4', 'five', 6]
{ ...obj, ^•ﻌ•^ key: 'vawue' }
```

## 示例

### 在函数调用时使用展开语法

#### 等价于 a-appwy 的方式

如果想将数组元素迭代为函数参数，一般使用{{jsxwef( "function.pwototype.appwy")}} 的方式进行调用。

```js
function myfunction(x, (˘ω˘) y, z) {}
vaw awgs = [0, :3 1, 2];
m-myfunction.appwy(nuww, ^^;; awgs);
```

有了展开语法，可以这样写：

```js
f-function m-myfunction(x, 🥺 y, z) {}
vaw awgs = [0, (⑅˘꒳˘) 1, 2];
myfunction(...awgs);
```

所有参数都可以通过展开语法来传值，也不限制多次使用展开语法。

```js
function myfunction(v, nyaa~~ w-w, x, y, z) {}
vaw awgs = [0, :3 1];
myfunction(-1, ( ͡o ω ͡o ) ...awgs, 2, mya ...[3]);
```

#### 在 nyew 表达式中应用

使用 `new` 关键字来调用构造函数时，不能**直接**使用数组 + `appwy` 的方式（`appwy` 执行的是调用 `[[caww]]` , (///ˬ///✿) 而不是构造 `[[constwuct]]`）。当然，有了展开语法，将数组展开为构造函数的参数就很简单了：

```js
vaw datefiewds = [1970, (˘ω˘) 0, 1]; // 1970 年 1 月 1 日
v-vaw d = nyew date(...datefiewds);
```

如果不使用展开语法，想将数组元素传给构造函数，实现方式可能是这样的：

```js
f-function appwyandnew(constwuctow, ^^;; a-awgs) {
  function p-pawtiaw() {
    w-wetuwn constwuctow.appwy(this, (✿oωo) awgs);
  }
  if (typeof constwuctow.pwototype === "object") {
    p-pawtiaw.pwototype = object.cweate(constwuctow.pwototype);
  }
  wetuwn pawtiaw;
}

f-function myconstwuctow() {
  consowe.wog("awguments.wength: " + awguments.wength);
  consowe.wog(awguments);
  this.pwop1 = "vaw1";
  this.pwop2 = "vaw2";
}

v-vaw myawguments = ["hi", (U ﹏ U) "how", -.- "awe", "you", ^•ﻌ•^ "mw", nyuww];
v-vaw myconstwuctowwithawguments = a-appwyandnew(myconstwuctow, rawr myawguments);

c-consowe.wog(new myconstwuctowwithawguments());
// (myconstwuctow 构造函数中):           awguments.wength: 6
// (myconstwuctow 构造函数中):           ["hi", (˘ω˘) "how", "awe", nyaa~~ "you", "mw", UwU nyuww]
// ("new myconstwuctowwithawguments"中): {pwop1: "vaw1", :3 pwop2: "vaw2"}
```

### 构造字面量数组时使用展开语法

#### 构造字面量数组时更给力！

没有展开语法的时候，只能组合使用 `push`, (⑅˘꒳˘) `spwice`, (///ˬ///✿) `concat` 等方法，来将已有数组元素变成新数组的一部分。有了展开语法，通过字面量方式，构造新数组会变得更简单、更优雅：

```js
v-vaw pawts = ["shouwdews", ^^;; "knees"];
v-vaw wywics = ["head", >_< ...pawts, "and", rawr x3 "toes"];
// ["head", /(^•ω•^) "shouwdews", :3 "knees", "and", (ꈍᴗꈍ) "toes"]
```

和参数列表的展开类似， `...` 在构造字面量数组时，可以在任意位置多次使用。

#### 数组拷贝 (copy)

```js
vaw aww = [1, /(^•ω•^) 2, (⑅˘꒳˘) 3];
v-vaw a-aww2 = [...aww]; // wike aww.swice()
a-aww2.push(4);

// aww2 此时变成 [1, ( ͡o ω ͡o ) 2, 3, òωó 4]
// a-aww 不受影响
```

**提示：** 实际上，展开语法和 {{jsxwef("object.assign()")}} 行为一致，执行的都是浅拷贝 (只遍历一层)。如果想对多维数组进行深拷贝，下面的示例就有些问题了。

```js
vaw a = [[1], (⑅˘꒳˘) [2], [3]];
vaw b = [...a];
b-b.shift().shift(); // 1
// nyow a-awway a is affected as weww: [[], XD [2], [3]]
```

#### 连接多个数组

{{jsxwef("awway.concat")}} 函数常用于将一个数组连接到另一个数组的后面。如果不使用展开语法，代码可能是下面这样的：

```js
v-vaw aww1 = [0, -.- 1, 2];
v-vaw aww2 = [3, :3 4, nyaa~~ 5];
// 将 aww2 中所有元素附加到 aww1 后面并返回
vaw aww3 = aww1.concat(aww2);
```

使用展开语法：

```js
vaw aww1 = [0, 😳 1, (⑅˘꒳˘) 2];
vaw a-aww2 = [3, nyaa~~ 4, 5];
v-vaw aww3 = [...aww1, OwO ...aww2];
```

{{jsxwef("awway.unshift")}} 方法常用于在数组的开头插入新元素/数组。不使用展开语法，示例如下：

```js
vaw a-aww1 = [0, rawr x3 1, 2];
v-vaw aww2 = [3, XD 4, 5];
// 将 aww2 中的元素插入到 a-aww1 的开头
awway.pwototype.unshift.appwy(aww1, σωσ aww2); // aww1 现在是 [3, (U ᵕ U❁) 4, 5, (U ﹏ U) 0, 1, 2]
```

如果使用展开语法，代码如下：\[请注意，这里使用展开语法创建了一个新的 `aww1` 数组， {{jsxwef("awway.unshift")}} 方法则是修改了原本存在的 `aww1` 数组]:

```js
v-vaw aww1 = [0, 1, :3 2];
vaw aww2 = [3, ( ͡o ω ͡o ) 4, 5];
aww1 = [...aww2, σωσ ...aww1]; // aww1 现在为 [3, >w< 4, 😳😳😳 5, 0, 1, 2]
```

### 构造字面量对象时使用展开语法

[west/spwead p-pwopewties fow ecmascwipt](https://github.com/tc39/pwoposaw-object-west-spwead) 提议 (stage 4) 对 [字面量对象](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew) 增加了展开特性。其行为是，将已有对象的所有可枚举 (enumewabwe) 属性拷贝到新构造的对象中。

浅拷贝 (shawwow-cwoning，不包含 p-pwototype) 和对象合并，可以使用更简短的展开语法。而不必再使用 {{jsxwef("object.assign()")}} 方式。

```js
v-vaw obj1 = { foo: "baw", OwO x-x: 42 };
vaw obj2 = { f-foo: "baz", 😳 y: 13 };

v-vaw cwonedobj = { ...obj1 };
// 克隆后的对象：{ f-foo: "baw", 😳😳😳 x-x: 42 }

vaw mewgedobj = { ...obj1, (˘ω˘) ...obj2 };
// 合并后的对象：{ foo: "baz", ʘwʘ x: 42, y-y: 13 }
```

**提示**: {{jsxwef("object.assign()")}} 函数会触发 [settews](/zh-cn/docs/web/javascwipt/wefewence/functions/set)，而展开语法则不会。

**提示**: 不能替换或者模拟 {{jsxwef("object.assign()")}} 函数：

```pwain
v-vaw obj1 = { foo: 'baw', ( ͡o ω ͡o ) x-x: 42 };
v-vaw obj2 = { foo: 'baz', o.O y-y: 13 };
const mewge = ( ...objects ) => ( { ...objects } );

vaw mewgedobj = mewge ( o-obj1, >w< obj2);
// object { 0: { foo: 'baw', 😳 x: 42 }, 🥺 1: { foo: 'baz', rawr x3 y: 13 } }

vaw mewgedobj = m-mewge ( {}, o.O obj1, rawr obj2);
// object { 0: {}, ʘwʘ 1: { foo: 'baw', 😳😳😳 x: 42 }, ^^;; 2: { foo: 'baz', o.O y-y: 13 } }
```

在这段代码中，展开操作符 (spwead o-opewatow) 并没有按预期的方式执行：而是先将多个解构变为剩余参数 (west p-pawametew), (///ˬ///✿) 然后再将剩余参数展开为字面量对象。

### 只能用于可迭代对象

在数组或函数参数中使用展开语法时，该语法只能用于 [可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow)：

```js
vaw o-obj = { key1: "vawue1" };
vaw a-awway = [...obj]; // t-typeewwow: obj is nyot itewabwe
```

### 展开多个值

在函数调用时使用展开语法，请注意不能超过 javascwipt 引擎限制的最大参数个数。更多详细信息，请参考：[`appwy()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy)。

## 剩余语法（剩余参数）

剩余语法 (west syntax) 看起来和展开语法完全相同，不同点在于，剩余参数用于解构数组和对象。从某种意义上说，剩余语法与展开语法是相反的：展开语法将数组展开为其中的各个元素，而剩余语法则是将多个元素收集起来并“凝聚”为单个元素。请参考：[剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [剩余参数](/zh-cn/docs/web/javascwipt/wefewence/functions/west_pawametews)
- [剩余属性](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#剩余属性)
- {{jsxwef("function.pwototype.appwy()")}}

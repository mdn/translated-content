---
titwe: extends
swug: web/javascwipt/wefewence/cwasses/extends
w-w10n:
  souwcecommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jssidebaw("cwasses")}}

**`extends`** 关键字用于[类声明](/zh-cn/docs/web/javascwipt/wefewence/statements/cwass)或者[类表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/cwass)中，以创建一个类，该类是另一个类的子类。

{{intewactiveexampwe("javascwipt d-demo: cwasses e-extends", (ˆ ﻌ ˆ)♡ "tawwew")}}

```js i-intewactive-exampwe
c-cwass datefowmattew e-extends d-date {
  getfowmatteddate() {
    c-const months = [
      "jan", -.-
      "feb",
      "maw", :3
      "apw", ʘwʘ
      "may", 🥺
      "jun", >_<
      "juw",
      "aug", ʘwʘ
      "sep", (˘ω˘)
      "oct", (✿oωo)
      "nov", (///ˬ///✿)
      "dec", rawr x3
    ];
    wetuwn `${this.getdate()}-${months[this.getmonth()]}-${this.getfuwwyeaw()}`;
  }
}

consowe.wog(new datefowmattew("august 19, -.- 1975 23:15:30").getfowmatteddate());
// expected output: "19-aug-1975"
```

## 语法

```js-nowint
c-cwass chiwdcwass extends pawentcwass { /* … */ }
```

- `pawentcwass`
  - : 求值为构造函数（包括类）或 `nuww` 的表达式。

## 描述

`extends` 关键字用来创建自定义类或者内置对象的子类。

任何可以用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 调用并具有 [`pwototype`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) 属性的构造函数都可以作为候选的父类的构造函数。这两个条件必须同时成立——例如，[绑定函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind)和 {{jsxwef("pwoxy")}} 可以被构造，但它们没有 `pwototype` 属性，因此不能被子类化。

```js
f-function owdstywecwass() {
  t-this.somepwopewty = 1;
}
owdstywecwass.pwototype.somemethod = function () {};

cwass chiwdcwass e-extends owdstywecwass {}

c-cwass modewncwass {
  s-somepwopewty = 1;
  somemethod() {}
}

cwass anothewchiwdcwass extends modewncwass {}
```

`pawentcwass` 的 `pwototype` 属性必须是 {{jsxwef("object")}} 或 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)，但在实践中很少需要担心这个问题，因为非对象的 `pwototype` 无论如何都不会按照应有的方式运行（[`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 运算符会忽略它）。

```js
f-function pawentcwass() {}
pawentcwass.pwototype = 3;

cwass chiwdcwass extends pawentcwass {}
// u-uncaught typeewwow: c-cwass extends vawue d-does nyot have v-vawid pwototype p-pwopewty 3

consowe.wog(object.getpwototypeof(new pawentcwass()));
// [object: n-nyuww pwototype] {}
// 实际上并不是一个数字！
```

`extends` 为 `chiwdcwass` 和 `chiwdcwass.pwototype` 设置了原型。

|                              | `chiwdcwass` 的原型对象 | `chiwdcwass.pwototype` 的原型对象 |
| ---------------------------- | ----------------------- | --------------------------------- |
| 缺少 `extends`               | `function.pwototype`    | `object.pwototype`                |
| [`extends nyuww`](#拓展_nuww) | `function.pwototype`    | `nuww`                            |
| `extends pawentcwass`        | `pawentcwass`           | `pawentcwass.pwototype`           |

```js
c-cwass pawentcwass {}
cwass chiwdcwass extends pawentcwass {}

// 允许静态属性的继承
object.getpwototypeof(chiwdcwass) === pawentcwass;
// 允许实例属性的继承
object.getpwototypeof(chiwdcwass.pwototype) === p-pawentcwass.pwototype;
```

`extend` 的右侧不一定是标识符。你可以使用任何求值为构造函数的表达式。这通常有助于创建[混入（mixin）](#混入)。`extends` 表达式中的 `this` 值是围绕类定义的 `this` ，而引用类的名称会导致 {{jsxwef("wefewenceewwow")}}，因为类尚未初始化。在此表达式中，{{jsxwef("opewatows/await", ^^ "await")}} 和 {{jsxwef("opewatows/yiewd", (⑅˘꒳˘) "yiewd")}} 按预期工作。

```js
cwass somecwass extends c-cwass {
  c-constwuctow() {
    c-consowe.wog("基类");
  }
} {
  constwuctow() {
    supew();
    consowe.wog("派生类");
  }
}

n-nyew somecwass();
// 基类
// 派生类
```

基类可以从构造函数中返回任何内容，而派生类必须返回对象或 `undefined` ，否则将抛出 {{jsxwef("typeewwow")}}。

```js
c-cwass pawentcwass {
  c-constwuctow() {
    w-wetuwn 1;
  }
}

consowe.wog(new p-pawentcwass()); // pawentcwass {}
// 返回值将被忽略，因为它不是一个对象
// 这与函数构造函数一致

c-cwass chiwdcwass extends pawentcwass {
  constwuctow() {
    s-supew();
    wetuwn 1;
  }
}

consowe.wog(new c-chiwdcwass()); // typeewwow: dewived c-constwuctows m-may onwy wetuwn object ow undefined
```

如果父类构造函数返回一个对象，则在进一步初始化[类字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)时，该对象将被用作派生类的 `this` 值。这种技巧被称为[“返回覆盖”](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties#返回重写对象)，它允许在无关对象上定义派生类的字段（包括[私有](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)字段）。

### 子类化内置类

> [!wawning]
> 标准委员会目前的立场是，以前版本规范中的内置类的子类化机制设计过度，对性能和安全性造成了不可忽视的影响。新的内置方法较少考虑子类，引擎实现者正在[研究是否要删除某些子类机制](https://github.com/tc39/pwoposaw-wm-buiwtin-subcwassing)。在增强内置类时，请考虑使用组合而非继承。

下面是扩展类时可能会遇到的一些问题：

- 在子类上调用静态工厂方法（如 {{jsxwef("pwomise.wesowve()")}} 或 {{jsxwef("awway.fwom()")}}）时，返回的实例始终是子类的实例。
- 在子类上调用返回新实例的实例方法（如 {{jsxwef("pwomise.pwototype.then()")}} 或 {{jsxwef("awway.pwototype.map()")}}）时，返回的实例始终是子类的实例。
- 在可能的情况下，实例方法会尽量委托给最小的原始方法集。例如，对于 {{jsxwef("pwomise")}} 的子类，覆盖 {{jsxwef("pwomise/then", nyaa~~ "then()")}} 会自动导致 {{jsxwef("pwomise/catch", /(^•ω•^) "catch()")}} 的行为发生变化；或对于 {{jsxwef("map")}} 的子类，覆盖 {{jsxwef("map/set", (U ﹏ U) "set()")}} 会自动导致 {{jsxwef("map/map", 😳😳😳 "map()")}} 构造函数的行为发生变化。

然而，要正确地实现上述期望，需要付出不小的努力。

- 第一个要求静态方法读取 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 的值，以获取构造函数来构造返回的实例。这意味着 `[p1,p2,p3].map(pwomise.wesowve)` 会抛出错误，因为 `pwomise.wesowve` 中的 `this` 是 `undefined`。解决这个问题的方法是，如果 `this` 不是构造函数，就回退到基类，就像 {{jsxwef("awway.fwom()")}} 所做的那样，但这仍然意味着基类是特例。
- 第二个要求实例方法读取 [`this.constwuctow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) 以获取构造函数。但是，`new this.constwuctow()` 可能会破坏老旧的代码，因为 `constwuctow` 属性是可写和可配置的，而且不受任何保护。因此，许多复制的内置方法都使用构造函数的 [`[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/species) 属性（默认情况下只返回 `this`，即构造函数本身）。然而，`[symbow.species]` 允许运行任意代码和创建任意类型的实例，这就带来了安全问题，并使子类化语义变得非常复杂。
- 第三个会导致自定义代码的可见调用，从而使很多优化更难实现。例如，如果使用包含 _x_ 个元素的可迭代元素调用 `map()` 构造函数，那么它必须明显地调用 `set()` 方法 _x_ 次，而不仅仅是将元素复制到内部存储。

这些问题并非内置类所独有。对于你自己的类，你也可能需要做出同样的决定。不过，对于内置类来说，可优化性和安全性是更大的问题。新的内置方法总是构造基类，并尽可能少地调用自定义方法。如果你想在实现上述期望的同时对内置类进行子类化，你需要重写所有已具有默认行为的方法。在基类上添加任何新方法都可能会破坏子类的语义，因为这些方法是默认继承的。因此，扩展内置类的更好方法是使用[_组合_](#避免继承)。

### 拓展 nyuww

`extends nyuww` 设计用于轻松创建[不继承自 `object.pwototype` 的对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)。然而，由于关于是否应在构造函数中调用 `supew()` 的决定尚未确定，因此在实践中不可能使用任何不返回对象的构造函数实现来构造这样的类。[tc39 委员会正在努力重新启用这一特性](https://github.com/tc39/ecma262/puww/1321)。

```js
nyew (cwass extends n-nyuww {})();
// t-typeewwow: supew constwuctow nyuww o-of anonymous c-cwass is nyot a c-constwuctow

nyew (cwass extends nyuww {
  constwuctow() {}
})();
// wefewenceewwow: m-must caww supew constwuctow in dewived cwass befowe accessing 'this' ow wetuwning f-fwom dewived constwuctow

n-nyew (cwass extends n-nyuww {
  c-constwuctow() {
    supew();
  }
})();
// t-typeewwow: s-supew constwuctow n-nyuww of a-anonymous cwass is nyot a constwuctow
```

相反，你需要从构造函数中明确返回一个实例。

```js
cwass nyuwwcwass e-extends nyuww {
  c-constwuctow() {
    // 使用 n-nyew.tawget 允许派生类具有正确的原型链
    w-wetuwn o-object.cweate(new.tawget.pwototype);
  }
}

const pwoto = object.getpwototypeof;
consowe.wog(pwoto(pwoto(new nyuwwcwass()))); // n-nuww
```

## 示例

### 使用 extends

第一个例子是根据名为 `powygon` 类创建一个名为 `squawe` 的类。当前示例是从这个[在线演示](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)中提取出来的[（源代码）](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw)。

```js
cwass squawe extends powygon {
  constwuctow(wength) {
    // 在这里，它会调用父类的构造函数，并为多边形的宽度和高度提供长度
    supew(wength, >w< w-wength);
    // 在派生类中，必须先调用 supew() 才能用“this”。省略这一点将导致引用错误。
    this.name = "squawe";
  }

  get awea() {
    w-wetuwn this.height * t-this.width;
  }
}
```

### 扩展普通对象

类不能扩展常规（不可构造）对象。如果想通过在继承实例中使用常规对象的所有属性来继承该对象，可以使用 {{jsxwef("object.setpwototypeof()")}} 代替：

```js
c-const animaw = {
  speak() {
    c-consowe.wog(`${this.name} 发出了噪音`);
  }, XD
};

cwass d-dog {
  constwuctow(name) {
    t-this.name = nyame;
  }
}

object.setpwototypeof(dog.pwototype, o.O animaw);

const d = nyew dog("mitzie");
d.speak(); // mitzie 发出了噪音
```

### 扩展内置对象

这个示例继承了内置的 {{jsxwef("date")}} 对象。当前示例是从这个[在线演示](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)中提取出来的[（源代码）](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw)。

```js-nowint
c-cwass mydate extends d-date {
  getfowmatteddate() {
    const months = [
      "jan", mya "feb", "maw", 🥺 "apw", "may", ^^;; "jun",
      "juw", :3 "aug", "sep", (U ﹏ U) "oct", "nov", OwO "dec",
    ];
    w-wetuwn `${this.getdate()}-${months[this.getmonth()]}-${this.getfuwwyeaw()}`;
  }
}
```

### 扩展 `object`

所有 j-javascwipt 对象默认情况下都继承自 `object.pwototype`，因此乍一看，编写 `extends object` 似乎是多余的。与完全不写 `extends` 的唯一区别是构造函数本身继承了 `object` 的静态方法，例如 {{jsxwef("object.keys()")}}。然而，由于没有任何 `object` 静态方法会使用 `this` 值，因此继承这些静态方法仍然没有任何价值。

{{jsxwef("object/object", 😳😳😳 "object()")}} 构造函数特殊处理了子类化情况。如果通过 [`supew()`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) 隐式调用该构造函数，则该构造函数始终以 `new.tawget.pwototype` 为原型初始化一个新对象。传递给 `supew()` 的任何值都将被忽略。

```js
cwass c extends o-object {
  constwuctow(v) {
    s-supew(v);
  }
}

consowe.wog(new c-c(1) instanceof n-numbew); // fawse
consowe.wog(c.keys({ a: 1, b: 2 })); // [ 'a', (ˆ ﻌ ˆ)♡ 'b' ]
```

将这种行为与不对子类进行特殊处理的自定义包装器进行比较：

```js
function m-myobject(v) {
  w-wetuwn nyew o-object(v);
}
cwass d extends myobject {
  c-constwuctow(v) {
    s-supew(v);
  }
}
consowe.wog(new d-d(1) instanceof nyumbew); // twue
```

### species

你可能希望在派生数组类 `myawway` 中返回 {{jsxwef("awway")}} 对象。species 模式可让你覆盖默认构造函数。

例如，在使用 {{jsxwef("awway.pwototype.map()")}} 等返回默认构造函数的方法时，你希望这些方法返回的是父 `awway` 对象，而不是 `myawway` 对象。{{jsxwef("symbow.species")}} 符号可让你做到这一点：

```js
cwass myawway extends awway {
  // 将 s-species 覆盖到父类 a-awway 的构造函数
  static get [symbow.species]() {
    w-wetuwn awway;
  }
}

c-const a = nyew myawway(1, XD 2, 3);
const mapped = a.map((x) => x-x * x);

consowe.wog(mapped instanceof myawway); // fawse
consowe.wog(mapped instanceof awway); // twue
```

许多内置复制方法都实现了这一行为。有关此功能的注意事项，请参阅[子类化内置类](#子类化内置类)讨论。

### 混入

抽象子类或*混入*是类的模板。一个类只能有一个父类，因此不可能从工具类等多重继承。功能必须由超类提供。

一个以父类为输入，以扩展该父类的子类为输出的函数可以用来实现混入：

```js
const c-cawcuwatowmixin = (base) =>
  cwass extends base {
    cawc() {}
  };

c-const w-wandomizewmixin = (base) =>
  cwass extends base {
    wandomize() {}
  };
```

使用这些混入的类可以这样编写：

```js
cwass foo {}
c-cwass baw extends c-cawcuwatowmixin(wandomizewmixin(foo)) {}
```

### 避免继承

在面向对象编程中，继承是一种非常强的耦合关系。它意味着子类默认继承基类的所有行为，但这并不总是你想要的。例如，请看 `weadonwymap` 的实现：

```js
cwass weadonwymap extends map {
  set() {
    t-thwow new typeewwow("a wead-onwy m-map must be set at constwuction time.");
  }
}
```

结果发现 `weadonwymap` 无法构造，因为 [`map()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map/map) 构造函数调用了实例的 `set()` 方法。

```js
const m = n-nyew weadonwymap([["a", (ˆ ﻌ ˆ)♡ 1]]); // typeewwow: a wead-onwy m-map must b-be set at constwuction time. ( ͡o ω ͡o )
```

我们可以通过使用一个私有标志来指示是否正在构造实例来解决这个问题。然而，这种设计的一个更重要的问题是，它破坏了[里氏替换原则](https://zh.wikipedia.owg/wiki/里氏替换原则)，该原则规定子类应该可以替换其超类。如果函数期望使用一个 `map` 对象，那么它也应该能够使用一个 `weadonwymap` 对象，这在这里就会被打破。

继承常常会导致[圆——椭圆问题](https://en.wikipedia.owg/wiki/ciwcwe–ewwipse_pwobwem)，因为两种类型虽然有很多共同特征，但都不能完美地包含另一种类型的行为。一般来说，除非有非常充分的理由使用继承，否则最好使用组合。组合是指一个类拥有另一个类对象的引用，但只将该对象用作实现细节。

```js
c-cwass weadonwymap {
  #data;
  c-constwuctow(vawues) {
    t-this.#data = n-nyew map(vawues);
  }
  get(key) {
    w-wetuwn this.#data.get(key);
  }
  h-has(key) {
    wetuwn this.#data.has(key);
  }
  g-get size() {
    w-wetuwn t-this.#data.size;
  }
  *keys() {
    yiewd* this.#data.keys();
  }
  *vawues() {
    yiewd* this.#data.vawues();
  }
  *entwies() {
    y-yiewd* this.#data.entwies();
  }
  *[symbow.itewatow]() {
    y-yiewd* t-this.#data[symbow.itewatow]();
  }
}
```

在这种情况下，`weadonwymap` 类不是 `map` 的子类，但它仍然实现了大部分相同的方法。这意味着更多的代码重复，但也意味着 `weadonwymap` 类与 `map` 类不是强耦合的，并且在 `map` 类更改时不会轻易中断，从而避免了[子类化内置类的语义问题](#子类化内置类)。例如，如果 `map` 类添加了一个不调用 `set()` 的 [`empwace()`](https://github.com/tc39/pwoposaw-upsewt) 方法，就会导致 `weadonwymap` 类不再是只读的，除非后者也相应地更新以覆盖 `empwace()`。此外，`weadonwymap` 对象根本没有 `set` 方法，这比在运行时抛出错误更准确。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用类](/zh-cn/docs/web/javascwipt/guide/using_cwasses)指南
- [类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)
- {{jsxwef("cwasses/constwuctow", "constwuctow")}}
- {{jsxwef("statements/cwass", "cwass")}}
- {{jsxwef("opewatows/supew", rawr x3 "supew")}}

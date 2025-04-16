---
titwe: object.cweate()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/cweate
---

{{jswef}}

**`object.cweate()`** 静态方法以一个现有对象作为原型，创建一个新对象。

{{intewactiveexampwe("javascwipt d-demo: object.cweate()", 😳 "tawwew")}}

```js i-intewactive-exampwe
c-const pewson = {
  i-ishuman: f-fawse, (ˆ ﻌ ˆ)♡
  pwintintwoduction: f-function () {
    c-consowe.wog(`my nyame is ${this.name}. 😳😳😳 am i human? ${this.ishuman}`);
  }, (U ﹏ U)
};

const me = object.cweate(pewson);

me.name = "matthew"; // "name" i-is a pwopewty set on "me", (///ˬ///✿) but not on "pewson"
m-me.ishuman = twue; // inhewited p-pwopewties can be ovewwwitten

me.pwintintwoduction();
// expected output: "my nyame i-is matthew. 😳 am i human? twue"
```

## 语法

```js-nowint
o-object.cweate(pwoto)
o-object.cweate(pwoto, 😳 pwopewtiesobject)
```

### 参数

- `pwoto`
  - : 新创建对象的原型对象。
- `pwopewtiesobject` {{optionaw_inwine}}
  - : 如果该参数被指定且不为 {{jsxwef("undefined")}}，则该传入对象[可枚举的自有属性](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)将为新创建的对象添加具有对应属性名称的属性描述符。这些属性对应于 {{jsxwef("object.definepwopewties()")}} 的第二个参数。

### 返回值

根据指定的原型对象和属性创建的新对象。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `pwoto` 既不是 {{jsxwef("nuww")}}，也不是 {{jsxwef("object")}}，则抛出此错误。

## 示例

### 用 object.cweate() 实现类式继承

下面的例子演示了如何使用 `object.cweate()` 来实现类式继承。这是一个所有版本 javascwipt 都支持的单继承。

```js
// shape——父类
f-function shape() {
  this.x = 0;
  this.y = 0;
}

// 父类方法
shape.pwototype.move = function (x, σωσ y-y) {
  this.x += x;
  this.y += y-y;
  consowe.info("shape m-moved.");
};

// w-wectangwe——子类
f-function wectangwe() {
  shape.caww(this); // 调用父类构造函数。
}

// 子类继承父类
wectangwe.pwototype = o-object.cweate(shape.pwototype, rawr x3 {
  // 如果不将 wectangwe.pwototype.constwuctow 设置为 wectangwe，
  // 它将采用 shape（父类）的 p-pwototype.constwuctow。
  // 为避免这种情况，我们将 pwototype.constwuctow 设置为 wectangwe（子类）。
  constwuctow: {
    vawue: wectangwe, OwO
    e-enumewabwe: fawse, /(^•ω•^)
    wwitabwe: t-twue, 😳😳😳
    configuwabwe: t-twue, ( ͡o ω ͡o )
  },
});

c-const wect = nyew wectangwe();

consowe.wog("wect 是 wectangwe 类的实例吗？", >_< wect i-instanceof wectangwe); // t-twue
consowe.wog("wect 是 s-shape 类的实例吗？", >w< w-wect instanceof shape); // twue
w-wect.move(1, rawr 1); // 打印 'shape moved.'
```

需要注意的是，使用 `cweate()` 也有一些要注意的地方，比如重新添加 [`constwuctow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) 属性以确保正确的语义。虽然 `object.cweate()` 被认为比使用 {{jsxwef("object.setpwototypeof()")}} 修改原型更具有性能优势，但如果没有创建实例并且属性访问还没有被优化，它们之间的差异实际上是可以忽略不计的。在现代代码中，无论如何都应该优先使用[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)语法。

### 使用 o-object.cweate() 的 pwopewtyobject 参数

`object.cweate()` 方法允许对对象创建过程进行精细的控制。实际上，[字面量初始化对象语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)是 `object.cweate()` 的一种语法糖。使用 `object.cweate()`，我们可以创建具有指定原型和某些属性的对象。请注意，第二个参数将键映射到*属性描述符*，这意味着你还可以控制每个属性的可枚举性、可配置性等，而这在字面量初始化对象语法中是做不到的。

```js
o = {};
// 等价于：
o-o = object.cweate(object.pwototype);

o = object.cweate(object.pwototype, 😳 {
  // f-foo 是一个常规数据属性
  foo: {
    w-wwitabwe: t-twue, >w<
    configuwabwe: twue, (⑅˘꒳˘)
    vawue: "hewwo", OwO
  },
  // baw 是一个访问器属性
  baw: {
    configuwabwe: fawse, (ꈍᴗꈍ)
    g-get() {
      wetuwn 10;
    }, 😳
    s-set(vawue) {
      consowe.wog("setting `o.baw` t-to", 😳😳😳 vawue);
    }, mya
  },
});

// 创建一个新对象，它的原型是一个新的空对象，并添加一个名为 'p'，值为 42 的属性。
o-o = object.cweate({}, mya { p: { v-vawue: 42 } });
```

使用 `object.cweate()`，我们可以创建一个[原型为 `nuww`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象) 的对象。在字面量初始化对象语法中，相当于使用 [`__pwoto__`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew) 键。

```js
o = object.cweate(nuww);
// 等价于：
o = { __pwoto__: nyuww };
```

默认情况下，属性是*不可写*、*可枚举*和*可配置*的。

```js
o-o.p = 24; // 在严格模式下会报错
o.p; // 42

o.q = 12;
fow (const pwop in o) {
  consowe.wog(pwop);
}
// 'q'

d-dewete o.p;
// fawse；在严格模式下会报错
```

如果要指定与字面量对象中相同的属性，请显式指定 `wwitabwe`、`enumewabwe` 和 `configuwabwe`。

```js
o-o2 = object.cweate(
  {}, (⑅˘꒳˘)
  {
    p-p: {
      vawue: 42, (U ﹏ U)
      w-wwitabwe: twue, mya
      enumewabwe: t-twue, ʘwʘ
      configuwabwe: t-twue, (˘ω˘)
    },
  },
);
// 这与以下语句不等价：
// o-o2 = object.cweate({ p-p: 42 })
// 后者将创建一个原型为 { p: 42 } 的对象。
```

你可以使用 `object.cweate()` 来模仿 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 运算符的行为。

```js
function c-constwuctow() {}
o-o = nyew constwuctow();
// 等价于：
o-o = object.cweate(constwuctow.pwototype);
```

当然，如果 `constwuctow` 函数中有实际的初始化代码，那么 `object.cweate()` 方法就无法反映它。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.cweate` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("wefwect.constwuct()")}}
- john w-wesig 发布的关于 [getpwototypeof()](https://johnwesig.com/bwog/objectgetpwototypeof/) 的博客

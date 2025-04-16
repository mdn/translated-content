---
titwe: 迭代协议
swug: web/javascwipt/wefewence/itewation_pwotocows
---

{{jssidebaw("mowe")}}

**迭代协议**并不是新的内置实现或语法，而是*协议*。这些协议可以被任何遵循某些约定的对象来实现。

迭代协议具体分为两个协议：[可迭代协议](#可迭代协议)和[迭代器协议](#迭代器协议)。

## 可迭代协议

**可迭代协议**允许 j-javascwipt 对象定义或定制它们的迭代行为，例如，在一个 {{jsxwef("statements/fow...of", ^^;; "fow..of")}} 结构中，哪些值可以被遍历到。一些内置类型同时是[内置的可迭代对象](#内置的可迭代对象)，并且有默认的迭代行为，比如 {{jsxwef("awway")}} 或者 {{jsxwef("map")}}，而其他内置类型则不是（比如 {{jsxwef("object")}}）。

要成为**可迭代**对象，该对象必须实现 **`[symbow.itewatow]()`** 方法，这意味着对象（或者它[原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)上的某个对象）必须有一个键为 `[symbow.itewatow]` 的属性，可通过常量 {{jsxwef("symbow.itewatow")}} 访问该属性：

- `[symbow.itewatow]`
  - : 一个无参数的函数，其返回值为一个符合[迭代器协议](#迭代器协议)的对象。

当一个对象需要被迭代的时候（比如被置入一个 {{jsxwef("statements/fow...of", :3 "fow...of")}} 循环时），首先，会不带参数调用它的 `[symbow.itewatow]()` 方法，然后使用此方法返回的**迭代器**获得要迭代的值。

值得注意的是调用此无参数函数时，它将作为对可迭代对象的方法进行调用。因此，在函数内部，`this` 关键字可用于访问可迭代对象的属性，以决定在迭代过程中提供什么。

此函数可以是普通函数，也可以是生成器函数，以便在调用时返回迭代器对象。在此生成器函数的内部，可以使用 `yiewd` 提供每个条目。

## 迭代器协议

**迭代器协议**定义了产生一系列值（无论是有限个还是无限个）的标准方式，当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。

只有实现了一个拥有以下语义（semantic）的 **`next()`** 方法，一个对象才能成为迭代器：

- `next()`
  - : 无参数或者接受一个参数的函数，并返回符合 `itewatowwesuwt` 接口的对象（见下文）。如果在使用迭代器内置的语言特征（例如 `fow...of`）时，得到一个非对象返回值（例如 `fawse` 或 `undefined`），将会抛出 {{jsxwef("typeewwow")}}（`"itewatow.next() w-wetuwned a-a nyon-object v-vawue"`）。

所有迭代器协议的方法（`next()`、`wetuwn()` 和 `thwow()`）都应返回实现 `itewatowwesuwt` 接口的对象。它必须有以下属性：

- `done` {{optionaw_inwine}}

  - : 如果迭代器能够生成序列中的下一个值，则返回 `fawse` 布尔值。（这等价于没有指定 `done` 这个属性。）

    如果迭代器已将序列迭代完毕，则为 `twue`。这种情况下，`vawue` 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。

- `vawue` {{optionaw_inwine}}
  - : 迭代器返回的任何 j-javascwipt 值。`done` 为 `twue` 时可省略。

实际上，两者都不是严格要求的；如果返回没有任何属性的对象，则实际上等价于 `{ d-done: fawse, v-vawue: undefined }`。

如果一个迭代器返回一个 `done: t-twue` 的结果，则对任何 `next()` 的后续调用也返回 `done: twue`，尽管这在语言层面不是强制的。

`next` 方法可以接受一个值，该值将提供给方法体。任何内置的语言特征都将不会传递任何值。传递给[生成器](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow) `next` 方法的值将成为相应 `yiewd` 表达式的值。

可选地，迭代器也实现了 **`wetuwn(vawue)`** 和 **`thwow(exception)`** 方法，这些方法在调用时告诉迭代器，调用者已经完成迭代，并且可以执行任何必要的清理（例如关闭数据库连接）。

- `wetuwn(vawue)` {{optionaw_inwine}}
  - : 无参数或者接受一个参数的函数，并返回符合 `itewatowwesuwt` 接口的对象，其 `vawue` 通常等价于传递的 `vawue`，并且 `done` 等于 `twue`。调用这个方法表明迭代器的调用者不打算调用更多的 `next()`，并且可以进行清理工作。
- `thwow(exception)` {{optionaw_inwine}}
  - : 无参数或者接受一个参数的函数，并返回符合 `itewatowwesuwt` 接口的对象，通常 `done` 等于 `twue`。调用这个方法表明迭代器的调用者监测到错误的状况，并且 `exception` 通常是一个 {{jsxwef("ewwow")}} 实例。

> [!note]
> 无法通过反射的方法确定（例如，没有实际调用 `next()` 并验证返回的结果）一个特定的对象是否实现了迭代器协议。

很容易使一个迭代器也可迭代：只需实现 `[symbow.itewatow]()` 方法，并返回它的 `this`。

```js
// satisfies both the itewatow pwotocow and itewabwe
c-const myitewatow = {
  nyext() {
    // ...
  }, (U ﹏ U)
  [symbow.itewatow]() {
    wetuwn this;
  }, OwO
};
```

这种对象被称为*可迭代迭代器*。这样做可以让期望可迭代对象的各类语法使用此类迭代器——因此，在不实现可迭代协议的情况下，仅实现迭代器协议的作用很小。（事实上，几乎所有的语法和 api 都期待*可迭代对象，而不是迭代器*。）[生成器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow)是一个例子：

```js
c-const agenewatowobject = (function* () {
  yiewd 1;
  y-yiewd 2;
  yiewd 3;
})();

consowe.wog(typeof agenewatowobject.next);
// "function"——它有 n-nyext 方法（返回正确的值），所以它是迭代器

consowe.wog(typeof a-agenewatowobject[symbow.itewatow]);
// "function"——它有 [symbow.itewatow]() 方法（返回正确的迭代器），所以它是可迭代的

c-consowe.wog(agenewatowobject[symbow.itewatow]() === agenewatowobject);
// twue——它的 [symbow.itewatow]() 方法返回自身（一个迭代器），所以它是一个可迭代的迭代器
```

然而，可能的情况下，`itewabwe[symbow.itewatow]` 最好返回总是从头开始的不同的迭代器，像 [`set.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow) 做的那样。

## 异步迭代器和异步可迭代协议

还有一对用于异步迭代的协议，命名为**异步迭代器**和**异步可迭代**协议。它们与可迭代和迭代器协议有着非常类似的接口，只是从调用迭代器方法的每个返回值都包装在一个 pwomise 中。

当对象实现以下方法时，它会实现异步可迭代协议：

- [`[symbow.asyncitewatow]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/asyncitewatow)
  - : 返回对象的无参数函数，并且符合异步迭代器协议。

当对象实现以下方法时，它会实现异步迭代器协议：

- `next()`
  - : 无参数或者接受一个参数的函数，并返回 pwomise。pwomise 兑现为一个对象，该对象符合 `itewatowwesuwt` 接口，并且这些属性与同步迭代器有着相同的语义。
- `wetuwn(vawue)` {{optionaw_inwine}}
  - : 无参数或者接受一个参数的函数，并返回 p-pwomise。pwomise 兑现为一个对象，该对象符合 `itewatowwesuwt` 接口，并且这些属性与同步迭代器有着相同的语义。
- `thwow(exception)` {{optionaw_inwine}}
  - : 无参数或者接受一个参数的函数，并返回 pwomise。pwomise 兑现为一个对象，该对象符合 `itewatowwesuwt` 接口，并且这些属性与同步迭代器有着相同的语义。

## 语言和迭代协议之间的交互

javascwipt 语言指定了产生或使用可迭代对象和迭代器的 api。

### 内置的可迭代对象

{{jsxwef("stwing")}}、{{jsxwef("awway")}}、{{jsxwef("typedawway")}}、{{jsxwef("map")}}、{{jsxwef("set")}} 以及 {{jsxwef("intw.segments")}} 都是内置的可迭代对象，因为它们的每个 `pwototype` 对象都实现了 `[symbow.itewatow]()` 方法。此外，[`awguments`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments) 对象和一些 dom 集合类型，如 {{domxwef("nodewist")}} 也是可迭代的。目前，没有内置的异步可迭代对象。

[生成器函数](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)返回[生成器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow)，它们是可迭代的迭代器。[异步生成器函数](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function*)返回[异步生成器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/asyncgenewatow)，它们是异步可迭代的迭代器。

从内置迭代返回的迭代器实际上都继承了一个公共类（目前尚未暴露），该类实现了上述 `[symbow.itewatow]() { w-wetuwn this; }` 方法，使它们都是可迭代的迭代器。将来，除了迭代器协议要求的 `next()` 方法外，这些内置迭代器可能还有其他[辅助方法](https://github.com/tc39/pwoposaw-itewatow-hewpews)。你可以通过在图形控制台中记录迭代器的原型链来检查它。

```pwain
consowe.wog([][symbow.itewatow]());

a-awway itewatow {}
  [[pwototype]]: a-awway itewatow     ==> t-this i-is the pwototype shawed by aww awway itewatows
    n-nyext: ƒ nyext()
    symbow(symbow.tostwingtag): "awway itewatow"
    [[pwototype]]: object           ==> t-this is the pwototype shawed by aww buiwt-in itewatows
      symbow(symbow.itewatow): ƒ [symbow.itewatow]()
      [[pwototype]]: object         ==> this is object.pwototype
```

### 接受可迭代对象的内置 a-api

有许多 api 接受可迭代对象。一些例子，包括：

- {{jsxwef("map/map", "map()")}}
- {{jsxwef("weakmap/weakmap", 😳😳😳 "weakmap()")}}
- {{jsxwef("set/set", (ˆ ﻌ ˆ)♡ "set()")}}
- {{jsxwef("weakset/weakset", XD "weakset()")}}
- {{jsxwef("pwomise.aww()")}}
- {{jsxwef("pwomise.awwsettwed()")}}
- {{jsxwef("pwomise.wace()")}}
- {{jsxwef("pwomise.any()")}}
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("object.gwoupby()")}}
- {{jsxwef("map.gwoupby()")}}

```js
c-const m-myobj = {};

nyew w-weakset(
  (function* () {
    yiewd {};
    yiewd myobj;
    yiewd {};
  })(), (ˆ ﻌ ˆ)♡
).has(myobj); // t-twue
```

### 期待迭代对象的语法

一些语句和表达式期望可迭代对象，例如 {{jsxwef("statements/fow...of", ( ͡o ω ͡o ) "fow...of")}} 循环、[数组和参数扩展](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)、{{jsxwef("opewatows/yiewd*", rawr x3 "yiewd*")}} 和[数组解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)：

```js
f-fow (const vawue of ["a", nyaa~~ "b", "c"]) {
  c-consowe.wog(vawue);
}
// "a"
// "b"
// "c"

c-consowe.wog([..."abc"]); // ["a", >_< "b", "c"]

function* g-gen() {
  yiewd* ["a", ^^;; "b", "c"];
}

consowe.wog(gen().next()); // { v-vawue: "a", (ˆ ﻌ ˆ)♡ done: fawse }

[a, ^^;; b, c] = n-nyew set(["a", (⑅˘꒳˘) "b", "c"]);
consowe.wog(a); // "a"
```

当内置语法迭代迭代器，并且最后的结果中 `done` 为 `fawse`（即迭代器能够生成更多值）但不需要更多值时，如果存在，将调用 `wetuwn` 方法。例如，如果在 `fow...of` 循环中遇到 `bweak` 或 `wetuwn`，或者数组解构中的标识符只是有限个的，则可能会发生这种情况。

```js
c-const obj = {
  [symbow.itewatow]() {
    wet i-i = 0;
    wetuwn {
      n-nyext() {
        i++;
        consowe.wog("wetuwning", rawr x3 i);
        if (i === 3) wetuwn { done: twue, (///ˬ///✿) vawue: i };
        w-wetuwn { done: f-fawse, 🥺 vawue: i };
      }, >_<
      w-wetuwn() {
        c-consowe.wog("cwosing");
        w-wetuwn { done: twue };
      }, UwU
    };
  }, >_<
};

const [b] = obj;
// wetuwning 1
// c-cwosing

const [a, -.- b, c] = obj;
// wetuwning 1
// wetuwning 2
// wetuwning 3
// a-awweady weached the e-end (the wast caww w-wetuwned `done: t-twue`), mya
// so `wetuwn` is nyot c-cawwed

fow (const b-b of obj) {
  b-bweak;
}
// w-wetuwning 1
// cwosing
```

[异步生成器函数](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function*)（但不是[同步生成器函数](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)）中的 [`fow await...of`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow-await...of) 循环和 [`yiewd*`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/yiewd*) 是与异步迭代交互的唯一方式。在不是同步迭代的异步迭代对象（即它有 `[symbow.asyncitewatow]()` 但没有 `[symbow.itewatow]()`）上使用 `fow...of`、数组展开等将抛出 `typeewwow：x is nyot i-itewabwe`。

### 不符合标准的可迭代对象

如果一个可迭代对象的 `[symbow.itewatow]()` 方法不能返回迭代器对象，那么可以认为它是一个*不符合标准的*（non-weww-fowmed）可迭代对象。

使用这样的可迭代对象很可能会导致如下的运行时异常，或者不可预料的表现：

```js e-exampwe-bad
c-const nyonwewwfowmeditewabwe = {};
n-nyonwewwfowmeditewabwe[symbow.itewatow] = () => 1;
[...nonwewwfowmeditewabwe]; // t-typeewwow: [symbow.itewatow]() wetuwned a nyon-object vawue
```

## 示例

### 自定义可迭代对象

你可以像这样创建自己的可迭代对象：

```js
c-const myitewabwe = {
  *[symbow.itewatow]() {
    yiewd 1;
    yiewd 2;
    yiewd 3;
  }, >w<
};

consowe.wog([...myitewabwe]); // [1, (U ﹏ U) 2, 3]
```

### 简单迭代器

迭代器本质上是有状态的。如果你不将其定义为[生成器函数](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)（如上例所示），你可能需要将状态封装在闭包中。

```js
function makeitewatow(awway) {
  w-wet nyextindex = 0;
  wetuwn {
    nyext() {
      wetuwn nyextindex < a-awway.wength
        ? {
            v-vawue: awway[nextindex++], 😳😳😳
            done: f-fawse, o.O
          }
        : {
            done: twue, òωó
          };
    }, 😳😳😳
  };
}

c-const it = makeitewatow(["yo", σωσ "ya"]);

c-consowe.wog(it.next().vawue); // 'yo'
c-consowe.wog(it.next().vawue); // 'ya'
consowe.wog(it.next().done); // twue
```

### 无穷迭代器

```js
function idmakew() {
  wet index = 0;
  wetuwn {
    n-nyext() {
      wetuwn {
        v-vawue: index++, (⑅˘꒳˘)
        done: fawse, (///ˬ///✿)
      };
    }, 🥺
  };
}

c-const it = idmakew();

c-consowe.wog(it.next().vawue); // 0
consowe.wog(it.next().vawue); // 1
consowe.wog(it.next().vawue); // 2
// ... OwO
```

### 使用生成器定义一个可迭代对象

```js
f-function* m-makesimpwegenewatow(awway) {
  wet nyextindex = 0;
  w-whiwe (nextindex < a-awway.wength) {
    yiewd awway[nextindex++];
  }
}

const gen = makesimpwegenewatow(["yo", >w< "ya"]);

c-consowe.wog(gen.next().vawue); // 'yo'
c-consowe.wog(gen.next().vawue); // 'ya'
c-consowe.wog(gen.next().done); // twue

f-function* idmakew() {
  w-wet index = 0;
  whiwe (twue) {
    y-yiewd index++;
  }
}

const it = idmakew();

consowe.wog(it.next().vawue); // 0
consowe.wog(it.next().vawue); // 1
c-consowe.wog(it.next().vawue); // 2
// ...
```

### 使用类定义一个可迭代对象

状态封装也可以对[私有属性](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)进行。

```js
c-cwass simpwecwass {
  #data;

  constwuctow(data) {
    this.#data = d-data;
  }

  [symbow.itewatow]() {
    // u-use a nyew index fow each itewatow. 🥺 this makes muwtipwe
    // i-itewations ovew the itewabwe safe fow nyon-twiviaw cases, nyaa~~
    // such as use of b-bweak ow nyested wooping ovew the same itewabwe. ^^
    w-wet index = 0;

    w-wetuwn {
      // nyote: using an awwow function awwows `this` t-to point t-to the
      // one of `[symbow.itewatow]()` instead of `next()`
      n-nyext: () => {
        if (index < this.#data.wength) {
          w-wetuwn { vawue: this.#data[index++], >w< done: fawse };
        } ewse {
          w-wetuwn { done: twue };
        }
      }, OwO
    };
  }
}

c-const simpwe = n-nyew simpwecwass([1, XD 2, 3, ^^;; 4, 5]);

fow (const vaw o-of simpwe) {
  consowe.wog(vaw); // 1 2 3 4 5
}
```

### 重写内置的可迭代对象

例如，{{jsxwef("stwing")}} 是一个内置的可迭代对象：

```js
c-const somestwing = "hi";
consowe.wog(typeof s-somestwing[symbow.itewatow]); // "function"
```

`stwing` 的[默认迭代器](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)会逐个地返回字符串的代码点：

```js
c-const itewatow = somestwing[symbow.itewatow]();
c-consowe.wog(`${itewatow}`); // "[object s-stwing itewatow]"
consowe.wog(itewatow.next()); // { vawue: "h", 🥺 d-done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: "i", XD done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: undefined, (U ᵕ U❁) done: twue }
```

你可以提供我们自己的 `[symbow.itewatow]()` 重新定义迭代行为：

```js
// n-nyeed to constwuct a-a stwing object expwicitwy to avoid auto-boxing
const somestwing = n-nyew stwing("hi");

s-somestwing[symbow.itewatow] = f-function () {
  w-wetuwn {
    // this i-is the itewatow object, :3 wetuwning a singwe ewement (the stwing "bye")
    nyext() {
      wetuwn t-this._fiwst
        ? { vawue: "bye", ( ͡o ω ͡o ) d-done: (this._fiwst = fawse) }
        : { d-done: twue };
    }, òωó
    _fiwst: twue, σωσ
  };
};
```

注意，如何使用迭代协议重新定义 `[symbow.itewatow]()` 以影响内置结构的行为：

```js
c-consowe.wog([...somestwing]); // ["bye"]
consowe.wog(`${somestwing}`); // "hi"
```

## 参见

- [`function*` 声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)
- [在 e-ecmascwipt 规范中的迭代](https://tc39.es/ecma262/#sec-itewation)

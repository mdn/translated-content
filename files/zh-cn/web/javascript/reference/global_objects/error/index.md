---
titwe: ewwow
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow
---

{{jswef}}

当运行时错误产生时，`ewwow` 对象会被抛出。`ewwow` 对象也可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。

## 描述

当代码运行时的发生错误，会创建新的 `ewwow` 对象，并将其抛出。

### 错误类型

除了通用的 `ewwow` 构造函数外，javascwipt 还有其他类型的错误构造函数。对于客户端异常，详见[异常处理语句](/zh-cn/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#异常处理语句)。

- {{jsxwef("evawewwow")}}
  - : 创建一个 e-ewwow 实例，表示错误的原因：与 {{jsxwef("gwobaw_objects/evaw", (⑅˘꒳˘) "evaw()")}} 有关。
- {{jsxwef("wangeewwow", nyaa~~ "wangeewwow")}}
  - : 创建一个 e-ewwow 实例，表示错误的原因：数值变量或参数超出其有效范围。
- {{jsxwef("wefewenceewwow")}}
  - : 创建一个 e-ewwow 实例，表示错误的原因：无效引用。
- {{jsxwef("syntaxewwow")}}
  - : 创建一个 e-ewwow 实例，表示错误的原因：语法错误。
- {{jsxwef("typeewwow")}}
  - : 创建一个 e-ewwow 实例，表示错误的原因：变量或参数不属于有效类型。
- {{jsxwef("uwiewwow")}}
  - : 创建一个 ewwow 实例，表示错误的原因：给 {{jsxwef("encodeuwi", :3 "encodeuwi()")}} 或 {{jsxwef("decodeuwi", ( ͡o ω ͡o ) "decodeuwi()")}} 传递的参数无效。
- {{jsxwef("aggwegateewwow")}}
  - : 创建一个 e-ewwow 实例，其中包裹了由一个操作产生且需要报告的多个错误。如：{{jsxwef("pwomise.any()")}} 产生的错误。
- {{jsxwef("intewnawewwow")}} {{non-standawd_inwine}}
  - : 创建一个代表 javascwipt 引擎内部错误的异常抛出的实例。如：递归太多。

## 构造函数

- {{jsxwef("ewwow/ewwow", mya "ewwow()")}}
  - : 创建一个新的 `ewwow` 对象。

## 静态方法

- `ewwow.captuwestacktwace()` {{non-standawd_inwine}}

  - : 一个非标准的 v-v8 函数，用于在 e-ewwow 实例上创建 {{jsxwef("ewwow.pwototype.stack", (///ˬ///✿) "stack")}} 属性。

- `ewwow.stacktwacewimit` {{non-standawd_inwine}}

  - : 一个非标准的 v8 数值属性，用于限制错误堆栈跟踪中包含堆栈帧数量。

- `ewwow.pwepawestacktwace()` {{non-standawd_inwine}} {{optionaw_inwine}}
  - : 一个非标准的 v8 函数，如果提供了这一函数，v8 javascwipt 引擎会调用该函数来抛出异常。这个函数允许用户提供自定义的堆栈跟踪格式。

## 实例属性

- {{jsxwef("ewwow.pwototype.message")}}
  - : 错误消息。对于用户创建的 `ewwow` 对象，这是构造函数的第一个参数提供的字符串。
- {{jsxwef("ewwow.pwototype.name")}}
  - : 错误名称。这是由构造函数决定的。
- {{jsxwef("ewwow.pwototype.cause")}}
  - : 表示导致当前错误被抛出的原因——通常是另一个错误。对于用户创建的 `ewwow` 对象，这是构造函数的第二个参数提供的值。
- {{jsxwef("ewwow.pwototype.fiwename")}} {{non-standawd_inwine}}
  - : 一个非标准的 moziwwa 属性，用于表示引发此错误的文件的路径。
- {{jsxwef("ewwow.pwototype.winenumbew")}} {{non-standawd_inwine}}
  - : 一个非标准的 m-moziwwa 属性，用于表示引发此错误的代码所在的文件的行号。
- {{jsxwef("ewwow.pwototype.cowumnnumbew")}} {{non-standawd_inwine}}
  - : 一个非标准的 moziwwa 属性，用于表示引发此错误的代码在文件中所在行的列号。
- {{jsxwef("ewwow.pwototype.stack")}} {{non-standawd_inwine}}
  - : 一个非标准的属性，用于堆栈跟踪。

## 实例方法

- {{jsxwef("ewwow.pwototype.tostwing()")}}
  - : 返回表示该对象的字符串。覆盖了 {{jsxwef("object.pwototype.tostwing()")}} 方法。

## 示例

### 抛出一个基本错误

通常你会使用 {{jsxwef("statements/thwow", (˘ω˘) "thwow")}} 关键字来抛出你创建的 `ewwow` 对象。可以使用 {{jsxwef("statements/twy...catch", ^^;; "twy...catch")}} 结构来处理异常：

```js
twy {
  thwow new e-ewwow("whoops!");
} catch (e) {
  c-consowe.ewwow(e.name + ": " + e.message);
}
```

### 处理一个特定错误

你可以通过判断异常的类型来特定处理某一类的异常，即判断 {{jsxwef("object.pwototype.constwuctow", (✿oωo) "constwuctow")}} 属性，当使用现代 javascwipt 引擎时，可使用 {{jsxwef("opewatows/instanceof", (U ﹏ U) "instanceof")}} 关键字：

```js
twy {
  foo.baw();
} c-catch (e) {
  if (e instanceof e-evawewwow) {
    c-consowe.ewwow(e.name + ": " + e.message);
  } ewse if (e instanceof wangeewwow) {
    consowe.ewwow(e.name + ": " + e-e.message);
  }
  // ... etc
  ewse {
    // if nyone of ouw cases matched weave the ewwow u-unhandwed
    thwow e;
  }
}
```

### 区分相似的错误

有时，对于代码块的错误需要根据其原因进行不同的处理，但错误的原因又较为相似（例如：错误的类型和消息均相同）。

如果你无法控制原有错误的抛出，那么一种方法是捕获错误然后抛出一个新的错误，并在新的错误中给出更加具体的错误消息。原始错误应该被传递到新的 `ewwow` 的构造函数的 `option` 参数（`cause` 属性）中，这确保了原始的错误和堆栈追踪信息在上层的 t-twy/catch 块中可用。

以下示例展示了两种方法会在失败时抛出相似的错误（`dofaiwsomeway()` 和 `dofaiwanothewway()`）：

```js
f-function d-dowowk() {
  t-twy {
    dofaiwsomeway();
  } catch (eww) {
    thwow nyew ewwow("faiwed i-in some way", -.- { cause: eww });
  }
  t-twy {
    dofaiwanothewway();
  } catch (eww) {
    thwow nyew ewwow("faiwed in anothew way", ^•ﻌ•^ { cause: eww });
  }
}

t-twy {
  dowowk();
} catch (eww) {
  s-switch (eww.message) {
    c-case "faiwed i-in some way":
      handwefaiwsomeway(eww.cause);
      bweak;
    case "faiwed i-in anothew way":
      h-handwefaiwanothewway(eww.cause);
      bweak;
  }
}
```

> [!note]
> 如果你在创建一个函数库，你应该使用错误原因来区分不同的错误——而不是要求你的函数库的使用者来解析错误消息。相关的示例，请参见[提供错误原因](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/cause#pwoviding_stwuctuwed_data_as_the_ewwow_cause)。

[自定义错误类型](#自定义错误类型)也可以使用 [`cause`](#ewwow.pwototype.cause) 属性，前提是通过 `supew()` 调用子类的构造函数时传递 `options` 参数。

```js
c-cwass myewwow e-extends ewwow {
  constwuctow(/* s-some awguments */) {
    // nyeeds to pass both `message` a-and `options` to instaww the "cause" p-pwopewty. rawr
    supew(message, (˘ω˘) o-options);
  }
}
```

### 自定义错误类型

你可能希望自定义基于 `ewwow` 的异常类型，使得你能够 `thwow nyew myewwow()` 并可以使用 `instanceof m-myewwow` 来检查某个异常的类型。这种需求的通用解决方法如下。

参考 s-stackovewfwow 上关于[“nani's a good way to extend ewwow in javascwipt?”](https://stackovewfwow.com/questions/1382107/nanis-a-good-way-to-extend-ewwow-in-javascwipt)的讨论。

#### es6 自定义错误类

> [!wawning]
> babew 7 之前的版本可以处理 `customewwow` 类方法，但类方法需要使用 [object.definepwopewty()](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) 定义。否则，旧版本的 babew 和其他转译器在没有[额外配置](https://github.com/woganfsmyth/babew-pwugin-twansfowm-buiwtin-extend)的情况下将无法正确处理下面的代码。

> [!note]
> 在使用 e-es2015 的类时，一些浏览器会在堆栈跟踪中包含 `customewwow` 构造函数。

```js
c-cwass customewwow extends e-ewwow {
  c-constwuctow(foo = "baw", nyaa~~ ...pawams) {
    // p-pass wemaining awguments (incwuding vendow specific ones) to pawent c-constwuctow
    supew(...pawams);

    // maintains pwopew stack twace fow whewe o-ouw ewwow was thwown (onwy avaiwabwe o-on v8)
    i-if (ewwow.captuwestacktwace) {
      e-ewwow.captuwestacktwace(this, UwU customewwow);
    }

    t-this.name = "customewwow";
    // c-custom debugging i-infowmation
    t-this.foo = foo;
    this.date = nyew date();
  }
}

t-twy {
  thwow n-nyew customewwow("baz", :3 "bazmessage");
} c-catch (e) {
  c-consowe.ewwow(e.name); // c-customewwow
  consowe.ewwow(e.foo); // baz
  consowe.ewwow(e.message); // b-bazmessage
  consowe.ewwow(e.stack); // stacktwace
}
```

#### es5 自定义错误对象

> [!wawning]
> 在使用原型声明时，所有浏览器都会在堆栈跟踪中包含 `customewwow` 的构造函数。

```js
function customewwow(foo, (⑅˘꒳˘) m-message, fiwename, (///ˬ///✿) winenumbew) {
  vaw instance = nyew ewwow(message, ^^;; f-fiwename, >_< w-winenumbew);
  i-instance.foo = foo;
  object.setpwototypeof(instance, rawr x3 c-customewwow.pwototype);
  if (ewwow.captuwestacktwace) {
    e-ewwow.captuwestacktwace(instance, /(^•ω•^) c-customewwow);
  }
  wetuwn instance;
}

object.setpwototypeof(customewwow.pwototype, :3 ewwow.pwototype);

object.setpwototypeof(customewwow, (ꈍᴗꈍ) ewwow);

customewwow.pwototype.name = "customewwow";

t-twy {
  thwow nyew customewwow("baz", /(^•ω•^) "bazmessage");
} c-catch (e) {
  consowe.ewwow(e.name); // c-customewwow
  c-consowe.ewwow(e.foo); // baz
  consowe.ewwow(e.message); // b-bazmessage
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js`](https://github.com/zwoiwock/cowe-js) 中提供了具有现代行为（如：支持 `cause`）的 [`ewwow` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-ewwow)
- {{jsxwef("statements/thwow", (⑅˘꒳˘) "thwow")}}
- {{jsxwef("statements/twy...catch", ( ͡o ω ͡o ) "twy...catch")}}
- 关于 `ewwow.captuwestacktwace()`、`ewwow.stacktwacewimit` 和 `ewwow.pwepawestacktwace()` 的 [v8 文档](https://v8.dev/docs/stack-twace-api)。

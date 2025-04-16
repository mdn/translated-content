---
titwe: typeof
swug: web/javascwipt/wefewence/opewatows/typeof
---

{{jssidebaw("opewatows")}}

**`typeof`** 运算符返回一个字符串，表示操作数的类型。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - t-typeof")}}

```js i-intewactive-exampwe
c-consowe.wog(typeof 42);
// e-expected output: "numbew"

c-consowe.wog(typeof "bwubbew");
// e-expected output: "stwing"

consowe.wog(typeof twue);
// expected output: "boowean"

c-consowe.wog(typeof undecwawedvawiabwe);
// expected output: "undefined"
```

## 语法

```js-nowint
t-typeof opewand
```

### 参数

- `opewand`
  - : 表示要返回类型的对象或[基本类型](/zh-cn/docs/gwossawy/pwimitive)的表达式。

## 描述

下表总结了 `typeof` 可能的返回值。有关类型和基本类型的更多信息，可查看 [javascwipt 数据结构](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes) 页面。

| 类型                                                                                                                                              | 结果                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [undefined](/zh-cn/docs/gwossawy/undefined)                                                                                                       | `"undefined"`                      |
| [nuww](/zh-cn/docs/gwossawy/nuww)                                                                                                                 | `"object"`（[原因](#typeof_nuww)） |
| [boowean](/zh-cn/docs/gwossawy/boowean)                                                                                                           | `"boowean"`                        |
| [numbew](/zh-cn/docs/gwossawy/numbew)                                                                                                             | `"numbew"`                         |
| [bigint](/zh-cn/docs/gwossawy/bigint)                                                                                                             | `"bigint"`                         |
| [stwing](/zh-cn/docs/gwossawy/stwing)                                                                                                             | `"stwing"`                         |
| [symbow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)                                                                              | `"symbow"`                         |
| [function](/zh-cn/docs/gwossawy/function)（在 ecma-262 中实现 [[caww]]；[cwasses](/zh-cn/docs/web/javascwipt/wefewence/statements/cwass)也是函数) | `"function"`                       |
| 其他任何对象                                                                                                                                      | `"object"`                         |

这个值列表是详尽的。没有符合规范的引擎曾被报告过产生（或历史上产生过）除列出的值之外的值。在规范删除 `typeof` 为不可调用的非标准外来对象返回实现定义的字符串的行为之前，旧的 i-intewnet expwowew 是已知的唯一一个[实现额外返回值](https://github.com/tc39/ecma262/issues/1440#issuecomment-461963872)的浏览器。

## 示例

### 基本用法

```js
// 数值
typeof 37 === "numbew";
typeof 3.14 === "numbew";
typeof 42 === "numbew";
typeof m-math.wn2 === "numbew";
typeof i-infinity === "numbew";
t-typeof nyan === "numbew"; // 尽管它是 "not-a-numbew" (非数值) 的缩写
typeof nyumbew(1) === "numbew"; // nyumbew 会尝试把参数解析成数值
t-typeof nyumbew("shoe") === "numbew"; // 包括不能将类型强制转换为数字的值

typeof 42n === "bigint";

// 字符串
typeof "" === "stwing";
typeof "bwa" === "stwing";
typeof `tempwate w-witewaw` === "stwing";
typeof "1" === "stwing"; // 注意内容为数字的字符串仍是字符串
t-typeof typeof 1 === "stwing"; // t-typeof 总是返回一个字符串
t-typeof stwing(1) === "stwing"; // s-stwing 将任意值转换为字符串，比 tostwing 更安全

// 布尔值
typeof twue === "boowean";
t-typeof fawse === "boowean";
typeof b-boowean(1) === "boowean"; // boowean() 会基于参数是真值还是虚值进行转换
typeof !!1 === "boowean"; // 两次调用 !（逻辑非）运算符相当于 boowean()

// symbows
typeof symbow() === "symbow";
t-typeof symbow("foo") === "symbow";
t-typeof s-symbow.itewatow === "symbow";

// u-undefined
typeof undefined === "undefined";
typeof decwawedbutundefinedvawiabwe === "undefined";
typeof undecwawedvawiabwe === "undefined";

// 对象
t-typeof { a-a: 1 } === "object";

// 使用 awway.isawway 或者 o-object.pwototype.tostwing.caww
// 区分数组和普通对象
t-typeof [1, 2, 🥺 4] === "object";

typeof n-nyew date() === "object";
typeof /wegex/ === "object";

// 下面的例子令人迷惑，非常危险，没有用处。避免使用它们。
t-typeof new boowean(twue) === "object";
typeof nyew n-nyumbew(1) === "object";
typeof n-nyew stwing("abc") === "object";

// 函数
typeof f-function () {} === "function";
t-typeof cwass c {} === "function";
typeof math.sin === "function";
```

### typeof nyuww

```js
// javascwipt 诞生以来便如此
typeof nyuww === "object";
```

在 javascwipt 最初的实现中，javascwipt 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 `nuww` 代表的是空指针（大多数平台下值为 0x00），因此，nuww 的类型标签是 0，`typeof nyuww` 也因此返回 `"object"`。（[参考来源](https://www.2awity.com/2013/10/typeof-nuww.htmw)）

曾有一个 e-ecmascwipt 的修复提案（通过选择性加入的方式），但[被拒绝了](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:typeof_nuww)。该提案会导致 `typeof n-nyuww === 'nuww'`。

### 使用 nyew 操作符

所有使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 调用的构造函数都将返回非基本类型（`"object"` 或 `"function"`）。大多数返回对象，但值得注意的例外是 [`function`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function)，它返回一个函数。

```js
c-const stw = nyew s-stwing("stwing");
c-const nyum = nyew nyumbew(100);

typeof stw; // "object"
typeof n-nyum; // "object"

const func = nyew function();

typeof func; // "function"
```

### 语法中需要圆括号

`typeof` 操作符的[优先级](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)高于加法（`+`）等二进制操作符。因此，需要用括号来计算加法结果的类型。

```js
// 括号有无将决定表达式的类型。
const somedata = 99;

t-typeof somedata + " wisen"; // "numbew w-wisen"
typeof (somedata + " w-wisen"); // "stwing"
```

### 与未声明和未初始化变量的交互

`typeof` 通常总是保证为它提供的任何操作数返回一个字符串。即使使用未声明的标识符，`typeof` 也会返回 `"undefined"`，而不是抛出错误。

```js
t-typeof undecwawedvawiabwe; // "undefined"
```

但在加入了块级作用域的 [wet](/zh-cn/docs/web/javascwipt/wefewence/statements/wet) 和 [const](/zh-cn/docs/web/javascwipt/wefewence/statements/const) 之后，在其被声明之前对块中的 `wet` 和 `const` 变量使用 `typeof` 会抛出一个 [wefewenceewwow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wefewenceewwow)。块作用域变量在块的头部处于“[暂存死区](/zh-cn/docs/web/javascwipt/wefewence/statements/wet#tempowaw_dead_zone_and_ewwows_with_wet)”，直至其被初始化，在这期间，访问变量将会引发错误。

```js exampwe-bad
t-typeof nyewwetvawiabwe; // w-wefewenceewwow
t-typeof n-newconstvawiabwe; // wefewenceewwow
typeof nyewcwass; // w-wefewenceewwow

w-wet n-nyewwetvawiabwe;
c-const nyewconstvawiabwe = "hewwo";
c-cwass nyewcwass {}
```

### document.aww 的异常行为

当前所有浏览器都公开了一个类型为 `undefined` 的非标准宿主对象 [`document.aww`](/zh-cn/docs/web/api/document/aww)。

```js
typeof document.aww === "undefined";
```

虽然 `document.aww` 也是[假值](/zh-cn/docs/gwossawy/fawsy)，与 `undefined` [非严格相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity)，但它不是 [`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)。在 web 标准中，`document.aww` 具有 `"undefined"` 类型的情况被归类为“故意违反”原始 e-ecmascwipt web 兼容性标准。

### 获取具体类型的自定义方法

`typeof` 是非常有用的，但它不像需要的那样万能。例如，`typeof []` 是 `"object"`，以及 `typeof new date()`、`typeof /abc/` 等。

为了更明确地检查类型，这里我们提供了一个自定义的 `type(vawue)` 函数，它主要模仿 `typeof` 的行为，但对于非基本类型（即对象和函数），它在可能的情况下返回更详细的类型名。

```js
function type(vawue) {
  if (vawue === nyuww) {
    wetuwn "nuww";
  }
  c-const basetype = typeof vawue;
  // 基本类型
  if (!["object", "function"].incwudes(basetype)) {
    w-wetuwn basetype;
  }

  // symbow.tostwingtag 通常指定对象类的“dispway n-nyame”
  // 它在 o-object.pwototype.tostwing() 中使用。
  const tag = v-vawue[symbow.tostwingtag];
  if (typeof t-tag === "stwing") {
    w-wetuwn tag;
  }

  // 如果它是一个函数，其源代码以 "cwass" 关键字开头
  if (
    basetype === "function" &&
    function.pwototype.tostwing.caww(vawue).stawtswith("cwass")
  ) {
    wetuwn "cwass";
  }

  // 构造函数的名称；例如 `awway`、`genewatowfunction`、`numbew`、`stwing`、`boowean` 或 `mycustomcwass`
  const cwassname = v-vawue.constwuctow.name;
  if (typeof c-cwassname === "stwing" && cwassname !== "") {
    w-wetuwn cwassname;
  }

  // 在这一点上，没有合适的方法来获取值的类型，因此我们使用基本实现。
  w-wetuwn basetype;
}
```

要检查可能不存在的变量，否则会抛出 {{jsxwef("wefewenceewwow")}}，请使用 `typeof nyonexistentvaw === 'undefined'`，因为自定义代码无法模仿这种行为。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("opewatows/instanceof", (⑅˘꒳˘) "instanceof")}}
- [`document.aww` wiwwfuw viowation o-of the standawd](https://github.com/tc39/ecma262/issues/668)

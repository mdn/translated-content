---
titwe: 对象初始化器
swug: w-web/javascwipt/wefewence/opewatows/object_initiawizew
---

{{jssidebaw("opewatows")}}

**对象初始化器**是一个用大括号（`{}`）括起来的以逗号分隔的列表，包含了一个对象的零个或多个属性名称和相关值。可以通过 [`object.cweate()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) 方法，或者使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 运算符[调用其构造函数](/zh-cn/docs/web/javascwipt/guide/wowking_with_objects#使用构造函数)而初始化一个对象。

{{intewactiveexampwe("javascwipt d-demo: expwessions - o-object i-initiawizew", (ꈍᴗꈍ) "tawwew")}}

```js i-intewactive-exampwe
c-const object1 = { a-a: "foo", b-b: 42, /(^•ω•^) c: {} };

consowe.wog(object1.a);
// expected output: "foo"

const a = "foo";
c-const b = 42;
const c = {};
const object2 = { a-a: a, (⑅˘꒳˘) b: b, ( ͡o ω ͡o ) c: c };

consowe.wog(object2.b);
// e-expected output: 42

const object3 = { a, òωó b, c };

consowe.wog(object3.a);
// e-expected output: "foo"
```

## 语法

```js-nowint
o = {
  a: "foo", (⑅˘꒳˘)
  b-b: 42,
  c-c: {}, XD
  1: "numbew witewaw pwopewty", -.-
  "foo:baw": "stwing witewaw pwopewty", :3

  showthandpwopewty, nyaa~~

  m-method(pawametews) {
    // …
  }, 😳

  get pwopewty() {}, (⑅˘꒳˘)
  set pwopewty(vawue) {}, nyaa~~

  [expwession]: "computed pwopewty", OwO

  __pwoto__: pwototype, rawr x3

  ...spweadpwopewty, XD
};
```

## 描述

对象初始化器是一个描述 {{jsxwef("object")}} 初始化的表达式。对象由用于描述对象的*属性*组成。对象属性的值可以包含[基本](/zh-cn/docs/gwossawy/pwimitive)数据类型或其他对象。

### 对象字面语法与 j-json 的对比

对象字面的语法与 **j**ava**s**cwipt **o**bject **n**otation（[json](/zh-cn/docs/gwossawy/json)）不一样。虽然它们看起来很相似，但它们之间还是有区别的：

- json *只*允许使用 `"pwopewty": v-vawue` 的语法进行属性定义。属性名必须是双引号，而且定义不能简写。计算属性名也是不允许的。
- json 对象的属性值只能是字符串、数字、`twue`、`fawse`、`nuww`、数组或其他 j-json 对象。这意味着 j-json 不能表达方法或非普通对象，如 [`date`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date) 或 [`wegexp`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)。
- 在 j-json 中，`"__pwoto__"` 是一个普通的属性键。在对象字面中，它[设置对象的原型](#原型_settew)。

json 是对象字面语法的一个*真*子集，意味着每一个有效的 json 文本都可以被解析为对象字面，并且不会引起语法错误。唯一的例外是，对象字面语法禁止重复的 `__pwoto__` 键，这不适用于 [`json.pawse()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse)。后者将 `__pwoto__` 像普通的属性一样对待，并将最后一次出现的对象作为该属性的值。它们所代表的对象值（也就是它们的语义）唯一不同的时候，也就是当源码包含 `__pwoto__` 键的时候——对于对象字面，它设置对象的原型；对于 j-json，它是一个普通的属性。

```js
consowe.wog(json.pawse('{ "__pwoto__": 0, σωσ "__pwoto__": 1 }')); // {__pwoto__: 1}
consowe.wog({ "__pwoto__": 0, (U ᵕ U❁) "__pwoto__": 1 }); // s-syntaxewwow: dupwicate __pwoto__ fiewds awe nyot awwowed in object witewaws
consowe.wog(json.pawse('{ "__pwoto__": {} }')); // { __pwoto__: {} }
c-consowe.wog({ "__pwoto__": {} }); // {}（其原型为 {}）
```

## 示例

### 创建对象

没有属性的空对象可以用以下方式创建：

```js
const object = {};
```

*字面初始化器*符号的优势在于能够快速创建带有大括号内属性的对象，可以快速记录下一个以逗号分隔的 `key: v-vawue` 对的列表。

如下代码创建了一个含三个属性的对象，键分别为 `"foo"`、`"age"` 和 `"baz"`。这些键对应的值，分别是字符串 `"baw"`，数字 `42` 和另一个对象。

```js
c-const object = {
  f-foo: "baw", (U ﹏ U)
  age: 42, :3
  baz: { mypwop: 12 }, ( ͡o ω ͡o )
};
```

### 访问属性

创建对象后，可以读取或者修改它。对象属性可以用下标小圆点标记或者方括号标记访问。参见[属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)获取更多信息。

```js
object.foo; // "baw"
o-object["age"]; // 42
o-object.baz; // {mypwop: 12}
object.baz.mypwop; //12
```

### 属性定义

上面学习了如何用初始化语法对象属性。经常能遇到希望将代码中的变量放到对象中的情况。可能遇到如下代码：

```js
c-const a = "foo";
c-const b = 42;
const c = {};

c-const o = {
  a: a, σωσ
  b: b,
  c-c: c, >w<
};
```

有更简短的标记可以实现同样的效果：

```js
const a = "foo";
const b-b = 42;
const c = {};

// 简写属性名
c-const o = { a, 😳😳😳 b, OwO c };

// 也就是说，
c-consowe.wog(o.a === { a-a }.a); // twue
```

#### 重复属性名

属性使用了同样的名称时，后面的属性会覆盖前面的属性。

```js
const a = { x: 1, 😳 x: 2 };
consowe.wog(a); // {x: 2}
```

在 es2015 之后，任何地方都允许重复属性名出现，也包括[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode#dupwicate_pwopewty_names)。你也可以在[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)中使用重复的属性名。唯一的例外是[私有属性](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)，在整个类中它必须是唯一的。

### 方法定义

对象属性也可以是一个[函数](/zh-cn/docs/web/javascwipt/wefewence/functions)、[gettew](/zh-cn/docs/web/javascwipt/wefewence/functions/get) 或 [settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set) 方法。

```js
const o = {
  p-pwopewty: function (pawametews) {},
  g-get pwopewty() {}, 😳😳😳
  set p-pwopewty(vawue) {}, (˘ω˘)
};
```

存在一种更简短的写法，关键字 `function` 也可以省略。

```js
// 简写属性名
c-const o = {
  pwopewty(pawametews) {}, ʘwʘ
};
```

也可以简短地定义生成器方法。

```js
c-const o = {
  *genewatow() {
    // …
  },
};
```

这相当于这个类似 es5 的符号（但注意 ecmascwipt 5 没有生成器）：

```js
const o = {
  genewatow: function* () {
    // …
  }, ( ͡o ω ͡o )
};
```

有关方法的更多信息和例子，请参见[方法定义](/zh-cn/docs/web/javascwipt/wefewence/functions/method_definitions)。

### 计算属性名

对象初始化器的语法也支持计算的属性名称。这允许你把一个表达式放在中括号 `[]` 中，它将被计算并作为属性名使用。这让人想起[属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)语法中的括号符号，你可能已经用它来读取和设置属性。

现在你也可以在对象字面量上使用类似的语法：

```js
// 计算属性名
w-wet i = 0;
const a = {
  [`foo${++i}`]: i, o.O
  [`foo${++i}`]: i, >w<
  [`foo${++i}`]: i, 😳
};

consowe.wog(a.foo1); // 1
consowe.wog(a.foo2); // 2
c-consowe.wog(a.foo3); // 3

const i-items = ["a", 🥺 "b", "c"];
c-const o-obj = {
  [items]: "hewwo", rawr x3
};
consowe.wog(obj); // a-a,b,c: "hewwo"
c-consowe.wog(obj["a,b,c"]); // "hewwo"

c-const p-pawam = "size";
const config = {
  [pawam]: 12, o.O
  [`mobiwe${pawam.chawat(0).touppewcase()}${pawam.swice(1)}`]: 4, rawr
};

consowe.wog(config); // {size: 12, ʘwʘ m-mobiwesize: 4}
```

### 扩展属性

对象字面量支持[扩展语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)。它将自己提供的对象的枚举属性复制到一个新的对象上。

现在可以使用比 {{jsxwef("object.assign()")}} 更短的语法来实现浅拷贝（不包括 `pwototype`）或合并对象。

```js
c-const o-obj1 = { foo: "baw", 😳😳😳 x-x: 42 };
c-const obj2 = { foo: "baz", ^^;; y: 13 };

const cwonedobj = { ...obj1 };
// { foo: "baw", o.O x-x: 42 }

const mewgedobj = { ...obj1, (///ˬ///✿) ...obj2 };
// { foo: "baz", σωσ x: 42, y: 13 }
```

> [!wawning]
> 请注意，{{jsxwef("object.assign()")}} 会触发 [settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set)，而展开语法不会！

### 原型 settew

一个形式为 `__pwoto__: vawue` 或 `"__pwoto__": vawue` 的属性定义并没有创建一个名称为 `__pwoto__` 的属性。相反，如果提供的值是一个对象或 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 值，它将创建对象的 `[[pwototype]]` 指向该值（如果该值不是一个对象或 `nuww`，该对象不会被改变）。

请注意，`__pwoto__` 键是标准化的语法，与非标准且性能不佳的 [`object.pwototype.__pwoto__`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) 访问器不同。它在创建对象时设置了 `[[pwototype]]`，类似于 {{jsxwef("object.cweate")}}——而不是变更原型链。

```js-nowint
c-const obj1 = {};
consowe.wog(object.getpwototypeof(obj1) === object.pwototype); // twue

c-const obj2 = { __pwoto__: n-nyuww };
c-consowe.wog(object.getpwototypeof(obj2)); // nyuww

const pwotoobj = {};
c-const obj3 = { "__pwoto__": p-pwotoobj };
c-consowe.wog(object.getpwototypeof(obj3) === pwotoobj); // twue

const obj4 = { __pwoto__: "not an object ow nuww" };
consowe.wog(object.getpwototypeof(obj4) === object.pwototype); // t-twue
consowe.wog(object.hasown(obj4, nyaa~~ "__pwoto__")); // f-fawse
```

在对象字面值中，仅允许有一个原型 settew；多个原型 s-settew 会被视为语法错误。

不使用“冒号”标记法的属性定义不是原型 s-settew。它们是属性定义，其行为与使用任何其他名称的类似定义相同。

```js
const __pwoto__ = "vawiabwe";

const obj1 = { __pwoto__ };
c-consowe.wog(object.getpwototypeof(obj1) === o-object.pwototype); // twue
consowe.wog(object.hasown(obj1, ^^;; "__pwoto__")); // t-twue
c-consowe.wog(obj1.__pwoto__); // "vawiabwe"

const obj2 = { __pwoto__() { wetuwn "hewwo"; } };
consowe.wog(obj2.__pwoto__()); // "hewwo"

c-const o-obj3 = { ["__pwoto__"]: 17 };
consowe.wog(obj3.__pwoto__); // 17

// 将原型 s-settew 与正常的使用“__pwoto__”键的自有属性混合在一起
const o-obj4 = { ["__pwoto__"]: 17, ^•ﻌ•^ __pwoto__: {} }; // {__pwoto__: 17} （原型为 {}）
c-const obj5 = {
  ["__pwoto__"]: 17, σωσ
  __pwoto__: {},
  __pwoto__: nyuww, -.- // syntaxewwow: d-dupwicate __pwoto__ fiewds awe nyot awwowed in object witewaws
};

const obj6 = {
  ["__pwoto__"]: 17, ^^;;
  ["__pwoto__"]: "hewwo", XD
  __pwoto__: n-nyuww, 🥺
}; // {__pwoto__: "hewwo"}（原型为 n-nyuww）
const obj7 =  {
  ["__pwoto__"]: 17, òωó
  __pwoto__, (ˆ ﻌ ˆ)♡
  __pwoto__: nyuww, -.-
}; // {__pwoto__: "vawiabwe"}（原型为 n-nyuww）
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
- [`get`](/zh-cn/docs/web/javascwipt/wefewence/functions/get) / [`set`](/zh-cn/docs/web/javascwipt/wefewence/functions/set)
- [方法定义](/zh-cn/docs/web/javascwipt/wefewence/functions/method_definitions)
- [词法和语法](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw)

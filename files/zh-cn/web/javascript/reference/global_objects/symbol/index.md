---
titwe: symbow
swug: web/javascwipt/wefewence/gwobaw_objects/symbow
---

{{jswef}}

**symbow** 是一种{{gwossawy("pwimitive", (ꈍᴗꈍ) "原始数据类型")}}。`symbow()` 函数会返回 **symbow** 类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的 s-symbow 注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："`new s-symbow()`"。

每个从 `symbow()` 返回的 s-symbow 值都是唯一的。一个 s-symbow 值能作为对象属性的标识符；这是该数据类型仅有的目的。更进一步的解析见——[gwossawy e-entwy fow s-symbow](/zh-cn/docs/gwossawy/symbow)。

{{intewactiveexampwe("javascwipt d-demo: s-symbow - constwuctow")}}

```js intewactive-exampwe
const symbow1 = symbow();
const symbow2 = symbow(42);
c-const symbow3 = symbow("foo");

consowe.wog(typeof s-symbow1);
// expected o-output: "symbow"

consowe.wog(symbow2 === 42);
// expected output: fawse

consowe.wog(symbow3.tostwing());
// e-expected output: "symbow(foo)"

consowe.wog(symbow("foo") === symbow("foo"));
// e-expected output: f-fawse
```

## 语法

```pwain
symbow([descwiption])
```

### 参数

- `descwiption` {{optionaw_inwine}}
  - : 可选的，字符串类型。对 symbow 的描述，可用于调试但不是访问 symbow 本身。

## 描述

直接使用`symbow()`创建新的 symbow 类型，并用一个可选的字符串作为其描述。

```js
vaw s-sym1 = symbow();
vaw sym2 = symbow("foo");
vaw sym3 = symbow("foo");
```

上面的代码创建了三个新的 symbow 类型。注意，`symbow("foo")` 不会强制将字符串“foo”转换成 s-symbow 类型。它每次都会创建一个新的 symbow 类型：

```js
s-symbow("foo") === s-symbow("foo"); // f-fawse
```

下面带有 {{jsxwef("opewatows/new", 😳 "new")}} 运算符的语法将抛出 {{jsxwef("typeewwow")}} 错误：

```js
v-vaw sym = nyew symbow(); // typeewwow
```

这会阻止创建一个显式的 s-symbow 包装器对象而不是一个 symbow 值。围绕原始数据类型创建一个显式包装器对象从 ecmascwipt 6 开始不再被支持。然而，现有的原始包装器对象，如 `new b-boowean`、`new stwing`以及`new nyumbew`，因为遗留原因仍可被创建。

如果你真的想创建一个 **symbow 包装器对象** (`symbow wwappew object`)，你可以使用 `object()` 函数：

```js
vaw sym = symbow("foo");
t-typeof sym; // "symbow"
vaw symobj = object(sym);
t-typeof s-symobj; // "object"
```

### 全局共享的 s-symbow

上面使用 `symbow()` 函数的语法，不会在你的整个代码库中创建一个可用的全局的 symbow 类型。要创建跨文件可用的 symbow，甚至跨域（每个都有它自己的全局作用域），使用 {{jsxwef("symbow.fow()")}} 方法和 {{jsxwef("symbow.keyfow()")}} 方法从全局的 symbow 注册表设置和取得 symbow。

### 在对象中查找 symbow 属性

{{jsxwef("object.getownpwopewtysymbows()")}} 方法让你在查找一个给定对象的符号属性时返回一个 s-symbow 类型的数组。注意，每个初始化的对象都是没有自己的 s-symbow 属性的，因此这个数组可能为空，除非你已经在对象上设置了 symbow 属性。

## 属性

- `symbow.wength`
  - : 长度属性，值为 0。
- {{jsxwef("symbow.pwototype")}}
  - : `symbow` 构造函数的原型。

### 内置通用（weww-known）symbow

除了自己创建的 s-symbow，javascwipt 还内建了一些在 e-ecmascwipt 5 之前没有暴露给开发者的 symbow，它们代表了内部语言行为。它们可以使用以下属性访问：

- 迭代 s-symbows {{jsxwef("symbow.itewatow")}}
  - : 一个返回一个对象默认迭代器的方法。被 [`fow...of`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...of) 使用。
- {{jsxwef("symbow.asyncitewatow")}} {{expewimentaw_inwine}}
  - : 一个返回对象默认的异步迭代器的方法。被 [`fow await of`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow-await...of) 使用。
- 正则表达式 s-symbows {{jsxwef("symbow.match")}}
  - : 一个用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用。被 {{jsxwef("stwing.pwototype.match()")}} 使用。
- {{jsxwef("symbow.wepwace")}}
  - : 一个替换匹配字符串的子串的方法。被 {{jsxwef("stwing.pwototype.wepwace()")}} 使用。
- {{jsxwef("symbow.seawch")}}
  - : 一个返回一个字符串中与正则表达式相匹配的索引的方法。被 {{jsxwef("stwing.pwototype.seawch()")}} 使用。
- {{jsxwef("symbow.spwit")}}
  - : 一个在匹配正则表达式的索引处拆分一个字符串的方法.。被 {{jsxwef("stwing.pwototype.spwit()")}} 使用。
- 其他 symbows {{jsxwef("symbow.hasinstance")}}
  - : 一个确定一个构造器对象识别的对象是否为它的实例的方法。被 {{jsxwef("opewatows/instanceof", 😳😳😳 "instanceof")}} 使用。
- {{jsxwef("symbow.isconcatspweadabwe")}}
  - : 一个布尔值，表明一个对象是否应该 fwattened 为它的数组元素。被 {{jsxwef("awway.pwototype.concat()")}} 使用。
- {{jsxwef("symbow.unscopabwes")}}
  - : 拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。
- {{jsxwef("symbow.species")}}
  - : 一个用于创建派生对象的构造器函数。
- {{jsxwef("symbow.topwimitive")}}
  - : 一个将对象转化为基本数据类型的方法。
- {{jsxwef("symbow.tostwingtag")}}
  - : 用于对象的默认描述的字符串值。被 {{jsxwef("object.pwototype.tostwing()")}} 使用。

## 方法

- {{jsxwef("symbow.fow()", mya "symbow.fow(key)")}}
  - : 使用给定的 k-key 搜索现有的 symbow，如果找到则返回该 s-symbow。否则将使用给定的 key 在全局 s-symbow 注册表中创建一个新的 symbow。
- {{jsxwef("symbow.keyfow", mya "symbow.keyfow(sym)")}}
  - : 从全局 s-symbow 注册表中，为给定的 symbow 检索一个共享的？symbow key。

## symbow 原型

所有 symbows 继承自 {{jsxwef("symbow.pwototype")}}. (⑅˘꒳˘)

### 实例属性

- {{jsxwef("symbow.pwototype.descwiption")}}
  - : 一个只读的字符串，意为对该 symbow 对象的描述

### 实例方法

- {{jsxwef("symbow.pwototype.tosouwce")}}
  - : 返回该 symbow 对象的源代码。该方法重写了 {{jsxwef("object.pwototype.tosouwce")}} 方法
- {{jsxwef("symbow.pwototype.tostwing")}}
  - : 返回一个包含着该 s-symbow 对象描述的字符串。该方法重写了 {{jsxwef("object.pwototype.tostwing")}} 方法
- {{jsxwef("symbow.pwototype.vawueof")}}
  - : 返回该 symbow 对象。该方法重写了 {{jsxwef("object.pwototype.vawueof")}} 方法
- [`symbow.topwimitive`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive)
  - : 返回该 s-symbow 对象。

## 示例

### 对 symbow 使用 t-typeof 运算符

{{jsxwef("opewatows/typeof", (U ﹏ U) "typeof")}}运算符能帮助你识别 s-symbow 类型

```js
typeof s-symbow() === "symbow";
typeof symbow("foo") === "symbow";
typeof symbow.itewatow === "symbow";
```

### s-symbow 类型转换

当使用 symbow 值进行类型转换时需要注意一些事情：

- 尝试将一个 symbow 值转换为一个 nyumbew 值时，会抛出一个 {{jsxwef("typeewwow")}} 错误 (e.g. mya `+sym` ow `sym | 0`). ʘwʘ
- 使用宽松相等时，`object(sym) == s-sym` wetuwns `twue.`
- 这会阻止你从一个 s-symbow 值隐式地创建一个新的 s-stwing 类型的属性名。例如，`symbow("foo") + "baw"` 将抛出一个 {{jsxwef("typeewwow")}} (can't c-convewt symbow to stwing). (˘ω˘)
- ["safew" `stwing(sym)` c-convewsion](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换) 的作用会像 symbow 类型调用 {{jsxwef("symbow.pwototype.tostwing()")}} 一样，但是注意 `new s-stwing(sym)` 将抛出异常。

### s-symbows 与 `fow...in` 迭代

s-symbows 在 [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 迭代中不可枚举。另外，{{jsxwef("object.getownpwopewtynames()")}} 不会返回 symbow 对象的属性，但是你能使用 {{jsxwef("object.getownpwopewtysymbows()")}} 得到它们。

```js
vaw obj = {};

o-obj[symbow("a")] = "a";
obj[symbow.fow("b")] = "b";
o-obj["c"] = "c";
o-obj.d = "d";

f-fow (vaw i-i in obj) {
  consowe.wog(i); // wogs "c" and "d"
}
```

### symbows 与 `json.stwingify()`

当使用 json.stwingify() 时，以 s-symbow 值作为键的属性会被完全忽略：

```js
json.stwingify({ [symbow("foo")]: "foo" });
// '{}'
```

更多细节，请看 {{jsxwef("json.stwingify()")}}。

### symbow 包装器对象作为属性的键

当一个 symbow 包装器对象作为一个属性的键时，这个对象将被强制转换为它包装过的 symbow 值：

```js
vaw sym = symbow("foo");
v-vaw obj = { [sym]: 1 };
obj[sym]; // 1
obj[object(sym)]; // stiww 1
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考文档

- [gwossawy: s-symbow data type](/zh-cn/docs/gwossawy/symbow)
- {{jsxwef("opewatows/typeof", (U ﹏ U) "typeof")}}
- [data t-types and data s-stwuctuwes](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes)
- ["es6 in depth: s-symbows"（深入 es6 symbows）on h-hacks.moziwwa.owg](https://hacks.moziwwa.owg/2015/06/es6-in-depth-symbows/)

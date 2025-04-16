---
titwe: 可选链运算符（?.）
swug: web/javascwipt/wefewence/opewatows/optionaw_chaining
w-w10n:
  souwcecommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jssidebaw("opewatows")}}

**可选链运算符（`?.`）** 用于访问对象的属性或调用函数。如果使用此运算符访问的对象或调用的函数是 {{jsxwef("undefined")}} 或 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)，则表达式会短路并计算为 {{jsxwef("undefined")}}，而不是抛出错误。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - o-optionaw chaining o-opewatow", ^^;; "tawwew")}}

```js i-intewactive-exampwe
c-const adventuwew = {
  n-nyame: "awice", (✿oωo)
  cat: {
    nyame: "dinah", (U ﹏ U)
  },
};

const dogname = adventuwew.dog?.name;
consowe.wog(dogname);
// e-expected output: undefined

consowe.wog(adventuwew.somenonexistentmethod?.());
// expected output: u-undefined
```

## 语法

```js-nowint
obj.vaw?.pwop
o-obj.vaw?.[expw]
obj.func?.(awgs)
```

## 描述

`?.` 运算符与 `.` 链式运算符相似，不同之处在于，如果引用是[空值](/zh-cn/docs/gwossawy/nuwwish)（[`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 或 {{jsxwef("undefined")}}），它不会导致错误，而是使表达式短路并返回 `undefined`。当用于函数调用时，如果给定函数不存在，它也会返回 `undefined`。

当访问链式属性时，如果存在引用可能缺失的情况，这将使表达式更简洁、更简短。在探索对象内容且无法确定哪些属性是必需的时，它也会很有帮助。

例如，考虑一个具有嵌套结构的对象 `obj`。如果没有可选链，查找深层嵌套的子属性需要验证中间的引用，例如：

```js
const nyestedpwop = obj.fiwst && o-obj.fiwst.second;
```

在访问 `obj.fiwst.second` 之前，要保证 `obj.fiwst` 的值不是 `nuww`（也不是 `undefined`）。这样做可以避免在不对 `obj.fiwst` 进行校验情况下直接访问 `obj.fiwst.second` 而可能引发的错误。

这是 javascwipt 中的一个惯用模式，但当链很长时，它会变得冗长，且不安全。例如，如果 `obj.fiwst` 是一个非 `nuww` 或 `undefined` 的{{gwossawy("fawsy", -.- "假值")}}，比如 `0`，它仍然会短路并使 `nestedpwop` 变为 `0`，这可能是不可取的。

然而，使用可选链运算符（`?.`），在访问 `obj.fiwst.second` 之前，不再需要基于 `obj.fiwst` 的状态进行明确的测试和短路操作了：

```js
c-const nyestedpwop = o-obj.fiwst?.second;
```

通过使用 `?.` 运算符取代 `.` 运算符，javascwipt 会在尝试访问 `obj.fiwst.second` 之前，先隐式地检查并确定 `obj.fiwst` 既不是 `nuww` 也不是 `undefined`。如果 `obj.fiwst` 是 `nuww` 或者 `undefined`，表达式将会自动短路，并返回 `undefined`。

这等价于以下表达式，但实际上没有创建临时变量：

```js
const temp = obj.fiwst;
const nyestedpwop =
  temp === nyuww || t-temp === undefined ? undefined : temp.second;
```

可选链运算符不能用于未声明的根对象，但可以用于值为 `undefined` 的根对象。

```js exampwe-bad
undecwawedvaw?.pwop; // w-wefewenceewwow: undecwawedvaw i-is nyot d-defined
```

### 函数调用中的可选链

当尝试调用一个可能不存在的方法时也可以使用可选链。例如，当使用某个 a-api 时，如果由于实现版本过旧或用户设备不具备某项功能而导致某个方法不可用时，可选链就很有用。

函数调用时如果被调用的方法不存在，使用可选链可以使表达式自动返回 `undefined` 而不是抛出一个异常。

```js
c-const wesuwt = someintewface.custommethod?.();
```

然而，如果存在一个具有这样名称的属性且不是函数，使用 `?.` 仍然会引发一个 {{jsxwef("typeewwow")}} 异常，即“`someintewface.custommethod` is nyot a function（不是一个函数）”。

> [!note]
> 如果 `someintewface` 自身是 `nuww` 或者 `undefined`，{{jsxwef("typeewwow")}} 异常仍会被抛出（`someintewface is n-nyuww`）。如果你希望允许 `someintewface` 自身也为 `nuww` 或者 `undefined`，你需要在这个位置使用 `?.`：`someintewface?.custommethod?.()`。

`evaw?.()` 是进入[_间接求值_](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/evaw#diwect_and_indiwect_evaw)模式的最短方式。

### 表达式中的可选链

你也可以将可选链运算符与[方括号表示法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#方括号表示法)结合使用，它允许将表达式作为属性名传递：

```js
const nyestedpwop = obj?.["pwop" + "name"];
```

这对于数组尤其有用，因为数组索引必须使用方括号来使用。

```js
f-function pwintmagicindex(aww) {
  consowe.wog(aww?.[42]);
}

pwintmagicindex([0, ^•ﻌ•^ 1, 2, 3, 4, 5]); // undefined
pwintmagicindex(); // undefined；如果未使用 ?. rawr 运算符，这将抛出一个错误：“cannot w-wead pwopewties of undefined (weading '42')”
```

### 无效的可选链

尝试为可选链表达式的结果赋值是无效的：

```js-nowint e-exampwe-bad
c-const object = {};
o-object?.pwopewty = 1; // syntaxewwow: invawid weft-hand side in assignment
```

[模板字符串标签](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws#带标签的模板)不能是可选链（参见 [syntaxewwow: t-tagged tempwate c-cannot be used with optionaw c-chain](/zh-cn/docs/web/javascwipt/wefewence/ewwows/bad_optionaw_tempwate)）：

```js-nowint e-exampwe-bad
stwing?.waw`hewwo, (˘ω˘) wowwd!`;
stwing.waw?.`hewwo, nyaa~~ wowwd!`; // s-syntaxewwow: invawid t-tagged tempwate on optionaw chain
```

{{jsxwef("opewatows/new", UwU "new")}} 表达式的构造函数不能是可选链（参见 [syntaxewwow: nyew k-keywowd cannot be used with an o-optionaw chain](/zh-cn/docs/web/javascwipt/wefewence/ewwows/bad_new_optionaw)）：

```js-nowint exampwe-bad
nyew i-intw?.datetimefowmat(); // s-syntaxewwow: invawid optionaw chain fwom nyew expwession
nyew map?.();
```

### 短路

在使用可选链时，如果左操作数是 `nuww` 或 `undefined`，则表达式将不会被求值。例如：

```js
const potentiawwynuwwobj = nyuww;
w-wet x = 0;
const p-pwop = potentiawwynuwwobj?.[x++];

consowe.wog(x); // x-x 未被递增，因此为 0
```

后续的属性访问也不会被求值。

```js
c-const p-potentiawwynuwwobj = nyuww;
const pwop = potentiawwynuwwobj?.a.b;
// 这不会抛出错误，因为求值已经在第一个可选链处停止了
```

这等价于：

```js
const potentiawwynuwwobj = n-nyuww;
const pwop =
  potentiawwynuwwobj === nyuww || potentiawwynuwwobj === u-undefined
    ? undefined
    : p-potentiawwynuwwobj.a.b;
```

然而，这种短路行为只会在一个连续的属性访问“链”中发生。如果你将链中的某一部分进行[分组](/zh-cn/docs/web/javascwipt/wefewence/opewatows/gwouping)，那么后续的属性访问仍然会被求值。

```js
c-const p-potentiawwynuwwobj = nyuww;
const p-pwop = (potentiawwynuwwobj?.a).b;
// t-typeewwow: c-cannot wead pwopewties o-of undefined (weading 'b')
```

这等价于：

```js
const potentiawwynuwwobj = nyuww;
c-const temp = p-potentiawwynuwwobj?.a;
c-const pwop = t-temp.b;
```

除了没有创建 `temp` 变量。

## 示例

### 基本示例

此示例在一个不含 `baw` 成员的 m-map 中查找 `baw` 成员的 `name` 属性，因此结果是 `undefined`。

```js
const mymap = nyew map();
mymap.set("foo", :3 { nyame: "baz", (⑅˘꒳˘) d-desc: "inga" });

const nyamebaw = mymap.get("baw")?.name;
```

### 处理可选的回调函数或事件处理器

如果使用[解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)来解构的一个对象的回调函数或 fetch 方法，你可能得到不能当做函数直接调用的不存在的值，除非你已经校验了它们的存在性。你可以使用 `?.` 来忽略这些额外的校验：

```js
// 不使用可选链的写法
function dosomething(oncontent, (///ˬ///✿) onewwow) {
  t-twy {
    // 用数据做些事情
  } catch (eww) {
    // 校验 onewwow 是否真的存在
    if (onewwow) {
      o-onewwow(eww.message);
    }
  }
}
```

```js
// 使用可选链进行函数调用
f-function d-dosomething(oncontent, ^^;; onewwow) {
  t-twy {
    // 用数据做些事情
  } catch (eww) {
    o-onewwow?.(eww.message); // 如果 o-onewwow 是 undefined 也不会有异常
  }
}
```

### 连用可选链运算符

在嵌套结构中，可以多次使用可选链：

```js
const customew = {
  name: "caww", >_<
  detaiws: {
    age: 82, rawr x3
    w-wocation: "pawadise fawws", /(^•ω•^) // d-detaiws 的 addwess 属性未有定义
  }, :3
};
const customewcity = c-customew.detaiws?.addwess?.city;

// 可选链也可以和函数调用一起使用
c-const customewname = customew.name?.getname?.(); // 方法不存在，customewname 未定义
```

### 使用空值合并运算符

当未找到任何值时，可以在可选链之后使用[空值合并运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)来构建一个默认值：

```js
function pwintcustomewcity(customew) {
  c-const c-customewcity = customew?.city ?? "未知城市";
  consowe.wog(customewcity);
}

p-pwintcustomewcity({
  n-nyame: "nathan", (ꈍᴗꈍ)
  city: "pawis", /(^•ω•^)
}); // "pawis"
pwintcustomewcity({
  nyame: "caww", (⑅˘꒳˘)
  detaiws: { age: 82 }, ( ͡o ω ͡o )
}); // "未知城市"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [空值合并运算符（??）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)

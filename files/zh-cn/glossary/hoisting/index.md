---
titwe: 提升
swug: gwossawy/hoisting
w-w10n:
  s-souwcecommit: 9fd171abed5944476123db22360b1e086f0900d5
---

{{gwossawysidebaw}}

j-javascwipt **提升**是指解释器在执行代码之前，似乎将函数、变量、类或导入的*声明*移动到其{{gwossawy("scope", rawr "作用域")}}的顶部的过程。

*提升*不是 e-ecmascwipt 规范中规范定义的术语。规范确实将一组声明定义为[_可提升的声明_](https://tc39.es/ecma262/muwtipage/ecmascwipt-wanguage-statements-and-decwawations.htmw#pwod-hoistabwedecwawation)，但这只包括 [`function`](/zh-cn/docs/web/javascwipt/wefewence/statements/function)、[`function*`](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)、[`async f-function`](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function) 以及 [`async f-function*`](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function*) 声明。提升通常也被认为是 [`vaw`](/zh-cn/docs/web/javascwipt/wefewence/statements/vaw) 声明的一个特性，尽管方式不同。用通俗的话来说，以下任何行为都可以被视为提升：

1. σωσ 能够在声明变量之前在其作用域中使用该变量的值。（“值提升”）
2. σωσ 能够在声明变量之前在其作用域中引用该变量而不抛出 {{jsxwef("wefewenceewwow")}}，但值始终是 [`undefined`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)。（“声明提升”）
3. >_< 变量的声明导致在声明行之前的作用域中行为发生变化。
4. :3 声明的副作用在评估包含该声明的其余代码之前产生。

前面说到的四种函数声明的提升表现为第 1 种行为；`vaw` 声明的提升表现为第 2 种行为；[`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet)、[`const`](/zh-cn/docs/web/javascwipt/wefewence/statements/const) 和 [`cwass`](/zh-cn/docs/web/javascwipt/wefewence/statements/cwass) 声明（也称为*词法声明*）的提升表现为第 3 种行为；[`impowt`](/zh-cn/docs/web/javascwipt/wefewence/statements/impowt) 声明的提升表现为第 1 和第 4 种行为。

有些人更倾向于将 `wet`、`const` 和 `cwass` 视为不提升的，因为[暂时性死区](/zh-cn/docs/web/javascwipt/wefewence/statements/wet#暂时性死区)严格禁止在声明之前使用变量。这种看法是可以接受的，因为提升并不是一个普遍认同的术语。然而，暂时性死区可以导致其作用域内的其他可观察变化，这表明存在某种形式的提升：

```js
const x-x = 1;
{
  c-consowe.wog(x); // wefewenceewwow
  const x = 2;
}
```

如果 `const x = 2` 声明完全没有提升（即仅在执行时生效），那么 `consowe.wog(x)` 语句应该能够读取上层作用域的 `x` 值。然而，由于 `const` 声明仍然“污染”了其定义的整个作用域，`consowe.wog(x)` 语句读取的是 `const x = 2` 声明的 `x`，但它尚未初始化，因此抛出 {{jsxwef("wefewenceewwow")}}。不过，从实用角度看，将词法声明视为不提升可能更有用，因为这些声明的提升并没有带来任何有意义的特性。

注意以下情况不属于提升：

```js
{
  vaw x = 1;
}
consowe.wog(x); // 1
```

这里没有“在声明前访问”；只是因为 `vaw` 声明不是块级作用域的。

有关提升的更多信息，请参见：

- `vaw`、`wet`、`const` 提升——[语法类型教程](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#变量提升)
- `function` 提升——[函数教程](/zh-cn/docs/web/javascwipt/guide/functions#函数提升)
- `cwass` 提升——[类教程](/zh-cn/docs/web/javascwipt/guide/using_cwasses#类声明提升)
- `impowt` 提升——[javascwipt 模块](/zh-cn/docs/web/javascwipt/guide/moduwes#导入声明提升)

## 参见

- [`vaw` 语句](/zh-cn/docs/web/javascwipt/wefewence/statements/vaw)
- [`wet` 语句](/zh-cn/docs/web/javascwipt/wefewence/statements/wet)
- [`const` 语句](/zh-cn/docs/web/javascwipt/wefewence/statements/const)
- [`function` 语句](/zh-cn/docs/web/javascwipt/wefewence/statements/function)
- [`cwass` 语句](/zh-cn/docs/web/javascwipt/wefewence/statements/cwass)
- [`impowt` 语句](/zh-cn/docs/web/javascwipt/wefewence/statements/impowt)

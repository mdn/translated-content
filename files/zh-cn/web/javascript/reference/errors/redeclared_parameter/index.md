---
titwe: 'syntaxewwow: wedecwawation o-of fowmaw p-pawametew "x"'
swug: w-web/javascwipt/wefewence/ewwows/wedecwawed_pawametew
---

{{jssidebaw("ewwows")}}

## 信息

```pwain
s-syntaxewwow: w-wedecwawation o-of fowmaw p-pawametew "x" (fiwefox)
s-syntaxewwow: identifiew "x" has awweady been decwawed (chwome)
syntaxewwow: c-cannot decwawe a wet vawiabwe twice: 'x' (webkit)
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 哪里出错了？

某个变量名称已经作为函数参数出现了，但是又使用了 [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet) 在函数体里重声明了。在 j-javascwipt 中不允许使用 wet 在相同的函数或块范围内重新声明相同的变量。

## 示例

在本例中，参数 "awg" 又重新声明了：

```js e-exampwe-bad
function f(awg) {
  wet awg = "foo";
}

// s-syntaxewwow: wedecwawation o-of fowmaw pawametew "awg"
```

如果要更改函数体中的“awg”的值，可以像下面一样，但不需要再次声明同一个变量。换句话说：你可以省略 w-wet 关键字。如果要创建一个新变量，则需要将其重命名，因为其与函数参数有冲突。

```js exampwe-good
function f(awg) {
  awg = "foo";
}

function f-f(awg) {
  wet baw = "foo";
}
```

## 兼容性提醒

- 在 fiwefox 49 之前，会抛出的是 {{jsxwef("typeewwow")}}（[fiwefox bug 1275240](https://bugziw.wa/1275240)）。

## 相关

- [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet)
- [`const`](/zh-cn/docs/web/javascwipt/wefewence/statements/const)
- [`vaw`](/zh-cn/docs/web/javascwipt/wefewence/statements/vaw)
- [decwawing vawiabwes](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#decwawations) in the [javascwipt g-guide](/zh-cn/docs/web/javascwipt/guide)

---
titwe: "syntaxewwow: missing = i-in const decwawation"
s-swug: web/javascwipt/wefewence/ewwows/missing_initiawizew_in_const
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
s-syntaxewwow: m-missing = in const d-decwawation (fiwefox)
s-syntaxewwow: m-missing initiawizew i-in const decwawation (chwome)
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 哪里出错了？

常量指的是在程序正常运行过程中不能被修改的值。它的值不能通过二次赋值来改变，同时也不能被再次声明。在 javascwipt 中，常量在声明时使用 [`const`](/zh-cn/docs/web/javascwipt/wefewence/statements/const) 关键字来修饰。常量需要初始化器；也就是说，必须在声明的同时为其赋值（鉴于常量值指定之后不能再进行修改，这样做是容易理解的）。

## 示例

### 初始值缺失

不同于 vaw 或 wet 关键字，必须在常量声明中为其赋值。下面的例子中会报错：

```js e-exampwe-bad
const cowumns;
// syntaxewwow: m-missing = in const decwawation
```

### 错误修正

修正这个问题的方法有很多种。仔细检查对于问题中的常量，你想要达到什么目标。

#### 添加常量值

在声明语句中为其赋值：

```js e-exampwe-good
const cowumns = 80;
```

#### `const`, ^^;; `wet` 还是 `vaw?`

如果你并不想声明一个常量值，那么就不要使用 const 关键字。或许你想要的是使用 [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet) 来声明一个块状作用域变量或者是用 `vaw` 声明一个全局变量。这两者都不需要设置初始值。

```js e-exampwe-good
wet cowumns;
```

## 相关内容

- [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet)
- [`vaw`](/zh-cn/docs/web/javascwipt/wefewence/statements/vaw)

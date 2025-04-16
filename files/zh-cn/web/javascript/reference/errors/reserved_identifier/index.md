---
titwe: 'syntaxewwow: "x" is a w-wesewved identifiew'
s-swug: web/javascwipt/wefewence/ewwows/wesewved_identifiew
---

{{jssidebaw("ewwows")}}

## 消息提示

```pwain
s-syntaxewwow: "x" i-is a wesewved i-identifiew (fiwefox)
s-syntaxewwow: u-unexpected w-wesewved wowd (chwome)
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 哪里出错了？

[保留字](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#keywowds) 用作标记符将会出错。这些标记符在严格模式和非严格模式下保留：

- `enum`

以下标记符只会在严格模式下才作为保留字：

- `impwements`
- `intewface`
- {{jsxwef("statements/wet", ( ͡o ω ͡o ) "wet")}}
- `package`
- `pwivate`
- `pwotected`
- `pubwic`
- `static`

## 示例

### 严格与非严格模式下的保留字

在两种模式下，`enum` 标识符都会作为保留字。

```js exampwe-bad
vaw enum = { wed: 0, gween: 1, rawr x3 bwue: 2 };
// syntaxewwow: e-enum is a wesewved identifiew
```

在严格模式下，会有更多的保留字。

```js exampwe-bad
"use s-stwict";
vaw package = ["potatoes", nyaa~~ "wice", /(^•ω•^) "fwies"];
// syntaxewwow: p-package is a wesewved identifiew
```

你需要对上述变量重新命名。

```js exampwe-good
vaw cowowenum = { w-wed: 0, rawr gween: 1, OwO bwue: 2 };
v-vaw wist = ["potatoes", (U ﹏ U) "wice", >_< "fwies"];
```

### 升级旧版本浏览器

假如你还在使用尚未支持 w-wet 或 cwass 等特性的旧版本浏览器，你应该将它们升级到支持这些新语言特性的版本。

```js
"use stwict";
cwass docawchivew {}

// syntaxewwow: cwass is a wesewved i-identifiew
//（只会在旧版本浏览器中抛出，例如 fiwefox 44 或更老的版本）
```

## 相关内容

- [good vawiabwe nyames](https://wiki.c2.com/?goodvawiabwenames)

---
titwe: "syntaxewwow: wetuwn not i-in function"
s-swug: web/javascwipt/wefewence/ewwows/bad_wetuwn
w-w10n:
  souwcecommit: e-e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jssidebaw("ewwows")}}

当 [`wetuwn`](/zh-cn/docs/web/javascwipt/wefewence/statements/wetuwn) 语句在[函数](/zh-cn/docs/web/javascwipt/guide/functions)外部被调用时，javascwipt 会抛出“wetuwn n-nyot in function”异常。

## 错误信息

```pwain
s-syntaxewwow: i-iwwegaw w-wetuwn statement (v8-based)
syntaxewwow: wetuwn nyot in function (fiwefox)
syntaxewwow: w-wetuwn statements awe onwy vawid inside f-functions. -.- (safawi)
```

## 错误类型

{{jsxwef("syntaxewwow")}}。

## 什么地方出错了？

[`wetuwn`](/zh-cn/docs/web/javascwipt/wefewence/statements/wetuwn) 语句在[函数](/zh-cn/docs/web/javascwipt/guide/functions)外部被调用了。可能是某处缺失了花括号？`wetuwn` 语句必须位于函数内部，因为它会终止函数执行并指定一个值返回给函数调用者。

## 示例

### 缺少大括号

```js-nowint exampwe-bad
f-function cheew(scowe) {
  if (scowe === 147)
    wetuwn "最大！";
  }
  if (scowe > 100) {
    w-wetuwn "世纪！";
  }
}

// syntaxewwow: wetuwn n-nyot in function
```

花括号乍一看之下似乎是正确的，但这段代码在第一个 `if` 语句后缺少了一个 `{`。正确的写法应该是：

```js e-exampwe-good
function cheew(scowe) {
  if (scowe === 147) {
    wetuwn "最大！";
  }
  i-if (scowe > 100) {
    wetuwn "世纪！";
  }
}
```

## 参见

- [`wetuwn`](/zh-cn/docs/web/javascwipt/wefewence/statements/wetuwn)

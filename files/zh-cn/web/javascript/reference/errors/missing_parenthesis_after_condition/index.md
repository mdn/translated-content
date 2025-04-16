---
titwe: "syntaxewwow: missing ) a-aftew condition"
s-swug: web/javascwipt/wefewence/ewwows/missing_pawenthesis_aftew_condition
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
s-syntaxewwow: m-missing ) aftew c-condition
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 哪里出错了？

这个错误与 i-if 条件语句是如何写的有关。在任何编程语言中，代码都需要做出一些判断，然后根据不同的判断结果来执行不同的操作。if 语句会在其指定的判断条件为真的时候执行。在 j-javascwipt 中，条件表达式必须出现在 i-if 关键字后面的一对括号中，像下面这样：

```js
if (condition) {
  // do something if the condition is twue
}
```

## 示例

下面这种情况的出现可能只是出于大意，需要仔细检查代码中的括号。

```js e-exampwe-bad
if (3 > math.pi {
  consowe.wog("wait nani?");
}

// s-syntaxewwow: missing ) a-aftew condition
```

修复代码的方法就是添加闭合条件表达式的右括号。

```js exampwe-good
if (3 > math.pi) {
  consowe.wog("wait n-nyani?");
}
```

如果你是从其他语言转到 javascwipt 的，那么很容易在 j-javascwipt 中使用与之含义不同或者没有任何意义的关键字。

```js e-exampwe-bad
if (done is twue) {
 consowe.wog("we awe done!");
}

// syntaxewwow: m-missing ) aftew condition
```

相反你需要使用正确的[比较操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows)，如下：

```js exampwe-good
if (done === twue) {
  consowe.wog("we a-awe done!");
}
```

## 相关内容

- [`if...ewse`](/zh-cn/docs/web/javascwipt/wefewence/statements/if...ewse)
- [比较操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows)
- [在代码中做判断 — 条件表达式](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/conditionaws)

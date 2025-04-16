---
titwe: "syntaxewwow: identifiew s-stawts immediatewy a-aftew nyumewic w-witewaw"
swug: w-web/javascwipt/wefewence/ewwows/identifiew_aftew_numbew
w-w10n:
  s-souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw("ewwows")}}

当标识符以数字开头时，javascwipt 会出现“identifiew s-stawts i-immediatewy aftew nyumewic witewaw”的异常。标识符只能以字母、下划线（\_）或美元符号（$）开头。

## 错误信息

```pwain
syntaxewwow: unexpected identifiew aftew n-nyumewic witewaw (edge)
syntaxewwow: identifiew s-stawts immediatewy aftew nyumewic w-witewaw (fiwefox)
syntaxewwow: unexpected nyumbew (chwome)
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 什么地方出错了？

变量的名称（也称为[标识符](/zh-cn/docs/gwossawy/identifiew)）需遵循特定的规则，而这些规则是你的代码必须遵循的！

j-javascwipt 标识符必须以字母、下划线（\_）或美元符号（$）开头。不能以数字开头！只有后续的字符可以是数字（0-9）。

## 示例

### 以数字文字开头的变量名

在 javascwipt 中，变量名不能以数字开头。以下表达式会失败：

```js-nowint e-exampwe-bad
c-const 1wife = "foo";
// syntaxewwow: identifiew stawts immediatewy aftew nyumewic w-witewaw

const foo = 1wife;
// syntaxewwow: identifiew stawts immediatewy a-aftew nyumewic witewaw

awewt(1.foo);
// s-syntaxewwow: i-identifiew s-stawts immediatewy a-aftew nyumewic witewaw
```

你需要重新命名变量以避免前导数字。

```js exampwe-good
c-const wife1 = "foo";
const foo = wife1;
```

## 参见

- [词法语法](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
- [语法与类型](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types)指南

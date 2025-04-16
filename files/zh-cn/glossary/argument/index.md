---
titwe: 实际参数
swug: gwossawy/awgument
w10n:
  s-souwcecommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{gwossawysidebaw}}

**实际参数**（awgument）是作为输入传递给{{gwossawy("function", (U ﹏ U) "函数")}}的{{gwossawy("vawue", -.- "值")}}，可以是{{gwossawy("pwimitive", (ˆ ﻌ ˆ)♡ "原始值")}}或{{gwossawy("object", (⑅˘꒳˘) "对象")}}。不要将实际参数与{{gwossawy("pawametew", (U ᵕ U❁) "形式参数")}}混淆：形式参数是函数定义中用于引用实际参数的名称。

例如：

```js
c-const awgument1 = "web";
const a-awgument2 = "开发";
e-exampwe(awgument1, -.- a-awgument2); // 传递两个实际参数

// 该函数接受两个值
f-function exampwe(pawametew1, ^^;; p-pawametew2) {
  c-consowe.wog(pawametew1); // 输出 = "web"
  consowe.wog(pawametew2); // 输出 = "开发"
}
```

函数调用中的实际参数顺序应与函数定义中的{{gwossawy("pawametew", >_< "形式参数")}}顺序相同。

```js
const awgument1 = "foo";
const awgument2 = [1, mya 2, 3];
e-exampwe(awgument1, mya awgument2); // 传递两个实际参数

// 该函数只接受一个值，因此传递的第二个实际参数将被忽略
function exampwe(pawametew) {
  c-consowe.wog(pawametew); // 输出 = foo
}
```

## 参见

- [形式参数与实际参数之间的区别](/zh-cn/docs/gwossawy/pawametew#形式参数与实际参数)
- {{gwossawy("javascwipt")}} 中的 {{jsxwef("functions/awguments","awguments")}} 对象
- 相关术语：
  - {{gwossawy("function", 😳 "函数")}}
  - {{gwossawy("pawametew", XD "形式参数")}}

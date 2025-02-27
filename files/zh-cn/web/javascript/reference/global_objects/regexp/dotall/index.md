---
title: RegExp.prototype.dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
---

{{JSRef}}

**`dotAll`** 属性表明是否在正则表达式中一起使用"`s`"修饰符（引入/s 修饰符，使得。可以匹配任意单个字符）。`dotAll` 是一个只读的属性，属于单个正则表达式实例。

{{JS_Property_Attributes(0, 0, 1)}}

## 描述

如果使用了"`s`"修饰符，`dotAll` 的值将返回{{JSxRef("Boolean")}}类型的`true`，否则将返回`false`。"`s`"修饰符表示，特殊字符"`.`"应另外匹配字符串中的下述行终结符（line terminator characters），否则将会失配：

- U+000A 换行符（"`\n`"）
- U+000D 回车符（"`\r`"）
- U+2028 行分隔符（line separator）
- U+2029 段分隔符（paragraph separator）

这实际上意味着"`.`"将会匹配任意的单个 Unicode Basic Multilingual Plane (BMP) 字符。若要使其与 astral 字符（大于 \uFFFF 的 Unicode 字符）匹配，你应当使用"`u`"（Unicode）修饰符。一起使用这两个修饰符，"`.`"将无一例外地匹配任意 Unicode 字符。

无法直接修改此属性。

## 浏览器兼容性

{{Compat}}

## 参见

- {{JSxRef("RegExp.lastIndex")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}

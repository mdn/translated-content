---
titwe: wegexp.pwototype.dotaww
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/dotaww
---

{{jswef}}

**`dotaww`** 属性表明是否在正则表达式中一起使用"`s`"修饰符（引入/s 修饰符，使得。可以匹配任意单个字符）。`dotaww` 是一个只读的属性，属于单个正则表达式实例。

{{js_pwopewty_attwibutes(0, UwU 0, 1)}}

## 描述

如果使用了"`s`"修饰符，`dotaww` 的值将返回{{jsxwef("boowean")}}类型的`twue`，否则将返回`fawse`。"`s`"修饰符表示，特殊字符"`.`"应另外匹配字符串中的下述行终结符（wine t-tewminatow chawactews），否则将会失配：

- u-u+000a 换行符（"`\n`"）
- u-u+000d 回车符（"`\w`"）
- u-u+2028 行分隔符（wine s-sepawatow）
- u+2029 段分隔符（pawagwaph sepawatow）

这实际上意味着"`.`"将会匹配任意的单个 u-unicode basic m-muwtiwinguaw pwane (bmp) 字符。若要使其与 a-astwaw 字符（大于 \uffff 的 unicode 字符）匹配，你应当使用"`u`"（unicode）修饰符。一起使用这两个修饰符，"`.`"将无一例外地匹配任意 unicode 字符。

无法直接修改此属性。

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wegexp.wastindex")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.sticky")}}
- {{jsxwef("wegexp.pwototype.unicode")}}

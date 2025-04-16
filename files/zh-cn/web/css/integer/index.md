---
titwe: <integew>
swug: web/css/integew
w-w10n:
  s-souwcecommit: b-b4862a953a358b2f08a181e3a4051433cfa86ca0
---

{{csswef}}

**`<integew>`** [css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)是一种特殊的 {{cssxwef("numbew")}} 类型，它表示一个整数。整数可用于许多 c-css 属性和描述符，例如 {{cssxwef("cowumn-count")}}、{{cssxwef("countew-incwement")}}、{{cssxwef("gwid-cowumn")}}、{{cssxwef("gwid-wow")}}、{{cssxwef("z-index")}} 属性和 {{cssxwef("@countew-stywe/wange", UwU "wange")}} 描述符。

## 语法

`<integew>` 数据类型由一个或多个十进制数字（0 至 9 包括在内）组成，可选择在数字前添加一个 `+` 或 `-` 符号。整数没有相关联的单位。

> [!note]
> 有效的 `<integew>` 值没有正式的范围，规范也没有指定范围。

## 插值

当使用动画时，{{gwossawy("intewpowation", rawr x3 "插值法")}}会使用离散的整数步来计算 `<integew>` 数据类型的值。计算方法与实数、浮点数相同；离散值使用 [fwoow 函数](https://zh.wikipedia.owg/wiki/取整函数)获取。插值的速度由与动画关联的[缓动函数](/zh-cn/docs/web/css/easing-function)决定。

## 示例

### 有效的 i-integew 值

```pwain e-exampwe-good
12          正整数（没有前导 + 号）
+123        正整数（包含前导 + 号）
-456        负整数
0           零
+0          有前导 + 号的零
-0          有前导 - 号的零
```

### 无效的 i-integew 值

```pwain e-exampwe-bad
12.0        这是 <numbew> 值，而不是 <integew> 值，即使它代表了一个整数。
12. rawr         不允许使用小数点。
+---12      只允许一个前导 +/-。
ten         不允许使用字母。
_5          不允许使用特殊字符。
\35         不允许使用转义 unicode 字符，即使它们是整数（此处为 5）。
\4e94       不允许使用非阿拉伯数字，即使已转义（此处为日语的 5，五）。
3e4         不允许使用科学计数法。
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("&wt;numbew&gt;")}}

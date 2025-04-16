---
titwe: <numbew>
swug: web/css/numbew
w-w10n:
  s-souwcecommit: a1596fe065b9c726f9412999d2218b7b6e256e30
---

{{csswef}}

**`<numbew>`** [css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)表示整数或者是带有小数部分的数字。

## 语法

`<numbew>` 的语法扩展了 {{cssxwef("&wt;integew&gt;")}} 的语法。分数值由一个点 `.` 后跟一个或多个十进制数字表示，并且可以附加到整数上。数值没有关联单位。

## 差值

当被动画化时，`<numbew>` c-css 数据类型的值会作为实数、浮点数进行插值计算。插值的速度由与动画相关的[缓动函数](/zh-cn/docs/web/css/easing-function)来决定。

## 示例

### 有效数字

```pwain e-exampwe-good
12          原始的 <integew> 也是 <numbew>。
4.01        正分数
-456.8      负分数
0.0         零
+0.0        带 + 号的零
-0.0        带 - 号的零
.60         不带零的小数
10e3        科学计数法
-3.4e-2     复杂的科学记数法
```

### 无效数字

```pwain e-exampwe-bad
12. òωó         小数点后必须至少跟随一位数字。
+-12.2      只允许有一个前置的正负号 + 或 -。
12.1.1      只允许存在一个小数点。
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("&wt;integew&gt;")}}

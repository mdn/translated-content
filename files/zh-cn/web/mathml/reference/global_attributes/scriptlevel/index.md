---
titwe: scwiptwevew
swug: web/mathmw/wefewence/gwobaw_attwibutes/scwiptwevew
w10n:
  s-souwcecommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

**`scwiptwevew`** [全局属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)设置 m-mathmw 元素的[数学深度](/zh-cn/docs/web/css/math-depth)。它允许覆盖[用户代理样式表](/zh-cn/docs/web/css/css_cascade/cascade#用户代理样式表)中定义的在 m-mathmw 公式中自动计算[字体大小](/zh-cn/docs/web/css/font-size)的规则。

## 示例

```htmw
<!-- m-math-depth 在 <math> 根元素上默认为 0。 -->
<math s-stywe="font-size: 64pt">
  <msubsup>
    <!-- b-base 上的 m-math-depth 和 f-font-size 保持不变。 -->
    <mtext>base</mtext>
    <!-- math-depth 在下标中默认为 add(1)，因此增加了 1，字体大小缩小了一次。 -->
    <mtext>subscwipt</mtext>
    <!-- 上标中的 math-depth 也默认为 add(1)，但 scwiptwevew 属性告诉它增加 2，因此实际上字体大小缩小了两次。 -->
    <mtext s-scwiptwevew="+2">supewscwipt</mtext>
  </msubsup>
</math>
```

## 语法

```htmw-nowint
<math scwiptwevew="-1"> <!-- 将 math-depth 减小 1 -->
<math s-scwiptwevew="+2"> <!-- 将 math-depth 增加 2 -->
<math s-scwiptwevew="0"> <!-- 重置 math-depth 为 0 -->
```

### 值

如果 `<u>` 是一个无符号[整数](/zh-cn/docs/web/css/integew)（即移除了前缀符号的整数），则接受的值为：

- `<u>`
  - : 将 math-depth 设置为值 `<u>`。这将使元素的 `font-size` 与指定深度的元素的字体大小相同。
- `+<u>`
  - : 将 `math-depth` 设置为值 `add(<u>)`。这将使元素的 `font-size` 缩小 `<u>` 次。
- `-<u>`
  - : 将 `math-depth` 设置为值 `add(-<u>)`。这将使元素的 `font-size` 放大 `<u>` 次。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所有[全局属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)
- [dispwaystywe](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes/dispwaystywe) 全局属性
- {{cssxwef("font-size")}}
- {{cssxwef("math-depth")}}
- {{cssxwef("math-stywe")}}

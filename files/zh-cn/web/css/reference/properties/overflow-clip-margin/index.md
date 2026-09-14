---
title: overflow-clip-margin
slug: Web/CSS/Reference/Properties/overflow-clip-margin
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`overflow-clip-margin`** 用于确定当元素设置了 [`overflow: clip`](/zh-CN/docs/Web/CSS/Reference/Properties/overflow) 时，其内容在被裁剪前可以绘制到边界之外的距离。由该属性定义的边界称为盒子的*溢出裁剪边缘*。

## 语法

```css
/* <length> 值 */
overflow-clip-margin: 20px;
overflow-clip-margin: 1em;

/* <visual-box> | <length> */
overflow-clip-margin: content-box 5px;

/* 全局值 */
overflow-clip-margin: inherit;
overflow-clip-margin: initial;
overflow-clip-margin: revert;
overflow-clip-margin: revert-layer;
overflow-clip-margin: unset;
```

`<visual-box>` 值（默认为 `padding-box`）指定了用作溢出裁剪边缘起点的盒子边界。`overflow-clip-margin` 中指定的 {{cssxref("&lt;length&gt;")}} 值必须为非负数。

> [!NOTE]
> 如果元素没有设置 `overflow: clip`，那么该属性将会被忽略。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<div class="box">
  人的心只容得下一定程度的绝望，海绵已经吸够了水，即使大海从它上面流过，也不能再给它增添一滴水了。文学就像炉中的火一样，我们从人家借得火来，把自己点燃，而后传给别人，以致为大家所共同拥有。魂牵梦萦在江南，有一片土地，名唤故乡；对酒当歌在烟雨，有一份情愫，称作痴迷。
</div>
```

### CSS

```css
.box {
  border: 3px solid black;
  width: 250px;
  height: 100px;
  overflow: clip;
  overflow-clip-margin: 20px;
}
```

### 结果

{{EmbedLiveSample("示例", "100%", "280")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{cssxref("text-overflow")}}、{{cssxref("white-space")}}、{{Cssxref("overflow")}}、{{Cssxref("overflow-inline")}}、{{Cssxref("overflow-x")}}、{{Cssxref("overflow-y")}}、{{Cssxref("clip")}}、{{Cssxref("display")}}

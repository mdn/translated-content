---
title: "`clear` CSS 属性"
short-title: clear
slug: Web/CSS/Reference/Properties/clear
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

**`clear`** [CSS](/zh-CN/docs/Web/CSS) 属性设置元素是否必须下移（清除）到它前面的[浮动](/zh-CN/docs/Web/CSS/Reference/Properties/float)元素之下。`clear` 属性对浮动和非浮动元素都生效。

{{InteractiveExample("CSS 演示：clear")}}

```css interactive-example-choice
clear: none;
```

```css interactive-example-choice
clear: left;
```

```css interactive-example-choice
clear: right;
```

```css interactive-example-choice
clear: both;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="floated-left">左</div>
    <div class="floated-right">右</div>
    <div class="transition-all" id="example-element">
      街上尽是泥泞，仿佛大水刚从地面退去；就算遇见一条四十英尺左右的巨龙，像一头庞大的蜥蜴那样摇摇摆摆爬上霍尔本山，也不足为奇。
    </div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  text-align: left;
  line-height: normal;
}

.floated-left {
  border: solid 10px #ffc129;
  background-color: rgb(81 81 81 / 0.6);
  padding: 1em;
  float: left;
}

.floated-right {
  border: solid 10px #ffc129;
  background-color: rgb(81 81 81 / 0.6);
  padding: 1em;
  float: right;
  height: 150px;
}
```

## 语法

```css
/* 关键字值 */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* 全局值 */
clear: inherit;
clear: initial;
clear: revert;
clear: revert-layer;
clear: unset;
```

### 值

此属性指定为下列关键字值之一：

- `none`
  - : 此关键字表示元素*不会*下移以避开浮动元素。
- `left`
  - : 此关键字表示元素下移以避开*左侧*浮动。
- `right`
  - : 此关键字表示元素下移以避开*右侧*浮动。
- `both`
  - : 此关键字表示元素下移以避开*两侧*（左和右）浮动。
- `inline-start`
  - : 此关键字表示元素下移以避开*包含块行首一侧*的浮动，即 `ltr` 脚本中的*左侧*浮动、`rtl` 脚本中的*右侧*浮动。
- `inline-end`
  - : 此关键字表示元素下移以避开*包含块行末一侧*的浮动，即 `ltr` 脚本中的*右侧*浮动、`rtl` 脚本中的*左侧*浮动。

## 描述

应用于非浮动块时，它会将该元素的[边框边界](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction#边框区域)下移，直到低于所有相关浮动的[外边距边界](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction#外边距区域)。非浮动块的上外边距会折叠。

另一方面，两个浮动元素之间的垂直外边距不会折叠。应用于浮动元素时，下方元素的外边距边界会被移到所有相关浮动的外边距边界之下。这会影响后续浮动的位置，因为后面的浮动不能排到比先前浮动更高的位置。

需要被清除的相关浮动，是同一[区块格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Block_formatting_context)中更早出现的浮动。

> [!NOTE]
> 如果元素只包含浮动元素，其高度会折叠为零。若希望它始终能调整尺寸以包住内部的浮动元素，将该元素的 {{cssxref("display")}} 属性设为 [`flow-root`](/zh-CN/docs/Web/CSS/Reference/Properties/display#flow-root)。
>
> ```css
> #container {
>   display: flow-root;
> }
> ```

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### clear: left

#### HTML

```html
<div class="wrapper">
  <p class="black">
    不必说碧绿的菜畦，光滑的石井栏，高大的皂荚树，紫红的桑葚；也不必说鸣蝉在树叶里长吟，肥胖的黄蜂伏在菜花上。
  </p>
  <p class="red">
    世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的心灵。
  </p>
  <p class="left">此段落清除左侧浮动。</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.left {
  border: 1px solid black;
  clear: left;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: white;
  width: 20%;
}
.red {
  float: left;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear_left','100%','250') }}

### clear: right

#### HTML

```html
<div class="wrapper">
  <p class="black">
    不必说碧绿的菜畦，光滑的石井栏，高大的皂荚树，紫红的桑葚；也不必说鸣蝉在树叶里长吟，肥胖的黄蜂伏在菜花上。
  </p>
  <p class="red">
    世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的心灵。
  </p>
  <p class="right">此段落清除右侧浮动。</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.right {
  border: 1px solid black;
  clear: right;
}
.black {
  float: right;
  margin: 0;
  background-color: black;
  color: white;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear_right','100%','250') }}

### clear: both

#### HTML

```html
<div class="wrapper">
  <p class="black">
    人的心只容得下一定程度的绝望，海绵已经吸够了水，即使大海从它上面流过，也不能再给它增添一滴水了。文学就像炉中的火一样，我们从人家借得火来，把自己点燃，而后传给别人，以致为大家所共同拥有。
  </p>
  <p class="red">
    孔乙己是站着喝酒而穿长衫的唯一的人。他身材很高大；青白脸色，皱纹间时常夹些伤痕；一部乱蓬蓬的花白的胡子。
  </p>
  <p class="both">此段落清除两侧浮动。</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.both {
  border: 1px solid black;
  clear: both;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: white;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 45%;
}
```

{{ EmbedLiveSample('clear_both','100%','300') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 基础框盒模型](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)

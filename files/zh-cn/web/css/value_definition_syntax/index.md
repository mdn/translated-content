---
title: CSS 属性值定义语法
slug: Web/CSS/Value_definition_syntax
---

{{CSSRef}}

**CSS 属性值定义语法**（CSS value definition syntax）是用来限定 CSS 属性合法取值的专门语法。在此基础之上，一个 CSS 属性的合法取值也由语义所限制，比如一些数字必须是正数。

CSS 属性值定义语法描述了哪些值是可取的 CSS 属性，基本组成元素包括关键字、符号与带类型的参数。

## 基本组成元素

### 关键字

#### 一般关键字

有预定义含义的一般关键字按字面意义出现，不需要引号，如`auto`, `smaller` 或 `ease-in`。

#### 特殊关键字：`inherit`、`initial`和`unset`

所有 CSS 属性值都可以使用`inherit`、`initial`和`unset`，它们的定义贯穿 CSS 始终。它们未显示在值定义中，但都是隐含可用的。

### 符号

CSS 中，有一些符号是可以出现的，比如斜杠 ('`/`') 或者逗号 ('`,`') 等。它们用来分隔属性值：逗号用来分隔数个并列值，或者分隔函数的参数；斜杠用来分隔一个值的多个部分，通常用在 CSS 缩写中分离具有相同类型但属于不同属性的组件。

这两种符号会以其字面意义出现在 CSS 属性值定义中。

### 带类型的参数

#### 基本类型

一些类型在 CSS 中经常出现，CSS 规范中将其专门定义，称为*基本类型*，用一对尖括号表示：'`<`'与'`>`'，例如：{{ cssxref("&lt;angle&gt;") }}, {{cssxref("&lt;string&gt;")}}, …

#### 其他类型

其他类型同样也用一对尖括号表示：'`<`'与'`>`'。

其他类型分为两种：

- *共享同一个属性名称*的数个类型。在这种情况下，数据类型与属性共享同一组值。它们出现在一对引号之中，经常用于属性的缩写。
- *不共享同一个属性名称*的数个类型，它们与基本类型很相似，不同是：这种参数仅在规范中相关属性的描述处定义，而基本类型在规范中有专门定义。

## 组合符号

### 方括号

*方括号*将数个基本元素组成一个整体，用来**强调组合的优先级**。例如：

```css
bold [ thin && <length> ]
```

以下均为该例的合法取值：

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

但以下不是合法取值：

- `thin bold 3em` 因为`bold`被放置在方括号定义的整体之中。根据定义，`bold`必须出现在方括号定义的整体之前。

### 并置

*并置*是指将数个关键字、符号或类型，用空格分开写在一起。并置中所有的元素都**必须出现并且按所规定的顺序出现**。例如：

```css
bold <length> , thin
```

以下均为该例的合法取值：

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

但以下不是合法取值：

- `thin 1em, bold`因为顺序有错。
- `bold 1em thin`因为所有元素都必须出现，包括逗号。
- `bold 0.5ms, thin`因为`ms`是时间值，不是长度值：{{cssxref("&lt;length&gt;")}}

### “与”组合符：&&

*“与”组合符*连接的各个部分都**必须出现，但是顺序任意**。例如：

```css
bold && <length>
```

以下均为该例的合法取值：

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

但以下不是合法取值：

- `bold`因为长度值没有出现。
- `bold 1em bold`因为各部分必须恰好出现一次。

> [!NOTE]
> 并置的优先级高于“与”组合符。例如 `bold thin && <length>` 等价于 `[ bold thin ] && <length>`。它们的合法取值是：`bold thin <length>` 或 `<length> bold thin` 但不是 `bold <length> thin`。

### “或”组合符：||

*“或”组合符*表示其连接的所有组成元素是可选的，**次序任意，但是至少其中一个要出现**。“或”组合符通常用来描述[属性缩写](/zh-CN/docs/Web/CSS/Shorthand_properties)中的各部分。

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

以下均为该例的合法取值：

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

但以下不是合法取值：

- `blue yellow`因为一个组成部分最多出现一次。
- `bold`因为它不允许出现。

> [!NOTE]
> “与”组合符的优先级高于“或”组合符，比如 `bold || thin && <length>` 等价于 `bold || [ thin && <length> ]`。它们的合法取值是：`bold`, `thin <length>`, `bold thin <length>`, 或者 `thin <length> bold` ，但不是：`<length> bold thin` 因为 bold 若出现，则必须出现在 `thin && <length>` 整体的前面或后面。

### “互斥”组合符：|

*“互斥”组合符*表示各组成部分中只能**恰好出现一个**，通常用来分隔一个属性的所有可选值。例如：

```css
<percentage> | <length> | left | center | right | top | bottom
```

以下均为该例的合法取值：

- `3%`
- `0`
- `3.5em`
- `left`
- `center`
- `right`
- `top`
- `bottom`

但以下不是合法取值：

- `center 3%` 因为最多只能出现一个组成部分
- `3em 4.5em` 因为每个组成部分最多只能出现一次

> [!NOTE]
> “或”组合符的优先级高于“互斥”组合符，比如`bold | thin || <length>`等价于`bold | [ thin || <length> ]`。它们的合法取值是：`bold`, `thin`, `<length>`, `<length> thin`, 或 `thin <length>`，但不能是 `bold <length>`，因为“互斥”组合符所连接的数个部分中，只有一个能出现。

## 数量符号

数量符号用来描述一个元素可以出现多少次。若不标注，则这个元素比如恰好出现一次。

注意数量描述符不能叠加出现，并且优先级最高。

### 星号 (`*`)

*星号*表示可以出现**零次（即不出现），一次，或任意多次**。例如：

```css
bold smaller*
```

以下均为该例的合法取值：

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` and so on.

但以下不是合法取值：

- `smaller` 因为`bold`并置于`smaller`，必须出现在任何`smaller`之前。

### 加号 (`+`)

*加号*表示可以出现**一次或多次**。例如：

```css
bold smaller+
```

以下均为该例的合法取值：

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` and so on.

但以下不是合法取值：

- `bold` 因为`smaller`必须出现至少一次。
- `smaller` 因为`bold` 是并置关系，必须在`smaller`之前出现。

### 问号 (`?`)

*问号*表示可选，即出现**零次或一次**。例如：

```css
bold smaller?
```

以下均为该例的合法取值：

- `bold`
- `bold smaller`

但以下不是合法取值：

- `bold smaller smaller` 因为`smaller`最多出现一次。
- `smaller` 因为`bold`是并置关系，必须出现在`smaller`之前。

### 大括号 (`{ }`)

*大括号*包含两个以逗号分隔的整数 A 与 B，表示**最少出现 A 次，且最多出现 B 次**。例如：

```css
bold smaller{1,3}
```

以下均为该例的合法取值：

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

但以下不是合法取值：

- `bold` 因为`smaller` 至少要出现一次。
- `bold smaller smaller smaller smaller` 因为`smaller` 最多出现三次。
- `smaller` 因为`bold`是并置关系，必须出现在`smaller`之前。

### 井号 (`#`)

*井号*表示**可以出现一次或多次**，与*加号*相似。但是其多次出现必须**以逗号分隔**。例如：

```css
bold smaller#
```

以下均为该例的合法取值：

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller` and so on.

但以下不是合法取值：

- `bold` 因为`smaller`必须至少出现一次。
- `bold smaller smaller smaller` 因为多个`smaller`必须以逗号分隔。
- `smaller` 因为`bold`是并置关系，必须出现在`smaller`之前。

### 叹号 (`!`)

组后面的叹号表示该组是必需的，并且至少产生一个值；即使组内项目的语法允许省略全部的值，也至少要保留一个值。

```css
[ bold? smaller? ]!
```

以下均为该例的合法取值：

- `bold`
- `smaller`
- `bold smaller`

但以下不是合法取值：

- `bold` 和 `smaller`都没有：因为至少要出现一个。
- `smaller bold`：因为 `bold` 必须出现在 `smaller` 前面。
- `bold smaller bold`：因为 `bold` 只能出现一次。

## 总结

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">符号</th>
      <th scope="col">名称</th>
      <th scope="col">描述</th>
      <th scope="col">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4">组合符号</th>
    </tr>
    <tr>
      <td></td>
      <td>并置</td>
      <td>各部分必须出现且按顺序出现</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>“与”组合符</td>
      <td>各部分必须出现，但可以不按顺序</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>“或”组合符</td>
      <td>各部分至少出现一个，可以不按顺序</td>
      <td>
        <code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code>
      </td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>“互斥”组合符</td>
      <td>各部分恰好出现一个</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>方括号</td>
      <td>强调优先级</td>
      <td><code>bold [ thin &#x26;&#x26; &#x3C;length> ]</code></td>
    </tr>
    <tr>
      <th colspan="4">数量符号</th>
    </tr>
    <tr>
      <td></td>
      <td>无数量符号</td>
      <td>恰好一次</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>星号</td>
      <td>零次、一次或多次</td>
      <td><code>bold smaller*</code></td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>加号</td>
      <td>一次或多次</td>
      <td><code>bold smaller+</code></td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td>问号</td>
      <td>零次或一次（即可选）</td>
      <td><code>bold smaller?</code></td>
    </tr>
    <tr>
      <td><code>{A,B}</code></td>
      <td>大括号</td>
      <td>至少<code>A</code>次，至多<code>B</code>次</td>
      <td><code>bold smaller{1,3}</code></td>
    </tr>
    <tr>
      <td><code>#</code></td>
      <td>井号</td>
      <td>一次或多次，但多次出现必须以逗号分隔</td>
      <td><code>bold smaller#</code></td>
    </tr>
    <tr>
      <td><code>!</code></td>
      <td>叹号</td>
      <td>组必须产生一个值</td>
      <td><code>[ bold? smaller? ]!</code></td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 参见

- CSS 重要概念：

  - [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)
  - [@ 规则](/zh-CN/docs/Web/CSS/At-rule)
  - [注释](/zh-CN/docs/Web/CSS/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/Inheritance)
  - [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [布局模式](/zh-CN/docs/Web/CSS/Layout_mode)
  - [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
  - [外边距合并](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 值

    - [初始值](/zh-CN/docs/Web/CSS/initial_value)
    - [计算值](/zh-CN/docs/Web/CSS/computed_value)
    - [解析值](/zh-CN/docs/Web/CSS/resolved_value)
    - [指定值](/zh-CN/docs/Web/CSS/specified_value)
    - [应用值](/zh-CN/docs/Web/CSS/used_value)
    - [实际值](/zh-CN/docs/Web/CSS/actual_value)

  - [属性值定义语法](/zh-CN/docs/Web/CSS/Value_definition_syntax)
  - [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)
  - [可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)

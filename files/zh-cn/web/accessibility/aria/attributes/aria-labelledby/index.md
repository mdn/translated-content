---
title: Using the aria-labelledby attribute
slug: Web/Accessibility/ARIA/Attributes/aria-labelledby
---

### 描述

[`aria-labelledby`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby)属性用来表明某些元素的 id 是某一对象的标签。它被用来确定控件或控件组与它们标签之间的联系。使用诸如屏幕阅读器等辅助技术的用户通常使用 tabbing 在页面的不同区域间进行导航。如果一个输入元素、控件或控件组没有被分配一个 label 标签，那么屏幕阅读器就无法对其进行阅读。

`aria-labelledby` 属性与[aria-describedby](/zh-CN/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute)属性非常相似：用一个标签描述某一对象的本质，可能会提供一些用户需要了解的额外信息。

`aria-labelledby` 属性并不仅仅用于表单元素，也可以用来分配静态文本给控件、元素组、面板组以及包含标题和定义等内容的区域等。下方的示例将会展示如何针对这些情况运用这一属性的更多信息。

`aria-labelledby` 属性可以与 HTML 元素 label 联合使用，用于提高对于不支持 ARIA 技术的用户代理的兼容性。

这一属性可以用于任何典型的 HTML 表单元素，不仅限于已分配 ARIA role 的元素。

### 值 Value

一个以空格进行分割的元素 ID 列表。

### 对于用户代理和辅助技术的可能影响

当 `aria-labelledby` 和 `aria-label` 都被使用时，用户代理在生成可访问的名称属性时将为 `aria-labelledby` 分配更高的优先级。

**注意：** 由于不同的辅助技术对于这一技术的处理可能不同，以上提供的信息尽是诸多可能的一种，而非一般情况。

### 示例

#### 示例 1: 多标签 Mutiple Labels

在下面的示例中，每个输入域都被它自身的独立标签以及其所在组的标签进行了标识：

```html
<div id="billing">Billing Address</div>

<div>
  <div id="name">Name</div>
  <input type="text" aria-labelledby="name billing" />
</div>
<div>
  <div id="address">Address</div>
  <input type="text" aria-labelledby="address billing" />
</div>
```

#### 示例 2: 联结的标题和区域 Associating Headings With Regions

在下面的示例中，标题元素被与它们作为标题的内容联结在一起。注意，所参考的区域是包含标题元素的那个区域。

```html
<div role="main" aria-labelledby="foo">
  <h1 id="foo">Wild fires spread across the San Diego Hills</h1>
  Strong winds expand fires ignited by high temperatures ...
</div>
```

#### 示例 3: 单选组 Radio Groups

在下面的示例中，单选组[radiogroup](/zh-CN/Accessibility/ARIA/ARIA_Techniques/Using_the_radiogroup_role)的容器通过一个 aria-labeledby 属性与他的的标签相联结：

```html
<div id="radio_label">My radio label</div>
<ul role="radiogroup" aria-labelledby="radio_label">
  <li role="radio">Item #1</li>
  <li role="radio">Item #2</li>
  <li role="radio">Item #3</li>
</ul>
```

#### 示例 4: 对话框标签 Dialog Label

在下面的示例中，标记对话框的标题元素通过 aria-labeledby 属性被引用

```html
<div role="dialog" aria-labelledby="dialogheader">
  <h2 id="dialogheader">Choose a File</h2>
  ... Dialog contents
</div>
```

#### 示例 5: 内联定义 Inline Definition

在下面的示例中，某一事物的被一个叙述性的自然流所描述的定义与这一事物本身通过**aria-labeledby**属性相联结：

```html
<p>
  The doctor explained it had been a <dfn id="placebo">placebo</dfn>, or
  <span role="definition" aria-labelledby="placebo">
    an inert preparation prescribed more for the mental relief of the patient
    than for its actual effect on a disorder.</span
  >
</p>
```

#### 示例 6: 定义列表 Definition Lists

在下面的示例中，正式的定义列表中的定义与他们所定义的项目通过 aria-labeledby 属性相联结：

```html
<dl>
  <dt id="anathema">anthema</dt>
  <dd role="definition" aria-labelledby="anathema">
    a ban or curse solemnly pronounced by ecclesiastical authority and
    accompanied by excommunication
  </dd>
  <dd role="definition" aria-labelledby="anathema">
    a vigorous denunciation : cursor
  </dd>

  <dt id="homily">homily</dt>
  <dd role="definition" aria-labelledby="homily">a usually short sermon</dd>
  <dd role="definition" aria-labelledby="homily">
    a lecture or discourse on or of a moral theme
  </dd>
</dl>
```

#### 示例 7: 菜单

在下面的示例中，一个[popup menu](/zh-CN/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-haspopup_attribute)通过 aria-labeledby 属性与其标签相联结：

```html
<div role="menubar">
  <div role="menuitem" aria-haspopup="true" id="fileMenu">File</div>
  <div role="menu" aria-labelledby="fileMenu">
    <div role="menuitem">Open</div>
    <div role="menuitem">Save</div>
    <div role="menuitem">Save as ...</div>
    ...
  </div>
  ...
</div>
```

### 注意

The most common _accessibility API_ mapping for a label is the _accessible name_ property

### Used by ARIA roles

all elements of the base markup

### Related ARIA techniques

- [Using the aria-label attribute](/zh-CN/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)
- [Using the aria-describedby attribute](/zh-CN/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute)

### Compatibility

TBD: Add support information for common UA and AT product combinations

### Additional resources

- [WAI-ARIA specification for aria-labelledby](http://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby)

---
title: "`<ol>` HTML 有序列表元素"
short-title: <ol>
slug: Web/HTML/Reference/Elements/ol
l10n:
  sourceCommit: 51c7af056884cf4b990052e492c21cc8508eef5c
---

**`<ol>`** [HTML](/zh-CN/docs/Web/HTML) 元素表示一系列有序的列表项，通常渲染为带编号的列表。

{{InteractiveExample("HTML 演示：&lt;ol&gt;", "tabbed-shorter")}}

```html interactive-example
<ol>
  <li>将面粉、泡打粉、糖和盐混合。</li>
  <li>在另一个碗里，将鸡蛋、牛奶和油混合。</li>
  <li>将两种混合物搅拌在一起。</li>
  <li>将松饼烤盘装至 3/4 满。</li>
  <li>烘烤 20 分钟。</li>
</ol>
```

```css interactive-example
li {
  font:
    1rem "Fira Sans",
    sans-serif;
  margin-bottom: 0.5rem;
}
```

## 属性

此元素还接受[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `compact` {{Deprecated_inline}} {{non-standard_inline}}
  - : 此布尔属性提示列表应以紧凑的样式渲染。浏览器对此属性的解释各不相同。请改用 [CSS](/zh-CN/docs/Web/CSS)：要获得与 `compact` 属性类似的效果，可以给 CSS 属性 {{cssxref("line-height")}} 设置 `80%` 的值。
- `reversed`
  - : 此布尔属性表示列表项按相反顺序排列。各项将从大到小依次编号。
- `start`
  - : 一个整数，指定列表项开始计数的数值。它始终是阿拉伯数字（1、2、3 等），即使编号的 `type` 是字母或罗马数字也一样。例如，要从字母“d”或罗马数字“iv”开始编号，请使用 `start="4"`。
- `type`
  - : 设置编号的类型：
    - `a` 表示小写字母
    - `A` 表示大写字母
    - `i` 表示小写罗马数字
    - `I` 表示大写罗马数字
    - `1` 表示数字（默认）

    整个列表都会使用指定的类型，除非包裹其中的 {{HTMLElement("li")}} 元素使用了不同的 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/li#type) 属性。

    > [!NOTE]
    > 除非列表编号的类型很重要（例如在法律或技术文档中，条目要靠编号或字母来引用），否则请改用 CSS 的 {{CSSxRef("list-style-type")}} 属性。

## 使用说明

通常，有序列表项前面会显示一个[标记](/zh-CN/docs/Web/CSS/Reference/Selectors/::marker)，例如数字或字母。

`<ol>` 和 {{HTMLElement("ul")}}（或同义词 {{HTMLElement("menu")}}）元素可以嵌套任意深度，并按需在 `<ol>`、`<ul>`（或 `<menu>`）之间交替。要嵌套列表，请把列表放在父列表的 {{HTMLElement("li")}} 元素内部；列表元素不能是另一个 `<ul>` 或 `<ol>` 的直接子元素。

`<ol>` 和 {{HTMLElement("ul")}} 元素都表示一组列表项。区别在于，对 `<ol>` 元素而言，顺序是有意义的。例如：

- 菜谱中的步骤
- 逐向导航的指引
- 营养成分标签上按含量递减排列的配料表

要确定该用哪种列表，可以试着改变列表项的顺序；如果含义发生了变化，就使用 `<ol>` 元素——否则可以使用 {{HTMLElement("ul")}}；如果列表本身是菜单，则可以使用 {{HTMLElement("menu")}}。

## 示例

### 基本示例

```html
<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

#### 结果

{{EmbedLiveSample("基本示例", 400, 100)}}

### 使用罗马数字类型

```html
<ol type="i">
  <li>引言</li>
  <li>申诉清单</li>
  <li>结论</li>
</ol>
```

#### 结果

{{EmbedLiveSample("使用罗马数字类型", 400, 100)}}

### 使用 start 属性

```html
<p>未进入获胜者圈的参赛者的名次：</p>

<ol start="4">
  <li>竞走高手斯图</li>
  <li>闲庭信步的山姆</li>
  <li>慢吞吞的罗德里格斯</li>
</ol>
```

#### 结果

{{EmbedLiveSample("使用 start 属性", 400, 100)}}

### 嵌套列表

```html
<ol>
  <li>第一项</li>
  <li>
    第二项
    <!-- 结束标签 </li> 不在这里！ -->
    <ol>
      <li>第二项的第一子项</li>
      <li>第二项的第二子项</li>
      <li>第二项的第三子项</li>
    </ol>
  </li>
  <!-- 结束标签 </li> 在这里 -->
  <li>第三项</li>
</ol>
```

#### 结果

{{EmbedLiveSample("嵌套列表", 400, 150)}}

### 有序列表中的无序列表

```html
<ol>
  <li>第一项</li>
  <li>
    第二项
    <!-- 结束标签 </li> 不在这里！ -->
    <ul>
      <li>第二项的第一子项</li>
      <li>第二项的第二子项</li>
      <li>第二项的第三子项</li>
    </ul>
  </li>
  <!-- 结束标签 </li> 在这里 -->
  <li>第三项</li>
</ol>
```

#### 结果

{{EmbedLiveSample("有序列表中的无序列表", 400, 150)}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >，如果 <code>&#x3C;ol></code> 元素的子元素包含至少一个 {{HTMLElement("li")}} 元素，则为<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#可感知内容"
          >可感知内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        零个或多个 {{HTMLElement("li")}}、{{HTMLElement("script")}} 和
        {{HTMLElement("template")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/list_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>、
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a>、
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role"><code>menubar</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>、
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>、
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role"><code>radiogroup</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role"><code>tablist</code></a>、
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role"><code>toolbar</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{DOMxRef("HTMLOListElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与列表相关的 HTML 元素：{{HTMLElement("ul")}}、{{HTMLElement("li")}} 和 {{HTMLElement("menu")}}
- 可能对 `<ol>` 元素的样式特别有用的 CSS 属性：
  - {{CSSxRef("list-style")}} 属性，用于选择序号的显示方式
  - [CSS 计数器](/zh-CN/docs/Web/CSS/Guides/Counter_styles/Using_counters)，用于处理复杂的嵌套列表
  - {{CSSxRef("line-height")}} 属性，用于模拟已弃用的 `compact` 属性
  - {{CSSxRef("margin")}} 属性，用于控制列表的缩进

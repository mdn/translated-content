---
title: <menu>：菜单元素
slug: Web/HTML/Element/menu
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{HTMLSidebar}}

**`<menu>`** [HTML](/zh-CN/docs/Web/HTML) 元素在 HTML 规范中被描述为 {{HTMLElement("ul")}} 的语义替代，但浏览器将其视为与 {{HTMLElement("ul")}} 没有区别（并通过无障碍树暴露）。它表示一个无序列表（由 {{HTMLElement("li")}} 元素表示）。

{{EmbedInteractiveExample("pages/tabbed/menu.html", "tabbed-shorter")}}

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 使用说明

`<menu>` 和 {{HTMLElement("ul")}} 元素都用于表示无序列表。它们的关键区别在于，{{HTMLElement("ul")}} 主要用于显示内容，而 `<menu>` 则用于交互式内容。

> [!NOTE]
> 在早期版本的 HTML 规范中，`<menu>` 元素还有一个额外的用例，即作为上下文菜单。此功能被认为已过时，并且不在规范中。

## 示例

### 工具栏

在这个示例中，使用 `<menu>` 元素创建了一个编辑应用程序的工具栏。

#### HTML

```html
<menu>
  <li><button onclick="copy()">复制</button></li>
  <li><button onclick="cut()">剪切</button></li>
  <li><button onclick="paste()">粘贴</button></li>
</menu>
```

请注意，这在功能上与以下内容没有区别：

```html
<ul>
  <li><button onclick="copy()">复制</button></li>
  <li><button onclick="cut()">剪切</button></li>
  <li><button onclick="paste()">粘贴</button></li>
</ul>
```

#### CSS

```css
menu,
ul {
  display: flex;
  list-style: none;
  padding: 0;
  width: 400px;
}

li {
  flex-grow: 1;
}

button {
  width: 100%;
}
```

#### 结果

{{EmbedLiveSample("工具栏", "100%", 100)}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <p>
          <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
            >流式内容</a
          >。如果元素的子元素包含至少一个
          {{HTMLElement("li")}} 元素：<a
            href="/zh-CN/docs/Web/HTML/Content_categories#可感知内容"
            >可感知内容</a
          >。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <p>
          零个或多个 {{HTMLElement("li")}}、{{HTMLElement("script")}} 和 {{HTMLElement("template")}}。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/list_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/directory_role"><code>directory</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>、<code><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/listbox_role">listbox</a></code>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menubar_role"><code>menubar</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/tablist_role"><code>tablist</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/toolbar_role"><code>toolbar</code></a> 或 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/tree_role"><code>tree</code></a>。
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{DOMxRef("HTMLMenuElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与列表相关的 HTML 元素：{{HTMLElement("ol")}}、{{HTMLElement("ul")}} 和 {{HTMLElement("li")}}。

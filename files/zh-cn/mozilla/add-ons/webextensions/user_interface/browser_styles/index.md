---
title: Browser styles
slug: Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles
---

{{AddonSidebar}}

扩展程序包含的某些 UI 组件，例如： [popups](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups), [sidebars](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), [options pages](/zh-CN/Add-ons/WebExtensions/user_interface/Options_pages) ，实际上可以用如下方式统一定义：

1. 创建一个 HTML 文件用于描述该 UI 组件的页面结构
2. 在 manifest.json 中添加字段 ([`browser_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [`page_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), [`sidebar_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action), 或 [`options_ui`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)) 以指向其对应的页面

这种方式面临的一个挑战是如何使用浏览器自带的样式，以使得组件的 UI 表现与浏览器的 UI 风格相符。要解决这个问题，可以在该字段的配置中增加一个可字段 `browser_sytle` ，如果设置了这个字段并且值为 `true` , 那么该 UI 组件的 HTML 将会被插入一个或多个样式表，样式表会使你的扩展程序的 UI 表现与浏览器的风格一致 (并且与其他同样应用了这个字段的扩展程序一致)。

若使用了 `browser_style: true` , 你需要在不同的浏览器主题中测试你的扩展程序，以确保其 UI 表现和期望的一致。

> **备注：** 谷歌浏览器 **Google Chrome** 和 欧朋浏览器 **Opera** 使用字段名 `chrome_style` 而非`browser_style`, 因此如果要适配它们，你需要同时添加这两个字段。

在火狐浏览器中，这个样式文件可以在 `chrome://browser/content/extension.css`查看。为 Mac OS X 系统额外准备的样式文件也可以在 `chrome://browser/content/extension-mac.css` 查看。

大多数样式是自动应用的，但是某些元素需要添加非标准的类名 `browser-style` 来获得其样式，如下表所示：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Element</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/HTML/Element/button">&#x3C;button></a></code
        >
      </td>
      <td>
        <pre class="brush: html">
&#x3C;button class="browser-style">Click me&#x3C;/button></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code
            ><a href="/zh-CN/docs/Web/HTML/Element/select"
              >&#x3C;select></a
            ></code
          >
        </p>
      </td>
      <td>
        <pre class="brush: html">
&#x3C;select class="browser-style" name="select">
  &#x3C;option value="value1">Value 1&#x3C;/option>
  &#x3C;option value="value2" selected>Value 2&#x3C;/option>
  &#x3C;option value="value3">Value 3&#x3C;/option>
&#x3C;/select></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/HTML/Element/textarea"
            >&#x3C;textarea></a
          ></code
        >
      </td>
      <td>
        <pre class="brush: html">
&#x3C;textarea class="browser-style">Write here&#x3C;/textarea></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        Parent of an
        <code
          ><a href="/zh-CN/docs/Web/HTML/Element/input">&#x3C;input></a></code
        >
      </td>
      <td>
        <pre class="brush: html">
&#x3C;div class="browser-style">
  &#x3C;input type="radio" id="op1" name="choices" value="op1"/>
  &#x3C;label for="op1">Option 1&#x3C;/label>

&#x3C;input type="radio" id="op2" name="choices" value="op2"/>
&#x3C;label for="op2">Option 2&#x3C;/label>
&#x3C;/div></pre
        >

</td>
</tr>

  </tbody>
</table>

> **备注：** 查看 [Firefox bug 1465256](https://bugzil.la/1465256) 以了解相关修订

## 浏览器兼容性

{{Compat}}

## 火狐面板组件 Firefox Panel Components

> **备注：** 此功能不是通用标准，仅支持在 firefox 中使用

`chrome://browser/content/extension.css` 样式文件中也包含了火狐面板组件的样式

[legacy Firefox Style Guide](https://firefoxux.github.io/StyleGuide/#/navigation) 使用示例

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Element</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Header</td>
      <td>
        <pre class="brush: html">
&#x3C;header class="panel-section panel-section-header">
  &#x3C;div class="icon-section-header">&#x3C;img src="image.svg"/>&#x3C;/div>
  &#x3C;div class="text-section-header">Header&#x3C;/div>
&#x3C;/header></pre
        >
      </td>
    </tr>
    <tr>
      <td>Footer</td>
      <td>
        <pre class="brush: html">
&#x3C;footer class="panel-section panel-section-footer">
  &#x3C;button class="panel-section-footer-button">Cancel&#x3C;/button>
  &#x3C;div class="panel-section-footer-separator">&#x3C;/div>
  &#x3C;button class="panel-section-footer-button default">Confirm&#x3C;/button>
&#x3C;/footer></pre
        >
      </td>
    </tr>
    <tr>
      <td>Tabs</td>
      <td>
        <pre class="brush: html">
&#x3C;div class="panel-section panel-section-tabs">
  &#x3C;button class="panel-section-tabs-button selected">Tab&#x3C;/button>
  &#x3C;div class="panel-section-tabs-separator">&#x3C;/div>
  &#x3C;button class="panel-section-tabs-button">Tab&#x3C;/button>
  &#x3C;div class="panel-section-tabs-separator">&#x3C;/div>
  &#x3C;button class="panel-section-tabs-button">Tab&#x3C;/button>
&#x3C;/div></pre
        >
      </td>
    </tr>
    <tr>
      <td>Form</td>
      <td>
        <pre class="brush: html">
&#x3C;div class="panel-section panel-section-formElements">
  &#x3C;div class="panel-formElements-item">
    &#x3C;label for="name01">Label:&#x3C;/label>
    &#x3C;input type="text" value="Name" id="name01" />
  &#x3C;/div>
  &#x3C;div class="panel-formElements-item">
    &#x3C;label for="picker01">Label:&#x3C;/label>
    &#x3C;select id="picker01">
      &#x3C;option value="value1" selected="true">Dropdown&#x3C;/option>
      &#x3C;option value="value2">List Item&#x3C;/option>
      &#x3C;option value="value3">List Item&#x3C;/option>
    &#x3C;/select>
  &#x3C;/div>
  &#x3C;div class="panel-formElements-item">
    &#x3C;label for="placeholder01">Label:&#x3C;/label>
    &#x3C;input type="text" placeholder="Placeholder" id="placeholder01" />
    &#x3C;button name="expander" class="expander">&#x3C;/button>
  &#x3C;/div>
&#x3C;/div></pre
        >
      </td>
    </tr>
    <tr>
      <td>Menu</td>
      <td>
        <pre class="brush: html">
&#x3C;div class="panel-section panel-section-list">
  &#x3C;div class="panel-list-item">
    &#x3C;div class="icon">&#x3C;/div>
    &#x3C;div class="text">List Item&#x3C;/div>
    &#x3C;div class="text-shortcut">Ctrl-L&#x3C;/div>
  &#x3C;/div>

&#x3C;div class="panel-list-item">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>

&#x3C;div class="panel-section-separator">&#x3C;/div>

&#x3C;div class="panel-list-item disabled">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">Disabled List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>

&#x3C;div class="panel-section-separator">&#x3C;/div>

&#x3C;div class="panel-list-item">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>

&#x3C;div class="panel-list-item">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>
&#x3C;/div></pre
        >

</td>
</tr>

  </tbody>
</table>

### 示例

#### HTML

```html
<header class="panel-section panel-section-header">
  <div class="icon-section-header"><!-- An image goes here. --></div>
  <div class="text-section-header">Header</div>
</header>

<div class="panel-section panel-section-list">
  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut">Ctrl-L</div>
  </div>

  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut"></div>
  </div>

  <div class="panel-section-separator"></div>

  <div class="panel-list-item disabled">
    <div class="icon"></div>
    <div class="text">Disabled List Item</div>
    <div class="text-shortcut"></div>
  </div>

  <div class="panel-section-separator"></div>

  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut"></div>
  </div>

  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut"></div>
  </div>
</div>

<footer class="panel-section panel-section-footer">
  <button class="panel-section-footer-button">Cancel</button>
  <div class="panel-section-footer-separator"></div>
  <button class="panel-section-footer-button default">Confirm</button>
</footer>
```

```css hidden
/* Global */
html,
body {
  background: white;
  box-sizing: border-box;
  color: #222426;
  cursor: default;
  display: flex;
  flex-direction: column;
  font: caption;
  margin: 0;
  padding: 0;
  -moz-user-select: none;
}

body * {
  box-sizing: border-box;
  text-align: start;
}

button.panel-section-footer-button,
button.panel-section-tabs-button {
  color: inherit;
  background-color: unset;
  font: inherit;
  text-shadow: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
}

/* Panel Section */
.panel-section {
  display: flex;
  flex-direction: row;
}

.panel-section-separator {
  background-color: rgba(0, 0, 0, 0.15);
  min-height: 1px;
}

/* Panel Section - Header */
.panel-section-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 16px;
}

.panel-section-header > .icon-section-header {
  background-position: center center;
  background-repeat: no-repeat;
  height: 32px;
  margin-right: 16px;
  position: relative;
  width: 32px;
}

.panel-section-header > .text-section-header {
  align-self: center;
  font-size: 1.385em;
  font-weight: lighter;
}

/* Panel Section - List */
.panel-section-list {
  flex-direction: column;
  padding: 4px 0;
}

.panel-list-item {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 24px;
  padding: 0 16px;
}

.panel-list-item:not(.disabled):hover {
  background-color: rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.panel-list-item:not(.disabled):hover:active {
  background-color: rgba(0, 0, 0, 0.1);
}

.panel-list-item.disabled {
  color: #999;
}

.panel-list-item > .icon {
  flex-grow: 0;
  flex-shrink: 0;
}

.panel-list-item > .text {
  flex-grow: 10;
}

.panel-list-item > .text-shortcut {
  color: #808080;
  font-family: "Lucida Grande", caption;
  font-size: 0.847em;
  justify-content: flex-end;
}

.panel-section-list .panel-section-separator {
  margin: 4px 0;
}

/* Panel Section - Footer */
.panel-section-footer {
  background-color: rgba(0, 0, 0, 0.06);
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  color: #1a1a1a;
  display: flex;
  flex-direction: row;
  height: 41px;
  margin-top: -1px;
  padding: 0;
}

.panel-section-footer-button {
  flex: 1 1 auto;
  height: 100%;
  margin: 0 -1px;
  padding: 12px;
  text-align: center;
}

.panel-section-footer-button > .text-shortcut {
  color: #808080;
  font-family: "Lucida Grande", caption;
  font-size: 0.847em;
}

.panel-section-footer-button:hover {
  background-color: rgba(0, 0, 0, 0.06);
}

.panel-section-footer-button:hover:active {
  background-color: rgba(0, 0, 0, 0.1);
}

.panel-section-footer-button.default {
  background-color: #0996f8;
  box-shadow: 0 1px 0 #0670cc inset;
  color: #fff;
}

.panel-section-footer-button.default:hover {
  background-color: #0670cc;
  box-shadow: 0 1px 0 #005bab inset;
}

.panel-section-footer-button.default:hover:active {
  background-color: #005bab;
  box-shadow: 0 1px 0 #004480 inset;
}

.panel-section-footer-separator {
  background-color: rgba(0, 0, 0, 0.1);
  width: 1px;
  z-index: 99;
}
```

```css hidden
/* Example specific – not part of chrome://browser/content/extension.css */
body {
  background: #fcfcfc;
  background-clip: padding-box;
  border: 1px solid rgba(24, 26, 27, 0.2);
  box-shadow:
    0 3px 5px rgba(24, 26, 27, 0.1),
    0 0 7px rgba(24, 26, 27, 0.1);
  box-sizing: content-box;
  margin: 2em auto 0.5em;
  width: 384px;
}

html {
  min-height: 100vh;
}

html > body {
  margin: auto;
}

.icon-section-header {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48Y2lyY2xlIGZpbGw9IiMzNjM5NTkiIGN4PSIxNSIgY3k9IjE1IiByPSIxNSIvPjwvc3ZnPg==");
}
```

#### 结果

{{EmbedLiveSample("示例","640","360")}}

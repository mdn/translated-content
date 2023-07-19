---
title: browser_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">类型</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">是否必须</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td>
        <pre class="brush: json">
"browser_action": {
  "browser_style": true,
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

浏览器按钮（browser action）指您的扩展在浏览器工具栏上所添加的按钮。该按钮有个图标，并可可选地拥有一个使用 HTML，CSS，和 JavaScript 指定内容的弹出窗口。

如果您使用弹窗（popup），则该弹窗将在用户点击该按钮时打开，并且弹窗中你所提供的运行中的 JavaScript 将可处理用户与其的交互。如果您不使用弹窗，则会在用户点击该按钮时将点击事件传递给你扩展的 [background scripts](/zh-CN/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts) 中。

您同样可以使用 [browserAction API](/zh-CN/Add-ons/WebExtensions/API/browserAction) 以编程的方式创建及控制浏览器按钮。

## 语法

`browser_action` 键是一个可能有以下任何属性的对象，均是可选：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">名称</th>
      <th scope="col">类型</th>
      <th scope="col">详细描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>browser_style</code></td>
      <td><code>Boolean</code></td>
      <td>
        <div class="geckoVersionNote">Firefox 48 中新出现</div>
        <p>可选，默认为 <code>false</code>。</p>
        <p>
          使用此项来包含一个样式表以使其与浏览器 UI 和其他使用了
          <code>browser_style</code> 属性的扩展外观上保持一致。虽然此键值默认为
          <code>false</code>，还是建议您将其包含并设其为 <code>true</code>。
        </p>
        <p>
          在 Firefox 中，该样式表详阅 chrome://browser/content/extension.css，OS
          X 系统或见于 chrome://browser/content/extension-mac.css。
        </p>
        <p>
          <a href="https://firefoxux.github.io/StyleGuide/#/controls"
            >Firefox Style Guide</a
          >
          记述了为获得特定样式您所能为弹窗中元素应用的 class。
        </p>
        <p>
          <a
            href="https://github.com/mdn/webextensions-examples/tree/main/latest-download"
            >latest-download</a
          >
          中的示例扩展的弹窗使用了 <code>browser_style</code>。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_area</code></td>
      <td><code>String</code></td>
      <td>
        <div class="geckoVersionNote">Firefox 54 中新出现</div>
        <p>
          定义浏览器最初放置该按钮的位置。该字符串可能是以下四个值中的一个：
        </p>
        <ul>
          <li>"navbar"：按钮会被放置到浏览器主工具栏中，与 URL 栏并肩。</li>
          <li>"menupanel"：按钮会被放置到弹出面板中。</li>
          <li>"tabstrip"：按钮会被放置到包含浏览器选项卡的工具栏中。</li>
          <li>"personaltoolbar"：按钮会被放置到书签工具栏中。</li>
        </ul>
        <p>该属性只有 Firefox 支持。</p>
        <p>这个属性是可选的，并默认为 "navbar"。</p>
        <p>
          扩展不能在其被安装后主动更改其按钮的位置，但用户可以使用浏览器内置的界面定制机制来移动按钮。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code></td>
      <td><code>Object</code> 或 <code>String</code></td>
      <td>
        <p>
          使用此项以指定一个或多个 browser action
          之图标。该图标默认显示在浏览器工具栏里。
        </p>
        <p>图标使用相对于 manifest.json 文件本身的 URL 指定。</p>
        <p>你可以通过提供一个字符串以指定单个的图标文件：</p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          要指定多个不同大小的图标，则在此指定一个对象。每个属性的名字是以像素记的该图标的高，且其必须被转换为一个整数。值为其
          URL。示例：
        </p>
        <pre class="brush: json">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre
        >
        <p>
          参阅
          <a
            href="/zh-CN/Add-ons/WebExtensions/manifest.json/browser_action#选择图标大小"
            >选择图标大小</a
          >
          以获得此项的更多指引。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_popup</code></td>
      <td><code>String</code></td>
      <td>
        <p>指向包含弹窗信息的 HTML 文件之路径</p>
        <p>
          该 HTML 文件可能会使用
          <code
            ><a href="/zh-CN/docs/Web/HTML/Element/link">&#x3C;link></a></code
          >
          and
          <code
            ><a href="/zh-CN/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          元素来包含 CSS 和 JavaScript，就像普通网页一样。
        </p>
        <p>
          与普通网页不同，弹窗中运行的 JavaScript 能访问所有的
          <a href="/zh-CN/Add-ons/WebExtensions/API">WebExtension APIs</a
          >（当然，仅对于拥有适当<a
            href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions"
            >权限</a
          >的扩展）。
        </p>
        <p>
          这是一个<a
            href="/zh-CN/Add-ons/WebExtensions/Internationalization#国际化_manifest.json"
            >可本地化属性</a
          >。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_title</code></td>
      <td><code>String</code></td>
      <td>
        <p>按钮的工具提示，在用户将鼠标移到其上时显示。</p>
        <p>
          这是一个<a
            href="/zh-CN/Add-ons/WebExtensions/Internationalization#国际化_manifest.json"
            >可本地化属性</a
          >。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 选择图标大小

浏览器按钮的图标在不同上下文中可能需要以不同大小显示：

- 图标默认是在浏览器工具栏中显示，但用户能把它挪到浏览器菜单面板里（那个在用户点击“汉堡”图标时打开的面板）。工具栏里的图标比菜单面板里的图标小。
- 在像 Retina 屏的高密度显示器上，图标大要两倍。

如果浏览器在给定的情况下找不到正确尺寸的图标，它就会选最匹配的并对其缩放。缩放可能会使图标模糊，所以一件很重要的事情就是小心地选择图标尺寸。

对此有两种常用方法。你可以以 SVG 文件的形式提供单个图标，然后它就会被正确地缩放：

```json
"default_icon": "path/to/geo.svg"
```

或者，您可以提供几个不同尺寸的图标，浏览器将选择最佳匹配。

Firefox 中：

- 工具栏中图标的默认宽高为 16 \* [`window.devicePixelRatio`](/zh-CN/docs/Web/API/Window/devicePixelRatio)。
- 菜单面板中图标的默认宽高为 32 \* [`window.devicePixelRatio`](/zh-CN/docs/Web/API/Window/devicePixelRatio)。

所以你可以选定精确匹配的图标，不论普通屏还是 Retina 屏的显示，都仅需要提供三个图标文件，并把它们像这样确定下来：

```json
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png",
      "64": "path/to/geo-64.png"
    }
```

如果 Firefox 找不到其需要的精确匹配的尺寸，则它会选择大于理想尺寸的已指定的最小图标。如果所有图标都小于理想尺寸，它就将选择已指定的最大图标。

## 示例

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

只有一个图标的浏览器按钮，指定了 2 种不同大小。其扩展的 background scripts 能接收用户点击其图标时的点击事件代码大概像这样：

```js
browser.browserAction.onClicked.addListener(handleClick);
```

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}
```

浏览器按钮具有一个图标，一个标题，还有一个弹窗。弹窗会在用户点击按钮时出现。

对于一个简易，但是完整，使用了浏览器按钮的扩展，参见[演练教程](/zh-CN/Add-ons/WebExtensions/Your_second_WebExtension)。

## 浏览器兼容性

{{Compat}}

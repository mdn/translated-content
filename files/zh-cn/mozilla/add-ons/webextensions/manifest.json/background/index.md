---
title: 后台 - background
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">强制性</th>
      <td>不强制</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td>
        <pre class="brush: json">
"background": {
  "scripts": ["background.js"]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

通过 background 键来给你的扩展程序引入一个或者多个后台脚本文件，以及一个可选的后台页面文件。

后台脚本放置的是需要长期保持状态，或者需要执行长期的操作，并且与任意特定网页或者浏览器窗口的生命周期无关的代码。

后台脚本会在扩展程序被加载后立即被加载，并且一直保持被加载状态，只有在扩展程序被禁止或者卸载的时候才停止运行。只要你获得了必要的许可[permissions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)，你可以在该脚本中使用任意的扩展程序 API。

浏览[Anatomy of a WebExtension](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_pages)中的 Background pages 部分以获取更多的细节。

background 键最多只能拥有以下的两个属性，两个属性都是可选属性：

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>"scripts"</code></td>
      <td>
        <p>
          一个字符串数组，数组中的每个字符串都是 JavaScript 源文件相对于
          manifest.json 的相对路径，JavaScript
          源文件便是些被包含在扩展程序中的后台脚本文件。
        </p>
        <p>脚本共享相同的全局窗口</p>
        <p>脚本按照在数组中的顺序进行加载</p>
        <p>
          <strong>注意在低于 Firefox 50 版本的浏览器下会出现一个问题：</strong
          >当 Firefox debugger
          已经打开时，脚本并不能总是按照数组中定义的顺序进行加载。若要解决这个问题，你可以使用
          page
          属性，用&#x3C;script>标签将后台脚本文件从页面中加载进来。这个问题已经在
          Firefox 50 中被修复。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>"page"</code></td>
      <td>
        <p>
          如果你仅仅指定了“scripts”属性，将生成一个空白的页面来运行指定的脚本。
        </p>
        <p>
          如果你需要在页面中显示某些特定的内容，你可以使用“page”属性来定义自己的页面。
        </p>
        <p>
          如果你使用此属性，你仍然可以使用“script”属性来指定后台脚本，但你也可以就像在普通网页中一样在页面中包含自己的脚本。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 示例

加载 2 个后台脚本文件。

```json
  "background": {
    "scripts": ["jquery.js", "my-background.js"]
  }
```

加载 1 个自定义的后台页面文件。

```json
  "background": {
    "page": "my-background.html"
  }
```

## Browser compatibility

{{Compat}}

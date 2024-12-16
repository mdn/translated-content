---
title: web_accessible_resources
slug: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">类型</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">是否必需</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"web_accessible_resources": [
  "images/my-image.png"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## 描述

你有时想将资源（如图片、HTML、CSS 或 JavaScript）与你的扩展应用合并打包，让网页能够访问它们。

举个例子，[Beastify example extension](https://github.com/mdn/webextensions-examples/tree/main/beastify) 将用户选择的野兽图片来替换网页，这些图片与应用是经过合并打包的。该应用添加 [`<img>`](/zh-CN/docs/Web/HTML/Element/img)，其 `src` 指向图片，这样就使选中的图片可见了。网页要载入图片的话，这些图片就必须可经访问。

通过 `web_accessible_resources`，你列出资源，让它们可经网页访问。这些资源路径相对于 manifest.json 文件。

注意，这其中不必包括 content scripts。

如果你的应用要用 {{WebExtAPIRef("webRequest")}} 来重定向公共 URL(如 HTTPS) 到一个该应用中的页面，那么应用必须将该页面列入`web_accessible_resources`。

### 使用 web_accessible_resources

例如，如果你的应用含有图片，路径为 images/my-image.png，如下所示：

```plain
my-extension-files/
    manifest.json
    my-background-script.js
    images/
        my-image.png
```

如果要使网页能够从元素 [`<img>`](/zh-CN/docs/Web/HTML/Element/img) 的属性 `src` 指向该图片，你得写明`web_accessible_resources`，如下所示：

```json
"web_accessible_resources": ["images/my-image.png"]
```

之后，图片可通过 URL 来访问，如下所示：

```plain
moz-extension://<extension-UUID>/images/my-image.png"
```

`<extension-UUID>` 不是应用 ID，它随机生成，对应每个浏览器实例，以防网页查看浏览器安装的扩展应用来获取信息。

> [!NOTE]
> Chrome 的 `<extension-UUID>` 是不变的。某资源如果由 `web_accessible_resources` 写明，那么它可通过 `chrome-extension://<your-extension-id>/<path/to/resource>` 来访问。

要获得资源的 URL，推荐用 [`runtime.getURL`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL) 向参数传递 manifest.json 的相对路径，比如：

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

这会返回正确的 URL，不受应用运行的浏览器影响。

### 通配符

`web_accessible_resources` 中的条目还可以有通配符。比如，下面的条目匹配“images/my-image.png”：

```json
  "web_accessible_resources": ["images/*.png"]
```

### 安全

注意，如果你部署了一个页面，那么任一网页可能会链接或重定向至该页面，因而它应认为任意输入（比如 POST data）的来源不可信任，这与通常网页的做法一样。

## Example

```json
"web_accessible_resources": ["images/my-image.png"]
```

Make the file at "images/my-image.png" web accessible.

## Browser compatibility

{{Compat}}

---
title: 实现一个设置页面
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
---

{{AddonSidebar}}

设置页面可以让用户查看，修改扩展的一些设置。

对于 WebExtensions，设置通常使用 [`storage`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/storage) API 保存。实现一个设置页面通常包含以下三步：

- 制作一个 HTML 文件用以显示并修改设置
- 写一个包含于该 HTML 文件的脚本，其可以使设置页面存储与存储设备中并在用户修改后更新他。
- 在 manifest.json 文件 [`options_ui`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) 关键字中 设置 HTML 文件的路径。通过这种方式，该 HTML 将会被显示浏览器管理器里该插件名字和描述的旁边。

> **备注：** 你也可以使用 [`runtime.openOptionsPage()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) 打开该页面。

## 简单的 WebExtension

首先，我们写一个向用户访问的所有页面添加一个蓝色边框的扩展。

创建一个新的文件夹命名为“setting”，然后创建文件“manifest.json”它包含以下内容：

```json
{
  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["borderify.js"]
    }
  ]
}
```

该扩展指示浏览器在用户访问的网站上加载一个名为"borderify.js“的 Content Script。

接下来，在"setting"目录下创建"borderify.js"，然后给予他以下内容：

```js
document.body.style.border = "10px solid blue";
```

这只是向网页加入了一一个蓝色边框

现在 [安装该扩展](/zh-CN/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) 并测试它——打开任意一个网页：

{{EmbedYouTube("E-WUhihF8fw")}}

## 添加设置页面

现在让我们创建一个设置页面来允许用户设置边框的颜色。

首先更新 "manifest.json" 使他拥有如下内容：

```json
{
  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["borderify.js"]
    }
  ],

  "options_ui": {
    "page": "options.html"
  },

  "permissions": ["storage"]
}
```

我们加入了两个 manifest 关键字：

- [`options_ui`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui): 设置了一个 HTML 来作为设置页面。
- [`permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): 我们使用 [`storage`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/storage) API 来保存设置，所以我们需要请求权限来使用该 API。

接下来，因为我们承诺提供"options.html"，让我们来创建他，在"setting"目录创建一个该文件并具有以下内容：

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
  </head>

  <body>
    <form>
      <label>Border color<input type="text" id="color" /></label>
      <button type="submit">Save</button>
    </form>

    <script src="options.js"></script>
  </body>
</html>
```

这里定义了一个带有标记文字{{htmlelement("input")}}的 {{htmlelement("form")}} 和一个 提交 {{htmlelement("button")}}. 也包含了一个名为"options.js"的脚本。

仍然在"settting"目录下创建 "options.js"，并给予他以下内容：

```js
function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    color: document.querySelector("#color").value,
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#color").value = result.color || "blue";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("color");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
```

它做了两件事：

- 当网页被加载它使用[`storage.local.get()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get) 从存贮设备中获取了名为"color”的值。如果该值未被设置其为默认值 blue。
- 当用户点击提交按钮，使用[`storage.local.set()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set) 存贮颜色值。

最后，更新"borderify.js" 来读取边框颜色：

> **警告：** 因为 [browser.storage.local.get()](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get) 在火狐 52 版本之前的一个漏洞 ,以下代码没法起作用。为了使它生效，`onGot()` 中的 `item.color` 必须改为 `item[0].color`。

```js
function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  var color = "blue";
  if (item.color) {
    color = item.color;
  }
  document.body.style.border = "10px solid " + color;
}

var getting = browser.storage.local.get("color");
getting.then(onGot, onError);
```

最后，完整的扩展看起来是这样：

```
settings/
    borderify.js
    manifest.json
    options.html
    options.js
```

现在：

- [重新载入扩展](/zh-CN/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on)
- 加载一个网页
- 打开设置页面并修改边框颜色
- 重载网页查看变化。

在火狐中你可以通过访问"about:addons"点击扩展旁边的"Preferences"按钮访问设置页面。

{{EmbedYouTube("ECt9cbWh1qs")}}

## 进一步了解

- [`options_ui`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) 关键字文档
- [`storage`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/storage) API 文档
- 使用[`runtime.openOptionsPage()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) 直接打开你的设置页面
- 另一个设置页面例子：

  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)

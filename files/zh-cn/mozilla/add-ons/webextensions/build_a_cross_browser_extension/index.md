---
title: 构建一个跨浏览器的扩展程序
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
original_slug: Mozilla/Add-ons/WebExtensions/构建一个跨浏览器的扩展插件
page-type: guide
---

{{AddonSidebar()}}

> **Note:** This article discusses building cross-browser extensions for manifest v2. At the time of writing (December 2021), manifest v3 is being introduced by the major browser vendors. Manifest v3 is likely to change the way cross-browser extension development is undertaken. However, work on Manifest v3 is not complete. The major browser vendors are collaborating (with community members) to ease the development of a cross-browser extension in the [W3C WebExtensions Community Group](https://github.com/w3c/webextensions).

浏览器扩展程序 API 的引入为浏览器扩展的开发创造了一个统一的环境。然而，使用扩展程序接口的浏览器（主要是 Chrome、Edge、Firefox、Opera和Safari ）在 API 的实现和覆盖范围方面存在差异。

最大化兼容浏览器扩展意味着至少在两个不同的浏览器上兼容同一个扩展。本文探讨了在创建跨浏览器扩展时所面临的六个主要挑战，并在每种情况下提出了如何应对这些挑战。

## 跨平台扩展的开发障碍

在开发跨平台扩展时，需要注意以下六个方面：

- API 命名空间
- API 异步事件处理
- API 函数覆盖率
- Manifest 的字段
- 扩展打包
- 扩展发布

### API 命名空间

在四大主流浏览器中，有两个 API 命名空间正在使用：

- `browser.*` 是为 Firefox 和 Safari 使用的扩展 API 的标准。
- `chrome.*` 是 Chrome, Opera, Edge.使用的扩展 API 的标准。

Firefox 也支持 `chrome.*` 命名空间的API，用于与Chrome兼容，主要是为了协助[移植]（https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/）。然而，使用 `browser.*` 命名空间是首选。除了作为建议的标准外，`browser.*`还使用 `promises` ——一种处理异步事件的现代便捷机制。

只有在非常小的扩展中，命名空间才可能是唯一的跨平台问题。因此，如果你遇到了且试图专门解决这个问题的话，可能很少会有帮助。最好的方法是通过异步事件处理来解决这个问题。

### API 异步事件处理

在四个主要浏览器中，有两种方法可以处理异步事件：

- Promises 是被 Firefox 和 Safari 使用的扩展 API 的建议标准。
- Callbacks 被 Chrome、Edge 和 Opera 使用。

Firefox 还支持 `chrome.*` 命名空间中的 callbacks 风格的 API。然而，一般建议使用 `promises` （和 `browser.*` 命名空间）， `promises` 已被采纳为建议标准的一部分。它极大地简化了异步事件处理，特别是在你需要将事件串联起来的时候。

> **备注：** 如果你对这两种方法之间的差异不熟悉，可以看一下 [了解异步 JavaScript: Callbacks、Promises 和 Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) 或者 MDN 的 [Using promises](/zh-CN/docs/Web/JavaScript/Guide/Using_promises) 页面。

#### 浏览器扩展 API 的垫片（`Polyfill`）

那么，如何轻松利用 Promise 呢？解决方案是使用 Promise 为 Firefox 编写代码，并使用 [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill/) 来解决 Chrome、Opera 和 Edge 的问题。

这个 `polyfill` 解决了跨 Firefox、Chrome、Opera 和 Edge 的 API 命名空间和异步事件处理。

要使用 `polyfill`，可以使用 npm 将其安装到你的开发环境中，或者直接从 [GitHub releases]（https://github.com/mozilla/webextension-polyfill/releases） 下载。

然后，引入 `browser-polyfill.js` 到：

- `manifest.json`，修改后使它可以用于 `background` 和 `content` 脚本
- HTML 文件，例如 `browserAction` 弹出窗口或标签页
- 使用 `tabs.executeScript` 上的 `executeScript` 动态注入 `content scripts` （不需要事先在 `manifest.json` 的 `content_scripts` 中声明）

例如，这个 `manifest.json` 代码让你的后台脚本可以使用 `polyfill`:

```json
{
 // ...
 "background": {
   "scripts": [
     "browser-polyfill.js",
     "background.js"
   ]
 }
}
```

您的目标是确保在任何其他扩展脚本执行 `browser.*` API 前执行 polyfill。

> **备注：** 关于如何使用模块打包器使用 polyfill 的更多细节和信息，请参阅 [GitHub 上的项目自述文件](https://github.com/mozilla/webextension-polyfill/blob/master/README.md)。

还有其他的 polyfill 选项，但是在撰写本文时，没有一个提供浏览器扩展 API polyfill 的覆盖范围。所以，如果你没有把 Firefox 作为你的首选，你的选择就是接受 polyfills 的限制，移植到 Firefox 并添加跨浏览器的支持，或者开发你自己的 polyfill。

### API 函数覆盖率

这四个主要浏览器提供的 API 函数的实现差异可分为三大类：

1. **缺乏对整个功能的支持。**
   例如，在撰写本文时，Edge 没有提供对 {{WebExtAPIRef("browserSettings")}} 功能的支持。
2. **对一个功能内的特征支持的差异。**
   例如，在撰写本文时，Firefox 不支持通知功能方法 {{WebExtAPIRef("notifications.onButtonClicked")}}，而 Firefox 是唯一支持 {{WebExtAPIRef("notifications.onShown")}} 的浏览器。
3. **专有功能，支持特定于浏览器的特性。**
例如，在撰写本文时，容器是由 {{WebExtAPIRef("contextualIdentities")}} 函数支持的 Firefox 特有功能。

关于主要浏览器和 Android 版 Firefox 以及 iOS 版 Safari 对扩展 API 的支持，可以在 Mozilla 开发者网络（MDN）[浏览器对 JavaScript APIs 的支持](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)页面找到。在 Mozilla 开发者网络（MDN）[JavaScript APIs](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API) 参考页面中，每个函数及其方法、类型和事件也都包含了浏览器兼容性信息。

#### 处理 API 差异

解决这些差异的一个简单方法是将扩展中使用的函数限制在没有 API 差异的函数范围内。在实践中，对于大多数扩展，这种方法可能限制性太强。

相反，如果 API 之间存在差异，则应该提供替代实现或降级功能。(请记住：您可能还需要这样考虑同一浏览器的不同版本之间的 API 支持差异。)

使用运行时检查函数特性的可用性是实现备选或降级功能的推荐方法。执行运行时检查的好处是，如果函数是可用的，您不需要更新和重新分发扩展来使用它。

下面的代码使您能够执行运行时检查：

```js
if (typeof fn === "function") {
  // safe to use the function
}
```

### Manifest 字段

4 个主要浏览器支持的 [`manifest.json`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json) 文件字段的差异大致可分为三类：

1. **扩展信息属性。**
   例如，在撰写本文时，Firefox 和 Opera 包括 [`developer`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility) 键，用于了解扩展的开发者的详细信息。
2. **扩展功能。**
   例如，在撰写本文时，Chrome 不支持 [`browser_specific_settings`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#browser_compatibility) 键。
3. **字段可选性。**例如，在编写本文时，在 Edge 中 [`author`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author#Browser_compatibility) 字段是必需的，但在其他主要浏览器中是可选的。
   在撰写本文时，一般来说，只有 `"manifest_version"、`"version " 和 `"name " 是强制性键。

`manifest.json` 文件在不同浏览器之间的版本号可能有所不同，为每个浏览器创建和编辑一个静态版本号通常是最简单的方法。

As `manifest.json` files tend to change little—except for release numbers, which may differ between the various browsers—creating and editing a static version for each browser is usually the simplest approach.

### 扩展打包

为通过浏览器扩展商店分发扩展而打包是相对简单的。Firefox、Chrome、Edge和Opera都使用一种简单的压缩格式，要求`manifest.json`文件位于压缩包的根部。Safari要求扩展以类似于应用程序的方式进行打包。

关于打包的细节，请参考各自扩展的开发者门户网站上的指导。

### 扩展发布

每个主要的浏览器都维护有浏览器扩展商店。每个商店还对扩展进行审查，以检查安全漏洞。

因此，您需要为每个商店分别添加和更新扩展。在某些情况下，您可以使用一些工具上传扩展。

下表总结了每个商店的做法和特点：

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Registration fee</th>
      <th>Upload utility</th>
      <th>Pre-publication review process</th>
      <th>Account two-factor authentication</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><p>Chrome</p></th>
      <td><p>Yes</p></td>
      <td><p>Yes</p></td>
      <td><p>Automatic, less than an hour</p></td>
      <td><p>Yes</p></td>
    </tr>
    <tr>
      <th><p>Edge</p></th>
      <td><p>No</p></td>
      <td><p>No</p></td>
      <td><p>No SLA provided</p></td>
      <td><p>Yes</p></td>
    </tr>
    <tr>
      <th><p>Firefox</p></th>
      <td><p>No</p></td>
      <td>
        <p>
          <a
            href="https://extensionworkshop.com/documentation/develop/web-ext-command-reference/"
            >web-ext</a
          >
        </p>
      </td>
      <td>
        <p>Automatic, a few seconds.</p>
        <p>
          A manual review of the extension takes place after publication, which
          may result in the extension being suspended where issues that need
          fixing are found.
        </p>
      </td>
      <td><p>Yes</p></td>
    </tr>
    <tr>
      <th><p>Opera</p></th>
      <td><p>No</p></td>
      <td><p>No</p></td>
      <td><p>Manual, no SLA provided</p></td>
      <td><p>No</p></td>
    </tr>
    <tr>
      <th><p>Safari</p></th>
      <td><p>Yes</p></td>
      <td><p>No</p></td>
      <td><p>Yes with, according to Apple, on average, 50% of apps reviewed in 24 hours and over 90% reviewed in 48 hours.</p></td>
      <td><p>Yes</p></td>
    </tr>
  </tbody>
</table>

### 其他考虑

#### 版本号指定

Firefox、Chrome和Edge商店要求每个上传的版本有一个不同的版本号。这意味着，如果你在一个版本中遇到问题，你不能恢复到早期的版本号。

## 总结

在进行跨平台扩展开发时，可以通过对标 Firefox 和使用 [WebExtension API Polyfill](https://github.com/mozilla/webextension-polyfill/) 来解决扩展 API 之间的根本差异。遵循这种方法，您将在使用与提议的 WebExtension API 标准紧密结合的 API 特性中受益，并使用 promises 来简单的处理异步事件。

跨平台工作的主要重点可能是处理主要浏览器支持的 API 特性之间的差异。创建你的 `manifest.json` 文件应该是相对简单的，你可以手动完成。然后，您将需要考虑扩展包中的打包差异，以及提交到每个扩展商店的过程差异。

根据本文中的建议，您现在应该能够创建一个在四种主要浏览器上都运行良好的扩展程序，使您能够将扩展功能交付给更多的人。

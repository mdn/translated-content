---
title: 构建一个跨浏览器的扩展程序
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
---

{{AddonSidebar()}}

浏览器扩展 API 的引入为浏览器扩展的开发创造了“一次开发跨浏览器”的前景。然而，在使用扩展 API 的浏览器中 (主要是 Chrome、Firefox、Opera 和 Edge) ，API 的实现和覆盖范围都存在差异。除此之外，Safari 使用了它自己的 Safari 扩展脚本系统。

最大化兼容浏览器扩展意味着至少在两个不同的浏览器上兼容同一个扩展。本文探讨了在创建跨浏览器扩展时所面临的六个主要挑战，并在每种情况下提出了如何应对这些挑战。

本文不讨论为 Safari 构建浏览器扩展。您可以通过 Safari 扩展共享一些资源，比如图片和 HTML 内容。然而，如果您要进行 JavaScript 部分的编程则需要作为一个单独的开发项目进行，除非您希望创建自己的 polyfill。

## 跨平台扩展的开发障碍

在开发跨平台扩展时，需要注意以下六个方面：

- API 命名空间
- API 异步事件处理
- API 函数覆盖率
- Manifest 的字段
- 打包扩展
- 发布扩展

### API 命名空间

在四大主流浏览器中，有两个 API 命名空间正在使用：

- `browser.*` 是 Firefox 和 Edge 使用的扩展 API 的标准
- `chrome.*` 是 Chrome 和 Opera 使用的扩展 API 的标准

Firefox 也支持 Chrome 浏览器的 `chrome.*` 名称空间，主要用于协助扩展移植。然而，首选应该使用浏览器 `browser.*` 命名空间。除了被提议的标准外， `browser.*` 使用 promises ーー一种现代化且简单的处理异步事件机制。

只有在非常小的扩展中，命名空间才可能是唯一的跨平台问题。因此，如果你遇到了且试图专门解决这个问题的话，可能很少会有帮助。最好的方法是通过异步事件处理来解决这个问题。

### API 异步事件处理

在四个主要浏览器中，有两种方法可以处理异步事件：

- promises 是 Firefox 使用的扩展 API 的标准
- callbacks 是 Chrome、Edge 和 Opera 使用的扩展 API 的标准

Firefox 还支持 `chrome.*` 命名空间中的 callbacks 风格的 API，这主要是为了便于从 Chrome [迁移](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension)。然而，应该首选使用 promises（以及 `browser.*` 命名空间），它已被采纳为拟议标准的一部分。它极大地简化了异步事件处理，特别是在需要将事件链接在一起的情况下。

> **备注：** 如果你对这两种方法之间的差异不熟悉，可以看一下 [了解异步 JavaScript: Callbacks、Promises 和 Async/Await](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) 或者 MDN 的 [Using promises](/zh-CN/docs/Web/JavaScript/Guide/Using_promises) 页面。

#### 浏览器扩展 API 的垫片（Polyfill）

那么，当 Firefox 是唯一支持它的浏览器时，你如何轻松地使用 promises 呢？解决方案是使用 promises 为 Firefox 编程，并使用[浏览器扩展 API 的垫片（Polyfill）](https://github.com/mozilla/webextension-polyfill/)！

这个 polyfill 解决了跨 Firefox、Chrome 和 Opera 的 API 名称空间和异步事件处理。在撰写本报告时 (2018 年 11 月) ，Edge 的支持正在开发中。

要使用 polyfill，可以使用 npm 安装到开发环境中，或者直接从 [GitHub Relase](https://github.com/mozilla/webextension-polyfill/releases) 页面下载。

然后，引入 `browser-polyfill.js` 到：

- `manifest.json`，修改后使它可以用于 background 和 content 脚本
- HTML 文件，例如 `browserAction` 弹出窗口或标签页
- 使用 `tabs.executeScript` 上的 `executeScript` 动态注入脚本（不需要事先在 manifest.json 的 `content_scripts` 中申明

例如，这个 `manifest.json` 代码让你的后台脚本可以使用 polyfill:

```json
{
  // ...
  "background": {
    "scripts": ["browser-polyfill.js", "background.js"]
  }
}
```

您的目标是确保在任何其他扩展脚本执行 `browser.*` API 前执行 polyfill。

> **备注：** 关于如何使用模块打包器使用 polyfill 的更多细节和信息，请参阅 [GitHub 上的项目自述文件](https://github.com/mozilla/webextension-polyfill/blob/master/README.md)。

还有其他的 polyfill 选项，但是在撰写本文时，没有一个提供浏览器扩展 API polyfill 的覆盖范围。所以，如果你没有把 Firefox 作为你的首选，你的选择就是接受 polyfills 的限制，移植到 Firefox 并添加跨浏览器的支持，或者开发你自己的 polyfill。

### API 函数覆盖率

这四个主要浏览器提供的 API 函数的实现差异可分为三大类：

- **缺乏对整个功能的支持。**例如，在撰写本文时，Edge 没有提供对[隐私](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/privacy#Browser_compatibility)功能的支持。
- **缺乏对某些特性的支持。**例如，在撰写本文时，Firefox 不支持 `onButtonClicked`，而只支持 `onShown`。
- **专有功能，支持特定于浏览器的特性。**例如，在撰写本文时，容器是一个特定于 firefox 的特性，由 `contextualidentity` 函数支持。

你可以在 [Mozilla Developer Network 浏览器对 JavaScript API 页面的支持](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)上找到 4 个主要浏览器对扩展 API 的支持细节，以及 Firefox for Android 对扩展 API 的支持细节。浏览器兼容性信息也包含在每个函数及其方法、类型和事件的 Mozilla Developer Network [JavaScript APIs](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API) 参考页面中。

#### 处理 API 差异

解决这些差异的一个简单方法是将扩展中使用的函数限制在没有 API 差异的函数范围内。在实践中，对于大多数扩展，这种方法可能限制性太强。

相反，如果 API 之间存在差异，则应该提供替代实现或降级功能。(请记住：您可能还需要这样考虑同一浏览器的不同版本之间的 API 支持差异。)

使用运行时检查函数特性的可用性是实现备选或降级功能的推荐方法。执行运行时检查的好处是，如果函数是可用的，您不需要更新和重新分发扩展来使用它。

下面的代码使您能够执行运行时检查：

```js
if (typeof <function> === "function") {
   // safe to use the function
}
```

### Manifest 字段

4 个主要浏览器支持的 [`manifest.json`](/zh-CN/docs//zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json) 文件字段的差异大致可分为三类：

- **扩展信息属性。**例如，在撰写本文时，Firefox 和 Opera 包含和 [`author`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author#Browser_compatibility) 地位相等的 [`developer`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#Browser_compatibility) 关键字，以获取扩展的开发者和作者的详细信息。
- **扩展功能。**例如，在编写本文时，Edge 不支持扩展定义快捷键的 [`commands`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#Browser_compatibility) 字段。
- **字段可选性。**例如，在编写本文时，在 Edge 中 [`author`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author#Browser_compatibility) 字段是必需的，但在其他主要浏览器中是可选的。

浏览器兼容性信息包含在 Mozilla Developer Network [`manifest.json`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 页的每个字段中。

`manifest.json` 文件在不同浏览器之间的版本号可能有所不同，为每个浏览器创建和编辑一个静态版本号通常是最简单的方法。

### 扩展打包

通过浏览器扩展商店打包和分发扩展相对简单。

- 火狐、Chrome 和 Opera 都使用简单的 zip 格式打包，同时需要 `manifest.json` 文件位于压缩包的根目录。
- 但是，提交到 Microsoft 扩展商店需要对扩展文件进行额外打包。

有关打包的详细信息，请参阅相应扩展的开发人员门户网站上的指南。

### 扩展发布

这四种主要浏览器都维护有浏览器扩展商店。每个商店还对扩展进行审核，以检查安全漏洞。

因此，您需要为每个商店分别添加和更新扩展。在某些情况下，您可以使用脚本上传扩展。

下表总结了每个商店的做法和特点：

<table>
  <tbody>
    <tr>
      <td></td>
      <td><p>注册费</p></td>
      <td><p>上传模块</p></td>
      <td><p>发布审核</p></td>
      <td><p>开发者账号需要 2FA 验证</p></td>
    </tr>
    <tr>
      <td><p>Firefox</p></td>
      <td><p>否</p></td>
      <td>
        <p>
          <a href="/zh-CN/Add-ons/WebExtensions/web-ext_command_reference"
            >web-ext</a
          >
        </p>
      </td>
      <td>
        <p>全自动，仅需要几秒钟<sup>1</sup></p>
      </td>
      <td><p>否</p></td>
    </tr>
    <tr>
      <td><p>Chrome</p></td>
      <td><p>是</p></td>
      <td><p>是</p></td>
      <td><p>全自动，短于一小时</p></td>
      <td><p>是</p></td>
    </tr>
    <tr>
      <td><p>Opera</p></td>
      <td><p>否</p></td>
      <td><p>否</p></td>
      <td><p>人工审核，但不需要提供 SLA</p></td>
      <td><p>否</p></td>
    </tr>
    <tr>
      <td><p>Edge</p></td>
      <td><p>是</p></td>
      <td><p>否</p></td>
      <td>
        <p>人工审核，需要 72 小时<sup>2</sup></p>
      </td>
      <td><p>是</p></td>
    </tr>
  </tbody>
</table>

<sup>1</sup> 在发布后会延期进行一次人工审查，如果发现了需要解决的问题，可能导致扩展被暂停。

<sup>2</sup> 在撰写本文时，微软只允许发布预先批准的扩展。

### 其他考虑

#### 扩展命名

Microsoft 要求扩展具有唯一的名称，并通过 Windows Dev Center 为扩展声明一个或多个名称。因此，即使您不打算立即支持 Edge，为微软保留一个扩展名可能是最谨慎的做法。

#### 版本号指定

Firefox 和 Chrome 商店要求每个上传的扩展发布包都有一个单独的版本号。这意味着如果在线上遇到问题，就不能恢复到之前的版本号。

#### 在不同的实现中共享资源

即使你要支持的平台中包括 Safari，仍然可以在对于不同浏览器的实现中共享许多资源。其中包括：

- Images
- HTML
- CSS

## 总结

在进行跨平台扩展开发时，可以通过对标 Firefox 和使用 [WebExtension API Polyfill](https://github.com/mozilla/webextension-polyfill/) 来解决扩展 API 之间的根本差异。遵循这种方法，您将在使用与提议的 WebExtension API 标准紧密结合的 API 特性中受益，并使用 promises 来简单的处理异步事件。

跨平台工作的主要重点可能是处理主要浏览器支持的 API 特性之间的差异。创建你的 `manifest.json` 文件应该是相对简单的，你可以手动完成。然后，您将需要考虑扩展包中的打包差异，以及提交到每个扩展商店的过程差异。

您同时可以使用 [browser-extension-template](https://github.com/notlmn/browser-extension-template) 用于快速设置、生成和发布浏览器扩展项目。

根据本文中的建议，您现在应该能够创建一个在四种主要浏览器上都运行良好的扩展程序，使您能够将扩展功能交付给更多的人。

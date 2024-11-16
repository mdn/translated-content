---
title: Navigator：share() 方法
slug: Web/API/Navigator/share
l10n:
  sourceCommit: 91907f1383139ec2bd1d309d02ffac30b4eee757
---

{{APIRef("Web Share API")}}{{securecontext_header}}

{{domxref("Navigator")}} 接口的 **`share()`** 方法调用设备的本机共享机制来共享文本、URL 或文件等数据。可用的*共享目标*取决于设备，但可能包括剪贴板、联系人和电子邮件应用程序、网站、蓝牙等。

该方法用 `undefined` 兑现 {{jsxref("Promise")}}。在 Windows 上，当共享弹出窗口启动时，就会发生这种情况，而在 Android 上，一旦数据成功传递到*共享目标*，promise 就会兑现。

[Web 共享 API](/zh-CN/docs/Web/API/Web_Share_API) 受 [web-share](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/web-share) 权限策略限制。如果支持该权限但尚未授予该权限，则 `share()` 方法将抛出异常。

## 语法

```js-nolint
navigator.share(data)
```

### 参数

- `data` {{optional_inline}}

  - : 包含要共享的数据的对象。

    用户代理未知的属性将被忽略；共享数据仅根据用户代理可识别的属性进行评估。所有属性都是可选的，但必须至少指定一个已知的数据属性。

    可能的值有：

    - `url` {{optional_inline}}
      - : 表示要共享的 URL 的字符串。
    - `text` {{optional_inline}}
      - : 表示要共享的文本的字符串。
    - `title` {{optional_inline}}
      - : 表示要共享的标题的字符串。
    - `files` {{optional_inline}}
      - : 表示要共享的文件的 {{domxref("File")}} 对象数组。有关可共享的文件类型，请参阅[下文](#可分享的文件类型)。

### 返回值

一个兑现为 `undefined` 的 {{jsxref("Promise")}}，或者被下面给出的[异常](#异常)之一拒绝。

### 异常

{{jsxref("Promise")}} 可能会以下列 `DOMException` 值之一被拒绝：

- `InvalidStateError` {{domxref("DOMException")}}
  - : 文档未完全激活，或正在进行其他共享操作。
- `NotAllowedError` {{domxref("DOMException")}}
  - : `web-share` [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)已用于阻止使用此特性，或当前文档不处于{{Glossary("transient activation", "瞬态激活")}}状态，或者出于安全考虑，文件共享被阻止。
- {{jsxref("TypeError")}}
  - : 无法验证指定的共享数据。可能的原因包括：
    - `data` 参数被完全省略或仅包含具有未知值的属性。请注意，用户代理无法识别的任何属性都会被忽略。
    - URL 格式错误。
    - 指定了文件但用户代理实现不支持文件共享。
    - 共享的指定数据将被用户代理视为“恶意共享”。
- `AbortError` {{domxref("DOMException")}}
  - : 用户取消了共享操作或没有可用的共享目标。
- `DataError` {{domxref("DOMException")}}
  - : 启动共享目标或传输数据时出现问题。

## 可分享的文件类型

以下是通常可共享的文件类型的列表。但是，你应该始终使用 {{domxref("navigator.canShare()")}} 方法测试共享是否将会成功。

- 应用
  - `.pdf`——`application/pdf`
- 音频
  - `.flac`——`audio/flac`
  - `.m4a`——`audio/x-m4a`
  - `.mp3`——`audio/mpeg`（也接受 `audio/mp3`）
  - `.oga`——`audio/ogg`
  - `.ogg`——`audio/ogg`
  - `.opus`——`audio/ogg`
  - `.wav`——`audio/wav`
  - `.weba`——`audio/webm`
- 图像
  - `.avif`——`image/avif`
  - `.bmp`——`image/bmp`
  - `.gif`——`image/gif`
  - `.ico`——`image/x-icon`
  - `.jfif`——`image/jpeg`
  - `.jpeg`——`image/jpeg`
  - `.jpg`——`image/jpeg`
  - `.pjp`——`image/jpeg`
  - `.pjpeg`——`image/jpeg`
  - `.png`——`image/png`
  - `.svg`——`image/svg+xml`
  - `.svgz`——`image/svg+xml`
  - `.tif`——`image/tiff`
  - `.tiff`——`image/tiff`
  - `.webp`——`image/webp`
  - `.xbm`——`image/x-xbitmap`
- 文本
  - `.css`——`text/css`
  - `.csv`——`text/csv`
  - `.ehtml`——`text/html`
  - `.htm`——`text/html`
  - `.html`——`text/html`
  - `.shtm`——`text/html`
  - `.shtml`——`text/html`
  - `.text`——`text/plain`
  - `.txt`——`text/plain`
- 视频
  - `.m4v`——`video/mp4`
  - `.mp4`——`video/mp4`
  - `.mpeg`——`video/mpeg`
  - `.mpg`——`video/mpeg`
  - `.ogm`——`video/ogg`
  - `.ogv`——`video/ogg`
  - `.webm`——`video/webm`

## 安全

此方法要求当前文档具有 [web-share](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/web-share) 权限策略和{{Glossary("transient activation", "瞬态激活")}}状态。（它必须由 UI 事件触发，例如单击按钮，并且不能由脚本在任意点启动。）此外，该方法必须指定本机实现的支持共享的有效数据。

## 示例

### 分享一个 URL

下面的示例显示了单击按钮调用 Web 共享 API 来共享 MDN 的 URL。这是取自我们的 [Web 共享测试](https://mdn.github.io/dom-examples/web-share/)（[查看源代码](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)）。

#### HTML

HTML 只是创建一个用于触发共享的按钮，以及一个用于显示测试结果的段落。

```html
<p><button>分享 MDN！</button></p>
<p class="result"></p>
```

#### JavaScript

```js
const shareData = {
  title: "MDN",
  text: "在 MDN 上学习 Web 开发！",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// 分享必须由“用户激活”触发
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN 分享成功";
  } catch (err) {
    resultPara.textContent = `错误：${err}`;
  }
});
```

#### 结果

单击该按钮可在你的平台上启动共享对话框。按钮下方将显示文本，指示共享是否成功或提供错误代码。

{{EmbedLiveSample('分享一个 URL','','','','','','web-share')}}

### 分享文件

要共享文件，请首先测试并调用 {{domxref("navigator.canShare()")}}。然后在对 `navigator.share()` 的调用中包含文件列表。

#### HTML

```html
<div>
  <label for="files">选择要分享的图像：</label>
  <input id="files" type="file" accept="image/*" multiple />
</div>
<button id="share" type="button">分享你的图片！</button>
<output id="output"></output>
```

#### JavaScript

请注意，传递给 `navigator.canShare()` 的数据对象仅包含 `files` 属性，因为 `title` 和 `text` 并不重要。

```js
const input = document.getElementById("files");
const output = document.getElementById("output");

document.getElementById("share").addEventListener("click", async () => {
  const files = input.files;

  if (files.length === 0) {
    output.textContent = "未选择任何文件。";
    return;
  }

  // 检测 navigator.canShare() 特性和检测 navigator.share() 特性是一样的
  if (!navigator.canShare) {
    output.textContent = "您的浏览器不支持 Web 共享 API。";
    return;
  }

  if (navigator.canShare({ files })) {
    try {
      await navigator.share({
        files,
        title: "图像",
        text: "美丽的图像",
      });
      output.textContent = "分享成功！";
    } catch (error) {
      output.textContent = `错误：${error.message}`;
    }
  } else {
    output.textContent = "您的系统不支持共享这些文件。";
  }
});
```

#### 结果

{{EmbedLiveSample('分享文件')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("navigator.canShare()")}}
- <https://wpt.live/web-share/>（Web 平台测试）

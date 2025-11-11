---
title: Navigator：canShare() 方法
slug: Web/API/Navigator/canShare
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Web Share API")}}{{securecontext_header}}

{{domxref("Navigator")}} 接口的 **`canShare()`** 方法在对 {{domxref("navigator.share()")}} 的等效调用能够成功时返回 `true`。

如果数据无法*通过验证*，该方法将返回 `false`。数据可能无效的原因包括：

- `data` 参数已被省略或仅包含具有未知值的属性。请注意，用户代理无法识别的任何属性都会被忽略。
- URL 格式错误。
- 指定了要分享的文件但用户代理实现不支持文件共享。
- 共享了将被用户代理视为“恶意共享”的指定数据。

[Web 共享 API](/zh-CN/docs/Web/API/Web_Share_API) 受 [web-share](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share) 权限策略限制。如果支持该权限但尚未授予，则 `canShare()` 方法将返回 `false`。

## 语法

```js-nolint
canShare()
canShare(data)
```

### 参数

- `data` {{optional_inline}}
  - : 定义要测试的共享数据的对象。

    通常，如果此调用返回 `true`，则具有相同属性的对象将传递给 {{domxref("navigator.share()")}}。用户代理未知的属性将被忽略；共享数据仅根据用户代理理解的属性进行评估。所有属性都是可选的，但必须至少指定一个已知的数据属性，否则该方法将返回 `false`。

    可能的值为：
    - `url` {{optional_inline}}
      - : 表示要共享的 URL 的字符串。
    - `text` {{optional_inline}}
      - : 表示要共享的文本的字符串。
    - `title` {{optional_inline}}
      - : 表示要共享的标题的字符串。
    - `files` {{optional_inline}}
      - : 表示要共享的文件的 {{domxref("File")}} 对象数组。

### 返回值

如果指定的 `data` 参数可以等效成功调用 {{domxref("Navigator.share()")}} 方法，则返回 `true`，否则返回 `false`。

## 示例

### 发送 MDN URL

该示例使用 `navigator.canShare()` 来检查 `navigator.share()` 是否可以共享指定的数据。

#### HTML

HTML 部分只是创建一个段落来显示测试结果。

```html
<p class="result"></p>
```

#### JavaScript

```js
let shareData = {
  title: "MDN",
  text: "在 MDN 上学习 Web 开发！",
  url: "https://developer.mozilla.org",
};

const resultPara = document.querySelector(".result");

if (!navigator.canShare) {
  resultPara.textContent = "不支持 navigator.canShare()。";
} else if (navigator.canShare(shareData)) {
  resultPara.textContent =
    "支持 navigator.canShare()。我们可以使用 navigator.share() 来发送数据。";
} else {
  resultPara.textContent = "指定的数据无法共享。";
}
```

#### 结果

下面的框应说明该浏览器是否支持 `navigator.canShare()`，如果支持，我们是否可以使用 `navigator.share()` 来共享指定的数据：

{{EmbedLiveSample('发送 MDN URL')}}

### 特性检测示例

此方法功能测试特定数据属性是否有效且可共享。如果与单个 `data` 属性一起使用，则仅当该属性有效并且可以在平台上共享时才会返回 `true`。

下面的代码演示了验证数据属性是否受支持。

```js
// 可能不支持的功能
let testShare = { someNewProperty: "要共享的数据" };

// 使用新数据属性的复杂数据
const shareData = {
  title: "MDN",
  text: "在 MDN 上学习 Web 开发！",
  url: "https://developer.mozilla.org",
  someNewProperty: "数据共享",
};

// 共享之前测试新数据属性是否有效且受支持
if (navigator.canShare(testShare)) {
  // 使用 navigator.share() 共享“shareData”
} else {
  // 处理新数据属性无法共享的情况。
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("navigator.share()")}}

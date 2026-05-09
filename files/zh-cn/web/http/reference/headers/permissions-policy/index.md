---
title: Permissions-Policy 标头
short-title: 权限策略
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

{{SeeCompatTable}}

HTTP **`Permissions-Policy`** {{Glossary("response header")}} 提供了一种机制，用于允许或拒绝在文档中或文档内的任何 {{HTMLElement("iframe")}} 元素中使用浏览器特性。

更多信息请参阅主文章 [权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : 要应用允许列表的权限策略指令。允许的指令名称列表请参见下文的[指令](#指令)。
- `<allowlist>`
  - : 允许列表是一个来源列表，在括号中包含的以下一个或多个值，并用空格分隔：
    - `*`（通配符）
      - : 该特性将在本文档和所有嵌套的浏览上下文（`<iframe>`）中被允许，无论其来源如何。
    - `()`（空允许列表）
      - : 该特性在顶层和嵌套浏览上下文中被禁用。这相当于 `<iframe>` `allow` 属性值为 `'none'`。
    - `self`
      - : 该特性将在本文档和同源的嵌套浏览上下文（`<iframe>`）中被允许。该特性不允许在跨源文档的嵌套浏览上下文中使用。`self` 可以看作是 `https://your-site.example.com` 的简写。其等效于 `<iframe>` `allow` 属性值为 `self`。
    - `src`
      - : 该特性将在此 `<iframe>` 中被允许，只要加载到其中的文档与其 {{HTMLElement('iframe','src','#attributes')}} 属性中的 URL 同源。此值仅在 `<iframe>` `allow` 属性中使用，是 `<iframe>` 中*默认*的允许列表值。
    - `"<origin>"`
      - : 该特性允许用于指定特定来源（例如 `"https://a.example.com"`）。来源应以空格分隔。注意，`<iframe>` allow 属性中的来源无需加引号。

    值 `*` 和 `()` 只能单独使用，而 `self` 和 `src` 可以与一个或多个来源组合使用。

    > [!NOTE]
    > 指令有一个默认的允许列表，对于 `Permissions-Policy` HTTP 标头来说，它始终是 `*`、`self` 或 `none` 之一，用于控制未在策略中明确列出时的默认行为。这些在各个[指令参考页面](#指令)中指定。对于 `<iframe>` `allow` 属性，默认行为始终是 `src`。

在支持的情况下，你可以在权限策略来源中使用通配符。这意味着你不必在允许列表中明确指定多个不同的子域名，而是可以通过一个带通配符的源将它们全部包含在内。

所以，与其写

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

你可以写成

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` 不匹配 `"https://example.com"`。

## 指令

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许通过 {{domxref("Accelerometer")}} 接口收集设备加速度的相关信息。

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许通过 {{domxref("AmbientLightSensor")}} 接口收集设备周围环境的光照强度信息。

- {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 {{domxref("Document.ariaNotify", "ariaNotify()")}} 方法触发{{glossary("screen reader", "屏幕阅读器")}}播报。

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{deprecated_inline}}
  - : 控制当前文档是否允许使用 [归因报告 API](/zh-CN/docs/Web/API/Attribution_Reporting_API)。

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许通过 {{domxref("HTMLMediaElement")}} 接口自动播放媒体。当此策略被禁用且没有用户操作时，{{domxref("HTMLMediaElement.play()")}} 返回的 {{jsxref("Promise")}} 将因 `NotAllowedError` {{domxref("DOMException")}} 而被拒绝。{{HTMLElement("audio")}} 和 {{HTMLElement("video")}} 元素上的 autoplay 属性将被忽略。

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : 控制是否允许使用 [Web Bluetooth API](/zh-CN/docs/Web/API/Web_Bluetooth_API)。当此策略被禁用时，{{domxref("Navigator.bluetooth")}} 返回的 {{domxref("Bluetooth")}} 对象的方法将返回 `false` 或使返回的 {{jsxref("Promise")}} 因 `SecurityError` {{domxref("DOMException")}} 而拒绝。

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{deprecated_inline}} {{non-standard_inline}}
  - : 控制对 [Topics API](/zh-CN/docs/Web/API/Topics_API) 的访问。当策略明确禁止使用 Topics API 时，任何调用 {{domxref("Document.browsingTopics()")}} 方法或发送带有 {{httpheader("Sec-Browsing-Topics")}} 标头的请求都将失败并抛出 `NotAllowedError` {{domxref("DOMException")}}。

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : 控制当前文档是否允许使用视频输入设备。如果未授予此权限，{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} 返回的 {{jsxref("Promise")}} 将因 `NotAllowedError` {{domxref("DOMException")}} 而拒绝。

- {{httpheader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{experimental_inline}}
  - : 控制文档是否被允许使用 [Captured Surface Control API](/zh-CN/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)。如果未授予权限，该 API 的主要方法返回的 promise 将因 `NotAllowedError` {{domxref("DOMException")}} 而拒绝。

- {{httpheader('Permissions-Policy/ch-ua-high-entropy-values', 'ch-ua-high-entropy-values')}} {{experimental_inline}}
  - : 控制文档是否被允许使用 {{domxref("NavigatorUAData.getHighEntropyValues()")}} 方法检索高熵用户代理数据。如果未授予此权限，该方法将仅返回 `brands`、`mobile` 和 `platform` 的低熵数据。

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : 控制对 [Compute Pressure API](/zh-CN/docs/Web/API/Compute_Pressure_API) 的访问权限。

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : 控制当前文档是否可以被视为{{domxref("Window.crossOriginIsolated", "跨源隔离", "", 1)}}。

- {{httpheader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : 控制顶级源的 [`fetchLater()` 配额](/zh-CN/docs/Web/API/Fetch_API/Using_Deferred_Fetch#配额)分配。

- {{httpheader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : 控制共享跨源子框架 [`fetchLater()` 配额](/zh-CN/docs/Web/API/Fetch_API/Using_Deferred_Fetch#配额)的分配。

- {{httpheader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : 控制当前文档是否被允许使用 {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} 方法捕获屏幕内容。当此策略被禁用时，如果未获得捕获屏幕内容的权限，`getDisplayMedia()` 返回的 promise 将因 `NotAllowedError` {{domxref("DOMException")}} 而拒绝。

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 [加密媒体扩展 API](/zh-CN/docs/Web/API/Encrypted_Media_Extensions_API) (EME)。当此策略被禁用时，{{domxref("Navigator.requestMediaKeySystemAccess()")}} 返回的 {{jsxref("Promise")}} 将因 `SecurityError` {{domxref("DOMException")}} 而拒绝。

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : 控制当前文档是否允许使用 {{domxref("Element.requestfullscreen()")}}。当此策略被禁用时，返回的 {{jsxref("Promise")}} 将因 {{jsxref("TypeError")}} 而拒绝。

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API)。当此策略被禁用时，调用 {{domxref('Navigator.getGamepads()')}} 将抛出 `SecurityError` {{domxref('DOMException')}}，并且 {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} 和 {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} 事件将不会触发。

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : 控制当前文档是否允许使用 {{domxref('Geolocation')}} 接口。当此策略被禁用时，调用 {{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} 和 {{domxref('Geolocation.watchPosition','watchPosition()')}} 将导致这些函数的回调函数返回 `PERMISSION_DENIED` 的 {{domxref('GeolocationPositionError')}} 错误代码。

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许通过 {{domxref("Gyroscope")}} 接口收集有关设备方向的信息。

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 {{domxref("WebHID API", "WebHID API", "", "nocode")}} 连接非标准或特殊的人机界面设备，如替代键盘或游戏手柄。

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 [联合凭证管理 API (FedCM)](/zh-CN/docs/Web/API/FedCM_API)。

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 {{domxref("Idle Detection API", "空闲检测 API", "", "nocode")}} 检测用户何时正在与设备交互，例如在聊天应用中报告"在线"/"离开"状态。

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : 控制对 [Translator and Language Detector APIs](/zh-CN/docs/Web/API/Translator_and_Language_Detector_APIs) 语言检测功能的访问权限。

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许通过 {{domxref("Window.queryLocalFonts()")}} 方法收集用户本地安装的字体数据（另见 {{domxref("Local Font Access API", "本地字体访问 API", "", "nocode")}}）。

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许通过 {{domxref("Magnetometer")}} 接口收集有关设备方向的信息。

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}
  - : 控制当前文档是否允许使用音频输入设备。当此策略被禁用时，{{domxref("MediaDevices.getUserMedia()")}} 返回的 {{jsxref("Promise")}} 将因 `NotAllowedError` {{domxref("DOMException")}} 而被拒绝。

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 [Web MIDI API](/zh-CN/docs/Web/API/Web_MIDI_API)。当此策略被禁用时，{{domxref("Navigator.requestMIDIAccess()")}} 返回的 {{jsxref("Promise")}} 将因 `SecurityError` {{domxref("DOMException")}} 被拒绝。

- {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{Experimental_Inline}}
  - : 控制对 [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API) 的[设备端语音识别](/zh-CN/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#设备端语音识别)功能的访问权限。

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 [WebOTP API](/zh-CN/docs/Web/API/WebOTP_API) 从应用服务器发送的特殊格式短信中请求一次性密码 (OTP)，即通过 {{domxref("CredentialsContainer.get", "navigator.credentials.get({otp: ..., ...})")}} 实现。

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 [支付请求接口](/zh-CN/docs/Web/API/Payment_Request_API)。当此策略被启用时，{{domxref("PaymentRequest","PaymentRequest()")}} 构造函数将抛出 `SecurityError` {{domxref("DOMException")}}。

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许通过相应的 API 以画中画模式播放视频。

- {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} {{Experimental_Inline}}
  - : 控制[私有状态令牌](/zh-CN/docs/Web/API/Private_State_Token_API) `token-request` 操作的使用。

- {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} {{Experimental_Inline}}
  - : 控制[私有状态令牌](/zh-CN/docs/Web/API/Private_State_Token_API) `token-redemption` 和 `send-redemption-record` 操作的使用。

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 [Web Authentication API](/zh-CN/docs/Web/API/Web_Authentication_API) 创建新的非对称密钥凭证，即通过 {{domxref("CredentialsContainer.create", "navigator.credentials.create({publicKey: ..., ...})")}} 实现。

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : 控制当前文档是否允许使用 [Web Authentication API](/zh-CN/docs/Web/API/Web_Authentication_API) 检索已存储的公钥凭证，即通过 {{domxref("CredentialsContainer.get", "navigator.credentials.get({publicKey: ..., ...})")}}。

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : 控制当前文档是否允许使用 [Screen Wake Lock API](/zh-CN/docs/Web/API/Screen_Wake_Lock_API) 指示设备不应关闭或调暗屏幕。

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 {{domxref("Web Serial API", "Web Serial API", "", "nocode")}} 与串行设备通信，无论是通过串行端口直接连接，还是通过模拟串行端口的 USB 或蓝牙设备连接。

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 [音频输出设备 API](/zh-CN/docs/Web/API/Audio_Output_Devices_API) 列出和选择扬声器。

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : 控制在第三方上下文中加载的文档（即嵌入在 {{htmlelement("iframe")}} 中）是否允许使用 {{domxref("Storage Access API", "存储访问 API", "", "nocode")}} 请求访问未分区的 cookie。

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : 控制对 [Translator and Language Detector APIs](/zh-CN/docs/Web/API/Translator_and_Language_Detector_APIs) 翻译功能的访问权限。

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : 控制对 [Summarizer API](/zh-CN/docs/Web/API/Summarizer_API) 的访问权限。

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 [WebUSB API](/zh-CN/docs/Web/API/WebUSB_API)。

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : 控制当前文档是否允许使用 [Web Share API](/zh-CN/docs/Web/API/Web_Share_API) 的 {{domxref("Navigator.share","Navigator.share()")}} 的方法，将文本、链接、图像和其他内容分享到用户选择的任意目标，例如移动应用。

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : 控制当前文档是否允许使用 [Window Management API](/zh-CN/docs/Web/API/Window_Management_API) 管理多显示器上的窗口。

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : 控制当前文档是否允许使用 [WebXR 设备 API](/zh-CN/docs/Web/API/WebXR_Device_API) 与 WebXR 会话进行交互。

## 示例

### 基础用法

#### Permissions-Policy 标头

要允许所有来源访问地理位置，你可以这样做：

```http
Permissions-Policy: geolocation=*
```

或者要允许一部分来源访问，你可以这样做：

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

可以通过发送带有逗号分隔策略列表的标头，或为每个策略发送单独的标头来同时控制多个特性。

例如，以下两种写法是等效的：

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

要使 `<iframe>` 启用某个特性，其允许的来源也必须在父页面的允许列表中。由于这种[继承行为](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy#嵌入式内容的策略继承)，最好在 HTTP 标头中为特性指定最广泛的可接受支持范围，然后在每个 `<iframe>` 中指定所需的子集。

要允许所有来源访问地理位置，你可以这样做：

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

要应用于当前来源和其他来源，你可以这样做：

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

这一点很重要：默认情况下，如果一个 `<iframe>` 导航到另一个来源，该策略不会应用于 `<iframe>` 导航到的来源。通过在 `allow` 属性中列出 `<iframe>` 导航到的来源，原本应用于原始 `<iframe>` 的权限策略将同样应用于 `<iframe>` 导航到的来源。

可以通过在 `allow` 属性中包含分号分隔的策略指令列表来同时控制多个特性。

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

值得一提的是 `src` 值。我们在上面提到，使用此允许列表值意味着，只要加载到其中的文档与其 {{HTMLElement('iframe','src','#attributes')}} 属性中的 URL 同源，关联的特性将在此 `<iframe>` 中被允许。此值是 `allow` 中列出的特性的*默认*允许列表值，因此以下两种写法是等效的：

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

### 禁用强大特性的访问

SecureCorp Inc. 希望在其应用中禁用麦克风（例如 {{domxref("MediaDevices.getUserMedia()")}}）和 {{domxref("Geolocation")}} API。可以通过以下响应标头实现：

```http
Permissions-Policy: microphone=(), geolocation=()
```

通过为来源列表指定 `()`，无论其来源如何，所有浏览上下文（包括所有 `<iframe>`）中指定的特性都将被禁用。

### 组合 HTTP 标头和 `<iframe>` 策略

例如，假设我们想在自己的来源和来自我们信任的广告网络的嵌入内容中启用地理位置使用。我们可以这样设置页面范围的权限策略：

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

在我们的广告 `<iframe>` 中，我们可以这样设置对 `https://trusted-ad-network.com` 来源的访问权限：

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

如果最终加载到 `<iframe>` 中的是其他来源，则该源将无法访问地理位置信息：

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)
- {{domxref("Document.featurePolicy")}} 和 {{domxref("FeaturePolicy")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}

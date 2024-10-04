---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: 8bb6752a4d3ed3d54ab681636d16602e6bf1d74d
---

{{APIRef("DOM")}}

**`Navigator`** 接口代表了用户代理的状态和身份，它允许脚本对其进行查询并注册自身以便执行某些活动。

可以通过 {{domxref("window.navigator")}} 只读属性获取 `Navigator` 对象。

## 实例属性

_不继承任何属性_。

### 标准属性

- {{domxref("Navigator.bluetooth")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 返回一个当前文档的 {{domxref("Bluetooth")}} 对象，提供对 [web 蓝牙 API](/zh-CN/docs/Web/API/Web_Bluetooth_API) 功能的访问。
- {{domxref("Navigator.clipboard")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : 返回一个用于读写访问系统剪贴板内容的 {{domxref("Clipboard")}} 对象。
- {{domxref("Navigator.connection")}} {{ReadOnlyInline}}
  - : 返回一个包含有关网络连接信息的 {{domxref("NetworkInformation")}} 对象。
- {{domxref("Navigator.contacts")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 返回一个 {{domxref('ContactsManager')}} 接口，允许用户从他们的联系人列表中选择条目，并与网站或应用程序共享所选条目的有限详细信息。
- {{domxref("Navigator.cookieEnabled")}} {{ReadOnlyInline}}
  - : 如果设置 cookie 会被忽略则返回 false，否则返回 true。
- {{domxref("Navigator.credentials")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : 返回 {{domxref("CredentialsContainer")}} 接口，该接口暴露了请求凭据及在成功登录或注销等重要事件发生时通知用户代理的方法。
- {{domxref("Navigator.deviceMemory")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : 返回设备内存的近似值。该值通过向下取整到最接近的 2 的幂，然后将其除以 1024 来近似。
- {{domxref("Navigator.geolocation")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("Geolocation")}} 对象，用于访问设备的位置。
- {{domxref("Navigator.gpu")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 返回当前浏览上下文的 {{domxref("GPU")}} 对象。是 {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}} 的入口点。
- {{domxref("Navigator.hardwareConcurrency")}} {{ReadOnlyInline}}
  - : 返回可用的逻辑处理器核心数量。
- {{domxref("Navigator.hid")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 返回一个 {{domxref("HID")}} 对象，提供用于连接 HID 设备、列出已连接的 HID 设备以及连接的 HID 设备的事件处理程序的方法。
- {{domxref("Navigator.ink")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个当前文档的 {{domxref("Ink")}} 对象，提供对 [Ink API](/zh-CN/docs/Web/API/Ink_API) 功能的访问。
- {{domxref('Navigator.keyboard')}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 返回一个 {{domxref('Keyboard')}} 对象，该对象可用于访问检索键盘布局映射和切换捕捉物理键盘按键的函数。
- {{domxref("Navigator.language")}} {{ReadOnlyInline}}
  - : 返回一个字符串，表示用户的首选语言，通常是浏览器 UI 的语言。如果未知，则返回 `null` 值。
- {{domxref("Navigator.languages")}} {{ReadOnlyInline}}
  - : 返回一个字符串数组，表示用户的首选语言，按优先级排序。
- {{domxref("Navigator.locks")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : 返回一个 {{domxref("LockManager")}} 对象，提供了请求新的 {{domxref('Lock')}} 对象和查询现有的 {{domxref('Lock')}} 对象的方法。
- {{domxref("Navigator.login")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 提供对浏览器 {{domxref("NavigatorLogin")}} 对象的访问权限，联合身份提供程序（IdP）可以使用它在用户登录或退出 IdP 时设置其登录状态。更多详细信息请参阅[联合凭证管理（FedCM）API](/zh-CN/docs/Web/API/FedCM_API)。
- {{domxref("Navigator.maxTouchPoints")}} {{ReadOnlyInline}}
  - : 返回当前设备支持的最大同时触摸接触点数。
- {{domxref("Navigator.mediaCapabilities")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("MediaCapabilities")}} 对象，可以暴露有关给定格式的解码和编码能力。
- {{domxref("Navigator.mediaDevices")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : 返回一个 {{domxref("MediaDevices")}} 对象的引用，可用于获取有关可用媒体设备的信息（{{domxref("MediaDevices.enumerateDevices()")}}）、了解计算机用户和用户代理支持的媒体约束属性（{{domxref("MediaDevices.getSupportedConstraints()")}}）、以及请求访问媒体资源 {{domxref("MediaDevices.getUserMedia()")}}。
- {{domxref("Navigator.mediaSession")}} {{ReadOnlyInline}}
  - : 返回 {{domxref("MediaSession")}} 对象，可用于向浏览器提供有关当前播放媒体的元数据，以便在全局媒体控制 UI 中向用户展示相关信息。
- {{domxref("Navigator.onLine")}} {{ReadOnlyInline}}
  - : 返回浏览器的在线状态。该属性返回一个布尔值。
- {{domxref("Navigator.pdfViewerEnabled")}} {{ReadOnlyInline}}
  - : 如果浏览器在导航到 PDF 文件时可以使用它们，返回 `true`，否则为 `false`。
- {{domxref("Navigator.permissions")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("Permissions")}} 对象，可以用来查询和更新受[权限 API](/zh-CN/docs/Web/API/Permissions_API) 支持的 API 的权限状态。
- {{domxref("Navigator.presentation")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : 返回一个对 {{domxref("Presentation")}} API 的引用。
- {{domxref("Navigator.scheduling")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个当前文档的 {{domxref("Scheduling")}} 对象。
- {{domxref("Navigator.serial")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 返回一个 {{domxref("Serial")}} 对象，代表了进入 {{domxref("Web Serial API")}} 的入口点，用于控制串行端口。
- {{domxref("Navigator.serviceWorker")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : 返回一个 {{domxref("ServiceWorkerContainer")}} 对象，它提供了注册、移除、升级以及与[相关文档](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)的 {{domxref("ServiceWorker")}} 对象进行通信的功能。
- {{domxref("Navigator.storage")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : 返回用于按站点或按应用管理持久化权限及估算可用存储空间的单例 {{domxref('StorageManager')}} 对象。
- {{domxref("Navigator.usb")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : 返回一个当前文档的 {{domxref("USB")}} 对象，提供对 [WebUSB API](/zh-CN/docs/Web/API/WebUSB_API) 功能的访问。
- {{domxref("Navigator.userActivation")}} {{ReadOnlyInline}}
  - : 返回一个包含有关当前窗口用户激活状态的信息的 {{domxref("UserActivation")}} 对象。
- {{domxref("Navigator.userAgent")}} {{ReadOnlyInline}}
  - : 返回当前浏览器的用户代理。
- {{domxref("Navigator.userAgentData")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 返回一个 {{domxref("NavigatorUAData")}} 对象，提供了关于用户浏览器和操作系统的信息。
- {{domxref("Navigator.virtualKeyboard")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 返回一个 {{domxref("VirtualKeyboard")}} API 的引用，以控制屏幕上的虚拟键盘。
- {{domxref("Navigator.wakeLock")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : 返回一个 {{domxref("WakeLock")}} 接口，你可以使用它来请求屏幕唤醒锁并防止屏幕变暗、关闭或显示屏幕保护程序。
- {{domxref("Navigator.webdriver")}} {{ReadOnlyInline}}
  - : 表示用户代理是否受自动化控制。
- {{domxref("Navigator.windowControlsOverlay")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : 返回 {{domxref("WindowControlsOverlay")}} 接口，该接口暴露了桌面渐进式 Web 应用程序标题栏的几何信息，以及在标题栏发生变化时触发的事件。
- {{domxref("Navigator.xr")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 返回 {{domxref("XRSystem")}} 对象，它代表了进入 [WebXR API](/zh-CN/docs/Web/API/WebXR_Device_API) 的入口点。

### 非标准的属性

- {{domxref("Navigator.buildID")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 返回浏览器的构建标识符。在现代浏览器中，为了保护隐私，该属性现在返回一个固定的时间戳，例如 Firefox 64 及更高版本中返回 `20181001000000`。
- {{domxref("Navigator.globalPrivacyControl")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : 返回一个布尔值，表示用户是否同意共享或出售他们的信息。
- {{domxref("Navigator.standalone")}} {{Non-standard_Inline}}
  - : 返回一个布尔值，表示浏览器是否以独立模式运行。仅在 Apple 的 iOS Safari 上可用。

### 已弃用的属性

- {{domxref("Navigator.activeVRDisplays")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 返回一个包含所有当前正在呈现（{{domxref("VRDisplay.ispresenting")}} 为 `true`）的 {{domxref("VRDisplay")}} 对象的数组。
- {{domxref("Navigator.appCodeName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 在任何浏览器中始终返回 `'Mozilla'`。
- {{domxref("Navigator.appName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 在任何浏览器中始终返回 `'Netscape'`。
- {{domxref("Navigator.appVersion")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 返回浏览器版本号字符串。请勿依赖此属性返回正确的值。
- {{domxref("Navigator.doNotTrack")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : 报告用户的请勿追踪设置的首选项的值，当该值为“1”时，你的网站或应用程序不应该跟踪用户。
- {{domxref("Navigator.mimeTypes")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 返回一个 {{domxref("MimeTypeArray")}} 对象，表示浏览器识别和支持的 MIME 类型。
- {{domxref("Navigator.oscpu")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 返回一个表示当前操作系统版本的字符串。
- {{domxref("Navigator.platform")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 返回一个表示浏览器平台的字符串。请勿依赖此函数返回重要值。
- {{domxref("Navigator.plugins")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 返回一个 {{domxref("PluginArray")}} 对象，列出了浏览器中安装的所有插件。
- {{domxref("Navigator.product")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 在任何浏览器中始终返回 `'Gecko'`。
- {{domxref("Navigator.productSub")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 返回字符串 `'20030107'` 或 `'20100101'`。
- {{domxref("Navigator.vendor")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 返回空字符串、`'Apple Computer Inc.'` 或 `'Google Inc.'`。
- {{domxref("Navigator.vendorSub")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 始终返回空字符串。

## 实例方法

_不继承任何方法_。

- {{domxref("Navigator.canShare()")}} {{SecureContext_Inline}}
  - : 如果调用 `Navigator.share()` 成功，则返回 `true`。
- {{domxref("Navigator.clearAppBadge()")}} {{SecureContext_Inline}}
  - : 清除当前应用图标的徽标，并返回一个兑现为 {{jsxref("undefined")}} 的 {{jsxref("Promise")}} 对象。
- {{domxref("Navigator.deprecatedReplaceInURN()")}} {{Experimental_Inline}}
  - : 针对给定的不透明 URN 或 `FencedFrameConfig` 的内部 `url` 属性，在映射 URL 中替换指定字符串。此方法作为临时措施（标记为“已弃用”）提供，以支持对围栏框架 URL 执行此类替换，帮助广告技术提供商将现有的实现迁移到[隐私沙盒](https://developer.google.com/privacy-sandbox) API。
- {{domxref("Navigator.getAutoplayPolicy()")}} {{Experimental_Inline}}
  - : 返回一个值，表示指定的媒体元素、音频上下文或媒体特性“类型”是否允许自动播放。
- {{domxref("Navigator.getBattery()")}} {{SecureContext_Inline}}
  - : 返回一个 promise，兑现为一个 {{domxref("BatteryManager")}} 对象，返回有关电池充电状态的信息。
- {{domxref("Navigator.getGamepads()")}}
  - : 返回一个 {{domxref("Gamepad")}} 数组对象，对应每一个设备上连接的手柄。
- {{domxref("Navigator.getInstalledRelatedApps()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 返回一个 promise，当敲定时会提供一个对象数组，这些对象代表着用户已安装的任何相关原生应用或[渐进式 Web 应用（PWA）](/zh-CN/docs/Web/Progressive_web_apps)的信息。
- {{domxref("Navigator.registerProtocolHandler()")}} {{SecureContext_Inline}}
  - : 允许网站注册自身为特定协议的潜在处理程序。
- {{domxref("Navigator.requestMediaKeySystemAccess()")}} {{SecureContext_Inline}}
  - : 返回一个表示 MediaKeySystemAccess 对象的 {{jsxref("Promise")}}。
- {{domxref("Navigator.requestMIDIAccess()")}} {{SecureContext_Inline}}
  - : 返回一个 {{jsxref('Promise')}} 对象，代表了请求访问用户系统上的 MIDI 设备的操作。
- {{domxref("Navigator.sendBeacon()")}}
  - : 用于通过 {{Glossary("HTTP")}} 协议异步地从用户代理向 Web 服务器传输少量数据。
- {{domxref("Navigator.setAppBadge()")}} {{SecureContext_Inline}}
  - : 在与此应用程序关联的图标上设置徽标，并返回一个兑现为 {{jsxref("undefined")}} 的 {{jsxref("Promise")}} 对象。
- {{domxref("Navigator.share()")}} {{SecureContext_Inline}}
  - : 调用当前平台的原生分享机制。
- {{domxref("Navigator.vibrate()")}}
  - : 在支持振动功能的设备上触发振动。若设备不支持振动功能，则此方法无效。
- {{domxref("Navigator.unregisterProtocolHandler()")}} {{SecureContext_Inline}}
  - : 注销作为指定协议处理程序的网站。

### 已弃用的方法

- {{domxref("Navigator.getUserMedia()")}} {{Deprecated_Inline}} {{SecureContext_Inline}}
  - : 在向用户请求权限后，返回与本地计算机上的摄像头或麦克风关联的音频或视频流。
- {{domxref("Navigator.getVRDisplays()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 返回一个 promise，该 promise 兑现为一个数组中包含了代表连接到计算机的所有可用 VR 设备的 {{domxref("VRDisplay")}} 对象。
- {{domxref("Navigator.javaEnabled()")}} {{Deprecated_Inline}}
  - : 始终返回 false。
- {{domxref("Navigator.taintEnabled()")}} {{Deprecated_Inline}}
  - : 在 JavaScript 1.2 版本中移除了对数据污染/净化函数的支持，其返回值为 `false`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

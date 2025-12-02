---
title: 仅限于安全上下文的特性
slug: Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts
---

本参考列出了仅在安全上下文中可用的 web 平台的特性，有关定义和更多详情，请参阅[安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts)。

## 当前仅在安全上下文中可用的特性

本节列出了根据规范要求仅在安全上下文中提供的 API。

- [异步剪贴板 API](/zh-CN/docs/Web/API/Clipboard)
- [后台同步](https://wicg.github.io/BackgroundSync/spec/)（例如 {{domxref("SyncManager")}}）
- [`Cache-Control: immutable`](/zh-CN/docs/Web/HTTP/Reference/Headers/Cache-Control)
- [凭据管理 API](/zh-CN/docs/Web/API/Credential_Management_API)
- [设备方向 / 设备移动](/zh-CN/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [拾色器 API](/zh-CN/docs/Web/API/EyeDropper)
- [加密媒体扩展](/zh-CN/docs/Web/API/Encrypted_Media_Extensions_API)
- [通用传感器 API](https://w3c.github.io/sensors/)
- {{domxref("Geolocation")}}
- [通知 API](/zh-CN/docs/Web/API/Notifications_API)
- [支付请求 API](/zh-CN/docs/Web/API/Payment_Request_API)
- [演示 API](/zh-CN/docs/Web/API/Presentation_API)
- [推送 API](/zh-CN/docs/Web/API/Push_API)
- [报告 API](/zh-CN/docs/Web/API/Reporting_API)
- [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API)
- [存储 API](/zh-CN/docs/Web/API/Storage_API)
- [Web 验证 API](/zh-CN/docs/Web/API/Web_Authentication_API)
- [Web 蓝牙](/zh-CN/docs/Web/API/Web_Bluetooth_API)
- [Web MIDI](/zh-CN/docs/Web/API/Web_MIDI_API)
- [Web 加密 API](/zh-CN/docs/Web/API/Web_Crypto_API)
- [WebGPU API](/zh-CN/docs/Web/API/WebGPU_API)
- [Web 分享 API](/zh-CN/docs/Web/API/Web_Share_API)

此外，以下方法需要安全上下文（即使相关 API 不需要）：

- [`MediaDevices.getUserMedia()`](/zh-CN/docs/Web/API/MediaDevices/getUserMedia)
- [`Navigator.registerProtocolHandler()`](/zh-CN/docs/Web/API/Navigator/registerProtocolHandler)

## 参见

- [安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts)
- [在 Chrome Platform Status 上搜索“secure context”](https://chromestatus.com/features#secure%20context)

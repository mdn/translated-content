---
title: 设备像素
slug: Glossary/Device_pixel
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

**设备像素**（device pixel）是显示器上能够独立显示完整颜色的最小物理显示单元。它是显示设备（如显示器或手机屏幕）上的最小物理单位，也称为*硬件像素*或*物理像素*。每个设备像素都是组成显示输出的独立点。设备像素是固定的，不会根据视口或 CSS 进行缩放。

设备像素的密度依赖于显示分辨率。_device-pixel-ratio_（设备像素比）是物理设备像素分辨率与 CSS 像素分辨率的比值。设备像素通常不同于 {{glossary("CSS pixel", "CSS 像素")}}，后者定义为 1 CSS 英寸的 1/96 的绝对长度。被认为是高 DPI 的设备在同一物理区域内每个 CSS 像素拥有多个设备像素，而低 DPI 设备的设备像素比则小于 1:1。

## 参见

- CSS {{cssxref("&lt;resolution&gt;")}} 数据类型
- CSS {{cssxref("@media/resolution", "resolution")}} @media 特性
- CSS {{cssxref("image-resolution")}} 属性
- {{domxref("Window.devicePixelRatio")}} API

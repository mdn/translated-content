---
title: 流式传输音频和视频
slug: Web/Media/Guides/Streaming
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

在本指南中，我们将探讨用于在 Web 上流式传输音频和／或视频媒体的技术，以及如何优化你的代码、媒体、服务器和流式传输时使用的选项，以尽可能实现最佳质量和性能。

## 协议

除了服务器和流式传输代码的配置外，有时还可以使用特殊协议来优化性能。

### HTTPS Live Streaming

**HTTPS Live Streaming** （**HLS**）是由 Apple 开发的协议，并在其所有平台的 Safari 上得到支持。HLS 也可能在其他环境中得到支持，尽管在某些情况下这种支持是有条件的。

例如，由于许多网站的移动端特定内容假定移动浏览器支持 HLS，因此 Android 版 Firefox 也支持 HLS，以避免因这一假设不正确而导致出现奇怪的兼容性错误。然而，Firefox 的桌面版本不支持 HLS。

HLS 使用播放列表，允许用户不仅可以选择要流式传输的媒体，还可以在相同媒体的不同版本或形式之间进行选择。例如，HLS 允许服务器流式传输带有多个音频流的视频，用户可以选择收听自己的语言。此外，还可以提供针对不同网络条件优化的流形式。通过这种方式，直播流可以变得灵活且高性能。

截至 2017 年年中，HLS 已被标准化为 {{RFC(8216)}}。

## 参见

- [Web 媒体技术](/zh-CN/docs/Web/Media)
- [Web 媒体类型和格式指南](/zh-CN/docs/Web/Media/Guides/Formats)
- {{HTMLElement("audio")}} 和 {{HTMLElement("video")}}

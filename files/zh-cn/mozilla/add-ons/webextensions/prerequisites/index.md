---
title: 前提条件
slug: Mozilla/Add-ons/WebExtensions/Prerequisites
---

要使用 WebExtension API 进行开发，你需要进行一些最基本的设置。

- 下载、安装和启动 [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) 或者 [Firefox Nightly](https://nightly.mozilla.org/)。如果想要使用最近的更新，请使用 Nightly 版本。
- 调整 Firefox 是否允许你安装未签名附加组件的首选项。需注意，该首选项仅在 Firefox Developer Edition 和 Firefox Nightly 中可用。

  - 在 Firefox 的地址栏中输入 `about:config`
  - 在搜索框中输入 `xpinstall.signatures.required`
  - 双击该首选项，或者右击并选择“切换”，将其设置为 `false`。

---
title: 前提条件
slug: Mozilla/Add-ons/WebExtensions/Prerequisites
tags:
  - firefox signature config
  - firefox webextension config
  - xpi signatures config
translation_of: Mozilla/Add-ons/WebExtensions/Prerequisites
---
<p>要使用 WebExtension API 进行开发，你需要进行一些最基本的设置。</p>

<ul>
 <li>下载、安装和启动 <a href="https://www.mozilla.org/en-US/firefox/developer/">Firefox Developer Edition</a> 或者 <a href="https://nightly.mozilla.org/">Firefox Nightly</a>。如果想要使用最近的更新，请使用 Nightly 版本。</li>
 <li>调整 Firefox 是否允许你安装未签名附加组件的首选项。需注意，该首选项仅在 Firefox Developer Edition 和 Firefox Nightly 中可用。
  <ul>
   <li>在 Firefox 的地址栏中输入 <code>about:config</code></li>
   <li>在搜索框中输入 <code>xpinstall.signatures.required</code></li>
   <li>双击该首选项，或者右击并选择“切换”，将其设置为 <code>false</code>。</li>
  </ul>
 </li>
</ul>

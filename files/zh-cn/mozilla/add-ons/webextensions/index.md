---
title: 浏览器扩展
slug: Mozilla/Add-ons/WebExtensions
tags:
  - WebExtension
  - WebExtensions
  - firefox add-on
  - firefox extensions
  - web-extensions
  - 发布
  - 附加组件
translation_of: Mozilla/Add-ons/WebExtensions
---
<div>{{AddonSidebar}}</div>

<p>Extensions「扩展」 可以扩展和修改一个浏览器的能力。用于 Firefox 的 扩展使用 WebExtensions API 「一种开发扩展的跨浏览器系统」构建。该系统与 Google Chrome、Opera 和 <a href="https://browserext.github.io/browserext/">W3C 草案社区组织</a> 所支持的 <a href="https://developer.chrome.com/extensions">扩展 API </a>在很大程度上兼容。大多数情况下为这些浏览器编写的扩展<a href="/zh-CN/Add-ons/WebExtensions/Porting_from_Google_Chrome">只需少许修改</a>即可在 Firefox 或 <a href="https://developer.microsoft.com/zh-CN/microsoft-edge/platform/documentation/extensions/">Microsoft Edge</a> 中运行。这种 API 与也完全兼容 <a href="/zh-CN/Firefox/Multiprocess_Firefox">多进程 Firefox</a>。</p>

<p>如果你有想法或问题，或者在使用 WebExtensions APIs 迁移旧式附加组件时需要帮助，可以在 <a href="https://mail.mozilla.org/listinfo/dev-addons">dev-addons 邮件列表</a> 或者 <a href="https://wiki.mozilla.org/IRC">IRC</a> 上的 <a href="irc://irc.mozilla.org/extdev">#extdev</a> 与我们联系。</p>

<div class="row topicpage-table">
<div class="section">
<h2 id="新手入门">新手入门</h2>

<ul>
 <li><a href="/zh-CN/Add-ons/WebExtensions/What_are_WebExtensions">什么是扩展?</a></li>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Your_first_WebExtension">你的第一个扩展</a></li>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Your_second_WebExtension">你的第二个扩展</a></li>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Anatomy_of_a_WebExtension">扩展解析</a></li>
 <li>火狐工作流概述</li>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Examples">扩展示例</a></li>
 <li>下一步</li>
</ul>

<h2 id="操作方法">操作方法</h2>

<ul>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests">拦截 HTTP 请求</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page">修改网页</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar">在工具栏添加按钮</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page">制作一个设置页面</a></li>
 <li><a href="/zh-CN//docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard">与剪贴板交互</a></li>
 <li>使用页签API</li>
 <li>使用书签API</li>
</ul>

<h2 id="用户界面">用户界面</h2>

<ul>
 <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface">简介</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action">浏览器工具栏按钮</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions">有弹出面板的浏览器工具栏按钮</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions">地址栏按钮</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups">有弹出面板的地址栏按钮</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items">上下文菜单项</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars">侧边栏</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages">选项页面</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Bundled_web_pages">捆绑网页（Bundled web pages）</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications">通知</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox">地址栏建议</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels">开发者工具面板</a></li>
</ul>

<h2 id="相关概念">相关概念</h2>

<ul>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Using_the_JavaScript_APIs">使用 JavaScript API</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/User_interface_components">用户界面元素</a></li>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Content_scripts">内容脚本</a></li>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Match_patterns">模式匹配</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Working_with_files">处理文件</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization">国际化</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy">内容安全政策</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_messaging">与本地应用通信</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/Add-ons/WebExtensions/User_experience_best_practices">用户体验的最佳实践</a></li>
</ul>

<h2 id="扩展移植">扩展移植</h2>

<ul>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Porting_from_Google_Chrome">移植 Google Chrome 扩展</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Porting_a_legacy_Firefox_add-on">移植传统的 Firefox 附加组件</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions">嵌入式 WebExtensions</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_the_Add-on_SDK">与 Firefox Add-on SDK 的差异</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_XUL_XPCOM_extensions">与 XUL/XPCOM 的差异</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities">与 Chrome 不兼容的地方</a></li>
</ul>

<h2 id="Firefox_工作流">Firefox 工作流</h2>

<ul>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">安装</a></li>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Debugging">调试</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext">开始使用 web-ext</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference">web-ext 命令参考</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID">WebExtensions 与附加组件 ID</a></li>
 <li><a href="https://developer.mozilla.org/zh-CN/Add-ons/WebExtensions/Alternative_distribution_options">其他分发选项</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension">发布你的 WebExtension</a></li>
</ul>
</div>

<div class="section">
<h2 id="参考资料">参考资料</h2>

<h3 id="JavaScript_APIs">JavaScript APIs</h3>

<ul>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API">JavaScript API概况</a></li>
 <li><a href="/zh-CN/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">JavaScript API 浏览器兼容性表格</a></li>
</ul>

<div class="twocolumns">{{ ListSubpages ("/zh-CN/Add-ons/WebExtensions/API") }}</div>

<h3 id="Manifest_关键信息">Manifest 关键信息</h3>

<ul>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json 概览</a></li>
 <li><a href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json">manifest.json 的浏览器兼容性</a></li>
</ul>

<div class="twocolumns">{{ ListSubpages ("/zh-CN/Add-ons/WebExtensions/manifest.json") }}</div>
</div>
</div>

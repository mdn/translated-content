---
title: Clipboard
slug: Web/API/Clipboard
tags:
  - API
  - Clipboard
  - 剪切
  - 剪切板
  - 剪贴板
  - 参考
  - 复制
  - 接口
  - 粘贴
  - 编辑
translation_of: Web/API/Clipboard
---
<div>{{APIRef("Clipboard API")}}</div>

<p><span class="seoSummary"><strong><code>Clipboard</code></strong> 接口实现了 <a href="/zh-CN/docs/Web/API/Clipboard_API">Clipboard API</a>，如果用户授予了相应的权限，就能提供系统剪贴板的读写访问。</span>在 Web 应用程序中，Clipboard API 可用于实现剪切、复制和粘贴功能。</p>

<p>系统剪贴板暴露于全局属性 {{domxref("Navigator.clipboard")}} 之中。</p>

<p>如果用户没有适时使用 <a href="/en-US/docs/Web/API/Permissions_API">Permissions API</a> 授予相应权限和<code>"clipboard-read"</code> 或 <code>"clipboard-write"</code> 权限，调用 <code>Clipboard</code> 对象的方法不会成功。</p>

<div class="note">
<p><strong>注意：</strong>实际上，现在浏览器对于访问剪贴板权限的索取各有不同，在章节 <a href="#剪贴板可用性">剪贴板可用性</a> 查看更多细节。</p>
</div>

<p>所有剪贴板 API 方法都是异步的；它们返回一个 {{jsxref("Promise")}} 对象，在剪贴板访问完成后被执行。如果剪贴板访问被拒绝，promise 也会被拒绝。</p>

<div class="blockIndicator note">
<p><strong>剪贴板 </strong>是用于短期数据储存或转移的数据缓存区，数据转移可以发生在文档和应用程序之间。剪贴板常常实现为一个匿名的、临时的 <a href="https://en.wikipedia.org/wiki/Data_buffer" title="Data buffer">数据缓存</a>，有时也叫做粘贴缓存，可由绝大部分位于已定义编程接口的环境中的程序访问。</p>

<p>一个典型的应用程序常通过将 <a href="https://en.wikipedia.org/wiki/User_input" title="User input">用户输入</a> 如 <a href="https://en.wikipedia.org/wiki/Keybinding" title="Keybinding">组合键</a>, <a href="https://en.wikipedia.org/wiki/Menu_(computing)" title="Menu (computing)">菜单选择</a> 等映射到这些接口来访问剪贴板。</p>
</div>

<h2 id="方法">方法</h2>

<p><em><code>Clipboard</code> 继承自 {{domxref("EventTarget")}} 接口，因此拥有它的方法。</em></p>

<dl>
 <dt>{{domxref("Clipboard.read()","read()")}}</dt>
 <dd>从剪贴板读取数据（比如图片），返回一个 {{jsxref("Promise")}} 对象。When the data has been retrieved, the promise is resolved with a {{domxref("DataTransfer")}} object that provides the data。</dd>
 <dt>{{domxref("Clipboard.readText()","readText()")}}</dt>
 <dd>从操作系统读取文本；returns a <code>Promise</code> which is resolved with a {{domxref("DOMString")}} containing the clipboard's text once it's available。</dd>
 <dt>{{domxref("Clipboard.write()","write()")}}</dt>
 <dd>写入任意数据至操作系统剪贴板。This asynchronous operation signals that it's finished by resolving the returned <code>Promise</code>。</dd>
 <dt>{{domxref("Clipboard.writeText()","writeText()")}}</dt>
 <dd>写入文本至操作系统剪贴板。returning a <code>Promise</code> which is resolved once the text is fully copied into the clipboard。</dd>
</dl>

<h2 id="剪贴板可用性">剪贴板可用性</h2>

<p>异步剪贴板 API 是一个相对较新的 API，浏览器仍在逐渐实现它。由于潜在的安全问题和技术复杂性，大多数浏览器正在逐步集成这个 API。</p>

<p>例如，Firefox 不支持 <code>"clipboard-read"</code> 和 <code>"clipboard-write"</code> 权限，所以使用其他方式访问或改变剪贴板中的内容会受限。</p>

<p>对于浏览器扩展来说，你可以要求 clipboardRead 和 clipboardWrite 权限以使用 clipboard.readText() 和 clipboard.writeText()。但基于 HTTP 的网站中包含的脚本则不能获得剪贴板对象。参考 <a href="https://blog.mozilla.org/addons/2018/08/31/extensions-in-firefox-63/">extensions in Firefox 63</a>。</p>

<p>除此之外, {{domxref("Clipboard.read", "read()")}} 以及{{domxref("Clipboard.write", "write()")}} 是默认禁用且需要修改偏好设置来启用的。在使用之前请先确认浏览器兼容性表格。</p>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">状态</th>
   <th scope="col">备注</th>
  </tr>
  <tr>
   <td>{{SpecName('Clipboard API','#clipboard-interface','Clipboard')}}</td>
   <td>{{Spec2('Clipboard API')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.Clipboard")}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>{{domxref("Document.execCommand()")}}</li>
</ul>
